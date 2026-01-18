# **Fxxk Double Asterisks (AI Markdown Fixer)**

[🇺🇸 English](https://www.google.com/search?q=./README_EN.md) | [🇨🇳 中文](https://www.google.com/search?q=./README.md)

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
2. [Click here to install the script](https://www.google.com/search?q=https://raw.githubusercontent.com/YourUsername/remove-double-asterisks/main/remove_asterisks.js) (Please replace this link with the Raw link of the JS file in your repository).  
3. Click **Install** in the Tampermonkey popup window.

## **🛠️ Usage**

Once installed, the script is enabled by default and will run automatically when you browse web pages. No configuration is needed.

Open any webpage (especially AI chat interfaces), and if any unrendered \*\* characters appear, they will vanish automatically.

## **📄 License**

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).