import { makeStyles } from '@material-ui/core';
import { BlockState } from '../../../../core/block/BlockState';
import { useDispatch, } from 'react-redux';
import { ChangeEvent, createElement, useCallback } from 'react';
import { useStoreState } from 'react-flow-renderer';
import { setElementById } from '../../../../module/Elements';
import React from 'react';
import MaxPool2DConfigComponent from './ConfigComponent/MaxPool2DConfigComponent';
import { BlockType } from '../../../../core/block';
import ActivationConfigComponent from './ConfigComponent/ActivationConfigComponent';

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

type ConfigViewerTableKeyType = typeof BlockType[keyof typeof BlockType];

type ConfigViewerTableType = {
  [index in ConfigViewerTableKeyType]: (props? : any) => JSX.Element;
};

const ConfigViewerTable : ConfigViewerTableType = {
  Custom: MaxPool2DConfigComponent,
  Activation: ActivationConfigComponent,
  AveragePooling2D: MaxPool2DConfigComponent,
  BatchNormalization: MaxPool2DConfigComponent,
  Conv2D: MaxPool2DConfigComponent,
  Dense: MaxPool2DConfigComponent,
  Dropout: MaxPool2DConfigComponent,
  Flatten: MaxPool2DConfigComponent,
  Input: MaxPool2DConfigComponent,
  MaxPool2D: MaxPool2DConfigComponent
}

const NodeConfigViewer = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selectedElement = useStoreState((state) => {
    const selectedNodes = state.selectedElements;
    const selectedNode = selectedNodes && selectedNodes[0];
    const elements = state.nodes.filter((node) => node.id === selectedNode?.id);
    return elements && elements[0];
    });

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

  const data : BlockState = selectedElement.data;

  const inputs = createElement(ConfigViewerTable[data.type], {
    config: data.config,
    onChange: onChange
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.elementHeadWrapper}>
        <h3 className={classes.elementHead}>
          {selectedElement.id}
        </h3>
      </div>
      <ul className={classes.propertyList}>
        {inputs}
      </ul>
    </div>);
};

export default NodeConfigViewer;
