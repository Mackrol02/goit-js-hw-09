const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.95a1b58c.js.map
