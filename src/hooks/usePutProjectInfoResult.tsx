import { useSelector } from 'react-redux';
import { RootState } from '../module';
import StandardModal from '../Components/modal/StandardModal';

const usePutProjectInfoResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.putProjectInfoResult);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error}/>)
  };
}

export default usePutProjectInfoResult;
