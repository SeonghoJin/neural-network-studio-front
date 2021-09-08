import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import style from '../components/dashboard/newProject/index.module.css';
import Main from '../components/dashboard/newProject/main/NewProjectMain';

export class CreateProjectPage extends React.PureComponent {
	render() {
		return (
			<PrivateAuthentication>
				<div className={`${style.wrapper}`}>
					<Main />
				</div>
			</PrivateAuthentication>
		);
	}
}
