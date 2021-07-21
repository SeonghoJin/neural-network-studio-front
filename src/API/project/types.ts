import { IProjectConfig } from '../../core/project/config';
import { Elements, } from 'react-flow-renderer';

export interface IProjectDto{
  config:      IProjectConfig;
  content:     IProjectContentDto;
  description: string;
  lastModify:  Date;
  name:        string;
  projectNo:   string;
}

export interface IProjectContentDto {
  flowState: IFlowState,
  output: string;
}

export interface IFlowState {
  zoom: number,
  elements: Elements,
  position: [number, number]
}
