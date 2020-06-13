# ***Vue-Router***

`Vue官方前端路由控制器`

1. **后端路由：**对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；
2. **前端路由：**对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；
3. 在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由 (区别于后端路由)

## 基本使用

```js
// html
<template id="login">
    <h1>登录组件</h1>
</template>

// js
// 字面量方式创建组件模板对象
var login = {
    template: "#login"
};

const router = new VueRouter({
    // routes是一个数组, 其每一个对象对应一个路由
    routes: [
        // 匹配路由规则: 开头符合即可展示对应组件
        { path: "/login", component: login }
    ]
});
```



## 给路由组件传参

```js
// get方式传参		url =>  /login?id=10&name=ls
routes: [
    { path: "login", component: login }
]
在组件对象(组件模板)中访问 => this.$route.query	
在组件实例(DOM元素)中访问 => $route.query			// 包含get方式传递的参数

// params 占位符式传参		url => /login/10/ls
routes: [
    // 这里的匹配路径需要写入params参数占位符
    { path: "login/:id/:name", component: login } 
]
在组件对象中访问 => this.$route.params	
在组件实例中访问 => $route.params		// 包含params方式传递的参数, query为空
```



## 嵌套路由

```js
routes: [
    { 
        path: "/account",  // 注意: 不使用 <router-view> props => append 拼接url, 路径必须有 /
        component: account ,
        // 用routes 数组每一对象的children 来设置嵌套子路由
        children: [
            // 子路由无需 / 不然会以根路径请求, 但 router-link 的to="" 要写入完整的url 请求地址
            { path: "login", component: login },
            { path: "register", component: register }
        ]
    }
]

<router-link to="/account/login"></router-view>
```



## 命名视图

其实就是一个url分配多个不同组件的实现方式

`component`是复数形式的 **components**

```js
routes: [
    {
        path: "/", 
        // 这里的component是复数形式, 因为是多个
        components: {
            // default => 未命名的视图标签 => name="default"或没有 name属性
            default: header,
            // 键值对 => 键: 视图标签的name属性值, 无需属性绑定, 无需加引号
            // 			值: 视图标签所展示的 对应组件
            aside: aside 	
        }
    }
]

// html
<router-view name="aside"></router-view>
```



## router-link props

+ ***to="login"***

  请求路径 默认是用 router.push() 进行跳转目标位置

+ **tag**="span" defalut: a          

  渲染成的标签类型

+ **`active-class="cssClassName"` **

  设置 激活时的CSS 类名, 默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置

+ **`exact`** Boolean default: false      

  url 全匹配激活 active-class

+ **`event`** default: click  router-link 

  触发的事件类型; 可以是一个字符串或是一个包含字符串的数组

+ replace Boolean, default: false 

  会调用 `router.replace()` 而不是 `router.push()` 导航后不会留下 history 记录

+ **append** Boolean, default: false

  拼接上次路径跳转, 此时的 to="" 不加 **`/`**

+ exact-active-class 

  配置当链接被精确匹配的时候应该激活的 class, 注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的

`将激活的Class样式应用在外层元素`

```html
<router-link tag="li" to="/foo">
  <a>/foo</a>
</router-link>
```

`<a>` 将作为真实的链接 (它会获得正确的 `href` 的)，而 active-class 则设置到外层的 `<li>`。

[Vue-router-link](https://router.vuejs.org/zh/api/#router-link)	