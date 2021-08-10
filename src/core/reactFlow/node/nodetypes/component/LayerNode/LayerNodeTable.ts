import { BlockType } from '../../../../block';
import DefaultNode from './DefaultNode';
import InputNode from './inputNode';

type Key = keyof typeof BlockType;
type LayerNodeTableType = {
	[K in Key]: any;
};

const LayerNodeTable: LayerNodeTableType = {
	Activation: DefaultNode,
	AveragePooling2D: DefaultNode,
	BatchNormalization: DefaultNode,
	Conv2D: DefaultNode,
	Dense: DefaultNode,
	Dropout: DefaultNode,
	Flatten: DefaultNode,
	Input: InputNode,
	MaxPool2D: DefaultNode,
};

export default LayerNodeTable;
