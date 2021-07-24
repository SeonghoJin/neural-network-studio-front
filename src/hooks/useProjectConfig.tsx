import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useCallback, useState } from 'react';
import { IProjectConfig } from '../core/project/config';
import { setProjectConfig } from '../module/projectConfig';

const useProjectConfig = () : [IProjectConfig, (projectConfig: IProjectConfig) => void]=> {

  const dispatch = useDispatch();
  const value = useSelector((state : RootState) => (state.projectConfig));
  const setValue = useCallback((projectConfig : IProjectConfig) => {
    dispatch(setProjectConfig(projectConfig));
  }, []);
  useState()
  return [
     value,
     setValue,
  ]
}

export default useProjectConfig;
