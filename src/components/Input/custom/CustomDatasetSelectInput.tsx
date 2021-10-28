import React, { useMemo } from 'react';
import { FormControl, makeStyles, MenuItem, Select, TextField, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	rootFirstSelect: {
		padding: '10px',
	},
}));

export type CustomDatasetSelectInputProps = {
	title: string;
	name: string;
	onChange: (id: string, name: string) => void;
	value: { id: string; name: string };
	propertyCandidates: Array<{ id: string; name: string }>;
};

export const CustomDatasetSelectInput = ({
	title,
	onChange,
	name,
	value,
	propertyCandidates,
}: CustomDatasetSelectInputProps) => {
	const classes = useStyles();
	const candidateComponent = useMemo(
		() =>
			propertyCandidates.map((candidate) => {
				return (
					<MenuItem key={candidate.id} value={candidate.id} data-name={candidate.name}>
						{candidate.name}
					</MenuItem>
				);
			}),
		[propertyCandidates]
	);
	return (
		<div
			className="box"
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<div className="tit">{title}</div>
			<Select
				classes={{ root: classes.rootFirstSelect }}
				className="inp"
				name={name}
				onChange={(e) => {
					const inputElement = e.nativeEvent.target as HTMLInputElement;
					const _name = inputElement.getAttribute('data-name');
					onChange(e.target.value as string, _name as string);
				}}
				value={value.id}
				variant="outlined"
			>
				<MenuItem value={value.id} data-name={value.name}>
					{value.name}
				</MenuItem>
				{candidateComponent}
			</Select>
		</div>
	);
};
