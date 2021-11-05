export type GetDatasetListQuery = {
	searchType: string;
	searchContent: string;
} & PageNation;

export type Dataset = {
	id: string;
	datasetNo: number;
	name: string;
	kind: string;
	description: string;
	createTime: Date;
	updateTime: Date;
	public: boolean;
	usable: boolean;
	inLibrary: boolean;
};

export type PageNation = {
	curPage: number;
	pageSize: number;
	lastPage: number;
	itemCount: number;
};

export type UploadNewDatasetFormData = FormData;

export type UpdateDataset = {
	id: number;
	name: string;
	description: string;
	public: boolean;
};

export type UpdateDatasetAPIResponse = null;
export type AddDatasetToLibraryAPIResponse = null;
export type DeleteDatasetFromLibraryAPIResponse = null;
export type UploadNewDatasetFileAPIResponse = {
	id: number;
};
export type GetDatasetListAPIResponse = {
	datasets: Dataset[];
	pagination: PageNation;
};
export type GetDatasetListLibraryAPIResponse = {
	datasets: Dataset[];
	pagination: PageNation;
};
