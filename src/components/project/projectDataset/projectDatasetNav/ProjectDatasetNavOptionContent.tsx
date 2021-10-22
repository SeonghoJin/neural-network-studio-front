import React, { MouseEventHandler } from 'react';
import icoSave1 from '../../../../static/img/ico_save1.png';

type Props = {
	onSave: MouseEventHandler;
};

const ProjectDatasetNavOptionContent = ({ onSave }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onSave}>
				<img src={icoSave1} alt="저장하기" />
			</button>
		</div>
	);
};

export default ProjectDatasetNavOptionContent;
