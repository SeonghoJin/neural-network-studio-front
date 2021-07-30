export default {
	NODE_ENV: process.env.NODE_ENV || 'development',
	DB_HOST: process.env.REACT_APP_DB_HOST || 'localhost:3306',
	SERVER_PREFIX: process.env.REACT_APP_SERVER_PREFIX || 'localhost:3000',
	TEST_SERVER_PREFIX: process.env.REACT_APP_TEST_SERVER_PREFIX || 'localhost:3000',
};
