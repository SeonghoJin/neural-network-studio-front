import { createElement } from 'react';

import selectorItemHeads, { SelectorMappingViewerType } from '..';
import CircleLoading from '../../../utils/Loading/CircularLoading';
import useProjectConfig from '../../../../hooks/useProjectConfig';

type Props = {
	index: keyof typeof selectorItemHeads;
	selectorMappingViewer: SelectorMappingViewerType;
};

const ProjectConfigViewer = ({ index, selectorMappingViewer }: Props) => {
	const { projectConfig, error, loading } = useProjectConfig();
	return (
		<>
			{loading && <CircleLoading />}
			{projectConfig &&
				createElement(selectorMappingViewer[index], {
					projectConfig,
				})}
		</>
	);
};

export default ProjectConfigViewer;
