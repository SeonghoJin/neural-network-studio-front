import React, { ChangeEvent } from 'react';

import { SubtractConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

import { configComponentToReactNode } from '../util';

type Props = {
	config: SubtractConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SubtractConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default SubtractConfigComponent;
