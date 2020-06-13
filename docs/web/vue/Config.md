# 开发时遇到的配置问题


## 关于import* from* 引入

---

NodeJS中, require 与 import* from* 引入模块没有区别

```
引入的过程: 查找包的过程
首先, 如果没有指定路径 会默认的找项目根目录下 node_module 目录中的 对应包名 的 包
然后, 找到 包 下的 package.json 项目配置文件
其次, 在package.json 文件中找到 main 属性, 
	=> main 属性指定了这个包被加载时的入口文件
```

但是与在 HTML 中 用 script标签 直接引入 JS 文件是有区别的

script标签 引入JS的文件是完整版的

`因为 package.json 文件的 main 属性指定的入口文件是 运行时的JS代码 它是不完整的` 

开发中用 runtime-only 进行模块化开发

解决方法: 

1. 修改 main 属性 指定的入口文件 从 runtime-only 到 完整版
2. 指定 import* from* 引入的路径为 完整版路径
3. 配置 webpack.config.js 中的节点 resolve 中的 alias 别名

```js
module.exports = {
    resolve: {
    	alias: { // 修改 Vue 被导入时候的包的路径
     		"vue$": "vue/dist/vue.js"
    	}
 	}
}
```





## **exports default& exports**

---

exports default 默认导出, `只能导出一次, 多次导出会报错`

example: 	

​	export default router `or` exports default {}​	

exports `可以导出多次`

examples: 	 

​	export var info = obj

​	export var name = ones

两种不同的导出方式, 接收方式也不同

exports default 

​	=> import vurRouter from "router.js"  导出名可以任意

exports var info = obj

​	=> import `{info}` from ""  `导入名必须和导出名一致`, 故叫做`按需导入`

​	按需导入更改导入名 => 用 as 关键字, import {info as xxx} from ""

同时接收同一文件的两种不同导出并更改按需导入名

​	`import router, {info as xxx} from "router.js"`





## **Vue 组件**

---

.vue 文件就是 Vue开发使用的组件

**`组件只能访问自身内部成员`**

有三个标签 \<template\> \<script\> \<style\>

分别对应 HTML、JS、CSS

其中 template 标签中定义组件内容 与 普通组件无异

\<script\> 标签需写入 `export default {}` 导出组件的 配置(data(){return}, methods...)

\<style\> 标签可以使用 less, sass 等语法

需要在 style 标签行内加入 `lang="less"` 定义语法, 模板的 样式范围一般只用于模板区域, 故行内 `scoped`

`※` `在不修改 alias 别名引入 Vue 的情况下`, .vue 组件 只能用 render 函数, 而不能使用 components 定义

后直接在主页面使用, 就是说 runtime-only Vue 下 .vue 组件只能通过render 渲染



scoped 实现原理

给组件元素加 data-v-xxxxxx,  样式通过 属性选择器 实现





## **Vue-Router**

---

项目根目录下新建 router.js 文件用于 分配路由

`npm install vue-router -S` 运行时(生产)依赖

导入 组件 进行路由的分配, 与 普通 vur-router 使用无异

路由分配完成, 导出

​	`export default router`

当然, 在主页面使用也需要导入 vue-router 并进行手动安装

​	`import VueRouter from "vue-router"`

​	`Vue.use(VueRouter)`

在 主页面 导入路由控制器

​	`import router from "./router.js"`

将 router路由控制器 分配给 VM 实例的 router 属性





## **Mint UI**

---

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，可以按需导入组件，以达到减小项目体积的目的

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [
    ["@babel/preset-env"]
  ],
  "plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
```

引入部分组件，在 main.js 中

```javascript
import { Button, Cell, Toast } from 'mint-ui'

// CSS components
Vue.component(Button.name, Button)
// or
Vue.use(Button)

// JS components
Vue.prototype.$toast = Toast;


// 通过实例 this.$toast("OK") 访问

// 在组件内部需同时引入 Vue, 因为 组件只能访问组件自身内部成员
```





## vue-preview

缩略图插件

https://www.npmjs.com/package/vue-preview

npm i vue-preview -S