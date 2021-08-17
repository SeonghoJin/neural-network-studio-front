import { Node } from 'react-flow-renderer';
import { BlockCategory, BlockConfig, BlockState, BlockType } from '../block';
import graphNodeNameValidator from './validate';

class GraphNode {
	category: BlockCategory;

	type: BlockType;

	name: string;

	id: string;

	input: string | null = null;

	output: string | null = null;

	config: BlockConfig;

	constructor(element: Node<BlockState>) {
		const data = element.data as BlockState;
		this.category = data.category;
		this.type = data.type;
		this.name = data.label.replaceAll(' ', '_').toLowerCase();
		this.config = data.config;
		this.id = element.id;
	}
}

export default GraphNode;
