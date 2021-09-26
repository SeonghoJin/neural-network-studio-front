import React, { FC, useCallback } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type Props = {
	open: boolean;
	onClose?: any;
	message: string;
};

const ErrorSnackbar: FC<Props> = ({ open, message, onClose }: Props) => {
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
			<Alert onClose={handleClose} severity="error">
				{message}
			</Alert>
		</Snackbar>
	);
};

ErrorSnackbar.defaultProps = {
	onClose: null,
};

export default ErrorSnackbar;
