import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';



export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './src/locales'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['quill'],
    },

    server: {
        proxy: {
          '/api': {
            target: 'http://iotlab.trsc-ppc.gr:8088',
            changeOrigin: true,
            secure: false,
          },
        },
      },


});
//http://iotlab.trsc-ppc.gr:8088
//http://ov2xmp.trsc.net:8000