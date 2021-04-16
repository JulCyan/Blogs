(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{184:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[e("strong",[s._v("centos7下")])]),s._v(" "),e("p",[s._v("（1）yum 包更新到最新")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（2）安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（3）设置yum源为阿里云")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（4）安装docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（5）安装后查看docker版本")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（6）设置镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加内容")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ustc")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或 docker 中国")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("p",[e("strong",[s._v("systemctl")]),s._v("命令是系统服务管理器指令")]),s._v(" "),e("h3",{attrs:{id:"基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start docker\nsystemctl stop docker\nsystemctl restart docker\nsystemctl status docker "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker状态")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\ndocker info \t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker概要信息")]),s._v("\ndocker --help\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker帮助文档")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"镜像相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关"}},[s._v("#")]),s._v(" 镜像相关")]),s._v(" "),e("p",[s._v("1）查看镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("REPOSITORY：镜像名称")]),s._v(" "),e("p",[s._v("TAG：镜像标签")]),s._v(" "),e("p",[s._v("IMAGE ID：镜像ID")]),s._v(" "),e("p",[s._v("CREATED：镜像的创建日期（不是获取该镜像的日期）")]),s._v(" "),e("p",[s._v("SIZE：镜像大小")]),s._v(" "),e("p",[s._v("这些镜像都是存储在Docker宿主机的/var/lib/docker目录下")]),s._v(" "),e("p",[s._v("2）搜索镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker search 镜像名称\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("NAME：仓库名称")]),s._v(" "),e("p",[s._v("DESCRIPTION：镜像描述")]),s._v(" "),e("p",[s._v("STARS：用户评价，反应一个镜像的受欢迎程度")]),s._v(" "),e("p",[s._v("OFFICIAL：是否官方")]),s._v(" "),e("p",[s._v("AUTOMATED：自动构建，表示该镜像由Docker Hub自动构建流程创建的")]),s._v(" "),e("p",[s._v("3）其他")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull 镜像名称     \t\t   \t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\ndocker rmi  镜像ID\t  \t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\ndocker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker images -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("    \t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有镜像")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"容器相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器相关"}},[s._v("#")]),s._v(" 容器相关")]),s._v(" "),e("p",[e("strong",[s._v("1）查看容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" \t\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行中的容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -l\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最后一次运行的容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看停止的容器")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("2）创建与启动容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建容器命令")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建容器常用的参数说明：")]),s._v(" "),e("p",[s._v("-i：表示运行容器")]),s._v(" "),e("p",[s._v("-t：表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端")]),s._v(" "),e("p",[s._v("--name :为创建的容器命名")]),s._v(" "),e("p",[s._v("-v：表示目录映射关系（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个－v做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上")]),s._v(" "),e("p",[s._v("-d：在run后面加上-d参数,则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加-i -t两个参数，创建后就会自动进去容器）")]),s._v(" "),e("p",[s._v("-p：表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个-p做多个端口映射")]),s._v(" "),e("ul",[e("li",[s._v("交互式方式创建容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -it --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("容器名称 镜像名称:标签 /bin/bash\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出当前容器")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("守护式方式创建容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("容器名称 镜像名称:标签\n\ndocker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器名称 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("或者容器ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  /bin/bash \t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录守护式容器")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("重命名容器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker rename 原容器名称 新容器名称\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("3）停止与启动容器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker stop 容器名称（或者容器ID）\t# 停止\ndocker start 容器名称（或者容器ID）\t# 启动\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("4）文件拷贝")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 需要拷贝的文件或目录 容器名称:容器目录\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件拷贝到容器内")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器名称:容器目录 需要拷贝的文件或目录\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件从容器内拷贝出来")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("5）目录挂载")])]),s._v(" "),e("p",[s._v("在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样就可以通过修改宿主机某个目录的文件从而去影响容器")]),s._v(" "),e("p",[s._v("创建容器 添加-v参数 后边为   宿主机目录:容器目录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -di -v /usr/local/myhtml:/usr/local/myhtml --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mycentos3 centos:7\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果共享的是多级的目录，可能会出现权限不足的提示")]),s._v(" "),e("p",[s._v("这是因为CentOS7中的安全模块selinux把权限禁掉了，需要添加参数  --privileged=true  来解决挂载的目录没有权限的问题")]),s._v(" "),e("p",[e("strong",[s._v("6）查看容器信息")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器运行的各种数据")]),s._v("\ndocker inspect 容器名称（容器ID）\t\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出IP地址")]),s._v("\ndocker inspect --format"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.NetworkSettings.IPAddress}}'")]),s._v(" 容器名称（容器ID）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("7）删除容器")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器名称（容器ID）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"应用部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用部署"}},[s._v("#")]),s._v(" 应用部署")]),s._v(" "),e("h3",{attrs:{id:"mysql部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql部署"}},[s._v("#")]),s._v(" MySQL部署")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取mysql镜像")]),s._v("\ndocker pull centos/mysql-57-centos7\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建容器")]),s._v("\ndocker run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tensquare_mysql -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("33306")]),s._v(":3306 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" mysql\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 代表端口映射，格式为  宿主机映射端口:容器运行端口")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 代表添加环境变量  MYSQL_ROOT_PASSWORD  是root用户的登陆密码")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"迁移与备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迁移与备份"}},[s._v("#")]),s._v(" 迁移与备份")]),s._v(" "),e("p",[s._v("以容器 mynginx 为例")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将容器保存为镜像")]),s._v("\ndocker commit mynginx mynginx_img\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像备份, 将镜像保存为tar 文件")]),s._v("\ndocker save -o mynginx.tar mynginx_img\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除掉mynginx_img镜像, 然后恢复")]),s._v("\ndocker rmi mynginx_img\ndocker load -i mynginx.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),e("h3",{attrs:{id:"什么是dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是dockerfile"}},[s._v("#")]),s._v(" 什么是Dockerfile")]),s._v(" "),e("p",[s._v("Dockerfile是由一系列命令和参数构成的脚本，这些命令应用于基础镜像并最终创建一个新的镜像。")]),s._v(" "),e("p",[s._v("1、对于开发人员：可以为开发团队提供一个完全一致的开发环境；\n2、对于测试人员：可以直接拿开发时所构建的镜像或者通过Dockerfile文件构建一个新的镜像开始工作了；\n3、对于运维人员：在部署时，可以实现应用的无缝移植。")]),s._v(" "),e("h3",{attrs:{id:"常用命令-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("命令")]),s._v(" "),e("th",[s._v("作用")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("FROM image_name:tag")]),s._v(" "),e("td",[s._v("定义了使用哪个基础镜像启动构建流程")])]),s._v(" "),e("tr",[e("td",[s._v("MAINTAINER user_name")]),s._v(" "),e("td",[s._v("声明镜像的创建者")])]),s._v(" "),e("tr",[e("td",[s._v("ENV key value")]),s._v(" "),e("td",[s._v("设置环境变量 (可以写多条)")])]),s._v(" "),e("tr",[e("td",[s._v("RUN command")]),s._v(" "),e("td",[s._v("是Dockerfile的核心部分(可以写多条)")])]),s._v(" "),e("tr",[e("td",[s._v("ADD source_dir/file dest_dir/file")]),s._v(" "),e("td",[s._v("将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后自动解压")])]),s._v(" "),e("tr",[e("td",[s._v("COPY source_dir/file dest_dir/file")]),s._v(" "),e("td",[s._v("和ADD相似，但是如果有压缩文件并不能解压")])]),s._v(" "),e("tr",[e("td",[s._v("WORKDIR path_dir")]),s._v(" "),e("td",[s._v("设置工作目录")])])])]),s._v(" "),e("h3",{attrs:{id:"使用脚本创建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本创建镜像"}},[s._v("#")]),s._v(" 使用脚本创建镜像")]),s._v(" "),e("p",[s._v("1）创建目录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" –p /usr/local/dockerjdk8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2）下载jdk-8u171-linux-x64.tar.gz并上传到服务器（虚拟机）中的/usr/local/dockerjdk8目录")]),s._v(" "),e("p",[s._v("3）创建文件Dockerfile  "),e("code",[s._v("vi Dockerfile")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#依赖镜像名称和ID\nFROM centos:7\n#指定镜像创建者信息\nMAINTAINER JulCyan\n#切换工作目录\nWORKDIR /usr\nRUN mkdir  /usr/local/java\n#ADD 是相对路径jar,把java添加到容器中\nADD jdk-8u171-linux-x64.tar.gz /usr/local/java/\n\n#配置java环境变量\nENV JAVA_HOME /usr/local/java/jdk1.8.0_171\nENV JRE_HOME $JAVA_HOME/jre\nENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH\nENV PATH $JAVA_HOME/bin:$PATH\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("4）执行命令构建镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker build -t='jdk1.8' .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意后边的空格和点，不要省略")]),s._v(" "),e("p",[s._v("5）查看镜像是否建立完成")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker-私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库"}},[s._v("#")]),s._v(" Docker 私有仓库")]),s._v(" "),e("h3",{attrs:{id:"私有仓库搭建与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库搭建与配置"}},[s._v("#")]),s._v(" 私有仓库搭建与配置")]),s._v(" "),e("p",[s._v("1）拉取私有仓库镜像（此步省略）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2）启动私有仓库容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -di --name=registry -p 5000:5000 registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3）假设虚拟机静态ip 为"),e("code",[s._v("192.168.23.129")])]),s._v(" "),e("p",[s._v("访问 http://192.168.23.129:5000/v2/_catalog 看到"),e("code",[s._v('{"repositories":[]}')]),s._v(" 表示私有仓库搭成功并且内容为空")]),s._v(" "),e("p",[s._v("4）修改daemon.json")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加以下内容，保存退出。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.23.129:5000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此步用于让 docker信任私有仓库地址")]),s._v(" "),e("p",[s._v("5）重启docker 服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"镜像上传至私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像上传至私有仓库"}},[s._v("#")]),s._v(" 镜像上传至私有仓库")]),s._v(" "),e("p",[s._v("1）标记此镜像为私有仓库的镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tag 镜像名格式为 remotehost/[命令空间]/仓库名")]),s._v("\ndocker tag jdk1.8 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".23.129:5000/jdk1.8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("2）再次启动私服容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker start registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3）上传标记的镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker push 192.168.23.129:5000/jdk1.8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);