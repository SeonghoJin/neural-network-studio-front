import { BlockCategory } from '../../../reactFlow/block/BlockCategory';
import {
	AbsBlockState,
	ActivationBlockState,
	AddBlockState,
	AveragePooling2DBlockState,
	BatchNormalizationBlockState,
	BlockState,
	CeilBlockState,
	Conv2DBlockState,
	DenseBlockState,
	DropoutBlockState,
	FlattenBlockState,
	InputBlockState,
	LogBlockState,
	MaxPool2DBlockState,
	RescalingBlockState,
	ReshapeBlockState,
	RoundBlockState,
	SqrtBlockState,
	SubtractBlockState,
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
	{
		type: BlockCategory.Math,
		states: [
			new AbsBlockState(),
			new CeilBlockState(),
			new RoundBlockState(),
			new SqrtBlockState(),
			new AddBlockState(),
			new SubtractBlockState(),
			new LogBlockState(),
		],
	},
];
