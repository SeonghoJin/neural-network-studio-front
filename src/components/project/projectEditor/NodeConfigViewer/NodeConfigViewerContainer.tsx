import { useDispatch, } from 'react-redux';
import { ChangeEvent, useCallback } from 'react';
import { useStoreState } from 'react-flow-renderer';
import React from 'react';
import NodeConfigViewer from './nodeConfigViewer';
import {
  setElementByIdAndUpdateConfig,
  setElementByIdAndUpdateLabel
} from '../../../../module/Elements';


const NodeConfigViewerContainer = () => {
  const dispatch = useDispatch();

  const selectedElement = useStoreState((state) => {
    const selectedNodes = state.selectedElements;
    const selectedNode = selectedNodes && selectedNodes[0];
    const elements = state.nodes.filter((node) => node.id === selectedNode?.id);
    return elements && elements[0];
  });

  const onChangeConfig = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setElementByIdAndUpdateConfig({
      id: selectedElement.id,
      key: name,
      value: value,
    }));
  }, [selectedElement]);

  const onChangeLabel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setElementByIdAndUpdateLabel({
      id: selectedElement.id,
      label: value,
    }));
  }, [selectedElement])

  return (
    <NodeConfigViewer
      onChangeConfig={onChangeConfig}
      onChangeLabel={onChangeLabel}
      selectedElement={selectedElement}
    />
  )
};

export default NodeConfigViewerContainer;
