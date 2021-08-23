import { makeStyles, Slider, Typography } from '@material-ui/core';
import { ChangeEvent, useCallback } from 'react';
import Input from './Input';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
});

type Mark = {
	value: number;
	label: string | number;
};

export type Marks = Array<Mark>;

type Props = {
	propertyName: string;
	propertyContent: number;
	onChange: (e: ChangeEvent<any>) => void;
	min: number;
	max: number;
	step: number | null;
	marks: Marks;
};

const SliderInput = ({ propertyContent, propertyName, onChange, step, min, max, marks }: Props) => {
	const classes = useStyle();

	const handleChange = useCallback(
		(e: any, value: number | number[]) => {
			onChange({
				target: {
					name: propertyName,
					value: value.toString(),
				},
			} as ChangeEvent<any>);
		},
		[onChange, propertyName]
	);

	const body = (
		<Slider
			className={classes.propertyContentContainer}
			value={propertyContent}
			name={propertyName}
			step={step}
			min={min}
			max={max}
			marks={marks}
			onChangeCommitted={handleChange}
			valueLabelDisplay="auto"
		/>
	);

	const head = <Typography gutterBottom>{propertyName}</Typography>;

	return <Input body={body} head={head} />;
};

export default SliderInput;
