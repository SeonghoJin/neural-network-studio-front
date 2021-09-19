import { Link, useLocation } from 'react-router-dom';
import React, { MouseEventHandler } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkIcon from '@material-ui/icons/Link';
import { format } from 'util';
import useRoom from '../../../../hooks/useRoom';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { DynamicPath } from '../../../PagePathConsts';
import icoShare1 from '../../../../static/img/ico_share1.png';
import icoSave1 from '../../../../static/img/ico_save1.png';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainOptionContentItem: {
		marginLeft: '10px',
		marginRight: '10px',
	},
});

type Props = {
	onSave: MouseEventHandler;
	roomNo: string;
	projectNo: string;
};

const ProjectEditorNavOptionContent = ({ onSave, roomNo, projectNo }: Props) => {
	return (
		<>
			<div className="btns-group">
				<Link to={format(DynamicPath.PROJECT_SHARE_FORMAT, projectNo, roomNo)}>
					<img src={icoShare1} alt="공유하기" />
				</Link>
				<button type="button" onClick={onSave}>
					<img src={icoSave1} alt="저장하기" />
				</button>
			</div>
		</>
	);
};

export default ProjectEditorNavOptionContent;
