import { Redirect, useHistory, useLocation } from 'react-router-dom';
import queryString from 'querystring';
import { GetDatasetListQuery } from '../API/Dataset/type';
import { QueryPath } from '../components/PagePathConsts';

export function isGetDataSetListQuery(target: any): target is GetDatasetListQuery {
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
	return queries;
};
