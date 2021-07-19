import { FlowElement, Edge } from 'react-flow-renderer';
import { BlockCatergory, BlockConfig, BlockState, BlockType } from '../block/BlockState';

class Node{

  static isNode = (obj : any) : obj is Node => {
    if(obj.catergory === undefined){
      return false;
    }
    return true;
  }

  catergory: BlockCatergory;
  type: BlockType;
  name: string;
  input: string | null = null;
  ouput: string | null = null;
  config: BlockConfig
  constructor(element: FlowElement) {
    const data = element.data as BlockState;
    this.catergory = data.catergory;
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
          node.ouput = target;
        }
      });
    });

    const ouputNodeName = this.nodes.filter((node) => {
      return node.ouput === null;
    });
    const inputNodeName = this.nodes.filter((node) => {
      return node.input === null;
    });
    return {
      output: ouputNodeName[0].name,
      input: inputNodeName[0].name,
      layers: {
        ...this.nodes
      },
    }
  }
}

const convertGraphBeforeRun = (graph: FlowElement[]) => {
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

export default convertGraphBeforeRun;
