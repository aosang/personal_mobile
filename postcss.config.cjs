module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-px-to-viewport-8-plugin')({
      unitToConvert: 'px',        // 需要转换的单位，默认 'px'
      viewportWidth: 375,         // 设计稿的视口宽度（通常是设计师提供的宽度）
      viewportHeight: 667,        // 设计稿的视口高度（可选，默认自动计算）
      unitPrecision: 5,           // 转换后的精度
      propList: ['*'],            // 可以转换的属性列表，* 表示全部属性
      viewportUnit: 'vw',         // 转换成的视口单位，默认 vw
      fontViewportUnit: 'vw',     // 字体的视口单位，默认 vw
      selectorBlackList: ['.ignore', '.hairlines'], // 忽略的选择器，适用于某些元素不需要转换
      minPixelValue: 1,           // 小于或者等于此值的 px 单位不转换
      mediaQuery: false,          // 是否允许在媒体查询中转换 px
      replace: true,              // 是否直接替换原始 CSS 中的 px
      exclude: /node_modules/,    // 忽略 node_modules 目录
    })
  ]
}