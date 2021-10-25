import React, { ChangeEvent } from 'react';

import { Conv2DConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import SliderInput, { Marks } from '../../../../Input/SliderInput';
import SecondDivisionTupleInput from '../../../../Input/SecondDivisionTupleInput';
import SelectInput from '../../../../Input/SelectInput';
import { configComponentToReactNode } from './util';
import { getPaddingValues } from '../../../../../core/Project/Padding';
import NumberInput from '../../../../Input/NumberInput';

type Props = {
	config: Conv2DConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const marks: Marks = [
	{
		value: 32,
		label: 32,
	},
	{
		value: 64,
		label: 64,
	},
	{
		value: 128,
		label: 128,
	},
	{
		value: 256,
		label: 256,
	},
];

const Conv2DConfigComponent = ({ config, onChange }: Props) => {
	const { padding, strides, kernel_size, filters } = config;

	const configComponent: IConfigComponent<typeof config> = {
		filters: <NumberInput onChange={onChange} propertyContent={filters} propertyName="filters" />,
		kernel_size: (
			<SecondDivisionTupleInput onChange={onChange} propertyContent={kernel_size} propertyName="kernel_size" />
		),
		padding: (
			<SelectInput
				onChange={onChange}
				propertyContent={padding}
				propertyName="padding"
				propertyCandidates={getPaddingValues()}
			/>
		),
		strides: (
			<SecondDivisionTupleInput
				canNull
				onChange={onChange}
				propertyContent={strides.toString()}
				propertyName="strides"
			/>
		),
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default Conv2DConfigComponent;
