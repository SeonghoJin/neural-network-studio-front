import React, { ChangeEvent } from 'react';

import { AddConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: AddConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default AddConfigComponent;
