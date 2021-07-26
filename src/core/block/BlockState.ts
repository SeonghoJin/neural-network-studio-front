import { BlockCategory } from "./BlockCategory";
import { ActivationConfig, AveragePooling2DConfig,
  BatchNormalizationConfig, BlockConfig, Conv2DConfig, DenseConfig,DropoutConfig,
  FlattenConfig, InputConfig, MaxPool2DConfig } from "./BlockConfig";
import { BlockType } from "./BlockType";

export interface BlockState{
  category: BlockCategory;

  name: string | null;

  type: BlockType;

  config: BlockConfig;
}

export class DenseBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new DenseConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dense;
}

export class Conv2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new Conv2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.Conv2D;
}

export class AveragePooling2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new AveragePooling2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.AveragePooling2D;
}

export class MaxPool2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new MaxPool2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.MaxPool2D;
}

export class ActivationBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new ActivationConfig();

  name: string | null = null;

  type: BlockType = BlockType.Activation;
}

export class InputBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new InputConfig();

  name: string | null = null;

  type: BlockType = BlockType.Input;
}

export class DropoutBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new DropoutConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dropout;
}

export class BatchNormalizationBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new BatchNormalizationConfig();

  name: string | null = null;

  type: BlockType = BlockType.BatchNormalization;
}

export class FlattenBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new FlattenConfig();

  name: string | null = null;

  type: BlockType = BlockType.Flatten;
}

export const blockStates : {type: BlockCategory, states : BlockState[]}[] = [
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
    ],
  },
];
