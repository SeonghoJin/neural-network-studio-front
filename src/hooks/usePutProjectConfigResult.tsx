import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useEffect } from 'react';
import { getProject } from '../module/ProjectController';
import StandardModal from '../Components/modal/StandardModal';

const usePutProjectConfigResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.putProjectConfigResult);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error}/>)
  };
}

export default usePutProjectConfigResult;
