import React from 'react';
import { NoUnderLineInput } from './NoUnderLineInput';
import { numberWithoutSpacesRegExp } from '../Validation';

export type CustomInputProps = {
	title: string;
	name: string;
	onChange: (e: any) => void;
	value: string;
};

export const CustomDivisionInput = ({ title, onChange, name, value }: CustomInputProps) => {
	return (
		<div className="box">
			<div className="tit">{title}</div>
			<NoUnderLineInput
				error={
					value.split(',').filter((str) => {
						return str.trim() === '';
					}).length > 0
				}
				name={name}
				value={value}
				className="inp-txt"
				onChange={onChange}
				style={{
					width: 500,
				}}
			/>
		</div>
	);
};
