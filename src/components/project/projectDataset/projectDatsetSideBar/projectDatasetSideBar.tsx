import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import ProjectDatasetViewerSelectorItem from '../projectDatasetViewerSelector/projectDatasetViewerItem';
import { DatasetConfig } from '../datasetConfig';

type Props = {
	datasetConfigs: DatasetConfig[];
	currentDatasetConfig: DatasetConfig | undefined;
	addPage: any;
	setCurrentDatasetConfig: (datasetConfig: DatasetConfig) => any;
};

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProjectDatasetSideBar = ({ addPage, datasetConfigs, setCurrentDatasetConfig, currentDatasetConfig }: Props) => {
	return (
		<>
			<ol className="sec-menu">
				{datasetConfigs.map((datasetConfig) => {
					return (
						<li key={datasetConfig.id} className={currentDatasetConfig?.id === datasetConfig.id ? 'active' : ''}>
							<ProjectDatasetViewerSelectorItem
								datasetConfig={datasetConfig}
								onClick={() => {
									setCurrentDatasetConfig(datasetConfig);
								}}
							/>
						</li>
					);
				})}
			</ol>
			<LoadingButtonWrapper>
				<LoadingButton
					style={{
						width: '40px',
						height: '40px',
						padding: 0,
						borderRadius: '50%',
						minWidth: 0,
						margin: '20px',
					}}
					variant="outlined"
					onClick={addPage}
				>
					+
				</LoadingButton>
			</LoadingButtonWrapper>
		</>
	);
};

export default ProjectDatasetSideBar;
