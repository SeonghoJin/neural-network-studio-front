import { useSelector } from 'react-redux';
import { RootState } from '../module';
import StandardModal from '../Components/modal/StandardModal';

const useGetProjectResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.getProjectResult);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error}/>)
  };
}

export default useGetProjectResult;
