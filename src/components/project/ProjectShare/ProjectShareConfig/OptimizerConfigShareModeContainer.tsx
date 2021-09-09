import { ChangeEvent, useCallback } from 'react';
import OptimizerConfig, {
	OptimizerConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectOptimizerConfigViewer/ProjectOptimizerConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';

const OptimizerConfigShareModeContainer = ({ projectConfig }: Omit<OptimizerConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...projectConfig,
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig]
	);

	return <OptimizerConfig projectConfig={projectConfig} onChange={onChange} />;
};

export default OptimizerConfigShareModeContainer;
