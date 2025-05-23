#!/bin/bash

# I, President 网站部署脚本
# 作者：开心可乐
# 日期：2025

echo "========================================"
echo "  I, President 官网部署脚本"
echo "========================================"
echo

# 检查Netlify CLI是否已安装
if ! command -v netlify &> /dev/null; then
    echo "未检测到Netlify CLI。正在安装..."
    npm install -g netlify-cli
    echo "Netlify CLI 已安装。"
fi

# 优化图片资源
echo "正在检查图片资源..."
if ! command -v imageoptim &> /dev/null; then
    echo "提示：安装 ImageOptim CLI 可以优化图片 (https://imageoptim.com/command-line.html)"
    echo "跳过图片优化步骤。"
else
    echo "正在优化图片..."
    imageoptim ./images/*
    echo "图片优化完成。"
fi

# 验证HTML
echo "正在验证HTML文件..."
if command -v html5validator &> /dev/null; then
    html5validator --root .
else
    echo "提示：安装 html5validator 可以验证HTML文件 (pip install html5validator)"
    echo "跳过HTML验证步骤。"
fi

# 构建步骤（这里可以添加如压缩CSS、JS等步骤）
echo "正在准备部署..."

# 部署到Netlify
echo "正在部署到Netlify..."
netlify deploy --prod

echo
echo "========================================"
echo "  部署流程已完成"
echo "  访问 https://5xinghe.xyz 查看您的网站"
echo "========================================" 