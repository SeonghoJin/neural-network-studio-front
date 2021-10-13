type Props = {
	value: any;
	setValue: any;
	selectorItemsHeads: any;
};

const ProjectTrainViewerSelector = (props: Props) => {
	const { value, setValue, selectorItemsHeads } = props;

	return (
		<>
			{Object.keys(selectorItemsHeads).map((head, index) => {
				return (
					<li key={head} className={value === head ? 'active' : ''}>
						<span>test</span>
					</li>
				);
			})}
		</>
	);
};

export default ProjectTrainViewerSelector;
