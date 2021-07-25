import useGetProjectConfigResult from '../../../../hooks/useGetProjectConfigResult';
import CircleLoading from '../../../Loading/CircularLoading';
import ProjectInfoConfigViewer from './ProjectConfigInfoViewer';
import ProjectGlobalConfigViewer from './ProjectGlobalConfigViewer';
import ProjectOptimizerConfigViewer from './ProjectOptimizerConfigViewer';

interface ProjectConfigViewerProps {
  index: number;
}

const ProjectConfigViewer = (props: ProjectConfigViewerProps) => {

  const configViewerMap = new Map();
  const {index} = props;
  const {error, loading} = useGetProjectConfigResult();

  configViewerMap.set(0, <ProjectInfoConfigViewer/>)
  configViewerMap.set(1, <ProjectGlobalConfigViewer/>)
  configViewerMap.set(2, <ProjectOptimizerConfigViewer/>)

  return (
    <>
      {(error || loading) ? <CircleLoading/> : configViewerMap.get(index)}
    </>
  );
};

export default ProjectConfigViewer;
