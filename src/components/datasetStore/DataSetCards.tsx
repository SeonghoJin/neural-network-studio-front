import React, { useCallback, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Dataset } from '../../API/Dataset/type';
import { useDeleteDatasetFromLibrary } from '../../hooks/useDeleteDatasetFromLibrary';
import { useAddDatasetToLibrary } from '../../hooks/useAddDatasetToLibrary';
import SimpleBackdrop from '../utils/BackLoading';
import { useGetDatasetListLibraryAPI } from '../../hooks/useGetDatasetListLibraryAPI';

type Props = {
	datasets: Dataset[];
	updateDatasets: any;
};

type DatasetCardProps = {
	dataset: Dataset;
	deleteDatasetFetch: (datasetNo: string) => void;
	addDatasetFetch: (datasetNo: string) => void;
};

const DatasetCard = ({ dataset, deleteDatasetFetch, addDatasetFetch }: DatasetCardProps) => {
	const { enqueueSnackbar } = useSnackbar();

	return (
		<li>
			<div className="group">
				<div className="tit">{dataset.name}</div>
				<div className="content">{dataset.description}</div>
			</div>
			{dataset.inLibrary && (
				<button
					type="button"
					className="btn-bottom js-modal-open"
					onClick={async () => {
						try {
							await deleteDatasetFetch(dataset.id);
						} catch (e: any) {
							enqueueSnackbar(e.message, { variant: 'error' });
						}
					}}
				>
					라이브러리에서 데이터셋 삭제
				</button>
			)}
			{!dataset.inLibrary && (
				<button
					type="button"
					className="btn-bottom js-modal-open"
					onClick={async () => {
						try {
							await addDatasetFetch(dataset.id);
						} catch (e: any) {
							enqueueSnackbar(e.message, { variant: 'error' });
						}
					}}
				>
					라이브러리에 데이터셋 추가
				</button>
			)}
		</li>
	);
};

export const DatasetCards = ({ datasets, updateDatasets }: Props) => {
	const deleteDataset = useDeleteDatasetFromLibrary();
	const addDataset = useAddDatasetToLibrary();
	const { mutate } = useGetDatasetListLibraryAPI();
	const onDeleteDataSetFromLibrary = useCallback(
		async (datasetId: string) => {
			await deleteDataset.fetch(datasetId);
			await updateDatasets();
			await mutate();
		},
		[deleteDataset, mutate, updateDatasets]
	);
	const onAddDataSetInLibrary = useCallback(
		async (datasetId: string) => {
			await addDataset.fetch(datasetId);
			await updateDatasets();
			await mutate();
		},
		[addDataset, mutate, updateDatasets]
	);

	return (
		<>
			{(deleteDataset.loading || addDataset.loading) && <SimpleBackdrop open />}
			{datasets.map((dataset) => {
				return (
					<DatasetCard
						key={dataset.id}
						dataset={dataset}
						deleteDatasetFetch={onDeleteDataSetFromLibrary}
						addDatasetFetch={onAddDataSetInLibrary}
					/>
				);
			})}
		</>
	);
};
