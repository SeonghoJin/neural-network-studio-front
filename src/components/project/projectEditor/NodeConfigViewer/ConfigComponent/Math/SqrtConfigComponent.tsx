import React, { ChangeEvent } from 'react';

import { SqrtConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: SqrtConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SqrtConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default SqrtConfigComponent;
