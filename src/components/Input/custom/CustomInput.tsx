import React from 'react';
import { NoUnderLineInput } from './NoUnderLineInput';

export type CustomInputProps = {
	title: string;
	name: string;
	onChange: (e: any) => void;
	value: string;
};

export const CustomInput = ({ title, onChange, name, value }: CustomInputProps) => {
	return (
		<div className="box">
			<div className="tit">{title}</div>
			<NoUnderLineInput
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
