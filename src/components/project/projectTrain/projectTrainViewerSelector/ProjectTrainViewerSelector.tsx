import $ from 'jquery';
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
							head={head}
							onClick={() => {
								setValue(head);
								$('.js-depth').on('click', function (): void {
									$(this).toggleClass('active');
									$(this).next().stop().slideToggle('active');
								});
							}}
						/>
					</li>
				);
			})}
		</>
	);
};

export default ProjectTrainViewerSelector;
