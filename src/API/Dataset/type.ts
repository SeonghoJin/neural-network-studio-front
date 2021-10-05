export type GetDatasetListQuery = {
	searchType: string;
	searchContent: string;
} & GetDatasetListAPIPageNation;

export type GetDatasetListAPIResponse = {
	datasets: Dataset[];
	pagination: GetDatasetListAPIPageNation;
};

export type Dataset = {
	id: string;
	datasetNo: number;
	name: string;
	description: string;
	createTime: Date;
	updateTime: Date;
	public: boolean;
	usable: boolean;
	inLibrary: boolean;
};

export type GetDatasetListAPIPageNation = {
	curPage: number;
	pageSize: number;
	lastPage: number;
	itemCount: number;
};

export type UploadNewDatasetFormData = FormData;

export type UploadNewDatasetFileAPIResponse = {
	id: number;
};

export type UpdateDataset = {
	id: number;
	name: string;
	description: string;
	public: boolean;
};

export type UpdateDatasetAPIResponse = null;
