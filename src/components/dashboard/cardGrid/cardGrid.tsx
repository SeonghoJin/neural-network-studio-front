import React, { useEffect, useState } from 'react';
import Card from './card/card';
import usePageNation from '../../utils/pagenation/usePageNation';
import { GetProjectListParams, Project } from '../../../API/project/types';
import useProjectList from '../../../hooks/useProjectList';

const CardGrid = ({ projects }: { projects: Project[] }) => {
	return (
		<>
			{projects.map((project) => (
				<Card
					key={`${project.name} - ${project.projectNo}`}
					title={project.name}
					description={project.description}
					lastUpdate={project.lastModify}
					id={project.projectNo}
				/>
			))}
		</>
	);
};

export default CardGrid;
