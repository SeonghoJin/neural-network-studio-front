import React from 'react';
import Switch from '@material-ui/core/Switch';

type Props = {
	propertyName: string;
	propertyContent: boolean;
	onChange: any;
};

export default function CheckInput({ propertyContent, propertyName, onChange }: Props) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = event.target;
		onChange({
			...event,
			target: {
				name,
				value: checked,
			},
		});
	};

	return (
		<Switch
			checked={propertyContent}
			onChange={handleChange}
			color="primary"
			name={propertyName}
			inputProps={{ 'aria-label': 'primary checkbox' }}
		/>
	);
}
