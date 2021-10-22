import { DatasetConfig } from '../datasetConfig';

export type ProjectDatasetViewerProps = {
	datasetConfig: DatasetConfig;
};

export const ProjectDatasetViewerTop = () => {
	return (
		<>
			<div className="search-filter">
				<div className="tit">URL</div>
				<input type="text" placeholder="검색어를 입력하세요" className="inp-search" />

				<ol className="list-filter">
					<li>
						<input id="ck1" type="checkbox" name="ck" className="ck-custom" />
						<label htmlFor="ck1">
							<span className="custom" />
							Shuffle
						</label>
					</li>

					<li>
						<div className="tit">정규화</div>
						<input type="text" className="inp" />
					</li>

					<li>
						<div className="tit">레이블</div>
						<input type="text" className="inp" />
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

const ProjectDatasetViewer = ({ datasetConfig }: ProjectDatasetViewerProps) => {
	return (
		<>
			<div className="board-util">
				<ProjectDatasetViewerTop />
			</div>
			<DatasetPreviewTable />
		</>
	);
};

export default ProjectDatasetViewer;
