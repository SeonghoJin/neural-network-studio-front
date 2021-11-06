import React from 'react';
import { TDatasetPreview } from './projectDatasetViewer';

type Props = {
	dataDetail: TDatasetPreview | null;
};

export const DatasetPreviewTableRow = ({ dataDetail }: Props) => {
	return (
		<>
			{dataDetail?.rows.map((row, index) => {
				return (
					// eslint-disable-next-line react/no-array-index-key
					<tr key={index}>
						<td>
							<div className="content">
								<div className="txt-group">
									<div className="txt">{index}</div>
								</div>
							</div>
						</td>
						{row.map((col, idx) => {
							return (
								// eslint-disable-next-line react/no-array-index-key
								<td key={idx}>
									<div className="content">
										<div className="txt-group">
											{dataDetail.kind === 'IMAGES' && idx === 0 ? (
												<img className="img" src={col} alt={col} />
											) : (
												<div className="txt">{col}</div>
											)}
										</div>
									</div>
								</td>
							);
						})}
					</tr>
				);
			})}
		</>
	);
};

export const DatasetPreviewTable = ({ dataDetail }: Props) => {
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
						{dataDetail?.feature.map((feat, index) => {
							return (
								// eslint-disable-next-line react/no-array-index-key
								<th key={index}>
									<div className="content">
										<div className="txt-group">
											<div className="tit">{feat}</div>
											<div className="txt">feat</div>
										</div>
									</div>
								</th>
							);
						})}
					</tr>
					<DatasetPreviewTableRow dataDetail={dataDetail} />
				</tbody>
			</table>
		</>
	);
};

export const MemoizedDatasetTable = React.memo(DatasetPreviewTable);
