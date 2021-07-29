export interface BlockConfig {}

export class DenseConfig implements BlockConfig {
  units: string= '';
}

export class Conv2DConfig implements BlockConfig {
  filters : string = '';

  kernel_size : string = '';

  strides : string = '';

  padding : string = '';
}

export class DropoutConfig implements BlockConfig {
  rate: string= '';
}

export class BatchNormalizationConfig implements BlockConfig {
  axis: string ='' ;

  momentum: string= '';

  epsilon: string= '';
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
