import { Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import ProjectConfigViewer, { ProjectConfigViewerProps } from './ProjectConfigViewer/ProjectConfigViewer';

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

const ProjectConfigMain = ({
	selectorMappingViewer,
	selectorItemHeads,
}: {
	selectorMappingViewer: any;
	selectorItemHeads: any;
}) => {
	const classes = useStyle();

	const [value, setValue] = useState<keyof typeof selectorItemHeads>(selectorItemHeads['Global Config']);

	return (
		<>
			<div className={classes.wrapper}>
				<Container className={classes.container}>
					<ProjectConfigSideBar value={value} setValue={setValue} selectorItemHeads={selectorItemHeads} />
					<div className={classes.contentWrapper}>
						<ProjectConfigViewer selectorMappingViewer={selectorMappingViewer} index={value} />
					</div>
				</Container>
			</div>
		</>
	);
};

export default ProjectConfigMain;
