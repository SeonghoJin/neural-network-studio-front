import { BlockConfig, IBlockConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';

type BlockConfigKey = keyof IBlockConfig;

export const configComponentToReactNode = (configComponent: IConfigComponent<IBlockConfig>) => {
	return Object.keys(configComponent).map((key) => {
		return <li key={key}>{configComponent[key as BlockConfigKey]}</li>;
	});
};

export default configComponentToReactNode;
