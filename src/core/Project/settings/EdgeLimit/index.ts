import { BlockType } from '../../../reactFlow/block/BlockType';

const NONE = 0;
const UNIQUE = 1;
const DOUBLE = 2;
const INFINITY = 100;

type INPUT_CONNECT_NUMBER_KEY = keyof typeof BlockType;

export const INPUT_CONNECT_NUMBER: {
	[K in INPUT_CONNECT_NUMBER_KEY]: number;
} = {
	Activation: UNIQUE,
	AveragePooling2D: UNIQUE,
	BatchNormalization: UNIQUE,
	Conv2D: UNIQUE,
	Dropout: UNIQUE,
	Flatten: UNIQUE,
	MaxPool2D: UNIQUE,
	Dense: UNIQUE,
	Input: NONE,
	Rescaling: UNIQUE,
	Reshape: UNIQUE,

	Abs: UNIQUE,
	Ceil: UNIQUE,
	Floor: UNIQUE,
	Round: UNIQUE,
	Sqrt: UNIQUE,
	Add: DOUBLE,
	Subtract: DOUBLE,
	Log: UNIQUE,
};

type OUTPUT_CONNECT_NUMBER_KEY = keyof typeof BlockType;

export const OUTPUT_CONNECT_NUMBER: {
	[K in OUTPUT_CONNECT_NUMBER_KEY]: number;
} = {
	Activation: INFINITY,
	AveragePooling2D: INFINITY,
	BatchNormalization: INFINITY,
	Conv2D: INFINITY,
	Dropout: INFINITY,
	Flatten: INFINITY,
	MaxPool2D: INFINITY,
	Dense: INFINITY,
	Input: INFINITY,
	Rescaling: INFINITY,
	Reshape: INFINITY,

	Abs: INFINITY,
	Ceil: INFINITY,
	Floor: INFINITY,
	Round: INFINITY,
	Sqrt: INFINITY,
	Add: INFINITY,
	Subtract: INFINITY,
	Log: INFINITY,
};
