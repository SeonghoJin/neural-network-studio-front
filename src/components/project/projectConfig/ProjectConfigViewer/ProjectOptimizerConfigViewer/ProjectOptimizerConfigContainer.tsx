import { ChangeEvent, useCallback, useMemo } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import OptimizerConfig, { OptimizerConfigProps } from './ProjectOptimizerConfig';

const OptimizerConfigContainer = ({ projectConfig }: Omit<OptimizerConfigProps, 'onChange'>) => {
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

export default OptimizerConfigContainer;
