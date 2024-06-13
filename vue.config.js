const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: 'http://iotlab.trsc-ppc.gr:8088/',
    
    }

//https://ov2xmp.trsc-ppc.gr/'


//https://ov2xmp.trsc.net/ --

//http://ov2xmp.trsc.net:8000/
//http://iotlab.trsc-ppc.gr:8088/

})
