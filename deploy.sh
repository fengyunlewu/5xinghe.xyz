#!/bin/bash

# 杭州星合新能源有限公司官网部署脚本
# 用于将网站更改推送到GitHub Pages

echo "🚀 开始部署杭州星合新能源有限公司官网..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    read -p "请输入提交信息: " commit_message
    git commit -m "$commit_message"
else
    echo "✅ 工作目录干净，没有未提交的更改"
fi

# 推送到GitHub
echo "📤 推送更改到GitHub..."
if git push origin main; then
    echo "✅ 成功推送到GitHub!"
    echo "🌐 网站将在几分钟内更新："
    echo "   主域名: https://5xinghe.xyz"
    echo "   备用域名: https://fengyunlewu.github.io/5xinghe.xyz"
else
    echo "❌ 推送失败，请检查网络连接或GitHub访问权限"
    echo "💡 您可以稍后手动运行: git push origin main"
fi

echo "🎉 部署脚本执行完成!" 