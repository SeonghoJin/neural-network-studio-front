import React, { ChangeEvent } from 'react';

import { DenseConfig, IConfigComponent } from '../../../../../core/block';
import NumberInput from '../../../../Input/NumberInput';
import { configComponentToReactNode } from './util';

type Props = {
	config: DenseConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DenseConfigComponent = ({ config, onChange }: Props) => {
	const { units } = config;

	const configComponent: IConfigComponent<typeof config> = {
		units: <NumberInput propertyName="units" onChange={onChange} propertyContent={Number(units)} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default DenseConfigComponent;
