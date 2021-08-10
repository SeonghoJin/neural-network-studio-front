import { makeStyles } from '@material-ui/core';
import usePythonCode from '../hooks/usePythonCode';
import useUpdateProjectContent from '../hooks/useUpdateProjectContent';
import useProject from '../hooks/useProject';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';

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

const ProjectEditor = () => {
	const classes = useStyle();

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectEditorNav />
					<div className={classes.content}>
						<ProjectEditorMain />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectEditor;
