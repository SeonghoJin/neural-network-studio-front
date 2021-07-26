import useProjectConfig from '../../../../hooks/useProjectConfig';
import useGetProjectConfigResult from '../../../../hooks/useGetProjectConfigResult';
import { makeStyles } from '@material-ui/core';
import CircleLoading from '../../../Loading/CircularLoading';
import { ChangeEvent, useCallback } from 'react';
import { IProjectOptimizerConfig } from '../../../../API/project/types';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
  },
});

const OptimizerConfig = () => {
  const [projectConfig, setProjectConfig] = useProjectConfig();
  const classes = useStyle();
  const optimizerConfig = projectConfig as IProjectOptimizerConfig;
  const {loading, error, data} = useGetProjectConfigResult();

  const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setProjectConfig({
      ...projectConfig,
      [name]: value,
    });
  }, [optimizerConfig, projectConfig])

  const content = data && (
    <>
      <input name={"optimizer"} onChange={onChange} value={optimizerConfig.optimizer}/>
      <input name={"metrics"} onChange={onChange} value={optimizerConfig.metrics}/>
      <input name={"loss"}onChange={onChange} value={optimizerConfig.loss}/>
      <input name={"learning_rate"} onChange={onChange} value={optimizerConfig.learning_rate}/>
    </>
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {(error || loading) ? <CircleLoading/> : content}
      </div>
    </div>
  )
};

export default OptimizerConfig;
