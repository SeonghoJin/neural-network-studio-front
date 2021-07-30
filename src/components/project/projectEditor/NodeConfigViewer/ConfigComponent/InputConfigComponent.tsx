import React, { ChangeEvent } from 'react';

import { IConfigComponent, InputConfig } from '../../../../../core/block';
import ThirdDivisionTupleInput from '../../../../Input/ThirdDivisionTupleInput';
import { configComponentToReactNode } from './util';

type Props = {
	config: InputConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputConfigComponent = ({ config, onChange }: Props) => {
	const { shape } = config;

	const configComponent: IConfigComponent<typeof config> = {
		shape: <ThirdDivisionTupleInput propertyName="shape" onChange={onChange} propertyContent={shape} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default InputConfigComponent;
