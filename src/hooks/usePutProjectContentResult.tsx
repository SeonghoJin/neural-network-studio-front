import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useEffect } from 'react';
import { getProject } from '../module/ProjectEditorController';
import StandardModal from '../Components/modal/StandardModal';

const usePutProjectContentResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.putProjectContentResult);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error}/>)
  };
}

export default usePutProjectContentResult;
