import fileDownload from 'js-file-download';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../module';
import StandardModal from '../Components/modal/StandardModal';
import { ProjectProps } from '../Components/project/type';

const useGetPythonCodeResult = (props : ProjectProps) => {
  const result = useSelector((state: RootState) => state.projectApi.getPythonCodeResult);
  const projectNo = props.match?.params?.projectNo;

  useEffect(() => {
    if(result.data != null){
      fileDownload(result.data, 'model.py');
    }
  }, [result.data])

  const handleError = useCallback(() => {
    window.location.replace(`/project/`);
  }, [projectNo]);

  return {
    ...result,
    errorModal : (
      <StandardModal head={"error"} body={result.error} onClose={handleError}/>
    )
  };
}

export default useGetPythonCodeResult;
