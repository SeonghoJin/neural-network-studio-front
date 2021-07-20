export interface IProjectConfig{
  batch_size?: number;

  epochs?: number;

  learning_rate?: number;

  loss?: string;

  metrics?: string[];

  optimizer?: string;
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
