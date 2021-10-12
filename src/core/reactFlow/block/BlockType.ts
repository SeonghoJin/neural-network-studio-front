export enum BlockType {
	Dense = 'Dense',
	Conv2D = 'Conv2D',
	AveragePooling2D = 'AveragePooling2D',
	MaxPool2D = 'MaxPool2D',
	Activation = 'Activation',
	Input = 'Input',
	Dropout = 'Dropout',
	BatchNormalization = 'BatchNormalization',
	Flatten = 'Flatten',
	Rescaling = 'Rescaling',
	Reshape = 'Reshape',
	// Math
	Abs = 'Abs',
	Ceil = 'Ceil',
	Floor = 'Floor',
	Round = 'Round',
	Sqrt = 'Sqrt',
	Add = 'Add',
	Subtract = 'Subtract',
	Log = 'Log',
}

export default BlockType;
