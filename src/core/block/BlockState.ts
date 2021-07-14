// eslint-disable-next-line max-classes-per-file
export enum BlockCatergory {
  // eslint-disable-next-line no-unused-vars
  Layer= 'Layer',
}

export enum BlockType{
  // eslint-disable-next-line no-unused-vars
  Dense= 'Dense',
  // eslint-disable-next-line no-unused-vars
  Conv2D= 'Conv2D',
  // eslint-disable-next-line no-unused-vars
  AveragePooling2D= 'average_pooling_2D',
  // eslint-disable-next-line no-unused-vars
  MaxPool2D= 'max_pool_2D',
  // eslint-disable-next-line no-unused-vars
  Activation= 'activation',
  // eslint-disable-next-line no-unused-vars
  Input= 'input',
  // eslint-disable-next-line no-unused-vars
  Dropout= 'dropout',
  // eslint-disable-next-line no-unused-vars
  BatchNormalization= 'batch_normalization',
}

export interface BlockState{
  catergory : BlockCatergory;

  name: string | null;

  type: BlockType;

  config: BlockConfig;
}
interface BlockConfig {}
export class DenseConfig implements BlockConfig {
  units: number = 0;
}
export class DenseBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new DenseConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dense;
}
export class Conv2DConfig implements BlockConfig {
  filters : number = 0;

  kernelSize : string = '';

  strides : string = '';

  padding : string = '';
}
export class Conv2DBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new Conv2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.Conv2D;
}

export const blockStates : {type: BlockType, states : BlockState[]}[] = [
  {
    type: BlockType.Conv2D,
    states: [new Conv2DBlockState()],
  },
  {
    type: BlockType.Dense,
    states: [new DenseBlockState()],
  },
];
