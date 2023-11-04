# 虚拟社团

node >= 18.18.2
pnpm >= 8.6.5
npx >= 10.2.0

这是某所学校的社团，主要有学校日常活动，比赛，小趣事，线上活动，公告。主要围绕学生在校所需而打造的一个小平台

## 技术栈

`sqlite` + `typeorm` + `trpc` + `vue`

## 打包

```git
pnpm build
```

## 部署

##### docker部署方法

```git
# 打包资源
pnpm build

# 生成docker镜像文件
docker build -t xuni-shetuan:<tag> .
```

##### 其他部署方法

打包后会生成`output`目录

```git
# 进入打包好的资源
cd output

# 安装模块(让server的node_modules中拥有packages的链接)
pnpm install

# 运行服务器
node ./apps/server/index.js
```
