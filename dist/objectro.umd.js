!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).objectro={})}(this,function(t){"use strict";var e=Array.isArray,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="object"==typeof n&&n&&n.Object===Object&&n,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")(),a=i.Symbol,u=Object.prototype,c=u.hasOwnProperty,l=u.toString,s=a?a.toStringTag:void 0;var f=function(t){var e=c.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[s]=n:delete t[s]),o},p=Object.prototype.toString;var v=function(t){return p.call(t)},h="[object Null]",d="[object Undefined]",y=a?a.toStringTag:void 0;var b=function(t){return null==t?void 0===t?d:h:y&&y in Object(t)?f(t):v(t)};var g=function(t){return null!=t&&"object"==typeof t},_="[object Symbol]";var m=function(t){return"symbol"==typeof t||g(t)&&b(t)==_},j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var x=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!m(t))||O.test(t)||!j.test(t)||null!=n&&t in Object(n)};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},$="[object AsyncFunction]",M="[object Function]",k="[object GeneratorFunction]",S="[object Proxy]";var P,A=function(t){if(!w(t))return!1;var e=b(t);return e==M||e==k||e==$||e==S},E=i["__core-js_shared__"],R=(P=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var z=function(t){return!!R&&R in t},V=Function.prototype.toString;var N=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},T=/^\[object .+?Constructor\]$/,F=Function.prototype,D=Object.prototype,W=F.toString,q=D.hasOwnProperty,C=RegExp("^"+W.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var I=function(t){return!(!w(t)||z(t))&&(A(t)?C:T).test(N(t))};var B=function(t,e){return null==t?void 0:t[e]};var L=function(t,e){var n=B(t,e);return I(n)?n:void 0},G=L(Object,"create");var U=function(){this.__data__=G?G(null):{},this.size=0};var H=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},J="__lodash_hash_undefined__",K=Object.prototype.hasOwnProperty;var Q=function(t){var e=this.__data__;if(G){var n=e[t];return n===J?void 0:n}return K.call(e,t)?e[t]:void 0},X=Object.prototype.hasOwnProperty;var Y=function(t){var e=this.__data__;return G?void 0!==e[t]:X.call(e,t)},Z="__lodash_hash_undefined__";var tt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=G&&void 0===e?Z:e,this};function et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}et.prototype.clear=U,et.prototype.delete=H,et.prototype.get=Q,et.prototype.has=Y,et.prototype.set=tt;var nt=et;var rt=function(){this.__data__=[],this.size=0};var ot=function(t,e){return t===e||t!=t&&e!=e};var it=function(t,e){for(var n=t.length;n--;)if(ot(t[n][0],e))return n;return-1},at=Array.prototype.splice;var ut=function(t){var e=this.__data__,n=it(e,t);return!(n<0||(n==e.length-1?e.pop():at.call(e,n,1),--this.size,0))};var ct=function(t){var e=this.__data__,n=it(e,t);return n<0?void 0:e[n][1]};var lt=function(t){return it(this.__data__,t)>-1};var st=function(t,e){var n=this.__data__,r=it(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=rt,ft.prototype.delete=ut,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=st;var pt=ft,vt=L(i,"Map");var ht=function(){this.size=0,this.__data__={hash:new nt,map:new(vt||pt),string:new nt}};var dt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var yt=function(t,e){var n=t.__data__;return dt(e)?n["string"==typeof e?"string":"hash"]:n.map};var bt=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e};var gt=function(t){return yt(this,t).get(t)};var _t=function(t){return yt(this,t).has(t)};var mt=function(t,e){var n=yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}jt.prototype.clear=ht,jt.prototype.delete=bt,jt.prototype.get=gt,jt.prototype.has=_t,jt.prototype.set=mt;var Ot=jt,xt="Expected a function";function wt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(xt);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(wt.Cache||Ot),n}wt.Cache=Ot;var $t=wt,Mt=500;var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/\\(\\)?/g,Pt=function(t){var e=$t(t,function(t){return n.size===Mt&&n.clear(),t}),n=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(kt,function(t,n,r,o){e.push(r?o.replace(St,"$1"):n||t)}),e});var At=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Et=1/0,Rt=a?a.prototype:void 0,zt=Rt?Rt.toString:void 0;var Vt=function t(n){if("string"==typeof n)return n;if(e(n))return At(n,t)+"";if(m(n))return zt?zt.call(n):"";var r=n+"";return"0"==r&&1/n==-Et?"-0":r};var Nt=function(t){return null==t?"":Vt(t)};var Tt=function(t,n){return e(t)?t:x(t,n)?[t]:Pt(Nt(t))},Ft=1/0;var Dt=function(t){if("string"==typeof t||m(t))return t;var e=t+"";return"0"==e&&1/t==-Ft?"-0":e};var Wt=function(t,e){for(var n=0,r=(e=Tt(e,t)).length;null!=t&&n<r;)t=t[Dt(e[n++])];return n&&n==r?t:void 0};var qt=function(t,e,n){var r=null==t?void 0:Wt(t,e);return void 0===r?n:r},Ct=function(){try{var t=L(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var It=function(t,e,n){"__proto__"==e&&Ct?Ct(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Bt=Object.prototype.hasOwnProperty;var Lt=function(t,e,n){var r=t[e];Bt.call(t,e)&&ot(r,n)&&(void 0!==n||e in t)||It(t,e,n)},Gt=9007199254740991,Ut=/^(?:0|[1-9]\d*)$/;var Ht=function(t,e){var n=typeof t;return!!(e=null==e?Gt:e)&&("number"==n||"symbol"!=n&&Ut.test(t))&&t>-1&&t%1==0&&t<e};var Jt=function(t,e,n,r){if(!w(t))return t;for(var o=-1,i=(e=Tt(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=Dt(e[o]),l=n;if(o!=a){var s=u[c];void 0===(l=r?r(s,c,u):void 0)&&(l=w(s)?s:Ht(e[o+1])?[]:{})}Lt(u,c,l),u=u[c]}return t};var Kt=function(t,e,n){return null==t?t:Jt(t,e,n)},Qt="[object String]";var Xt=function(t){return"string"==typeof t||!e(t)&&g(t)&&b(t)==Qt};var Yt=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object),Zt="[object Object]",te=Function.prototype,ee=Object.prototype,ne=te.toString,re=ee.hasOwnProperty,oe=ne.call(Object);var ie=function(t){if(!g(t)||b(t)!=Zt)return!1;var e=Yt(t);if(null===e)return!0;var n=re.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&ne.call(n)==oe};var ae=function(){if(!arguments.length)return[];var t=arguments[0];return e(t)?t:[t]};var ue=function(t,e){return null!=t&&e in Object(t)},ce="[object Arguments]";var le=function(t){return g(t)&&b(t)==ce},se=Object.prototype,fe=se.hasOwnProperty,pe=se.propertyIsEnumerable,ve=le(function(){return arguments}())?le:function(t){return g(t)&&fe.call(t,"callee")&&!pe.call(t,"callee")},he=9007199254740991;var de=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=he};var ye=function(t,n,r){for(var o=-1,i=(n=Tt(n,t)).length,a=!1;++o<i;){var u=Dt(n[o]);if(!(a=null!=t&&r(t,u)))break;t=t[u]}return a||++o!=i?a:!!(i=null==t?0:t.length)&&de(i)&&Ht(u,i)&&(e(t)||ve(t))};var be=function(t,e){return null!=t&&ye(t,e,ue)},ge="[object Number]";var _e=function(t){return"number"==typeof t||g(t)&&b(t)==ge};var me=function(t){return _e(t)&&t!=+t},je=NaN,Oe=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,Me=parseInt;var ke=function(t){if("number"==typeof t)return t;if(m(t))return je;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Oe,"");var n=we.test(t);return n||$e.test(t)?Me(t.slice(2),n?2:8):xe.test(t)?je:+t},Se=1/0,Pe=1.7976931348623157e308;var Ae=function(t){return t?(t=ke(t))===Se||t===-Se?(t<0?-1:1)*Pe:t==t?t:0:0===t?t:0};var Ee=function(t){var e=Ae(t),n=e%1;return e==e?n?e-n:e:0};var Re=function(t){return"number"==typeof t&&t==Ee(t)};function ze(t,e,n){return void 0===n?be(t,e):be(t,e)&&(A(n)?!!n.call(void 0,qt(t,e)):qt(t,e)===n)}function Ve(t){return!!t}function Ne(t,...e){let n=!1,r=e.length;if(r)for(let o=0;o<r;o++)if(t.indexOf(e[o])>-1){n=!0;break}return n}function Te(t,...e){let n=!1,r=e.length,o=0;if(r)for(let i=0;i<r;i++)if(t.indexOf(e[i])>-1&&++o===r){n=!0;break}return n}const Fe=(t,e,n)=>ze(e,t)&&!function(t){return null==t||""===t||t instanceof Array&&0===t.length}(qt(e,t))?qt(e,t):qt(n,t);var De=/[\\^$.*+?()[\]{}|]/g,We=RegExp(De.source);var qe=function(t){return(t=Nt(t))&&We.test(t)?t.replace(De,"\\$&"):t},Ce="[object Boolean]";var Ie=function(t){return!0===t||!1===t||g(t)&&b(t)==Ce};var Be=function(t){return null!=t&&de(t.length)&&!A(t)},Le=L(i,"DataView"),Ge=L(i,"Promise"),Ue=L(i,"Set"),He=L(i,"WeakMap"),Je=N(Le),Ke=N(vt),Qe=N(Ge),Xe=N(Ue),Ye=N(He),Ze=b;(Le&&"[object DataView]"!=Ze(new Le(new ArrayBuffer(1)))||vt&&"[object Map]"!=Ze(new vt)||Ge&&"[object Promise]"!=Ze(Ge.resolve())||Ue&&"[object Set]"!=Ze(new Ue)||He&&"[object WeakMap]"!=Ze(new He))&&(Ze=function(t){var e=b(t),n="[object Object]"==e?t.constructor:void 0,r=n?N(n):"";if(r)switch(r){case Je:return"[object DataView]";case Ke:return"[object Map]";case Qe:return"[object Promise]";case Xe:return"[object Set]";case Ye:return"[object WeakMap]"}return e});var tn=Ze,en="[object Map]";var nn=function(t){return g(t)&&tn(t)==en};var rn,on=function(t){return function(e){return t(e)}},an=(function(t,e){var n=e&&!e.nodeType&&e,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&r.process,a=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}(rn={exports:{}},rn.exports),rn.exports),un=an&&an.isMap,cn=un?on(un):nn,ln="[object Set]";var sn=function(t){return g(t)&&tn(t)==ln},fn=an&&an.isSet,pn=fn?on(fn):sn,vn="[object RegExp]";var hn=function(t){return g(t)&&b(t)==vn},dn=an&&an.isRegExp,yn=dn?on(dn):hn,bn="[object Date]";var gn=function(t){return g(t)&&b(t)==bn},_n=an&&an.isDate,mn=_n?on(_n):gn;var jn="[object DOMException]",On="[object Error]";var xn=function(t){if(!g(t))return!1;var e=b(t);return e==On||e==jn||"string"==typeof t.message&&"string"==typeof t.name&&!ie(t)};const wn={_depth:0,debug:!1,negateMatch:!1,matchAll:!1,skipMissingProps:!1,caseSensitive:!1,data:{}},$n=(t={})=>({...wn,...t}),Mn=(t={})=>({...wn,...t,_depth:void 0!==t._depth&&t._depth>=0?t._depth+1:0}),kn={bool:Ie,boolean:Ie,string:Xt,number:_e,integer:Re,float:function(t){return!me(t)&&_e(t)&&!Re(t)&&t!==1/0},array:e,arrayLike:Be,map:cn,set:pn,object:w,objectLike:g,plainObject:ie,function:A,regExp:yn,date:mn,null:function(t){return null===t},undefined:function(t){return void 0===t},nan:me,nil:function(t){return null==t},error:xn,truthy:Ve,falsy:function(t){return!t}},Sn={not:(t,e,n)=>Pn(t,e,Mn({...n,matchAll:!1,negateMatch:!ze(n,"negateMatch")||!n.negateMatch})),all:(t,e,n)=>Pn(t,e,Mn({...n,negateMatch:!1,matchAll:!0})),any:(t,e,n)=>Pn(t,e,Mn({...n,matchAll:!1})),eq:(t,e)=>t==e,eqs:(t,e)=>t===e,gt:(t,e)=>t>e,gte:(t,e)=>t>=e,lt:(t,e)=>t<e,lte:(t,e)=>t<=e,insideRange:(t,e)=>ze(e,"min")&&ze(e,"max")&&t>e.min&&t<e.max,withinRange:(t,e)=>ze(e,"min")&&ze(e,"max")&&t>=e.min&&t<=e.max,withinRangeMin:(t,e)=>ze(e,"min")&&ze(e,"max")&&t>=e.min&&t<e.max,withinRangeMax:(t,e)=>ze(e,"min")&&ze(e,"max")&&t>e.min&&t<=e.max,outsideRange:(t,e)=>ze(e,"min")&&ze(e,"max")&&t<e.min&&t>e.max,outerRange:(t,e)=>ze(e,"min")&&ze(e,"max")&&t<=e.min&&t>=e.max,outerRangeMin:(t,e)=>ze(e,"min")&&ze(e,"max")&&t<=e.min&&t>e.max,outerRangeMax:(t,e)=>ze(e,"min")&&ze(e,"max")&&t<e.min&&t>=e.max,re:(t,e,{caseSensitive:n=!1})=>(e instanceof RegExp?e:new RegExp(e,n?void 0:"i")).test(t),startsWith:(t,e,{caseSensitive:n=!1})=>new RegExp(`^${qe(`${e}`)}`,n?void 0:"i").test(t+""),endsWith:(t,e,{caseSensitive:n=!1})=>new RegExp(`${qe(`${e}`)}$`,n?void 0:"i").test(t+""),contains:(t,n,{caseSensitive:r=!1})=>e(t)?t.indexOf(n)>-1:r?t.indexOf(n)>-1:new RegExp(`${qe(n)}`,"i").test(t),includesAny:(t,e)=>Ne(ae(t),...ae(e)),includesAll:(t,e)=>Te(ae(t),...ae(e)),type:(t,e)=>ze(kn,e,A)&&kn[e].call(t,t),has:(t,n,r)=>{let o=!1,i=0,a=0;if(Xt(n)||e(n))if(e(n))if(i=n.length,ze(r,"matchAll",Ve)){for(let e=0;e<i;e++){const o=n[e];!ze(r,"skipMissingProps",Ve)||ze(t,o)||ze(r,`data.${o}`)?a+=ze(t,o)?1:0:i--}o=a===i}else for(let e=0;e<i;e++){const a=n[e];if(!ze(r,"skipMissingProps",Ve)||ze(t,a)||ze(r,["data",a])){if(ze(t,a)){o=!0;break}}else i--}else o=ze(t,n);else if(w(n)){let u=Object.keys(n);i=u.length;for(let c=0;c<i;c++){let l=u[c];if(ze(r,"skipMissingProps",Ve)&&!ze(t,l)&&!ze(r,["data",l])){i--;continue}let s=e(t)||ze(t,l)?qt(t,l):ze(r,`data.${l}`)?qt(r.data,l):void 0,f=ae(s),p=ae(n[l]);if(o=ze(r,"matchAll",Ve)?Te(f,...p):Ne(f,...p)){if(a++,!ze(r,"matchAll",Ve))break;o=a===i}}}return o},match:(t,e,n)=>{let r=!1,o=0,i=0;if(w(e)){const a=Object.keys(e);i=a.length;for(let u=0;u<i;u++){const c=a[u];if(ze(n,"skipMissingProps",Ve)&&!ze(t,c)&&!ze(n,`data.${c}`)){i--;continue}const l=qt(e,c);if(r=Pn(ze(t,c)?qt(t,c):ze(n,`data.${c}`)?qt(n.data,c):void 0,l,$n({data:n.data||{}}))){if(o++,!ze(n,"matchAll",Ve))break;r=o===i}}}return r}};function Pn(t,e,n){const r=$n({...n,_depth:qt(n,"_depth",0)});let o=1,i=0,a=!1;const u=({ruleName:t,ruleValue:e,input:n,options:r,isValid:o})=>{o&&i++,r.debug};if(A(e))(a=e(t,e,r))&&u({ruleName:"fn",ruleValue:e,input:t,options:r,isValid:a});else{const n=Object.keys(e);o=n.length;for(let c=0;c<o;c++){const l=n[c],s=e[l];if(A(s))a=s(t,s,r);else if(ze(Sn,l,A)){a=(0,Sn[l])(t,s,r)}if(a){if(u({ruleName:l,ruleValue:s,input:t,options:r,isValid:a}),!ze(r,"matchAll",Ve)||i===o)break;a=!1}else u({ruleName:l,ruleValue:s,input:t,options:r,isValid:a})}}return ze(r,"negateMatch",Ve)?!a:a}const An=function t(n,...r){let o=Object.freeze({...n}),i={};return r&&r.length?(r.forEach(r=>{if(Xt(r)){let t=Fe(r,n,i);void 0!==t&&Kt(i,r,t)}else ie(r)&&Object.keys(r).forEach(a=>{let u=Fe(a,n,i),c=qt(r,a);if(A(c)){let t=c(u,a,o,i);void 0!==t&&(ie(t)?i={...i,...t}:Kt(i,a,t))}else ie(u)&&(ie(c)||e(c))?Kt(i,a,t(u,...ae(c))):Xt(c)&&void 0!==u&&Kt(i,c,u)})}),i):{...n}},En=Pn;var Rn={transform:An,validate:En};t.default=Rn,t.transform=An,t.validate=En,Object.defineProperty(t,"__esModule",{value:!0})});