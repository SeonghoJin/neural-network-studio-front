export enum StaticPath {
	DASHBOARD = '/dashboard',
	DASHBOARD_PROJECTS = `/dashboard/projects`,
	DASHBOARD_NEW_PROJECT = '/dashboard/projects/new',
	MAIN = '/',
	LOGIN = '/login',
	PROFILE = '/profile',
	PROFILE_MODIFY = '/profile/modify',
	PROJECT = '/project',
	PROJECT_SHARE_ROUTE = '/share/project',
	SIGN_UP = '/signup',
	ASSET_MAIN = '/asset',
}

export enum DynamicPath {
	PROJECT = '/project/:projectNo',
	PROJECT_FORMAT = '/project/%s',
	PROJECT_LEARN = '/project/:projectNo/learn',
	PROJECT_LEARN_FORMAT = '/project/%s/learn',
	PROJECT_CONFIG = '/project/:projectNo/config',
	PROJECT_CONFIG_FORMAT = '/project/%s/config',
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
	'/share/project': UndefinedPathNameNumber,
	'/dashboard/projects/new': UndefinedPathNameNumber,
};
