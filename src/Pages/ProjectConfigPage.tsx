import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import ProjectConfigMain from '../components/project/projectConfig/projectConfigMain';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import selectorItemHeads, { SelectorMappingViewer } from '../components/project/projectConfig';
import { useRemoteProjectEarlyStopConfigChange } from '../core/Socket/hooks/useProjectEarlyStopConfigChange';
import { IEarlyStopConfig, IProjectConfig } from '../API/project/types';
import useProjectConfig from '../hooks/useProjectConfig';

const useStyle = makeStyles({
	wrapper: {
		width: '100vw',
		height: '100vh',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flexGrow: 1,
	},
});

export const ProjectConfigPage = () => {
	const classes = useStyle();

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectConfigNav />
					<div className={classes.content}>
						<ProjectConfigMain selectorMappingViewer={SelectorMappingViewer} selectorItemHeads={selectorItemHeads} />
					</div>
				</div>
			</div>
		</>
	);
};
