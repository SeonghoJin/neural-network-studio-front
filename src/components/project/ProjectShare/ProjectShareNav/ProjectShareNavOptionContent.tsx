import { Link, useLocation } from 'react-router-dom';
import React, { MouseEventHandler } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import { format } from 'util';
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
};

const ProjectShareNavOptionContent = ({ onSave }: Props) => {
	return (
		<div className="btns-group">
			<button type="button" onClick={onSave}>
				<img src={icoSave1} alt="저장하기" />
			</button>
		</div>
	);
};

export default ProjectShareNavOptionContent;
