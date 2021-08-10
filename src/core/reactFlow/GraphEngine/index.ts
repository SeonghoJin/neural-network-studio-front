import { Edge, FlowElement } from 'react-flow-renderer';
import Node from './Node';

class GraphConvertor {
	nodes: Node[];

	edges: Edge[];

	constructor() {
		this.nodes = [];
		this.edges = [];
	}

	addEdge = (edge: Edge) => {
		this.edges.push(edge);
	};

	addNode = (node: Node) => {
		this.nodes.push(node);
	};

	toJSON = () => {
		console.log(1);
		console.log(this.nodes, this.edges);
		this.edges.forEach((edge) => {
			const { source } = edge;
			const { target } = edge;
			console.log(2);
			this.nodes.forEach((node: Node) => {
				const newNode = node;
				if (newNode.name === target) {
					newNode.input = source;
				}
				if (newNode.name === source) {
					newNode.output = target;
				}
			});
		});

		const outputNodeName = this.nodes.filter((node) => {
			return node.output === null;
		});
		const inputNodeName = this.nodes.filter((node) => {
			return node.input === null;
		});
		console.log(3);
		return {
			output: outputNodeName[0]?.name || '',
			input: inputNodeName[0]?.name || '',
			layers: [...this.nodes],
		};
	};
}

const graphToLayouts = (graph: FlowElement[]) => {
	const nodesAndEdges = graph.map((element) => {
		return element.data !== undefined ? new Node(element) : element;
	});
	const graphConvertor = new GraphConvertor();
	nodesAndEdges.forEach((element) => {
		console.log(Node.isNode(element));
		if (Node.isNode(element)) {
			graphConvertor.addNode(element);
		} else {
			graphConvertor.addEdge(element as Edge);
		}
	});
	return graphConvertor.toJSON();
};

export default graphToLayouts;
