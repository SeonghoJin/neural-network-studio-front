import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import Input from './Input';
import { floatWithoutSpacesRegExp, numberWithoutSpacesRegExp } from './Validation';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: number;
	onChange: any;
};

const FloatInput = ({ propertyName, propertyContent, onChange }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback((str: string) => {
		return floatWithoutSpacesRegExp.test(str);
	}, []);

	const [error, setError] = useState(!isVaild(propertyContent.toString()));

	const handleChange = useCallback(
		(e: ChangeEvent<any>) => {
			onChange({
				target: {
					name: e.target.name,
					value: Number(e.target.value),
				},
			});
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
			type="number"
			className={classes.propertyContentContainer}
			variant="standard"
			label={propertyName}
			placeholder="123.123"
		/>
	);

	return <Input body={body} />;
};

export default FloatInput;
