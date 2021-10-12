import React from 'react';
import styled from 'styled-components';
import { Backdrop } from '@material-ui/core';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ModifyProjectMain from '../components/dashboard/modifyProject/main';
import useProject from '../hooks/useProject';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';
import useUpdateProjectInfo from '../hooks/useUpdateProjectInfo';
import SimpleBackdrop from '../components/utils/BackLoading';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f6f6f6;
`;

export const ModifyProjectPage = () => {
	const { project } = useProject();
	const { fetch, loading } = useUpdateProjectInfo();
	return (
		<PrivateAuthentication>
			<Navigation />
			<Wrapper>
				{loading && <SimpleBackdrop open />}
				{(project && <ModifyProjectMain project={project} updateProject={fetch} />) || <CircleLoading />}
			</Wrapper>
		</PrivateAuthentication>
	);
};
