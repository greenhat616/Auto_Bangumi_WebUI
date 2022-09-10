import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 识别原生web components
          isCustomElement: tag => tag === 'iconpark-icon',
        }
      }
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/mixin.scss';`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types')
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://192.168.0.2:7892'
    }
  }
})
