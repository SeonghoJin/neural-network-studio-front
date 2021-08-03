import { useMemo, createElement } from 'react';

import selectorItemHeads, { SelectorMappingViewer } from '..';
import useGetProjectConfigResult from '../../../../hooks/APIResult/project/useGetProjectConfigResult';
import CircleLoading from '../../../utils/Loading/CircularLoading';

type Props = {
	index: keyof typeof selectorItemHeads;
};

const ProjectConfigViewer = ({ index }: Props) => {
	const { error, loading } = useGetProjectConfigResult();

	const element = useMemo(() => {
		return createElement(SelectorMappingViewer[index]);
	}, [index]);

	return <>{error || loading ? <CircleLoading /> : element}</>;
};

export default ProjectConfigViewer;
