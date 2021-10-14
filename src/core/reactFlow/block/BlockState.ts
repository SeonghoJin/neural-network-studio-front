// eslint-disable-next-line max-classes-per-file
import { BlockCategory } from './BlockCategory';
import {
	// Layer
	ActivationConfig,
	AveragePooling2DConfig,
	BatchNormalizationConfig,
	BlockConfig,
	Conv2DConfig,
	DenseConfig,
	DropoutConfig,
	FlattenConfig,
	InputConfig,
	MaxPool2DConfig,
	RescalingConfig,
	ReshapeConfig,
	// Math
	AbsConfig,
	CeilConfig,
	FloorConfig,
	RoundConfig,
	SqrtConfig,
	AddConfig,
	SubtractConfig,
	LogConfig,
	IBlockConfig,
} from './BlockConfig';
import { BlockType } from './BlockType';

export interface BlockState {
	category: BlockCategory;

	type: BlockType;

	param: IBlockConfig;

	label: string;
}

export class DenseBlockState implements BlockState {
	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new DenseConfig();

	type: BlockType = BlockType.Dense;

	label = 'Dense Node';
}

export class Conv2DBlockState implements BlockState {
	category: BlockCategory = BlockCategory.Layer;

	label = 'Conv2D Node';

	param: IBlockConfig = new Conv2DConfig();

	type: BlockType = BlockType.Conv2D;
}

export class AveragePooling2DBlockState implements BlockState {
	label = 'AveragePooling2D Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new AveragePooling2DConfig();

	type: BlockType = BlockType.AveragePooling2D;
}

export class MaxPool2DBlockState implements BlockState {
	label = 'MaxPool2D Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new MaxPool2DConfig();

	type: BlockType = BlockType.MaxPool2D;
}

export class ActivationBlockState implements BlockState {
	label = 'Activation Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new ActivationConfig();

	type: BlockType = BlockType.Activation;
}

export class InputBlockState implements BlockState {
	label = 'Input Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new InputConfig();

	type: BlockType = BlockType.Input;
}

export class DropoutBlockState implements BlockState {
	label = 'Dropout Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new DropoutConfig();

	type: BlockType = BlockType.Dropout;
}

export class BatchNormalizationBlockState implements BlockState {
	label = 'Batch Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new BatchNormalizationConfig();

	type: BlockType = BlockType.BatchNormalization;
}

export class FlattenBlockState implements BlockState {
	label = 'Flatten Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new FlattenConfig();

	type: BlockType = BlockType.Flatten;
}

export class RescalingBlockState implements BlockState {
	label = 'Rescaling Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new RescalingConfig();

	type: BlockType = BlockType.Rescaling;
}

export class ReshapeBlockState implements BlockState {
	label = 'Reshape Node';

	category: BlockCategory = BlockCategory.Layer;

	param: IBlockConfig = new ReshapeConfig();

	type: BlockType = BlockType.Reshape;
}

export class AbsBlockState implements BlockState {
	label = 'Abs';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new AbsConfig();

	type: BlockType = BlockType.Abs;
}

export class CeilBlockState implements BlockState {
	label = 'Ceil';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new CeilConfig();

	type: BlockType = BlockType.Ceil;
}

export class FloorBlockState implements BlockState {
	label = 'Floor';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new FloorConfig();

	type: BlockType = BlockType.Floor;
}

export class RoundBlockState implements BlockState {
	label = 'Round';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new RoundConfig();

	type: BlockType = BlockType.Round;
}

export class SqrtBlockState implements BlockState {
	label = 'Sqrt';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new SqrtConfig();

	type: BlockType = BlockType.Sqrt;
}

export class AddBlockState implements BlockState {
	label = 'Add';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new AddConfig();

	type: BlockType = BlockType.Add;
}

export class SubtractBlockState implements BlockState {
	label = 'Subtract';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new SubtractConfig();

	type: BlockType = BlockType.Subtract;
}

export class LogBlockState implements BlockState {
	label = 'Log';

	category: BlockCategory = BlockCategory.Math;

	param: IBlockConfig = new LogConfig();

	type: BlockType = BlockType.Log;
}
