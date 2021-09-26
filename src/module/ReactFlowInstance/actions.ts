import { OnLoadParams } from 'react-flow-nns';
import { createStandardAction } from '../../util';

export enum ReactFlowAction {
	GET_REACTFLOW_INSTANCE = 'getReactFlowInstance',
	SET_REACTFLOW_INSTANCE = 'setReactFlowInstance',
}

export const setReactFlowInstance = createStandardAction(ReactFlowAction.SET_REACTFLOW_INSTANCE)<OnLoadParams>();
