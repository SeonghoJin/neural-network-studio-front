import { makeStyles } from '@material-ui/core';
import { BlockState } from '../../../../core/block/BlockState';
import { ChangeEventHandler, createElement } from 'react';
import React from 'react';
import {Node} from 'react-flow-renderer'
import ConfigViewerTable from './ConfigViewerTable';
import TextValidationInput from '../../../Input/TextValidationInput';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  elementHeadWrapper: {
    width: '100%',
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

type Props = {
  onChangeConfig: ChangeEventHandler;
  onChangeLabel: ChangeEventHandler
  selectedElement: Node<BlockState> | null
}

const NodeConfigViewer = ({onChangeConfig, onChangeLabel, selectedElement} : Props) => {
  const classes = useStyle();

  if(selectedElement == null){
    return <></>
  }

  const data  = selectedElement.data as BlockState;

  const inputs = createElement(ConfigViewerTable[data.type], {
    config: data.config,
    onChange: onChangeConfig
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.elementHeadWrapper}>
        <TextValidationInput
          propertyName={'label'}
          propertyContent={data.label}
          onChange={onChangeLabel}
        ></TextValidationInput>
      </div>
      <ul className={classes.propertyList}>
        {inputs}
      </ul>
    </div>);
};

export default NodeConfigViewer;
