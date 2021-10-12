import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';
import { UserListResponseDto } from '../../../../core/Socket/dto/userList.response.dto';

export const VisitAlarmModule = () => {
	const { userList } = useUserList();
	const [visitAlarmUserList, setVisitAlarmUserList] = useState<UserListResponseDto | null>(null);
	const { enqueueSnackbar } = useSnackbar();
	useEffect(() => {
		const beforeUserNumber = visitAlarmUserList?.users?.length || 0;
		const afterUserNumber = userList?.users?.length || 0;

		if (beforeUserNumber < afterUserNumber) {
			const diff = userList?.users
				?.filter((user) => {
					return !visitAlarmUserList?.users?.find((alarmUserList) => {
						return alarmUserList.id === user.id;
					});
				})
				.map((user) => {
					return user.name;
				});
			enqueueSnackbar(`${diff?.join('님, ')}님이 들어왔습니다.`, { variant: 'info' });
		} else if (beforeUserNumber > afterUserNumber) {
			const diff = visitAlarmUserList?.users
				?.filter((user) => {
					return !userList?.users?.find((userListUser) => {
						return userListUser.id === user.id;
					});
				})
				.map((user) => {
					return user.name;
				});

			enqueueSnackbar(`${diff?.join('님, ')}님이 나갔습니다.`, { variant: 'info' });
		}
		setVisitAlarmUserList(userList);
	}, [visitAlarmUserList, setVisitAlarmUserList, userList, enqueueSnackbar]);

	return <></>;
};
