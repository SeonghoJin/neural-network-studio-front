import { useMemo, createElement } from 'react';

import selectorItemHeads, { SelectorMappingViewer } from '..';
import CircleLoading from '../../../utils/Loading/CircularLoading';
import useProjectConfig from '../../../../hooks/useProjectConfig';

type Props = {
	index: keyof typeof selectorItemHeads;
};

const ProjectConfigViewer = ({ index }: Props) => {
	const { error, loading } = useProjectConfig();

	const element = useMemo(() => {
		return createElement(SelectorMappingViewer[index]);
	}, [index]);

	return <>{error || loading ? <CircleLoading /> : element}</>;
};

export default ProjectConfigViewer;
