import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useCallback, useState } from 'react';
import { ProjectInfoState } from '../module/projectInfo/types';
import { setProjectInfo } from '../module/projectInfo';
import { IProjectInfo } from '../API/project/types';

const useProjectInfo = () : [ProjectInfoState, (projectInfo: IProjectInfo) => void]=> {

  const value = useSelector((state : RootState) => (state.projectInfo));
  const dispatch = useDispatch();
  const setValue = useCallback((projectInfo: IProjectInfo) => {
    dispatch(setProjectInfo(projectInfo));
  }, []);

  return [
    value,
    setValue,
  ]
}

export default useProjectInfo;
