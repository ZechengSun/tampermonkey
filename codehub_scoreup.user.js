// ==UserScript==
// @name         codehub自动评1分
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  codehub自动评1分
// @author       孙泽程
// @include      *://codehub-g.huawei.com/*
// @icon         https://s3-hc-dgg.hics.huawei.com/sam-pro/2021/8/lWX899464/1629454439031-456.png
// @downloadURL  https://github.com/ZechengSun/tampermonkey/raw/main/codehub_scoreup.user.js
// @updateURL    https://github.com/ZechengSun/tampermonkey/raw/main/codehub_scoreup.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
   
    // 点击评分按钮的函数
    function clickScoreButton() {
        const scoreUp = document.getElementsByClassName("score-up");
        if (scoreUp.length > 0 && scoreUp[0].children.length > 0 && !scoreUp[0].children[0].classList.contains('score-selected')) {
            scoreUp[0].click();
        }
    }

    // 使用 MutationObserver 监控 DOM 变化
    const observer = new MutationObserver(clickScoreButton);
    observer.observe(document.body, {childList: true, subtree: true});

    // 初始调用以处理现有的评分按钮
    clickScoreButton();
})();
