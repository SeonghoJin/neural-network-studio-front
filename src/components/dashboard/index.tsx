import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardGrid from './cardGrid/cardGrid';
import Header from '../header/header';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import useAuthentication from '../../hooks/useAuthentication';
import { getProjectList } from '../../API/project';
import { Projects } from '../../API/project/types';

const DashBoard = () => {
	const { user, isAuthentication } = useAuthentication();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<null | Projects>(null);

	useEffect(() => {
		setLoading(true);
		const exec = async () => {
			const projects = await getProjectList();
			setData(projects);
			setLoading(false);
		};

		exec();
	}, []);

	return (
		<>
			<Header auth={isAuthentication} user={user} />
			<div className={`${style.mainWrapper}`}>
				<div className={`${style.dashboardMenu}`}>
					<div className={`${utils.divButton} ${style.createButton}`}>
						<Link to="/newProject">프로젝트 생성</Link>
					</div>
				</div>
				{loading ? null : <CardGrid projects={data} />}
			</div>
		</>
	);
};

export default DashBoard;
