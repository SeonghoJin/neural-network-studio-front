export enum StaticPath {
	DASHBOARD = '/dashboard',
	DASHBOARD_PROJECTS = `/dashboard/projects`,
	MAIN = '/',
	LOGIN = '/login',
	PROFILE = '/profile',
	PROFILE_MODIFY = '/profile/modify',
	PROJECT = '/project',
	SIGN_UP = '/signup',
	ASSET_MAIN = '/asset',
}

export enum DynamicPath {
	PROJECT = '/project/:projectNo',
	PROJECT_CONFIG = '/project/:projectNo/config',
	PROJECT_SHARE = '/share/project/:projectNo/room/:roomNo',
	PROJECT_SHARE_FORMAT = '/share/project/%s/room/%s',
	PROJECT_SHARE_CONFIG = '/share/project/:projectNo/room/:roomNo/config',
	PROJECT_SHARE_CONFIG_FORMAT = '/share/project/%s/room/%s/config',
}

export type PagePathKey = keyof typeof StaticPath;
export const UndefinedPathNameNumber = 0;

export const pagePathNameToNumber: {
	[k in StaticPath]: number;
} = {
	'/dashboard/projects': 1,
	'/asset': 2,
	'/dashboard': UndefinedPathNameNumber,
	'/profile/modify': UndefinedPathNameNumber,
	'/': UndefinedPathNameNumber,
	'/login': UndefinedPathNameNumber,
	'/profile': UndefinedPathNameNumber,
	'/project': UndefinedPathNameNumber,
	'/signup': UndefinedPathNameNumber,
};
