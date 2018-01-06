docs目录：
https://make-in-china.github.io/HaoQiLab/play.html

start和build的配置文件:./config-overriders.js ( 重写 react-scripts-ts/config/webpack.config.dev.js 和  react-scripts-ts/config/webpack.config.prod.js的输出 )

启动项目
    yarn start or npm run start

    如果遇到[at-loader] ./node_modules/@types/react/index.d.ts:3566:13
    替换此文件内容为./src/Lib/react.d.ts的内容