/** @type {import('next').NextConfig} */
import { composePlugins, withNx } from '@nx/next';

const nextConfig = {
  transpilePackages: ['@trinity/ui'],
  nx: {},
};

const plugins = [withNx];

export default composePlugins(...plugins)(nextConfig);
