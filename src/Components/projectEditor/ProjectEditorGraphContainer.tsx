import {
  ReactFlowProvider,
} from 'react-flow-renderer';
import ProjectEditorGraph from './projectEditorGraph';
import { useSelector } from 'react-redux';
import { RootState } from '../../module';

const ProjectEditorGraphContainer = () => {
  const {data} = useSelector((state: RootState) => state.project);

  return <ReactFlowProvider>
    <ProjectEditorGraph
      flowState={data?.content.flowState}
    />
  </ReactFlowProvider>
}

export default ProjectEditorGraphContainer;
