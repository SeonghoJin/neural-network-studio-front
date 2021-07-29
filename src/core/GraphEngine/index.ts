import { FlowElement, Edge } from 'react-flow-renderer';
import { BlockCategory, BlockConfig, BlockState, BlockType } from '../block';
class Node{

  static isNode = (obj : any) : obj is Node => {
    if(obj.category === undefined){
      return false;
    }
    return true;
  }

  category: BlockCategory;
  type: BlockType;
  name: string;
  input: string | null = null;
  output: string | null = null;
  config: BlockConfig

  constructor(element: FlowElement) {
    const data = element.data as BlockState;
    this.category = data.category;
    this.type = data.type;
    this.name = element.id;
    this.config = data.config;
  }
}

class GraphConvertor{
  nodes : Node[];
  edges : Edge[];
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addEdge = (edge : Edge) => {
    this.edges.push(edge);
  }

  addNode = (node : Node) => {
    this.nodes.push(node);
  }

  toJSON = () => {

    this.edges.forEach((edge) => {
      const source = edge.source;
      const target = edge.target;
      this.nodes.forEach((node) => {
        if(node.name === target){
          node.input = source;
        }
        if(node.name === source){
          node.output = target;
        }
      });
    });

    const ouputNodeName = this.nodes.filter((node) => {
      return node.output === null;
    });
    const inputNodeName = this.nodes.filter((node) => {
      return node.input === null;
    });
    return {
      output: ouputNodeName[0].name,
      input: inputNodeName[0].name,
      layers: [
        ...this.nodes
      ],
    }
  }
}

const graphToLayouts= (graph: FlowElement[]) => {
  const nodesAndEdges = graph.map((element) => {
    return element.data !== undefined ? new Node(element) : element
  });
  const graphConvertor = new GraphConvertor();
  nodesAndEdges.forEach((element) => {
    if(Node.isNode(element)){
      graphConvertor.addNode(element)
    }else{
      graphConvertor.addEdge(element as Edge);
    }
  });
  return graphConvertor.toJSON();
};

export default graphToLayouts;
