import { FC } from 'react';
import ProjectOptimizerConfigViewer from './ProjectConfigViewer/ProjectOptimizerConfigViewer/ProjectOptimizerConfigViewer';
import ProjectInputViewer from './ProjectConfigViewer/ProjectInputConfigViewer/ProjectInputViewer';
import ProjectGlobalConfigContainer from './ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectGlobalConfigContainer';

enum selectorItemHeads {
	'Global Config' = 'Global Config',
	'Optimizer' = 'Optimizer',
	'Upload File' = 'Upload File',
}

type SelectorMappingViewerKey = keyof typeof selectorItemHeads;
export type SelectorMappingViewerType = {
	[K in SelectorMappingViewerKey]: FC<any>;
};

export const SelectorMappingViewer: SelectorMappingViewerType = {
	'Global Config': ProjectGlobalConfigContainer,
	Optimizer: ProjectOptimizerConfigViewer,
	'Upload File': ProjectInputViewer,
};

export default selectorItemHeads;
