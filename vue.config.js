const breakpoints = require('./src/breakpoints.json');

const isDevelopment = process.env.NODE_ENV === 'development';
const port = 8888;

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static/vue',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    // after: require('./mock/mock-server.js')
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/variables/colors";
          @use "@/assets/scss/variables/fonts";
          @use "@/assets/scss/mixins" as mx;
          @use "@/assets/scss/functions" as fn;
          $BREAKPOINT-XS: ${breakpoints.XS};
          $BREAKPOINT-SM: ${breakpoints.SM};
          $BREAKPOINT-MD: ${breakpoints.MD};
          $BREAKPOINT-LG: ${breakpoints.LG};
          $BREAKPOINT-XL: ${breakpoints.XL};
          $BREAKPOINT-XXL: ${breakpoints.XXL};
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', '.json'],
    },
  },
  chainWebpack(config) {
    if (!isDevelopment) {
      config.optimization.delete('splitChunks');
    }

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((loaderOptions) => {
        loaderOptions.transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: ['src', 'v-img'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href'],
          hero: ['src-md', 'src-xs', 'src=sm', 'src-lg', 'src-xl'],
          reward: 'src',
          'article-listing': 'src',
        };

        return loaderOptions;
      });
  },
};
