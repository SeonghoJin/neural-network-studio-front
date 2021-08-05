if (process.env.REACT_APP_SERVER_PREFIX === undefined || process.env.NODE_ENV === undefined) {
	throw new Error(
		"⚠️  Couldn't find .env.development.local or .env.production.local  ⚠️\n" +
			'If you run the npm run start script, you must write the .env.development.local file.\n' +
			'If you run the npm run build script, you must write the .env.production.local file.\n' +
			'The form for this file exists in the envTemplate.'
	);
}

export default {
	NODE_ENV: process.env.NODE_ENV,
	SERVER_PREFIX: process.env.REACT_APP_SERVER_PREFIX,
};
