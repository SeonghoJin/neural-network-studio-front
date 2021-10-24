import { DatasetConfig } from '../datasetConfig';
import ProjectDatasetViewerSelectorItem from './projectDatasetViewerItem';
import 'jquery-easing';

type Props = {
	value: any;
	setValue: any;
	setHead: any;
	selectorItemHeads: Array<DatasetConfig>;
};

const ProjectDatasetViewerSelector = (props: Props) => {
	const { value, setValue, setHead, selectorItemHeads } = props;

	return (
		<>
			{selectorItemHeads.map((head, index) => {
				return (
					<li key={head.id} className={value === head ? 'active' : ''}>
						<ProjectDatasetViewerSelectorItem
							head={head}
							onClick={() => {
								setValue(head);
								setHead(head);
							}}
						/>
					</li>
				);
			})}
		</>
	);
};

export default ProjectDatasetViewerSelector;
