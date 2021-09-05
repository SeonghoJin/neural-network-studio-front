import { useMemo, createElement } from 'react';

import selectorItemHeads, { SelectorMappingViewerType } from '..';
import CircleLoading from '../../../utils/Loading/CircularLoading';
import useProjectConfig from '../../../../hooks/useProjectConfig';

type Props = {
	index: keyof typeof selectorItemHeads;
	selectorMappingViewer: SelectorMappingViewerType;
};

const ProjectConfigViewer = ({ index, selectorMappingViewer }: Props) => {
	const { error, loading } = useProjectConfig();

	const element = useMemo(() => {
		return createElement(selectorMappingViewer[index]);
	}, [index, selectorMappingViewer]);

	return <>{error || loading ? <CircleLoading /> : element}</>;
};

export default ProjectConfigViewer;
