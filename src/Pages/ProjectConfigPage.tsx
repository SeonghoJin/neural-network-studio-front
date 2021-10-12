import ProjectConfigMain from '../components/project/projectConfig/projectConfigMain';
import ProjectConfigNav from '../components/project/projectConfig/projectConfigNav/projectConfigNav';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import selectorItemHeads, { SelectorMappingViewer } from '../components/project/projectConfig';
import useUpdateProjectConfig from '../hooks/useUpdateProjectConfig';

export const ProjectConfigPage = () => {
	const { loadingFallback, loading } = useUpdateProjectConfig();
	return (
		<div id="container">
			{loading && loadingFallback}
			<ProjectNav />
			<section className="modelset">
				<ProjectConfigNav />
				<div className="sec-container">
					<ProjectConfigMain selectorMappingViewer={SelectorMappingViewer} selectorItemHeads={selectorItemHeads} />
				</div>
			</section>
		</div>
	);
};
