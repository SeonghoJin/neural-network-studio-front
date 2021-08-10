import { Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import ProjectConfigViewer from './ProjectConfigViewer/ProjectConfigViewer';
import selectorItemHeads from './index';

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

const ProjectConfigMain = () => {
	const classes = useStyle();

	const [value, setValue] = useState<keyof typeof selectorItemHeads>(selectorItemHeads['Global Config']);

	return (
		<>
			<div className={classes.wrapper}>
				<Container className={classes.container}>
					<ProjectConfigSideBar value={value} setValue={setValue} />
					<div className={classes.contentWrapper}>
						<ProjectConfigViewer index={value} />
					</div>
				</Container>
			</div>
		</>
	);
};

export default ProjectConfigMain;
