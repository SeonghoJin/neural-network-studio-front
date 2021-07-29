import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import StandardModal from '../components/modal/StandardModal';
import { RootState } from '../module';

const useGetPythonCodeResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.getPythonCodeResult);

  const handleError = useCallback(() => {
    window.location.replace(`/project/`);
  }, []);

  return {
    ...result,
    errorModal : (
      <StandardModal head={"error"} body={result.error} onClose={handleError}/>
    )
  };
}

export default useGetPythonCodeResult;
