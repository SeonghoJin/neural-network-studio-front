export enum PagePathName {
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

export type PagePathKey = keyof typeof PagePathName;
export const UndefinedPathNameNumber = 0;

export const pagePathNameToNumber: {
	[k in PagePathName]: number;
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
