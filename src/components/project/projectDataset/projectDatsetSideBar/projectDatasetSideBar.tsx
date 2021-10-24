import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import ProjectDatasetViewerSelector from '../projectDatasetViewerSelector/projectDatasetViewerSelector';

type Props = {
	value: any;
	setValue: any;
	selectorItemHeads: any;
	addPage: any;
	setHead: any;
};

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProjectDatasetSideBar = ({ value, setValue, selectorItemHeads, addPage, setHead }: Props) => {
	return (
		<>
			<ol className="sec-menu">
				<ProjectDatasetViewerSelector
					value={value}
					setHead={setHead}
					setValue={setValue}
					selectorItemHeads={selectorItemHeads}
				/>
			</ol>
			<LoadingButtonWrapper>
				<LoadingButton
					style={{
						width: '40px',
						height: '40px',
						padding: 0,
						borderRadius: '50%',
						minWidth: 0,
						margin: '20px',
					}}
					variant="outlined"
					onClick={addPage}
				>
					+
				</LoadingButton>
			</LoadingButtonWrapper>
		</>
	);
};

export default ProjectDatasetSideBar;
