import axios from 'axios';
import ProjectConfig from '../../core/project/config';
import config from '../../config';

export const getPythonCode = async (graph: any, projectConfig : ProjectConfig) => {
  const response = axios.post('http://13.125.253.103:8080'+'/make-python', {
    content: graph,
    config: projectConfig,
  });

  console.log(response);
}
