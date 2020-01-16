/*
 * @Author: your name
 * @Date: 2020-01-16 17:23:26
 * @LastEditTime: 2020-01-16 17:24:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\vue.config.js
 */
module.exports = {
      css: {
          loaderOptions: {
          css: {},
           postcss: {
              plugins: [
                require('postcss-px2rem')({
                  remUnit: 37.5
                })
             ]
           }
         }
     }
}