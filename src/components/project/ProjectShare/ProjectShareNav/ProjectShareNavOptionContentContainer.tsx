import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-nns';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import ProjectShareNavOptionContent from './ProjectShareNavOptionContent';

const ProjectShareNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { projectNo } = useProjectLocation();
	const result = useUpdateProjectContent();
	const onSave = useCallback(() => {
		result.fetch(projectNo, {
			output: '',
			flowState: instance?.toObject() as FlowExportObject,
		});
	}, [result, projectNo, instance]);

	return <ProjectShareNavOptionContent onSave={onSave} />;
};

export default ProjectShareNavOptionContentContainer;
