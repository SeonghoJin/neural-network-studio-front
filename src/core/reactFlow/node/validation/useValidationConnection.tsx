import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Connection, Elements, FlowElement, isEdge, Node } from 'react-flow-nns';
import { RootState } from '../../../../module';
import { BlockState, BlockType } from '../../block';
import BlockRelationShip from '../../../Project/settings/BlockRelationShip';
import { INPUT_CONNECT_NUMBER, OUTPUT_CONNECT_NUMBER } from '../../../Project/settings/EdgeLimit';

const blockRelationShip = BlockRelationShip;

const satisfyBlockRelationShip = (connection: Connection, elements: Elements) => {
	const source = elements.find((element: FlowElement<BlockState>) => {
		return element.id === connection.source;
	}) as Node<BlockState>;
	if (!source) throw Error(`elements에서 ${connection.source}를 가진 element를 찾을 수 없습니다.`);

	const sourceRelationShip = blockRelationShip[source.data?.type as BlockType];
	console.log(sourceRelationShip);
	const target = elements.find((element: FlowElement<BlockState>) => {
		return element.id === connection.target;
	}) as Node<BlockState>;
	if (!target) throw Error(`elements에서 ${connection.target}를 가진 element를 찾을 수 없습니다.`);

	if (sourceRelationShip.has(target.data?.type as BlockType)) {
		return true;
	}
	return false;
	// throw new Error(`${target.data?.type}과 ${source.data?.type}은 연결 할 수 없습니다.`);
};

const satisfyEdgeLimit = (connection: Connection, elements: Elements) => {
	const source = elements.find((element: FlowElement<BlockState>) => {
		return element.id === connection.source;
	}) as Node<BlockState>;
	if (!source) throw Error(`elements에서 ${connection.source}를 가진 element를 찾을 수 없습니다.`);

	const target = elements.find((element: FlowElement<BlockState>) => {
		return element.id === connection.target;
	}) as Node<BlockState>;
	if (!target) throw Error(`elements에서 ${connection.target}를 가진 element를 찾을 수 없습니다.`);

	const sourceOutPutNumber = OUTPUT_CONNECT_NUMBER[source.data?.type as BlockType];
	const targetInputNumber = INPUT_CONNECT_NUMBER[target.data?.type as BlockType];

	const currentSourceOutPutNumber = elements.filter((element: FlowElement) => {
		if (!isEdge(element)) {
			return false;
		}
		return element.source === source.id;
	}).length;

	const currentTargetInputNumber = elements.filter((element: FlowElement) => {
		if (!isEdge(element)) {
			return false;
		}
		return element.target === target.id;
	}).length;
	console.log(elements, source, target);
	console.log(sourceOutPutNumber, currentSourceOutPutNumber, targetInputNumber, currentTargetInputNumber);
	if (sourceOutPutNumber <= currentSourceOutPutNumber) return false;
	// console.warn(`${source.data?.type}은 Ouput에 최대 ${sourceOutPutNumber}개 까지만 연결할 수 있습니다.`);
	if (targetInputNumber <= currentTargetInputNumber) return false;
	// console.warn(`${target.data?.type}은 Input에 최대 ${targetInputNumber}개 까지만 연결할 수 있습니다.`);
	return true;
};

const useValidationConnection = () => {
	const elements = useSelector((state: RootState) => state.elements.elements);

	const isValidationConnection = useCallback(
		(connection: Connection) => {
			return satisfyBlockRelationShip(connection, elements) && satisfyEdgeLimit(connection, elements);
		},
		[elements]
	);

	return { isValidationConnection };
};

export default useValidationConnection;
