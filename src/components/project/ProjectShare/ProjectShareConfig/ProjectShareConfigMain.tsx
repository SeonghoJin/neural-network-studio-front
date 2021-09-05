import { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import selectorItemHeads, { SelectorMappingViewer, SelectorMappingViewerShareMode } from '../../projectConfig';
import ProjectConfigSideBar from '../../projectConfig/projectConfigSideBar/ProjectConfigSideBar';
import ProjectConfigViewer from '../../projectConfig/ProjectConfigViewer/ProjectConfigViewer';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		height: '100%',
		display: 'flex',
	},
	contentWrapper: {
		flexGrow: 1,
	},
});

const ProjectShareConfigMain = () => {
	const classes = useStyle();

	const [value, setValue] = useState<keyof typeof selectorItemHeads>(selectorItemHeads['Global Config']);

	return (
		<>
			<div className={classes.wrapper}>
				<Container className={classes.container}>
					<ProjectConfigSideBar value={value} setValue={setValue} />
					<ProjectConfigViewer selectorMappingViewer={SelectorMappingViewerShareMode} index={value} />
				</Container>
			</div>
		</>
	);
};

export default ProjectShareConfigMain;
