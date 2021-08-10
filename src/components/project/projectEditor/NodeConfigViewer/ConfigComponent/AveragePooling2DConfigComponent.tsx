import React, { ChangeEvent } from 'react';

import { AveragePooling2DConfig, IConfigComponent } from '../../../../../core/reactFlow/block';
import NumberInput from '../../../../Input/NumberInput';
import SecondDivisionTupleInput from '../../../../Input/SecondDivisionTupleInput';
import SelectInput from '../../../../Input/SelectInput';
import { configComponentToReactNode } from './util';
import { getPaddingValues } from '../../../../../core/Project/Padding';
import TextInput from '../../../../Input/TextInput';

type Props = {
	config: AveragePooling2DConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AveragePooling2DConfigComponent = ({ config, onChange }: Props) => {
	const { padding, strides, pool_size } = config;

	const configComponent: IConfigComponent<typeof config> = {
		padding: (
			<SelectInput
				propertyContent={padding}
				propertyName="padding"
				onChange={onChange}
				propertyCandidates={getPaddingValues()}
			/>
		),
		pool_size: <TextInput propertyContent={Number(pool_size)} propertyName="pool_size" onChange={onChange} />,
		strides: <SecondDivisionTupleInput canNull propertyContent={strides} propertyName="strides" onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default AveragePooling2DConfigComponent;
