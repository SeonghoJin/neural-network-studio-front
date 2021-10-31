import ProjectTrainViewerSelectorItem from './projectTrainViewerSelectorItem';
import { TrainHistory } from '../types';

type Props = {
	value: any;
	setValue: any;
	selectorItemsHeads: Array<TrainHistory>;
};

const ProjectTrainViewerSelector = (props: Props) => {
	const { value, setValue, selectorItemsHeads } = props;

	return (
		<>
			{selectorItemsHeads.map((head, index) => {
				return (
					<li key={head.trainNo} className={value === head ? 'active' : ''}>
						<ProjectTrainViewerSelectorItem
							trainHistory={head}
							onClick={() => {
								setValue(head);
							}}
						/>
					</li>
				);
			})}
		</>
	);
};

export default ProjectTrainViewerSelector;
