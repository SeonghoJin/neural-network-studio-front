import { Container, makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-nns';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import 'react-reflex/styles.css';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		height: '100%',
		display: 'flex',
	},
	contentWrapper: {
		width: '100%',
		height: '100%',
	},
});

type Props = {
	projectEditorGraphContainer: any;
	nodeConfigViewerContainer: any;
};

const ProjectEditorMain = ({ projectEditorGraphContainer, nodeConfigViewerContainer }: Props) => {
	const classes = useStyle();
	return (
		<>
			<ReactFlowProvider>
				<ReflexContainer orientation="vertical">
					<ReflexElement minSize={150} maxSize={350} size={260} className="left-pane">
						<ProjectEditorLeftSideBar nodeConfigViewer={nodeConfigViewerContainer} />
					</ReflexElement>
					<ReflexSplitter />
					<ReflexElement className="right-pane">
						<div className={classes.contentWrapper}>{projectEditorGraphContainer}</div>
					</ReflexElement>
				</ReflexContainer>
			</ReactFlowProvider>

			{/* <div className="sec-c"> */}
			{/*	<div className="tool-group"> */}
			{/*		<button type="button" className="btn-tool"> */}
			{/*			<img src="../img/ico_zoom_in1.png" alt=" " /> */}
			{/*		</button> */}
			{/*		<button type="button" className="btn-tool"> */}
			{/*			<img src="../img/ico_zoom_out1.png" alt=" " /> */}
			{/*		</button> */}
			{/*		<button type="button" className="btn-tool"> */}
			{/*			<img src="../img/ico_sight1.png" alt=" " /> */}
			{/*		</button> */}
			{/*		<button type="button" className="btn-tool"> */}
			{/*			<img src="../img/ico_unlock1.png" alt=" " /> */}
			{/*		</button> */}
			{/*	</div> */}
			{/*	<img src="../img/img_picture1.png" alt=" " /> */}
			{/* </div> */}

			{/* <div className="sec-r"> */}
			{/*	<div className="box1"> */}
			{/*		<div className="top"> */}
			{/*			<div className="txt">온라인</div> */}
			{/*			<div className="txt">3명</div> */}
			{/*		</div> */}

			{/*		<ol className="list-member"> */}
			{/*			<li> */}
			{/*				<div className="profile-state"> */}
			{/*					<img src="../img/img_profile1.png" alt="프로필 사진" /> */}
			{/*					<div className="state" /> */}
			{/*				</div> */}

			{/*				<div className="user-id">김나영</div> */}
			{/*			</li> */}

			{/*			<li> */}
			{/*				<div className="profile-state"> */}
			{/*					<img src="../img/img_profile1.png" alt="프로필 사진" /> */}
			{/*					<div className="state" /> */}
			{/*				</div> */}

			{/*				<div className="user-id">김나영</div> */}
			{/*			</li> */}

			{/*			<li> */}
			{/*				<div className="profile-state"> */}
			{/*					<img src="../img/img_profile1.png" alt="프로필 사진" /> */}
			{/*					<div className="state" /> */}
			{/*				</div> */}

			{/*				<div className="user-id">김나영</div> */}
			{/*			</li> */}
			{/*		</ol> */}
			{/*	</div> */}

			{/*	<div className="box2"> */}
			{/*		<div className="top"> */}
			{/*			<div className="txt">Overview</div> */}
			{/*		</div> */}

			{/*		<div className="img-area"> */}
			{/*			<img src="../img/img_picture1.png" alt=" " /> */}
			{/*		</div> */}
			{/*	</div> */}
			{/* </div> */}
		</>
	);
};

export default ProjectEditorMain;
