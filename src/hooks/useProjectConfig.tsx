import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useCallback, useState } from 'react';
import { setProjectConfig } from '../module/projectConfig';
import { IProjectConfig } from '../API/project/types';

const useProjectConfig = () : [IProjectConfig, (projectConfig: IProjectConfig) => void]=> {

  const dispatch = useDispatch();
  const value = useSelector((state : RootState) => (state.projectConfig));
  const setValue = useCallback((projectConfig : IProjectConfig) => {
    dispatch(setProjectConfig(projectConfig));
  }, []);

  return [
     value,
     setValue,
  ]
}

export default useProjectConfig;
