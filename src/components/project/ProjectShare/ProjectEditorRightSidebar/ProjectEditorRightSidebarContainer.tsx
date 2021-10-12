import { ProjectEditorRightSidebar } from './ProjectEditorRightSidebar';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';

export const ProjectEditorRightSidebarContainer = () => {
	const { userList } = useUserList();
	return <>{(userList?.users && <ProjectEditorRightSidebar users={userList.users} />) || <CircleLoading />}</>;
};
