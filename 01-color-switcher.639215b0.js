!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body"),n=null;function a(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.setAttribute("disabled",!1),t.addEventListener("click",(function(){n=setInterval(a,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.639215b0.js.map
