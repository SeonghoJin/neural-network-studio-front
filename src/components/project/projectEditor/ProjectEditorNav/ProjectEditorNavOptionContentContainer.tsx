import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-renderer';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import SimpleBackdrop from '../../../utils/BackLoading';

const ProjectEditorNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { projectNo } = useProjectLocation();
	const result = useUpdateProjectContent();
	const onSave = useCallback(() => {
		result.fetch(projectNo, {
			output: '',
			flowState: instance?.toObject() as FlowExportObject,
		});
	}, [result, projectNo, instance]);

	return (
		<>
			{result.successFeedback()}
			{result.errorFeedback}
			{result.loading && <SimpleBackdrop open={result.loading} />}
			<ProjectEditorNavOptionContent onSave={onSave} />
		</>
	);
};

export default ProjectEditorNavOptionContentContainer;
