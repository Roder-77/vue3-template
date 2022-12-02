import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVue3Resolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
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
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
            customDomId: '__svg__icons__dom__',
        }),
        Components({
            resolvers: [BootstrapVue3Resolver()],
        }),
    ],
    server: {
        host: '0.0.0.0',
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
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/mixin.scss";',
            },
        },
    },
});
