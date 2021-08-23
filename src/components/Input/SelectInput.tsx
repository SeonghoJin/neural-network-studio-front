import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import Input from './Input';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: string | string[] | number;
	propertyCandidates: Array<string | number>;
	onChange: any;
};

const SelectInput = ({ propertyContent, propertyName, propertyCandidates, onChange }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback((str: string) => {
		if (str.trim() === '') return false;
		return true;
	}, []);

	const [error, setError] = useState(!isVaild(propertyContent as string));

	const candidateComponent = useMemo(
		() =>
			propertyCandidates.map((candidate) => {
				return (
					<MenuItem key={candidate} value={candidate}>
						{candidate}
					</MenuItem>
				);
			}),
		[propertyCandidates]
	);

	const handleChange = useCallback(
		(e: ChangeEvent<any>) => {
			setError(!isVaild(e.target.value));
			onChange(e);
		},
		[isVaild, onChange]
	);

	const body = (
		<FormControl className={classes.propertyContentContainer}>
			<InputLabel>{propertyName}</InputLabel>
			<Select
				error={error}
				name={propertyName}
				onChange={(e) => {
					handleChange(e);
				}}
				value={propertyContent}
			>
				<MenuItem value={propertyContent}>{propertyContent}</MenuItem>
				{candidateComponent}
			</Select>
		</FormControl>
	);

	return <Input body={body} />;
};

export default SelectInput;
