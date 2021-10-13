import { ChangeEvent, useCallback, useMemo } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import OptimizerConfig, { OptimizerConfigProps } from './ProjectOptimizerConfig';

const OptimizerConfigContainer = ({
	projectConfig,
}: Omit<OptimizerConfigProps, 'onChange' | 'onOptimizerConfigChange'>) => {
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

	const onOptimizerConfigChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...projectConfig,
				optimizer_config: {
					...projectConfig.optimizer_config,
					[name]: value,
				},
			});
		},
		[projectConfig, setProjectConfig]
	);

	return (
		<OptimizerConfig
			projectConfig={projectConfig}
			onChange={onChange}
			onOptimizerConfigChange={onOptimizerConfigChange}
		/>
	);
};

export default OptimizerConfigContainer;
