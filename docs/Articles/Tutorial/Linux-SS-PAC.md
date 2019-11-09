# Shadowsocks+PAC in linux 
> 真香

## 链接

* [安装Shadowsocks-qt5](https://www.litcc.com/2016/12/29/Ubuntu16-shadowsocks-pac/index.html)
* [安装PAC](https://github.com/JinnLynn/genpac)

以下介绍在我这台机子上起作用的。

## 正文

安装`Shadowsocks`以及`genpac`以及`vpss`账号都略过。假设你们已经有了。

1. 生成`autpproxy.pac`

  ```bash
  genpac --proxy="SOCKS5 127.0.0.1:1080" --gfwlist-local=./gfwlist.txt -o autoproxy.pac
  ```
  
  [gfwlist.txt](https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt)保存为本地gfwlist.txt(虽然支持在线模式，但是我一直获取不成功，只要保存下来之后才行）

2. 设置自动代理配置

  ![autopac](https://raw.githubusercontent.com/JiangWeixian/articles/master/%E6%95%99%E7%A8%8B/img/autopac.png)

  **注意是file://+autoproxy.pac地址**

3. 启动代理以及链接`SS`。**注意如果你此时正在链接SS，请务必断开再连接一次**

