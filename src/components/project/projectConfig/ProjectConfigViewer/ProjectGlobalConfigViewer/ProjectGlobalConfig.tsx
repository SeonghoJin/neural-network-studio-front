import { makeStyles } from '@material-ui/core';
import React, { ChangeEvent, ReactNode } from 'react';
import { IProjectGlobalConfig } from '../../../../../API/project/types';
import NumberInput from '../../../../Input/NumberInput';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
});

export type GlobalConfigProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	projectEarlyStopConfigContainer: ReactNode;
	projectLearningRateReductionConfigContainer: ReactNode;
	projectConfig: IProjectGlobalConfig;
};

const GlobalConfig = ({
	onChange,
	projectConfig,
	projectEarlyStopConfigContainer,
	projectLearningRateReductionConfigContainer,
}: GlobalConfigProps) => {
	const classes = useStyle();
	const globalConfig = projectConfig as IProjectGlobalConfig;

	return (
		<div>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<NumberInput onChange={onChange} propertyName="batch_size" propertyContent={globalConfig.batch_size} />
					<NumberInput onChange={onChange} propertyName="epochs" propertyContent={globalConfig.epochs} />
					{projectEarlyStopConfigContainer}
					{projectLearningRateReductionConfigContainer}
				</div>
			</div>
		</div>
	);
};

export default GlobalConfig;
