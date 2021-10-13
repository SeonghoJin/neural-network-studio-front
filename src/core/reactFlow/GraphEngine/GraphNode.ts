import { Node } from 'react-flow-nns';
import { BlockCategory, BlockConfig, BlockState, BlockType } from '../block';

class GraphNode {
	category: BlockCategory;

	type: BlockType;

	name: string;

	id: string;

	input: Array<string>;

	output: Array<string>;

	config: BlockConfig;

	constructor(element: Node<BlockState>) {
		const data = element.data as BlockState;
		this.category = data.category;
		this.type = data.type;
		this.name = data.label.replaceAll(' ', '_').toLowerCase();
		this.config = data.config;
		this.id = element.id;
		this.input = Array<string>(0);
		this.output = Array<string>(0);
	}
}

export default GraphNode;
