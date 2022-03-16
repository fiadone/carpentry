import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{html,twig}'],
    exclude: [
      '.git/**',
      'bin/**',
      'dist/**',
      'node_modules/**',
      'public/**'
    ]
  },
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px'
    }
  }
})
