module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
plugins: [ ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant'] ] 
    // "presets":[["es2015", { "modules": false }]],
    // "plugins":[
    //   [
    //     "component",
    //     {
    //       "libraryName": "element-ui",
    //       "styleLibraryName": "theme-chalk"
    //     }
    //   ]
    // ]
  }

