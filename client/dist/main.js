(()=>{"use strict";function t(t,e,n){this.key=t,this.name=e,this.buttonEl=document.createElement("button"),this.buttonEl.textContent=e;var i=this;this.buttonEl.onclick=function(){n(i)}}function e(t){this.items=t}function n(t){var e=o.getNext(t);t===l?alert("비겼습니다"):e===l?alert("졌습니다"):alert("이겼습니다"),clearInterval(i),s.removeAttribute("disabled"),o.setDisable(!0)}t.prototype.render=function(t){t.append(this.buttonEl)},t.prototype.disable=function(t){t?this.buttonEl.setAttribute("disabled",!0):this.buttonEl.removeAttribute("disabled")},e.prototype.getAll=function(){return this.items},e.prototype.getNext=function(t){var e=this.items.indexOf(t);return this.items[e+1]||this.items[0]},e.prototype.setDisable=function(t){this.items.forEach((e=>{e.disable(t)}))},e.prototype.rendering=function(t){this.items.forEach((e=>{e.render(t)}))},e.prototype.reSet=function(){var t=this.items.length,e=Math.floor(Math.random()*t);return console.log(this.items[e]),this.items[e]};var i,o=new e([new t("sissor","가위",n),new t("rock","바위",n),new t("paper","보",n)]),s=document.getElementById("start"),r=document.getElementById("com"),l=o.reSet(),a=document.getElementById("item-buttons");o.rendering(a),o.setDisable(!0),s.onclick=function(){s.setAttribute("disabled",!0),o.setDisable(!1),l=o.reSet(),i=setInterval((()=>{l=o.getNext(l),r.textContent=l.name}),100)}})();
//# sourceMappingURL=main.js.map