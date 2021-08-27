import { useDispatch } from 'react-redux';
import { isNode, useStoreState, Node } from 'react-flow-renderer';
import { ChangeEvent, useCallback } from 'react';
import { setElementByIdAndUpdateConfig, setElementByIdAndUpdateLabel } from '../../../../module/Elements';
import NodeConfigViewer from '../../projectEditor/NodeConfigViewer/nodeConfigViewer';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { BlockChangeDto } from '../../../../core/Socket/dto/block.change.dto';
import { BlockState, blockStates } from '../../../../core/reactFlow/block';

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
			const dto = new BlockChangeDto();
			dto.blockId = selectedElement.id;
			dto.blockState = {
				name,
				value,
			};
			socketService?.changeBlock(dto);
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

export default NodeConfigShareViewerContainer;
