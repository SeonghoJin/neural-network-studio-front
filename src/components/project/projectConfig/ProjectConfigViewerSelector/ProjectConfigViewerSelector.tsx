import ProjectConfigViewerSelectorItem from './ProjectConfigViewerSelectorItem';

type Props = {
	value: any;
	setValue: any;
	selectorItemsHeads: any;
};

const ProjectConfigViewerSelector = (props: Props) => {
	const { value, setValue, selectorItemsHeads } = props;

	return (
		<>
			{Object.keys(selectorItemsHeads).map((head, index) => {
				return (
					<li key={head} className={value === head ? 'active' : ''}>
						<ProjectConfigViewerSelectorItem
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

export default ProjectConfigViewerSelector;
