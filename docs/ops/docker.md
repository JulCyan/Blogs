# Docker



## 安装

**centos7下**

（1）yum 包更新到最新

```shell
sudo yum update
```

（2）安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

（3）设置yum源为阿里云

```shell
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

（4）安装docker

```shell
sudo yum install docker-ce
```

（5）安装后查看docker版本

```shell
docker -v
```

（6）设置ustc镜像

```shell
sudo vi /etc/docker/daemon.json
```

添加内容

```json
{
"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```



## 常用命令

**systemctl**命令是系统服务管理器指令


### 基本命令

```shell
systemctl start docker
systemctl stop docker
systemctl restart docker
systemctl status docker # 查看docker状态
systemctl enable docker # 开机启动
docker info 			# 查看docker概要信息
docker --help			# 查看docker帮助文档
```

### 镜像相关

1）查看镜像

```shell
docker images
```

REPOSITORY：镜像名称

TAG：镜像标签

IMAGE ID：镜像ID

CREATED：镜像的创建日期（不是获取该镜像的日期）

SIZE：镜像大小

这些镜像都是存储在Docker宿主机的/var/lib/docker目录下

2）搜索镜像

```shell
docker search 镜像名称
```

NAME：仓库名称

DESCRIPTION：镜像描述

STARS：用户评价，反应一个镜像的受欢迎程度

OFFICIAL：是否官方

AUTOMATED：自动构建，表示该镜像由Docker Hub自动构建流程创建的

3）其他

```shell
docker pull 镜像名称     		   	# 拉取镜像
docker rmi  镜像ID	  				# 删除镜像
docker rmi `docker images -q`    	# 删除所有镜像
```



### 容器相关

1）查看容器

```shell
docker ps 					# 查看正在运行中的容器
docker ps -a				# 查看所有容器
docker ps -l				# 查看最后一次运行的容器
docker ps -f status=exited  # 查看停止的容器
```

 2）创建与启动容器

```shell
docker run 		# 创建容器命令
```

创建容器常用的参数说明：

 -i：表示运行容器

 -t：表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端

 --name :为创建的容器命名

 -v：表示目录映射关系（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个－v做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上

 -d：在run后面加上-d参数,则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加-i -t两个参数，创建后就会自动进去容器）

 -p：表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个-p做多个端口映射

- 交互式方式创建容器

```shell
docker run -it --name=容器名称 镜像名称:标签 /bin/bash

exit		# 退出当前容器
```

- 守护式方式创建容器

```shell
docker run -di --name=容器名称 镜像名称:标签

docker exec -it 容器名称 (或者容器ID)  /bin/bash 	# 登录守护式容器
```

3）停止与启动容器

```
docker stop 容器名称（或者容器ID）	# 停止
docker start 容器名称（或者容器ID）	# 启动
```

4）文件拷贝

```shell
docker cp 需要拷贝的文件或目录 容器名称:容器目录	# 将文件拷贝到容器内
docker cp 容器名称:容器目录 需要拷贝的文件或目录	# 将文件从容器内拷贝出来
```

5）目录挂载

在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样就可以通过修改宿主机某个目录的文件从而去影响容器

创建容器 添加-v参数 后边为   宿主机目录:容器目录

```shell
docker run -di -v /usr/local/myhtml:/usr/local/myhtml --name=mycentos3 centos:7
```

如果共享的是多级的目录，可能会出现权限不足的提示

这是因为CentOS7中的安全模块selinux把权限禁掉了，需要添加参数  --privileged=true  来解决挂载的目录没有权限的问题

6）查看容器信息

```shell
# 查看容器运行的各种数据
docker inspect 容器名称（容器ID）	
# 输出IP地址
docker inspect --format='{{.NetworkSettings.IPAddress}}' 容器名称（容器ID）
```

7）删除容器

```shell
docker rm 容器名称（容器ID）
```



## 应用部署

### MySQL部署

```shell
# 拉取mysql镜像
docker pull centos/mysql-57-centos7
# 创建容器
docker run -di --name=tensquare_mysql -p 33306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
# -p 代表端口映射，格式为  宿主机映射端口:容器运行端口
# -e 代表添加环境变量  MYSQL_ROOT_PASSWORD  是root用户的登陆密码
```

