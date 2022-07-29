const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");let o=null;function r(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){o=setInterval(r,1e3)})),e.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.4a60114a.js.map
