import { useRouteMatch } from 'react-router-dom';

const useProjectLocation = () => {
	const match = useRouteMatch<{ projectNo: string }>();
	return { projectNo: match.params.projectNo };
};

export default useProjectLocation;
