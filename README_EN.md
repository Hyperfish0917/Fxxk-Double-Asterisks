# **Fxxk Double Asterisks (AI Markdown Fixer)**

[🇺🇸 English](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/blob/main/README_EN.md) | [🇨🇳 中文](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/raw/refs/heads/main/README.md)

A lightweight Tampermonkey user script designed to fix occasional Markdown rendering failures on major AI websites (such as Gemini, ChatGPT, Grok, NotebookLM, etc.).

When AI-generated content displays unrendered \*\* characters (which usually represent bold text), this script automatically removes them to maintain a clean reading experience. It intelligently avoids code blocks and input fields to prevent accidental deletion of important symbols (like the power operator in code).

## **✨ Features**

* **Auto Purify**: Automatically detects and removes \*\* symbols in plain text.  
* **Real-time Monitoring**: Uses MutationObserver to monitor AI streaming output; newly generated content is processed immediately.  
* **Smart Protection**:  
  * 🛡️ **Code Protection**: Does not modify content within \<pre\> and \<code\> tags (preserves power operators like 2\*\*3).  
  * 📝 **Input Protection**: Does not modify content within input fields (\<input\>, \<textarea\>) and editable areas (contenteditable).

## **🚀 Installation**

1. Install the **Tampermonkey** browser extension (Chrome / Edge / Firefox / Safari).  
2. [Click here to download the script](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/raw/refs/heads/main/%E5%8E%BB%E6%8E%89%E7%83%A6%E4%BA%BA%E7%9A%84%E6%98%9F%E5%8F%B7%20Fxxk%20Double%20Asterisks%20(Fix%20AI%20Markdown%20Fail)-1.0.user.js) .  
3. Install script in the  **Tampermonkey** .

## **🛠️ Usage**

Once installed, the script is enabled by default and will run automatically when you browse web pages. No configuration is needed.

Open any webpage (especially AI chat interfaces), and if any unrendered \*\* characters appear, they will vanish automatically.

## **📄 License**

This project is licensed under the [MIT License](https://github.com/Hyperfish0917/Fxxk-Double-Asterisks/raw/refs/heads/main/LICENSE).
