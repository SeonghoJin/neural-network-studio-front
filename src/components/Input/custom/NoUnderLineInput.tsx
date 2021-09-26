import { TextField, withStyles } from '@material-ui/core';

export const NoUnderLineInput = withStyles({
	root: {
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
	},
})(TextField);
