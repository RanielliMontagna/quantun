/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const reactPlugin = react() as UserConfig['plugins']

export default defineConfig({
  plugins: [reactPlugin],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
  },
})
