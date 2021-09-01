import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Connection, FlowElement, Node } from 'react-flow-nns';
import { RootState } from '../../../../../module';
import { BlockState, BlockType } from '../../../block';
import BlockRelationShip from '../../../../Project/BlockRelationShip';

const blockRelationShip = BlockRelationShip;

const useValidationConnection = () => {
	const elements = useSelector((state: RootState) => state.elements.elements);

	const isValidationConnection = useCallback(
		(connection: Connection) => {
			const source = elements.filter((element: FlowElement<BlockState>) => {
				return element.id === connection.source;
			})[0] as Node<BlockState>;
			if (source == null) throw Error('source는 null이 될 수 없습니다.');
			const sourceRelationShip = blockRelationShip[source.data?.type as BlockType];
			const target = elements.filter((element: FlowElement<BlockState>) => {
				return element.id === connection.target && sourceRelationShip.has(element.data?.type as BlockType);
			});
			return target.length !== 0;
		},
		[elements]
	);

	return { isValidationConnection };
};

export default useValidationConnection;
