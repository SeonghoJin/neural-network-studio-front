import useProjectConfig from '../../../../hooks/useProjectConfig';
import { IProjectGlobalConfig } from '../../../../core/project/config';
import useGetProjectConfigResult from '../../../../hooks/useGetProjectConfigResult';
import CircleLoading from '../../../Loading/CircularLoading';
import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback } from 'react';

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

const GlobalConfig = () => {
  const classes = useStyle();
  const [projectConfig, setProjectConfig] = useProjectConfig();
  const {loading, error, data}= useGetProjectConfigResult();
  const globalConfig = projectConfig as IProjectGlobalConfig;

  const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setProjectConfig({
      ...projectConfig,
      [name]: value,
    });
  }, [globalConfig, projectConfig])

  const content = data && (
    <>
      <input name={"epochs"}value={globalConfig.epochs} onChange={onChange}/>
      <input name={"batch_size"} value={globalConfig.batch_size} onChange={onChange}/>
    </>
  );
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {(loading || error) && <CircleLoading/>}
          {content}
        </div>
      </div>
    </div>
  )
};

export default GlobalConfig;
