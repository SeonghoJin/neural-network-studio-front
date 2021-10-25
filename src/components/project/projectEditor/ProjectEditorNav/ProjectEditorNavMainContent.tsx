import React, { MouseEventHandler } from 'react';

type Props = {
	onGetPythonCode: MouseEventHandler;
	onTrainModel: MouseEventHandler;
};

const ProjectEditorNavMainContent = ({ onGetPythonCode, onTrainModel }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onGetPythonCode} className="btn">
				파이썬 코드로 내보내기
			</button>

			<button type="button" onClick={onTrainModel} className="btn btn-v1">
				모델 학습
			</button>
		</div>
	);
};

export default ProjectEditorNavMainContent;
