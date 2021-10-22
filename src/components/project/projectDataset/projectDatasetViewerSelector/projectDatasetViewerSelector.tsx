import { DatasetConfig } from '../datasetConfig';
import ProjectDatasetViewerSelectorItem from './projectDatasetViewerItem';

type Props = {
	value: any;
	setValue: any;
	selectorItemHeads: Array<DatasetConfig>;
};

const ProjectDatasetViewerSelector = (props: Props) => {
	const { value, setValue, selectorItemHeads } = props;

	return (
		<>
			{selectorItemHeads.map((head, index) => {
				return (
					<li key={head.id} className={value === head ? 'active' : ''}>
						<ProjectDatasetViewerSelectorItem
							head={head}
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

export default ProjectDatasetViewerSelector;
