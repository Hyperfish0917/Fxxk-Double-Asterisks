// ==UserScript==
// @name         去掉烦人的星号 Remove Double Asterisks (Fix AI Markdown Fail)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动去除页面中显示的“**”符号，修复AI因Markdown渲染失败造成的阅读干扰，同时保护代码块和输入框不被修改。
// @author       Hyperfish
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 配置：不处理的标签（代码块、脚本、样式、输入框）
    const IGNORED_TAGS = new Set([
        'SCRIPT', 'STYLE', 'PRE', 'CODE', 'TEXTAREA', 'INPUT', 'NOSCRIPT', 'TEMPLATE'
    ]);

    /**
     * 检查节点是否在忽略列表中，或者是否是用户可编辑区域
     */
    function isIgnored(node) {
        let current = node;
        while (current && current !== document.body) {
            // 检查标签名
            if (IGNORED_TAGS.has(current.tagName)) {
                return true;
            }
            // 检查是否是可编辑区域 (contenteditable)
            if (current.isContentEditable) {
                return true;
            }
            current = current.parentNode;
        }
        return false;
    }

    /**
     * 处理单个文本节点
     */
    function processTextNode(textNode) {
        // 只有包含 ** 才处理，减少不必要的写入操作
        if (textNode.nodeValue && textNode.nodeValue.includes('**')) {
            // 再次确认该节点不属于受保护区域
            if (!isIgnored(textNode.parentNode)) {
                textNode.nodeValue = textNode.nodeValue.replaceAll('**', '');
            }
        }
    }

    /**
     * 遍历并清理指定节点下的所有文本
     */
    function cleanNode(node) {
        // 如果是文本节点，直接处理
        if (node.nodeType === Node.TEXT_NODE) {
            processTextNode(node);
            return;
        }

        // 如果是元素节点，且不在忽略列表中，则遍历其子节点
        if (node.nodeType === Node.ELEMENT_NODE && !IGNORED_TAGS.has(node.tagName) && !node.isContentEditable) {
            const walker = document.createTreeWalker(
                node,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            let currentNode = walker.nextNode();
            while (currentNode) {
                processTextNode(currentNode);
                currentNode = walker.nextNode();
            }
        }
    }

    // 1. 初次加载时，清理整个页面
    cleanNode(document.body);

    // 2. 设置观察者，监听AI生成的动态内容
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            // 处理新增的节点
            mutation.addedNodes.forEach(node => {
                cleanNode(node);
            });

            // 处理文本内容的变动 (CharacterData)
            if (mutation.type === 'characterData') {
                processTextNode(mutation.target);
            }
        }
    });

    // 开始监听 body 的变化
    observer.observe(document.body, {
        childList: true,      // 监听子节点添加/删除
        subtree: true,        // 监听所有后代节点
        characterData: true   // 监听文本内容改变
    });

    console.log('Markdown Fixer: Script loaded and monitoring for "**" patterns.');

})();