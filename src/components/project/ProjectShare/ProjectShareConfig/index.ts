import GlobalConfigShareModeContainer from './GlobalConfigShareModeContainer';
import OptimizerConfigShareModeContainer from './OptimizerConfigShareModeContainer';
import { SelectorMappingViewerType } from '../../projectConfig';

export enum selectorItemHeadsShareMode {
	'Global Config' = 'Global Config',
	'Optimizer' = 'Optimizer',
}

export const SelectorMappingViewerShareMode: Pick<SelectorMappingViewerType, 'Global Config' | 'Optimizer'> = {
	'Global Config': GlobalConfigShareModeContainer,
	Optimizer: OptimizerConfigShareModeContainer,
};
