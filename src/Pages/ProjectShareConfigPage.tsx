import { makeStyles } from '@material-ui/core';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectConfigMain from '../components/project/projectConfig/projectConfigMain';
import {
	selectorItemHeadsShareMode,
	SelectorMappingViewerShareMode,
} from '../components/project/ProjectShare/ProjectShareConfig';

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

export const ProjectShareConfigPage = () => {
	const classes = useStyle();

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectConfigNav />
					<div className={classes.content}>
						<ProjectConfigMain
							selectorMappingViewer={SelectorMappingViewerShareMode}
							selectorItemHeads={selectorItemHeadsShareMode}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
