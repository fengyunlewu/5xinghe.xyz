# I, President 官网部署指南

本文档提供详细的部署步骤，帮助您将"I, President"官方网站部署到GitHub Pages并绑定到您的自定义域名`5xinghe.xyz`。

## 1. 使用GitHub Pages部署（推荐方式）

GitHub Pages是GitHub提供的静态网站托管服务，完全免费，配置简单，并支持自定义域名和SSL证书。

### 1.1 准备工作

- 确保您已准备好所有图片资源并放入`images`文件夹
  - 应用截图已经放置在`images/app_screenshots/`文件夹中，包括各界面截图和图标
  - 其他图标和UI资源请参照`images/README.md`中的清单准备
- 检查所有链接是否正确，特别是App Store下载链接
- 确保您拥有GitHub账号

### 1.2 创建GitHub仓库

1. 登录您的GitHub账号
2. 点击右上角"+"图标，选择"New repository"
3. 仓库名称设置为：`5xinghe.xyz`（这将使您的网站可以通过 https://[用户名].github.io/5xinghe.xyz 访问）
4. 或者设置为：`[用户名].github.io`（这将使您的网站可以通过 https://[用户名].github.io 访问）
5. 设置仓库为公开（Public）
6. 点击"Create repository"创建仓库

### 1.3 上传网站文件

#### 方法1：使用Git命令行

1. 打开终端
2. 导航到项目文件夹：`cd ~/Desktop/I,President-Website`
3. 初始化Git仓库：`git init`
4. 添加所有文件：`git add .`
5. 提交更改：`git commit -m "初始网站文件"`
6. 添加远程仓库：`git remote add origin https://github.com/[用户名]/5xinghe.xyz.git`
7. 推送到GitHub：`git push -u origin master`（或`main`，取决于您的默认分支）

#### 方法2：直接上传文件

1. 访问您刚创建的GitHub仓库页面
2. 点击"Add file" > "Upload files"
3. 将`I,President-Website`文件夹中的所有文件拖放到上传区域
4. 添加提交信息："初始网站文件"
5. 点击"Commit changes"

### 1.4 启用GitHub Pages

1. 在GitHub仓库页面，点击"Settings"
2. 在左侧导航栏中找到"Pages"
3. 在"Source"部分，选择您的主分支（master或main）
4. 点击"Save"
5. 等待几分钟，GitHub会自动构建并部署您的网站
6. 部署完成后，您将看到一个提示消息，显示您的网站URL

## 2. 配置自定义域名（5xinghe.xyz）

### 2.1 在GitHub Pages添加自定义域名

1. 在GitHub仓库页面，点击"Settings"
2. 在左侧导航栏中找到"Pages"
3. 在"Custom domain"部分，输入`5xinghe.xyz`
4. 点击"Save"
5. 勾选"Enforce HTTPS"选项，启用SSL证书（可能需要等待DNS配置完成才能勾选）

### 2.2 创建CNAME文件

GitHub会自动在您的仓库中创建一个`CNAME`文件，内容为您的自定义域名。如果没有自动创建，请手动添加：

1. 在GitHub仓库页面，点击"Add file" > "Create new file"
2. 文件名输入`CNAME`（注意全部大写，没有文件扩展名）
3. 文件内容输入`5xinghe.xyz`
4. 点击"Commit new file"

### 2.3 设置DNS记录

您需要在域名注册商处更新DNS设置，指向GitHub Pages的服务器：

1. 登录您的域名注册商账户
2. 找到`5xinghe.xyz`的DNS设置
3. 添加以下A记录，将域名指向GitHub Pages的IP地址：
   - 主机名：`@`
   - 值：`185.199.108.153`
   - 值：`185.199.109.153`
   - 值：`185.199.110.153`
   - 值：`185.199.111.153`
   - TTL：自动或600（或最小可设置值）
4. 添加CNAME记录（如果您想同时支持www子域名）：
   - 主机名：`www`
   - 值：`[用户名].github.io`或您的自定义域名`5xinghe.xyz`
   - TTL：自动或600

### 2.4 验证DNS配置

1. 等待DNS更改生效（通常需要30分钟到24小时）
2. 使用命令行工具验证配置：
   ```
   dig 5xinghe.xyz +noall +answer
   ```
3. 确认返回的IP地址与GitHub Pages的IP地址匹配
4. 在GitHub仓库的"Settings" > "Pages"页面，确认自定义域名已生效
5. 勾选"Enforce HTTPS"选项启用SSL证书（如果之前未勾选）

## 3. 测试您的网站

部署完成后，通过以下步骤确认网站运行正常：

1. 访问`https://5xinghe.xyz`验证网站是否加载
2. 检查所有图片是否正确显示
3. 测试响应式设计（调整浏览器大小或使用开发者工具的设备模拟）
4. 验证所有链接和按钮是否正常工作
5. 测试不同浏览器（Chrome, Safari, Firefox, Edge）
6. 使用手机和平板电脑测试

## 4. 维护与更新

### 4.1 更新网站内容

1. 在本地修改网站文件
2. 提交更改到GitHub：
   ```
   git add .
   git commit -m "更新内容描述"
   git push
   ```
3. 或者通过GitHub网页界面上传/编辑文件
4. GitHub Pages会自动重新构建您的网站

### 4.2 监控网站状态

1. 在GitHub仓库的"Settings" > "Pages"页面查看部署状态
2. 使用像Google Search Console这样的工具监控您网站的性能和可访问性

## 5. 问题排查

如果遇到部署问题，请尝试以下步骤：

1. 检查GitHub Pages部署状态
2. 验证DNS设置是否正确
3. 使用[DNS验证工具](https://www.whatsmydns.net/)检查DNS传播情况
4. 查看GitHub Actions日志（如果启用）以了解构建错误
5. 确认CNAME文件存在且内容正确
6. 参考[GitHub Pages文档](https://docs.github.com/cn/pages)获取更多信息

## 6. 常见问题解答

### 6.1 为什么我的自定义域名配置后无法访问？
- DNS传播可能需要时间，请等待24小时后再检查
- 确认您的A记录和CNAME记录配置正确
- 检查GitHub Pages设置中的自定义域名是否正确

### 6.2 为什么我的网站无法启用HTTPS？
- 确保DNS配置完全生效后再勾选"Enforce HTTPS"选项
- GitHub需要验证您对域名的所有权，这可能需要24小时
- 检查是否有重复或冲突的DNS记录

### 6.3 如何验证SSL证书是否正确配置？
- 在浏览器中访问`https://5xinghe.xyz`，查看地址栏是否显示锁图标
- 使用SSL检查工具，如[SSL Labs](https://www.ssllabs.com/ssltest/)

## 7. 其他资源

- [GitHub Pages文档](https://docs.github.com/cn/pages)
- [GitHub Pages自定义域名配置](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [SSL证书问题排查](https://docs.github.com/cn/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

如有任何问题，请联系开发团队获取支持。 