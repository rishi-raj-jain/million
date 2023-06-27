import { unplugin, babelPlugin } from './plugin';

export const raw = unplugin.raw;
export const vite = unplugin.vite;
export const webpack = unplugin.webpack;
export const rollup = unplugin.rollup;
export const rspack = unplugin.rspack;
export const esbuild = unplugin.esbuild;
export const next = (nextConfig: Record<string, any> = {}) => {
  return {
    ...nextConfig,
    webpack(config: Record<string, any>, options: Record<string, any>) {
      config.plugins.unshift(webpack({ mode: 'react', server: true }));

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
};
export const babel = babelPlugin;

export default {
  raw,
  vite,
  webpack,
  rollup,
  rspack,
  esbuild,
  next,
  unplugin,
  babel: babelPlugin,
};
