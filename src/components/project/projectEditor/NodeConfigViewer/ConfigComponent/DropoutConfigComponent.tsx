import React, { ChangeEvent } from 'react';

import { DropoutConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import SliderInput, { Marks } from '../../../../Input/SliderInput';
import { configComponentToReactNode } from './util';

type Props = {
	config: DropoutConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const marks: Marks = [
	{
		value: 0,
		label: 0,
	},
	{
		value: 1,
		label: 1,
	},
];

const DropoutConfigComponent = ({ config, onChange }: Props) => {
	const { rate } = config;

	const configComponent: IConfigComponent<typeof config> = {
		rate: (
			<SliderInput
				propertyName="rate"
				onChange={onChange}
				propertyContent={Number(rate)}
				max={1}
				min={0}
				step={0.1}
				marks={marks}
			/>
		),
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default DropoutConfigComponent;
