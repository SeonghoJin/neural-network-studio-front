import useProjectConfig from '../../../../hooks/useProjectConfig';
import useGetProjectConfigResult from '../../../../hooks/useGetProjectConfigResult';
import CircleLoading from '../../../Loading/CircularLoading';
import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback } from 'react';
import { IProjectGlobalConfig } from '../../../../API/project/types';
import NumberInput from '../../../Input/NumberInput';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
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
      <NumberInput
        onChange={onChange}
        propertyName={"batch_size"}
        propertyContent={globalConfig.batch_size || ""}/>
      <NumberInput
        onChange={onChange}
        propertyName={"epochs"}
        propertyContent={globalConfig.epochs || ""}/>
    </>
  );

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {(loading || error) ? <CircleLoading/> : content}
        </div>
      </div>
    </div>
  )
};

export default GlobalConfig;
