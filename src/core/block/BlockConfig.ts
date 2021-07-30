// eslint-disable-next-line @typescript-eslint/no-empty-interface,max-classes-per-file
export interface BlockConfig {}

export class DenseConfig implements BlockConfig {
	units = '';
}

export class Conv2DConfig implements BlockConfig {
	filters = '';

	kernel_size = '';

	strides = '';

	padding = '';
}

export class DropoutConfig implements BlockConfig {
	rate = '';
}

export class BatchNormalizationConfig implements BlockConfig {
	axis = '';

	momentum = '';

	epsilon = '';
}

export class FlattenConfig implements BlockConfig {}

export class InputConfig implements BlockConfig {
	shape = '';
}
export class ActivationConfig implements BlockConfig {
	activation = '';
}

export class MaxPool2DConfig implements BlockConfig {
	pool_size = '';

	strides = '';

	padding = '';
}

export class AveragePooling2DConfig implements BlockConfig {
	pool_size = '';

	strides = '';

	padding = '';
}

export type IConfigComponent<T> = {
	[K in keyof T]: JSX.Element;
};
