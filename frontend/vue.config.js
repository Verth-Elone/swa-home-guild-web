const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/App.vue',
      title: '<HOME> - Mirage Raceway [A]'
    }
  }
})
