import { Line } from 'react-chartjs-2';
import { Epoch } from '../types';

export type ProjectTrainViewerProps = {
	index: any;
	selectorMappingViewer: any;
};

const ProjectTrainLearningCurveViewer = (epochs: Array<Epoch>) => {
	const label: Array<number> = [];
	const acc: Array<number> = [];
	const loss: Array<number> = [];
	const valAcc: Array<number> = [];
	const valLoss: Array<number> = [];

	for (let i = 0; i < epochs.length; i += 1) {
		const epoch = epochs[i];
		label.push(epoch.epochNo);
		acc.push(epoch.acc);
		loss.push(epoch.loss);
		valAcc.push(epoch.valAcc);
		valLoss.push(epoch.valLoss);
	}

	const data = {
		labels: label,
		datasets: [
			{
				label: '학습 정확도',
				data: acc,
				fill: false,
				backgroundColor: '#57b691',
				borderColor: '#57b691',
			},
			{
				label: '학습 손실',
				data: loss,
				fill: false,
				backgroundColor: '#5cb8c6',
				borderColor: '#5cb8c6',
			},
			{
				label: '검증 정확도',
				data: valAcc,
				fill: false,
				backgroundColor: '#5450d8',
				borderColor: '#5450d8',
			},
			{
				label: '검증 손실',
				data: valLoss,
				fill: false,
				backgroundColor: '#7e48cb',
				borderColor: '#7e48cb',
			},
		],
	};

	return <Line data={data} />;
};

export default ProjectTrainLearningCurveViewer;
