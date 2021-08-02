import { makeStyles } from '@material-ui/core';
import ProjectConfigViewerSelectorItem from './ProjectConfigViewerSelectorItem';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
});

const selectorItemHeads = ['Global Config', 'Optimizer'];

type Props = {
	value: number;
	setValue: (num: number) => void;
};

const ProjectConfigViewerSelector = (props: Props) => {
	const classes = useStyle();
	const { value, setValue } = props;
	const selectorItems = (
		<ul>
			{selectorItemHeads.map((head, index) => {
				return (
					<li key={head}>
						<ProjectConfigViewerSelectorItem
							head={head}
							active={value === index}
							onClick={() => {
								setValue(index);
							}}
						/>
					</li>
				);
			})}
		</ul>
	);

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>{selectorItems}</div>
			</div>
		</>
	);
};

export default ProjectConfigViewerSelector;
