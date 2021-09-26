import React, { MouseEventHandler } from 'react';

type Props = {
	onGetPythonCode: MouseEventHandler;
};

const ProjectEditorNavMainContent = ({ onGetPythonCode }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onGetPythonCode} className="btn">
				PythonCode 추출
			</button>
		</div>
	);
};

export default ProjectEditorNavMainContent;
