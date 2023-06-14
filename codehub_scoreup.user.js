// ==UserScript==
// @name         codehub自动评1分
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  codehub自动评1分
// @author       孙泽程
// @include      *://codehub-g.huawei.com/*
// @icon         https://s3-hc-dgg.hics.huawei.com/sam-pro/2021/8/lWX899464/1629454439031-456.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        var scoreUp = document.getElementsByClassName("score-up")[0].children[0];
        scoreUp.click();
     },1000) ;
})();
