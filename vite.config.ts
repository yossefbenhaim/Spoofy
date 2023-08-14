import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
    const env = dotenv.config({ path: `.env.${mode}` }).parsed;
    return {
        server: {
            port: 5173,
            host: '0.0.0.0',
        },
        define: {
            'process.env': JSON.stringify(env),
        },
        plugins: [react(), tsconfigpaths()],
    };
});
