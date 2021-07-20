import { LocationProps, MatchProps } from '../core/types';

interface ProjectEditorParams{
  projectNo: string;
}

const ProjectEditor = (props : MatchProps<ProjectEditorParams> & LocationProps) => {
  const projectNo = props.match?.params?.projectNo;

  return (<div>{projectNo}</div>)
}

export default ProjectEditor;
