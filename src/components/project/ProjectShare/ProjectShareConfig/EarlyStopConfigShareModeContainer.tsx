import { ChangeEvent, useCallback } from 'react';
import ProjectEarlyStopConfig, {
	EarlyStopConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectEarlyStopConfig/ProjectEarlyStopConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { IEarlyStopConfig, IProjectConfig } from '../../../../API/project/types';

const ProjectEarlyStopConfigShareModeContainer = ({ earlyStopConfig }: Omit<EarlyStopConfigProps, 'onChange'>) => {
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

export default ProjectEarlyStopConfigShareModeContainer;
