# **去掉烦人的星号 (AI Markdown Fixer)**

[English](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/blob/main/README_EN.md) | [中文](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/raw/refs/heads/main/README.md)

这是一个轻量级的 Tampermonkey (油猴) 脚本，用于解决各大 AI 网站（如 Gemini, ChatGPT, Grok, NotebookLM 等）偶尔出现的 Markdown 渲染失败问题。

当 AI 生成的内容中包含未被正确渲染的 \*\*（通常代表加粗）时，此脚本会自动将其移除，保持阅读体验的整洁，同时智能避开代码块和输入框，防止误删重要符号。

## **✨ 功能特点**

* **自动净化**：自动检测并移除页面普通文本中的 \*\* 符号。  
* **实时监控**：使用 MutationObserver 监听 AI 的流式输出，新生成的内容会被立即处理。  
* **智能保护**：  
  * 🛡️ **代码保护**：不会修改 \<pre\>, \<code\> 标签内的内容（保留幂运算符号如 2\*\*3）。  
  * 📝 **输入保护**：不会修改输入框 (\<input\>, \<textarea\>) 和可编辑区域 (contenteditable) 的内容。

## **🚀 安装方法**

1. 安装浏览器扩展 **Tampermonkey** (Chrome / Edge / Firefox / Safari)。  
2. [点击这里下载脚本](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/raw/refs/heads/main/%E5%8E%BB%E6%8E%89%E7%83%A6%E4%BA%BA%E7%9A%84%E6%98%9F%E5%8F%B7%20Fxxk%20Double%20Asterisks%20(Fix%20AI%20Markdown%20Fail)-1.0.user.js) 。  
3. 在 **Tampermonkey** 中安装脚本。

## **🛠️ 使用说明**

脚本安装后默认开启，会在浏览网页时自动运行。您不需要进行任何设置。

打开任意网页（特别是 AI 聊天界面），如果出现未渲染的 \*\*，它们将会自动消失。

## **📄 许可证**

本项目采用 [MIT License](https://www.google.com/search?q=LICENSE) 开源。
