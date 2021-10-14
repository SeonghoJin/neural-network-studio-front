import React, { ChangeEvent } from 'react';

import { BatchNormalizationConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import { configComponentToReactNode } from './util';
import NumberInput from '../../../../Input/NumberInput';
import FloatInput from '../../../../Input/FloatInput';

type Props = {
	config: BatchNormalizationConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const BatchNormalizationConfigComponent = ({ config, onChange }: Props) => {
	const { axis, epsilon, momentum } = config;

	const configComponent: IConfigComponent<typeof config> = {
		axis: <NumberInput propertyName="axis" propertyContent={axis.toString()} onChange={onChange} />,
		epsilon: <FloatInput propertyName="epsilon" propertyContent={epsilon.toString()} onChange={onChange} />,
		momentum: <FloatInput propertyName="momentum" propertyContent={momentum.toString()} onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default BatchNormalizationConfigComponent;
