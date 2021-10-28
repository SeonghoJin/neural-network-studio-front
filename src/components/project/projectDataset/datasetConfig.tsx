import { DatasetConfigDto, NormalizationConfig } from './types';

export type DatasetInfo = {
	id: number;

	name: string;
};

export class DatasetConfig {
	id: number;

	name: string;

	dataset: DatasetInfo;

	shuffle: boolean;

	label: string;

	normalization: NormalizationConfig;

	constructor(dto?: DatasetConfigDto) {
		this.id = dto?.id || -1;
		this.name = dto?.name || '데이터셋 설정 이름을 정해주세요.';
		this.dataset = dto?.dataset || { id: -1, name: '데이터셋을 설정해주세요.' };
		this.shuffle = dto?.shuffle || false;
		this.label = dto?.label || '';
		this.normalization = dto?.normalization || { usage: false, method: '' };
	}

	static toDatasetConfigDto(datasetConfig: DatasetConfig) {
		const datasetConfigDto: DatasetConfigDto = {
			id: datasetConfig.id,
			name: datasetConfig.name,
			dataset: datasetConfig.dataset,
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

	dataset: DatasetInfo;

	shuffle: boolean;

	label: string;

	normalization: NormalizationConfig;
};
