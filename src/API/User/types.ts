export interface UserProfileImage {
	id: number;
	url: string;
}

export interface SignUpParams {
	id: string;
	pw: string;
}

export interface UserProfile {
	name: string;
	profileImage: UserProfileImage;
	description: string;
	createTime: Date;
	updateTime: Date;
}

export interface UserProfileToUpdateParams {
	profileImage: UserProfileImage;
	description: string;
}

export interface UpdatedUserProfile {
	profileImage: UserProfileImage;
	description: string;
}
