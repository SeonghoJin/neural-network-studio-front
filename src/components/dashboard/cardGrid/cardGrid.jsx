import React from 'react';
import Card from '../card/card';
import style from './cardGrid.module.css';

class CardGrid extends React.PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className={`${style.grid}`}>
        {projects.projects.map((project) => (
          <Card
            key={project.name + ' - ' + project.projectNo}
            title={project.name}
            description={project.description}
            lastUpdate={project.lastModify}
            id={project.projectNo}
          />
        ))}
      </div>
    );
  }
}

export default CardGrid;
