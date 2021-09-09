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

type Props = {
	value: any;
	setValue: any;
	selectorItemsHeads: any;
};

const ProjectConfigViewerSelector = (props: Props) => {
	const classes = useStyle();
	const { value, setValue, selectorItemsHeads } = props;
	const selectorItems = (
		<ul>
			{Object.keys(selectorItemsHeads).map((head, index) => {
				return (
					<li key={head}>
						<ProjectConfigViewerSelectorItem
							head={head}
							active={head === value}
							onClick={() => {
								setValue(head);
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
