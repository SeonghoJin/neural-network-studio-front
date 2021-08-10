import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-renderer';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import { RootDispatch, RootState } from '../../../../module';
import useProject from '../../../../hooks/useProject';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import StandardModal from '../../../utils/modal/StandardModal';
import SimpleBackdrop from '../../../utils/BackLoading';

const ProjectEditorNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { mutate } = useProject();
	const result = useUpdateProjectContent();
	const { projectNo } = useProjectLocation();
	const onSave = useCallback(() => {
		result
			.fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
			.then((res) => {
				if (!res) return;
				mutate();
			});
	}, [result, projectNo, instance, mutate]);

	return (
		<>
			{result.data && <StandardModal head="저장을 완료했습니다" body="" />}
			{result.loading && <SimpleBackdrop open={result.loading} />}
			{!result.loading && <ProjectEditorNavOptionContent onSave={onSave} />}
		</>
	);
};

export default ProjectEditorNavOptionContentContainer;
