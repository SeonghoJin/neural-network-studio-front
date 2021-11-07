import { useState } from 'react';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectTrainViewer from './projectTrainViewer/projectTrainViewer';
import { TrainHistory } from './types';
import ProjectTrainViewerSelectorItem from './projectTrainViewerSelector/projectTrainViewerSelectorItem';
import ProjectTrainViewerTrainState from './projectTrainViewer/projetTrainViewrTrainState';
import { useTrainSocket } from './projectTrainViewer/useTrainSocket';

const ProjectTrainMain = ({
	trainHistories,
	fetchTrainHistory,
}: {
	trainHistories: Array<TrainHistory>;
	fetchTrainHistory: any;
}) => {
	const [currentTrainHistory, setCurrentTrainHistory] = useState<TrainHistory | undefined>(trainHistories[0]);
	const { socket, trainMessage, setTrainMessage, epochs, setEpochs } = useTrainSocket();
	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ol className="sec-menu">
						{trainHistories.map((trainHistory) => {
							return (
								<li
									key={trainHistory.trainNo}
									className={currentTrainHistory?.trainNo === trainHistory.trainNo ? 'active' : ''}
									style={{
										backgroundColor: `${
											currentTrainHistory?.trainNo === trainHistory.trainNo ? 'rgb(199, 199, 199)' : 'transparent'
										}`,
									}}
								>
									<ProjectTrainViewerSelectorItem
										trainHistory={trainHistory}
										onClick={() => {
											setCurrentTrainHistory(trainHistory);
										}}
									/>
								</li>
							);
						})}
					</ol>
				</div>
			</LeftWrapper>
			{currentTrainHistory && (
				<div className="sec-c">
					{currentTrainHistory.status === 'TRAIN' ? (
						<ProjectTrainViewerTrainState
							history={currentTrainHistory}
							fetchTrainHistory={fetchTrainHistory}
							setCurrentTrainHistory={setCurrentTrainHistory}
							socket={socket}
							trainMessage={trainMessage}
							setTrainMessage={setTrainMessage}
							epochs={epochs}
							setEpochs={setEpochs}
						/>
					) : (
						<ProjectTrainViewer
							history={currentTrainHistory}
							fetchTrainHistory={fetchTrainHistory}
							setCurrentTrainHistory={setCurrentTrainHistory}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default ProjectTrainMain;
