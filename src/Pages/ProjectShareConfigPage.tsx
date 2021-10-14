import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectConfigMain from '../components/project/projectConfig/projectConfigMain';
import {
	selectorItemHeadsShareMode,
	SelectorMappingViewerShareMode,
} from '../components/project/ProjectShare/ProjectShareConfig';
import useProjectConfig from '../hooks/useProjectConfig';
import { useRemoteProjectEarlyStopConfigChange } from '../core/Socket/hooks/useProjectEarlyStopConfigChange';
import { useRemoteProjectConfigChange } from '../core/Socket/hooks/useProjectConfigChange';
import { useRemoteProjectLearningRateReductionConfigChange } from '../core/Socket/hooks/useProjectLearningRateReductionChange';
import { EarlyStopConfig, LearningRateReductionConfig, ProjectConfig } from '../API/project/types';

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
	const { projectConfig, setProjectConfig } = useProjectConfig();
	const { changeProjectEarlyStopConfig } = useRemoteProjectEarlyStopConfigChange();
	const { changeProjectConfig } = useRemoteProjectConfigChange();
	const { changeProjectLearningRateReductionConfig } = useRemoteProjectLearningRateReductionConfigChange();

	useEffect(() => {
		if (projectConfig && changeProjectConfig != null && changeProjectConfig.name !== undefined) {
			const { name, value } = changeProjectConfig;
			setProjectConfig({
				...(projectConfig as ProjectConfig),
				[name]: value,
			});
		}
	}, [changeProjectConfig, projectConfig, setProjectConfig]);

	useEffect(() => {
		if (projectConfig && changeProjectEarlyStopConfig != null && changeProjectEarlyStopConfig.name !== undefined) {
			const { name, value } = changeProjectEarlyStopConfig;
			setProjectConfig((state) => ({
				...(state as ProjectConfig),
				early_stop: {
					...(state?.early_stop as EarlyStopConfig),
					[name]: value,
				},
			}));
		}
	}, [changeProjectEarlyStopConfig, projectConfig, setProjectConfig]);

	useEffect(() => {
		if (
			projectConfig &&
			changeProjectLearningRateReductionConfig != null &&
			changeProjectLearningRateReductionConfig.name !== undefined
		) {
			const { name, value } = changeProjectLearningRateReductionConfig;
			setProjectConfig((state) => ({
				...(state as ProjectConfig),
				learning_rate_reduction: {
					...(state?.learning_rate_reduction as LearningRateReductionConfig),
					[name]: value,
				},
			}));
		}
	});

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
