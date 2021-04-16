# Linux

## 虚拟机与SecureCRT

### 配置静态IP

**1）NAT模式设置**

首先设置虚拟机中NAT模式的选项，打开VMware，点击“编辑”下的“虚拟网络编辑器”，设置NAT参数 

以网段 23 为例

![1618543567529](/images/ops/linux/1618543567529.png)

控制面板/所有控制面板项/网络连接 	VMware Network Adapter VMnet8保证是启用状态

**2）设置静态ip**

```shell
sudo vi /etc/sysconfig/network-scripts/ifcfg-ens33 # 修改网卡配置文件
```

![1618543866529](/images/ops/linux/1618543866529.png)

BOOTPROTO设置为静态static 
IPADDR设置ip地址 
NETMASK设置子网掩码 
GATEWAY设置网关 
ONBOOT设置为true在系统启动时是否激活网卡

```shell
sudo systemctl restartnetwork
```

**3）查看ip **

```
ifconfig
```

![1618544033254](/images/ops/linux/1618544033254.png)

**4）宿主机与虚拟机互 ping**



**5）连接外网**

虚拟机设置中 添加一块NAT模式 网卡 (网络适配器) 即可



### 注意事项

1）修改 虚拟网络编辑器中网段时要同步设置linux中的静态ip配置

2）不要设置 控制面板/所有控制面板项/网络连接  VMware Network Adapter VMnet8 中 Internet 

IPv4 的属性, 默认为自动获取 ip 即可 （使用windows 诊断也可）

3）CRT 中出现 The remote system refused the connection 但 宿主机可以 ping 通虚拟机时参考 **2）**

4）虚拟机 ping 通宿主机, 宿主机 ping 不通虚拟机, 参考 **2） 1）**

5）NAT 模式可以满足所有需求






## 组

####  应用 permission denied

```shell
# 以 docker 为例
sudo groupadd docker  			# 添加docker用户组, 报 groupadd：“docker”组已存在
sudo gpasswd -a $USER docker    # 将当前用户加入到docker用户组中
newgrp docker 					# 更新用户组docker
```

