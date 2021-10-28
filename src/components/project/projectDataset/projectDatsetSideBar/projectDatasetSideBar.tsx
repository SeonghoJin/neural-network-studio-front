import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import { useCallback, useMemo } from 'react';
import ProjectDatasetViewerSelectorItem from '../projectDatasetViewerSelector/projectDatasetViewerItem';
import { DatasetConfig } from '../datasetConfig';

type Props = {
	datasetConfigs: DatasetConfig[];
	currentDatasetConfig: DatasetConfig | undefined;
	setCurrentDatasetConfig: (datasetConfig: DatasetConfig) => any;
	setDatasetConfigs: any;
};

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProjectDatasetSideBar = ({
	datasetConfigs,
	setDatasetConfigs,
	setCurrentDatasetConfig,
	currentDatasetConfig,
}: Props) => {
	const addDatasetConfig = useCallback(() => {
		setDatasetConfigs((_dataConfigs: DatasetConfig[]) => {
			const _currentDatasetConfig = new DatasetConfig();
			setCurrentDatasetConfig(_currentDatasetConfig);
			return _dataConfigs.concat(_currentDatasetConfig);
		});
	}, [setCurrentDatasetConfig, setDatasetConfigs]);

	const addFlag = useMemo(() => {
		const hasMinusOneId =
			datasetConfigs.filter((datasetConfig) => {
				return datasetConfig.id === -1;
			}).length > 0;

		const lengthOver = datasetConfigs.length > 20;

		if (hasMinusOneId || lengthOver) {
			return false;
		}
		return true;
	}, [datasetConfigs]);

	return (
		<>
			<ol className="sec-menu">
				{datasetConfigs.map((datasetConfig) => {
					return (
						<li
							key={datasetConfig.id}
							className={currentDatasetConfig?.id === datasetConfig.id ? 'active' : ''}
							style={{
								background: currentDatasetConfig?.id === datasetConfig.id ? '#C7C7C7' : '#f6f6f6',
							}}
						>
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
					onClick={addDatasetConfig}
					disabled={!addFlag}
				>
					+
				</LoadingButton>
			</LoadingButtonWrapper>
		</>
	);
};

export default ProjectDatasetSideBar;
