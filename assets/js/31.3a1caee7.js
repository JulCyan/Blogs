(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{202:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("Vue-Router")])])]),s._v(" "),a("p",[a("code",[s._v("Vue官方前端路由控制器")])]),s._v(" "),a("ol",[a("li",[s._v("**后端路由：**对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；")]),s._v(" "),a("li",[s._v("**前端路由：**对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；")]),s._v(" "),a("li",[s._v("在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由 (区别于后端路由)")])]),s._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("登录组件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字面量方式创建组件模板对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#login"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// routes是一个数组, 其每一个对象对应一个路由")]),s._v("\n    routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 匹配路由规则: 开头符合即可展示对应组件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"给路由组件传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给路由组件传参"}},[s._v("#")]),s._v(" 给路由组件传参")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// get方式传参\t\turl =>  /login?id=10&name=ls")]),s._v("\nroutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("在组件对象")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("组件模板"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("中访问")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("在组件实例")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("中访问")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" $route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包含get方式传递的参数")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// params 占位符式传参\t\turl => /login/10/ls")]),s._v("\nroutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里的匹配路径需要写入params参数占位符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login/:id/:name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("在组件对象中访问")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params\t\n"),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("在组件实例中访问")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" $route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包含params方式传递的参数, query为空")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"嵌套路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[s._v("#")]),s._v(" 嵌套路由")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/account"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意: 不使用 <router-view> props => append 拼接url, 路径必须有 /")]),s._v("\n        component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用routes 数组每一对象的children 来设置嵌套子路由")]),s._v("\n        children"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 子路由无需 / 不然会以根路径请求, 但 router-link 的to="" 要写入完整的url 请求地址')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"register"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" register "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("link to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/account/login"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"命名视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名视图"}},[s._v("#")]),s._v(" 命名视图")]),s._v(" "),a("p",[s._v("其实就是一个url分配多个不同组件的实现方式")]),s._v(" "),a("p",[a("code",[s._v("component")]),s._v("是复数形式的 "),a("strong",[s._v("components")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里的component是复数形式, 因为是多个")]),s._v("\n        components"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// default => 未命名的视图标签 => name="default"或没有 name属性')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 键值对 => 键: 视图标签的name属性值, 无需属性绑定, 无需加引号")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \t\t\t值: 视图标签所展示的 对应组件")]),s._v("\n            aside"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aside \t\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aside"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"router-link-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-link-props"}},[s._v("#")]),s._v(" router-link props")]),s._v(" "),a("ul",[a("li",[a("p",[a("em",[a("strong",[s._v('to="login"')])])]),s._v(" "),a("p",[s._v("请求路径 默认是用 router.push() 进行跳转目标位置")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("tag")]),s._v('="span" defalut: a')]),s._v(" "),a("p",[s._v("渲染成的标签类型")])]),s._v(" "),a("li",[a("p",[s._v("**"),a("code",[s._v('active-class="cssClassName"')]),s._v(" **")]),s._v(" "),a("p",[s._v("设置 激活时的CSS 类名, 默认值可以通过路由的构造选项 "),a("code",[s._v("linkActiveClass")]),s._v(" 来全局配置")])]),s._v(" "),a("li",[a("p",[a("strong",[a("code",[s._v("exact")])]),s._v(" Boolean default: false")]),s._v(" "),a("p",[s._v("url 全匹配激活 active-class")])]),s._v(" "),a("li",[a("p",[a("strong",[a("code",[s._v("event")])]),s._v(" default: click  router-link")]),s._v(" "),a("p",[s._v("触发的事件类型; 可以是一个字符串或是一个包含字符串的数组")])]),s._v(" "),a("li",[a("p",[s._v("replace Boolean, default: false")]),s._v(" "),a("p",[s._v("会调用 "),a("code",[s._v("router.replace()")]),s._v(" 而不是 "),a("code",[s._v("router.push()")]),s._v(" 导航后不会留下 history 记录")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("append")]),s._v(" Boolean, default: false")]),s._v(" "),a("p",[s._v('拼接上次路径跳转, 此时的 to="" 不加 '),a("strong",[a("code",[s._v("/")])])])]),s._v(" "),a("li",[a("p",[s._v("exact-active-class")]),s._v(" "),a("p",[s._v("配置当链接被精确匹配的时候应该激活的 class, 注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的")])])]),s._v(" "),a("p",[a("code",[s._v("将激活的Class样式应用在外层元素")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tag")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("/foo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("<a>")]),s._v(" 将作为真实的链接 (它会获得正确的 "),a("code",[s._v("href")]),s._v(" 的)，而 active-class 则设置到外层的 "),a("code",[s._v("<li>")]),s._v("。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-link",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue-router-link"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);