import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir) => path.join(__dirname, dir);


import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
     // 注册所有的svg文件生成svg雪碧图
     createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")], //svg图片存放的目录
      symbolId: "icon-[name]", // symbol的id
      inject: "body-last", // 插入的位置
      customDomId: "__svg__icons__dom__" // svg的id
    
    })
  ],
  resolve:  {
    alias: {
      "@":resolve('src'),
      "@assets":resolve('src/assets'),
      "@components":resolve('src/components')
    }
    
},
server: {
  host: '0.0.0.0', // 或者你的本地 IP 地址
}
})