import { createElement } from 'react';

import CircleLoading from '../../../utils/Loading/CircularLoading';
import useProjectConfig from '../../../../hooks/useProjectConfig';

export type ProjectConfigViewerProps = {
	index: any;
	selectorMappingViewer: any;
};

const ProjectConfigViewer = ({ index, selectorMappingViewer }: ProjectConfigViewerProps) => {
	const { projectConfig, loading } = useProjectConfig();
	if (!(index in selectorMappingViewer)) {
		throw new Error('허용되지 않는 행위입니다.');
	}
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
