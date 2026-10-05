import { copyFileSync, writeFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const pagesFiles = {
  name: 'github-pages-branch-files',
  closeBundle() {
    copyFileSync('docs/index.html', 'docs/404.html')
    writeFileSync('docs/.nojekyll', '')
  },
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/UKRtehnika/' : '/',
  build: { outDir: 'docs', emptyOutDir: true },
  plugins: [react(), tailwindcss(), pagesFiles],
}))
