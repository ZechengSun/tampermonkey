// ==UserScript==
// @name         CSDN免登录复制+可选择复制+净化剪切板+阅读全文
// @namespace    http://tampermonkey.net/
// @version      2.0.9
// @description  CSDN免登录复制+可选择复制+净化剪切板+阅读全文，创作不易，打赏随意，支付宝13750421396。
// @author       孙泽程
// @require       https://code.jquery.com/jquery-3.1.1.min.js
// @include      *://*.csdn.net/*
// @icon         https://s3-hc-dgg.hics.huawei.com/sam-pro/2021/8/lWX899464/1629454439031-456.png
// @downloadURL  https://github.com/ZechengSun/tampermonkey/raw/main/csdn-copy.user.js
// @updateURL    https://github.com/ZechengSun/tampermonkey/raw/main/csdn-copy.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //代码域可选
    $("code").css("user-select", "text");

    // 免登录复制
    $(".hljs-button").removeClass("signin");
    $(".hljs-button").addClass("{2}");
    $(".hljs-button").attr("data-title", "全部复制");
    $(".hljs-button").attr("onclick", "hljs.copyCode(event);setTimeout(function(){$('.hljs-button').attr('data-title', '全部复制');},3000);");
    $("code").attr("onclick", "mdcp.copyCode(event);setTimeout(function(){$('.hljs-button').attr('data-title', '全部复制');},3000);");

    // 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
    //try {
    //    Object.defineProperty(window, "articleType", {
    //        value: 0,
    //        writable: false,
    //        configurable: false
    //     });
    //} catch (err) {
    //}

    // 去除剪贴板劫持
    csdn.copyright.init("", "", "");

    //不用关注博主即可阅读全文
    $("#article_content").removeAttr("style");
    $(".hide-article-box").remove();

     // 内容区开启复制
    const content_views = document.querySelector("#content_views");
    content_views.replaceWith(content_views.cloneNode(true));
})();
