import { Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import ProjectConfigViewer from './ProjectConfigViewer/ProjectConfigViewer';
import selectorItemHeads from './index';
import { SelectorMappingViewerType } from '../ProjectShare/ProjectShareConfig';

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

export type ProjectConfigMainProps = {
	selectorMappingViewer: SelectorMappingViewerType;
};

const ProjectConfigMain = ({ selectorMappingViewer }: ProjectConfigMainProps) => {
	const classes = useStyle();

	const [value, setValue] = useState<keyof typeof selectorItemHeads>(selectorItemHeads['Global Config']);

	return (
		<>
			<div className={classes.wrapper}>
				<Container className={classes.container}>
					<ProjectConfigSideBar value={value} setValue={setValue} />
					<div className={classes.contentWrapper}>
						<ProjectConfigViewer selectorMappingViewer={selectorMappingViewer} index={value} />
					</div>
				</Container>
			</div>
		</>
	);
};

export default ProjectConfigMain;
