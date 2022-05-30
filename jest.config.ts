import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	bail: false,
	verbose: true,
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': [
			'<rootDir>/.svelte-kit/dev/runtime/app$1',
			'<rootDir>/.svelte-kit/build/runtime/app$1'
		]
	},
	collectCoverageFrom: ['src/**/*.{ts,tsx,svelte,js,jsx}'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};

export default config;
