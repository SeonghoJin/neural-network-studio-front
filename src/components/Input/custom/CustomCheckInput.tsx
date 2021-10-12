import React, { useCallback } from 'react';

export type CustomCheckInputProps = {
	title: string;
	name: string;
	onChange: (e: any) => void;
	value: boolean;
};

export const CustomCheckInput = ({ title, onChange, name, value }: CustomCheckInputProps) => {
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { checked, name: targetName } = event.target;
			onChange({
				...event,
				target: {
					name: targetName,
					value: checked,
				},
			});
		},
		[onChange]
	);

	return (
		<div className="box">
			<div className="toggle-area">
				<input id={title} type="checkbox" name={name} className="ck-custom4" onChange={handleChange} checked={value} />
				<label htmlFor={title}>
					{title}
					<span className="custom" />
				</label>
			</div>
		</div>
	);
};
