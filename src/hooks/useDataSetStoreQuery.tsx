import { Redirect, useHistory, useLocation } from 'react-router-dom';
import queryString from 'querystring';
import React, { useEffect, useState } from 'react';
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
	const [queries, setQueries] = useState(queryString.parse(location.search.slice(1)));
	if (!isGetDataSetListQuery(queries)) {
		throw new Error('데이터 셋 페이지 쿼리가 없습니다.');
	}
	return queries;
};
