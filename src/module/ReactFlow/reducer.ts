import { ReactFlowActionTypes, ReactFlowState } from './type';
import { createReducer } from 'typesafe-actions';
import { ReactFlowAction } from './actions';
import { BlockState } from '../../core/block/BlockState';

const initialState: ReactFlowState = {
  elements: [],
  position : [0, 0],
  zoom: 1,
  selectedElement: null
}

const reactFlow = createReducer<ReactFlowState, ReactFlowActionTypes>(initialState, {
  [ReactFlowAction.setFlowInstance]: (state, action)=> ({
    ...state,
    ...action.payload
  }),
  [ReactFlowAction.setZoom]: (state, action)=>({
    ...state,
    zoom: action.payload
  }),
  [ReactFlowAction.setPosition]: (state, action) => ({
    ...state,
    position: action.payload
  }),
  [ReactFlowAction.setElments]: (state, action) => ({
    ...state,
    elements: action.payload
  }),
  [ReactFlowAction.flowInstance]: (state) => (state),
  [ReactFlowAction.setSelectedElements]: (state, action) => ({
    ...state,
    selectedElement : action.payload,
  }),
  [ReactFlowAction.updateElementData]: (state, action) => {
    const {key, value, id} = action.payload;
    const newElement = state.elements.map((node) => {
      if(node.id !== id)return node;
      let newConfig = node.data?.config;
      newConfig = {
        ...newConfig,
        [key]: value,
      }
      return {
        ...node,
        data: {
          ...node.data,
          config: newConfig
        }
      }
    });
    return {
      ...state,
      elements: newElement
    }
  }
})

export default reactFlow
