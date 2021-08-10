import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
	createStyles({
		wrapper: {
			width: '100%',
			height: '100%',
		},
		container: {
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
		},
		root: {
			marginTop: '20px',
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
	})
);

type Props = {
	lastPage?: number | null;
};

export default function usePageNation({ lastPage }: Props) {
	const classes = useStyles();
	const [page, setPage] = React.useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	return {
		page,
		item: (
			<div className={classes.wrapper}>
				<div className={classes.container}>
					{lastPage && (
						<div className={classes.root}>
							<Pagination count={lastPage} page={page} onChange={handleChange} />
						</div>
					)}
				</div>
			</div>
		),
	};
}
