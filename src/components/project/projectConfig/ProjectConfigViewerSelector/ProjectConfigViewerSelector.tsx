import { makeStyles } from '@material-ui/core';
import selectorItemHeads from '..';
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

type Props = {
	value: keyof typeof selectorItemHeads;
	setValue: (num: keyof typeof selectorItemHeads) => void;
};

const ProjectConfigViewerSelector = (props: Props) => {
	const classes = useStyle();
	const { value, setValue } = props;
	const selectorItems = (
		<ul>
			{Object.keys(selectorItemHeads).map((head, index) => {
				return (
					<li key={head}>
						<ProjectConfigViewerSelectorItem
							head={head}
							active={head === value}
							onClick={() => {
								setValue(head as keyof typeof selectorItemHeads);
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
