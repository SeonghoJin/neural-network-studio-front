import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { DatasetConfig } from '../datasetConfig';

const useStyle = makeStyles({
	wrapper: {
		// display: 'flex',
		// justifyContent: 'space-between',
		width: '100%',
		height: '100px',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: '10px',
		borderBottom: '1px solid #B2B2B2',
		'&:hover': {
			backgroundColor: '#FFFFFF',
		},
	},
	active: {
		width: '100%',
		height: '100%',
		display: 'block',
		backgroundColor: '#FFFFFF',
	},
});

type Props = {
	head: DatasetConfig;
	onClick: () => void;
};

const ProjectDatasetViewerSelectorItem = ({ head, onClick }: Props) => {
	const classes = useStyle();

	return (
		<>
			<div className={`tit ${classes.wrapper}`} onClick={onClick} onKeyDown={() => onClick()}>
				{head.name}
				<div className="depth">
					<div>
						<p>
							<strong>http://3fd.sjdfldef.nns.co.kr</strong>
						</p>
					</div>

					<div>
						<p>
							<strong>데이터 개수</strong> : 10000
						</p>
						<p>
							<strong>특성 개수</strong> : 65
						</p>
						<p>
							<strong>Shuffle</strong> : yes
						</p>
						<p>
							<strong>정규화</strong> : MinMax
						</p>
						<p>
							<strong>레이블</strong> : ID
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDatasetViewerSelectorItem;
