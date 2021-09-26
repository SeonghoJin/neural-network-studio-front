import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { ReactNode } from 'react';
import NodeContainerWrapper from '../NodeSelector/nodeContainerWrapper';

const ProjectEditorLeftSideBar = ({ nodeConfigViewer }: { nodeConfigViewer: ReactNode }) => {
	return (
		<div className="sec-l">
			<ReflexContainer>
				<ReflexElement style={{ overflowX: 'hidden' }}>
					<NodeContainerWrapper />
				</ReflexElement>
				<ReflexSplitter />
				<ReflexElement style={{ overflowX: 'hidden' }}>{nodeConfigViewer}</ReflexElement>
			</ReflexContainer>
		</div>
	);
};

export default ProjectEditorLeftSideBar;
