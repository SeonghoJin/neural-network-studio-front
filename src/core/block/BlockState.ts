export enum BlockCategory {
  Layer= 'Layer',
}

export enum BlockType{
  Dense= 'Dense',
  Conv2D= 'Conv2D',
  AveragePooling2D= 'AveragePooling2D',
  MaxPool2D= 'MaxPool2D',
  Activation= 'Activation',
  Input= 'Input',
  Dropout= 'Dropout',
  BatchNormalization= 'BatchNormalization',
  Flatten= 'Flatten',
  Custom = 'Custom',
}

export interface BlockState{
  category: BlockCategory;

  name: string | null;

  type: BlockType;

  config: BlockConfig;
}

export interface BlockConfig {}
export class DenseConfig implements BlockConfig {
  units: number = 0;
}
export class DenseBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new DenseConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dense;
}
export class Conv2DConfig implements BlockConfig {
  filters : number = 0;

  kernel_size : string = '';

  strides : string = '';

  padding : string = '';
}
export class Conv2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new Conv2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.Conv2D;
}
export class AveragePooling2DConfig implements BlockConfig {
  pool_size : string = '';

  strides : string = '';

  padding : string = '';
}
export class AveragePooling2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new AveragePooling2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.AveragePooling2D;
}

export class MaxPool2DConfig implements BlockConfig {
  pool_size: string = '';

  strides: string = '';

  padding: string = '';
}

export class MaxPool2DBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new MaxPool2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.MaxPool2D;
}

export class ActivationConfig implements BlockConfig {
  activation: string = '';
}

export class ActivationBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new ActivationConfig();

  name: string | null = null;

  type: BlockType = BlockType.Activation;
}

export class InputConfig implements BlockConfig {
  shape: string = '';
}

export class InputBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new InputConfig();

  name: string | null = null;

  type: BlockType = BlockType.Input;
}

export class DropoutConfig implements BlockConfig {
  rate: number= 0;
}

export class DropoutBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new DropoutConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dropout;
}

export class BatchNormalizationConfig implements BlockConfig {
  axis: number =0 ;

  momentum: number = 0;

  epsilon: number = 0;
}

export class BatchNormalizationBlockState implements BlockState {
  category: BlockCategory = BlockCategory.Layer;

  config: BlockConfig = new BatchNormalizationConfig();

  name: string | null = null;

  type: BlockType = BlockType.BatchNormalization;
}

export class FlattenConfig implements BlockConfig {
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
