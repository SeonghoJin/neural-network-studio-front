import { BlockCategory } from '../../../Project/block';
import LayerNode from './component/LayerNode';

export const nodeTypes = {
	[BlockCategory.Layer]: LayerNode,
};

export default nodeTypes;
