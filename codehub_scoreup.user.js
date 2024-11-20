// ==UserScript==
// @name         codehub自动评1分
// @namespace    http://tampermonkey.net/
// @version      2.2
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

    const scoreUp = document.getElementsByClassName('score-up');
    const observerConfig = {childList: true, subtree: true};

    // 点击评分按钮的函数
    function clickScoreButton() {
        if (scoreUp.length && scoreUp[0].children && !scoreUp[0].children[0].classList.contains('score-selected')) {
            scoreUp[0].children[0].click();
        }
    }

    // 使用 MutationObserver 监控 DOM 变化
    setTimeout(() => {
  const observer = new MutationObserver(clickScoreButton);
    observer.observe(document.body, observerConfig);
}, 3000);

})();
