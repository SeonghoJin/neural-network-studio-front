import { Tab } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DefaultTabs from '../utils/Tab';
import { PagePathName, pagePathNameToNumber, UndefinedPathNameNumber } from '../../pagePathName';

const TabWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	margin-left: 20px;
`;

const NeuralNetworkConsoleTab = () => {
	const history = useHistory();
	const { pathname } = history.location;
	const pageNum = pagePathNameToNumber[pathname as PagePathName];
	return (
		<TabWrapper>
			<DefaultTabs defaultValue={pageNum || UndefinedPathNameNumber}>
				<Tab
					label="Dashboard"
					onClick={() => {
						history.push(PagePathName.DASHBOARD_PROJECTS);
					}}
				/>
				<Tab
					label="Asset"
					onClick={() => {
						history.push(PagePathName.ASSET_MAIN);
					}}
				/>
			</DefaultTabs>
		</TabWrapper>
	);
};

export default NeuralNetworkConsoleTab;
