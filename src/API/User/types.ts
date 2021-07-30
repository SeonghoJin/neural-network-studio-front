export interface SignUpParams {
	id: string;
	pw: string;
}

export interface UserProfile {
	name: string;
	profileImage: string;
	description: string;
	createTime: Date;
	updateTime: Date;
}

export interface UserProfileToUpdateParams {
	profileImage: string;
	description: string;
}

export interface UpdatedUserProfile {
	profileImage: string;
	description: string;
}
