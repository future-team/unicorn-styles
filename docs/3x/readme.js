/*! Last update: Thu Apr 25 2019 19:48:16 GMT+0800 (CST) */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PhoenixStyles=t():e.PhoenixStyles=t()}(window,function(){return function(S){function e(e){for(var t,n,o=e[0],r=e[1],i=e[2],c=0,d=[];c<o.length;c++)n=o[c],B[n]&&d.push(B[n][0]),B[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(S[t]=r[t]);for(_&&_(e);d.length;)d.shift()();return b.push.apply(b,i||[]),a()}function a(){for(var e,t=0;t<b.length;t++){for(var n=b[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==B[i]&&(o=!1)}o&&(b.splice(t--,1),e=L(L.s=n[0]))}return e}var n=window.webpackHotUpdatePhoenixStyles;window.webpackHotUpdatePhoenixStyles=function(e,t){!function(e,t){if(!U[e]||!p[e])return;for(var n in p[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n]);0==--s&&0===l&&m()}(e,t),n&&n(e,t)};var i,o=!0,H="1a0c7b81d4ed9e5897a4",t=1e4,I={},T=[],r=[];var c=[],M="idle";function N(e){M=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var d,A,C,s=0,l=0,u={},p={},U={};function R(e){return+e+""===e?+e:e}function f(e){if("idle"!==M)throw new Error("check() is only allowed in idle status");return o=e,N("check"),(i=t,i=i||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=L.p+""+H+".hot-update.json";o.open("GET",r,!0),o.timeout=i,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void n(e)}t(e)}}})).then(function(e){if(!e)return N("idle"),null;p={},u={},U=e.c,C=e.h,N("prepare");var t=new Promise(function(e,t){d={resolve:e,reject:t}});for(var n in A={},B)h(n);return"prepare"===M&&0===l&&0===s&&m(),t});var i}function h(e){var t,n;U[e]?(p[e]=!0,s++,t=e,(n=document.createElement("script")).charset="utf-8",n.src=L.p+""+t+"."+H+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)):u[e]=!0}function m(){N("ready");var t=d;if(d=null,t)if(o)Promise.resolve().then(function(){return y(o)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&e.push(R(n));t.resolve(e)}}function y(n){if("ready"!==M)throw new Error("apply() is only allowed in ready status");var e,t,o,l,r;function i(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});0<o.length;){var r=o.pop(),i=r.id,c=r.chain;if((l=q[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<l.parents.length;d++){var a=l.parents[d],s=q[a];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===t.indexOf(a)&&(s.hot._acceptedDependencies[i]?(n[a]||(n[a]=[]),u(n[a],[i])):(delete n[a],t.push(a),o.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}n=n||{};var c={},d=[],a={},s=function(){console.warn("[HMR] unexpected require("+f.moduleId+") to disposed module")};for(var p in A)if(Object.prototype.hasOwnProperty.call(A,p)){var f;r=R(p);var h=!1,m=!1,y=!1,b="";switch((f=A[p]?i(r):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(f),n.ignoreUnaccepted||(h=new Error("Aborted because "+r+" is not accepted"+b));break;case"accepted":n.onAccepted&&n.onAccepted(f),m=!0;break;case"disposed":n.onDisposed&&n.onDisposed(f),y=!0;break;default:throw new Error("Unexception type "+f.type)}if(h)return N("abort"),Promise.reject(h);if(m)for(r in a[r]=A[r],u(d,f.outdatedModules),f.outdatedDependencies)Object.prototype.hasOwnProperty.call(f.outdatedDependencies,r)&&(c[r]||(c[r]=[]),u(c[r],f.outdatedDependencies[r]));y&&(u(d,[f.moduleId]),a[r]=s)}var v,x=[];for(t=0;t<d.length;t++)r=d[t],q[r]&&q[r].hot._selfAccepted&&x.push({module:r,errorHandler:q[r].hot._selfAccepted});N("dispose"),Object.keys(U).forEach(function(e){!1===U[e]&&delete B[e]});for(var w,_,g=d.slice();0<g.length;)if(r=g.pop(),l=q[r]){var E={},O=l.hot._disposeHandlers;for(o=0;o<O.length;o++)(e=O[o])(E);for(I[r]=E,l.hot.active=!1,delete q[r],delete c[r],o=0;o<l.children.length;o++){var D=q[l.children[o]];D&&(0<=(v=D.parents.indexOf(r))&&D.parents.splice(v,1))}}for(r in c)if(Object.prototype.hasOwnProperty.call(c,r)&&(l=q[r]))for(_=c[r],o=0;o<_.length;o++)w=_[o],0<=(v=l.children.indexOf(w))&&l.children.splice(v,1);for(r in N("apply"),H=C,a)Object.prototype.hasOwnProperty.call(a,r)&&(S[r]=a[r]);var j=null;for(r in c)if(Object.prototype.hasOwnProperty.call(c,r)&&(l=q[r])){_=c[r];var P=[];for(t=0;t<_.length;t++)if(w=_[t],e=l.hot._acceptedDependencies[w]){if(-1!==P.indexOf(e))continue;P.push(e)}for(t=0;t<P.length;t++){e=P[t];try{e(_)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:r,dependencyId:_[t],error:e}),n.ignoreErrored||j||(j=e)}}}for(t=0;t<x.length;t++){var k=x[t];r=k.module,T=[r];try{L(r)}catch(t){if("function"==typeof k.errorHandler)try{k.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:r,error:e,originalError:t}),n.ignoreErrored||j||(j=e),j||(j=t)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:r,error:t}),n.ignoreErrored||j||(j=t)}}return j?(N("fail"),Promise.reject(j)):(N("idle"),new Promise(function(e){e(d)}))}var q={},B={0:0},b=[];function L(e){if(q[e])return q[e].exports;var t,o,n=q[e]={i:e,l:!1,exports:{},hot:(t=e,o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(e,t){if(void 0===e)o._selfAccepted=!0;else if("function"==typeof e)o._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)o._acceptedDependencies[e[n]]=t||function(){};else o._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)o._declinedDependencies[e[t]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=o._disposeHandlers.indexOf(e);0<=t&&o._disposeHandlers.splice(t,1)},check:f,apply:y,status:function(e){if(!e)return M;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);0<=t&&c.splice(t,1)},data:I[t]},i=void 0,o),parents:(r=T,T=[],r),children:[]};return S[e].call(n.exports,n,n.exports,function(t){var n=q[t];if(!n)return L;var o=function(e){return n.hot.active?(q[e]?-1===q[e].parents.indexOf(t)&&q[e].parents.push(t):(T=[t],i=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),T=[]),L(e)},e=function(t){return{configurable:!0,enumerable:!0,get:function(){return L[t]},set:function(e){L[t]=e}}};for(var r in L)Object.prototype.hasOwnProperty.call(L,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(o,r,e(r));return o.e=function(e){return"ready"===M&&N("prepare"),l++,L.e(e).then(t,function(e){throw t(),e});function t(){l--,"prepare"===M&&(u[e]||h(e),0===l&&0===s&&m())}},o.t=function(e,t){return 1&t&&(e=o(e)),L.t(e,-2&t)},o}(e)),n.l=!0,n.exports}L.m=S,L.c=q,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(t,e){if(1&e&&(t=L(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)L.d(n,o,function(e){return t[e]}.bind(null,o));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="",L.h=function(){return H};var v=window.webpackJsonpPhoenixStyles=window.webpackJsonpPhoenixStyles||[],x=v.push.bind(v);v.push=e,v=v.slice();for(var w=0;w<v.length;w++)e(v[w]);var _=x;return b.push(["./README.md",1]),a()}({"./README.md":function(e,t,n){"use strict";var o,r,i,c,d=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/react/index.js"),s=p(a),l=p(n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/react-dom/index.js")),u=p(n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/copy-to-clipboard/index.js"));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/@dp/acinonyx-code-prettify/prettify-min.js"),n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/github-markdown-css/github-markdown.css"),n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/@dp/acinonyx-code-prettify/prettify-min.css"),n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/@dp/acinonyx-doc-react-markdown-loader/index.css");var y=s.default.Fragment;function b(){var e=function(e){return document.querySelector(e)},t=e(".ax-doc-device-box"),n=function e(t){var n=t.offsetTop;return null!=t.offsetParent&&(n+=e(t.offsetParent)),n}(e(".ax-doc-box"));t.style.top=n+"px";var o=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;n<e?(t.style.position="fixed",t.style.top="0px"):(t.style.position="absolute",t.style.top=n+"px")};o(),document.addEventListener("scroll",o)}y=n("../../../../../../usr/local/lib/node_modules/@dp/acinonyx-cli/node_modules/@dp/acinonyx-doc/lib/template/react/index.js");var v={_stack:{},push:function(e,t){v._stack[t]=e},get:function(e){var t=v._stack[e];return s.default.createElement(t,null)}},x=(r=o=function(e){function o(e,t){f(this,o);var n=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.state={isShowDemo:e.defaultShowDemo,showDemoBtnText:e.defaultShowDemo?"隐藏代码":"展开代码"},n}return m(o,a.Component),d(o,[{key:"showCodeOrHide",value:function(){this.setState({isShowDemo:!this.state.isShowDemo,showDemoBtnText:"展开代码"==this.state.showDemoBtnText?"隐藏代码":"展开代码"})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.showDemo,o=e.code,r=e.codeSnippet;e.type;return s.default.createElement("div",{className:"ax-doc-demo-box"},r?s.default.createElement("div",{className:"ax-code-box"},s.default.createElement("div",{className:"ax-show-demo-content"},t),s.default.createElement("div",{className:"ax-code-exe-btns"},s.default.createElement("button",{className:"ax-code-exe-btn-sh",onClick:this.showCodeOrHide.bind(this)},this.state.showDemoBtnText),s.default.createElement("button",{className:"ax-code-exe-btn-copy",onClick:function(){(0,u.default)(o,{debug:!1,message:"Press #{key} to copy"})}},"复制代码"),s.default.createElement("button",{className:"ax-code-exe-btn-demo",onClick:function(){n(t)}},"执行代码")),s.default.createElement("div",{className:"ax-code-content",style:{display:this.state.isShowDemo?"block":"none"}},s.default.createElement("pre",{className:"code prettyprint linenums"},s.default.createElement("code",{className:""},o)))):s.default.createElement("div",{dangerouslySetInnerHTML:{__html:o},className:"markdown markdown-body"}))}}]),o}(),o.defaultProps={codeSnippet:!1,type:"pc",code:"",defaultShowDemo:!1,showDemo:function(){}},r),w=(c=i=function(e){function o(e,t){f(this,o);var n=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.state={demo:"请点击执行代码按钮预览示例内容！"},n}return m(o,a.Component),d(o,[{key:"showDemo",value:function(e){this.setState({demo:e})}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){setTimeout(function(){prettyPrint(),b()})}},{key:"render",value:function(){return s.default.createElement(y,null,s.default.createElement("div",{className:"ax-doc-box ax-doc-pc-box"},s.default.createElement(s.default.Fragment,null,s.default.createElement(x,{defaultShowDemo:!0,codeSnippet:!1,code:'<h1 id="phoenix-styles">phoenix-styles</h1>\n<p>一套完整的UI样式库,提供了简洁风格的布局和组件样式。\n搭配React UI组件库phoenix-ui使用: <a href="https://github.com/future-team/phoenix-ui">https://github.com/future-team/phoenix-ui</a></p>\n<h2 id="install">Install</h2>\n<div class="ax-doc-code-container"><pre class="code prettyprint"><code class="ax-code">    $ npm install phoenix-styles --save</code></pre></div><h2 id="usage">Usage</h2>\n<div class="ax-doc-code-container"><pre class="code prettyprint"><code class="ax-code">    // Global\n    <link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css">\n    // add IOS skin\n    <link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/skin-ios.min.css">\n\n    // ES6\n    import \'phoenix-styles/less/public.less\';\n\n    // Less(packaging by less-loader)\n    @import \'~phoenix-styles/less/public.less\';</code></pre></div><h2 id="documentation">Documentation</h2>\n<p><a href="http://future-team.github.io/phoenix-styles/example/index.html">http://future-team.github.io/phoenix-styles/example/index.html</a></p>\n<h2 id="browser-support">Browser Support</h2>\n<p>Phoenix Styles is tested with the following browsers and mobile OS.</p>\n<ul>\n<li>Android 4.4.2 +</li>\n<li>IOS 8 +</li>\n<li>Chrome</li>\n</ul>\n<h2 id="command">Command</h2>\n<div class="ax-doc-code-container"><pre class="code prettyprint"><code class="ax-code">  $ npm run build\n  $ npm run less \n  $ npm run dev</code></pre></div><h2 id="repair">Repair</h2>\n<p><code>version 3.0.0</code> 移除2.0中建议的viewport以及rem布局，调整1px边线，新增公共类。 <br>\n<code>version 2.0.5</code> Tab新增可换行的样式 <br>\n<code>version 2.0.0</code> 移除FormGroup和TableView,新增List；样式规范化 <br>\n<code>version 1.5.2</code> button新增icon属性调整 <br>\n<code>version 1.5.1</code> 新增image-list等组件的样式 <br>\n<code>version 1.4.1</code> 新增menu组件样式 <br>\n<code>version 1.1.3</code> 引入gfs-icons <br>\n<code>version 1.1.1</code> 样式统一加ph前缀，配合<a href="mailto:Phoenix-ui@v1.1.1">Phoenix-ui@v1.1.1</a>使用 <br>\n<code>version 1.1.0</code> 增加IOS样式(ios-skin) <br>\n<code>version 1.0.0</code> 增加phoenix-styles-grid.less兼容Android4.4以下布局方案 <br>\n<code>version 0.3.8</code> 样式参数化 <br></p>\n',type:"pc",showDemo:this.showDemo.bind(this)},v.get("TNwDEnNSTKhzcEzphnHwyypK")))),s.default.createElement("div",{className:"ax-doc-device-box"},s.default.createElement("div",{className:"ax-doc-device-demo"},this.state.demo)))}}]),o}(),i.defaultProps={},c);l.default.render(s.default.createElement(w,null),document.getElementById("axdoc-root"))}})});