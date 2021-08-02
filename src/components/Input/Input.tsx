import { makeStyles } from '@material-ui/core';
import { FunctionComponent, ReactElement } from 'react';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		padding: 5,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	propertyHeadWrapper: {
		flexGrow: 3,
	},
	propertyBodyContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		border: 0,
		'&:focus': {
			outline: '1px solid black',
		},
	},
});

type Props = {
	head?: ReactElement | null;
	body: ReactElement;
};

const Input: FunctionComponent<Props> = ({ head = null, body }: Props) => {
	const classes = useStyle();

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				{head && <div className={classes.propertyHeadWrapper}>{head}</div>}
				<div className={classes.propertyBodyContainer}>{body}</div>
			</div>
		</div>
	);
};

Input.defaultProps = {
	head: null,
};

export default Input;
