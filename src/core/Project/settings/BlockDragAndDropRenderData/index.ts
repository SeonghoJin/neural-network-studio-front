import { BlockCategory } from '../../../reactFlow/block/BlockCategory';
import {
	ActivationBlockState,
	AveragePooling2DBlockState,
	BatchNormalizationBlockState,
	BlockState,
	Conv2DBlockState,
	DenseBlockState,
	DropoutBlockState,
	FlattenBlockState,
	InputBlockState,
	MaxPool2DBlockState,
	RescalingBlockState,
	ReshapeBlockState,
} from '../../../reactFlow/block';

export const BlockRenderData: { type: BlockCategory; states: BlockState[] }[] = [
	{
		type: BlockCategory.Layer,
		states: [
			new Conv2DBlockState(),
			new DenseBlockState(),
			new AveragePooling2DBlockState(),
			new MaxPool2DBlockState(),
			new ActivationBlockState(),
			new InputBlockState(),
			new DropoutBlockState(),
			new BatchNormalizationBlockState(),
			new FlattenBlockState(),
			new RescalingBlockState(),
			new ReshapeBlockState(),
		],
	},
];
