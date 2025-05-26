# I, President 官方网站

这是"I, President"应用的官方网站项目，用于展示应用功能、介绍大臣团队、展示订阅计划以及提供用户支持。

## 项目结构

```
I,President-Website/
├── index.html             # 主页面HTML
├── css/                   # 样式文件夹
│   └── style.css          # 主样式表
├── js/                    # JavaScript文件夹
│   └── main.js            # 主交互脚本
├── images/                # 图片资源文件夹
│   ├── app_screenshots/   # 应用实际截图和图标
│   │   ├── logo.jpg       # 网站logo
│   │   ├── hero-app.jpg   # 主页展示图
│   │   ├── screen-*.jpg   # 应用功能截图
│   │   ├── minister-*.jpg # 大臣头像
│   │   └── icon-*.jpg     # 功能图标
│   └── README.md          # 图片资源清单
├── CNAME                  # GitHub Pages自定义域名配置
└── README.md              # 项目说明文档
```

## 技术栈

- HTML5
- CSS3 (响应式设计，弹性布局，网格布局)
- JavaScript (原生，无依赖)

## 特点

- 完全响应式设计，适配所有设备尺寸
- 现代化UI设计，符合最新网页设计趋势
- 轻量级，无需任何外部依赖或框架
- 优化的性能和加载速度
- SEO友好的HTML结构

## 部署指南

### 本地开发

1. 克隆仓库到本地：
   ```
   git clone https://github.com/[用户名]/5xinghe.xyz.git
   cd 5xinghe.xyz
   ```

2. 使用任意Web服务器托管文件，例如使用Node.js的http-server：
   ```
   npx http-server
   ```

3. 在浏览器中访问`http://localhost:8080`查看网站

### 使用GitHub Pages部署

1. 在[GitHub](https://github.com/)上创建账户

2. 创建名为`5xinghe.xyz`的新仓库

3. 上传网站文件到仓库：
   ```
   git init
   git add .
   git commit -m "初始网站文件"
   git remote add origin https://github.com/[用户名]/5xinghe.xyz.git
   git push -u origin main
   ```

4. 在GitHub仓库的Settings页面，找到Pages设置

5. 在Source选项中选择main分支，点击Save

6. 添加自定义域名`5xinghe.xyz`并保存

## 自定义域名设置 (5xinghe.xyz)

1. 在域名注册商处登录您的账户

2. 添加以下DNS记录，将您的域名指向GitHub Pages服务器:
   - A记录: @ -> 185.199.108.153
   - A记录: @ -> 185.199.109.153
   - A记录: @ -> 185.199.110.153
   - A记录: @ -> 185.199.111.153

3. 添加CNAME记录:
   - CNAME: www -> 5xinghe.xyz

4. 在GitHub仓库中确保存在CNAME文件，内容为`5xinghe.xyz`

5. 在GitHub Pages设置中勾选"Enforce HTTPS"启用SSL证书

## 维护和更新

### 更新内容

- 直接编辑`index.html`文件来更新网站内容
- 图片资源放在`images`文件夹中
  - 应用截图已整理到`images/app_screenshots`文件夹，命名规则清晰
  - 添加新截图时请保持相同命名规则并更新对应的HTML引用
- 样式调整在`css/style.css`中进行
- 交互功能修改在`js/main.js`中进行

### 添加新的应用截图

1. 将新的截图添加到`images/app_screenshots`文件夹
2. 在`index.html`中的`.screenshot-slider`部分添加新的滑块项:
   ```html
   <div class="screenshot-item">
     <img src="images/app_screenshots/screen-new.jpg" alt="新功能界面">
     <p>新功能描述</p>
   </div>
   ```

### SEO优化

- 网站已经包含基本的SEO元素，如标题、描述和响应式设计
- 定期更新内容以保持网站的活跃度
- 考虑添加网站地图`sitemap.xml`和机器人文件`robots.txt`
- 使用Google Search Console监控网站的搜索表现

## 联系信息

- 电子邮件: support@5xinghe.xyz
- 官网: https://5xinghe.xyz

## 版权

© 2025 I, President. 保留所有权利。 

<link rel="apple-touch-icon" sizes="180x180" href="images/app-icons/icon-180x180.png"> 