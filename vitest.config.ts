import { defineConfig } from 'vitest/config'
// https://vite.dev/config/
export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            reporter: ['json', 'json-summary'],
            reportOnFailure: true,
        },
        environment: 'jsdom',
        alias: {
            'react-transition-group': 'react-transition-group/cjs',
        },
        setupFiles: ['./src/setup.ts'],
    },
    resolve: {
        alias: {
            'react-transition-group': 'react-transition-group/cjs',
        },
    },
})
