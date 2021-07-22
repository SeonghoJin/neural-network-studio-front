import { ElementActionTypes, ElementState } from './types';
import { createReducer } from 'typesafe-actions';
import { ElementAction } from './actions';

const initialState : ElementState = {
  elements : []
};

const elements = createReducer<ElementState, ElementActionTypes>(initialState, {
  [ElementAction.SET_ELEMENTS] : (state, action) => ({
    elements: action.payload
  }),
  [ElementAction.SET_ELEMENT_BY_ID] : (state, action) => {
    const {id, key, value} = action.payload;
    return { elements: state.elements.map((element) => {
      if(element.id != id)return element
      else {
        return {
          ...element,
          data : {
            ...element.data,
            config : {
              ...element.data.config,
              [key]: value,
            }
          }
        }
      }
    })
  }}
})

export default elements;
