import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(() => ({
  publicDir: 'static',
  plugins: [
    vue(),
    vueJsx(),
    basicSsl(),
    Components({
      dts: true,
      include: [/src\/components/],
    }),
  ].filter(_ => _),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@editor': fileURLToPath(new URL('./src/editor', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
  },
  server: {
    https: true,
    port: 8088,
    strictPort: true,
  },
}));
