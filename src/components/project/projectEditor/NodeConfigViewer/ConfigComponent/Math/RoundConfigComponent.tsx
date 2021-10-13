import React, { ChangeEvent } from 'react';

import { RoundConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: RoundConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RoundConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default RoundConfigComponent;
