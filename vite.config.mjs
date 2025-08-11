// filepath: vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    // 指定入口 HTML 文件
    rollupOptions: {
      input: path.resolve(__dirname, 'src/views/index.html'),
    },
    // 确保输出目录是 'dist'
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});