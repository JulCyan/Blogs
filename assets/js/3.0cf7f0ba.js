(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(s,t,e){s.exports=e.p+"assets/img/1618543567529.214d4b66.png"},179:function(s,t,e){s.exports=e.p+"assets/img/1618543866529.24f53d86.png"},180:function(s,t,e){s.exports=e.p+"assets/img/1618544033254.7bc12b59.png"},195:function(s,t,e){"use strict";e.r(t);var a=e(6),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("h2",{attrs:{id:"虚拟机与securecrt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机与securecrt"}},[s._v("#")]),s._v(" 虚拟机与SecureCRT")]),s._v(" "),a("h3",{attrs:{id:"配置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态ip"}},[s._v("#")]),s._v(" 配置静态IP")]),s._v(" "),a("p",[a("strong",[s._v("1）NAT模式设置")])]),s._v(" "),a("p",[s._v("首先设置虚拟机中NAT模式的选项，打开VMware，点击“编辑”下的“虚拟网络编辑器”，设置NAT参数")]),s._v(" "),a("p",[s._v("以网段 23 为例")]),s._v(" "),a("p",[a("img",{attrs:{src:e(178),alt:"1618543567529"}})]),s._v(" "),a("p",[s._v("控制面板/所有控制面板项/网络连接 \tVMware Network Adapter VMnet8保证是启用状态")]),s._v(" "),a("p",[a("strong",[s._v("2）设置静态ip")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens33 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改网卡配置文件")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(179),alt:"1618543866529"}})]),s._v(" "),a("p",[s._v("BOOTPROTO设置为静态static\nIPADDR设置ip地址\nNETMASK设置子网掩码\nGATEWAY设置网关\nONBOOT设置为true在系统启动时是否激活网卡")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restartnetwork\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("**3）查看ip **")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ifconfig\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(180),alt:"1618544033254"}})]),s._v(" "),a("p",[a("strong",[s._v("4）宿主机与虚拟机互 ping")])]),s._v(" "),a("p",[a("strong",[s._v("5）连接外网")])]),s._v(" "),a("p",[s._v("虚拟机设置中 添加一块NAT模式 网卡 (网络适配器) 即可")]),s._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("1）修改 虚拟网络编辑器中网段时要同步设置linux中的静态ip配置")]),s._v(" "),a("p",[s._v("2）不要设置 控制面板/所有控制面板项/网络连接  VMware Network Adapter VMnet8 中 Internet")]),s._v(" "),a("p",[s._v("IPv4 的属性, 默认为自动获取 ip 即可 （使用windows 诊断也可）")]),s._v(" "),a("p",[s._v("3）CRT 中出现 The remote system refused the connection 但 宿主机可以 ping 通虚拟机时参考 "),a("strong",[s._v("2）")])]),s._v(" "),a("p",[s._v("4）虚拟机 ping 通宿主机, 宿主机 ping 不通虚拟机, 参考 "),a("strong",[s._v("2） 1）")]),s._v("\nx\n5）NAT 模式可以满足所有需求")]),s._v(" "),a("h2",{attrs:{id:"组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组"}},[s._v("#")]),s._v(" 组")]),s._v(" "),a("h4",{attrs:{id:"应用-permission-denied"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用-permission-denied"}},[s._v("#")]),s._v(" 应用 permission denied")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以 docker 为例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker  \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加docker用户组, 报 groupadd：“docker”组已存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpasswd -a "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" docker    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前用户加入到docker用户组中")]),s._v("\nnewgrp docker \t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新用户组docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);