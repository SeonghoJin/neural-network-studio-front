import $ from 'jquery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useEffect, useState } from 'react';
import { DatasetConfig } from '../datasetConfig';
import select from '../../../../static/img/ico_arrow_select1.png';

const useStyle = makeStyles({
	wrapper: {
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
	toggleBtn: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: '14px',
	},
});

type Props = {
	datasetConfig: DatasetConfig;
	onClick: () => void;
};

const ProjectDatasetViewerSelectorItem = ({ datasetConfig, onClick }: Props) => {
	const classes = useStyle();

	const onToggle = (e: any) => {
		$(e.target).toggleClass('active');
		$(e.target).parent().next().slideToggle('active');
	};

	return (
		<>
			<div className={`tit ${classes.wrapper}`} onClick={onClick} onKeyDown={() => onClick()}>
				{datasetConfig.name}
				<button className={`js-depth ${classes.toggleBtn}`} type="button" onClick={onToggle}>
					더 보기
				</button>
			</div>
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
						<strong>Shuffle</strong> : {datasetConfig.shuffle ? '사용' : '사용 안 함'}
					</p>
					<p>
						<strong>정규화</strong> :
						{datasetConfig.normalization.usage ? datasetConfig.normalization.method : '사용 안 함'}
					</p>
					<p>
						<strong>레이블</strong> : {datasetConfig.label}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProjectDatasetViewerSelectorItem;
