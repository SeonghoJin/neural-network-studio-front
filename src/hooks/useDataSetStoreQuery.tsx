import { useLocation } from 'react-router-dom';
import queryString from 'querystring';
import { GetDatasetListQuery } from '../API/Dataset/type';

function isGetDataSetListQuery(target: any): target is GetDatasetListQuery {
	if ((target as GetDatasetListQuery).lastPage === undefined) return false;
	if ((target as GetDatasetListQuery).curPage === undefined) return false;
	if ((target as GetDatasetListQuery).itemCount === undefined) return false;
	if ((target as GetDatasetListQuery).pageSize === undefined) return false;
	if ((target as GetDatasetListQuery).searchContent === undefined) return false;
	if ((target as GetDatasetListQuery).searchType === undefined) return false;
	return true;
}

export const useDataSetStoreQuery = () => {
	const location = useLocation();
	const queries = queryString.parse(location.search.slice(1));
	if (!isGetDataSetListQuery(queries)) {
		throw new Error('queries는 GetDataSetListQuery Type이 아닙니다.');
	}
	return queries;
};
