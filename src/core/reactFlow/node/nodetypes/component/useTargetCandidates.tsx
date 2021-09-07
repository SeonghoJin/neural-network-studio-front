import { Node, isEdge, useStoreState } from 'react-flow-nns';
import { BlockState } from '../../../block';
import BlockRelationShip from '../../../../Project/settings/BlockRelationShip';

const blockRelationShip = BlockRelationShip;

const useTargetCandidates = () => {
	const selectedElement = useStoreState((state) => {
		const { selectedElements } = state;
		const element = selectedElements && selectedElements[0];
		if (element === null || isEdge(element)) return null;
		return element as Node<BlockState>;
	});

	const type = selectedElement?.data?.type;
	return { targetCandidates: type ? blockRelationShip[type] : null };
};

export default useTargetCandidates;
