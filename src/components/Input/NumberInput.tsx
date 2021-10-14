import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import Input from './Input';

import { numberWithoutSpacesRegExp } from './Validation';

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

const NumberInput = ({ propertyName, propertyContent, onChange }: Props) => {
	const classes = useStyle();

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			onChange({
				...e,
				target: {
					name: e.target.name,
					value: e.target.value,
				},
			});
		},
		[onChange]
	);

	const body = (
		<TextField
			name={propertyName}
			onChange={handleChange}
			value={propertyContent}
			className={classes.propertyContentContainer}
			label={propertyName}
			placeholder="12345"
		/>
	);

	return <Input body={body} />;
};

export default NumberInput;
