import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import * as glob from "glob";

export default defineConfig({
    build: {
        modulePreload: false
    },
    plugins: [
        laravel({
            input:
                glob.sync([
                    'resources/js/**/*.ts',
                ]),
            refresh: true,
        }),
    ],
});
