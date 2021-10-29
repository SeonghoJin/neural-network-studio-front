import React, { useMemo } from 'react';
import { FormControl, MenuItem, Select, TextField, withStyles } from '@material-ui/core';

export type CustomSelectInputProps = {
	title: string;
	name: string;
	onChange: (e: any) => void;
	value: string;
	propertyCandidates: Array<string | number>;
	style?: any;
};

export const CustomSelectInput = ({
	title,
	onChange,
	name,
	value,
	propertyCandidates,
	style,
}: CustomSelectInputProps) => {
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

	return (
		<div className="box" style={style}>
			<div className="tit">{title}</div>
			<Select disableUnderline name={name} onChange={onChange} value={value}>
				<MenuItem value={value}>{value}</MenuItem>
				{candidateComponent}
			</Select>
		</div>
	);
};
