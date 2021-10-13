import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../../../hooks/useProjectConfig';
import { EarlyStopConfig, ProjectConfig } from '../../../../../../API/project/types';
import ProjectEarlyStopConfig, { EarlyStopConfigProps } from './ProjectEarlyStopConfig';

const ProjectEarlyStopConfigContainer = ({ earlyStopConfig }: Omit<EarlyStopConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setProjectConfig((state) => ({
				...(state as ProjectConfig),
				early_stop: {
					...(state?.early_stop as EarlyStopConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig]
	);

	return <ProjectEarlyStopConfig onChange={onChange} earlyStopConfig={earlyStopConfig} />;
};

export default ProjectEarlyStopConfigContainer;
