import { BlockType } from '../../../reactFlow/block/BlockType';

const UNIQUE = 1;
const INFINITY = 100;

type MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY = keyof typeof BlockType;
export const MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH: {
	[K in MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY]: number;
} = {
	Activation: INFINITY,
	AveragePooling2D: INFINITY,
	BatchNormalization: INFINITY,
	Conv2D: INFINITY,
	Dropout: INFINITY,
	Flatten: INFINITY,
	MaxPool2D: INFINITY,
	Dense: INFINITY,
	Input: UNIQUE,
	Rescaling: INFINITY,
	Reshape: INFINITY,

	Abs: INFINITY,
	Ceil: INFINITY,
	Round: INFINITY,
	Sqrt: INFINITY,
	Add: INFINITY,
	Subtract: INFINITY,
	Log: INFINITY,
};
