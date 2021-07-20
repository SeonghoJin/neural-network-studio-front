import { BlockConfig, BlockState } from '../../core/block/BlockState';
import { IProjectConfig } from '../../core/project/config';
import { Elements, FlowElement } from 'react-flow-renderer';

export interface IProjectDto{
  config:      IProjectConfig;
  content:     IProjectContentDto;
  description: string;
  lastModify:  Date;
  name:        string;
  projectNo:   string;
}

export interface IProjectContentDto {
  layers: Elements;
  output: string;
}
