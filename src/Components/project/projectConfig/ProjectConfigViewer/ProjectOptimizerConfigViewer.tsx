import useProjectConfig from '../../../../hooks/useProjectConfig';
import useGetProjectConfigResult from '../../../../hooks/useGetProjectConfigResult';
import { makeStyles } from '@material-ui/core';
import CircleLoading from '../../../Loading/CircularLoading';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { IProjectOptimizerConfig } from '../../../../API/project/types';
import TextInput from '../../../Input/TextInput';
import SelectInput from '../../../Input/SelectInput';
import Optimizers from '../../../../core/Optimizers';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: '10px',
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

  const optimizerCandidates = useMemo(() => {
    const optimizers= [];
    for(const optimizerKeys in Optimizers){
      console.log(optimizerKeys);
      optimizers.push(optimizerKeys);
    }
    return optimizers;
  }, [])

  const content = data && (
    <>
      <SelectInput
        onChange={onChange}
        propertyName={"optimizer"}
        propertyCandidates={optimizerCandidates}
        propertyContent={optimizerConfig.optimizer|| ""}/>
      <TextInput
        onChange={onChange}
        propertyName={"loss"}
        propertyContent={optimizerConfig.loss || ""}/>
      <TextInput
        onChange={onChange}
        propertyName={"metrics"}
        propertyContent={optimizerConfig?.metrics || ""}/>
      <TextInput
        onChange={onChange}
        propertyName={"learning_rate"}
        propertyContent={optimizerConfig.learning_rate || ""}/>
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
