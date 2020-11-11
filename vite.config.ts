import type { UserConfig } from 'vite';

import { resolve } from 'path';
import { createProxy } from './build/vite/proxy';
import globbyTransform from './build/vite/plugin/transform'; // 文件解析函数
import dynamicImportTransform from './build/vite/plugin/dynamicImport'; // 动态引入函数
import { isDevFn, loadEnv } from './build/utils';

const pkg = require('./package.json');

const viteEnv = loadEnv();

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const {
  VITE_PORT,
  VITE_PUBLIC_PATH,
  VITE_PROXY,
  VITE_DROP_CONSOLE,
  // VITE_USE_CDN,
} = viteEnv;

const viteConfig: UserConfig = {
  port: VITE_PORT,
  hostname: 'localhost',
  open: false,
  minify: isDevFn() ? 'esbuild' : 'terser',
  base: VITE_PUBLIC_PATH,
  outDir: 'dist',
  sourcemap: false,
  assetsDir: '_assets',
  assetsInlineLimit: 4096,
  esbuildTarget: 'es2020',
  silent: false,
  alias: {
    '/@/': pathResolve('src'),
  },
  terserOptions: {
    compress: {
      drop_console: VITE_DROP_CONSOLE,
    },
  },
  define: {
    __VERSION__: pkg.version,
  },
  // cssPreprocessOptions: {
  //   less: {
  //     modifyVars: modifyVars,
  //     javascriptEnabled: true,
  //   },
  // },
  // optimizeDeps: {
  //   include: ['echarts/map/js/china', 'ant-design-vue/es/locale/zh_CN', '@ant-design/icons-vue'],
  // },
  proxy: createProxy(VITE_PROXY),
  // plugins: createVitePlugins(viteEnv),
}

export default {
  ...viteConfig,
  transforms: [globbyTransform(viteConfig), dynamicImportTransform(viteEnv)],
} as UserConfig;