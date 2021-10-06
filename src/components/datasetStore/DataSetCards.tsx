import React from 'react';
import { Dataset } from '../../API/Dataset/type';
import CardDropMenu from '../dashboard/cardGrid/card/cardDropMenu';

type Props = {
	datasets: Dataset[];
};

type DatasetCardProps = {
	dataset: Dataset;
};

const DatasetCard = ({ dataset }: DatasetCardProps) => {
	return (
		<li key={dataset.datasetNo}>
			<div className="group">
				{dataset.inLibrary}
				<div className="tit">{dataset.name}</div>
				{/* <CardDropMenu projectNo={} onUpdateProjectLists={onUpdateProjectLists} /> */}
				<div className="content">{dataset.description}</div>
			</div>
			<button
				type="button"
				className="btn-bottom js-modal-open"
				onClick={() => {
					console.log(3);
				}}
			>
				데이터셋 추가
			</button>
		</li>
	);
};

export const DatasetCards = ({ datasets }: Props) => {
	return (
		<>
			{datasets.map((dataset) => {
				return <DatasetCard dataset={dataset} />;
			})}
		</>
	);
};
