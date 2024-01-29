module.exports = {
  /**
   * 在您的 tailwind.config.js 文件中，配置 purge 选项指定所有的 pages 和 components 文件，使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。
   */
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
