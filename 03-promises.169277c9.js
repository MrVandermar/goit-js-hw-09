!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){var n=function(e){var n=e+1,r=t+o*e;setTimeout((function(){var e,t;(e=n,t=r,new Promise((function(n,o){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))).then((function(e){var n=e.position,t=e.delay;i.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}),r)};e.preventDefault();for(var t=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),r=Number(e.target.elements.amount.value),a=0;a<r;a++)n(a)}))}();
//# sourceMappingURL=03-promises.169277c9.js.map
