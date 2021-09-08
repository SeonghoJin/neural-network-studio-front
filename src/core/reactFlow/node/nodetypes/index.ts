import { BlockCategory } from '../../block';
import LayerNode from './component/LayerNode';

export const nodeTypes = {
	[BlockCategory.Layer]: LayerNode,
	[BlockCategory.Math]: LayerNode,
};

export default nodeTypes;
