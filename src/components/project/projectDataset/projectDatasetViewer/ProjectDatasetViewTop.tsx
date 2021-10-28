import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { DatasetConfig } from '../datasetConfig';
import { GetDatasetListAPIResponse } from '../../../../API/Dataset/type';
import { CustomDatasetSelectInput } from '../../../Input/custom/CustomDatasetSelectInput';

export type ProjectDatasetViewerTopProps = {
	datasetConfig: DatasetConfig;
	setDatasetConfig: any;
	datasetList: GetDatasetListAPIResponse;
	features: string[] | undefined;
};

export const ProjectDatasetViewerTop = ({
	datasetConfig,
	setDatasetConfig,
	datasetList,
	features,
}: ProjectDatasetViewerTopProps) => {
	console.log(datasetConfig);
	const onDataChange = useCallback(
		(id, name) => {
			setDatasetConfig({
				...datasetConfig,
				dataset: {
					id,
					name,
				},
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			const { name, value } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: value,
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onCheck = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, checked } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: checked,
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onNormalizationChange = useCallback(
		(e: ChangeEvent<any>) => {
			const { name, value } = e.target;

			setDatasetConfig({
				...datasetConfig,
				normalization: {
					...datasetConfig.normalization,
					[name]: value,
				},
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const datasetListCandidates = useMemo(() => {
		return datasetList.datasets.map((dataset) => {
			return {
				id: dataset.id,
				name: dataset.name,
			};
		});
	}, [datasetList.datasets]);

	return (
		<>
			<div className="search-filter">
				<CustomDatasetSelectInput
					title="데이터"
					name="id"
					onChange={onDataChange}
					value={{
						id: datasetConfig.dataset.id.toString(),
						name: datasetConfig.dataset.name,
					}}
					propertyCandidates={datasetListCandidates}
				/>
				<ol className="list-filter">
					<li>
						<input
							id="ck1"
							type="checkbox"
							name="shuffle"
							className="ck-custom"
							onChange={onCheck}
							checked={datasetConfig.shuffle}
						/>
						<label htmlFor="ck1">
							<span className="custom" />
							Shuffle
						</label>
					</li>
					<li>
						<div className="tit">정규화</div>
						<select
							key={datasetConfig.normalization.method}
							className="inp"
							name="method"
							defaultValue={datasetConfig.normalization.method}
							onChange={onNormalizationChange}
							style={{
								width: 100,
							}}
						>
							<option value="MinMax">MinMax</option>
							<option value="Standard">Standard</option>
							<option value="Image">Image</option>
						</select>
					</li>
					<li>
						<div className="tit">레이블</div>
						<select
							className="inp"
							value={datasetConfig.label}
							onChange={onChange}
							name="label"
							style={{
								width: 200,
							}}
						>
							{features?.map((feature) => {
								return (
									<option key={feature} value={feature}>
										{feature}
									</option>
								);
							})}
						</select>
					</li>
				</ol>
			</div>
		</>
	);
};
