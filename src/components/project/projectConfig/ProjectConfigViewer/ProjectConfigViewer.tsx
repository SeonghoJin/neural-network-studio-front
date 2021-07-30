import useGetProjectConfigResult from '../../../../hooks/APIResult/useGetProjectConfigResult';
import CircleLoading from '../../../Loading/CircularLoading';
import ProjectGlobalConfigViewer from './ProjectGlobalConfigViewer';
import ProjectOptimizerConfigViewer from './ProjectOptimizerConfigViewer';

type Props = {
	index: number;
};

const ProjectConfigViewer = ({ index }: Props) => {
	const configViewerMap = new Map();
	const { error, loading } = useGetProjectConfigResult();

	configViewerMap.set(0, <ProjectGlobalConfigViewer />);
	configViewerMap.set(1, <ProjectOptimizerConfigViewer />);

	return <>{error || loading ? <CircleLoading /> : configViewerMap.get(index)}</>;
};

export default ProjectConfigViewer;
