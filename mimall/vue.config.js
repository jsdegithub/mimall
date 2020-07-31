module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },

    lintOnSave: false,
    outputDir: 'dist',
    indexPath: 'index.html',
    // publicPath: 'mimall',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    }
}