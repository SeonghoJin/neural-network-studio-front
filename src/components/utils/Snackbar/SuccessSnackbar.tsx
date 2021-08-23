import React, { FC, useCallback } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type Props = {
	open: boolean;
	onClose?: any;
	message: string;
};

const SuccessSnackbar: FC<Props> = ({ open, message, onClose }: Props) => {
	const [flag, setFlag] = React.useState(open);

	const handleClose = useCallback(
		(event?: React.SyntheticEvent, reason?: string) => {
			if (reason === 'clickaway') {
				return;
			}
			if (onClose) {
				onClose();
			}
			setFlag(false);
		},
		[onClose]
	);

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			open={flag}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity="success">
				{message}
			</Alert>
		</Snackbar>
	);
};

SuccessSnackbar.defaultProps = {
	onClose: null,
};

export default SuccessSnackbar;
