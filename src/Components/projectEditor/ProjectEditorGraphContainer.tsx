import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectEditorGraph from './projectEditorGraph';

const ProjectEditorGraphContainer = () => {
  return <ReactFlowProvider>
    <ProjectEditorGraph/>
  </ReactFlowProvider>
}

export default ProjectEditorGraphContainer;
