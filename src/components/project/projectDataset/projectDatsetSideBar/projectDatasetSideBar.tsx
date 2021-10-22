import ProjectDatasetViewerSelector from '../projectDatasetViewerSelector/projectDatasetViewerSelector';

type Props = {
	value: any;
	setValue: any;
	selectorItemHeads: any;
};

const ProjectDatasetSideBar = ({ value, setValue, selectorItemHeads }: Props) => {
	return (
		<ol className="sec-menu">
			<ProjectDatasetViewerSelector value={value} setValue={setValue} selectorItemHeads={selectorItemHeads} />
		</ol>
	);
};

export default ProjectDatasetSideBar;
