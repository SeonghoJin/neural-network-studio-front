import React, {
  createContext, useContext, useReducer,
} from 'react';
import ProjectConfig, { IProjectConfig } from '../../../API/project/types';

interface Action {
  type : string
  payLoad : IProjectConfig,
}

const ProjectConfigReducer = (state: IProjectConfig, action : Action) : any => {
  throw new Error(`Unhandled action type: ${action.type}`);
};

const ProjectConfigContext = createContext<IProjectConfig | null>(null);
const ProjectConfigDispatchContext = createContext<any>(null);

export const ProjectConfigProvider = ({ children } : {children : any}) => {
  const [state, dispatch] = useReducer(ProjectConfigReducer, new ProjectConfig());
  return (
    <ProjectConfigContext.Provider value={state}>
      <ProjectConfigDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectConfigDispatchContext.Provider>
    </ProjectConfigContext.Provider>
  );
};

export function useProjectConfigState() {
  const context = useContext(ProjectConfigContext);
  if (!context) {
    throw new Error('Cannot find ElementStateContext');
  }
  return context;
}
