import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    define: {
        'process.env': {
            BASE_API_URL: '/api',
        },
    },
    plugins: [
        vue(),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://localhost:44326/api', // https://{Domain}/api
                changeOrigin: true,
                secure: false,
                ws: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});
