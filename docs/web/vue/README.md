---
VueJS的个人学习笔记
代码及分析
---

# **VueJS**

what's it?

Vue.js 是一套构建用户界面的框架，**只关注视图层**，它不仅易于上手，还便于与第三方库或既有项目整合

---

## 概念


- 框架与库

  库(插件) => 封装的JS操作DOM对象的方法, 提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某个需求，可以很容易切换到其它库实现需求

  框架 => 是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目

- MVC模式

  M 数据模型 => 操作数据库 => 模型与数据格式无关, 就是说可以接收控制器的操作却呈现给不同的视图 

  V 视图层 => 用户界面 => 呈现给用户的内容及交互请求

  C 控制器 => 业务逻辑 => 接收视图层请求并调用数据模型进行操作

- MVVM模型

  Model-View-ViewModel

  将 Model通过 ViewModel关联 View, 同步 Model(JS对象)与 View(DOM对象)

  [MVVM详解](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001475449022563a6591e6373324d1abd93e0e3fa04397f000)

  ![MVC与MVVM](file:///F:\Data for Web\Summary Knowledge Point\15_VueJS\diagram\01_MVC和MVVM的关系图解.png)

- 组件化与模块化

  组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我

  们需要什么样的功能，就可以去调用对应的组件即可

  组件化和模块化的不同：

  - 模块化： 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一
  - 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用



## ***Vue实例的生命周期***

+ 什么是生命周期：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期！
+ [生命周期钩子](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)：就是生命周期事件的别名而已；
+ 生命周期钩子 = 生命周期函数 = 生命周期事件
+ 主要的生命周期函数分类：
 - 创建期间的生命周期函数：
   + beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
   + created：实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
   + beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中
   + mounted：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
 - 运行期间的生命周期函数：
  + beforeUpdate：状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
  + updated：实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
 - 销毁期间的生命周期函数：
  + beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
  + destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。



## ***响应式原理***

为了更好的学习, 理解Vue

1. 利用Object.defineProperty 静态方法 将data 对象内的所有属性成员转化为getter和setter

   每个组件实例都有相应的 **watcher** 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 

   `setter` 被调用时，会通知 `watcher` 重新计算，从而致使它关联的组件得以更新

2. Vue 不允许在已经创建的实例上`动态`添加新的根级响应式属性 (root-level reactive property), 然而

   它可以使用 `Vue.set(object, key, value)` 方法将响应属性添加到data 根级成员对象上

   ```js
   根级响应式属性就是data下的属性成员
   // 给VM 实例已有根级响应式属性添加新成员
   vm.$set(obj, "name", "zhangsan");  or   this.$set(obj, "age", 18);
   ```

   如果向一个已有对象添加多个属性，如使用 `Object.assign()` 或`_.extend()` 方法来添加属性, 但这样添加

   到对象上的新属性`不会触发更新`。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：

   ```js
   添加多个根级响应式属性的新成员
   // 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
   this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
   ```

   由于 Vue 不允许动态添加根级响应式属性，所以`必须在初始化实例前声明根级响应式属性，哪怕只是空值`

3. `异步更新队列`

   Vue执行的是异步更新数据, 当data 中的值发生改变时, 不会立即更新到DOM里去, 而是开启一个队列, 并

   缓冲在同一事件循环中发生的所有数据改变, 就算多次触发 watcher 也只开启一个队列, 这种在缓冲时去

   除重复数据对于避免不必要的计算和 DOM 操作上非常重要, 然后, 在下一个事件循环tick(消息提取)中, 

   Vue会刷新队列并 执行替换DOM中数据的操作(数据已去重);

   ```js
   // 代码解析
   <div id="example">{{message}}</div>
   
   var vm = new Vue({
     el: '#example',
     data: {
       message: '123'
     }
   });
   
   vm.message = 'new message' // 更改数据
   // 这时事件循环队列还没有更新, 因为队列还有tick没有完成, 所以 DOM中的数据自然没有替换
   vm.$el.textContent === 'new message' // false // 
   // 当异步更新数据完成时执行的函数
   Vue.nextTick(function () {
       // 此时数据已经更新完成, 因为上一个事件循环队列已经完成, 队列刷新完成
     vm.$el.textContent === 'new message' // true
   });
   // 这时事件循环队列更新
   -------------------------------------------------------------
   VM实例中用
   this.$nextTick(function () {
       this.$el.textContent === 'new message' // true
   })
   ```

   [Vue响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)



## 结构代码

```html
<script src="vue.js"></script>
<div id="app">
    <p v-cloak>++++++++ {{ msg }} ----------</p>
    <h4 v-text="msg">==================</h4>
    <div>{{msg2}}</div>
    <div v-text="msg2"></div>
    <div v-html="msg2">123123</div>
    <input type="button" value="按钮" @click="show">
</div>
```



```js
var vm = new Vue({
    el: "#app",		// vm调度者控制区域
    data: { // 定义数据对象
        msg: "Hello World",	
    },
    methods: {	// 定义方法 需要注意的是: 函数默认this指向vm实例, 不要使用箭头函数
        show() { alert("hi"); }  
    },
    filters: { // 定义私有过滤器
        dataFormat(data, [,param]) {}
    },
    directives: { "focus": (el, binding) => {} }, // 定义私有指令
    components: { login: { template: '#login' } }, // 定义私有模板
    router: new VueRouter(), // 定义路由控制器, 详见Vue-Router
    watch: { msg: function () {} }, // 定义监听数据
    computed: { msg: function () { return msg + "" } }, // 定义计算属性
})
```



## ***directive***

`指令函数能够接受所有合法的 JavaScript 表达式`

####**常用指令**


| 指令                 | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| {{ msg }}            | 差值表达式, 不会替换元素原本内容, 但是会有闪烁               |
| v-cloak              | 解决差值表达式的闪烁问题                                     |
| v-text=''            | 替换元素内容, 没有闪烁问题, 但不能解析HTML标签               |
| v-html=''            | 与 v-text 的区别在于, 可以解析HTML标签                       |
| v-bind:              | 属性绑定机制, 所以可以使用`表达式 + "String"`拼接, 简写 `:属性名="表达式"` |
| v-on:click='fn.name' | 事件绑定机制, 在vm 调度者 methods 里写入事件处理函数, 简写: `@事件名` |
| v-model:'msg'        | 实现表单元素与Model数据的双向绑定, 只能运用于表单元素        |
| v-for="item in list" | ↓                                                            |
| v-if='bool'          | ↓↓                                                           |
| v-show='bool'        | ↓↓↓                                                          |
| v-else='bool'        | 配合v-if使用, 与其相反                                       |
| :is='componentName'  | 切换组件                                                     |
| v-pre                | 跳过指令编译                                                 |
| v-once               | 只编译一次, 跳过之后的                                       |

#### **事件修饰符**


| 事件修饰符 | 作用                    |
|--| ----------------------- |
|@click.stop| 阻止事件冒泡                     |
|.prevent| 阻止默认行为                    |
|.capture| 使用事件捕获 |
|.once|事件只触发一次, 包括事件修饰符|
|.self|只有在事件触发对象是`自身`时才会触发事件|



#### ***v-for***

```html
// v-for 可以遍历数组, 复杂数组, 对象, 用法是 行内:
// 数组: v-for="(item, index) in list"
// 注意: 在遍历对象时有第三个可遍历的值 v-for="(val, key, index) in obj" 目的是为了 :key= 值 绑定组件
<p v-for="(item, index) in list" :key="index">
    <input type="checkbox">{{item}}---{{index}}
</p>
// 在使用组件时(example: input:checkbox), 需用到 :key=值 绑定组件, 不然会出现添加新元素时复选框与原元素绑定失效的情况
// :key= 值; 值只能是String或Number类型的数据
// 在遍历目标是Number 数字时, v-for="count in 10, count是从 1开始的
```



#### ***v-if&v-show***

```html
<div v-if="Boolean">
<div v-show="Boolean">
// 值为true时显示, 为false时消失并不占据文档流
// 两者的区别在于, v-if 显示与消失是通过创建于删除元素实现的, 创建时会获取焦点
   			     v-show 是通过设置display:none/block 属性实现的
// 当元素频繁切换显示状态的情况下使用 v-show, 在只有极少可能加载的情况下使用 v-if, 因为如果从使用到结束都没有加载过一次, 显然, v-show 的初始化渲染浪费性能
```



#### **v-bind:class& style**			

```html
// 用vue控制class与style样式
.red { color: "red" ; ...}
.thin {...}
.active {...}
.italic {...}
// :class
1. 数组
<h1 :class="['red', 'thin']">这是一个邪恶的H1</h1>
2. 数组中的三元表达式
<h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的H1</h1>
3. 数组中的嵌套对象
<h1 :class="['red', 'thin', {'active': isactive}]">这是一个邪恶的H1</h1>
4. 直接使用对象
<h1 :class="{red:true, italic:true, active:true, thin:true}">这是一个邪恶的H1</h1>
// 对象键 可以省略 ""	


// :style
1. 直接写入对象
<h1 :style="{color: 'red', 'font-size': '40px'}">这是一个善良的H1</h1>
2. 或是在data内定义样式对象, 直接写入对象名
<h1 :style="h1StyleObj">这是一个善良的H1</h1>
3. 多个data 内定义的样式对象
<h1 :style="[h1StyleObj, h2StyleObj]">这是一个善良的H1</h1>

当然, :class也可以写入定义的样式对象
```



#### **按键修饰符**

*配置按键修饰符*

```html
<input @keyup.enter="add"> // 当input被选中时监听键盘按下 enter 键事件
```

内置的按键修饰符
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

自定义按键修饰符

```js
// 通过 Vue.config.keyCodes.名称 = 按键值 来自定义案件修饰符的别名：
Vue.config.keyCodes.f2 = 113;

// 使用
<input type="text" v-model="name" @keyup.f2="add">
```



#### ***`自定义指令`***

自定义全局指令

```js
// 定义一个全局的指令, 指令名称为 focus, 
Vue.directive("focus", {
    // bind 钩子函数: 只调用一次, 指令第一次绑定到元素时调用
    bind: (el, binding) => {
    // el: 当元素使用指令时, 会将元素转换为JS原生的DOM对象, 并传递给 el
    // binding: 获取有关指令的信息
    binding.name // 获取指令的名称, 不包含 v-
    binding.value // 获取指令绑定值的计算结果
    binding.expression // 获取指令值的表达式
    // 更多详见Vue文档 => 自定义指令
	},
    
    inserted: () => {}	// 当元素被挂载到浏览器时触发	
    updata: () => {}	// 当元素所在组件更新时(可能会在子节点更新之前)调用, 可能会触发多次
})
```

自定义私有指令(局部)

```js
let vm = new Vue({
    data: {},
    methods: {},
    filters: {},
    directives: {
        "focus": (el, binding) => {} // 这样的简写将会把函数自定绑定在 bind, updata 两个钩子上
    }
});
```



## filter

`过滤器只能用于差值表达式 {{}} 和 v:bind 属性绑定的model数据`

**全局过滤器**

```js
// 全局过滤器必须定义在要使用全局过滤器的组件之前才会生效
Vue.filter("filterName", (data [,param ='']*) => {
    // param1:data 需要过滤的数据
    // param2+: 传递的参数
    // example:
    return `${data}${param}`;                    
});
```



**私有过滤器(局部)**

```js
let vm = new Vue({
    data: {},
    methods: {},
    filters: {
        dataFormat(data, [,param]) {}
    }
});
```



使用

```html
<h1>{{msg | dataFormat("yyyy-mm-dd")}}</h1>
<input :value="new Date() | dataFormat('yyyy-mm-dd')">
```



## ***component***


组件化是以前端界面划分的, 与模块化不是一个概念, 组件化是为了划分UI界面, 为了易于操作以及代码的重用, 模块化则是为了逻辑的划分, 使每一模块的职能单一

#### ***`※`***

1. `全局组件必须声明在要使用的VM实例控制区域之前`
2. `无论以何种方式声明的组件template指向的模板内容, 其根节点有且只有一个, 就算是外部模板也要有根节点`
3. `组件使用方式有两种, 一是组件名作为标签名使用, 二是用component标签和:is指定组件名(String)使用`


#### **定义全局组件**

```js
// 1. -------------------------------------------------------------------------
	// 使用Vue.extend 创建全局组件模板内容
let com1 = Vue.extend({
    		template: "<h1>第一种创建全局组件的方式</h1>"
		   });

	// 使用Vue.component 定义全局组件
Vue.component("login", com1); 
/* param1: 组件名
/* param2: 组件的模板内容
*/
// 故可简写为
Vue.component("login", Vue.extend({
    	template: <h1>第一种创建全局组件的方法的简写方式</h1>";
	}));


// 2.  -------------------------------------------------------------------------
	// 其实是第一种创建全局组件更为简洁的方式
Vue.component("login", {
    	template: <h1>第二种创建全局组件的方式</h1>";
});


// 3. -------------------------------------------------------------------------
	// 使用外部模板定义组件template 指向的模板内容
Vue.component("someWords", {
    template: "#tpl"
});

let vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    filters: {},
    directives: {},
});


// 4. -------------------------------------------------------------------------
	// 使用更为简洁的字面量方式定义外部组件模板对象, 不能真正的用于html 中
const login = {
    template: "#tpl"
}
```


```html
// html
<div id="app">
    <login></login> // 全局模板可以在任何其声明之后的VM实例中使用
    				// 私有组件只能在对应的VM实例控制区域中使用
</div>
<div id="app2">
    <login></login>
</div>
<!-- 使用模板作为template指向内容, 则模板必须声明在VM实例控制区域之外 -->
<template id="tpl">
    <!-- 组件模板的根节点 -->
    <div>
        <h1>这是用template 标签在VM实例操作节点外部创建的组件模板</h1>
        <h4>这个比较好用</h4>
        <h3>用法没有区别, 只是将需要的模板内容通过template 标签定义</h3>
    </div>
</template>
```



#### ***定义私有组件(局部)***

```js
let vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    filters: {},
    directives: {},
    // VM实例的 私有组件
    components: {
        someWords : { // 定义组件名, 无需引号, 私有组件是一个对象
            template : "#tpl", // 指定组件使用的模板内容
            
            // 为什么要使用函数来定义组件的data成员?
            	// 当使用组件时, data函数会自执行并返回一个对象, 这样使用data成员与普通方式无异
            // but, 当同一组件多次使用时, 因为每次data 都会重新调用并返回一个只能自己访问的对象来保存数			据, 这样同种组件之间就不会出现数据公用, 以达到互不干扰的目的
            // so, data 函数其返回值不能是引用类型, 否则仍然会共用数据
            	// 当然, 如果为了数据共用, 可以不写或者, return 引用数据类型
            data: function () 
                return {
                    msg: "私有组件的data成员",
                    num: 0
                }
            }
        }
    },
                 
// Vue 生命周期钩子	
    beforeCreate() {}, // data, methdos 初始化之前, 这时的Vm实例只有默认的事件和钩子函数
                 
    created() {},   // data, methods 等已经初始化完成, 这个时候是最早可以访问 vm实例成员的时间
    
    beforeMount() {}, 
    // 在VNode虚拟节点挂载之前, 这时的虚拟节点已经创建完成, 但还没有挂载到浏览器里,此时只存在内存中
        
    mounted() {},   // 挂载之后, 这个时候已经可以访问DOM 里的节点了
        
    beforeUpdate() {}, 
    // 在VNode虚拟节点更新之前, 这时的data, methods 等已经更新完成, 但是新的数据还没有被更新到浏览器上
        
    updated() {}, // 这时更新后的data, methods 等已经同步到了DOM中
        
    beforedestroy() {}, // VM实例销毁之前, 这时仍然可以访问data, methods等成员
        
    destroyed() {} // VM实例已经被完全销毁了
});
```



#### 父子组件传值

```html
<body>
<div id="app">
    <input type="button" value="改变msg" @click="change">
    <h1>{{ msg }}</h1>
<!--父子组件传值: 
通过实例化的子组件, 属性绑定机制进行父组件传值 => v-bind:props变量名="父组件传递的值" -->
    
    <!-- 父子组件传递方法:
通过实例化子组件进行事件绑定机制, 接收父组件传递的方法 => v-on:触发函数名="父组件传递的方法"-->
    <son :msgf="msg" @changef="change"></son>
</div>
<template id="son">
    <div style="border: solid 1px black;">
        <input type="button" value="子按钮1" @click="show(msgf)">
        <!-- 子组件使用父组件传值, 与普通使用方式无异 -->
        <h3>{{ msgf }}</h3>
        <!-- 使用子组件自身的方法, 这个方法会触发父组件的方法可以传递参数-->
        <input type="button" value="子按钮2" @click="tiggerchange(msgf)">
    </div>
</template>
</body>
```



```js
    /*  组件中 props 与 data的区别:
data是自身定义的成员 但props是接受父级组件传递的值的引用, 修改引用值父组件data值会发生变化,
所以尽量不要用子组件修改传递值 
	就算要修改也要通过 父组件传递方法 触发父组件方法并传递参数使其自行修改
     */
    let son = {
        template: "#son",
        data: function () {
            return {
                msg: "子组件的msg",
                name: "",
                content: ""
            }
        },
        methods: {
            show(val) {
                console.log(val);
            },
            // 子组件定义函数来触发父组件传递的方法,
            // 定义方式 this.$emit("触发函数", [,param]*)
            tiggerchange(msg) {
                console.log(msg);
                console.log(this.msgf); // 函数内部访问 props 与 data成员与普通使用方式无异
                this.$emit("changef",msg);
            }
        },
        // 在子组件的 props 属性中接收父组件传值, props是一个数组
        props: ['msgf'],

    };

    let vm = new Vue({
        el: "#app",
        data: {
            msg: "父组件的msg"
        },
        methods: {
            change(val="") {
                console.log(val);
                this.msg = "父组件的MSG加强了++++"+val;
            }
        },
        filters: {},
        directives: {},
        components: {
            son
        }
    })
```



#### **组件切换**

```html
// 两个组件用v-if v-else 可以, 但是多个组件呢?
<component :is="componentName"></component>
使用Vue 提供的component 标签进行多个组件之间的切换, 需要注意的是, 组件名需要是字符串格式
component标签实现 组件切换是用创建销毁
组件切换的动画?
<transition mode="out-in"> <!-- 通过 mode 属性,设置组件切换时候的动画模式 -->
    <component :is="componentName"></component>
</transition>

<style>
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }
</style>
```



## watch

监听实例内数据变化, 主要用于非DOM元素数据

```js
const vm = new Vue({
	el: "#app",
    watch: {
       $route(newVal, oldVal) {} // 监听路由变化的处理函数
    }
})
```



## computed

提供被定义属性的计算方式, 当被定义属性计算方式内数据发生变化时, 被定义属性会重新计算

计算结果会被缓存, 方便使用 => 当个多个地方使用同一属性时, 数据改变时只会计算一次

```js
const vm = new Vue({
    el: "#app",
    data: {
        demo: ""
    }
    computed: {
        value() {
            // 定义computed属性 计算函数时, 必须使用return 将计算方式结果返回
            return this.demo + "";
        }
    }
});
// html
<div id="app">
    <input type="text" v-model="value">
	<input type="text" v-model="demo">  
</div>
```



## render

模块化开发时渲染 VM 实例

```js
var login = {
    template: "<h1>登录组件</h1>"
};

const vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    // redner 是 Vue配置对象的其中一个, 其作用也是渲染模板生成HTML, 
    // 与components 不一样的是 render渲染出来返回的HTML会将原 VM 实例控制区域替换
    render: function (createElement) {
        return createElement(login);
    }
})

render: c => c(login) // 简写, 参数为1, 不带{}将自动返回 => 后结果(箭头函数的特性)
```



## Special Attributes

#### ref

```html
<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
```

ref 用来给元素或子组件注册引用信息

在VM实例中 this.$refs.xxx 获取元素或子组件实例的引用信息, 以便必要时操作DOM元素	

`关于 ref 注册时间的重要说明`：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！`$refs` 也不是响应式的，因此你不应该试图用它在模板中做数据绑定



#### key

详见 v-for



#### is

用于组件的切换

`<component :is="componentName"></component>`



##***Vue-resource***

`Vue中的 Ajax`

除了 vue-resource 之外，还可以使用 `axios` 的第三方包实现实现数据的请求

#### 全局设置

```js
// 全局设置请求域名, 这样做请求地址前不能加 /
Vue.http.options.root = 'http://vue.studyit.io';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
// 全局设置 请求头
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
// 不能处理 REST/HTTP 请求, 如 PUT，PATCH 和 DELETE, 解决:
Vue.http.options.emulateHTTP = true;
```

#### Axios全局配置

```js
axios.defaults.baseURL = 'https://api.example.com'; // 全局设置请求域名,
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

#### GET

```js
getInfo() { // get 方式获取数据
  this.$http.get('http://127.0.0.1:8899/api/getlunbo').then(res => {
    console.log(res.body);
  })
}
// res.body与 res.data 都可以获取到响应体, 但推荐使用res.body
```
#### POST

```js
postInfo() {
  var url = 'http://127.0.0.1:8899/api/post';
  // post 方法接收三个参数：
  // 参数1： 要请求的URL地址
  // 参数2： 要发送的数据对象
  // 参数3： 指定post提交的编码类型为 application/x-www-form-urlencoded
  this.$http.post(url, { name: 'zs' }, { emulateJSON: true }).then(res => {
    console.log(res.body);
  });
}
```
#### JSONP

由于浏览器的安全性限制，不允许AJAX跨域访问 (协议不同、域名不同、端口号不同) 数据接口，浏览器认为这种访问不安全

```js
jsonpInfo() { // JSONP形式从服务器获取数据
  var url = 'http://127.0.0.1:8899/api/jsonp';
  this.$http.jsonp(url).then(res => {
    console.log(res.body);
  });
}
```

可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP（注意：根据JSONP的实现原理，知晓，JSONP只支持Get请求)










