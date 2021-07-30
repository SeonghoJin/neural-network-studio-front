import { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	failure: {
		backgroundColor: 'lightcoral',
	},
	success: {
		backgroundColor: 'lightgreen',
	},
});

const ValidatioonSample = () => {
	const classes = useStyles();
	const [password, setPassword] = useState('');
	const [clicked, setClicked] = useState(false);
	const [validated, setValidated] = useState(false);
	const passwordRef = useRef<HTMLInputElement>(null);
	const handleChanged = (e: React.SyntheticEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleButtonClick = () => {
		setClicked(true);
		setValidated(password === '0000');
		passwordRef.current?.focus();
	};

	if (!clicked) {
		return (
			<div>
				<input type="password" value={password} onChange={handleChanged} className="" />
				<button onClick={handleButtonClick} />
			</div>
		);
	}
	return (
		<div>
			<input
				ref={passwordRef}
				type="password"
				value={password}
				onChange={handleChanged}
				className={validated ? classes.success : classes.failure}
			/>
			<button onClick={handleButtonClick}>검증하기</button>
		</div>
	);
};

export default ValidatioonSample;
