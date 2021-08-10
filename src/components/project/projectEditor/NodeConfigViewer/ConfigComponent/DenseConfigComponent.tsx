import React, { ChangeEvent } from 'react';

import { DenseConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import NumberInput from '../../../../Input/NumberInput';
import { configComponentToReactNode } from './util';
import TextInput from '../../../../Input/TextInput';

type Props = {
	config: DenseConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DenseConfigComponent = ({ config, onChange }: Props) => {
	const { units } = config;

	const configComponent: IConfigComponent<typeof config> = {
		units: <TextInput propertyName="units" onChange={onChange} propertyContent={units} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default DenseConfigComponent;
