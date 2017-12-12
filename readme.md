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
- TodoList注释： 
	1. 以下任务未完成的点击即可显示完成再次点击即删除该项任务  
	2. 点击增加或者按回车即可发布任务  
	3. 任务超出todoList框出现滚动条  
	4. 添加新任务或者完成任务或者删除任务均有相应的消息内容提示   
	5. 点击完成之后完成的任务会被划掉并且相关项都会改变颜色  
	6. 当任务多的时候你可以点击搜索来搜索你需要的任务的id以及完成事项