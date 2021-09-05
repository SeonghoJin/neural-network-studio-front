import { FC } from 'react';
import ProjectGlobalConfigViewer from './ProjectConfigViewer/ProjectGlobalConfigViewer';
import ProjectOptimizerConfigViewer from './ProjectConfigViewer/ProjectOptimizerConfigViewer';
import ProjectInputViewer from './ProjectConfigViewer/ProjectInputViewer';

enum selectorItemHeads {
	'Global Config' = 'Global Config',
	'Optimizer' = 'Optimizer',
	'Upload File' = 'Upload File',
}

type SelectorMappingViewerKey = keyof typeof selectorItemHeads;
export type SelectorMappingViewerType = {
	[K in SelectorMappingViewerKey]: FC;
};

export const SelectorMappingViewerShareMode: SelectorMappingViewerType = {
	'Global Config': ProjectGlobalConfigViewer,
	Optimizer: ProjectOptimizerConfigViewer,
	'Upload File': ProjectInputViewer,
};

export const SelectorMappingViewer: SelectorMappingViewerType = {
	'Global Config': ProjectGlobalConfigViewer,
	Optimizer: ProjectOptimizerConfigViewer,
	'Upload File': ProjectInputViewer,
};

export default selectorItemHeads;
