import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import Input from './Input';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: string;
	onChange: any;
};

const TextValidationInput = ({ propertyName, propertyContent, onChange }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback((str: string) => {
		if (str.trim() == '') return false;
		return true;
	}, []);

	const [error, setError] = useState(!isVaild(propertyContent.toString()));

	const handleChange = useCallback(
		(e: ChangeEvent<any>) => {
			onChange(e);
			setError(!isVaild(e.target.value));
		},
		[onChange]
	);

	const body = (
		<TextField
			error={error}
			name={propertyName}
			onChange={handleChange}
			value={propertyContent}
			type="text"
			className={classes.propertyContentContainer}
			variant="standard"
			label={propertyName}
			placeholder="12345"
		/>
	);

	return <Input body={body} />;
};

export default TextValidationInput;
