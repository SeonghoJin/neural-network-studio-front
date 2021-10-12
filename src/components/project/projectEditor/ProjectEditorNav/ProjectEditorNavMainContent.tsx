import React, { MouseEventHandler } from 'react';

type Props = {
	onGetPythonCode: MouseEventHandler;
};

const ProjectEditorNavMainContent = ({ onGetPythonCode }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onGetPythonCode} className="btn">
				Python 코드로 내보내기
			</button>
		</div>
	);
};

export default ProjectEditorNavMainContent;
