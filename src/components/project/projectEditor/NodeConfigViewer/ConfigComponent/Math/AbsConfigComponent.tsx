import React, { ChangeEvent } from 'react';

import { AbsConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: AbsConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AbsConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default AbsConfigComponent;
