// ==UserScript==
// @name         谷歌搜索自动快照
// @namespace    http://tampermonkey.net/
// @version      0.22
// @description  try to take over the world!
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
    var googleusercontent = "https://webcache.googleusercontent.com/search?q=cache:"
    setInterval(function(){
        let aTags = document.getElementsByTagName('a');
        for (var i = 0; i < aTags.length; i++) {
            let a=aTags[i];
            if (a.getAttribute("jsname")=="UWckNb"&&a.getAttribute("aaa")!=1&&a.childNodes[0].textContent != "翻译此页"&&a.classList.length==0) {
                let oldUrl = a.getAttribute("href");
                let newUrl=googleusercontent+encodeURIComponent(oldUrl);

                var btn = document.createElement("button")
                btn.addEventListener("click", function(){
                    window.open(newUrl);
                });
                btn.setAttribute("class","snapshot-btn");
                btn.innerHTML = "网页快照";

                var parent = a.parentNode;
                parent.insertBefore(btn, a.nextSibling);
                a.setAttribute("aaa","1");
            };
        }
    },500) ;
})();
