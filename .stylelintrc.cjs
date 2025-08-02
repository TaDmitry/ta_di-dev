/** @type {import('stylelint').Config} */
module.exports = {
	extends: ['stylelint-config-standard'],
	customSyntax: 'postcss-scss',
	rules: {
		'custom-property-empty-line-before': null,
		'declaration-block-no-redundant-longhand-properties': null,
		'media-feature-range-notation': null,
	},
};
