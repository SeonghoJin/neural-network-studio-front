import { BlockConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

type BlockConfigKey = keyof BlockConfig;

export const configComponentToReactNode = (configComponent: IConfigComponent<BlockConfig>) => {
	return Object.keys(configComponent).map((key) => {
		return <li key={key}>{configComponent[key as BlockConfigKey]}</li>;
	});
};

export default configComponentToReactNode;
