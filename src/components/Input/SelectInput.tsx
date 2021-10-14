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
	propertyContent: string;
	propertyCandidates: Array<string | number>;
	onChange: any;
};

const SelectInput = ({ propertyContent, propertyName, propertyCandidates, onChange }: Props) => {
	const classes = useStyle();

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
			onChange(e);
		},
		[onChange]
	);

	const body = (
		<FormControl className={classes.propertyContentContainer}>
			<InputLabel>{propertyName}</InputLabel>
			<Select
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
