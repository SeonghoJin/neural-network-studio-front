import { DatasetConfigDto, NormalizationConfig } from './types';

export class DatasetConfig {
	id: number;

	name: string;

	dataset_id: number;

	shuffle: boolean;

	label: string;

	normalization: NormalizationConfig;

	constructor(dto: DatasetConfigDto) {
		this.id = dto?.id || 0;
		this.name = dto?.name || '';
		this.dataset_id = dto?.dataset_id || 0;
		this.shuffle = dto?.shuffle || false;
		this.label = dto?.label || '';
		this.normalization = dto?.normalization || { usage: false, method: '' };
	}

	static toDatasetConfigDto(datasetConfig: DatasetConfig) {
		const datasetConfigDto: DatasetConfigDto = {
			id: datasetConfig.id,
			name: datasetConfig.name,
			dataset_id: datasetConfig.dataset_id,
			shuffle: datasetConfig.shuffle,
			label: datasetConfig.label,
			normalization: datasetConfig.normalization,
		};

		return datasetConfigDto;
	}
}

export type TDatasetConfig = {
	id: number;

	name: string;

	dataset_id: number;

	shuffle: boolean;

	label: string;

	normalization: NormalizationConfig;
}