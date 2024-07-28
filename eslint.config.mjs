import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	{
		rules: {
			'vue/multi-word-component-names': 0,
		},
		plugins: {
			'typescript-eslint': tsEslint.plugin,
		},
		languageOptions: {
			parserOptions: {
				parser: tsEslint.parser,
				// project: './tsconfig.json',
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
	},
	eslintConfigPrettier,
)
