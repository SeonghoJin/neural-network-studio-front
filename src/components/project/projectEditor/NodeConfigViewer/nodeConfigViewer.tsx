import { makeStyles, Typography } from '@material-ui/core';
import React, { ChangeEventHandler, createElement } from 'react';

import { Node } from 'react-flow-renderer';
import { BlockState } from '../../../../core/block/BlockState';
import ConfigViewerTable from './ConfigViewerTable';
import TextValidationInput from '../../../Input/TextValidationInput';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	elementHeadWrapper: {
		width: '100%',
		textTransform: 'uppercase',
	},
	elementHead: {
		maxWidth: '400',
		textOverflow: 'hidden',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
	},
	propertyTypeWrapper: {
		width: '100%',
		height: 20,
		margin: '5px',
	},
});

type Props = {
	onChangeConfig: ChangeEventHandler;
	onChangeLabel: ChangeEventHandler;
	selectedElement: Node<BlockState> | null;
};

const NodeConfigViewer = ({ onChangeConfig, onChangeLabel, selectedElement }: Props) => {
	const classes = useStyle();

	if (selectedElement == null) {
		return <></>;
	}

	const data = selectedElement.data as BlockState;

	const inputs = createElement(ConfigViewerTable[data.type], {
		config: data.config,
		onChange: onChangeConfig,
	});

	return (
		<div className={classes.wrapper}>
			<div className={classes.elementHeadWrapper}>
				<div className={classes.propertyTypeWrapper}>
					<Typography>{`Type: ${data.type}`}</Typography>
				</div>
				<TextValidationInput propertyName="label" propertyContent={data.label} onChange={onChangeLabel} />
			</div>
			<ul>{inputs}</ul>
		</div>
	);
};

export default NodeConfigViewer;
