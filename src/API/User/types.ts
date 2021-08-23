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
	email: string;
	webSite: string;
}

export interface UserProfileToUpdateParams {
	profileImage: number;
	description: string;
	name: string;
	email: string;
	webSite: string;
}
