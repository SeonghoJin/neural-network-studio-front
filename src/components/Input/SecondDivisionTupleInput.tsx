import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import Input from './Input';
import { secondDivisionTupleRegExp } from './Validation';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: string | undefined;
	onChange: (e: ChangeEvent<any>) => void;
	canNull?: boolean;
};

const SecondDivisionTupleInput: FC<Props> = ({ propertyName, propertyContent, onChange, canNull }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback(
		(str: string) => {
			if (canNull && str.trim() === '') return true;
			return secondDivisionTupleRegExp.test(str);
		},
		[canNull]
	);

	const [error, setError] = useState(!isVaild(propertyContent?.toString() || ''));

	const handleChange = useCallback(
		(e: ChangeEvent<any>) => {
			onChange(e);
			setError(!isVaild(e.target.value));
		},
		[isVaild, onChange]
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

SecondDivisionTupleInput.defaultProps = {
	canNull: false,
};

export default SecondDivisionTupleInput;
