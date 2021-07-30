import React, { MouseEventHandler } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core';
import { Button } from 'react-bootstrap';

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

const ProjectConfigNavOptionContent = ({ onSave }: Props) => {
	const classes = useStyle();

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.mainOptionContentItem}>
					<Button onClick={onSave}>
						<SaveIcon />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectConfigNavOptionContent;
