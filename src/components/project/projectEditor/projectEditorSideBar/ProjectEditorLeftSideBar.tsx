import { makeStyles } from '@material-ui/core';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { ReactNode } from 'react';
import NodeContainerWrapper from '../NodeSelector/nodeContainerWrapper';
import NodeConfigViewerContainer from '../NodeConfigViewer/NodeConfigViewerContainer';

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

			{/* <div className="box3"> */}
			{/*	<ol className="list-frm"> */}
			{/*		<li> */}
			{/*			<select className="select-custom"> */}
			{/*				<option>ACTIVATION</option> */}
			{/*			</select> */}
			{/*		</li> */}

			{/*		<li> */}
			{/*			<div className="ck-group"> */}
			{/*				<div className="ck-area"> */}
			{/*					<input id="ck1" type="checkbox" name="ck" className="ck-custom3" /> */}
			{/*					<label htmlFor="ck1" /> */}
			{/*				</div> */}

			{/*				<div className="ck-area"> */}
			{/*					<input id="ck2" type="checkbox" name="ck" className="ck-custom3" checked /> */}
			{/*					<label htmlFor="ck2" /> */}
			{/*				</div> */}
			{/*			</div> */}
			{/*		</li> */}

			{/*		<li> */}
			{/*			<input type="text" placeholder="textform" className="inp-custom" /> */}
			{/*		</li> */}

			{/*		<li> */}
			{/*			<input type="text" value="textform_Fill" placeholder="textform" className="inp-custom" /> */}
			{/*		</li> */}
			{/*	</ol> */}
			{/* </div> */}
		</div>
	);
};

export default ProjectEditorLeftSideBar;
