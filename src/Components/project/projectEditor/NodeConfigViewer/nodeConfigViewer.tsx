import { makeStyles } from '@material-ui/core';
import { BlockState } from '../../../../core/block/BlockState';
import { useDispatch, } from 'react-redux';
import { ChangeEvent, useCallback } from 'react';
import { useStoreState } from 'react-flow-renderer';
import { setElementById } from '../../../../module/Elements';
import TextInput from '../../../Input/TextInput';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  elementHeadWrapper: {
    width: '100%',
    paddingLeft: 20,
    borderBottom: '1px solid #D9DADB',
    textTransform: 'uppercase',
  },
  elementHead: {
    maxWidth: '400',
    textOverflow: 'hidden',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  propertyList: {
  },
});

const NodeConfigViewer = () => {
  const classes = useStyle();
  const selectedElement = useStoreState((state) => {
    const selectedNodes = state.selectedElements;
    const selectedNode = selectedNodes && selectedNodes[0];
    const elements = state.nodes.filter((node) => node.id === selectedNode?.id);
    return elements && elements[0];
    });

  const data : null | BlockState = selectedElement?.data;
  const dispatch = useDispatch();

  const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setElementById({
      id: selectedElement.id,
      key: name,
      value: value,
    }));
  }, [selectedElement])

  if(!selectedElement){
    return <></>
  }

  const configInputs : any[] = [];
  for(const key in data?.config){
    if({}.hasOwnProperty.call(data?.config, key)) {
      configInputs.push(
        <li key={key}>
          <TextInput
            propertyName={key}
            propertyContent={(data?.config as any)[key]}
            onChange={onChange}
          />
        </li>
      )
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.elementHeadWrapper}>
        <h3 className={classes.elementHead}>
          {selectedElement.id}
        </h3>
      </div>
      <ul className={classes.propertyList}>
        {configInputs}
      </ul>
    </div>);
};

export default NodeConfigViewer;
