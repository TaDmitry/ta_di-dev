module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
		'body-max-line-length': [2, 'always', 160],
		'subject-case': [0],
	},
};
