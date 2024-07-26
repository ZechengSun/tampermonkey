// ==UserScript==
// @name         谷歌搜索自动快照
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  在谷歌搜索结果中自动添加网页快照按钮
// @author       孙泽程
// @match        *://www.google.com/search?*
// @match        *://www.google.com.hk/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com.hk
// @downloadURL  https://github.com/ZechengSun/tampermonkey/raw/main/google_snapshot.user.js
// @updateURL    https://github.com/ZechengSun/tampermonkey/raw/main/google_snapshot.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // 添加自定义样式
    GM_addStyle(`
        .snapshot-btn {
            background-color: #5ea4ef;
            color: #fff;
            border: none;
            border-radius: 20px;
            padding: 5px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            margin: 0px 10px;
            cursor: pointer;
        }
    `);

    // 快照链接前缀
    const googleusercontent = "https://webcache.googleusercontent.com/search?q=cache:";

    // 添加快照按钮的函数
    function addSnapshotButton() {
        const aTags = document.querySelectorAll('a[jsname="UWckNb"]:not([data-snapshot-added])');
        aTags.forEach(a => {
            const oldUrl = a.getAttribute("href");
            const newUrl = googleusercontent + encodeURIComponent(oldUrl);

            const btn = document.createElement("button");
            btn.className = "snapshot-btn";
            btn.textContent = "网页快照";
            btn.addEventListener("click", () => window.open(newUrl));

            a.parentNode.insertBefore(btn, a.nextSibling);
            a.setAttribute("data-snapshot-added", "true");
        });
    }

    // 使用 MutationObserver 监控 DOM 变化
    const observer = new MutationObserver(addSnapshotButton);
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始调用以处理现有的搜索结果
    addSnapshotButton();
})();
