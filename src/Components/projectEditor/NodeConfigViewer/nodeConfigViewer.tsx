import { makeStyles } from '@material-ui/core';
import { BlockState } from '../../../core/block/BlockState';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../module';
import { updateElementData } from '../../../module/ReactFlow';
import TextInput from '../../test/BlockConfigureContainer/ConfigureInput/TextInput';
import { useCallback } from 'react';
import { render } from 'react-dom';
import { useElementState } from '../../../core/Context/ElementProvider/ElementProvider';
import { FlowElement } from 'react-flow-renderer';

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
    '& li': {
      borderBottom: '1px solid #D9DADB',
    },
  },
});

const NodeConfigViewer = () => {
  const classes = useStyle();
  const element = useSelector((state: RootState) => {
    const selectedNodes = state.reactFlow.selectedElement;
    const selectedNode = selectedNodes && selectedNodes[0];
    const elements = state.reactFlow.elements.filter((node) => node.id === selectedNode?.id);
    return elements && elements[0];
  });
  const data : null | BlockState = element?.data;
  const dispatch = useDispatch();

  const onChange = useCallback((key, value) => {
    dispatch(updateElementData({
      id: element?.id,
      key: key,
      value: value
    }));
  }, [element?.id])

  if(!element){
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
          {element.id}
        </h3>
      </div>
      <ul className={classes.propertyList}>
        {configInputs}
      </ul>
    </div>);
};

export default NodeConfigViewer;
