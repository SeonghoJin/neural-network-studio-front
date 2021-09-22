import { Link } from 'react-router-dom';
import React, { MouseEventHandler } from 'react';
import { format } from 'util';
import { DynamicPath } from '../../../PagePathConsts';
import icoShare1 from '../../../../static/img/ico_share1.png';
import icoSave1 from '../../../../static/img/ico_save1.png';

type Props = {
	onSave: MouseEventHandler;
	roomNo: string;
	projectNo: string;
};

const ProjectEditorNavOptionContent = ({ onSave, roomNo, projectNo }: Props) => {
	return (
		<div className="btns-group">
			<Link to={format(DynamicPath.PROJECT_SHARE_FORMAT, projectNo, roomNo)}>
				<img src={icoShare1} alt="공유하기" />
			</Link>
			<button type="button" onClick={onSave}>
				<img src={icoSave1} alt="저장하기" />
			</button>
		</div>
	);
};

export default ProjectEditorNavOptionContent;
