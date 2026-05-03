import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-daymode-app/', // 이 줄이 있어야 깃허브 주소 경로를 제대로 인식합니다!
})
