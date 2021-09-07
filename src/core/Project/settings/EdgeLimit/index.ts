import { BlockType } from '../../../reactFlow/block/BlockType';

const NONE = 0;
const UNIQUE = 1;
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
};

type OUTPUT_CONNECT_NUMBER_KEY = keyof typeof BlockType;

export const OUTPUT_CONNECT_NUMBER: {
	[K in OUTPUT_CONNECT_NUMBER_KEY]: number;
} = {
	Activation: UNIQUE,
	AveragePooling2D: UNIQUE,
	BatchNormalization: UNIQUE,
	Conv2D: UNIQUE,
	Dropout: UNIQUE,
	Flatten: UNIQUE,
	MaxPool2D: UNIQUE,
	Dense: UNIQUE,
	Input: INFINITY,
};
