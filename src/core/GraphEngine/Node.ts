import { FlowElement } from 'react-flow-renderer';
import { BlockCategory, BlockConfig, BlockState, BlockType } from '../block';

class Node {
	static isNode = (obj: unknown): obj is Node => {
		if (typeof obj === 'object' && obj) {
			if ('category' in obj) {
				return true;
			}
		}

		const node = obj as Node;
		return node.category !== undefined;
	};

	category: BlockCategory;

	type: BlockType;

	name: string;

	input: string | null = null;

	output: string | null = null;

	config: BlockConfig;

	constructor(element: FlowElement) {
		const data = element.data as BlockState;
		this.category = data.category;
		this.type = data.type;
		this.name = element.id;
		this.config = data.config;
	}
}

export default Node;
