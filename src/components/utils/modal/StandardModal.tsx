import React, { FC, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	})
);

type Props = {
	onClose?: any;
	head: any;
	body: any;
};

export const StandardModal: FC<Props> = ({ onClose, body, head }: Props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	return (
		<div>
			<Modal
				open={open}
				onClose={() => {
					setOpen(false);
					if (onClose) {
						onClose();
					}
				}}
				className={classes.modal}
			>
				<div className={classes.paper}>
					<h2>{head}</h2>
					<p>{body}</p>
				</div>
			</Modal>
		</div>
	);
};

StandardModal.defaultProps = {
	onClose: null,
};

export default StandardModal;
