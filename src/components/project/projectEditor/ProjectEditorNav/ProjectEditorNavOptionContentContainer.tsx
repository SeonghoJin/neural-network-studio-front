import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-nns';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import SimpleBackdrop from '../../../utils/BackLoading';
import useRoom from '../../../../hooks/useRoom';

const ProjectEditorNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { projectNo } = useProjectLocation();
	const { data: roomNo } = useRoom();
	const result = useUpdateProjectContent();
	const onSave = useCallback(() => {
		result.fetch(projectNo, {
			output: '',
			flowState: instance?.toObject() as FlowExportObject,
		});
	}, [result, projectNo, instance]);

	return (
		<>
			<ProjectEditorNavOptionContent onSave={onSave} roomNo={roomNo || ''} projectNo={projectNo} />
		</>
	);
};

export default ProjectEditorNavOptionContentContainer;
