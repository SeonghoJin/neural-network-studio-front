import ProjectTrainViewerSelector from '../projectTrainViewerSelector/ProjectTrainViewerSelector';

type Props = {
	value: any;
	setValue: any;
	selectorItemHeads: any;
};

const ProjectTrainSideBar = ({ value, setValue, selectorItemHeads }: Props) => {
	return (
		<ol className="sec-menu">
			<ProjectTrainViewerSelector value={value} setValue={setValue} selectorItemsHeads={selectorItemHeads} />
		</ol>
	);
};

export default ProjectTrainSideBar;
