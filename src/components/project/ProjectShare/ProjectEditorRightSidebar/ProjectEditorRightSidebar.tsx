import { User } from '../../../../core/Socket/entities/User';
import imgProfile1 from '../../../../static/img/img_profile1.png';

const UserProfile = ({ user }: { user: User }) => {
	return (
		<>
			<div className="profile-state">
				<img src={imgProfile1} alt="프로필 사진" />
				<div className="state" />
			</div>

			<div className="user-id">{user.name}</div>
		</>
	);
};

export const ProjectEditorRightSidebar = ({ users }: { users: User[] }) => {
	return (
		<div className="sec-r">
			<div className="box1">
				<div className="top">
					<div className="txt">온라인</div>
					<div className="txt">{users.length}명</div>
				</div>

				<ol className="list-member">
					{users.map((user) => {
						return (
							<li key={user.id}>
								<UserProfile user={user} />
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};
