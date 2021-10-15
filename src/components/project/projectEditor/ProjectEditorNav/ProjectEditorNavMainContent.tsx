import React, { MouseEventHandler } from 'react';

type Props = {
	onGetPythonCode: MouseEventHandler;
};

const ProjectEditorNavMainContent = ({ onGetPythonCode }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onGetPythonCode} className="btn">
				파이썬 코드로 내보내기
			</button>

			<button type="button" className="btn">
				모델 학습
			</button>
		</div>
	);
};

export default ProjectEditorNavMainContent;
