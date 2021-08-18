import { createReducer } from 'typesafe-actions';
import { ElementActionTypes, ElementState } from './types';
import { ElementAction } from './actions';

const initialState: ElementState = {
	elements: [],
};

const elements = createReducer<ElementState, ElementActionTypes>(initialState, {
	[ElementAction.SET_ELEMENTS]: (state, action) => ({
		elements: action.payload,
	}),
	[ElementAction.SET_ELEMENT_BY_ID_UPDATE_CONFIG]: (state, action) => {
		const { id, key, value } = action.payload;
		return {
			elements: state.elements.map((element) => {
				if (element.id !== id) return element;

				return {
					...element,
					data: {
						...element.data,
						config: {
							...element.data.config,
							[key]: value,
						},
					},
				};
			}),
		};
	},
	[ElementAction.SET_ELEMENT_BY_ID_UPDATE_LABEL]: (state, action) => {
		const { id, label } = action.payload;
		return {
			elements: state.elements.map((element) => {
				if (element.id !== id) return element;

				return {
					...element,
					data: {
						...element.data,
						label,
					},
				};
			}),
		};
	},
	[ElementAction.SET_ELEMENT_BY_ID_UPDATE_POSITION]: (state, action) => {
		const { blockId, position } = action.payload;
		return {
			elements: state.elements.map((element) => {
				if (element.id !== blockId) return element;
				return {
					...element,
					position,
				};
			}),
		};
	},
});

export default elements;
