// eslint-disable-next-line @typescript-eslint/no-empty-interface,max-classes-per-file
import Paddings from '../../Project/Padding';
import Activations from '../../Project/Activations';

const toNumberDivision = (s: string) => {
	return s.split(',').map((value) => Number(value));
};

export interface BlockConfigDto {
	units: number;
	filters: number;
	kernel_size: Array<number>;
	strides: Array<number>;
	padding: Paddings;
	pool_size: Array<number>;
	activation: Activations;
	shape: Array<number>;
	rate: number;
	axis: number;
	momentum: number;
	epsilon: number;
	scale: number;
	offset: number;
	target_shape: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBlockConfig {}

export class BlockConfig implements IBlockConfig {
	units: string;

	filters: string;

	kernel_size: string;

	strides: string;

	padding: Paddings;

	pool_size: string;

	activation: Activations;

	shape: string;

	rate: string;

	axis: string;

	momentum: string;

	epsilon: string;

	scale: string;

	offset: string;

	target_shape: string;

	constructor(blockConfig?: BlockConfigDto) {
		this.units = blockConfig?.units?.toString() || '0';
		this.filters = blockConfig?.filters?.toString() || '0';
		this.activation = blockConfig?.activation || Activations.ReLU;
		this.shape = blockConfig?.shape?.toString() || '1,1';
		this.rate = blockConfig?.rate?.toString() || '0.1';
		this.axis = blockConfig?.axis?.toString() || '0';
		this.momentum = blockConfig?.momentum?.toString() || '0';
		this.epsilon = blockConfig?.epsilon?.toString() || '0';
		this.scale = blockConfig?.scale?.toString() || '0';
		this.offset = blockConfig?.offset?.toString() || '0';
		this.target_shape = blockConfig?.target_shape?.toString() || '0';
		this.kernel_size = blockConfig?.kernel_size?.toString() || '0,0';
		this.strides = blockConfig?.strides?.toString() || '0,0';
		this.padding = blockConfig?.padding || Paddings.Same;
		this.pool_size = blockConfig?.pool_size?.toString() || '0,0';
	}

	static toDto(blockConfig: Partial<BlockConfig>) {
		const dto: BlockConfigDto = {
			activation: blockConfig?.activation || Activations.ReLU,
			axis: Number(blockConfig?.axis),
			epsilon: Number(blockConfig?.epsilon),
			filters: Number(blockConfig?.filters),
			kernel_size: toNumberDivision(blockConfig?.kernel_size || '0,0'),
			momentum: Number(blockConfig?.momentum),
			offset: Number(blockConfig?.offset),
			padding: blockConfig?.padding || Paddings.Same,
			pool_size: toNumberDivision(blockConfig?.pool_size || '0,0'),
			rate: Number(blockConfig?.rate),
			scale: Number(blockConfig?.scale),
			shape: toNumberDivision(blockConfig?.shape || '0,0'),
			strides: toNumberDivision(blockConfig?.strides || '0,0'),
			target_shape: Number(blockConfig?.target_shape),
			units: Number(blockConfig?.units),
		};

		return dto;
	}
}

export class DenseConfig implements Pick<BlockConfig, 'units'> {
	units = '0';
}

export class Conv2DConfig implements Pick<BlockConfig, 'filters' | 'kernel_size' | 'strides' | 'padding'> {
	filters = '0';

	kernel_size = '0,0';

	strides = '0,0';

	padding = Paddings.Same;
}

export class AveragePooling2DConfig implements Pick<BlockConfig, 'pool_size' | 'strides' | 'padding'> {
	pool_size = '0, 0';

	strides = '0, 0';

	padding = Paddings.Same;
}

export class MaxPool2DConfig implements Pick<BlockConfig, 'pool_size' | 'strides' | 'padding'> {
	pool_size = '0, 0';

	strides = '0, 0';

	padding = Paddings.Same;
}

export class ActivationConfig implements Pick<BlockConfig, 'activation'> {
	activation = Activations.ReLU;
}

export class InputConfig implements Pick<BlockConfig, 'shape'> {
	shape = '0, 0';
}

export class DropoutConfig implements Pick<BlockConfig, 'rate'> {
	rate = '0.01';
}

export class BatchNormalizationConfig implements Pick<BlockConfig, 'axis' | 'momentum' | 'epsilon'> {
	axis = '0';

	momentum = '0';

	epsilon = '0';
}

export class FlattenConfig implements IBlockConfig {}

export class RescalingConfig implements Pick<BlockConfig, 'scale' | 'offset'> {
	scale = '0.01';

	offset = '0.0';
}

export class ReshapeConfig implements Pick<BlockConfig, 'target_shape'> {
	target_shape = '0, 0, 0';
}

export class AbsConfig implements IBlockConfig {}

export class CeilConfig implements IBlockConfig {}

export class FloorConfig implements IBlockConfig {}

export class RoundConfig implements IBlockConfig {}

export class SqrtConfig implements IBlockConfig {}

export class AddConfig implements IBlockConfig {}

export class SubtractConfig implements IBlockConfig {}

export class LogConfig implements IBlockConfig {}

export type IConfigComponent<T> = {
	[K in keyof T]: JSX.Element;
};
