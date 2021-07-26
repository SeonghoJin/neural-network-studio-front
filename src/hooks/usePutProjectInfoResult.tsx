import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import StandardModal from '../Components/modal/StandardModal';
import { useCallback } from 'react';
import { putProjectInfoInit } from '../module/API/project';

const usePutProjectInfoResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.putProjectInfoResult);
  const dispatch = useDispatch();

  const handleError = useCallback(() => {
    dispatch(putProjectInfoInit());
  }, []);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error} onClose={handleError}/>)
  };
}

export default usePutProjectInfoResult;
