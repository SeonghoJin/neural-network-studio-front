import React from 'react';
import styled from 'styled-components';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Main from '../components/dashboard/newProject/main/NewProjectMain';
import Navigation from '../components/nav';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f6f6f6;
`;

export class CreateProjectPage extends React.PureComponent {
	render() {
		return (
			<PrivateAuthentication>
				<Navigation currentMenu={1} />
				<Wrapper>
					<Main />
				</Wrapper>
			</PrivateAuthentication>
		);
	}
}
