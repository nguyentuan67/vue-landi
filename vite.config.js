import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // compression({
    //   ext: '.gz', // Phần mở rộng tệp tin nén (ví dụ: .gz)
    //   algorithm: 'gzip', // Thuật toán nén (gzip, brotli, ...)
    //   deleteOriginFile: false, // Xóa tệp tin gốc sau khi nén
    //   verbose: true, // In thông báo chi tiết
    //   filter: /\.(js|css|json|html|svg|png|jpg)$/i, // Điều kiện để nén các tệp tin cần thiết (vd: js, css, json, html, svg)
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      staticDir: path.join(__dirname, 'dist/')
    }
  }
})
