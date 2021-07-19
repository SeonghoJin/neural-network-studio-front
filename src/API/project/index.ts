import axios from 'axios';
import ProjectConfig from '../../core/project/config';
import config from '../../config';

export const getPythonCode = async (graph: any, projectConfig : ProjectConfig) => {
  axios.post(config.SERVER_PREFIX+'/make-python', {
    content: graph,
    config: projectConfig,
  });
}
