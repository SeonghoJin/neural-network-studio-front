import { useLocation } from 'react-router-dom';

const useProjectLocation = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  return {projectNo};
}

export default useProjectLocation;
