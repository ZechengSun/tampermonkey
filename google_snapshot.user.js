// ==UserScript==
// @name         谷歌搜索自动快照
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       孙泽程
// @match        *://www.google.com.hk/search?q=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com.hk
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
    var index=0;
    setInterval(function(){
        let aTags = document.getElementsByTagName('a');
        for (var i = index; i < aTags.length; i++) {
            let a=aTags[i];
            if (a.getAttribute("jscontroller")) {
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
            };
        }
        index=aTags.length;
    },1000) ;
})();
