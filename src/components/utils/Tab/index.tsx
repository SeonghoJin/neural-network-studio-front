import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { TabPanel } from '@material-ui/lab';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#ffffff00',
	},
}));

type Props = {
	children?: any;
	defaultValue: number;
};

const DefaultTabs: FC<Props> = ({ children, defaultValue }: Props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(defaultValue);

	const handleChange = (event: React.ChangeEvent<unknown>, newValue: any) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs value={value} onChange={handleChange}>
				<Tab style={{ display: 'none' }} />
				{children}
			</Tabs>
		</div>
	);
};

DefaultTabs.defaultProps = {
	children: <></>,
};

export default DefaultTabs;
