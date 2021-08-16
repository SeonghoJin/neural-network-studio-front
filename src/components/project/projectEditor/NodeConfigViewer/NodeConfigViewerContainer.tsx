import { useDispatch } from 'react-redux';
import React, { ChangeEvent, useCallback } from 'react';
import { useStoreState } from 'react-flow-renderer';

import NodeConfigViewer from './nodeConfigViewer';
import { setElementByIdAndUpdateConfig, setElementByIdAndUpdateLabel } from '../../../../module/Elements';

const NodeConfigViewerContainer = () => {
	const dispatch = useDispatch();

	const selectedElement = useStoreState((state) => {
		const selectedNodes = state.selectedElements;
		const selectedNode = selectedNodes && selectedNodes[0];
		const elements = state.nodes.filter((node) => node.id === selectedNode?.id);
		return elements && elements[0];
	});

	const onChangeConfig = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			dispatch(
				setElementByIdAndUpdateConfig({
					id: selectedElement.id,
					key: name,
					value,
				})
			);
		},
		[dispatch, selectedElement]
	);

	const onChangeLabel = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			dispatch(
				setElementByIdAndUpdateLabel({
					id: selectedElement.id,
					label: value,
				})
			);
		},
		[dispatch, selectedElement]
	);

	return (
		<NodeConfigViewer onChangeConfig={onChangeConfig} onChangeLabel={onChangeLabel} selectedElement={selectedElement} />
	);
};

export default NodeConfigViewerContainer;
