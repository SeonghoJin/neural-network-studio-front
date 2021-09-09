import { FC } from 'react';
import ProjectInputViewer from './ProjectConfigViewer/ProjectInputConfigViewer/ProjectInputViewer';
import ProjectGlobalConfigContainer from './ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectGlobalConfigContainer';
import ProjectOptimizerConfigContainer from './ProjectConfigViewer/ProjectOptimizerConfigViewer/ProjectOptimizerConfigContainer';

enum selectorItemHeads {
	'Global Config' = 'Global Config',
	'Optimizer' = 'Optimizer',
	'Upload File' = 'Upload File',
}

export type SelectorMappingViewerKey = keyof typeof selectorItemHeads;
export type SelectorMappingViewerType = {
	[K in SelectorMappingViewerKey]: FC<any>;
};

export const SelectorMappingViewer: SelectorMappingViewerType = {
	'Global Config': ProjectGlobalConfigContainer,
	Optimizer: ProjectOptimizerConfigContainer,
	'Upload File': ProjectInputViewer,
};

export default selectorItemHeads;
