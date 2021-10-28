import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import { useCalendarState } from '@mui/lab/CalendarPicker/useCalendarState';
import { useCallback, useMemo } from 'react';
import ProjectDatasetViewerSelectorItem from '../projectDatasetViewerSelector/projectDatasetViewerItem';
import { DatasetConfig } from '../datasetConfig';
import { useAddDatasetConfig } from '../../../../hooks/useAddDatasetConfig';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { DatasetConfigs } from '../types';

type Props = {
	datasetConfigs: DatasetConfig[];
	currentDatasetConfig: DatasetConfig | undefined;
	setCurrentDatasetConfig: (datasetConfig: DatasetConfig) => any;
	setDatasetConfigs: any;
	mutate: any;
};

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProjectDatasetSideBar = ({
	mutate,
	datasetConfigs,
	setDatasetConfigs,
	setCurrentDatasetConfig,
	currentDatasetConfig,
}: Props) => {
	const { loading, data, fetch, error } = useAddDatasetConfig();
	const { projectNo } = useProjectLocation();

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

		const lengthOverFive = datasetConfigs.length > 5;

		if (hasMinusOneId || lengthOverFive) {
			return false;
		}
		return true;
	}, [datasetConfigs]);
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
