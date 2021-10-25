import React, { ChangeEvent } from 'react';

import { BatchNormalizationConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import { configComponentToReactNode } from './util';
import NumberInput from '../../../../Input/NumberInput';

type Props = {
	config: BatchNormalizationConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const BatchNormalizationConfigComponent = ({ config, onChange }: Props) => {
	const { axis, epsilon, momentum } = config;

	const configComponent: IConfigComponent<typeof config> = {
		axis: <NumberInput propertyName="axis" propertyContent={axis} onChange={onChange} />,
		epsilon: <NumberInput propertyName="epsilon" propertyContent={epsilon} onChange={onChange} />,
		momentum: <NumberInput propertyName="momentum" propertyContent={momentum} onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default BatchNormalizationConfigComponent;
