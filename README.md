<p align="center">
	<img src="https://nginxproxymanager.com/github.png">
	<br><br>
	<img src="https://img.shields.io/badge/version-2.17.1-green.svg?style=for-the-badge">
	<a href="https://hub.docker.com/r/rivenio09/nginx-proxy-manager-zh">
		<img src="https://img.shields.io/docker/stars/rivenio09/nginx-proxy-manager-zh.svg?style=for-the-badge">
	</a>
	<a href="https://hub.docker.com/r/rivenio09/nginx-proxy-manager-zh">
		<img src="https://img.shields.io/docker/pulls/rivenio09/nginx-proxy-manager-zh.svg?style=for-the-badge">
	</a>
</p>

## Nginx Proxy Manager 中文版

本项目是基于[NginxProxyManager/nginx-proxy-manager](https://github.com/NginxProxyManager/nginx-proxy-manager)的中文翻译版本  

- 增加了简体中文  
- 将前端收到的 Gravatar 头像地址自动替换为中国访问更稳定的
  [Cravatar](https://cravatar.com/document/how-to-use-cravatar) 地址
- Docker 镜像：`rivenio09/nginx-proxy-manager-zh:latest`
- `docker/Dockerfile-zh` 以同版本官方镜像为基础，只覆盖了前端文件

## 使用说明
你只需要把官方的`docker.io/jc21/nginx-proxy-manager:latest`镜像换成`rivenio09/nginx-proxy-manager-zh:latest`即可
比如说最简设置的 docker-compose.yml  
```yml
services:
  app:
    image: 'docker.io/rivenio09/nginx-proxy-manager-zh:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

更多配置请参考 [源仓库](https://github.com/NginxProxyManager/nginx-proxy-manager) 和 [源文档](https://nginxproxymanager.com/setup/)

