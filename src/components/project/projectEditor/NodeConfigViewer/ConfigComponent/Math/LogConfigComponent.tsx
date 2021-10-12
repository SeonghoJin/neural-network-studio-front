import React, { ChangeEvent } from 'react';

import { LogConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: LogConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LogConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default LogConfigComponent;
