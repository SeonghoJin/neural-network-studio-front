import {
  ReactFlowProvider,
} from 'react-flow-renderer';
import ProjectEditorGraph from './projectEditorGraph';
import { useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useState } from 'react';

const ProjectEditorGraphContainer = () => {
  const {data} = useSelector((state: RootState) => state.api.getProjectResult);
  return(
    <ProjectEditorGraph
      flowState={data?.content.flowState}
    />)
}

export default ProjectEditorGraphContainer;
