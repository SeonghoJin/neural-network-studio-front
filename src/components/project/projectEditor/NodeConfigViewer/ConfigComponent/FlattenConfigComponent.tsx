import React, { ChangeEvent } from 'react';

import { FlattenConfig, IConfigComponent } from '../../../../../core/block';
import { configComponentToReactNode } from './util';

type Props = {
	config: FlattenConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FlattenConfigComponent = ({ config, onChange }: Props) => {
	const configComponent: IConfigComponent<typeof config> = {};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default FlattenConfigComponent;
