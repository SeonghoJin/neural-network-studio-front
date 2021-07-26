import InputTypes  from '../../Components/Input/InputTypes';

export interface BlockConfig {}

export class DenseConfig implements BlockConfig {
  units: number = 0;
}

export class Conv2DConfig implements BlockConfig {
  filters : number = 0;

  kernel_size : string = '';

  strides : string = '';

  padding : string = '';
}

export class DropoutConfig implements BlockConfig {
  rate: number= 0;
}

export class BatchNormalizationConfig implements BlockConfig {
  axis: number =0 ;

  momentum: number = 0;

  epsilon: number = 0;
}

export class FlattenConfig implements BlockConfig {
}

export class InputConfig implements BlockConfig {
  shape: string = '';
}
export class ActivationConfig implements BlockConfig {
  activation: string = '';
}

export class MaxPool2DConfig implements BlockConfig {
  pool_size: string = '';

  strides: string = '';

  padding: string = '';
}

export class AveragePooling2DConfig implements BlockConfig {
  pool_size : string = '';

  strides : string = '';

  padding : string = '';
}

export type IConfigComponent<T> = {
  [K in keyof T] : JSX.Element;
};
