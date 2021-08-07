import React, { ChangeEvent } from 'react';

import { BatchNormalizationConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import NumberInput from '../../../../Input/NumberInput';
import FloatInput from '../../../../Input/FloatInput';
import { configComponentToReactNode } from './util';
import TextInput from '../../../../Input/TextInput';

type Props = {
	config: BatchNormalizationConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const BatchNormalizationConfigComponent = ({ config, onChange }: Props) => {
	const { axis, epsilon, momentum } = config;

	const configComponent: IConfigComponent<typeof config> = {
		axis: <TextInput propertyName="axis" propertyContent={Number(axis)} onChange={onChange} />,
		epsilon: <TextInput propertyName="epsilon" propertyContent={Number(epsilon)} onChange={onChange} />,
		momentum: <TextInput propertyName="momentum" propertyContent={Number(momentum)} onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default BatchNormalizationConfigComponent;
