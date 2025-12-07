(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Cy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sd={exports:{}},zo={};var $g;function Ny(){if($g)return zo;$g=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var e1;function Dy(){return e1||(e1=1,Sd.exports=Ny()),Sd.exports}var T=Dy(),Md={exports:{}},ut={};var t1;function Ly(){if(t1)return ut;t1=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function _(U,k,ue){this.props=U,this.context=k,this.refs=S,this.updater=ue||b}_.prototype.isReactComponent={},_.prototype.setState=function(U,k){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,k,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function C(){}C.prototype=_.prototype;function N(U,k,ue){this.props=U,this.context=k,this.refs=S,this.updater=ue||b}var I=N.prototype=new C;I.constructor=N,E(I,_.prototype),I.isPureReactComponent=!0;var H=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function L(U,k,ue){var xe=ue.ref;return{$$typeof:s,type:U,key:k,ref:xe!==void 0?xe:null,props:ue}}function R(U,k){return L(U.type,k,U.props)}function j(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function $(U){var k={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ue){return k[ue]})}var fe=/\/+/g;function pe(U,k){return typeof U=="object"&&U!==null&&U.key!=null?$(""+U.key):k.toString(36)}function ge(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(P,P):(U.status="pending",U.then(function(k){U.status==="pending"&&(U.status="fulfilled",U.value=k)},function(k){U.status==="pending"&&(U.status="rejected",U.reason=k)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,k,ue,xe,be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(te){case"bigint":case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0;break;case v:return de=U._init,O(de(U._payload),k,ue,xe,be)}}if(de)return be=be(U),de=xe===""?"."+pe(U,0):xe,H(be)?(ue="",de!=null&&(ue=de.replace(fe,"$&/")+"/"),O(be,k,ue,"",function(Ae){return Ae})):be!=null&&(j(be)&&(be=R(be,ue+(be.key==null||U&&U.key===be.key?"":(""+be.key).replace(fe,"$&/")+"/")+de)),k.push(be)),1;de=0;var Ce=xe===""?".":xe+":";if(H(U))for(var Ue=0;Ue<U.length;Ue++)xe=U[Ue],te=Ce+pe(xe,Ue),de+=O(xe,k,ue,te,be);else if(Ue=M(U),typeof Ue=="function")for(U=Ue.call(U),Ue=0;!(xe=U.next()).done;)xe=xe.value,te=Ce+pe(xe,Ue++),de+=O(xe,k,ue,te,be);else if(te==="object"){if(typeof U.then=="function")return O(ge(U),k,ue,xe,be);throw k=String(U),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return de}function F(U,k,ue){if(U==null)return U;var xe=[],be=0;return O(U,xe,"","",function(te){return k.call(ue,te,be++)}),xe}function W(U){if(U._status===-1){var k=U._result;k=k(),k.then(function(ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=ue)},function(ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=ue)}),U._status===-1&&(U._status=0,U._result=k)}if(U._status===1)return U._result.default;throw U._result}var ne=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},J={map:F,forEach:function(U,k,ue){F(U,function(){k.apply(this,arguments)},ue)},count:function(U){var k=0;return F(U,function(){k++}),k},toArray:function(U){return F(U,function(k){return k})||[]},only:function(U){if(!j(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ut.Activity=g,ut.Children=J,ut.Component=_,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=N,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},ut.cache=function(U){return function(){return U.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(U,k,ue){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xe=E({},U.props),be=U.key;if(k!=null)for(te in k.key!==void 0&&(be=""+k.key),k)!Y.call(k,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&k.ref===void 0||(xe[te]=k[te]);var te=arguments.length-2;if(te===1)xe.children=ue;else if(1<te){for(var de=Array(te),Ce=0;Ce<te;Ce++)de[Ce]=arguments[Ce+2];xe.children=de}return L(U.type,be,xe)},ut.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ut.createElement=function(U,k,ue){var xe,be={},te=null;if(k!=null)for(xe in k.key!==void 0&&(te=""+k.key),k)Y.call(k,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(be[xe]=k[xe]);var de=arguments.length-2;if(de===1)be.children=ue;else if(1<de){for(var Ce=Array(de),Ue=0;Ue<de;Ue++)Ce[Ue]=arguments[Ue+2];be.children=Ce}if(U&&U.defaultProps)for(xe in de=U.defaultProps,de)be[xe]===void 0&&(be[xe]=de[xe]);return L(U,te,be)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:h,render:U}},ut.isValidElement=j,ut.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:W}},ut.memo=function(U,k){return{$$typeof:p,type:U,compare:k===void 0?null:k}},ut.startTransition=function(U){var k=B.T,ue={};B.T=ue;try{var xe=U(),be=B.S;be!==null&&be(ue,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(P,ne)}catch(te){ne(te)}finally{k!==null&&ue.types!==null&&(k.types=ue.types),B.T=k}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(U){return B.H.use(U)},ut.useActionState=function(U,k,ue){return B.H.useActionState(U,k,ue)},ut.useCallback=function(U,k){return B.H.useCallback(U,k)},ut.useContext=function(U){return B.H.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U,k){return B.H.useDeferredValue(U,k)},ut.useEffect=function(U,k){return B.H.useEffect(U,k)},ut.useEffectEvent=function(U){return B.H.useEffectEvent(U)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(U,k,ue){return B.H.useImperativeHandle(U,k,ue)},ut.useInsertionEffect=function(U,k){return B.H.useInsertionEffect(U,k)},ut.useLayoutEffect=function(U,k){return B.H.useLayoutEffect(U,k)},ut.useMemo=function(U,k){return B.H.useMemo(U,k)},ut.useOptimistic=function(U,k){return B.H.useOptimistic(U,k)},ut.useReducer=function(U,k,ue){return B.H.useReducer(U,k,ue)},ut.useRef=function(U){return B.H.useRef(U)},ut.useState=function(U){return B.H.useState(U)},ut.useSyncExternalStore=function(U,k,ue){return B.H.useSyncExternalStore(U,k,ue)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.1",ut}var n1;function $h(){return n1||(n1=1,Md.exports=Ly()),Md.exports}var Q=$h();const Uy=Cy(Q);var bd={exports:{}},Bo={},Ed={exports:{}},Td={};var i1;function Py(){return i1||(i1=1,(function(s){function e(O,F){var W=O.length;O.push(F);e:for(;0<W;){var ne=W-1>>>1,J=O[ne];if(0<l(J,F))O[ne]=F,O[W]=J,W=ne;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],W=O.pop();if(W!==F){O[0]=W;e:for(var ne=0,J=O.length,U=J>>>1;ne<U;){var k=2*(ne+1)-1,ue=O[k],xe=k+1,be=O[xe];if(0>l(ue,W))xe<J&&0>l(be,ue)?(O[ne]=be,O[xe]=W,ne=xe):(O[ne]=ue,O[k]=W,ne=k);else if(xe<J&&0>l(be,W))O[ne]=be,O[xe]=W,ne=xe;else break e}}return F}function l(O,F){var W=O.sortIndex-F.sortIndex;return W!==0?W:O.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,M=!1,b=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function I(O){for(var F=i(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=O)r(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function H(O){if(E=!1,I(O),!b)if(i(m)!==null)b=!0,P||(P=!0,$());else{var F=i(p);F!==null&&ge(H,F.startTime-O)}}var P=!1,B=-1,Y=5,L=-1;function R(){return S?!0:!(s.unstable_now()-L<Y)}function j(){if(S=!1,P){var O=s.unstable_now();L=O;var F=!0;try{e:{b=!1,E&&(E=!1,C(B),B=-1),M=!0;var W=x;try{t:{for(I(O),g=i(m);g!==null&&!(g.expirationTime>O&&R());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,x=g.priorityLevel;var J=ne(g.expirationTime<=O);if(O=s.unstable_now(),typeof J=="function"){g.callback=J,I(O),F=!0;break t}g===i(m)&&r(m),I(O)}else r(m);g=i(m)}if(g!==null)F=!0;else{var U=i(p);U!==null&&ge(H,U.startTime-O),F=!1}}break e}finally{g=null,x=W,M=!1}F=void 0}}finally{F?$():P=!1}}}var $;if(typeof N=="function")$=function(){N(j)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=j,$=function(){pe.postMessage(null)}}else $=function(){_(j,0)};function ge(O,F){B=_(function(){O(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var W=x;x=F;try{return O()}finally{x=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=x;x=O;try{return F()}finally{x=W}},s.unstable_scheduleCallback=function(O,F,W){var ne=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,O){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=W+J,O={id:v++,callback:F,priorityLevel:O,startTime:W,expirationTime:J,sortIndex:-1},W>ne?(O.sortIndex=W,e(p,O),i(m)===null&&O===i(p)&&(E?(C(B),B=-1):E=!0,ge(H,W-ne))):(O.sortIndex=J,e(m,O),b||M||(b=!0,P||(P=!0,$()))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var F=x;return function(){var W=x;x=F;try{return O.apply(this,arguments)}finally{x=W}}}})(Td)),Td}var a1;function Oy(){return a1||(a1=1,Ed.exports=Py()),Ed.exports}var Ad={exports:{}},Dn={};var r1;function Iy(){if(r1)return Dn;r1=1;var s=$h();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Dn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var s1;function zy(){if(s1)return Ad.exports;s1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=Iy(),Ad.exports}var o1;function By(){if(o1)return Bo;o1=1;var s=Oy(),e=$h(),i=zy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,w=u.child;w;){if(w===a){y=!0,a=u,o=d;break}if(w===o){y=!0,o=u,a=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===a){y=!0,a=d,o=u;break}if(w===o){y=!0,o=d,a=u;break}w=w.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case I:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ge=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ne=[],J=-1;function U(t){return{current:t}}function k(t){0>J||(t.current=ne[J],ne[J]=null,J--)}function ue(t,n){J++,ne[J]=t.current,t.current=n}var xe=U(null),be=U(null),te=U(null),de=U(null);function Ce(t,n){switch(ue(te,n),ue(be,t),ue(xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mg(n),t=bg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(xe),ue(xe,t)}function Ue(){k(xe),k(be),k(te)}function Ae(t){t.memoizedState!==null&&ue(de,t);var n=xe.current,a=bg(n,t.type);n!==a&&(ue(be,t),ue(xe,a))}function Fe(t){be.current===t&&(k(xe),k(be)),de.current===t&&(k(de),Uo._currentValue=W)}var vt,it;function _t(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+it}var G=!1;function qe(t,n){if(!t||G)return"";G=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(he){var oe=he}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(he){oe=he}t.call(Se.prototype)}}else{try{throw Error()}catch(he){oe=he}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var V=y.split(`
`),re=w.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===re.length)for(o=V.length-1,u=re.length-1;1<=o&&0<=u&&V[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==re[u]){var ve=`
`+V[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function ft(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return _t("Activity");default:return""}}function Pt(t){try{var n="",a=null;do n+=ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,zt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,ot=s.unstable_shouldYield,z=s.unstable_requestPaint,A=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,me=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ie=s.unstable_IdlePriority,et=s.log,Ye=s.unstable_setDisableYieldValue,Te=null,Re=null;function Qe(t){if(typeof et=="function"&&Ye(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var Xe=Math.clz32?Math.clz32:X,Be=Math.log,st=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Be(t)/st|0)|0}var Pe=256,De=262144,Le=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=we(o):(y&=w,y!==0?u=we(y):a||(a=w&~t,a!==0&&(u=we(a))))):(w=o&~d,w!==0?u=we(w):y!==0?u=we(y):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ve(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(a=y&~a;0<a;){var ve=31-Xe(a),Se=1<<ve;w[ve]=0,V[ve]=-1;var oe=re[ve];if(oe!==null)for(re[ve]=null,ve=0;ve<oe.length;ve++){var he=oe[ve];he!==null&&(he.lane&=-536870913)}a&=~Se}o!==0&&ol(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function ol(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function js(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Xs(t,n){var a=n&-n;return a=(a&42)!==0?1:yi(a),(a&(t.suspendedLanes|n))!==0?0:a}function yi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Wg(t.type))}function qs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,mn="__reactProps$"+Zn,zi="__reactContainer$"+Zn,Or="__reactEvents$"+Zn,pu="__reactListeners$"+Zn,mu="__reactHandles$"+Zn,ll="__reactResources$"+Zn,ar="__reactMarker$"+Zn;function Ys(t){delete t[cn],delete t[mn],delete t[Or],delete t[pu],delete t[mu]}function Sa(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ng(t);t!==null;){if(a=t[cn])return a;t=Ng(t)}return n}t=a,a=t.parentNode}return null}function D(t){if(t=t[cn]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Z(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ce(t){var n=t[ll];return n||(n=t[ll]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[ar]=!0}var ee=new Set,Ne={};function Oe(t,n){Ge(t,n),Ge(t+"Capture",n)}function Ge(t,n){for(Ne[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},rt={};function Je(t){return He.call(rt,t)?!0:He.call(nt,t)?!1:ke.test(t)?rt[t]=!0:(nt[t]=!0,!1)}function ht(t,n,a){if(Je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Bt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function Zt(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,u,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Et(n)):t.value!==""+Et(n)&&(t.value=""+Et(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,Et(n)):a!=null?Sn(t,y,Et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Et(w):t.removeAttribute("name")}function Kt(t,n,a,o,u,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Et(a):"",n=n!=null?""+Et(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qt(t)}function Sn(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Mn(t,n,a){if(n!=null&&(n=""+Et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Et(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&xp(t,d,n[d])}function gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return A_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var vu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,zr=null;function Sp(t){var n=D(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Tt(o)}break e;case"textarea":Mn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var xu=!1;function Mp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Ir!==null||zr!==null)&&(Kl(),Ir&&(n=Ir,t=zr,zr=Ir=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Gi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{yu=!1}var ba=null,Su=null,ul=null;function bp(){if(ul)return ul;var t,n=Su,a=n.length,o,u="value"in ba?ba.value:ba.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return ul=u.slice(t,1<o?1-o:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Ep(){return!1}function Fn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?dl:Ep,this.isPropagationStopped=Ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Fn(rr),Qs=g({},rr,{view:0,detail:0}),w_=Fn(Qs),Mu,bu,Js,pl=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Mu=t.screenX-Js.screenX,bu=t.screenY-Js.screenY):bu=Mu=0,Js=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Tp=Fn(pl),R_=g({},pl,{dataTransfer:0}),C_=Fn(R_),N_=g({},Qs,{relatedTarget:0}),Eu=Fn(N_),D_=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Fn(D_),U_=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=Fn(U_),O_=g({},rr,{data:0}),Ap=Fn(O_),I_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=B_[t])?!!n[t]:!1}function Tu(){return F_}var H_=g({},Qs,{key:function(t){if(t.key){var n=I_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G_=Fn(H_),V_=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Fn(V_),k_=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),j_=Fn(k_),X_=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=Fn(X_),q_=g({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=Fn(q_),Z_=g({},rr,{newState:0,oldState:0}),K_=Fn(Z_),Q_=[9,13,27,32],Au=Gi&&"CompositionEvent"in window,$s=null;Gi&&"documentMode"in document&&($s=document.documentMode);var J_=Gi&&"TextEvent"in window&&!$s,Rp=Gi&&(!Au||$s&&8<$s&&11>=$s),Cp=" ",Np=!1;function Dp(t,n){switch(t){case"keyup":return Q_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function $_(t,n){switch(t){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Np=!0,Cp);case"textInput":return t=n.data,t===Cp&&Np?null:t;default:return null}}function ex(t,n){if(Br)return t==="compositionend"||!Au&&Dp(t,n)?(t=bp(),ul=Su=ba=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tx[t.type]:n==="textarea"}function Pp(t,n,a,o){Ir?zr?zr.push(o):zr=[o]:Ir=o,n=ic(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function nx(t){gg(t,0)}function ml(t){var n=Z(t);if(Tt(n))return t}function Op(t,n){if(t==="change")return n}var Ip=!1;if(Gi){var wu;if(Gi){var Ru="oninput"in document;if(!Ru){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Ru=typeof zp.oninput=="function"}wu=Ru}else wu=!1;Ip=wu&&(!document.documentMode||9<document.documentMode)}function Bp(){eo&&(eo.detachEvent("onpropertychange",Fp),to=eo=null)}function Fp(t){if(t.propertyName==="value"&&ml(to)){var n=[];Pp(n,to,t,_u(t)),Mp(nx,n)}}function ix(t,n,a){t==="focusin"?(Bp(),eo=n,to=a,eo.attachEvent("onpropertychange",Fp)):t==="focusout"&&Bp()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(to)}function rx(t,n){if(t==="click")return ml(n)}function sx(t,n){if(t==="input"||t==="change")return ml(n)}function ox(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:ox;function no(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!He.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,n){var a=Hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lx=Gi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Nu=null,io=null,Du=!1;function jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Fr==null||Fr!==yn(o)||(o=Fr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ic(Nu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Fr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Lu={},Xp={};Gi&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function or(t){if(Lu[t])return Lu[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Lu[t]=n[a];return t}var Wp=or("animationend"),qp=or("animationiteration"),Yp=or("animationstart"),cx=or("transitionrun"),ux=or("transitionstart"),fx=or("transitioncancel"),Zp=or("transitionend"),Kp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Si(t,n){Kp.set(t,n),Oe(n,[t])}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Gr=0,Pu=0;function vl(){for(var t=Gr,n=Pu=Gr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Qp(a,u,d)}}function _l(t,n,a,o){si[Gr++]=t,si[Gr++]=n,si[Gr++]=a,si[Gr++]=o,Pu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return _l(t,n,a,o),xl(t)}function lr(t,n){return _l(t,null,null,n),xl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function xl(t){if(50<Ao)throw Ao=0,Xf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function dx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new dx(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Iu(t)&&(y=1);else if(typeof t=="string")y=vy(t,a,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Qn(31,a,n,u),t.elementType=L,t.lanes=d,t;case E:return cr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=Qn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case H:return t=Qn(13,a,n,u),t.elementType=H,t.lanes=d,t;case P:return t=Qn(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case C:y=9;break e;case I:y=11;break e;case B:y=14;break e;case Y:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Qn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function cr(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function zu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function $p(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Bu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var em=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=em.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},em.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var kr=[],jr=0,Sl=null,ao=0,li=[],ci=0,Ea=null,Di=1,Li="";function ki(t,n){kr[jr++]=ao,kr[jr++]=Sl,Sl=t,ao=n}function tm(t,n,a){li[ci++]=Di,li[ci++]=Li,li[ci++]=Ea,Ea=t;var o=Di;t=Li;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var d=32-Xe(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Di=1<<32-Xe(n)+u|a<<u|o,Li=d+t}else Di=1<<d|a<<u|o,Li=t}function Fu(t){t.return!==null&&(ki(t,1),tm(t,1,0))}function Hu(t){for(;t===Sl;)Sl=kr[--jr],kr[jr]=null,ao=kr[--jr],kr[jr]=null;for(;t===Ea;)Ea=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null}function nm(t,n){li[ci++]=Di,li[ci++]=Li,li[ci++]=Ea,Di=n.id,Li=n.overflow,Ea=t}var An=null,Qt=null,At=!1,Ta=null,ui=!1,Gu=Error(r(519));function Aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(oi(n,t)),Gu}function im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[mn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)yt(Ro[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Kt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Aa(t,!0)}function am(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function Xr(t){if(t!==An)return!1;if(!At)return am(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&Qt&&Aa(t),am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=Cg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=Cg(t)}else n===27?(n=Qt,Ha(t.type)?(t=fd,fd=null,Qt=t):Qt=n):Qt=An?di(t.stateNode.nextSibling):null;return!0}function ur(){Qt=An=null,At=!1}function Vu(){var t=Ta;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Ta=null),t}function ro(t){Ta===null?Ta=[t]:Ta.push(t)}var ku=U(null),fr=null,ji=null;function wa(t,n,a){ue(ku,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=ku.current,k(ku)}function ju(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var V=0;V<n.length;V++)if(w.context===n[V]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),ju(d.return,a,t),o||(y=null);break e}d=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),ju(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Wr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=u.type;Kn(u.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(u===de.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Xu(n,t,a,o),n.flags|=262144}function Ml(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return rm(fr,t)}function bl(t,n){return fr===null&&dr(t),rm(t,n)}function rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},px=s.unstable_scheduleCallback,mx=s.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new hx,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&px(mx,function(){t.controller.abort()})}var oo=null,qu=0,qr=0,Yr=null;function gx(t,n){if(oo===null){var a=oo=[];qu=0,qr=Qf(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(sm,sm),n}function sm(){if(--qu===0&&oo!==null){Yr!==null&&(Yr.status="fulfilled");var t=oo;oo=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=O.S;O.S=function(t,n){j0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(t,n),om!==null&&om(t,n)};var hr=U(null);function Yu(){var t=hr.current;return t!==null?t:Yt.pooledCache}function El(t,n){n===null?ue(hr,hr.current):ue(hr,n.pool)}function lm(){var t=Yu();return t===null?null:{parent:un._currentValue,pool:t}}var Zr=Error(r(460)),Zu=Error(r(474)),Tl=Error(r(542)),Al={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw mr=n,Zr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Zr):a}}var mr=null;function fm(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function dm(t){if(t===Zr||t===Tl)throw Error(r(483))}var Kr=null,lo=0;function wl(t){var n=lo;return lo+=1,Kr===null&&(Kr=[]),um(Kr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Rl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n(K,q){if(t){var ie=K.deletions;ie===null?(K.deletions=[q],K.flags|=16):ie.push(q)}}function a(K,q){if(!t)return null;for(;q!==null;)n(K,q),q=q.sibling;return null}function o(K){for(var q=new Map;K!==null;)K.key!==null?q.set(K.key,K):q.set(K.index,K),K=K.sibling;return q}function u(K,q){return K=Vi(K,q),K.index=0,K.sibling=null,K}function d(K,q,ie){return K.index=ie,t?(ie=K.alternate,ie!==null?(ie=ie.index,ie<q?(K.flags|=67108866,q):ie):(K.flags|=67108866,q)):(K.flags|=1048576,q)}function y(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,q,ie,_e){return q===null||q.tag!==6?(q=zu(ie,K.mode,_e),q.return=K,q):(q=u(q,ie),q.return=K,q)}function V(K,q,ie,_e){var $e=ie.type;return $e===E?ve(K,q,ie.props.children,_e,ie.key):q!==null&&(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Y&&pr($e)===q.type)?(q=u(q,ie.props),co(q,ie),q.return=K,q):(q=yl(ie.type,ie.key,ie.props,null,K.mode,_e),co(q,ie),q.return=K,q)}function re(K,q,ie,_e){return q===null||q.tag!==4||q.stateNode.containerInfo!==ie.containerInfo||q.stateNode.implementation!==ie.implementation?(q=Bu(ie,K.mode,_e),q.return=K,q):(q=u(q,ie.children||[]),q.return=K,q)}function ve(K,q,ie,_e,$e){return q===null||q.tag!==7?(q=cr(ie,K.mode,_e,$e),q.return=K,q):(q=u(q,ie),q.return=K,q)}function Se(K,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=zu(""+q,K.mode,ie),q.return=K,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return ie=yl(q.type,q.key,q.props,null,K.mode,ie),co(ie,q),ie.return=K,ie;case b:return q=Bu(q,K.mode,ie),q.return=K,q;case Y:return q=pr(q),Se(K,q,ie)}if(ge(q)||$(q))return q=cr(q,K.mode,ie,null),q.return=K,q;if(typeof q.then=="function")return Se(K,wl(q),ie);if(q.$$typeof===N)return Se(K,bl(K,q),ie);Rl(K,q)}return null}function oe(K,q,ie,_e){var $e=q!==null?q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return $e!==null?null:w(K,q,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===$e?V(K,q,ie,_e):null;case b:return ie.key===$e?re(K,q,ie,_e):null;case Y:return ie=pr(ie),oe(K,q,ie,_e)}if(ge(ie)||$(ie))return $e!==null?null:ve(K,q,ie,_e,null);if(typeof ie.then=="function")return oe(K,q,wl(ie),_e);if(ie.$$typeof===N)return oe(K,q,bl(K,ie),_e);Rl(K,ie)}return null}function he(K,q,ie,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(ie)||null,w(q,K,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return K=K.get(_e.key===null?ie:_e.key)||null,V(q,K,_e,$e);case b:return K=K.get(_e.key===null?ie:_e.key)||null,re(q,K,_e,$e);case Y:return _e=pr(_e),he(K,q,ie,_e,$e)}if(ge(_e)||$(_e))return K=K.get(ie)||null,ve(q,K,_e,$e,null);if(typeof _e.then=="function")return he(K,q,ie,wl(_e),$e);if(_e.$$typeof===N)return he(K,q,ie,bl(q,_e),$e);Rl(q,_e)}return null}function je(K,q,ie,_e){for(var $e=null,Nt=null,We=q,pt=q=0,Mt=null;We!==null&&pt<ie.length;pt++){We.index>pt?(Mt=We,We=null):Mt=We.sibling;var Dt=oe(K,We,ie[pt],_e);if(Dt===null){We===null&&(We=Mt);break}t&&We&&Dt.alternate===null&&n(K,We),q=d(Dt,q,pt),Nt===null?$e=Dt:Nt.sibling=Dt,Nt=Dt,We=Mt}if(pt===ie.length)return a(K,We),At&&ki(K,pt),$e;if(We===null){for(;pt<ie.length;pt++)We=Se(K,ie[pt],_e),We!==null&&(q=d(We,q,pt),Nt===null?$e=We:Nt.sibling=We,Nt=We);return At&&ki(K,pt),$e}for(We=o(We);pt<ie.length;pt++)Mt=he(We,K,pt,ie[pt],_e),Mt!==null&&(t&&Mt.alternate!==null&&We.delete(Mt.key===null?pt:Mt.key),q=d(Mt,q,pt),Nt===null?$e=Mt:Nt.sibling=Mt,Nt=Mt);return t&&We.forEach(function(Xa){return n(K,Xa)}),At&&ki(K,pt),$e}function at(K,q,ie,_e){if(ie==null)throw Error(r(151));for(var $e=null,Nt=null,We=q,pt=q=0,Mt=null,Dt=ie.next();We!==null&&!Dt.done;pt++,Dt=ie.next()){We.index>pt?(Mt=We,We=null):Mt=We.sibling;var Xa=oe(K,We,Dt.value,_e);if(Xa===null){We===null&&(We=Mt);break}t&&We&&Xa.alternate===null&&n(K,We),q=d(Xa,q,pt),Nt===null?$e=Xa:Nt.sibling=Xa,Nt=Xa,We=Mt}if(Dt.done)return a(K,We),At&&ki(K,pt),$e;if(We===null){for(;!Dt.done;pt++,Dt=ie.next())Dt=Se(K,Dt.value,_e),Dt!==null&&(q=d(Dt,q,pt),Nt===null?$e=Dt:Nt.sibling=Dt,Nt=Dt);return At&&ki(K,pt),$e}for(We=o(We);!Dt.done;pt++,Dt=ie.next())Dt=he(We,K,pt,Dt.value,_e),Dt!==null&&(t&&Dt.alternate!==null&&We.delete(Dt.key===null?pt:Dt.key),q=d(Dt,q,pt),Nt===null?$e=Dt:Nt.sibling=Dt,Nt=Dt);return t&&We.forEach(function(Ry){return n(K,Ry)}),At&&ki(K,pt),$e}function Xt(K,q,ie,_e){if(typeof ie=="object"&&ie!==null&&ie.type===E&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var $e=ie.key;q!==null;){if(q.key===$e){if($e=ie.type,$e===E){if(q.tag===7){a(K,q.sibling),_e=u(q,ie.props.children),_e.return=K,K=_e;break e}}else if(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Y&&pr($e)===q.type){a(K,q.sibling),_e=u(q,ie.props),co(_e,ie),_e.return=K,K=_e;break e}a(K,q);break}else n(K,q);q=q.sibling}ie.type===E?(_e=cr(ie.props.children,K.mode,_e,ie.key),_e.return=K,K=_e):(_e=yl(ie.type,ie.key,ie.props,null,K.mode,_e),co(_e,ie),_e.return=K,K=_e)}return y(K);case b:e:{for($e=ie.key;q!==null;){if(q.key===$e)if(q.tag===4&&q.stateNode.containerInfo===ie.containerInfo&&q.stateNode.implementation===ie.implementation){a(K,q.sibling),_e=u(q,ie.children||[]),_e.return=K,K=_e;break e}else{a(K,q);break}else n(K,q);q=q.sibling}_e=Bu(ie,K.mode,_e),_e.return=K,K=_e}return y(K);case Y:return ie=pr(ie),Xt(K,q,ie,_e)}if(ge(ie))return je(K,q,ie,_e);if($(ie)){if($e=$(ie),typeof $e!="function")throw Error(r(150));return ie=$e.call(ie),at(K,q,ie,_e)}if(typeof ie.then=="function")return Xt(K,q,wl(ie),_e);if(ie.$$typeof===N)return Xt(K,q,bl(K,ie),_e);Rl(K,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,q!==null&&q.tag===6?(a(K,q.sibling),_e=u(q,ie),_e.return=K,K=_e):(a(K,q),_e=zu(ie,K.mode,_e),_e.return=K,K=_e),y(K)):a(K,q)}return function(K,q,ie,_e){try{lo=0;var $e=Xt(K,q,ie,_e);return Kr=null,$e}catch(We){if(We===Zr||We===Tl)throw We;var Nt=Qn(29,We,null,K.mode);return Nt.lanes=_e,Nt.return=K,Nt}finally{}}}var gr=hm(!0),pm=hm(!1),Ra=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(t),Qp(t,null,a),n}return _l(t,o,n,a),xl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function fo(){if($u){var t=Yr;if(t!==null)throw t}}function ho(t,n,a,o){$u=!1;var u=t.updateQueue;Ra=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var V=w,re=V.next;V.next=null,y===null?d=re:y.next=re,y=V;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==y&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=V))}if(d!==null){var Se=u.baseState;y=0,ve=re=V=null,w=d;do{var oe=w.lane&-536870913,he=oe!==w.lane;if(he?(St&oe)===oe:(o&oe)===oe){oe!==0&&oe===qr&&($u=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var je=t,at=w;oe=n;var Xt=a;switch(at.tag){case 1:if(je=at.payload,typeof je=="function"){Se=je.call(Xt,Se,oe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=at.payload,oe=typeof je=="function"?je.call(Xt,Se,oe):je,oe==null)break e;Se=g({},Se,oe);break e;case 2:Ra=!0}}oe=w.callback,oe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=he,V=Se):ve=ve.next=he,y|=oe;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ve===null&&(V=Se),u.baseState=V,u.firstBaseUpdate=re,u.lastBaseUpdate=ve,d===null&&(u.shared.lanes=0),Oa|=y,t.lanes=y,t.memoizedState=Se}}function mm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mm(a[t],n)}var Qr=U(null),Cl=U(0);function vm(t,n){t=ea,ue(Cl,t),ue(Qr,n),ea=t|n.baseLanes}function ef(){ue(Cl,ea),ue(Qr,Qr.current)}function tf(){ea=Cl.current,k(Qr),k(Cl)}var Jn=U(null),fi=null;function Da(t){var n=t.alternate;ue(an,an.current&1),ue(Jn,t),fi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(fi=t)}function nf(t){ue(an,an.current),ue(Jn,t),fi===null&&(fi=t)}function _m(t){t.tag===22?(ue(an,an.current),ue(Jn,t),fi===null&&(fi=t)):La()}function La(){ue(an,an.current),ue(Jn,Jn.current)}function $n(t){k(Jn),fi===t&&(fi=null),k(an)}var an=U(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,dt=null,kt=null,fn=null,Dl=!1,Jr=!1,vr=!1,Ll=0,po=0,$r=null,_x=0;function tn(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function rf(t,n,a,o,u,d){return Wi=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?t0:yf,vr=!1,d=a(o,u),vr=!1,Jr&&(d=ym(n,a,o,u)),xm(t),d}function xm(t){O.H=vo;var n=kt!==null&&kt.next!==null;if(Wi=0,fn=kt=dt=null,Dl=!1,po=0,$r=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Ml(t)&&(dn=!0))}function ym(t,n,a,o){dt=t;var u=0;do{if(Jr&&($r=null),po=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,fn=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=n0,d=n(a,o)}while(Jr);return d}function xx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(dt.flags|=1024),n}function sf(){var t=Ll!==0;return Ll=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}Wi=0,fn=kt=dt=null,Jr=!1,po=Ll=0,$r=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?dt.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(kt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=fn===null?dt.memoizedState:fn.next;if(n!==null)fn=n,kt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},fn===null?dt.memoizedState=fn=t:fn=fn.next=t}return fn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,$r===null&&($r=[]),t=um($r,t,n),n=dt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?t0:yf),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===N)return wn(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function Ol(t){var n=rn();return uf(n,kt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=y=null,V=null,re=n,ve=!1;do{var Se=re.lane&-536870913;if(Se!==re.lane?(St&Se)===Se:(Wi&Se)===Se){var oe=re.revertLane;if(oe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Se===qr&&(ve=!0);else if((Wi&oe)===oe){re=re.next,oe===qr&&(ve=!0);continue}else Se={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=Se,y=d):V=V.next=Se,dt.lanes|=oe,Oa|=oe;Se=re.action,vr&&a(d,Se),d=re.hasEagerState?re.eagerState:a(d,Se)}else oe={lane:Se,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=oe,y=d):V=V.next=oe,dt.lanes|=Se,Oa|=Se;re=re.next}while(re!==null&&re!==n);if(V===null?y=d:V.next=w,!Kn(d,t.memoizedState)&&(dn=!0,ve&&(a=Yr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Kn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Sm(t,n,a){var o=dt,u=rn(),d=At;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Kn((kt||u).memoizedState,a);if(y&&(u.memoizedState=a,dn=!0),u=u.queue,pf(Em.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},bm.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));d||(Wi&127)!==0||Mm(o,n,a)}return a}function Mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Ul(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bm(t,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(t)}function Em(t,n,a){return a(function(){Tm(n)&&Am(t)})}function Tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function Am(t){var n=lr(t,2);n!==null&&jn(n,t,2)}function df(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),vr){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function wm(t,n,a,o){return t.baseState=a,uf(t,kt,typeof o=="function"?o:qi)}function yx(t,n,a,o,u){if(Bl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Rm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,y={};O.T=y;try{var w=a(u,o),V=O.S;V!==null&&V(y,w),Cm(t,n,w)}catch(re){hf(t,n,re)}finally{d!==null&&y.types!==null&&(d.types=y.types),O.T=d}}else try{d=a(u,o),Cm(t,n,d)}catch(re){hf(t,n,re)}}function Cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(t,n,o)},function(o){return hf(t,n,o)}):Nm(t,n,a)}function Nm(t,n,a){n.status="fulfilled",n.value=a,Dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}t.action=null}function Dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lm(t,n){return n}function Um(t,n){if(At){var a=Yt.formState;if(a!==null){e:{var o=dt;if(At){if(Qt){t:{for(var u=Qt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=di(u.nextSibling),o=u.data==="F!";break e}}Aa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,dt,o),o.dispatch=a,o=df(!1),d=xf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=yx.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Pm(t){var n=rn();return Om(n,kt,t)}function Om(t,n,a){if(n=uf(t,n,Lm)[0],t=Ol(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(y){throw y===Zr?Tl:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,es(9,{destroy:void 0},Sx.bind(null,u,a),null)),[o,d,t]}function Sx(t,n){t.action=n}function Im(t){var n=rn(),a=kt;if(a!==null)return Om(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function es(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Ul(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function zm(){return rn().memoizedState}function Il(t,n,a,o){var u=Pn();dt.flags|=t,u.memoizedState=es(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;kt!==null&&o!==null&&af(o,kt.memoizedState.deps)?u.memoizedState=es(n,d,a,o):(dt.flags|=t,u.memoizedState=es(1|n,d,a,o))}function Bm(t,n){Il(8390656,8,t,n)}function pf(t,n){zl(2048,8,t,n)}function Mx(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Ul(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Fm(t){var n=rn().memoizedState;return Mx({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hm(t,n){return zl(4,2,t,n)}function Gm(t,n){return zl(4,4,t,n)}function Vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function km(t,n,a){a=a!=null?a.concat([t]):null,zl(4,4,Vm.bind(null,n,t),a)}function mf(){}function jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),vr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=W0(),dt.lanes|=t,Oa|=t,a)}function Wm(t,n,a,o){return Kn(a,n)?a:Qr.current!==null?(t=gf(t,a,o),Kn(t,n)||(dn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(St&261930)===0?(dn=!0,t.memoizedState=a):(t=W0(),dt.lanes|=t,Oa|=t,n)}function qm(t,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var y=O.T,w={};O.T=w,xf(t,!1,n,a);try{var V=u(),re=O.S;if(re!==null&&re(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ve=vx(V,o);go(t,n,ve,ni(t))}else go(t,n,o,ni(t))}catch(Se){go(t,n,{then:function(){},status:"rejected",reason:Se},ni())}finally{F.p=d,y!==null&&w.types!==null&&(y.types=w.types),O.T=y}}function bx(){}function vf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Ym(t).queue;qm(t,u,n,W,a===null?bx:function(){return Zm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},ni())}function _f(){return wn(Uo)}function Km(){return rn().memoizedState}function Qm(){return rn().memoizedState}function Ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Ca(a);var o=Na(n,t,a);o!==null&&(jn(o,n,a),uo(o,n,a)),n={cache:Wu()},t.payload=n;return}n=n.return}}function Tx(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(t)?$m(n,a):(a=Ou(t,n,a,o),a!==null&&(jn(a,t,o),e0(a,n,o)))}function Jm(t,n,a){var o=ni();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))$m(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,w=d(y,a);if(u.hasEagerState=!0,u.eagerState=w,Kn(w,y))return _l(t,n,u,0),Yt===null&&vl(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return jn(a,t,o),e0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(n)throw Error(r(479))}else n=Ou(t,a,o,2),n!==null&&jn(n,t,2)}function Bl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function $m(t,n){Jr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}var vo={readContext:wn,use:Pl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vo.useEffectEvent=tn;var t0={readContext:wn,use:Pl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Il(4194308,4,Vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(vr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(vr){Qe(!0);try{a(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Tx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=Jm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=Pn();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=qm.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Pn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(St&127)!==0||Mm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Bm(Em.bind(null,o,d,t),[t]),o.flags|=2048,es(9,{destroy:void 0},bm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Yt.identifierPrefix;if(At){var a=Li,o=Di;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Um,useActionState:Um,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return Pn().memoizedState=Ex.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:wn,use:Pl,useCallback:jm,useContext:wn,useEffect:pf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Ol,useRef:zm,useState:function(){return Ol(qi)},useDebugValue:mf,useDeferredValue:function(t,n){var a=rn();return Wm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Ol(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:_f,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=rn();return wm(a,kt,t,n)},useMemoCache:cf,useCacheRefresh:Qm};yf.useEffectEvent=Fm;var n0={readContext:wn,use:Pl,useCallback:jm,useContext:wn,useEffect:pf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:ff,useRef:zm,useState:function(){return ff(qi)},useDebugValue:mf,useDeferredValue:function(t,n){var a=rn();return kt===null?gf(a,t,n):Wm(a,kt.memoizedState,t,n)},useTransition:function(){var t=ff(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:_f,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var a=rn();return kt!==null?wm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:Qm};n0.useEffectEvent=Fm;function Sf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ca(o);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ca(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Ca(a);o.tag=2,n!=null&&(o.callback=n),n=Na(t,o,a),n!==null&&(jn(n,t,a),uo(n,t,a))}};function i0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,d):!0}function a0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function r0(t){gl(t)}function s0(t){console.error(t)}function o0(t){gl(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function l0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function c0(t){return t=Ca(t),t.tag=3,t}function u0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){l0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){l0(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Ax(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,u)),!1}throw Error(r(435,a.tag))}return Yf(t,o,u),Ql(),!1}if(At)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(r(422),{cause:o}),ro(oi(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),ro(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=bf(t.stateNode,o,u),Ju(t,u),nn!==4&&(nn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),To===null?To=[d]:To.push(d),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=bf(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ia===null||!Ia.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=c0(u),u0(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(r(461)),dn=!1;function Rn(t,n,a,o){n.child=t===null?pm(n,null,a,o):gr(n,t.child,a,o)}function f0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return dr(n),o=rf(t,n,a,y,d,u),w=sf(),t!==null&&!dn?(of(t,n,u),Yi(t,n,u)):(At&&w&&Fu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function d0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,h0(t,n,d,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Lf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(y,o)&&t.ref===n.ref)return Yi(t,n,u)}return n.flags|=1,t=Vi(d,o),t.ref=n.ref,t.return=n,n.child=t}function h0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(no(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,Lf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Yi(t,n,u)}return Tf(t,n,a,o,u)}function p0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return m0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,d!==null?d.cachePool:null),d!==null?vm(n,d):ef(),_m(n);else return o=n.lanes=536870912,m0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(El(n,d.cachePool),vm(n,d),La(),n.memoizedState=null):(t!==null&&El(n,null),ef(),La());return Rn(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m0(t,n,a,o,u){var d=Yu();return d=d===null?null:{parent:un._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&El(n,null),ef(),_m(n),t!==null&&Wr(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g0(t,n,a){return gr(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function wx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,_o(null,t);if(nf(n),(t=Qt)?(t=Rg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Hl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=g0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Wr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(y=Xs(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,lr(t,y),jn(o,t,y),Ef;Ql(),n=g0(t,n,a)}else t=d.treeContext,Qt=di(y.nextSibling),An=n,At=!0,Ta=null,ui=!1,t!==null&&nm(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=Vi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,u){return dr(n),a=rf(t,n,a,o,void 0,u),o=sf(),t!==null&&!dn?(of(t,n,u),Yi(t,n,u)):(At&&o&&Fu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function v0(t,n,a,o,u,d){return dr(n),n.updateQueue=null,a=ym(n,o,a,u),xm(t),o=sf(),t!==null&&!dn?(of(t,n,d),Yi(t,n,d)):(At&&o&&Fu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function _0(t,n,a,o,u){if(dr(n),n.stateNode===null){var d=Vr,y=a.contextType;typeof y=="object"&&y!==null&&(d=wn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?wn(y):Vr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Sf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Mf.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,V=_r(a,w);d.props=V;var re=d.context,ve=a.contextType;y=Vr,typeof ve=="object"&&ve!==null&&(y=wn(ve));var Se=a.getDerivedStateFromProps;ve=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||re!==y)&&a0(n,d,o,y),Ra=!1;var oe=n.memoizedState;d.state=oe,ho(n,o,d,u),fo(),re=n.memoizedState,w||oe!==re||Ra?(typeof Se=="function"&&(Sf(n,a,Se,o),re=n.memoizedState),(V=Ra||i0(n,a,V,o,oe,re,y))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),d.props=o,d.state=re,d.context=y,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qu(t,n),y=n.memoizedProps,ve=_r(a,y),d.props=ve,Se=n.pendingProps,oe=d.context,re=a.contextType,V=Vr,typeof re=="object"&&re!==null&&(V=wn(re)),w=a.getDerivedStateFromProps,(re=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Se||oe!==V)&&a0(n,d,o,V),Ra=!1,oe=n.memoizedState,d.state=oe,ho(n,o,d,u),fo();var he=n.memoizedState;y!==Se||oe!==he||Ra||t!==null&&t.dependencies!==null&&Ml(t.dependencies)?(typeof w=="function"&&(Sf(n,a,w,o),he=n.memoizedState),(ve=Ra||i0(n,a,ve,o,oe,he,V)||t!==null&&t.dependencies!==null&&Ml(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=V,o=ve):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Gl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Yi(t,n,u),t}function x0(t,n,a,o){return ur(),n.flags|=256,Rn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:lm()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function y0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Da(n):La(),(t=Qt)?(t=Rg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Aa(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(La(),u=n.mode,w=Vl({mode:"hidden",children:w},u),o=cr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=wf(a),o.childLanes=Rf(t,y,a),n.memoizedState=Af,_o(null,o)):(Da(n),Cf(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(d)n.flags&256?(Da(n),n.flags&=-257,n=Nf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),w=o.fallback,u=n.mode,o=Vl({mode:"visible",children:o.children},u),w=cr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Rf(t,y,a),n.memoizedState=Af,n=_o(null,o));else if(Da(n),ud(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var re=y.dgst;y=re,o=Error(r(419)),o.stack="",o.digest=y,ro({value:o,source:null,stack:null}),n=Nf(t,n,a)}else if(dn||Wr(t,n,a,!1),y=(a&t.childLanes)!==0,dn||y){if(y=Yt,y!==null&&(o=Xs(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,lr(t,o),jn(y,t,o),Ef;cd(w)||Ql(),n=Nf(t,n,a)}else cd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Qt=di(w.nextSibling),An=n,At=!0,Ta=null,ui=!1,t!==null&&nm(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(La(),w=o.fallback,u=n.mode,V=t.child,re=V.sibling,o=Vi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,re!==null?w=Vi(re,w):(w=cr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,_o(null,o),o=n.child,w=t.child.memoizedState,w===null?w=wf(a):(u=w.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=lm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Rf(t,y,a),n.memoizedState=Af,_o(t.child,o)):(Da(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Nf(t,n,a){return gr(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function S0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,a)}function Df(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function M0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,w=(y&2)!==0;if(w?(y=y&1|2,n.flags|=128):y&=1,ue(an,y),Rn(t,n,o,a),o=At?ao:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,a,n);else if(t.tag===19)S0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Df(n,!0,a,null,d,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ml(t)))}function Rx(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),wa(n,un,t.memoizedState.cache),ur();break;case 27:case 5:Ae(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(t,n,a):(Da(n),t=Yi(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return M0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ue(an,an.current),o)break;return null;case 22:return n.lanes=0,p0(t,n,a,n.pendingProps);case 24:wa(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function b0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Lf(t,a)&&(n.flags&128)===0)return dn=!1,Rx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,At&&(n.flags&1048576)!==0&&tm(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=_r(t,o),n.tag=1,n=_0(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===I){n.tag=11,n=f0(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=d0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),_0(t,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Qu(t,n),ho(n,o,null,a);var y=n.memoizedState;if(o=y.cache,wa(n,un,o),o!==d.cache&&Xu(n,[un],a,!0),fo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=x0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),ro(u),n=x0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=di(t.firstChild),An=n,At=!0,Ta=null,ui=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),o===u){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=ac(te.current).createElement(a),o[cn]=n,o[mn]=t,Cn(o,a,t),se(o),n.stateNode=o):n.memoizedState=Pg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ae(n),t===null&&At&&(o=n.stateNode=Dg(n.type,n.pendingProps,te.current),An=n,ui=!0,u=Qt,Ha(n.type)?(fd=u,Qt=di(o.firstChild)):Qt=u),Rn(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Qt)&&(o=ay(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Qt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Aa(n)),Ae(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,sd(u,d)?o=null:y!==null&&sd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(t,n,xx,null,null,a),Uo._currentValue=u),Gl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Qt)&&(a=ry(a,n.pendingProps,ui),a!==null?(n.stateNode=a,An=n,Qt=null,t=!0):t=!1),t||Aa(n)),null;case 13:return y0(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return f0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return d0(t,n,n.type,n.pendingProps,a);case 15:return h0(t,n,n.type,n.pendingProps,a);case 19:return M0(t,n,a);case 31:return wx(t,n,a);case 22:return p0(t,n,a,n.pendingProps);case 24:return dr(n),o=wn(un),t===null?(u=Yu(),u===null&&(u=Yt,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ku(n),wa(n,un,u)):((t.lanes&a)!==0&&(Qu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,un,o)):(o=d.cache,wa(n,un,o),o!==u.cache&&Xu(n,[un],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw mr=Al,Zu}else t.flags&=-16777217}function E0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fg(n))if(K0())t.flags|=8192;else throw mr=Al,Zu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vt():536870912,t.lanes|=n,as|=n)}function xo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Cx(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xr(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Zi(n),d!==null?(Jt(n),E0(n,d)):(Jt(n),Uf(n,u,null,o,a))):d?d!==t.memoizedState?(Zi(n),Jt(n),E0(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zi(n),Jt(n),Uf(n,u,t,o,a)),null;case 27:if(Fe(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=xe.current,Xr(n)?im(n):(t=Dg(u,o,a),n.stateNode=t,Zi(n))}return Jt(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(d=xe.current,Xr(n))im(n);else{var y=ac(te.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[cn]=n,d[mn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zi(n)}}return Jt(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Xr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(t.nodeValue,a)),t||Aa(n,!0)}else t=ac(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Xr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Xr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Jt(n),null);case 4:return Ue(),t===null&&td(n.stateNode.containerInfo),Jt(n),null;case 10:return Xi(n.type),Jt(n),null;case 19:if(k(an),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)xo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Nl(t),d!==null){for(n.flags|=128,xo(o,!1),t=d.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return ue(an,an.current&1|2),At&&ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>Yl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return Jt(n),null}else 2*A()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=an.current,ue(an,u?a&1|2:a&1),At&&ki(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return $n(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&k(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Nx(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(un),Ue(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return k(an),null;case 4:return Ue(),null;case 10:return Xi(n.type),null;case 22:case 23:return $n(n),tf(),t!==null&&k(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function T0(t,n){switch(Hu(n),n.tag){case 3:Xi(un),Ue();break;case 26:case 27:case 5:Fe(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:k(an);break;case 10:Xi(n.type);break;case 22:case 23:$n(n),tf(),t!==null&&k(hr);break;case 24:Xi(un)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(w){Gt(n,n.return,w)}}function Ua(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=n;var V=a,re=w;try{re()}catch(ve){Gt(u,V,ve)}}}o=o.next}while(o!==d)}}catch(ve){Gt(n,n.return,ve)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gm(n,a)}catch(o){Gt(t,t.return,o)}}}function w0(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function R0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Pf(t,n,a){try{var o=t.stateNode;Jx(o,t.type,a,n),o[mn]=n}catch(u){Gt(t,t.return,u)}}function C0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function N0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[cn]=t,n[mn]=a}catch(d){Gt(t,t.return,d)}}var Ki=!1,hn=!1,zf=!1,D0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Dx(t,n){if(t=t.containerInfo,ad=fc,t=kp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,w=-1,V=-1,re=0,ve=0,Se=t,oe=null;t:for(;;){for(var he;Se!==a||u!==0&&Se.nodeType!==3||(w=y+u),Se!==d||o!==0&&Se.nodeType!==3||(V=y+o),Se.nodeType===3&&(y+=Se.nodeValue.length),(he=Se.firstChild)!==null;)oe=Se,Se=he;for(;;){if(Se===t)break t;if(oe===a&&++re===u&&(w=y),oe===d&&++ve===o&&(V=y),(he=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=he}a=w===-1||V===-1?null:{start:w,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},fc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=_r(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Gt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function L0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),o&4&&yo(5,a);break;case 1:if(Ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Gt(a,a.return,y)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Gt(a,a.return,y)}}o&64&&A0(a),o&512&&So(a,a.return);break;case 3:if(Ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(t,n)}catch(y){Gt(a,a.return,y)}}break;case 27:n===null&&o&4&&N0(a);case 26:case 5:Ji(t,a),n===null&&o&4&&R0(a),o&512&&So(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),o&4&&O0(t,a);break;case 13:Ji(t,a),o&4&&I0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hx.bind(null,a),sy(t,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||hn,u=Ki;var d=hn;Ki=o,(hn=n)&&!d?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=u,hn=d}break;case 30:break;default:Ji(t,a)}}function U0(t){var n=t.alternate;n!==null&&(t.alternate=null,U0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ys(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Hn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)P0(t,n,a),a=a.sibling}function P0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:hn||Ui(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ui(a,n);var o=$t,u=Hn;Ha(a.type)&&($t=a.stateNode,Hn=!1),Qi(t,n,a),No(a.stateNode),$t=o,Hn=u;break;case 5:hn||Ui(a,n);case 6:if(o=$t,u=Hn,$t=null,Qi(t,n,a),$t=o,Hn=u,$t!==null)if(Hn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){Gt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){Gt(a,n,d)}break;case 18:$t!==null&&(Hn?(t=$t,Ag(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ds(t)):Ag($t,a.stateNode));break;case 4:o=$t,u=Hn,$t=a.stateNode.containerInfo,Hn=!0,Qi(t,n,a),$t=o,Hn=u;break;case 0:case 11:case 14:case 15:Ua(2,a,n),hn||Ua(4,a,n),Qi(t,n,a);break;case 1:hn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w0(a,n,o)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Qi(t,n,a),hn=o;break;default:Qi(t,n,a)}}function O0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ds(t)}catch(a){Gt(n,n.return,a)}}}function I0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ds(t)}catch(a){Gt(n,n.return,a)}}function Lx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new D0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new D0),n;default:throw Error(r(435,t.tag))}}function Xl(t,n){var a=Lx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Gx.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ha(w.type)){$t=w.stateNode,Hn=!1;break e}break;case 5:$t=w.stateNode,Hn=!1;break e;case 3:case 4:$t=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if($t===null)throw Error(r(160));P0(d,y,u),$t=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)z0(n,t),n=n.sibling}var Mi=null;function z0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(Ua(3,t,t.return),yo(3,t),Ua(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ar]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[cn]=t,se(d),o=d;break e;case"link":var y=zg("link","href",u).get(o+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=zg("meta","content",u).get(o+(a.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,se(d),o=d}t.stateNode=o}else Bg(u,t.type,t.stateNode);else t.stateNode=Ig(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Bg(u,t.type,t.stateNode):Ig(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),a!==null&&o&4&&Pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{Ni(u,"")}catch(je){Gt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Pf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){Gt(t,t.return,je)}}break;case 3:if(oc=null,u=Mi,Mi=rc(n.containerInfo),Gn(n,t),Mi=u,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(je){Gt(t,t.return,je)}zf&&(zf=!1,B0(t));break;case 4:o=Mi,Mi=rc(t.stateNode.containerInfo),Gn(n,t),Vn(t),Mi=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,re=Ki,ve=hn;if(Ki=re||u,hn=ve||V,Gn(n,t),hn=ve,Ki=re,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Ki||hn||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=V.stateNode;var Se=V.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(je){Gt(V,V.return,je)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(je){Gt(V,V.return,je)}}}else if(n.tag===18){if(a===null){V=n;try{var he=V.stateNode;u?wg(he,!0):wg(V.stateNode,!1)}catch(je){Gt(V,V.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(t,a))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(C0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Of(t);jl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ni(y,""),a.flags&=-33);var w=Of(t);jl(t,w,y);break;case 3:case 4:var V=a.stateNode.containerInfo,re=Of(t);If(t,re,V);break;default:throw Error(r(161))}}catch(ve){Gt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function B0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L0(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),xr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),xr(n);break;case 27:No(n.stateNode);case 26:case 5:Ui(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:$i(u,d,a),yo(4,d);break;case 1:if($i(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){Gt(o,o.return,re)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)mm(V[u],w)}catch(re){Gt(o,o.return,re)}}a&&y&64&&A0(d),So(d,d.return);break;case 27:N0(d);case 26:case 5:$i(u,d,a),a&&o===null&&y&4&&R0(d),So(d,d.return);break;case 12:$i(u,d,a);break;case 31:$i(u,d,a),a&&y&4&&O0(u,d);break;case 13:$i(u,d,a),a&&y&4&&I0(u,d);break;case 22:d.memoizedState===null&&$i(u,d,a),So(d,d.return);break;case 30:break;default:$i(u,d,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)F0(t,n,a,o),n=n.sibling}function F0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&yo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Gt(n,n.return,V)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?bi(t,n,a,o):Mo(t,n):d._visibility&2?bi(t,n,a,o):(d._visibility|=2,ts(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(y,n);break;case 24:bi(t,n,a,o),u&2048&&Ff(n.alternate,n);break;default:bi(t,n,a,o)}}function ts(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,w=a,V=o,re=y.flags;switch(y.tag){case 0:case 11:case 15:ts(d,y,w,V,u),yo(8,y);break;case 23:break;case 22:var ve=y.stateNode;y.memoizedState!==null?ve._visibility&2?ts(d,y,w,V,u):Mo(d,y):(ve._visibility|=2,ts(d,y,w,V,u)),u&&re&2048&&Bf(y.alternate,y);break;case 24:ts(d,y,w,V,u),u&&re&2048&&Ff(y.alternate,y);break;default:ts(d,y,w,V,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Ff(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function ns(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)H0(t,n,a),t=t.sibling}function H0(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&bo&&t.memoizedState!==null&&_y(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var o=Mi;Mi=rc(t.stateNode.containerInfo),ns(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ns(t,n,a),bo=o):ns(t,n,a));break;default:ns(t,n,a)}}function G0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,k0(o,t)}G0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V0(t),t=t.sibling}function V0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):Eo(t);break;default:Eo(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,k0(o,t)}G0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function k0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(U0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var Ux={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Px=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Yt=null,xt=null,St=0,Ht=0,ei=null,Pa=!1,is=!1,Hf=!1,ea=0,nn=0,Oa=0,yr=0,Gf=0,ti=0,as=0,To=null,kn=null,Vf=!1,ql=0,j0=0,Yl=1/0,Zl=null,Ia=null,vn=0,za=null,rs=null,ta=0,kf=0,jf=null,X0=null,Ao=0,Xf=null;function ni(){return(Ot&2)!==0&&St!==0?St&-St:O.T!==null?Qf():Ws()}function W0(){if(ti===0)if((St&536870912)===0||At){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function jn(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Ba(t,St,ti,!1)),Nn(t,a),((Ot&2)===0||t!==Yt)&&(t===Yt&&((Ot&2)===0&&(yr|=a),nn===4&&Ba(t,St,ti,!1)),Pi(t))}function q0(t,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ve(t,n),u=o?zx(t,n):qf(t,n,!0),d=o;do{if(u===0){is&&!o&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ox(a)){u=qf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var w=t;u=To;var V=w.current.memoizedState.isDehydrated;if(V&&(ss(w,y).flags|=256),y=qf(w,y,!1),y!==2){if(Hf&&!V){w.errorRecoveryDisabledLanes|=d,yr|=d,u=4;break e}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ss(t,0),Ba(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(o,n,ti,!Pa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ql+300-A(),10<u)){if(Ba(o,n,ti,!Pa),Me(o,0,!0)!==0)break e;ta=n,o.timeoutHandle=Eg(Y0.bind(null,o,a,kn,Zl,Vf,n,ti,yr,as,Pa,d,"Throttled",-0,0),u);break e}Y0(o,a,kn,Zl,Vf,n,ti,yr,as,Pa,d,null,-0,0)}}break}while(!0);Pi(t)}function Y0(t,n,a,o,u,d,y,w,V,re,ve,Se,oe,he){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},H0(n,d,Se);var je=(d&62914560)===d?ql-A():(d&4194048)===d?j0-A():0;if(je=xy(Se,je),je!==null){ta=d,t.cancelPendingCommit=je(ng.bind(null,t,n,d,a,o,u,y,w,V,ve,Se,null,oe,he)),Ba(t,d,y,!re);return}}ng(t,n,d,a,o,u,y,w,V)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,o){n&=~Gf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Xe(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&ol(t,a,n)}function Kl(){return(Ot&6)===0?(wo(0),!1):!0}function Wf(){if(xt!==null){if(Ht===0)var t=xt.return;else t=xt,ji=fr=null,lf(t),Kr=null,lo=0,t=xt;for(;t!==null;)T0(t.alternate,t),t=t.return;xt=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ty(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Wf(),Yt=t,xt=a=Vi(t.current,null),St=n,Ht=0,ei=null,Pa=!1,is=Ve(t,n),Hf=!1,as=ti=Gf=yr=Oa=nn=0,kn=To=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),d=1<<u;n|=t[u],o&=~d}return ea=n,vl(),a}function Z0(t,n){dt=null,O.H=vo,n===Zr||n===Tl?(n=fm(),Ht=3):n===Zu?(n=fm(),Ht=4):Ht=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,xt===null&&(nn=1,Fl(t,oi(n,t.current)))}function K0(){var t=Jn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function Q0(){var t=O.H;return O.H=vo,t===null?vo:t}function J0(){var t=O.A;return O.A=Ux,t}function Ql(){nn=4,Pa||(St&4194048)!==St&&Jn.current!==null||(is=!0),(Oa&134217727)===0&&(yr&134217727)===0||Yt===null||Ba(Yt,St,ti,!1)}function qf(t,n,a){var o=Ot;Ot|=2;var u=Q0(),d=J0();(Yt!==t||St!==n)&&(Zl=null,ss(t,n)),n=!1;var y=nn;e:do try{if(Ht!==0&&xt!==null){var w=xt,V=ei;switch(Ht){case 8:Wf(),y=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var re=Ht;if(Ht=0,ei=null,os(t,w,V,re),a&&is){y=0;break e}break;default:re=Ht,Ht=0,ei=null,os(t,w,V,re)}}Ix(),y=nn;break}catch(ve){Z0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ji=fr=null,Ot=o,O.H=u,O.A=d,xt===null&&(Yt=null,St=0,vl()),y}function Ix(){for(;xt!==null;)$0(xt)}function zx(t,n){var a=Ot;Ot|=2;var o=Q0(),u=J0();Yt!==t||St!==n?(Zl=null,Yl=A()+500,ss(t,n)):is=Ve(t,n);e:do try{if(Ht!==0&&xt!==null){n=xt;var d=ei;t:switch(Ht){case 1:Ht=0,ei=null,os(t,n,d,1);break;case 2:case 9:if(cm(d)){Ht=0,ei=null,eg(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Pi(t)},d.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:cm(d)?(Ht=0,ei=null,eg(n)):(Ht=0,ei=null,os(t,n,d,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var w=xt;if(y?Fg(y):w.stateNode.complete){Ht=0,ei=null;var V=w.sibling;if(V!==null)xt=V;else{var re=w.return;re!==null?(xt=re,Jl(re)):xt=null}break t}}Ht=0,ei=null,os(t,n,d,5);break;case 6:Ht=0,ei=null,os(t,n,d,6);break;case 8:Wf(),nn=6;break e;default:throw Error(r(462))}}Bx();break}catch(ve){Z0(t,ve)}while(!0);return ji=fr=null,O.H=o,O.A=u,Ot=a,xt!==null?0:(Yt=null,St=0,vl(),nn)}function Bx(){for(;xt!==null&&!ot();)$0(xt)}function $0(t){var n=b0(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?Jl(t):xt=n}function eg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:lf(n);default:T0(a,n),n=xt=Jp(n,ea),n=b0(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?Jl(t):xt=n}function os(t,n,a,o){ji=fr=null,lf(n),Kr=null,lo=0;var u=n.return;try{if(Ax(t,u,n,a,St)){nn=1,Fl(t,oi(a,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;nn=1,Fl(t,oi(a,t.current)),xt=null;return}n.flags&32768?(At||o===1?t=!0:is||(St&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),tg(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){tg(n,Pa);return}t=n.return;var a=Cx(n.alternate,n,ea);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);nn===0&&(nn=5)}function tg(t,n){do{var a=Nx(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);nn=6,xt=null}function ng(t,n,a,o,u,d,y,w,V){t.cancelPendingCommit=null;do $l();while(vn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Pu,Yn(t,a,d,y,w,V),t===Yt&&(xt=Yt=null,St=0),rs=n,za=t,ta=a,kf=d,jf=u,X0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vx(me,function(){return og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,y=Ot,Ot|=4;try{Dx(t,n,a)}finally{Ot=y,F.p=u,O.T=o}}vn=1,ig(),ag(),rg()}}function ig(){if(vn===1){vn=0;var t=za,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ot;Ot|=4;try{z0(n,t);var d=rd,y=kp(t.containerInfo),w=d.focusedElem,V=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&Vp(w.ownerDocument.documentElement,w)){if(V!==null&&Cu(w)){var re=V.start,ve=V.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var Se=w.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var he=oe.getSelection(),je=w.textContent.length,at=Math.min(V.start,je),Xt=V.end===void 0?at:Math.min(V.end,je);!he.extend&&at>Xt&&(y=Xt,Xt=at,at=y);var K=Gp(w,at),q=Gp(w,Xt);if(K&&q&&(he.rangeCount!==1||he.anchorNode!==K.node||he.anchorOffset!==K.offset||he.focusNode!==q.node||he.focusOffset!==q.offset)){var ie=Se.createRange();ie.setStart(K.node,K.offset),he.removeAllRanges(),at>Xt?(he.addRange(ie),he.extend(q.node,q.offset)):(ie.setEnd(q.node,q.offset),he.addRange(ie))}}}}for(Se=[],he=w;he=he.parentNode;)he.nodeType===1&&Se.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var _e=Se[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}fc=!!ad,rd=ad=null}finally{Ot=u,F.p=o,O.T=a}}t.current=n,vn=2}}function ag(){if(vn===2){vn=0;var t=za,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ot;Ot|=4;try{L0(t,n.alternate,n)}finally{Ot=u,F.p=o,O.T=a}}vn=3}}function rg(){if(vn===4||vn===3){vn=0,z();var t=za,n=rs,a=ta,o=X0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,rs=za=null,sg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),ir(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];d(w.value,{componentStack:w.stack})}}finally{O.T=n,F.p=u}}(ta&3)!==0&&$l(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Xf?Ao++:(Ao=0,Xf=t):Ao=0,wo(0)}}function sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function $l(){return ig(),ag(),rg(),og()}function og(){if(vn!==5)return!1;var t=za,n=kf;kf=0;var a=ir(ta),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=jf,jf=null;var d=za,y=ta;if(vn=0,rs=za=null,ta=0,(Ot&6)!==0)throw Error(r(331));var w=Ot;if(Ot|=4,V0(d.current),F0(d,d.current,y,a),Ot=w,wo(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,d)}catch{}return!0}finally{F.p=u,O.T=o,sg(t,n)}}function lg(t,n,a){n=oi(a,n),n=bf(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Nn(t,2),Pi(t))}function Gt(t,n,a){if(t.tag===3)lg(t,t,a);else for(;n!==null;){if(n.tag===3){lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=oi(a,t),a=c0(2),o=Na(n,a,2),o!==null&&(u0(a,o,n,t),Nn(o,2),Pi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Px;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=Fx.bind(null,t,n,a),n.then(t,t))}function Fx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(St&a)===a&&(nn===4||nn===3&&(St&62914560)===St&&300>A()-ql?(Ot&2)===0&&ss(t,0):Gf|=a,as===St&&(as=0)),Pi(t)}function cg(t,n){n===0&&(n=Vt()),t=lr(t,n),t!==null&&(Nn(t,n),Pi(t))}function Hx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function Gx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cg(t,a)}function Vx(t,n){return zt(t,n)}var ec=null,ls=null,Zf=!1,tc=!1,Kf=!1,Fa=0;function Pi(t){t!==ls&&t.next===null&&(ls===null?ec=ls=t:ls=ls.next=t),tc=!0,Zf||(Zf=!0,jx())}function wo(t,n){if(!Kf&&tc){Kf=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=u&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hg(o,d))}else d=St,d=Me(o,o===Yt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ve(o,d)||(a=!0,hg(o,d));o=o.next}while(a);Kf=!1}}function kx(){ug()}function ug(){tc=Zf=!1;var t=0;Fa!==0&&ey()&&(t=Fa);for(var n=A(),a=null,o=ec;o!==null;){var u=o.next,d=fg(o,n);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(ls=a)):(a=o,(t!==0||(d&3)!==0)&&(tc=!0)),o=u}vn!==0&&vn!==5||wo(t),Fa!==0&&(Fa=0)}function fg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Xe(d),w=1<<y,V=u[y];V===-1?((w&a)===0||(w&o)!==0)&&(u[y]=lt(w,n)):V<=n&&(t.expiredLanes|=w),d&=~w}if(n=Yt,a=St,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ve(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),ir(a)){case 2:case 8:a=Ee;break;case 32:a=me;break;case 268435456:a=Ie;break;default:a=me}return o=dg.bind(null,t),a=zt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function dg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=St;return o=Me(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(q0(t,o,n),fg(t,A()),t.callbackNode!=null&&t.callbackNode===a?dg.bind(null,t):null)}function hg(t,n){if($l())return null;q0(t,n,!0)}function jx(){ny(function(){(Ot&6)!==0?zt(ye,kx):ug()})}function Qf(){if(Fa===0){var t=qr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Fa=t}return Fa}function pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Xx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=pg((u[mn]||null).action),y=o.submitter;y&&(n=(n=y[mn]||null)?pg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var w=new hl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var V=y?mg(u,y):new FormData(u);vf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(w.preventDefault(),V=y?mg(u,y):new FormData(u),vf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Jf=0;Jf<Uu.length;Jf++){var $f=Uu[Jf],Wx=$f.toLowerCase(),qx=$f[0].toUpperCase()+$f.slice(1);Si(Wx,"on"+qx)}Si(Wp,"onAnimationEnd"),Si(qp,"onAnimationIteration"),Si(Yp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(cx,"onTransitionRun"),Si(ux,"onTransitionStart"),Si(fx,"onTransitionCancel"),Si(Zp,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var w=o[y],V=w.instance,re=w.currentTarget;if(w=w.listener,V!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ve){gl(ve)}u.currentTarget=null,d=V}else for(y=0;y<o.length;y++){if(w=o[y],V=w.instance,re=w.currentTarget,w=w.listener,V!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ve){gl(ve)}u.currentTarget=null,d=V}}}}function yt(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var o=t+"__bubble";a.has(o)||(vg(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),vg(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[nc]){t[nc]=!0,ee.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,ed("selectionchange",!1,n))}}function vg(t,n,a,o){switch(Wg(n)){case 2:var u=My;break;case 8:u=by;break;default:u=gd}a=u.bind(null,n,a,t),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=Sa(w),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=d=y;continue e}w=w.parentNode}}o=o.return}Mp(function(){var re=d,ve=_u(a),Se=[];e:{var oe=Kp.get(t);if(oe!==void 0){var he=hl,je=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":he=G_;break;case"focusin":je="focus",he=Eu;break;case"focusout":je="blur",he=Eu;break;case"beforeblur":case"afterblur":he=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=C_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=j_;break;case Wp:case qp:case Yp:he=L_;break;case Zp:he=W_;break;case"scroll":case"scrollend":he=w_;break;case"wheel":he=Y_;break;case"copy":case"cut":case"paste":he=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=wp;break;case"toggle":case"beforetoggle":he=K_}var at=(n&4)!==0,Xt=!at&&(t==="scroll"||t==="scrollend"),K=at?oe!==null?oe+"Capture":null:oe;at=[];for(var q=re,ie;q!==null;){var _e=q;if(ie=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ie===null||K===null||(_e=Zs(q,K),_e!=null&&at.push(Co(q,_e,ie))),Xt)break;q=q.return}0<at.length&&(oe=new he(oe,je,null,a,ve),Se.push({event:oe,listeners:at}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",oe&&a!==vu&&(je=a.relatedTarget||a.fromElement)&&(Sa(je)||je[zi]))break e;if((he||oe)&&(oe=ve.window===ve?ve:(oe=ve.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(je=a.relatedTarget||a.toElement,he=re,je=je?Sa(je):null,je!==null&&(Xt=c(je),at=je.tag,je!==Xt||at!==5&&at!==27&&at!==6)&&(je=null)):(he=null,je=re),he!==je)){if(at=Tp,_e="onMouseLeave",K="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(at=wp,_e="onPointerLeave",K="onPointerEnter",q="pointer"),Xt=he==null?oe:Z(he),ie=je==null?oe:Z(je),oe=new at(_e,q+"leave",he,a,ve),oe.target=Xt,oe.relatedTarget=ie,_e=null,Sa(ve)===re&&(at=new at(K,q+"enter",je,a,ve),at.target=ie,at.relatedTarget=Xt,_e=at),Xt=_e,he&&je)t:{for(at=Zx,K=he,q=je,ie=0,_e=K;_e;_e=at(_e))ie++;_e=0;for(var $e=q;$e;$e=at($e))_e++;for(;0<ie-_e;)K=at(K),ie--;for(;0<_e-ie;)q=at(q),_e--;for(;ie--;){if(K===q||q!==null&&K===q.alternate){at=K;break t}K=at(K),q=at(q)}at=null}else at=null;he!==null&&_g(Se,oe,he,at,!1),je!==null&&Xt!==null&&_g(Se,Xt,je,at,!0)}}e:{if(oe=re?Z(re):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var Nt=Op;else if(Up(oe))if(Ip)Nt=sx;else{Nt=ax;var We=ix}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?re&&gu(re.elementType)&&(Nt=Op):Nt=rx;if(Nt&&(Nt=Nt(t,re))){Pp(Se,Nt,a,ve);break e}We&&We(t,oe,re),t==="focusout"&&re&&oe.type==="number"&&re.memoizedProps.value!=null&&Sn(oe,"number",oe.value)}switch(We=re?Z(re):window,t){case"focusin":(Up(We)||We.contentEditable==="true")&&(Fr=We,Nu=re,io=null);break;case"focusout":io=Nu=Fr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,jp(Se,a,ve);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":jp(Se,a,ve)}var pt;if(Au)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Br?Dp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Rp&&a.locale!=="ko"&&(Br||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Br&&(pt=bp()):(ba=ve,Su="value"in ba?ba.value:ba.textContent,Br=!0)),We=ic(re,Mt),0<We.length&&(Mt=new Ap(Mt,t,null,a,ve),Se.push({event:Mt,listeners:We}),pt?Mt.data=pt:(pt=Lp(a),pt!==null&&(Mt.data=pt)))),(pt=J_?$_(t,a):ex(t,a))&&(Mt=ic(re,"onBeforeInput"),0<Mt.length&&(We=new Ap("onBeforeInput","beforeinput",null,a,ve),Se.push({event:We,listeners:Mt}),We.data=pt)),Xx(Se,t,re,a,ve)}gg(Se,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Zs(t,a),u!=null&&o.unshift(Co(t,u,d)),u=Zs(t,n),u!=null&&o.push(Co(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _g(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var w=a,V=w.alternate,re=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||re===null||(V=re,u?(re=Zs(a,d),re!=null&&y.unshift(Co(a,re,V))):u||(re=Zs(a,d),re!=null&&y.push(Co(a,re,V)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function yg(t,n){return n=xg(n),xg(t)===n}function jt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(t,""+o);break;case"className":wt(t,"class",o);break;case"tabIndex":wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,o);break;case"style":yp(t,o,d);break;case"data":if(n!=="object"){wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=cl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=T_.get(a)||a,ht(t,a,o))}}function id(t,n,a,o,u,d){switch(a){case"style":yp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&Ni(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,d,y,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),o&&jt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var w=d=y=u=null,V=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":y=ve;break;case"checked":V=ve;break;case"defaultChecked":re=ve;break;case"value":d=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:jt(t,n,o,ve,a,null)}}Kt(t,d,w,V,re,y,u,!1);return;case"select":yt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:jt(t,n,u,w,a,null)}n=d,a=y,t.multiple=!!o,n!=null?gn(t,!!o,n,!1):a!=null&&gn(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:jt(t,n,y,w,a,null)}Tn(t,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:jt(t,n,V,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Ro.length;o++)yt(Ro[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,re,o,a,null)}return;default:if(gu(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&id(t,n,ve,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&jt(t,n,w,o,a,null))}function Jx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,w=null,V=null,re=null,ve=null;for(he in a){var Se=a[he];if(a.hasOwnProperty(he)&&Se!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=Se;default:o.hasOwnProperty(he)||jt(t,n,he,null,o,Se)}}for(var oe in o){var he=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(he!=null||Se!=null))switch(oe){case"type":d=he;break;case"name":u=he;break;case"checked":re=he;break;case"defaultChecked":ve=he;break;case"value":y=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Se&&jt(t,n,oe,he,o,Se)}}Bi(t,y,w,V,re,ve,d,u);return;case"select":he=y=w=oe=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":he=V;default:o.hasOwnProperty(d)||jt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":oe=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==V&&jt(t,n,u,d,o,V)}n=w,a=y,o=he,oe!=null?gn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:jt(t,n,w,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":oe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&jt(t,n,y,u,o,d)}Mn(t,oe,he);return;case"option":for(var je in a)if(oe=a[je],a.hasOwnProperty(je)&&oe!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:jt(t,n,je,null,o,oe)}for(V in o)if(oe=o[V],he=a[V],o.hasOwnProperty(V)&&oe!==he&&(oe!=null||he!=null))switch(V){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:jt(t,n,V,oe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)oe=a[at],a.hasOwnProperty(at)&&oe!=null&&!o.hasOwnProperty(at)&&jt(t,n,at,null,o,oe);for(re in o)if(oe=o[re],he=a[re],o.hasOwnProperty(re)&&oe!==he&&(oe!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:jt(t,n,re,oe,o,he)}return;default:if(gu(n)){for(var Xt in a)oe=a[Xt],a.hasOwnProperty(Xt)&&oe!==void 0&&!o.hasOwnProperty(Xt)&&id(t,n,Xt,void 0,o,oe);for(ve in o)oe=o[ve],he=a[ve],!o.hasOwnProperty(ve)||oe===he||oe===void 0&&he===void 0||id(t,n,ve,oe,o,he);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&jt(t,n,K,null,o,oe);for(Se in o)oe=o[Se],he=a[Se],!o.hasOwnProperty(Se)||oe===he||oe==null&&he==null||jt(t,n,Se,oe,o,he)}function Sg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,w=u.duration;if(d&&w&&Sg(y)){for(y=0,w=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],re=V.startTime;if(re>w)break;var ve=V.transferSize,Se=V.initiatorType;ve&&Sg(Se)&&(V=V.responseEnd,y+=ve*(V<w?1:(w-re)/(V-re)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,rd=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function Mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function ey(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(iy)}:Eg;function iy(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function Ag(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,No(a);for(var d=a.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[ar]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&No(t.ownerDocument.body);a=u}while(a);ds(n)}function wg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Rg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function Cg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Dg(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ys(t)}var hi=new Map,Lg=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=F.d;F.d={f:oy,r:ly,D:cy,C:uy,L:fy,m:dy,X:py,S:hy,M:my};function oy(){var t=na.f(),n=Kl();return t||n}function ly(t){var n=D(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):na.r(t)}var cs=typeof document>"u"?null:document;function Ug(t,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function cy(t){na.D(t),Ug("dns-prefetch",t,null)}function uy(t,n){na.C(t,n),Ug("preconnect",t,n)}function fy(t,n,a){na.L(t,n,a);var o=cs;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(n){case"style":d=us(t);break;case"script":d=fs(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function dy(t,n){na.m(t,n);var a=cs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),Cn(o,"link",t),se(o),a.head.appendChild(o)}}}function hy(t,n,a){na.S(t,n,a);var o=cs;if(o&&t){var u=ce(o).hoistableStyles,d=us(t);n=n||"default";var y=u.get(d);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Do(d)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&dd(t,a);var V=y=o.createElement("link");se(V),Cn(V,"link",t),V._p=new Promise(function(re,ve){V.onload=re,V.onerror=ve}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,sc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(d,y)}}}function py(t,n){na.X(t,n);var a=cs;if(a&&t){var o=ce(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&hd(t,n),d=a.createElement("script"),se(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function my(t,n){na.M(t,n);var a=cs;if(a&&t){var o=ce(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&hd(t,n),d=a.createElement("script"),se(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Pg(t,n,a,o){var u=(u=te.current)?rc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ce(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var d=ce(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Do(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||gy(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ce(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+Zt(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function Og(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),se(n),t.head.appendChild(n))}function fs(t){return'[src="'+Zt(t)+'"]'}function Lo(t){return"script[async]"+t}function Ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,se(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),se(o),Cn(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=us(a.href);var d=t.querySelector(Do(u));if(d)return n.state.loading|=4,n.instance=d,se(d),d;o=Og(a),(u=hi.get(u))&&dd(o,u),d=(t.ownerDocument||t).createElement("link"),se(d);var y=d;return y._p=new Promise(function(w,V){y.onload=w,y.onerror=V}),Cn(d,"link",o),n.state.loading|=4,sc(d,a.precedence,t),n.instance=d;case"script":return d=fs(a.src),(u=t.querySelector(Lo(d)))?(n.instance=u,se(u),u):(o=a,(u=hi.get(d))&&(o=g({},a),hd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function zg(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ar]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var w=o.get(y);w?w.push(d):o.set(y,[d])}}return o}function Bg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function vy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _y(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(o.href),d=n.querySelector(Do(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,se(d);return}d=n.ownerDocument||n,o=Og(o),(u=hi.get(u))&&dd(o,u),d=d.createElement("link"),se(d);var y=d;y._p=new Promise(function(w,V){y.onload=w,y.onerror=V}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function xy(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*$x());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(yy,t),cc=null,lc.call(t))}function yy(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Sy(t,n,a,o,u,d,y,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Hg(t,n,a,o,u,d,y,w,V,re,ve,Se){return t=new Sy(t,n,a,y,V,re,ve,Se,w),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),t.current=d,d.stateNode=t,n=Wu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ku(d),t}function Gg(t){return t?(t=Vr,t):Vr}function Vg(t,n,a,o,u,d){u=Gg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ca(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Na(t,o,n),a!==null&&(jn(a,t,n),uo(a,t,n))}function kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){kg(t,n),(t=t.alternate)&&kg(t,n)}function jg(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&jn(n,t,67108864),md(t,67108864)}}function Xg(t){if(t.tag===13||t.tag===31){var n=ni();n=yi(n);var a=lr(t,n);a!==null&&jn(a,t,n),md(t,n)}}var fc=!0;function My(t,n,a,o){var u=O.T;O.T=null;var d=F.p;try{F.p=2,gd(t,n,a,o)}finally{F.p=d,O.T=u}}function by(t,n,a,o){var u=O.T;O.T=null;var d=F.p;try{F.p=8,gd(t,n,a,o)}finally{F.p=d,O.T=u}}function gd(t,n,a,o){if(fc){var u=vd(o);if(u===null)nd(t,n,o,dc,a),qg(t,o);else if(Ty(u,t,n,a,o))o.stopPropagation();else if(qg(t,o),n&4&&-1<Ey.indexOf(t)){for(;u!==null;){var d=D(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=we(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var V=1<<31-Xe(y);w.entanglements[1]|=V,y&=~V}Pi(d),(Ot&6)===0&&(Yl=A()+500,wo(0))}}break;case 31:case 13:w=lr(d,2),w!==null&&jn(w,d,2),Kl(),md(d,2)}if(d=vd(o),d===null&&nd(t,n,o,dc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function vd(t){return t=_u(t),_d(t)}var dc=null;function _d(t){if(dc=null,t=Sa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function Wg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case ye:return 2;case Ee:return 8;case me:case Ke:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var xd=!1,Ga=null,Va=null,ka=null,Po=new Map,Oo=new Map,ja=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Io(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=D(n),n!==null&&jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ty(t,n,a,o,u){switch(n){case"focusin":return Ga=Io(Ga,t,n,a,o,u),!0;case"dragenter":return Va=Io(Va,t,n,a,o,u),!0;case"mouseover":return ka=Io(ka,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,Io(Po.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Oo.set(d,Io(Oo.get(d)||null,t,n,a,o,u)),!0}return!1}function Yg(t){var n=Sa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,qs(t.priority,function(){Xg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qs(t.priority,function(){Xg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=vd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=D(a),n!==null&&jg(n),t.blockedOn=a,!1;n.shift()}return!0}function Zg(t,n,a){hc(t)&&a.delete(n)}function Ay(){xd=!1,Ga!==null&&hc(Ga)&&(Ga=null),Va!==null&&hc(Va)&&(Va=null),ka!==null&&hc(ka)&&(ka=null),Po.forEach(Zg),Oo.forEach(Zg)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ay)))}var mc=null;function Kg(t){mc!==t&&(mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_d(o||a)===null)continue;break}var d=D(a);d!==null&&(t.splice(n,3),n-=3,vf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ds(t){function n(V){return pc(V,t)}Ga!==null&&pc(Ga,t),Va!==null&&pc(Va,t),ka!==null&&pc(ka,t),Po.forEach(n),Oo.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[mn]||null;if(typeof d=="function")y||Kg(a);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[mn]||null)w=y.formAction;else if(_d(u)!==null)continue}else w=y.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Kg(a)}}}function Qg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yd(t){this._internalRoot=t}gc.prototype.render=yd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Vg(a,o,t,n,null,null)},gc.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vg(t.current,2,null,t,null,null),Kl(),n[zi]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,t),a===0&&Yg(t)}};var Jg=e.version;if(Jg!=="19.2.1")throw Error(r(527,Jg,"19.2.1"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Te=vc.inject(wy),Re=vc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=r0,d=s0,y=o0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Hg(t,1,!1,null,null,a,o,null,u,d,y,Qg),t[zi]=n.current,td(t),new yd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=r0,y=s0,w=o0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Hg(t,1,!0,n,a??null,o,u,V,d,y,w,Qg),n.context=Gg(null),a=n.current,o=ni(),o=yi(o),u=Ca(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Pi(n),t[zi]=n.current,td(t),new gc(n)},Bo.version="19.2.1",Bo}var l1;function Fy(){if(l1)return bd.exports;l1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bd.exports=By(),bd.exports}var Hy=Fy();var c1="popstate";function Gy(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Ur(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),sh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:Yo(c))}function r(l,c){xi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return ky(e,i,r,s)}function en(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function xi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vy(){return Math.random().toString(36).substring(2,10)}function u1(s,e){return{usr:s.state,key:s.key,idx:e}}function sh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ur(e):e,state:i,key:e&&e.key||r||Vy()}}function Yo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ur(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function ky(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:E.location,delta:_})}function x(S,_){h="PUSH";let C=sh(E.location,S,_);i&&i(C,S),p=v()+1;let N=u1(C,p),I=E.createHref(C);try{f.pushState(N,"",I)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(I)}c&&m&&m({action:h,location:E.location,delta:1})}function M(S,_){h="REPLACE";let C=sh(E.location,S,_);i&&i(C,S),p=v();let N=u1(C,p),I=E.createHref(C);f.replaceState(N,"",I),c&&m&&m({action:h,location:E.location,delta:0})}function b(S){return jy(S)}let E={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(c1,g),m=S,()=>{l.removeEventListener(c1,g),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return E}function jy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Yo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Rv(s,e,i="/"){return Xy(s,e,i,!1)}function Xy(s,e,i,r){let l=typeof e=="string"?Ur(e):e,c=ga(l.pathname||"/",i);if(c==null)return null;let f=Cv(s);Wy(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=iS(c);h=tS(f[m],p,r)}return h}function Cv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;en(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=ha([r,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Cv(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:$y(g,f.index),routesMeta:x})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Nv(f.path))c(f,h,!0,m)}),e}function Nv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Nv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Wy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:eS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var qy=/^:[\w-]+$/,Yy=3,Zy=2,Ky=1,Qy=10,Jy=-2,f1=s=>s==="*";function $y(s,e){let i=s.split("/"),r=i.length;return i.some(f1)&&(r+=Jy),e&&(r+=Zy),i.filter(l=>!f1(l)).reduce((l,c)=>l+(qy.test(c)?Yy:c===""?Ky:Qy),r)}function eS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function tS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ha([c,g.pathname]),pathnameBase:lS(ha([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=ha([c,g.pathnameBase]))}return f}function nu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=nS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let b=h[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function nS(s,e=!1,i=!0){xi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function iS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ga(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var aS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rS=s=>aS.test(s);function sS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ur(s):s,c;if(i)if(rS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),xi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=d1(i.substring(1),"/"):c=d1(i,e)}else c=e;return{pathname:c,search:cS(r),hash:uS(l)}}function d1(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function wd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Dv(s){let e=oS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Lv(s,e,i,r=!1){let l;typeof s=="string"?l=Ur(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),wd("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),wd("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),wd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=sS(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ha=s=>s.join("/").replace(/\/\/+/g,"/"),lS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),cS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,uS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function fS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function dS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uv=["POST","PUT","PATCH","DELETE"];new Set(Uv);var hS=["GET",...Uv];new Set(hS);var zs=Q.createContext(null);zs.displayName="DataRouter";var lu=Q.createContext(null);lu.displayName="DataRouterState";Q.createContext(!1);var Pv=Q.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var pS=Q.createContext(new Map);pS.displayName="Fetchers";var mS=Q.createContext(null);mS.displayName="Await";var Ci=Q.createContext(null);Ci.displayName="Navigation";var tl=Q.createContext(null);tl.displayName="Location";var ya=Q.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var ep=Q.createContext(null);ep.displayName="RouteError";function gS(s,{relative:e}={}){en(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Q.useContext(Ci),{hash:l,pathname:c,search:f}=il(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ha([i,c])),r.createHref({pathname:h,search:f,hash:l})}function nl(){return Q.useContext(tl)!=null}function Pr(){return en(nl(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(tl).location}var Ov="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(s){Q.useContext(Ci).static||Q.useLayoutEffect(s)}function zv(){let{isDataRoute:s}=Q.useContext(ya);return s?CS():vS()}function vS(){en(nl(),"useNavigate() may be used only in the context of a <Router> component.");let s=Q.useContext(zs),{basename:e,navigator:i}=Q.useContext(Ci),{matches:r}=Q.useContext(ya),{pathname:l}=Pr(),c=JSON.stringify(Dv(r)),f=Q.useRef(!1);return Iv(()=>{f.current=!0}),Q.useCallback((m,p={})=>{if(xi(f.current,Ov),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Lv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ha([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}Q.createContext(null);function il(s,{relative:e}={}){let{matches:i}=Q.useContext(ya),{pathname:r}=Pr(),l=JSON.stringify(Dv(i));return Q.useMemo(()=>Lv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function _S(s,e){return Bv(s,e)}function Bv(s,e,i,r,l){en(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Q.useContext(Ci),{matches:f}=Q.useContext(ya),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let C=g&&g.path||"";Fv(p,!g||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=Pr(),M;if(e){let C=typeof e=="string"?Ur(e):e;en(v==="/"||C.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${C.pathname}" was given in the \`location\` prop.`),M=C}else M=x;let b=M.pathname||"/",E=b;if(v!=="/"){let C=v.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=Rv(s,{pathname:E});xi(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),xi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=bS(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},m,C.params),pathname:ha([v,c.encodeLocation?c.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?v:ha([v,c.encodeLocation?c.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),f,i,r,l);return e&&_?Q.createElement(tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function xS(){let s=RS(),e=fS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),i?Q.createElement("pre",{style:l},i):null,f)}var yS=Q.createElement(xS,null),SS=class extends Q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?Q.createElement(ya.Provider,{value:this.props.routeContext},Q.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function MS({routeContext:s,match:e,children:i}){let r=Q.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(ya.Provider,{value:s},i)}function bS(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);en(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:dS(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,b=!1,E=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||yS,h&&(m<0&&x===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):m===x&&(b=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),C=()=>{let N;return M?N=E:b?N=S:g.route.Component?N=Q.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=v,Q.createElement(MS,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?Q.createElement(SS,{location:i.location,revalidation:i.revalidation,component:E,error:M,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):C()},null)}function tp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ES(s){let e=Q.useContext(zs);return en(e,tp(s)),e}function TS(s){let e=Q.useContext(lu);return en(e,tp(s)),e}function AS(s){let e=Q.useContext(ya);return en(e,tp(s)),e}function np(s){let e=AS(s),i=e.matches[e.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function wS(){return np("useRouteId")}function RS(){let s=Q.useContext(ep),e=TS("useRouteError"),i=np("useRouteError");return s!==void 0?s:e.errors?.[i]}function CS(){let{router:s}=ES("useNavigate"),e=np("useNavigate"),i=Q.useRef(!1);return Iv(()=>{i.current=!0}),Q.useCallback(async(l,c={})=>{xi(i.current,Ov),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var h1={};function Fv(s,e,i){!e&&!h1[s]&&(h1[s]=!0,xi(!1,i))}Q.memo(NS);function NS({routes:s,future:e,state:i,unstable_onError:r}){return Bv(s,void 0,i,r,e)}function ws(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ur(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default"}=i,b=Q.useMemo(()=>{let E=ga(p,h);return E==null?null:{location:{pathname:E,search:v,hash:g,state:x,key:M},navigationType:r}},[h,p,v,g,x,M,r]);return xi(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:Q.createElement(Ci.Provider,{value:m},Q.createElement(tl.Provider,{children:e,value:b}))}function LS({children:s,location:e}){return _S(oh(s),e)}function oh(s,e=[]){let i=[];return Q.Children.forEach(s,(r,l)=>{if(!Q.isValidElement(r))return;let c=[...e,l];if(r.type===Q.Fragment){i.push.apply(i,oh(r.props.children,c));return}en(r.type===ws,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=oh(r.props.children,c)),i.push(f)}),i}var Yc="get",Zc="application/x-www-form-urlencoded";function cu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function US(s){return cu(s)&&s.tagName.toLowerCase()==="button"}function PS(s){return cu(s)&&s.tagName.toLowerCase()==="form"}function OS(s){return cu(s)&&s.tagName.toLowerCase()==="input"}function IS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function zS(s,e){return s.button===0&&(!e||e==="_self")&&!IS(s)}var _c=null;function BS(){if(_c===null)try{new FormData(document.createElement("form"),0),_c=!1}catch{_c=!0}return _c}var FS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(s){return s!=null&&!FS.has(s)?(xi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):s}function HS(s,e){let i,r,l,c,f;if(PS(s)){let h=s.getAttribute("action");r=h?ga(h,e):null,i=s.getAttribute("method")||Yc,l=Rd(s.getAttribute("enctype"))||Zc,c=new FormData(s)}else if(US(s)||OS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Yc,l=Rd(s.getAttribute("formenctype"))||Rd(h.getAttribute("enctype"))||Zc,c=new FormData(h,s),!BS()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(cu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,r=null,l=Zc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ip(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function GS(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function VS(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function jS(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await VS(c,i);return f.links?f.links():[]}return[]}));return YS(r.flat(1).filter(kS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function p1(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XS(s,e,{includeHydrateFallback:i}={}){return WS(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function WS(s){return[...new Set(s)]}function qS(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function YS(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(qS(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Hv(){let s=Q.useContext(zs);return ip(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ZS(){let s=Q.useContext(lu);return ip(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ap=Q.createContext(void 0);ap.displayName="FrameworkContext";function Gv(){let s=Q.useContext(ap);return ip(s,"You must render this element inside a <HydratedRouter> element"),s}function KS(s,e){let i=Q.useContext(ap),[r,l]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=Q.useRef(null);Q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let E=_=>{_.forEach(C=>{f(C.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),Q.useEffect(()=>{if(r){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Fo(h,M),onBlur:Fo(m,b),onMouseEnter:Fo(p,M),onMouseLeave:Fo(v,b),onTouchStart:Fo(g,M)}]:[!1,x,{}]}function Fo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function QS({page:s,...e}){let{router:i}=Hv(),r=Q.useMemo(()=>Rv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Q.createElement($S,{page:s,matches:r,...e}):null}function JS(s){let{manifest:e,routeModules:i}=Gv(),[r,l]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return jS(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function $S({page:s,matches:e,...i}){let r=Pr(),{manifest:l,routeModules:c}=Gv(),{basename:f}=Hv(),{loaderData:h,matches:m}=ZS(),p=Q.useMemo(()=>p1(s,e,m,l,r,"data"),[s,e,m,l,r]),v=Q.useMemo(()=>p1(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=Q.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,E=!1;if(e.forEach(_=>{let C=l.routes[_.route.id];!C||!C.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||C.hasClientLoader?E=!0:b.add(_.route.id))}),b.size===0)return[];let S=GS(s,f,"data");return E&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),x=Q.useMemo(()=>XS(v,l),[v,l]),M=JS(v);return Q.createElement(Q.Fragment,null,g.map(b=>Q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),x.map(b=>Q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:E})=>Q.createElement("link",{key:b,nonce:i.nonce,...E})))}function eM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vv&&(window.__reactRouterVersion="7.10.1")}catch{}function tM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=Q.useRef();l.current==null&&(l.current=Gy({window:r,v5Compat:!0}));let c=l.current,[f,h]=Q.useState({action:c.action,location:c.location}),m=Q.useCallback(p=>{i===!1?h(p):Q.startTransition(()=>h(p))},[i]);return Q.useLayoutEffect(()=>c.listen(m),[c,m]),Q.createElement(DS,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jv=Q.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,...x},M){let{basename:b,unstable_useTransitions:E}=Q.useContext(Ci),S=typeof p=="string"&&kv.test(p),_,C=!1;if(typeof p=="string"&&S&&(_=p,Vv))try{let R=new URL(window.location.href),j=p.startsWith("//")?new URL(R.protocol+p):new URL(p),$=ga(j.pathname,b);j.origin===R.origin&&$!=null?p=$+j.search+j.hash:C=!0}catch{xi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=gS(p,{relative:l}),[I,H,P]=KS(r,x),B=rM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_useTransitions:E});function Y(R){e&&e(R),R.defaultPrevented||B(R)}let L=Q.createElement("a",{...x,...P,href:_||N,onClick:C||c?e:Y,ref:eM(M,H),target:m,"data-discover":!S&&i==="render"?"true":void 0});return I&&!S?Q.createElement(Q.Fragment,null,L,Q.createElement(QS,{page:N})):L});jv.displayName="Link";var nM=Q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=il(f,{relative:p.relative}),x=Pr(),M=Q.useContext(lu),{navigator:b,basename:E}=Q.useContext(Ci),S=M!=null&&uM(g)&&h===!0,_=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,C=x.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(C=C.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&E&&(N=ga(N,E)||N);const I=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=C===_||!l&&C.startsWith(_)&&C.charAt(I)==="/",P=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),B={isActive:H,isPending:P,isTransitioning:S},Y=H?e:void 0,L;typeof r=="function"?L=r(B):L=[r,H?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(B):c;return Q.createElement(jv,{...p,"aria-current":Y,className:L,ref:v,style:R,to:f,viewTransition:h},typeof m=="function"?m(B):m)});nM.displayName="NavLink";var iM=Q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Yc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,...x},M)=>{let{unstable_useTransitions:b}=Q.useContext(Ci),E=lM(),S=cM(h,{relative:p}),_=f.toLowerCase()==="get"?"get":"post",C=typeof h=="string"&&kv.test(h),N=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let H=I.nativeEvent.submitter,P=H?.getAttribute("formmethod")||f,B=()=>E(H||I.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g});b&&i!==!1?Q.startTransition(()=>B()):B()};return Q.createElement("form",{ref:M,method:_,action:S,onSubmit:r?m:N,...x,"data-discover":!C&&s==="render"?"true":void 0})});iM.displayName="Form";function aM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(s){let e=Q.useContext(zs);return en(e,aM(s)),e}function rM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=zv(),p=Pr(),v=il(s,{relative:c});return Q.useCallback(g=>{if(zS(g,e)){g.preventDefault();let x=i!==void 0?i:Yo(p)===Yo(v),M=()=>m(s,{replace:x,state:r,preventScrollReset:l,relative:c,viewTransition:f});h?Q.startTransition(()=>M()):M()}},[p,m,v,i,r,e,s,l,c,f,h])}var sM=0,oM=()=>`__${String(++sM)}__`;function lM(){let{router:s}=Xv("useSubmit"),{basename:e}=Q.useContext(Ci),i=wS(),r=s.fetch,l=s.navigate;return Q.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=HS(c,e);if(f.navigate===!1){let x=f.fetcherKey||oM();await r(x,i,f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function cM(s,{relative:e}={}){let{basename:i}=Q.useContext(Ci),r=Q.useContext(ya);en(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...il(s||".",{relative:e})},f=Pr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ha([i,c.pathname])),Yo(c)}function uM(s,{relative:e}={}){let i=Q.useContext(Pv);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xv("useViewTransitionState"),l=il(s,{relative:e});if(!i.isTransitioning)return!1;let c=ga(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,r)||i.nextLocation.pathname;return nu(l.pathname,f)!=null||nu(l.pathname,c)!=null}const fM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),m1=s=>{const e=dM(s);return e.charAt(0).toUpperCase()+e.slice(1)},Wv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),hM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var pM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mM=Q.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>Q.createElement("svg",{ref:m,...pM,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Wv("lucide",l),...!c&&!hM(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>Q.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Ft=(s,e)=>{const i=Q.forwardRef(({className:r,...l},c)=>Q.createElement(mM,{ref:c,iconNode:e,className:Wv(`lucide-${fM(m1(s))}`,`lucide-${s}`,r),...l}));return i.displayName=m1(s),i};const gM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],g1=Ft("arrow-right",gM);const vM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lh=Ft("book-open",vM);const _M=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xM=Ft("check",_M);const yM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],SM=Ft("circle-alert",yM);const MM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bM=Ft("circle-question-mark",MM);const EM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],TM=Ft("external-link",EM);const AM=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],v1=Ft("eye",AM);const wM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],RM=Ft("file-text",wM);const CM=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],_1=Ft("house",CM);const NM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],DM=Ft("image",NM);const LM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],UM=Ft("info",LM);const PM=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],x1=Ft("keyboard",PM);const OM=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],IM=Ft("languages",OM);const zM=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],BM=Ft("lightbulb",zM);const FM=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],HM=Ft("mouse-pointer-2",FM);const GM=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],VM=Ft("move",GM);const kM=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],jM=Ft("music",kM);const XM=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kc=Ft("play",XM);const WM=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],qM=Ft("repeat",WM);const YM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qv=Ft("rotate-ccw",YM);const ZM=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],y1=Ft("shuffle",ZM);const KM=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],QM=Ft("skull",KM);const JM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$M=Ft("sparkles",JM);const eb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],tb=Ft("tag",eb);const nb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ib=Ft("trophy",nb);const ab=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],rb=Ft("upload",ab);const sb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ob=Ft("volume-2",sb);const lb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],cb=Ft("volume-x",lb);const ub=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],fb=Ft("wand-sparkles",ub);const db=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yv=Ft("x",db),hb=()=>[{id:"networkquiz",title:"NETWORK QUIZ",subtitle:"Learning Game",description:"109개의 필수 네트워크 약어를 게임 형식으로 학습할 수 있습니다. 퀴즈 모드와 무한 단어장 모드로 효과적으로 암기하세요.",icon:lh,x:300,y:100,size:"md",link:"/network-quiz",image:"https://images.unsplash.com/photo-1562883676-8c6fbf064050?auto=format&fit=crop&q=80&w=800"},{id:"neonspace",title:"NEON SPACE",subtitle:"Interactive Art",description:"네온 글로우 효과와 상호작용 애니메이션을 통한 시각적 예술 공간입니다. 창의적인 UI/UX 표현의 경계를 탐험합니다.",icon:$M,x:-200,y:200,size:"md",link:"/neonspace",image:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800"},{id:"pixelsort",title:"PIXEL SORT",subtitle:"Audio Visualizer",description:"이미지를 정렬 알고리즘으로 정렬하면서 시각화합니다. 오디오를 업로드하면 정렬 과정에 맞춰 사운드가 재생되어 독특한 경험을 만듭니다.",icon:fb,x:200,y:-200,size:"md",link:"/pixel-sort",image:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"},{id:"cthulhu",title:"FORBIDDEN LOG",subtitle:"Ancient Knowledge",description:"광기의 일지... 옛 지배자의 각성을 기록하는 신성 모독적 문서. 당신의 이성을 잃어버릴 준비가 되었나요? 읽으면 돌이킬 수 없습니다.",icon:QM,x:-300,y:-100,size:"md",link:"/cthulhu",image:"https://images.unsplash.com/photo-1580695287070-40c6b3b83b65?auto=format&fit=crop&q=80&w=800"}],S1=hb(),pb=({panX:s,panY:e,scale:i})=>{const r=Q.useRef(null),l=Q.useRef({panX:s,panY:e,scale:i});return Q.useEffect(()=>{l.current={panX:s,panY:e,scale:i}},[s,e,i]),Q.useEffect(()=>{const c=r.current;if(!c)return;const f=c.getContext("2d");if(!f)return;let h=window.innerWidth,m=window.innerHeight;c.width=h,c.height=m;const p=Array.from({length:500},()=>({x:Math.random()*h,y:Math.random()*m,z:Math.random()*2+.5,radius:Math.random()*1.5,alpha:Math.random()}));let v;const g=()=>{f.clearRect(0,0,h,m);const M=f.createLinearGradient(0,0,0,m);M.addColorStop(0,"#02020a"),M.addColorStop(1,"#000000"),f.fillStyle=M,f.fillRect(0,0,h,m);const{panX:b,panY:E,scale:S}=l.current;p.forEach(_=>{const C=b*.05*_.z,N=E*.05*_.z;let I=(_.x+C)%h,H=(_.y+N)%m;I<0&&(I+=h),H<0&&(H+=m),f.beginPath(),f.arc(I,H,_.radius*(S*.5+.5),0,Math.PI*2);const P=Math.sin(Date.now()*.003*_.z+_.x),B=Math.max(.1,Math.min(1,_.alpha+P*.2));f.fillStyle=`rgba(255, 255, 255, ${B})`,f.fill()}),v=requestAnimationFrame(g)};g();const x=()=>{h=window.innerWidth,m=window.innerHeight,c.width=h,c.height=m};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(v)}},[]),T.jsx("canvas",{ref:r,className:"absolute inset-0 z-0 pointer-events-none"})},mb=Uy.memo(({data:s,isSelected:e,onClick:i})=>{const r={sm:"w-24 h-24 text-xs",md:"w-32 h-32 text-sm",lg:"w-48 h-48 text-base"},l={sm:24,md:32,lg:48};return T.jsx("div",{className:`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
        ${e?"z-30":"z-10 hover:z-20"}
      `,style:{transform:`translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`},onClick:c=>{c.stopPropagation(),i(s)},children:T.jsxs("div",{className:`transition-transform duration-500 ${e?"scale-150":"hover:scale-110 animate-float-slow"}`,children:[T.jsx("div",{className:`absolute inset-0 rounded-full blur-xl transition-all duration-500
          ${e?"bg-white/50 scale-125":"bg-white/10 opacity-0 group-hover:opacity-40 group-hover:scale-110"}
        `}),T.jsxs("div",{className:`
          relative flex flex-col items-center justify-center rounded-full border overflow-hidden
          backdrop-blur-md shadow-2xl transition-all duration-500
          ${r[s.size]}
          ${e?"bg-black/80 border-white text-white shadow-[0_0_50px_rgba(255,255,255,0.6)]":"bg-black/30 border-white/30 text-gray-300 hover:border-white/70 hover:text-white hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"}
        `,children:[T.jsx("div",{className:`absolute inset-0 bg-cover bg-center transition-opacity duration-500 
              ${e?"opacity-40":"opacity-30 group-hover:opacity-50"}`,style:{backgroundImage:`url(${s.image})`}}),T.jsx("div",{className:`absolute inset-0 bg-black/60 transition-opacity duration-500 ${e?"bg-black/70":""}`}),T.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[T.jsx(s.icon,{size:l[s.size],strokeWidth:1.5,className:"mb-2 drop-shadow-lg"}),T.jsx("span",{className:"font-mono tracking-wider font-bold text-center px-2 opacity-90 select-none drop-shadow-md",children:s.title})]}),e&&T.jsx("div",{className:"absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow pointer-events-none z-20"})]})]})})}),gb=({data:s,onClose:e,onNavigate:i})=>{const r=l=>{const c=s?.link||"";c.startsWith("/")&&(l.preventDefault(),i?.(c))};return T.jsx("div",{className:`
      fixed inset-y-0 left-0 z-40 h-full flex flex-col justify-center
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
      ${s?"w-full md:w-[55%] opacity-100 translate-x-0":"w-0 opacity-0 -translate-x-20"}
    `,children:s&&T.jsxs("div",{className:"pointer-events-auto h-full w-full bg-black/80 backdrop-blur-2xl border-r border-white/20 flex flex-col justify-center relative overflow-hidden",style:{boxShadow:"20px 0 50px rgba(0,0,0,0.5)"},children:[T.jsxs("div",{className:"absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[20s] ease-linear",style:{backgroundImage:`url(${s.image})`}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"})]}),T.jsxs("button",{onClick:e,className:"absolute top-8 left-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2 group",children:[T.jsx("div",{className:"p-2 bg-black/40 border border-white/10 rounded-full group-hover:bg-white/20 transition-colors backdrop-blur-sm",children:T.jsx(Yv,{size:24})}),T.jsx("span",{className:"text-sm font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded",children:"CLOSE"})]}),T.jsxs("div",{className:"relative z-10 px-8 md:px-16 animate-slide-in-up mt-20",children:[T.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[T.jsx("div",{className:"p-4 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm",children:T.jsx(s.icon,{size:48,className:"text-white"})}),T.jsxs("div",{children:[T.jsxs("div",{className:"text-xs font-mono text-white/70 mb-1 border-b border-white/20 inline-block pb-1",children:["ID: ",s.id.toUpperCase()]}),T.jsx("h2",{className:"text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",children:s.title})]})]}),T.jsx("p",{className:"text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase mb-8 pl-1 border-l-2 border-white/50 drop-shadow-md",children:s.subtitle}),T.jsx("div",{className:"text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm",children:s.description}),T.jsxs("a",{href:s.link,onClick:r,target:s.link.startsWith("/")?void 0:"_blank",rel:s.link.startsWith("/")?void 0:"noopener noreferrer",className:"group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] hover:bg-gray-200 transition-all overflow-hidden rounded-sm",children:[T.jsx("span",{className:"relative z-10 mr-4",children:"INITIATE CONNECTION"}),T.jsx(TM,{size:20,className:"relative z-10 group-hover:translate-x-1 transition-transform"}),T.jsx("div",{className:"absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"})]})]})]})})},vb=()=>{const s=zv(),[e,i]=Q.useState(null),[r,l]=Q.useState({x:0,y:0}),[c,f]=Q.useState(1),[h,m]=Q.useState(!1),p=Q.useRef({x:0,y:0}),v=Q.useRef({x:0,y:0}),g=Q.useCallback(E=>{const _=-E.deltaY*.001;f(C=>{const N=C+_;return Math.min(Math.max(N,.3),3)})},[]),x=E=>{e||(m(!0),p.current={x:E.clientX,y:E.clientY},v.current={...r})},M=E=>{if(!h||e)return;const S=E.clientX-p.current.x,_=E.clientY-p.current.y;l({x:v.current.x+S,y:v.current.y+_})},b=()=>m(!1);return Q.useEffect(()=>{if(e){const E=window.innerWidth*.75,S=window.innerHeight*.5,_=window.innerWidth/2,C=window.innerHeight/2,N=(E-_)/c-e.x,I=(S-C)/c-e.y;l({x:N,y:I})}},[e,c]),T.jsxs("div",{className:`relative w-full h-screen bg-black overflow-hidden font-sans select-none 
        ${h?"cursor-grabbing":e?"cursor-default":"cursor-grab"}
      `,onMouseDown:x,onMouseMove:M,onMouseUp:b,onMouseLeave:b,onWheel:g,children:[T.jsx("style",{children:`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite alternate;
        }
        @keyframes slide-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}),T.jsx(pb,{panX:r.x,panY:r.y,scale:c}),T.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"}),T.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1]"}),T.jsxs("div",{className:"absolute top-1/2 left-1/2 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",style:{transform:`translate(-50%, -50%) scale(${c}) translate(${r.x}px, ${r.y}px)`},children:[T.jsx("div",{className:"absolute -top-[500px] left-0 -translate-x-1/2 w-[1500px] text-center pointer-events-none z-0 opacity-10 select-none",children:T.jsx("h1",{className:"text-[200px] font-black text-white tracking-[0.2em] blur-[4px]",children:"UNIVERSE"})}),S1.map(E=>T.jsx(mb,{data:E,isSelected:e?.id===E.id,onClick:i},E.id)),T.jsx("svg",{className:"absolute top-0 left-0 overflow-visible pointer-events-none z-0 opacity-10",children:S1.map((E,S)=>S<5&&T.jsx("line",{x1:0,y1:0,x2:E.x,y2:E.y,stroke:"white",strokeWidth:"2",strokeDasharray:"10,10"},`line-${S}`))}),T.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"}),T.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full"})]}),T.jsxs("header",{className:`absolute top-8 left-0 w-full text-center pointer-events-none z-30 transition-opacity duration-500 ${e?"opacity-0":"opacity-100"}`,children:[T.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white tracking-[0.2em]",style:{textShadow:"0 0 30px rgba(255,255,255,0.2)"},children:"NEXUS"}),T.jsxs("div",{className:"mt-4 flex justify-center gap-4",children:[T.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"SCROLL TO ZOOM"}),T.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"DRAG TO MOVE"})]})]}),T.jsx(gb,{data:e,onClose:()=>i(null),onNavigate:s}),T.jsxs("div",{className:`absolute bottom-6 right-8 z-30 text-right font-mono text-[10px] text-white/30 transition-opacity ${e?"opacity-0":"opacity-100"}`,children:[T.jsxs("div",{className:"mb-1",children:["POS X: ",Math.round(-r.x)]}),T.jsxs("div",{className:"mb-1",children:["POS Y: ",Math.round(-r.y)]}),T.jsxs("div",{children:["ZOOM: ",Math.round(c*100),"%"]})]})]})},_b=()=>{const s=[{id:1,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 네트워크를 정의하고 제어하는 기술"},{id:2,acronym:"TCAM",fullTerm:"Ternary Content Addressable Memory",desc:"0, 1, X 세 가지 상태를 저장하는 고속 검색 메모리"},{id:3,acronym:"SNMP",fullTerm:"Simple Network Management Protocol",desc:"네트워크 장비를 간단하게 관리하고 감시하는 프로토콜"},{id:4,acronym:"VBR",fullTerm:"Variable Bit Rate",desc:"전송률이 상황에 따라 변하는 방식"},{id:5,acronym:"ICMP",fullTerm:"Internet Control Message Protocol",desc:"인터넷 제어 메시지(오류 보고, Ping 등)를 보내는 프로토콜"},{id:6,acronym:"OSPF",fullTerm:"Open Shortest Path First",desc:"개방형 최단 경로 우선 라우팅 프로토콜"},{id:7,acronym:"ATM",fullTerm:"Asynchronous Transfer Mode",desc:"비동기 전송 모드 (셀 단위 전송)"},{id:8,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체에 접근을 제어하는 고유 물리 주소"},{id:9,acronym:"DPI",fullTerm:"Deep Packet Inspection",desc:"패킷의 내용까지 깊게 검사하는 기술"},{id:10,acronym:"RIP",fullTerm:"Routing Information Protocol",desc:"라우팅 정보를 홉 수 기반으로 교환하는 프로토콜"},{id:11,acronym:"ASN",fullTerm:"Autonomous System Number",desc:"자율 시스템(AS)을 식별하는 고유 번호"},{id:12,acronym:"ISIS",fullTerm:"Intermediate System to Intermediate System",desc:"중간 시스템(라우터) 끼리의 라우팅 프로토콜"},{id:13,acronym:"EIGRP",fullTerm:"Enhanced Interior Gateway Routing Protocol",desc:"향상된 내부 게이트웨이 라우팅 (Cisco 전용)"},{id:14,acronym:"MOSPF",fullTerm:"Multicast Open Shortest Path First",desc:"멀티캐스트를 지원하는 OSPF"},{id:15,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 운영체제 (SDN 컨트롤러)"},{id:16,acronym:"NAT",fullTerm:"Network Address Translation",desc:"네트워크 주소(IP)를 변환하는 기술"},{id:17,acronym:"OFC",fullTerm:"Optical Fiber Cable",desc:"광 섬유 케이블"},{id:18,acronym:"PDU",fullTerm:"Protocol Data Unit",desc:"프로토콜에서 처리하는 데이터의 단위"},{id:19,acronym:"NCS",fullTerm:"Network Control System",desc:"네트워크를 제어하는 시스템"},{id:20,acronym:"ONF",fullTerm:"Open Networking Foundation",desc:"개방형 네트워킹 표준화 재단"},{id:21,acronym:"WFQ",fullTerm:"Weighted Fair Queuing",desc:"가중치를 두어 공평하게 처리하는 큐 방식"},{id:22,acronym:"NCP",fullTerm:"Network Control Protocol",desc:"네트워크 계층을 제어/설정하는 프로토콜"},{id:23,acronym:"CBR",fullTerm:"Constant Bit Rate",desc:"전송률이 일정하게 고정된 방식"},{id:24,acronym:"SOHO",fullTerm:"Small Office Home Office",desc:"소규모 사무실이나 재택 근무 환경"},{id:25,acronym:"DHCP",fullTerm:"Dynamic Host Configuration Protocol",desc:"호스트 설정을 동적으로 자동 할당하는 프로토콜"},{id:26,acronym:"BGP",fullTerm:"Border Gateway Protocol",desc:"AS 경계에서 사용하는 게이트웨이 프로토콜"},{id:27,acronym:"CIDR",fullTerm:"Classless Inter-Domain Routing",desc:"클래스 구분 없는 도메인 간 라우팅"},{id:28,acronym:"HOL",fullTerm:"Head-of-the-Line",desc:"줄의 맨 앞이 막혀 뒤까지 지연되는 현상"},{id:29,acronym:"AQM",fullTerm:"Active Queue Management",desc:"큐를 능동적으로 관리하여 혼잡 방지"},{id:30,acronym:"VRRP",fullTerm:"Virtual Router Redundancy Protocol",desc:"가상 라우터를 만들어 중복(예비) 구성"},{id:31,acronym:"OVSDB",fullTerm:"Open vSwitch Database Management Protocol",desc:"Open vSwitch의 데이터베이스를 관리하는 프로토콜"},{id:32,acronym:"SAL",fullTerm:"Service Abstraction Layer",desc:"서비스를 추상화하여 하드웨어 종속성 제거"},{id:33,acronym:"VMM",fullTerm:"Virtual Machine Monitor",desc:"가상 머신을 감시/관리하는 모니터"},{id:34,acronym:"NLRI",fullTerm:"Network Layer Reachability Information",desc:"네트워크 계층의 도달 가능성 정보"},{id:35,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄로 입력하는 텍스트 인터페이스"},{id:36,acronym:"MIB",fullTerm:"Management Information Base",desc:"관리 정보가 저장된 베이스"},{id:37,acronym:"SMI",fullTerm:"Structure of Management Information",desc:"관리 정보를 정의하는 구조 및 규칙"},{id:38,acronym:"RPC",fullTerm:"Remote Procedure Call",desc:"원격에 있는 프로시저를 호출함"},{id:39,acronym:"EGP",fullTerm:"Exterior Gateway Protocol",desc:"외부 게이트웨이(AS 간) 프로토콜"},{id:40,acronym:"IGP",fullTerm:"Interior Gateway Protocol",desc:"내부 게이트웨이(AS 내) 프로토콜"},{id:41,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 정의된 네트워킹 (중복)"},{id:42,acronym:"OFP",fullTerm:"OpenFlow Protocol",desc:"오픈플로우 스위치와 컨트롤러 간 프로토콜"},{id:43,acronym:"OFS",fullTerm:"OpenFlow Switch",desc:"오픈플로우를 지원하는 스위치"},{id:44,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 OS (중복)"},{id:45,acronym:"NFV",fullTerm:"Network Functions Virtualization",desc:"네트워크 기능을 가상화하는 기술"},{id:46,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄 인터페이스 (중복)"},{id:47,acronym:"DCN",fullTerm:"Data Center Network",desc:"데이터 센터 내부 네트워크"},{id:48,acronym:"NFVI",fullTerm:"NFV Infrastructure",desc:"NFV를 구동하기 위한 인프라 자원"},{id:49,acronym:"NBI",fullTerm:"Northbound Interface",desc:"북쪽(상위 응용) 방향 인터페이스"},{id:50,acronym:"SBI",fullTerm:"Southbound Interface",desc:"남쪽(하부 장비) 방향 인터페이스"},{id:51,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상으로 나눈 근거리 통신망"},{id:52,acronym:"VPN",fullTerm:"Virtual Private Network",desc:"가상으로 만든 사설 네트워크"},{id:53,acronym:"OVS",fullTerm:"Open vSwitch",desc:"오픈 소스 가상 스위치"},{id:54,acronym:"YANG",fullTerm:"Yet Another Next Generation",desc:"또 다른 차세대 데이터 모델링 언어"},{id:55,acronym:"NETCONF",fullTerm:"Network Configuration Protocol",desc:"네트워크 설정을 위한 프로토콜"},{id:56,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"다양한 프로토콜 위에서 라벨로 스위칭"},{id:57,acronym:"MANO",fullTerm:"Management and Orchestration",desc:"NFV의 관리와 조율"},{id:58,acronym:"ODL",fullTerm:"OpenDaylight",desc:"오픈데이라이트 (SDN 컨트롤러)"},{id:59,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"라벨 스위칭 (중복)"},{id:60,acronym:"LSR",fullTerm:"Label Switch Router",desc:"라벨을 보고 스위칭하는 라우터"},{id:61,acronym:"LLC",fullTerm:"Logical Link Control",desc:"논리적인 링크 제어"},{id:62,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체 접근 제어 (중복)"},{id:63,acronym:"HDLC",fullTerm:"High Level Data Link Protocol",desc:"고수준 데이터 링크 제어 프로토콜"},{id:64,acronym:"CSMA",fullTerm:"Carrier Sense Multiple Access",desc:"반송파 감지 후 다중 접속"},{id:65,acronym:"FDMA",fullTerm:"Frequency Division Multiple Access",desc:"주파수를 나누어 접속"},{id:66,acronym:"TDMA",fullTerm:"Time Division Multiple Access",desc:"시간을 나누어 접속"},{id:67,acronym:"CDMA",fullTerm:"Code Division Multiple Access",desc:"코드로 구분하여 나누어 접속"},{id:68,acronym:"ARP",fullTerm:"Address Resolution Protocol",desc:"주소(IP)를 해석하여 MAC 주소를 알아냄"},{id:69,acronym:"FDDI",fullTerm:"Fiber Distributed Data Interface",desc:"광섬유로 분산된 데이터 인터페이스"},{id:70,acronym:"SFD",fullTerm:"Start Frame Delimiter",desc:"프레임의 시작을 알리는 구분자"},{id:71,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상 LAN (중복)"},{id:72,acronym:"DTP",fullTerm:"Dynamic Trunking Protocol",desc:"트렁킹을 동적으로 협상함"},{id:73,acronym:"VTP",fullTerm:"VLAN Trunking Protocol",desc:"VLAN 정보를 트렁킹 구간에 전파"},{id:74,acronym:"TPID",fullTerm:"Tag Protocol Identifier",desc:"태그 프로토콜임을 식별하는 필드"},{id:75,acronym:"TCI",fullTerm:"Tag Control Information",desc:"태그를 제어하는 정보"},{id:76,acronym:"PCP",fullTerm:"Priority Code Point",desc:"우선순위를 나타내는 코드 지점"},{id:77,acronym:"DEI",fullTerm:"Drop Eligible Indicator",desc:"폐기 해도 되는지 나타내는 표시"},{id:78,acronym:"LER",fullTerm:"Label Edge Router",desc:"MPLS망 가장자리에 있는 라우터"},{id:79,acronym:"LSP",fullTerm:"Label-Switched Path",desc:"라벨로 스위칭되어 지나가는 경로"},{id:80,acronym:"LDP",fullTerm:"Label Distribution Protocol",desc:"라벨을 분배하는 프로토콜"},{id:81,acronym:"SIFS",fullTerm:"Short Inter-frame Spacing",desc:"짧은 프레임 간 간격"},{id:82,acronym:"DIFS",fullTerm:"Distributed Inter-frame Space",desc:"분산 제어용 프레임 간격"},{id:83,acronym:"RTS",fullTerm:"Request to Send",desc:"송신을 요청함"},{id:84,acronym:"CTS",fullTerm:"Clear to Send",desc:"송신 해도 좋다"},{id:85,acronym:"FHSS",fullTerm:"Frequency-Hopping Spread Spectrum",desc:"주파수를 깡충깡충 뛰며 대역 확산"},{id:86,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선으로 접속하는 네트워크망"},{id:87,acronym:"MTSO",fullTerm:"Mobile Telecommunications Switching Office",desc:"이동통신 교환국"},{id:88,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자를 식별하는 모듈"},{id:89,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"길게 보고 진화시킨 4G 기술"},{id:90,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"일반적인 패킷 무선 서비스"},{id:91,acronym:"OFDMA",fullTerm:"Orthogonal Frequency-Division Multiple Access",desc:"직교 주파수 분할 다중 접속"},{id:92,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"4G 이동통신 (중복)"},{id:93,acronym:"HSPA",fullTerm:"High Speed Packet Access",desc:"고속 패킷 접속"},{id:94,acronym:"RNC",fullTerm:"Radio Network Controller",desc:"무선 네트워크를 제어하는 장비"},{id:95,acronym:"HSDPA",fullTerm:"High Speed Downlink Packet Access",desc:"고속 하향 패킷 접속"},{id:96,acronym:"WCDMA",fullTerm:"Wideband Code Division Multiple Access",desc:"광대역 코드 분할 다중 접속"},{id:97,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자 식별 모듈 (중복)"},{id:98,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"2.5G 서비스 (중복)"},{id:99,acronym:"IMSI",fullTerm:"International Mobile Subscriber Identity",desc:"국제 모바일 가입자 고유 식별 번호"},{id:100,acronym:"EDGE",fullTerm:"Enhanced Data Rates for GSM Evolution",desc:"GSM의 진화로 데이터 속도 향상"},{id:101,acronym:"MIMO",fullTerm:"Multiple Input Multiple Output",desc:"다중 입력 다중 출력"},{id:102,acronym:"SC-FDMA",fullTerm:"Single Carrier Frequency Division Multiple Access",desc:"단일 반송파를 사용하는 FDMA"},{id:103,acronym:"EPC",fullTerm:"Evolved Packet Core",desc:"진화된 패킷 코어 망"},{id:104,acronym:"MME",fullTerm:"Mobility Management Entity",desc:"이동성을 관리하는 개체"},{id:105,acronym:"eMBB",fullTerm:"Enhanced Mobile Broadband",desc:"향상된 초광대역 서비스"},{id:106,acronym:"DSS",fullTerm:"Dynamic Spectrum Sharing",desc:"주파수를 동적으로 공유"},{id:107,acronym:"FWA",fullTerm:"Fixed Wireless Access",desc:"고정된 위치에서 무선으로 접속"},{id:108,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선 접속망 (중복)"},{id:109,acronym:"UTRAN",fullTerm:"Universal Terrestrial Radio Access Network",desc:"범용 지상 무선 접속망"}],e=[{id:1001,acronym:"Random Access",fullTerm:"Random Access",desc:"임의 접근 (데이터 전송 시 경쟁하며 충돌 가능성이 있는 방식)"},{id:1002,acronym:"Controlled Access",fullTerm:"Controlled Access",desc:"제어 접근 (순서나 규칙에 따라 전송하여 충돌을 방지하는 방식)"},{id:1003,acronym:"Channelization",fullTerm:"Channelization",desc:"채널화 (대역폭을 주파수, 시간, 코드 등으로 나누어 할당하는 방식)"},{id:1004,acronym:"Ethernet",fullTerm:"Ethernet",desc:"이더넷 (가장 널리 사용되는 유선 LAN 기술 표준)"},{id:1005,acronym:"CRC",fullTerm:"Cyclic Redundancy Check",desc:"순환 중복 검사 (데이터 전송 오류를 검출하기 위한 수학적 알고리즘)"},{id:1006,acronym:"Loopback",fullTerm:"Loopback",desc:"루프백 (데이터를 송신한 장치로 다시 되돌려 보내는 기능, 예: 127.0.0.1)"},{id:1007,acronym:"Unicast",fullTerm:"Unicast",desc:"유니캐스트 (1:1 통신, 특정 단일 수신자에게 전송)"},{id:1008,acronym:"Multicast",fullTerm:"Multicast",desc:"멀티캐스트 (1:N 통신, 특정 그룹의 멤버들에게 전송)"},{id:1009,acronym:"Anycast",fullTerm:"Anycast",desc:"애니캐스트 (1:1 통신이나, 네트워크상에서 가장 가까운 노드와 통신)"},{id:1010,acronym:"IPv4",fullTerm:"Internet Protocol version 4",desc:"인터넷 프로토콜 버전 4 (32비트 주소 체계)"},{id:1011,acronym:"IPv6",fullTerm:"Internet Protocol version 6",desc:"인터넷 프로토콜 버전 6 (128비트 주소 체계, 무한대에 가까운 주소)"},{id:1012,acronym:"Subnet Mask",fullTerm:"Subnet Mask",desc:"서브넷 마스크 (IP 주소에서 네트워크 부분과 호스트 부분을 구분)"},{id:1013,acronym:"Dijkstra",fullTerm:"Dijkstra Algorithm",desc:"다익스트라 알고리즘 (OSPF 등에서 사용하는 최단 경로 탐색 알고리즘)"},{id:1014,acronym:"STP",fullTerm:"Spanning Tree Protocol",desc:"스패닝 트리 프로토콜 (스위치 네트워크의 루프 방지)"},{id:1015,acronym:"Flooding",fullTerm:"Flooding",desc:"플러딩 (수신 포트를 제외한 모든 포트로 프레임을 전송하는 것)"},{id:1016,acronym:"Star Topology",fullTerm:"Star Topology",desc:"성형 토폴로지 (중앙 허브나 스위치를 중심으로 모든 노드가 연결된 형태)"},{id:1017,acronym:"Traffic Engineering",fullTerm:"Traffic Engineering",desc:"트래픽 엔지니어링 (네트워크 트래픽의 흐름을 최적화하고 제어하는 기술)"},{id:1018,acronym:"Spread-spectrum",fullTerm:"Spread-spectrum",desc:"대역 확산 (신호를 넓은 주파수 대역으로 퍼뜨려 간섭을 줄이는 기술)"},{id:1019,acronym:"Gateway",fullTerm:"Gateway",desc:"게이트웨이 (서로 다른 네트워크 프로토콜을 사용하는 네트워크 간의 연결점)"},{id:1020,acronym:"SLAAC",fullTerm:"Stateless Address Autoconfiguration",desc:"상태 비보존 주소 자동 설정 (IPv6에서 라우터 없이 IP를 자동 생성)"},{id:1021,acronym:"NDP",fullTerm:"Neighbor Discovery Protocol",desc:"이웃 탐색 프로토콜 (IPv6에서 ARP를 대체하여 이웃 노드 관리)"},{id:1022,acronym:"IPsec",fullTerm:"Internet Protocol Security",desc:"IP 보안 (IP 계층에서 데이터를 암호화하고 인증하는 프로토콜 모음)"},{id:1023,acronym:"Collision",fullTerm:"Collision",desc:"충돌 (두 개 이상의 장치가 동시에 데이터를 전송하여 신호가 겹치는 현상)"},{id:1024,acronym:"MTU",fullTerm:"Maximum Transmission Unit",desc:"최대 전송 단위 (네트워크 인터페이스가 한 번에 보낼 수 있는 최대 데이터 크기)"}],i=`
The three broad categories of multiple access protocols are (random access), (controlled access), and (channelization). | 다중 접속 프로토콜의 세 가지 광범위한 범주는 (임의 접근), (제어 접근), 그리고 (채널화)입니다.
In (random access protocols), devices transmit whenever they have data to send, which may result in collisions. | (임의 접근 프로토콜)에서는 장치가 전송할 데이터가 있을 때마다 전송하므로 충돌이 발생할 수 있습니다.
The (CSMA Carrier Sense Multiple Access) protocol is a type of random access protocol that uses a "listen before talk" strategy to avoid collisions. | (CSMA 반송파 감지 다중 접속) 프로토콜은 충돌을 피하기 위해 "말하기 전에 듣기" 전략을 사용하는 임의 접근 프로토콜의 일종입니다.
(CSMA/CD) and (CSMA/CA) are two variations of CSMA used to reduce the chance of collisions. | (CSMA/CD)와 (CSMA/CA)는 충돌 가능성을 줄이기 위해 사용되는 CSMA의 두 가지 변형입니다.
(CSMA/CD Carrier Sense Multiple Access with Collision Detection) is widely used in wired Ethernet networks and detects collisions to retransmit data. | (CSMA/CD)는 유선 이더넷 네트워크에서 널리 사용되며 충돌을 감지하여 데이터를 재전송합니다.
(CSMA/CA Carrier Sense Multiple Access with Collision Avoidance) is used in wireless networks like Wi-Fi to avoid collisions due to the hidden terminal problem. | (CSMA/CA)는 숨겨진 터미널 문제로 인한 충돌을 방지하기 위해 Wi-Fi와 같은 무선 네트워크에서 사용됩니다.
Examples of channelization protocols include (Time Division Multiple Access), (Frequency Division Multiple Access), and (Code Division Multiple Access). | 채널화 프로토콜의 예로는 (시분할 다중 접속), (주파수 분할 다중 접속), (코드 분할 다중 접속)이 있습니다.
In CDMA, each user is assigned a unique (code) sequence to differentiate their signal from others. | CDMA에서 각 사용자는 자신의 신호를 다른 사용자와 구별하기 위해 고유한 (코드) 시퀀스를 할당받습니다.
The (spread-spectrum) technique used in CDMA ensures that multiple signals can coexist without significant interference. | CDMA에서 사용되는 (대역 확산) 기술은 여러 신호가 심각한 간섭 없이 공존할 수 있도록 보장합니다.
CSMA/CA reduces the likelihood of collisions by implementing a (random backoff time) before transmission. | CSMA/CA는 전송 전에 (임의 백오프 시간)을 구현하여 충돌 가능성을 줄입니다.
1.2 Ethernet protocols |
Ethernet is a widely used technology for (Local) Area Networks. | 이더넷은 (근거리) 통신망(LAN)에 널리 사용되는 기술입니다.
The smallest size of an Ethernet frame is (64) bytes, including the header and the trailer. | 이더넷 프레임의 최소 크기는 헤더와 트레일러를 포함하여 (64)바이트입니다.
The standard Ethernet MTU (Maximum Transmission Unit) is (1500) bytes, excluding headers and trailers. | 표준 이더넷 MTU(최대 전송 단위)는 헤더와 트레일러를 제외하고 (1500)바이트입니다.
In an Ethernet frame, the field that specifies the protocol being carried (e.g., IPv4 or ARP) is the (Ether Type) field. | 이더넷 프레임에서 전송되는 프로토콜(예: IPv4 또는 ARP)을 지정하는 필드는 (이더 타입) 필드입니다.
The Ethernet field used to mark the beginning of a frame is called the (Start Frame Delimiter - SFD). | 프레임의 시작을 표시하는 데 사용되는 이더넷 필드를 (SFD)라고 합니다.
(Cyclic Redundancy Check - CRC) is the error-checking mechanism used in Ethernet frames to ensure data integrity. | (CRC)는 데이터 무결성을 보장하기 위해 이더넷 프레임에서 사용되는 오류 검사 메커니즘입니다.
Ethernet uses (MAC addresses) to uniquely identify devices on a network. | 이더넷은 네트워크상의 장치를 고유하게 식별하기 위해 (MAC 주소)를 사용합니다.
(IEEE 802.1Q) is a virtual LAN (VLAN) tagging protocol often used with Ethernet to segregate network traffic. | (IEEE 802.1Q)는 네트워크 트래픽을 분리하기 위해 이더넷과 함께 자주 사용되는 VLAN 태깅 프로토콜입니다.
The (ARP Address Resolution Protocol) protocol is used for resolving IP addresses into MAC addresses in an Ethernet network. | (ARP) 프로토콜은 이더넷 네트워크에서 IP 주소를 MAC 주소로 변환하는 데 사용됩니다.
ARP is a protocol used to map an (IP) address to a (MAC) address. | ARP는 (IP) 주소를 (MAC) 주소에 매핑하는 데 사용되는 프로토콜입니다.
ARP is used in (IPv4) networks to resolve addresses, while (NDP Neighbor Discovery Protocol) is its counterpart in IPv6 networks. | ARP는 (IPv4) 네트워크에서 주소를 확인하는 데 사용되며, (NDP)는 IPv6 네트워크에서의 대응 프로토콜입니다.
A malicious attack that exploits ARP by sending fake ARP replies is called (ARP spoofing or ARP poisoning). | 가짜 ARP 응답을 보내 ARP를 악용하는 악의적인 공격을 (ARP 스푸핑 또는 ARP 포이즈닝)이라고 합니다.
ARP requests are sent to the Ethernet broadcast address (FF:FF:FF:FF:FF:FF). | ARP 요청은 이더넷 브로드캐스트 주소 (FF:FF:FF:FF:FF:FF)로 전송됩니다.
Link layer switches use the (MAC) address to forward frames to the appropriate port. | 링크 계층 스위치는 프레임을 적절한 포트로 전달하기 위해 (MAC) 주소를 사용합니다.
A switch maintains a (forwarding table or MAC address table) to map MAC addresses to specific switch ports. | 스위치는 MAC 주소를 특정 스위치 포트에 매핑하기 위해 (전송 테이블 또는 MAC 주소 테이블)을 유지합니다.
When a switch receives a frame with a destination MAC address not in its table, it performs (flooding) to send the frame to all ports except the source. | 스위치가 테이블에 없는 목적지 MAC 주소를 가진 프레임을 수신하면, 소스를 제외한 모든 포트로 프레임을 보내는 (플러딩)을 수행합니다.
The Spanning Tree Protocol (STP) is used to prevent (loops) in networks with redundant switch connections. | 스패닝 트리 프로토콜(STP)은 중복 스위치 연결이 있는 네트워크에서 (루프)를 방지하는 데 사용됩니다.
Switches reduce network congestion by creating separate (collision) domains for each connected device. | 스위치는 각 연결된 장치에 대해 별도의 (충돌) 도메인을 생성하여 네트워크 혼잡을 줄입니다.
A link layer switch operates primarily at the (Data Link) layer of the OSI model. | 링크 계층 스위치는 주로 OSI 모델의 (데이터 링크) 계층에서 작동합니다.
In modern networks, switches are often used in a (star) topology to connect devices. | 현대 네트워크에서 스위치는 장치를 연결하기 위해 종종 (성형) 토폴로지에서 사용됩니다.
1.3 VLAN and MPLS |
VLANs are implemented to improve (network performance) by segmenting networks into smaller, manageable sections. | VLAN은 네트워크를 더 작고 관리하기 쉬운 섹션으로 분할하여 (네트워크 성능)을 향상시키기 위해 구현됩니다.
VLANs operate at the (Data Link) layer of the OSI model. | VLAN은 OSI 모델의 (데이터 링크) 계층에서 작동합니다.
VLANs can reduce (unnecessary traffic or broadcast traffic) by limiting broadcasts to a specific VLAN. | VLAN은 특정 VLAN으로 브로드캐스트를 제한하여 (불필요한 트래픽)을 줄일 수 있습니다.
A VLAN can span across multiple switches using a (trunk) link. | VLAN은 (트렁크) 링크를 사용하여 여러 스위치에 걸쳐 확장될 수 있습니다.
(VLAN Trunking Protocol (VTP)) is used to distribute VLAN information across switches in a network. | (VTP)는 네트워크의 스위치 전체에 VLAN 정보를 배포하는 데 사용됩니다.
In MPLS, packets are forwarded based on a (label) rather than a destination IP address. | MPLS에서 패킷은 목적지 IP 주소가 아닌 (라벨)을 기반으로 전달됩니다.
MPLS allows for faster packet forwarding by eliminating the need for (IP) lookups at each router. | MPLS는 각 라우터에서 (IP) 조회의 필요성을 제거하여 더 빠른 패킷 전달을 가능하게 합니다.
MPLS supports multiple types of traffic, such as (IP) and (non-IP) traffic, in a single network. | MPLS는 단일 네트워크에서 (IP) 및 (비 IP) 트래픽과 같은 여러 유형의 트래픽을 지원합니다.
The (Label Edge) router is responsible for adding labels to incoming packets from external networks in MPLS. | (레이블 에지) 라우터는 MPLS에서 외부 네트워크로부터 들어오는 패킷에 라벨을 추가하는 역할을 합니다.
The (Label Switch) router makes forwarding decisions based solely on the label and does not modify the packet's label. | (레이블 스위치) 라우터는 오직 라벨에 기반하여 전달 결정을 내리며 패킷의 라벨을 수정하지 않습니다.
MPLS enables the creation of (Label Switched Paths - LSPs) to define specific, optimized paths for traffic, improving network performance. | MPLS는 트래픽에 대한 특정하고 최적화된 경로를 정의하는 (LSP) 생성을 가능하게 하여 네트워크 성능을 향상시킵니다.
(MPLS Label Distribution Protocol (LDP)) is a protocol that generates, distributes, and takes care of various labels in the MPLS network. | (LDP)는 MPLS 네트워크에서 다양한 라벨을 생성, 배포 및 관리하는 프로토콜입니다.
MPLS can be used for (traffic engineering) by directing traffic along pre-configured paths and controlling the bandwidth of each flow. | MPLS는 미리 구성된 경로를 따라 트래픽을 유도하고 각 흐름의 대역폭을 제어함으로써 (트래픽 엔지니어링)에 사용될 수 있습니다.
HW05A: Software Defined Networks (Answers) |
1.1 SDN |
The concept of SDN is based on decoupling the (data) plane from the (control) plane, allowing network control to be centrally managed. | SDN의 개념은 (데이터) 평면과 (제어) 평면을 분리하여 네트워크 제어를 중앙에서 관리할 수 있게 하는 것에 기초합니다.
In SDN, a central (controller) controls multiple network devices and defines the flow of traffic within the network. | SDN에서는 중앙 (컨트롤러)가 여러 네트워크 장치를 제어하고 네트워크 내의 트래픽 흐름을 정의합니다.
The protocol most commonly associated with SDN for managing network traffic flow rules is (OpenFlow). | 네트워크 트래픽 흐름 규칙을 관리하기 위해 SDN과 가장 일반적으로 관련된 프로토콜은 (OpenFlow)입니다.
The three main layers of an SDN architecture are the (application) layer, the (control) layer, and the (data) layer. | SDN 아키텍처의 세 가지 주요 계층은 (애플리케이션) 계층, (제어) 계층, (데이터) 계층입니다.
SDN uses a (northbound) interface between the control layer and the application layer to allow communication and policy enforcement. | SDN은 통신 및 정책 시행을 허용하기 위해 제어 계층과 애플리케이션 계층 사이에 (노스바운드) 인터페이스를 사용합니다.
The (southbound) interface connects the control plane to network devices, enabling the controller to manage the data plane. | (사우스바운드) 인터페이스는 제어 평면을 네트워크 장치에 연결하여 컨트롤러가 데이터 평면을 관리할 수 있게 합니다.
An SDN controller can use (telemetry or monitoring tools) to gather and report statistics about network performance. | SDN 컨트롤러는 (원격 측정 또는 모니터링 도구)를 사용하여 네트워크 성능에 대한 통계를 수집하고 보고할 수 있습니다.
(Open vSwitch or OVS) is a virtual switch commonly used in SDN to handle traffic between virtual machines. | (Open vSwitch 또는 OVS)는 가상 머신 간의 트래픽을 처리하기 위해 SDN에서 일반적으로 사용되는 가상 스위치입니다.
(NETCONF) protocol is used for configuration management in SDN. | (NETCONF) 프로토콜은 SDN에서 구성 관리에 사용됩니다.
1.2 OpenFlow |
The (OpenFlow) protocol is a standard communication interface that allows an SDN controller to interact directly with the forwarding plane of network devices. | (OpenFlow) 프로토콜은 SDN 컨트롤러가 네트워크 장치의 전달 평면과 직접 상호 작용할 수 있게 하는 표준 통신 인터페이스입니다.
The organization responsible for OpenFlow standards is the (Open Networking Foundation or ONF). | OpenFlow 표준을 담당하는 조직은 (ONF)입니다.
OpenFlow switches use (flow) tables to determine how to handle packets based on specified flow entries. | OpenFlow 스위치는 지정된 흐름 항목에 따라 패킷을 처리하는 방법을 결정하기 위해 (플로우) 테이블을 사용합니다.
In OpenFlow protocol, the (OUTPUT) action forwards the packet to a specified port. | OpenFlow 프로토콜에서 (OUTPUT) 동작은 패킷을 지정된 포트로 전달합니다.
The (group) table is used to implement flooding, multicast, and broadcast forwarding. | (그룹) 테이블은 플러딩, 멀티캐스트 및 브로드캐스트 전달을 구현하는 데 사용됩니다.
1.3 Virtual Network Functions |
(Network virtualization) allows multiple virtual networks to run on the same physical infrastructure. | (네트워크 가상화)를 통해 동일한 물리적 인프라에서 여러 가상 네트워크를 실행할 수 있습니다.
In SDN, (VNFs or Virtual Network Functions) are virtualized versions of network functions such as firewalls, load balancers, and routers. | SDN에서 (VNF)는 방화벽, 로드 밸런서 및 라우터와 같은 네트워크 기능의 가상화된 버전입니다.
The (Open Networking Foundation or ONF) foundation is an organization that promotes the development and adoption of SDN and NFV technologies. | (ONF) 재단은 SDN 및 NFV 기술의 개발과 채택을 촉진하는 조직입니다.
(vSwitch/Virtual Switch) is a software implementation of a physical switch. | (vSwitch/가상 스위치)는 물리적 스위치의 소프트웨어 구현입니다.
(VPN or Virtual Private Network) is a network virtualization technology that enables private, secure connections over a shared or public network. | (VPN)은 공유 또는 공용 네트워크를 통해 비공개 보안 연결을 가능하게 하는 네트워크 가상화 기술입니다.
(VLAN or Virtual Local Area Network) isolated network segments within a single physical network, often used for security or multi-tenant environments. | (VLAN)은 단일 물리적 네트워크 내의 격리된 네트워크 세그먼트로, 종종 보안 또는 멀티 테넌트 환경에 사용됩니다.
HW04A: Routing & IP (Answers) |
1.1 Routing |
Routers operate at the (network) layer of the OSI model. | 라우터는 OSI 모델의 (네트워크) 계층에서 작동합니다.
The device that connects different networks and routes traffic between them is called a(n) (router). | 서로 다른 네트워크를 연결하고 그 사이에서 트래픽을 라우팅하는 장치를 (라우터)라고 합니다.
A router typically has two or more (network) interfaces, each connected to a different network. | 라우터는 일반적으로 두 개 이상의 (네트워크) 인터페이스를 가지며, 각 인터페이스는 다른 네트워크에 연결됩니다.
Routers use the (routing) protocol to exchange routing information between them. | 라우터는 라우팅 정보를 교환하기 위해 (라우팅) 프로토콜을 사용합니다.
Routers can also be configured to act as a (firewall) which blocks or allows traffic based on certain security rules. | 라우터는 특정 보안 규칙에 따라 트래픽을 차단하거나 허용하는 (방화벽) 역할을 하도록 구성될 수도 있습니다.
A router that connects two networks with different IP address schemes is called a (gateway) router. | 서로 다른 IP 주소 체계를 가진 두 네트워크를 연결하는 라우터를 (게이트웨이) 라우터라고 합니다.
The act of dividing a large network into smaller subnets to improve performance and security is called (subnetting or Network Segmentation). | 성능과 보안을 향상시키기 위해 대규모 네트워크를 더 작은 서브넷으로 나누는 행위를 (서브네팅)이라고 합니다.
A router's interface is typically configured with an IP address and a corresponding (subnet mask) to define the local network's range. | 라우터의 인터페이스는 일반적으로 로컬 네트워크의 범위를 정의하기 위해 IP 주소와 해당 (서브넷 마스크)로 구성됩니다.
The most common intra-AS routing protocol is (RIP (Routing Information Protocol)) which uses the distance-vector method to find the best path. | 가장 일반적인 AS 내부 라우팅 프로토콜은 (RIP)이며, 이는 거리 벡터 방식을 사용하여 최적의 경로를 찾습니다.
The routing protocol that uses a link-state method to find the best path and is commonly used in larger networks is (OSPF (Open Shortest Path First)). | 링크 상태 방식을 사용하여 최적의 경로를 찾고 대규모 네트워크에서 일반적으로 사용되는 라우팅 프로토콜은 (OSPF)입니다.
The routing protocol used to exchange routing information between different autonomous systems (AS) on the internet is (BGP (Border Gateway Protocol)). | 인터넷상의 서로 다른 자율 시스템(AS) 간에 라우팅 정보를 교환하는 데 사용되는 라우팅 프로토콜은 (BGP)입니다.
In RIP, each router sends its entire routing table to its neighbors every (30) seconds. | RIP에서 각 라우터는 전체 라우팅 테이블을 (30)초마다 이웃에게 보냅니다.
The main disadvantage of RIP is that it is limited to a maximum hop count of (15) which can restrict its scalability. | RIP의 주요 단점은 최대 홉 수가 (15)로 제한되어 있어 확장성이 제한될 수 있다는 것입니다.
OSPF uses the concept of a (area) which is a logical grouping of routers that share the same routing information. | OSPF는 동일한 라우팅 정보를 공유하는 라우터의 논리적 그룹인 (영역)의 개념을 사용합니다.
OSPF routers use the (Dijkstra) algorithm to calculate the shortest path to each destination. | OSPF 라우터는 각 목적지까지의 최단 경로를 계산하기 위해 (다익스트라) 알고리즘을 사용합니다.
EIGRP (Enhanced Interior Gateway Routing Protocol) is a hybrid routing protocol that combines the best features of (distance-vector) and (link-state) protocols. | EIGRP는 (거리 벡터) 및 (링크 상태) 프로토콜의 장점을 결합한 하이브리드 라우팅 프로토콜입니다.
1.2 IPv4 |
The length of the IPv4 address is (32) bits. | IPv4 주소의 길이는 (32)비트입니다.
The minimum length of an IPv4 packet header is (20) bytes. | IPv4 패킷 헤더의 최소 길이는 (20)바이트입니다.
The maximum size of an IPv4 packet is (65,535) bytes. | IPv4 패킷의 최대 크기는 (65,535)바이트입니다.
The Maximum Transmission Unit (MTU) value is (1500) bytes. | 최대 전송 단위(MTU) 값은 (1500)바이트입니다.
The four main classes of IPv4 addresses are (A), (B), (C), and (D). | IPv4 주소의 네 가지 주요 클래스는 (A), (B), (C), (D)입니다.
The address range for Class A IPv4 addresses is from (0.0.0.0) to (127.255.255.255). | 클래스 A IPv4 주소의 범위는 (0.0.0.0)에서 (127.255.255.255)까지입니다.
The address range for Class B IPv4 addresses is from (128.0.0.0) to (191.255.255.255). | 클래스 B IPv4 주소의 범위는 (128.0.0.0)에서 (191.255.255.255)까지입니다.
The address range for Class C IPv4 addresses is from (192.0.0.0) to (223.255.255.255). | 클래스 C IPv4 주소의 범위는 (192.0.0.0)에서 (223.255.255.255)까지입니다.
Class D addresses, used for multicast, range from (224.0.0.0) to (239.255.255.255). | 멀티캐스트에 사용되는 클래스 D 주소는 (224.0.0.0)에서 (239.255.255.255)까지입니다.
The address 127.0.0.1 is known as the (loopback) address, which refers to the local machine. | 주소 127.0.0.1은 로컬 머신을 나타내는 (루프백) 주소로 알려져 있습니다.
1.3 IPv6 |
The length of the IPv6 address is (128) bits. | IPv6 주소의 길이는 (128)비트입니다.
The size of an IPv6 header is (40) bytes. | IPv6 헤더의 크기는 (40)바이트입니다.
Write three major categories/types of IPv6 addresses: i. (Unicast), ii. (Multicast), iii. (Anycast). | IPv6 주소의 세 가지 주요 범주/유형은 (유니캐스트), (멀티캐스트), (애니캐스트)입니다.
Write six categories/types of IPv6 unicast addresses: i. (Global Unicast), ii. (Unique Local), iii. (Link-Local), iv. (Site-Local), v. (Unspecified), vi. (Loopback). | IPv6 유니캐스트 주소의 6가지 유형은 (글로벌 유니캐스트), (유니크 로컬), (링크 로컬), (사이트 로컬), (미지정), (루프백)입니다.
An IPv6 (unicast) address is used to identify a single unique interface on a device. | IPv6 (유니캐스트) 주소는 장치의 단일 고유 인터페이스를 식별하는 데 사용됩니다.
IPv6 (multicast) addresses are used to deliver packets to multiple interfaces, typically for group communication within the same subnet. | IPv6 (멀티캐스트) 주소는 일반적으로 동일한 서브넷 내의 그룹 통신을 위해 여러 인터페이스로 패킷을 전달하는 데 사용됩니다.
IPv6 (link-local) addresses are used to communicate with devices within the same local network segment and start with "FE80." | IPv6 (링크 로컬) 주소는 동일한 로컬 네트워크 세그먼트 내의 장치와 통신하는 데 사용되며 "FE80"으로 시작합니다.
The IPv6 (loopback) address is similar to an IPv4 loopback address and is used by a device to send packets to itself. | IPv6 (루프백) 주소는 IPv4 루프백 주소와 유사하며 장치가 자신에게 패킷을 보내는 데 사용됩니다.
IPv6 (unique local) addresses are not assigned to specific interfaces and cannot be routed across the internet. They are reserved for unique, private communications. | IPv6 (유니크 로컬) 주소는 특정 인터페이스에 할당되지 않으며 인터넷을 통해 라우팅할 수 없습니다. 이는 고유한 비공개 통신을 위해 예약되어 있습니다.
An IPv6 (multicast) address starts with "FF" and is intended for delivery to a group of hosts, rather than a single interface. | IPv6 (멀티캐스트) 주소는 "FF"로 시작하며 단일 인터페이스가 아닌 호스트 그룹으로의 전달을 목적으로 합니다.
The IPv6 (link-local) address type enables communication with all devices on a local link, without the need for a router. | IPv6 (링크 로컬) 주소 유형은 라우터 없이 로컬 링크의 모든 장치와 통신할 수 있게 합니다.
An IPv6 address beginning with "2000" through "3FFF" is classified as a (global unicast) address, which is routable on the public internet. | "2000"에서 "3FFF"로 시작하는 IPv6 주소는 공용 인터넷에서 라우팅 가능한 (글로벌 유니캐스트) 주소로 분류됩니다.
The (anycast) address type in IPv6 is used to identify a set of interfaces across different devices, such as all devices on a network segment. | IPv6의 (애니캐스트) 주소 유형은 네트워크 세그먼트의 모든 장치와 같이 서로 다른 장치에 걸친 인터페이스 집합을 식별하는 데 사용됩니다.
IPv6 addresses beginning with "FC00" or "FD00" are considered (unique local) addresses, intended for private, non-routable network use. | "FC00" 또는 "FD00"으로 시작하는 IPv6 주소는 개인용, 비라우팅 네트워크 사용을 목적으로 하는 (유니크 로컬) 주소로 간주됩니다.
The IPv6 address "FF02::1" is a (multicast (all-nodes multicast)) address used to reach all nodes on a local link. | IPv6 주소 "FF02::1"은 로컬 링크의 모든 노드에 도달하는 데 사용되는 (멀티캐스트) 주소입니다.
IPv6 (link-local) addresses provide automatic address configuration and facilitate connectivity within a local network. | IPv6 (링크 로컬) 주소는 자동 주소 구성을 제공하고 로컬 네트워크 내 연결을 용이하게 합니다.
(Link-local) addresses in IPv6 are typically generated automatically, and their scope is restricted to a single link or network segment. | IPv6의 (링크 로컬) 주소는 일반적으로 자동으로 생성되며 범위는 단일 링크 또는 네트워크 세그먼트로 제한됩니다.
The IPv6 (anycast) address type does not exist in IPv4 and allows a single address to represent multiple devices, which can each respond to requests as needed. | IPv6 (애니캐스트) 주소 유형은 IPv4에는 존재하지 않으며, 단일 주소가 여러 장치를 나타내도록 하여 필요에 따라 각 장치가 요청에 응답할 수 있게 합니다.
The standard notation for an IPv6 address is (hexadecimal) notation, using colons to separate blocks. | IPv6 주소의 표준 표기법은 콜론을 사용하여 블록을 구분하는 (16진수) 표기법입니다.
The IPv6 loopback address is (::1). | IPv6 루프백 주소는 (::1)입니다.
An IPv6 address that starts with "FE80" is classified as a (link-local) address. | "FE80"으로 시작하는 IPv6 주소는 (링크 로컬) 주소로 분류됩니다.
(Multicast) is a type of IPv6 address used to deliver a packet to multiple interfaces, typically within a defined group. | (멀티캐스트)는 일반적으로 정의된 그룹 내의 여러 인터페이스로 패킷을 전달하는 데 사용되는 IPv6 주소 유형입니다.
IPv6 does not use (fragmentation) which was used in IPv4 to fragment packets along the network path. | IPv6는 네트워크 경로를 따라 패킷을 조각화하기 위해 IPv4에서 사용되었던 (단편화)를 사용하지 않습니다.
In IPv6, addresses that begin with "FF" are (multicast) addresses. | IPv6에서 "FF"로 시작하는 주소는 (멀티캐스트) 주소입니다.
The IPv6 address type that allows for the automatic configuration of IP addresses is known as (Stateless Address Autoconfiguration (SLAAC)). | IP 주소의 자동 구성을 허용하는 IPv6 주소 유형을 (SLAAC)라고 합니다.
IPv6 has integrated (IPsec) support to improve security, whereas in IPv4, it was optional. | IPv6에는 보안을 강화하기 위해 (IPsec) 지원이 통합되어 있는 반면, IPv4에서는 선택 사항이었습니다.
The IPv6 (unspecified) address (::) is known as the "unspecified" address and is used when a device has not yet been assigned an IP address. | IPv6 (미지정) 주소(::)는 장치에 아직 IP 주소가 할당되지 않았을 때 사용됩니다.
The IPv6 (multicast) address type includes addresses that start with "FF" and is used for sending data to multiple devices as part of a group. | IPv6 (멀티캐스트) 주소 유형에는 "FF"로 시작하는 주소가 포함되며 그룹의 일부인 여러 장치로 데이터를 전송하는 데 사용됩니다.
`,[r,l]=Q.useState("menu"),[c,f]=Q.useState(10),[h,m]=Q.useState([]),[p,v]=Q.useState(0),[g,x]=Q.useState(""),[M,b]=Q.useState(!1),[E,S]=Q.useState(null),[_,C]=Q.useState(0),[N,I]=Q.useState([]),H=Q.useRef(null),[P,B]=Q.useState(null),[Y,L]=Q.useState(0),[R,j]=Q.useState(!1),[$,fe]=Q.useState([]),[pe,ge]=Q.useState(0),[O,F]=Q.useState(!1);Q.useEffect(()=>{const Ae=i.split(`
`);let Fe="General";const vt=[];let it=1;Ae.forEach(_t=>{const G=_t.trim();if(G){if(/^(\d+\.\d+|HW\d+[A-Z]*)/.test(G)){Fe=G.replace("|","").trim();return}if(G.includes("(")&&G.includes(")")){const qe=G.split("|"),ft=qe[0].trim(),Pt=qe[1]?qe[1].trim():"",He=[],zt=[],Ze=/(\([^)]+\))/g;ft.split(Ze).forEach(z=>{if(z.startsWith("(")&&z.endsWith(")")){const A=z.slice(1,-1);He.push({text:A,isAnswer:!0}),zt.push(A)}else z.length>0&&He.push({text:z,isAnswer:!1})}),vt.push({id:it++,category:Fe,originalText:ft,translation:Pt,parts:He,answers:zt})}}}),fe(vt)},[]);const W=Q.useMemo(()=>{if(r!=="sentence"||!$[pe])return[];const Ae=$[pe],Fe=[];return Ae.answers.forEach(vt=>{const it=vt.toUpperCase(),_t=vt.toLowerCase(),G=qe=>{Fe.some(ft=>ft.id===qe.id)||Fe.push(qe)};s.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&G(qe),qe.fullTerm&&_t.includes(qe.fullTerm.toLowerCase())&&G(qe)}),e.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&G(qe),qe.fullTerm&&_t.includes(qe.fullTerm.toLowerCase())&&G(qe)})}),Fe},[r,pe,$]);Q.useEffect(()=>{r==="playing"&&H.current&&H.current.focus()},[p,r]);const ne=Ae=>{let Fe=[];Ae==="all"?Fe=[...s]:Fe=[...s].sort(()=>.5-Math.random()).slice(0,Ae),m(Fe),f(Fe.length),v(0),C(0),I([]),l("playing"),be()},J=()=>{l("flashcard"),L(1),B(k()),j(!1)},U=()=>{l("sentence");const Ae=[...$].sort(()=>.5-Math.random());fe(Ae),ge(0),F(!1)},k=()=>{const Ae=Math.floor(Math.random()*s.length);return s[Ae]},ue=Q.useCallback(()=>{let Ae=k();if(s.length>1)for(;Ae.id===P?.id;)Ae=k();B(Ae),L(Fe=>Fe+1),j(!1)},[P,s]),xe=Q.useCallback(()=>{ge(Ae=>(Ae+1)%$.length),F(!1)},[$.length]);Q.useEffect(()=>{const Ae=Fe=>{Fe.code==="Space"&&(r==="flashcard"?(Fe.preventDefault(),R?ue():j(!0)):r==="sentence"&&(Fe.preventDefault(),O?xe():F(!0)))};return window.addEventListener("keydown",Ae),()=>window.removeEventListener("keydown",Ae)},[r,R,ue,O,xe]);const be=()=>{x(""),b(!1),S(null)},te=Ae=>Ae.toLowerCase().replace(/[\s-]/g,""),de=Ae=>{if(Ae.preventDefault(),E)return;const Fe=h[p];te(g)===te(Fe.fullTerm)?(S("correct"),C(it=>it+1)):(S("incorrect"),I(it=>[...it,{...Fe,userAnswer:g}]))},Ce=()=>{p<h.length-1?(v(Ae=>Ae+1),be()):l("result")};if(r==="menu")return T.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-slate-800",children:T.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-indigo-600",children:[T.jsx(lh,{className:"w-16 h-16 mx-auto text-indigo-600 mb-4"}),T.jsx("h1",{className:"text-3xl font-bold mb-2",children:"네트워크 마스터"}),T.jsx("p",{className:"text-slate-500 mb-8",children:"약어 암기 및 핵심 문장 학습"}),T.jsxs("div",{className:"space-y-3",children:[T.jsxs("button",{onClick:()=>ne(10),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[T.jsx(Kc,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (10문제)"]}),T.jsxs("button",{onClick:()=>ne(20),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[T.jsx(Kc,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (20문제)"]}),T.jsx("button",{onClick:()=>ne("all"),className:"w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200",children:"약어 전체 109문제 도전"}),T.jsxs("div",{className:"pt-4 border-t border-slate-100 mt-2 space-y-2",children:[T.jsxs("button",{onClick:J,className:"w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2",children:[T.jsx(qM,{className:"w-5 h-5"})," 무한 약어 단어장"]}),T.jsxs("button",{onClick:U,className:"w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2",children:[T.jsx(RM,{className:"w-5 h-5"})," 문장 빈칸 채우기"]})]})]})]})});if(r==="result")return T.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-slate-800",children:T.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border-t-4 border-indigo-600",children:[T.jsxs("div",{className:"text-center mb-8",children:[T.jsx(ib,{className:"w-16 h-16 mx-auto text-yellow-500 mb-4"}),T.jsx("h2",{className:"text-3xl font-bold mb-2",children:"결과 리포트"}),T.jsxs("div",{className:"text-5xl font-black text-indigo-600 my-4",children:[_," / ",c]}),T.jsx("p",{className:"text-slate-500",children:_===c?"완벽합니다! 모든 약어를 마스터하셨네요!":"수고하셨습니다. 틀린 문제를 확인해보세요."})]}),N.length>0&&T.jsxs("div",{className:"mb-8",children:[T.jsxs("h3",{className:"font-bold text-lg mb-4 text-red-500 flex items-center gap-2",children:[T.jsx(SM,{className:"w-5 h-5"})," 오답 노트 (",N.length,")"]}),T.jsx("div",{className:"bg-red-50 rounded-xl overflow-hidden border border-red-100 max-h-96 overflow-y-auto",children:N.map((Ae,Fe)=>T.jsxs("div",{className:"p-4 border-b border-red-100 last:border-0 hover:bg-red-100 transition-colors",children:[T.jsxs("div",{className:"flex justify-between items-center mb-1",children:[T.jsx("span",{className:"font-bold text-slate-800 text-lg",children:Ae.acronym}),T.jsxs("span",{className:"text-xs font-mono bg-red-200 text-red-800 px-2 py-1 rounded",children:["오답: ",Ae.userAnswer]})]}),T.jsx("div",{className:"text-indigo-700 font-medium",children:Ae.fullTerm}),T.jsx("div",{className:"text-sm text-slate-500",children:Ae.desc})]},Fe))})]}),T.jsxs("button",{onClick:()=>l("menu"),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg",children:[T.jsx(qv,{className:"w-5 h-5"})," 다시 시작하기"]})]})});if(r==="sentence"){const Ae=$[pe],Fe=W;return T.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[T.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:T.jsx(_1,{className:"w-6 h-6"})}),T.jsxs("div",{className:"w-full max-w-3xl",children:[T.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>O?xe():F(!0),children:[T.jsxs("div",{className:"bg-blue-50 px-6 py-3 flex items-center gap-2 border-b border-blue-100",children:[T.jsx(tb,{className:"w-4 h-4 text-blue-600"}),T.jsx("span",{className:"font-bold text-blue-800 text-sm uppercase tracking-wide",children:Ae?.category}),T.jsxs("span",{className:"ml-auto text-blue-400 text-xs",children:["#",Ae?.id]})]}),T.jsxs("div",{className:"flex-1 p-10 flex flex-col justify-center",children:[T.jsx("div",{className:"text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 mb-6",children:Ae?.parts.map((vt,it)=>T.jsx("span",{className:vt.isAnswer?"font-bold mx-1":"",children:vt.isAnswer?O?T.jsx("span",{className:"text-blue-600 underline decoration-2 underline-offset-4 animate-fade-in",children:vt.text}):T.jsx("span",{className:"bg-slate-200 text-slate-200 rounded px-2 select-none",children:"(           )"}):vt.text},it))}),O&&Ae?.translation&&T.jsxs("div",{className:"p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400 animate-fade-in mb-6",children:[T.jsxs("div",{className:"flex items-center gap-2 text-slate-500 mb-1 font-bold text-xs uppercase",children:[T.jsx(IM,{className:"w-4 h-4"})," 한국어 해석"]}),T.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed break-keep",children:Ae.translation})]}),O&&Fe.length>0&&T.jsxs("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:[T.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2",children:[T.jsx(BM,{className:"w-4 h-4 text-yellow-500"})," 관련 용어 해설"]}),T.jsx("div",{className:"grid gap-3",children:Fe.map(vt=>T.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[T.jsx("span",{className:"font-bold text-blue-700",children:vt.acronym}),T.jsxs("span",{className:"text-xs text-blue-400",children:["(",vt.fullTerm,")"]})]}),T.jsx("p",{className:"text-slate-700 text-sm",children:vt.desc})]},vt.id))})]}),O&&Fe.length===0&&T.jsx("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:T.jsx("p",{className:"text-slate-500 text-sm text-center italic",children:"스페이스바를 눌러 다음 문장으로 넘어갑니다."})})]}),!O&&T.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-center text-slate-400 animate-pulse",children:T.jsxs("span",{className:"flex items-center gap-2 text-sm font-semibold",children:[T.jsx(v1,{className:"w-4 h-4"})," 탭하여 정답 확인"]})}),O&&T.jsx("div",{className:"p-4 bg-blue-500 text-white flex justify-center hover:bg-blue-600 transition-colors",children:T.jsxs("span",{className:"flex items-center gap-2 text-lg font-bold",children:["다음 문장 ",T.jsx(g1,{className:"w-5 h-5"})]})})]}),T.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[T.jsx(x1,{className:"w-4 h-4"}),T.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]})}if(r==="flashcard")return T.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[T.jsxs("div",{className:"absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md font-bold text-emerald-600 flex items-center gap-2",children:[T.jsx(lh,{className:"w-5 h-5"}),T.jsxs("span",{children:["본 단어 수: ",Y]})]}),T.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:T.jsx(_1,{className:"w-6 h-6"})}),T.jsxs("div",{className:"w-full max-w-xl",children:[T.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-emerald-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>R?ue():j(!0),children:[T.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in",children:[T.jsxs("span",{className:"inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6",children:["No. ",P?.id]}),T.jsx("h1",{className:"text-7xl font-black text-slate-800 tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-300",children:P?.acronym}),T.jsx("div",{className:"w-full h-px bg-slate-100 mb-6"}),R?T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-2xl font-bold text-emerald-700 mb-3 animate-fade-in-up",children:P?.fullTerm}),T.jsx("p",{className:"text-slate-500 font-medium text-lg leading-relaxed max-w-md animate-fade-in-up delay-75",children:P?.desc})]}):T.jsxs("div",{className:"flex flex-col items-center py-6 text-slate-300 animate-pulse",children:[T.jsx("div",{className:"bg-slate-100 p-3 rounded-full mb-3",children:T.jsx(v1,{className:"w-8 h-8 text-slate-400"})}),T.jsx("span",{className:"font-bold text-sm",children:"탭하여 정답 확인"})]})]}),T.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100",children:T.jsxs("button",{onClick:Ae=>{Ae.stopPropagation(),ue()},className:"w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 active:scale-95 transform",children:["다음 단어 ",T.jsx(g1,{className:"w-6 h-6"})]})})]}),T.jsxs("div",{className:"mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[T.jsx(x1,{className:"w-4 h-4"}),T.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]});const Ue=h[p];return T.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800",children:T.jsxs("div",{className:"w-full max-w-xl",children:[T.jsxs("div",{className:"mb-6 flex items-center justify-between text-sm font-semibold text-slate-500",children:[T.jsxs("span",{children:["Question ",p+1," / ",c]}),T.jsxs("span",{children:["Score: ",_]})]}),T.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2.5 mb-8",children:T.jsx("div",{className:"bg-indigo-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${(p+1)/c*100}%`}})}),T.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-600",children:[T.jsxs("div",{className:"p-10 text-center bg-slate-50 border-b border-slate-100",children:[T.jsxs("span",{className:"inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4",children:["No. ",Ue.id]}),T.jsx("h1",{className:"text-6xl font-black text-indigo-900 tracking-tighter mb-2",children:Ue.acronym}),T.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name을 입력하세요"})]}),T.jsxs("div",{className:"p-8",children:[E?T.jsxs("div",{className:"text-center animate-fade-in-up",children:[E==="correct"?T.jsxs("div",{className:"mb-6",children:[T.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3",children:T.jsx(xM,{className:"w-8 h-8"})}),T.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-1",children:"정답입니다!"})]}):T.jsxs("div",{className:"mb-6",children:[T.jsx("div",{className:"w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3",children:T.jsx(Yv,{className:"w-8 h-8"})}),T.jsx("h3",{className:"text-2xl font-bold text-red-500 mb-1",children:"오답입니다"}),T.jsxs("p",{className:"text-slate-400 text-sm mb-2",children:["내가 쓴 답: ",g]}),T.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg inline-block w-full",children:T.jsx("p",{className:"text-indigo-800 font-bold text-lg",children:Ue.fullTerm})})]}),T.jsxs("button",{onClick:Ce,className:"w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2",children:["다음 문제 ",T.jsx(Kc,{className:"w-4 h-4"})]})]}):T.jsxs("form",{onSubmit:de,children:[T.jsx("input",{ref:H,type:"text",value:g,onChange:Ae=>x(Ae.target.value),placeholder:"예: Software Defined Networking",className:"w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all mb-4 text-center placeholder:text-slate-300",autoComplete:"off"}),T.jsxs("div",{className:"flex gap-2",children:[T.jsxs("button",{type:"button",onClick:()=>b(!M),className:"flex-1 py-3 px-4 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2",children:[T.jsx(bM,{className:"w-5 h-5"})," 힌트 보기"]}),T.jsx("button",{type:"submit",className:"flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200",children:"정답 확인"})]})]}),(M||E)&&T.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-center",children:[T.jsx("span",{className:"block text-xs font-bold text-yellow-600 mb-1",children:"💡 암기 팁"}),T.jsx("p",{className:"text-slate-700 font-medium",children:Ue.desc})]})]})]}),T.jsx("div",{className:"mt-8 text-center text-slate-400 text-sm",children:"띄어쓰기, 대소문자, 하이픈(-)은 틀려도 정답 처리됩니다."})]})})};const rp="181",xb=0,M1=1,yb=2,Zv=1,Sb=2,ca=3,tr=0,Xn=1,ua=2,pa=0,Cs=1,b1=2,E1=3,T1=4,Mb=5,Rr=100,bb=101,Eb=102,Tb=103,Ab=104,wb=200,Rb=201,Cb=202,Nb=203,ch=204,uh=205,Db=206,Lb=207,Ub=208,Pb=209,Ob=210,Ib=211,zb=212,Bb=213,Fb=214,fh=0,dh=1,hh=2,Ls=3,ph=4,mh=5,gh=6,vh=7,Kv=0,Hb=1,Gb=2,er=0,Vb=1,kb=2,jb=3,Xb=4,Wb=5,qb=6,Yb=7,Qv=300,Us=301,Ps=302,_h=303,xh=304,uu=306,yh=1e3,fa=1001,Sh=1002,ri=1003,Zb=1004,xc=1005,_i=1006,Cd=1007,Nr=1008,va=1009,Jv=1010,$v=1011,Zo=1012,sp=1013,Dr=1014,da=1015,Bs=1016,op=1017,lp=1018,Ko=1020,e_=35902,t_=35899,n_=1021,i_=1022,wi=1023,Qo=1026,Jo=1027,a_=1028,cp=1029,up=1030,fp=1031,dp=1033,Qc=33776,Jc=33777,$c=33778,eu=33779,Mh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,wh=37492,Rh=37496,Ch=37808,Nh=37809,Dh=37810,Lh=37811,Uh=37812,Ph=37813,Oh=37814,Ih=37815,zh=37816,Bh=37817,Fh=37818,Hh=37819,Gh=37820,Vh=37821,kh=36492,jh=36494,Xh=36495,Wh=36283,qh=36284,Yh=36285,Zh=36286,Kb=3200,Qb=3201,Jb=0,$b=1,Ja="",mi="srgb",Os="srgb-linear",iu="linear",Wt="srgb",hs=7680,A1=519,eE=512,tE=513,nE=514,r_=515,iE=516,aE=517,rE=518,sE=519,w1=35044,R1="300 es",Ii=2e3,au=2001;function s_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oE(){const s=ru("canvas");return s.style.display="block",s}const C1={};function N1(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function $o(...s){const e=s.join(" ");e in C1||(C1[e]=!0,ct(...s))}function lE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let D1=1234567;const Ns=Math.PI/180,el=180/Math.PI;function Hs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function hp(s,e){return(s%e+e)%e}function cE(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function uE(s,e,i){return s!==e?(i-s)/(e-s):0}function qo(s,e,i){return(1-i)*s+i*e}function fE(s,e,i,r){return qo(s,e,1-Math.exp(-i*r))}function dE(s,e=1){return e-Math.abs(hp(s,e*2)-e)}function hE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function pE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function mE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gE(s,e){return s+Math.random()*(e-s)}function vE(s){return s*(.5-Math.random())}function _E(s){s!==void 0&&(D1=s);let e=D1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xE(s){return s*Ns}function yE(s){return s*el}function SE(s){return(s&s-1)===0&&s!==0}function ME(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function EE(s,e,i,r,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+r)/2),v=f((e+r)/2),g=c((e-r)/2),x=f((e-r)/2),M=c((r-e)/2),b=f((r-e)/2);switch(l){case"XYX":s.set(h*v,m*g,m*x,h*p);break;case"YZY":s.set(m*x,h*v,m*g,h*p);break;case"ZXZ":s.set(m*g,m*x,h*v,h*p);break;case"XZX":s.set(h*v,m*b,m*M,h*p);break;case"YXY":s.set(m*M,h*v,m*b,h*p);break;case"ZYZ":s.set(m*b,m*M,h*v,h*p);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Rs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const L1={DEG2RAD:Ns,RAD2DEG:el,generateUUID:Hs,clamp:bt,euclideanModulo:hp,mapLinear:cE,inverseLerp:uE,lerp:qo,damp:fE,pingpong:dE,smoothstep:hE,smootherstep:pE,randInt:mE,randFloat:gE,randFloatSpread:vE,seededRandom:_E,degToRad:xE,radToDeg:yE,isPowerOfTwo:SE,ceilPowerOfTwo:ME,floorPowerOfTwo:bE,setQuaternionFromProperEuler:EE,normalize:On,denormalize:Rs};class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],x=c[f+0],M=c[f+1],b=c[f+2],E=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=E;return}if(g!==E||m!==x||p!==M||v!==b){let S=m*x+p*M+v*b+g*E;S<0&&(x=-x,M=-M,b=-b,E=-E,S=-S);let _=1-h;if(S<.9995){const C=Math.acos(S),N=Math.sin(C);_=Math.sin(_*C)/N,h=Math.sin(h*C)/N,m=m*_+x*h,p=p*_+M*h,v=v*_+b*h,g=g*_+E*h}else{m=m*_+x*h,p=p*_+M*h,v=v*_+b*h,g=g*_+E*h;const C=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=C,p*=C,v*=C,g*=C}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],x=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+v*g+m*M-p*x,e[i+1]=m*b+v*x+p*g-h*M,e[i+2]=p*b+v*M+h*x-m*g,e[i+3]=v*b-h*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"YXZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"ZXY":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"ZYX":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"YZX":this._x=x*v*g+p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g-x*M*b;break;case"XZY":this._x=x*v*g-p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g+x*M*b;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+h+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new le,U1=new al;class mt{constructor(e,i,r,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],b=r[8],E=l[0],S=l[3],_=l[6],C=l[1],N=l[4],I=l[7],H=l[2],P=l[5],B=l[8];return c[0]=f*E+h*C+m*H,c[3]=f*S+h*N+m*P,c[6]=f*_+h*I+m*B,c[1]=p*E+v*C+g*H,c[4]=p*S+v*N+g*P,c[7]=p*_+v*I+g*B,c[2]=x*E+M*C+b*H,c[5]=x*S+M*N+b*P,c[8]=x*_+M*I+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,x=h*m-v*c,M=p*c-f*m,b=i*g+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=g*E,e[1]=(l*p-v*r)*E,e[2]=(h*r-l*f)*E,e[3]=x*E,e[4]=(v*i-l*m)*E,e[5]=(l*c-h*i)*E,e[6]=M*E,e[7]=(r*m-p*i)*E,e[8]=(f*i-r*c)*E,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new mt,P1=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O1=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:P1,fromXYZ:O1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:P1,fromXYZ:O1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Lt=TE();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class AE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=ru("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ld(l[f].image)):c.push(Ld(l[f]))}else c=Ld(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?AE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let RE=0;const Ud=new le;class zn extends Fs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=fa,l=fa,c=_i,f=Nr,h=wi,m=va,p=zn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Hs(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Qv;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],b=m[9],E=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,I=(M+1)/2,H=(_+1)/2,P=(v+x)/4,B=(g+E)/4,Y=(b+S)/4;return N>I&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=P/r,c=B/r):I>H?I<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(I),r=P/l,c=Y/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=Y/c),this.set(r,l,c,i),this}let C=Math.sqrt((S-b)*(S-b)+(g-E)*(g-E)+(x-v)*(x-v));return Math.abs(C)<.001&&(C=1),this.x=(S-b)/C,this.y=(g-E)/C,this.z=(x-v)/C,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends CE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class o_ extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NE extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Sc.subVectors(this.max,Ho),ms.subVectors(e.a,Ho),gs.subVectors(e.b,Ho),vs.subVectors(e.c,Ho),Wa.subVectors(gs,ms),qa.subVectors(vs,gs),Sr.subVectors(ms,vs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-Sr.z,Sr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,Sr.z,0,-Sr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-Sr.y,Sr.x,0];return!Pd(i,ms,gs,vs,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Pd(i,ms,gs,vs,Sc))?!1:(Mc.crossVectors(Wa,qa),i=[Mc.x,Mc.y,Mc.z],Pd(i,ms,gs,vs,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new le,new le,new le,new le,new le,new le,new le,new le],Ei=new le,yc=new rl,ms=new le,gs=new le,vs=new le,Wa=new le,qa=new le,Sr=new le,Ho=new le,Sc=new le,Mc=new le,Mr=new le;function Pd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const DE=new rl,Go=new le,Od=new le;class sl{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):DE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Od)),this.expandByPoint(Go.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new le,Id=new le,bc=new le,Ya=new le,zd=new le,Ec=new le,Bd=new le;class mp{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Id.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(Id);const c=e.distanceTo(i)*.5,f=-this.direction.dot(bc),h=Ya.dot(this.direction),m=-Ya.dot(bc),p=Ya.lengthSq(),v=Math.abs(1-f*f);let g,x,M,b;if(v>0)if(g=f*m-h,x=f*h-m,b=c*v,g>=0)if(x>=-b)if(x<=b){const E=1/v;g*=E,x*=E,M=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Id).addScaledVector(bc,x),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,c){zd.subVectors(i,e),Ec.subVectors(r,e),Bd.crossVectors(zd,Ec);let f=this.direction.dot(Bd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ya.subVectors(this.origin,e);const m=h*this.direction.dot(Ec.crossVectors(Ya,Ec));if(m<0)return null;const p=h*this.direction.dot(zd.cross(Ya));if(p<0||m+p>f)return null;const v=-h*Ya.dot(Bd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,h,m,p,v,g,x,M,b,E,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,g,x,M,b,E,S)}set(e,i,r,l,c,f,h,m,p,v,g,x,M,b,E,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=b,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,b=h*v,E=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-E*p,i[9]=-h*m,i[2]=E-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,b=p*v,E=p*g;i[0]=x+E*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=M*h-b,i[6]=E+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,b=p*v,E=p*g;i[0]=x-E*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*v,i[9]=E-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,b=h*v,E=h*g;i[0]=m*v,i[4]=b*p-M,i[8]=x*p+E,i[1]=m*g,i[5]=E*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=h*m,E=h*p;i[0]=m*v,i[4]=E-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+b,i[10]=x-E*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=h*m,E=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+E,i[5]=f*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*v,i[10]=E*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,UE)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(r,ii),Za.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(r,ii)),Za.normalize(),Tc.crossVectors(ii,Za),l[0]=Za.x,l[4]=Tc.x,l[8]=ii.x,l[1]=Za.y,l[5]=Tc.y,l[9]=ii.y,l[2]=Za.z,l[6]=Tc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],b=r[2],E=r[6],S=r[10],_=r[14],C=r[3],N=r[7],I=r[11],H=r[15],P=l[0],B=l[4],Y=l[8],L=l[12],R=l[1],j=l[5],$=l[9],fe=l[13],pe=l[2],ge=l[6],O=l[10],F=l[14],W=l[3],ne=l[7],J=l[11],U=l[15];return c[0]=f*P+h*R+m*pe+p*W,c[4]=f*B+h*j+m*ge+p*ne,c[8]=f*Y+h*$+m*O+p*J,c[12]=f*L+h*fe+m*F+p*U,c[1]=v*P+g*R+x*pe+M*W,c[5]=v*B+g*j+x*ge+M*ne,c[9]=v*Y+g*$+x*O+M*J,c[13]=v*L+g*fe+x*F+M*U,c[2]=b*P+E*R+S*pe+_*W,c[6]=b*B+E*j+S*ge+_*ne,c[10]=b*Y+E*$+S*O+_*J,c[14]=b*L+E*fe+S*F+_*U,c[3]=C*P+N*R+I*pe+H*W,c[7]=C*B+N*j+I*ge+H*ne,c[11]=C*Y+N*$+I*O+H*J,c[15]=C*L+N*fe+I*F+H*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],b=e[3],E=e[7],S=e[11],_=e[15];return b*(+c*m*g-l*p*g-c*h*x+r*p*x+l*h*M-r*m*M)+E*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+S*(+i*p*g-i*h*M-c*f*g+r*f*M+c*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*x+l*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],b=e[12],E=e[13],S=e[14],_=e[15],C=g*S*p-E*x*p+E*m*M-h*S*M-g*m*_+h*x*_,N=b*x*p-v*S*p-b*m*M+f*S*M+v*m*_-f*x*_,I=v*E*p-b*g*p+b*h*M-f*E*M-v*h*_+f*g*_,H=b*g*m-v*E*m-b*h*x+f*E*x+v*h*S-f*g*S,P=i*C+r*N+l*I+c*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return e[0]=C*B,e[1]=(E*x*c-g*S*c-E*l*M+r*S*M+g*l*_-r*x*_)*B,e[2]=(h*S*c-E*m*c+E*l*p-r*S*p-h*l*_+r*m*_)*B,e[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*M-r*m*M)*B,e[4]=N*B,e[5]=(v*S*c-b*x*c+b*l*M-i*S*M-v*l*_+i*x*_)*B,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*_-i*m*_)*B,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*B,e[8]=I*B,e[9]=(b*g*c-v*E*c-b*r*M+i*E*M+v*r*_-i*g*_)*B,e[10]=(f*E*c-b*h*c+b*r*p-i*E*p-f*r*_+i*h*_)*B,e[11]=(v*h*c-f*g*c-v*r*p+i*g*p+f*r*M-i*h*M)*B,e[12]=H*B,e[13]=(v*E*l-b*g*l+b*r*x-i*E*x-v*r*S+i*g*S)*B,e[14]=(b*h*l-f*E*l-b*r*m+i*E*m+f*r*S-i*h*S)*B,e[15]=(f*g*l-v*h*l+v*r*m-i*g*m-f*r*x+i*h*x)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,x=c*p,M=c*v,b=c*g,E=f*v,S=f*g,_=h*g,C=m*p,N=m*v,I=m*g,H=r.x,P=r.y,B=r.z;return l[0]=(1-(E+_))*H,l[1]=(M+I)*H,l[2]=(b-N)*H,l[3]=0,l[4]=(M-I)*P,l[5]=(1-(x+_))*P,l[6]=(S+C)*P,l[7]=0,l[8]=(b+N)*B,l[9]=(S-C)*B,l[10]=(1-(x+E))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const p=1/c,v=1/f,g=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(h===Ii)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===au)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(h===Ii)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===au)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new le,Ti=new ln,LE=new le(0,0,0),UE=new le(1,1,1),Za=new le,Tc=new le,ii=new le,I1=new ln,z1=new al;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return I1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I1,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return z1.setFromEuler(this),this.setFromQuaternion(z1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const B1=new le,xs=new al,ra=new ln,Ac=new le,Vo=new le,OE=new le,IE=new al,F1=new le(1,0,0),H1=new le(0,1,0),G1=new le(0,0,1),V1={type:"added"},zE={type:"removed"},ys={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Bn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new le,i=new _a,r=new al,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new mt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(F1,e)}rotateY(e){return this.rotateOnAxis(H1,e)}rotateZ(e){return this.rotateOnAxis(G1,e)}translateOnAxis(e,i){return B1.copy(e).applyQuaternion(this.quaternion),this.position.add(B1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F1,e)}translateY(e){return this.translateOnAxis(H1,e)}translateZ(e){return this.translateOnAxis(G1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Vo,Ac,this.up):ra.lookAt(Ac,Vo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(ra),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V1),ys.child=e,this.dispatchEvent(ys),ys.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zE),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V1),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,IE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new le(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new le,sa=new le,Hd=new le,oa=new le,Ss=new le,Ms=new le,k1=new le,Gd=new le,Vd=new le,kd=new le,jd=new on,Xd=new on,Wd=new on;class vi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),sa.subVectors(r,i),Hd.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(sa),m=Ai.dot(Hd),p=sa.dot(sa),v=sa.dot(Hd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-h*v)*x,b=(f*v-h*m)*x;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return jd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),jd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,r),Wd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(jd,c.x),f.addScaledVector(Xd,c.y),f.addScaledVector(Wd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),sa.subVectors(e,i),Ai.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ai.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Ms.subVectors(c,r),Gd.subVectors(e,r);const m=Ss.dot(Gd),p=Ms.dot(Gd);if(m<=0&&p<=0)return i.copy(r);Vd.subVectors(e,l);const v=Ss.dot(Vd),g=Ms.dot(Vd);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ss,f);kd.subVectors(e,c);const M=Ss.dot(kd),b=Ms.dot(kd);if(b>=0&&M<=b)return i.copy(c);const E=M*p-m*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Ms,h);const S=v*b-M*g;if(S<=0&&g-v>=0&&M-b>=0)return k1.subVectors(c,l),h=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(k1,h);const _=1/(S+E+x);return f=E*_,h=x*_,i.copy(r).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},wc={h:0,s:0,l:0};function qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Lt.workingColorSpace){if(e=hp(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=qd(f,c,e+1/3),this.g=qd(f,c,e),this.b=qd(f,c,e-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=c_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Lt.workingToColorSpace(Un.copy(this),e),Math.round(bt(Un.r*255,0,255))*65536+Math.round(bt(Un.g*255,0,255))*256+Math.round(bt(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Lt.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(wc);const r=qo(Ka.h,wc.h,i),l=qo(Ka.s,wc.s,i),c=qo(Ka.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ut;Ut.NAMES=c_;let BE=0;class Gs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Cs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ch&&(r.blendSrc=this.blendSrc),this.blendDst!==uh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A1&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class u_ extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new le,Rc=new It;let FE=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w1,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Rs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Rs(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Rs(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Rs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Rs(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w1&&(e.usage=this.usage),e}}class f_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class d_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wn extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let HE=0;const pi=new ln,Yd=new Bn,bs=new le,ai=new rl,ko=new rl,En=new le;class qn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?d_:f_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ai.min,ko.min),ai.expandByPoint(En),En.addVectors(ai.max,ko.max),ai.expandByPoint(En)):(ai.expandByPoint(ko.min),ai.expandByPoint(ko.max))}ai.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(e,p),En.add(bs)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<r.count;Y++)h[Y]=new le,m[Y]=new le;const p=new le,v=new le,g=new le,x=new It,M=new It,b=new It,E=new le,S=new le;function _(Y,L,R){p.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,R),v.sub(p),g.sub(p),M.sub(x),b.sub(x);const j=1/(M.x*b.y-b.x*M.y);isFinite(j)&&(E.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(j),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(j),h[Y].add(E),h[L].add(E),h[R].add(E),m[Y].add(S),m[L].add(S),m[R].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let Y=0,L=C.length;Y<L;++Y){const R=C[Y],j=R.start,$=R.count;for(let fe=j,pe=j+$;fe<pe;fe+=3)_(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const N=new le,I=new le,H=new le,P=new le;function B(Y){H.fromBufferAttribute(l,Y),P.copy(H);const L=h[Y];N.copy(L),N.sub(H.multiplyScalar(H.dot(L))).normalize(),I.crossVectors(P,L);const j=I.dot(m[Y])<0?-1:1;f.setXYZW(Y,N.x,N.y,N.z,j)}for(let Y=0,L=C.length;Y<L;++Y){const R=C[Y],j=R.start,$=R.count;for(let fe=j,pe=j+$;fe<pe;fe+=3)B(e.getX(fe+0)),B(e.getX(fe+1)),B(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new le,c=new le,f=new le,h=new le,m=new le,p=new le,v=new le,g=new le;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),E=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let M=0,b=0;for(let E=0,S=m.length;E<S;E++){h.isInterleavedBufferAttribute?M=m[E]*h.data.stride+h.offset:M=m[E]*v;for(let _=0;_<v;_++)x[b++]=p[M++]}return new Ri(x,v,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j1=new ln,br=new mp,Cc=new sl,X1=new le,Nc=new le,Dc=new le,Lc=new le,Zd=new le,Uc=new le,W1=new le,Pc=new le;class nr extends Bn{constructor(e=new qn,i=new u_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Zd.fromBufferAttribute(g,e),f?Uc.addScaledVector(Zd,v):Uc.addScaledVector(Zd.sub(i),v))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Cc.containsPoint(br.origin)===!1&&(br.intersectSphere(Cc,X1)===null||br.origin.distanceToSquared(X1)>(e.far-e.near)**2))&&(j1.copy(c).invert(),br.copy(e.ray).applyMatrix4(j1),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],_=f[S.materialIndex],C=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let I=C,H=N;I<H;I+=3){const P=h.getX(I),B=h.getX(I+1),Y=h.getX(I+2);l=Oc(this,_,e,r,p,v,g,P,B,Y),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(h.count,M.start+M.count);for(let S=b,_=E;S<_;S+=3){const C=h.getX(S),N=h.getX(S+1),I=h.getX(S+2);l=Oc(this,f,e,r,p,v,g,C,N,I),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],_=f[S.materialIndex],C=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let I=C,H=N;I<H;I+=3){const P=I,B=I+1,Y=I+2;l=Oc(this,_,e,r,p,v,g,P,B,Y),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let S=b,_=E;S<_;S+=3){const C=S,N=S+1,I=S+2;l=Oc(this,f,e,r,p,v,g,C,N,I),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function GE(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===tr,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:s}}function Oc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Nc),s.getVertexPosition(m,Dc),s.getVertexPosition(p,Lc);const v=GE(s,e,i,r,Nc,Dc,Lc,W1);if(v){const g=new le;vi.getBarycoord(W1,Nc,Dc,Lc,g),l&&(v.uv=vi.getInterpolatedAttribute(l,h,m,p,g,new It)),c&&(v.uv1=vi.getInterpolatedAttribute(c,h,m,p,g,new It)),f&&(v.normal=vi.getInterpolatedAttribute(f,h,m,p,g,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};vi.getNormal(Nc,Dc,Lc,x.normal),v.face=x,v.barycoord=g}return v}class Vs extends qn{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(g,2));function b(E,S,_,C,N,I,H,P,B,Y,L){const R=I/B,j=H/Y,$=I/2,fe=H/2,pe=P/2,ge=B+1,O=Y+1;let F=0,W=0;const ne=new le;for(let J=0;J<O;J++){const U=J*j-fe;for(let k=0;k<ge;k++){const ue=k*R-$;ne[E]=ue*C,ne[S]=U*N,ne[_]=pe,p.push(ne.x,ne.y,ne.z),ne[E]=0,ne[S]=0,ne[_]=P>0?1:-1,v.push(ne.x,ne.y,ne.z),g.push(k/B),g.push(1-J/Y),F+=1}}for(let J=0;J<Y;J++)for(let U=0;U<B;U++){const k=x+U+ge*J,ue=x+U+ge*(J+1),xe=x+(U+1)+ge*(J+1),be=x+(U+1)+ge*J;m.push(k,ue,be),m.push(ue,xe,be),W+=6}h.addGroup(M,W,L),M+=W,x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)e[l]=r[l]}return e}function VE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function h_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const kE={clone:Is,merge:In};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xa extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=VE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class p_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new le,q1=new It,Y1=new It;class gi extends p_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,q1,Y1),i.subVectors(Y1,q1)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ns*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class WE extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new gi(Es,Ts,e,i);c.layers=this.layers,this.add(c);const f=new gi(Es,Ts,e,i);f.layers=this.layers,this.add(f);const h=new gi(Es,Ts,e,i);h.layers=this.layers,this.add(h);const m=new gi(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new gi(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class m_ extends zn{constructor(e=[],i=Us,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qE extends Lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new m_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vs(5,5,5),c=new xa({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:pa});c.uniforms.tEquirect.value=i;const f=new nr(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=_i),new WE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Ic extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const S=i.getJointPose(E,r),_=this._getHandJoint(p,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ic;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class gp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(e),this.density=i}clone(){return new gp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ZE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class KE extends zn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ri,v=ri,g,x){super(null,f,h,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new le,QE=new le,JE=new mt;class wr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qd.subVectors(r,i).cross(QE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Qd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||JE.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new sl,$E=new It(.5,.5),zc=new le;class g_{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,f=new wr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],b=c[8],E=c[9],S=c[10],_=c[11],C=c[12],N=c[13],I=c[14],H=c[15];if(l[0].setComponents(p-f,M-v,_-b,H-C).normalize(),l[1].setComponents(p+f,M+v,_+b,H+C).normalize(),l[2].setComponents(p+h,M+g,_+E,H+N).normalize(),l[3].setComponents(p-h,M-g,_-E,H-N).normalize(),r)l[4].setComponents(m,x,S,I).normalize(),l[5].setComponents(p-m,M-x,_-S,H-I).normalize();else if(l[4].setComponents(p-m,M-x,_-S,H-I).normalize(),i===Ii)l[5].setComponents(p+m,M+x,_+S,H+I).normalize();else if(i===au)l[5].setComponents(m,x,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=$E.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kh extends Gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new le,ou=new le,Z1=new ln,jo=new mp,Bc=new sl,Jd=new le,K1=new le;class eT extends Bn{constructor(e=new qn,i=new Kh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new Wn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;Z1.copy(l).invert(),jo.copy(e.ray).applyMatrix4(Z1);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let E=M,S=b-1;E<S;E+=p){const _=v.getX(E),C=v.getX(E+1),N=Fc(this,e,jo,m,_,C,E);N&&i.push(N)}if(this.isLineLoop){const E=v.getX(b-1),S=v.getX(M),_=Fc(this,e,jo,m,E,S,b-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let E=M,S=b-1;E<S;E+=p){const _=Fc(this,e,jo,m,E,E+1,E);_&&i.push(_)}if(this.isLineLoop){const E=Fc(this,e,jo,m,b-1,M,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(su.fromBufferAttribute(h,l),ou.fromBufferAttribute(h,c),i.distanceSqToSegment(su,ou,Jd,K1)>r)return;Jd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Jd);if(!(p<e.near||p>e.far))return{distance:p,point:K1.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Q1=new le,J1=new le;class $1 extends eT{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Q1.fromBufferAttribute(i,l),J1.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Q1.distanceTo(J1);e.setAttribute("lineDistance",new Wn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v_ extends Gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ev=new ln,Qh=new mp,Hc=new sl,Gc=new le;class tT extends Bn{constructor(e=new qn,i=new v_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;ev.copy(l).invert(),Qh.copy(e.ray).applyMatrix4(ev);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=x,E=M;b<E;b++){const S=p.getX(b);Gc.fromBufferAttribute(g,S),tv(Gc,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=x,E=M;b<E;b++)Gc.fromBufferAttribute(g,b),tv(Gc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function tv(s,e,i,r,l,c,f){const h=Qh.distanceSqToPoint(s);if(h<i){const m=new le;Qh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class __ extends zn{constructor(e,i,r=Dr,l,c,f,h=ri,m=ri,p,v=Qo,g=1){if(v!==Qo&&v!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class x_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vp extends qn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],f=[];h(l),p(r),v(),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(c.slice(),3)),this.setAttribute("uv",new Wn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(C){const N=new le,I=new le,H=new le;for(let P=0;P<i.length;P+=3)M(i[P+0],N),M(i[P+1],I),M(i[P+2],H),m(N,I,H,C)}function m(C,N,I,H){const P=H+1,B=[];for(let Y=0;Y<=P;Y++){B[Y]=[];const L=C.clone().lerp(I,Y/P),R=N.clone().lerp(I,Y/P),j=P-Y;for(let $=0;$<=j;$++)$===0&&Y===P?B[Y][$]=L:B[Y][$]=L.clone().lerp(R,$/j)}for(let Y=0;Y<P;Y++)for(let L=0;L<2*(P-Y)-1;L++){const R=Math.floor(L/2);L%2===0?(x(B[Y][R+1]),x(B[Y+1][R]),x(B[Y][R])):(x(B[Y][R+1]),x(B[Y+1][R+1]),x(B[Y+1][R]))}}function p(C){const N=new le;for(let I=0;I<c.length;I+=3)N.x=c[I+0],N.y=c[I+1],N.z=c[I+2],N.normalize().multiplyScalar(C),c[I+0]=N.x,c[I+1]=N.y,c[I+2]=N.z}function v(){const C=new le;for(let N=0;N<c.length;N+=3){C.x=c[N+0],C.y=c[N+1],C.z=c[N+2];const I=S(C)/2/Math.PI+.5,H=_(C)/Math.PI+.5;f.push(I,1-H)}b(),g()}function g(){for(let C=0;C<f.length;C+=6){const N=f[C+0],I=f[C+2],H=f[C+4],P=Math.max(N,I,H),B=Math.min(N,I,H);P>.9&&B<.1&&(N<.2&&(f[C+0]+=1),I<.2&&(f[C+2]+=1),H<.2&&(f[C+4]+=1))}}function x(C){c.push(C.x,C.y,C.z)}function M(C,N){const I=C*3;N.x=e[I+0],N.y=e[I+1],N.z=e[I+2]}function b(){const C=new le,N=new le,I=new le,H=new le,P=new It,B=new It,Y=new It;for(let L=0,R=0;L<c.length;L+=9,R+=6){C.set(c[L+0],c[L+1],c[L+2]),N.set(c[L+3],c[L+4],c[L+5]),I.set(c[L+6],c[L+7],c[L+8]),P.set(f[R+0],f[R+1]),B.set(f[R+2],f[R+3]),Y.set(f[R+4],f[R+5]),H.copy(C).add(N).add(I).divideScalar(3);const j=S(H);E(P,R+0,C,j),E(B,R+2,N,j),E(Y,R+4,I,j)}}function E(C,N,I,H){H<0&&C.x===1&&(f[N]=C.x-1),I.x===0&&I.z===0&&(f[N]=H/2/Math.PI+.5)}function S(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.vertices,e.indices,e.radius,e.details)}}const Vc=new le,kc=new le,$d=new le,jc=new vi;class nT extends qn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Ns*i),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),x={},M=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:E,b:S,c:_}=jc;if(E.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),jc.getNormal($d),g[0]=`${Math.round(E.x*l)},${Math.round(E.y*l)},${Math.round(E.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let C=0;C<3;C++){const N=(C+1)%3,I=g[C],H=g[N],P=jc[v[C]],B=jc[v[N]],Y=`${I}_${H}`,L=`${H}_${I}`;L in x&&x[L]?($d.dot(x[L].normal)<=c&&(M.push(P.x,P.y,P.z),M.push(B.x,B.y,B.z)),x[L]=null):Y in x||(x[Y]={index0:p[C],index1:p[N],normal:$d.clone()})}}for(const b in x)if(x[b]){const{index0:E,index1:S}=x[b];Vc.fromBufferAttribute(h,E),kc.fromBufferAttribute(h,S),M.push(Vc.x,Vc.y,Vc.z),M.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new Wn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _p extends vp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new _p(e.radius,e.detail)}}class fu extends qn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,x=i/m,M=[],b=[],E=[],S=[];for(let _=0;_<v;_++){const C=_*x-f;for(let N=0;N<p;N++){const I=N*g-c;b.push(I,-C,0),E.push(0,0,1),S.push(N/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let C=0;C<h;C++){const N=C+p*_,I=C+p*(_+1),H=C+1+p*(_+1),P=C+1+p*_;M.push(N,I,P),M.push(I,H,P)}this.setIndex(M),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(E,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class iT extends qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],r=new Set,l=new le,c=new le;if(e.index!==null){const f=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const g=m[p],x=g.start,M=g.count;for(let b=x,E=x+M;b<E;b+=3)for(let S=0;S<3;S++){const _=h.getX(b+S),C=h.getX(b+(S+1)%3);l.fromBufferAttribute(f,_),c.fromBufferAttribute(f,C),nv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,g=3*h+(p+1)%3;l.fromBufferAttribute(f,v),c.fromBufferAttribute(f,g),nv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Wn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function nv(s,e,i){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class aT extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rT extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sT extends p_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oT extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function iv(s,e,i,r){const l=lT(r);switch(i){case n_:return s*e;case a_:return s*e/l.components*l.byteLength;case cp:return s*e/l.components*l.byteLength;case up:return s*e*2/l.components*l.byteLength;case fp:return s*e*2/l.components*l.byteLength;case i_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case dp:return s*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:case Th:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Ah:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kh:case jh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wh:case qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yh:case Zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lT(s){switch(s){case va:case Jv:return{byteLength:1,components:1};case Zo:case $v:case Bs:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case Dr:case sp:case da:return{byteLength:4,components:1};case e_:case t_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function y_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function cT(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],E=g[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,g[x]=E)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const E=g[M];s.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var uT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_T=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ET=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_A=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:uT,alphahash_pars_fragment:fT,alphamap_fragment:dT,alphamap_pars_fragment:hT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:vT,batching_pars_vertex:_T,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:MT,iridescence_fragment:bT,bumpmap_pars_fragment:ET,clipping_planes_fragment:TT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:wT,clipping_planes_vertex:RT,color_fragment:CT,color_pars_fragment:NT,color_pars_vertex:DT,color_vertex:LT,common:UT,cube_uv_reflection_fragment:PT,defaultnormal_vertex:OT,displacementmap_pars_vertex:IT,displacementmap_vertex:zT,emissivemap_fragment:BT,emissivemap_pars_fragment:FT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:kT,envmap_pars_fragment:jT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:n3,envmap_vertex:WT,fog_vertex:qT,fog_pars_vertex:YT,fog_fragment:ZT,fog_pars_fragment:KT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:e3,lights_pars_begin:t3,lights_toon_fragment:i3,lights_toon_pars_fragment:a3,lights_phong_fragment:r3,lights_phong_pars_fragment:s3,lights_physical_fragment:o3,lights_physical_pars_fragment:l3,lights_fragment_begin:c3,lights_fragment_maps:u3,lights_fragment_end:f3,logdepthbuf_fragment:d3,logdepthbuf_pars_fragment:h3,logdepthbuf_pars_vertex:p3,logdepthbuf_vertex:m3,map_fragment:g3,map_pars_fragment:v3,map_particle_fragment:_3,map_particle_pars_fragment:x3,metalnessmap_fragment:y3,metalnessmap_pars_fragment:S3,morphinstance_vertex:M3,morphcolor_vertex:b3,morphnormal_vertex:E3,morphtarget_pars_vertex:T3,morphtarget_vertex:A3,normal_fragment_begin:w3,normal_fragment_maps:R3,normal_pars_fragment:C3,normal_pars_vertex:N3,normal_vertex:D3,normalmap_pars_fragment:L3,clearcoat_normal_fragment_begin:U3,clearcoat_normal_fragment_maps:P3,clearcoat_pars_fragment:O3,iridescence_pars_fragment:I3,opaque_fragment:z3,packing:B3,premultiplied_alpha_fragment:F3,project_vertex:H3,dithering_fragment:G3,dithering_pars_fragment:V3,roughnessmap_fragment:k3,roughnessmap_pars_fragment:j3,shadowmap_pars_fragment:X3,shadowmap_pars_vertex:W3,shadowmap_vertex:q3,shadowmask_pars_fragment:Y3,skinbase_vertex:Z3,skinning_pars_vertex:K3,skinning_vertex:Q3,skinnormal_vertex:J3,specularmap_fragment:$3,specularmap_pars_fragment:eA,tonemapping_fragment:tA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:aA,uv_pars_fragment:rA,uv_pars_vertex:sA,uv_vertex:oA,worldpos_vertex:lA,background_vert:cA,background_frag:uA,backgroundCube_vert:fA,backgroundCube_frag:dA,cube_vert:hA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distanceRGBA_vert:vA,distanceRGBA_frag:_A,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:bA,meshbasic_frag:EA,meshlambert_vert:TA,meshlambert_frag:AA,meshmatcap_vert:wA,meshmatcap_frag:RA,meshnormal_vert:CA,meshnormal_frag:NA,meshphong_vert:DA,meshphong_frag:LA,meshphysical_vert:UA,meshphysical_frag:PA,meshtoon_vert:OA,meshtoon_frag:IA,points_vert:zA,points_frag:BA,shadow_vert:FA,shadow_frag:HA,sprite_vert:GA,sprite_frag:VA},ze={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ut(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ut(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Xc={r:0,b:0,g:0},Tr=new _a,kA=new ln;function jA(s,e,i,r,l,c,f){const h=new Ut(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function b(N){let I=N.isScene===!0?N.background:null;return I&&I.isTexture&&(I=(N.backgroundBlurriness>0?i:e).get(I)),I}function E(N){let I=!1;const H=b(N);H===null?_(h,m):H&&H.isColor&&(_(H,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,I){const H=b(I);H&&(H.isCubeTexture||H.mapping===uu)?(v===void 0&&(v=new nr(new Vs(1,1,1),new xa({name:"BackgroundCubeMaterial",uniforms:Is(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Tr.copy(I.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Tr)),v.material.toneMapped=Lt.getTransfer(H.colorSpace)!==Wt,(g!==H||x!==H.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=H,x=H.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new nr(new fu(2,2),new xa({name:"BackgroundMaterial",uniforms:Is(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(H.colorSpace)!==Wt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,I){N.getRGB(Xc,h_(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,I,f)}function C(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,I=1){h.set(N),m=I,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:E,addToRenderList:S,dispose:C}}function XA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(R,j,$,fe,pe){let ge=!1;const O=g(fe,$,j);c!==O&&(c=O,p(c.object)),ge=M(R,fe,$,pe),ge&&b(R,fe,$,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,I(R,j,$,fe),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,j,$){const fe=$.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let ge=pe[j.id];ge===void 0&&(ge={},pe[j.id]=ge);let O=ge[fe];return O===void 0&&(O=x(m()),ge[fe]=O),O}function x(R){const j=[],$=[],fe=[];for(let pe=0;pe<i;pe++)j[pe]=0,$[pe]=0,fe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:fe,object:R,attributes:{},index:null}}function M(R,j,$,fe){const pe=c.attributes,ge=j.attributes;let O=0;const F=$.getAttributes();for(const W in F)if(F[W].location>=0){const J=pe[W];let U=ge[W];if(U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),J===void 0||J.attribute!==U||U&&J.data!==U.data)return!0;O++}return c.attributesNum!==O||c.index!==fe}function b(R,j,$,fe){const pe={},ge=j.attributes;let O=0;const F=$.getAttributes();for(const W in F)if(F[W].location>=0){let J=ge[W];J===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const U={};U.attribute=J,J&&J.data&&(U.data=J.data),pe[W]=U,O++}c.attributes=pe,c.attributesNum=O,c.index=fe}function E(){const R=c.newAttributes;for(let j=0,$=R.length;j<$;j++)R[j]=0}function S(R){_(R,0)}function _(R,j){const $=c.newAttributes,fe=c.enabledAttributes,pe=c.attributeDivisors;$[R]=1,fe[R]===0&&(s.enableVertexAttribArray(R),fe[R]=1),pe[R]!==j&&(s.vertexAttribDivisor(R,j),pe[R]=j)}function C(){const R=c.newAttributes,j=c.enabledAttributes;for(let $=0,fe=j.length;$<fe;$++)j[$]!==R[$]&&(s.disableVertexAttribArray($),j[$]=0)}function N(R,j,$,fe,pe,ge,O){O===!0?s.vertexAttribIPointer(R,j,$,pe,ge):s.vertexAttribPointer(R,j,$,fe,pe,ge)}function I(R,j,$,fe){E();const pe=fe.attributes,ge=$.getAttributes(),O=j.defaultAttributeValues;for(const F in ge){const W=ge[F];if(W.location>=0){let ne=pe[F];if(ne===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const J=ne.normalized,U=ne.itemSize,k=e.get(ne);if(k===void 0)continue;const ue=k.buffer,xe=k.type,be=k.bytesPerElement,te=xe===s.INT||xe===s.UNSIGNED_INT||ne.gpuType===sp;if(ne.isInterleavedBufferAttribute){const de=ne.data,Ce=de.stride,Ue=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)_(W.location+Ae,de.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)S(W.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let Ae=0;Ae<W.locationSize;Ae++)N(W.location+Ae,U/W.locationSize,xe,J,Ce*be,(Ue+U/W.locationSize*Ae)*be,te)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)_(W.location+de,ne.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<W.locationSize;de++)S(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let de=0;de<W.locationSize;de++)N(W.location+de,U/W.locationSize,xe,J,U*be,U/W.locationSize*de*be,te)}}else if(O!==void 0){const J=O[F];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(W.location,J);break;case 3:s.vertexAttrib3fv(W.location,J);break;case 4:s.vertexAttrib4fv(W.location,J);break;default:s.vertexAttrib1fv(W.location,J)}}}}C()}function H(){Y();for(const R in r){const j=r[R];for(const $ in j){const fe=j[$];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete j[$]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const j=r[R.id];for(const $ in j){const fe=j[$];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete j[$]}delete r[R.id]}function B(R){for(const j in r){const $=r[j];if($[R.id]===void 0)continue;const fe=$[R.id];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete $[R.id]}}function Y(){L(),f=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:L,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:S,disableUnusedAttributes:C}}function WA(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=v[E]*x[E];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function qA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==wi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Y=B===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==va&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==da&&!Y)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:I,vertexTextures:H,maxSamples:P}}function YA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new wr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||b===null||b.length===0||c&&!S)c?v(null):p();else{const C=c?0:r,N=C*4;let I=_.clippingState||null;m.value=I,I=v(b,x,N,M);for(let H=0;H!==N;++H)I[H]=i[H];_.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,b){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=m.value,b!==!0||S===null){const _=M+E*4,C=x.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,I=M;N!==E;++N,I+=4)f.copy(g[N]).applyMatrix4(C,h),f.normal.toArray(S,I),S[I+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function ZA(s){let e=new WeakMap;function i(f,h){return h===_h?f.mapping=Us:h===xh&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===_h||h===xh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new qE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const $a=4,av=[.125,.215,.35,.446,.526,.582],Cr=20,KA=256,Xo=new sT,rv=new Ut;let eh=null,th=0,nh=0,ih=!1;const QA=new le;class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=QA}=c;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Bs,format:wi,colorSpace:Os,depthBuffer:!1},l=ov(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JA(c)),this._blurMaterial=ew(c,e,i),this._ggxMaterial=$A(c,e,i)}return l}_compileMaterial(e){const i=new nr(new qn,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(rv),g.toneMapping=er,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nr(new Vs,new u_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let _=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,_=!0):(S.color.copy(rv),_=!0);for(let N=0;N<6;N++){const I=N%3;I===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):I===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const H=this._cubeSize;As(l,I*H,N>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(E,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=C}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=.05+p*.95,M=g*x,{_lodMax:b}=this,E=this._sizeLods[r],S=3*E*(r>b-$a?r-b+$a:0),_=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,As(c,S,_,3*E,2*E),l.setRenderTarget(c),l.render(h,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,As(e,S,_,3*E,2*E),l.setRenderTarget(e),l.render(h,Xo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),E=c/b,S=isFinite(c)?1+Math.floor(v*E):Cr;S>Cr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let C=0;for(let B=0;B<Cr;++B){const Y=B/E,L=Math.exp(-Y*Y/2);_.push(L),B===0?C+=L:B<S&&(C+=2*L)}for(let B=0;B<_.length;B++)_[B]=_[B]/C;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-r;const I=this._sizeLods[l],H=3*I*(l>N-$a?l-N+$a:0),P=4*(this._cubeSize-I);As(i,H,P,3*I,2*I),m.setRenderTarget(i),m.render(g,Xo)}}function JA(s){const e=[],i=[],r=[];let l=s;const c=s-$a+1+av.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-$a?m=av[f-s+$a-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,E=3,S=2,_=1,C=new Float32Array(E*b*M),N=new Float32Array(S*b*M),I=new Float32Array(_*b*M);for(let P=0;P<M;P++){const B=P%3*2/3-1,Y=P>2?0:-1,L=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];C.set(L,E*b*P),N.set(x,S*b*P);const R=[P,P,P,P,P,P];I.set(R,_*b*P)}const H=new qn;H.setAttribute("position",new Ri(C,E)),H.setAttribute("uv",new Ri(N,S)),H.setAttribute("faceIndex",new Ri(I,_)),r.push(new nr(H,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function ov(s,e,i){const r=new Lr(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function $A(s,e,i){return new xa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function ew(s,e,i){const r=new Float32Array(Cr),l=new le(0,1,0);return new xa({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function lv(){return new xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function cv(){return new xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tw(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===_h||m===xh,v=m===Us||m===Ps;if(p||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new sv(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new sv(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function nw(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&$o("WebGLRenderer: "+r+" extension not supported."),l}}}function iw(s,e,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let E=0;if(M!==null){const C=M.array;E=M.version;for(let N=0,I=C.length;N<I;N+=3){const H=C[N+0],P=C[N+1],B=C[N+2];x.push(H,P,P,B,B,H)}}else if(b!==void 0){const C=b.array;E=b.version;for(let N=0,I=C.length/3-1;N<I;N+=3){const H=N+0,P=N+1,B=N+2;x.push(H,P,P,B,B,H)}}else return;const S=new(s_(x)?d_:f_)(x,1);S.version=E;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function aw(s,e,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*f,b),i.update(M,r,b))}function v(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,r,1)}function g(x,M,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,E,0,b);let _=0;for(let C=0;C<b;C++)_+=M[C]*E[C];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function rw(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function sw(s,e,i){const r=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let M=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",M)};x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),E===!0&&(I=2),S===!0&&(I=3);let H=h.attributes.position.count*I,P=1;H>e.maxTextureSize&&(P=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*P*4*g),Y=new o_(B,H,P,g);Y.type=da,Y.needsUpdate=!0;const L=I*4;for(let R=0;R<g;R++){const j=_[R],$=C[R],fe=N[R],pe=H*P*4*R;for(let ge=0;ge<j.count;ge++){const O=ge*L;b===!0&&(l.fromBufferAttribute(j,ge),B[pe+O+0]=l.x,B[pe+O+1]=l.y,B[pe+O+2]=l.z,B[pe+O+3]=0),E===!0&&(l.fromBufferAttribute($,ge),B[pe+O+4]=l.x,B[pe+O+5]=l.y,B[pe+O+6]=l.z,B[pe+O+7]=0),S===!0&&(l.fromBufferAttribute(fe,ge),B[pe+O+8]=l.x,B[pe+O+9]=l.y,B[pe+O+10]=l.z,B[pe+O+11]=fe.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new It(H,P)},r.set(h,x),h.addEventListener("dispose",M)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let E=0;E<p.length;E++)M+=p[E];const b=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function ow(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const S_=new zn,uv=new __(1,1),M_=new o_,b_=new NE,E_=new m_,fv=[],dv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function ks(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=fv[l];if(c===void 0&&(c=new Float32Array(l),fv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=dv[e];i===void 0&&(i=new Int32Array(e),dv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function lw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function cw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function uw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function fw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function dw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;mv.set(r),s.uniformMatrix2fv(this.addr,!1,mv),xn(i,r)}}function hw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;pv.set(r),s.uniformMatrix3fv(this.addr,!1,pv),xn(i,r)}}function pw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;hv.set(r),s.uniformMatrix4fv(this.addr,!1,hv),xn(i,r)}}function mw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function gw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function vw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function _w(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function xw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function yw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function Sw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function Mw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function bw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(uv.compareFunction=r_,c=uv):c=S_,i.setTexture2D(e||c,l)}function Ew(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||b_,l)}function Tw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||E_,l)}function Aw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||M_,l)}function ww(s){switch(s){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Aw}}function Rw(s,e){s.uniform1fv(this.addr,e)}function Cw(s,e){const i=ks(e,this.size,2);s.uniform2fv(this.addr,i)}function Nw(s,e){const i=ks(e,this.size,3);s.uniform3fv(this.addr,i)}function Dw(s,e){const i=ks(e,this.size,4);s.uniform4fv(this.addr,i)}function Lw(s,e){const i=ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Uw(s,e){const i=ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Pw(s,e){const i=ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Ow(s,e){s.uniform1iv(this.addr,e)}function Iw(s,e){s.uniform2iv(this.addr,e)}function zw(s,e){s.uniform3iv(this.addr,e)}function Bw(s,e){s.uniform4iv(this.addr,e)}function Fw(s,e){s.uniform1uiv(this.addr,e)}function Hw(s,e){s.uniform2uiv(this.addr,e)}function Gw(s,e){s.uniform3uiv(this.addr,e)}function Vw(s,e){s.uniform4uiv(this.addr,e)}function kw(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||S_,c[f])}function jw(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||b_,c[f])}function Xw(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||E_,c[f])}function Ww(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||M_,c[f])}function qw(s){switch(s){case 5126:return Rw;case 35664:return Cw;case 35665:return Nw;case 35666:return Dw;case 35674:return Lw;case 35675:return Uw;case 35676:return Pw;case 5124:case 35670:return Ow;case 35667:case 35671:return Iw;case 35668:case 35672:return zw;case 35669:case 35673:return Bw;case 5125:return Fw;case 36294:return Hw;case 36295:return Gw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return Ww}}class Yw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ww(i.type)}}class Zw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qw(i.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function gv(s,e){s.seq.push(e),s.map[e.id]=e}function Qw(s,e,i){const r=s.name,l=r.length;for(ah.lastIndex=0;;){const c=ah.exec(r),f=ah.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){gv(i,p===void 0?new Yw(h,s,e):new Zw(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new Kw(h),gv(i,g)),i=g}}}class tu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);Qw(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function vv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Jw=37297;let $w=0;function e4(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const _v=new mt;function t4(s){Lt._getMatrix(_v,Lt.workingColorSpace,s);const e=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+e4(s.getShaderSource(e),h)}else return c}function n4(s,e){const i=t4(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function i4(s,e){let i;switch(e){case Vb:i="Linear";break;case kb:i="Reinhard";break;case jb:i="Cineon";break;case Xb:i="ACESFilmic";break;case qb:i="AgX";break;case Yb:i="Neutral";break;case Wb:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new le;function a4(){Lt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r4(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function s4(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function o4(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Wo(s){return s!==""}function yv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(s){return s.replace(l4,u4)}const c4=new Map;function u4(s,e){let i=gt[e];if(i===void 0){const r=c4.get(e);if(r!==void 0)i=gt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jh(i)}const f4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(s){return s.replace(f4,d4)}function d4(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h4(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function p4(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ps:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m4(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function g4(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kv:e="ENVMAP_BLENDING_MULTIPLY";break;case Hb:e="ENVMAP_BLENDING_MIX";break;case Gb:e="ENVMAP_BLENDING_ADD";break}return e}function v4(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function _4(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=h4(i),p=p4(i),v=m4(i),g=g4(i),x=v4(i),M=r4(i),b=s4(c),E=l.createProgram();let S,_,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(S=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?gt.tonemapping_pars_fragment:"",i.toneMapping!==er?i4("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,n4("linearToOutputTexel",i.outputColorSpace),a4(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Jh(f),f=yv(f,i),f=Sv(f,i),h=Jh(h),h=yv(h,i),h=Sv(h,i),f=Mv(f),h=Mv(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===R1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=C+S+f,I=C+_+h,H=vv(l,l.VERTEX_SHADER,N),P=vv(l,l.FRAGMENT_SHADER,I);l.attachShader(E,H),l.attachShader(E,P),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function B(j){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(E)||"",fe=l.getShaderInfoLog(H)||"",pe=l.getShaderInfoLog(P)||"",ge=$.trim(),O=fe.trim(),F=pe.trim();let W=!0,ne=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,H,P);else{const J=xv(l,H,"vertex"),U=xv(l,P,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ge+`
`+J+`
`+U)}else ge!==""?ct("WebGLProgram: Program Info Log:",ge):(O===""||F==="")&&(ne=!1);ne&&(j.diagnostics={runnable:W,programLog:ge,vertexShader:{log:O,prefix:S},fragmentShader:{log:F,prefix:_}})}l.deleteShader(H),l.deleteShader(P),Y=new tu(l,E),L=o4(l,E)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(E,Jw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$w++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=P,this}let x4=0;class y4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new S4(e),i.set(e,r)),r}}class S4{constructor(e){this.id=x4++,this.code=e,this.usedTimes=0}}function M4(s,e,i,r,l,c,f){const h=new l_,m=new y4,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,R,j,$,fe){const pe=$.fog,ge=fe.geometry,O=L.isMeshStandardMaterial?$.environment:null,F=(L.isMeshStandardMaterial?i:e).get(L.envMap||O),W=F&&F.mapping===uu?F.image.height:null,ne=b[L.type];L.precision!==null&&(M=l.getMaxPrecision(L.precision),M!==L.precision&&ct("WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const J=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,U=J!==void 0?J.length:0;let k=0;ge.morphAttributes.position!==void 0&&(k=1),ge.morphAttributes.normal!==void 0&&(k=2),ge.morphAttributes.color!==void 0&&(k=3);let ue,xe,be,te;if(ne){const Rt=Oi[ne];ue=Rt.vertexShader,xe=Rt.fragmentShader}else ue=L.vertexShader,xe=L.fragmentShader,m.update(L),be=m.getVertexShaderID(L),te=m.getFragmentShaderID(L);const de=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ue=fe.isInstancedMesh===!0,Ae=fe.isBatchedMesh===!0,Fe=!!L.map,vt=!!L.matcap,it=!!F,_t=!!L.aoMap,G=!!L.lightMap,qe=!!L.bumpMap,ft=!!L.normalMap,Pt=!!L.displacementMap,He=!!L.emissiveMap,zt=!!L.metalnessMap,Ze=!!L.roughnessMap,ot=L.anisotropy>0,z=L.clearcoat>0,A=L.dispersion>0,ae=L.iridescence>0,ye=L.sheen>0,Ee=L.transmission>0,me=ot&&!!L.anisotropyMap,Ke=z&&!!L.clearcoatMap,Ie=z&&!!L.clearcoatNormalMap,et=z&&!!L.clearcoatRoughnessMap,Ye=ae&&!!L.iridescenceMap,Te=ae&&!!L.iridescenceThicknessMap,Re=ye&&!!L.sheenColorMap,Qe=ye&&!!L.sheenRoughnessMap,Xe=!!L.specularMap,Be=!!L.specularColorMap,st=!!L.specularIntensityMap,X=Ee&&!!L.transmissionMap,Pe=Ee&&!!L.thicknessMap,De=!!L.gradientMap,Le=!!L.alphaMap,we=L.alphaTest>0,Me=!!L.alphaHash,Ve=!!L.extensions;let lt=er;L.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Vt={shaderID:ne,shaderType:L.type,shaderName:L.name,vertexShader:ue,fragmentShader:xe,defines:L.defines,customVertexShaderID:be,customFragmentShaderID:te,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:Ae,batchingColor:Ae&&fe._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&fe.instanceColor!==null,instancingMorph:Ue&&fe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Os,alphaToCoverage:!!L.alphaToCoverage,map:Fe,matcap:vt,envMap:it,envMapMode:it&&F.mapping,envMapCubeUVHeight:W,aoMap:_t,lightMap:G,bumpMap:qe,normalMap:ft,displacementMap:x&&Pt,emissiveMap:He,normalMapObjectSpace:ft&&L.normalMapType===$b,normalMapTangentSpace:ft&&L.normalMapType===Jb,metalnessMap:zt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:me,clearcoat:z,clearcoatMap:Ke,clearcoatNormalMap:Ie,clearcoatRoughnessMap:et,dispersion:A,iridescence:ae,iridescenceMap:Ye,iridescenceThicknessMap:Te,sheen:ye,sheenColorMap:Re,sheenRoughnessMap:Qe,specularMap:Xe,specularColorMap:Be,specularIntensityMap:st,transmission:Ee,transmissionMap:X,thicknessMap:Pe,gradientMap:De,opaque:L.transparent===!1&&L.blending===Cs&&L.alphaToCoverage===!1,alphaMap:Le,alphaTest:we,alphaHash:Me,combine:L.combine,mapUv:Fe&&E(L.map.channel),aoMapUv:_t&&E(L.aoMap.channel),lightMapUv:G&&E(L.lightMap.channel),bumpMapUv:qe&&E(L.bumpMap.channel),normalMapUv:ft&&E(L.normalMap.channel),displacementMapUv:Pt&&E(L.displacementMap.channel),emissiveMapUv:He&&E(L.emissiveMap.channel),metalnessMapUv:zt&&E(L.metalnessMap.channel),roughnessMapUv:Ze&&E(L.roughnessMap.channel),anisotropyMapUv:me&&E(L.anisotropyMap.channel),clearcoatMapUv:Ke&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(L.sheenRoughnessMap.channel),specularMapUv:Xe&&E(L.specularMap.channel),specularColorMapUv:Be&&E(L.specularColorMap.channel),specularIntensityMapUv:st&&E(L.specularIntensityMap.channel),transmissionMapUv:X&&E(L.transmissionMap.channel),thicknessMapUv:Pe&&E(L.thicknessMap.channel),alphaMapUv:Le&&E(L.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ft||ot),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!ge.attributes.uv&&(Fe||Le),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:fe.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:k,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Fe&&L.map.isVideoTexture===!0&&Lt.getTransfer(L.map.colorSpace)===Wt,decodeVideoTextureEmissive:He&&L.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(L.emissiveMap.colorSpace)===Wt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ua,flipSided:L.side===Xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ve&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&L.extensions.multiDraw===!0||Ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const j in L.defines)R.push(j),R.push(L.defines[j]);return L.isRawShaderMaterial===!1&&(C(R,L),N(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function C(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function N(L,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),L.push(h.mask)}function I(L){const R=b[L.type];let j;if(R){const $=Oi[R];j=kE.clone($.uniforms)}else j=L.uniforms;return j}function H(L,R){let j;for(let $=0,fe=v.length;$<fe;$++){const pe=v[$];if(pe.cacheKey===R){j=pe,++j.usedTimes;break}}return j===void 0&&(j=new _4(s,R,L,c),v.push(j)),j}function P(L){if(--L.usedTimes===0){const R=v.indexOf(L);v[R]=v[v.length-1],v.pop(),L.destroy()}}function B(L){m.remove(L)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:I,acquireProgram:H,releaseProgram:P,releaseShaderCache:B,programs:v,dispose:Y}}function b4(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function E4(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ev(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,b,E,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:E,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=E,_.group=S),e++,_}function h(g,x,M,b,E,S){const _=f(g,x,M,b,E,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,b,E,S){const _=f(g,x,M,b,E,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||E4),r.length>1&&r.sort(x||Ev),l.length>1&&l.sort(x||Ev)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function T4(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Tv,s.set(r,[f])):l>=c.length?(f=new Tv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function A4(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Ut};break;case"SpotLight":i={position:new le,direction:new le,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function w4(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let R4=0;function C4(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function N4(s){const e=new A4,i=w4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,c=new ln,f=new ln;function h(p){let v=0,g=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,b=0,E=0,S=0,_=0,C=0,N=0,I=0,H=0,P=0,B=0;p.sort(C4);for(let L=0,R=p.length;L<R;L++){const j=p[L],$=j.color,fe=j.intensity,pe=j.distance,ge=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=$.r*fe,g+=$.g*fe,x+=$.b*fe;else if(j.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(j.sh.coefficients[O],fe);B++}else if(j.isDirectionalLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const F=j.shadow,W=i.get(j);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=j.shadow.matrix,C++}r.directional[M]=O,M++}else if(j.isSpotLight){const O=e.get(j);O.position.setFromMatrixPosition(j.matrixWorld),O.color.copy($).multiplyScalar(fe),O.distance=pe,O.coneCos=Math.cos(j.angle),O.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),O.decay=j.decay,r.spot[E]=O;const F=j.shadow;if(j.map&&(r.spotLightMap[H]=j.map,H++,F.updateMatrices(j),j.castShadow&&P++),r.spotLightMatrix[E]=F.matrix,j.castShadow){const W=i.get(j);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.spotShadow[E]=W,r.spotShadowMap[E]=ge,I++}E++}else if(j.isRectAreaLight){const O=e.get(j);O.color.copy($).multiplyScalar(fe),O.halfWidth.set(j.width*.5,0,0),O.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=O,S++}else if(j.isPointLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),O.distance=j.distance,O.decay=j.decay,j.castShadow){const F=j.shadow,W=i.get(j);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ge,r.pointShadowMatrix[b]=j.shadow.matrix,N++}r.point[b]=O,b++}else if(j.isHemisphereLight){const O=e.get(j);O.skyColor.copy(j.color).multiplyScalar(fe),O.groundColor.copy(j.groundColor).multiplyScalar(fe),r.hemi[_]=O,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==b||Y.spotLength!==E||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==C||Y.numPointShadows!==N||Y.numSpotShadows!==I||Y.numSpotMaps!==H||Y.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=I+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,Y.directionalLength=M,Y.pointLength=b,Y.spotLength=E,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=C,Y.numPointShadows=N,Y.numSpotShadows=I,Y.numSpotMaps=H,Y.numLightProbes=B,r.version=R4++)}function m(p,v){let g=0,x=0,M=0,b=0,E=0;const S=v.matrixWorldInverse;for(let _=0,C=p.length;_<C;_++){const N=p[_];if(N.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(S),g++}else if(N.isSpotLight){const I=r.spot[M];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const I=r.rectArea[b];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),I.halfWidth.applyMatrix4(f),I.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const I=r.point[x];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const I=r.hemi[E];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(S),E++}}}return{setup:h,setupView:m,state:r}}function Av(s){const e=new N4(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function D4(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Av(s),e.set(l,[h])):c>=f.length?(h=new Av(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const L4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P4(s,e,i){let r=new g_;const l=new It,c=new It,f=new on,h=new aT({depthPacking:Qb}),m=new rT,p={},v=i.maxTextureSize,g={[tr]:Xn,[Xn]:tr,[ua]:ua},x=new xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:L4,fragmentShader:U4}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new qn;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new nr(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let _=this.type;this.render=function(P,B,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),$=s.state;$.setBlending(pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const fe=_!==ca&&this.type===ca,pe=_===ca&&this.type!==ca;for(let ge=0,O=P.length;ge<O;ge++){const F=P[ge],W=F.shadow;if(W===void 0){ct("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ne=W.getFrameExtents();if(l.multiply(ne),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ne.x),l.x=c.x*ne.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ne.y),l.y=c.y*ne.y,W.mapSize.y=c.y)),W.map===null||fe===!0||pe===!0){const U=this.type!==ca?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new Lr(l.x,l.y,U),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const J=W.getViewportCount();for(let U=0;U<J;U++){const k=W.getViewport(U);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),$.viewport(f),W.updateMatrices(F,U),r=W.getFrustum(),I(B,Y,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===ca&&C(W,Y),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(L,R,j)};function C(P,B){const Y=e.update(E);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Lr(l.x,l.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(B,null,Y,x,E,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(B,null,Y,M,E,null)}function N(P,B,Y,L){let R=null;const j=Y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)R=j;else if(R=Y.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=R.uuid,fe=B.uuid;let pe=p[$];pe===void 0&&(pe={},p[$]=pe);let ge=pe[fe];ge===void 0&&(ge=R.clone(),pe[fe]=ge,B.addEventListener("dispose",H)),R=ge}if(R.visible=B.visible,R.wireframe=B.wireframe,L===ca?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=s.properties.get(R);$.light=Y}return R}function I(P,B,Y,L,R){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===ca)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),pe=P.material;if(Array.isArray(pe)){const ge=fe.groups;for(let O=0,F=ge.length;O<F;O++){const W=ge[O],ne=pe[W.materialIndex];if(ne&&ne.visible){const J=N(P,ne,L,R);P.onBeforeShadow(s,P,B,Y,fe,J,W),s.renderBufferDirect(Y,null,fe,J,P,W),P.onAfterShadow(s,P,B,Y,fe,J,W)}}}else if(pe.visible){const ge=N(P,pe,L,R);P.onBeforeShadow(s,P,B,Y,fe,ge,null),s.renderBufferDirect(Y,null,fe,ge,P,null),P.onAfterShadow(s,P,B,Y,fe,ge,null)}}const $=P.children;for(let fe=0,pe=$.length;fe<pe;fe++)I($[fe],B,Y,L,R)}function H(P){P.target.removeEventListener("dispose",H);for(const Y in p){const L=p[Y],R=P.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const O4={[fh]:dh,[hh]:gh,[ph]:vh,[Ls]:mh,[dh]:fh,[gh]:hh,[vh]:ph,[mh]:Ls};function I4(s,e){function i(){let X=!1;const Pe=new on;let De=null;const Le=new on(0,0,0,0);return{setMask:function(we){De!==we&&!X&&(s.colorMask(we,we,we,we),De=we)},setLocked:function(we){X=we},setClear:function(we,Me,Ve,lt,Vt){Vt===!0&&(we*=lt,Me*=lt,Ve*=lt),Pe.set(we,Me,Ve,lt),Le.equals(Pe)===!1&&(s.clearColor(we,Me,Ve,lt),Le.copy(Pe))},reset:function(){X=!1,De=null,Le.set(-1,0,0,0)}}}function r(){let X=!1,Pe=!1,De=null,Le=null,we=null;return{setReversed:function(Me){if(Pe!==Me){const Ve=e.get("EXT_clip_control");Me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const lt=we;we=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(Me){Me?de(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Me){De!==Me&&!X&&(s.depthMask(Me),De=Me)},setFunc:function(Me){if(Pe&&(Me=O4[Me]),Le!==Me){switch(Me){case fh:s.depthFunc(s.NEVER);break;case dh:s.depthFunc(s.ALWAYS);break;case hh:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ph:s.depthFunc(s.EQUAL);break;case mh:s.depthFunc(s.GEQUAL);break;case gh:s.depthFunc(s.GREATER);break;case vh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=Me}},setLocked:function(Me){X=Me},setClear:function(Me){we!==Me&&(Pe&&(Me=1-Me),s.clearDepth(Me),we=Me)},reset:function(){X=!1,De=null,Le=null,we=null,Pe=!1}}}function l(){let X=!1,Pe=null,De=null,Le=null,we=null,Me=null,Ve=null,lt=null,Vt=null;return{setTest:function(Rt){X||(Rt?de(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Rt){Pe!==Rt&&!X&&(s.stencilMask(Rt),Pe=Rt)},setFunc:function(Rt,Nn,Yn){(De!==Rt||Le!==Nn||we!==Yn)&&(s.stencilFunc(Rt,Nn,Yn),De=Rt,Le=Nn,we=Yn)},setOp:function(Rt,Nn,Yn){(Me!==Rt||Ve!==Nn||lt!==Yn)&&(s.stencilOp(Rt,Nn,Yn),Me=Rt,Ve=Nn,lt=Yn)},setLocked:function(Rt){X=Rt},setClear:function(Rt){Vt!==Rt&&(s.clearStencil(Rt),Vt=Rt)},reset:function(){X=!1,Pe=null,De=null,Le=null,we=null,Me=null,Ve=null,lt=null,Vt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],b=null,E=!1,S=null,_=null,C=null,N=null,I=null,H=null,P=null,B=new Ut(0,0,0),Y=0,L=!1,R=null,j=null,$=null,fe=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=F>=2);let ne=null,J={};const U=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),ue=new on().fromArray(U),xe=new on().fromArray(k);function be(X,Pe,De,Le){const we=new Uint8Array(4),Me=s.createTexture();s.bindTexture(X,Me),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<De;Ve++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Me}const te={};te[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(s.DEPTH_TEST),f.setFunc(Ls),qe(!1),ft(M1),de(s.CULL_FACE),_t(pa);function de(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ce(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Ue(X,Pe){return g[X]!==Pe?(s.bindFramebuffer(X,Pe),g[X]=Pe,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ae(X,Pe){let De=M,Le=!1;if(X){De=x.get(Pe),De===void 0&&(De=[],x.set(Pe,De));const we=X.textures;if(De.length!==we.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ve=we.length;Me<Ve;Me++)De[Me]=s.COLOR_ATTACHMENT0+Me;De.length=we.length,Le=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Le=!0);Le&&s.drawBuffers(De)}function Fe(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const vt={[Rr]:s.FUNC_ADD,[bb]:s.FUNC_SUBTRACT,[Eb]:s.FUNC_REVERSE_SUBTRACT};vt[Tb]=s.MIN,vt[Ab]=s.MAX;const it={[wb]:s.ZERO,[Rb]:s.ONE,[Cb]:s.SRC_COLOR,[ch]:s.SRC_ALPHA,[Ob]:s.SRC_ALPHA_SATURATE,[Ub]:s.DST_COLOR,[Db]:s.DST_ALPHA,[Nb]:s.ONE_MINUS_SRC_COLOR,[uh]:s.ONE_MINUS_SRC_ALPHA,[Pb]:s.ONE_MINUS_DST_COLOR,[Lb]:s.ONE_MINUS_DST_ALPHA,[Ib]:s.CONSTANT_COLOR,[zb]:s.ONE_MINUS_CONSTANT_COLOR,[Bb]:s.CONSTANT_ALPHA,[Fb]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(X,Pe,De,Le,we,Me,Ve,lt,Vt,Rt){if(X===pa){E===!0&&(Ce(s.BLEND),E=!1);return}if(E===!1&&(de(s.BLEND),E=!0),X!==Mb){if(X!==S||Rt!==L){if((_!==Rr||I!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,I=Rr),Rt)switch(X){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b1:s.blendFunc(s.ONE,s.ONE);break;case E1:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case T1:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case E1:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T1:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}C=null,N=null,H=null,P=null,B.set(0,0,0),Y=0,S=X,L=Rt}return}we=we||Pe,Me=Me||De,Ve=Ve||Le,(Pe!==_||we!==I)&&(s.blendEquationSeparate(vt[Pe],vt[we]),_=Pe,I=we),(De!==C||Le!==N||Me!==H||Ve!==P)&&(s.blendFuncSeparate(it[De],it[Le],it[Me],it[Ve]),C=De,N=Le,H=Me,P=Ve),(lt.equals(B)===!1||Vt!==Y)&&(s.blendColor(lt.r,lt.g,lt.b,Vt),B.copy(lt),Y=Vt),S=X,L=!1}function G(X,Pe){X.side===ua?Ce(s.CULL_FACE):de(s.CULL_FACE);let De=X.side===Xn;Pe&&(De=!De),qe(De),X.blending===Cs&&X.transparent===!1?_t(pa):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Le=X.stencilWrite;h.setTest(Le),Le&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),He(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function ft(X){X!==xb?(de(s.CULL_FACE),X!==j&&(X===M1?s.cullFace(s.BACK):X===yb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),j=X}function Pt(X){X!==$&&(O&&s.lineWidth(X),$=X)}function He(X,Pe,De){X?(de(s.POLYGON_OFFSET_FILL),(fe!==Pe||pe!==De)&&(s.polygonOffset(Pe,De),fe=Pe,pe=De)):Ce(s.POLYGON_OFFSET_FILL)}function zt(X){X?de(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=s.TEXTURE0+ge-1),ne!==X&&(s.activeTexture(X),ne=X)}function ot(X,Pe,De){De===void 0&&(ne===null?De=s.TEXTURE0+ge-1:De=ne);let Le=J[De];Le===void 0&&(Le={type:void 0,texture:void 0},J[De]=Le),(Le.type!==X||Le.texture!==Pe)&&(ne!==De&&(s.activeTexture(De),ne=De),s.bindTexture(X,Pe||te[X]),Le.type=X,Le.texture=Pe)}function z(){const X=J[ne];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function ye(){try{s.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ie(){try{s.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function et(){try{s.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ye(){try{s.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Te(){try{s.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Re(X){ue.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ue.copy(X))}function Qe(X){xe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),xe.copy(X))}function Xe(X,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let Le=De.get(X);Le===void 0&&(Le=s.getUniformBlockIndex(Pe,X.name),De.set(X,Le))}function Be(X,Pe){const Le=p.get(Pe).get(X);m.get(Pe)!==Le&&(s.uniformBlockBinding(Pe,Le,X.__bindingPointIndex),m.set(Pe,Le))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ne=null,J={},g={},x=new WeakMap,M=[],b=null,E=!1,S=null,_=null,C=null,N=null,I=null,H=null,P=null,B=new Ut(0,0,0),Y=0,L=!1,R=null,j=null,$=null,fe=null,pe=null,ue.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:de,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Fe,setBlending:_t,setMaterial:G,setFlipSided:qe,setCullFace:ft,setLineWidth:Pt,setPolygonOffset:He,setScissorTest:zt,activeTexture:Ze,bindTexture:ot,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:ae,texImage2D:Ye,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Ie,texStorage3D:et,texSubImage2D:ye,texSubImage3D:Ee,compressedTexSubImage2D:me,compressedTexSubImage3D:Ke,scissor:Re,viewport:Qe,reset:st}}function z4(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,A){return M?new OffscreenCanvas(z,A):ru("canvas")}function E(z,A,ae){let ye=1;const Ee=ot(z);if((Ee.width>ae||Ee.height>ae)&&(ye=ae/Math.max(Ee.width,Ee.height)),ye<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const me=Math.floor(ye*Ee.width),Ke=Math.floor(ye*Ee.height);g===void 0&&(g=b(me,Ke));const Ie=A?b(me,Ke):g;return Ie.width=me,Ie.height=Ke,Ie.getContext("2d").drawImage(z,0,0,me,Ke),ct("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+me+"x"+Ke+")."),Ie}else return"data"in z&&ct("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),z;return z}function S(z){return z.generateMipmaps}function _(z){s.generateMipmap(z)}function C(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(z,A,ae,ye,Ee=!1){if(z!==null){if(s[z]!==void 0)return s[z];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let me=A;if(A===s.RED&&(ae===s.FLOAT&&(me=s.R32F),ae===s.HALF_FLOAT&&(me=s.R16F),ae===s.UNSIGNED_BYTE&&(me=s.R8)),A===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.R8UI),ae===s.UNSIGNED_SHORT&&(me=s.R16UI),ae===s.UNSIGNED_INT&&(me=s.R32UI),ae===s.BYTE&&(me=s.R8I),ae===s.SHORT&&(me=s.R16I),ae===s.INT&&(me=s.R32I)),A===s.RG&&(ae===s.FLOAT&&(me=s.RG32F),ae===s.HALF_FLOAT&&(me=s.RG16F),ae===s.UNSIGNED_BYTE&&(me=s.RG8)),A===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RG8UI),ae===s.UNSIGNED_SHORT&&(me=s.RG16UI),ae===s.UNSIGNED_INT&&(me=s.RG32UI),ae===s.BYTE&&(me=s.RG8I),ae===s.SHORT&&(me=s.RG16I),ae===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ae===s.UNSIGNED_INT&&(me=s.RGB32UI),ae===s.BYTE&&(me=s.RGB8I),ae===s.SHORT&&(me=s.RGB16I),ae===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ae===s.UNSIGNED_INT&&(me=s.RGBA32UI),ae===s.BYTE&&(me=s.RGBA8I),ae===s.SHORT&&(me=s.RGBA16I),ae===s.INT&&(me=s.RGBA32I)),A===s.RGB&&(ae===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),A===s.RGBA){const Ke=Ee?iu:Lt.getTransfer(ye);ae===s.FLOAT&&(me=s.RGBA32F),ae===s.HALF_FLOAT&&(me=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(me=Ke===Wt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function I(z,A){let ae;return z?A===null||A===Dr||A===Ko?ae=s.DEPTH24_STENCIL8:A===da?ae=s.DEPTH32F_STENCIL8:A===Zo&&(ae=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Dr||A===Ko?ae=s.DEPTH_COMPONENT24:A===da?ae=s.DEPTH_COMPONENT32F:A===Zo&&(ae=s.DEPTH_COMPONENT16),ae}function H(z,A){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==ri&&z.minFilter!==_i?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function P(z){const A=z.target;A.removeEventListener("dispose",P),Y(A),A.isVideoTexture&&v.delete(A)}function B(z){const A=z.target;A.removeEventListener("dispose",B),R(A)}function Y(z){const A=r.get(z);if(A.__webglInit===void 0)return;const ae=z.source,ye=x.get(ae);if(ye){const Ee=ye[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&L(z),Object.keys(ye).length===0&&x.delete(ae)}r.remove(z)}function L(z){const A=r.get(z);s.deleteTexture(A.__webglTexture);const ae=z.source,ye=x.get(ae);delete ye[A.__cacheKey],f.memory.textures--}function R(z){const A=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Ee=0;Ee<A.__webglFramebuffer[ye].length;Ee++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Ee]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ae=z.textures;for(let ye=0,Ee=ae.length;ye<Ee;ye++){const me=r.get(ae[ye]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(ae[ye])}r.remove(z)}let j=0;function $(){j=0}function fe(){const z=j;return z>=l.maxTextures&&ct("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),j+=1,z}function pe(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function ge(z,A){const ae=r.get(z);if(z.isVideoTexture&&zt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ae.__version!==z.version){const ye=z.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{te(ae,z,A);return}}else z.isExternalTexture&&(ae.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+A)}function O(z,A){const ae=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){te(ae,z,A);return}else z.isExternalTexture&&(ae.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+A)}function F(z,A){const ae=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){te(ae,z,A);return}i.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+A)}function W(z,A){const ae=r.get(z);if(z.version>0&&ae.__version!==z.version){de(ae,z,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+A)}const ne={[yh]:s.REPEAT,[fa]:s.CLAMP_TO_EDGE,[Sh]:s.MIRRORED_REPEAT},J={[ri]:s.NEAREST,[Zb]:s.NEAREST_MIPMAP_NEAREST,[xc]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Cd]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},U={[eE]:s.NEVER,[sE]:s.ALWAYS,[tE]:s.LESS,[r_]:s.LEQUAL,[nE]:s.EQUAL,[rE]:s.GEQUAL,[iE]:s.GREATER,[aE]:s.NOTEQUAL};function k(z,A){if(A.type===da&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===_i||A.magFilter===Cd||A.magFilter===xc||A.magFilter===Nr||A.minFilter===_i||A.minFilter===Cd||A.minFilter===xc||A.minFilter===Nr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ne[A.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ne[A.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ne[A.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,J[A.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==xc&&A.minFilter!==Nr||A.type===da&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ue(z,A){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",P));const ye=A.source;let Ee=x.get(ye);Ee===void 0&&(Ee={},x.set(ye,Ee));const me=pe(A);if(me!==z.__cacheKey){Ee[me]===void 0&&(Ee[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),Ee[me].usedTimes++;const Ke=Ee[z.__cacheKey];Ke!==void 0&&(Ee[z.__cacheKey].usedTimes--,Ke.usedTimes===0&&L(A)),z.__cacheKey=me,z.__webglTexture=Ee[me].texture}return ae}function xe(z,A,ae){return Math.floor(Math.floor(z/ae)/A)}function be(z,A,ae,ye){const me=z.updateRanges;if(me.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ae,ye,A.data);else{me.sort((Te,Re)=>Te.start-Re.start);let Ke=0;for(let Te=1;Te<me.length;Te++){const Re=me[Ke],Qe=me[Te],Xe=Re.start+Re.count,Be=xe(Qe.start,A.width,4),st=xe(Re.start,A.width,4);Qe.start<=Xe+1&&Be===st&&xe(Qe.start+Qe.count-1,A.width,4)===Be?Re.count=Math.max(Re.count,Qe.start+Qe.count-Re.start):(++Ke,me[Ke]=Qe)}me.length=Ke+1;const Ie=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Te=0,Re=me.length;Te<Re;Te++){const Qe=me[Te],Xe=Math.floor(Qe.start/4),Be=Math.ceil(Qe.count/4),st=Xe%A.width,X=Math.floor(Xe/A.width),Pe=Be,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,st,X,Pe,De,ae,ye,A.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function te(z,A,ae){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const Ee=ue(z,A),me=A.source;i.bindTexture(ye,z.__webglTexture,s.TEXTURE0+ae);const Ke=r.get(me);if(me.version!==Ke.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ae);const Ie=Lt.getPrimaries(Lt.workingColorSpace),et=A.colorSpace===Ja?null:Lt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Ja||Ie===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Te=E(A.image,!1,l.maxTextureSize);Te=Ze(A,Te);const Re=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Xe=N(A.internalFormat,Re,Qe,A.colorSpace,A.isVideoTexture);k(ye,A);let Be;const st=A.mipmaps,X=A.isVideoTexture!==!0,Pe=Ke.__version===void 0||Ee===!0,De=me.dataReady,Le=H(A,Te);if(A.isDepthTexture)Xe=I(A.format===Jo,A.type),Pe&&(X?i.texStorage2D(s.TEXTURE_2D,1,Xe,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,null));else if(A.isDataTexture)if(st.length>0){X&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,Me=st.length;we<Me;we++)Be=st[we],X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data);A.generateMipmaps=!1}else X?(Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height),De&&be(A,Te,Re,Qe)):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){X&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,st[0].width,st[0].height,Te.depth);for(let we=0,Me=st.length;we<Me;we++)if(Be=st[we],A.format!==wi)if(Re!==null)if(X){if(De)if(A.layerUpdates.size>0){const Ve=iv(Be.width,Be.height,A.format,A.type);for(const lt of A.layerUpdates){const Vt=Be.data.subarray(lt*Ve/Be.data.BYTES_PER_ELEMENT,(lt+1)*Ve/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,lt,Be.width,Be.height,1,Re,Vt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Qe,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Re,Qe,Be.data)}else{X&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,Me=st.length;we<Me;we++)Be=st[we],A.format!==wi?Re!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data)}else if(A.isDataArrayTexture)if(X){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,Te.width,Te.height,Te.depth),De)if(A.layerUpdates.size>0){const we=iv(Te.width,Te.height,A.format,A.type);for(const Me of A.layerUpdates){const Ve=Te.data.subarray(Me*we/Te.data.BYTES_PER_ELEMENT,(Me+1)*we/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Te.width,Te.height,1,Re,Qe,Ve)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isData3DTexture)X?(Pe&&i.texStorage3D(s.TEXTURE_3D,Le,Xe,Te.width,Te.height,Te.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isFramebufferTexture){if(Pe)if(X)i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height);else{let we=Te.width,Me=Te.height;for(let Ve=0;Ve<Le;Ve++)i.texImage2D(s.TEXTURE_2D,Ve,Xe,we,Me,0,Re,Qe,null),we>>=1,Me>>=1}}else if(st.length>0){if(X&&Pe){const we=ot(st[0]);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}for(let we=0,Me=st.length;we<Me;we++)Be=st[we],X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Re,Qe,Be):i.texImage2D(s.TEXTURE_2D,we,Xe,Re,Qe,Be);A.generateMipmaps=!1}else if(X){if(Pe){const we=ot(Te);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Qe,Te)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Re,Qe,Te);S(A)&&_(ye),Ke.__version=me.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function de(z,A,ae){if(A.image.length!==6)return;const ye=ue(z,A),Ee=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+ae);const me=r.get(Ee);if(Ee.version!==me.__version||ye===!0){i.activeTexture(s.TEXTURE0+ae);const Ke=Lt.getPrimaries(Lt.workingColorSpace),Ie=A.colorSpace===Ja?null:Lt.getPrimaries(A.colorSpace),et=A.colorSpace===Ja||Ke===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Me=0;Me<6;Me++)!Ye&&!Te?Re[Me]=E(A.image[Me],!0,l.maxCubemapSize):Re[Me]=Te?A.image[Me].image:A.image[Me],Re[Me]=Ze(A,Re[Me]);const Qe=Re[0],Xe=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),st=N(A.internalFormat,Xe,Be,A.colorSpace),X=A.isVideoTexture!==!0,Pe=me.__version===void 0||ye===!0,De=Ee.dataReady;let Le=H(A,Qe);k(s.TEXTURE_CUBE_MAP,A);let we;if(Ye){X&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,Qe.width,Qe.height);for(let Me=0;Me<6;Me++){we=Re[Me].mipmaps;for(let Ve=0;Ve<we.length;Ve++){const lt=we[Ve];A.format!==wi?Xe!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,lt.width,lt.height,Xe,lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,st,lt.width,lt.height,0,lt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,lt.width,lt.height,Xe,Be,lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,st,lt.width,lt.height,0,Xe,Be,lt.data)}}}else{if(we=A.mipmaps,X&&Pe){we.length>0&&Le++;const Me=ot(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Te){X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Re[Me].width,Re[Me].height,Xe,Be,Re[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Re[Me].width,Re[Me].height,0,Xe,Be,Re[Me].data);for(let Ve=0;Ve<we.length;Ve++){const Vt=we[Ve].image[Me].image;X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,Vt.width,Vt.height,Xe,Be,Vt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,st,Vt.width,Vt.height,0,Xe,Be,Vt.data)}}else{X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Xe,Be,Re[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Xe,Be,Re[Me]);for(let Ve=0;Ve<we.length;Ve++){const lt=we[Ve];X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,Xe,Be,lt.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,st,Xe,Be,lt.image[Me])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),me.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ce(z,A,ae,ye,Ee,me){const Ke=c.convert(ae.format,ae.colorSpace),Ie=c.convert(ae.type),et=N(ae.internalFormat,Ke,Ie,ae.colorSpace),Ye=r.get(A),Te=r.get(ae);if(Te.__renderTarget=A,!Ye.__hasExternalTextures){const Re=Math.max(1,A.width>>me),Qe=Math.max(1,A.height>>me);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,me,et,Re,Qe,A.depth,0,Ke,Ie,null):i.texImage2D(Ee,me,et,Re,Qe,0,Ke,Ie,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,0,Pt(A)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,me),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(z,A,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,z),A.depthBuffer){const ye=A.depthTexture,Ee=ye&&ye.isDepthTexture?ye.type:null,me=I(A.stencilBuffer,Ee),Ke=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Pt(A);He(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,me,A.width,A.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,z)}else{const ye=A.textures;for(let Ee=0;Ee<ye.length;Ee++){const me=ye[Ee],Ke=c.convert(me.format,me.colorSpace),Ie=c.convert(me.type),et=N(me.internalFormat,Ke,Ie,me.colorSpace),Ye=Pt(A);ae&&He(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,et,A.width,A.height):He(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,et,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,et,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(A.depthTexture);ye.__renderTarget=A,(!ye.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);const Ee=ye.__webglTexture,me=Pt(A);if(A.depthTexture.format===Qo)He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===Jo)He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Fe(z){const A=r.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const ye=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",Ee)};ye.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=ye}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");const ye=z.texture.mipmaps;ye&&ye.length>0?Ae(A.__webglFramebuffer[0],z):Ae(A.__webglFramebuffer,z)}else if(ae){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[ye],z,!1);else{const Ee=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}else{const ye=z.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,z,!1);else{const Ee=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(z,A,ae){const ye=r.get(z);A!==void 0&&Ce(ye.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Fe(z)}function it(z){const A=z.texture,ae=r.get(z),ye=r.get(A);z.addEventListener("dispose",B);const Ee=z.textures,me=z.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,f.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer[Ie]=[];for(let et=0;et<A.mipmaps.length;et++)ae.__webglFramebuffer[Ie][et]=s.createFramebuffer()}else ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=r.get(Ee[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(z.samples>0&&He(z)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const et=Ee[Ie];ae.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const Ye=c.convert(et.format,et.colorSpace),Te=c.convert(et.type),Re=N(et.internalFormat,Ye,Te,et.colorSpace,z.isXRRenderTarget===!0),Qe=Pt(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Re,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(ae.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),k(s.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[Ie][et],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,et);else Ce(ae.__webglFramebuffer[Ie],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=Ee[Ie],Te=r.get(Ye);let Re=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),k(Re,Ye),Ce(ae.__webglFramebuffer,z,Ye,s.COLOR_ATTACHMENT0+Ie,Re,0),S(Ye)&&_(Re)}i.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ie=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ie,ye.__webglTexture),k(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[et],z,A,s.COLOR_ATTACHMENT0,Ie,et);else Ce(ae.__webglFramebuffer,z,A,s.COLOR_ATTACHMENT0,Ie,0);S(A)&&_(Ie),i.unbindTexture()}z.depthBuffer&&Fe(z)}function _t(z){const A=z.textures;for(let ae=0,ye=A.length;ae<ye;ae++){const Ee=A[ae];if(S(Ee)){const me=C(z),Ke=r.get(Ee).__webglTexture;i.bindTexture(me,Ke),_(me),i.unbindTexture()}}}const G=[],qe=[];function ft(z){if(z.samples>0){if(He(z)===!1){const A=z.textures,ae=z.width,ye=z.height;let Ee=s.COLOR_BUFFER_BIT;const me=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(z),Ie=A.length>1;if(Ie)for(let Ye=0;Ye<A.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const et=z.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,ae,ye,0,0,ae,ye,Ee,s.NEAREST),m===!0&&(G.length=0,qe.length=0,G.push(s.COLOR_ATTACHMENT0+Ye),z.depthBuffer&&z.resolveDepthBuffer===!1&&(G.push(me),qe.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<A.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Pt(z){return Math.min(l.maxSamples,z.samples)}function He(z){const A=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function zt(z){const A=f.render.frame;v.get(z)!==A&&(v.set(z,A),z.update())}function Ze(z,A){const ae=z.colorSpace,ye=z.format,Ee=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ae!==Os&&ae!==Ja&&(Lt.getTransfer(ae)===Wt?(ye!==wi||Ee!==va)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",ae)),A}function ot(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=$,this.setTexture2D=ge,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=vt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He}function B4(s,e){function i(r,l=Ja){let c;const f=Lt.getTransfer(l);if(r===va)return s.UNSIGNED_BYTE;if(r===op)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===e_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===t_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jv)return s.BYTE;if(r===$v)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===sp)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===Bs)return s.HALF_FLOAT;if(r===n_)return s.ALPHA;if(r===i_)return s.RGB;if(r===wi)return s.RGBA;if(r===Qo)return s.DEPTH_COMPONENT;if(r===Jo)return s.DEPTH_STENCIL;if(r===a_)return s.RED;if(r===cp)return s.RED_INTEGER;if(r===up)return s.RG;if(r===fp)return s.RG_INTEGER;if(r===dp)return s.RGBA_INTEGER;if(r===Qc||r===Jc||r===$c||r===eu)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===bh||r===Eh||r===Th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ah||r===wh||r===Rh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ah||r===wh)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Rh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Nh||r===Dh||r===Lh||r===Uh||r===Ph||r===Oh||r===Ih||r===zh||r===Bh||r===Fh||r===Hh||r===Gh||r===Vh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ch)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kh||r===jh||r===Xh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===kh)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const F4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new x_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new xa({vertexShader:F4,fragmentShader:H4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new nr(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V4 extends Fs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,b=null;const E=typeof XRWebGLBinding<"u",S=new G4,_={},C=i.getContextAttributes();let N=null,I=null;const H=[],P=[],B=new It;let Y=null;const L=new gi;L.viewport=new on;const R=new gi;R.viewport=new on;const j=[L,R],$=new oT;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=H[te];return de===void 0&&(de=new Kd,H[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=H[te];return de===void 0&&(de=new Kd,H[te]=de),de.getGripSpace()},this.getHand=function(te){let de=H[te];return de===void 0&&(de=new Kd,H[te]=de),de.getHandSpace()};function ge(te){const de=P.indexOf(te.inputSource);if(de===-1)return;const Ce=H[de];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,p||f),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let te=0;te<H.length;te++){const de=P[te];de!==null&&(P[te]=null,H[te].disconnect(de))}fe=null,pe=null,S.reset();for(const te in _)delete _[te];e.setRenderTarget(N),M=null,x=null,g=null,l=null,I=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(B),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ue=null,Ae=null;C.depth&&(Ae=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=C.stencil?Jo:Qo,Ue=C.stencil?Ko:Dr);const Fe={colorFormat:i.RGBA8,depthFormat:Ae,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Fe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Lr(x.textureWidth,x.textureHeight,{format:wi,type:va,depthTexture:new __(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ce={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Lr(M.framebufferWidth,M.framebufferHeight,{format:wi,type:va,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),be.setContext(l),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(te){for(let de=0;de<te.removed.length;de++){const Ce=te.removed[de],Ue=P.indexOf(Ce);Ue>=0&&(P[Ue]=null,H[Ue].disconnect(Ce))}for(let de=0;de<te.added.length;de++){const Ce=te.added[de];let Ue=P.indexOf(Ce);if(Ue===-1){for(let Fe=0;Fe<H.length;Fe++)if(Fe>=P.length){P.push(Ce),Ue=Fe;break}else if(P[Fe]===null){P[Fe]=Ce,Ue=Fe;break}if(Ue===-1)break}const Ae=H[Ue];Ae&&Ae.connect(Ce)}}const W=new le,ne=new le;function J(te,de,Ce){W.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(Ce.matrixWorld);const Ue=W.distanceTo(ne),Ae=de.projectionMatrix.elements,Fe=Ce.projectionMatrix.elements,vt=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],G=(Ae[9]-1)/Ae[5],qe=(Ae[8]-1)/Ae[0],ft=(Fe[8]+1)/Fe[0],Pt=vt*qe,He=vt*ft,zt=Ue/(-qe+ft),Ze=zt*-qe;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(zt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ot=vt+zt,z=it+zt,A=Pt-Ze,ae=He+(Ue-Ze),ye=_t*it/z*ot,Ee=G*it/z*ot;te.projectionMatrix.makePerspective(A,ae,ye,Ee,ot,z),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,Ce=te.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),$.near=R.near=L.near=de,$.far=R.far=L.far=Ce,(fe!==$.near||pe!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),fe=$.near,pe=$.far),$.layers.mask=te.layers.mask|6,L.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Ue=te.parent,Ae=$.cameras;U($,Ue);for(let Fe=0;Fe<Ae.length;Fe++)U(Ae[Fe],Ue);Ae.length===2?J($,L,R):$.projectionMatrix.copy(L.projectionMatrix),k(te,$,Ue)};function k(te,de,Ce){Ce===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=el*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(te){m=te,x!==null&&(x.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(te){return _[te]};let ue=null;function xe(te,de){if(v=de.getViewerPose(p||f),b=de,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Ue=!1;Ce.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let it=0;it<Ce.length;it++){const _t=Ce[it];let G=null;if(M!==null)G=M.getViewport(_t);else{const ft=g.getViewSubImage(x,_t);G=ft.viewport,it===0&&(e.setRenderTargetTextures(I,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(I))}let qe=j[it];qe===void 0&&(qe=new gi,qe.layers.enable(it),qe.viewport=new on,j[it]=qe),qe.matrix.fromArray(_t.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(_t.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(G.x,G.y,G.width,G.height),it===0&&($.matrix.copy(qe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(qe)}const Ae=l.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const it=g.getDepthInformation(Ce[0]);it&&it.isValid&&it.texture&&S.init(it,l.renderState)}if(Ae&&Ae.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<Ce.length;it++){const _t=Ce[it].camera;if(_t){let G=_[_t];G||(G=new x_,_[_t]=G);const qe=g.getCameraImage(_t);G.sourceTexture=qe}}}}for(let Ce=0;Ce<H.length;Ce++){const Ue=P[Ce],Ae=H[Ce];Ue!==null&&Ae!==void 0&&Ae.update(Ue,de,p||f)}ue&&ue(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),b=null}const be=new y_;be.setAnimationLoop(xe),this.setAnimationLoop=function(te){ue=te},this.dispose=function(){}}}const Ar=new _a,k4=new ln;function j4(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,h_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,C,N,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,I)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),E(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,C,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const C=e.get(_),N=C.envMap,I=C.envMapRotation;N&&(S.envMap.value=N,Ar.copy(I),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(k4.makeRotationFromEuler(Ar)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,C,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*C,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,C){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const C=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function X4(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const I=N.program;r.uniformBlockBinding(C,I)}function p(C,N){let I=l[C.id];I===void 0&&(b(C),I=v(C),l[C.id]=I,C.addEventListener("dispose",S));const H=N.program;r.updateUBOMapping(C,H);const P=e.render.frame;c[C.id]!==P&&(x(C),c[C.id]=P)}function v(C){const N=g();C.__bindingPointIndex=N;const I=s.createBuffer(),H=C.__size,P=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,H,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,I),I}function g(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const N=l[C.id],I=C.uniforms,H=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,B=I.length;P<B;P++){const Y=Array.isArray(I[P])?I[P]:[I[P]];for(let L=0,R=Y.length;L<R;L++){const j=Y[L];if(M(j,P,L,H)===!0){const $=j.__offset,fe=Array.isArray(j.value)?j.value:[j.value];let pe=0;for(let ge=0;ge<fe.length;ge++){const O=fe[ge],F=E(O);typeof O=="number"||typeof O=="boolean"?(j.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,$+pe,j.__data)):O.isMatrix3?(j.__data[0]=O.elements[0],j.__data[1]=O.elements[1],j.__data[2]=O.elements[2],j.__data[3]=0,j.__data[4]=O.elements[3],j.__data[5]=O.elements[4],j.__data[6]=O.elements[5],j.__data[7]=0,j.__data[8]=O.elements[6],j.__data[9]=O.elements[7],j.__data[10]=O.elements[8],j.__data[11]=0):(O.toArray(j.__data,pe),pe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,I,H){const P=C.value,B=N+"_"+I;if(H[B]===void 0)return typeof P=="number"||typeof P=="boolean"?H[B]=P:H[B]=P.clone(),!0;{const Y=H[B];if(typeof P=="number"||typeof P=="boolean"){if(Y!==P)return H[B]=P,!0}else if(Y.equals(P)===!1)return Y.copy(P),!0}return!1}function b(C){const N=C.uniforms;let I=0;const H=16;for(let B=0,Y=N.length;B<Y;B++){const L=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,j=L.length;R<j;R++){const $=L[R],fe=Array.isArray($.value)?$.value:[$.value];for(let pe=0,ge=fe.length;pe<ge;pe++){const O=fe[pe],F=E(O),W=I%H,ne=W%F.boundary,J=W+ne;I+=ne,J!==0&&H-J<F.storage&&(I+=H-J),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=I,I+=F.storage}}}const P=I%H;return P>0&&(I+=H-P),C.__size=I,C.__cache={},this}function E(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",C),N}function S(C){const N=C.target;N.removeEventListener("dispose",S);const I=f.indexOf(N.__bindingPointIndex);f.splice(I,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const W4=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function q4(){return la===null&&(la=new KE(W4,32,32,up,Bs),la.minFilter=_i,la.magFilter=_i,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class Y4{constructor(e={}){const{canvas:i=oE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Set([dp,fp,cp]),E=new Set([va,Dr,Zo,Ko,op,lp]),S=new Uint32Array(4),_=new Int32Array(4);let C=null,N=null;const I=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let B=!1;this._outputColorSpace=mi;let Y=0,L=0,R=null,j=-1,$=null;const fe=new on,pe=new on;let ge=null;const O=new Ut(0);let F=0,W=i.width,ne=i.height,J=1,U=null,k=null;const ue=new on(0,0,W,ne),xe=new on(0,0,W,ne);let be=!1;const te=new g_;let de=!1,Ce=!1;const Ue=new ln,Ae=new le,Fe=new on,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function _t(){return R===null?J:1}let G=r;function qe(D,Z){return i.getContext(D,Z)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",Me,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),G===null){const Z="webgl2";if(G=qe(Z,D),G===null)throw qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let ft,Pt,He,zt,Ze,ot,z,A,ae,ye,Ee,me,Ke,Ie,et,Ye,Te,Re,Qe,Xe,Be,st,X,Pe;function De(){ft=new nw(G),ft.init(),st=new B4(G,ft),Pt=new qA(G,ft,e,st),He=new I4(G,ft),Pt.reversedDepthBuffer&&x&&He.buffers.depth.setReversed(!0),zt=new rw(G),Ze=new b4,ot=new z4(G,ft,He,Ze,Pt,st,zt),z=new ZA(P),A=new tw(P),ae=new cT(G),X=new XA(G,ae),ye=new iw(G,ae,zt,X),Ee=new ow(G,ye,ae,zt),Qe=new sw(G,Pt,ot),Ye=new YA(Ze),me=new M4(P,z,A,ft,Pt,X,Ye),Ke=new j4(P,Ze),Ie=new T4,et=new D4(ft),Re=new jA(P,z,A,He,Ee,M,m),Te=new P4(P,Ee,Pt),Pe=new X4(G,zt,Pt,He),Xe=new WA(G,ft,zt),Be=new aw(G,ft,zt),zt.programs=me.programs,P.capabilities=Pt,P.extensions=ft,P.properties=Ze,P.renderLists=Ie,P.shadowMap=Te,P.state=He,P.info=zt}De();const Le=new V4(P,G);this.xr=Le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ft.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ft.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(W,ne,!1))},this.getSize=function(D){return D.set(W,ne)},this.setSize=function(D,Z,ce=!0){if(Le.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,ne=Z,i.width=Math.floor(D*J),i.height=Math.floor(Z*J),ce===!0&&(i.style.width=D+"px",i.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(W*J,ne*J).floor()},this.setDrawingBufferSize=function(D,Z,ce){W=D,ne=Z,J=ce,i.width=Math.floor(D*ce),i.height=Math.floor(Z*ce),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(fe)},this.getViewport=function(D){return D.copy(ue)},this.setViewport=function(D,Z,ce,se){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,Z,ce,se),He.viewport(fe.copy(ue).multiplyScalar(J).round())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,Z,ce,se){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,Z,ce,se),He.scissor(pe.copy(xe).multiplyScalar(J).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){He.setScissorTest(be=D)},this.setOpaqueSort=function(D){U=D},this.setTransparentSort=function(D){k=D},this.getClearColor=function(D){return D.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,ce=!0){let se=0;if(D){let ee=!1;if(R!==null){const Ne=R.texture.format;ee=b.has(Ne)}if(ee){const Ne=R.texture.type,Oe=E.has(Ne),Ge=Re.getClearColor(),ke=Re.getClearAlpha(),nt=Ge.r,rt=Ge.g,Je=Ge.b;Oe?(S[0]=nt,S[1]=rt,S[2]=Je,S[3]=ke,G.clearBufferuiv(G.COLOR,0,S)):(_[0]=nt,_[1]=rt,_[2]=Je,_[3]=ke,G.clearBufferiv(G.COLOR,0,_))}else se|=G.COLOR_BUFFER_BIT}Z&&(se|=G.DEPTH_BUFFER_BIT),ce&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",Me,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),Re.dispose(),Ie.dispose(),et.dispose(),Ze.dispose(),z.dispose(),A.dispose(),Ee.dispose(),X.dispose(),Pe.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",js),Le.removeEventListener("sessionend",Xs),yi.stop()};function we(D){D.preventDefault(),N1("WebGLRenderer: Context Lost."),B=!0}function Me(){N1("WebGLRenderer: Context Restored."),B=!1;const D=zt.autoReset,Z=Te.enabled,ce=Te.autoUpdate,se=Te.needsUpdate,ee=Te.type;De(),zt.autoReset=D,Te.enabled=Z,Te.autoUpdate=ce,Te.needsUpdate=se,Te.type=ee}function Ve(D){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const Z=D.target;Z.removeEventListener("dispose",lt),Vt(Z)}function Vt(D){Rt(D),Ze.remove(D)}function Rt(D){const Z=Ze.get(D).programs;Z!==void 0&&(Z.forEach(function(ce){me.releaseProgram(ce)}),D.isShaderMaterial&&me.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ce,se,ee,Ne){Z===null&&(Z=vt);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ge=pu(D,Z,ce,se,ee);He.setMaterial(se,Oe);let ke=ce.index,nt=1;if(se.wireframe===!0){if(ke=ye.getWireframeAttribute(ce),ke===void 0)return;nt=2}const rt=ce.drawRange,Je=ce.attributes.position;let ht=rt.start*nt,wt=(rt.start+rt.count)*nt;Ne!==null&&(ht=Math.max(ht,Ne.start*nt),wt=Math.min(wt,(Ne.start+Ne.count)*nt)),ke!==null?(ht=Math.max(ht,0),wt=Math.min(wt,ke.count)):Je!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Je.count));const Ct=wt-ht;if(Ct<0||Ct===1/0)return;X.setup(ee,se,Ge,ce,ke);let Et,Bt=Xe;if(ke!==null&&(Et=ae.get(ke),Bt=Be,Bt.setIndex(Et)),ee.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*_t()),Bt.setMode(G.LINES)):Bt.setMode(G.TRIANGLES);else if(ee.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),He.setLineWidth(tt*_t()),ee.isLineSegments?Bt.setMode(G.LINES):ee.isLineLoop?Bt.setMode(G.LINE_LOOP):Bt.setMode(G.LINE_STRIP)}else ee.isPoints?Bt.setMode(G.POINTS):ee.isSprite&&Bt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,qt=ee._multiDrawCounts,Tt=ee._multiDrawCount,yn=ke?ae.get(ke).bytesPerElement:1,Ma=Ze.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<Tt;Zt++)Ma.setValue(G,"_gl_DrawID",Zt),Bt.render(tt[Zt]/yn,qt[Zt])}else if(ee.isInstancedMesh)Bt.renderInstances(ht,Ct,ee.count);else if(ce.isInstancedBufferGeometry){const tt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qt=Math.min(ce.instanceCount,tt);Bt.renderInstances(ht,Ct,qt)}else Bt.render(ht,Ct)};function Nn(D,Z,ce){D.transparent===!0&&D.side===ua&&D.forceSinglePass===!1?(D.side=Xn,D.needsUpdate=!0,mn(D,Z,ce),D.side=tr,D.needsUpdate=!0,mn(D,Z,ce),D.side=ua):mn(D,Z,ce)}this.compile=function(D,Z,ce=null){ce===null&&(ce=D),N=et.get(ce),N.init(Z),H.push(N),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),D!==ce&&D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const se=new Set;return D.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const Ge=Ne[Oe];Nn(Ge,ce,ee),se.add(Ge)}else Nn(Ne,ce,ee),se.add(Ne)}),N=H.pop(),se},this.compileAsync=function(D,Z,ce=null){const se=this.compile(D,Z,ce);return new Promise(ee=>{function Ne(){if(se.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){ee(D);return}setTimeout(Ne,10)}ft.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Yn=null;function ol(D){Yn&&Yn(D)}function js(){yi.stop()}function Xs(){yi.start()}const yi=new y_;yi.setAnimationLoop(ol),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(D){Yn=D,Le.setAnimationLoop(D),D===null?yi.stop():yi.start()},Le.addEventListener("sessionstart",js),Le.addEventListener("sessionend",Xs),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Z),Z=Le.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,Z,R),N=et.get(D,H.length),N.init(Z),H.push(N),Ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),te.setFromProjectionMatrix(Ue,Ii,Z.reversedDepth),Ce=this.localClippingEnabled,de=Ye.init(this.clippingPlanes,Ce),C=Ie.get(D,I.length),C.init(),I.push(C),Le.enabled===!0&&Le.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&ir(Ne,Z,-1/0,P.sortObjects)}ir(D,Z,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(U,k),it=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,it&&Re.addToRenderList(C,D),this.info.render.frame++,de===!0&&Ye.beginShadows();const ce=N.state.shadowsArray;Te.render(ce,D,Z),de===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=C.opaque,ee=C.transmissive;if(N.setupLights(),Z.isArrayCamera){const Ne=Z.cameras;if(ee.length>0)for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++){const ke=Ne[Oe];qs(se,ee,D,ke)}it&&Re.render(D);for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++){const ke=Ne[Oe];Ws(C,D,ke,ke.viewport)}}else ee.length>0&&qs(se,ee,D,Z),it&&Re.render(D),Ws(C,D,Z);R!==null&&L===0&&(ot.updateMultisampleRenderTarget(R),ot.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(P,D,Z),X.resetDefaultState(),j=-1,$=null,H.pop(),H.length>0?(N=H[H.length-1],de===!0&&Ye.setGlobalState(P.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?C=I[I.length-1]:C=null};function ir(D,Z,ce,se){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||te.intersectsSprite(D)){se&&Fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ue);const Oe=Ee.update(D),Ge=D.material;Ge.visible&&C.push(D,Oe,Ge,ce,Fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||te.intersectsObject(D))){const Oe=Ee.update(D),Ge=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Fe.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Fe.copy(Oe.boundingSphere.center)),Fe.applyMatrix4(D.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ge)){const ke=Oe.groups;for(let nt=0,rt=ke.length;nt<rt;nt++){const Je=ke[nt],ht=Ge[Je.materialIndex];ht&&ht.visible&&C.push(D,Oe,ht,ce,Fe.z,Je)}}else Ge.visible&&C.push(D,Oe,Ge,ce,Fe.z,null)}}const Ne=D.children;for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++)ir(Ne[Oe],Z,ce,se)}function Ws(D,Z,ce,se){const{opaque:ee,transmissive:Ne,transparent:Oe}=D;N.setupLightsView(ce),de===!0&&Ye.setGlobalState(P.clippingPlanes,ce),se&&He.viewport(fe.copy(se)),ee.length>0&&Zn(ee,Z,ce),Ne.length>0&&Zn(Ne,Z,ce),Oe.length>0&&Zn(Oe,Z,ce),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function qs(D,Z,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[se.id]===void 0&&(N.state.transmissionRenderTarget[se.id]=new Lr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Bs:va,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ne=N.state.transmissionRenderTarget[se.id],Oe=se.viewport||fe;Ne.setSize(Oe.z*P.transmissionResolutionScale,Oe.w*P.transmissionResolutionScale);const Ge=P.getRenderTarget(),ke=P.getActiveCubeFace(),nt=P.getActiveMipmapLevel();P.setRenderTarget(Ne),P.getClearColor(O),F=P.getClearAlpha(),F<1&&P.setClearColor(16777215,.5),P.clear(),it&&Re.render(ce);const rt=P.toneMapping;P.toneMapping=er;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),de===!0&&Ye.setGlobalState(P.clippingPlanes,se),Zn(D,ce,se),ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let wt=0,Ct=Z.length;wt<Ct;wt++){const Et=Z[wt],{object:Bt,geometry:tt,material:qt,group:Tt}=Et;if(qt.side===ua&&Bt.layers.test(se.layers)){const yn=qt.side;qt.side=Xn,qt.needsUpdate=!0,cn(Bt,ce,se,tt,qt,Tt),qt.side=yn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne))}P.setRenderTarget(Ge,ke,nt),P.setClearColor(O,F),Je!==void 0&&(se.viewport=Je),P.toneMapping=rt}function Zn(D,Z,ce){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Ne=D.length;ee<Ne;ee++){const Oe=D[ee],{object:Ge,geometry:ke,group:nt}=Oe;let rt=Oe.material;rt.allowOverride===!0&&se!==null&&(rt=se),Ge.layers.test(ce.layers)&&cn(Ge,Z,ce,ke,rt,nt)}}function cn(D,Z,ce,se,ee,Ne){D.onBeforeRender(P,Z,ce,se,ee,Ne),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(P,Z,ce,se,D,Ne),ee.transparent===!0&&ee.side===ua&&ee.forceSinglePass===!1?(ee.side=Xn,ee.needsUpdate=!0,P.renderBufferDirect(ce,Z,se,ee,D,Ne),ee.side=tr,ee.needsUpdate=!0,P.renderBufferDirect(ce,Z,se,ee,D,Ne),ee.side=ua):P.renderBufferDirect(ce,Z,se,ee,D,Ne),D.onAfterRender(P,Z,ce,se,ee,Ne)}function mn(D,Z,ce){Z.isScene!==!0&&(Z=vt);const se=Ze.get(D),ee=N.state.lights,Ne=N.state.shadowsArray,Oe=ee.state.version,Ge=me.getParameters(D,ee.state,Ne,Z,ce),ke=me.getProgramCacheKey(Ge);let nt=se.programs;se.environment=D.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(D.isMeshStandardMaterial?A:z).get(D.envMap||se.environment),se.envMapRotation=se.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",lt),nt=new Map,se.programs=nt);let rt=nt.get(ke);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===Oe)return Or(D,Ge),rt}else Ge.uniforms=me.getUniforms(D),D.onBeforeCompile(Ge,P),rt=me.acquireProgram(Ge,ke),nt.set(ke,rt),se.uniforms=Ge.uniforms;const Je=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Or(D,Ge),se.needsLights=ll(D),se.lightsStateVersion=Oe,se.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.directionalShadowMap.value=ee.state.directionalShadowMap,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotShadowMap.value=ee.state.spotShadowMap,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMap.value=ee.state.pointShadowMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function zi(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=tu.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Or(D,Z){const ce=Ze.get(D);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function pu(D,Z,ce,se,ee){Z.isScene!==!0&&(Z=vt),ot.resetTextureUnits();const Ne=Z.fog,Oe=se.isMeshStandardMaterial?Z.environment:null,Ge=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Os,ke=(se.isMeshStandardMaterial?A:z).get(se.envMap||Oe),nt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,rt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!ce.morphAttributes.position,ht=!!ce.morphAttributes.normal,wt=!!ce.morphAttributes.color;let Ct=er;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=P.toneMapping);const Et=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=Et!==void 0?Et.length:0,tt=Ze.get(se),qt=N.state.lights;if(de===!0&&(Ce===!0||D!==$)){const Mn=D===$&&se.id===j;Ye.setState(se,D,Mn)}let Tt=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==Ge||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==ke||se.fog===!0&&tt.fog!==Ne||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==rt||tt.morphTargets!==Je||tt.morphNormals!==ht||tt.morphColors!==wt||tt.toneMapping!==Ct||tt.morphTargetsCount!==Bt)&&(Tt=!0):(Tt=!0,tt.__version=se.version);let yn=tt.currentProgram;Tt===!0&&(yn=mn(se,Z,ee));let Ma=!1,Zt=!1,Bi=!1;const Kt=yn.getUniforms(),Sn=tt.uniforms;if(He.useProgram(yn.program)&&(Ma=!0,Zt=!0,Bi=!0),se.id!==j&&(j=se.id,Zt=!0),Ma||$!==D){He.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Kt.setValue(G,"projectionMatrix",D.projectionMatrix),Kt.setValue(G,"viewMatrix",D.matrixWorldInverse);const Tn=Kt.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Ae.setFromMatrixPosition(D.matrixWorld)),Pt.logarithmicDepthBuffer&&Kt.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Kt.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),$!==D&&($=D,Zt=!0,Bi=!0)}if(ee.isSkinnedMesh){Kt.setOptional(G,ee,"bindMatrix"),Kt.setOptional(G,ee,"bindMatrixInverse");const Mn=ee.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Kt.setValue(G,"boneTexture",Mn.boneTexture,ot))}ee.isBatchedMesh&&(Kt.setOptional(G,ee,"batchingTexture"),Kt.setValue(G,"batchingTexture",ee._matricesTexture,ot),Kt.setOptional(G,ee,"batchingIdTexture"),Kt.setValue(G,"batchingIdTexture",ee._indirectTexture,ot),Kt.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Kt.setValue(G,"batchingColorTexture",ee._colorsTexture,ot));const gn=ce.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Qe.update(ee,ce,yn),(Zt||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Kt.setValue(G,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=ke,Sn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Z.environment!==null&&(Sn.envMapIntensity.value=Z.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=q4()),Zt&&(Kt.setValue(G,"toneMappingExposure",P.toneMappingExposure),tt.needsLights&&mu(Sn,Bi),Ne&&se.fog===!0&&Ke.refreshFogUniforms(Sn,Ne),Ke.refreshMaterialUniforms(Sn,se,J,ne,N.state.transmissionRenderTarget[D.id]),tu.upload(G,zi(tt),Sn,ot)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(tu.upload(G,zi(tt),Sn,ot),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Kt.setValue(G,"center",ee.center),Kt.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Kt.setValue(G,"normalMatrix",ee.normalMatrix),Kt.setValue(G,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Mn=se.uniformsGroups;for(let Tn=0,Ni=Mn.length;Tn<Ni;Tn++){const Fi=Mn[Tn];Pe.update(Fi,yn),Pe.bind(Fi,yn)}}return yn}function mu(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function ll(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,Z,ce){const se=Ze.get(D);se.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ze.get(D.texture).__webglTexture=Z,Ze.get(D.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const ce=Ze.get(D);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const ar=G.createFramebuffer();this.setRenderTarget=function(D,Z=0,ce=0){R=D,Y=Z,L=ce;let se=!0,ee=null,Ne=!1,Oe=!1;if(D){const ke=Ze.get(D);if(ke.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(G.FRAMEBUFFER,null),se=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(D);else if(ke.__hasExternalTextures)ot.rebindTextures(D,Ze.get(D.texture).__webglTexture,Ze.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Je=D.depthTexture;if(ke.__boundDepthTexture!==Je){if(Je!==null&&Ze.has(Je)&&(D.width!==Je.image.width||D.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const rt=Ze.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[Z])?ee=rt[Z][ce]:ee=rt[Z],Ne=!0):D.samples>0&&ot.useMultisampledRTT(D)===!1?ee=Ze.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?ee=rt[ce]:ee=rt,fe.copy(D.viewport),pe.copy(D.scissor),ge=D.scissorTest}else fe.copy(ue).multiplyScalar(J).floor(),pe.copy(xe).multiplyScalar(J).floor(),ge=be;if(ce!==0&&(ee=ar),He.bindFramebuffer(G.FRAMEBUFFER,ee)&&se&&He.drawBuffers(D,ee),He.viewport(fe),He.scissor(pe),He.setScissorTest(ge),Ne){const ke=Ze.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,ce)}else if(Oe){const ke=Z;for(let nt=0;nt<D.textures.length;nt++){const rt=Ze.get(D.textures[nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ce,ke)}}else if(D!==null&&ce!==0){const ke=Ze.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ke.__webglTexture,ce)}j=-1},this.readRenderTargetPixels=function(D,Z,ce,se,ee,Ne,Oe,Ge=0){if(!(D&&D.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){He.bindFramebuffer(G.FRAMEBUFFER,ke);try{const nt=D.textures[Ge],rt=nt.format,Je=nt.type;if(!Pt.textureFormatReadable(rt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Je)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-se&&ce>=0&&ce<=D.height-ee&&(D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ge),G.readPixels(Z,ce,se,ee,st.convert(rt),st.convert(Je),Ne))}finally{const nt=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,Z,ce,se,ee,Ne,Oe,Ge=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke)if(Z>=0&&Z<=D.width-se&&ce>=0&&ce<=D.height-ee){He.bindFramebuffer(G.FRAMEBUFFER,ke);const nt=D.textures[Ge],rt=nt.format,Je=nt.type;if(!Pt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ge),G.readPixels(Z,ce,se,ee,st.convert(rt),st.convert(Je),0);const wt=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,wt);const Ct=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await lE(G,Ct,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(ht),G.deleteSync(Ct),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,ce=0){const se=Math.pow(2,-ce),ee=Math.floor(D.image.width*se),Ne=Math.floor(D.image.height*se),Oe=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;ot.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,Oe,Ge,ee,Ne),He.unbindTexture()};const Ys=G.createFramebuffer(),Sa=G.createFramebuffer();this.copyTextureToTexture=function(D,Z,ce=null,se=null,ee=0,Ne=null){Ne===null&&(ee!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ee,ee=0):Ne=0);let Oe,Ge,ke,nt,rt,Je,ht,wt,Ct;const Et=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(ce!==null)Oe=ce.max.x-ce.min.x,Ge=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,rt=ce.min.y,Je=ce.isBox3?ce.min.z:0;else{const gn=Math.pow(2,-ee);Oe=Math.floor(Et.width*gn),Ge=Math.floor(Et.height*gn),D.isDataArrayTexture?ke=Et.depth:D.isData3DTexture?ke=Math.floor(Et.depth*gn):ke=1,nt=0,rt=0,Je=0}se!==null?(ht=se.x,wt=se.y,Ct=se.z):(ht=0,wt=0,Ct=0);const Bt=st.convert(Z.format),tt=st.convert(Z.type);let qt;Z.isData3DTexture?(ot.setTexture3D(Z,0),qt=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ot.setTexture2DArray(Z,0),qt=G.TEXTURE_2D_ARRAY):(ot.setTexture2D(Z,0),qt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Tt=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ma=G.getParameter(G.UNPACK_SKIP_PIXELS),Zt=G.getParameter(G.UNPACK_SKIP_ROWS),Bi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Et.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,rt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Je);const Kt=D.isDataArrayTexture||D.isData3DTexture,Sn=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const gn=Ze.get(D),Mn=Ze.get(Z),Tn=Ze.get(gn.__renderTarget),Ni=Ze.get(Mn.__renderTarget);He.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<ke;Fi++)Kt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(D).__webglTexture,ee,Je+Fi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(Z).__webglTexture,Ne,Ct+Fi)),G.blitFramebuffer(nt,rt,Oe,Ge,ht,wt,Oe,Ge,G.DEPTH_BUFFER_BIT,G.NEAREST);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||D.isRenderTargetTexture||Ze.has(D)){const gn=Ze.get(D),Mn=Ze.get(Z);He.bindFramebuffer(G.READ_FRAMEBUFFER,Ys),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,Sa);for(let Tn=0;Tn<ke;Tn++)Kt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gn.__webglTexture,ee,Je+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gn.__webglTexture,ee),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ne,Ct+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ne),ee!==0?G.blitFramebuffer(nt,rt,Oe,Ge,ht,wt,Oe,Ge,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(qt,Ne,ht,wt,Ct+Tn,nt,rt,Oe,Ge):G.copyTexSubImage2D(qt,Ne,ht,wt,nt,rt,Oe,Ge);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(qt,Ne,ht,wt,Ct,Oe,Ge,ke,Bt,tt,Et.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(qt,Ne,ht,wt,Ct,Oe,Ge,ke,Bt,Et.data):G.texSubImage3D(qt,Ne,ht,wt,Ct,Oe,Ge,ke,Bt,tt,Et):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,ht,wt,Oe,Ge,Bt,tt,Et.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,ht,wt,Et.width,Et.height,Bt,Et.data):G.texSubImage2D(G.TEXTURE_2D,Ne,ht,wt,Oe,Ge,Bt,tt,Et);G.pixelStorei(G.UNPACK_ROW_LENGTH,Tt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ma),G.pixelStorei(G.UNPACK_SKIP_ROWS,Zt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Bi),Ne===0&&Z.generateMipmaps&&G.generateMipmap(qt),He.unbindTexture()},this.initRenderTarget=function(D){Ze.get(D).__webglFramebuffer===void 0&&ot.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){Y=0,L=0,R=null,He.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const Z4=()=>{const s=Q.useRef(null),[e,i]=Q.useState(!1);return Q.useEffect(()=>{if(!s.current)return;const r=new ZE;r.fog=new gp(328976,.0015),r.background=new Ut(328976);const l=new gi(75,window.innerWidth/window.innerHeight,.1,3e3);l.position.z=5;const c=new Y4({antialias:!0,alpha:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(c.domElement);const f=[65535,16711935,16776960,65280,16724787,3355647],h=new Vs(1,1,1),m=new nT(h),p=[],v=400;for(let ne=0;ne<v;ne++){const J=f[Math.floor(Math.random()*f.length)],U=new Kh({color:J,transparent:!0,opacity:.8,linewidth:2}),k=new $1(m,U);k.position.x=(Math.random()-.5)*120,k.position.y=(Math.random()-.5)*120,k.position.z=(Math.random()-.5)*1e3-500,k.rotation.x=Math.random()*Math.PI,k.rotation.y=Math.random()*Math.PI;const ue=Math.random()*2+.5;k.scale.set(ue,ue,ue),k.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},speedZ:Math.random()*2+.5},r.add(k),p.push(k)}const g=new _p(1,2),x=new iT(g),M=[],b=15;for(let ne=0;ne<b;ne++){const J=f[Math.floor(Math.random()*f.length)],U=new Kh({color:J,transparent:!0,opacity:.15,linewidth:1}),k=new $1(x,U);k.position.x=(Math.random()-.5)*600,k.position.y=(Math.random()-.5)*600,k.position.z=(Math.random()-.5)*2e3-800;const ue=Math.random()*50+30;k.scale.set(ue,ue,ue),k.userData={rotationSpeed:{x:(Math.random()-.5)*.002,y:(Math.random()-.5)*.002},speedZ:Math.random()*.5+.1},r.add(k),M.push(k)}const E=new qn,S=4e3,_=new Float32Array(S*3);for(let ne=0;ne<S*3;ne++)_[ne]=(Math.random()-.5)*2500;E.setAttribute("position",new Ri(_,3));const C=new v_({color:16777215,size:1.5,transparent:!0,opacity:.6}),N=new tT(E,C);r.add(N);let I=!1,H=0,P=0,B=0,Y=0,L=0,R=0,j=0,$=0;const fe=ne=>{I=!0,i(!0),H=ne.clientX,P=ne.clientY,Y=B,R=L},pe=ne=>{I===!0&&(B=(H-ne.clientX)*.1+Y,L=(ne.clientY-P)*.1+R)},ge=()=>{I=!1,i(!1)},O=s.current;O.addEventListener("mousedown",fe),document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ge),O.addEventListener("touchstart",ne=>{const J=ne.touches[0];fe({clientX:J.clientX,clientY:J.clientY})}),O.addEventListener("touchmove",ne=>{const J=ne.touches[0];pe({clientX:J.clientX,clientY:J.clientY})}),O.addEventListener("touchend",ge);const F=()=>{requestAnimationFrame(F),L=Math.max(-85,Math.min(85,L)),j=L1.degToRad(90-L),$=L1.degToRad(B);const ne=new le;ne.x=500*Math.sin(j)*Math.cos($),ne.y=500*Math.cos(j),ne.z=500*Math.sin(j)*Math.sin($),l.lookAt(ne),p.forEach(J=>{J.position.z+=J.userData.speedZ,J.rotation.x+=J.userData.rotationSpeed.x,J.rotation.y+=J.userData.rotationSpeed.y,J.position.z>200&&(J.position.z=-800,J.position.x=(Math.random()-.5)*120,J.position.y=(Math.random()-.5)*120)}),M.forEach(J=>{J.position.z+=J.userData.speedZ,J.rotation.x+=J.userData.rotationSpeed.x,J.rotation.y+=J.userData.rotationSpeed.y,J.position.z>600&&(J.position.z=-1800,J.position.x=(Math.random()-.5)*600,J.position.y=(Math.random()-.5)*600)}),N.rotation.z+=3e-4,c.render(r,l)};F();const W=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",W),()=>{if(window.removeEventListener("resize",W),O)for(O.removeEventListener("mousedown",fe);O.firstChild;)O.removeChild(O.firstChild);document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ge)}},[]),T.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-sans",children:[T.jsx("div",{ref:s,className:"w-full h-full cursor-move"}),T.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8",children:[T.jsx("div",{className:"flex justify-between items-start",children:T.jsxs("div",{className:"bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-fade-in-down",children:[T.jsx("h1",{className:"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tighter mb-2 drop-shadow-lg",children:"NEON COSMOS"}),T.jsx("p",{className:"text-blue-200 text-sm font-light tracking-widest uppercase opacity-80",children:"Giant Structure Simulation"})]})}),T.jsx("div",{className:`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${e?"opacity-0":"opacity-60"}`,children:T.jsxs("div",{className:"flex flex-col items-center justify-center text-white/50",children:[T.jsx(HM,{className:"w-8 h-8 mb-2 animate-bounce"}),T.jsx("span",{className:"text-xs tracking-[0.2em] uppercase",children:"Drag to Explore"})]})}),T.jsxs("div",{className:"flex justify-between items-end",children:[T.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5",children:[T.jsxs("div",{className:"flex items-center gap-3 text-cyan-300 mb-1",children:[T.jsx(VM,{className:"w-4 h-4"}),T.jsx("span",{className:"text-xs font-bold",children:"CONTROLS"})]}),T.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed max-w-[200px]",children:["마우스를 클릭하고 드래그하여",T.jsx("br",{}),"광활한 우주를 탐험하세요."]})]}),T.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-right",children:[T.jsxs("div",{className:"flex items-center justify-end gap-2 text-pink-400 mb-1",children:[T.jsx(UM,{className:"w-4 h-4"}),T.jsx("span",{className:"text-xs font-bold",children:"SYSTEM"})]}),T.jsxs("div",{className:"space-y-1",children:[T.jsxs("div",{className:"flex items-center justify-end gap-2",children:[T.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),T.jsx("span",{className:"text-gray-400 text-xs",children:"Simulation Running"})]}),T.jsxs("div",{className:"text-gray-500 text-[10px] font-mono",children:["ENTITIES: 400 CUBES",T.jsx("br",{}),"STRUCTURES: 15 GIANTS"]})]})]})]})]}),T.jsx("style",{children:`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `})]})},K4=20,qc=.08,wv="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",Q4=s=>{let e=null,i=null,r=null,l=null;const c=()=>{e||(e=new(window.AudioContext||window.webkitAudioContext),i=e.createGain(),i.connect(e.destination),i.gain.value=.8),e.state==="suspended"&&e.resume()},f=async g=>{if(c(),!!e)try{const x=await g.arrayBuffer();r=await e.decodeAudioData(x),console.log("Audio loaded successfully")}catch(x){console.error("Error decoding audio data:",x),alert("오디오 파일을 디코딩하는 데 실패했습니다. 다른 파일을 시도해주세요.")}},h=(g,x)=>{if(!s||!e||!i||!r)return;c();let b=g/x*r.duration;b+qc>r.duration&&(b=r.duration-qc),b<0&&(b=0);const E=e.createBufferSource();E.buffer=r;const S=e.createGain();E.connect(S),S.connect(i);const _=e.currentTime;S.gain.setValueAtTime(0,_),S.gain.linearRampToValueAtTime(1,_+.01),S.gain.linearRampToValueAtTime(0,_+qc),E.start(_,b,qc+.02)},m=()=>{if(!s||!e||!i||!r)return;c(),p();const g=e.createBufferSource();g.buffer=r,g.connect(i),g.start(0),l=g,g.onended=()=>{l=null}},p=()=>{if(l){try{l.stop()}catch{}l=null}};return{loadAudio:f,playSlice:h,playFull:m,stop:p,hasAudio:()=>!!r}};function J4(){const[s,e]=Q.useState(wv),[i,r]=Q.useState(null),[l,c]=Q.useState(!1),[f,h]=Q.useState(!0),[m,p]=Q.useState("quick"),[v,g]=Q.useState(50),[x,M]=Q.useState(!0),[b,E]=Q.useState(0),[S,_]=Q.useState(1),C=Q.useRef(null),N=Q.useRef(null),I=Q.useRef([]),H=Q.useRef(!1),P=Q.useRef(null);Q.useEffect(()=>{P.current=Q4(x),x||P.current?.stop()},[x]),Q.useEffect(()=>{const O=new Image;O.crossOrigin="Anonymous",O.src=s,O.onload=()=>{N.current=O,B(O)}},[s,S]);const B=O=>{const F=C.current;if(!F)return;const W=600,ne=Math.floor(O.width/S),J=Math.min(1,W/ne),U=Math.floor(ne*J),k=Math.floor(O.height*J);F.width=U,F.height=k,I.current=Array.from({length:U},(ue,xe)=>xe),E(U),h(!0),Y(I.current)},Y=O=>{const F=C.current,W=N.current;if(!F||!W)return;const ne=F.getContext("2d",{willReadFrequently:!0});if(!ne)return;ne.clearRect(0,0,F.width,F.height);const J=W.width/F.width*S;for(let U=0;U<O.length;U++){const k=O[U]*J;ne.drawImage(W,k,0,J,W.height,U,0,1,F.height)}},L=O=>new Promise(F=>setTimeout(F,O)),R=()=>{if(H.current)throw new Error("Aborted")},j=async()=>{if(l)return;const O=[...I.current];for(let F=O.length-1;F>0;F--){const W=Math.floor(Math.random()*(F+1));[O[F],O[W]]=[O[W],O[F]]}I.current=O,Y(O),h(!1),P.current?.stop()},$=O=>{const F=O.target.files?.[0];if(F){const W=new FileReader;W.onload=ne=>{ne.target?.result&&e(ne.target.result)},W.readAsDataURL(F)}},fe=async O=>{const F=O.target.files?.[0];F&&P.current&&(r("Loading audio..."),await P.current.loadAudio(F),r(F.name))},pe=async()=>{if(l||f)return;c(!0),H.current=!1,P.current?.stop();const O=Math.max(0,(100-v)/2);try{const F=[...I.current],W=F.length,ne=async J=>{I.current=F,Y(F),J%K4===0&&x&&P.current?.playSlice(F[J],W),O>0&&await L(O),R()};if(m==="bubble")for(let J=0;J<W;J++)for(let U=0;U<W-J-1;U++)F[U]>F[U+1]&&([F[U],F[U+1]]=[F[U+1],F[U]],await ne(U));else if(m==="selection")for(let J=0;J<W;J++){let U=J;for(let k=J+1;k<W;k++)F[k]<F[U]&&(U=k);U!==J&&([F[J],F[U]]=[F[U],F[J]],await ne(J))}else if(m==="insertion")for(let J=1;J<W;J++){let U=F[J],k=J-1;for(;k>=0&&F[k]>U;)F[k+1]=F[k],k=k-1,k%5===0&&await ne(k);F[k+1]=U,await ne(J)}else if(m==="quick"){const J=async(k,ue)=>{const xe=F[ue];let be=k-1;for(let te=k;te<ue;te++)R(),F[te]<xe&&(be++,[F[be],F[te]]=[F[te],F[be]],te%3===0&&await ne(te));return[F[be+1],F[ue]]=[F[ue],F[be+1]],await ne(ue),be+1},U=async(k,ue)=>{if(k<ue){const xe=await J(k,ue);await U(k,xe-1),await U(xe+1,ue)}};await U(0,W-1)}else if(m==="heap"){const J=async(U,k)=>{let ue=k;const xe=2*k+1,be=2*k+2;xe<U&&F[xe]>F[ue]&&(ue=xe),be<U&&F[be]>F[ue]&&(ue=be),ue!==k&&([F[k],F[ue]]=[F[ue],F[k]],await ne(k),await J(U,ue))};for(let U=Math.floor(W/2)-1;U>=0;U--)await J(W,U);for(let U=W-1;U>0;U--)[F[0],F[U]]=[F[U],F[0]],await ne(U),await J(U,0)}else if(m==="radix"){const U=(k=>Math.max(...k))(F);for(let k=1;Math.floor(U/k)>0;k*=10){const ue=new Array(W).fill(0),xe=new Array(10).fill(0);for(let be=0;be<W;be++)xe[Math.floor(F[be]/k)%10]++;for(let be=1;be<10;be++)xe[be]+=xe[be-1];for(let be=W-1;be>=0;be--)ue[xe[Math.floor(F[be]/k)%10]-1]=F[be],xe[Math.floor(F[be]/k)%10]--;for(let be=0;be<W;be++)F[be]=ue[be],be%3===0&&await ne(be)}}else if(m==="merge"){const J=async(k,ue,xe)=>{const be=F.slice(k,ue+1),te=F.slice(ue+1,xe+1);let de=0,Ce=0,Ue=k;for(;de<be.length&&Ce<te.length;)R(),be[de]<=te[Ce]?(F[Ue]=be[de],de++):(F[Ue]=te[Ce],Ce++),Ue%2===0&&await ne(Ue),Ue++;for(;de<be.length;)F[Ue]=be[de],de++,Ue++,Ue%2===0&&await ne(Ue);for(;Ce<te.length;)F[Ue]=te[Ce],Ce++,Ue++,Ue%2===0&&await ne(Ue)},U=async(k,ue)=>{if(k>=ue)return;const xe=k+Math.floor((ue-k)/2);await U(k,xe),await U(xe+1,ue),await J(k,xe,ue)};await U(0,W-1)}h(!0),Y(I.current),x&&P.current?.hasAudio()&&P.current.playFull()}catch(F){console.log("Sorting aborted or error:",F)}finally{c(!1)}},ge=()=>{H.current=!0,c(!1),P.current?.stop()};return T.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col items-center p-4",children:[T.jsxs("header",{className:"w-full max-w-4xl flex justify-between items-center mb-8 border-b border-neutral-800 pb-4",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(DM,{className:"text-purple-400",size:24}),T.jsx("h1",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:"Pixel Sort Audio Visualizer"})]}),T.jsxs("div",{className:"flex gap-4 text-sm text-neutral-400",children:[T.jsx("span",{children:b>0?`${b} Columns`:"Loading..."}),T.jsx("span",{children:l?"Sorting...":f?"Sorted":"Ready"})]})]}),T.jsxs("main",{className:"w-full max-w-4xl flex flex-col items-center gap-6",children:[T.jsxs("div",{className:"relative group w-full flex justify-center bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-neutral-800 backdrop-blur-sm min-h-[300px]",children:[T.jsx("canvas",{ref:C,className:"max-w-full h-auto object-contain cursor-pointer transition-opacity",onClick:l?void 0:j,title:"Click to Shuffle"}),f&&!l&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:T.jsxs("span",{className:"flex items-center gap-2 text-white font-medium",children:[T.jsx(y1,{size:16})," 클릭해서 섞기"]})})]}),T.jsxs("div",{className:"w-full bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-md",children:[T.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-center justify-between",children:[T.jsxs("div",{className:"flex flex-col gap-4 w-full md:w-auto",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider",children:"Algorithm"}),T.jsxs("select",{value:m,onChange:O=>p(O.target.value),disabled:l,className:"bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none",children:[T.jsx("option",{value:"bubble",children:"Bubble Sort (Slow)"}),T.jsx("option",{value:"selection",children:"Selection Sort"}),T.jsx("option",{value:"insertion",children:"Insertion Sort"}),T.jsx("option",{value:"quick",children:"Quick Sort (Fast)"}),T.jsx("option",{value:"merge",children:"Merge Sort"}),T.jsx("option",{value:"heap",children:"Heap Sort"}),T.jsx("option",{value:"radix",children:"Radix Sort (Very Fast)"})]})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Speed"}),T.jsx("input",{type:"range",min:"0",max:"100",value:v,onChange:O=>g(Number(O.target.value)),className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Pixel Size"}),T.jsxs("div",{className:"flex items-center gap-2 w-full",children:[T.jsx("input",{type:"range",min:"1",max:"20",value:S,onChange:O=>_(Number(O.target.value)),disabled:l,className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"}),T.jsxs("span",{className:"text-sm text-neutral-400 min-w-[2rem]",children:[S,"x"]})]})]})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("button",{onClick:()=>M(!x),className:`p-3 rounded-full transition-all ${x?"bg-neutral-700 text-purple-300 hover:bg-neutral-600":"bg-neutral-800 text-neutral-500"}`,title:x?"Mute":"Unmute",children:x?T.jsx(ob,{size:20}):T.jsx(cb,{size:20})}),l?T.jsxs("button",{onClick:ge,className:"flex items-center gap-2 px-8 py-3 bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 rounded-lg font-bold transition-all",children:[T.jsx(qv,{size:18})," 중지"]}):T.jsxs(T.Fragment,{children:[T.jsxs("button",{onClick:j,className:"flex items-center gap-2 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-all",children:[T.jsx(y1,{size:18})," 섞기"]}),T.jsxs("button",{onClick:pe,disabled:f,className:`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-purple-900/50 transition-all transform hover:scale-105
                            ${f?"bg-neutral-700 opacity-50 cursor-not-allowed":!i&&x?"bg-yellow-600 hover:bg-yellow-500":"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"}`,title:!i&&x?"오디오 파일이 없으면 소리가 나지 않습니다":"정렬 시작",children:[T.jsx(Kc,{size:18,fill:"currentColor"})," 정렬 시작"]})]})]})]}),T.jsxs("div",{className:"mt-6 pt-4 border-t border-neutral-700 flex flex-wrap gap-4 justify-between items-center",children:[T.jsxs("div",{className:"flex gap-4",children:[T.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm text-neutral-400 hover:text-white transition-colors bg-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-700",children:[T.jsx(rb,{size:16}),T.jsx("span",{children:"이미지 업로드"}),T.jsx("input",{type:"file",accept:"image/*",onChange:$,className:"hidden"})]}),T.jsxs("label",{className:`flex items-center gap-2 cursor-pointer text-sm px-3 py-2 rounded-lg transition-colors ${i?"bg-purple-500/20 text-purple-300 hover:bg-purple-500/30":"text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700"}`,children:[T.jsx(jM,{size:16}),T.jsx("span",{className:"truncate max-w-[150px]",children:i||"오디오 파일(.mp3) 업로드"}),T.jsx("input",{type:"file",accept:"audio/*",onChange:fe,className:"hidden"})]})]}),T.jsx("button",{onClick:()=>{e(wv),r(null),P.current?.stop()},className:"text-xs text-neutral-500 hover:text-neutral-300 underline",children:"초기화"})]})]})]}),T.jsxs("footer",{className:"mt-8 text-center text-neutral-500 text-xs max-w-lg leading-relaxed",children:[T.jsx("p",{children:"이미지를 섞은 후 정렬되는 과정을 시각화합니다."}),T.jsx("p",{children:i?"업로드된 오디오 파일이 정렬 위치에 맞춰 조각나서 재생되며, 정렬이 완료되면 전체 곡이 재생됩니다.":"오디오 파일을 업로드하면 정렬 과정에 맞춰 사운드가 재생됩니다."})]})]})}const $4=({children:s})=>T.jsx("span",{className:"animate-rainbow font-bold text-xl md:text-3xl",style:{fontFamily:'"Comic Sans MS", "Chalkboard SE", sans-serif'},children:s}),rh=({children:s,color:e="text-red-500"})=>{const[i,r]=Q.useState(!0);return Q.useEffect(()=>{const l=setInterval(()=>r(c=>!c),500);return()=>clearInterval(l)},[]),T.jsx("span",{className:`${i?"opacity-100":"opacity-0"} ${e}`,children:s})},eR=({text:s})=>T.jsx("div",{className:"overflow-hidden whitespace-nowrap bg-blue-800 text-yellow-300 border-y-4 border-red-600 font-mono p-1",children:T.jsxs("div",{className:"animate-marquee inline-block text-lg",children:["+++ ",s," +++ ",s," +++ ",s," +++"]})}),tR=[{date:"2024년 10월 1일",title:"계절에 맞지 않는 습기",content:"10월임에도 불구하고 대기가 마치 늪지대처럼 무겁고 축축하다. 창문을 닫아도 스며드는 이 끈적한 습기는 단순한 날씨 탓이 아닌 것 같다. 빗물에서는 맡아본 적 없는 기이한 악취가 난다. 마치 수천 년 동안 고인 웅덩이에서 퍼올린 듯한, 비릿하면서도 금속성 냄새가 섞인 짠내다. 해안가와는 수백 킬로미터나 떨어진 이 내륙 도시에서 왜 심해의 부패한 냄새가 진동하는 것일까? 머리가 멍하고 속이 메스껍다. 단순한 기분 탓이라고 믿고 싶지만, 본능이 무언가 잘못되었다고 경고하고 있다.",sanityLevel:98},{date:"2024년 10월 5일",title:"기하학적 악몽",content:"어젯밤, 나는 잠들지 말았어야 했다. 꿈속에서 나는 거대한 녹색 석재로 지어진 도시를 헤매고 있었다. 그곳의 건축 양식은 인류의 역사 그 어디에도 존재하지 않는 것이었다. 건물들은 '비유클리드 기하학'적으로 뒤틀려 있었고, 오목한지 볼록한지조차 구분할 수 없는 벽면이 시야를 어지럽혔다. 저 멀리 보이는 거대한 문은 분명히 수직으로 서 있었지만, 동시에 수평으로 누워있는 듯한 모순된 감각을 주었다. 깨어난 지 한참이 지났지만, 그 압도적인 거대함에 눌린 공포가 가시질 않는다. 시야 구석에서 자꾸만 그 도시의 잔상이 어른거린다.",sanityLevel:94},{date:"2024년 10월 8일",title:"뒷골목의 골동품점",content:"퇴근길, 늘 다니던 길이었지만 오늘 처음 보는 낡은 골동품 가게가 눈에 띄었다. 홀린 듯 들어간 가게 내부는 먼지와 곰팡이 냄새로 가득했다. 주인이라 짐작되는 노인은 눈꺼풀이 없나 싶을 정도로 눈을 깜빡이지 않았고, 목소리는 물속에서 말하는 것처럼 걸걸했다. 그가 나를 보며 '별들의 위치가 잡혔다'고 중얼거렸을 때 나가야 했다. 하지만 진열장 구석에 놓인, 녹색 비누석(soapstone)으로 조각된 기이한 우상(Idol)이 내 발을 붙잡았다. 조잡한 솜씨였지만, 그 기괴한 형태는 뇌리에 박혀 지워지지 않는다.",sanityLevel:90},{date:"2024년 10월 12일",title:"저주받은 우상",content:"미친 짓인 줄 알면서도 결국 그 조각상을 사들고 왔다. 책상 위에 올려두고 자세히 관찰해보니 더욱 끔찍하다. 문어의 머리를 한 인간의 형상, 혹은 인간을 닮은 용의 형상... 등 뒤에는 징그러운 비늘이 덮인 날개가 접혀 있다. 만져보면 돌인데도 불구하고 미세하게 체온이 느껴지는 것 같고, 표면은 늘 축축한 점액으로 덮여 있는 듯한 착각을 준다. 이 조각상의 눈동자가 내가 방 안 어디에 있든 나를 주시하고 있다는 느낌을 지울 수가 없다.",sanityLevel:86},{date:"2024년 10월 15일",title:"동물들의 도주",content:"집안 분위기가 흉흉하다. 내 고양이 '네로'는 평소 온순했는데, 지금은 내 방 근처에는 얼씬도 하지 않는다. 억지로 데려오면 털을 곤두세우고 허공을 향해 미친 듯이 하악질을 해댄다. 더 기이한 것은 집 천장에서 들리던 쥐들의 발소리가 완전히 끊겼다는 것이다. 쥐덫에는 아무것도 걸리지 않았다. 그저 짐승들은 본능적으로 알고 있는 것이다. 이 집, 아니, 이 방에 포식자보다 더 상위의 존재가 도사리고 있다는 것을.",sanityLevel:81},{date:"2024년 10월 19일",title:"변모하는 이웃들",content:"옆집 사는 존슨 씨와 엘리베이터에서 마주쳤다. 그는 평범한 회사원이었는데, 며칠 사이에 사람이 완전히 변해버렸다. 피부는 창백하다 못해 잿빛으로 변했고, 목 주변의 피부가 늘어져 주름이 잡혀 있었다. 무엇보다 끔찍한 건 그의 눈이었다. 눈꺼풀이 퇴화한 듯 튀어나온 안구는 퀭하게 초점을 잃고 있었다. 그가 내릴 때 내 귀에 대고 '다곤 님께서 기다리신다'라고 속삭였다. 그 목소리는 사람의 성대에서 나올 수 없는, 젖은 진흙이 뭉개지는 소리 같았다.",sanityLevel:72},{date:"2024년 10월 24일",title:"지하의 북소리",content:"잠을 잘 수가 없다. 두통이 머리를 쪼개는 것 같다. 진통제를 한 통을 다 비웠지만 소용없다. 밤이 깊어지면 지하 깊은 곳, 지각 밑바닥에서부터 둥... 둥... 하는 북소리가 들려온다. 규칙적인 심장 박동 같기도 하고, 어떤 거대한 존재가 땅을 파고 올라오는 소리 같기도 하다. 이 리듬은 불규칙하고 혼란스러워서 듣고 있으면 정신이 아득해진다. 바닥에 귀를 대면 그 소리와 함께 미세한 진동이 느껴진다. 그들이 오고 있다.",sanityLevel:65},{date:"2024년 10월 28일",title:"금지된 지식",content:"도서관의 폐쇄된 서고에 몰래 들어갔다. 내가 찾는 것이 거기에 있을 거라는 확신이 들었다. 그리고 발견했다. 압둘 알하자드가 저술했다는 '알 아지프', 즉 '네크로노미콘'의 라틴어 필사본을. 책에서는 썩은 흙냄새가 났다. 떨리는 손으로 페이지를 넘기자, 글자들이 살아서 꿈틀거렸다. 인간의 발성 기관으로는 발음할 수 없는 저주받은 주문들. 읽지 말아야 한다고 이성이 소리쳤지만, 내 눈은 이미 '옛 지배자(The Great Old Ones)'들에 대한 구절을 탐독하고 있었다.",sanityLevel:55},{date:"2024년 10월 31일",title:"침식",content:"밖을 내다볼 수가 없다. 창밖에는 녹색의 끈적이는 안개가 가득 차 있다. 안개 속에서 거대한 촉수 같은 그림자가 꿈틀거리는 것이 보인다. 창문 틈새로 젤리 같은 점액질이 스며 들어와 바닥에 고여있다. 닦아내려 걸레를 대니 걸레가 치이익 소리를 내며 녹아버렸다. 옆집 개가 짖는 소리가 들렸는데, 갑자기 끔찍한 비명과 함께 뼈가 으스러지는 소리가 났다. 그리고 찾아온 정적. 이 세상의 것이 아닌 끔찍한 고요함이다.",sanityLevel:45},{date:"2024년 11월 3일",title:"신체의 변화",content:"거울 속의 내가 낯설다. 내 눈동자가... 세로로 갈라져 있다. 아니, 다시 보니 정상이다. 환각인가? 하지만 목덜미가 간지러워 긁었더니 손톱 밑에 회색 비늘 같은 것이 묻어 나왔다. 목 양옆이 따끔거린다. 숨을 쉴 때마다 코가 아닌 목 옆에서 공기가 드나드는 느낌이 든다. 피부가 건조한 것을 견딜 수가 없다. 욕조에 물을 가득 받아놓고 몸을 담가야만 안정이 된다. 나는 무엇이 되어가고 있는 건가?",sanityLevel:38},{date:"2024년 11월 7일",title:"뒤틀린 천구",content:"밤하늘이 잘못되었다. 천문학자인 친구에게 전화를 걸어 별자리가 이동했다고 소리쳤지만, 전화기 너머에서는 젖은 물소리와 비명소리만 들려왔다. 오리온자리는 제 자리에 있지 않다. 카시오페이아는 기괴하게 뒤틀려 있다. 별들이... 살아서 움직이고 있다. 그것들은 단순히 빛나는 가스가 아니다. 그것들은 우주 밖에서 우리를 내려다보는 수십억 개의 눈동자다. 그들이 나를 보고 있다. 나를 찾았다.",sanityLevel:30},{date:"2024년 11월 12일",title:"단절",content:"모든 통신이 끊겼다. 인터넷도, 전화도 먹통이다. TV를 켜면 지직거리는 노이즈 화면 속에 기이한 형상들이 얼핏얼핏 지나간다. 그리고 그 소음 속에서 명확한 단어들이 들리기 시작했다. '이아(Iä)... 이아(Iä)...' 그것은 찬양인가? 비명인가? 내 입에서도 나도 모르게 그 소리가 흘러나온다. 머릿속이 끈적한 진흙으로 가득 찬 기분이다.",sanityLevel:22},{date:"2024년 11월 15일",title:"르뤼에의 부상",content:"PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN. 죽은 크툴루가 그의 처소 르뤼에에서 꿈꾸며 기다린다. 이제 뜻을 알 것 같다. 아니, 기억해냈다. 바닥에서 바닷물이 솟구친다. 벽지가 젖어 뜯겨 나가고 그 뒤로 축축한 석조 벽이 드러난다. 이곳은 더 이상 내 방이 아니다. 심해다. 수압이 느껴진다. 하지만 고통스럽지 않다. 오히려 포근하다.",sanityLevel:15},{date:"2024년 11월 18일",title:"방문자들",content:"방문 밖 복도에서 질척이는 발소리가 들린다. 찰박... 찰박... 하나가 아니다. 십수 명, 아니 수십 명의 발소리. 문 손잡이가 천천히, 아주 천천히 돌아간다. 나는 장롱 속에 숨어 숨을 죽인다. 틈새로 보이는 거실은 이미 물이 차오르고 해초들이 둥둥 떠다니고 있다. 썩은 생선 내장의 악취가 코를 찌른다. 문이 열린다. 그들이 들어온다.",sanityLevel:10},{date:"2024년 11월 21일",title:"그림자의 춤",content:"빛은 사라졌다. 오로지 인광(燐光)만이 주위를 밝힌다. 그림자들이 제멋대로 벽에서 떨어져 나와 춤을 춘다. 내 그림자를 보았다. 머리가 있어야 할 곳에 촉수들이 꿈틀거리고 있다. 그림자가 본체다. 육체는 껍데기일 뿐이다. 나는 내 그림자를 어루만진다. 차갑고 미끈거린다. 우리는 하나다.",sanityLevel:8},{date:"2024년 11월 24일",title:"포식",content:"인간의 음식은 역겨워서 토해버렸다. 냉장고를 뒤져 날생선을 꺼냈다. 비늘도 벗기지 않은 생선을 씹어 먹었다. 내장에서 터져 나오는 씁쓸하고 비릿한 액체가 입안 가득 퍼질 때, 나는 비로소 살아있음을 느꼈다. 더 큰 고기가 필요하다. 더 신선하고, 더 피가 흐르는...",sanityLevel:5},{date:"2024년 11월 28일",title:"환희와 귀환",content:"두려움? 아니, 이것은 축복이다. 창문을 깨부수자 검은 파도가 2층인 내 방 안으로 들이닥쳤다. 저 멀리 수평선 너머로, 구름을 뚫고 솟아오른 거대한 그림자가 보인다. 그분의 날갯짓 한 번에 태풍이 몰아친다. 머릿속을 맴돌던 목소리가 이제는 천둥처럼 울린다. 테켈리-리! 테켈리-리! 우리는 바다로 돌아가야 해. 어머니 히드라와 아버지 다곤이 우릴 기다리신다.",sanityLevel:2},{date:"2024년 11월 29일",title:"문",content:"심해의 아이들이 나를 둘러쌌다. 그들의 튀어나온 눈은 아름답다. 목덜미의 아가미가 벌려지며 바닷물이 폐로 들어온다. 숨이 막히지 않는다. 상쾌하다. 우리는 손을 잡고 가라앉는다. 저 아래, 녹색 빛이 감도는 웅장한 도시 르뤼에로. 영원한 생명이 그곳에 있다.",sanityLevel:1},{date:"기록 불가",title:"END",content:"IÄ! IÄ! CTHULHU FHTAGN! IÄ! IÄ! CTHULHU FHTAGN! 별들이 제자리를 찾았다! 창문! 창문! 창문을 보라!",sanityLevel:0}];function nR(){const[s,e]=Q.useState(100),[i,r]=Q.useState(665);return Q.useEffect(()=>{const l=setInterval(()=>{e(c=>Math.max(0,c-1))},500);return()=>clearInterval(l)},[]),Q.useEffect(()=>{const l=setTimeout(()=>r(666),3e3);return()=>clearTimeout(l)},[]),T.jsxs("div",{className:"min-h-screen bg-black text-lime-400 font-serif overflow-x-hidden selection:bg-red-500 selection:text-white",children:[T.jsx("style",{children:`
        @keyframes rainbow {
          0% { color: red; } 14% { color: orange; } 28% { color: yellow; }
          42% { color: green; } 57% { color: blue; } 71% { color: indigo; } 85% { color: violet; } 100% { color: red; }
        }
        .animate-rainbow { animation: rainbow 2s linear infinite; }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 10s linear infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-3d { animation: spin-slow 3s linear infinite; }
        
        .bg-pattern {
          background-image: radial-gradient(circle, #330033 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .word-art {
          background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #fff;
          font-family: Impact, sans-serif;
          transform: skewY(-10deg);
          text-shadow: 2px 2px 0px #000;
        }

        /* 스크롤바 커스텀 (옛날 느낌) */
        ::-webkit-scrollbar {
          width: 16px;
        }
        ::-webkit-scrollbar-track {
          background: #333;
          border-left: 1px solid white;
        }
        ::-webkit-scrollbar-thumb {
          background: #008000;
          border: 2px outset #00ff00;
        }
      `}),T.jsxs("header",{className:"border-b-8 border-double border-purple-600 bg-indigo-900 p-4 text-center",children:[T.jsxs("div",{className:"flex justify-center items-center gap-4",children:[T.jsx("span",{className:"text-6xl spin-3d",children:"🐙"}),T.jsxs("div",{children:[T.jsx("h1",{className:"text-4xl md:text-6xl font-black text-red-600 drop-shadow-[4px_4px_0_rgba(255,255,255,0.8)]",children:"~*~ 금지된 지식 ~*~"}),T.jsx("h2",{className:"text-xl md:text-2xl mt-2 word-art",children:"THE FORBIDDEN LOG"})]}),T.jsx("span",{className:"text-6xl spin-3d",children:"👁️"})]}),T.jsx("p",{className:"mt-4 text-yellow-300 font-mono text-sm",children:"Best Viewed with Netscape Navigator 4.0"})]}),T.jsx(eR,{text:"경고: 이곳에 오래 머물지 마시오... 별들이 제자리를 찾았다... 이아! 이아! 크툴루 파탄... DO NOT READ THE LATIN TEXT..."}),T.jsxs("main",{className:"container mx-auto p-2 md:p-4 flex flex-col md:flex-row gap-4 bg-pattern min-h-screen",children:[T.jsxs("aside",{className:"w-full md:w-64 bg-blue-900 border-4 border-ridge border-gray-400 p-2 text-center h-fit shrink-0",children:[T.jsxs("div",{className:"mb-4",children:[T.jsx("h3",{className:"bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold p-1 border-2 border-white",children:"M E N U"}),T.jsxs("ul",{className:"list-disc list-inside text-left mt-2 space-y-2 pl-2 text-cyan-300 underline cursor-pointer",children:[T.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"HOME"}),T.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"MY PROFILE"}),T.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"CTHULHU PICS"}),T.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"GUESTBOOK"}),T.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"EMAIL ME"}),T.jsx("li",{className:"hover:text-white hover:bg-blue-700 text-red-500 font-bold",children:"SECRET LINK"})]})]}),T.jsxs("div",{className:"border-4 border-dotted border-red-500 p-2 bg-black mb-4",children:[T.jsx(rh,{color:"text-red-500",children:T.jsx("p",{className:"font-bold text-lg",children:"WARNING!!"})}),T.jsx("p",{className:"text-xs text-white mt-1",children:"Don't scroll down if you are scare!!"}),T.jsx("div",{className:"mt-2 text-4xl",children:"👻"})]}),T.jsxs("div",{className:"bg-gray-300 border-2 border-inset border-gray-500 p-1",children:[T.jsx("p",{className:"text-black text-xs font-bold mb-1",children:"Total Visitors:"}),T.jsx("div",{className:"bg-black text-red-600 font-mono text-xl border border-gray-500 tracking-widest",children:i.toString().padStart(6,"0")})]}),T.jsx("div",{className:"mt-4",children:T.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/70/Spinning_globe.gif",alt:"spinning globe",className:"mx-auto w-16 h-16"})}),T.jsxs("div",{className:"mt-4 border-2 border-white p-1",children:[T.jsx("p",{className:"text-[10px] text-yellow-300",children:"Join our WebRing!"}),T.jsxs("div",{className:"flex justify-center gap-1 mt-1",children:[T.jsx("div",{className:"w-4 h-4 bg-red-500 rounded-full"}),T.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),T.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded-full"})]})]})]}),T.jsxs("section",{className:"flex-1 bg-gray-900 border-8 border-double border-green-700 p-4 md:p-8 relative",children:[T.jsx("div",{className:"absolute top-0 right-0 p-2 text-xs text-gray-500",children:"Last updated: 2024.11.30"}),T.jsxs("div",{className:"text-center mb-8",children:[T.jsx($4,{children:"WELCOME TO MY DARK WORLD"}),T.jsx("br",{}),T.jsx("img",{src:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5eDh4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LpSf6D96Q9J5L3T75m/giphy.gif",alt:"Under Construction",className:"inline-block my-4 h-12",onError:l=>l.currentTarget.style.display="none"}),T.jsx("p",{className:"text-xs text-green-500 mt-2",children:'"이곳은 나의 광기를 기록하는 성소..."'})]}),T.jsxs("div",{className:"bg-red-900 border-2 border-red-500 p-2 mb-6 text-center animate-pulse sticky top-0 z-10 shadow-lg shadow-red-900/50",children:[T.jsxs("span",{className:"text-yellow-400 font-bold text-xl drop-shadow-md",children:["현재 당신의 이성(Sanity): ",s,"/100"]}),s<30&&T.jsx("p",{className:"text-white font-bold text-2xl mt-1 blink",children:"RUN AWAY!!!"})]}),T.jsx("div",{className:"space-y-8 font-mono",children:tR.map((l,c)=>T.jsxs("article",{className:"border-b-2 border-dashed border-gray-600 pb-4 hover:bg-gray-800 transition-colors",children:[T.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-2 mb-2",children:[T.jsxs("h3",{className:"text-xl text-fuchsia-400 font-bold bg-blue-900 inline-block px-2 border border-blue-400",children:[l.date," - ",l.title]}),T.jsxs("span",{className:"text-xs text-gray-400",children:["[Sanity Level: ",l.sanityLevel,"%]"]})]}),l.sanityLevel<30?T.jsx("div",{className:"bg-black text-center p-4 my-2 border-4 border-yellow-500 transform rotate-1",children:T.jsx(rh,{color:"text-cyan-400",children:T.jsx("span",{className:"text-lg md:text-2xl font-bold",children:l.content})})}):T.jsx("p",{className:`mt-2 leading-relaxed text-lg ${l.sanityLevel<60?"text-red-400":"text-green-300"}`,children:l.content}),c===8&&T.jsx("div",{className:"my-4 text-center",children:T.jsxs("div",{className:"inline-block border-4 border-red-600 p-1 bg-white",children:[T.jsx("span",{className:"text-black font-bold text-4xl block transform skew-x-12",children:"👁️ 👁️ 👁️"}),T.jsx("span",{className:"text-red-600 text-xs",children:"THEY ARE WATCHING"})]})})]},c))}),T.jsxs("div",{className:"mt-12 text-center p-4 border-t-2 border-gray-600",children:[T.jsx("p",{className:"text-purple-500 text-xl mb-4 font-bold",children:"방명록을 남겨주세요 (남기지 않으면 저주함)"}),T.jsx("input",{type:"text",placeholder:"Name",className:"bg-gray-200 border-2 border-inset border-gray-500 p-1 mr-2 text-black"}),T.jsx("button",{className:"bg-gray-300 border-2 border-outset border-gray-500 px-4 py-1 text-black font-bold active:border-inset",children:"Sign Guestbook"}),T.jsx("br",{}),T.jsx("br",{}),T.jsx("a",{href:"#",className:"text-blue-400 underline text-sm hover:bg-white hover:text-black",children:"[Top으로 돌아가기]"})]})]})]}),T.jsxs("footer",{className:"bg-gray-800 text-center p-4 border-t-4 border-gray-500 text-xs text-gray-400",children:[T.jsx("p",{children:"Copyright (c) 1999 Mystic Keeper. All rights reserved."}),T.jsx("p",{children:"이 사이트의 모든 저작권은 위대한 옛 지배자에게 있습니다."}),T.jsxs("div",{className:"flex justify-center gap-2 mt-2",children:[T.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"HTML 4.01"}),T.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"IE 5.0"}),T.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"Netscape"})]}),T.jsx("br",{}),T.jsx(rh,{children:T.jsx("span",{className:"text-yellow-500 font-bold",children:"공사중 (Under Construction)"})}),T.jsx("div",{className:"mt-4 text-[10px] text-gray-600",children:"Design by: DarkSoulMaster666"})]})]})}Hy.createRoot(document.getElementById("root")).render(T.jsx(Q.StrictMode,{children:T.jsx(tM,{children:T.jsxs(LS,{children:[T.jsx(ws,{path:"/",element:T.jsx(vb,{})}),T.jsx(ws,{path:"/network-quiz",element:T.jsx(_b,{})}),T.jsx(ws,{path:"/neonspace",element:T.jsx(Z4,{})}),T.jsx(ws,{path:"/pixel-sort",element:T.jsx(J4,{})}),T.jsx(ws,{path:"/cthulhu",element:T.jsx(nR,{})})]})})}));
