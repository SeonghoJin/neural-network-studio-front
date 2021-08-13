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
import { DynamicPath } from '../../../../pagePathName';

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

const ProjectEditorNavOptionContent = ({ onSave }: Props) => {
	const classes = useStyle();
	const location = useLocation();
	const { projectNo } = useProjectLocation();
	const { data, loading } = useRoom();
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.mainOptionContentItem}>
					<Button onClick={onSave}>
						<SaveIcon />
					</Button>
				</div>
				<div className={classes.mainOptionContentItem}>
					<Link to={`${location.pathname}/config`}>
						<SettingsIcon />
					</Link>
				</div>
				<div className={classes.mainOptionContentItem}>
					{loading && <CircleLoading />}
					{!loading && (
						<Link to={`${format(DynamicPath.PROJECT_SHARE_FORMAT, projectNo, data)}`}>
							<LinkIcon />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectEditorNavOptionContent;
