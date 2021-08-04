import { BlockType } from '../../reactFlow/block';

type BlockRelationShipKey = keyof typeof BlockType;

const BlockRelationShip: {
	[K in BlockRelationShipKey]: Set<BlockType>;
} = {
	Activation: new Set<BlockType>([BlockType.Dense, BlockType.Flatten]),
	AveragePooling2D: new Set([]),
	BatchNormalization: new Set([]),
	Conv2D: new Set([BlockType.Activation]),
	Dropout: new Set([]),
	Flatten: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.MaxPool2D,
	]),
	Input: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
	]),
	MaxPool2D: new Set([]),
	Dense: new Set([BlockType.Activation]),
};

export default BlockRelationShip;
