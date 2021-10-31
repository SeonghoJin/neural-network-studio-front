import { makeStyles } from '@material-ui/core';
import ProjectConfigViewerSelector from '../ProjectConfigViewerSelector/ProjectConfigViewerSelector';

type Props = {
	value: any;
	setValue: any;
	selectorItemHeads: any;
};

const ProjectConfigSideBar = ({ value, setValue, selectorItemHeads }: Props) => {
	return (
		<ol className="sec-menu">
			<ProjectConfigViewerSelector value={value} setValue={setValue} selectorItemsHeads={selectorItemHeads} />
		</ol>
	);
};

export default ProjectConfigSideBar;
