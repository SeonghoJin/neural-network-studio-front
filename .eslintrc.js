module.exports = {
	extends: [
		'prettier',
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
	},
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'no-shadow': 'off',
		'linebreak-style': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'arrow-body-style': ['off'],
		camelcase: 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'off',
	},
};
