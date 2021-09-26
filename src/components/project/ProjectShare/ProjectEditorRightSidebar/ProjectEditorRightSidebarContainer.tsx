import { ProjectEditorRightSidebar } from './ProjectEditorRightSidebar';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';

export const ProjectEditorRightSidebarContainer = () => {
	const { userList } = useUserList();
	if (userList?.users === undefined) {
		return <></>;
	}
	return <ProjectEditorRightSidebar users={userList.users} />;
};
