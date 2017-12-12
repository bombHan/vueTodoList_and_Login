### vue多页面模板项目
- `src/pages`存放页面入口，一个入口一个文件夹


   例如：  文件夹名称 `home`，入口文件应当如下，必须有对应的`js`文件

    **js（必须）** | pug |
    ---|---
    home.js | home.pug
- 支持`less`，或直接使用css
- 支持`mock`，在`mockup.js`中配置接口对应的`mock`文件，执行`npm run mock`可开启`mock`模式
- `http`请求封装，`store/urlConfig.js`对请求接口进行配置，可以在`src/constants/url`中记录请求服务名称。
- 在一个复杂页面中可以使用路由