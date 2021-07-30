import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import Input from './Input';
import { secondDivisionTupleRegExp } from './Validation';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: string;
	onChange: (e: ChangeEvent<any>) => void;
	canNull?: boolean;
};

const SecondDivisionTupleInput = ({ propertyName, propertyContent, onChange, canNull }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback((str: string) => {
		if (canNull && str.trim() == '') return true;
		return secondDivisionTupleRegExp.test(str);
	}, []);

	const [error, setError] = useState(!isVaild(propertyContent));

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
			placeholder="123, 456"
		/>
	);

	return <Input body={body} />;
};

export default SecondDivisionTupleInput;
