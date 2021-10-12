import React, { ChangeEvent } from 'react';

import { CeilConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: CeilConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CeilConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default CeilConfigComponent;
