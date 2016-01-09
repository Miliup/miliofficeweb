/**
 * photo-viewer.js
 * Embeddable photo viewer
 * Copyright (c) 2013 Kik Interactive, http://kik.com
 * Released under the MIT license
 *
 * SlideView based on code from SwipeView v1.0 ~ Copyright (c) 2012 Matteo Spinelli
 * http://cubiq.org - Released under MIT license, http://cubiq.org/license
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var PhotoViewer=(function(k,l,a){var n=["data:image/gif;base64,","R0lGODlhEAAQAPIAAAAAAP///zw8PLy8vP///5ycnHx8fGxsbCH+GkNyZWF0ZWQgd2l0aCBhamF4","bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklr","E2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAA","EAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUk","KhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9","HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYum","CYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzII","unInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAF","ACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJ","ibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFG","xTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdce","CAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",].join("");var m=(function(){var p=document.createElement("div");var o=p.style;o.width="100%";o.height="100%";o.background="url("+n+") no-repeat center center";return p}());var h={automaticTitles:true,autoHideTitle:true,loadingElm:m,startAt:0,};return i;function i(w,F,z){var B=this;var D;var r=new d();var C=w.querySelector(".app-content");C.setAttribute("data-no-scroll","true");C.style.overflow="visible";var t=w.querySelector(".app-topbar");var J=w.querySelector(".app-title");var I=true;var x=document.createElement("div");x.style.width="100%";x.style.height="100%";B.on=r.on;B.off=r.off;function s(){if(!w){throw TypeError("Page argument required!")}if(!F){throw TypeError("You gave me an empty list of urls, I can't do anything with that!")}if(!Array.isArray(F)){throw TypeError("PhotoViewer setSource expects an array of photo URLs for a source, '"+newSource+"' given.")}z=z||{};for(var K in h){z[K]=z[K]===undefined?h[K]:z[K]}}s();z.loadingElm.style.webkitBackfaceVisibility="hidden";g(C,z.loadingElm);if(z.autoHideTitle){Clickable(x);x.addEventListener("click",H,false)}G(z.startAt,F.length);w.addEventListener("appShow",E,false);w.addEventListener("appLayout",q,false);w.addEventListener("appBack",y,false);var u=false;function E(){u=true}f(function(){if(u){p()}else{w.removeEventListener("appShow",E,false);w.addEventListener("appShow",p,false)}});return;function q(){if(!D){return}D.refreshSize();D.eachMaster(function(M){var L=M.querySelector("div");var K=M.querySelector("img");if(L&&K){A(L,K)}})}function y(){w.removeEventListener("appShow",E,false);w.removeEventListener("appShow",p,false);w.removeEventListener("appLayout",q,false);w.removeEventListener("appBack",y,false);if(!D){return}if(a.platform==="android"){D.disable3d();var L=D.curMaster();var K=L.querySelector("img");K.style.webkitBackfaceVisibility="";C.style.overflow="hidden"}D.eachMaster(function(N,M){if(M!==D.page()){N.style.visibility="hidden"}})}function H(){if(I){o()}else{v()}}function o(){if(a.platform=="ios"){t.style.opacity="1";t.style.pointerEvents=""}else{c(t,"")}I=false}function v(){if(a.platform=="ios"){t.style.opacity="0";t.style.pointerEvents="none"}else{c(t,"translate3d(0, -100%, 0)")}I=true}function G(L,K){if(z.automaticTitles){J.innerText=(L+1)+" of "+K}}function p(){if(a.platform=="ios"){b(t,"opacity 0.5s ease-in-out 200ms")}else{b(t,"transform 0.5s ease-in-out 200ms")}g(C,x);D=new i._SlideViewer(x,M,{allowScroll:false,length:F.length,startAt:z.startAt,bufferDist:50,});D.on("flip",L);L(z.startAt,D.curMaster());if(a.platform=="ios"){D.on("move",v)}function M(P){var Q=document.createElement("div");var N=Q.style;N.position="absolute";N.top="0px";N.left="0px";N.width="100%";N.height="100%";N.overflow="hidden";N.background="black";var R=z.loadingElm.cloneNode(true);Q.appendChild(R);var O=document.createElement("img");O.src=F[P];O.style.webkitBackfaceVisibility="hidden";O.style.webkitUserSelect="none";O.style.webkitUserDrag="none";O.style.margin="0 auto";O.style.display="none";O.onload=function(){A(Q,O);O.style.display="block";Q.removeChild(R)};Q.appendChild(O);return Q}var K;function L(P,Q){G(P,F.length);if(i._Zoomable.deviceSupported){var O=Q.querySelector("div");var N=Q.querySelector("img");if(K){K.reset().destroy()}K=new i._Zoomable(O,N,D)}r.fire("flip",P)}}function A(N,P){var R=P.naturalHeight;var T=P.naturalWidth;var K=R/T;var L=z.autoHideTitle?window.innerHeight:C.offsetHeight;var O=C.offsetWidth;if(R>L){R=L;T=R/K}if(T>O){T=O;R=T*K}var U=z.autoHideTitle?t.offsetHeight:0;var M=j(Math.max((L-R)/2,0));var Q=P.style;Q.marginTop=M+"px";Q.width=T+"px";Q.height=R+"px";var S=N.style;S.width=O+"px";S.height=L+"px";S.top=-U+"px"}}function d(){var p=this;var q={};p.callbacks=q;function o(s,t){for(var r=0;r<s.length;r++){if(s[r]===t){s.splice(r,1)}}}p.on=function(s,r){var t=q[s]||[];o(t,r);t.push(r);q[s]=t;return p};p.off=function(s,r){if(r===undefined){delete q[s];return p}var t=q[s];if(!t){return p}o(t,r);return p};p.fire=function(v,t,r){var w=q[v];if(!w){return}var s=Array.prototype.slice.call(arguments,1);for(var u=0;u<w.length;u++){w[u].apply(null,s)}return p}}function j(p,o){if(o===undefined){o=0}var q=Math.pow(10,o);return Math.round(p*q)/q}function f(o){if(window.cards&&window.cards.ready){cards.ready(o)}else{setTimeout(o,10)}}function e(o,q){for(var p=0;p<o.length;p++){q(o[p],p)}}function g(p,o){while(p.firstChild){p.removeChild(p.firstChild)}p.appendChild(o)}function b(p,o){p.style.transition=o;p.style.webkitTransition="-webkit-"+o}function c(p,o){p.style.transform=o;p.style.webkitTransform=o}}(window.Zepto,window.jQuery,App));PhotoViewer._SlideViewer=(function(l,m){var j={allowScroll:true,length:10,startAt:0,bufferDist:10,errorGenerator:k,};function f(u,C,y){var A=this;var D;var E=[];var z=0;var x=0;var K=0;var B=0;var L=0;var r=new b();function s(){if(!g(u)){throw TypeError("SlideViewer first argument should be a DOM node which wraps the slider. Got "+u)}if(typeof C!=="function"){throw TypeError("SlideViewer second argument should be a generator function!")}y=y||{};for(var M in j){if(y[M]===undefined){y[M]=j[M]}}}s();var G=y.length;var t=y.startAt;function F(){u.style.postition="relative";u.innerHTML="";D=document.createElement("div");var N=D.style;N.position="relative";N.top="0";N.height="100%";N.width="100%";N[d("transitionTimingFunction")]="ease-out";u.appendChild(D);for(var M=-1;M<2;M++){var O=document.createElement("div");var N=O.style;N.position="absolute";N.top="0";N.height="100%";N.width="100%";N.left=M*100+"%";D.appendChild(O);E.push({elm:O})}r.attach(u,D);r.on("start",H);r.on("resize",A.refreshSize);p.on("destroy",function(){r.detach()});A.refreshSize();A.setPage(y.startAt)}var p=new e();A.on=p.on;A.off=p.off;A.refreshSize=function(){L=u.clientWidth;K=(1-G)*L;B=Math.round(L*0.15);n(0);v(-t*L);return A};A.setLen=function(M){G=M;A.refreshSize();return A};A.page=function(){return t};var q=-1;A.setPage=function(P){if(typeof P!=="number"){throw TypeError("SlideViewer.setPage() requires a number! ('"+P+"' given)")}function N(T,S,W){var R=E;var Q=R[T].elm.style;var V=R[S].elm.style;var U=R[W].elm.style;Q.left=(t-1)*100+"%";if(t===0){Q.visibility="hidden"}else{Q.visibility="visible"}V.left=t*100+"%";V.visibility="visible";U.left=(t+1)*100+"%";if(t===G-1){U.visibility="hidden"}else{U.visibility="visible"}R[T].newPage=t-1;R[S].newPage=t;R[W].newPage=t+1}t=c(P,0,G-1);n(0);v(-t*L);z=h(t+1,3);if(z===0){N(2,0,1)}else{if(z==1){N(0,1,2)}else{N(1,2,0)}}for(var O=0;O<3;O++){var M=E[O];if(M.newPage==M.page){continue}M.elm.innerHTML="";if(M.newPage>=0&&M.newPage<y.length){M.elm.appendChild(w(M.newPage))}M.page=M.newPage}if(q!==P){p.fire("flip",P,E[z].elm);q=P}return A};A.curMaster=function(){for(var M=0;M<3;M++){if(E[M].page==t){return E[M].elm}}throw Error("No master is displaying our current page. This is a bug! Current page: "+M+", masters: "+JSON.serialize(E))};A.eachMaster=function(M){for(var N=0;N<3;N++){M(E[N].elm,E[N].page)}};A.invalidate=function(){for(var M=0;M<3;M++){E[M].page=-1}A.setPage(t);return A};A.destroy=function(){p.fire("destroy");return A};A.disable=function(){r.disableTouch()};A.enable=function(){r.enableTouch()};A.moving=function(){return J};var I=true;A.disable3d=function(){I=false;v(x)};A.enable3d=function(){I=true;v(x)};function v(N,M){var P=N===x;var O=d("transform");x=N;if(I){D.style[O]="translateX("+N+"px) translateZ(0)";D.style.left=""}else{D.style[O]="";D.style.left=N+"px"}if(M){if(P||!a){M()}else{r.on("transitionEnd",M)}}}function n(N,M){D.style[d("transitionDuration")]=N+"ms"}var o=false;var J=false;function H(U){r.off("start");r.on("end",O);var Q=U.pageX;var P=U.pageY;var S=Q;var R=P;o=false;J=false;n(0);r.on("move",N);function N(Z,V){var W=V.pageX-S;S=V.pageX;R=V.pageY;var Y=Math.abs(S-Q);var X=Math.abs(R-P);if(!o&&Y<y.bufferDist&&X<y.bufferDist){return}o=true;if(X>Y&&!J&&y.allowScroll){r.off("move");r.off("end");r.on("start",H);return}J=true;var aa=x+W;if(aa>0||aa<K){aa=x+(W/2)}Z.preventDefault();r.off("end").on("end",M);v(aa);p.fire("move",aa)}function M(V){r.off("move");r.off("end");S=V.pageX;var W=S-Q;var Z=Math.abs(W);var Y;if(x>0||x<K){Z*=0.15}if(Z<B){var X=Math.floor(300*Z/B);n(X);Y=-t*L;v(Y,T);return}if(W>0){t=Math.floor(-x/L)}else{t=Math.ceil(-x/L)}Y=-t*L;var X=Math.floor(200*Math.abs(x-Y)/L);n(X);v(Y,T)}function O(){r.off("move");r.off("end");r.on("start",H)}function T(){r.off("transitionEnd");A.setPage(t);r.on("start",H)}}function w(N){var M;try{M=C(N)}catch(P){var O=Error("Exception returned from source() function with input "+N+". Message: "+P.message);O.original=P;return y.errorGenerator(O)}if(!g(M)&&M.length){M=M[0]}if(!g(M)){var O=TypeError("Invalid type returned from source() function. Got type "+typeof M+" (with value "+M+"), expected HTMLElement. Input was "+N);return y.errorGenerator(O)}return M}F()}f.needsPreventDefaultHack=(function(){var o=/\bAndroid (\d+(\.\d+)?)/.exec(navigator.userAgent);if(!o){return false}var n=parseFloat(o[1]);if(n>=4.1){return false}return true}());function k(n){if(window.console&&console.error){if(n.original){console.error(n.original);console.log(n.original.stack)}else{console.error(n);console.log(n.stack)}}var o=document.createElement("p");o.innerHTML="There was an error creating this page! Contact the developer for more information.<br><br>"+n.message+"<br><br>If you are the developer, this means you made a mistake in your source() function. If you want to ensure users never see this page, you can override opts.errorGenerator to generate a more user-friendly error page.";return o}function b(){var B=this;var u="ontouchstart" in window;var r={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"};var n=r[i];var v="onorientationchange" in window?"orientationchange":"resize";var t=u?"touchstart":"mousedown";var p=u?"touchmove":"mousemove";var C=u?"touchend":"mouseup";var w=u?"touchcancel":"mouseout";var s;var y=false;function A(E,F){for(var D=0;D<E.length;D++){if(E[D].identifier==F){return E[D]}}return null}function x(E){var D=E.type;if(D==v){z.fire("resize",E);return}else{if(D==n){z.fire("transitionEnd",E);return}}if((D===t||D===p)&&f.needsPreventDefaultHack){E.preventDefault()}if(y){if(u&&D==t){s=E.changedTouches[0]}return}var G=s?s.identifier:"";if(D==t){if(u){if(s){return}s=E.changedTouches[0]}z.fire("start",u?E.changedTouches[0]:E)}else{if(D==p){if(!u){z.fire("move",E,E);return}var F=A(E.touches,G);s=F;z.fire("move",E,F)}else{if(D==w||D==C){if(!u){z.fire("end",E);return}if(!s){return}var F=A(E.changedTouches,G);if(!F){F=A(E.touches,G)}z.fire("end",F);s=null}}}}var z=new e();B.on=z.on;B.off=z.off;var o;var q;B.attach=function(E,D){if(o||q){B.detach()}o=E;q=D;window.addEventListener(v,x,false);q.addEventListener(n,x,false);o.addEventListener(t,x,false);o.addEventListener(p,x,false);o.addEventListener(C,x,false);o.addEventListener(w,x,false);return B};B.detach=function(){window.removeEventListener(v,x,false);q.removeEventListener(n,x,false);o.removeEventListener(t,x,false);o.removeEventListener(p,x,false);o.removeEventListener(C,x,false);o.removeEventListener(w,x,false);return B};B.disableTouch=function(){if(s){z.fire("end",s);s=null}y=true};B.enableTouch=function(){if(s){z.fire("start",s)}y=false}}function e(){var o=this;var p={};o.callbacks=p;function n(r,s){for(var q=0;q<r.length;q++){if(r[q]===s){r.splice(q,1)}}}o.on=function(r,q){var s=p[r]||[];n(s,q);s.push(q);p[r]=s;return o};o.off=function(r,q){if(q===undefined){delete p[r];return o}var s=p[r];if(!s){return o}n(s,q);return o};o.fire=function(u,s,q){var v=p[u];if(!v){return}var r=Array.prototype.slice.call(arguments,1);for(var t=0;t<v.length;t++){v[t].apply(null,r)}return o}}var a=false;var i=(function(){var p=document.createElement("div").style;var r="webkitT,MozT,msT,OT,t".split(",");for(var o=0;o<r.length;o++){var n=r[o]+"ransform";var q=r[o]+"ransition";if(q in p){a=true}if(n in p){return r[o].substr(0,r[o].length-1)}}return false})();function d(n){if(i===""){return n}n=n.charAt(0).toUpperCase()+n.substr(1);return i+n}function h(o,n){return((o%n)+n)%n}function c(q,p,o){return Math.max(p,Math.min(o,q))}function g(n){if(typeof HTMLElement==="object"){return n instanceof HTMLElement}else{return n&&typeof n==="object"&&n.nodeType===1&&typeof n.nodeName==="string"}}return f}(window.Zepto,window.jQuery));PhotoViewer._Zoomable=function Zoomable(q,a,g){if(q===undefined){throw TypeError("Zoomable requires a viewport element as it's first argument!")}if(a===undefined){throw TypeError("Zoomable requires a element to zoom as it's second argument!")}if(g===undefined){g={enable:function(){},disable:function(){},moving:function(){return false},}}var l=this;var f=0;var j,h,s;l.reset=function(){j=0;h=0;s=1;f=0;b(0);return l};l.destroy=function(){p.stop();return l};var p=PhotoViewer._Touchy(q,{one:n,two:e,});l.reset();function n(u,x){var w=x.lastPoint.x;var v=x.lastPoint.y;var y=k();if(Math.abs(j)>=y){g.enable()}o();x.on("move",function(z){f=0;if(s<=1){return}var B=(z.x-w)/s;var A=(z.y-v)/s;j+=B;h+=A;w=z.x;v=z.y;var C=k();if(Math.abs(j)<=C){g.disable()}else{if(g.moving()){return}}b(0)});x.on("end",function(A){if(g.moving()){o();b(300);return}var B=Date.now();var C=B-f;if(C>200){f=B;o();b(500);return}if(s<=1){s=2;var z=t(x.lastPoint);j=z.x;h=z.y;o();b(500)}else{s=1;j=0;h=0;b(500)}f=0;return})}function e(x,w,v){f=0;if(g.moving()){return}g.disable();var A=w.lastPoint;var z=v.lastPoint;var y=m(A,z);var u=t(r(A,z));x.on("move",function(C){var F=w.lastPoint;var E=v.lastPoint;var D=m(F,E);s*=D/y;y=D;var B=t(r(F,E));j+=u.x-B.x;h+=u.y-B.y;b(0)});x.on("end",function(){var C=1;var B=4;if(s<=1){g.enable()}if(s<C){s=C;j=0;h=0}if(s>B){s=B}o();b(300)})}function m(v,u){return Math.sqrt(Math.pow(v.x-u.x,2)+Math.pow(v.y-u.y,2))}function r(v,u){return{x:(v.x+u.x)/2,y:(v.y+u.y)/2,}}function b(B){var u=function(E,D){var F=Math.pow(10,D);return Math.round(E*F)/F};var x=u(j*s,2);var w=u(h*s,2);var y=u(s,2);var z="translateX("+x+"px) translateY("+w+"px) scale("+y+","+y+")";var A=B===0?"none":"all";var v=u(B,0)+"ms";var C=a.style;C.webkitTransitionProperty=A;C.webkitTransitionDuration=v;C.webkitTransform=z}function d(){return q.offsetWidth/2}function c(){return q.offsetHeight/2}function k(){var u=a.offsetWidth/2-d()/s;if(u<0){return 0}else{return u}}function i(){var u=a.offsetHeight/2-c()/s;if(u<0){return 0}else{return u}}function o(){var v=k();if(Math.abs(j)>v){j=j>0?v:-v}var u=i();if(Math.abs(h)>u){h=h>0?u:-u}}function t(u){return{x:j+(d()-u.x)/s,y:h+(c()-u.y)/s,}}};PhotoViewer._Zoomable.deviceSupported=(function(){var b=/\bAndroid (\d+(\.\d+)?)/.exec(navigator.userAgent);if(!b){return true}var a=parseFloat(b[1]);if(a>3){return true}return false}());!(function(h,n,u,o,k){h=h||{};var r=function(){if(Array.prototype.forEach){return function(w,y,x){Array.prototype.forEach.call(w,y,x)}}else{return function(x,A,y){for(var z=0,w=x.length;z<w;z++){if(z in x){A.call(y,x[z],z,x)}}}}}();var b=function(){if(Array.prototype.indexOf){return function(w,x,y){return Array.prototype.indexOf.call(w,x,y)}}else{return function(x,z,A){for(var y=A||0,w=x.length;y<w;y++){if((y in x)&&(x[y]===z)){return y}}return -1}}}();var t=function(){if(Array.prototype.map){return function(w,y,x){return Array.prototype.map.call(w,y,x)}}else{return function(x,B,y){var w=x.length,z=new Array(w);for(var A=0;A<w;A++){if(A in x){z[A]=B.call(y,x[A],A,x)}}return z}}}();var j=function(){if(Array.prototype.filter){return function(w,y,x){return Array.prototype.filter.call(w,y,x)}}else{return function(x,B,z){var y=[];for(var C,A=0,w=x.length;A<w;A++){C=x[A];if((A in x)&&B.call(z,C,A,x)){y.push(C)}}return y}}}();var d={};function v(y,w,z){if(y.addEventListener){y.addEventListener(w,z,false)}else{if(y.attachEvent){var x=y.attachEvent("on"+w,z);d[x]={name:w,callback:z}}}}function f(y,w,z){if(y.removeEventListener){y.removeEventListener(w,z,false)}else{if(y.detachEvent){for(var x in d){if((d[x].name===w)&&(d[x].callback===z)){y.detachEvent(x);delete d[x]}}}}}function l(A,y){var z=A.prototype,x=y.prototype,B;for(var C in x){z[C]=x[C]}function w(E){var D=Array.prototype.slice.call(arguments,1);if(x[E]){return x[E].apply(this,D)}}if(z._super){B=z._super;z._super=function(){B.call(this,arguments);w.call(this,arguments)}}else{z._super=w}}function e(){this.onEvents={};this.onceEvents={}}e.prototype.on=function(x,y){if(!y){return}if(x in this.onEvents){var w=b(this.onEvents[x],y);if(w!=-1){return}}else{this.onEvents[x]=[]}if(x in this.onceEvents){var w=b(this.onceEvents[x],y);if(w!=-1){this.onceEvents.splice(w,1)}}this.onEvents[x].push(y)};e.prototype.once=function(x,y){if(!y){return}if(x in this.onceEvents){var w=b(this.onceEvents[x],y);if(w!=-1){return}}else{this.onceEvents[x]=[]}if(x in this.onEvents){var w=b(this.onEvents[x],y);if(w!=-1){this.onEvents.splice(w,1)}}this.onceEvents[x].push(y)};e.prototype.off=function(x,y){if(!y){return}if(x in this.onEvents){var w=b(this.onEvents[x],y);if(w!=-1){this.onEvents.splice(w,1);return}}if(x in this.onceEvents){var w=b(this.onceEvents[x],y);if(w!=-1){this.onceEvents.splice(w,1);return}}};e.prototype.trigger=function(x){var w=Array.prototype.slice.call(arguments,1),y=(this.onEvents[x]||[]).concat(this.onceEvents[x]||[]),z;while(z=y.shift()){z.apply(this,w)}};function a(w){this._super("constructor");this.id=w;this.lastPoint=null}l(a,e);function q(w){this._super("constructor");this.fingers=!w?[]:t(w,function(x){return new a(x)})}l(q,e);q.prototype.get=function(x){var w;r(this.fingers,function(y){if(y.id==x){w=y}});return w};function i(x,w){return t(x,function(y){return{id:y.identifier,x:y.pageX,y:y.pageY,time:w}})}function c(x,w){return[{id:w,x:x.pageX,y:x.pageY,time:x.timeStamp}]}function s(z,B,y){if(typeof y=="undefined"){y=B;B=false}if(typeof y=="function"){y={any:y}}for(var w in m){if(w in y){var A=m[w](z,y[w]);if(typeof A=="function"){A={any:A}}for(var x in A){if(x in y){y[x]=(function(D,C){return function(){D.call(this,arguments);C.call(this,arguments)}})(y[x],A[x])}else{y[x]=A[x]}}}}this.running=false;this.elem=z;this.handleMouse=!!B;this.settings=y||{};this.mainHand=new q();this.multiHand=null;this.mouseID=null;this.start()}s.prototype.start=function(){if(this.running){return}this.running=true;v(this.elem,"touchstart",this.touchstart());v(this.elem,"touchmove",this.touchmove());v(this.elem,"touchcancel",this.touchend());v(this.elem,"touchend",this.touchend());if(this.handleMouse){v(this.elem,"mousedown",this.mousedown());v(this.elem,"mouseup",this.mouseup());v(this.elem,"mouseout",this.mouseup());v(this.elem,"mousemove",this.mousemove())}};s.prototype.stop=function(){if(!this.running){return}this.running=false;f(this.elem,"touchstart",this.touchstart());f(this.elem,"touchmove",this.touchmove());f(this.elem,"touchend",this.touchend());f(this.elem,"touchcancel",this.touchend());f(this.elem,"mousedown",this.mousedown());f(this.elem,"mouseup",this.mouseup());f(this.elem,"mouseout",this.mouseup());f(this.elem,"mousemove",this.mousemove())};s.prototype.touchstart=function(){if(!this._touchstart){var w=this;this._touchstart=function(z){var y=i(z.touches,z.timeStamp),x=i(z.changedTouches,z.timeStamp);w.mainHandStart(x);w.multiHandStart(x,y);z.preventDefault()}}return this._touchstart};s.prototype.touchmove=function(){if(!this._touchmove){var w=this;this._touchmove=function(z){var y=i(z.touches,z.timeStamp),x=i(z.changedTouches,z.timeStamp);w.mainHandMove(x);w.multiHandMove(x,y);z.preventDefault()}}return this._touchmove};s.prototype.touchend=function(){if(!this._touchend){var w=this;this._touchend=function(z){var y=i(z.touches,z.timeStamp),x=i(z.changedTouches,z.timeStamp);w.mainHandEnd(x);w.multiHandEnd(x,y);z.preventDefault()}}return this._touchend};s.prototype.mousedown=function(){if(!this._mousedown){var w=this;this._mousedown=function(y){var x;if(w.mouseID){x=c(y,w.mouseID);w.mainHandEnd(x);w.multiHandEnd(x,x);w.mouseID=null}w.mouseID=Math.random()+"";x=c(y,w.mouseID);w.mainHandStart(x);w.multiHandStart(x,x)}}return this._mousedown};s.prototype.mouseup=function(){if(!this._mouseup){var w=this;this._mouseup=function(z){if(z.type==="mouseout"){var x=z.relatedTarget||z.toElement;while(x){if(x===w.elem){return}x=x.parentNode}}var y;if(w.mouseID){y=c(z,w.mouseID);w.mainHandEnd(y);w.multiHandEnd(y,y);w.mouseID=null}}}return this._mouseup};s.prototype.mousemove=function(){if(!this._mousemove){var w=this;this._mousemove=function(y){var x;if(w.mouseID){x=c(y,w.mouseID);w.mainHandMove(x);w.multiHandMove(x,x)}}}return this._mousemove};s.prototype.mainHandStart=function(x){var w=this,y=[];r(x,function(A){var z=new a(A.id);z.lastPoint=A;y.push([z,A]);w.mainHand.fingers.push(z)});r(y,function(z){w.settings.any&&w.settings.any.call(w,w.mainHand,z[0]);z[0].trigger("start",z[1])});w.mainHand.trigger("start",x)};s.prototype.mainHandMove=function(y){var w=this,x=[];r(y,function(A){var z=w.mainHand.get(A.id);if(!z){return}z.lastPoint=A;x.push([z,A])});r(x,function(z){z[0].trigger("move",z[1])});w.mainHand.trigger("move",y)};s.prototype.mainHandEnd=function(y){var x=this,w=[];r(y,function(B){var A=x.mainHand.get(B.id),z;if(!A){return}A.lastPoint=B;w.push([A,B]);z=b(x.mainHand.fingers,A);x.mainHand.fingers.splice(z,1)});r(w,function(z){z[0].trigger("end",z[1])});x.mainHand.trigger("end",y)};s.prototype.multiHandStart=function(w,x){this.multiHandDestroy();this.multiHandRestart(x)};s.prototype.multiHandMove=function(y,z){var w=this,x=[];r(y,function(B){var A=w.multiHand.get(B.id);if(!A){return}A.lastPoint=B;x.push([A,B])});r(x,function(A){A[0].trigger("move",A[1])});w.multiHand.trigger("move",y)};s.prototype.multiHandEnd=function(w,x){this.multiHandDestroy();var y=j(x,function(A){var z=true;r(w,function(B){if(B.id==A.id){z=false}});return z});this.multiHandRestart(y)};s.prototype.multiHandRestart=function(z){var w=this;if(z.length==0){return}w.multiHand=new q();var y=[];r(z,function(B){var A=new a(B.id);A.lastPoint=B;y.push([A,B]);w.multiHand.fingers.push(A)});var x=w.settings[{1:"one",2:"two",3:"three",4:"four",5:"five"}[w.multiHand.fingers.length]];x&&x.apply(w,[w.multiHand].concat(w.multiHand.fingers));r(y,function(A){A[0].trigger("start",A[1])});w.multiHand.trigger("start",z)};s.prototype.multiHandDestroy=function(){if(!this.multiHand){return}var w=[];r(this.multiHand.fingers,function(y){var x=y.lastPoint;w.push(x);y.trigger("end",x)});this.multiHand.trigger("end",w);this.multiHand=null};function p(x,y,w){return new s(x,y,w)}var m={};p.plugin=function(w,x){if(w in m){throw"Touchy: "+w+" plugin already defined"}m[w]=x};var g=function(w){w.preventDefault()};p.stopWindowBounce=function(){v(h,"touchmove",g)};p.startWindowBounce=function(){f(h,"touchmove",g)};PhotoViewer._Touchy=p}(window,document,window.clik,window.Zepto,window.jQuery));