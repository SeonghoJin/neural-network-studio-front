import React, { ChangeEvent } from 'react';

import { IConfigComponent, ReshapeConfig } from '../../../../../core/reactFlow/block';
import { configComponentToReactNode } from './util';
import ThirdDivisionTupleInput from '../../../../Input/ThirdDivisionTupleInput';

type Props = {
	config: ReshapeConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RescalingConfigComponent = ({ config, onChange }: Props) => {
	const { target_shape } = config;

	const configComponent: IConfigComponent<typeof config> = {
		target_shape: (
			<ThirdDivisionTupleInput
				propertyName="target_shape"
				onChange={onChange}
				propertyContent={target_shape.toString()}
			/>
		),
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default RescalingConfigComponent;
