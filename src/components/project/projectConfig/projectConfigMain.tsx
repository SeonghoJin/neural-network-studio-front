import { useState } from 'react';
import styled from 'styled-components';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import ProjectConfigViewer from './ProjectConfigViewer/ProjectConfigViewer';

export const LeftWrapper = styled.div`
	width: 280px;
`;

const ProjectConfigMain = ({
	selectorMappingViewer,
	selectorItemHeads,
}: {
	selectorMappingViewer: any;
	selectorItemHeads: any;
}) => {
	const [value, setValue] = useState<any>(selectorItemHeads['Global Config']);

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectConfigSideBar value={value} setValue={setValue} selectorItemHeads={selectorItemHeads} />
				</div>
			</LeftWrapper>

			<div className="sec-c">
				<ProjectConfigViewer selectorMappingViewer={selectorMappingViewer} index={value} />
			</div>
		</>
	);
};

export default ProjectConfigMain;
