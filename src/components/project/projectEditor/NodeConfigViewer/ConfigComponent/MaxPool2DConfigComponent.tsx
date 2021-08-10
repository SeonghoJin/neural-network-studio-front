import React, { ChangeEvent, useMemo } from 'react';
import { IConfigComponent, MaxPool2DConfig } from '../../../../../core/reactFlow/block';
import TextInput from '../../../../Input/TextInput';

import SecondDivisionTupleInput from '../../../../Input/SecondDivisionTupleInput';
import { configComponentToReactNode } from './util';
import SelectInput from '../../../../Input/SelectInput';
import { getPaddingValues } from '../../../../../core/Project/Padding';

type Props = {
	config: MaxPool2DConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MaxPool2DConfigComponent = ({ config, onChange }: Props) => {
	const { pool_size, strides, padding } = config;

	const configComponent: IConfigComponent<typeof config> = useMemo(
		() => ({
			padding: (
				<SelectInput
					onChange={onChange}
					propertyContent={padding}
					propertyName="padding"
					propertyCandidates={getPaddingValues()}
				/>
			),
			pool_size: <SecondDivisionTupleInput propertyName="pool_size" onChange={onChange} propertyContent={pool_size} />,
			strides: (
				<SecondDivisionTupleInput canNull propertyName="strides" onChange={onChange} propertyContent={strides} />
			),
		}),
		[onChange, padding, pool_size, strides]
	);

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default MaxPool2DConfigComponent;
