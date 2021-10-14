import React, { ChangeEvent } from 'react';

import { IConfigComponent, RescalingConfig } from '../../../../../core/reactFlow/block';
import FloatInput from '../../../../Input/FloatInput';
import { configComponentToReactNode } from './util';

type Props = {
	config: RescalingConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RescalingConfigComponent = ({ config, onChange }: Props) => {
	const { scale, offset } = config;

	const configComponent: IConfigComponent<typeof config> = {
		scale: <FloatInput propertyName="scale" propertyContent={scale.toString()} onChange={onChange} />,
		offset: <FloatInput propertyName="offset" propertyContent={offset.toString()} onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default RescalingConfigComponent;
