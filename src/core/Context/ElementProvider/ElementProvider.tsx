import { FlowElement } from 'react-flow-renderer';
import React, {
  createContext, useContext, useReducer,
} from 'react';

interface Action {
  type : string
  payLoad : FlowElement[],
}

const ElementReducer = (state : FlowElement[], action : Action) : FlowElement[] => {
  if (action.type === 'renew') {
    const newState = (action.payLoad);
    return newState;
  }
  throw new Error(`Unhandled action type: ${action.type}`);
};

const ElementStateContext = createContext<FlowElement[] | null>(null);
const ElementDispatchContext = createContext<any>(null);

export const ReactFlowElementProvider = ({ children } : {children : any}) => {
  const [state, dispatch] = useReducer(ElementReducer, []);
  return (
    <ElementStateContext.Provider value={state}>
      <ElementDispatchContext.Provider value={dispatch}>
        {children}
      </ElementDispatchContext.Provider>
    </ElementStateContext.Provider>
  );
};

export function useElementState() {
  const context = useContext(ElementStateContext);
  if (!context) {
    throw new Error('Cannot find ElementStateContext');
  }
  return context;
}

export function useElementDispatch() {
  const context = useContext(ElementDispatchContext);
  if (!context) {
    throw new Error('Cannot find ElementDispatchContext');
  }
  return context;
}
