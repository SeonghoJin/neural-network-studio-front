import { IProjectConfig } from '../../core/project/config';
import { Elements, FlowExportObject, OnLoadParams, } from 'react-flow-renderer';

export interface IProjectDto{
  config:      IProjectConfig;
  content:     IProjectContentDto;
  description: string;
  lastModify:  Date;
  name:        string;
  projectNo:   string;
}

export interface IProjectContentDto {
  flowState: FlowExportObject,
  output: string;
}
