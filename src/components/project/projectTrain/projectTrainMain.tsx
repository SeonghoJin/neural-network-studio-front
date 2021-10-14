import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectTrainSideBar from './projectTrainSideBar/projectTrainSideBar';
import ProjectTrainViewer from './projectTrainViewer/projectTrainViewer';
import { TrainHistory } from './types';

const ProjectTrainMain = ({ selectorItemHeads }: { selectorItemHeads: Array<TrainHistory> }) => {
	const [value, setValue] = useState<any>(selectorItemHeads);

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectTrainSideBar value={value} setValue={setValue} selectorItemHeads={selectorItemHeads} />
				</div>
			</LeftWrapper>

			<div className="sec-c">
				<ProjectTrainViewer history={value} />
			</div>
		</>
	);
};

export default ProjectTrainMain;
