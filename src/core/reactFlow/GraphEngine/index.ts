import { Edge, FlowElement, isNode, Node } from 'react-flow-nns';
import GraphNode from './GraphNode';
import { BlockState } from '../block';
import graphNodeNameValidator from './validate';

class GraphConvertor {
	nodes: Map<string, GraphNode>;

	edges: Edge[];

	constructor() {
		this.nodes = new Map<string, GraphNode>();
		this.edges = [];
	}

	addEdge = (edge: Edge) => {
		this.edges.push(edge);
	};

	addNode = (node: GraphNode) => {
		if (!graphNodeNameValidator.test(node.name)) {
			throw new Error(`허용되지 않은 노드 이름이 존재합니다. 수정해주세요. (${node.name})`);
		}
		if (this.nodes.has(node.name)) throw new Error(`중복된 노드 이름이 있습니다. 수정해주세요. (${node.name})`);
		this.nodes.set(node.name, node);
	};

	toJSON = () => {
		this.edges.forEach((edge) => {
			const { source, target } = edge;
			this.nodes.forEach((node: GraphNode) => {
				const newNode = node;
				if (newNode.id === target) {
					newNode.input?.push(source);
				}
				if (newNode.id === source) {
					newNode.output?.push(target);
				}
			});
		});

		const outputNodeName = Array.from(this.nodes)
			.filter(([, node]) => {
				return node.output.length === 0;
			})
			.map(([, node]) => {
				return node;
			});
		const inputNodeName = Array.from(this.nodes)
			.filter(([, node]) => {
				return node.input.length === 0;
			})
			.map(([, node]) => {
				return node;
			});

		if (outputNodeName.length > 1) {
			throw new Error('아웃풋이 여러개가 존재합니다. 아웃풋은 한개만 가능합니다.');
		}

		if (inputNodeName.length > 1) {
			throw new Error('input이 여러개가 존재합니다. 인풋은 한개만 가능합니다.');
		}

		return {
			output: [outputNodeName[0]?.name || ''],
			input: [inputNodeName[0]?.name || ''],
			layers: [...Array.from(this.nodes.values())],
		};
	};
}

const graphToLayouts = (graph: FlowElement[]) => {
	const graphConvertor = new GraphConvertor();
	graph.forEach((element) => {
		if (isNode(element)) {
			graphConvertor.addNode(new GraphNode(element as Node<BlockState>));
		} else {
			graphConvertor.addEdge(element as Edge);
		}
	});
	return graphConvertor.toJSON();
};

export default graphToLayouts;
