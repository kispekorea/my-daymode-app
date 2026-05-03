import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  // 1. 저장소 이름이 'daymode'가 맞다면 반드시 이대로!
  base: '/daymode/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      // 2. 경로 인식을 위해 필수
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  build: {
    // 3. 빌드 결과물이 나올 폴더 이름 확인
    outDir: 'dist',
  }
});
