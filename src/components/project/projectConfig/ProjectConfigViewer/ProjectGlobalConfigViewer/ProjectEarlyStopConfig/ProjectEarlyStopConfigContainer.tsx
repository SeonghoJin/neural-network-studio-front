import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../../../hooks/useProjectConfig';
import { IEarlyStopConfig, IProjectConfig } from '../../../../../../API/project/types';
import ProjectEarlyStopConfig, { EarlyStopConfigProps } from './ProjectEarlyStopConfig';

const ProjectEarlyStopConfigContainer = ({ earlyStopConfig }: Omit<EarlyStopConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setProjectConfig((state) => ({
				...(state as IProjectConfig),
				early_stop: {
					...(state?.early_stop as IEarlyStopConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig]
	);

	return <ProjectEarlyStopConfig onChange={onChange} earlyStopConfig={earlyStopConfig} />;
};

export default ProjectEarlyStopConfigContainer;
