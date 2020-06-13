---
- html 标签, css 样式
- 前端三老铁: html 结构代码, css 样式属性, js 交互
- 盒子模型
- 标准, 浮动 ,定位
---

# HTML

## **一、路径**

- 相对路径

   同级 文件名
   下一级 文件夹/文件名
   上一级 ../文件名 

- 绝对路径

​    完整的域名

> img图片标签: 
>
> - src: 图片路径 
>
> - alt: 图片显示失败出现的文本
> - title: 鼠标悬停时图片显示的文本
>
> a链接标签: 
>
> - herf 路径
>
> - target 链接打开方式
>
>   - _self 覆盖当前窗口打开(默认值)
>
>   - _blank 在新窗口打开

---

## **二、表格**
 ### 1. table 样式属性

   - rowspan 跨行合并, colspan跨列合并, 注意要清除被合并的单元格
   - table: 表格的所有内容都要在table里 
   - border: 表格的边框		
   - cellspacing: 边框之间的空白间隙,默认为2px		
   - cellpadding: 文字与边框的间隙,默认为1px		
   - align: 水平对齐方式	

### 2. table 基本结构

- caption: 表格的标题
- thead: 存放表头
- tr, th: 表头,会自行加粗和居中	
- tbody: 存放表格内容		
- tr, td: 行和单元格	
- tfoot: 一般不用 

---

## **三、表单**

### 1. form: 表单域

- 按钮效果实现需要在表单域内
- 提交表单时有附带文件时必须有 enctype="multipart/form-data" 属性;

### 2. disable: 禁用

- 禁用表单标签

### 3. 表单常用标签

#### a) input: 控件

- type 属性:
  - text: 文本框
  - password: 暗文密码框
  - radio: 单选框, 单选互斥需要 name属性分组关联
  - button: 普通按钮
  - submit: 提交按
  - reset: 重置按钮
  - image: 图片按钮
  - file: 文件域 行内multiple 多选
- value: 默认值, 一般用于记住密码的操作
- palaceholder: 占位符, 未输入之前的提示信息
- maxlength: 可输入的最大字符数量
- size: 输入框的宽度,一般很少用到
- checked: 默认选中

#### b) textarea: 文本域

- 禁用文本域拉动 resize: none

#### c) select: 下拉框

   - option: 下拉框选项
   - selected: 下拉框默认选中
   - `multiple`: 展示所有下拉选项

#### d) label: 绑定标签

   - for="id名"

   - 被绑定标签设置 id="id名"

   - label标签内嵌套标签也可实现绑定

     ---
