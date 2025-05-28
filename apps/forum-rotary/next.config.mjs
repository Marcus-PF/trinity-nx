import { fileURLToPath } from 'url'
import path from 'path'
import { withNx } from '@nx/next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
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

export default withNx(nextConfig)
