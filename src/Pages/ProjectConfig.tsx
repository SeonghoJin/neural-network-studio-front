import { makeStyles } from '@material-ui/core';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectConfigMainContainer from '../components/project/projectConfig/ProjectConfigMainContainer';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import useGetProjectConfigResult from '../hooks/APIResult/project/useGetProjectConfigResult';
import usePutProjectConfigResult from '../hooks/APIResult/project/usePutProjectConfigResult';
import usePutProjectInfoResult from '../hooks/APIResult/project/usePutProjectInfoResult';

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

const ProjectConfigError = () => {
	const getProjectConfigResult = useGetProjectConfigResult();
	const putProjectConfigResult = usePutProjectConfigResult();
	const putProjectInfoResult = usePutProjectInfoResult();
	return (
		<>
			{getProjectConfigResult.error && getProjectConfigResult.errorModal}
			{putProjectConfigResult.error && putProjectConfigResult.errorModal}
			{putProjectInfoResult.error && putProjectInfoResult.errorModal}
		</>
	);
};

const ProjectConfig = () => {
	const classes = useStyle();

	return (
		<>
			<ProjectConfigError />
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectConfigNav />
					<div className={classes.content}>
						<ProjectConfigMainContainer />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectConfig;
