import React from 'react';
import Main from './main/NewProjectMain';
import style from './index.module.css';
import PrivateAuthentication from '../../../Authentication/PrivateAuthentication';
import Navigation from '../../nav';

class NewProject extends React.PureComponent {
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

export default NewProject;
