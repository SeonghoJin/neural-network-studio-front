import { ChangeEvent, useCallback } from 'react';
import { DatasetConfig } from '../datasetConfig';

export type ProjectDatasetViewerProps = {
	datasetConfig: DatasetConfig;
	setDatasetConfig: any;
	setHead: any;
};

export const ProjectDatasetViewerTop = ({ datasetConfig, setDatasetConfig, setHead }: ProjectDatasetViewerProps) => {
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			console.log(e.target);

			setDatasetConfig({
				...datasetConfig,
				[name]: value,
			});
			setHead(datasetConfig);
		},
		[datasetConfig, setDatasetConfig, setHead]
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
			console.log(datasetConfig);
			setHead(datasetConfig);
		},
		[datasetConfig, setDatasetConfig, setHead]
	);

	return (
		<>
			<div className="search-filter">
				<div className="tit">데이터</div>
				<input
					type="text"
					placeholder="검색어를 입력하세요"
					className="inp-search"
					name="datasetId"
					defaultValue={datasetConfig.dataset_id}
					onChange={onChange}
				/>

				<ol className="list-filter">
					<li>
						<input
							id="ck1"
							type="checkbox"
							name="shuffle"
							className="ck-custom"
							onChange={onChange}
							defaultChecked={datasetConfig.shuffle}
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
						>
							<option value="MinMax">MinMax</option>
							<option value="Standard">Standard</option>
							<option value="Image">Image</option>
						</select>
					</li>

					<li>
						<div className="tit">레이블</div>
						<input type="text" className="inp" name="label" defaultValue={datasetConfig.label} onChange={onChange} />
					</li>
				</ol>
			</div>
		</>
	);
};

export const DatasetPreviewTableRow = () => {
	return (
		<tr>
			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">0</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">10.6.1</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">Alistar</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">84</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">Alistar</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">0</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">10.6.1</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">Alistar</div>
					</div>
				</div>
			</td>

			<td>
				<div className="content">
					<div className="txt-group">
						<div className="txt">84</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export const DatasetPreviewTable = () => {
	return (
		<>
			<table className="tbl">
				<tbody>
					<tr>
						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">#</div>
									<div className="txt">Index</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Version</div>
									<div className="txt">version</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Id</div>
									<div className="txt">champion id</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Key</div>
									<div className="txt">champion key</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Name</div>
									<div className="txt">champion name</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Id</div>
									<div className="txt">champion id</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Key</div>
									<div className="txt">champion key</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Name</div>
									<div className="txt">champion name</div>
								</div>
							</div>
						</th>

						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">Version</div>
									<div className="txt">champion name</div>
								</div>
							</div>
						</th>
					</tr>

					<tr>
						<td>
							<div className="content" />
						</td>

						<td>
							<div className="content" />
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>

						<td>
							<div className="content" />
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>

						<td>
							<div className="content">
								<div className="txt-group2">
									<div className="txt1">148</div>
									<div className="txt2">Unique Values</div>
								</div>
							</div>
						</td>
					</tr>
					<DatasetPreviewTableRow />
				</tbody>
			</table>
		</>
	);
};

const ProjectDatasetViewer = ({ datasetConfig, setDatasetConfig, setHead }: ProjectDatasetViewerProps) => {
	return (
		<>
			<div className="board-util">
				<ProjectDatasetViewerTop datasetConfig={datasetConfig} setHead={setHead} setDatasetConfig={setDatasetConfig} />
			</div>
			<DatasetPreviewTable />
		</>
	);
};

export default ProjectDatasetViewer;
