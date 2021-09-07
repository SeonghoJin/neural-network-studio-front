import { useDispatch } from 'react-redux';
import { isNode, useStoreState, Node } from 'react-flow-nns';
import { ChangeEvent, useCallback } from 'react';
import { setElementByIdAndUpdateConfig, setElementByIdAndUpdateLabel } from '../../../../module/Elements';
import NodeConfigViewer from '../../projectEditor/NodeConfigViewer/nodeConfigViewer';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { BlockState } from '../../../../core/reactFlow/block';
import { BlockConfigChangeDto } from '../../../../core/Socket/dto/block.config.change.dto';
import { BlockLabelChangeDto } from '../../../../core/Socket/dto/block.label.change.dto';

const NodeConfigShareViewerContainer = () => {
	const dispatch = useDispatch();
	const { socketService } = useSocket();

	const selectedElement: Node<BlockState> | undefined = useStoreState((state) => {
		const selectedNodes = state.selectedElements;
		const selectedNode = selectedNodes && selectedNodes[0];
		const elements = state.nodes.filter((node) => node.id === selectedNode?.id);
		return elements && elements[0];
	});

	const onChangeConfig = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (!isNode(selectedElement)) return;
			const { name, value } = e.target;
			const dto = new BlockConfigChangeDto();
			dto.blockId = selectedElement.id;
			dto.config = {
				name,
				value,
			};
			socketService?.changeBlockConfig(dto);
			dispatch(
				setElementByIdAndUpdateConfig({
					id: selectedElement.id,
					key: name,
					value,
				})
			);
		},
		[dispatch, selectedElement, socketService]
	);

	const onChangeLabel = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			const dto = new BlockLabelChangeDto();
			dto.blockId = selectedElement.id;
			dto.data = value;
			socketService?.changeBlockLabel(dto);
			dispatch(
				setElementByIdAndUpdateLabel({
					id: selectedElement.id,
					label: value,
				})
			);
		},
		[dispatch, selectedElement, socketService]
	);

	return (
		<NodeConfigViewer onChangeConfig={onChangeConfig} onChangeLabel={onChangeLabel} selectedElement={selectedElement} />
	);
};

export default NodeConfigShareViewerContainer;
