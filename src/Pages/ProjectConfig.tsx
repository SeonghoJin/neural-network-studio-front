import { makeStyles } from '@material-ui/core';
import ProjectConfigMain from '../components/project/projectConfig/projectConfigMain';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import usePutProjectConfigResult from '../hooks/APIResult/project/usePutProjectConfigResult';
import usePutProjectInfoResult from '../hooks/APIResult/project/usePutProjectInfoResult';
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

const ProjectConfig = () => {
	const classes = useStyle();

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectConfigNav />
					<div className={classes.content}>
						<ProjectConfigMain />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectConfig;
