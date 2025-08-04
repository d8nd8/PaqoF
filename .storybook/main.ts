// .storybook/main.ts
import path from 'path'
import type { StorybookConfig } from '@storybook/react-vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    baseConfig.resolve = {
      ...(baseConfig.resolve || {}),
      alias: {
        ...(baseConfig.resolve?.alias as Record<string, string>),
        '@icons': path.resolve(__dirname, '../src/assets/icons'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svg'],
    }

    baseConfig.plugins = baseConfig.plugins || []
    baseConfig.plugins.unshift(
      tsconfigPaths(),
      svgr({
        include: '**/*.svg',
        svgrOptions: { icon: true },
      })
    )

    return baseConfig
  },
}

export default config
