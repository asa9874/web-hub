(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ky(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wd={exports:{}},ko={};var sg;function Gy(){if(sg)return ko;sg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=e,ko.jsx=i,ko.jsxs=i,ko}var og;function Vy(){return og||(og=1,wd.exports=Gy()),wd.exports}var M=Vy(),Rd={exports:{}},ut={};var lg;function jy(){if(lg)return ut;lg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(U,j,ue){this.props=U,this.context=j,this.refs=S,this.updater=ue||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function C(){}C.prototype=_.prototype;function N(U,j,ue){this.props=U,this.context=j,this.refs=S,this.updater=ue||E}var O=N.prototype=new C;O.constructor=N,T(O,_.prototype),O.isPureReactComponent=!0;var H=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function L(U,j,ue){var xe=ue.ref;return{$$typeof:s,type:U,key:j,ref:xe!==void 0?xe:null,props:ue}}function R(U,j){return L(U.type,j,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function J(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ue){return j[ue]})}var fe=/\/+/g;function pe(U,j){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):j.toString(36)}function ge(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(P,P):(U.status="pending",U.then(function(j){U.status==="pending"&&(U.status="fulfilled",U.value=j)},function(j){U.status==="pending"&&(U.status="rejected",U.reason=j)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,j,ue,xe,be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(te){case"bigint":case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0;break;case v:return de=U._init,I(de(U._payload),j,ue,xe,be)}}if(de)return be=be(U),de=xe===""?"."+pe(U,0):xe,H(be)?(ue="",de!=null&&(ue=de.replace(fe,"$&/")+"/"),I(be,j,ue,"",function(Ae){return Ae})):be!=null&&(V(be)&&(be=R(be,ue+(be.key==null||U&&U.key===be.key?"":(""+be.key).replace(fe,"$&/")+"/")+de)),j.push(be)),1;de=0;var Ce=xe===""?".":xe+":";if(H(U))for(var Ue=0;Ue<U.length;Ue++)xe=U[Ue],te=Ce+pe(xe,Ue),de+=I(xe,j,ue,te,be);else if(Ue=b(U),typeof Ue=="function")for(U=Ue.call(U),Ue=0;!(xe=U.next()).done;)xe=xe.value,te=Ce+pe(xe,Ue++),de+=I(xe,j,ue,te,be);else if(te==="object"){if(typeof U.then=="function")return I(ge(U),j,ue,xe,be);throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return de}function F(U,j,ue){if(U==null)return U;var xe=[],be=0;return I(U,xe,"","",function(te){return j.call(ue,te,be++)}),xe}function W(U){if(U._status===-1){var j=U._result;j=j(),j.then(function(ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=ue)},function(ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=ue)}),U._status===-1&&(U._status=0,U._result=j)}if(U._status===1)return U._result.default;throw U._result}var ne=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},$={map:F,forEach:function(U,j,ue){F(U,function(){j.apply(this,arguments)},ue)},count:function(U){var j=0;return F(U,function(){j++}),j},toArray:function(U){return F(U,function(j){return j})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ut.Activity=g,ut.Children=$,ut.Component=_,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=N,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ut.cache=function(U){return function(){return U.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(U,j,ue){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xe=T({},U.props),be=U.key;if(j!=null)for(te in j.key!==void 0&&(be=""+j.key),j)!Z.call(j,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&j.ref===void 0||(xe[te]=j[te]);var te=arguments.length-2;if(te===1)xe.children=ue;else if(1<te){for(var de=Array(te),Ce=0;Ce<te;Ce++)de[Ce]=arguments[Ce+2];xe.children=de}return L(U.type,be,xe)},ut.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ut.createElement=function(U,j,ue){var xe,be={},te=null;if(j!=null)for(xe in j.key!==void 0&&(te=""+j.key),j)Z.call(j,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(be[xe]=j[xe]);var de=arguments.length-2;if(de===1)be.children=ue;else if(1<de){for(var Ce=Array(de),Ue=0;Ue<de;Ue++)Ce[Ue]=arguments[Ue+2];be.children=Ce}if(U&&U.defaultProps)for(xe in de=U.defaultProps,de)be[xe]===void 0&&(be[xe]=de[xe]);return L(U,te,be)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:h,render:U}},ut.isValidElement=V,ut.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:W}},ut.memo=function(U,j){return{$$typeof:p,type:U,compare:j===void 0?null:j}},ut.startTransition=function(U){var j=z.T,ue={};z.T=ue;try{var xe=U(),be=z.S;be!==null&&be(ue,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(P,ne)}catch(te){ne(te)}finally{j!==null&&ue.types!==null&&(j.types=ue.types),z.T=j}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(U){return z.H.use(U)},ut.useActionState=function(U,j,ue){return z.H.useActionState(U,j,ue)},ut.useCallback=function(U,j){return z.H.useCallback(U,j)},ut.useContext=function(U){return z.H.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U,j){return z.H.useDeferredValue(U,j)},ut.useEffect=function(U,j){return z.H.useEffect(U,j)},ut.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(U,j,ue){return z.H.useImperativeHandle(U,j,ue)},ut.useInsertionEffect=function(U,j){return z.H.useInsertionEffect(U,j)},ut.useLayoutEffect=function(U,j){return z.H.useLayoutEffect(U,j)},ut.useMemo=function(U,j){return z.H.useMemo(U,j)},ut.useOptimistic=function(U,j){return z.H.useOptimistic(U,j)},ut.useReducer=function(U,j,ue){return z.H.useReducer(U,j,ue)},ut.useRef=function(U){return z.H.useRef(U)},ut.useState=function(U){return z.H.useState(U)},ut.useSyncExternalStore=function(U,j,ue){return z.H.useSyncExternalStore(U,j,ue)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.1",ut}var cg;function sp(){return cg||(cg=1,Rd.exports=jy()),Rd.exports}var Y=sp();const Xy=ky(Y);var Cd={exports:{}},Go={},Nd={exports:{}},Dd={};var ug;function Wy(){return ug||(ug=1,(function(s){function e(I,F){var W=I.length;I.push(F);e:for(;0<W;){var ne=W-1>>>1,$=I[ne];if(0<l($,F))I[ne]=F,I[W]=$,W=ne;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],W=I.pop();if(W!==F){I[0]=W;e:for(var ne=0,$=I.length,U=$>>>1;ne<U;){var j=2*(ne+1)-1,ue=I[j],xe=j+1,be=I[xe];if(0>l(ue,W))xe<$&&0>l(be,ue)?(I[ne]=be,I[xe]=W,ne=xe):(I[ne]=ue,I[j]=W,ne=j);else if(xe<$&&0>l(be,W))I[ne]=be,I[xe]=W,ne=xe;else break e}}return F}function l(I,F){var W=I.sortIndex-F.sortIndex;return W!==0?W:I.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,b=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(I){for(var F=i(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=I)r(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function H(I){if(T=!1,O(I),!E)if(i(m)!==null)E=!0,P||(P=!0,J());else{var F=i(p);F!==null&&ge(H,F.startTime-I)}}var P=!1,z=-1,Z=5,L=-1;function R(){return S?!0:!(s.unstable_now()-L<Z)}function V(){if(S=!1,P){var I=s.unstable_now();L=I;var F=!0;try{e:{E=!1,T&&(T=!1,C(z),z=-1),b=!0;var W=x;try{t:{for(O(I),g=i(m);g!==null&&!(g.expirationTime>I&&R());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,x=g.priorityLevel;var $=ne(g.expirationTime<=I);if(I=s.unstable_now(),typeof $=="function"){g.callback=$,O(I),F=!0;break t}g===i(m)&&r(m),O(I)}else r(m);g=i(m)}if(g!==null)F=!0;else{var U=i(p);U!==null&&ge(H,U.startTime-I),F=!1}}break e}finally{g=null,x=W,b=!1}F=void 0}}finally{F?J():P=!1}}}var J;if(typeof N=="function")J=function(){N(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=V,J=function(){pe.postMessage(null)}}else J=function(){_(V,0)};function ge(I,F){z=_(function(){I(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var W=x;x=F;try{return I()}finally{x=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=x;x=I;try{return F()}finally{x=W}},s.unstable_scheduleCallback=function(I,F,W){var ne=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,I){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=W+$,I={id:v++,callback:F,priorityLevel:I,startTime:W,expirationTime:$,sortIndex:-1},W>ne?(I.sortIndex=W,e(p,I),i(m)===null&&I===i(p)&&(T?(C(z),z=-1):T=!0,ge(H,W-ne))):(I.sortIndex=$,e(m,I),E||b||(E=!0,P||(P=!0,J()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var F=x;return function(){var W=x;x=F;try{return I.apply(this,arguments)}finally{x=W}}}})(Dd)),Dd}var fg;function qy(){return fg||(fg=1,Nd.exports=Wy()),Nd.exports}var Ld={exports:{}},Dn={};var dg;function Yy(){if(dg)return Dn;dg=1;var s=sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Dn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var hg;function Zy(){if(hg)return Ld.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ld.exports=Yy(),Ld.exports}var pg;function Ky(){if(pg)return Go;pg=1;var s=qy(),e=sp(),i=Zy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,w=u.child;w;){if(w===a){y=!0,a=u,o=d;break}if(w===o){y=!0,o=u,a=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===a){y=!0,a=d,o=u;break}if(w===o){y=!0,o=d,a=u;break}w=w.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ge=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ne=[],$=-1;function U(t){return{current:t}}function j(t){0>$||(t.current=ne[$],ne[$]=null,$--)}function ue(t,n){$++,ne[$]=t.current,t.current=n}var xe=U(null),be=U(null),te=U(null),de=U(null);function Ce(t,n){switch(ue(te,n),ue(be,t),ue(xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C1(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C1(n),t=N1(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(xe),ue(xe,t)}function Ue(){j(xe),j(be),j(te)}function Ae(t){t.memoizedState!==null&&ue(de,t);var n=xe.current,a=N1(n,t.type);n!==a&&(ue(be,t),ue(xe,a))}function Fe(t){be.current===t&&(j(xe),j(be)),de.current===t&&(j(de),zo._currentValue=W)}var _t,it;function xt(t){if(_t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);_t=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+t+it}var k=!1;function qe(t,n){if(!t||k)return"";k=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(he){var oe=he}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(he){oe=he}t.call(Se.prototype)}}else{try{throw Error()}catch(he){oe=he}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var G=y.split(`
`),re=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===re.length)for(o=G.length-1,u=re.length-1;1<=o&&0<=u&&G[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==re[u]){var ve=`
`+G[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{k=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function ft(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return xt("Activity");default:return""}}function Ot(t){try{var n="",a=null;do n+=ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,ot=s.unstable_shouldYield,B=s.unstable_requestPaint,A=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,me=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ie=s.unstable_IdlePriority,et=s.log,Ye=s.unstable_setDisableYieldValue,Te=null,Re=null;function Qe(t){if(typeof et=="function"&&Ye(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var Xe=Math.clz32?Math.clz32:X,Be=Math.log,st=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Be(t)/st|0)|0}var Pe=256,De=262144,Le=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=we(o):(y&=w,y!==0?u=we(y):a||(a=w&~t,a!==0&&(u=we(a))))):(w=o&~d,w!==0?u=we(w):y!==0?u=we(y):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ge(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,re=t.hiddenUpdates;for(a=y&~a;0<a;){var ve=31-Xe(a),Se=1<<ve;w[ve]=0,G[ve]=-1;var oe=re[ve];if(oe!==null)for(re[ve]=null,ve=0;ve<oe.length;ve++){var he=oe[ve];he!==null&&(he.lane&=-536870913)}a&=~Se}o!==0&&fl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function fl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ys(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zs(t,n){var a=n&-n;return a=(a&42)!==0?1:yi(a),(a&(t.suspendedLanes|n))!==0?0:a}function yi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:$1(t.type))}function Qs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,mn="__reactProps$"+Zn,zi="__reactContainer$"+Zn,Br="__reactEvents$"+Zn,yu="__reactListeners$"+Zn,Su="__reactHandles$"+Zn,dl="__reactResources$"+Zn,sr="__reactMarker$"+Zn;function Js(t){delete t[cn],delete t[mn],delete t[Br],delete t[yu],delete t[Su]}function Ma(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=z1(t);t!==null;){if(a=t[cn])return a;t=z1(t)}return n}t=a,a=t.parentNode}return null}function D(t){if(t=t[cn]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function K(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ce(t){var n=t[dl];return n||(n=t[dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[sr]=!0}var ee=new Set,Ne={};function Oe(t,n){ke(t,n),ke(t+"Capture",n)}function ke(t,n){for(Ne[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var Ve=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},rt={};function Je(t){return He.call(rt,t)?!0:He.call(nt,t)?!1:Ve.test(t)?rt[t]=!0:(nt[t]=!0,!1)}function ht(t,n,a){if(Je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Ft(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function At(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ba=/[\n"\\]/g;function Zt(t){return t.replace(ba,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,u,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Tt(n)):t.value!==""+Tt(n)&&(t.value=""+Tt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,Tt(n)):a!=null?Sn(t,y,Tt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Tt(w):t.removeAttribute("name")}function Kt(t,n,a,o,u,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Tt(a):"",n=n!=null?""+Tt(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qt(t)}function Sn(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Mn(t,n,a){if(n!=null&&(n=""+Tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Tt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ap(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ap(t,d,n[d])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return B_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var bu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Hr=null;function Rp(t){var n=D(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&At(o)}break e;case"textarea":Mn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var Tu=!1;function Cp(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var o=t(n);return o}finally{if(Tu=!1,(Fr!==null||Hr!==null)&&(ec(),Fr&&(n=Fr,t=Hr,Hr=Fr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function $s(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Au=!1}var Ea=null,wu=null,pl=null;function Np(){if(pl)return pl;var t,n=wu,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Dp(){return!1}function Fn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Dp,this.isPropagationStopped=Dp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Fn(or),to=g({},or,{view:0,detail:0}),F_=Fn(to),Ru,Cu,no,_l=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Ru=t.screenX-no.screenX,Cu=t.screenY-no.screenY):Cu=Ru=0,no=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Lp=Fn(_l),H_=g({},_l,{dataTransfer:0}),k_=Fn(H_),G_=g({},to,{relatedTarget:0}),Nu=Fn(G_),V_=g({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=Fn(V_),X_=g({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=Fn(X_),q_=g({},or,{data:0}),Up=Fn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K_[t])?!!n[t]:!1}function Du(){return Q_}var J_=g({},to,{key:function(t){if(t.key){var n=Y_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Fn(J_),ex=g({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Fn(ex),tx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),nx=Fn(tx),ix=g({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Fn(ix),rx=g({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Fn(rx),ox=g({},or,{newState:0,oldState:0}),lx=Fn(ox),cx=[9,13,27,32],Lu=ki&&"CompositionEvent"in window,io=null;ki&&"documentMode"in document&&(io=document.documentMode);var ux=ki&&"TextEvent"in window&&!io,Op=ki&&(!Lu||io&&8<io&&11>=io),Ip=" ",zp=!1;function Bp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function fx(t,n){switch(t){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Ip);case"textInput":return t=n.data,t===Ip&&zp?null:t;default:return null}}function dx(t,n){if(kr)return t==="compositionend"||!Lu&&Bp(t,n)?(t=Np(),pl=wu=Ea=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hx[t.type]:n==="textarea"}function kp(t,n,a,o){Fr?Hr?Hr.push(o):Hr=[o]:Fr=o,n=oc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,ro=null;function px(t){b1(t,0)}function xl(t){var n=K(t);if(At(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(ki){var Uu;if(ki){var Pu="oninput"in document;if(!Pu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Pu=typeof jp.oninput=="function"}Uu=Pu}else Uu=!1;Vp=Uu&&(!document.documentMode||9<document.documentMode)}function Xp(){ao&&(ao.detachEvent("onpropertychange",Wp),ro=ao=null)}function Wp(t){if(t.propertyName==="value"&&xl(ro)){var n=[];kp(n,ro,t,Eu(t)),Cp(px,n)}}function mx(t,n,a){t==="focusin"?(Xp(),ao=n,ro=a,ao.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(ro)}function vx(t,n){if(t==="click")return xl(n)}function _x(t,n){if(t==="input"||t==="change")return xl(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:xx;function so(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!He.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,Iu=null,oo=null,zu=!1;function Qp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||Gr==null||Gr!==yn(o)||(o=Gr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=oc(Iu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function lr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Bu={},Jp={};ki&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function cr(t){if(Bu[t])return Bu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Bu[t]=n[a];return t}var $p=cr("animationend"),em=cr("animationiteration"),tm=cr("animationstart"),Sx=cr("transitionrun"),Mx=cr("transitionstart"),bx=cr("transitioncancel"),nm=cr("transitionend"),im=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Si(t,n){im.set(t,n),Oe(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],jr=0,Hu=0;function Sl(){for(var t=jr,n=Hu=jr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&am(a,u,d)}}function Ml(t,n,a,o){si[jr++]=t,si[jr++]=n,si[jr++]=a,si[jr++]=o,Hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ku(t,n,a,o){return Ml(t,n,a,o),bl(t)}function ur(t,n){return Ml(t,null,null,n),bl(t)}function am(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(t){if(50<No)throw No=0,Qf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function Ex(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new Ex(t,n,a,o)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function El(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Gu(t)&&(y=1);else if(typeof t=="string")y=Cy(t,a,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Qn(31,a,n,u),t.elementType=L,t.lanes=d,t;case T:return fr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=Qn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case H:return t=Qn(13,a,n,u),t.elementType=H,t.lanes=d,t;case P:return t=Qn(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case C:y=9;break e;case O:y=11;break e;case z:y=14;break e;case Z:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Qn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function fr(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function Vu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function sm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function ju(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var om=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=om.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},om.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var Wr=[],qr=0,Tl=null,lo=0,li=[],ci=0,Ta=null,Di=1,Li="";function Vi(t,n){Wr[qr++]=lo,Wr[qr++]=Tl,Tl=t,lo=n}function lm(t,n,a){li[ci++]=Di,li[ci++]=Li,li[ci++]=Ta,Ta=t;var o=Di;t=Li;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var d=32-Xe(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Di=1<<32-Xe(n)+u|a<<u|o,Li=d+t}else Di=1<<d|a<<u|o,Li=t}function Xu(t){t.return!==null&&(Vi(t,1),lm(t,1,0))}function Wu(t){for(;t===Tl;)Tl=Wr[--qr],Wr[qr]=null,lo=Wr[--qr],Wr[qr]=null;for(;t===Ta;)Ta=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null}function cm(t,n){li[ci++]=Di,li[ci++]=Li,li[ci++]=Ta,Di=n.id,Li=n.overflow,Ta=t}var An=null,Qt=null,wt=!1,Aa=null,ui=!1,qu=Error(r(519));function wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(oi(n,t)),qu}function um(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[mn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)St(Lo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Kt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||w1(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||wa(t,!0)}function fm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function Yr(t){if(t!==An)return!1;if(!wt)return fm(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&Qt&&wa(t),fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=I1(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=I1(t)}else n===27?(n=Qt,ka(t.type)?(t=vd,vd=null,Qt=t):Qt=n):Qt=An?di(t.stateNode.nextSibling):null;return!0}function dr(){Qt=An=null,wt=!1}function Yu(){var t=Aa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Aa=null),t}function co(t){Aa===null?Aa=[t]:Aa.push(t)}var Zu=U(null),hr=null,ji=null;function Ra(t,n,a){ue(Zu,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Zu.current,j(Zu)}function Ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Ku(d.return,a,t),o||(y=null);break e}d=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Ku(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Zr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=u.type;Kn(u.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(u===de.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Qu(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return dm(hr,t)}function wl(t,n){return hr===null&&pr(t),dm(t,n)}function dm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=s.unstable_scheduleCallback,wx=s.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new Tx,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&Ax(wx,function(){t.controller.abort()})}var fo=null,$u=0,Kr=0,Qr=null;function Rx(t,n){if(fo===null){var a=fo=[];$u=0,Kr=id(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(hm,hm),n}function hm(){if(--$u===0&&fo!==null){Qr!==null&&(Qr.status="fulfilled");var t=fo;fo=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=I.S;I.S=function(t,n){Q0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),pm!==null&&pm(t,n)};var mr=U(null);function ef(){var t=mr.current;return t!==null?t:Yt.pooledCache}function Rl(t,n){n===null?ue(mr,mr.current):ue(mr,n.pool)}function mm(){var t=ef();return t===null?null:{parent:un._currentValue,pool:t}}var Jr=Error(r(460)),tf=Error(r(474)),Cl=Error(r(542)),Nl={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw vr=n,Jr}}function gr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,Jr):a}}var vr=null;function _m(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function xm(t){if(t===Jr||t===Cl)throw Error(r(483))}var $r=null,ho=0;function Dl(t){var n=ho;return ho+=1,$r===null&&($r=[]),vm($r,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n(Q,q){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[q],Q.flags|=16):ie.push(q)}}function a(Q,q){if(!t)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function o(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function u(Q,q){return Q=Gi(Q,q),Q.index=0,Q.sibling=null,Q}function d(Q,q,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<q?(Q.flags|=67108866,q):ie):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,q,ie,_e){return q===null||q.tag!==6?(q=Vu(ie,Q.mode,_e),q.return=Q,q):(q=u(q,ie),q.return=Q,q)}function G(Q,q,ie,_e){var $e=ie.type;return $e===T?ve(Q,q,ie.props.children,_e,ie.key):q!==null&&(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&gr($e)===q.type)?(q=u(q,ie.props),po(q,ie),q.return=Q,q):(q=El(ie.type,ie.key,ie.props,null,Q.mode,_e),po(q,ie),q.return=Q,q)}function re(Q,q,ie,_e){return q===null||q.tag!==4||q.stateNode.containerInfo!==ie.containerInfo||q.stateNode.implementation!==ie.implementation?(q=ju(ie,Q.mode,_e),q.return=Q,q):(q=u(q,ie.children||[]),q.return=Q,q)}function ve(Q,q,ie,_e,$e){return q===null||q.tag!==7?(q=fr(ie,Q.mode,_e,$e),q.return=Q,q):(q=u(q,ie),q.return=Q,q)}function Se(Q,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Vu(""+q,Q.mode,ie),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return ie=El(q.type,q.key,q.props,null,Q.mode,ie),po(ie,q),ie.return=Q,ie;case E:return q=ju(q,Q.mode,ie),q.return=Q,q;case Z:return q=gr(q),Se(Q,q,ie)}if(ge(q)||J(q))return q=fr(q,Q.mode,ie,null),q.return=Q,q;if(typeof q.then=="function")return Se(Q,Dl(q),ie);if(q.$$typeof===N)return Se(Q,wl(Q,q),ie);Ll(Q,q)}return null}function oe(Q,q,ie,_e){var $e=q!==null?q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return $e!==null?null:w(Q,q,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:return ie.key===$e?G(Q,q,ie,_e):null;case E:return ie.key===$e?re(Q,q,ie,_e):null;case Z:return ie=gr(ie),oe(Q,q,ie,_e)}if(ge(ie)||J(ie))return $e!==null?null:ve(Q,q,ie,_e,null);if(typeof ie.then=="function")return oe(Q,q,Dl(ie),_e);if(ie.$$typeof===N)return oe(Q,q,wl(Q,ie),_e);Ll(Q,ie)}return null}function he(Q,q,ie,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(ie)||null,w(q,Q,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case b:return Q=Q.get(_e.key===null?ie:_e.key)||null,G(q,Q,_e,$e);case E:return Q=Q.get(_e.key===null?ie:_e.key)||null,re(q,Q,_e,$e);case Z:return _e=gr(_e),he(Q,q,ie,_e,$e)}if(ge(_e)||J(_e))return Q=Q.get(ie)||null,ve(q,Q,_e,$e,null);if(typeof _e.then=="function")return he(Q,q,ie,Dl(_e),$e);if(_e.$$typeof===N)return he(Q,q,ie,wl(q,_e),$e);Ll(q,_e)}return null}function je(Q,q,ie,_e){for(var $e=null,Dt=null,We=q,pt=q=0,bt=null;We!==null&&pt<ie.length;pt++){We.index>pt?(bt=We,We=null):bt=We.sibling;var Lt=oe(Q,We,ie[pt],_e);if(Lt===null){We===null&&(We=bt);break}t&&We&&Lt.alternate===null&&n(Q,We),q=d(Lt,q,pt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt,We=bt}if(pt===ie.length)return a(Q,We),wt&&Vi(Q,pt),$e;if(We===null){for(;pt<ie.length;pt++)We=Se(Q,ie[pt],_e),We!==null&&(q=d(We,q,pt),Dt===null?$e=We:Dt.sibling=We,Dt=We);return wt&&Vi(Q,pt),$e}for(We=o(We);pt<ie.length;pt++)bt=he(We,Q,pt,ie[pt],_e),bt!==null&&(t&&bt.alternate!==null&&We.delete(bt.key===null?pt:bt.key),q=d(bt,q,pt),Dt===null?$e=bt:Dt.sibling=bt,Dt=bt);return t&&We.forEach(function(Wa){return n(Q,Wa)}),wt&&Vi(Q,pt),$e}function at(Q,q,ie,_e){if(ie==null)throw Error(r(151));for(var $e=null,Dt=null,We=q,pt=q=0,bt=null,Lt=ie.next();We!==null&&!Lt.done;pt++,Lt=ie.next()){We.index>pt?(bt=We,We=null):bt=We.sibling;var Wa=oe(Q,We,Lt.value,_e);if(Wa===null){We===null&&(We=bt);break}t&&We&&Wa.alternate===null&&n(Q,We),q=d(Wa,q,pt),Dt===null?$e=Wa:Dt.sibling=Wa,Dt=Wa,We=bt}if(Lt.done)return a(Q,We),wt&&Vi(Q,pt),$e;if(We===null){for(;!Lt.done;pt++,Lt=ie.next())Lt=Se(Q,Lt.value,_e),Lt!==null&&(q=d(Lt,q,pt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt);return wt&&Vi(Q,pt),$e}for(We=o(We);!Lt.done;pt++,Lt=ie.next())Lt=he(We,Q,pt,Lt.value,_e),Lt!==null&&(t&&Lt.alternate!==null&&We.delete(Lt.key===null?pt:Lt.key),q=d(Lt,q,pt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt);return t&&We.forEach(function(Hy){return n(Q,Hy)}),wt&&Vi(Q,pt),$e}function Xt(Q,q,ie,_e){if(typeof ie=="object"&&ie!==null&&ie.type===T&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:e:{for(var $e=ie.key;q!==null;){if(q.key===$e){if($e=ie.type,$e===T){if(q.tag===7){a(Q,q.sibling),_e=u(q,ie.props.children),_e.return=Q,Q=_e;break e}}else if(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&gr($e)===q.type){a(Q,q.sibling),_e=u(q,ie.props),po(_e,ie),_e.return=Q,Q=_e;break e}a(Q,q);break}else n(Q,q);q=q.sibling}ie.type===T?(_e=fr(ie.props.children,Q.mode,_e,ie.key),_e.return=Q,Q=_e):(_e=El(ie.type,ie.key,ie.props,null,Q.mode,_e),po(_e,ie),_e.return=Q,Q=_e)}return y(Q);case E:e:{for($e=ie.key;q!==null;){if(q.key===$e)if(q.tag===4&&q.stateNode.containerInfo===ie.containerInfo&&q.stateNode.implementation===ie.implementation){a(Q,q.sibling),_e=u(q,ie.children||[]),_e.return=Q,Q=_e;break e}else{a(Q,q);break}else n(Q,q);q=q.sibling}_e=ju(ie,Q.mode,_e),_e.return=Q,Q=_e}return y(Q);case Z:return ie=gr(ie),Xt(Q,q,ie,_e)}if(ge(ie))return je(Q,q,ie,_e);if(J(ie)){if($e=J(ie),typeof $e!="function")throw Error(r(150));return ie=$e.call(ie),at(Q,q,ie,_e)}if(typeof ie.then=="function")return Xt(Q,q,Dl(ie),_e);if(ie.$$typeof===N)return Xt(Q,q,wl(Q,ie),_e);Ll(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,q!==null&&q.tag===6?(a(Q,q.sibling),_e=u(q,ie),_e.return=Q,Q=_e):(a(Q,q),_e=Vu(ie,Q.mode,_e),_e.return=Q,Q=_e),y(Q)):a(Q,q)}return function(Q,q,ie,_e){try{ho=0;var $e=Xt(Q,q,ie,_e);return $r=null,$e}catch(We){if(We===Jr||We===Cl)throw We;var Dt=Qn(29,We,null,Q.mode);return Dt.lanes=_e,Dt.return=Q,Dt}finally{}}}var _r=ym(!0),Sm=ym(!1),Ca=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),am(t,null,a),n}return Ml(t,o,n,a),bl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}function rf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function go(){if(sf){var t=Qr;if(t!==null)throw t}}function vo(t,n,a,o){sf=!1;var u=t.updateQueue;Ca=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,re=G.next;G.next=null,y===null?d=re:y.next=re,y=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==y&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=G))}if(d!==null){var Se=u.baseState;y=0,ve=re=G=null,w=d;do{var oe=w.lane&-536870913,he=oe!==w.lane;if(he?(Mt&oe)===oe:(o&oe)===oe){oe!==0&&oe===Kr&&(sf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var je=t,at=w;oe=n;var Xt=a;switch(at.tag){case 1:if(je=at.payload,typeof je=="function"){Se=je.call(Xt,Se,oe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=at.payload,oe=typeof je=="function"?je.call(Xt,Se,oe):je,oe==null)break e;Se=g({},Se,oe);break e;case 2:Ca=!0}}oe=w.callback,oe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=he,G=Se):ve=ve.next=he,y|=oe;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ve===null&&(G=Se),u.baseState=G,u.firstBaseUpdate=re,u.lastBaseUpdate=ve,d===null&&(u.shared.lanes=0),Ia|=y,t.lanes=y,t.memoizedState=Se}}function Mm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mm(a[t],n)}var es=U(null),Ul=U(0);function Em(t,n){t=ea,ue(Ul,t),ue(es,n),ea=t|n.baseLanes}function of(){ue(Ul,ea),ue(es,es.current)}function lf(){ea=Ul.current,j(es),j(Ul)}var Jn=U(null),fi=null;function La(t){var n=t.alternate;ue(an,an.current&1),ue(Jn,t),fi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(fi=t)}function cf(t){ue(an,an.current),ue(Jn,t),fi===null&&(fi=t)}function Tm(t){t.tag===22?(ue(an,an.current),ue(Jn,t),fi===null&&(fi=t)):Ua()}function Ua(){ue(an,an.current),ue(Jn,Jn.current)}function $n(t){j(Jn),fi===t&&(fi=null),j(an)}var an=U(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,dt=null,Vt=null,fn=null,Ol=!1,ts=!1,xr=!1,Il=0,_o=0,ns=null,Nx=0;function tn(){throw Error(r(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function ff(t,n,a,o,u,d){return Wi=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?l0:Af,xr=!1,d=a(o,u),xr=!1,ts&&(d=wm(n,a,o,u)),Am(t),d}function Am(t){I.H=So;var n=Vt!==null&&Vt.next!==null;if(Wi=0,fn=Vt=dt=null,Ol=!1,_o=0,ns=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Al(t)&&(dn=!0))}function wm(t,n,a,o){dt=t;var u=0;do{if(ts&&(ns=null),_o=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,fn=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=c0,d=n(a,o)}while(ts);return d}function Dx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(dt.flags|=1024),n}function df(){var t=Il!==0;return Il=0,t}function hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pf(t){if(Ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ol=!1}Wi=0,fn=Vt=dt=null,ts=!1,_o=Il=0,ns=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?dt.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(Vt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=fn===null?dt.memoizedState:fn.next;if(n!==null)fn=n,Vt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},fn===null?dt.memoizedState=fn=t:fn=fn.next=t}return fn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=_o;return _o+=1,ns===null&&(ns=[]),t=vm(ns,t,n),n=dt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?l0:Af),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===N)return wn(t)}throw Error(r(438,String(t)))}function mf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=rn();return gf(n,Vt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=y=null,G=null,re=n,ve=!1;do{var Se=re.lane&-536870913;if(Se!==re.lane?(Mt&Se)===Se:(Wi&Se)===Se){var oe=re.revertLane;if(oe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Se===Kr&&(ve=!0);else if((Wi&oe)===oe){re=re.next,oe===Kr&&(ve=!0);continue}else Se={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(w=G=Se,y=d):G=G.next=Se,dt.lanes|=oe,Ia|=oe;Se=re.action,xr&&a(d,Se),d=re.hasEagerState?re.eagerState:a(d,Se)}else oe={lane:Se,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(w=G=oe,y=d):G=G.next=oe,dt.lanes|=Se,Ia|=Se;re=re.next}while(re!==null&&re!==n);if(G===null?y=d:G.next=w,!Kn(d,t.memoizedState)&&(dn=!0,ve&&(a=Qr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Kn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(t,n,a){var o=dt,u=rn(),d=wt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Kn((Vt||u).memoizedState,a);if(y&&(u.memoizedState=a,dn=!0),u=u.queue,yf(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,is(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));d||(Wi&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=zl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Um(t)}function Dm(t,n,a){return a(function(){Lm(n)&&Um(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function Um(t){var n=ur(t,2);n!==null&&jn(n,t,2)}function _f(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),xr){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,gf(t,Vt,typeof o=="function"?o:qi)}function Lx(t,n,a,o,u){if(Gl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,y={};I.T=y;try{var w=a(u,o),G=I.S;G!==null&&G(y,w),Im(t,n,w)}catch(re){xf(t,n,re)}finally{d!==null&&y.types!==null&&(d.types=y.types),I.T=d}}else try{d=a(u,o),Im(t,n,d)}catch(re){xf(t,n,re)}}function Im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(t,n,o)},function(o){return xf(t,n,o)}):zm(t,n,a)}function zm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function xf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fm(t,n){return n}function Hm(t,n){if(wt){var a=Yt.formState;if(a!==null){e:{var o=dt;if(wt){if(Qt){t:{for(var u=Qt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=di(u.nextSibling),o=u.data==="F!";break e}}wa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=r0.bind(null,dt,o),o.dispatch=a,o=_f(!1),d=Tf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Lx.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function km(t){var n=rn();return Gm(n,Vt,t)}function Gm(t,n,a){if(n=gf(t,n,Fm)[0],t=Fl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(y){throw y===Jr?Cl:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,is(9,{destroy:void 0},Ux.bind(null,u,a),null)),[o,d,t]}function Ux(t,n){t.action=n}function Vm(t){var n=rn(),a=Vt;if(a!==null)return Gm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function is(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=zl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function jm(){return rn().memoizedState}function Hl(t,n,a,o){var u=Pn();dt.flags|=t,u.memoizedState=is(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&uf(o,Vt.memoizedState.deps)?u.memoizedState=is(n,d,a,o):(dt.flags|=t,u.memoizedState=is(1|n,d,a,o))}function Xm(t,n){Hl(8390656,8,t,n)}function yf(t,n){kl(2048,8,t,n)}function Px(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=zl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wm(t){var n=rn().memoizedState;return Px({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return kl(4,2,t,n)}function Ym(t,n){return kl(4,4,t,n)}function Zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Km(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Zm.bind(null,n,t),a)}function Sf(){}function Qm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),xr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$0(),dt.lanes|=t,Ia|=t,a)}function $m(t,n,a,o){return Kn(a,n)?a:es.current!==null?(t=Mf(t,a,o),Kn(t,n)||(dn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(Mt&261930)===0?(dn=!0,t.memoizedState=a):(t=$0(),dt.lanes|=t,Ia|=t,n)}function e0(t,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var y=I.T,w={};I.T=w,Tf(t,!1,n,a);try{var G=u(),re=I.S;if(re!==null&&re(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=Cx(G,o);yo(t,n,ve,ni(t))}else yo(t,n,o,ni(t))}catch(Se){yo(t,n,{then:function(){},status:"rejected",reason:Se},ni())}finally{F.p=d,y!==null&&w.types!==null&&(y.types=w.types),I.T=y}}function Ox(){}function bf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=t0(t).queue;e0(t,u,n,W,a===null?Ox:function(){return n0(t),a(o)})}function t0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function n0(t){var n=t0(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ni())}function Ef(){return wn(zo)}function i0(){return rn().memoizedState}function a0(){return rn().memoizedState}function Ix(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Na(a);var o=Da(n,t,a);o!==null&&(jn(o,n,a),mo(o,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function zx(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?s0(n,a):(a=ku(t,n,a,o),a!==null&&(jn(a,t,o),o0(a,n,o)))}function r0(t,n,a){var o=ni();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))s0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,w=d(y,a);if(u.hasEagerState=!0,u.eagerState=w,Kn(w,y))return Ml(t,n,u,0),Yt===null&&Sl(),!1}catch{}finally{}if(a=ku(t,n,u,o),a!==null)return jn(a,t,o),o0(a,n,o),!0}return!1}function Tf(t,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(r(479))}else n=ku(t,a,o,2),n!==null&&jn(n,t,2)}function Gl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function s0(t,n){ts=Ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function o0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}var So={readContext:wn,use:Bl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var l0={readContext:wn,use:Bl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(xr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(xr){Qe(!0);try{a(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=zx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=_f(t);var n=t.queue,a=r0.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(t,n){var a=Pn();return Mf(a,t,n)},useTransition:function(){var t=_f(!1);return t=e0.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Pn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(Mt&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,t),[t]),o.flags|=2048,is(9,{destroy:void 0},Nm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Yt.identifierPrefix;if(wt){var a=Li,o=Di;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ef,useFormState:Hm,useActionState:Hm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:mf,useCacheRefresh:function(){return Pn().memoizedState=Ix.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:wn,use:Bl,useCallback:Qm,useContext:wn,useEffect:yf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Fl,useRef:jm,useState:function(){return Fl(qi)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return $m(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Fl(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:Ef,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=rn();return Pm(a,Vt,t,n)},useMemoCache:mf,useCacheRefresh:a0};Af.useEffectEvent=Wm;var c0={readContext:wn,use:Bl,useCallback:Qm,useContext:wn,useEffect:yf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:vf,useRef:jm,useState:function(){return vf(qi)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return Vt===null?Mf(a,t,n):$m(a,Vt.memoizedState,t,n)},useTransition:function(){var t=vf(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:Ef,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=rn();return Vt!==null?Pm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:a0};c0.useEffectEvent=Wm;function wf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(jn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(jn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&(jn(n,t,a),mo(n,t,a))}};function u0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,d):!0}function f0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Rf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function d0(t){yl(t)}function h0(t){console.error(t)}function p0(t){yl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function m0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(t,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function g0(t){return t=Na(t),t.tag=3,t}function v0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){m0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){m0(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Bx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(t,o,u)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(t,o,u)),!1}throw Error(r(435,a.tag))}return ed(t,o,u),tc(),!1}if(wt)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(t=Error(r(422),{cause:o}),co(oi(t,a)))):(o!==qu&&(n=Error(r(423),{cause:o}),co(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Cf(t.stateNode,o,u),rf(t,u),nn!==4&&(nn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),Co===null?Co=[d]:Co.push(d),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cf(a.stateNode,o,t),rf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(za===null||!za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=g0(u),v0(u,t,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),dn=!1;function Rn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):_r(n,t.child,a,o)}function _0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return pr(n),o=ff(t,n,a,y,d,u),w=df(),t!==null&&!dn?(hf(t,n,u),Yi(t,n,u)):(wt&&w&&Xu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function x0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Gu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,y0(t,n,d,o,u)):(t=El(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Bf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(y,o)&&t.ref===n.ref)return Yi(t,n,u)}return n.flags|=1,t=Gi(d,o),t.ref=n.ref,t.return=n,n.child=t}function y0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(so(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,Bf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Yi(t,n,u)}return Df(t,n,a,o,u)}function S0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return M0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,d!==null?d.cachePool:null),d!==null?Em(n,d):of(),Tm(n);else return o=n.lanes=536870912,M0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Rl(n,d.cachePool),Em(n,d),Ua(),n.memoizedState=null):(t!==null&&Rl(n,null),of(),Ua());return Rn(t,n,u,a),n.child}function Mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(t,n,a,o,u){var d=ef();return d=d===null?null:{parent:un._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Rl(n,null),of(),Tm(n),t!==null&&Zr(t,n,o,!0),n.childLanes=u,null}function jl(t,n){return n=Wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function b0(t,n,a){return _r(n,t.child,null,a),t=jl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function Fx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=jl(n,o),n.lanes=536870912,Mo(null,t);if(cf(n),(t=Qt)?(t=O1(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return jl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=b0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(y=Zs(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,ur(t,y),jn(o,t,y),Nf;tc(),n=b0(t,n,a)}else t=d.treeContext,Qt=di(y.nextSibling),An=n,wt=!0,Aa=null,ui=!1,t!==null&&cm(n,t),n=jl(n,o),n.flags|=4096;return n}return t=Gi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return pr(n),a=ff(t,n,a,o,void 0,u),o=df(),t!==null&&!dn?(hf(t,n,u),Yi(t,n,u)):(wt&&o&&Xu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function E0(t,n,a,o,u,d){return pr(n),n.updateQueue=null,a=wm(n,o,a,u),Am(t),o=df(),t!==null&&!dn?(hf(t,n,d),Yi(t,n,d)):(wt&&o&&Xu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function T0(t,n,a,o,u){if(pr(n),n.stateNode===null){var d=Xr,y=a.contextType;typeof y=="object"&&y!==null&&(d=wn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},nf(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?wn(y):Xr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(wf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Rf.enqueueReplaceState(d,d.state,null),vo(n,o,d,u),go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,G=yr(a,w);d.props=G;var re=d.context,ve=a.contextType;y=Xr,typeof ve=="object"&&ve!==null&&(y=wn(ve));var Se=a.getDerivedStateFromProps;ve=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||re!==y)&&f0(n,d,o,y),Ca=!1;var oe=n.memoizedState;d.state=oe,vo(n,o,d,u),go(),re=n.memoizedState,w||oe!==re||Ca?(typeof Se=="function"&&(wf(n,a,Se,o),re=n.memoizedState),(G=Ca||u0(n,a,G,o,oe,re,y))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),d.props=o,d.state=re,d.context=y,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,af(t,n),y=n.memoizedProps,ve=yr(a,y),d.props=ve,Se=n.pendingProps,oe=d.context,re=a.contextType,G=Xr,typeof re=="object"&&re!==null&&(G=wn(re)),w=a.getDerivedStateFromProps,(re=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Se||oe!==G)&&f0(n,d,o,G),Ca=!1,oe=n.memoizedState,d.state=oe,vo(n,o,d,u),go();var he=n.memoizedState;y!==Se||oe!==he||Ca||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof w=="function"&&(wf(n,a,w,o),he=n.memoizedState),(ve=Ca||u0(n,a,ve,o,oe,he,G)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=G,o=ve):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Xl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=_r(n,t.child,null,u),n.child=_r(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Yi(t,n,u),t}function A0(t,n,a,o){return dr(),n.flags|=256,Rn(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:mm()}}function Pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function w0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?La(n):Ua(),(t=Qt)?(t=O1(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw wa(n);return gd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ua(),u=n.mode,w=Wl({mode:"hidden",children:w},u),o=fr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Uf(a),o.childLanes=Pf(t,y,a),n.memoizedState=Lf,Mo(null,o)):(La(n),Of(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=If(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),w=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),w=fr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,_r(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Pf(t,y,a),n.memoizedState=Lf,n=Mo(null,o));else if(La(n),gd(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var re=y.dgst;y=re,o=Error(r(419)),o.stack="",o.digest=y,co({value:o,source:null,stack:null}),n=If(t,n,a)}else if(dn||Zr(t,n,a,!1),y=(a&t.childLanes)!==0,dn||y){if(y=Yt,y!==null&&(o=Zs(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ur(t,o),jn(y,t,o),Nf;md(w)||tc(),n=If(t,n,a)}else md(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Qt=di(w.nextSibling),An=n,wt=!0,Aa=null,ui=!1,t!==null&&cm(n,t),n=Of(n,o.children),n.flags|=4096);return n}return u?(Ua(),w=o.fallback,u=n.mode,G=t.child,re=G.sibling,o=Gi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,re!==null?w=Gi(re,w):(w=fr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Mo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Uf(a):(u=w.cachePool,u!==null?(G=un._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=mm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Pf(t,y,a),n.memoizedState=Lf,Mo(t.child,o)):(La(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=Wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wl(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function If(t,n,a){return _r(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function R0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,a)}function zf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function C0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,w=(y&2)!==0;if(w?(y=y&1|2,n.flags|=128):y&=1,ue(an,y),Rn(t,n,o,a),o=wt?lo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,a,n);else if(t.tag===19)R0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}zf(n,!0,a,null,d,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function Hx(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Ra(n,un,t.memoizedState.cache),dr();break;case 27:case 5:Ae(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?w0(t,n,a):(La(n),t=Yi(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ue(an,an.current),o)break;return null;case 22:return n.lanes=0,S0(t,n,a,n.pendingProps);case 24:Ra(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Bf(t,a)&&(n.flags&128)===0)return dn=!1,Hx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,wt&&(n.flags&1048576)!==0&&lm(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=gr(n.elementType),n.type=t,typeof t=="function")Gu(t)?(o=yr(t,o),n.tag=1,n=T0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=_0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=x0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),T0(t,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,af(t,n),vo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ra(n,un,o),o!==d.cache&&Qu(n,[un],a,!0),go(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=A0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),co(u),n=A0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=di(t.firstChild),An=n,wt=!0,Aa=null,ui=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dr(),o===u){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Xl(t,n),t===null?(a=k1(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=lc(te.current).createElement(a),o[cn]=n,o[mn]=t,Cn(o,a,t),se(o),n.stateNode=o):n.memoizedState=k1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ae(n),t===null&&wt&&(o=n.stateNode=B1(n.type,n.pendingProps,te.current),An=n,ui=!0,u=Qt,ka(n.type)?(vd=u,Qt=di(o.firstChild)):Qt=u),Rn(t,n,n.pendingProps.children,a),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Qt)&&(o=gy(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Qt=di(o.firstChild),ui=!1,u=!0):u=!1),u||wa(n)),Ae(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,dd(u,d)?o=null:y!==null&&dd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(t,n,Dx,null,null,a),zo._currentValue=u),Xl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=vy(a,n.pendingProps,ui),a!==null?(n.stateNode=a,An=n,Qt=null,t=!0):t=!1),t||wa(n)),null;case 13:return w0(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=_r(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return _0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return x0(t,n,n.type,n.pendingProps,a);case 15:return y0(t,n,n.type,n.pendingProps,a);case 19:return C0(t,n,a);case 31:return Fx(t,n,a);case 22:return S0(t,n,a,n.pendingProps);case 24:return pr(n),o=wn(un),t===null?(u=ef(),u===null&&(u=Yt,d=Ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},nf(n),Ra(n,un,u)):((t.lanes&a)!==0&&(af(t,n),vo(n,null,null,a),go()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,un,o)):(o=d.cache,Ra(n,un,o),o!==u.cache&&Qu(n,[un],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(i1())t.flags|=8192;else throw vr=Nl,tf}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W1(n))if(i1())t.flags|=8192;else throw vr=Nl,tf}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Gt():536870912,t.lanes|=n,os|=n)}function bo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function kx(t,n,a){var o=n.pendingProps;switch(Wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Zi(n),d!==null?(Jt(n),D0(n,d)):(Jt(n),Ff(n,u,null,o,a))):d?d!==t.memoizedState?(Zi(n),Jt(n),D0(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zi(n),Jt(n),Ff(n,u,t,o,a)),null;case 27:if(Fe(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=xe.current,Yr(n)?um(n):(t=B1(u,o,a),n.stateNode=t,Zi(n))}return Jt(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(d=xe.current,Yr(n))um(n);else{var y=lc(te.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[cn]=n,d[mn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zi(n)}}return Jt(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||w1(t.nodeValue,a)),t||wa(n,!0)}else t=lc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Yr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Jt(n),null);case 4:return Ue(),t===null&&od(n.stateNode.containerInfo),Jt(n),null;case 10:return Xi(n.type),Jt(n),null;case 19:if(j(an),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)bo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Pl(t),d!==null){for(n.flags|=128,bo(o,!1),t=d.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rm(a,t),a=a.sibling;return ue(an,an.current&1|2),wt&&Vi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>Jl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!wt)return Jt(n),null}else 2*A()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=an.current,ue(an,u?a&1|2:a&1),wt&&Vi(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return $n(n),lf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&j(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gx(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(un),Ue(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(an),null;case 4:return Ue(),null;case 10:return Xi(n.type),null;case 22:case 23:return $n(n),lf(),t!==null&&j(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function L0(t,n){switch(Wu(n),n.tag){case 3:Xi(un),Ue();break;case 26:case 27:case 5:Fe(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:j(an);break;case 10:Xi(n.type);break;case 22:case 23:$n(n),lf(),t!==null&&j(mr);break;case 24:Xi(un)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(w){kt(n,n.return,w)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=n;var G=a,re=w;try{re()}catch(ve){kt(u,G,ve)}}}o=o.next}while(o!==d)}}catch(ve){kt(n,n.return,ve)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){kt(t,t.return,o)}}}function P0(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function O0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Hf(t,n,a){try{var o=t.stateNode;uy(o,t.type,a,n),o[mn]=n}catch(u){kt(t,t.return,u)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Gf(t,n,a),t=t.sibling;t!==null;)Gf(t,n,a),t=t.sibling}function Yl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[cn]=t,n[mn]=a}catch(d){kt(t,t.return,d)}}var Ki=!1,hn=!1,Vf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Vx(t,n){if(t=t.containerInfo,ud=mc,t=Kp(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,w=-1,G=-1,re=0,ve=0,Se=t,oe=null;t:for(;;){for(var he;Se!==a||u!==0&&Se.nodeType!==3||(w=y+u),Se!==d||o!==0&&Se.nodeType!==3||(G=y+o),Se.nodeType===3&&(y+=Se.nodeValue.length),(he=Se.firstChild)!==null;)oe=Se,Se=he;for(;;){if(Se===t)break t;if(oe===a&&++re===u&&(w=y),oe===d&&++ve===o&&(G=y),(he=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=he}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:t,selectionRange:a},mc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=yr(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){kt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function F0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),o&4&&Eo(5,a);break;case 1:if(Ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}o&64&&U0(a),o&512&&To(a,a.return);break;case 3:if(Ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:Ji(t,a),n===null&&o&4&&O0(a),o&512&&To(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),o&4&&G0(t,a);break;case 13:Ji(t,a),o&4&&V0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jx.bind(null,a),_y(t,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||hn,u=Ki;var d=hn;Ki=o,(hn=n)&&!d?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=u,hn=d}break;case 30:break;default:Ji(t,a)}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Js(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Hn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)k0(t,n,a),a=a.sibling}function k0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:hn||Ui(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ui(a,n);var o=$t,u=Hn;ka(a.type)&&($t=a.stateNode,Hn=!1),Qi(t,n,a),Po(a.stateNode),$t=o,Hn=u;break;case 5:hn||Ui(a,n);case 6:if(o=$t,u=Hn,$t=null,Qi(t,n,a),$t=o,Hn=u,$t!==null)if(Hn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:$t!==null&&(Hn?(t=$t,U1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):U1($t,a.stateNode));break;case 4:o=$t,u=Hn,$t=a.stateNode.containerInfo,Hn=!0,Qi(t,n,a),$t=o,Hn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),Qi(t,n,a);break;case 1:hn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&P0(a,n,o)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Qi(t,n,a),hn=o;break;default:Qi(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){kt(n,n.return,a)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){kt(n,n.return,a)}}function jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(r(435,t.tag))}}function Zl(t,n){var a=jx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=$x.bind(null,t,o);o.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(ka(w.type)){$t=w.stateNode,Hn=!1;break e}break;case 5:$t=w.stateNode,Hn=!1;break e;case 3:case 4:$t=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if($t===null)throw Error(r(160));k0(d,y,u),$t=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j0(n,t),n=n.sibling}var Mi=null;function j0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Gn(t),o&4&&(Pa(3,t,t.return),Eo(3,t),Pa(5,t,t.return));break;case 1:kn(n,t),Gn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(kn(n,t),Gn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[sr]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[cn]=t,se(d),o=d;break e;case"link":var y=j1("link","href",u).get(o+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=j1("meta","content",u).get(o+(a.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,se(d),o=d}t.stateNode=o}else X1(u,t.type,t.stateNode);else t.stateNode=V1(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?X1(u,t.type,t.stateNode):V1(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Gn(t),o&512&&(hn||a===null||Ui(a,a.return)),a!==null&&o&4&&Hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Gn(t),o&512&&(hn||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{Ni(u,"")}catch(je){kt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Hf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Vf=!0);break;case 6:if(kn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){kt(t,t.return,je)}}break;case 3:if(fc=null,u=Mi,Mi=cc(n.containerInfo),kn(n,t),Mi=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(je){kt(t,t.return,je)}Vf&&(Vf=!1,X0(t));break;case 4:o=Mi,Mi=cc(t.stateNode.containerInfo),kn(n,t),Gn(t),Mi=o;break;case 12:kn(n,t),Gn(t);break;case 31:kn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:kn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,re=Ki,ve=hn;if(Ki=re||u,hn=ve||G,kn(n,t),hn=ve,Ki=re,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ki||hn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=G.stateNode;var Se=G.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(je){kt(G,G.return,je)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(je){kt(G,G.return,je)}}}else if(n.tag===18){if(a===null){G=n;try{var he=G.stateNode;u?P1(he,!0):P1(G.stateNode,!1)}catch(je){kt(G,G.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:kn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:kn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(I0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=kf(t);Yl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ni(y,""),a.flags&=-33);var w=kf(t);Yl(t,w,y);break;case 3:case 4:var G=a.stateNode.containerInfo,re=kf(t);Gf(t,re,G);break;default:throw Error(r(161))}}catch(ve){kt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),Sr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),Sr(n);break;case 27:Po(n.stateNode);case 26:case 5:Ui(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:$i(u,d,a),Eo(4,d);break;case 1:if($i(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){kt(o,o.return,re)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Mm(G[u],w)}catch(re){kt(o,o.return,re)}}a&&y&64&&U0(d),To(d,d.return);break;case 27:z0(d);case 26:case 5:$i(u,d,a),a&&o===null&&y&4&&O0(d),To(d,d.return);break;case 12:$i(u,d,a);break;case 31:$i(u,d,a),a&&y&4&&G0(u,d);break;case 13:$i(u,d,a),a&&y&4&&V0(u,d);break;case 22:d.memoizedState===null&&$i(u,d,a),To(d,d.return);break;case 30:break;default:$i(u,d,a)}n=n.sibling}}function jf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,a,o),n=n.sibling}function W0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&Eo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){kt(n,n.return,G)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?bi(t,n,a,o):Ao(t,n):d._visibility&2?bi(t,n,a,o):(d._visibility|=2,as(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jf(y,n);break;case 24:bi(t,n,a,o),u&2048&&Xf(n.alternate,n);break;default:bi(t,n,a,o)}}function as(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,w=a,G=o,re=y.flags;switch(y.tag){case 0:case 11:case 15:as(d,y,w,G,u),Eo(8,y);break;case 23:break;case 22:var ve=y.stateNode;y.memoizedState!==null?ve._visibility&2?as(d,y,w,G,u):Ao(d,y):(ve._visibility|=2,as(d,y,w,G,u)),u&&re&2048&&jf(y.alternate,y);break;case 24:as(d,y,w,G,u),u&&re&2048&&Xf(y.alternate,y);break;default:as(d,y,w,G,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&jf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Xf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function rs(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&wo&&t.memoizedState!==null&&Ny(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var o=Mi;Mi=cc(t.stateNode.containerInfo),rs(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,rs(t,n,a),wo=o):rs(t,n,a));break;default:rs(t,n,a)}}function Y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,K0(o,t)}Y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Z0(t),t=t.sibling}function Z0(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Ro(t);break;default:Ro(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,K0(o,t)}Y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function K0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(H0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var Xx={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,It=0,Yt=null,yt=null,Mt=0,Ht=0,ei=null,Oa=!1,ss=!1,Wf=!1,ea=0,nn=0,Ia=0,Mr=0,qf=0,ti=0,os=0,Co=null,Vn=null,Yf=!1,Ql=0,Q0=0,Jl=1/0,$l=null,za=null,vn=0,Ba=null,ls=null,ta=0,Zf=0,Kf=null,J0=null,No=0,Qf=null;function ni(){return(It&2)!==0&&Mt!==0?Mt&-Mt:I.T!==null?id():Ks()}function $0(){if(ti===0)if((Mt&536870912)===0||wt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function jn(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(cs(t,0),Fa(t,Mt,ti,!1)),Nn(t,a),((It&2)===0||t!==Yt)&&(t===Yt&&((It&2)===0&&(Mr|=a),nn===4&&Fa(t,Mt,ti,!1)),Pi(t))}function e1(t,n,a){if((It&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ge(t,n),u=o?Zx(t,n):$f(t,n,!0),d=o;do{if(u===0){ss&&!o&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!qx(a)){u=$f(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var w=t;u=Co;var G=w.current.memoizedState.isDehydrated;if(G&&(cs(w,y).flags|=256),y=$f(w,y,!1),y!==2){if(Wf&&!G){w.errorRecoveryDisabledLanes|=d,Mr|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){cs(t,0),Fa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(o,n,ti,!Oa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ql+300-A(),10<u)){if(Fa(o,n,ti,!Oa),Me(o,0,!0)!==0)break e;ta=n,o.timeoutHandle=D1(t1.bind(null,o,a,Vn,$l,Yf,n,ti,Mr,os,Oa,d,"Throttled",-0,0),u);break e}t1(o,a,Vn,$l,Yf,n,ti,Mr,os,Oa,d,null,-0,0)}}break}while(!0);Pi(t)}function t1(t,n,a,o,u,d,y,w,G,re,ve,Se,oe,he){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},q0(n,d,Se);var je=(d&62914560)===d?Ql-A():(d&4194048)===d?Q0-A():0;if(je=Dy(Se,je),je!==null){ta=d,t.cancelPendingCommit=je(c1.bind(null,t,n,d,a,o,u,y,w,G,ve,Se,null,oe,he)),Fa(t,d,y,!re);return}}c1(t,n,d,a,o,u,y,w,G)}function qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,o){n&=~qf,n&=~Mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Xe(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&fl(t,a,n)}function ec(){return(It&6)===0?(Do(0),!1):!0}function Jf(){if(yt!==null){if(Ht===0)var t=yt.return;else t=yt,ji=hr=null,pf(t),$r=null,ho=0,t=yt;for(;t!==null;)L0(t.alternate,t),t=t.return;yt=null}}function cs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Jf(),Yt=t,yt=a=Gi(t.current,null),Mt=n,Ht=0,ei=null,Oa=!1,ss=Ge(t,n),Wf=!1,os=ti=qf=Mr=Ia=nn=0,Vn=Co=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),d=1<<u;n|=t[u],o&=~d}return ea=n,Sl(),a}function n1(t,n){dt=null,I.H=So,n===Jr||n===Cl?(n=_m(),Ht=3):n===tf?(n=_m(),Ht=4):Ht=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,yt===null&&(nn=1,Vl(t,oi(n,t.current)))}function i1(){var t=Jn.current;return t===null?!0:(Mt&4194048)===Mt?fi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===fi:!1}function a1(){var t=I.H;return I.H=So,t===null?So:t}function r1(){var t=I.A;return I.A=Xx,t}function tc(){nn=4,Oa||(Mt&4194048)!==Mt&&Jn.current!==null||(ss=!0),(Ia&134217727)===0&&(Mr&134217727)===0||Yt===null||Fa(Yt,Mt,ti,!1)}function $f(t,n,a){var o=It;It|=2;var u=a1(),d=r1();(Yt!==t||Mt!==n)&&($l=null,cs(t,n)),n=!1;var y=nn;e:do try{if(Ht!==0&&yt!==null){var w=yt,G=ei;switch(Ht){case 8:Jf(),y=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var re=Ht;if(Ht=0,ei=null,us(t,w,G,re),a&&ss){y=0;break e}break;default:re=Ht,Ht=0,ei=null,us(t,w,G,re)}}Yx(),y=nn;break}catch(ve){n1(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ji=hr=null,It=o,I.H=u,I.A=d,yt===null&&(Yt=null,Mt=0,Sl()),y}function Yx(){for(;yt!==null;)s1(yt)}function Zx(t,n){var a=It;It|=2;var o=a1(),u=r1();Yt!==t||Mt!==n?($l=null,Jl=A()+500,cs(t,n)):ss=Ge(t,n);e:do try{if(Ht!==0&&yt!==null){n=yt;var d=ei;t:switch(Ht){case 1:Ht=0,ei=null,us(t,n,d,1);break;case 2:case 9:if(gm(d)){Ht=0,ei=null,o1(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Pi(t)},d.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:gm(d)?(Ht=0,ei=null,o1(n)):(Ht=0,ei=null,us(t,n,d,7));break;case 5:var y=null;switch(yt.tag){case 26:y=yt.memoizedState;case 5:case 27:var w=yt;if(y?W1(y):w.stateNode.complete){Ht=0,ei=null;var G=w.sibling;if(G!==null)yt=G;else{var re=w.return;re!==null?(yt=re,nc(re)):yt=null}break t}}Ht=0,ei=null,us(t,n,d,5);break;case 6:Ht=0,ei=null,us(t,n,d,6);break;case 8:Jf(),nn=6;break e;default:throw Error(r(462))}}Kx();break}catch(ve){n1(t,ve)}while(!0);return ji=hr=null,I.H=o,I.A=u,It=a,yt!==null?0:(Yt=null,Mt=0,Sl(),nn)}function Kx(){for(;yt!==null&&!ot();)s1(yt)}function s1(t){var n=N0(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?nc(t):yt=n}function o1(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:pf(n);default:L0(a,n),n=yt=rm(n,ea),n=N0(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?nc(t):yt=n}function us(t,n,a,o){ji=hr=null,pf(n),$r=null,ho=0;var u=n.return;try{if(Bx(t,u,n,a,Mt)){nn=1,Vl(t,oi(a,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;nn=1,Vl(t,oi(a,t.current)),yt=null;return}n.flags&32768?(wt||o===1?t=!0:ss||(Mt&536870912)!==0?t=!1:(Oa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),l1(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){l1(n,Oa);return}t=n.return;var a=kx(n.alternate,n,ea);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);nn===0&&(nn=5)}function l1(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);nn=6,yt=null}function c1(t,n,a,o,u,d,y,w,G){t.cancelPendingCommit=null;do ic();while(vn!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Hu,Yn(t,a,d,y,w,G),t===Yt&&(yt=Yt=null,Mt=0),ls=n,Ba=t,ta=a,Zf=d,Kf=u,J0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ey(me,function(){return p1(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=F.p,F.p=2,y=It,It|=4;try{Vx(t,n,a)}finally{It=y,F.p=u,I.T=o}}vn=1,u1(),f1(),d1()}}function u1(){if(vn===1){vn=0;var t=Ba,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=It;It|=4;try{j0(n,t);var d=fd,y=Kp(t.containerInfo),w=d.focusedElem,G=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&Zp(w.ownerDocument.documentElement,w)){if(G!==null&&Ou(w)){var re=G.start,ve=G.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var Se=w.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var he=oe.getSelection(),je=w.textContent.length,at=Math.min(G.start,je),Xt=G.end===void 0?at:Math.min(G.end,je);!he.extend&&at>Xt&&(y=Xt,Xt=at,at=y);var Q=Yp(w,at),q=Yp(w,Xt);if(Q&&q&&(he.rangeCount!==1||he.anchorNode!==Q.node||he.anchorOffset!==Q.offset||he.focusNode!==q.node||he.focusOffset!==q.offset)){var ie=Se.createRange();ie.setStart(Q.node,Q.offset),he.removeAllRanges(),at>Xt?(he.addRange(ie),he.extend(q.node,q.offset)):(ie.setEnd(q.node,q.offset),he.addRange(ie))}}}}for(Se=[],he=w;he=he.parentNode;)he.nodeType===1&&Se.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var _e=Se[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}mc=!!ud,fd=ud=null}finally{It=u,F.p=o,I.T=a}}t.current=n,vn=2}}function f1(){if(vn===2){vn=0;var t=Ba,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=It;It|=4;try{F0(t,n.alternate,n)}finally{It=u,F.p=o,I.T=a}}vn=3}}function d1(){if(vn===4||vn===3){vn=0,B();var t=Ba,n=ls,a=ta,o=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,ls=Ba=null,h1(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(za=null),rr(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=F.p,F.p=2,I.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];d(w.value,{componentStack:w.stack})}}finally{I.T=n,F.p=u}}(ta&3)!==0&&ic(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qf?No++:(No=0,Qf=t):No=0,Do(0)}}function h1(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function ic(){return u1(),f1(),d1(),p1()}function p1(){if(vn!==5)return!1;var t=Ba,n=Zf;Zf=0;var a=rr(ta),o=I.T,u=F.p;try{F.p=32>a?32:a,I.T=null,a=Kf,Kf=null;var d=Ba,y=ta;if(vn=0,ls=Ba=null,ta=0,(It&6)!==0)throw Error(r(331));var w=It;if(It|=4,Z0(d.current),W0(d,d.current,y,a),It=w,Do(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,d)}catch{}return!0}finally{F.p=u,I.T=o,h1(t,n)}}function m1(t,n,a){n=oi(a,n),n=Cf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Nn(t,2),Pi(t))}function kt(t,n,a){if(t.tag===3)m1(t,t,a);else for(;n!==null;){if(n.tag===3){m1(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){t=oi(a,t),a=g0(2),o=Da(n,a,2),o!==null&&(v0(a,o,n,t),Nn(o,2),Pi(o));break}}n=n.return}}function ed(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Wf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(Mt&a)===a&&(nn===4||nn===3&&(Mt&62914560)===Mt&&300>A()-Ql?(It&2)===0&&cs(t,0):qf|=a,os===Mt&&(os=0)),Pi(t)}function g1(t,n){n===0&&(n=Gt()),t=ur(t,n),t!==null&&(Nn(t,n),Pi(t))}function Jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),g1(t,a)}function $x(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),g1(t,a)}function ey(t,n){return Bt(t,n)}var ac=null,fs=null,td=!1,rc=!1,nd=!1,Ha=0;function Pi(t){t!==fs&&t.next===null&&(fs===null?ac=fs=t:fs=fs.next=t),rc=!0,td||(td=!0,ny())}function Do(t,n){if(!nd&&rc){nd=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=u&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,y1(o,d))}else d=Mt,d=Me(o,o===Yt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ge(o,d)||(a=!0,y1(o,d));o=o.next}while(a);nd=!1}}function ty(){v1()}function v1(){rc=td=!1;var t=0;Ha!==0&&dy()&&(t=Ha);for(var n=A(),a=null,o=ac;o!==null;){var u=o.next,d=_1(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(fs=a)):(a=o,(t!==0||(d&3)!==0)&&(rc=!0)),o=u}vn!==0&&vn!==5||Do(t),Ha!==0&&(Ha=0)}function _1(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Xe(d),w=1<<y,G=u[y];G===-1?((w&a)===0||(w&o)!==0)&&(u[y]=lt(w,n)):G<=n&&(t.expiredLanes|=w),d&=~w}if(n=Yt,a=Mt,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ge(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),rr(a)){case 2:case 8:a=Ee;break;case 32:a=me;break;case 268435456:a=Ie;break;default:a=me}return o=x1.bind(null,t),a=Bt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function x1(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=Mt;return o=Me(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(e1(t,o,n),_1(t,A()),t.callbackNode!=null&&t.callbackNode===a?x1.bind(null,t):null)}function y1(t,n){if(ic())return null;e1(t,n,!0)}function ny(){py(function(){(It&6)!==0?Bt(ye,ty):v1()})}function id(){if(Ha===0){var t=Kr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Ha=t}return Ha}function S1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function M1(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=S1((u[mn]||null).action),y=o.submitter;y&&(n=(n=y[mn]||null)?S1(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var w=new vl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var G=y?M1(u,y):new FormData(u);bf(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=y?M1(u,y):new FormData(u),bf(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var ad=0;ad<Fu.length;ad++){var rd=Fu[ad],ay=rd.toLowerCase(),ry=rd[0].toUpperCase()+rd.slice(1);Si(ay,"on"+ry)}Si($p,"onAnimationEnd"),Si(em,"onAnimationIteration"),Si(tm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Sx,"onTransitionRun"),Si(Mx,"onTransitionStart"),Si(bx,"onTransitionCancel"),Si(nm,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function b1(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var w=o[y],G=w.instance,re=w.currentTarget;if(w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ve){yl(ve)}u.currentTarget=null,d=G}else for(y=0;y<o.length;y++){if(w=o[y],G=w.instance,re=w.currentTarget,w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ve){yl(ve)}u.currentTarget=null,d=G}}}}function St(t,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var o=t+"__bubble";a.has(o)||(E1(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),E1(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function od(t){if(!t[sc]){t[sc]=!0,ee.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,sd("selectionchange",!1,n))}}function E1(t,n,a,o){switch($1(n)){case 2:var u=Py;break;case 8:u=Oy;break;default:u=Md}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ld(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=Ma(w),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=d=y;continue e}w=w.parentNode}}o=o.return}Cp(function(){var re=d,ve=Eu(a),Se=[];e:{var oe=im.get(t);if(oe!==void 0){var he=vl,je=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":he=$_;break;case"focusin":je="focus",he=Nu;break;case"focusout":je="blur",he=Nu;break;case"beforeblur":case"afterblur":he=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=nx;break;case $p:case em:case tm:he=j_;break;case nm:he=ax;break;case"scroll":case"scrollend":he=F_;break;case"wheel":he=sx;break;case"copy":case"cut":case"paste":he=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Pp;break;case"toggle":case"beforetoggle":he=lx}var at=(n&4)!==0,Xt=!at&&(t==="scroll"||t==="scrollend"),Q=at?oe!==null?oe+"Capture":null:oe;at=[];for(var q=re,ie;q!==null;){var _e=q;if(ie=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ie===null||Q===null||(_e=$s(q,Q),_e!=null&&at.push(Uo(q,_e,ie))),Xt)break;q=q.return}0<at.length&&(oe=new he(oe,je,null,a,ve),Se.push({event:oe,listeners:at}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",oe&&a!==bu&&(je=a.relatedTarget||a.fromElement)&&(Ma(je)||je[zi]))break e;if((he||oe)&&(oe=ve.window===ve?ve:(oe=ve.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(je=a.relatedTarget||a.toElement,he=re,je=je?Ma(je):null,je!==null&&(Xt=c(je),at=je.tag,je!==Xt||at!==5&&at!==27&&at!==6)&&(je=null)):(he=null,je=re),he!==je)){if(at=Lp,_e="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(at=Pp,_e="onPointerLeave",Q="onPointerEnter",q="pointer"),Xt=he==null?oe:K(he),ie=je==null?oe:K(je),oe=new at(_e,q+"leave",he,a,ve),oe.target=Xt,oe.relatedTarget=ie,_e=null,Ma(ve)===re&&(at=new at(Q,q+"enter",je,a,ve),at.target=ie,at.relatedTarget=Xt,_e=at),Xt=_e,he&&je)t:{for(at=oy,Q=he,q=je,ie=0,_e=Q;_e;_e=at(_e))ie++;_e=0;for(var $e=q;$e;$e=at($e))_e++;for(;0<ie-_e;)Q=at(Q),ie--;for(;0<_e-ie;)q=at(q),_e--;for(;ie--;){if(Q===q||q!==null&&Q===q.alternate){at=Q;break t}Q=at(Q),q=at(q)}at=null}else at=null;he!==null&&T1(Se,oe,he,at,!1),je!==null&&Xt!==null&&T1(Se,Xt,je,at,!0)}}e:{if(oe=re?K(re):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var Dt=Gp;else if(Hp(oe))if(Vp)Dt=_x;else{Dt=gx;var We=mx}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?re&&Mu(re.elementType)&&(Dt=Gp):Dt=vx;if(Dt&&(Dt=Dt(t,re))){kp(Se,Dt,a,ve);break e}We&&We(t,oe,re),t==="focusout"&&re&&oe.type==="number"&&re.memoizedProps.value!=null&&Sn(oe,"number",oe.value)}switch(We=re?K(re):window,t){case"focusin":(Hp(We)||We.contentEditable==="true")&&(Gr=We,Iu=re,oo=null);break;case"focusout":oo=Iu=Gr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Qp(Se,a,ve);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Qp(Se,a,ve)}var pt;if(Lu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else kr?Bp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Op&&a.locale!=="ko"&&(kr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&kr&&(pt=Np()):(Ea=ve,wu="value"in Ea?Ea.value:Ea.textContent,kr=!0)),We=oc(re,bt),0<We.length&&(bt=new Up(bt,t,null,a,ve),Se.push({event:bt,listeners:We}),pt?bt.data=pt:(pt=Fp(a),pt!==null&&(bt.data=pt)))),(pt=ux?fx(t,a):dx(t,a))&&(bt=oc(re,"onBeforeInput"),0<bt.length&&(We=new Up("onBeforeInput","beforeinput",null,a,ve),Se.push({event:We,listeners:bt}),We.data=pt)),iy(Se,t,re,a,ve)}b1(Se,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=$s(t,a),u!=null&&o.unshift(Uo(t,u,d)),u=$s(t,n),u!=null&&o.push(Uo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T1(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var w=a,G=w.alternate,re=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||re===null||(G=re,u?(re=$s(a,d),re!=null&&y.unshift(Uo(a,re,G))):u||(re=$s(a,d),re!=null&&y.push(Uo(a,re,G)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function A1(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function w1(t,n){return n=A1(n),A1(t)===n}function jt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(t,""+o);break;case"className":Rt(t,"class",o);break;case"tabIndex":Rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(t,a,o);break;case"style":wp(t,o,d);break;case"data":if(n!=="object"){Rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=hl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z_.get(a)||a,ht(t,a,o))}}function cd(t,n,a,o,u,d){switch(a){case"style":wp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&Ni(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,d,y,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),o&&jt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var w=d=y=u=null,G=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":y=ve;break;case"checked":G=ve;break;case"defaultChecked":re=ve;break;case"value":d=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:jt(t,n,o,ve,a,null)}}Kt(t,d,w,G,re,y,u,!1);return;case"select":St("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:jt(t,n,u,w,a,null)}n=d,a=y,t.multiple=!!o,n!=null?gn(t,!!o,n,!1):a!=null&&gn(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:jt(t,n,y,w,a,null)}Tn(t,o,u,d);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:jt(t,n,G,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)St(Lo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,re,o,a,null)}return;default:if(Mu(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&cd(t,n,ve,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&jt(t,n,w,o,a,null))}function uy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,w=null,G=null,re=null,ve=null;for(he in a){var Se=a[he];if(a.hasOwnProperty(he)&&Se!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=Se;default:o.hasOwnProperty(he)||jt(t,n,he,null,o,Se)}}for(var oe in o){var he=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(he!=null||Se!=null))switch(oe){case"type":d=he;break;case"name":u=he;break;case"checked":re=he;break;case"defaultChecked":ve=he;break;case"value":y=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Se&&jt(t,n,oe,he,o,Se)}}Bi(t,y,w,G,re,ve,d,u);return;case"select":he=y=w=oe=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":he=G;default:o.hasOwnProperty(d)||jt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":oe=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==G&&jt(t,n,u,d,o,G)}n=w,a=y,o=he,oe!=null?gn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:jt(t,n,w,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":oe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&jt(t,n,y,u,o,d)}Mn(t,oe,he);return;case"option":for(var je in a)if(oe=a[je],a.hasOwnProperty(je)&&oe!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:jt(t,n,je,null,o,oe)}for(G in o)if(oe=o[G],he=a[G],o.hasOwnProperty(G)&&oe!==he&&(oe!=null||he!=null))switch(G){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:jt(t,n,G,oe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)oe=a[at],a.hasOwnProperty(at)&&oe!=null&&!o.hasOwnProperty(at)&&jt(t,n,at,null,o,oe);for(re in o)if(oe=o[re],he=a[re],o.hasOwnProperty(re)&&oe!==he&&(oe!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:jt(t,n,re,oe,o,he)}return;default:if(Mu(n)){for(var Xt in a)oe=a[Xt],a.hasOwnProperty(Xt)&&oe!==void 0&&!o.hasOwnProperty(Xt)&&cd(t,n,Xt,void 0,o,oe);for(ve in o)oe=o[ve],he=a[ve],!o.hasOwnProperty(ve)||oe===he||oe===void 0&&he===void 0||cd(t,n,ve,oe,o,he);return}}for(var Q in a)oe=a[Q],a.hasOwnProperty(Q)&&oe!=null&&!o.hasOwnProperty(Q)&&jt(t,n,Q,null,o,oe);for(Se in o)oe=o[Se],he=a[Se],!o.hasOwnProperty(Se)||oe===he||oe==null&&he==null||jt(t,n,Se,oe,o,he)}function R1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,w=u.duration;if(d&&w&&R1(y)){for(y=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],re=G.startTime;if(re>w)break;var ve=G.transferSize,Se=G.initiatorType;ve&&R1(Se)&&(G=G.responseEnd,y+=ve*(G<w?1:(w-re)/(G-re)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,fd=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function C1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N1(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function dy(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var D1=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,L1=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof L1<"u"?function(t){return L1.resolve(null).then(t).catch(my)}:D1;function my(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function U1(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ms(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[sr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);ms(n)}function P1(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),Js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function vy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function O1(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$?"||t.data==="$~"}function gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _y(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function I1(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function z1(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function B1(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Js(t)}var hi=new Map,F1=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=F.d;F.d={f:xy,r:yy,D:Sy,C:My,L:by,m:Ey,X:Ay,S:Ty,M:wy};function xy(){var t=na.f(),n=ec();return t||n}function yy(t){var n=D(t);n!==null&&n.tag===5&&n.type==="form"?n0(n):na.r(t)}var ds=typeof document>"u"?null:document;function H1(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F1.has(u)||(F1.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function Sy(t){na.D(t),H1("dns-prefetch",t,null)}function My(t,n){na.C(t,n),H1("preconnect",t,n)}function by(t,n,a){na.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(n){case"style":d=hs(t);break;case"script":d=ps(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Io(d))||(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function Ey(t,n){na.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(d)))return}o=a.createElement("link"),Cn(o,"link",t),se(o),a.head.appendChild(o)}}}function Ty(t,n,a){na.S(t,n,a);var o=ds;if(o&&t){var u=ce(o).hoistableStyles,d=hs(t);n=n||"default";var y=u.get(d);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Oo(d)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&_d(t,a);var G=y=o.createElement("link");se(G),Cn(G,"link",t),G._p=new Promise(function(re,ve){G.onload=re,G.onerror=ve}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,uc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(d,y)}}}function Ay(t,n){na.X(t,n);var a=ds;if(a&&t){var o=ce(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&xd(t,n),d=a.createElement("script"),se(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function wy(t,n){na.M(t,n);var a=ds;if(a&&t){var o=ce(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&xd(t,n),d=a.createElement("script"),se(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function k1(t,n,a,o){var u=(u=te.current)?cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ce(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var d=ce(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Oo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||Ry(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ce(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+Zt(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function G1(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),se(n),t.head.appendChild(n))}function ps(t){return'[src="'+Zt(t)+'"]'}function Io(t){return"script[async]"+t}function V1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,se(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),se(o),Cn(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var d=t.querySelector(Oo(u));if(d)return n.state.loading|=4,n.instance=d,se(d),d;o=G1(a),(u=hi.get(u))&&_d(o,u),d=(t.ownerDocument||t).createElement("link"),se(d);var y=d;return y._p=new Promise(function(w,G){y.onload=w,y.onerror=G}),Cn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,t),n.instance=d;case"script":return d=ps(a.src),(u=t.querySelector(Io(d)))?(n.instance=u,se(u),u):(o=a,(u=hi.get(d))&&(o=g({},a),xd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function j1(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[sr]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var w=o.get(y);w?w.push(d):o.set(y,[d])}}return o}function X1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ny(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(o.href),d=n.querySelector(Oo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,se(d);return}d=n.ownerDocument||n,o=G1(o),(u=hi.get(u))&&_d(o,u),d=d.createElement("link"),se(d);var y=d;y._p=new Promise(function(w,G){y.onload=w,y.onerror=G}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function Dy(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(Ly,t),hc=null,dc.call(t))}function Ly(t,n){if(!(n.state.loading&4)){var a=hc.get(t);if(a)var o=a.get(null);else{a=new Map,hc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Uy(t,n,a,o,u,d,y,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function q1(t,n,a,o,u,d,y,w,G,re,ve,Se){return t=new Uy(t,n,a,y,G,re,ve,Se,w),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),t.current=d,d.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},nf(d),t}function Y1(t){return t?(t=Xr,t):Xr}function Z1(t,n,a,o,u,d){u=Y1(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Da(t,o,n),a!==null&&(jn(a,t,n),mo(a,t,n))}function K1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sd(t,n){K1(t,n),(t=t.alternate)&&K1(t,n)}function Q1(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&jn(n,t,67108864),Sd(t,67108864)}}function J1(t){if(t.tag===13||t.tag===31){var n=ni();n=yi(n);var a=ur(t,n);a!==null&&jn(a,t,n),Sd(t,n)}}var mc=!0;function Py(t,n,a,o){var u=I.T;I.T=null;var d=F.p;try{F.p=2,Md(t,n,a,o)}finally{F.p=d,I.T=u}}function Oy(t,n,a,o){var u=I.T;I.T=null;var d=F.p;try{F.p=8,Md(t,n,a,o)}finally{F.p=d,I.T=u}}function Md(t,n,a,o){if(mc){var u=bd(o);if(u===null)ld(t,n,o,gc,a),eg(t,o);else if(zy(u,t,n,a,o))o.stopPropagation();else if(eg(t,o),n&4&&-1<Iy.indexOf(t)){for(;u!==null;){var d=D(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=we(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var G=1<<31-Xe(y);w.entanglements[1]|=G,y&=~G}Pi(d),(It&6)===0&&(Jl=A()+500,Do(0))}}break;case 31:case 13:w=ur(d,2),w!==null&&jn(w,d,2),ec(),Sd(d,2)}if(d=bd(o),d===null&&ld(t,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ld(t,n,o,null,a)}}function bd(t){return t=Eu(t),Ed(t)}var gc=null;function Ed(t){if(gc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function $1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case ye:return 2;case Ee:return 8;case me:case Ke:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Td=!1,Ga=null,Va=null,ja=null,Bo=new Map,Fo=new Map,Xa=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=D(n),n!==null&&Q1(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zy(t,n,a,o,u){switch(n){case"focusin":return Ga=Ho(Ga,t,n,a,o,u),!0;case"dragenter":return Va=Ho(Va,t,n,a,o,u),!0;case"mouseover":return ja=Ho(ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Ho(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Ho(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function tg(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){J1(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){J1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=D(a),n!==null&&Q1(n),t.blockedOn=a,!1;n.shift()}return!0}function ng(t,n,a){vc(t)&&a.delete(n)}function By(){Td=!1,Ga!==null&&vc(Ga)&&(Ga=null),Va!==null&&vc(Va)&&(Va=null),ja!==null&&vc(ja)&&(ja=null),Bo.forEach(ng),Fo.forEach(ng)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,Td||(Td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,By)))}var xc=null;function ig(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var d=D(a);d!==null&&(t.splice(n,3),n-=3,bf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ms(t){function n(G){return _c(G,t)}Ga!==null&&_c(Ga,t),Va!==null&&_c(Va,t),ja!==null&&_c(ja,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Xa.length;a++){var o=Xa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)tg(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[mn]||null;if(typeof d=="function")y||ig(a);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[mn]||null)w=y.formAction;else if(Ed(u)!==null)continue}else w=y.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),ig(a)}}}function ag(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(t){this._internalRoot=t}yc.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Z1(a,o,t,n,null,null)},yc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Z1(t.current,2,null,t,null,null),ec(),n[zi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&tg(t)}};var rg=e.version;if(rg!=="19.2.1")throw Error(r(527,rg,"19.2.1"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Te=Sc.inject(Fy),Re=Sc}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=d0,d=h0,y=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=q1(t,1,!1,null,null,a,o,null,u,d,y,ag),t[zi]=n.current,od(t),new Ad(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=d0,y=h0,w=p0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=q1(t,1,!0,n,a??null,o,u,G,d,y,w,ag),n.context=Y1(null),a=n.current,o=ni(),o=yi(o),u=Na(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Pi(n),t[zi]=n.current,od(t),new yc(n)},Go.version="19.2.1",Go}var mg;function Qy(){if(mg)return Cd.exports;mg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cd.exports=Ky(),Cd.exports}var Jy=Qy();var gg="popstate";function $y(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Ir(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),dh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:Jo(c))}function r(l,c){xi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return tS(e,i,r,s)}function en(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function xi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eS(){return Math.random().toString(36).substring(2,10)}function vg(s,e){return{usr:s.state,key:s.key,idx:e}}function dh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ir(e):e,state:i,key:e&&e.key||r||eS()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ir(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function tS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:T.location,delta:_})}function x(S,_){h="PUSH";let C=dh(T.location,S,_);i&&i(C,S),p=v()+1;let N=vg(C,p),O=T.createHref(C);try{f.pushState(N,"",O)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(O)}c&&m&&m({action:h,location:T.location,delta:1})}function b(S,_){h="REPLACE";let C=dh(T.location,S,_);i&&i(C,S),p=v();let N=vg(C,p),O=T.createHref(C);f.replaceState(N,"",O),c&&m&&m({action:h,location:T.location,delta:0})}function E(S){return nS(S)}let T={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(gg,g),m=S,()=>{l.removeEventListener(gg,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:b,go(S){return f.go(S)}};return T}function nS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Bv(s,e,i="/"){return iS(s,e,i,!1)}function iS(s,e,i,r){let l=typeof e=="string"?Ir(e):e,c=va(l.pathname||"/",i);if(c==null)return null;let f=Fv(s);aS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=mS(c);h=hS(f[m],p,r)}return h}function Fv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;en(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=pa([r,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Fv(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:fS(g,f.index),routesMeta:x})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Hv(f.path))c(f,h,!0,m)}),e}function Hv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Hv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function aS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:dS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var rS=/^:[\w-]+$/,sS=3,oS=2,lS=1,cS=10,uS=-2,_g=s=>s==="*";function fS(s,e){let i=s.split("/"),r=i.length;return i.some(_g)&&(r+=uS),e&&(r+=oS),i.filter(l=>!_g(l)).reduce((l,c)=>l+(rS.test(c)?sS:c===""?lS:cS),r)}function dS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function hS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=ou({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=ou({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:pa([c,g.pathname]),pathnameBase:yS(pa([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=pa([c,g.pathnameBase]))}return f}function ou(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=pS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=h[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[x];return g&&!b?p[v]=void 0:p[v]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function pS(s,e=!1,i=!0){xi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function mS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function va(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vS=s=>gS.test(s);function _S(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ir(s):s,c;if(i)if(vS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),xi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=xg(i.substring(1),"/"):c=xg(i,e)}else c=e;return{pathname:c,search:SS(r),hash:MS(l)}}function xg(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ud(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function kv(s){let e=xS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Gv(s,e,i,r=!1){let l;typeof s=="string"?l=Ir(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),Ud("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),Ud("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),Ud("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=_S(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var pa=s=>s.join("/").replace(/\/\/+/g,"/"),yS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),SS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,MS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function bS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function ES(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vv=["POST","PUT","PATCH","DELETE"];new Set(Vv);var TS=["GET",...Vv];new Set(TS);var ks=Y.createContext(null);ks.displayName="DataRouter";var pu=Y.createContext(null);pu.displayName="DataRouterState";Y.createContext(!1);var jv=Y.createContext({isTransitioning:!1});jv.displayName="ViewTransition";var AS=Y.createContext(new Map);AS.displayName="Fetchers";var wS=Y.createContext(null);wS.displayName="Await";var Ci=Y.createContext(null);Ci.displayName="Navigation";var rl=Y.createContext(null);rl.displayName="Location";var Sa=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var op=Y.createContext(null);op.displayName="RouteError";function RS(s,{relative:e}={}){en(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Y.useContext(Ci),{hash:l,pathname:c,search:f}=ol(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:pa([i,c])),r.createHref({pathname:h,search:f,hash:l})}function sl(){return Y.useContext(rl)!=null}function zr(){return en(sl(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(rl).location}var Xv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wv(s){Y.useContext(Ci).static||Y.useLayoutEffect(s)}function qv(){let{isDataRoute:s}=Y.useContext(Sa);return s?kS():CS()}function CS(){en(sl(),"useNavigate() may be used only in the context of a <Router> component.");let s=Y.useContext(ks),{basename:e,navigator:i}=Y.useContext(Ci),{matches:r}=Y.useContext(Sa),{pathname:l}=zr(),c=JSON.stringify(kv(r)),f=Y.useRef(!1);return Wv(()=>{f.current=!0}),Y.useCallback((m,p={})=>{if(xi(f.current,Xv),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Gv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:pa([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}Y.createContext(null);function ol(s,{relative:e}={}){let{matches:i}=Y.useContext(Sa),{pathname:r}=zr(),l=JSON.stringify(kv(i));return Y.useMemo(()=>Gv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function NS(s,e){return Yv(s,e)}function Yv(s,e,i,r,l){en(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Y.useContext(Ci),{matches:f}=Y.useContext(Sa),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let C=g&&g.path||"";Zv(p,!g||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=zr(),b;if(e){let C=typeof e=="string"?Ir(e):e;en(v==="/"||C.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${C.pathname}" was given in the \`location\` prop.`),b=C}else b=x;let E=b.pathname||"/",T=E;if(v!=="/"){let C=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=Bv(s,{pathname:T});xi(g||S!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),xi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=OS(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},m,C.params),pathname:pa([v,c.encodeLocation?c.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?v:pa([v,c.encodeLocation?c.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),f,i,r,l);return e&&_?Y.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},_):_}function DS(){let s=HS(),e=bS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:c},"ErrorBoundary")," or"," ",Y.createElement("code",{style:c},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),i?Y.createElement("pre",{style:l},i):null,f)}var LS=Y.createElement(DS,null),US=class extends Y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?Y.createElement(Sa.Provider,{value:this.props.routeContext},Y.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PS({routeContext:s,match:e,children:i}){let r=Y.useContext(ks);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Sa.Provider,{value:s},i)}function OS(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);en(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:b}=i,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:ES(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let b,E=!1,T=null,S=null;i&&(b=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||LS,h&&(m<0&&x===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),C=()=>{let N;return b?N=T:E?N=S:g.route.Component?N=Y.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=v,Y.createElement(PS,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?Y.createElement(US,{location:i.location,revalidation:i.revalidation,component:T,error:b,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):C()},null)}function lp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IS(s){let e=Y.useContext(ks);return en(e,lp(s)),e}function zS(s){let e=Y.useContext(pu);return en(e,lp(s)),e}function BS(s){let e=Y.useContext(Sa);return en(e,lp(s)),e}function cp(s){let e=BS(s),i=e.matches[e.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function FS(){return cp("useRouteId")}function HS(){let s=Y.useContext(op),e=zS("useRouteError"),i=cp("useRouteError");return s!==void 0?s:e.errors?.[i]}function kS(){let{router:s}=IS("useNavigate"),e=cp("useNavigate"),i=Y.useRef(!1);return Wv(()=>{i.current=!0}),Y.useCallback(async(l,c={})=>{xi(i.current,Xv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var yg={};function Zv(s,e,i){!e&&!yg[s]&&(yg[s]=!0,xi(!1,i))}Y.memo(GS);function GS({routes:s,future:e,state:i,unstable_onError:r}){return Yv(s,void 0,i,r,e)}function $a(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=Y.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ir(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:b="default"}=i,E=Y.useMemo(()=>{let T=va(p,h);return T==null?null:{location:{pathname:T,search:v,hash:g,state:x,key:b},navigationType:r}},[h,p,v,g,x,b,r]);return xi(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:Y.createElement(Ci.Provider,{value:m},Y.createElement(rl.Provider,{children:e,value:E}))}function jS({children:s,location:e}){return NS(hh(s),e)}function hh(s,e=[]){let i=[];return Y.Children.forEach(s,(r,l)=>{if(!Y.isValidElement(r))return;let c=[...e,l];if(r.type===Y.Fragment){i.push.apply(i,hh(r.props.children,c));return}en(r.type===$a,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=hh(r.props.children,c)),i.push(f)}),i}var $c="get",eu="application/x-www-form-urlencoded";function mu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function XS(s){return mu(s)&&s.tagName.toLowerCase()==="button"}function WS(s){return mu(s)&&s.tagName.toLowerCase()==="form"}function qS(s){return mu(s)&&s.tagName.toLowerCase()==="input"}function YS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ZS(s,e){return s.button===0&&(!e||e==="_self")&&!YS(s)}var Mc=null;function KS(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var QS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(s){return s!=null&&!QS.has(s)?(xi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):s}function JS(s,e){let i,r,l,c,f;if(WS(s)){let h=s.getAttribute("action");r=h?va(h,e):null,i=s.getAttribute("method")||$c,l=Pd(s.getAttribute("enctype"))||eu,c=new FormData(s)}else if(XS(s)||qS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?va(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||$c,l=Pd(s.getAttribute("formenctype"))||Pd(h.getAttribute("enctype"))||eu,c=new FormData(h,s),!KS()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(mu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=$c,r=null,l=eu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function up(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function $S(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&va(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function eM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function nM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await eM(c,i);return f.links?f.links():[]}return[]}));return sM(r.flat(1).filter(tM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Sg(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function iM(s,e,{includeHydrateFallback:i}={}){return aM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function aM(s){return[...new Set(s)]}function rM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function sM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(rM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Kv(){let s=Y.useContext(ks);return up(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function oM(){let s=Y.useContext(pu);return up(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var fp=Y.createContext(void 0);fp.displayName="FrameworkContext";function Qv(){let s=Y.useContext(fp);return up(s,"You must render this element inside a <HydratedRouter> element"),s}function lM(s,e){let i=Y.useContext(fp),[r,l]=Y.useState(!1),[c,f]=Y.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=Y.useRef(null);Y.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(C=>{f(C.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),Y.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let b=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Vo(h,b),onBlur:Vo(m,E),onMouseEnter:Vo(p,b),onMouseLeave:Vo(v,E),onTouchStart:Vo(g,b)}]:[!1,x,{}]}function Vo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function cM({page:s,...e}){let{router:i}=Kv(),r=Y.useMemo(()=>Bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Y.createElement(fM,{page:s,matches:r,...e}):null}function uM(s){let{manifest:e,routeModules:i}=Qv(),[r,l]=Y.useState([]);return Y.useEffect(()=>{let c=!1;return nM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function fM({page:s,matches:e,...i}){let r=zr(),{manifest:l,routeModules:c}=Qv(),{basename:f}=Kv(),{loaderData:h,matches:m}=oM(),p=Y.useMemo(()=>Sg(s,e,m,l,r,"data"),[s,e,m,l,r]),v=Y.useMemo(()=>Sg(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=Y.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(_=>{let C=l.routes[_.route.id];!C||!C.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||C.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let S=$S(s,f,"data");return T&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),x=Y.useMemo(()=>iM(v,l),[v,l]),b=uM(v);return Y.createElement(Y.Fragment,null,g.map(E=>Y.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>Y.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),b.map(({key:E,link:T})=>Y.createElement("link",{key:E,nonce:i.nonce,...T})))}function dM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jv&&(window.__reactRouterVersion="7.10.1")}catch{}function hM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=Y.useRef();l.current==null&&(l.current=$y({window:r,v5Compat:!0}));let c=l.current,[f,h]=Y.useState({action:c.action,location:c.location}),m=Y.useCallback(p=>{i===!1?h(p):Y.startTransition(()=>h(p))},[i]);return Y.useLayoutEffect(()=>c.listen(m),[c,m]),Y.createElement(VS,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var $v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e_=Y.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,...x},b){let{basename:E,unstable_useTransitions:T}=Y.useContext(Ci),S=typeof p=="string"&&$v.test(p),_,C=!1;if(typeof p=="string"&&S&&(_=p,Jv))try{let R=new URL(window.location.href),V=p.startsWith("//")?new URL(R.protocol+p):new URL(p),J=va(V.pathname,E);V.origin===R.origin&&J!=null?p=J+V.search+V.hash:C=!0}catch{xi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=RS(p,{relative:l}),[O,H,P]=lM(r,x),z=vM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_useTransitions:T});function Z(R){e&&e(R),R.defaultPrevented||z(R)}let L=Y.createElement("a",{...x,...P,href:_||N,onClick:C||c?e:Z,ref:dM(b,H),target:m,"data-discover":!S&&i==="render"?"true":void 0});return O&&!S?Y.createElement(Y.Fragment,null,L,Y.createElement(cM,{page:N})):L});e_.displayName="Link";var pM=Y.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=ol(f,{relative:p.relative}),x=zr(),b=Y.useContext(pu),{navigator:E,basename:T}=Y.useContext(Ci),S=b!=null&&MM(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,C=x.pathname,N=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(C=C.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&T&&(N=va(N,T)||N);const O=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=C===_||!l&&C.startsWith(_)&&C.charAt(O)==="/",P=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:H,isPending:P,isTransitioning:S},Z=H?e:void 0,L;typeof r=="function"?L=r(z):L=[r,H?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(z):c;return Y.createElement(e_,{...p,"aria-current":Z,className:L,ref:v,style:R,to:f,viewTransition:h},typeof m=="function"?m(z):m)});pM.displayName="NavLink";var mM=Y.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=$c,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,...x},b)=>{let{unstable_useTransitions:E}=Y.useContext(Ci),T=yM(),S=SM(h,{relative:p}),_=f.toLowerCase()==="get"?"get":"post",C=typeof h=="string"&&$v.test(h),N=O=>{if(m&&m(O),O.defaultPrevented)return;O.preventDefault();let H=O.nativeEvent.submitter,P=H?.getAttribute("formmethod")||f,z=()=>T(H||O.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g});E&&i!==!1?Y.startTransition(()=>z()):z()};return Y.createElement("form",{ref:b,method:_,action:S,onSubmit:r?m:N,...x,"data-discover":!C&&s==="render"?"true":void 0})});mM.displayName="Form";function gM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t_(s){let e=Y.useContext(ks);return en(e,gM(s)),e}function vM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=qv(),p=zr(),v=ol(s,{relative:c});return Y.useCallback(g=>{if(ZS(g,e)){g.preventDefault();let x=i!==void 0?i:Jo(p)===Jo(v),b=()=>m(s,{replace:x,state:r,preventScrollReset:l,relative:c,viewTransition:f});h?Y.startTransition(()=>b()):b()}},[p,m,v,i,r,e,s,l,c,f,h])}var _M=0,xM=()=>`__${String(++_M)}__`;function yM(){let{router:s}=t_("useSubmit"),{basename:e}=Y.useContext(Ci),i=FS(),r=s.fetch,l=s.navigate;return Y.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=JS(c,e);if(f.navigate===!1){let x=f.fetcherKey||xM();await r(x,i,f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function SM(s,{relative:e}={}){let{basename:i}=Y.useContext(Ci),r=Y.useContext(Sa);en(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ol(s||".",{relative:e})},f=zr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),Jo(c)}function MM(s,{relative:e}={}){let i=Y.useContext(jv);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=t_("useViewTransitionState"),l=ol(s,{relative:e});if(!i.isTransitioning)return!1;let c=va(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=va(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ou(l.pathname,f)!=null||ou(l.pathname,c)!=null}const bM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Mg=s=>{const e=EM(s);return e.charAt(0).toUpperCase()+e.slice(1)},n_=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),TM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var AM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const wM=Y.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>Y.createElement("svg",{ref:m,...AM,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:n_("lucide",l),...!c&&!TM(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>Y.createElement(p,v)),...Array.isArray(c)?c:[c]]));const gt=(s,e)=>{const i=Y.forwardRef(({className:r,...l},c)=>Y.createElement(wM,{ref:c,iconNode:e,className:n_(`lucide-${bM(Mg(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Mg(s),i};const RM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bg=gt("arrow-right",RM);const CM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lu=gt("book-open",CM);const NM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],DM=gt("briefcase",NM);const LM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],UM=gt("check",LM);const PM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],i_=gt("circle-alert",PM);const OM=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],IM=gt("circle-check-big",OM);const zM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],BM=gt("circle-question-mark",zM);const FM=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],HM=gt("clock",FM);const kM=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],GM=gt("coffee",kM);const VM=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],jM=gt("ellipsis",VM);const XM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],WM=gt("external-link",XM);const qM=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Eg=gt("eye",qM);const YM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ZM=gt("file-text",YM);const KM=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],QM=gt("gamepad-2",KM);const JM=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=gt("house",JM);const $M=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],eb=gt("image",$M);const tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],nb=gt("info",tb);const ib=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Ag=gt("keyboard",ib);const ab=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],rb=gt("languages",ab);const sb=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ob=gt("lightbulb",sb);const lb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],cb=gt("moon",lb);const ub=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],ph=gt("mouse-pointer-2",ub);const fb=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],db=gt("move",fb);const hb=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],pb=gt("music",hb);const mb=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],tu=gt("play",mb);const gb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],vb=gt("refresh-cw",gb);const _b=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],xb=gt("repeat",_b);const yb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],a_=gt("rotate-ccw",yb);const Sb=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],wg=gt("shuffle",Sb);const Mb=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],bb=gt("skull",Mb);const Eb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Tb=gt("sparkles",Eb);const Ab=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],wb=gt("sun",Ab);const Rb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Cb=gt("tag",Rb);const Nb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Db=gt("target",Nb);const Lb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],r_=gt("trophy",Lb);const Ub=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Pb=gt("upload",Ub);const Ob=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ib=gt("volume-2",Ob);const zb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Bb=gt("volume-x",zb);const Fb=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Hb=gt("wand-sparkles",Fb);const kb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],s_=gt("x",kb);const Gb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vb=gt("zap",Gb),jb=()=>[{id:"networkquiz",title:"NETWORK QUIZ",subtitle:"Learning Game",description:"109개의 필수 네트워크 약어를 게임 형식으로 학습할 수 있습니다. 퀴즈 모드와 무한 단어장 모드로 효과적으로 암기하세요.",icon:lu,x:300,y:100,size:"md",link:"/network-quiz",image:"https://images.unsplash.com/photo-1562883676-8c6fbf064050?auto=format&fit=crop&q=80&w=800"},{id:"neonspace",title:"NEON SPACE",subtitle:"Interactive Art",description:"네온 글로우 효과와 상호작용 애니메이션을 통한 시각적 예술 공간입니다. 창의적인 UI/UX 표현의 경계를 탐험합니다.",icon:Tb,x:-200,y:200,size:"md",link:"/neonspace",image:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800"},{id:"pixelsort",title:"PIXEL SORT",subtitle:"Audio Visualizer",description:"이미지를 정렬 알고리즘으로 정렬하면서 시각화합니다. 오디오를 업로드하면 정렬 과정에 맞춰 사운드가 재생되어 독특한 경험을 만듭니다.",icon:Hb,x:200,y:-200,size:"md",link:"/pixel-sort",image:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"},{id:"cthulhu",title:"FORBIDDEN LOG",subtitle:"Ancient Knowledge",description:"광기의 일지... 옛 지배자의 각성을 기록하는 신성 모독적 문서. 당신의 이성을 잃어버릴 준비가 되었나요? 읽으면 돌이킬 수 없습니다.",icon:bb,x:-300,y:-100,size:"md",link:"/cthulhu",image:"https://images.unsplash.com/photo-1580695287070-40c6b3b83b65?auto=format&fit=crop&q=80&w=800"},{id:"speedclicker",title:"SPEED CLICKER",subtitle:"Reaction Game",description:"AI와의 반사신경 대결! 떨어지는 타겟을 클릭하여 AI를 이기세요. 난이도를 조절하여 도전할 수 있으며, 당신의 반응속도를 테스트하는 재미있는 게임입니다.",icon:Vb,x:100,y:250,size:"md",link:"/speed-clicker",image:"https://images.unsplash.com/photo-1538481143235-a1a1f0eb3e99?auto=format&fit=crop&q=80&w=800"},{id:"schedule",title:"MY SCHEDULE",subtitle:"Time Management",description:"일주일의 일정을 한눈에 보고 현재 진행중인 활동을 확인하세요. 실시간 시간표와 진행률을 통해 효율적인 시간 관리를 할 수 있습니다.",icon:HM,x:-100,y:-300,size:"md",link:"/schedule",image:"https://images.unsplash.com/photo-1456365174547-68f85bca6905?auto=format&fit=crop&q=80&w=800"}],Rg=jb(),Xb=({panX:s,panY:e,scale:i})=>{const r=Y.useRef(null),l=Y.useRef({panX:s,panY:e,scale:i});return Y.useEffect(()=>{l.current={panX:s,panY:e,scale:i}},[s,e,i]),Y.useEffect(()=>{const c=r.current;if(!c)return;const f=c.getContext("2d");if(!f)return;let h=window.innerWidth,m=window.innerHeight;c.width=h,c.height=m;const p=Array.from({length:500},()=>({x:Math.random()*h,y:Math.random()*m,z:Math.random()*2+.5,radius:Math.random()*1.5,alpha:Math.random()}));let v;const g=()=>{f.clearRect(0,0,h,m);const b=f.createLinearGradient(0,0,0,m);b.addColorStop(0,"#02020a"),b.addColorStop(1,"#000000"),f.fillStyle=b,f.fillRect(0,0,h,m);const{panX:E,panY:T,scale:S}=l.current;p.forEach(_=>{const C=E*.05*_.z,N=T*.05*_.z;let O=(_.x+C)%h,H=(_.y+N)%m;O<0&&(O+=h),H<0&&(H+=m),f.beginPath(),f.arc(O,H,_.radius*(S*.5+.5),0,Math.PI*2);const P=Math.sin(Date.now()*.003*_.z+_.x),z=Math.max(.1,Math.min(1,_.alpha+P*.2));f.fillStyle=`rgba(255, 255, 255, ${z})`,f.fill()}),v=requestAnimationFrame(g)};g();const x=()=>{h=window.innerWidth,m=window.innerHeight,c.width=h,c.height=m};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(v)}},[]),M.jsx("canvas",{ref:r,className:"absolute inset-0 z-0 pointer-events-none"})},Wb=Xy.memo(({data:s,isSelected:e,onClick:i})=>{const r={sm:"w-24 h-24 text-xs",md:"w-32 h-32 text-sm",lg:"w-48 h-48 text-base"},l={sm:24,md:32,lg:48};return M.jsx("div",{className:`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
        ${e?"z-30":"z-10 hover:z-20"}
      `,style:{transform:`translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`},onClick:c=>{c.stopPropagation(),i(s)},children:M.jsxs("div",{className:`transition-transform duration-500 ${e?"scale-150":"hover:scale-110 animate-float-slow"}`,children:[M.jsx("div",{className:`absolute inset-0 rounded-full blur-xl transition-all duration-500
          ${e?"bg-white/50 scale-125":"bg-white/10 opacity-0 group-hover:opacity-40 group-hover:scale-110"}
        `}),M.jsxs("div",{className:`
          relative flex flex-col items-center justify-center rounded-full border overflow-hidden
          backdrop-blur-md shadow-2xl transition-all duration-500
          ${r[s.size]}
          ${e?"bg-black/80 border-white text-white shadow-[0_0_50px_rgba(255,255,255,0.6)]":"bg-black/30 border-white/30 text-gray-300 hover:border-white/70 hover:text-white hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"}
        `,children:[M.jsx("div",{className:`absolute inset-0 bg-cover bg-center transition-opacity duration-500 
              ${e?"opacity-40":"opacity-30 group-hover:opacity-50"}`,style:{backgroundImage:`url(${s.image})`}}),M.jsx("div",{className:`absolute inset-0 bg-black/60 transition-opacity duration-500 ${e?"bg-black/70":""}`}),M.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[M.jsx(s.icon,{size:l[s.size],strokeWidth:1.5,className:"mb-2 drop-shadow-lg"}),M.jsx("span",{className:"font-mono tracking-wider font-bold text-center px-2 opacity-90 select-none drop-shadow-md",children:s.title})]}),e&&M.jsx("div",{className:"absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow pointer-events-none z-20"})]})]})})}),qb=({data:s,onClose:e,onNavigate:i})=>{const r=l=>{const c=s?.link||"";c.startsWith("/")&&(l.preventDefault(),i?.(c))};return M.jsx("div",{className:`
      fixed inset-y-0 left-0 z-40 h-full flex flex-col justify-center
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
      ${s?"w-full md:w-[55%] opacity-100 translate-x-0":"w-0 opacity-0 -translate-x-20"}
    `,children:s&&M.jsxs("div",{className:"pointer-events-auto h-full w-full bg-black/80 backdrop-blur-2xl border-r border-white/20 flex flex-col justify-center relative overflow-hidden",style:{boxShadow:"20px 0 50px rgba(0,0,0,0.5)"},children:[M.jsxs("div",{className:"absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[20s] ease-linear",style:{backgroundImage:`url(${s.image})`}}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"})]}),M.jsxs("button",{onClick:e,className:"absolute top-8 left-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2 group",children:[M.jsx("div",{className:"p-2 bg-black/40 border border-white/10 rounded-full group-hover:bg-white/20 transition-colors backdrop-blur-sm",children:M.jsx(s_,{size:24})}),M.jsx("span",{className:"text-sm font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded",children:"CLOSE"})]}),M.jsxs("div",{className:"relative z-10 px-8 md:px-16 animate-slide-in-up mt-20",children:[M.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[M.jsx("div",{className:"p-4 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm",children:M.jsx(s.icon,{size:48,className:"text-white"})}),M.jsxs("div",{children:[M.jsxs("div",{className:"text-xs font-mono text-white/70 mb-1 border-b border-white/20 inline-block pb-1",children:["ID: ",s.id.toUpperCase()]}),M.jsx("h2",{className:"text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",children:s.title})]})]}),M.jsx("p",{className:"text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase mb-8 pl-1 border-l-2 border-white/50 drop-shadow-md",children:s.subtitle}),M.jsx("div",{className:"text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm",children:s.description}),M.jsxs("a",{href:s.link,onClick:r,target:s.link.startsWith("/")?void 0:"_blank",rel:s.link.startsWith("/")?void 0:"noopener noreferrer",className:"group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] hover:bg-gray-200 transition-all overflow-hidden rounded-sm",children:[M.jsx("span",{className:"relative z-10 mr-4",children:"INITIATE CONNECTION"}),M.jsx(WM,{size:20,className:"relative z-10 group-hover:translate-x-1 transition-transform"}),M.jsx("div",{className:"absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"})]})]})]})})},Yb=()=>{const s=qv(),[e,i]=Y.useState(null),[r,l]=Y.useState({x:0,y:0}),[c,f]=Y.useState(1),[h,m]=Y.useState(!1),p=Y.useRef({x:0,y:0}),v=Y.useRef({x:0,y:0}),g=Y.useCallback(T=>{const _=-T.deltaY*.001;f(C=>{const N=C+_;return Math.min(Math.max(N,.3),3)})},[]),x=T=>{e||(m(!0),p.current={x:T.clientX,y:T.clientY},v.current={...r})},b=T=>{if(!h||e)return;const S=T.clientX-p.current.x,_=T.clientY-p.current.y;l({x:v.current.x+S,y:v.current.y+_})},E=()=>m(!1);return Y.useEffect(()=>{if(e){const T=window.innerWidth*.75,S=window.innerHeight*.5,_=window.innerWidth/2,C=window.innerHeight/2,N=(T-_)/c-e.x,O=(S-C)/c-e.y;l({x:N,y:O})}},[e,c]),M.jsxs("div",{className:`relative w-full h-screen bg-black overflow-hidden font-sans select-none 
        ${h?"cursor-grabbing":e?"cursor-default":"cursor-grab"}
      `,onMouseDown:x,onMouseMove:b,onMouseUp:E,onMouseLeave:E,onWheel:g,children:[M.jsx("style",{children:`
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
      `}),M.jsx(Xb,{panX:r.x,panY:r.y,scale:c}),M.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"}),M.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1]"}),M.jsxs("div",{className:"absolute top-1/2 left-1/2 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",style:{transform:`translate(-50%, -50%) scale(${c}) translate(${r.x}px, ${r.y}px)`},children:[M.jsx("div",{className:"absolute -top-[500px] left-0 -translate-x-1/2 w-[1500px] text-center pointer-events-none z-0 opacity-10 select-none",children:M.jsx("h1",{className:"text-[200px] font-black text-white tracking-[0.2em] blur-[4px]",children:"UNIVERSE"})}),Rg.map(T=>M.jsx(Wb,{data:T,isSelected:e?.id===T.id,onClick:i},T.id)),M.jsx("svg",{className:"absolute top-0 left-0 overflow-visible pointer-events-none z-0 opacity-10",children:Rg.map((T,S)=>S<5&&M.jsx("line",{x1:0,y1:0,x2:T.x,y2:T.y,stroke:"white",strokeWidth:"2",strokeDasharray:"10,10"},`line-${S}`))}),M.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"}),M.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full"})]}),M.jsxs("header",{className:`absolute top-8 left-0 w-full text-center pointer-events-none z-30 transition-opacity duration-500 ${e?"opacity-0":"opacity-100"}`,children:[M.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white tracking-[0.2em]",style:{textShadow:"0 0 30px rgba(255,255,255,0.2)"},children:"NEXUS"}),M.jsxs("div",{className:"mt-4 flex justify-center gap-4",children:[M.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"SCROLL TO ZOOM"}),M.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"DRAG TO MOVE"})]})]}),M.jsx(qb,{data:e,onClose:()=>i(null),onNavigate:s}),M.jsxs("div",{className:`absolute bottom-6 right-8 z-30 text-right font-mono text-[10px] text-white/30 transition-opacity ${e?"opacity-0":"opacity-100"}`,children:[M.jsxs("div",{className:"mb-1",children:["POS X: ",Math.round(-r.x)]}),M.jsxs("div",{className:"mb-1",children:["POS Y: ",Math.round(-r.y)]}),M.jsxs("div",{children:["ZOOM: ",Math.round(c*100),"%"]})]})]})},Zb=()=>{const s=[{id:1,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 네트워크를 정의하고 제어하는 기술"},{id:2,acronym:"TCAM",fullTerm:"Ternary Content Addressable Memory",desc:"0, 1, X 세 가지 상태를 저장하는 고속 검색 메모리"},{id:3,acronym:"SNMP",fullTerm:"Simple Network Management Protocol",desc:"네트워크 장비를 간단하게 관리하고 감시하는 프로토콜"},{id:4,acronym:"VBR",fullTerm:"Variable Bit Rate",desc:"전송률이 상황에 따라 변하는 방식"},{id:5,acronym:"ICMP",fullTerm:"Internet Control Message Protocol",desc:"인터넷 제어 메시지(오류 보고, Ping 등)를 보내는 프로토콜"},{id:6,acronym:"OSPF",fullTerm:"Open Shortest Path First",desc:"개방형 최단 경로 우선 라우팅 프로토콜"},{id:7,acronym:"ATM",fullTerm:"Asynchronous Transfer Mode",desc:"비동기 전송 모드 (셀 단위 전송)"},{id:8,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체에 접근을 제어하는 고유 물리 주소"},{id:9,acronym:"DPI",fullTerm:"Deep Packet Inspection",desc:"패킷의 내용까지 깊게 검사하는 기술"},{id:10,acronym:"RIP",fullTerm:"Routing Information Protocol",desc:"라우팅 정보를 홉 수 기반으로 교환하는 프로토콜"},{id:11,acronym:"ASN",fullTerm:"Autonomous System Number",desc:"자율 시스템(AS)을 식별하는 고유 번호"},{id:12,acronym:"ISIS",fullTerm:"Intermediate System to Intermediate System",desc:"중간 시스템(라우터) 끼리의 라우팅 프로토콜"},{id:13,acronym:"EIGRP",fullTerm:"Enhanced Interior Gateway Routing Protocol",desc:"향상된 내부 게이트웨이 라우팅 (Cisco 전용)"},{id:14,acronym:"MOSPF",fullTerm:"Multicast Open Shortest Path First",desc:"멀티캐스트를 지원하는 OSPF"},{id:15,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 운영체제 (SDN 컨트롤러)"},{id:16,acronym:"NAT",fullTerm:"Network Address Translation",desc:"네트워크 주소(IP)를 변환하는 기술"},{id:17,acronym:"OFC",fullTerm:"Optical Fiber Cable",desc:"광 섬유 케이블"},{id:18,acronym:"PDU",fullTerm:"Protocol Data Unit",desc:"프로토콜에서 처리하는 데이터의 단위"},{id:19,acronym:"NCS",fullTerm:"Network Control System",desc:"네트워크를 제어하는 시스템"},{id:20,acronym:"ONF",fullTerm:"Open Networking Foundation",desc:"개방형 네트워킹 표준화 재단"},{id:21,acronym:"WFQ",fullTerm:"Weighted Fair Queuing",desc:"가중치를 두어 공평하게 처리하는 큐 방식"},{id:22,acronym:"NCP",fullTerm:"Network Control Protocol",desc:"네트워크 계층을 제어/설정하는 프로토콜"},{id:23,acronym:"CBR",fullTerm:"Constant Bit Rate",desc:"전송률이 일정하게 고정된 방식"},{id:24,acronym:"SOHO",fullTerm:"Small Office Home Office",desc:"소규모 사무실이나 재택 근무 환경"},{id:25,acronym:"DHCP",fullTerm:"Dynamic Host Configuration Protocol",desc:"호스트 설정을 동적으로 자동 할당하는 프로토콜"},{id:26,acronym:"BGP",fullTerm:"Border Gateway Protocol",desc:"AS 경계에서 사용하는 게이트웨이 프로토콜"},{id:27,acronym:"CIDR",fullTerm:"Classless Inter-Domain Routing",desc:"클래스 구분 없는 도메인 간 라우팅"},{id:28,acronym:"HOL",fullTerm:"Head-of-the-Line",desc:"줄의 맨 앞이 막혀 뒤까지 지연되는 현상"},{id:29,acronym:"AQM",fullTerm:"Active Queue Management",desc:"큐를 능동적으로 관리하여 혼잡 방지"},{id:30,acronym:"VRRP",fullTerm:"Virtual Router Redundancy Protocol",desc:"가상 라우터를 만들어 중복(예비) 구성"},{id:31,acronym:"OVSDB",fullTerm:"Open vSwitch Database Management Protocol",desc:"Open vSwitch의 데이터베이스를 관리하는 프로토콜"},{id:32,acronym:"SAL",fullTerm:"Service Abstraction Layer",desc:"서비스를 추상화하여 하드웨어 종속성 제거"},{id:33,acronym:"VMM",fullTerm:"Virtual Machine Monitor",desc:"가상 머신을 감시/관리하는 모니터"},{id:34,acronym:"NLRI",fullTerm:"Network Layer Reachability Information",desc:"네트워크 계층의 도달 가능성 정보"},{id:35,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄로 입력하는 텍스트 인터페이스"},{id:36,acronym:"MIB",fullTerm:"Management Information Base",desc:"관리 정보가 저장된 베이스"},{id:37,acronym:"SMI",fullTerm:"Structure of Management Information",desc:"관리 정보를 정의하는 구조 및 규칙"},{id:38,acronym:"RPC",fullTerm:"Remote Procedure Call",desc:"원격에 있는 프로시저를 호출함"},{id:39,acronym:"EGP",fullTerm:"Exterior Gateway Protocol",desc:"외부 게이트웨이(AS 간) 프로토콜"},{id:40,acronym:"IGP",fullTerm:"Interior Gateway Protocol",desc:"내부 게이트웨이(AS 내) 프로토콜"},{id:41,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 정의된 네트워킹 (중복)"},{id:42,acronym:"OFP",fullTerm:"OpenFlow Protocol",desc:"오픈플로우 스위치와 컨트롤러 간 프로토콜"},{id:43,acronym:"OFS",fullTerm:"OpenFlow Switch",desc:"오픈플로우를 지원하는 스위치"},{id:44,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 OS (중복)"},{id:45,acronym:"NFV",fullTerm:"Network Functions Virtualization",desc:"네트워크 기능을 가상화하는 기술"},{id:46,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄 인터페이스 (중복)"},{id:47,acronym:"DCN",fullTerm:"Data Center Network",desc:"데이터 센터 내부 네트워크"},{id:48,acronym:"NFVI",fullTerm:"NFV Infrastructure",desc:"NFV를 구동하기 위한 인프라 자원"},{id:49,acronym:"NBI",fullTerm:"Northbound Interface",desc:"북쪽(상위 응용) 방향 인터페이스"},{id:50,acronym:"SBI",fullTerm:"Southbound Interface",desc:"남쪽(하부 장비) 방향 인터페이스"},{id:51,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상으로 나눈 근거리 통신망"},{id:52,acronym:"VPN",fullTerm:"Virtual Private Network",desc:"가상으로 만든 사설 네트워크"},{id:53,acronym:"OVS",fullTerm:"Open vSwitch",desc:"오픈 소스 가상 스위치"},{id:54,acronym:"YANG",fullTerm:"Yet Another Next Generation",desc:"또 다른 차세대 데이터 모델링 언어"},{id:55,acronym:"NETCONF",fullTerm:"Network Configuration Protocol",desc:"네트워크 설정을 위한 프로토콜"},{id:56,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"다양한 프로토콜 위에서 라벨로 스위칭"},{id:57,acronym:"MANO",fullTerm:"Management and Orchestration",desc:"NFV의 관리와 조율"},{id:58,acronym:"ODL",fullTerm:"OpenDaylight",desc:"오픈데이라이트 (SDN 컨트롤러)"},{id:59,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"라벨 스위칭 (중복)"},{id:60,acronym:"LSR",fullTerm:"Label Switch Router",desc:"라벨을 보고 스위칭하는 라우터"},{id:61,acronym:"LLC",fullTerm:"Logical Link Control",desc:"논리적인 링크 제어"},{id:62,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체 접근 제어 (중복)"},{id:63,acronym:"HDLC",fullTerm:"High Level Data Link Protocol",desc:"고수준 데이터 링크 제어 프로토콜"},{id:64,acronym:"CSMA",fullTerm:"Carrier Sense Multiple Access",desc:"반송파 감지 후 다중 접속"},{id:65,acronym:"FDMA",fullTerm:"Frequency Division Multiple Access",desc:"주파수를 나누어 접속"},{id:66,acronym:"TDMA",fullTerm:"Time Division Multiple Access",desc:"시간을 나누어 접속"},{id:67,acronym:"CDMA",fullTerm:"Code Division Multiple Access",desc:"코드로 구분하여 나누어 접속"},{id:68,acronym:"ARP",fullTerm:"Address Resolution Protocol",desc:"주소(IP)를 해석하여 MAC 주소를 알아냄"},{id:69,acronym:"FDDI",fullTerm:"Fiber Distributed Data Interface",desc:"광섬유로 분산된 데이터 인터페이스"},{id:70,acronym:"SFD",fullTerm:"Start Frame Delimiter",desc:"프레임의 시작을 알리는 구분자"},{id:71,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상 LAN (중복)"},{id:72,acronym:"DTP",fullTerm:"Dynamic Trunking Protocol",desc:"트렁킹을 동적으로 협상함"},{id:73,acronym:"VTP",fullTerm:"VLAN Trunking Protocol",desc:"VLAN 정보를 트렁킹 구간에 전파"},{id:74,acronym:"TPID",fullTerm:"Tag Protocol Identifier",desc:"태그 프로토콜임을 식별하는 필드"},{id:75,acronym:"TCI",fullTerm:"Tag Control Information",desc:"태그를 제어하는 정보"},{id:76,acronym:"PCP",fullTerm:"Priority Code Point",desc:"우선순위를 나타내는 코드 지점"},{id:77,acronym:"DEI",fullTerm:"Drop Eligible Indicator",desc:"폐기 해도 되는지 나타내는 표시"},{id:78,acronym:"LER",fullTerm:"Label Edge Router",desc:"MPLS망 가장자리에 있는 라우터"},{id:79,acronym:"LSP",fullTerm:"Label-Switched Path",desc:"라벨로 스위칭되어 지나가는 경로"},{id:80,acronym:"LDP",fullTerm:"Label Distribution Protocol",desc:"라벨을 분배하는 프로토콜"},{id:81,acronym:"SIFS",fullTerm:"Short Inter-frame Spacing",desc:"짧은 프레임 간 간격"},{id:82,acronym:"DIFS",fullTerm:"Distributed Inter-frame Space",desc:"분산 제어용 프레임 간격"},{id:83,acronym:"RTS",fullTerm:"Request to Send",desc:"송신을 요청함"},{id:84,acronym:"CTS",fullTerm:"Clear to Send",desc:"송신 해도 좋다"},{id:85,acronym:"FHSS",fullTerm:"Frequency-Hopping Spread Spectrum",desc:"주파수를 깡충깡충 뛰며 대역 확산"},{id:86,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선으로 접속하는 네트워크망"},{id:87,acronym:"MTSO",fullTerm:"Mobile Telecommunications Switching Office",desc:"이동통신 교환국"},{id:88,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자를 식별하는 모듈"},{id:89,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"길게 보고 진화시킨 4G 기술"},{id:90,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"일반적인 패킷 무선 서비스"},{id:91,acronym:"OFDMA",fullTerm:"Orthogonal Frequency-Division Multiple Access",desc:"직교 주파수 분할 다중 접속"},{id:92,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"4G 이동통신 (중복)"},{id:93,acronym:"HSPA",fullTerm:"High Speed Packet Access",desc:"고속 패킷 접속"},{id:94,acronym:"RNC",fullTerm:"Radio Network Controller",desc:"무선 네트워크를 제어하는 장비"},{id:95,acronym:"HSDPA",fullTerm:"High Speed Downlink Packet Access",desc:"고속 하향 패킷 접속"},{id:96,acronym:"WCDMA",fullTerm:"Wideband Code Division Multiple Access",desc:"광대역 코드 분할 다중 접속"},{id:97,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자 식별 모듈 (중복)"},{id:98,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"2.5G 서비스 (중복)"},{id:99,acronym:"IMSI",fullTerm:"International Mobile Subscriber Identity",desc:"국제 모바일 가입자 고유 식별 번호"},{id:100,acronym:"EDGE",fullTerm:"Enhanced Data Rates for GSM Evolution",desc:"GSM의 진화로 데이터 속도 향상"},{id:101,acronym:"MIMO",fullTerm:"Multiple Input Multiple Output",desc:"다중 입력 다중 출력"},{id:102,acronym:"SC-FDMA",fullTerm:"Single Carrier Frequency Division Multiple Access",desc:"단일 반송파를 사용하는 FDMA"},{id:103,acronym:"EPC",fullTerm:"Evolved Packet Core",desc:"진화된 패킷 코어 망"},{id:104,acronym:"MME",fullTerm:"Mobility Management Entity",desc:"이동성을 관리하는 개체"},{id:105,acronym:"eMBB",fullTerm:"Enhanced Mobile Broadband",desc:"향상된 초광대역 서비스"},{id:106,acronym:"DSS",fullTerm:"Dynamic Spectrum Sharing",desc:"주파수를 동적으로 공유"},{id:107,acronym:"FWA",fullTerm:"Fixed Wireless Access",desc:"고정된 위치에서 무선으로 접속"},{id:108,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선 접속망 (중복)"},{id:109,acronym:"UTRAN",fullTerm:"Universal Terrestrial Radio Access Network",desc:"범용 지상 무선 접속망"}],e=[{id:1001,acronym:"Random Access",fullTerm:"Random Access",desc:"임의 접근 (데이터 전송 시 경쟁하며 충돌 가능성이 있는 방식)"},{id:1002,acronym:"Controlled Access",fullTerm:"Controlled Access",desc:"제어 접근 (순서나 규칙에 따라 전송하여 충돌을 방지하는 방식)"},{id:1003,acronym:"Channelization",fullTerm:"Channelization",desc:"채널화 (대역폭을 주파수, 시간, 코드 등으로 나누어 할당하는 방식)"},{id:1004,acronym:"Ethernet",fullTerm:"Ethernet",desc:"이더넷 (가장 널리 사용되는 유선 LAN 기술 표준)"},{id:1005,acronym:"CRC",fullTerm:"Cyclic Redundancy Check",desc:"순환 중복 검사 (데이터 전송 오류를 검출하기 위한 수학적 알고리즘)"},{id:1006,acronym:"Loopback",fullTerm:"Loopback",desc:"루프백 (데이터를 송신한 장치로 다시 되돌려 보내는 기능, 예: 127.0.0.1)"},{id:1007,acronym:"Unicast",fullTerm:"Unicast",desc:"유니캐스트 (1:1 통신, 특정 단일 수신자에게 전송)"},{id:1008,acronym:"Multicast",fullTerm:"Multicast",desc:"멀티캐스트 (1:N 통신, 특정 그룹의 멤버들에게 전송)"},{id:1009,acronym:"Anycast",fullTerm:"Anycast",desc:"애니캐스트 (1:1 통신이나, 네트워크상에서 가장 가까운 노드와 통신)"},{id:1010,acronym:"IPv4",fullTerm:"Internet Protocol version 4",desc:"인터넷 프로토콜 버전 4 (32비트 주소 체계)"},{id:1011,acronym:"IPv6",fullTerm:"Internet Protocol version 6",desc:"인터넷 프로토콜 버전 6 (128비트 주소 체계, 무한대에 가까운 주소)"},{id:1012,acronym:"Subnet Mask",fullTerm:"Subnet Mask",desc:"서브넷 마스크 (IP 주소에서 네트워크 부분과 호스트 부분을 구분)"},{id:1013,acronym:"Dijkstra",fullTerm:"Dijkstra Algorithm",desc:"다익스트라 알고리즘 (OSPF 등에서 사용하는 최단 경로 탐색 알고리즘)"},{id:1014,acronym:"STP",fullTerm:"Spanning Tree Protocol",desc:"스패닝 트리 프로토콜 (스위치 네트워크의 루프 방지)"},{id:1015,acronym:"Flooding",fullTerm:"Flooding",desc:"플러딩 (수신 포트를 제외한 모든 포트로 프레임을 전송하는 것)"},{id:1016,acronym:"Star Topology",fullTerm:"Star Topology",desc:"성형 토폴로지 (중앙 허브나 스위치를 중심으로 모든 노드가 연결된 형태)"},{id:1017,acronym:"Traffic Engineering",fullTerm:"Traffic Engineering",desc:"트래픽 엔지니어링 (네트워크 트래픽의 흐름을 최적화하고 제어하는 기술)"},{id:1018,acronym:"Spread-spectrum",fullTerm:"Spread-spectrum",desc:"대역 확산 (신호를 넓은 주파수 대역으로 퍼뜨려 간섭을 줄이는 기술)"},{id:1019,acronym:"Gateway",fullTerm:"Gateway",desc:"게이트웨이 (서로 다른 네트워크 프로토콜을 사용하는 네트워크 간의 연결점)"},{id:1020,acronym:"SLAAC",fullTerm:"Stateless Address Autoconfiguration",desc:"상태 비보존 주소 자동 설정 (IPv6에서 라우터 없이 IP를 자동 생성)"},{id:1021,acronym:"NDP",fullTerm:"Neighbor Discovery Protocol",desc:"이웃 탐색 프로토콜 (IPv6에서 ARP를 대체하여 이웃 노드 관리)"},{id:1022,acronym:"IPsec",fullTerm:"Internet Protocol Security",desc:"IP 보안 (IP 계층에서 데이터를 암호화하고 인증하는 프로토콜 모음)"},{id:1023,acronym:"Collision",fullTerm:"Collision",desc:"충돌 (두 개 이상의 장치가 동시에 데이터를 전송하여 신호가 겹치는 현상)"},{id:1024,acronym:"MTU",fullTerm:"Maximum Transmission Unit",desc:"최대 전송 단위 (네트워크 인터페이스가 한 번에 보낼 수 있는 최대 데이터 크기)"}],i=`
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
`,[r,l]=Y.useState("menu"),[c,f]=Y.useState(10),[h,m]=Y.useState([]),[p,v]=Y.useState(0),[g,x]=Y.useState(""),[b,E]=Y.useState(!1),[T,S]=Y.useState(null),[_,C]=Y.useState(0),[N,O]=Y.useState([]),H=Y.useRef(null),[P,z]=Y.useState(null),[Z,L]=Y.useState(0),[R,V]=Y.useState(!1),[J,fe]=Y.useState([]),[pe,ge]=Y.useState(0),[I,F]=Y.useState(!1);Y.useEffect(()=>{const Ae=i.split(`
`);let Fe="General";const _t=[];let it=1;Ae.forEach(xt=>{const k=xt.trim();if(k){if(/^(\d+\.\d+|HW\d+[A-Z]*)/.test(k)){Fe=k.replace("|","").trim();return}if(k.includes("(")&&k.includes(")")){const qe=k.split("|"),ft=qe[0].trim(),Ot=qe[1]?qe[1].trim():"",He=[],Bt=[],Ze=/(\([^)]+\))/g;ft.split(Ze).forEach(B=>{if(B.startsWith("(")&&B.endsWith(")")){const A=B.slice(1,-1);He.push({text:A,isAnswer:!0}),Bt.push(A)}else B.length>0&&He.push({text:B,isAnswer:!1})}),_t.push({id:it++,category:Fe,originalText:ft,translation:Ot,parts:He,answers:Bt})}}}),fe(_t)},[]);const W=Y.useMemo(()=>{if(r!=="sentence"||!J[pe])return[];const Ae=J[pe],Fe=[];return Ae.answers.forEach(_t=>{const it=_t.toUpperCase(),xt=_t.toLowerCase(),k=qe=>{Fe.some(ft=>ft.id===qe.id)||Fe.push(qe)};s.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&k(qe),qe.fullTerm&&xt.includes(qe.fullTerm.toLowerCase())&&k(qe)}),e.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&k(qe),qe.fullTerm&&xt.includes(qe.fullTerm.toLowerCase())&&k(qe)})}),Fe},[r,pe,J]);Y.useEffect(()=>{r==="playing"&&H.current&&H.current.focus()},[p,r]);const ne=Ae=>{let Fe=[];Ae==="all"?Fe=[...s]:Fe=[...s].sort(()=>.5-Math.random()).slice(0,Ae),m(Fe),f(Fe.length),v(0),C(0),O([]),l("playing"),be()},$=()=>{l("flashcard"),L(1),z(j()),V(!1)},U=()=>{l("sentence");const Ae=[...J].sort(()=>.5-Math.random());fe(Ae),ge(0),F(!1)},j=()=>{const Ae=Math.floor(Math.random()*s.length);return s[Ae]},ue=Y.useCallback(()=>{let Ae=j();if(s.length>1)for(;Ae.id===P?.id;)Ae=j();z(Ae),L(Fe=>Fe+1),V(!1)},[P,s]),xe=Y.useCallback(()=>{ge(Ae=>(Ae+1)%J.length),F(!1)},[J.length]);Y.useEffect(()=>{const Ae=Fe=>{Fe.code==="Space"&&(r==="flashcard"?(Fe.preventDefault(),R?ue():V(!0)):r==="sentence"&&(Fe.preventDefault(),I?xe():F(!0)))};return window.addEventListener("keydown",Ae),()=>window.removeEventListener("keydown",Ae)},[r,R,ue,I,xe]);const be=()=>{x(""),E(!1),S(null)},te=Ae=>Ae.toLowerCase().replace(/[\s-]/g,""),de=Ae=>{if(Ae.preventDefault(),T)return;const Fe=h[p];te(g)===te(Fe.fullTerm)?(S("correct"),C(it=>it+1)):(S("incorrect"),O(it=>[...it,{...Fe,userAnswer:g}]))},Ce=()=>{p<h.length-1?(v(Ae=>Ae+1),be()):l("result")};if(r==="menu")return M.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-slate-800",children:M.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-indigo-600",children:[M.jsx(lu,{className:"w-16 h-16 mx-auto text-indigo-600 mb-4"}),M.jsx("h1",{className:"text-3xl font-bold mb-2",children:"네트워크 마스터"}),M.jsx("p",{className:"text-slate-500 mb-8",children:"약어 암기 및 핵심 문장 학습"}),M.jsxs("div",{className:"space-y-3",children:[M.jsxs("button",{onClick:()=>ne(10),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[M.jsx(tu,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (10문제)"]}),M.jsxs("button",{onClick:()=>ne(20),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[M.jsx(tu,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (20문제)"]}),M.jsx("button",{onClick:()=>ne("all"),className:"w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200",children:"약어 전체 109문제 도전"}),M.jsxs("div",{className:"pt-4 border-t border-slate-100 mt-2 space-y-2",children:[M.jsxs("button",{onClick:$,className:"w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2",children:[M.jsx(xb,{className:"w-5 h-5"})," 무한 약어 단어장"]}),M.jsxs("button",{onClick:U,className:"w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2",children:[M.jsx(ZM,{className:"w-5 h-5"})," 문장 빈칸 채우기"]})]})]})]})});if(r==="result")return M.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-slate-800",children:M.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border-t-4 border-indigo-600",children:[M.jsxs("div",{className:"text-center mb-8",children:[M.jsx(r_,{className:"w-16 h-16 mx-auto text-yellow-500 mb-4"}),M.jsx("h2",{className:"text-3xl font-bold mb-2",children:"결과 리포트"}),M.jsxs("div",{className:"text-5xl font-black text-indigo-600 my-4",children:[_," / ",c]}),M.jsx("p",{className:"text-slate-500",children:_===c?"완벽합니다! 모든 약어를 마스터하셨네요!":"수고하셨습니다. 틀린 문제를 확인해보세요."})]}),N.length>0&&M.jsxs("div",{className:"mb-8",children:[M.jsxs("h3",{className:"font-bold text-lg mb-4 text-red-500 flex items-center gap-2",children:[M.jsx(i_,{className:"w-5 h-5"})," 오답 노트 (",N.length,")"]}),M.jsx("div",{className:"bg-red-50 rounded-xl overflow-hidden border border-red-100 max-h-96 overflow-y-auto",children:N.map((Ae,Fe)=>M.jsxs("div",{className:"p-4 border-b border-red-100 last:border-0 hover:bg-red-100 transition-colors",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsx("span",{className:"font-bold text-slate-800 text-lg",children:Ae.acronym}),M.jsxs("span",{className:"text-xs font-mono bg-red-200 text-red-800 px-2 py-1 rounded",children:["오답: ",Ae.userAnswer]})]}),M.jsx("div",{className:"text-indigo-700 font-medium",children:Ae.fullTerm}),M.jsx("div",{className:"text-sm text-slate-500",children:Ae.desc})]},Fe))})]}),M.jsxs("button",{onClick:()=>l("menu"),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg",children:[M.jsx(a_,{className:"w-5 h-5"})," 다시 시작하기"]})]})});if(r==="sentence"){const Ae=J[pe],Fe=W;return M.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[M.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:M.jsx(Tg,{className:"w-6 h-6"})}),M.jsxs("div",{className:"w-full max-w-3xl",children:[M.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>I?xe():F(!0),children:[M.jsxs("div",{className:"bg-blue-50 px-6 py-3 flex items-center gap-2 border-b border-blue-100",children:[M.jsx(Cb,{className:"w-4 h-4 text-blue-600"}),M.jsx("span",{className:"font-bold text-blue-800 text-sm uppercase tracking-wide",children:Ae?.category}),M.jsxs("span",{className:"ml-auto text-blue-400 text-xs",children:["#",Ae?.id]})]}),M.jsxs("div",{className:"flex-1 p-10 flex flex-col justify-center",children:[M.jsx("div",{className:"text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 mb-6",children:Ae?.parts.map((_t,it)=>M.jsx("span",{className:_t.isAnswer?"font-bold mx-1":"",children:_t.isAnswer?I?M.jsx("span",{className:"text-blue-600 underline decoration-2 underline-offset-4 animate-fade-in",children:_t.text}):M.jsx("span",{className:"bg-slate-200 text-slate-200 rounded px-2 select-none",children:"(           )"}):_t.text},it))}),I&&Ae?.translation&&M.jsxs("div",{className:"p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400 animate-fade-in mb-6",children:[M.jsxs("div",{className:"flex items-center gap-2 text-slate-500 mb-1 font-bold text-xs uppercase",children:[M.jsx(rb,{className:"w-4 h-4"})," 한국어 해석"]}),M.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed break-keep",children:Ae.translation})]}),I&&Fe.length>0&&M.jsxs("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:[M.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(ob,{className:"w-4 h-4 text-yellow-500"})," 관련 용어 해설"]}),M.jsx("div",{className:"grid gap-3",children:Fe.map(_t=>M.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.jsx("span",{className:"font-bold text-blue-700",children:_t.acronym}),M.jsxs("span",{className:"text-xs text-blue-400",children:["(",_t.fullTerm,")"]})]}),M.jsx("p",{className:"text-slate-700 text-sm",children:_t.desc})]},_t.id))})]}),I&&Fe.length===0&&M.jsx("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:M.jsx("p",{className:"text-slate-500 text-sm text-center italic",children:"스페이스바를 눌러 다음 문장으로 넘어갑니다."})})]}),!I&&M.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-center text-slate-400 animate-pulse",children:M.jsxs("span",{className:"flex items-center gap-2 text-sm font-semibold",children:[M.jsx(Eg,{className:"w-4 h-4"})," 탭하여 정답 확인"]})}),I&&M.jsx("div",{className:"p-4 bg-blue-500 text-white flex justify-center hover:bg-blue-600 transition-colors",children:M.jsxs("span",{className:"flex items-center gap-2 text-lg font-bold",children:["다음 문장 ",M.jsx(bg,{className:"w-5 h-5"})]})})]}),M.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[M.jsx(Ag,{className:"w-4 h-4"}),M.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]})}if(r==="flashcard")return M.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[M.jsxs("div",{className:"absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md font-bold text-emerald-600 flex items-center gap-2",children:[M.jsx(lu,{className:"w-5 h-5"}),M.jsxs("span",{children:["본 단어 수: ",Z]})]}),M.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:M.jsx(Tg,{className:"w-6 h-6"})}),M.jsxs("div",{className:"w-full max-w-xl",children:[M.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-emerald-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>R?ue():V(!0),children:[M.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in",children:[M.jsxs("span",{className:"inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6",children:["No. ",P?.id]}),M.jsx("h1",{className:"text-7xl font-black text-slate-800 tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-300",children:P?.acronym}),M.jsx("div",{className:"w-full h-px bg-slate-100 mb-6"}),R?M.jsxs(M.Fragment,{children:[M.jsx("h2",{className:"text-2xl font-bold text-emerald-700 mb-3 animate-fade-in-up",children:P?.fullTerm}),M.jsx("p",{className:"text-slate-500 font-medium text-lg leading-relaxed max-w-md animate-fade-in-up delay-75",children:P?.desc})]}):M.jsxs("div",{className:"flex flex-col items-center py-6 text-slate-300 animate-pulse",children:[M.jsx("div",{className:"bg-slate-100 p-3 rounded-full mb-3",children:M.jsx(Eg,{className:"w-8 h-8 text-slate-400"})}),M.jsx("span",{className:"font-bold text-sm",children:"탭하여 정답 확인"})]})]}),M.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100",children:M.jsxs("button",{onClick:Ae=>{Ae.stopPropagation(),ue()},className:"w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 active:scale-95 transform",children:["다음 단어 ",M.jsx(bg,{className:"w-6 h-6"})]})})]}),M.jsxs("div",{className:"mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[M.jsx(Ag,{className:"w-4 h-4"}),M.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]});const Ue=h[p];return M.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800",children:M.jsxs("div",{className:"w-full max-w-xl",children:[M.jsxs("div",{className:"mb-6 flex items-center justify-between text-sm font-semibold text-slate-500",children:[M.jsxs("span",{children:["Question ",p+1," / ",c]}),M.jsxs("span",{children:["Score: ",_]})]}),M.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2.5 mb-8",children:M.jsx("div",{className:"bg-indigo-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${(p+1)/c*100}%`}})}),M.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-600",children:[M.jsxs("div",{className:"p-10 text-center bg-slate-50 border-b border-slate-100",children:[M.jsxs("span",{className:"inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4",children:["No. ",Ue.id]}),M.jsx("h1",{className:"text-6xl font-black text-indigo-900 tracking-tighter mb-2",children:Ue.acronym}),M.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name을 입력하세요"})]}),M.jsxs("div",{className:"p-8",children:[T?M.jsxs("div",{className:"text-center animate-fade-in-up",children:[T==="correct"?M.jsxs("div",{className:"mb-6",children:[M.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3",children:M.jsx(UM,{className:"w-8 h-8"})}),M.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-1",children:"정답입니다!"})]}):M.jsxs("div",{className:"mb-6",children:[M.jsx("div",{className:"w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3",children:M.jsx(s_,{className:"w-8 h-8"})}),M.jsx("h3",{className:"text-2xl font-bold text-red-500 mb-1",children:"오답입니다"}),M.jsxs("p",{className:"text-slate-400 text-sm mb-2",children:["내가 쓴 답: ",g]}),M.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg inline-block w-full",children:M.jsx("p",{className:"text-indigo-800 font-bold text-lg",children:Ue.fullTerm})})]}),M.jsxs("button",{onClick:Ce,className:"w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2",children:["다음 문제 ",M.jsx(tu,{className:"w-4 h-4"})]})]}):M.jsxs("form",{onSubmit:de,children:[M.jsx("input",{ref:H,type:"text",value:g,onChange:Ae=>x(Ae.target.value),placeholder:"예: Software Defined Networking",className:"w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all mb-4 text-center placeholder:text-slate-300",autoComplete:"off"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsxs("button",{type:"button",onClick:()=>E(!b),className:"flex-1 py-3 px-4 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2",children:[M.jsx(BM,{className:"w-5 h-5"})," 힌트 보기"]}),M.jsx("button",{type:"submit",className:"flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200",children:"정답 확인"})]})]}),(b||T)&&M.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-center",children:[M.jsx("span",{className:"block text-xs font-bold text-yellow-600 mb-1",children:"💡 암기 팁"}),M.jsx("p",{className:"text-slate-700 font-medium",children:Ue.desc})]})]})]}),M.jsx("div",{className:"mt-8 text-center text-slate-400 text-sm",children:"띄어쓰기, 대소문자, 하이픈(-)은 틀려도 정답 처리됩니다."})]})})};const dp="181",Kb=0,Cg=1,Qb=2,o_=1,Jb=2,ua=3,ir=0,Xn=1,fa=2,ma=0,Us=1,Ng=2,Dg=3,Lg=4,$b=5,Dr=100,eE=101,tE=102,nE=103,iE=104,aE=200,rE=201,sE=202,oE=203,mh=204,gh=205,lE=206,cE=207,uE=208,fE=209,dE=210,hE=211,pE=212,mE=213,gE=214,vh=0,_h=1,xh=2,Is=3,yh=4,Sh=5,Mh=6,bh=7,l_=0,vE=1,_E=2,nr=0,xE=1,yE=2,SE=3,ME=4,bE=5,EE=6,TE=7,c_=300,zs=301,Bs=302,Eh=303,Th=304,gu=306,Ah=1e3,da=1001,wh=1002,ri=1003,AE=1004,bc=1005,_i=1006,Od=1007,Ur=1008,_a=1009,u_=1010,f_=1011,$o=1012,hp=1013,Pr=1014,ha=1015,Gs=1016,pp=1017,mp=1018,el=1020,d_=35902,h_=35899,p_=1021,m_=1022,wi=1023,tl=1026,nl=1027,g_=1028,gp=1029,vp=1030,_p=1031,xp=1033,nu=33776,iu=33777,au=33778,ru=33779,Rh=35840,Ch=35841,Nh=35842,Dh=35843,Lh=36196,Uh=37492,Ph=37496,Oh=37808,Ih=37809,zh=37810,Bh=37811,Fh=37812,Hh=37813,kh=37814,Gh=37815,Vh=37816,jh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Zh=36492,Kh=36494,Qh=36495,Jh=36283,$h=36284,ep=36285,tp=36286,wE=3200,RE=3201,CE=0,NE=1,er="",mi="srgb",Fs="srgb-linear",cu="linear",Wt="srgb",gs=7680,Ug=519,DE=512,LE=513,UE=514,v_=515,PE=516,OE=517,IE=518,zE=519,Pg=35044,Og="300 es",Ii=2e3,uu=2001;function __(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BE(){const s=fu("canvas");return s.style.display="block",s}const Ig={};function zg(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function il(...s){const e=s.join(" ");e in Ig||(Ig[e]=!0,ct(...s))}function FE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bg=1234567;const Ps=Math.PI/180,al=180/Math.PI;function js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function yp(s,e){return(s%e+e)%e}function HE(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function kE(s,e,i){return s!==e?(i-s)/(e-s):0}function Qo(s,e,i){return(1-i)*s+i*e}function GE(s,e,i,r){return Qo(s,e,1-Math.exp(-i*r))}function VE(s,e=1){return e-Math.abs(yp(s,e*2)-e)}function jE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function XE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function WE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qE(s,e){return s+Math.random()*(e-s)}function YE(s){return s*(.5-Math.random())}function ZE(s){s!==void 0&&(Bg=s);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(s){return s*Ps}function QE(s){return s*al}function JE(s){return(s&s-1)===0&&s!==0}function $E(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tT(s,e,i,r,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+r)/2),v=f((e+r)/2),g=c((e-r)/2),x=f((e-r)/2),b=c((r-e)/2),E=f((r-e)/2);switch(l){case"XYX":s.set(h*v,m*g,m*x,h*p);break;case"YZY":s.set(m*x,h*v,m*g,h*p);break;case"ZXZ":s.set(m*g,m*x,h*v,h*p);break;case"XZX":s.set(h*v,m*E,m*b,h*p);break;case"YXY":s.set(m*b,h*v,m*E,h*p);break;case"ZYZ":s.set(m*E,m*b,h*v,h*p);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ls(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:Ps,RAD2DEG:al,generateUUID:js,clamp:Et,euclideanModulo:yp,mapLinear:HE,inverseLerp:kE,lerp:Qo,damp:GE,pingpong:VE,smoothstep:jE,smootherstep:XE,randInt:WE,randFloat:qE,randFloatSpread:YE,seededRandom:ZE,degToRad:KE,radToDeg:QE,isPowerOfTwo:JE,ceilPowerOfTwo:$E,floorPowerOfTwo:eT,setQuaternionFromProperEuler:tT,normalize:On,denormalize:Ls};class zt{constructor(e=0,i=0){zt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],x=c[f+0],b=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=b,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==x||p!==b||v!==E){let S=m*x+p*b+v*E+g*T;S<0&&(x=-x,b=-b,E=-E,T=-T,S=-S);let _=1-h;if(S<.9995){const C=Math.acos(S),N=Math.sin(C);_=Math.sin(_*C)/N,h=Math.sin(h*C)/N,m=m*_+x*h,p=p*_+b*h,v=v*_+E*h,g=g*_+T*h}else{m=m*_+x*h,p=p*_+b*h,v=v*_+E*h,g=g*_+T*h;const C=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=C,p*=C,v*=C,g*=C}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],x=c[f+1],b=c[f+2],E=c[f+3];return e[i]=h*E+v*g+m*b-p*x,e[i+1]=m*E+v*x+p*g-h*b,e[i+2]=p*E+v*b+h*x-m*g,e[i+3]=v*E-h*g-m*x-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),x=m(r/2),b=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g-x*b*E;break;case"YXZ":this._x=x*v*g+p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g+x*b*E;break;case"ZXY":this._x=x*v*g-p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g-x*b*E;break;case"ZYX":this._x=x*v*g-p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g+x*b*E;break;case"YZX":this._x=x*v*g+p*b*E,this._y=p*b*g+x*v*E,this._z=p*v*E-x*b*g,this._w=p*v*g-x*b*E;break;case"XZY":this._x=x*v*g-p*b*E,this._y=p*b*g-x*v*E,this._z=p*v*E+x*b*g,this._w=p*v*g+x*b*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+h+g;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-p)*b,this._z=(f-l)*b}else if(r>h&&r>g){const b=2*Math.sqrt(1+r-h-g);this._w=(v-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-r-g);this._w=(c-p)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+g-r-h);this._w=(f-l)/b,this._x=(c+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Hg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new le,Hg=new ll;class mt{constructor(e,i,r,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],b=r[5],E=r[8],T=l[0],S=l[3],_=l[6],C=l[1],N=l[4],O=l[7],H=l[2],P=l[5],z=l[8];return c[0]=f*T+h*C+m*H,c[3]=f*S+h*N+m*P,c[6]=f*_+h*O+m*z,c[1]=p*T+v*C+g*H,c[4]=p*S+v*N+g*P,c[7]=p*_+v*O+g*z,c[2]=x*T+b*C+E*H,c[5]=x*S+b*N+E*P,c[8]=x*_+b*O+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,x=h*m-v*c,b=p*c-f*m,E=i*g+r*x+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-v*r)*T,e[2]=(h*r-l*f)*T,e[3]=x*T,e[4]=(v*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=b*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(zd.makeScale(e,i)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,i){return this.premultiply(zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new mt,kg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nT(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:e,whitePoint:r,transfer:cu,toXYZ:kg,fromXYZ:Gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:kg,fromXYZ:Gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Ut=nT();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class iT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=fu("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class Sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Bd(l[f].image)):c.push(Bd(l[f]))}else c=Bd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let rT=0;const Fd=new le;class zn extends Vs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=da,l=da,c=_i,f=Ur,h=wi,m=_a,p=zn.DEFAULT_ANISOTROPY,v=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=js(),this.name="",this.source=new Sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=c_;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],b=m[5],E=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(b+1)/2,H=(_+1)/2,P=(v+x)/4,z=(g+T)/4,Z=(E+S)/4;return N>O&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=P/r,c=z/r):O>H?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=P/l,c=Z/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=z/c,l=Z/c),this.set(r,l,c,i),this}let C=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(g-T)/C,this.z=(x-v)/C,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sT extends Vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends sT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class x_ extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Tc.subVectors(this.max,jo),_s.subVectors(e.a,jo),xs.subVectors(e.b,jo),ys.subVectors(e.c,jo),qa.subVectors(xs,_s),Ya.subVectors(ys,xs),br.subVectors(_s,ys);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-br.z,br.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,br.z,0,-br.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-br.y,br.x,0];return!Hd(i,_s,xs,ys,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Hd(i,_s,xs,ys,Tc))?!1:(Ac.crossVectors(qa,Ya),i=[Ac.x,Ac.y,Ac.z],Hd(i,_s,xs,ys,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new le,new le,new le,new le,new le,new le,new le,new le],Ei=new le,Ec=new cl,_s=new le,xs=new le,ys=new le,qa=new le,Ya=new le,br=new le,jo=new le,Tc=new le,Ac=new le,Er=new le;function Hd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const h=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),v=r.dot(Er);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const lT=new cl,Xo=new le,kd=new le;class ul{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(kd)),this.expandByPoint(Xo.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new le,Gd=new le,wc=new le,Za=new le,Vd=new le,Rc=new le,jd=new le;class Mp{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Gd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Gd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(wc),h=Za.dot(this.direction),m=-Za.dot(wc),p=Za.lengthSq(),v=Math.abs(1-f*f);let g,x,b,E;if(v>0)if(g=f*m-h,x=f*h-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,b=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),b=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Gd).addScaledVector(wc,x),b}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,c){Vd.subVectors(i,e),Rc.subVectors(r,e),jd.crossVectors(Vd,Rc);let f=this.direction.dot(jd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(Rc.crossVectors(Za,Rc));if(m<0)return null;const p=h*this.direction.dot(Vd.cross(Za));if(p<0||m+p>f)return null;const v=-h*Za.dot(jd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,h,m,p,v,g,x,b,E,T,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,g,x,b,E,T,S)}set(e,i,r,l,c,f,h,m,p,v,g,x,b,E,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=b,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ss.setFromMatrixColumn(e,0).length(),c=1/Ss.setFromMatrixColumn(e,1).length(),f=1/Ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,b=f*g,E=h*v,T=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=b+E*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=E+b*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,b=m*g,E=p*v,T=p*g;i[0]=x+T*h,i[4]=E*h-b,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=b*h-E,i[6]=T+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,b=m*g,E=p*v,T=p*g;i[0]=x-T*h,i[4]=-f*g,i[8]=E+b*h,i[1]=b+E*h,i[5]=f*v,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,b=f*g,E=h*v,T=h*g;i[0]=m*v,i[4]=E*p-b,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=b*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,b=f*p,E=h*m,T=h*p;i[0]=m*v,i[4]=T-x*g,i[8]=E*g+b,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*g+E,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,b=f*p,E=h*m,T=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=f*v,i[9]=b*g-E,i[2]=E*g-b,i[6]=h*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,uT)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ka.crossVectors(r,ii),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ka.crossVectors(r,ii)),Ka.normalize(),Cc.crossVectors(ii,Ka),l[0]=Ka.x,l[4]=Cc.x,l[8]=ii.x,l[1]=Ka.y,l[5]=Cc.y,l[9]=ii.y,l[2]=Ka.z,l[6]=Cc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],b=r[13],E=r[2],T=r[6],S=r[10],_=r[14],C=r[3],N=r[7],O=r[11],H=r[15],P=l[0],z=l[4],Z=l[8],L=l[12],R=l[1],V=l[5],J=l[9],fe=l[13],pe=l[2],ge=l[6],I=l[10],F=l[14],W=l[3],ne=l[7],$=l[11],U=l[15];return c[0]=f*P+h*R+m*pe+p*W,c[4]=f*z+h*V+m*ge+p*ne,c[8]=f*Z+h*J+m*I+p*$,c[12]=f*L+h*fe+m*F+p*U,c[1]=v*P+g*R+x*pe+b*W,c[5]=v*z+g*V+x*ge+b*ne,c[9]=v*Z+g*J+x*I+b*$,c[13]=v*L+g*fe+x*F+b*U,c[2]=E*P+T*R+S*pe+_*W,c[6]=E*z+T*V+S*ge+_*ne,c[10]=E*Z+T*J+S*I+_*$,c[14]=E*L+T*fe+S*F+_*U,c[3]=C*P+N*R+O*pe+H*W,c[7]=C*z+N*V+O*ge+H*ne,c[11]=C*Z+N*J+O*I+H*$,c[15]=C*L+N*fe+O*F+H*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],b=e[14],E=e[3],T=e[7],S=e[11],_=e[15];return E*(+c*m*g-l*p*g-c*h*x+r*p*x+l*h*b-r*m*b)+T*(+i*m*b-i*p*x+c*f*x-l*f*b+l*p*v-c*m*v)+S*(+i*p*g-i*h*b-c*f*g+r*f*b+c*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*x+l*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],b=e[11],E=e[12],T=e[13],S=e[14],_=e[15],C=g*S*p-T*x*p+T*m*b-h*S*b-g*m*_+h*x*_,N=E*x*p-v*S*p-E*m*b+f*S*b+v*m*_-f*x*_,O=v*T*p-E*g*p+E*h*b-f*T*b-v*h*_+f*g*_,H=E*g*m-v*T*m-E*h*x+f*T*x+v*h*S-f*g*S,P=i*C+r*N+l*O+c*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=C*z,e[1]=(T*x*c-g*S*c-T*l*b+r*S*b+g*l*_-r*x*_)*z,e[2]=(h*S*c-T*m*c+T*l*p-r*S*p-h*l*_+r*m*_)*z,e[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*b-r*m*b)*z,e[4]=N*z,e[5]=(v*S*c-E*x*c+E*l*b-i*S*b-v*l*_+i*x*_)*z,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*z,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*b+i*m*b)*z,e[8]=O*z,e[9]=(E*g*c-v*T*c-E*r*b+i*T*b+v*r*_-i*g*_)*z,e[10]=(f*T*c-E*h*c+E*r*p-i*T*p-f*r*_+i*h*_)*z,e[11]=(v*h*c-f*g*c-v*r*p+i*g*p+f*r*b-i*h*b)*z,e[12]=H*z,e[13]=(v*T*l-E*g*l+E*r*x-i*T*x-v*r*S+i*g*S)*z,e[14]=(E*h*l-f*T*l-E*r*m+i*T*m+f*r*S-i*h*S)*z,e[15]=(f*g*l-v*h*l+v*r*m-i*g*m-f*r*x+i*h*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,x=c*p,b=c*v,E=c*g,T=f*v,S=f*g,_=h*g,C=m*p,N=m*v,O=m*g,H=r.x,P=r.y,z=r.z;return l[0]=(1-(T+_))*H,l[1]=(b+O)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(b-O)*P,l[5]=(1-(x+_))*P,l[6]=(S+C)*P,l[7]=0,l[8]=(E+N)*z,l[9]=(S-C)*z,l[10]=(1-(x+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ss.set(l[0],l[1],l[2]).length();const f=Ss.set(l[4],l[5],l[6]).length(),h=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const p=1/c,v=1/f,g=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),b=(r+l)/(r-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Ii)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===uu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),b=-(r+l)/(r-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Ii)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===uu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ss=new le,Ti=new ln,cT=new le(0,0,0),uT=new le(1,1,1),Ka=new le,Cc=new le,ii=new le,Vg=new ln,jg=new ll;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return jg.setFromEuler(this),this.setFromQuaternion(jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fT=0;const Xg=new le,Ms=new ll,ra=new ln,Nc=new le,Wo=new le,dT=new le,hT=new ll,Wg=new le(1,0,0),qg=new le(0,1,0),Yg=new le(0,0,1),Zg={type:"added"},pT={type:"removed"},bs={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Bn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new le,i=new xa,r=new ll,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new mt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,i){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Nc.copy(e):Nc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Wo,Nc,this.up):ra.lookAt(Nc,Wo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(ra),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),bs.child=e,this.dispatchEvent(bs),bs.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pT),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zg),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,hT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),b=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new le(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new le,sa=new le,Wd=new le,oa=new le,Es=new le,Ts=new le,Kg=new le,qd=new le,Yd=new le,Zd=new le,Kd=new on,Qd=new on,Jd=new on;class vi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),sa.subVectors(r,i),Wd.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(sa),m=Ai.dot(Wd),p=sa.dot(sa),v=sa.dot(Wd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,b=(p*m-h*v)*x,E=(f*v-h*m)*x;return c.set(1-b-E,E,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,r),Jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Kd,c.x),f.addScaledVector(Qd,c.y),f.addScaledVector(Jd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),sa.subVectors(e,i),Ai.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ai.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Es.subVectors(l,r),Ts.subVectors(c,r),qd.subVectors(e,r);const m=Es.dot(qd),p=Ts.dot(qd);if(m<=0&&p<=0)return i.copy(r);Yd.subVectors(e,l);const v=Es.dot(Yd),g=Ts.dot(Yd);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Es,f);Zd.subVectors(e,c);const b=Es.dot(Zd),E=Ts.dot(Zd);if(E>=0&&b<=E)return i.copy(c);const T=b*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ts,h);const S=v*E-b*g;if(S<=0&&g-v>=0&&b-E>=0)return Kg.subVectors(c,l),h=(g-v)/(g-v+(b-E)),i.copy(l).addScaledVector(Kg,h);const _=1/(S+T+x);return f=T*_,h=x*_,i.copy(r).addScaledVector(Es,f).addScaledVector(Ts,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function $d(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=yp(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=$d(f,c,e+1/3),this.g=$d(f,c,e),this.b=$d(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=S_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ut.workingToColorSpace(Un.copy(this),e),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Ut.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Dc);const r=Qo(Qa.h,Dc.h,i),l=Qo(Qa.s,Dc.s,i),c=Qo(Qa.l,Dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Pt;Pt.NAMES=S_;let mT=0;class Xs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Us,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class M_ extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=l_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new le,Lc=new zt;let gT=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ls(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ls(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ls(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ls(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ls(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class b_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wn extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vT=0;const pi=new ln,eh=new Bn,As=new le,ai=new cl,qo=new cl,En=new le;class qn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?E_:b_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ai.min,qo.min),ai.expandByPoint(En),En.addVectors(ai.max,qo.max),ai.expandByPoint(En)):(ai.expandByPoint(qo.min),ai.expandByPoint(qo.max))}ai.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(As.fromBufferAttribute(e,p),En.add(As)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new le,m[Z]=new le;const p=new le,v=new le,g=new le,x=new zt,b=new zt,E=new zt,T=new le,S=new le;function _(Z,L,R){p.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Z),b.fromBufferAttribute(c,L),E.fromBufferAttribute(c,R),v.sub(p),g.sub(p),b.sub(x),E.sub(x);const V=1/(b.x*E.y-E.x*b.y);isFinite(V)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(V),S.copy(g).multiplyScalar(b.x).addScaledVector(v,-E.x).multiplyScalar(V),h[Z].add(T),h[L].add(T),h[R].add(T),m[Z].add(S),m[L].add(S),m[R].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let Z=0,L=C.length;Z<L;++Z){const R=C[Z],V=R.start,J=R.count;for(let fe=V,pe=V+J;fe<pe;fe+=3)_(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const N=new le,O=new le,H=new le,P=new le;function z(Z){H.fromBufferAttribute(l,Z),P.copy(H);const L=h[Z];N.copy(L),N.sub(H.multiplyScalar(H.dot(L))).normalize(),O.crossVectors(P,L);const V=O.dot(m[Z])<0?-1:1;f.setXYZW(Z,N.x,N.y,N.z,V)}for(let Z=0,L=C.length;Z<L;++Z){const R=C[Z],V=R.start,J=R.count;for(let fe=V,pe=V+J;fe<pe;fe+=3)z(e.getX(fe+0)),z(e.getX(fe+1)),z(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const l=new le,c=new le,f=new le,h=new le,m=new le,p=new le,v=new le,g=new le;if(e)for(let x=0,b=e.count;x<b;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let b=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?b=m[T]*h.data.stride+h.offset:b=m[T]*v;for(let _=0;_<v;_++)x[E++]=p[b++]}return new Ri(x,v,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],b=e(x,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const b=p[g];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,b=g.length;x<b;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new ln,Tr=new Mp,Uc=new ul,Jg=new le,Pc=new le,Oc=new le,Ic=new le,th=new le,zc=new le,$g=new le,Bc=new le;class ar extends Bn{constructor(e=new qn,i=new M_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(th.fromBufferAttribute(g,e),f?zc.addScaledVector(th,v):zc.addScaledVector(th.sub(i),v))}i.add(zc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),Tr.copy(e.ray).recast(e.near),!(Uc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Uc,Jg)===null||Tr.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Qg.copy(c).invert(),Tr.copy(e.ray).applyMatrix4(Qg),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Tr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],C=Math.max(S.start,b.start),N=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let O=C,H=N;O<H;O+=3){const P=h.getX(O),z=h.getX(O+1),Z=h.getX(O+2);l=Fc(this,_,e,r,p,v,g,P,z,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let S=E,_=T;S<_;S+=3){const C=h.getX(S),N=h.getX(S+1),O=h.getX(S+2);l=Fc(this,f,e,r,p,v,g,C,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=f[S.materialIndex],C=Math.max(S.start,b.start),N=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let O=C,H=N;O<H;O+=3){const P=O,z=O+1,Z=O+2;l=Fc(this,_,e,r,p,v,g,P,z,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),T=Math.min(m.count,b.start+b.count);for(let S=E,_=T;S<_;S+=3){const C=S,N=S+1,O=S+2;l=Fc(this,f,e,r,p,v,g,C,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function _T(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===ir,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Fc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Pc),s.getVertexPosition(m,Oc),s.getVertexPosition(p,Ic);const v=_T(s,e,i,r,Pc,Oc,Ic,$g);if(v){const g=new le;vi.getBarycoord($g,Pc,Oc,Ic,g),l&&(v.uv=vi.getInterpolatedAttribute(l,h,m,p,g,new zt)),c&&(v.uv1=vi.getInterpolatedAttribute(c,h,m,p,g,new zt)),f&&(v.normal=vi.getInterpolatedAttribute(f,h,m,p,g,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};vi.getNormal(Pc,Oc,Ic,x.normal),v.face=x,v.barycoord=g}return v}class Ws extends qn{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,b=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(g,2));function E(T,S,_,C,N,O,H,P,z,Z,L){const R=O/z,V=H/Z,J=O/2,fe=H/2,pe=P/2,ge=z+1,I=Z+1;let F=0,W=0;const ne=new le;for(let $=0;$<I;$++){const U=$*V-fe;for(let j=0;j<ge;j++){const ue=j*R-J;ne[T]=ue*C,ne[S]=U*N,ne[_]=pe,p.push(ne.x,ne.y,ne.z),ne[T]=0,ne[S]=0,ne[_]=P>0?1:-1,v.push(ne.x,ne.y,ne.z),g.push(j/z),g.push(1-$/Z),F+=1}}for(let $=0;$<Z;$++)for(let U=0;U<z;U++){const j=x+U+ge*$,ue=x+U+ge*($+1),xe=x+(U+1)+ge*($+1),be=x+(U+1)+ge*$;m.push(j,ue,be),m.push(ue,xe,be),W+=6}h.addGroup(b,W,L),b+=W,x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function xT(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function T_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const yT={clone:Hs,merge:In};var ST=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ST,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=xT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new le,ev=new zt,tv=new zt;class gi extends A_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=al*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ps*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Rs=1;class bT extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(ws,Rs,e,i);l.layers=this.layers,this.add(l);const c=new gi(ws,Rs,e,i);c.layers=this.layers,this.add(c);const f=new gi(ws,Rs,e,i);f.layers=this.layers,this.add(f);const h=new gi(ws,Rs,e,i);h.layers=this.layers,this.add(h);const m=new gi(ws,Rs,e,i);m.layers=this.layers,this.add(m);const p=new gi(ws,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,x,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class w_ extends zn{constructor(e=[],i=zs,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ET extends Or{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new w_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ws(5,5,5),c=new ya({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ma});c.uniforms.tEquirect.value=i;const f=new ar(l,c),h=i.minFilter;return i.minFilter===Ur&&(i.minFilter=_i),new bT(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Hc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TT={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,r),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&x>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class bp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AT extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wT extends zn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ri,v=ri,g,x){super(null,f,h,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new le,RT=new le,CT=new mt;class Nr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ih.subVectors(r,i).cross(RT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ih),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||CT.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ul,NT=new zt(.5,.5),kc=new le;class R_{constructor(e=new Nr,i=new Nr,r=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],b=c[7],E=c[8],T=c[9],S=c[10],_=c[11],C=c[12],N=c[13],O=c[14],H=c[15];if(l[0].setComponents(p-f,b-v,_-E,H-C).normalize(),l[1].setComponents(p+f,b+v,_+E,H+C).normalize(),l[2].setComponents(p+h,b+g,_+T,H+N).normalize(),l[3].setComponents(p-h,b-g,_-T,H-N).normalize(),r)l[4].setComponents(m,x,S,O).normalize(),l[5].setComponents(p-m,b-x,_-S,H-O).normalize();else if(l[4].setComponents(p-m,b-x,_-S,H-O).normalize(),i===Ii)l[5].setComponents(p+m,b+x,_+S,H+O).normalize();else if(i===uu)l[5].setComponents(m,x,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const i=NT.distanceTo(e.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class np extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new le,hu=new le,nv=new ln,Yo=new Mp,Gc=new ul,ah=new le,iv=new le;class DT extends Bn{constructor(e=new qn,i=new np){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)du.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Wn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;nv.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(nv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const b=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=b,S=E-1;T<S;T+=p){const _=v.getX(T),C=v.getX(T+1),N=Vc(this,e,Yo,m,_,C,T);N&&i.push(N)}if(this.isLineLoop){const T=v.getX(E-1),S=v.getX(b),_=Vc(this,e,Yo,m,T,S,E-1);_&&i.push(_)}}else{const b=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=b,S=E-1;T<S;T+=p){const _=Vc(this,e,Yo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Vc(this,e,Yo,m,E-1,b,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(du.fromBufferAttribute(h,l),hu.fromBufferAttribute(h,c),i.distanceSqToSegment(du,hu,ah,iv)>r)return;ah.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ah);if(!(p<e.near||p>e.far))return{distance:p,point:iv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const av=new le,rv=new le;class sv extends DT{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)av.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+av.distanceTo(rv);e.setAttribute("lineDistance",new Wn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ov=new ln,ip=new Mp,jc=new ul,Xc=new le;class LT extends Bn{constructor(e=new qn,i=new C_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jc.copy(r.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,e.ray.intersectsSphere(jc)===!1)return;ov.copy(l).invert(),ip.copy(e.ray).applyMatrix4(ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),b=Math.min(p.count,f.start+f.count);for(let E=x,T=b;E<T;E++){const S=p.getX(E);Xc.fromBufferAttribute(g,S),lv(Xc,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=x,T=b;E<T;E++)Xc.fromBufferAttribute(g,E),lv(Xc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function lv(s,e,i,r,l,c,f){const h=ip.distanceSqToPoint(s);if(h<i){const m=new le;ip.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class N_ extends zn{constructor(e,i,r=Pr,l,c,f,h=ri,m=ri,p,v=tl,g=1){if(v!==tl&&v!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class D_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ep extends qn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],f=[];h(l),p(r),v(),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(c.slice(),3)),this.setAttribute("uv",new Wn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(C){const N=new le,O=new le,H=new le;for(let P=0;P<i.length;P+=3)b(i[P+0],N),b(i[P+1],O),b(i[P+2],H),m(N,O,H,C)}function m(C,N,O,H){const P=H+1,z=[];for(let Z=0;Z<=P;Z++){z[Z]=[];const L=C.clone().lerp(O,Z/P),R=N.clone().lerp(O,Z/P),V=P-Z;for(let J=0;J<=V;J++)J===0&&Z===P?z[Z][J]=L:z[Z][J]=L.clone().lerp(R,J/V)}for(let Z=0;Z<P;Z++)for(let L=0;L<2*(P-Z)-1;L++){const R=Math.floor(L/2);L%2===0?(x(z[Z][R+1]),x(z[Z+1][R]),x(z[Z][R])):(x(z[Z][R+1]),x(z[Z+1][R+1]),x(z[Z+1][R]))}}function p(C){const N=new le;for(let O=0;O<c.length;O+=3)N.x=c[O+0],N.y=c[O+1],N.z=c[O+2],N.normalize().multiplyScalar(C),c[O+0]=N.x,c[O+1]=N.y,c[O+2]=N.z}function v(){const C=new le;for(let N=0;N<c.length;N+=3){C.x=c[N+0],C.y=c[N+1],C.z=c[N+2];const O=S(C)/2/Math.PI+.5,H=_(C)/Math.PI+.5;f.push(O,1-H)}E(),g()}function g(){for(let C=0;C<f.length;C+=6){const N=f[C+0],O=f[C+2],H=f[C+4],P=Math.max(N,O,H),z=Math.min(N,O,H);P>.9&&z<.1&&(N<.2&&(f[C+0]+=1),O<.2&&(f[C+2]+=1),H<.2&&(f[C+4]+=1))}}function x(C){c.push(C.x,C.y,C.z)}function b(C,N){const O=C*3;N.x=e[O+0],N.y=e[O+1],N.z=e[O+2]}function E(){const C=new le,N=new le,O=new le,H=new le,P=new zt,z=new zt,Z=new zt;for(let L=0,R=0;L<c.length;L+=9,R+=6){C.set(c[L+0],c[L+1],c[L+2]),N.set(c[L+3],c[L+4],c[L+5]),O.set(c[L+6],c[L+7],c[L+8]),P.set(f[R+0],f[R+1]),z.set(f[R+2],f[R+3]),Z.set(f[R+4],f[R+5]),H.copy(C).add(N).add(O).divideScalar(3);const V=S(H);T(P,R+0,C,V),T(z,R+2,N,V),T(Z,R+4,O,V)}}function T(C,N,O,H){H<0&&C.x===1&&(f[N]=C.x-1),O.x===0&&O.z===0&&(f[N]=H/2/Math.PI+.5)}function S(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.details)}}const Wc=new le,qc=new le,rh=new le,Yc=new vi;class UT extends qn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Ps*i),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),x={},b=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:S,c:_}=Yc;if(T.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),Yc.getNormal(rh),g[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let C=0;C<3;C++){const N=(C+1)%3,O=g[C],H=g[N],P=Yc[v[C]],z=Yc[v[N]],Z=`${O}_${H}`,L=`${H}_${O}`;L in x&&x[L]?(rh.dot(x[L].normal)<=c&&(b.push(P.x,P.y,P.z),b.push(z.x,z.y,z.z)),x[L]=null):Z in x||(x[Z]={index0:p[C],index1:p[N],normal:rh.clone()})}}for(const E in x)if(x[E]){const{index0:T,index1:S}=x[E];Wc.fromBufferAttribute(h,T),qc.fromBufferAttribute(h,S),b.push(Wc.x,Wc.y,Wc.z),b.push(qc.x,qc.y,qc.z)}this.setAttribute("position",new Wn(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tp extends Ep{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Tp(e.radius,e.detail)}}class vu extends qn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,x=i/m,b=[],E=[],T=[],S=[];for(let _=0;_<v;_++){const C=_*x-f;for(let N=0;N<p;N++){const O=N*g-c;E.push(O,-C,0),T.push(0,0,1),S.push(N/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let C=0;C<h;C++){const N=C+p*_,O=C+p*(_+1),H=C+1+p*(_+1),P=C+1+p*_;b.push(N,O,P),b.push(O,H,P)}this.setIndex(b),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(T,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class PT extends qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],r=new Set,l=new le,c=new le;if(e.index!==null){const f=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const g=m[p],x=g.start,b=g.count;for(let E=x,T=x+b;E<T;E+=3)for(let S=0;S<3;S++){const _=h.getX(E+S),C=h.getX(E+(S+1)%3);l.fromBufferAttribute(f,_),c.fromBufferAttribute(f,C),cv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,g=3*h+(p+1)%3;l.fromBufferAttribute(f,v),c.fromBufferAttribute(f,g),cv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Wn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function cv(s,e,i){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class OT extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IT extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zT extends A_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BT extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function uv(s,e,i,r){const l=FT(r);switch(i){case p_:return s*e;case g_:return s*e/l.components*l.byteLength;case gp:return s*e/l.components*l.byteLength;case vp:return s*e*2/l.components*l.byteLength;case _p:return s*e*2/l.components*l.byteLength;case m_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case xp:return s*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case au:case ru:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case Rh:case Nh:return Math.max(s,8)*Math.max(e,8)/2;case Lh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FT(s){switch(s){case _a:case u_:return{byteLength:1,components:1};case $o:case f_:case Gs:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Pr:case hp:case ha:return{byteLength:4,components:1};case d_:case h_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);function L_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function HT(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,v);else{g.sort((b,E)=>b.start-E.start);let x=0;for(let b=1;b<g.length;b++){const E=g[x],T=g[b];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let b=0,E=g.length;b<E;b++){const T=g[b];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var kT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
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
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZT=`#ifdef USE_BATCHING
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
#endif`,KT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$T=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e3=`#ifdef USE_IRIDESCENCE
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
#endif`,t3=`#ifdef USE_BUMPMAP
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
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u3=`#define PI 3.141592653589793
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
} // validated`,f3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d3=`vec3 transformedNormal = objectNormal;
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
#endif`,h3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v3="gl_FragColor = linearToOutputTexel( gl_FragColor );",_3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x3=`#ifdef USE_ENVMAP
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
#endif`,y3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S3=`#ifdef USE_ENVMAP
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
#endif`,M3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b3=`#ifdef USE_ENVMAP
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
#endif`,E3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R3=`#ifdef USE_GRADIENTMAP
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
}`,C3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L3=`uniform bool receiveShadow;
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
#endif`,U3=`#ifdef USE_ENVMAP
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
#endif`,P3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B3=`PhysicalMaterial material;
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
#endif`,F3=`uniform sampler2D dfgLUT;
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
}`,H3=`
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
#endif`,k3=`#if defined( RE_IndirectDiffuse )
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
#endif`,G3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K3=`#if defined( USE_POINTS_UV )
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
#endif`,Q3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
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
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CA=`#ifdef USE_SKINNING
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
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PA=`#ifdef USE_TRANSMISSION
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
#endif`,OA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
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
}`,qA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,ZA=`#define DISTANCE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,$A=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#define LAMBERT
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
}`,iw=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,rw=`#define MATCAP
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
}`,sw=`#define NORMAL
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
}`,ow=`#define NORMAL
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
}`,lw=`#define PHONG
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
}`,cw=`#define PHONG
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
}`,uw=`#define STANDARD
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
}`,fw=`#define STANDARD
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
}`,dw=`#define TOON
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
}`,hw=`#define TOON
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
}`,pw=`uniform float size;
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#include <common>
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
}`,vw=`uniform vec3 color;
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
}`,_w=`uniform float rotation;
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
}`,xw=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:kT,alphahash_pars_fragment:GT,alphamap_fragment:VT,alphamap_pars_fragment:jT,alphatest_fragment:XT,alphatest_pars_fragment:WT,aomap_fragment:qT,aomap_pars_fragment:YT,batching_pars_vertex:ZT,batching_vertex:KT,begin_vertex:QT,beginnormal_vertex:JT,bsdfs:$T,iridescence_fragment:e3,bumpmap_pars_fragment:t3,clipping_planes_fragment:n3,clipping_planes_pars_fragment:i3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:r3,color_fragment:s3,color_pars_fragment:o3,color_pars_vertex:l3,color_vertex:c3,common:u3,cube_uv_reflection_fragment:f3,defaultnormal_vertex:d3,displacementmap_pars_vertex:h3,displacementmap_vertex:p3,emissivemap_fragment:m3,emissivemap_pars_fragment:g3,colorspace_fragment:v3,colorspace_pars_fragment:_3,envmap_fragment:x3,envmap_common_pars_fragment:y3,envmap_pars_fragment:S3,envmap_pars_vertex:M3,envmap_physical_pars_fragment:U3,envmap_vertex:b3,fog_vertex:E3,fog_pars_vertex:T3,fog_fragment:A3,fog_pars_fragment:w3,gradientmap_pars_fragment:R3,lightmap_pars_fragment:C3,lights_lambert_fragment:N3,lights_lambert_pars_fragment:D3,lights_pars_begin:L3,lights_toon_fragment:P3,lights_toon_pars_fragment:O3,lights_phong_fragment:I3,lights_phong_pars_fragment:z3,lights_physical_fragment:B3,lights_physical_pars_fragment:F3,lights_fragment_begin:H3,lights_fragment_maps:k3,lights_fragment_end:G3,logdepthbuf_fragment:V3,logdepthbuf_pars_fragment:j3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:W3,map_fragment:q3,map_pars_fragment:Y3,map_particle_fragment:Z3,map_particle_pars_fragment:K3,metalnessmap_fragment:Q3,metalnessmap_pars_fragment:J3,morphinstance_vertex:$3,morphcolor_vertex:eA,morphnormal_vertex:tA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:dA,iridescence_pars_fragment:hA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:vA,dithering_fragment:_A,dithering_pars_fragment:xA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:bA,shadowmap_vertex:EA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:wA,skinning_vertex:RA,skinnormal_vertex:CA,specularmap_fragment:NA,specularmap_pars_fragment:DA,tonemapping_fragment:LA,tonemapping_pars_fragment:UA,transmission_fragment:PA,transmission_pars_fragment:OA,uv_pars_fragment:IA,uv_pars_vertex:zA,uv_vertex:BA,worldpos_vertex:FA,background_vert:HA,background_frag:kA,backgroundCube_vert:GA,backgroundCube_frag:VA,cube_vert:jA,cube_frag:XA,depth_vert:WA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:$A,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:aw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:ow,meshphong_vert:lw,meshphong_frag:cw,meshphysical_vert:uw,meshphysical_frag:fw,meshtoon_vert:dw,meshtoon_frag:hw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:vw,sprite_vert:_w,sprite_frag:xw},ze={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Zc={r:0,b:0,g:0},wr=new xa,yw=new ln;function Sw(s,e,i,r,l,c,f){const h=new Pt(0);let m=c===!0?0:1,p,v,g=null,x=0,b=null;function E(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function T(N){let O=!1;const H=E(N);H===null?_(h,m):H&&H.isColor&&(_(H,1),O=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,O){const H=E(O);H&&(H.isCubeTexture||H.mapping===gu)?(v===void 0&&(v=new ar(new Ws(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Hs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),wr.copy(O.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(wr)),v.material.toneMapped=Ut.getTransfer(H.colorSpace)!==Wt,(g!==H||x!==H.version||b!==s.toneMapping)&&(v.material.needsUpdate=!0,g=H,x=H.version,b=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ar(new vu(2,2),new ya({name:"BackgroundMaterial",uniforms:Hs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(H.colorSpace)!==Wt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,b=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,O){N.getRGB(Zc,T_(s)),r.buffers.color.setClear(Zc.r,Zc.g,Zc.b,O,f)}function C(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,O=1){h.set(N),m=O,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:T,addToRenderList:S,dispose:C}}function Mw(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(R,V,J,fe,pe){let ge=!1;const I=g(fe,J,V);c!==I&&(c=I,p(c.object)),ge=b(R,fe,J,pe),ge&&E(R,fe,J,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,O(R,V,J,fe),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,V,J){const fe=J.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let ge=pe[V.id];ge===void 0&&(ge={},pe[V.id]=ge);let I=ge[fe];return I===void 0&&(I=x(m()),ge[fe]=I),I}function x(R){const V=[],J=[],fe=[];for(let pe=0;pe<i;pe++)V[pe]=0,J[pe]=0,fe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:fe,object:R,attributes:{},index:null}}function b(R,V,J,fe){const pe=c.attributes,ge=V.attributes;let I=0;const F=J.getAttributes();for(const W in F)if(F[W].location>=0){const $=pe[W];let U=ge[W];if(U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),$===void 0||$.attribute!==U||U&&$.data!==U.data)return!0;I++}return c.attributesNum!==I||c.index!==fe}function E(R,V,J,fe){const pe={},ge=V.attributes;let I=0;const F=J.getAttributes();for(const W in F)if(F[W].location>=0){let $=ge[W];$===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const U={};U.attribute=$,$&&$.data&&(U.data=$.data),pe[W]=U,I++}c.attributes=pe,c.attributesNum=I,c.index=fe}function T(){const R=c.newAttributes;for(let V=0,J=R.length;V<J;V++)R[V]=0}function S(R){_(R,0)}function _(R,V){const J=c.newAttributes,fe=c.enabledAttributes,pe=c.attributeDivisors;J[R]=1,fe[R]===0&&(s.enableVertexAttribArray(R),fe[R]=1),pe[R]!==V&&(s.vertexAttribDivisor(R,V),pe[R]=V)}function C(){const R=c.newAttributes,V=c.enabledAttributes;for(let J=0,fe=V.length;J<fe;J++)V[J]!==R[J]&&(s.disableVertexAttribArray(J),V[J]=0)}function N(R,V,J,fe,pe,ge,I){I===!0?s.vertexAttribIPointer(R,V,J,pe,ge):s.vertexAttribPointer(R,V,J,fe,pe,ge)}function O(R,V,J,fe){T();const pe=fe.attributes,ge=J.getAttributes(),I=V.defaultAttributeValues;for(const F in ge){const W=ge[F];if(W.location>=0){let ne=pe[F];if(ne===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const $=ne.normalized,U=ne.itemSize,j=e.get(ne);if(j===void 0)continue;const ue=j.buffer,xe=j.type,be=j.bytesPerElement,te=xe===s.INT||xe===s.UNSIGNED_INT||ne.gpuType===hp;if(ne.isInterleavedBufferAttribute){const de=ne.data,Ce=de.stride,Ue=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)_(W.location+Ae,de.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)S(W.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let Ae=0;Ae<W.locationSize;Ae++)N(W.location+Ae,U/W.locationSize,xe,$,Ce*be,(Ue+U/W.locationSize*Ae)*be,te)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)_(W.location+de,ne.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<W.locationSize;de++)S(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let de=0;de<W.locationSize;de++)N(W.location+de,U/W.locationSize,xe,$,U*be,U/W.locationSize*de*be,te)}}else if(I!==void 0){const $=I[F];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(W.location,$);break;case 3:s.vertexAttrib3fv(W.location,$);break;case 4:s.vertexAttrib4fv(W.location,$);break;default:s.vertexAttrib1fv(W.location,$)}}}}C()}function H(){Z();for(const R in r){const V=r[R];for(const J in V){const fe=V[J];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete V[J]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const J in V){const fe=V[J];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete V[J]}delete r[R.id]}function z(R){for(const V in r){const J=r[V];if(J[R.id]===void 0)continue;const fe=J[R.id];for(const pe in fe)v(fe[pe].object),delete fe[pe];delete J[R.id]}}function Z(){L(),f=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:L,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:C}}function bw(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let b=0;for(let E=0;E<g;E++)b+=v[E];i.update(b,r,1)}function m(p,v,g,x){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Ew(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_a&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ha&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:O,vertexTextures:H,maxSamples:P}}function Tw(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Nr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const b=g.length!==0||x||r!==0||l;return l=x,r=g.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,b){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const C=c?0:r,N=C*4;let O=_.clippingState||null;m.value=O,O=v(E,x,N,b);for(let H=0;H!==N;++H)O[H]=i[H];_.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,b,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const _=b+T*4,C=x.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,O=b;N!==T;++N,O+=4)f.copy(g[N]).applyMatrix4(C,h),f.normal.toArray(S,O),S[O+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function Aw(s){let e=new WeakMap;function i(f,h){return h===Eh?f.mapping=zs:h===Th&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Eh||h===Th)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ET(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,fv=[.125,.215,.35,.446,.526,.582],Lr=20,ww=256,Zo=new zT,dv=new Pt;let sh=null,oh=0,lh=0,ch=!1;const Rw=new le;class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=Rw}=c;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Gs,format:wi,colorSpace:Fs,depthBuffer:!1},l=pv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cw(c)),this._blurMaterial=Dw(c,e,i),this._ggxMaterial=Nw(c,e,i)}return l}_compileMaterial(e){const i=new ar(new qn,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,b=g.toneMapping;g.getClearColor(dv),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ar(new Ws,new M_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,_=!0):(S.color.copy(dv),_=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const H=this._cubeSize;Cs(l,O*H,N>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(T,m),g.render(e,m)}g.toneMapping=b,g.autoClear=x,e.background=C}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zs||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=.05+p*.95,b=g*x,{_lodMax:E}=this,T=this._sizeLods[r],S=3*T*(r>E-tr?r-E+tr:0),_=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,Cs(c,S,_,3*T,2*T),l.setRenderTarget(c),l.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Cs(e,S,_,3*T,2*T),l.setRenderTarget(e),l.render(h,Zo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,b=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Lr-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):Lr;S>Lr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Lr}`);const _=[];let C=0;for(let z=0;z<Lr;++z){const Z=z/T,L=Math.exp(-Z*Z/2);_.push(L),z===0?C+=L:z<S&&(C+=2*L)}for(let z=0;z<_.length;z++)_[z]=_[z]/C;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const O=this._sizeLods[l],H=3*O*(l>N-tr?l-N+tr:0),P=4*(this._cubeSize-O);Cs(i,H,P,3*O,2*O),m.setRenderTarget(i),m.render(g,Zo)}}function Cw(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+fv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-tr?m=fv[f-s+tr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],b=6,E=6,T=3,S=2,_=1,C=new Float32Array(T*E*b),N=new Float32Array(S*E*b),O=new Float32Array(_*E*b);for(let P=0;P<b;P++){const z=P%3*2/3-1,Z=P>2?0:-1,L=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];C.set(L,T*E*P),N.set(x,S*E*P);const R=[P,P,P,P,P,P];O.set(R,_*E*P)}const H=new qn;H.setAttribute("position",new Ri(C,T)),H.setAttribute("uv",new Ri(N,S)),H.setAttribute("faceIndex",new Ri(O,_)),r.push(new ar(H,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function pv(s,e,i){const r=new Or(s,e,i);return r.texture.mapping=gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function Nw(s,e,i){return new ya({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Dw(s,e,i){const r=new Float32Array(Lr),l=new le(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function mv(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function gv(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function Lw(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Eh||m===Th,v=m===zs||m===Bs;if(p||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new hv(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new hv(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Uw(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&il("WebGLRenderer: "+r+" extension not supported."),l}}}function Pw(s,e,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const b in x)e.update(x[b],s.ARRAY_BUFFER)}function p(g){const x=[],b=g.index,E=g.attributes.position;let T=0;if(b!==null){const C=b.array;T=b.version;for(let N=0,O=C.length;N<O;N+=3){const H=C[N+0],P=C[N+1],z=C[N+2];x.push(H,P,P,z,z,H)}}else if(E!==void 0){const C=E.array;T=E.version;for(let N=0,O=C.length/3-1;N<O;N+=3){const H=N+0,P=N+1,z=N+2;x.push(H,P,P,z,z,H)}}else return;const S=new(__(x)?E_:b_)(x,1);S.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const b=g.index;b!==null&&x.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function Ow(s,e,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,b){s.drawElements(r,b,c,x*f),i.update(b,r,1)}function p(x,b,E){E!==0&&(s.drawElementsInstanced(r,b,c,x*f,E),i.update(b,r,E))}function v(x,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=b[_];i.update(S,r,1)}function g(x,b,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,b[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,b,0,c,x,0,T,0,E);let _=0;for(let C=0;C<E;C++)_+=b[C]*T[C];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Iw(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zw(s,e,i){const r=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let b=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",b)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),T===!0&&(O=2),S===!0&&(O=3);let H=h.attributes.position.count*O,P=1;H>e.maxTextureSize&&(P=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*P*4*g),Z=new x_(z,H,P,g);Z.type=ha,Z.needsUpdate=!0;const L=O*4;for(let R=0;R<g;R++){const V=_[R],J=C[R],fe=N[R],pe=H*P*4*R;for(let ge=0;ge<V.count;ge++){const I=ge*L;E===!0&&(l.fromBufferAttribute(V,ge),z[pe+I+0]=l.x,z[pe+I+1]=l.y,z[pe+I+2]=l.z,z[pe+I+3]=0),T===!0&&(l.fromBufferAttribute(J,ge),z[pe+I+4]=l.x,z[pe+I+5]=l.y,z[pe+I+6]=l.z,z[pe+I+7]=0),S===!0&&(l.fromBufferAttribute(fe,ge),z[pe+I+8]=l.x,z[pe+I+9]=l.y,z[pe+I+10]=l.z,z[pe+I+11]=fe.itemSize===4?l.w:1)}}x={count:g,texture:Z,size:new zt(H,P)},r.set(h,x),h.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let T=0;T<p.length;T++)b+=p[T];const E=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Bw(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const U_=new zn,vv=new N_(1,1),P_=new x_,O_=new oT,I_=new w_,_v=[],xv=[],yv=new Float32Array(16),Sv=new Float32Array(9),Mv=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=_v[l];if(c===void 0&&(c=new Float32Array(l),_v[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function xu(s,e){let i=xv[e];i===void 0&&(i=new Int32Array(e),xv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Fw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Hw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function kw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function Gw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function Vw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;Mv.set(r),s.uniformMatrix2fv(this.addr,!1,Mv),xn(i,r)}}function jw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;Sv.set(r),s.uniformMatrix3fv(this.addr,!1,Sv),xn(i,r)}}function Xw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,r))return;yv.set(r),s.uniformMatrix4fv(this.addr,!1,yv),xn(i,r)}}function Ww(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function qw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function Yw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function Zw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function Kw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Qw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function Jw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function $w(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function e4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(vv.compareFunction=v_,c=vv):c=U_,i.setTexture2D(e||c,l)}function t4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||O_,l)}function n4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||I_,l)}function i4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||P_,l)}function a4(s){switch(s){case 5126:return Fw;case 35664:return Hw;case 35665:return kw;case 35666:return Gw;case 35674:return Vw;case 35675:return jw;case 35676:return Xw;case 5124:case 35670:return Ww;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return Jw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return e4;case 35679:case 36299:case 36307:return t4;case 35680:case 36300:case 36308:case 36293:return n4;case 36289:case 36303:case 36311:case 36292:return i4}}function r4(s,e){s.uniform1fv(this.addr,e)}function s4(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function o4(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function l4(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function c4(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function u4(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function f4(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function d4(s,e){s.uniform1iv(this.addr,e)}function h4(s,e){s.uniform2iv(this.addr,e)}function p4(s,e){s.uniform3iv(this.addr,e)}function m4(s,e){s.uniform4iv(this.addr,e)}function g4(s,e){s.uniform1uiv(this.addr,e)}function v4(s,e){s.uniform2uiv(this.addr,e)}function _4(s,e){s.uniform3uiv(this.addr,e)}function x4(s,e){s.uniform4uiv(this.addr,e)}function y4(s,e,i){const r=this.cache,l=e.length,c=xu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||U_,c[f])}function S4(s,e,i){const r=this.cache,l=e.length,c=xu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||O_,c[f])}function M4(s,e,i){const r=this.cache,l=e.length,c=xu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||I_,c[f])}function b4(s,e,i){const r=this.cache,l=e.length,c=xu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||P_,c[f])}function E4(s){switch(s){case 5126:return r4;case 35664:return s4;case 35665:return o4;case 35666:return l4;case 35674:return c4;case 35675:return u4;case 35676:return f4;case 5124:case 35670:return d4;case 35667:case 35671:return h4;case 35668:case 35672:return p4;case 35669:case 35673:return m4;case 5125:return g4;case 36294:return v4;case 36295:return _4;case 36296:return x4;case 35678:case 36198:case 36298:case 36306:case 35682:return y4;case 35679:case 36299:case 36307:return S4;case 35680:case 36300:case 36308:case 36293:return M4;case 36289:case 36303:case 36311:case 36292:return b4}}class T4{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a4(i.type)}}class A4{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E4(i.type)}}class w4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function bv(s,e){s.seq.push(e),s.map[e.id]=e}function R4(s,e,i){const r=s.name,l=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),f=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){bv(i,p===void 0?new T4(h,s,e):new A4(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new w4(h),bv(i,g)),i=g}}}class su{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);R4(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Ev(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const C4=37297;let N4=0;function D4(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Tv=new mt;function L4(s){Ut._getMatrix(Tv,Ut.workingColorSpace,s);const e=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case cu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Av(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+D4(s.getShaderSource(e),h)}else return c}function U4(s,e){const i=L4(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P4(s,e){let i;switch(e){case xE:i="Linear";break;case yE:i="Reinhard";break;case SE:i="Cineon";break;case ME:i="ACESFilmic";break;case EE:i="AgX";break;case TE:i="Neutral";break;case bE:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new le;function O4(){Ut.getLuminanceCoefficients(Kc);const s=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I4(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function z4(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function B4(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Ko(s){return s!==""}function wv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F4=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(s){return s.replace(F4,k4)}const H4=new Map;function k4(s,e){let i=vt[e];if(i===void 0){const r=H4.get(e);if(r!==void 0)i=vt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(i)}const G4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(s){return s.replace(G4,V4)}function V4(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Nv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function j4(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function X4(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W4(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function q4(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case l_:e="ENVMAP_BLENDING_MULTIPLY";break;case vE:e="ENVMAP_BLENDING_MIX";break;case _E:e="ENVMAP_BLENDING_ADD";break}return e}function Y4(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Z4(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=j4(i),p=X4(i),v=W4(i),g=q4(i),x=Y4(i),b=I4(i),E=z4(c),T=l.createProgram();let S,_,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(S=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),_=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?vt.tonemapping_pars_fragment:"",i.toneMapping!==nr?P4("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,U4("linearToOutputTexel",i.outputColorSpace),O4(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),f=ap(f),f=wv(f,i),f=Rv(f,i),h=ap(h),h=wv(h,i),h=Rv(h,i),f=Cv(f),h=Cv(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=C+S+f,O=C+_+h,H=Ev(l,l.VERTEX_SHADER,N),P=Ev(l,l.FRAGMENT_SHADER,O);l.attachShader(T,H),l.attachShader(T,P),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",fe=l.getShaderInfoLog(H)||"",pe=l.getShaderInfoLog(P)||"",ge=J.trim(),I=fe.trim(),F=pe.trim();let W=!0,ne=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,H,P);else{const $=Av(l,H,"vertex"),U=Av(l,P,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ge+`
`+$+`
`+U)}else ge!==""?ct("WebGLProgram: Program Info Log:",ge):(I===""||F==="")&&(ne=!1);ne&&(V.diagnostics={runnable:W,programLog:ge,vertexShader:{log:I,prefix:S},fragmentShader:{log:F,prefix:_}})}l.deleteShader(H),l.deleteShader(P),Z=new su(l,T),L=B4(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,C4)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=N4++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=P,this}let K4=0;class Q4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new J4(e),i.set(e,r)),r}}class J4{constructor(e){this.id=K4++,this.code=e,this.usedTimes=0}}function $4(s,e,i,r,l,c,f){const h=new y_,m=new Q4,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,R,V,J,fe){const pe=J.fog,ge=fe.geometry,I=L.isMeshStandardMaterial?J.environment:null,F=(L.isMeshStandardMaterial?i:e).get(L.envMap||I),W=F&&F.mapping===gu?F.image.height:null,ne=E[L.type];L.precision!==null&&(b=l.getMaxPrecision(L.precision),b!==L.precision&&ct("WebGLProgram.getParameters:",L.precision,"not supported, using",b,"instead."));const $=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,U=$!==void 0?$.length:0;let j=0;ge.morphAttributes.position!==void 0&&(j=1),ge.morphAttributes.normal!==void 0&&(j=2),ge.morphAttributes.color!==void 0&&(j=3);let ue,xe,be,te;if(ne){const Ct=Oi[ne];ue=Ct.vertexShader,xe=Ct.fragmentShader}else ue=L.vertexShader,xe=L.fragmentShader,m.update(L),be=m.getVertexShaderID(L),te=m.getFragmentShaderID(L);const de=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ue=fe.isInstancedMesh===!0,Ae=fe.isBatchedMesh===!0,Fe=!!L.map,_t=!!L.matcap,it=!!F,xt=!!L.aoMap,k=!!L.lightMap,qe=!!L.bumpMap,ft=!!L.normalMap,Ot=!!L.displacementMap,He=!!L.emissiveMap,Bt=!!L.metalnessMap,Ze=!!L.roughnessMap,ot=L.anisotropy>0,B=L.clearcoat>0,A=L.dispersion>0,ae=L.iridescence>0,ye=L.sheen>0,Ee=L.transmission>0,me=ot&&!!L.anisotropyMap,Ke=B&&!!L.clearcoatMap,Ie=B&&!!L.clearcoatNormalMap,et=B&&!!L.clearcoatRoughnessMap,Ye=ae&&!!L.iridescenceMap,Te=ae&&!!L.iridescenceThicknessMap,Re=ye&&!!L.sheenColorMap,Qe=ye&&!!L.sheenRoughnessMap,Xe=!!L.specularMap,Be=!!L.specularColorMap,st=!!L.specularIntensityMap,X=Ee&&!!L.transmissionMap,Pe=Ee&&!!L.thicknessMap,De=!!L.gradientMap,Le=!!L.alphaMap,we=L.alphaTest>0,Me=!!L.alphaHash,Ge=!!L.extensions;let lt=nr;L.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Gt={shaderID:ne,shaderType:L.type,shaderName:L.name,vertexShader:ue,fragmentShader:xe,defines:L.defines,customVertexShaderID:be,customFragmentShaderID:te,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:b,batching:Ae,batchingColor:Ae&&fe._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&fe.instanceColor!==null,instancingMorph:Ue&&fe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Fs,alphaToCoverage:!!L.alphaToCoverage,map:Fe,matcap:_t,envMap:it,envMapMode:it&&F.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:k,bumpMap:qe,normalMap:ft,displacementMap:x&&Ot,emissiveMap:He,normalMapObjectSpace:ft&&L.normalMapType===NE,normalMapTangentSpace:ft&&L.normalMapType===CE,metalnessMap:Bt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:me,clearcoat:B,clearcoatMap:Ke,clearcoatNormalMap:Ie,clearcoatRoughnessMap:et,dispersion:A,iridescence:ae,iridescenceMap:Ye,iridescenceThicknessMap:Te,sheen:ye,sheenColorMap:Re,sheenRoughnessMap:Qe,specularMap:Xe,specularColorMap:Be,specularIntensityMap:st,transmission:Ee,transmissionMap:X,thicknessMap:Pe,gradientMap:De,opaque:L.transparent===!1&&L.blending===Us&&L.alphaToCoverage===!1,alphaMap:Le,alphaTest:we,alphaHash:Me,combine:L.combine,mapUv:Fe&&T(L.map.channel),aoMapUv:xt&&T(L.aoMap.channel),lightMapUv:k&&T(L.lightMap.channel),bumpMapUv:qe&&T(L.bumpMap.channel),normalMapUv:ft&&T(L.normalMap.channel),displacementMapUv:Ot&&T(L.displacementMap.channel),emissiveMapUv:He&&T(L.emissiveMap.channel),metalnessMapUv:Bt&&T(L.metalnessMap.channel),roughnessMapUv:Ze&&T(L.roughnessMap.channel),anisotropyMapUv:me&&T(L.anisotropyMap.channel),clearcoatMapUv:Ke&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(L.sheenRoughnessMap.channel),specularMapUv:Xe&&T(L.specularMap.channel),specularColorMapUv:Be&&T(L.specularColorMap.channel),specularIntensityMapUv:st&&T(L.specularIntensityMap.channel),transmissionMapUv:X&&T(L.transmissionMap.channel),thicknessMapUv:Pe&&T(L.thicknessMap.channel),alphaMapUv:Le&&T(L.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ft||ot),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!ge.attributes.uv&&(Fe||Le),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:fe.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:j,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Fe&&L.map.isVideoTexture===!0&&Ut.getTransfer(L.map.colorSpace)===Wt,decodeVideoTextureEmissive:He&&L.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(L.emissiveMap.colorSpace)===Wt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===fa,flipSided:L.side===Xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ge&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&L.extensions.multiDraw===!0||Ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Gt.vertexUv1s=p.has(1),Gt.vertexUv2s=p.has(2),Gt.vertexUv3s=p.has(3),p.clear(),Gt}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)R.push(V),R.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(C(R,L),N(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function C(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function N(L,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),L.push(h.mask)}function O(L){const R=E[L.type];let V;if(R){const J=Oi[R];V=yT.clone(J.uniforms)}else V=L.uniforms;return V}function H(L,R){let V;for(let J=0,fe=v.length;J<fe;J++){const pe=v[J];if(pe.cacheKey===R){V=pe,++V.usedTimes;break}}return V===void 0&&(V=new Z4(s,R,L,c),v.push(V)),V}function P(L){if(--L.usedTimes===0){const R=v.indexOf(L);v[R]=v[v.length-1],v.pop(),L.destroy()}}function z(L){m.remove(L)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:O,acquireProgram:H,releaseProgram:P,releaseShaderCache:z,programs:v,dispose:Z}}function e2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function t2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,b,E,T,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:b,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=b,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),e++,_}function h(g,x,b,E,T,S){const _=f(g,x,b,E,T,S);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(g,x,b,E,T,S){const _=f(g,x,b,E,T,S);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||t2),r.length>1&&r.sort(x||Dv),l.length>1&&l.sort(x||Dv)}function v(){for(let g=e,x=s.length;g<x;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function n2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Lv,s.set(r,[f])):l>=c.length?(f=new Lv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function i2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Pt};break;case"SpotLight":i={position:new le,direction:new le,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function a2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let r2=0;function s2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o2(s){const e=new i2,i=a2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,c=new ln,f=new ln;function h(p){let v=0,g=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let b=0,E=0,T=0,S=0,_=0,C=0,N=0,O=0,H=0,P=0,z=0;p.sort(s2);for(let L=0,R=p.length;L<R;L++){const V=p[L],J=V.color,fe=V.intensity,pe=V.distance,ge=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=J.r*fe,g+=J.g*fe,x+=J.b*fe;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],fe);z++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,W=i.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.directionalShadow[b]=W,r.directionalShadowMap[b]=ge,r.directionalShadowMatrix[b]=V.shadow.matrix,C++}r.directional[b]=I,b++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(J).multiplyScalar(fe),I.distance=pe,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[T]=I;const F=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,F.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[T]=F.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=ge,O++}T++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(J).multiplyScalar(fe),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const F=V.shadow,W=i.get(V);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=ge,r.pointShadowMatrix[E]=V.shadow.matrix,N++}r.point[E]=I,E++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(fe),I.groundColor.copy(V.groundColor).multiplyScalar(fe),r.hemi[_]=I,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==b||Z.pointLength!==E||Z.spotLength!==T||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==C||Z.numPointShadows!==N||Z.numSpotShadows!==O||Z.numSpotMaps!==H||Z.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=z,Z.directionalLength=b,Z.pointLength=E,Z.spotLength=T,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=C,Z.numPointShadows=N,Z.numSpotShadows=O,Z.numSpotMaps=H,Z.numLightProbes=z,r.version=r2++)}function m(p,v){let g=0,x=0,b=0,E=0,T=0;const S=v.matrixWorldInverse;for(let _=0,C=p.length;_<C;_++){const N=p[_];if(N.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),g++}else if(N.isSpotLight){const O=r.spot[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),b++}else if(N.isRectAreaLight){const O=r.rectArea[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:r}}function Uv(s){const e=new o2(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function l2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Uv(s),e.set(l,[h])):c>=f.length?(h=new Uv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`;function f2(s,e,i){let r=new R_;const l=new zt,c=new zt,f=new on,h=new OT({depthPacking:RE}),m=new IT,p={},v=i.maxTextureSize,g={[ir]:Xn,[Xn]:ir,[fa]:fa},x=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ar(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o_;let _=this.type;this.render=function(P,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const fe=_!==ua&&this.type===ua,pe=_===ua&&this.type!==ua;for(let ge=0,I=P.length;ge<I;ge++){const F=P[ge],W=F.shadow;if(W===void 0){ct("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ne=W.getFrameExtents();if(l.multiply(ne),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ne.x),l.x=c.x*ne.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ne.y),l.y=c.y*ne.y,W.mapSize.y=c.y)),W.map===null||fe===!0||pe===!0){const U=this.type!==ua?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new Or(l.x,l.y,U),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const $=W.getViewportCount();for(let U=0;U<$;U++){const j=W.getViewport(U);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),J.viewport(f),W.updateMatrices(F,U),r=W.getFrustum(),O(z,Z,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===ua&&C(W,Z),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(L,R,V)};function C(P,z){const Z=e.update(T);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Or(l.x,l.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,x,T,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(z,null,Z,b,T,null)}function N(P,z,Z,L){let R=null;const V=Z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)R=V;else if(R=Z.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=R.uuid,fe=z.uuid;let pe=p[J];pe===void 0&&(pe={},p[J]=pe);let ge=pe[fe];ge===void 0&&(ge=R.clone(),pe[fe]=ge,z.addEventListener("dispose",H)),R=ge}if(R.visible=z.visible,R.wireframe=z.wireframe,L===ua?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:g[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=Z}return R}function O(P,z,Z,L,R){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===ua)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),pe=P.material;if(Array.isArray(pe)){const ge=fe.groups;for(let I=0,F=ge.length;I<F;I++){const W=ge[I],ne=pe[W.materialIndex];if(ne&&ne.visible){const $=N(P,ne,L,R);P.onBeforeShadow(s,P,z,Z,fe,$,W),s.renderBufferDirect(Z,null,fe,$,P,W),P.onAfterShadow(s,P,z,Z,fe,$,W)}}}else if(pe.visible){const ge=N(P,pe,L,R);P.onBeforeShadow(s,P,z,Z,fe,ge,null),s.renderBufferDirect(Z,null,fe,ge,P,null),P.onAfterShadow(s,P,z,Z,fe,ge,null)}}const J=P.children;for(let fe=0,pe=J.length;fe<pe;fe++)O(J[fe],z,Z,L,R)}function H(P){P.target.removeEventListener("dispose",H);for(const Z in p){const L=p[Z],R=P.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const d2={[vh]:_h,[xh]:Mh,[yh]:bh,[Is]:Sh,[_h]:vh,[Mh]:xh,[bh]:yh,[Sh]:Is};function h2(s,e){function i(){let X=!1;const Pe=new on;let De=null;const Le=new on(0,0,0,0);return{setMask:function(we){De!==we&&!X&&(s.colorMask(we,we,we,we),De=we)},setLocked:function(we){X=we},setClear:function(we,Me,Ge,lt,Gt){Gt===!0&&(we*=lt,Me*=lt,Ge*=lt),Pe.set(we,Me,Ge,lt),Le.equals(Pe)===!1&&(s.clearColor(we,Me,Ge,lt),Le.copy(Pe))},reset:function(){X=!1,De=null,Le.set(-1,0,0,0)}}}function r(){let X=!1,Pe=!1,De=null,Le=null,we=null;return{setReversed:function(Me){if(Pe!==Me){const Ge=e.get("EXT_clip_control");Me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const lt=we;we=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(Me){Me?de(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Me){De!==Me&&!X&&(s.depthMask(Me),De=Me)},setFunc:function(Me){if(Pe&&(Me=d2[Me]),Le!==Me){switch(Me){case vh:s.depthFunc(s.NEVER);break;case _h:s.depthFunc(s.ALWAYS);break;case xh:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case yh:s.depthFunc(s.EQUAL);break;case Sh:s.depthFunc(s.GEQUAL);break;case Mh:s.depthFunc(s.GREATER);break;case bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=Me}},setLocked:function(Me){X=Me},setClear:function(Me){we!==Me&&(Pe&&(Me=1-Me),s.clearDepth(Me),we=Me)},reset:function(){X=!1,De=null,Le=null,we=null,Pe=!1}}}function l(){let X=!1,Pe=null,De=null,Le=null,we=null,Me=null,Ge=null,lt=null,Gt=null;return{setTest:function(Ct){X||(Ct?de(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Ct){Pe!==Ct&&!X&&(s.stencilMask(Ct),Pe=Ct)},setFunc:function(Ct,Nn,Yn){(De!==Ct||Le!==Nn||we!==Yn)&&(s.stencilFunc(Ct,Nn,Yn),De=Ct,Le=Nn,we=Yn)},setOp:function(Ct,Nn,Yn){(Me!==Ct||Ge!==Nn||lt!==Yn)&&(s.stencilOp(Ct,Nn,Yn),Me=Ct,Ge=Nn,lt=Yn)},setLocked:function(Ct){X=Ct},setClear:function(Ct){Gt!==Ct&&(s.clearStencil(Ct),Gt=Ct)},reset:function(){X=!1,Pe=null,De=null,Le=null,we=null,Me=null,Ge=null,lt=null,Gt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,b=[],E=null,T=!1,S=null,_=null,C=null,N=null,O=null,H=null,P=null,z=new Pt(0,0,0),Z=0,L=!1,R=null,V=null,J=null,fe=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=F>=2);let ne=null,$={};const U=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ue=new on().fromArray(U),xe=new on().fromArray(j);function be(X,Pe,De,Le){const we=new Uint8Array(4),Me=s.createTexture();s.bindTexture(X,Me),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<De;Ge++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Pe+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Me}const te={};te[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(s.DEPTH_TEST),f.setFunc(Is),qe(!1),ft(Cg),de(s.CULL_FACE),xt(ma);function de(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ce(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Ue(X,Pe){return g[X]!==Pe?(s.bindFramebuffer(X,Pe),g[X]=Pe,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ae(X,Pe){let De=b,Le=!1;if(X){De=x.get(Pe),De===void 0&&(De=[],x.set(Pe,De));const we=X.textures;if(De.length!==we.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ge=we.length;Me<Ge;Me++)De[Me]=s.COLOR_ATTACHMENT0+Me;De.length=we.length,Le=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Le=!0);Le&&s.drawBuffers(De)}function Fe(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const _t={[Dr]:s.FUNC_ADD,[eE]:s.FUNC_SUBTRACT,[tE]:s.FUNC_REVERSE_SUBTRACT};_t[nE]=s.MIN,_t[iE]=s.MAX;const it={[aE]:s.ZERO,[rE]:s.ONE,[sE]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[dE]:s.SRC_ALPHA_SATURATE,[uE]:s.DST_COLOR,[lE]:s.DST_ALPHA,[oE]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[fE]:s.ONE_MINUS_DST_COLOR,[cE]:s.ONE_MINUS_DST_ALPHA,[hE]:s.CONSTANT_COLOR,[pE]:s.ONE_MINUS_CONSTANT_COLOR,[mE]:s.CONSTANT_ALPHA,[gE]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(X,Pe,De,Le,we,Me,Ge,lt,Gt,Ct){if(X===ma){T===!0&&(Ce(s.BLEND),T=!1);return}if(T===!1&&(de(s.BLEND),T=!0),X!==$b){if(X!==S||Ct!==L){if((_!==Dr||O!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,O=Dr),Ct)switch(X){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFunc(s.ONE,s.ONE);break;case Dg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dg:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}C=null,N=null,H=null,P=null,z.set(0,0,0),Z=0,S=X,L=Ct}return}we=we||Pe,Me=Me||De,Ge=Ge||Le,(Pe!==_||we!==O)&&(s.blendEquationSeparate(_t[Pe],_t[we]),_=Pe,O=we),(De!==C||Le!==N||Me!==H||Ge!==P)&&(s.blendFuncSeparate(it[De],it[Le],it[Me],it[Ge]),C=De,N=Le,H=Me,P=Ge),(lt.equals(z)===!1||Gt!==Z)&&(s.blendColor(lt.r,lt.g,lt.b,Gt),z.copy(lt),Z=Gt),S=X,L=!1}function k(X,Pe){X.side===fa?Ce(s.CULL_FACE):de(s.CULL_FACE);let De=X.side===Xn;Pe&&(De=!De),qe(De),X.blending===Us&&X.transparent===!1?xt(ma):xt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Le=X.stencilWrite;h.setTest(Le),Le&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),He(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function ft(X){X!==Kb?(de(s.CULL_FACE),X!==V&&(X===Cg?s.cullFace(s.BACK):X===Qb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),V=X}function Ot(X){X!==J&&(I&&s.lineWidth(X),J=X)}function He(X,Pe,De){X?(de(s.POLYGON_OFFSET_FILL),(fe!==Pe||pe!==De)&&(s.polygonOffset(Pe,De),fe=Pe,pe=De)):Ce(s.POLYGON_OFFSET_FILL)}function Bt(X){X?de(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=s.TEXTURE0+ge-1),ne!==X&&(s.activeTexture(X),ne=X)}function ot(X,Pe,De){De===void 0&&(ne===null?De=s.TEXTURE0+ge-1:De=ne);let Le=$[De];Le===void 0&&(Le={type:void 0,texture:void 0},$[De]=Le),(Le.type!==X||Le.texture!==Pe)&&(ne!==De&&(s.activeTexture(De),ne=De),s.bindTexture(X,Pe||te[X]),Le.type=X,Le.texture=Pe)}function B(){const X=$[ne];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function ye(){try{s.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ie(){try{s.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function et(){try{s.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ye(){try{s.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Te(){try{s.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Re(X){ue.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ue.copy(X))}function Qe(X){xe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),xe.copy(X))}function Xe(X,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let Le=De.get(X);Le===void 0&&(Le=s.getUniformBlockIndex(Pe,X.name),De.set(X,Le))}function Be(X,Pe){const Le=p.get(Pe).get(X);m.get(Pe)!==Le&&(s.uniformBlockBinding(Pe,Le,X.__bindingPointIndex),m.set(Pe,Le))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ne=null,$={},g={},x=new WeakMap,b=[],E=null,T=!1,S=null,_=null,C=null,N=null,O=null,H=null,P=null,z=new Pt(0,0,0),Z=0,L=!1,R=null,V=null,J=null,fe=null,pe=null,ue.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:de,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Fe,setBlending:xt,setMaterial:k,setFlipSided:qe,setCullFace:ft,setLineWidth:Ot,setPolygonOffset:He,setScissorTest:Bt,activeTexture:Ze,bindTexture:ot,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:ae,texImage2D:Ye,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Ie,texStorage3D:et,texSubImage2D:ye,texSubImage3D:Ee,compressedTexSubImage2D:me,compressedTexSubImage3D:Ke,scissor:Re,viewport:Qe,reset:st}}function p2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,v=new WeakMap;let g;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,A){return b?new OffscreenCanvas(B,A):fu("canvas")}function T(B,A,ae){let ye=1;const Ee=ot(B);if((Ee.width>ae||Ee.height>ae)&&(ye=ae/Math.max(Ee.width,Ee.height)),ye<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const me=Math.floor(ye*Ee.width),Ke=Math.floor(ye*Ee.height);g===void 0&&(g=E(me,Ke));const Ie=A?E(me,Ke):g;return Ie.width=me,Ie.height=Ke,Ie.getContext("2d").drawImage(B,0,0,me,Ke),ct("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+me+"x"+Ke+")."),Ie}else return"data"in B&&ct("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),B;return B}function S(B){return B.generateMipmaps}function _(B){s.generateMipmap(B)}function C(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(B,A,ae,ye,Ee=!1){if(B!==null){if(s[B]!==void 0)return s[B];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let me=A;if(A===s.RED&&(ae===s.FLOAT&&(me=s.R32F),ae===s.HALF_FLOAT&&(me=s.R16F),ae===s.UNSIGNED_BYTE&&(me=s.R8)),A===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.R8UI),ae===s.UNSIGNED_SHORT&&(me=s.R16UI),ae===s.UNSIGNED_INT&&(me=s.R32UI),ae===s.BYTE&&(me=s.R8I),ae===s.SHORT&&(me=s.R16I),ae===s.INT&&(me=s.R32I)),A===s.RG&&(ae===s.FLOAT&&(me=s.RG32F),ae===s.HALF_FLOAT&&(me=s.RG16F),ae===s.UNSIGNED_BYTE&&(me=s.RG8)),A===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RG8UI),ae===s.UNSIGNED_SHORT&&(me=s.RG16UI),ae===s.UNSIGNED_INT&&(me=s.RG32UI),ae===s.BYTE&&(me=s.RG8I),ae===s.SHORT&&(me=s.RG16I),ae===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ae===s.UNSIGNED_INT&&(me=s.RGB32UI),ae===s.BYTE&&(me=s.RGB8I),ae===s.SHORT&&(me=s.RGB16I),ae===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ae===s.UNSIGNED_INT&&(me=s.RGBA32UI),ae===s.BYTE&&(me=s.RGBA8I),ae===s.SHORT&&(me=s.RGBA16I),ae===s.INT&&(me=s.RGBA32I)),A===s.RGB&&(ae===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),A===s.RGBA){const Ke=Ee?cu:Ut.getTransfer(ye);ae===s.FLOAT&&(me=s.RGBA32F),ae===s.HALF_FLOAT&&(me=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(me=Ke===Wt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(B,A){let ae;return B?A===null||A===Pr||A===el?ae=s.DEPTH24_STENCIL8:A===ha?ae=s.DEPTH32F_STENCIL8:A===$o&&(ae=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pr||A===el?ae=s.DEPTH_COMPONENT24:A===ha?ae=s.DEPTH_COMPONENT32F:A===$o&&(ae=s.DEPTH_COMPONENT16),ae}function H(B,A){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==ri&&B.minFilter!==_i?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function P(B){const A=B.target;A.removeEventListener("dispose",P),Z(A),A.isVideoTexture&&v.delete(A)}function z(B){const A=B.target;A.removeEventListener("dispose",z),R(A)}function Z(B){const A=r.get(B);if(A.__webglInit===void 0)return;const ae=B.source,ye=x.get(ae);if(ye){const Ee=ye[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&L(B),Object.keys(ye).length===0&&x.delete(ae)}r.remove(B)}function L(B){const A=r.get(B);s.deleteTexture(A.__webglTexture);const ae=B.source,ye=x.get(ae);delete ye[A.__cacheKey],f.memory.textures--}function R(B){const A=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Ee=0;Ee<A.__webglFramebuffer[ye].length;Ee++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Ee]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ae=B.textures;for(let ye=0,Ee=ae.length;ye<Ee;ye++){const me=r.get(ae[ye]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(ae[ye])}r.remove(B)}let V=0;function J(){V=0}function fe(){const B=V;return B>=l.maxTextures&&ct("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),V+=1,B}function pe(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function ge(B,A){const ae=r.get(B);if(B.isVideoTexture&&Bt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ae.__version!==B.version){const ye=B.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{te(ae,B,A);return}}else B.isExternalTexture&&(ae.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+A)}function I(B,A){const ae=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ae.__version!==B.version){te(ae,B,A);return}else B.isExternalTexture&&(ae.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+A)}function F(B,A){const ae=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ae.__version!==B.version){te(ae,B,A);return}i.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+A)}function W(B,A){const ae=r.get(B);if(B.version>0&&ae.__version!==B.version){de(ae,B,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+A)}const ne={[Ah]:s.REPEAT,[da]:s.CLAMP_TO_EDGE,[wh]:s.MIRRORED_REPEAT},$={[ri]:s.NEAREST,[AE]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Od]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},U={[DE]:s.NEVER,[zE]:s.ALWAYS,[LE]:s.LESS,[v_]:s.LEQUAL,[UE]:s.EQUAL,[IE]:s.GEQUAL,[PE]:s.GREATER,[OE]:s.NOTEQUAL};function j(B,A){if(A.type===ha&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===_i||A.magFilter===Od||A.magFilter===bc||A.magFilter===Ur||A.minFilter===_i||A.minFilter===Od||A.minFilter===bc||A.minFilter===Ur)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ne[A.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ne[A.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ne[A.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,$[A.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,$[A.minFilter]),A.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==bc&&A.minFilter!==Ur||A.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ue(B,A){let ae=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",P));const ye=A.source;let Ee=x.get(ye);Ee===void 0&&(Ee={},x.set(ye,Ee));const me=pe(A);if(me!==B.__cacheKey){Ee[me]===void 0&&(Ee[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),Ee[me].usedTimes++;const Ke=Ee[B.__cacheKey];Ke!==void 0&&(Ee[B.__cacheKey].usedTimes--,Ke.usedTimes===0&&L(A)),B.__cacheKey=me,B.__webglTexture=Ee[me].texture}return ae}function xe(B,A,ae){return Math.floor(Math.floor(B/ae)/A)}function be(B,A,ae,ye){const me=B.updateRanges;if(me.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ae,ye,A.data);else{me.sort((Te,Re)=>Te.start-Re.start);let Ke=0;for(let Te=1;Te<me.length;Te++){const Re=me[Ke],Qe=me[Te],Xe=Re.start+Re.count,Be=xe(Qe.start,A.width,4),st=xe(Re.start,A.width,4);Qe.start<=Xe+1&&Be===st&&xe(Qe.start+Qe.count-1,A.width,4)===Be?Re.count=Math.max(Re.count,Qe.start+Qe.count-Re.start):(++Ke,me[Ke]=Qe)}me.length=Ke+1;const Ie=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Te=0,Re=me.length;Te<Re;Te++){const Qe=me[Te],Xe=Math.floor(Qe.start/4),Be=Math.ceil(Qe.count/4),st=Xe%A.width,X=Math.floor(Xe/A.width),Pe=Be,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,st,X,Pe,De,ae,ye,A.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function te(B,A,ae){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const Ee=ue(B,A),me=A.source;i.bindTexture(ye,B.__webglTexture,s.TEXTURE0+ae);const Ke=r.get(me);if(me.version!==Ke.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ae);const Ie=Ut.getPrimaries(Ut.workingColorSpace),et=A.colorSpace===er?null:Ut.getPrimaries(A.colorSpace),Ye=A.colorSpace===er||Ie===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Te=T(A.image,!1,l.maxTextureSize);Te=Ze(A,Te);const Re=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Xe=N(A.internalFormat,Re,Qe,A.colorSpace,A.isVideoTexture);j(ye,A);let Be;const st=A.mipmaps,X=A.isVideoTexture!==!0,Pe=Ke.__version===void 0||Ee===!0,De=me.dataReady,Le=H(A,Te);if(A.isDepthTexture)Xe=O(A.format===nl,A.type),Pe&&(X?i.texStorage2D(s.TEXTURE_2D,1,Xe,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,null));else if(A.isDataTexture)if(st.length>0){X&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,Me=st.length;we<Me;we++)Be=st[we],X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data);A.generateMipmaps=!1}else X?(Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height),De&&be(A,Te,Re,Qe)):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){X&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,st[0].width,st[0].height,Te.depth);for(let we=0,Me=st.length;we<Me;we++)if(Be=st[we],A.format!==wi)if(Re!==null)if(X){if(De)if(A.layerUpdates.size>0){const Ge=uv(Be.width,Be.height,A.format,A.type);for(const lt of A.layerUpdates){const Gt=Be.data.subarray(lt*Ge/Be.data.BYTES_PER_ELEMENT,(lt+1)*Ge/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,lt,Be.width,Be.height,1,Re,Gt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Qe,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Re,Qe,Be.data)}else{X&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,Me=st.length;we<Me;we++)Be=st[we],A.format!==wi?Re!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data)}else if(A.isDataArrayTexture)if(X){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,Te.width,Te.height,Te.depth),De)if(A.layerUpdates.size>0){const we=uv(Te.width,Te.height,A.format,A.type);for(const Me of A.layerUpdates){const Ge=Te.data.subarray(Me*we/Te.data.BYTES_PER_ELEMENT,(Me+1)*we/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Te.width,Te.height,1,Re,Qe,Ge)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isData3DTexture)X?(Pe&&i.texStorage3D(s.TEXTURE_3D,Le,Xe,Te.width,Te.height,Te.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isFramebufferTexture){if(Pe)if(X)i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height);else{let we=Te.width,Me=Te.height;for(let Ge=0;Ge<Le;Ge++)i.texImage2D(s.TEXTURE_2D,Ge,Xe,we,Me,0,Re,Qe,null),we>>=1,Me>>=1}}else if(st.length>0){if(X&&Pe){const we=ot(st[0]);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}for(let we=0,Me=st.length;we<Me;we++)Be=st[we],X?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Re,Qe,Be):i.texImage2D(s.TEXTURE_2D,we,Xe,Re,Qe,Be);A.generateMipmaps=!1}else if(X){if(Pe){const we=ot(Te);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Qe,Te)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Re,Qe,Te);S(A)&&_(ye),Ke.__version=me.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function de(B,A,ae){if(A.image.length!==6)return;const ye=ue(B,A),Ee=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+ae);const me=r.get(Ee);if(Ee.version!==me.__version||ye===!0){i.activeTexture(s.TEXTURE0+ae);const Ke=Ut.getPrimaries(Ut.workingColorSpace),Ie=A.colorSpace===er?null:Ut.getPrimaries(A.colorSpace),et=A.colorSpace===er||Ke===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Me=0;Me<6;Me++)!Ye&&!Te?Re[Me]=T(A.image[Me],!0,l.maxCubemapSize):Re[Me]=Te?A.image[Me].image:A.image[Me],Re[Me]=Ze(A,Re[Me]);const Qe=Re[0],Xe=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),st=N(A.internalFormat,Xe,Be,A.colorSpace),X=A.isVideoTexture!==!0,Pe=me.__version===void 0||ye===!0,De=Ee.dataReady;let Le=H(A,Qe);j(s.TEXTURE_CUBE_MAP,A);let we;if(Ye){X&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,Qe.width,Qe.height);for(let Me=0;Me<6;Me++){we=Re[Me].mipmaps;for(let Ge=0;Ge<we.length;Ge++){const lt=we[Ge];A.format!==wi?Xe!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge,0,0,lt.width,lt.height,Xe,lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge,st,lt.width,lt.height,0,lt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge,0,0,lt.width,lt.height,Xe,Be,lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge,st,lt.width,lt.height,0,Xe,Be,lt.data)}}}else{if(we=A.mipmaps,X&&Pe){we.length>0&&Le++;const Me=ot(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Te){X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Re[Me].width,Re[Me].height,Xe,Be,Re[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Re[Me].width,Re[Me].height,0,Xe,Be,Re[Me].data);for(let Ge=0;Ge<we.length;Ge++){const Gt=we[Ge].image[Me].image;X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge+1,0,0,Gt.width,Gt.height,Xe,Be,Gt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge+1,st,Gt.width,Gt.height,0,Xe,Be,Gt.data)}}else{X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Xe,Be,Re[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Xe,Be,Re[Me]);for(let Ge=0;Ge<we.length;Ge++){const lt=we[Ge];X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge+1,0,0,Xe,Be,lt.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ge+1,st,Xe,Be,lt.image[Me])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),me.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Ce(B,A,ae,ye,Ee,me){const Ke=c.convert(ae.format,ae.colorSpace),Ie=c.convert(ae.type),et=N(ae.internalFormat,Ke,Ie,ae.colorSpace),Ye=r.get(A),Te=r.get(ae);if(Te.__renderTarget=A,!Ye.__hasExternalTextures){const Re=Math.max(1,A.width>>me),Qe=Math.max(1,A.height>>me);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,me,et,Re,Qe,A.depth,0,Ke,Ie,null):i.texImage2D(Ee,me,et,Re,Qe,0,Ke,Ie,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,0,Ot(A)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,me),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(B,A,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,B),A.depthBuffer){const ye=A.depthTexture,Ee=ye&&ye.isDepthTexture?ye.type:null,me=O(A.stencilBuffer,Ee),Ke=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Ot(A);He(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,me,A.width,A.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,B)}else{const ye=A.textures;for(let Ee=0;Ee<ye.length;Ee++){const me=ye[Ee],Ke=c.convert(me.format,me.colorSpace),Ie=c.convert(me.type),et=N(me.internalFormat,Ke,Ie,me.colorSpace),Ye=Ot(A);ae&&He(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,et,A.width,A.height):He(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,et,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,et,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(A.depthTexture);ye.__renderTarget=A,(!ye.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);const Ee=ye.__webglTexture,me=Ot(A);if(A.depthTexture.format===tl)He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===nl)He(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Fe(B){const A=r.get(B),ae=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const ye=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",Ee)};ye.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=ye}if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");const ye=B.texture.mipmaps;ye&&ye.length>0?Ae(A.__webglFramebuffer[0],B):Ae(A.__webglFramebuffer,B)}else if(ae){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[ye],B,!1);else{const Ee=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}else{const ye=B.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,B,!1);else{const Ee=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(B,A,ae){const ye=r.get(B);A!==void 0&&Ce(ye.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Fe(B)}function it(B){const A=B.texture,ae=r.get(B),ye=r.get(A);B.addEventListener("dispose",z);const Ee=B.textures,me=B.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,f.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer[Ie]=[];for(let et=0;et<A.mipmaps.length;et++)ae.__webglFramebuffer[Ie][et]=s.createFramebuffer()}else ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=r.get(Ee[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&He(B)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const et=Ee[Ie];ae.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const Ye=c.convert(et.format,et.colorSpace),Te=c.convert(et.type),Re=N(et.internalFormat,Ye,Te,et.colorSpace,B.isXRRenderTarget===!0),Qe=Ot(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Re,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(ae.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),j(s.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[Ie][et],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,et);else Ce(ae.__webglFramebuffer[Ie],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=Ee[Ie],Te=r.get(Ye);let Re=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Re=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),j(Re,Ye),Ce(ae.__webglFramebuffer,B,Ye,s.COLOR_ATTACHMENT0+Ie,Re,0),S(Ye)&&_(Re)}i.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ie=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ie,ye.__webglTexture),j(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[et],B,A,s.COLOR_ATTACHMENT0,Ie,et);else Ce(ae.__webglFramebuffer,B,A,s.COLOR_ATTACHMENT0,Ie,0);S(A)&&_(Ie),i.unbindTexture()}B.depthBuffer&&Fe(B)}function xt(B){const A=B.textures;for(let ae=0,ye=A.length;ae<ye;ae++){const Ee=A[ae];if(S(Ee)){const me=C(B),Ke=r.get(Ee).__webglTexture;i.bindTexture(me,Ke),_(me),i.unbindTexture()}}}const k=[],qe=[];function ft(B){if(B.samples>0){if(He(B)===!1){const A=B.textures,ae=B.width,ye=B.height;let Ee=s.COLOR_BUFFER_BIT;const me=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(B),Ie=A.length>1;if(Ie)for(let Ye=0;Ye<A.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const et=B.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,ae,ye,0,0,ae,ye,Ee,s.NEAREST),m===!0&&(k.length=0,qe.length=0,k.push(s.COLOR_ATTACHMENT0+Ye),B.depthBuffer&&B.resolveDepthBuffer===!1&&(k.push(me),qe.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<A.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const A=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ot(B){return Math.min(l.maxSamples,B.samples)}function He(B){const A=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(B){const A=f.render.frame;v.get(B)!==A&&(v.set(B,A),B.update())}function Ze(B,A){const ae=B.colorSpace,ye=B.format,Ee=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ae!==Fs&&ae!==er&&(Ut.getTransfer(ae)===Wt?(ye!==wi||Ee!==_a)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",ae)),A}function ot(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=J,this.setTexture2D=ge,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=_t,this.setupRenderTarget=it,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He}function m2(s,e){function i(r,l=er){let c;const f=Ut.getTransfer(l);if(r===_a)return s.UNSIGNED_BYTE;if(r===pp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===d_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===h_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===u_)return s.BYTE;if(r===f_)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===hp)return s.INT;if(r===Pr)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===Gs)return s.HALF_FLOAT;if(r===p_)return s.ALPHA;if(r===m_)return s.RGB;if(r===wi)return s.RGBA;if(r===tl)return s.DEPTH_COMPONENT;if(r===nl)return s.DEPTH_STENCIL;if(r===g_)return s.RED;if(r===gp)return s.RED_INTEGER;if(r===vp)return s.RG;if(r===_p)return s.RG_INTEGER;if(r===xp)return s.RGBA_INTEGER;if(r===nu||r===iu||r===au||r===ru)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===Nh||r===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Uh||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Uh)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ph)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Ih||r===zh||r===Bh||r===Fh||r===Hh||r===kh||r===Gh||r===Vh||r===jh||r===Xh||r===Wh||r===qh||r===Yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Oh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zh||r===Kh||r===Qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Zh)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jh||r===$h||r===ep||r===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new D_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ya({vertexShader:g2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ar(new vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends Vs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,b=null,E=null;const T=typeof XRWebGLBinding<"u",S=new _2,_={},C=i.getContextAttributes();let N=null,O=null;const H=[],P=[],z=new zt;let Z=null;const L=new gi;L.viewport=new on;const R=new gi;R.viewport=new on;const V=[L,R],J=new BT;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=H[te];return de===void 0&&(de=new nh,H[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=H[te];return de===void 0&&(de=new nh,H[te]=de),de.getGripSpace()},this.getHand=function(te){let de=H[te];return de===void 0&&(de=new nh,H[te]=de),de.getHandSpace()};function ge(te){const de=P.indexOf(te.inputSource);if(de===-1)return;const Ce=H[de];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,p||f),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",F);for(let te=0;te<H.length;te++){const de=P[te];de!==null&&(P[te]=null,H[te].disconnect(de))}fe=null,pe=null,S.reset();for(const te in _)delete _[te];e.setRenderTarget(N),b=null,x=null,g=null,l=null,O=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",I),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ue=null,Ae=null;C.depth&&(Ae=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=C.stencil?nl:tl,Ue=C.stencil?el:Pr);const Fe={colorFormat:i.RGBA8,depthFormat:Ae,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Fe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Or(x.textureWidth,x.textureHeight,{format:wi,type:_a,depthTexture:new N_(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ce={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Or(b.framebufferWidth,b.framebufferHeight,{format:wi,type:_a,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),be.setContext(l),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(te){for(let de=0;de<te.removed.length;de++){const Ce=te.removed[de],Ue=P.indexOf(Ce);Ue>=0&&(P[Ue]=null,H[Ue].disconnect(Ce))}for(let de=0;de<te.added.length;de++){const Ce=te.added[de];let Ue=P.indexOf(Ce);if(Ue===-1){for(let Fe=0;Fe<H.length;Fe++)if(Fe>=P.length){P.push(Ce),Ue=Fe;break}else if(P[Fe]===null){P[Fe]=Ce,Ue=Fe;break}if(Ue===-1)break}const Ae=H[Ue];Ae&&Ae.connect(Ce)}}const W=new le,ne=new le;function $(te,de,Ce){W.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(Ce.matrixWorld);const Ue=W.distanceTo(ne),Ae=de.projectionMatrix.elements,Fe=Ce.projectionMatrix.elements,_t=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),xt=(Ae[9]+1)/Ae[5],k=(Ae[9]-1)/Ae[5],qe=(Ae[8]-1)/Ae[0],ft=(Fe[8]+1)/Fe[0],Ot=_t*qe,He=_t*ft,Bt=Ue/(-qe+ft),Ze=Bt*-qe;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(Bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ot=_t+Bt,B=it+Bt,A=Ot-Ze,ae=He+(Ue-Ze),ye=xt*it/B*ot,Ee=k*it/B*ot;te.projectionMatrix.makePerspective(A,ae,ye,Ee,ot,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,Ce=te.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),J.near=R.near=L.near=de,J.far=R.far=L.far=Ce,(fe!==J.near||pe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),fe=J.near,pe=J.far),J.layers.mask=te.layers.mask|6,L.layers.mask=J.layers.mask&3,R.layers.mask=J.layers.mask&5;const Ue=te.parent,Ae=J.cameras;U(J,Ue);for(let Fe=0;Fe<Ae.length;Fe++)U(Ae[Fe],Ue);Ae.length===2?$(J,L,R):J.projectionMatrix.copy(L.projectionMatrix),j(te,J,Ue)};function j(te,de,Ce){Ce===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=al*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(te){m=te,x!==null&&(x.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(te){return _[te]};let ue=null;function xe(te,de){if(v=de.getViewerPose(p||f),E=de,v!==null){const Ce=v.views;b!==null&&(e.setRenderTargetFramebuffer(O,b.framebuffer),e.setRenderTarget(O));let Ue=!1;Ce.length!==J.cameras.length&&(J.cameras.length=0,Ue=!0);for(let it=0;it<Ce.length;it++){const xt=Ce[it];let k=null;if(b!==null)k=b.getViewport(xt);else{const ft=g.getViewSubImage(x,xt);k=ft.viewport,it===0&&(e.setRenderTargetTextures(O,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(O))}let qe=V[it];qe===void 0&&(qe=new gi,qe.layers.enable(it),qe.viewport=new on,V[it]=qe),qe.matrix.fromArray(xt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(xt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(k.x,k.y,k.width,k.height),it===0&&(J.matrix.copy(qe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ue===!0&&J.cameras.push(qe)}const Ae=l.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const it=g.getDepthInformation(Ce[0]);it&&it.isValid&&it.texture&&S.init(it,l.renderState)}if(Ae&&Ae.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<Ce.length;it++){const xt=Ce[it].camera;if(xt){let k=_[xt];k||(k=new D_,_[xt]=k);const qe=g.getCameraImage(xt);k.sourceTexture=qe}}}}for(let Ce=0;Ce<H.length;Ce++){const Ue=P[Ce],Ae=H[Ce];Ue!==null&&Ae!==void 0&&Ae.update(Ue,de,p||f)}ue&&ue(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const be=new L_;be.setAnimationLoop(xe),this.setAnimationLoop=function(te){ue=te},this.dispose=function(){}}}const Rr=new xa,y2=new ln;function S2(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,T_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,C,N,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&b(S,_,O)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,C,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const C=e.get(_),N=C.envMap,O=C.envMapRotation;N&&(S.envMap.value=N,Rr.copy(O),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),S.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(Rr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,C,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*C,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,C){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const C=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function M2(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const O=N.program;r.uniformBlockBinding(C,O)}function p(C,N){let O=l[C.id];O===void 0&&(E(C),O=v(C),l[C.id]=O,C.addEventListener("dispose",S));const H=N.program;r.updateUBOMapping(C,H);const P=e.render.frame;c[C.id]!==P&&(x(C),c[C.id]=P)}function v(C){const N=g();C.__bindingPointIndex=N;const O=s.createBuffer(),H=C.__size,P=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,H,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function g(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const N=l[C.id],O=C.uniforms,H=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,z=O.length;P<z;P++){const Z=Array.isArray(O[P])?O[P]:[O[P]];for(let L=0,R=Z.length;L<R;L++){const V=Z[L];if(b(V,P,L,H)===!0){const J=V.__offset,fe=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let ge=0;ge<fe.length;ge++){const I=fe[ge],F=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,J+pe,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,pe),pe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(C,N,O,H){const P=C.value,z=N+"_"+O;if(H[z]===void 0)return typeof P=="number"||typeof P=="boolean"?H[z]=P:H[z]=P.clone(),!0;{const Z=H[z];if(typeof P=="number"||typeof P=="boolean"){if(Z!==P)return H[z]=P,!0}else if(Z.equals(P)===!1)return Z.copy(P),!0}return!1}function E(C){const N=C.uniforms;let O=0;const H=16;for(let z=0,Z=N.length;z<Z;z++){const L=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,V=L.length;R<V;R++){const J=L[R],fe=Array.isArray(J.value)?J.value:[J.value];for(let pe=0,ge=fe.length;pe<ge;pe++){const I=fe[pe],F=T(I),W=O%H,ne=W%F.boundary,$=W+ne;O+=ne,$!==0&&H-$<F.storage&&(O+=H-$),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=F.storage}}}const P=O%H;return P>0&&(O+=H-P),C.__size=O,C.__cache={},this}function T(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",C),N}function S(C){const N=C.target;N.removeEventListener("dispose",S);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const b2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function E2(){return la===null&&(la=new wT(b2,32,32,vp,Gs),la.minFilter=_i,la.magFilter=_i,la.wrapS=da,la.wrapT=da,la.generateMipmaps=!1,la.needsUpdate=!0),la}class T2{constructor(e={}){const{canvas:i=BE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const E=new Set([xp,_p,gp]),T=new Set([_a,Pr,$o,el,pp,mp]),S=new Uint32Array(4),_=new Int32Array(4);let C=null,N=null;const O=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1;this._outputColorSpace=mi;let Z=0,L=0,R=null,V=-1,J=null;const fe=new on,pe=new on;let ge=null;const I=new Pt(0);let F=0,W=i.width,ne=i.height,$=1,U=null,j=null;const ue=new on(0,0,W,ne),xe=new on(0,0,W,ne);let be=!1;const te=new R_;let de=!1,Ce=!1;const Ue=new ln,Ae=new le,Fe=new on,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function xt(){return R===null?$:1}let k=r;function qe(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dp}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",Me,!1),i.addEventListener("webglcontextcreationerror",Ge,!1),k===null){const K="webgl2";if(k=qe(K,D),k===null)throw qe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let ft,Ot,He,Bt,Ze,ot,B,A,ae,ye,Ee,me,Ke,Ie,et,Ye,Te,Re,Qe,Xe,Be,st,X,Pe;function De(){ft=new Uw(k),ft.init(),st=new m2(k,ft),Ot=new Ew(k,ft,e,st),He=new h2(k,ft),Ot.reversedDepthBuffer&&x&&He.buffers.depth.setReversed(!0),Bt=new Iw(k),Ze=new e2,ot=new p2(k,ft,He,Ze,Ot,st,Bt),B=new Aw(P),A=new Lw(P),ae=new HT(k),X=new Mw(k,ae),ye=new Pw(k,ae,Bt,X),Ee=new Bw(k,ye,ae,Bt),Qe=new zw(k,Ot,ot),Ye=new Tw(Ze),me=new $4(P,B,A,ft,Ot,X,Ye),Ke=new S2(P,Ze),Ie=new n2,et=new l2(ft),Re=new Sw(P,B,A,He,Ee,b,m),Te=new f2(P,Ee,Ot),Pe=new M2(k,Bt,Ot,He),Xe=new bw(k,ft,Bt),Be=new Ow(k,ft,Bt),Bt.programs=me.programs,P.capabilities=Ot,P.extensions=ft,P.properties=Ze,P.renderLists=Ie,P.shadowMap=Te,P.state=He,P.info=Bt}De();const Le=new x2(P,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=ft.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ft.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(D){D!==void 0&&($=D,this.setSize(W,ne,!1))},this.getSize=function(D){return D.set(W,ne)},this.setSize=function(D,K,ce=!0){if(Le.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,ne=K,i.width=Math.floor(D*$),i.height=Math.floor(K*$),ce===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(W*$,ne*$).floor()},this.setDrawingBufferSize=function(D,K,ce){W=D,ne=K,$=ce,i.width=Math.floor(D*ce),i.height=Math.floor(K*ce),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(fe)},this.getViewport=function(D){return D.copy(ue)},this.setViewport=function(D,K,ce,se){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,K,ce,se),He.viewport(fe.copy(ue).multiplyScalar($).round())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,K,ce,se){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,K,ce,se),He.scissor(pe.copy(xe).multiplyScalar($).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){He.setScissorTest(be=D)},this.setOpaqueSort=function(D){U=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ce=!0){let se=0;if(D){let ee=!1;if(R!==null){const Ne=R.texture.format;ee=E.has(Ne)}if(ee){const Ne=R.texture.type,Oe=T.has(Ne),ke=Re.getClearColor(),Ve=Re.getClearAlpha(),nt=ke.r,rt=ke.g,Je=ke.b;Oe?(S[0]=nt,S[1]=rt,S[2]=Je,S[3]=Ve,k.clearBufferuiv(k.COLOR,0,S)):(_[0]=nt,_[1]=rt,_[2]=Je,_[3]=Ve,k.clearBufferiv(k.COLOR,0,_))}else se|=k.COLOR_BUFFER_BIT}K&&(se|=k.DEPTH_BUFFER_BIT),ce&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",Me,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),Re.dispose(),Ie.dispose(),et.dispose(),Ze.dispose(),B.dispose(),A.dispose(),Ee.dispose(),X.dispose(),Pe.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ys),Le.removeEventListener("sessionend",Zs),yi.stop()};function we(D){D.preventDefault(),zg("WebGLRenderer: Context Lost."),z=!0}function Me(){zg("WebGLRenderer: Context Restored."),z=!1;const D=Bt.autoReset,K=Te.enabled,ce=Te.autoUpdate,se=Te.needsUpdate,ee=Te.type;De(),Bt.autoReset=D,Te.enabled=K,Te.autoUpdate=ce,Te.needsUpdate=se,Te.type=ee}function Ge(D){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const K=D.target;K.removeEventListener("dispose",lt),Gt(K)}function Gt(D){Ct(D),Ze.remove(D)}function Ct(D){const K=Ze.get(D).programs;K!==void 0&&(K.forEach(function(ce){me.releaseProgram(ce)}),D.isShaderMaterial&&me.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ce,se,ee,Ne){K===null&&(K=_t);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,ke=yu(D,K,ce,se,ee);He.setMaterial(se,Oe);let Ve=ce.index,nt=1;if(se.wireframe===!0){if(Ve=ye.getWireframeAttribute(ce),Ve===void 0)return;nt=2}const rt=ce.drawRange,Je=ce.attributes.position;let ht=rt.start*nt,Rt=(rt.start+rt.count)*nt;Ne!==null&&(ht=Math.max(ht,Ne.start*nt),Rt=Math.min(Rt,(Ne.start+Ne.count)*nt)),Ve!==null?(ht=Math.max(ht,0),Rt=Math.min(Rt,Ve.count)):Je!=null&&(ht=Math.max(ht,0),Rt=Math.min(Rt,Je.count));const Nt=Rt-ht;if(Nt<0||Nt===1/0)return;X.setup(ee,se,ke,ce,Ve);let Tt,Ft=Xe;if(Ve!==null&&(Tt=ae.get(Ve),Ft=Be,Ft.setIndex(Tt)),ee.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*xt()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(ee.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),He.setLineWidth(tt*xt()),ee.isLineSegments?Ft.setMode(k.LINES):ee.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else ee.isPoints?Ft.setMode(k.POINTS):ee.isSprite&&Ft.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,qt=ee._multiDrawCounts,At=ee._multiDrawCount,yn=Ve?ae.get(Ve).bytesPerElement:1,ba=Ze.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<At;Zt++)ba.setValue(k,"_gl_DrawID",Zt),Ft.render(tt[Zt]/yn,qt[Zt])}else if(ee.isInstancedMesh)Ft.renderInstances(ht,Nt,ee.count);else if(ce.isInstancedBufferGeometry){const tt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qt=Math.min(ce.instanceCount,tt);Ft.renderInstances(ht,Nt,qt)}else Ft.render(ht,Nt)};function Nn(D,K,ce){D.transparent===!0&&D.side===fa&&D.forceSinglePass===!1?(D.side=Xn,D.needsUpdate=!0,mn(D,K,ce),D.side=ir,D.needsUpdate=!0,mn(D,K,ce),D.side=fa):mn(D,K,ce)}this.compile=function(D,K,ce=null){ce===null&&(ce=D),N=et.get(ce),N.init(K),H.push(N),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),D!==ce&&D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const se=new Set;return D.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const ke=Ne[Oe];Nn(ke,ce,ee),se.add(ke)}else Nn(Ne,ce,ee),se.add(Ne)}),N=H.pop(),se},this.compileAsync=function(D,K,ce=null){const se=this.compile(D,K,ce);return new Promise(ee=>{function Ne(){if(se.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){ee(D);return}setTimeout(Ne,10)}ft.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Yn=null;function fl(D){Yn&&Yn(D)}function Ys(){yi.stop()}function Zs(){yi.start()}const yi=new L_;yi.setAnimationLoop(fl),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(D){Yn=D,Le.setAnimationLoop(D),D===null?yi.stop():yi.start()},Le.addEventListener("sessionstart",Ys),Le.addEventListener("sessionend",Zs),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(K),K=Le.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,K,R),N=et.get(D,H.length),N.init(K),H.push(N),Ue.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),te.setFromProjectionMatrix(Ue,Ii,K.reversedDepth),Ce=this.localClippingEnabled,de=Ye.init(this.clippingPlanes,Ce),C=Ie.get(D,O.length),C.init(),O.push(C),Le.enabled===!0&&Le.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&rr(Ne,K,-1/0,P.sortObjects)}rr(D,K,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(U,j),it=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,it&&Re.addToRenderList(C,D),this.info.render.frame++,de===!0&&Ye.beginShadows();const ce=N.state.shadowsArray;Te.render(ce,D,K),de===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=C.opaque,ee=C.transmissive;if(N.setupLights(),K.isArrayCamera){const Ne=K.cameras;if(ee.length>0)for(let Oe=0,ke=Ne.length;Oe<ke;Oe++){const Ve=Ne[Oe];Qs(se,ee,D,Ve)}it&&Re.render(D);for(let Oe=0,ke=Ne.length;Oe<ke;Oe++){const Ve=Ne[Oe];Ks(C,D,Ve,Ve.viewport)}}else ee.length>0&&Qs(se,ee,D,K),it&&Re.render(D),Ks(C,D,K);R!==null&&L===0&&(ot.updateMultisampleRenderTarget(R),ot.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(P,D,K),X.resetDefaultState(),V=-1,J=null,H.pop(),H.length>0?(N=H[H.length-1],de===!0&&Ye.setGlobalState(P.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?C=O[O.length-1]:C=null};function rr(D,K,ce,se){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||te.intersectsSprite(D)){se&&Fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ue);const Oe=Ee.update(D),ke=D.material;ke.visible&&C.push(D,Oe,ke,ce,Fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||te.intersectsObject(D))){const Oe=Ee.update(D),ke=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Fe.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Fe.copy(Oe.boundingSphere.center)),Fe.applyMatrix4(D.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){const Ve=Oe.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const Je=Ve[nt],ht=ke[Je.materialIndex];ht&&ht.visible&&C.push(D,Oe,ht,ce,Fe.z,Je)}}else ke.visible&&C.push(D,Oe,ke,ce,Fe.z,null)}}const Ne=D.children;for(let Oe=0,ke=Ne.length;Oe<ke;Oe++)rr(Ne[Oe],K,ce,se)}function Ks(D,K,ce,se){const{opaque:ee,transmissive:Ne,transparent:Oe}=D;N.setupLightsView(ce),de===!0&&Ye.setGlobalState(P.clippingPlanes,ce),se&&He.viewport(fe.copy(se)),ee.length>0&&Zn(ee,K,ce),Ne.length>0&&Zn(Ne,K,ce),Oe.length>0&&Zn(Oe,K,ce),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Qs(D,K,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[se.id]===void 0&&(N.state.transmissionRenderTarget[se.id]=new Or(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Gs:_a,minFilter:Ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ne=N.state.transmissionRenderTarget[se.id],Oe=se.viewport||fe;Ne.setSize(Oe.z*P.transmissionResolutionScale,Oe.w*P.transmissionResolutionScale);const ke=P.getRenderTarget(),Ve=P.getActiveCubeFace(),nt=P.getActiveMipmapLevel();P.setRenderTarget(Ne),P.getClearColor(I),F=P.getClearAlpha(),F<1&&P.setClearColor(16777215,.5),P.clear(),it&&Re.render(ce);const rt=P.toneMapping;P.toneMapping=nr;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),de===!0&&Ye.setGlobalState(P.clippingPlanes,se),Zn(D,ce,se),ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Rt=0,Nt=K.length;Rt<Nt;Rt++){const Tt=K[Rt],{object:Ft,geometry:tt,material:qt,group:At}=Tt;if(qt.side===fa&&Ft.layers.test(se.layers)){const yn=qt.side;qt.side=Xn,qt.needsUpdate=!0,cn(Ft,ce,se,tt,qt,At),qt.side=yn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne))}P.setRenderTarget(ke,Ve,nt),P.setClearColor(I,F),Je!==void 0&&(se.viewport=Je),P.toneMapping=rt}function Zn(D,K,ce){const se=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Ne=D.length;ee<Ne;ee++){const Oe=D[ee],{object:ke,geometry:Ve,group:nt}=Oe;let rt=Oe.material;rt.allowOverride===!0&&se!==null&&(rt=se),ke.layers.test(ce.layers)&&cn(ke,K,ce,Ve,rt,nt)}}function cn(D,K,ce,se,ee,Ne){D.onBeforeRender(P,K,ce,se,ee,Ne),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(P,K,ce,se,D,Ne),ee.transparent===!0&&ee.side===fa&&ee.forceSinglePass===!1?(ee.side=Xn,ee.needsUpdate=!0,P.renderBufferDirect(ce,K,se,ee,D,Ne),ee.side=ir,ee.needsUpdate=!0,P.renderBufferDirect(ce,K,se,ee,D,Ne),ee.side=fa):P.renderBufferDirect(ce,K,se,ee,D,Ne),D.onAfterRender(P,K,ce,se,ee,Ne)}function mn(D,K,ce){K.isScene!==!0&&(K=_t);const se=Ze.get(D),ee=N.state.lights,Ne=N.state.shadowsArray,Oe=ee.state.version,ke=me.getParameters(D,ee.state,Ne,K,ce),Ve=me.getProgramCacheKey(ke);let nt=se.programs;se.environment=D.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(D.isMeshStandardMaterial?A:B).get(D.envMap||se.environment),se.envMapRotation=se.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",lt),nt=new Map,se.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===Oe)return Br(D,ke),rt}else ke.uniforms=me.getUniforms(D),D.onBeforeCompile(ke,P),rt=me.acquireProgram(ke,Ve),nt.set(Ve,rt),se.uniforms=ke.uniforms;const Je=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Br(D,ke),se.needsLights=dl(D),se.lightsStateVersion=Oe,se.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.directionalShadowMap.value=ee.state.directionalShadowMap,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotShadowMap.value=ee.state.spotShadowMap,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMap.value=ee.state.pointShadowMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function zi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=su.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Br(D,K){const ce=Ze.get(D);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function yu(D,K,ce,se,ee){K.isScene!==!0&&(K=_t),ot.resetTextureUnits();const Ne=K.fog,Oe=se.isMeshStandardMaterial?K.environment:null,ke=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,Ve=(se.isMeshStandardMaterial?A:B).get(se.envMap||Oe),nt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,rt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!ce.morphAttributes.position,ht=!!ce.morphAttributes.normal,Rt=!!ce.morphAttributes.color;let Nt=nr;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=P.toneMapping);const Tt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ft=Tt!==void 0?Tt.length:0,tt=Ze.get(se),qt=N.state.lights;if(de===!0&&(Ce===!0||D!==J)){const Mn=D===J&&se.id===V;Ye.setState(se,D,Mn)}let At=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==ke||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==Ve||se.fog===!0&&tt.fog!==Ne||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==rt||tt.morphTargets!==Je||tt.morphNormals!==ht||tt.morphColors!==Rt||tt.toneMapping!==Nt||tt.morphTargetsCount!==Ft)&&(At=!0):(At=!0,tt.__version=se.version);let yn=tt.currentProgram;At===!0&&(yn=mn(se,K,ee));let ba=!1,Zt=!1,Bi=!1;const Kt=yn.getUniforms(),Sn=tt.uniforms;if(He.useProgram(yn.program)&&(ba=!0,Zt=!0,Bi=!0),se.id!==V&&(V=se.id,Zt=!0),ba||J!==D){He.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Kt.setValue(k,"projectionMatrix",D.projectionMatrix),Kt.setValue(k,"viewMatrix",D.matrixWorldInverse);const Tn=Kt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,Ae.setFromMatrixPosition(D.matrixWorld)),Ot.logarithmicDepthBuffer&&Kt.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Kt.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),J!==D&&(J=D,Zt=!0,Bi=!0)}if(ee.isSkinnedMesh){Kt.setOptional(k,ee,"bindMatrix"),Kt.setOptional(k,ee,"bindMatrixInverse");const Mn=ee.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Kt.setValue(k,"boneTexture",Mn.boneTexture,ot))}ee.isBatchedMesh&&(Kt.setOptional(k,ee,"batchingTexture"),Kt.setValue(k,"batchingTexture",ee._matricesTexture,ot),Kt.setOptional(k,ee,"batchingIdTexture"),Kt.setValue(k,"batchingIdTexture",ee._indirectTexture,ot),Kt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Kt.setValue(k,"batchingColorTexture",ee._colorsTexture,ot));const gn=ce.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Qe.update(ee,ce,yn),(Zt||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Kt.setValue(k,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=Ve,Sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(Sn.envMapIntensity.value=K.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=E2()),Zt&&(Kt.setValue(k,"toneMappingExposure",P.toneMappingExposure),tt.needsLights&&Su(Sn,Bi),Ne&&se.fog===!0&&Ke.refreshFogUniforms(Sn,Ne),Ke.refreshMaterialUniforms(Sn,se,$,ne,N.state.transmissionRenderTarget[D.id]),su.upload(k,zi(tt),Sn,ot)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(su.upload(k,zi(tt),Sn,ot),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Kt.setValue(k,"center",ee.center),Kt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),Kt.setValue(k,"normalMatrix",ee.normalMatrix),Kt.setValue(k,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Mn=se.uniformsGroups;for(let Tn=0,Ni=Mn.length;Tn<Ni;Tn++){const Fi=Mn[Tn];Pe.update(Fi,yn),Pe.bind(Fi,yn)}}return yn}function Su(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function dl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,K,ce){const se=Ze.get(D);se.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ze.get(D.texture).__webglTexture=K,Ze.get(D.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ce=Ze.get(D);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const sr=k.createFramebuffer();this.setRenderTarget=function(D,K=0,ce=0){R=D,Z=K,L=ce;let se=!0,ee=null,Ne=!1,Oe=!1;if(D){const Ve=Ze.get(D);if(Ve.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(k.FRAMEBUFFER,null),se=!1;else if(Ve.__webglFramebuffer===void 0)ot.setupRenderTarget(D);else if(Ve.__hasExternalTextures)ot.rebindTextures(D,Ze.get(D.texture).__webglTexture,Ze.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Je=D.depthTexture;if(Ve.__boundDepthTexture!==Je){if(Je!==null&&Ze.has(Je)&&(D.width!==Je.image.width||D.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const rt=Ze.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?ee=rt[K][ce]:ee=rt[K],Ne=!0):D.samples>0&&ot.useMultisampledRTT(D)===!1?ee=Ze.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?ee=rt[ce]:ee=rt,fe.copy(D.viewport),pe.copy(D.scissor),ge=D.scissorTest}else fe.copy(ue).multiplyScalar($).floor(),pe.copy(xe).multiplyScalar($).floor(),ge=be;if(ce!==0&&(ee=sr),He.bindFramebuffer(k.FRAMEBUFFER,ee)&&se&&He.drawBuffers(D,ee),He.viewport(fe),He.scissor(pe),He.setScissorTest(ge),Ne){const Ve=Ze.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,ce)}else if(Oe){const Ve=K;for(let nt=0;nt<D.textures.length;nt++){const rt=Ze.get(D.textures[nt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ce,Ve)}}else if(D!==null&&ce!==0){const Ve=Ze.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ve.__webglTexture,ce)}V=-1},this.readRenderTargetPixels=function(D,K,ce,se,ee,Ne,Oe,ke=0){if(!(D&&D.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){He.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const nt=D.textures[ke],rt=nt.format,Je=nt.type;if(!Ot.textureFormatReadable(rt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Je)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-se&&ce>=0&&ce<=D.height-ee&&(D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),k.readPixels(K,ce,se,ee,st.convert(rt),st.convert(Je),Ne))}finally{const nt=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,K,ce,se,ee,Ne,Oe,ke=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve)if(K>=0&&K<=D.width-se&&ce>=0&&ce<=D.height-ee){He.bindFramebuffer(k.FRAMEBUFFER,Ve);const nt=D.textures[ke],rt=nt.format,Je=nt.type;if(!Ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),k.readPixels(K,ce,se,ee,st.convert(rt),st.convert(Je),0);const Rt=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,Rt);const Nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await FE(k,Nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.deleteBuffer(ht),k.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ce=0){const se=Math.pow(2,-ce),ee=Math.floor(D.image.width*se),Ne=Math.floor(D.image.height*se),Oe=K!==null?K.x:0,ke=K!==null?K.y:0;ot.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,Oe,ke,ee,Ne),He.unbindTexture()};const Js=k.createFramebuffer(),Ma=k.createFramebuffer();this.copyTextureToTexture=function(D,K,ce=null,se=null,ee=0,Ne=null){Ne===null&&(ee!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ee,ee=0):Ne=0);let Oe,ke,Ve,nt,rt,Je,ht,Rt,Nt;const Tt=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(ce!==null)Oe=ce.max.x-ce.min.x,ke=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,rt=ce.min.y,Je=ce.isBox3?ce.min.z:0;else{const gn=Math.pow(2,-ee);Oe=Math.floor(Tt.width*gn),ke=Math.floor(Tt.height*gn),D.isDataArrayTexture?Ve=Tt.depth:D.isData3DTexture?Ve=Math.floor(Tt.depth*gn):Ve=1,nt=0,rt=0,Je=0}se!==null?(ht=se.x,Rt=se.y,Nt=se.z):(ht=0,Rt=0,Nt=0);const Ft=st.convert(K.format),tt=st.convert(K.type);let qt;K.isData3DTexture?(ot.setTexture3D(K,0),qt=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ot.setTexture2DArray(K,0),qt=k.TEXTURE_2D_ARRAY):(ot.setTexture2D(K,0),qt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const At=k.getParameter(k.UNPACK_ROW_LENGTH),yn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ba=k.getParameter(k.UNPACK_SKIP_PIXELS),Zt=k.getParameter(k.UNPACK_SKIP_ROWS),Bi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const Kt=D.isDataArrayTexture||D.isData3DTexture,Sn=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const gn=Ze.get(D),Mn=Ze.get(K),Tn=Ze.get(gn.__renderTarget),Ni=Ze.get(Mn.__renderTarget);He.bindFramebuffer(k.READ_FRAMEBUFFER,Tn.__webglFramebuffer),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<Ve;Fi++)Kt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ze.get(D).__webglTexture,ee,Je+Fi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ze.get(K).__webglTexture,Ne,Nt+Fi)),k.blitFramebuffer(nt,rt,Oe,ke,ht,Rt,Oe,ke,k.DEPTH_BUFFER_BIT,k.NEAREST);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||D.isRenderTargetTexture||Ze.has(D)){const gn=Ze.get(D),Mn=Ze.get(K);He.bindFramebuffer(k.READ_FRAMEBUFFER,Js),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ma);for(let Tn=0;Tn<Ve;Tn++)Kt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,ee,Je+Tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,ee),Sn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mn.__webglTexture,Ne,Nt+Tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mn.__webglTexture,Ne),ee!==0?k.blitFramebuffer(nt,rt,Oe,ke,ht,Rt,Oe,ke,k.COLOR_BUFFER_BIT,k.NEAREST):Sn?k.copyTexSubImage3D(qt,Ne,ht,Rt,Nt+Tn,nt,rt,Oe,ke):k.copyTexSubImage2D(qt,Ne,ht,Rt,nt,rt,Oe,ke);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Sn?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(qt,Ne,ht,Rt,Nt,Oe,ke,Ve,Ft,tt,Tt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(qt,Ne,ht,Rt,Nt,Oe,ke,Ve,Ft,Tt.data):k.texSubImage3D(qt,Ne,ht,Rt,Nt,Oe,ke,Ve,Ft,tt,Tt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,ht,Rt,Oe,ke,Ft,tt,Tt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,ht,Rt,Tt.width,Tt.height,Ft,Tt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,ht,Rt,Oe,ke,Ft,tt,Tt);k.pixelStorei(k.UNPACK_ROW_LENGTH,At),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ba),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Bi),Ne===0&&K.generateMipmaps&&k.generateMipmap(qt),He.unbindTexture()},this.initRenderTarget=function(D){Ze.get(D).__webglFramebuffer===void 0&&ot.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){Z=0,L=0,R=null,He.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const A2=()=>{const s=Y.useRef(null),[e,i]=Y.useState(!1);return Y.useEffect(()=>{if(!s.current)return;const r=new AT;r.fog=new bp(328976,.0015),r.background=new Pt(328976);const l=new gi(75,window.innerWidth/window.innerHeight,.1,3e3);l.position.z=5;const c=new T2({antialias:!0,alpha:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(c.domElement);const f=[65535,16711935,16776960,65280,16724787,3355647],h=new Ws(1,1,1),m=new UT(h),p=[],v=400;for(let ne=0;ne<v;ne++){const $=f[Math.floor(Math.random()*f.length)],U=new np({color:$,transparent:!0,opacity:.8,linewidth:2}),j=new sv(m,U);j.position.x=(Math.random()-.5)*120,j.position.y=(Math.random()-.5)*120,j.position.z=(Math.random()-.5)*1e3-500,j.rotation.x=Math.random()*Math.PI,j.rotation.y=Math.random()*Math.PI;const ue=Math.random()*2+.5;j.scale.set(ue,ue,ue),j.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},speedZ:Math.random()*2+.5},r.add(j),p.push(j)}const g=new Tp(1,2),x=new PT(g),b=[],E=15;for(let ne=0;ne<E;ne++){const $=f[Math.floor(Math.random()*f.length)],U=new np({color:$,transparent:!0,opacity:.15,linewidth:1}),j=new sv(x,U);j.position.x=(Math.random()-.5)*600,j.position.y=(Math.random()-.5)*600,j.position.z=(Math.random()-.5)*2e3-800;const ue=Math.random()*50+30;j.scale.set(ue,ue,ue),j.userData={rotationSpeed:{x:(Math.random()-.5)*.002,y:(Math.random()-.5)*.002},speedZ:Math.random()*.5+.1},r.add(j),b.push(j)}const T=new qn,S=4e3,_=new Float32Array(S*3);for(let ne=0;ne<S*3;ne++)_[ne]=(Math.random()-.5)*2500;T.setAttribute("position",new Ri(_,3));const C=new C_({color:16777215,size:1.5,transparent:!0,opacity:.6}),N=new LT(T,C);r.add(N);let O=!1,H=0,P=0,z=0,Z=0,L=0,R=0,V=0,J=0;const fe=ne=>{O=!0,i(!0),H=ne.clientX,P=ne.clientY,Z=z,R=L},pe=ne=>{O===!0&&(z=(H-ne.clientX)*.1+Z,L=(ne.clientY-P)*.1+R)},ge=()=>{O=!1,i(!1)},I=s.current;I.addEventListener("mousedown",fe),document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ge),I.addEventListener("touchstart",ne=>{const $=ne.touches[0];fe({clientX:$.clientX,clientY:$.clientY})}),I.addEventListener("touchmove",ne=>{const $=ne.touches[0];pe({clientX:$.clientX,clientY:$.clientY})}),I.addEventListener("touchend",ge);const F=()=>{requestAnimationFrame(F),L=Math.max(-85,Math.min(85,L)),V=Fg.degToRad(90-L),J=Fg.degToRad(z);const ne=new le;ne.x=500*Math.sin(V)*Math.cos(J),ne.y=500*Math.cos(V),ne.z=500*Math.sin(V)*Math.sin(J),l.lookAt(ne),p.forEach($=>{$.position.z+=$.userData.speedZ,$.rotation.x+=$.userData.rotationSpeed.x,$.rotation.y+=$.userData.rotationSpeed.y,$.position.z>200&&($.position.z=-800,$.position.x=(Math.random()-.5)*120,$.position.y=(Math.random()-.5)*120)}),b.forEach($=>{$.position.z+=$.userData.speedZ,$.rotation.x+=$.userData.rotationSpeed.x,$.rotation.y+=$.userData.rotationSpeed.y,$.position.z>600&&($.position.z=-1800,$.position.x=(Math.random()-.5)*600,$.position.y=(Math.random()-.5)*600)}),N.rotation.z+=3e-4,c.render(r,l)};F();const W=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",W),()=>{if(window.removeEventListener("resize",W),I)for(I.removeEventListener("mousedown",fe);I.firstChild;)I.removeChild(I.firstChild);document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ge)}},[]),M.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-sans",children:[M.jsx("div",{ref:s,className:"w-full h-full cursor-move"}),M.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8",children:[M.jsx("div",{className:"flex justify-between items-start",children:M.jsxs("div",{className:"bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-fade-in-down",children:[M.jsx("h1",{className:"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tighter mb-2 drop-shadow-lg",children:"NEON COSMOS"}),M.jsx("p",{className:"text-blue-200 text-sm font-light tracking-widest uppercase opacity-80",children:"Giant Structure Simulation"})]})}),M.jsx("div",{className:`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${e?"opacity-0":"opacity-60"}`,children:M.jsxs("div",{className:"flex flex-col items-center justify-center text-white/50",children:[M.jsx(ph,{className:"w-8 h-8 mb-2 animate-bounce"}),M.jsx("span",{className:"text-xs tracking-[0.2em] uppercase",children:"Drag to Explore"})]})}),M.jsxs("div",{className:"flex justify-between items-end",children:[M.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5",children:[M.jsxs("div",{className:"flex items-center gap-3 text-cyan-300 mb-1",children:[M.jsx(db,{className:"w-4 h-4"}),M.jsx("span",{className:"text-xs font-bold",children:"CONTROLS"})]}),M.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed max-w-[200px]",children:["마우스를 클릭하고 드래그하여",M.jsx("br",{}),"광활한 우주를 탐험하세요."]})]}),M.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-right",children:[M.jsxs("div",{className:"flex items-center justify-end gap-2 text-pink-400 mb-1",children:[M.jsx(nb,{className:"w-4 h-4"}),M.jsx("span",{className:"text-xs font-bold",children:"SYSTEM"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex items-center justify-end gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),M.jsx("span",{className:"text-gray-400 text-xs",children:"Simulation Running"})]}),M.jsxs("div",{className:"text-gray-500 text-[10px] font-mono",children:["ENTITIES: 400 CUBES",M.jsx("br",{}),"STRUCTURES: 15 GIANTS"]})]})]})]})]}),M.jsx("style",{children:`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `})]})},w2=20,Qc=.08,Pv="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",R2=s=>{let e=null,i=null,r=null,l=null;const c=()=>{e||(e=new(window.AudioContext||window.webkitAudioContext),i=e.createGain(),i.connect(e.destination),i.gain.value=.8),e.state==="suspended"&&e.resume()},f=async g=>{if(c(),!!e)try{const x=await g.arrayBuffer();r=await e.decodeAudioData(x),console.log("Audio loaded successfully")}catch(x){console.error("Error decoding audio data:",x),alert("오디오 파일을 디코딩하는 데 실패했습니다. 다른 파일을 시도해주세요.")}},h=(g,x)=>{if(!s||!e||!i||!r)return;c();let E=g/x*r.duration;E+Qc>r.duration&&(E=r.duration-Qc),E<0&&(E=0);const T=e.createBufferSource();T.buffer=r;const S=e.createGain();T.connect(S),S.connect(i);const _=e.currentTime;S.gain.setValueAtTime(0,_),S.gain.linearRampToValueAtTime(1,_+.01),S.gain.linearRampToValueAtTime(0,_+Qc),T.start(_,E,Qc+.02)},m=()=>{if(!s||!e||!i||!r)return;c(),p();const g=e.createBufferSource();g.buffer=r,g.connect(i),g.start(0),l=g,g.onended=()=>{l=null}},p=()=>{if(l){try{l.stop()}catch{}l=null}};return{loadAudio:f,playSlice:h,playFull:m,stop:p,hasAudio:()=>!!r}};function C2(){const[s,e]=Y.useState(Pv),[i,r]=Y.useState(null),[l,c]=Y.useState(!1),[f,h]=Y.useState(!0),[m,p]=Y.useState("quick"),[v,g]=Y.useState(50),[x,b]=Y.useState(!0),[E,T]=Y.useState(0),[S,_]=Y.useState(1),C=Y.useRef(null),N=Y.useRef(null),O=Y.useRef([]),H=Y.useRef(!1),P=Y.useRef(null);Y.useEffect(()=>{P.current=R2(x),x||P.current?.stop()},[x]),Y.useEffect(()=>{const I=new Image;I.crossOrigin="Anonymous",I.src=s,I.onload=()=>{N.current=I,z(I)}},[s,S]);const z=I=>{const F=C.current;if(!F)return;const W=600,ne=Math.floor(I.width/S),$=Math.min(1,W/ne),U=Math.floor(ne*$),j=Math.floor(I.height*$);F.width=U,F.height=j,O.current=Array.from({length:U},(ue,xe)=>xe),T(U),h(!0),Z(O.current)},Z=I=>{const F=C.current,W=N.current;if(!F||!W)return;const ne=F.getContext("2d",{willReadFrequently:!0});if(!ne)return;ne.clearRect(0,0,F.width,F.height);const $=W.width/F.width*S;for(let U=0;U<I.length;U++){const j=I[U]*$;ne.drawImage(W,j,0,$,W.height,U,0,1,F.height)}},L=I=>new Promise(F=>setTimeout(F,I)),R=()=>{if(H.current)throw new Error("Aborted")},V=async()=>{if(l)return;const I=[...O.current];for(let F=I.length-1;F>0;F--){const W=Math.floor(Math.random()*(F+1));[I[F],I[W]]=[I[W],I[F]]}O.current=I,Z(I),h(!1),P.current?.stop()},J=I=>{const F=I.target.files?.[0];if(F){const W=new FileReader;W.onload=ne=>{ne.target?.result&&e(ne.target.result)},W.readAsDataURL(F)}},fe=async I=>{const F=I.target.files?.[0];F&&P.current&&(r("Loading audio..."),await P.current.loadAudio(F),r(F.name))},pe=async()=>{if(l||f)return;c(!0),H.current=!1,P.current?.stop();const I=Math.max(0,(100-v)/2);try{const F=[...O.current],W=F.length,ne=async $=>{O.current=F,Z(F),$%w2===0&&x&&P.current?.playSlice(F[$],W),I>0&&await L(I),R()};if(m==="bubble")for(let $=0;$<W;$++)for(let U=0;U<W-$-1;U++)F[U]>F[U+1]&&([F[U],F[U+1]]=[F[U+1],F[U]],await ne(U));else if(m==="selection")for(let $=0;$<W;$++){let U=$;for(let j=$+1;j<W;j++)F[j]<F[U]&&(U=j);U!==$&&([F[$],F[U]]=[F[U],F[$]],await ne($))}else if(m==="insertion")for(let $=1;$<W;$++){let U=F[$],j=$-1;for(;j>=0&&F[j]>U;)F[j+1]=F[j],j=j-1,j%5===0&&await ne(j);F[j+1]=U,await ne($)}else if(m==="quick"){const $=async(j,ue)=>{const xe=F[ue];let be=j-1;for(let te=j;te<ue;te++)R(),F[te]<xe&&(be++,[F[be],F[te]]=[F[te],F[be]],te%3===0&&await ne(te));return[F[be+1],F[ue]]=[F[ue],F[be+1]],await ne(ue),be+1},U=async(j,ue)=>{if(j<ue){const xe=await $(j,ue);await U(j,xe-1),await U(xe+1,ue)}};await U(0,W-1)}else if(m==="heap"){const $=async(U,j)=>{let ue=j;const xe=2*j+1,be=2*j+2;xe<U&&F[xe]>F[ue]&&(ue=xe),be<U&&F[be]>F[ue]&&(ue=be),ue!==j&&([F[j],F[ue]]=[F[ue],F[j]],await ne(j),await $(U,ue))};for(let U=Math.floor(W/2)-1;U>=0;U--)await $(W,U);for(let U=W-1;U>0;U--)[F[0],F[U]]=[F[U],F[0]],await ne(U),await $(U,0)}else if(m==="radix"){const U=(j=>Math.max(...j))(F);for(let j=1;Math.floor(U/j)>0;j*=10){const ue=new Array(W).fill(0),xe=new Array(10).fill(0);for(let be=0;be<W;be++)xe[Math.floor(F[be]/j)%10]++;for(let be=1;be<10;be++)xe[be]+=xe[be-1];for(let be=W-1;be>=0;be--)ue[xe[Math.floor(F[be]/j)%10]-1]=F[be],xe[Math.floor(F[be]/j)%10]--;for(let be=0;be<W;be++)F[be]=ue[be],be%3===0&&await ne(be)}}else if(m==="merge"){const $=async(j,ue,xe)=>{const be=F.slice(j,ue+1),te=F.slice(ue+1,xe+1);let de=0,Ce=0,Ue=j;for(;de<be.length&&Ce<te.length;)R(),be[de]<=te[Ce]?(F[Ue]=be[de],de++):(F[Ue]=te[Ce],Ce++),Ue%2===0&&await ne(Ue),Ue++;for(;de<be.length;)F[Ue]=be[de],de++,Ue++,Ue%2===0&&await ne(Ue);for(;Ce<te.length;)F[Ue]=te[Ce],Ce++,Ue++,Ue%2===0&&await ne(Ue)},U=async(j,ue)=>{if(j>=ue)return;const xe=j+Math.floor((ue-j)/2);await U(j,xe),await U(xe+1,ue),await $(j,xe,ue)};await U(0,W-1)}h(!0),Z(O.current),x&&P.current?.hasAudio()&&P.current.playFull()}catch(F){console.log("Sorting aborted or error:",F)}finally{c(!1)}},ge=()=>{H.current=!0,c(!1),P.current?.stop()};return M.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col items-center p-4",children:[M.jsxs("header",{className:"w-full max-w-4xl flex justify-between items-center mb-8 border-b border-neutral-800 pb-4",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(eb,{className:"text-purple-400",size:24}),M.jsx("h1",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:"Pixel Sort Audio Visualizer"})]}),M.jsxs("div",{className:"flex gap-4 text-sm text-neutral-400",children:[M.jsx("span",{children:E>0?`${E} Columns`:"Loading..."}),M.jsx("span",{children:l?"Sorting...":f?"Sorted":"Ready"})]})]}),M.jsxs("main",{className:"w-full max-w-4xl flex flex-col items-center gap-6",children:[M.jsxs("div",{className:"relative group w-full flex justify-center bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-neutral-800 backdrop-blur-sm min-h-[300px]",children:[M.jsx("canvas",{ref:C,className:"max-w-full h-auto object-contain cursor-pointer transition-opacity",onClick:l?void 0:V,title:"Click to Shuffle"}),f&&!l&&M.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:M.jsxs("span",{className:"flex items-center gap-2 text-white font-medium",children:[M.jsx(wg,{size:16})," 클릭해서 섞기"]})})]}),M.jsxs("div",{className:"w-full bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-md",children:[M.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-center justify-between",children:[M.jsxs("div",{className:"flex flex-col gap-4 w-full md:w-auto",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider",children:"Algorithm"}),M.jsxs("select",{value:m,onChange:I=>p(I.target.value),disabled:l,className:"bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none",children:[M.jsx("option",{value:"bubble",children:"Bubble Sort (Slow)"}),M.jsx("option",{value:"selection",children:"Selection Sort"}),M.jsx("option",{value:"insertion",children:"Insertion Sort"}),M.jsx("option",{value:"quick",children:"Quick Sort (Fast)"}),M.jsx("option",{value:"merge",children:"Merge Sort"}),M.jsx("option",{value:"heap",children:"Heap Sort"}),M.jsx("option",{value:"radix",children:"Radix Sort (Very Fast)"})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Speed"}),M.jsx("input",{type:"range",min:"0",max:"100",value:v,onChange:I=>g(Number(I.target.value)),className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Pixel Size"}),M.jsxs("div",{className:"flex items-center gap-2 w-full",children:[M.jsx("input",{type:"range",min:"1",max:"20",value:S,onChange:I=>_(Number(I.target.value)),disabled:l,className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"}),M.jsxs("span",{className:"text-sm text-neutral-400 min-w-[2rem]",children:[S,"x"]})]})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("button",{onClick:()=>b(!x),className:`p-3 rounded-full transition-all ${x?"bg-neutral-700 text-purple-300 hover:bg-neutral-600":"bg-neutral-800 text-neutral-500"}`,title:x?"Mute":"Unmute",children:x?M.jsx(Ib,{size:20}):M.jsx(Bb,{size:20})}),l?M.jsxs("button",{onClick:ge,className:"flex items-center gap-2 px-8 py-3 bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 rounded-lg font-bold transition-all",children:[M.jsx(a_,{size:18})," 중지"]}):M.jsxs(M.Fragment,{children:[M.jsxs("button",{onClick:V,className:"flex items-center gap-2 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-all",children:[M.jsx(wg,{size:18})," 섞기"]}),M.jsxs("button",{onClick:pe,disabled:f,className:`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-purple-900/50 transition-all transform hover:scale-105
                            ${f?"bg-neutral-700 opacity-50 cursor-not-allowed":!i&&x?"bg-yellow-600 hover:bg-yellow-500":"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"}`,title:!i&&x?"오디오 파일이 없으면 소리가 나지 않습니다":"정렬 시작",children:[M.jsx(tu,{size:18,fill:"currentColor"})," 정렬 시작"]})]})]})]}),M.jsxs("div",{className:"mt-6 pt-4 border-t border-neutral-700 flex flex-wrap gap-4 justify-between items-center",children:[M.jsxs("div",{className:"flex gap-4",children:[M.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm text-neutral-400 hover:text-white transition-colors bg-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-700",children:[M.jsx(Pb,{size:16}),M.jsx("span",{children:"이미지 업로드"}),M.jsx("input",{type:"file",accept:"image/*",onChange:J,className:"hidden"})]}),M.jsxs("label",{className:`flex items-center gap-2 cursor-pointer text-sm px-3 py-2 rounded-lg transition-colors ${i?"bg-purple-500/20 text-purple-300 hover:bg-purple-500/30":"text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700"}`,children:[M.jsx(pb,{size:16}),M.jsx("span",{className:"truncate max-w-[150px]",children:i||"오디오 파일(.mp3) 업로드"}),M.jsx("input",{type:"file",accept:"audio/*",onChange:fe,className:"hidden"})]})]}),M.jsx("button",{onClick:()=>{e(Pv),r(null),P.current?.stop()},className:"text-xs text-neutral-500 hover:text-neutral-300 underline",children:"초기화"})]})]})]}),M.jsxs("footer",{className:"mt-8 text-center text-neutral-500 text-xs max-w-lg leading-relaxed",children:[M.jsx("p",{children:"이미지를 섞은 후 정렬되는 과정을 시각화합니다."}),M.jsx("p",{children:i?"업로드된 오디오 파일이 정렬 위치에 맞춰 조각나서 재생되며, 정렬이 완료되면 전체 곡이 재생됩니다.":"오디오 파일을 업로드하면 정렬 과정에 맞춰 사운드가 재생됩니다."})]})]})}const N2=({children:s})=>M.jsx("span",{className:"animate-rainbow font-bold text-xl md:text-3xl",style:{fontFamily:'"Comic Sans MS", "Chalkboard SE", sans-serif'},children:s}),fh=({children:s,color:e="text-red-500"})=>{const[i,r]=Y.useState(!0);return Y.useEffect(()=>{const l=setInterval(()=>r(c=>!c),500);return()=>clearInterval(l)},[]),M.jsx("span",{className:`${i?"opacity-100":"opacity-0"} ${e}`,children:s})},D2=({text:s})=>M.jsx("div",{className:"overflow-hidden whitespace-nowrap bg-blue-800 text-yellow-300 border-y-4 border-red-600 font-mono p-1",children:M.jsxs("div",{className:"animate-marquee inline-block text-lg",children:["+++ ",s," +++ ",s," +++ ",s," +++"]})}),L2=[{date:"2024년 10월 1일",title:"계절에 맞지 않는 습기",content:"10월임에도 불구하고 대기가 마치 늪지대처럼 무겁고 축축하다. 창문을 닫아도 스며드는 이 끈적한 습기는 단순한 날씨 탓이 아닌 것 같다. 빗물에서는 맡아본 적 없는 기이한 악취가 난다. 마치 수천 년 동안 고인 웅덩이에서 퍼올린 듯한, 비릿하면서도 금속성 냄새가 섞인 짠내다. 해안가와는 수백 킬로미터나 떨어진 이 내륙 도시에서 왜 심해의 부패한 냄새가 진동하는 것일까? 머리가 멍하고 속이 메스껍다. 단순한 기분 탓이라고 믿고 싶지만, 본능이 무언가 잘못되었다고 경고하고 있다.",sanityLevel:98},{date:"2024년 10월 5일",title:"기하학적 악몽",content:"어젯밤, 나는 잠들지 말았어야 했다. 꿈속에서 나는 거대한 녹색 석재로 지어진 도시를 헤매고 있었다. 그곳의 건축 양식은 인류의 역사 그 어디에도 존재하지 않는 것이었다. 건물들은 '비유클리드 기하학'적으로 뒤틀려 있었고, 오목한지 볼록한지조차 구분할 수 없는 벽면이 시야를 어지럽혔다. 저 멀리 보이는 거대한 문은 분명히 수직으로 서 있었지만, 동시에 수평으로 누워있는 듯한 모순된 감각을 주었다. 깨어난 지 한참이 지났지만, 그 압도적인 거대함에 눌린 공포가 가시질 않는다. 시야 구석에서 자꾸만 그 도시의 잔상이 어른거린다.",sanityLevel:94},{date:"2024년 10월 8일",title:"뒷골목의 골동품점",content:"퇴근길, 늘 다니던 길이었지만 오늘 처음 보는 낡은 골동품 가게가 눈에 띄었다. 홀린 듯 들어간 가게 내부는 먼지와 곰팡이 냄새로 가득했다. 주인이라 짐작되는 노인은 눈꺼풀이 없나 싶을 정도로 눈을 깜빡이지 않았고, 목소리는 물속에서 말하는 것처럼 걸걸했다. 그가 나를 보며 '별들의 위치가 잡혔다'고 중얼거렸을 때 나가야 했다. 하지만 진열장 구석에 놓인, 녹색 비누석(soapstone)으로 조각된 기이한 우상(Idol)이 내 발을 붙잡았다. 조잡한 솜씨였지만, 그 기괴한 형태는 뇌리에 박혀 지워지지 않는다.",sanityLevel:90},{date:"2024년 10월 12일",title:"저주받은 우상",content:"미친 짓인 줄 알면서도 결국 그 조각상을 사들고 왔다. 책상 위에 올려두고 자세히 관찰해보니 더욱 끔찍하다. 문어의 머리를 한 인간의 형상, 혹은 인간을 닮은 용의 형상... 등 뒤에는 징그러운 비늘이 덮인 날개가 접혀 있다. 만져보면 돌인데도 불구하고 미세하게 체온이 느껴지는 것 같고, 표면은 늘 축축한 점액으로 덮여 있는 듯한 착각을 준다. 이 조각상의 눈동자가 내가 방 안 어디에 있든 나를 주시하고 있다는 느낌을 지울 수가 없다.",sanityLevel:86},{date:"2024년 10월 15일",title:"동물들의 도주",content:"집안 분위기가 흉흉하다. 내 고양이 '네로'는 평소 온순했는데, 지금은 내 방 근처에는 얼씬도 하지 않는다. 억지로 데려오면 털을 곤두세우고 허공을 향해 미친 듯이 하악질을 해댄다. 더 기이한 것은 집 천장에서 들리던 쥐들의 발소리가 완전히 끊겼다는 것이다. 쥐덫에는 아무것도 걸리지 않았다. 그저 짐승들은 본능적으로 알고 있는 것이다. 이 집, 아니, 이 방에 포식자보다 더 상위의 존재가 도사리고 있다는 것을.",sanityLevel:81},{date:"2024년 10월 19일",title:"변모하는 이웃들",content:"옆집 사는 존슨 씨와 엘리베이터에서 마주쳤다. 그는 평범한 회사원이었는데, 며칠 사이에 사람이 완전히 변해버렸다. 피부는 창백하다 못해 잿빛으로 변했고, 목 주변의 피부가 늘어져 주름이 잡혀 있었다. 무엇보다 끔찍한 건 그의 눈이었다. 눈꺼풀이 퇴화한 듯 튀어나온 안구는 퀭하게 초점을 잃고 있었다. 그가 내릴 때 내 귀에 대고 '다곤 님께서 기다리신다'라고 속삭였다. 그 목소리는 사람의 성대에서 나올 수 없는, 젖은 진흙이 뭉개지는 소리 같았다.",sanityLevel:72},{date:"2024년 10월 24일",title:"지하의 북소리",content:"잠을 잘 수가 없다. 두통이 머리를 쪼개는 것 같다. 진통제를 한 통을 다 비웠지만 소용없다. 밤이 깊어지면 지하 깊은 곳, 지각 밑바닥에서부터 둥... 둥... 하는 북소리가 들려온다. 규칙적인 심장 박동 같기도 하고, 어떤 거대한 존재가 땅을 파고 올라오는 소리 같기도 하다. 이 리듬은 불규칙하고 혼란스러워서 듣고 있으면 정신이 아득해진다. 바닥에 귀를 대면 그 소리와 함께 미세한 진동이 느껴진다. 그들이 오고 있다.",sanityLevel:65},{date:"2024년 10월 28일",title:"금지된 지식",content:"도서관의 폐쇄된 서고에 몰래 들어갔다. 내가 찾는 것이 거기에 있을 거라는 확신이 들었다. 그리고 발견했다. 압둘 알하자드가 저술했다는 '알 아지프', 즉 '네크로노미콘'의 라틴어 필사본을. 책에서는 썩은 흙냄새가 났다. 떨리는 손으로 페이지를 넘기자, 글자들이 살아서 꿈틀거렸다. 인간의 발성 기관으로는 발음할 수 없는 저주받은 주문들. 읽지 말아야 한다고 이성이 소리쳤지만, 내 눈은 이미 '옛 지배자(The Great Old Ones)'들에 대한 구절을 탐독하고 있었다.",sanityLevel:55},{date:"2024년 10월 31일",title:"침식",content:"밖을 내다볼 수가 없다. 창밖에는 녹색의 끈적이는 안개가 가득 차 있다. 안개 속에서 거대한 촉수 같은 그림자가 꿈틀거리는 것이 보인다. 창문 틈새로 젤리 같은 점액질이 스며 들어와 바닥에 고여있다. 닦아내려 걸레를 대니 걸레가 치이익 소리를 내며 녹아버렸다. 옆집 개가 짖는 소리가 들렸는데, 갑자기 끔찍한 비명과 함께 뼈가 으스러지는 소리가 났다. 그리고 찾아온 정적. 이 세상의 것이 아닌 끔찍한 고요함이다.",sanityLevel:45},{date:"2024년 11월 3일",title:"신체의 변화",content:"거울 속의 내가 낯설다. 내 눈동자가... 세로로 갈라져 있다. 아니, 다시 보니 정상이다. 환각인가? 하지만 목덜미가 간지러워 긁었더니 손톱 밑에 회색 비늘 같은 것이 묻어 나왔다. 목 양옆이 따끔거린다. 숨을 쉴 때마다 코가 아닌 목 옆에서 공기가 드나드는 느낌이 든다. 피부가 건조한 것을 견딜 수가 없다. 욕조에 물을 가득 받아놓고 몸을 담가야만 안정이 된다. 나는 무엇이 되어가고 있는 건가?",sanityLevel:38},{date:"2024년 11월 7일",title:"뒤틀린 천구",content:"밤하늘이 잘못되었다. 천문학자인 친구에게 전화를 걸어 별자리가 이동했다고 소리쳤지만, 전화기 너머에서는 젖은 물소리와 비명소리만 들려왔다. 오리온자리는 제 자리에 있지 않다. 카시오페이아는 기괴하게 뒤틀려 있다. 별들이... 살아서 움직이고 있다. 그것들은 단순히 빛나는 가스가 아니다. 그것들은 우주 밖에서 우리를 내려다보는 수십억 개의 눈동자다. 그들이 나를 보고 있다. 나를 찾았다.",sanityLevel:30},{date:"2024년 11월 12일",title:"단절",content:"모든 통신이 끊겼다. 인터넷도, 전화도 먹통이다. TV를 켜면 지직거리는 노이즈 화면 속에 기이한 형상들이 얼핏얼핏 지나간다. 그리고 그 소음 속에서 명확한 단어들이 들리기 시작했다. '이아(Iä)... 이아(Iä)...' 그것은 찬양인가? 비명인가? 내 입에서도 나도 모르게 그 소리가 흘러나온다. 머릿속이 끈적한 진흙으로 가득 찬 기분이다.",sanityLevel:22},{date:"2024년 11월 15일",title:"르뤼에의 부상",content:"PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN. 죽은 크툴루가 그의 처소 르뤼에에서 꿈꾸며 기다린다. 이제 뜻을 알 것 같다. 아니, 기억해냈다. 바닥에서 바닷물이 솟구친다. 벽지가 젖어 뜯겨 나가고 그 뒤로 축축한 석조 벽이 드러난다. 이곳은 더 이상 내 방이 아니다. 심해다. 수압이 느껴진다. 하지만 고통스럽지 않다. 오히려 포근하다.",sanityLevel:15},{date:"2024년 11월 18일",title:"방문자들",content:"방문 밖 복도에서 질척이는 발소리가 들린다. 찰박... 찰박... 하나가 아니다. 십수 명, 아니 수십 명의 발소리. 문 손잡이가 천천히, 아주 천천히 돌아간다. 나는 장롱 속에 숨어 숨을 죽인다. 틈새로 보이는 거실은 이미 물이 차오르고 해초들이 둥둥 떠다니고 있다. 썩은 생선 내장의 악취가 코를 찌른다. 문이 열린다. 그들이 들어온다.",sanityLevel:10},{date:"2024년 11월 21일",title:"그림자의 춤",content:"빛은 사라졌다. 오로지 인광(燐光)만이 주위를 밝힌다. 그림자들이 제멋대로 벽에서 떨어져 나와 춤을 춘다. 내 그림자를 보았다. 머리가 있어야 할 곳에 촉수들이 꿈틀거리고 있다. 그림자가 본체다. 육체는 껍데기일 뿐이다. 나는 내 그림자를 어루만진다. 차갑고 미끈거린다. 우리는 하나다.",sanityLevel:8},{date:"2024년 11월 24일",title:"포식",content:"인간의 음식은 역겨워서 토해버렸다. 냉장고를 뒤져 날생선을 꺼냈다. 비늘도 벗기지 않은 생선을 씹어 먹었다. 내장에서 터져 나오는 씁쓸하고 비릿한 액체가 입안 가득 퍼질 때, 나는 비로소 살아있음을 느꼈다. 더 큰 고기가 필요하다. 더 신선하고, 더 피가 흐르는...",sanityLevel:5},{date:"2024년 11월 28일",title:"환희와 귀환",content:"두려움? 아니, 이것은 축복이다. 창문을 깨부수자 검은 파도가 2층인 내 방 안으로 들이닥쳤다. 저 멀리 수평선 너머로, 구름을 뚫고 솟아오른 거대한 그림자가 보인다. 그분의 날갯짓 한 번에 태풍이 몰아친다. 머릿속을 맴돌던 목소리가 이제는 천둥처럼 울린다. 테켈리-리! 테켈리-리! 우리는 바다로 돌아가야 해. 어머니 히드라와 아버지 다곤이 우릴 기다리신다.",sanityLevel:2},{date:"2024년 11월 29일",title:"문",content:"심해의 아이들이 나를 둘러쌌다. 그들의 튀어나온 눈은 아름답다. 목덜미의 아가미가 벌려지며 바닷물이 폐로 들어온다. 숨이 막히지 않는다. 상쾌하다. 우리는 손을 잡고 가라앉는다. 저 아래, 녹색 빛이 감도는 웅장한 도시 르뤼에로. 영원한 생명이 그곳에 있다.",sanityLevel:1},{date:"기록 불가",title:"END",content:"IÄ! IÄ! CTHULHU FHTAGN! IÄ! IÄ! CTHULHU FHTAGN! 별들이 제자리를 찾았다! 창문! 창문! 창문을 보라!",sanityLevel:0}];function U2(){const[s,e]=Y.useState(100),[i,r]=Y.useState(665);return Y.useEffect(()=>{const l=setInterval(()=>{e(c=>Math.max(0,c-1))},500);return()=>clearInterval(l)},[]),Y.useEffect(()=>{const l=setTimeout(()=>r(666),3e3);return()=>clearTimeout(l)},[]),M.jsxs("div",{className:"min-h-screen bg-black text-lime-400 font-serif overflow-x-hidden selection:bg-red-500 selection:text-white",children:[M.jsx("style",{children:`
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
      `}),M.jsxs("header",{className:"border-b-8 border-double border-purple-600 bg-indigo-900 p-4 text-center",children:[M.jsxs("div",{className:"flex justify-center items-center gap-4",children:[M.jsx("span",{className:"text-6xl spin-3d",children:"🐙"}),M.jsxs("div",{children:[M.jsx("h1",{className:"text-4xl md:text-6xl font-black text-red-600 drop-shadow-[4px_4px_0_rgba(255,255,255,0.8)]",children:"~*~ 금지된 지식 ~*~"}),M.jsx("h2",{className:"text-xl md:text-2xl mt-2 word-art",children:"THE FORBIDDEN LOG"})]}),M.jsx("span",{className:"text-6xl spin-3d",children:"👁️"})]}),M.jsx("p",{className:"mt-4 text-yellow-300 font-mono text-sm",children:"Best Viewed with Netscape Navigator 4.0"})]}),M.jsx(D2,{text:"경고: 이곳에 오래 머물지 마시오... 별들이 제자리를 찾았다... 이아! 이아! 크툴루 파탄... DO NOT READ THE LATIN TEXT..."}),M.jsxs("main",{className:"container mx-auto p-2 md:p-4 flex flex-col md:flex-row gap-4 bg-pattern min-h-screen",children:[M.jsxs("aside",{className:"w-full md:w-64 bg-blue-900 border-4 border-ridge border-gray-400 p-2 text-center h-fit shrink-0",children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("h3",{className:"bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold p-1 border-2 border-white",children:"M E N U"}),M.jsxs("ul",{className:"list-disc list-inside text-left mt-2 space-y-2 pl-2 text-cyan-300 underline cursor-pointer",children:[M.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"HOME"}),M.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"MY PROFILE"}),M.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"CTHULHU PICS"}),M.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"GUESTBOOK"}),M.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"EMAIL ME"}),M.jsx("li",{className:"hover:text-white hover:bg-blue-700 text-red-500 font-bold",children:"SECRET LINK"})]})]}),M.jsxs("div",{className:"border-4 border-dotted border-red-500 p-2 bg-black mb-4",children:[M.jsx(fh,{color:"text-red-500",children:M.jsx("p",{className:"font-bold text-lg",children:"WARNING!!"})}),M.jsx("p",{className:"text-xs text-white mt-1",children:"Don't scroll down if you are scare!!"}),M.jsx("div",{className:"mt-2 text-4xl",children:"👻"})]}),M.jsxs("div",{className:"bg-gray-300 border-2 border-inset border-gray-500 p-1",children:[M.jsx("p",{className:"text-black text-xs font-bold mb-1",children:"Total Visitors:"}),M.jsx("div",{className:"bg-black text-red-600 font-mono text-xl border border-gray-500 tracking-widest",children:i.toString().padStart(6,"0")})]}),M.jsx("div",{className:"mt-4",children:M.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/70/Spinning_globe.gif",alt:"spinning globe",className:"mx-auto w-16 h-16"})}),M.jsxs("div",{className:"mt-4 border-2 border-white p-1",children:[M.jsx("p",{className:"text-[10px] text-yellow-300",children:"Join our WebRing!"}),M.jsxs("div",{className:"flex justify-center gap-1 mt-1",children:[M.jsx("div",{className:"w-4 h-4 bg-red-500 rounded-full"}),M.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),M.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded-full"})]})]})]}),M.jsxs("section",{className:"flex-1 bg-gray-900 border-8 border-double border-green-700 p-4 md:p-8 relative",children:[M.jsx("div",{className:"absolute top-0 right-0 p-2 text-xs text-gray-500",children:"Last updated: 2024.11.30"}),M.jsxs("div",{className:"text-center mb-8",children:[M.jsx(N2,{children:"WELCOME TO MY DARK WORLD"}),M.jsx("br",{}),M.jsx("img",{src:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5eDh4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LpSf6D96Q9J5L3T75m/giphy.gif",alt:"Under Construction",className:"inline-block my-4 h-12",onError:l=>l.currentTarget.style.display="none"}),M.jsx("p",{className:"text-xs text-green-500 mt-2",children:'"이곳은 나의 광기를 기록하는 성소..."'})]}),M.jsxs("div",{className:"bg-red-900 border-2 border-red-500 p-2 mb-6 text-center animate-pulse sticky top-0 z-10 shadow-lg shadow-red-900/50",children:[M.jsxs("span",{className:"text-yellow-400 font-bold text-xl drop-shadow-md",children:["현재 당신의 이성(Sanity): ",s,"/100"]}),s<30&&M.jsx("p",{className:"text-white font-bold text-2xl mt-1 blink",children:"RUN AWAY!!!"})]}),M.jsx("div",{className:"space-y-8 font-mono",children:L2.map((l,c)=>M.jsxs("article",{className:"border-b-2 border-dashed border-gray-600 pb-4 hover:bg-gray-800 transition-colors",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-2 mb-2",children:[M.jsxs("h3",{className:"text-xl text-fuchsia-400 font-bold bg-blue-900 inline-block px-2 border border-blue-400",children:[l.date," - ",l.title]}),M.jsxs("span",{className:"text-xs text-gray-400",children:["[Sanity Level: ",l.sanityLevel,"%]"]})]}),l.sanityLevel<30?M.jsx("div",{className:"bg-black text-center p-4 my-2 border-4 border-yellow-500 transform rotate-1",children:M.jsx(fh,{color:"text-cyan-400",children:M.jsx("span",{className:"text-lg md:text-2xl font-bold",children:l.content})})}):M.jsx("p",{className:`mt-2 leading-relaxed text-lg ${l.sanityLevel<60?"text-red-400":"text-green-300"}`,children:l.content}),c===8&&M.jsx("div",{className:"my-4 text-center",children:M.jsxs("div",{className:"inline-block border-4 border-red-600 p-1 bg-white",children:[M.jsx("span",{className:"text-black font-bold text-4xl block transform skew-x-12",children:"👁️ 👁️ 👁️"}),M.jsx("span",{className:"text-red-600 text-xs",children:"THEY ARE WATCHING"})]})})]},c))}),M.jsxs("div",{className:"mt-12 text-center p-4 border-t-2 border-gray-600",children:[M.jsx("p",{className:"text-purple-500 text-xl mb-4 font-bold",children:"방명록을 남겨주세요 (남기지 않으면 저주함)"}),M.jsx("input",{type:"text",placeholder:"Name",className:"bg-gray-200 border-2 border-inset border-gray-500 p-1 mr-2 text-black"}),M.jsx("button",{className:"bg-gray-300 border-2 border-outset border-gray-500 px-4 py-1 text-black font-bold active:border-inset",children:"Sign Guestbook"}),M.jsx("br",{}),M.jsx("br",{}),M.jsx("a",{href:"#",className:"text-blue-400 underline text-sm hover:bg-white hover:text-black",children:"[Top으로 돌아가기]"})]})]})]}),M.jsxs("footer",{className:"bg-gray-800 text-center p-4 border-t-4 border-gray-500 text-xs text-gray-400",children:[M.jsx("p",{children:"Copyright (c) 1999 Mystic Keeper. All rights reserved."}),M.jsx("p",{children:"이 사이트의 모든 저작권은 위대한 옛 지배자에게 있습니다."}),M.jsxs("div",{className:"flex justify-center gap-2 mt-2",children:[M.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"HTML 4.01"}),M.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"IE 5.0"}),M.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"Netscape"})]}),M.jsx("br",{}),M.jsx(fh,{children:M.jsx("span",{className:"text-yellow-500 font-bold",children:"공사중 (Under Construction)"})}),M.jsx("div",{className:"mt-4 text-[10px] text-gray-600",children:"Design by: DarkSoulMaster666"})]})]})}const Ns=600,Ds=400,ca=50,Jc=24,Cr={easy:{aiSpeed:2.5,targetScore:10,label:"쉬움 (Easy)"},medium:{aiSpeed:4.5,targetScore:15,label:"보통 (Normal)"},hard:{aiSpeed:7,targetScore:20,label:"어려움 (Hard)"},impossible:{aiSpeed:10,targetScore:25,label:"불가능 (Insane)"}};function P2(){const[s,e]=Y.useState("menu"),[i,r]=Y.useState("medium"),[l,c]=Y.useState({player:0,ai:0}),[f,h]=Y.useState(null),[m,p]=Y.useState({x:0,y:0}),[v,g]=Y.useState({x:Ns/2,y:Ds/2}),x=Y.useRef(void 0),b=Y.useRef({player:0,ai:0}),E=Y.useRef({x:0,y:0}),T=Y.useRef({x:Ns/2,y:Ds/2}),S=Y.useRef(Cr.medium),_=Y.useCallback(()=>({x:Math.random()*(Ns-ca),y:Math.random()*(Ds-ca)}),[]),C=Y.useCallback(()=>{const z=_();p(z),E.current=z},[_]),N=Y.useCallback(()=>{const z=S.current;return b.current.player>=z.targetScore?(h("player"),e("ended"),!0):b.current.ai>=z.targetScore?(h("ai"),e("ended"),!0):!1},[]),O=Y.useCallback(()=>{if(s!=="playing")return;const z=T.current,Z=E.current,L=S.current.aiSpeed,R=Z.x+ca/2,V=Z.y+ca/2,J=R-z.x,fe=V-z.y,pe=Math.sqrt(J*J+fe*fe);if(pe>0){const ge=J/pe*L,I=fe/pe*L,F={x:z.x+ge,y:z.y+I};T.current=F,g(F)}if(pe<ca/2)if(b.current.ai+=1,c({...b.current}),!N())C();else return;x.current=requestAnimationFrame(O)},[s,C,N]);Y.useEffect(()=>(s==="playing"&&(x.current=requestAnimationFrame(O)),()=>{x.current&&cancelAnimationFrame(x.current)}),[s,O]);const H=()=>{b.current={player:0,ai:0},c({player:0,ai:0}),h(null),S.current=Cr[i],T.current={x:Ns/2,y:Ds/2},g(T.current),C(),e("playing")},P=z=>{if(s!=="playing")return;const Z=z.currentTarget.getBoundingClientRect(),L=z.clientX-Z.left,R=z.clientY-Z.top,V=E.current;L>=V.x&&L<=V.x+ca&&R>=V.y&&R<=V.y+ca&&(b.current.player+=1,c({...b.current}),N()||C())};return s==="menu"?M.jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800",children:M.jsxs("div",{className:"bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100",children:[M.jsx("div",{className:"mb-6 flex justify-center",children:M.jsx("div",{className:"w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12",children:M.jsx(ph,{className:"text-white w-8 h-8"})})}),M.jsx("h1",{className:"text-3xl font-bold mb-2 text-slate-900",children:"레드 스퀘어 헌터"}),M.jsx("p",{className:"text-slate-500 mb-8",children:"AI보다 먼저 빨간 사각형을 클릭하세요!"}),M.jsxs("div",{className:"space-y-4 mb-8",children:[M.jsx("p",{className:"text-sm font-semibold text-slate-400 uppercase tracking-wider",children:"난이도 선택"}),M.jsx("div",{className:"grid grid-cols-1 gap-3",children:Object.keys(Cr).map(z=>M.jsxs("button",{onClick:()=>r(z),className:`py-3 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${i===z?"border-red-500 bg-red-50 text-red-600":"border-slate-100 hover:border-red-200 hover:bg-slate-50 text-slate-600"}`,children:[M.jsx("span",{className:"font-medium",children:Cr[z].label}),M.jsxs("span",{className:"text-xs opacity-60 bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm",children:["목표: ",Cr[z].targetScore,"점"]})]},z))})]}),M.jsx("button",{onClick:H,className:"w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-100",children:"게임 시작"})]})}):M.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans select-none",children:[M.jsxs("div",{className:"w-full max-w-[600px] mb-6 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold",children:"P"}),M.jsxs("div",{children:[M.jsx("p",{className:"text-xs text-slate-400 font-bold uppercase",children:"Player"}),M.jsx("p",{className:"text-2xl font-bold text-slate-800 leading-none",children:l.player})]})]}),M.jsxs("div",{className:"flex flex-col items-center",children:[M.jsxs("div",{className:"text-xs font-bold text-slate-300 uppercase tracking-widest mb-1",children:["Target: ",Cr[i].targetScore]}),M.jsx("div",{className:"w-32 h-2 bg-slate-100 rounded-full overflow-hidden",children:M.jsx("div",{className:"h-full bg-slate-800 transition-all duration-300",style:{width:`${Math.max(l.player,l.ai)/Cr[i].targetScore*100}%`}})})]}),M.jsxs("div",{className:"flex items-center gap-3 text-right",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs text-slate-400 font-bold uppercase",children:"AI Bot"}),M.jsx("p",{className:"text-2xl font-bold text-slate-800 leading-none",children:l.ai})]}),M.jsx("div",{className:"w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold",children:"AI"})]})]}),M.jsxs("div",{className:"relative bg-white rounded-3xl shadow-xl border-4 border-slate-100 overflow-hidden",style:{width:Ns,height:Ds},children:[s==="playing"&&M.jsxs("div",{className:"absolute inset-0 cursor-crosshair active:cursor-grabbing z-10",onClick:P,children:[M.jsx("div",{className:"absolute bg-red-500 rounded-xl shadow-[0_8px_16px_-4px_rgba(239,68,68,0.5)] transform transition-transform duration-75 hover:scale-105 active:scale-95 flex items-center justify-center group",style:{left:m.x,top:m.y,width:ca,height:ca},children:M.jsx(Db,{className:"text-white w-6 h-6 opacity-80 group-hover:opacity-100"})}),M.jsxs("div",{className:"absolute pointer-events-none transition-transform duration-75 flex flex-col items-center",style:{left:v.x-Jc/2,top:v.y-Jc/2,transform:"translate(0, 0)",width:Jc,height:Jc,zIndex:5},children:[M.jsx(ph,{className:"text-slate-800 fill-slate-800 w-6 h-6 transform -rotate-12 drop-shadow-md",strokeWidth:1}),M.jsx("span",{className:"text-[10px] font-bold text-slate-500 mt-1 bg-white/80 px-1 rounded",children:"AI"})]})]}),s==="ended"&&M.jsxs("div",{className:"absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300",children:[f==="player"?M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce",children:M.jsx(r_,{className:"w-10 h-10"})}),M.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2",children:"승리!"}),M.jsx("p",{className:"text-slate-500 mb-6",children:"AI의 속도를 이겨냈습니다."})]}):M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4",children:M.jsx(i_,{className:"w-10 h-10"})}),M.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2",children:"패배..."}),M.jsx("p",{className:"text-slate-500 mb-6",children:"AI가 더 빨랐습니다."})]}),M.jsxs("div",{className:"flex gap-4",children:[M.jsx("button",{onClick:()=>e("menu"),className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors",children:"메뉴로"}),M.jsxs("button",{onClick:H,className:"px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2",children:[M.jsx(vb,{className:"w-4 h-4"}),"다시 하기"]})]})]})]}),M.jsx("div",{className:"mt-8 text-center",children:M.jsxs("p",{className:"text-slate-400 text-sm",children:["Board Size: ",Ns,"x",Ds," | Current Diff: ",M.jsx("span",{className:"font-semibold text-slate-600 capitalize",children:i})]})})]})}const O2=Array.from({length:24},(s,e)=>e),Ov=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Iv={sleep:{bg:"bg-indigo-900/20 hover:bg-indigo-900/40",border:"border-indigo-500",text:"text-indigo-200",glow:"shadow-[0_0_15px_rgba(99,102,241,0.3)]",gradient:"from-indigo-500 to-blue-600"},study:{bg:"bg-blue-900/20 hover:bg-blue-900/40",border:"border-blue-400",text:"text-blue-200",glow:"shadow-[0_0_15px_rgba(96,165,250,0.3)]",gradient:"from-blue-400 to-cyan-400"},food:{bg:"bg-orange-900/20 hover:bg-orange-900/40",border:"border-orange-400",text:"text-orange-200",glow:"shadow-[0_0_15px_rgba(251,146,60,0.3)]",gradient:"from-orange-400 to-amber-400"},class:{bg:"bg-emerald-900/20 hover:bg-emerald-900/40",border:"border-emerald-400",text:"text-emerald-200",glow:"shadow-[0_0_15px_rgba(52,211,153,0.3)]",gradient:"from-emerald-400 to-teal-400"},rest:{bg:"bg-slate-800/30 hover:bg-slate-800/50",border:"border-slate-400",text:"text-slate-300",glow:"shadow-[0_0_15px_rgba(148,163,184,0.3)]",gradient:"from-slate-400 to-gray-400"},game:{bg:"bg-purple-900/20 hover:bg-purple-900/40",border:"border-purple-400",text:"text-purple-200",glow:"shadow-[0_0_15px_rgba(192,132,252,0.3)]",gradient:"from-purple-400 to-fuchsia-400"},free:{bg:"bg-pink-900/20 hover:bg-pink-900/40",border:"border-pink-400",text:"text-pink-200",glow:"shadow-[0_0_15px_rgba(244,114,182,0.3)]",gradient:"from-pink-400 to-rose-400"}},zv={sleep:M.jsx(cb,{size:16}),study:M.jsx(lu,{size:16}),food:M.jsx(GM,{size:16}),class:M.jsx(DM,{size:16}),rest:M.jsx(wb,{size:16}),game:M.jsx(QM,{size:16}),free:M.jsx(IM,{size:16})},rp=s=>{const e=s===6,i={};for(let r=0;r<24;r++)e?i[r]={title:"Free",type:"free",description:"자유 시간 (Recharge)"}:r===0?i[r]={title:"Rest",type:"rest",description:"하루 마무리 및 휴식"}:r>=1&&r<9?i[r]={title:"Sleep",type:"sleep",description:"수면 (Recharge)"}:r>=9&&r<12?i[r]={title:"Voca",type:"study",description:"영단어 암기"}:r>=12&&r<13?i[r]={title:"Lunch",type:"food",description:"점심 식사"}:r>=13&&r<16?i[r]={title:"LC/RC",type:"study",description:"리스닝 & 리딩"}:r>=16&&r<18?i[r]={title:"Class",type:"class",description:"토익 강의 수강"}:r>=18&&r<19?i[r]={title:"Dinner",type:"food",description:"저녁 식사"}:r>=19&&r<22?i[r]={title:"Study",type:"rest",description:"자율 공부 및 휴식"}:r>=22&&r<24?i[r]={title:"Game",type:"game",description:"게임 및 여가"}:i[r]={title:"-",type:"rest",description:""};return i},I2=s=>{const e=rp(s),i=[];let r=0,l=e[0],c=1;for(let f=1;f<24;f++){const h=e[f];h.type===l.type&&h.title===l.title?c++:(i.push({start:r,duration:c,item:l}),r=f,l=h,c=1)}return i.push({start:r,duration:c,item:l}),i};function z2(){const[s,e]=Y.useState(new Date);Y.useEffect(()=>{const h=setInterval(()=>e(new Date),1e3);return()=>clearInterval(h)},[]);const i=Y.useMemo(()=>{const h=s.getDay();return h===0?6:h-1},[s]),r=s.getHours(),l=Y.useMemo(()=>rp(i)[r],[i,r]),c=Iv[l.type],f=Y.useMemo(()=>Ov.map((h,m)=>I2(m)),[]);return M.jsxs("div",{className:"flex w-full h-screen bg-[#0f111a] text-slate-300 overflow-hidden font-sans selection:bg-indigo-500/30",children:[M.jsxs("div",{className:"w-3/5 h-full flex flex-col bg-[#0f111a] relative z-10",children:[M.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0",children:[M.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[120px]"}),M.jsx("div",{className:"absolute bottom-[-20%] right-[10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[100px]"})]}),M.jsxs("div",{className:"relative z-10 flex w-full border-b border-white/5 bg-[#0f111a]/95 backdrop-blur-sm",children:[M.jsx("div",{className:"w-16 shrink-0 p-4 flex items-center justify-center text-[10px] text-slate-500 font-bold tracking-widest uppercase",children:"Time"}),M.jsx("div",{className:"flex-1 grid grid-cols-7",children:Ov.map((h,m)=>M.jsxs("div",{className:`flex flex-col items-center justify-center py-4 transition-colors duration-300 ${m===i?"bg-white/5":""}`,children:[M.jsx("span",{className:`text-xs font-bold tracking-widest uppercase ${m===i?"text-white":"text-slate-500"}`,children:h}),m===i&&M.jsx("span",{className:"mt-1 w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"})]},h))})]}),M.jsx("div",{className:"relative z-10 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar",children:M.jsxs("div",{className:"flex relative min-h-[1440px]",children:[" ",M.jsx("div",{className:"w-16 shrink-0 flex flex-col bg-[#0f111a]/50 border-r border-white/5 z-10 sticky left-0",children:O2.map(h=>M.jsx("div",{className:"h-[60px] flex items-start justify-center pt-2 text-[10px] font-medium text-slate-600 font-mono",children:h.toString().padStart(2,"0")},h))}),M.jsx("div",{className:"flex-1 grid grid-cols-7",children:f.map((h,m)=>{const p=m===i;return M.jsx("div",{className:`flex flex-col border-r border-white/5 last:border-r-0 ${p?"bg-white/2":""}`,children:h.map((v,g)=>{const x=v.item,b=Iv[x.type],E=p&&r>=v.start&&r<v.start+v.duration;return M.jsx("div",{className:"p-1 flex relative group transition-all duration-300",style:{height:`${v.duration*60}px`},children:M.jsxs("div",{className:`w-full h-full rounded-md flex flex-col justify-center items-center px-2 text-center transition-all duration-300 
                            ${E?`bg-slate-800 shadow-lg ring-1 ring-inset ${b.border} z-10 scale-[1.02]`:`${b.bg} border-l-2 ${b.border} opacity-80 hover:opacity-100 hover:scale-[1.02] hover:z-10`}`,children:[M.jsxs("div",{className:"flex flex-col items-center gap-2 overflow-hidden",children:[M.jsx("span",{className:`${E?"text-white":b.text} opacity-70`,children:zv[x.type]}),M.jsx("span",{className:`text-[11px] font-medium leading-tight ${E?"text-white":b.text}`,children:x.title}),v.duration>2&&M.jsxs("span",{className:"text-[9px] opacity-50 hidden xl:block",children:[v.start.toString().padStart(2,"0"),":00 - ",(v.start+v.duration).toString().padStart(2,"0"),":00"]})]}),E&&M.jsx("div",{className:`absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white animate-ping ${b.glow}`})]})},`${m}-${g}`)})},m)})}),M.jsxs("div",{className:"absolute left-16 right-0 h-0.5 bg-red-500/60 z-20 pointer-events-none shadow-[0_0_10px_rgba(239,68,68,0.4)]",style:{top:`${r*60+s.getMinutes()/60*60}px`},children:[M.jsx("div",{className:"absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-red-500 shadow-md"}),M.jsx("div",{className:"absolute right-0 -top-2 px-1 text-[9px] font-bold text-red-500 bg-[#0f111a] border border-red-500/30 rounded",children:"NOW"})]})]})})]}),M.jsxs("div",{className:"w-2/5 h-full relative flex flex-col items-center justify-center p-12 overflow-hidden bg-[#0a0c10]",children:[M.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 transition-all duration-1000 bg-linear-to-tr ${c.gradient}`}),M.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"}),M.jsxs("div",{className:"z-10 w-full max-w-sm flex flex-col gap-8",children:[M.jsxs("div",{className:"flex flex-col items-center",children:[M.jsxs("div",{className:"text-8xl font-thin tracking-tighter text-white/90 drop-shadow-lg tabular-nums",children:[s.toLocaleTimeString("ko-KR",{hour12:!1,hour:"2-digit",minute:"2-digit"}),M.jsx("span",{className:"text-4xl text-white/40 ml-2 font-light",children:s.getSeconds().toString().padStart(2,"0")})]}),M.jsx("div",{className:"text-white/40 font-light tracking-widest text-sm mt-2 uppercase flex items-center gap-2",children:s.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),M.jsxs("div",{className:"relative group perspective-1000",children:[M.jsx("div",{className:`absolute -inset-1 bg-linear-to-r ${c.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}),M.jsxs("div",{className:"relative p-8 bg-[#13151f]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-start justify-between",children:[M.jsxs("div",{className:"flex flex-col",children:[M.jsx("span",{className:"text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1",children:"Current Task"}),M.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:l.title})]}),M.jsx("div",{className:`p-3 rounded-xl bg-white/5 border border-white/10 ${c.text} shadow-inner`,children:zv[l.type]})]}),M.jsxs("div",{className:"flex flex-col gap-2",children:[M.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/30",children:[M.jsx("span",{children:"Progress"}),M.jsxs("span",{children:[Math.floor(s.getMinutes()/60*100),"%"]})]}),M.jsx("div",{className:"w-full h-1.5 bg-white/5 rounded-full overflow-hidden",children:M.jsx("div",{className:`h-full bg-linear-to-r ${c.gradient} shadow-[0_0_10px_currentColor] transition-all duration-1000`,style:{width:`${s.getMinutes()/60*100}%`}})})]}),M.jsx("div",{className:"p-4 rounded-lg bg-white/3 border border-white/5",children:M.jsx("p",{className:"text-sm text-slate-300 font-light leading-relaxed",children:l.description})}),M.jsxs("div",{className:"flex items-center gap-3 pt-2 border-t border-white/5",children:[M.jsx("div",{className:"w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30",children:M.jsx(jM,{size:14})}),M.jsxs("div",{className:"flex flex-col",children:[M.jsx("span",{className:"text-[10px] text-white/30 uppercase tracking-wider",children:"Up Next"}),M.jsx("span",{className:"text-sm text-white/60 font-medium",children:rp(i)[(r+1)%24].title})]}),M.jsxs("div",{className:"ml-auto text-xs text-white/30 font-mono",children:[(r+1)%24,":00"]})]})]})]})]})]})]})}Jy.createRoot(document.getElementById("root")).render(M.jsx(Y.StrictMode,{children:M.jsx(hM,{children:M.jsxs(jS,{children:[M.jsx($a,{path:"/",element:M.jsx(Yb,{})}),M.jsx($a,{path:"/network-quiz",element:M.jsx(Zb,{})}),M.jsx($a,{path:"/neonspace",element:M.jsx(A2,{})}),M.jsx($a,{path:"/pixel-sort",element:M.jsx(C2,{})}),M.jsx($a,{path:"/cthulhu",element:M.jsx(U2,{})}),M.jsx($a,{path:"/speed-clicker",element:M.jsx(P2,{})}),M.jsx($a,{path:"/schedule",element:M.jsx(z2,{})})]})})}));
