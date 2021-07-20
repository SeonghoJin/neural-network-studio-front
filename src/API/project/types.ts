import { BlockConfig, BlockState } from '../../core/block/BlockState';
import { IProjectConfig } from '../../core/project/config';
import { Elements, FlowElement, FlowExportObject } from 'react-flow-renderer';
import { ReactFlowState } from '../../module/ReactFlow';

export interface IProjectDto{
  config:      IProjectConfig;
  content:     IProjectContentDto;
  description: string;
  lastModify:  Date;
  name:        string;
  projectNo:   string;
}

export interface IProjectContentDto {
  flowState: ReactFlowState;
  output: string;
}
