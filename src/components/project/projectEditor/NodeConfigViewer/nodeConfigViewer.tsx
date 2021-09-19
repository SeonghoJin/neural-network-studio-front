import { makeStyles, Typography } from '@material-ui/core';
import React, { ChangeEventHandler, createElement } from 'react';

import { Node } from 'react-flow-nns';
import { BlockState } from '../../../../core/reactFlow/block/BlockState';
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
		<div className="box2">
			<div className="tit">{`TYPE : ${data.type}`}</div>
			<TextValidationInput propertyName="label" propertyContent={data.label} onChange={onChangeLabel} />
			<ul>{inputs}</ul>
		</div>
	);
};

export default NodeConfigViewer;
