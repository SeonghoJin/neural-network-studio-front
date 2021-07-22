import fileDownload from 'js-file-download';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../modal/StandardModal';

const useGetPythonCodeResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.getPythonCodeResult);

  useEffect(() => {
    if(result.data != null){
      fileDownload(result.data, 'model.py');
    }
  }, [result.data])

  return {
    ...result,
    errorModal : (
      <StandardModal head={"error"} body={result.error}/>
    )
  };
}

export default useGetPythonCodeResult;
