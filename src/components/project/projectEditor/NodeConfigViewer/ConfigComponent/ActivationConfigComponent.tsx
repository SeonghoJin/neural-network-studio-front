import React, { ChangeEvent } from 'react';

import { ActivationConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import SelectInput from '../../../../Input/SelectInput';
import { configComponentToReactNode } from './util';
import { getActivationValues } from '../../../../../core/Project/Activations';

type Props = {
	config: ActivationConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ActivationConfigComponent = ({ config, onChange }: Props) => {
	const { activation } = config;

	const configComponent: IConfigComponent<typeof config> = {
		activation: (
			<SelectInput
				propertyName="activation"
				propertyCandidates={getActivationValues()}
				onChange={onChange}
				propertyContent={activation}
			/>
		),
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default ActivationConfigComponent;
