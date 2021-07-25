import { FlowExportObject } from "react-flow-renderer";

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

export interface IProjectGlobalConfig{

  epochs?: number;

  batch_size?: number;

}

export interface IProjectOptimizerConfig{

  learning_rate?: number;

  loss?: string;

  metrics?: string[];

  optimizer?: string;

}

export interface IProjectConfig extends IProjectOptimizerConfig, IProjectGlobalConfig{
}

class ProjectConfig implements IProjectConfig{

  batch_size?: number;

  epochs?: number;

  learning_rate?: number;

  loss?: string;

  metrics?: string[];

  optimizer?: string;

  constructor(config? : ProjectConfig) {
    this.optimizer = config?.optimizer || 'adam';
    this.learning_rate = config?.learning_rate || 0.001;
    this.loss = config?.loss || 'sparse_categorical_crossentropy';
    this.metrics = config?.metrics || ['accuray'];
    this.batch_size = config?.batch_size || 32;
    this.epochs = config?.epochs || 10;
  }
}

export default ProjectConfig;

