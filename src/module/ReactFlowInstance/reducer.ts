import { createReducer } from 'typesafe-actions';
import { ReactFlowInstance, ReactFlowInstanceActionType } from './types';
import { ReactFlowAction } from './actions';

const initialState: ReactFlowInstance = {
	instance: null,
};

const reactFlow = createReducer<ReactFlowInstance, ReactFlowInstanceActionType>(initialState, {
	[ReactFlowAction.GET_REACTFLOW_INSTANCE]: (state) => state,
	[ReactFlowAction.SET_REACTFLOW_INSTANCE]: (state, action) => ({
		...state,
		instance: action.payload,
	}),
});

export default reactFlow;
