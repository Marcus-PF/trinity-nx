import { fileURLToPath } from 'url'
import path from 'path'
import { composePlugins, withNx } from '@nx/next'
import withMDX from '@next/mdx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withMdxSupport = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
  transpilePackages: ['@trinity/ui'],
  nx: {},
  webpack: (config) => {
    config.resolve.alias['@trinity/ui'] = path.resolve(
      __dirname,
      '../../libs/ui/src'
    )
    return config
  },
}

export default composePlugins(withNx, withMdxSupport)(nextConfig)
