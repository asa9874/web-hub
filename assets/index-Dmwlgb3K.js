(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Hy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wd={exports:{}},Ho={};var sg;function Vy(){if(sg)return Ho;sg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var og;function Gy(){return og||(og=1,wd.exports=Vy()),wd.exports}var g=Gy(),Rd={exports:{}},ut={};var lg;function jy(){if(lg)return ut;lg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function y(P,X,fe){this.props=P,this.context=X,this.refs=b,this.updater=fe||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,X){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,X,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=y.prototype;function C(P,X,fe){this.props=P,this.context=X,this.refs=b,this.updater=fe||E}var U=C.prototype=new w;U.constructor=C,T(U,y.prototype),U.isPureReactComponent=!0;var k=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(P,X,fe){var _e=fe.ref;return{$$typeof:s,type:P,key:X,ref:_e!==void 0?_e:null,props:fe}}function R(P,X){return D(P.type,X,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function K(P){var X={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(fe){return X[fe]})}var ce=/\/+/g;function pe(P,X){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):X.toString(36)}function ge(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(X){P.status==="pending"&&(P.status="fulfilled",P.value=X)},function(X){P.status==="pending"&&(P.status="rejected",P.reason=X)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,X,fe,_e,Me){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var de=!1;if(P===null)de=!0;else switch(te){case"bigint":case"string":case"number":de=!0;break;case"object":switch(P.$$typeof){case s:case e:de=!0;break;case x:return de=P._init,I(de(P._payload),X,fe,_e,Me)}}if(de)return Me=Me(P),de=_e===""?"."+pe(P,0):_e,k(Me)?(fe="",de!=null&&(fe=de.replace(ce,"$&/")+"/"),I(Me,X,fe,"",function(Ae){return Ae})):Me!=null&&(H(Me)&&(Me=R(Me,fe+(Me.key==null||P&&P.key===Me.key?"":(""+Me.key).replace(ce,"$&/")+"/")+de)),X.push(Me)),1;de=0;var Ce=_e===""?".":_e+":";if(k(P))for(var Ue=0;Ue<P.length;Ue++)_e=P[Ue],te=Ce+pe(_e,Ue),de+=I(_e,X,fe,te,Me);else if(Ue=S(P),typeof Ue=="function")for(P=Ue.call(P),Ue=0;!(_e=P.next()).done;)_e=_e.value,te=Ce+pe(_e,Ue++),de+=I(_e,X,fe,te,Me);else if(te==="object"){if(typeof P.then=="function")return I(ge(P),X,fe,_e,Me);throw X=String(P),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return de}function F(P,X,fe){if(P==null)return P;var _e=[],Me=0;return I(P,_e,"","",function(te){return X.call(fe,te,Me++)}),_e}function q(P){if(P._status===-1){var X=P._result;X=X(),X.then(function(fe){(P._status===0||P._status===-1)&&(P._status=1,P._result=fe)},function(fe){(P._status===0||P._status===-1)&&(P._status=2,P._result=fe)}),P._status===-1&&(P._status=0,P._result=X)}if(P._status===1)return P._result.default;throw P._result}var ne=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},J={map:F,forEach:function(P,X,fe){F(P,function(){X.apply(this,arguments)},fe)},count:function(P){var X=0;return F(P,function(){X++}),X},toArray:function(P){return F(P,function(X){return X})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ut.Activity=v,ut.Children=J,ut.Component=y,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=C,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ut.cache=function(P){return function(){return P.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(P,X,fe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var _e=T({},P.props),Me=P.key;if(X!=null)for(te in X.key!==void 0&&(Me=""+X.key),X)!Z.call(X,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&X.ref===void 0||(_e[te]=X[te]);var te=arguments.length-2;if(te===1)_e.children=fe;else if(1<te){for(var de=Array(te),Ce=0;Ce<te;Ce++)de[Ce]=arguments[Ce+2];_e.children=de}return D(P.type,Me,_e)},ut.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ut.createElement=function(P,X,fe){var _e,Me={},te=null;if(X!=null)for(_e in X.key!==void 0&&(te=""+X.key),X)Z.call(X,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Me[_e]=X[_e]);var de=arguments.length-2;if(de===1)Me.children=fe;else if(1<de){for(var Ce=Array(de),Ue=0;Ue<de;Ue++)Ce[Ue]=arguments[Ue+2];Me.children=Ce}if(P&&P.defaultProps)for(_e in de=P.defaultProps,de)Me[_e]===void 0&&(Me[_e]=de[_e]);return D(P,te,Me)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(P){return{$$typeof:d,render:P}},ut.isValidElement=H,ut.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:q}},ut.memo=function(P,X){return{$$typeof:p,type:P,compare:X===void 0?null:X}},ut.startTransition=function(P){var X=z.T,fe={};z.T=fe;try{var _e=P(),Me=z.S;Me!==null&&Me(fe,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(O,ne)}catch(te){ne(te)}finally{X!==null&&fe.types!==null&&(X.types=fe.types),z.T=X}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(P){return z.H.use(P)},ut.useActionState=function(P,X,fe){return z.H.useActionState(P,X,fe)},ut.useCallback=function(P,X){return z.H.useCallback(P,X)},ut.useContext=function(P){return z.H.useContext(P)},ut.useDebugValue=function(){},ut.useDeferredValue=function(P,X){return z.H.useDeferredValue(P,X)},ut.useEffect=function(P,X){return z.H.useEffect(P,X)},ut.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(P,X,fe){return z.H.useImperativeHandle(P,X,fe)},ut.useInsertionEffect=function(P,X){return z.H.useInsertionEffect(P,X)},ut.useLayoutEffect=function(P,X){return z.H.useLayoutEffect(P,X)},ut.useMemo=function(P,X){return z.H.useMemo(P,X)},ut.useOptimistic=function(P,X){return z.H.useOptimistic(P,X)},ut.useReducer=function(P,X,fe){return z.H.useReducer(P,X,fe)},ut.useRef=function(P){return z.H.useRef(P)},ut.useState=function(P){return z.H.useState(P)},ut.useSyncExternalStore=function(P,X,fe){return z.H.useSyncExternalStore(P,X,fe)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.1",ut}var cg;function sp(){return cg||(cg=1,Rd.exports=jy()),Rd.exports}var V=sp();const Xy=Hy(V);var Cd={exports:{}},Vo={},Nd={exports:{}},Dd={};var ug;function Wy(){return ug||(ug=1,(function(s){function e(I,F){var q=I.length;I.push(F);e:for(;0<q;){var ne=q-1>>>1,J=I[ne];if(0<l(J,F))I[ne]=F,I[q]=J,q=ne;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],q=I.pop();if(q!==F){I[0]=q;e:for(var ne=0,J=I.length,P=J>>>1;ne<P;){var X=2*(ne+1)-1,fe=I[X],_e=X+1,Me=I[_e];if(0>l(fe,q))_e<J&&0>l(Me,fe)?(I[ne]=Me,I[_e]=q,ne=_e):(I[ne]=fe,I[X]=q,ne=X);else if(_e<J&&0>l(Me,q))I[ne]=Me,I[_e]=q,ne=_e;else break e}}return F}function l(I,F){var q=I.sortIndex-F.sortIndex;return q!==0?q:I.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],x=1,v=null,_=3,S=!1,E=!1,T=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var F=i(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=I)r(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function k(I){if(T=!1,U(I),!E)if(i(m)!==null)E=!0,O||(O=!0,K());else{var F=i(p);F!==null&&ge(k,F.startTime-I)}}var O=!1,z=-1,Z=5,D=-1;function R(){return b?!0:!(s.unstable_now()-D<Z)}function H(){if(b=!1,O){var I=s.unstable_now();D=I;var F=!0;try{e:{E=!1,T&&(T=!1,w(z),z=-1),S=!0;var q=_;try{t:{for(U(I),v=i(m);v!==null&&!(v.expirationTime>I&&R());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,_=v.priorityLevel;var J=ne(v.expirationTime<=I);if(I=s.unstable_now(),typeof J=="function"){v.callback=J,U(I),F=!0;break t}v===i(m)&&r(m),U(I)}else r(m);v=i(m)}if(v!==null)F=!0;else{var P=i(p);P!==null&&ge(k,P.startTime-I),F=!1}}break e}finally{v=null,_=q,S=!1}F=void 0}}finally{F?K():O=!1}}}var K;if(typeof C=="function")K=function(){C(H)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=H,K=function(){pe.postMessage(null)}}else K=function(){y(H,0)};function ge(I,F){z=y(function(){I(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(I){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var q=_;_=F;try{return I()}finally{_=q}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=_;_=I;try{return F()}finally{_=q}},s.unstable_scheduleCallback=function(I,F,q){var ne=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=q+J,I={id:x++,callback:F,priorityLevel:I,startTime:q,expirationTime:J,sortIndex:-1},q>ne?(I.sortIndex=q,e(p,I),i(m)===null&&I===i(p)&&(T?(w(z),z=-1):T=!0,ge(k,q-ne))):(I.sortIndex=J,e(m,I),E||S||(E=!0,O||(O=!0,K()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var F=_;return function(){var q=_;_=F;try{return I.apply(this,arguments)}finally{_=q}}}})(Dd)),Dd}var fg;function qy(){return fg||(fg=1,Nd.exports=Wy()),Nd.exports}var Ld={exports:{}},Dn={};var dg;function Yy(){if(dg)return Dn;dg=1;var s=sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Dn.flushSync=function(m){var p=f.T,x=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=x,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var hg;function Zy(){if(hg)return Ld.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ld.exports=Yy(),Ld.exports}var pg;function Ky(){if(pg)return Vo;pg=1;var s=qy(),e=sp(),i=Zy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,N=u.child;N;){if(N===a){M=!0,a=u,o=h;break}if(N===o){M=!0,o=u,a=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===a){M=!0,a=h,o=u;break}if(N===o){M=!0,o=h,a=u;break}N=N.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),C=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case C:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ge=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ne=[],J=-1;function P(t){return{current:t}}function X(t){0>J||(t.current=ne[J],ne[J]=null,J--)}function fe(t,n){J++,ne[J]=t.current,t.current=n}var _e=P(null),Me=P(null),te=P(null),de=P(null);function Ce(t,n){switch(fe(te,n),fe(Me,t),fe(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C1(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C1(n),t=N1(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(_e),fe(_e,t)}function Ue(){X(_e),X(Me),X(te)}function Ae(t){t.memoizedState!==null&&fe(de,t);var n=_e.current,a=N1(n,t.type);n!==a&&(fe(Me,t),fe(_e,a))}function Fe(t){Me.current===t&&(X(_e),X(Me)),de.current===t&&(X(de),zo._currentValue=q)}var xt,it;function _t(t){if(xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+it}var G=!1;function qe(t,n){if(!t||G)return"";G=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(he){var oe=he}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(he){oe=he}t.call(Se.prototype)}}else{try{throw Error()}catch(he){oe=he}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],N=h[1];if(M&&N){var j=M.split(`
`),re=N.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===re.length)for(o=j.length-1,u=re.length-1;1<=o&&0<=u&&j[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==re[u]){var ve=`
`+j[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function ft(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return _t("Activity");default:return""}}function Ot(t){try{var n="",a=null;do n+=ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ke=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,ot=s.unstable_shouldYield,B=s.unstable_requestPaint,A=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,me=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ie=s.unstable_IdlePriority,et=s.log,Ye=s.unstable_setDisableYieldValue,Te=null,Re=null;function Qe(t){if(typeof et=="function"&&Ye(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var Xe=Math.clz32?Math.clz32:W,Be=Math.log,st=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Be(t)/st|0)|0}var Pe=256,De=262144,Le=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~h,o!==0?u=we(o):(M&=N,M!==0?u=we(M):a||(a=N&~t,a!==0&&(u=we(a))))):(N=o&~h,N!==0?u=we(N):M!==0?u=we(M):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ve(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,j=t.expirationTimes,re=t.hiddenUpdates;for(a=M&~a;0<a;){var ve=31-Xe(a),Se=1<<ve;N[ve]=0,j[ve]=-1;var oe=re[ve];if(oe!==null)for(re[ve]=null,ve=0;ve<oe.length;ve++){var he=oe[ve];he!==null&&(he.lane&=-536870913)}a&=~Se}o!==0&&dl(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function dl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ys(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zs(t,n){var a=n&-n;return a=(a&42)!==0?1:yi(a),(a&(t.suspendedLanes|n))!==0?0:a}function yi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:J1(t.type))}function Qs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,mn="__reactProps$"+Zn,zi="__reactContainer$"+Zn,Br="__reactEvents$"+Zn,yu="__reactListeners$"+Zn,Su="__reactHandles$"+Zn,hl="__reactResources$"+Zn,sr="__reactMarker$"+Zn;function $s(t){delete t[cn],delete t[mn],delete t[Br],delete t[yu],delete t[Su]}function Ma(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=z1(t);t!==null;){if(a=t[cn])return a;t=z1(t)}return n}t=a,a=t.parentNode}return null}function L(t){if(t=t[cn]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ue(t){var n=t[hl];return n||(n=t[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[sr]=!0}var ee=new Set,Ne={};function Oe(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(Ne[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},rt={};function $e(t){return ke.call(rt,t)?!0:ke.call(nt,t)?!1:Ge.test(t)?rt[t]=!0:(nt[t]=!0,!1)}function ht(t,n,a){if($e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Ft(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function At(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ea=/[\n"\\]/g;function Zt(t){return t.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,u,h,M,N){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Tt(n)):t.value!==""+Tt(n)&&(t.value=""+Tt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,M,Tt(n)):a!=null?Sn(t,M,Tt(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+Tt(N):t.removeAttribute("name")}function Kt(t,n,a,o,u,h,M,N){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Tt(a):"",n=n!=null?""+Tt(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),qt(t)}function Sn(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,a){if(n!=null&&(n=""+Tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Tt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ap(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ap(t,h,n[h])}function bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return Bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Mu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,kr=null;function Rp(t){var n=L(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&At(o)}break e;case"textarea":bn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var Tu=!1;function Cp(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var o=t(n);return o}finally{if(Tu=!1,(Fr!==null||kr!==null)&&(tc(),Fr&&(n=Fr,t=kr,kr=Fr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Hi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Au=!1}var Ta=null,wu=null,ml=null;function Np(){if(ml)return ml;var t,n=wu,a=n.length,o,u="value"in Ta?Ta.value:Ta.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Dp(){return!1}function Fn(t){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Fn(or),to=v({},or,{view:0,detail:0}),Fx=Fn(to),Ru,Cu,no,_l=v({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Ru=t.screenX-no.screenX,Cu=t.screenY-no.screenY):Cu=Ru=0,no=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Lp=Fn(_l),kx=v({},_l,{dataTransfer:0}),Hx=Fn(kx),Vx=v({},to,{relatedTarget:0}),Nu=Fn(Vx),Gx=v({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=Fn(Gx),Xx=v({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=Fn(Xx),qx=v({},or,{data:0}),Up=Fn(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kx[t])?!!n[t]:!1}function Du(){return Qx}var $x=v({},to,{key:function(t){if(t.key){var n=Yx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Fn($x),e_=v({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Fn(e_),t_=v({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),n_=Fn(t_),i_=v({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Fn(i_),r_=v({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=Fn(r_),o_=v({},or,{newState:0,oldState:0}),l_=Fn(o_),c_=[9,13,27,32],Lu=Hi&&"CompositionEvent"in window,io=null;Hi&&"documentMode"in document&&(io=document.documentMode);var u_=Hi&&"TextEvent"in window&&!io,Op=Hi&&(!Lu||io&&8<io&&11>=io),Ip=" ",zp=!1;function Bp(t,n){switch(t){case"keyup":return c_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function f_(t,n){switch(t){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Ip);case"textInput":return t=n.data,t===Ip&&zp?null:t;default:return null}}function d_(t,n){if(Hr)return t==="compositionend"||!Lu&&Bp(t,n)?(t=Np(),ml=wu=Ta=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!h_[t.type]:n==="textarea"}function Hp(t,n,a,o){Fr?kr?kr.push(o):kr=[o]:Fr=o,n=lc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,ro=null;function p_(t){M1(t,0)}function yl(t){var n=Q(t);if(At(n))return t}function Vp(t,n){if(t==="change")return n}var Gp=!1;if(Hi){var Uu;if(Hi){var Pu="oninput"in document;if(!Pu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Pu=typeof jp.oninput=="function"}Uu=Pu}else Uu=!1;Gp=Uu&&(!document.documentMode||9<document.documentMode)}function Xp(){ao&&(ao.detachEvent("onpropertychange",Wp),ro=ao=null)}function Wp(t){if(t.propertyName==="value"&&yl(ro)){var n=[];Hp(n,ro,t,Eu(t)),Cp(p_,n)}}function m_(t,n,a){t==="focusin"?(Xp(),ao=n,ro=a,ao.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function g_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(ro)}function v_(t,n){if(t==="click")return yl(n)}function x_(t,n){if(t==="input"||t==="change")return yl(n)}function __(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:__;function so(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ke.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var y_=Hi&&"documentMode"in document&&11>=document.documentMode,Vr=null,Iu=null,oo=null,zu=!1;function Qp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||Vr==null||Vr!==yn(o)||(o=Vr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=lc(Iu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Vr)))}function lr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Bu={},$p={};Hi&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function cr(t){if(Bu[t])return Bu[t];if(!Gr[t])return t;var n=Gr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Bu[t]=n[a];return t}var Jp=cr("animationend"),em=cr("animationiteration"),tm=cr("animationstart"),S_=cr("transitionrun"),b_=cr("transitionstart"),M_=cr("transitioncancel"),nm=cr("transitionend"),im=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Si(t,n){im.set(t,n),Oe(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],jr=0,ku=0;function bl(){for(var t=jr,n=ku=jr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var h=si[n];if(si[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&am(a,u,h)}}function Ml(t,n,a,o){si[jr++]=t,si[jr++]=n,si[jr++]=a,si[jr++]=o,ku|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Hu(t,n,a,o){return Ml(t,n,a,o),El(t)}function ur(t,n){return Ml(t,null,null,n),El(t)}function am(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function El(t){if(50<No)throw No=0,Qf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function E_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new E_(t,n,a,o)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,h){var M=0;if(o=t,typeof t=="function")Vu(t)&&(M=1);else if(typeof t=="string")M=Cy(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Qn(31,a,n,u),t.elementType=D,t.lanes=h,t;case T:return fr(a.children,u,h,n);case b:M=8,u|=24;break;case y:return t=Qn(12,a,n,u|2),t.elementType=y,t.lanes=h,t;case k:return t=Qn(13,a,n,u),t.elementType=k,t.lanes=h,t;case O:return t=Qn(19,a,n,u),t.elementType=O,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case w:M=9;break e;case U:M=11;break e;case z:M=14;break e;case Z:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Qn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function fr(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function Gu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function sm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function ju(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var om=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=om.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},om.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var Wr=[],qr=0,Al=null,lo=0,li=[],ci=0,Aa=null,Di=1,Li="";function Gi(t,n){Wr[qr++]=lo,Wr[qr++]=Al,Al=t,lo=n}function lm(t,n,a){li[ci++]=Di,li[ci++]=Li,li[ci++]=Aa,Aa=t;var o=Di;t=Li;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var h=32-Xe(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Di=1<<32-Xe(n)+u|a<<u|o,Li=h+t}else Di=1<<h|a<<u|o,Li=t}function Xu(t){t.return!==null&&(Gi(t,1),lm(t,1,0))}function Wu(t){for(;t===Al;)Al=Wr[--qr],Wr[qr]=null,lo=Wr[--qr],Wr[qr]=null;for(;t===Aa;)Aa=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null}function cm(t,n){li[ci++]=Di,li[ci++]=Li,li[ci++]=Aa,Di=n.id,Li=n.overflow,Aa=t}var An=null,Qt=null,wt=!1,wa=null,ui=!1,qu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(oi(n,t)),qu}function um(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[mn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)St(Lo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Kt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||w1(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function fm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function Yr(t){if(t!==An)return!1;if(!wt)return fm(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&Qt&&Ra(t),fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=I1(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=I1(t)}else n===27?(n=Qt,Va(t.type)?(t=vd,vd=null,Qt=t):Qt=n):Qt=An?di(t.stateNode.nextSibling):null;return!0}function dr(){Qt=An=null,wt=!1}function Yu(){var t=wa;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),wa=null),t}function co(t){wa===null?wa=[t]:wa.push(t)}var Zu=P(null),hr=null,ji=null;function Ca(t,n,a){fe(Zu,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Zu.current,X(Zu)}function Ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var N=h;h=u;for(var j=0;j<n.length;j++)if(N.context===n[j]){h.lanes|=a,N=h.alternate,N!==null&&(N.lanes|=a),Ku(h.return,a,t),o||(M=null);break e}h=N.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Ku(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zr(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var N=u.type;Kn(u.pendingProps.value,M.value)||(t!==null?t.push(N):t=[N])}}else if(u===de.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Qu(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return dm(hr,t)}function Rl(t,n){return hr===null&&pr(t),dm(t,n)}function dm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var T_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},A_=s.unstable_scheduleCallback,w_=s.unstable_NormalPriority,un={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new T_,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&A_(w_,function(){t.controller.abort()})}var fo=null,Ju=0,Kr=0,Qr=null;function R_(t,n){if(fo===null){var a=fo=[];Ju=0,Kr=id(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(hm,hm),n}function hm(){if(--Ju===0&&fo!==null){Qr!==null&&(Qr.status="fulfilled");var t=fo;fo=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function C_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=I.S;I.S=function(t,n){Q0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&R_(t,n),pm!==null&&pm(t,n)};var mr=P(null);function ef(){var t=mr.current;return t!==null?t:Yt.pooledCache}function Cl(t,n){n===null?fe(mr,mr.current):fe(mr,n.pool)}function mm(){var t=ef();return t===null?null:{parent:un._currentValue,pool:t}}var $r=Error(r(460)),tf=Error(r(474)),Nl=Error(r(542)),Dl={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t}throw vr=n,$r}}function gr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,$r):a}}var vr=null;function xm(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function _m(t){if(t===$r||t===Nl)throw Error(r(483))}var Jr=null,ho=0;function Ll(t){var n=ho;return ho+=1,Jr===null&&(Jr=[]),vm(Jr,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n($,Y){if(t){var ie=$.deletions;ie===null?($.deletions=[Y],$.flags|=16):ie.push(Y)}}function a($,Y){if(!t)return null;for(;Y!==null;)n($,Y),Y=Y.sibling;return null}function o($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function u($,Y){return $=Vi($,Y),$.index=0,$.sibling=null,$}function h($,Y,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<Y?($.flags|=67108866,Y):ie):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function N($,Y,ie,xe){return Y===null||Y.tag!==6?(Y=Gu(ie,$.mode,xe),Y.return=$,Y):(Y=u(Y,ie),Y.return=$,Y)}function j($,Y,ie,xe){var Je=ie.type;return Je===T?ve($,Y,ie.props.children,xe,ie.key):Y!==null&&(Y.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&gr(Je)===Y.type)?(Y=u(Y,ie.props),po(Y,ie),Y.return=$,Y):(Y=Tl(ie.type,ie.key,ie.props,null,$.mode,xe),po(Y,ie),Y.return=$,Y)}function re($,Y,ie,xe){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=ju(ie,$.mode,xe),Y.return=$,Y):(Y=u(Y,ie.children||[]),Y.return=$,Y)}function ve($,Y,ie,xe,Je){return Y===null||Y.tag!==7?(Y=fr(ie,$.mode,xe,Je),Y.return=$,Y):(Y=u(Y,ie),Y.return=$,Y)}function Se($,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Gu(""+Y,$.mode,ie),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return ie=Tl(Y.type,Y.key,Y.props,null,$.mode,ie),po(ie,Y),ie.return=$,ie;case E:return Y=ju(Y,$.mode,ie),Y.return=$,Y;case Z:return Y=gr(Y),Se($,Y,ie)}if(ge(Y)||K(Y))return Y=fr(Y,$.mode,ie,null),Y.return=$,Y;if(typeof Y.then=="function")return Se($,Ll(Y),ie);if(Y.$$typeof===C)return Se($,Rl($,Y),ie);Ul($,Y)}return null}function oe($,Y,ie,xe){var Je=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Je!==null?null:N($,Y,""+ie,xe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===Je?j($,Y,ie,xe):null;case E:return ie.key===Je?re($,Y,ie,xe):null;case Z:return ie=gr(ie),oe($,Y,ie,xe)}if(ge(ie)||K(ie))return Je!==null?null:ve($,Y,ie,xe,null);if(typeof ie.then=="function")return oe($,Y,Ll(ie),xe);if(ie.$$typeof===C)return oe($,Y,Rl($,ie),xe);Ul($,ie)}return null}function he($,Y,ie,xe,Je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return $=$.get(ie)||null,N(Y,$,""+xe,Je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return $=$.get(xe.key===null?ie:xe.key)||null,j(Y,$,xe,Je);case E:return $=$.get(xe.key===null?ie:xe.key)||null,re(Y,$,xe,Je);case Z:return xe=gr(xe),he($,Y,ie,xe,Je)}if(ge(xe)||K(xe))return $=$.get(ie)||null,ve(Y,$,xe,Je,null);if(typeof xe.then=="function")return he($,Y,ie,Ll(xe),Je);if(xe.$$typeof===C)return he($,Y,ie,Rl(Y,xe),Je);Ul(Y,xe)}return null}function je($,Y,ie,xe){for(var Je=null,Dt=null,We=Y,pt=Y=0,Mt=null;We!==null&&pt<ie.length;pt++){We.index>pt?(Mt=We,We=null):Mt=We.sibling;var Lt=oe($,We,ie[pt],xe);if(Lt===null){We===null&&(We=Mt);break}t&&We&&Lt.alternate===null&&n($,We),Y=h(Lt,Y,pt),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt,We=Mt}if(pt===ie.length)return a($,We),wt&&Gi($,pt),Je;if(We===null){for(;pt<ie.length;pt++)We=Se($,ie[pt],xe),We!==null&&(Y=h(We,Y,pt),Dt===null?Je=We:Dt.sibling=We,Dt=We);return wt&&Gi($,pt),Je}for(We=o(We);pt<ie.length;pt++)Mt=he(We,$,pt,ie[pt],xe),Mt!==null&&(t&&Mt.alternate!==null&&We.delete(Mt.key===null?pt:Mt.key),Y=h(Mt,Y,pt),Dt===null?Je=Mt:Dt.sibling=Mt,Dt=Mt);return t&&We.forEach(function(qa){return n($,qa)}),wt&&Gi($,pt),Je}function at($,Y,ie,xe){if(ie==null)throw Error(r(151));for(var Je=null,Dt=null,We=Y,pt=Y=0,Mt=null,Lt=ie.next();We!==null&&!Lt.done;pt++,Lt=ie.next()){We.index>pt?(Mt=We,We=null):Mt=We.sibling;var qa=oe($,We,Lt.value,xe);if(qa===null){We===null&&(We=Mt);break}t&&We&&qa.alternate===null&&n($,We),Y=h(qa,Y,pt),Dt===null?Je=qa:Dt.sibling=qa,Dt=qa,We=Mt}if(Lt.done)return a($,We),wt&&Gi($,pt),Je;if(We===null){for(;!Lt.done;pt++,Lt=ie.next())Lt=Se($,Lt.value,xe),Lt!==null&&(Y=h(Lt,Y,pt),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt);return wt&&Gi($,pt),Je}for(We=o(We);!Lt.done;pt++,Lt=ie.next())Lt=he(We,$,pt,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&We.delete(Lt.key===null?pt:Lt.key),Y=h(Lt,Y,pt),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt);return t&&We.forEach(function(ky){return n($,ky)}),wt&&Gi($,pt),Je}function Xt($,Y,ie,xe){if(typeof ie=="object"&&ie!==null&&ie.type===T&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var Je=ie.key;Y!==null;){if(Y.key===Je){if(Je=ie.type,Je===T){if(Y.tag===7){a($,Y.sibling),xe=u(Y,ie.props.children),xe.return=$,$=xe;break e}}else if(Y.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&gr(Je)===Y.type){a($,Y.sibling),xe=u(Y,ie.props),po(xe,ie),xe.return=$,$=xe;break e}a($,Y);break}else n($,Y);Y=Y.sibling}ie.type===T?(xe=fr(ie.props.children,$.mode,xe,ie.key),xe.return=$,$=xe):(xe=Tl(ie.type,ie.key,ie.props,null,$.mode,xe),po(xe,ie),xe.return=$,$=xe)}return M($);case E:e:{for(Je=ie.key;Y!==null;){if(Y.key===Je)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a($,Y.sibling),xe=u(Y,ie.children||[]),xe.return=$,$=xe;break e}else{a($,Y);break}else n($,Y);Y=Y.sibling}xe=ju(ie,$.mode,xe),xe.return=$,$=xe}return M($);case Z:return ie=gr(ie),Xt($,Y,ie,xe)}if(ge(ie))return je($,Y,ie,xe);if(K(ie)){if(Je=K(ie),typeof Je!="function")throw Error(r(150));return ie=Je.call(ie),at($,Y,ie,xe)}if(typeof ie.then=="function")return Xt($,Y,Ll(ie),xe);if(ie.$$typeof===C)return Xt($,Y,Rl($,ie),xe);Ul($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Y!==null&&Y.tag===6?(a($,Y.sibling),xe=u(Y,ie),xe.return=$,$=xe):(a($,Y),xe=Gu(ie,$.mode,xe),xe.return=$,$=xe),M($)):a($,Y)}return function($,Y,ie,xe){try{ho=0;var Je=Xt($,Y,ie,xe);return Jr=null,Je}catch(We){if(We===$r||We===Nl)throw We;var Dt=Qn(29,We,null,$.mode);return Dt.lanes=xe,Dt.return=$,Dt}finally{}}}var xr=ym(!0),Sm=ym(!1),Na=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),am(t,null,a),n}return Ml(t,o,n,a),El(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}function rf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function go(){if(sf){var t=Qr;if(t!==null)throw t}}function vo(t,n,a,o){sf=!1;var u=t.updateQueue;Na=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var j=N,re=j.next;j.next=null,M===null?h=re:M.next=re,M=j;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==M&&(N===null?ve.firstBaseUpdate=re:N.next=re,ve.lastBaseUpdate=j))}if(h!==null){var Se=u.baseState;M=0,ve=re=j=null,N=h;do{var oe=N.lane&-536870913,he=oe!==N.lane;if(he?(bt&oe)===oe:(o&oe)===oe){oe!==0&&oe===Kr&&(sf=!0),ve!==null&&(ve=ve.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var je=t,at=N;oe=n;var Xt=a;switch(at.tag){case 1:if(je=at.payload,typeof je=="function"){Se=je.call(Xt,Se,oe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=at.payload,oe=typeof je=="function"?je.call(Xt,Se,oe):je,oe==null)break e;Se=v({},Se,oe);break e;case 2:Na=!0}}oe=N.callback,oe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(re=ve=he,j=Se):ve=ve.next=he,M|=oe;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;he=N,N=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ve===null&&(j=Se),u.baseState=j,u.firstBaseUpdate=re,u.lastBaseUpdate=ve,h===null&&(u.shared.lanes=0),za|=M,t.lanes=M,t.memoizedState=Se}}function bm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bm(a[t],n)}var es=P(null),Pl=P(0);function Em(t,n){t=ea,fe(Pl,t),fe(es,n),ea=t|n.baseLanes}function of(){fe(Pl,ea),fe(es,es.current)}function lf(){ea=Pl.current,X(es),X(Pl)}var $n=P(null),fi=null;function Ua(t){var n=t.alternate;fe(an,an.current&1),fe($n,t),fi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(fi=t)}function cf(t){fe(an,an.current),fe($n,t),fi===null&&(fi=t)}function Tm(t){t.tag===22?(fe(an,an.current),fe($n,t),fi===null&&(fi=t)):Pa()}function Pa(){fe(an,an.current),fe($n,$n.current)}function Jn(t){X($n),fi===t&&(fi=null),X(an)}var an=P(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,dt=null,Gt=null,fn=null,Il=!1,ts=!1,_r=!1,zl=0,xo=0,ns=null,N_=0;function tn(){throw Error(r(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function ff(t,n,a,o,u,h){return Wi=h,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?l0:Af,_r=!1,h=a(o,u),_r=!1,ts&&(h=wm(n,a,o,u)),Am(t),h}function Am(t){I.H=So;var n=Gt!==null&&Gt.next!==null;if(Wi=0,fn=Gt=dt=null,Il=!1,xo=0,ns=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&wl(t)&&(dn=!0))}function wm(t,n,a,o){dt=t;var u=0;do{if(ts&&(ns=null),xo=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,fn=Gt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=c0,h=n(a,o)}while(ts);return h}function D_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(dt.flags|=1024),n}function df(){var t=zl!==0;return zl=0,t}function hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}Wi=0,fn=Gt=dt=null,ts=!1,xo=zl=0,ns=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?dt.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(Gt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=fn===null?dt.memoizedState:fn.next;if(n!==null)fn=n,Gt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},fn===null?dt.memoizedState=fn=t:fn=fn.next=t}return fn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=xo;return xo+=1,ns===null&&(ns=[]),t=vm(ns,t,n),n=dt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?l0:Af),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===C)return wn(t)}throw Error(r(438,String(t)))}function mf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=rn();return gf(n,Gt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var N=M=null,j=null,re=n,ve=!1;do{var Se=re.lane&-536870913;if(Se!==re.lane?(bt&Se)===Se:(Wi&Se)===Se){var oe=re.revertLane;if(oe===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Se===Kr&&(ve=!0);else if((Wi&oe)===oe){re=re.next,oe===Kr&&(ve=!0);continue}else Se={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},j===null?(N=j=Se,M=h):j=j.next=Se,dt.lanes|=oe,za|=oe;Se=re.action,_r&&a(h,Se),h=re.hasEagerState?re.eagerState:a(h,Se)}else oe={lane:Se,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},j===null?(N=j=oe,M=h):j=j.next=oe,dt.lanes|=Se,za|=Se;re=re.next}while(re!==null&&re!==n);if(j===null?M=h:j.next=N,!Kn(h,t.memoizedState)&&(dn=!0,ve&&(a=Qr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=j,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Kn(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Rm(t,n,a){var o=dt,u=rn(),h=wt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Kn((Gt||u).memoizedState,a);if(M&&(u.memoizedState=a,dn=!0),u=u.queue,yf(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,is(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));h||(Wi&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Bl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Um(t)}function Dm(t,n,a){return a(function(){Lm(n)&&Um(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function Um(t){var n=ur(t,2);n!==null&&jn(n,t,2)}function xf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),_r){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,gf(t,Gt,typeof o=="function"?o:qi)}function L_(t,n,a,o,u){if(Gl(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Om(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,M={};I.T=M;try{var N=a(u,o),j=I.S;j!==null&&j(M,N),Im(t,n,N)}catch(re){_f(t,n,re)}finally{h!==null&&M.types!==null&&(h.types=M.types),I.T=h}}else try{h=a(u,o),Im(t,n,h)}catch(re){_f(t,n,re)}}function Im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(t,n,o)},function(o){return _f(t,n,o)}):zm(t,n,a)}function zm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fm(t,n){return n}function km(t,n){if(wt){var a=Yt.formState;if(a!==null){e:{var o=dt;if(wt){if(Qt){t:{for(var u=Qt,h=ui;u.nodeType!==8;){if(!h){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qt=di(u.nextSibling),o=u.data==="F!";break e}}Ra(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=r0.bind(null,dt,o),o.dispatch=a,o=xf(!1),h=Tf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=L_.bind(null,dt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hm(t){var n=rn();return Vm(n,Gt,t)}function Vm(t,n,a){if(n=gf(t,n,Fm)[0],t=kl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(M){throw M===$r?Nl:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,is(9,{destroy:void 0},U_.bind(null,u,a),null)),[o,h,t]}function U_(t,n){t.action=n}function Gm(t){var n=rn(),a=Gt;if(a!==null)return Vm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function is(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Bl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function jm(){return rn().memoizedState}function Hl(t,n,a,o){var u=Pn();dt.flags|=t,u.memoizedState=is(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Gt!==null&&o!==null&&uf(o,Gt.memoizedState.deps)?u.memoizedState=is(n,h,a,o):(dt.flags|=t,u.memoizedState=is(1|n,h,a,o))}function Xm(t,n){Hl(8390656,8,t,n)}function yf(t,n){Vl(2048,8,t,n)}function P_(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Bl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wm(t){var n=rn().memoizedState;return P_({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return Vl(4,2,t,n)}function Ym(t,n){return Vl(4,4,t,n)}function Zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Km(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Zm.bind(null,n,t),a)}function Sf(){}function Qm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),_r){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function bf(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=J0(),dt.lanes|=t,za|=t,a)}function Jm(t,n,a,o){return Kn(a,n)?a:es.current!==null?(t=bf(t,a,o),Kn(t,n)||(dn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(bt&261930)===0?(dn=!0,t.memoizedState=a):(t=J0(),dt.lanes|=t,za|=t,n)}function e0(t,n,a,o,u){var h=F.p;F.p=h!==0&&8>h?h:8;var M=I.T,N={};I.T=N,Tf(t,!1,n,a);try{var j=u(),re=I.S;if(re!==null&&re(N,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var ve=C_(j,o);yo(t,n,ve,ni(t))}else yo(t,n,o,ni(t))}catch(Se){yo(t,n,{then:function(){},status:"rejected",reason:Se},ni())}finally{F.p=h,M!==null&&N.types!==null&&(M.types=N.types),I.T=M}}function O_(){}function Mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=t0(t).queue;e0(t,u,n,q,a===null?O_:function(){return n0(t),a(o)})}function t0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function n0(t){var n=t0(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ni())}function Ef(){return wn(zo)}function i0(){return rn().memoizedState}function a0(){return rn().memoizedState}function I_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Da(a);var o=La(n,t,a);o!==null&&(jn(o,n,a),mo(o,n,a)),n={cache:$u()},t.payload=n;return}n=n.return}}function z_(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?s0(n,a):(a=Hu(t,n,a,o),a!==null&&(jn(a,t,o),o0(a,n,o)))}function r0(t,n,a){var o=ni();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))s0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,N=h(M,a);if(u.hasEagerState=!0,u.eagerState=N,Kn(N,M))return Ml(t,n,u,0),Yt===null&&bl(),!1}catch{}finally{}if(a=Hu(t,n,u,o),a!==null)return jn(a,t,o),o0(a,n,o),!0}return!1}function Tf(t,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(r(479))}else n=Hu(t,a,o,2),n!==null&&jn(n,t,2)}function Gl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function s0(t,n){ts=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function o0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ys(t,a)}}var So={readContext:wn,use:Fl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var l0={readContext:wn,use:Fl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(_r){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(_r){Qe(!0);try{a(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=z_.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=r0.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(t,n){var a=Pn();return bf(a,t,n)},useTransition:function(){var t=xf(!1);return t=e0.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Pn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(bt&127)!==0||Cm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Xm(Dm.bind(null,o,h,t),[t]),o.flags|=2048,is(9,{destroy:void 0},Nm.bind(null,o,h,a,n),null),a},useId:function(){var t=Pn(),n=Yt.identifierPrefix;if(wt){var a=Li,o=Di;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=N_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ef,useFormState:km,useActionState:km,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:mf,useCacheRefresh:function(){return Pn().memoizedState=I_.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:wn,use:Fl,useCallback:Qm,useContext:wn,useEffect:yf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:$m,useReducer:kl,useRef:jm,useState:function(){return kl(qi)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=kl(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:Ef,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=rn();return Pm(a,Gt,t,n)},useMemoCache:mf,useCacheRefresh:a0};Af.useEffectEvent=Wm;var c0={readContext:wn,use:Fl,useCallback:Qm,useContext:wn,useEffect:yf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:$m,useReducer:vf,useRef:jm,useState:function(){return vf(qi)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return Gt===null?bf(a,t,n):Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=vf(qi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:Ef,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var a=rn();return Gt!==null?Pm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:a0};c0.useEffectEvent=Wm;function wf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Da(o);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(jn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Da(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(jn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=La(t,o,a),n!==null&&(jn(n,t,a),mo(n,t,a))}};function u0(t,n,a,o,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,h):!0}function f0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Rf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function d0(t){Sl(t)}function h0(t){console.error(t)}function p0(t){Sl(t)}function jl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function m0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(t,n)},a}function g0(t){return t=Da(t),t.tag=3,t}function v0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){m0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){m0(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function B_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?nc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(t,o,u)),!1}throw Error(r(435,a.tag))}return ed(t,o,u),nc(),!1}if(wt)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(t=Error(r(422),{cause:o}),co(oi(t,a)))):(o!==qu&&(n=Error(r(423),{cause:o}),co(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Cf(t.stateNode,o,u),rf(t,u),nn!==4&&(nn=2)),!1;var h=Error(r(520),{cause:o});if(h=oi(h,a),Co===null?Co=[h]:Co.push(h),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cf(a.stateNode,o,t),rf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ba===null||!Ba.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=g0(u),v0(u,t,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),dn=!1;function Rn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):xr(n,t.child,a,o)}function x0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var N in o)N!=="ref"&&(M[N]=o[N])}else M=o;return pr(n),o=ff(t,n,a,M,h,u),N=df(),t!==null&&!dn?(hf(t,n,u),Yi(t,n,u)):(wt&&N&&Xu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function _0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,y0(t,n,h,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Bf(t,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(M,o)&&t.ref===n.ref)return Yi(t,n,u)}return n.flags|=1,t=Vi(h,o),t.ref=n.ref,t.return=n,n.child=t}function y0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(so(h,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=h,Bf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Yi(t,n,u)}return Df(t,n,a,o,u)}function S0(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return b0(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,h!==null?h.cachePool:null),h!==null?Em(n,h):of(),Tm(n);else return o=n.lanes=536870912,b0(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Cl(n,h.cachePool),Em(n,h),Pa(),n.memoizedState=null):(t!==null&&Cl(n,null),of(),Pa());return Rn(t,n,u,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function b0(t,n,a,o,u){var h=ef();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Cl(n,null),of(),Tm(n),t!==null&&Zr(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function M0(t,n,a){return xr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function F_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,bo(null,t);if(cf(n),(t=Qt)?(t=O1(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Xl(n,o)}var h=t.memoizedState;if(h!==null){var M=h.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=M0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(M=Zs(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,ur(t,M),jn(o,t,M),Nf;nc(),n=M0(t,n,a)}else t=h.treeContext,Qt=di(M.nextSibling),An=n,wt=!0,wa=null,ui=!1,t!==null&&cm(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=Vi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return pr(n),a=ff(t,n,a,o,void 0,u),o=df(),t!==null&&!dn?(hf(t,n,u),Yi(t,n,u)):(wt&&o&&Xu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function E0(t,n,a,o,u,h){return pr(n),n.updateQueue=null,a=wm(n,o,a,u),Am(t),o=df(),t!==null&&!dn?(hf(t,n,h),Yi(t,n,h)):(wt&&o&&Xu(n),n.flags|=1,Rn(t,n,a,h),n.child)}function T0(t,n,a,o,u){if(pr(n),n.stateNode===null){var h=Xr,M=a.contextType;typeof M=="object"&&M!==null&&(h=wn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Rf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?wn(M):Xr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(wf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Rf.enqueueReplaceState(h,h.state,null),vo(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var N=n.memoizedProps,j=yr(a,N);h.props=j;var re=h.context,ve=a.contextType;M=Xr,typeof ve=="object"&&ve!==null&&(M=wn(ve));var Se=a.getDerivedStateFromProps;ve=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(N||re!==M)&&f0(n,h,o,M),Na=!1;var oe=n.memoizedState;h.state=oe,vo(n,o,h,u),go(),re=n.memoizedState,N||oe!==re||Na?(typeof Se=="function"&&(wf(n,a,Se,o),re=n.memoizedState),(j=Na||u0(n,a,j,o,oe,re,M))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),h.props=o,h.state=re,h.context=M,o=j):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(t,n),M=n.memoizedProps,ve=yr(a,M),h.props=ve,Se=n.pendingProps,oe=h.context,re=a.contextType,j=Xr,typeof re=="object"&&re!==null&&(j=wn(re)),N=a.getDerivedStateFromProps,(re=typeof N=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==Se||oe!==j)&&f0(n,h,o,j),Na=!1,oe=n.memoizedState,h.state=oe,vo(n,o,h,u),go();var he=n.memoizedState;M!==Se||oe!==he||Na||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof N=="function"&&(wf(n,a,N,o),he=n.memoizedState),(ve=Na||u0(n,a,ve,o,oe,he,j)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(re||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,he,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,he,j)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),h.props=o,h.state=he,h.context=j,o=ve):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,u),n.child=xr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Yi(t,n,u),t}function A0(t,n,a,o){return dr(),n.flags|=256,Rn(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:mm()}}function Pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function w0(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Ua(n):Pa(),(t=Qt)?(t=O1(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Di,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Ra(n);return gd(t)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Pa(),u=n.mode,N=ql({mode:"hidden",children:N},u),o=fr(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=Uf(a),o.childLanes=Pf(t,M,a),n.memoizedState=Lf,bo(null,o)):(Ua(n),Of(n,N))}var j=t.memoizedState;if(j!==null&&(N=j.dehydrated,N!==null)){if(h)n.flags&256?(Ua(n),n.flags&=-257,n=If(t,n,a)):n.memoizedState!==null?(Pa(),n.child=t.child,n.flags|=128,n=null):(Pa(),N=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),N=fr(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Pf(t,M,a),n.memoizedState=Lf,n=bo(null,o));else if(Ua(n),gd(N)){if(M=N.nextSibling&&N.nextSibling.dataset,M)var re=M.dgst;M=re,o=Error(r(419)),o.stack="",o.digest=M,co({value:o,source:null,stack:null}),n=If(t,n,a)}else if(dn||Zr(t,n,a,!1),M=(a&t.childLanes)!==0,dn||M){if(M=Yt,M!==null&&(o=Zs(M,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,ur(t,o),jn(M,t,o),Nf;md(N)||nc(),n=If(t,n,a)}else md(N)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,Qt=di(N.nextSibling),An=n,wt=!0,wa=null,ui=!1,t!==null&&cm(n,t),n=Of(n,o.children),n.flags|=4096);return n}return u?(Pa(),N=o.fallback,u=n.mode,j=t.child,re=j.sibling,o=Vi(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,re!==null?N=Vi(re,N):(N=fr(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,bo(null,o),o=n.child,N=t.child.memoizedState,N===null?N=Uf(a):(u=N.cachePool,u!==null?(j=un._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=mm(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Pf(t,M,a),n.memoizedState=Lf,bo(t.child,o)):(Ua(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function If(t,n,a){return xr(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function R0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,a)}function zf(t,n,a,o,u,h){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function C0(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=an.current,N=(M&2)!==0;if(N?(M=M&1|2,n.flags|=128):M&=1,fe(an,M),Rn(t,n,o,a),o=wt?lo:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,a,n);else if(t.tag===19)R0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}zf(n,!0,a,null,h,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function k_(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Ca(n,un,t.memoizedState.cache),dr();break;case 27:case 5:Ae(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?w0(t,n,a):(Ua(n),t=Yi(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(an,an.current),o)break;return null;case 22:return n.lanes=0,S0(t,n,a,n.pendingProps);case 24:Ca(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Bf(t,a)&&(n.flags&128)===0)return dn=!1,k_(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,wt&&(n.flags&1048576)!==0&&lm(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=gr(n.elementType),n.type=t,typeof t=="function")Vu(t)?(o=yr(t,o),n.tag=1,n=T0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=x0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=_0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),T0(t,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,af(t,n),vo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ca(n,un,o),o!==h.cache&&Qu(n,[un],a,!0),go(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=A0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),co(u),n=A0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=di(t.firstChild),An=n,wt=!0,wa=null,ui=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dr(),o===u){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=H1(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=cc(te.current).createElement(a),o[cn]=n,o[mn]=t,Cn(o,a,t),se(o),n.stateNode=o):n.memoizedState=H1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ae(n),t===null&&wt&&(o=n.stateNode=B1(n.type,n.pendingProps,te.current),An=n,ui=!0,u=Qt,Va(n.type)?(vd=u,Qt=di(o.firstChild)):Qt=u),Rn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Qt)&&(o=gy(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Qt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Ra(n)),Ae(n),u=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,dd(u,h)?o=null:M!==null&&dd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(t,n,D_,null,null,a),zo._currentValue=u),Wl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=vy(a,n.pendingProps,ui),a!==null?(n.stateNode=a,An=n,Qt=null,t=!0):t=!1),t||Ra(n)),null;case 13:return w0(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return x0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return _0(t,n,n.type,n.pendingProps,a);case 15:return y0(t,n,n.type,n.pendingProps,a);case 19:return C0(t,n,a);case 31:return F_(t,n,a);case 22:return S0(t,n,a,n.pendingProps);case 24:return pr(n),o=wn(un),t===null?(u=ef(),u===null&&(u=Yt,h=$u(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},nf(n),Ca(n,un,u)):((t.lanes&a)!==0&&(af(t,n),vo(n,null,null,a),go()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,un,o)):(o=h.cache,Ca(n,un,o),o!==u.cache&&Qu(n,[un],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(i1())t.flags|=8192;else throw vr=Dl,tf}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W1(n))if(i1())t.flags|=8192;else throw vr=Dl,tf}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vt():536870912,t.lanes|=n,os|=n)}function Mo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function H_(t,n,a){var o=n.pendingProps;switch(Wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),$t(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Zi(n),h!==null?($t(n),D0(n,h)):($t(n),Ff(n,u,null,o,a))):h?h!==t.memoizedState?(Zi(n),$t(n),D0(n,h)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zi(n),$t(n),Ff(n,u,t,o,a)),null;case 27:if(Fe(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}t=_e.current,Yr(n)?um(n):(t=B1(u,o,a),n.stateNode=t,Zi(n))}return $t(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}if(h=_e.current,Yr(n))um(n);else{var M=cc(te.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[cn]=n,h[mn]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;e:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zi(n)}}return $t(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||w1(t.nodeValue,a)),t||Ra(n,!0)}else t=cc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Yr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),$t(n),null);case 4:return Ue(),t===null&&od(n.stateNode.containerInfo),$t(n),null;case 10:return Xi(n.type),$t(n),null;case 19:if(X(an),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Mo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ol(t),h!==null){for(n.flags|=128,Mo(o,!1),t=h.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rm(a,t),a=a.sibling;return fe(an,an.current&1|2),wt&&Gi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>Jl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!wt)return $t(n),null}else 2*A()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=an.current,fe(an,u?a&1|2:a&1),wt&&Gi(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return Jn(n),lf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&X(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),$t(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function V_(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(un),Ue(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(an),null;case 4:return Ue(),null;case 10:return Xi(n.type),null;case 22:case 23:return Jn(n),lf(),t!==null&&X(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function L0(t,n){switch(Wu(n),n.tag){case 3:Xi(un),Ue();break;case 26:case 27:case 5:Fe(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:X(an);break;case 10:Xi(n.type);break;case 22:case 23:Jn(n),lf(),t!==null&&X(mr);break;case 24:Xi(un)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(N){Ht(n,n.return,N)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var M=o.inst,N=M.destroy;if(N!==void 0){M.destroy=void 0,u=n;var j=a,re=N;try{re()}catch(ve){Ht(u,j,ve)}}}o=o.next}while(o!==h)}}catch(ve){Ht(n,n.return,ve)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){Ht(t,t.return,o)}}}function P0(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function O0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function kf(t,n,a){try{var o=t.stateNode;uy(o,t.type,a,n),o[mn]=n}catch(u){Ht(t,t.return,u)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Vf(t,n,a),t=t.sibling;t!==null;)Vf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[cn]=t,n[mn]=a}catch(h){Ht(t,t.return,h)}}var Ki=!1,hn=!1,Gf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function G_(t,n){if(t=t.containerInfo,ud=gc,t=Kp(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,N=-1,j=-1,re=0,ve=0,Se=t,oe=null;t:for(;;){for(var he;Se!==a||u!==0&&Se.nodeType!==3||(N=M+u),Se!==h||o!==0&&Se.nodeType!==3||(j=M+o),Se.nodeType===3&&(M+=Se.nodeValue.length),(he=Se.firstChild)!==null;)oe=Se,Se=he;for(;;){if(Se===t)break t;if(oe===a&&++re===u&&(N=M),oe===h&&++ve===o&&(j=M),(he=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=he}a=N===-1||j===-1?null:{start:N,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:t,selectionRange:a},gc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var je=yr(a.type,u);t=o.getSnapshotBeforeUpdate(je,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Ht(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function F0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),o&4&&Eo(5,a);break;case 1:if($i(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Ht(a,a.return,M)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(a,a.return,M)}}o&64&&U0(a),o&512&&To(a,a.return);break;case 3:if($i(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(M){Ht(a,a.return,M)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:$i(t,a),n===null&&o&4&&O0(a),o&512&&To(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),o&4&&V0(t,a);break;case 13:$i(t,a),o&4&&G0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$_.bind(null,a),xy(t,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||hn,u=Ki;var h=hn;Ki=o,(hn=n)&&!h?Ji(t,a,(a.subtreeFlags&8772)!==0):$i(t,a),Ki=u,hn=h}break;case 30:break;default:$i(t,a)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$s(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,kn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)H0(t,n,a),a=a.sibling}function H0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:hn||Ui(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ui(a,n);var o=Jt,u=kn;Va(a.type)&&(Jt=a.stateNode,kn=!1),Qi(t,n,a),Po(a.stateNode),Jt=o,kn=u;break;case 5:hn||Ui(a,n);case 6:if(o=Jt,u=kn,Jt=null,Qi(t,n,a),Jt=o,kn=u,Jt!==null)if(kn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(h){Ht(a,n,h)}else try{Jt.removeChild(a.stateNode)}catch(h){Ht(a,n,h)}break;case 18:Jt!==null&&(kn?(t=Jt,U1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):U1(Jt,a.stateNode));break;case 4:o=Jt,u=kn,Jt=a.stateNode.containerInfo,kn=!0,Qi(t,n,a),Jt=o,kn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),hn||Oa(4,a,n),Qi(t,n,a);break;case 1:hn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&P0(a,n,o)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Qi(t,n,a),hn=o;break;default:Qi(t,n,a)}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){Ht(n,n.return,a)}}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){Ht(n,n.return,a)}}function j_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=j_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=J_.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,M=n,N=M;e:for(;N!==null;){switch(N.tag){case 27:if(Va(N.type)){Jt=N.stateNode,kn=!1;break e}break;case 5:Jt=N.stateNode,kn=!1;break e;case 3:case 4:Jt=N.stateNode.containerInfo,kn=!0;break e}N=N.return}if(Jt===null)throw Error(r(160));H0(h,M,u),Jt=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j0(n,t),n=n.sibling}var bi=null;function j0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Vn(t),o&4&&(Oa(3,t,t.return),Eo(3,t),Oa(5,t,t.return));break;case 1:Hn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Hn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[sr]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[cn]=t,se(h),o=h;break e;case"link":var M=j1("link","href",u).get(o+(a.href||""));if(M){for(var N=0;N<M.length;N++)if(h=M[N],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(N,1);break t}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=j1("meta","content",u).get(o+(a.content||""))){for(N=0;N<M.length;N++)if(h=M[N],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(N,1);break t}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[cn]=t,se(h),o=h}t.stateNode=o}else X1(u,t.type,t.stateNode);else t.stateNode=G1(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?X1(u,t.type,t.stateNode):G1(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),a!==null&&o&4&&kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Vn(t),o&512&&(hn||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{Ni(u,"")}catch(je){Ht(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,kf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(Hn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){Ht(t,t.return,je)}}break;case 3:if(dc=null,u=bi,bi=uc(n.containerInfo),Hn(n,t),bi=u,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(je){Ht(t,t.return,je)}Gf&&(Gf=!1,X0(t));break;case 4:o=bi,bi=uc(t.stateNode.containerInfo),Hn(n,t),Vn(t),bi=o;break;case 12:Hn(n,t),Vn(t);break;case 31:Hn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Hn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,re=Ki,ve=hn;if(Ki=re||u,hn=ve||j,Hn(n,t),hn=ve,Ki=re,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||Ki||hn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(h=j.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{N=j.stateNode;var Se=j.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;N.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(je){Ht(j,j.return,je)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(je){Ht(j,j.return,je)}}}else if(n.tag===18){if(a===null){j=n;try{var he=j.stateNode;u?P1(he,!0):P1(j.stateNode,!1)}catch(je){Ht(j,j.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Hn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(I0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Hf(t);Zl(t,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ni(M,""),a.flags&=-33);var N=Hf(t);Zl(t,N,M);break;case 3:case 4:var j=a.stateNode.containerInfo,re=Hf(t);Vf(t,re,j);break;default:throw Error(r(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Sr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),Sr(n);break;case 27:Po(n.stateNode);case 26:case 5:Ui(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ji(u,h,a),Eo(4,h);break;case 1:if(Ji(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){Ht(o,o.return,re)}if(o=h,u=o.updateQueue,u!==null){var N=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)bm(j[u],N)}catch(re){Ht(o,o.return,re)}}a&&M&64&&U0(h),To(h,h.return);break;case 27:z0(h);case 26:case 5:Ji(u,h,a),a&&o===null&&M&4&&O0(h),To(h,h.return);break;case 12:Ji(u,h,a);break;case 31:Ji(u,h,a),a&&M&4&&V0(u,h);break;case 13:Ji(u,h,a),a&&M&4&&G0(u,h);break;case 22:h.memoizedState===null&&Ji(u,h,a),To(h,h.return);break;case 30:break;default:Ji(u,h,a)}n=n.sibling}}function jf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,a,o),n=n.sibling}function W0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Mi(t,n,a,o);break;case 3:Mi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Mi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,N=h.onPostCommit;typeof N=="function"&&N(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Ht(n,n.return,j)}}else Mi(t,n,a,o);break;case 31:Mi(t,n,a,o);break;case 13:Mi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(t,n,a,o):Ao(t,n):h._visibility&2?Mi(t,n,a,o):(h._visibility|=2,as(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jf(M,n);break;case 24:Mi(t,n,a,o),u&2048&&Xf(n.alternate,n);break;default:Mi(t,n,a,o)}}function as(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,M=n,N=a,j=o,re=M.flags;switch(M.tag){case 0:case 11:case 15:as(h,M,N,j,u),Eo(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?as(h,M,N,j,u):Ao(h,M):(ve._visibility|=2,as(h,M,N,j,u)),u&&re&2048&&jf(M.alternate,M);break;case 24:as(h,M,N,j,u),u&&re&2048&&Xf(M.alternate,M);break;default:as(h,M,N,j,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&jf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Xf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function rs(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&wo&&t.memoizedState!==null&&Ny(a,bi,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var o=bi;bi=uc(t.stateNode.containerInfo),rs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,rs(t,n,a),wo=o):rs(t,n,a));break;default:rs(t,n,a)}}function Y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,K0(o,t)}Y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Z0(t),t=t.sibling}function Z0(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Ro(t);break;default:Ro(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,K0(o,t)}Y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function K0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(k0(o),o===a){Mn=null;break e}if(u!==null){u.return=h,Mn=u;break e}Mn=h}}}var X_={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},W_=typeof WeakMap=="function"?WeakMap:Map,It=0,Yt=null,yt=null,bt=0,kt=0,ei=null,Ia=!1,ss=!1,Wf=!1,ea=0,nn=0,za=0,br=0,qf=0,ti=0,os=0,Co=null,Gn=null,Yf=!1,$l=0,Q0=0,Jl=1/0,ec=null,Ba=null,vn=0,Fa=null,ls=null,ta=0,Zf=0,Kf=null,$0=null,No=0,Qf=null;function ni(){return(It&2)!==0&&bt!==0?bt&-bt:I.T!==null?id():Ks()}function J0(){if(ti===0)if((bt&536870912)===0||wt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ti=t}else ti=536870912;return t=$n.current,t!==null&&(t.flags|=32),ti}function jn(t,n,a){(t===Yt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(cs(t,0),ka(t,bt,ti,!1)),Nn(t,a),((It&2)===0||t!==Yt)&&(t===Yt&&((It&2)===0&&(br|=a),nn===4&&ka(t,bt,ti,!1)),Pi(t))}function e1(t,n,a){if((It&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ve(t,n),u=o?Z_(t,n):Jf(t,n,!0),h=o;do{if(u===0){ss&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!q_(a)){u=Jf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var N=t;u=Co;var j=N.current.memoizedState.isDehydrated;if(j&&(cs(N,M).flags|=256),M=Jf(N,M,!1),M!==2){if(Wf&&!j){N.errorRecoveryDisabledLanes|=h,br|=h,u=4;break e}h=Gn,Gn=u,h!==null&&(Gn===null?Gn=h:Gn.push.apply(Gn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){cs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ti,!Ia);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=$l+300-A(),10<u)){if(ka(o,n,ti,!Ia),be(o,0,!0)!==0)break e;ta=n,o.timeoutHandle=D1(t1.bind(null,o,a,Gn,ec,Yf,n,ti,br,os,Ia,h,"Throttled",-0,0),u);break e}t1(o,a,Gn,ec,Yf,n,ti,br,os,Ia,h,null,-0,0)}}break}while(!0);Pi(t)}function t1(t,n,a,o,u,h,M,N,j,re,ve,Se,oe,he){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},q0(n,h,Se);var je=(h&62914560)===h?$l-A():(h&4194048)===h?Q0-A():0;if(je=Dy(Se,je),je!==null){ta=h,t.cancelPendingCommit=je(c1.bind(null,t,n,h,a,o,u,M,N,j,ve,Se,null,oe,he)),ka(t,h,M,!re);return}}c1(t,n,h,a,o,u,M,N,j)}function q_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Kn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~qf,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Xe(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&dl(t,a,n)}function tc(){return(It&6)===0?(Do(0),!1):!0}function $f(){if(yt!==null){if(kt===0)var t=yt.return;else t=yt,ji=hr=null,pf(t),Jr=null,ho=0,t=yt;for(;t!==null;)L0(t.alternate,t),t=t.return;yt=null}}function cs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,$f(),Yt=t,yt=a=Vi(t.current,null),bt=n,kt=0,ei=null,Ia=!1,ss=Ve(t,n),Wf=!1,os=ti=qf=br=za=nn=0,Gn=Co=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),h=1<<u;n|=t[u],o&=~h}return ea=n,bl(),a}function n1(t,n){dt=null,I.H=So,n===$r||n===Nl?(n=xm(),kt=3):n===tf?(n=xm(),kt=4):kt=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,yt===null&&(nn=1,jl(t,oi(n,t.current)))}function i1(){var t=$n.current;return t===null?!0:(bt&4194048)===bt?fi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===fi:!1}function a1(){var t=I.H;return I.H=So,t===null?So:t}function r1(){var t=I.A;return I.A=X_,t}function nc(){nn=4,Ia||(bt&4194048)!==bt&&$n.current!==null||(ss=!0),(za&134217727)===0&&(br&134217727)===0||Yt===null||ka(Yt,bt,ti,!1)}function Jf(t,n,a){var o=It;It|=2;var u=a1(),h=r1();(Yt!==t||bt!==n)&&(ec=null,cs(t,n)),n=!1;var M=nn;e:do try{if(kt!==0&&yt!==null){var N=yt,j=ei;switch(kt){case 8:$f(),M=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var re=kt;if(kt=0,ei=null,us(t,N,j,re),a&&ss){M=0;break e}break;default:re=kt,kt=0,ei=null,us(t,N,j,re)}}Y_(),M=nn;break}catch(ve){n1(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ji=hr=null,It=o,I.H=u,I.A=h,yt===null&&(Yt=null,bt=0,bl()),M}function Y_(){for(;yt!==null;)s1(yt)}function Z_(t,n){var a=It;It|=2;var o=a1(),u=r1();Yt!==t||bt!==n?(ec=null,Jl=A()+500,cs(t,n)):ss=Ve(t,n);e:do try{if(kt!==0&&yt!==null){n=yt;var h=ei;t:switch(kt){case 1:kt=0,ei=null,us(t,n,h,1);break;case 2:case 9:if(gm(h)){kt=0,ei=null,o1(n);break}n=function(){kt!==2&&kt!==9||Yt!==t||(kt=7),Pi(t)},h.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:gm(h)?(kt=0,ei=null,o1(n)):(kt=0,ei=null,us(t,n,h,7));break;case 5:var M=null;switch(yt.tag){case 26:M=yt.memoizedState;case 5:case 27:var N=yt;if(M?W1(M):N.stateNode.complete){kt=0,ei=null;var j=N.sibling;if(j!==null)yt=j;else{var re=N.return;re!==null?(yt=re,ic(re)):yt=null}break t}}kt=0,ei=null,us(t,n,h,5);break;case 6:kt=0,ei=null,us(t,n,h,6);break;case 8:$f(),nn=6;break e;default:throw Error(r(462))}}K_();break}catch(ve){n1(t,ve)}while(!0);return ji=hr=null,I.H=o,I.A=u,It=a,yt!==null?0:(Yt=null,bt=0,bl(),nn)}function K_(){for(;yt!==null&&!ot();)s1(yt)}function s1(t){var n=N0(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?ic(t):yt=n}function o1(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:pf(n);default:L0(a,n),n=yt=rm(n,ea),n=N0(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?ic(t):yt=n}function us(t,n,a,o){ji=hr=null,pf(n),Jr=null,ho=0;var u=n.return;try{if(B_(t,u,n,a,bt)){nn=1,jl(t,oi(a,t.current)),yt=null;return}}catch(h){if(u!==null)throw yt=u,h;nn=1,jl(t,oi(a,t.current)),yt=null;return}n.flags&32768?(wt||o===1?t=!0:ss||(bt&536870912)!==0?t=!1:(Ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),l1(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){l1(n,Ia);return}t=n.return;var a=H_(n.alternate,n,ea);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);nn===0&&(nn=5)}function l1(t,n){do{var a=V_(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);nn=6,yt=null}function c1(t,n,a,o,u,h,M,N,j){t.cancelPendingCommit=null;do ac();while(vn!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=ku,Yn(t,a,h,M,N,j),t===Yt&&(yt=Yt=null,bt=0),ls=n,Fa=t,ta=a,Zf=h,Kf=u,$0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ey(me,function(){return p1(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=F.p,F.p=2,M=It,It|=4;try{G_(t,n,a)}finally{It=M,F.p=u,I.T=o}}vn=1,u1(),f1(),d1()}}function u1(){if(vn===1){vn=0;var t=Fa,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=It;It|=4;try{j0(n,t);var h=fd,M=Kp(t.containerInfo),N=h.focusedElem,j=h.selectionRange;if(M!==N&&N&&N.ownerDocument&&Zp(N.ownerDocument.documentElement,N)){if(j!==null&&Ou(N)){var re=j.start,ve=j.end;if(ve===void 0&&(ve=re),"selectionStart"in N)N.selectionStart=re,N.selectionEnd=Math.min(ve,N.value.length);else{var Se=N.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var he=oe.getSelection(),je=N.textContent.length,at=Math.min(j.start,je),Xt=j.end===void 0?at:Math.min(j.end,je);!he.extend&&at>Xt&&(M=Xt,Xt=at,at=M);var $=Yp(N,at),Y=Yp(N,Xt);if($&&Y&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==Y.node||he.focusOffset!==Y.offset)){var ie=Se.createRange();ie.setStart($.node,$.offset),he.removeAllRanges(),at>Xt?(he.addRange(ie),he.extend(Y.node,Y.offset)):(ie.setEnd(Y.node,Y.offset),he.addRange(ie))}}}}for(Se=[],he=N;he=he.parentNode;)he.nodeType===1&&Se.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Se.length;N++){var xe=Se[N];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}gc=!!ud,fd=ud=null}finally{It=u,F.p=o,I.T=a}}t.current=n,vn=2}}function f1(){if(vn===2){vn=0;var t=Fa,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=It;It|=4;try{F0(t,n.alternate,n)}finally{It=u,F.p=o,I.T=a}}vn=3}}function d1(){if(vn===4||vn===3){vn=0,B();var t=Fa,n=ls,a=ta,o=$0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,ls=Fa=null,h1(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),rr(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=F.p,F.p=2,I.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var N=o[M];h(N.value,{componentStack:N.stack})}}finally{I.T=n,F.p=u}}(ta&3)!==0&&ac(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qf?No++:(No=0,Qf=t):No=0,Do(0)}}function h1(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function ac(){return u1(),f1(),d1(),p1()}function p1(){if(vn!==5)return!1;var t=Fa,n=Zf;Zf=0;var a=rr(ta),o=I.T,u=F.p;try{F.p=32>a?32:a,I.T=null,a=Kf,Kf=null;var h=Fa,M=ta;if(vn=0,ls=Fa=null,ta=0,(It&6)!==0)throw Error(r(331));var N=It;if(It|=4,Z0(h.current),W0(h,h.current,M,a),It=N,Do(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,h)}catch{}return!0}finally{F.p=u,I.T=o,h1(t,n)}}function m1(t,n,a){n=oi(a,n),n=Cf(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Nn(t,2),Pi(t))}function Ht(t,n,a){if(t.tag===3)m1(t,t,a);else for(;n!==null;){if(n.tag===3){m1(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){t=oi(a,t),a=g0(2),o=La(n,a,2),o!==null&&(v0(a,o,n,t),Nn(o,2),Pi(o));break}}n=n.return}}function ed(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new W_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Wf=!0,u.add(a),t=Q_.bind(null,t,n,a),n.then(t,t))}function Q_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(bt&a)===a&&(nn===4||nn===3&&(bt&62914560)===bt&&300>A()-$l?(It&2)===0&&cs(t,0):qf|=a,os===bt&&(os=0)),Pi(t)}function g1(t,n){n===0&&(n=Vt()),t=ur(t,n),t!==null&&(Nn(t,n),Pi(t))}function $_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),g1(t,a)}function J_(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),g1(t,a)}function ey(t,n){return Bt(t,n)}var rc=null,fs=null,td=!1,sc=!1,nd=!1,Ha=0;function Pi(t){t!==fs&&t.next===null&&(fs===null?rc=fs=t:fs=fs.next=t),sc=!0,td||(td=!0,ny())}function Do(t,n){if(!nd&&sc){nd=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,N=o.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=u&~(M&~N),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,y1(o,h))}else h=bt,h=be(o,o===Yt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ve(o,h)||(a=!0,y1(o,h));o=o.next}while(a);nd=!1}}function ty(){v1()}function v1(){sc=td=!1;var t=0;Ha!==0&&dy()&&(t=Ha);for(var n=A(),a=null,o=rc;o!==null;){var u=o.next,h=x1(o,n);h===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(fs=a)):(a=o,(t!==0||(h&3)!==0)&&(sc=!0)),o=u}vn!==0&&vn!==5||Do(t),Ha!==0&&(Ha=0)}function x1(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Xe(h),N=1<<M,j=u[M];j===-1?((N&a)===0||(N&o)!==0)&&(u[M]=lt(N,n)):j<=n&&(t.expiredLanes|=N),h&=~N}if(n=Yt,a=bt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ve(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),rr(a)){case 2:case 8:a=Ee;break;case 32:a=me;break;case 268435456:a=Ie;break;default:a=me}return o=_1.bind(null,t),a=Bt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function _1(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=bt;return o=be(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(e1(t,o,n),x1(t,A()),t.callbackNode!=null&&t.callbackNode===a?_1.bind(null,t):null)}function y1(t,n){if(ac())return null;e1(t,n,!0)}function ny(){py(function(){(It&6)!==0?Bt(ye,ty):v1()})}function id(){if(Ha===0){var t=Kr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Ha=t}return Ha}function S1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function b1(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=S1((u[mn]||null).action),M=o.submitter;M&&(n=(n=M[mn]||null)?S1(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var N=new xl("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var j=M?b1(u,M):new FormData(u);Mf(a,{pending:!0,data:j,method:u.method,action:h},null,j)}}else typeof h=="function"&&(N.preventDefault(),j=M?b1(u,M):new FormData(u),Mf(a,{pending:!0,data:j,method:u.method,action:h},h,j))},currentTarget:u}]})}}for(var ad=0;ad<Fu.length;ad++){var rd=Fu[ad],ay=rd.toLowerCase(),ry=rd[0].toUpperCase()+rd.slice(1);Si(ay,"on"+ry)}Si(Jp,"onAnimationEnd"),Si(em,"onAnimationIteration"),Si(tm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(S_,"onTransitionRun"),Si(b_,"onTransitionStart"),Si(M_,"onTransitionCancel"),Si(nm,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function M1(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var N=o[M],j=N.instance,re=N.currentTarget;if(N=N.listener,j!==h&&u.isPropagationStopped())break e;h=N,u.currentTarget=re;try{h(u)}catch(ve){Sl(ve)}u.currentTarget=null,h=j}else for(M=0;M<o.length;M++){if(N=o[M],j=N.instance,re=N.currentTarget,N=N.listener,j!==h&&u.isPropagationStopped())break e;h=N,u.currentTarget=re;try{h(u)}catch(ve){Sl(ve)}u.currentTarget=null,h=j}}}}function St(t,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var o=t+"__bubble";a.has(o)||(E1(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),E1(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function od(t){if(!t[oc]){t[oc]=!0,ee.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,sd("selectionchange",!1,n))}}function E1(t,n,a,o){switch(J1(n)){case 2:var u=Py;break;case 8:u=Oy;break;default:u=bd}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ld(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var N=o.stateNode.containerInfo;if(N===u)break;if(M===4)for(M=o.return;M!==null;){var j=M.tag;if((j===3||j===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;N!==null;){if(M=Ma(N),M===null)return;if(j=M.tag,j===5||j===6||j===26||j===27){o=h=M;continue e}N=N.parentNode}}o=o.return}Cp(function(){var re=h,ve=Eu(a),Se=[];e:{var oe=im.get(t);if(oe!==void 0){var he=xl,je=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":he=Jx;break;case"focusin":je="focus",he=Nu;break;case"focusout":je="blur",he=Nu;break;case"beforeblur":case"afterblur":he=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=n_;break;case Jp:case em:case tm:he=jx;break;case nm:he=a_;break;case"scroll":case"scrollend":he=Fx;break;case"wheel":he=s_;break;case"copy":case"cut":case"paste":he=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Pp;break;case"toggle":case"beforetoggle":he=l_}var at=(n&4)!==0,Xt=!at&&(t==="scroll"||t==="scrollend"),$=at?oe!==null?oe+"Capture":null:oe;at=[];for(var Y=re,ie;Y!==null;){var xe=Y;if(ie=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ie===null||$===null||(xe=Js(Y,$),xe!=null&&at.push(Uo(Y,xe,ie))),Xt)break;Y=Y.return}0<at.length&&(oe=new he(oe,je,null,a,ve),Se.push({event:oe,listeners:at}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",oe&&a!==Mu&&(je=a.relatedTarget||a.fromElement)&&(Ma(je)||je[zi]))break e;if((he||oe)&&(oe=ve.window===ve?ve:(oe=ve.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(je=a.relatedTarget||a.toElement,he=re,je=je?Ma(je):null,je!==null&&(Xt=c(je),at=je.tag,je!==Xt||at!==5&&at!==27&&at!==6)&&(je=null)):(he=null,je=re),he!==je)){if(at=Lp,xe="onMouseLeave",$="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(at=Pp,xe="onPointerLeave",$="onPointerEnter",Y="pointer"),Xt=he==null?oe:Q(he),ie=je==null?oe:Q(je),oe=new at(xe,Y+"leave",he,a,ve),oe.target=Xt,oe.relatedTarget=ie,xe=null,Ma(ve)===re&&(at=new at($,Y+"enter",je,a,ve),at.target=ie,at.relatedTarget=Xt,xe=at),Xt=xe,he&&je)t:{for(at=oy,$=he,Y=je,ie=0,xe=$;xe;xe=at(xe))ie++;xe=0;for(var Je=Y;Je;Je=at(Je))xe++;for(;0<ie-xe;)$=at($),ie--;for(;0<xe-ie;)Y=at(Y),xe--;for(;ie--;){if($===Y||Y!==null&&$===Y.alternate){at=$;break t}$=at($),Y=at(Y)}at=null}else at=null;he!==null&&T1(Se,oe,he,at,!1),je!==null&&Xt!==null&&T1(Se,Xt,je,at,!0)}}e:{if(oe=re?Q(re):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var Dt=Vp;else if(kp(oe))if(Gp)Dt=x_;else{Dt=g_;var We=m_}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?re&&bu(re.elementType)&&(Dt=Vp):Dt=v_;if(Dt&&(Dt=Dt(t,re))){Hp(Se,Dt,a,ve);break e}We&&We(t,oe,re),t==="focusout"&&re&&oe.type==="number"&&re.memoizedProps.value!=null&&Sn(oe,"number",oe.value)}switch(We=re?Q(re):window,t){case"focusin":(kp(We)||We.contentEditable==="true")&&(Vr=We,Iu=re,oo=null);break;case"focusout":oo=Iu=Vr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Qp(Se,a,ve);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":Qp(Se,a,ve)}var pt;if(Lu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Hr?Bp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Op&&a.locale!=="ko"&&(Hr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Hr&&(pt=Np()):(Ta=ve,wu="value"in Ta?Ta.value:Ta.textContent,Hr=!0)),We=lc(re,Mt),0<We.length&&(Mt=new Up(Mt,t,null,a,ve),Se.push({event:Mt,listeners:We}),pt?Mt.data=pt:(pt=Fp(a),pt!==null&&(Mt.data=pt)))),(pt=u_?f_(t,a):d_(t,a))&&(Mt=lc(re,"onBeforeInput"),0<Mt.length&&(We=new Up("onBeforeInput","beforeinput",null,a,ve),Se.push({event:We,listeners:Mt}),We.data=pt)),iy(Se,t,re,a,ve)}M1(Se,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Js(t,a),u!=null&&o.unshift(Uo(t,u,h)),u=Js(t,n),u!=null&&o.push(Uo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T1(t,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var N=a,j=N.alternate,re=N.stateNode;if(N=N.tag,j!==null&&j===o)break;N!==5&&N!==26&&N!==27||re===null||(j=re,u?(re=Js(a,h),re!=null&&M.unshift(Uo(a,re,j))):u||(re=Js(a,h),re!=null&&M.push(Uo(a,re,j)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function A1(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function w1(t,n){return n=A1(n),A1(t)===n}function jt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(t,""+o);break;case"className":Rt(t,"class",o);break;case"tabIndex":Rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(t,a,o);break;case"style":wp(t,o,h);break;case"data":if(n!=="object"){Rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zx.get(a)||a,ht(t,a,o))}}function cd(t,n,a,o,u,h){switch(a){case"style":wp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&Ni(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,h,M,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),o&&jt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var N=h=M=u=null,j=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":M=ve;break;case"checked":j=ve;break;case"defaultChecked":re=ve;break;case"value":h=ve;break;case"defaultValue":N=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:jt(t,n,o,ve,a,null)}}Kt(t,h,N,j,re,M,u,!1);return;case"select":St("invalid",t),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":h=N;break;case"defaultValue":M=N;break;case"multiple":o=N;default:jt(t,n,u,N,a,null)}n=h,a=M,t.multiple=!!o,n!=null?gn(t,!!o,n,!1):a!=null&&gn(t,!!o,a,!0);return;case"textarea":St("invalid",t),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(N=a[M],N!=null))switch(M){case"value":o=N;break;case"defaultValue":u=N;break;case"children":h=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:jt(t,n,M,N,a,null)}Tn(t,o,u,h);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:jt(t,n,j,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)St(Lo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,re,o,a,null)}return;default:if(bu(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&cd(t,n,ve,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&jt(t,n,N,o,a,null))}function uy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,N=null,j=null,re=null,ve=null;for(he in a){var Se=a[he];if(a.hasOwnProperty(he)&&Se!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":j=Se;default:o.hasOwnProperty(he)||jt(t,n,he,null,o,Se)}}for(var oe in o){var he=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(he!=null||Se!=null))switch(oe){case"type":h=he;break;case"name":u=he;break;case"checked":re=he;break;case"defaultChecked":ve=he;break;case"value":M=he;break;case"defaultValue":N=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Se&&jt(t,n,oe,he,o,Se)}}Bi(t,M,N,j,re,ve,h,u);return;case"select":he=M=N=oe=null;for(h in a)if(j=a[h],a.hasOwnProperty(h)&&j!=null)switch(h){case"value":break;case"multiple":he=j;default:o.hasOwnProperty(h)||jt(t,n,h,null,o,j)}for(u in o)if(h=o[u],j=a[u],o.hasOwnProperty(u)&&(h!=null||j!=null))switch(u){case"value":oe=h;break;case"defaultValue":N=h;break;case"multiple":M=h;default:h!==j&&jt(t,n,u,h,o,j)}n=N,a=M,o=he,oe!=null?gn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:jt(t,n,N,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":oe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&jt(t,n,M,u,o,h)}bn(t,oe,he);return;case"option":for(var je in a)if(oe=a[je],a.hasOwnProperty(je)&&oe!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:jt(t,n,je,null,o,oe)}for(j in o)if(oe=o[j],he=a[j],o.hasOwnProperty(j)&&oe!==he&&(oe!=null||he!=null))switch(j){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:jt(t,n,j,oe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)oe=a[at],a.hasOwnProperty(at)&&oe!=null&&!o.hasOwnProperty(at)&&jt(t,n,at,null,o,oe);for(re in o)if(oe=o[re],he=a[re],o.hasOwnProperty(re)&&oe!==he&&(oe!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:jt(t,n,re,oe,o,he)}return;default:if(bu(n)){for(var Xt in a)oe=a[Xt],a.hasOwnProperty(Xt)&&oe!==void 0&&!o.hasOwnProperty(Xt)&&cd(t,n,Xt,void 0,o,oe);for(ve in o)oe=o[ve],he=a[ve],!o.hasOwnProperty(ve)||oe===he||oe===void 0&&he===void 0||cd(t,n,ve,oe,o,he);return}}for(var $ in a)oe=a[$],a.hasOwnProperty($)&&oe!=null&&!o.hasOwnProperty($)&&jt(t,n,$,null,o,oe);for(Se in o)oe=o[Se],he=a[Se],!o.hasOwnProperty(Se)||oe===he||oe==null&&he==null||jt(t,n,Se,oe,o,he)}function R1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,N=u.duration;if(h&&N&&R1(M)){for(M=0,N=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],re=j.startTime;if(re>N)break;var ve=j.transferSize,Se=j.initiatorType;ve&&R1(Se)&&(j=j.responseEnd,M+=ve*(j<N?1:(N-re)/(j-re)))}if(--o,n+=8*(h+M)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,fd=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function C1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N1(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function dy(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var D1=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,L1=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof L1<"u"?function(t){return L1.resolve(null).then(t).catch(my)}:D1;function my(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function U1(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ms(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var h=a.firstChild;h;){var M=h.nextSibling,N=h.nodeName;h[sr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);ms(n)}function P1(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function vy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function O1(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$?"||t.data==="$~"}function gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function I1(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function z1(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function B1(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$s(t)}var hi=new Map,F1=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=F.d;F.d={f:_y,r:yy,D:Sy,C:by,L:My,m:Ey,X:Ay,S:Ty,M:wy};function _y(){var t=na.f(),n=tc();return t||n}function yy(t){var n=L(t);n!==null&&n.tag===5&&n.type==="form"?n0(n):na.r(t)}var ds=typeof document>"u"?null:document;function k1(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F1.has(u)||(F1.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function Sy(t){na.D(t),k1("dns-prefetch",t,null)}function by(t,n){na.C(t,n),k1("preconnect",t,n)}function My(t,n,a){na.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var h=u;switch(n){case"style":h=hs(t);break;case"script":h=ps(t)}hi.has(h)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(h))||n==="script"&&o.querySelector(Io(h))||(n=o.createElement("link"),Cn(n,"link",t),se(n),o.head.appendChild(n)))}}function Ey(t,n){na.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ps(t)}if(!hi.has(h)&&(t=v({rel:"modulepreload",href:t},n),hi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(h)))return}o=a.createElement("link"),Cn(o,"link",t),se(o),a.head.appendChild(o)}}}function Ty(t,n,a){na.S(t,n,a);var o=ds;if(o&&t){var u=ue(o).hoistableStyles,h=hs(t);n=n||"default";var M=u.get(h);if(!M){var N={loading:0,preload:null};if(M=o.querySelector(Oo(h)))N.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(h))&&xd(t,a);var j=M=o.createElement("link");se(j),Cn(j,"link",t),j._p=new Promise(function(re,ve){j.onload=re,j.onerror=ve}),j.addEventListener("load",function(){N.loading|=1}),j.addEventListener("error",function(){N.loading|=2}),N.loading|=4,fc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:N},u.set(h,M)}}}function Ay(t,n){na.X(t,n);var a=ds;if(a&&t){var o=ue(a).hoistableScripts,u=ps(t),h=o.get(u);h||(h=a.querySelector(Io(u)),h||(t=v({src:t,async:!0},n),(n=hi.get(u))&&_d(t,n),h=a.createElement("script"),se(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function wy(t,n){na.M(t,n);var a=ds;if(a&&t){var o=ue(a).hoistableScripts,u=ps(t),h=o.get(u);h||(h=a.querySelector(Io(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&_d(t,n),h=a.createElement("script"),se(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function H1(t,n,a,o){var u=(u=te.current)?uc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ue(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var h=ue(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(Oo(t)))&&!h._p&&(M.instance=h,M.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),h||Ry(u,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ue(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+Zt(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function V1(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),se(n),t.head.appendChild(n))}function ps(t){return'[src="'+Zt(t)+'"]'}function Io(t){return"script[async]"+t}function G1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,se(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),se(o),Cn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var h=t.querySelector(Oo(u));if(h)return n.state.loading|=4,n.instance=h,se(h),h;o=V1(a),(u=hi.get(u))&&xd(o,u),h=(t.ownerDocument||t).createElement("link"),se(h);var M=h;return M._p=new Promise(function(N,j){M.onload=N,M.onerror=j}),Cn(h,"link",o),n.state.loading|=4,fc(h,a.precedence,t),n.instance=h;case"script":return h=ps(a.src),(u=t.querySelector(Io(h)))?(n.instance=u,se(u),u):(o=a,(u=hi.get(h))&&(o=v({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var N=o[M];if(N.dataset.precedence===n)h=N;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function j1(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[sr]||h[cn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var N=o.get(M);N?N.push(h):o.set(M,[h])}}return o}function X1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ny(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(o.href),h=n.querySelector(Oo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,se(h);return}h=n.ownerDocument||n,o=V1(o),(u=hi.get(u))&&xd(o,u),h=h.createElement("link"),se(h);var M=h;M._p=new Promise(function(N,j){M.onload=N,M.onerror=j}),Cn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function Dy(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(Ly,t),pc=null,hc.call(t))}function Ly(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:C,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Uy(t,n,a,o,u,h,M,N,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function q1(t,n,a,o,u,h,M,N,j,re,ve,Se){return t=new Uy(t,n,a,M,j,re,ve,Se,N),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),t.current=h,h.stateNode=t,n=$u(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),t}function Y1(t){return t?(t=Xr,t):Xr}function Z1(t,n,a,o,u,h){u=Y1(u),o.context===null?o.context=u:o.pendingContext=u,o=Da(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=La(t,o,n),a!==null&&(jn(a,t,n),mo(a,t,n))}function K1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sd(t,n){K1(t,n),(t=t.alternate)&&K1(t,n)}function Q1(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&jn(n,t,67108864),Sd(t,67108864)}}function $1(t){if(t.tag===13||t.tag===31){var n=ni();n=yi(n);var a=ur(t,n);a!==null&&jn(a,t,n),Sd(t,n)}}var gc=!0;function Py(t,n,a,o){var u=I.T;I.T=null;var h=F.p;try{F.p=2,bd(t,n,a,o)}finally{F.p=h,I.T=u}}function Oy(t,n,a,o){var u=I.T;I.T=null;var h=F.p;try{F.p=8,bd(t,n,a,o)}finally{F.p=h,I.T=u}}function bd(t,n,a,o){if(gc){var u=Md(o);if(u===null)ld(t,n,o,vc,a),eg(t,o);else if(zy(u,t,n,a,o))o.stopPropagation();else if(eg(t,o),n&4&&-1<Iy.indexOf(t)){for(;u!==null;){var h=L(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=we(h.pendingLanes);if(M!==0){var N=h;for(N.pendingLanes|=2,N.entangledLanes|=2;M;){var j=1<<31-Xe(M);N.entanglements[1]|=j,M&=~j}Pi(h),(It&6)===0&&(Jl=A()+500,Do(0))}}break;case 31:case 13:N=ur(h,2),N!==null&&jn(N,h,2),tc(),Sd(h,2)}if(h=Md(o),h===null&&ld(t,n,o,vc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ld(t,n,o,null,a)}}function Md(t){return t=Eu(t),Ed(t)}var vc=null;function Ed(t){if(vc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function J1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case ye:return 2;case Ee:return 8;case me:case Ke:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Td=!1,Ga=null,ja=null,Xa=null,Bo=new Map,Fo=new Map,Wa=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function ko(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=L(n),n!==null&&Q1(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zy(t,n,a,o,u){switch(n){case"focusin":return Ga=ko(Ga,t,n,a,o,u),!0;case"dragenter":return ja=ko(ja,t,n,a,o,u),!0;case"mouseover":return Xa=ko(Xa,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Bo.set(h,ko(Bo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Fo.set(h,ko(Fo.get(h)||null,t,n,a,o,u)),!0}return!1}function tg(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){$1(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){$1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Mu=o,a.target.dispatchEvent(o),Mu=null}else return n=L(a),n!==null&&Q1(n),t.blockedOn=a,!1;n.shift()}return!0}function ng(t,n,a){xc(t)&&a.delete(n)}function By(){Td=!1,Ga!==null&&xc(Ga)&&(Ga=null),ja!==null&&xc(ja)&&(ja=null),Xa!==null&&xc(Xa)&&(Xa=null),Bo.forEach(ng),Fo.forEach(ng)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,Td||(Td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,By)))}var yc=null;function ig(t){yc!==t&&(yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var h=L(a);h!==null&&(t.splice(n,3),n-=3,Mf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ms(t){function n(j){return _c(j,t)}Ga!==null&&_c(Ga,t),ja!==null&&_c(ja,t),Xa!==null&&_c(Xa,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)tg(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[mn]||null;if(typeof h=="function")M||ig(a);else if(M){var N=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[mn]||null)N=M.formAction;else if(Ed(u)!==null)continue}else N=M.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),ig(a)}}}function ag(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(t){this._internalRoot=t}Sc.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Z1(a,o,t,n,null,null)},Sc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Z1(t.current,2,null,t,null,null),tc(),n[zi]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&tg(t)}};var rg=e.version;if(rg!=="19.2.1")throw Error(r(527,rg,"19.2.1"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Te=bc.inject(Fy),Re=bc}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=d0,h=h0,M=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=q1(t,1,!1,null,null,a,o,null,u,h,M,ag),t[zi]=n.current,od(t),new Ad(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",h=d0,M=h0,N=p0,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=q1(t,1,!0,n,a??null,o,u,j,h,M,N,ag),n.context=Y1(null),a=n.current,o=ni(),o=yi(o),u=Da(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Pi(n),t[zi]=n.current,od(t),new Sc(n)},Vo.version="19.2.1",Vo}var mg;function Qy(){if(mg)return Cd.exports;mg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cd.exports=Ky(),Cd.exports}var $y=Qy();var gg="popstate";function Jy(s={}){function e(l,c){let{pathname:f="/",search:d="",hash:m=""}=Ir(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),dh("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof c=="string"?c:$o(c))}function r(l,c){_i(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return tS(e,i,r,s)}function en(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function _i(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eS(){return Math.random().toString(36).substring(2,10)}function vg(s,e){return{usr:s.state,key:s.key,idx:e}}function dh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ir(e):e,state:i,key:e&&e.key||r||eS()}}function $o({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ir(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function tS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function v(){d="POP";let b=x(),y=b==null?null:b-p;p=b,m&&m({action:d,location:T.location,delta:y})}function _(b,y){d="PUSH";let w=dh(T.location,b,y);i&&i(w,b),p=x()+1;let C=vg(w,p),U=T.createHref(w);try{f.pushState(C,"",U)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(U)}c&&m&&m({action:d,location:T.location,delta:1})}function S(b,y){d="REPLACE";let w=dh(T.location,b,y);i&&i(w,b),p=x();let C=vg(w,p),U=T.createHref(w);f.replaceState(C,"",U),c&&m&&m({action:d,location:T.location,delta:0})}function E(b){return nS(b)}let T={get action(){return d},get location(){return s(l,f)},listen(b){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(gg,v),m=b,()=>{l.removeEventListener(gg,v),m=null}},createHref(b){return e(l,b)},createURL:E,encodeLocation(b){let y=E(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:S,go(b){return f.go(b)}};return T}function nS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:$o(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Bv(s,e,i="/"){return iS(s,e,i,!1)}function iS(s,e,i,r){let l=typeof e=="string"?Ir(e):e,c=xa(l.pathname||"/",i);if(c==null)return null;let f=Fv(s);aS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=mS(c);d=hS(f[m],p,r)}return d}function Fv(s,e=[],i=[],r="",l=!1){let c=(f,d,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;en(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let v=ma([r,x.relativePath]),_=i.concat(x);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Fv(f.children,e,_,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:fS(v,f.index),routesMeta:_})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of kv(f.path))c(f,d,!0,m)}),e}function kv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=kv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function aS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:dS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var rS=/^:[\w-]+$/,sS=3,oS=2,lS=1,cS=10,uS=-2,xg=s=>s==="*";function fS(s,e){let i=s.split("/"),r=i.length;return i.some(xg)&&(r+=uS),e&&(r+=oS),i.filter(l=>!xg(l)).reduce((l,c)=>l+(rS.test(c)?sS:c===""?lS:cS),r)}function dS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function hS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),_=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ma([c,v.pathname]),pathnameBase:yS(ma([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=ma([c,v.pathnameBase]))}return f}function lu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=pS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:v},_)=>{if(x==="*"){let E=d[_]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[_];return v&&!S?p[x]=void 0:p[x]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function pS(s,e=!1,i=!0){_i(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function mS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function xa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vS=s=>gS.test(s);function xS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ir(s):s,c;if(i)if(vS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),_i(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=_g(i.substring(1),"/"):c=_g(i,e)}else c=e;return{pathname:c,search:SS(r),hash:bS(l)}}function _g(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ud(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _S(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Hv(s){let e=_S(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Vv(s,e,i,r=!1){let l;typeof s=="string"?l=Ir(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),Ud("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),Ud("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),Ud("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}d=v>=0?e[v]:"/"}let m=xS(l,d),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var ma=s=>s.join("/").replace(/\/\/+/g,"/"),yS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),SS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,bS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function MS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function ES(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gv=["POST","PUT","PATCH","DELETE"];new Set(Gv);var TS=["GET",...Gv];new Set(TS);var Hs=V.createContext(null);Hs.displayName="DataRouter";var pu=V.createContext(null);pu.displayName="DataRouterState";V.createContext(!1);var jv=V.createContext({isTransitioning:!1});jv.displayName="ViewTransition";var AS=V.createContext(new Map);AS.displayName="Fetchers";var wS=V.createContext(null);wS.displayName="Await";var Ci=V.createContext(null);Ci.displayName="Navigation";var sl=V.createContext(null);sl.displayName="Location";var ba=V.createContext({outlet:null,matches:[],isDataRoute:!1});ba.displayName="Route";var op=V.createContext(null);op.displayName="RouteError";function RS(s,{relative:e}={}){en(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=V.useContext(Ci),{hash:l,pathname:c,search:f}=ll(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ma([i,c])),r.createHref({pathname:d,search:f,hash:l})}function ol(){return V.useContext(sl)!=null}function zr(){return en(ol(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(sl).location}var Xv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wv(s){V.useContext(Ci).static||V.useLayoutEffect(s)}function qv(){let{isDataRoute:s}=V.useContext(ba);return s?HS():CS()}function CS(){en(ol(),"useNavigate() may be used only in the context of a <Router> component.");let s=V.useContext(Hs),{basename:e,navigator:i}=V.useContext(Ci),{matches:r}=V.useContext(ba),{pathname:l}=zr(),c=JSON.stringify(Hv(r)),f=V.useRef(!1);return Wv(()=>{f.current=!0}),V.useCallback((m,p={})=>{if(_i(f.current,Xv),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=Vv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:ma([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,s])}V.createContext(null);function ll(s,{relative:e}={}){let{matches:i}=V.useContext(ba),{pathname:r}=zr(),l=JSON.stringify(Hv(i));return V.useMemo(()=>Vv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function NS(s,e){return Yv(s,e)}function Yv(s,e,i,r,l){en(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=V.useContext(Ci),{matches:f}=V.useContext(ba),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",x=d?d.pathnameBase:"/",v=d&&d.route;{let w=v&&v.path||"";Zv(p,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let _=zr(),S;if(e){let w=typeof e=="string"?Ir(e):e;en(x==="/"||w.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${w.pathname}" was given in the \`location\` prop.`),S=w}else S=_;let E=S.pathname||"/",T=E;if(x!=="/"){let w=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=Bv(s,{pathname:T});_i(v||b!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),_i(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=OS(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:ma([x,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?x:ma([x,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&y?V.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},y):y}function DS(){let s=kS(),e=MS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:c},"ErrorBoundary")," or"," ",V.createElement("code",{style:c},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),i?V.createElement("pre",{style:l},i):null,f)}var LS=V.createElement(DS,null),US=class extends V.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?V.createElement(ba.Provider,{value:this.props.routeContext},V.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PS({routeContext:s,match:e,children:i}){let r=V.useContext(Hs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(ba.Provider,{value:s},i)}function OS(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let x=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);en(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let d=!1,m=-1;if(i)for(let x=0;x<c.length;x++){let v=c[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=x),v.route.id){let{loaderData:_,errors:S}=i,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(x,v)=>{r(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:ES(i.matches),errorInfo:v})}:void 0;return c.reduceRight((x,v,_)=>{let S,E=!1,T=null,b=null;i&&(S=f&&v.route.id?f[v.route.id]:void 0,T=v.route.errorElement||LS,d&&(m<0&&_===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,b=null):m===_&&(E=!0,b=v.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,_+1)),w=()=>{let C;return S?C=T:E?C=b:v.route.Component?C=V.createElement(v.route.Component,null):v.route.element?C=v.route.element:C=x,V.createElement(PS,{match:v,routeContext:{outlet:x,matches:y,isDataRoute:i!=null},children:C})};return i&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?V.createElement(US,{location:i.location,revalidation:i.revalidation,component:T,error:S,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):w()},null)}function lp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IS(s){let e=V.useContext(Hs);return en(e,lp(s)),e}function zS(s){let e=V.useContext(pu);return en(e,lp(s)),e}function BS(s){let e=V.useContext(ba);return en(e,lp(s)),e}function cp(s){let e=BS(s),i=e.matches[e.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function FS(){return cp("useRouteId")}function kS(){let s=V.useContext(op),e=zS("useRouteError"),i=cp("useRouteError");return s!==void 0?s:e.errors?.[i]}function HS(){let{router:s}=IS("useNavigate"),e=cp("useNavigate"),i=V.useRef(!1);return Wv(()=>{i.current=!0}),V.useCallback(async(l,c={})=>{_i(i.current,Xv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var yg={};function Zv(s,e,i){!e&&!yg[s]&&(yg[s]=!0,_i(!1,i))}V.memo(VS);function VS({routes:s,future:e,state:i,unstable_onError:r}){return Yv(s,void 0,i,r,e)}function ua(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function GS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=V.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Ir(i));let{pathname:p="/",search:x="",hash:v="",state:_=null,key:S="default"}=i,E=V.useMemo(()=>{let T=xa(p,d);return T==null?null:{location:{pathname:T,search:x,hash:v,state:_,key:S},navigationType:r}},[d,p,x,v,_,S,r]);return _i(E!=null,`<Router basename="${d}"> is not able to match the URL "${p}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:V.createElement(Ci.Provider,{value:m},V.createElement(sl.Provider,{children:e,value:E}))}function jS({children:s,location:e}){return NS(hh(s),e)}function hh(s,e=[]){let i=[];return V.Children.forEach(s,(r,l)=>{if(!V.isValidElement(r))return;let c=[...e,l];if(r.type===V.Fragment){i.push.apply(i,hh(r.props.children,c));return}en(r.type===ua,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=hh(r.props.children,c)),i.push(f)}),i}var eu="get",tu="application/x-www-form-urlencoded";function mu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function XS(s){return mu(s)&&s.tagName.toLowerCase()==="button"}function WS(s){return mu(s)&&s.tagName.toLowerCase()==="form"}function qS(s){return mu(s)&&s.tagName.toLowerCase()==="input"}function YS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ZS(s,e){return s.button===0&&(!e||e==="_self")&&!YS(s)}var Mc=null;function KS(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var QS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(s){return s!=null&&!QS.has(s)?(_i(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):s}function $S(s,e){let i,r,l,c,f;if(WS(s)){let d=s.getAttribute("action");r=d?xa(d,e):null,i=s.getAttribute("method")||eu,l=Pd(s.getAttribute("enctype"))||tu,c=new FormData(s)}else if(XS(s)||qS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?xa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||eu,l=Pd(s.getAttribute("formenctype"))||Pd(d.getAttribute("enctype"))||tu,c=new FormData(d,s),!KS()){let{name:p,type:x,value:v}=s;if(x==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,v)}}else{if(mu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,r=null,l=tu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function up(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function JS(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&xa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function eb(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function nb(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await eb(c,i);return f.links?f.links():[]}return[]}));return sb(r.flat(1).filter(tb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Sg(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function ib(s,e,{includeHydrateFallback:i}={}){return ab(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function ab(s){return[...new Set(s)]}function rb(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function sb(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(rb(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Kv(){let s=V.useContext(Hs);return up(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ob(){let s=V.useContext(pu);return up(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var fp=V.createContext(void 0);fp.displayName="FrameworkContext";function Qv(){let s=V.useContext(fp);return up(s,"You must render this element inside a <HydratedRouter> element"),s}function lb(s,e){let i=V.useContext(fp),[r,l]=V.useState(!1),[c,f]=V.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:v}=e,_=V.useRef(null);V.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=y=>{y.forEach(w=>{f(w.isIntersecting)})},b=new IntersectionObserver(T,{threshold:.5});return _.current&&b.observe(_.current),()=>{b.disconnect()}}},[s]),V.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Go(d,S),onBlur:Go(m,E),onMouseEnter:Go(p,S),onMouseLeave:Go(x,E),onTouchStart:Go(v,S)}]:[!1,_,{}]}function Go(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function cb({page:s,...e}){let{router:i}=Kv(),r=V.useMemo(()=>Bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?V.createElement(fb,{page:s,matches:r,...e}):null}function ub(s){let{manifest:e,routeModules:i}=Qv(),[r,l]=V.useState([]);return V.useEffect(()=>{let c=!1;return nb(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function fb({page:s,matches:e,...i}){let r=zr(),{manifest:l,routeModules:c}=Qv(),{basename:f}=Kv(),{loaderData:d,matches:m}=ob(),p=V.useMemo(()=>Sg(s,e,m,l,r,"data"),[s,e,m,l,r]),x=V.useMemo(()=>Sg(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=V.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(y=>{let w=l.routes[y.route.id];!w||!w.hasLoader||(!p.some(C=>C.route.id===y.route.id)&&y.route.id in d&&c[y.route.id]?.shouldRevalidate||w.hasClientLoader?T=!0:E.add(y.route.id))}),E.size===0)return[];let b=JS(s,f,"data");return T&&E.size>0&&b.searchParams.set("_routes",e.filter(y=>E.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[f,d,r,l,p,e,s,c]),_=V.useMemo(()=>ib(x,l),[x,l]),S=ub(x);return V.createElement(V.Fragment,null,v.map(E=>V.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),_.map(E=>V.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:T})=>V.createElement("link",{key:E,nonce:i.nonce,...T})))}function db(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$v&&(window.__reactRouterVersion="7.10.1")}catch{}function hb({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=V.useRef();l.current==null&&(l.current=Jy({window:r,v5Compat:!0}));let c=l.current,[f,d]=V.useState({action:c.action,location:c.location}),m=V.useCallback(p=>{i===!1?d(p):V.startTransition(()=>d(p))},[i]);return V.useLayoutEffect(()=>c.listen(m),[c,m]),V.createElement(GS,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ex=V.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:x,viewTransition:v,..._},S){let{basename:E,unstable_useTransitions:T}=V.useContext(Ci),b=typeof p=="string"&&Jv.test(p),y,w=!1;if(typeof p=="string"&&b&&(y=p,$v))try{let R=new URL(window.location.href),H=p.startsWith("//")?new URL(R.protocol+p):new URL(p),K=xa(H.pathname,E);H.origin===R.origin&&K!=null?p=K+H.search+H.hash:w=!0}catch{_i(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=RS(p,{relative:l}),[U,k,O]=lb(r,_),z=vb(p,{replace:f,state:d,target:m,preventScrollReset:x,relative:l,viewTransition:v,unstable_useTransitions:T});function Z(R){e&&e(R),R.defaultPrevented||z(R)}let D=V.createElement("a",{..._,...O,href:y||C,onClick:w||c?e:Z,ref:db(S,k),target:m,"data-discover":!b&&i==="render"?"true":void 0});return U&&!b?V.createElement(V.Fragment,null,D,V.createElement(cb,{page:C})):D});ex.displayName="Link";var pb=V.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},x){let v=ll(f,{relative:p.relative}),_=zr(),S=V.useContext(pu),{navigator:E,basename:T}=V.useContext(Ci),b=S!=null&&bb(v)&&d===!0,y=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,w=_.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(w=w.toLowerCase(),C=C?C.toLowerCase():null,y=y.toLowerCase()),C&&T&&(C=xa(C,T)||C);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let k=w===y||!l&&w.startsWith(y)&&w.charAt(U)==="/",O=C!=null&&(C===y||!l&&C.startsWith(y)&&C.charAt(y.length)==="/"),z={isActive:k,isPending:O,isTransitioning:b},Z=k?e:void 0,D;typeof r=="function"?D=r(z):D=[r,k?"active":null,O?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(z):c;return V.createElement(ex,{...p,"aria-current":Z,className:D,ref:x,style:R,to:f,viewTransition:d},typeof m=="function"?m(z):m)});pb.displayName="NavLink";var mb=V.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=eu,action:d,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:v,..._},S)=>{let{unstable_useTransitions:E}=V.useContext(Ci),T=yb(),b=Sb(d,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",w=typeof d=="string"&&Jv.test(d),C=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let k=U.nativeEvent.submitter,O=k?.getAttribute("formmethod")||f,z=()=>T(k||U.currentTarget,{fetcherKey:e,method:O,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:v});E&&i!==!1?V.startTransition(()=>z()):z()};return V.createElement("form",{ref:S,method:y,action:b,onSubmit:r?m:C,..._,"data-discover":!w&&s==="render"?"true":void 0})});mb.displayName="Form";function gb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(s){let e=V.useContext(Hs);return en(e,gb(s)),e}function vb(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:d}={}){let m=qv(),p=zr(),x=ll(s,{relative:c});return V.useCallback(v=>{if(ZS(v,e)){v.preventDefault();let _=i!==void 0?i:$o(p)===$o(x),S=()=>m(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:f});d?V.startTransition(()=>S()):S()}},[p,m,x,i,r,e,s,l,c,f,d])}var xb=0,_b=()=>`__${String(++xb)}__`;function yb(){let{router:s}=tx("useSubmit"),{basename:e}=V.useContext(Ci),i=FS(),r=s.fetch,l=s.navigate;return V.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:x,body:v}=$S(c,e);if(f.navigate===!1){let _=f.fetcherKey||_b();await r(_,i,f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function Sb(s,{relative:e}={}){let{basename:i}=V.useContext(Ci),r=V.useContext(ba);en(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ll(s||".",{relative:e})},f=zr();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(x=>x==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let x=d.toString();c.search=x?`?${x}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ma([i,c.pathname])),$o(c)}function bb(s,{relative:e}={}){let i=V.useContext(jv);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=tx("useViewTransitionState"),l=ll(s,{relative:e});if(!i.isTransitioning)return!1;let c=xa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=xa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}const Mb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eb=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),bg=s=>{const e=Eb(s);return e.charAt(0).toUpperCase()+e.slice(1)},nx=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),Tb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var Ab={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const wb=V.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...d},m)=>V.createElement("svg",{ref:m,...Ab,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:nx("lucide",l),...!c&&!Tb(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,x])=>V.createElement(p,x)),...Array.isArray(c)?c:[c]]));const gt=(s,e)=>{const i=V.forwardRef(({className:r,...l},c)=>V.createElement(wb,{ref:c,iconNode:e,className:nx(`lucide-${Mb(bg(s))}`,`lucide-${s}`,r),...l}));return i.displayName=bg(s),i};const Rb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Mg=gt("arrow-right",Rb);const Cb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Jo=gt("book-open",Cb);const Nb=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Db=gt("briefcase",Nb);const Lb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ub=gt("check",Lb);const Pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ix=gt("circle-alert",Pb);const Ob=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ib=gt("circle-check-big",Ob);const zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Bb=gt("circle-question-mark",zb);const Fb=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],kb=gt("clock",Fb);const Hb=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Vb=gt("coffee",Hb);const Gb=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],jb=gt("ellipsis",Gb);const Xb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wb=gt("external-link",Xb);const qb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Eg=gt("eye",qb);const Yb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Zb=gt("file-text",Yb);const Kb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Qb=gt("gamepad-2",Kb);const $b=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=gt("house",$b);const Jb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],eM=gt("image",Jb);const tM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],nM=gt("info",tM);const iM=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Ag=gt("keyboard",iM);const aM=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],rM=gt("languages",aM);const sM=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],oM=gt("lightbulb",sM);const lM=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],cM=gt("moon",lM);const uM=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],ph=gt("mouse-pointer-2",uM);const fM=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],dM=gt("move",fM);const hM=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],pM=gt("music",hM);const mM=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],nu=gt("play",mM);const gM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],vM=gt("refresh-cw",gM);const xM=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],_M=gt("repeat",xM);const yM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ax=gt("rotate-ccw",yM);const SM=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],wg=gt("shuffle",SM);const bM=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],MM=gt("skull",bM);const EM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],TM=gt("sparkles",EM);const AM=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],wM=gt("sun",AM);const RM=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],CM=gt("tag",RM);const NM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],DM=gt("target",NM);const LM=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],rx=gt("trophy",LM);const UM=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],PM=gt("upload",UM);const OM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],IM=gt("volume-2",OM);const zM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],BM=gt("volume-x",zM);const FM=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],kM=gt("wand-sparkles",FM);const HM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sx=gt("x",HM);const VM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],GM=gt("zap",VM),jM=()=>[{id:"networkquiz",title:"NETWORK QUIZ",subtitle:"Learning Game",description:"109개의 필수 네트워크 약어를 게임 형식으로 학습할 수 있습니다. 퀴즈 모드와 무한 단어장 모드로 효과적으로 암기하세요.",icon:Jo,x:300,y:100,size:"md",link:"/network-quiz",image:"https://images.unsplash.com/photo-1562883676-8c6fbf064050?auto=format&fit=crop&q=80&w=800"},{id:"neonspace",title:"NEON SPACE",subtitle:"Interactive Art",description:"네온 글로우 효과와 상호작용 애니메이션을 통한 시각적 예술 공간입니다. 창의적인 UI/UX 표현의 경계를 탐험합니다.",icon:TM,x:-200,y:200,size:"md",link:"/neonspace",image:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800"},{id:"pixelsort",title:"PIXEL SORT",subtitle:"Audio Visualizer",description:"이미지를 정렬 알고리즘으로 정렬하면서 시각화합니다. 오디오를 업로드하면 정렬 과정에 맞춰 사운드가 재생되어 독특한 경험을 만듭니다.",icon:kM,x:200,y:-200,size:"md",link:"/pixel-sort",image:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"},{id:"cthulhu",title:"FORBIDDEN LOG",subtitle:"Ancient Knowledge",description:"광기의 일지... 옛 지배자의 각성을 기록하는 신성 모독적 문서. 당신의 이성을 잃어버릴 준비가 되었나요? 읽으면 돌이킬 수 없습니다.",icon:MM,x:-300,y:-100,size:"md",link:"/cthulhu",image:"https://images.unsplash.com/photo-1580695287070-40c6b3b83b65?auto=format&fit=crop&q=80&w=800"},{id:"speedclicker",title:"SPEED CLICKER",subtitle:"Reaction Game",description:"AI와의 반사신경 대결! 떨어지는 타겟을 클릭하여 AI를 이기세요. 난이도를 조절하여 도전할 수 있으며, 당신의 반응속도를 테스트하는 재미있는 게임입니다.",icon:GM,x:100,y:250,size:"md",link:"/speed-clicker",image:"https://images.unsplash.com/photo-1538481143235-a1a1f0eb3e99?auto=format&fit=crop&q=80&w=800"},{id:"schedule",title:"MY SCHEDULE",subtitle:"Time Management",description:"일주일의 일정을 한눈에 보고 현재 진행중인 활동을 확인하세요. 실시간 시간표와 진행률을 통해 효율적인 시간 관리를 할 수 있습니다.",icon:kb,x:-100,y:-300,size:"md",link:"/schedule",image:"https://images.unsplash.com/photo-1456365174547-68f85bca6905?auto=format&fit=crop&q=80&w=800"},{id:"visualnovel",title:"VISUAL NOVEL",subtitle:"Storytelling Game",description:"매력적인 스토리와 선택지로 진행되는 인터랙티브 비주얼 노벨입니다. 다양한 캐릭터와 배경, 그리고 감동적인 이야기를 경험하세요.",icon:Jo,x:0,y:0,size:"lg",link:"/visual-novel",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"}],Rg=jM(),XM=({panX:s,panY:e,scale:i})=>{const r=V.useRef(null),l=V.useRef({panX:s,panY:e,scale:i});return V.useEffect(()=>{l.current={panX:s,panY:e,scale:i}},[s,e,i]),V.useEffect(()=>{const c=r.current;if(!c)return;const f=c.getContext("2d");if(!f)return;let d=window.innerWidth,m=window.innerHeight;c.width=d,c.height=m;const p=Array.from({length:500},()=>({x:Math.random()*d,y:Math.random()*m,z:Math.random()*2+.5,radius:Math.random()*1.5,alpha:Math.random()}));let x;const v=()=>{f.clearRect(0,0,d,m);const S=f.createLinearGradient(0,0,0,m);S.addColorStop(0,"#02020a"),S.addColorStop(1,"#000000"),f.fillStyle=S,f.fillRect(0,0,d,m);const{panX:E,panY:T,scale:b}=l.current;p.forEach(y=>{const w=E*.05*y.z,C=T*.05*y.z;let U=(y.x+w)%d,k=(y.y+C)%m;U<0&&(U+=d),k<0&&(k+=m),f.beginPath(),f.arc(U,k,y.radius*(b*.5+.5),0,Math.PI*2);const O=Math.sin(Date.now()*.003*y.z+y.x),z=Math.max(.1,Math.min(1,y.alpha+O*.2));f.fillStyle=`rgba(255, 255, 255, ${z})`,f.fill()}),x=requestAnimationFrame(v)};v();const _=()=>{d=window.innerWidth,m=window.innerHeight,c.width=d,c.height=m};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(x)}},[]),g.jsx("canvas",{ref:r,className:"absolute inset-0 z-0 pointer-events-none"})},WM=Xy.memo(({data:s,isSelected:e,onClick:i})=>{const r={sm:"w-24 h-24 text-xs",md:"w-32 h-32 text-sm",lg:"w-48 h-48 text-base"},l={sm:24,md:32,lg:48};return g.jsx("div",{className:`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
        ${e?"z-30":"z-10 hover:z-20"}
      `,style:{transform:`translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`},onClick:c=>{c.stopPropagation(),i(s)},children:g.jsxs("div",{className:`transition-transform duration-500 ${e?"scale-150":"hover:scale-110 animate-float-slow"}`,children:[g.jsx("div",{className:`absolute inset-0 rounded-full blur-xl transition-all duration-500
          ${e?"bg-white/50 scale-125":"bg-white/10 opacity-0 group-hover:opacity-40 group-hover:scale-110"}
        `}),g.jsxs("div",{className:`
          relative flex flex-col items-center justify-center rounded-full border overflow-hidden
          backdrop-blur-md shadow-2xl transition-all duration-500
          ${r[s.size]}
          ${e?"bg-black/80 border-white text-white shadow-[0_0_50px_rgba(255,255,255,0.6)]":"bg-black/30 border-white/30 text-gray-300 hover:border-white/70 hover:text-white hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"}
        `,children:[g.jsx("div",{className:`absolute inset-0 bg-cover bg-center transition-opacity duration-500 
              ${e?"opacity-40":"opacity-30 group-hover:opacity-50"}`,style:{backgroundImage:`url(${s.image})`}}),g.jsx("div",{className:`absolute inset-0 bg-black/60 transition-opacity duration-500 ${e?"bg-black/70":""}`}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx(s.icon,{size:l[s.size],strokeWidth:1.5,className:"mb-2 drop-shadow-lg"}),g.jsx("span",{className:"font-mono tracking-wider font-bold text-center px-2 opacity-90 select-none drop-shadow-md",children:s.title})]}),e&&g.jsx("div",{className:"absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow pointer-events-none z-20"})]})]})})}),qM=({data:s,onClose:e,onNavigate:i})=>{const r=l=>{const c=s?.link||"";c.startsWith("/")&&(l.preventDefault(),i?.(c))};return g.jsx("div",{className:`
      fixed inset-y-0 left-0 z-40 h-full flex flex-col justify-center
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
      ${s?"w-full md:w-[55%] opacity-100 translate-x-0":"w-0 opacity-0 -translate-x-20"}
    `,children:s&&g.jsxs("div",{className:"pointer-events-auto h-full w-full bg-black/80 backdrop-blur-2xl border-r border-white/20 flex flex-col justify-center relative overflow-hidden",style:{boxShadow:"20px 0 50px rgba(0,0,0,0.5)"},children:[g.jsxs("div",{className:"absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[20s] ease-linear",style:{backgroundImage:`url(${s.image})`}}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"})]}),g.jsxs("button",{onClick:e,className:"absolute top-8 left-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2 group",children:[g.jsx("div",{className:"p-2 bg-black/40 border border-white/10 rounded-full group-hover:bg-white/20 transition-colors backdrop-blur-sm",children:g.jsx(sx,{size:24})}),g.jsx("span",{className:"text-sm font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded",children:"CLOSE"})]}),g.jsxs("div",{className:"relative z-10 px-8 md:px-16 animate-slide-in-up mt-20",children:[g.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[g.jsx("div",{className:"p-4 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm",children:g.jsx(s.icon,{size:48,className:"text-white"})}),g.jsxs("div",{children:[g.jsxs("div",{className:"text-xs font-mono text-white/70 mb-1 border-b border-white/20 inline-block pb-1",children:["ID: ",s.id.toUpperCase()]}),g.jsx("h2",{className:"text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",children:s.title})]})]}),g.jsx("p",{className:"text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase mb-8 pl-1 border-l-2 border-white/50 drop-shadow-md",children:s.subtitle}),g.jsx("div",{className:"text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm",children:s.description}),g.jsxs("a",{href:s.link,onClick:r,target:s.link.startsWith("/")?void 0:"_blank",rel:s.link.startsWith("/")?void 0:"noopener noreferrer",className:"group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] hover:bg-gray-200 transition-all overflow-hidden rounded-sm",children:[g.jsx("span",{className:"relative z-10 mr-4",children:"INITIATE CONNECTION"}),g.jsx(Wb,{size:20,className:"relative z-10 group-hover:translate-x-1 transition-transform"}),g.jsx("div",{className:"absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"})]})]})]})})},YM=()=>{const s=qv(),[e,i]=V.useState(null),[r,l]=V.useState({x:0,y:0}),[c,f]=V.useState(1),[d,m]=V.useState(!1),p=V.useRef({x:0,y:0}),x=V.useRef({x:0,y:0}),v=V.useCallback(T=>{const y=-T.deltaY*.001;f(w=>{const C=w+y;return Math.min(Math.max(C,.3),3)})},[]),_=T=>{e||(m(!0),p.current={x:T.clientX,y:T.clientY},x.current={...r})},S=T=>{if(!d||e)return;const b=T.clientX-p.current.x,y=T.clientY-p.current.y;l({x:x.current.x+b,y:x.current.y+y})},E=()=>m(!1);return V.useEffect(()=>{if(e){const T=window.innerWidth*.75,b=window.innerHeight*.5,y=window.innerWidth/2,w=window.innerHeight/2,C=(T-y)/c-e.x,U=(b-w)/c-e.y;l({x:C,y:U})}},[e,c]),g.jsxs("div",{className:`relative w-full h-screen bg-black overflow-hidden font-sans select-none 
        ${d?"cursor-grabbing":e?"cursor-default":"cursor-grab"}
      `,onMouseDown:_,onMouseMove:S,onMouseUp:E,onMouseLeave:E,onWheel:v,children:[g.jsx("style",{children:`
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
      `}),g.jsx(XM,{panX:r.x,panY:r.y,scale:c}),g.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"}),g.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1]"}),g.jsxs("div",{className:"absolute top-1/2 left-1/2 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",style:{transform:`translate(-50%, -50%) scale(${c}) translate(${r.x}px, ${r.y}px)`},children:[g.jsx("div",{className:"absolute -top-[500px] left-0 -translate-x-1/2 w-[1500px] text-center pointer-events-none z-0 opacity-10 select-none",children:g.jsx("h1",{className:"text-[200px] font-black text-white tracking-[0.2em] blur-[4px]",children:"UNIVERSE"})}),Rg.map(T=>g.jsx(WM,{data:T,isSelected:e?.id===T.id,onClick:i},T.id)),g.jsx("svg",{className:"absolute top-0 left-0 overflow-visible pointer-events-none z-0 opacity-10",children:Rg.map((T,b)=>b<5&&g.jsx("line",{x1:0,y1:0,x2:T.x,y2:T.y,stroke:"white",strokeWidth:"2",strokeDasharray:"10,10"},`line-${b}`))}),g.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"}),g.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full"})]}),g.jsxs("header",{className:`absolute top-8 left-0 w-full text-center pointer-events-none z-30 transition-opacity duration-500 ${e?"opacity-0":"opacity-100"}`,children:[g.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white tracking-[0.2em]",style:{textShadow:"0 0 30px rgba(255,255,255,0.2)"},children:"NEXUS"}),g.jsxs("div",{className:"mt-4 flex justify-center gap-4",children:[g.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"SCROLL TO ZOOM"}),g.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"DRAG TO MOVE"})]})]}),g.jsx(qM,{data:e,onClose:()=>i(null),onNavigate:s}),g.jsxs("div",{className:`absolute bottom-6 right-8 z-30 text-right font-mono text-[10px] text-white/30 transition-opacity ${e?"opacity-0":"opacity-100"}`,children:[g.jsxs("div",{className:"mb-1",children:["POS X: ",Math.round(-r.x)]}),g.jsxs("div",{className:"mb-1",children:["POS Y: ",Math.round(-r.y)]}),g.jsxs("div",{children:["ZOOM: ",Math.round(c*100),"%"]})]})]})},ZM=()=>{const s=[{id:1,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 네트워크를 정의하고 제어하는 기술"},{id:2,acronym:"TCAM",fullTerm:"Ternary Content Addressable Memory",desc:"0, 1, X 세 가지 상태를 저장하는 고속 검색 메모리"},{id:3,acronym:"SNMP",fullTerm:"Simple Network Management Protocol",desc:"네트워크 장비를 간단하게 관리하고 감시하는 프로토콜"},{id:4,acronym:"VBR",fullTerm:"Variable Bit Rate",desc:"전송률이 상황에 따라 변하는 방식"},{id:5,acronym:"ICMP",fullTerm:"Internet Control Message Protocol",desc:"인터넷 제어 메시지(오류 보고, Ping 등)를 보내는 프로토콜"},{id:6,acronym:"OSPF",fullTerm:"Open Shortest Path First",desc:"개방형 최단 경로 우선 라우팅 프로토콜"},{id:7,acronym:"ATM",fullTerm:"Asynchronous Transfer Mode",desc:"비동기 전송 모드 (셀 단위 전송)"},{id:8,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체에 접근을 제어하는 고유 물리 주소"},{id:9,acronym:"DPI",fullTerm:"Deep Packet Inspection",desc:"패킷의 내용까지 깊게 검사하는 기술"},{id:10,acronym:"RIP",fullTerm:"Routing Information Protocol",desc:"라우팅 정보를 홉 수 기반으로 교환하는 프로토콜"},{id:11,acronym:"ASN",fullTerm:"Autonomous System Number",desc:"자율 시스템(AS)을 식별하는 고유 번호"},{id:12,acronym:"ISIS",fullTerm:"Intermediate System to Intermediate System",desc:"중간 시스템(라우터) 끼리의 라우팅 프로토콜"},{id:13,acronym:"EIGRP",fullTerm:"Enhanced Interior Gateway Routing Protocol",desc:"향상된 내부 게이트웨이 라우팅 (Cisco 전용)"},{id:14,acronym:"MOSPF",fullTerm:"Multicast Open Shortest Path First",desc:"멀티캐스트를 지원하는 OSPF"},{id:15,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 운영체제 (SDN 컨트롤러)"},{id:16,acronym:"NAT",fullTerm:"Network Address Translation",desc:"네트워크 주소(IP)를 변환하는 기술"},{id:17,acronym:"OFC",fullTerm:"Optical Fiber Cable",desc:"광 섬유 케이블"},{id:18,acronym:"PDU",fullTerm:"Protocol Data Unit",desc:"프로토콜에서 처리하는 데이터의 단위"},{id:19,acronym:"NCS",fullTerm:"Network Control System",desc:"네트워크를 제어하는 시스템"},{id:20,acronym:"ONF",fullTerm:"Open Networking Foundation",desc:"개방형 네트워킹 표준화 재단"},{id:21,acronym:"WFQ",fullTerm:"Weighted Fair Queuing",desc:"가중치를 두어 공평하게 처리하는 큐 방식"},{id:22,acronym:"NCP",fullTerm:"Network Control Protocol",desc:"네트워크 계층을 제어/설정하는 프로토콜"},{id:23,acronym:"CBR",fullTerm:"Constant Bit Rate",desc:"전송률이 일정하게 고정된 방식"},{id:24,acronym:"SOHO",fullTerm:"Small Office Home Office",desc:"소규모 사무실이나 재택 근무 환경"},{id:25,acronym:"DHCP",fullTerm:"Dynamic Host Configuration Protocol",desc:"호스트 설정을 동적으로 자동 할당하는 프로토콜"},{id:26,acronym:"BGP",fullTerm:"Border Gateway Protocol",desc:"AS 경계에서 사용하는 게이트웨이 프로토콜"},{id:27,acronym:"CIDR",fullTerm:"Classless Inter-Domain Routing",desc:"클래스 구분 없는 도메인 간 라우팅"},{id:28,acronym:"HOL",fullTerm:"Head-of-the-Line",desc:"줄의 맨 앞이 막혀 뒤까지 지연되는 현상"},{id:29,acronym:"AQM",fullTerm:"Active Queue Management",desc:"큐를 능동적으로 관리하여 혼잡 방지"},{id:30,acronym:"VRRP",fullTerm:"Virtual Router Redundancy Protocol",desc:"가상 라우터를 만들어 중복(예비) 구성"},{id:31,acronym:"OVSDB",fullTerm:"Open vSwitch Database Management Protocol",desc:"Open vSwitch의 데이터베이스를 관리하는 프로토콜"},{id:32,acronym:"SAL",fullTerm:"Service Abstraction Layer",desc:"서비스를 추상화하여 하드웨어 종속성 제거"},{id:33,acronym:"VMM",fullTerm:"Virtual Machine Monitor",desc:"가상 머신을 감시/관리하는 모니터"},{id:34,acronym:"NLRI",fullTerm:"Network Layer Reachability Information",desc:"네트워크 계층의 도달 가능성 정보"},{id:35,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄로 입력하는 텍스트 인터페이스"},{id:36,acronym:"MIB",fullTerm:"Management Information Base",desc:"관리 정보가 저장된 베이스"},{id:37,acronym:"SMI",fullTerm:"Structure of Management Information",desc:"관리 정보를 정의하는 구조 및 규칙"},{id:38,acronym:"RPC",fullTerm:"Remote Procedure Call",desc:"원격에 있는 프로시저를 호출함"},{id:39,acronym:"EGP",fullTerm:"Exterior Gateway Protocol",desc:"외부 게이트웨이(AS 간) 프로토콜"},{id:40,acronym:"IGP",fullTerm:"Interior Gateway Protocol",desc:"내부 게이트웨이(AS 내) 프로토콜"},{id:41,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 정의된 네트워킹 (중복)"},{id:42,acronym:"OFP",fullTerm:"OpenFlow Protocol",desc:"오픈플로우 스위치와 컨트롤러 간 프로토콜"},{id:43,acronym:"OFS",fullTerm:"OpenFlow Switch",desc:"오픈플로우를 지원하는 스위치"},{id:44,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 OS (중복)"},{id:45,acronym:"NFV",fullTerm:"Network Functions Virtualization",desc:"네트워크 기능을 가상화하는 기술"},{id:46,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄 인터페이스 (중복)"},{id:47,acronym:"DCN",fullTerm:"Data Center Network",desc:"데이터 센터 내부 네트워크"},{id:48,acronym:"NFVI",fullTerm:"NFV Infrastructure",desc:"NFV를 구동하기 위한 인프라 자원"},{id:49,acronym:"NBI",fullTerm:"Northbound Interface",desc:"북쪽(상위 응용) 방향 인터페이스"},{id:50,acronym:"SBI",fullTerm:"Southbound Interface",desc:"남쪽(하부 장비) 방향 인터페이스"},{id:51,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상으로 나눈 근거리 통신망"},{id:52,acronym:"VPN",fullTerm:"Virtual Private Network",desc:"가상으로 만든 사설 네트워크"},{id:53,acronym:"OVS",fullTerm:"Open vSwitch",desc:"오픈 소스 가상 스위치"},{id:54,acronym:"YANG",fullTerm:"Yet Another Next Generation",desc:"또 다른 차세대 데이터 모델링 언어"},{id:55,acronym:"NETCONF",fullTerm:"Network Configuration Protocol",desc:"네트워크 설정을 위한 프로토콜"},{id:56,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"다양한 프로토콜 위에서 라벨로 스위칭"},{id:57,acronym:"MANO",fullTerm:"Management and Orchestration",desc:"NFV의 관리와 조율"},{id:58,acronym:"ODL",fullTerm:"OpenDaylight",desc:"오픈데이라이트 (SDN 컨트롤러)"},{id:59,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"라벨 스위칭 (중복)"},{id:60,acronym:"LSR",fullTerm:"Label Switch Router",desc:"라벨을 보고 스위칭하는 라우터"},{id:61,acronym:"LLC",fullTerm:"Logical Link Control",desc:"논리적인 링크 제어"},{id:62,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체 접근 제어 (중복)"},{id:63,acronym:"HDLC",fullTerm:"High Level Data Link Protocol",desc:"고수준 데이터 링크 제어 프로토콜"},{id:64,acronym:"CSMA",fullTerm:"Carrier Sense Multiple Access",desc:"반송파 감지 후 다중 접속"},{id:65,acronym:"FDMA",fullTerm:"Frequency Division Multiple Access",desc:"주파수를 나누어 접속"},{id:66,acronym:"TDMA",fullTerm:"Time Division Multiple Access",desc:"시간을 나누어 접속"},{id:67,acronym:"CDMA",fullTerm:"Code Division Multiple Access",desc:"코드로 구분하여 나누어 접속"},{id:68,acronym:"ARP",fullTerm:"Address Resolution Protocol",desc:"주소(IP)를 해석하여 MAC 주소를 알아냄"},{id:69,acronym:"FDDI",fullTerm:"Fiber Distributed Data Interface",desc:"광섬유로 분산된 데이터 인터페이스"},{id:70,acronym:"SFD",fullTerm:"Start Frame Delimiter",desc:"프레임의 시작을 알리는 구분자"},{id:71,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상 LAN (중복)"},{id:72,acronym:"DTP",fullTerm:"Dynamic Trunking Protocol",desc:"트렁킹을 동적으로 협상함"},{id:73,acronym:"VTP",fullTerm:"VLAN Trunking Protocol",desc:"VLAN 정보를 트렁킹 구간에 전파"},{id:74,acronym:"TPID",fullTerm:"Tag Protocol Identifier",desc:"태그 프로토콜임을 식별하는 필드"},{id:75,acronym:"TCI",fullTerm:"Tag Control Information",desc:"태그를 제어하는 정보"},{id:76,acronym:"PCP",fullTerm:"Priority Code Point",desc:"우선순위를 나타내는 코드 지점"},{id:77,acronym:"DEI",fullTerm:"Drop Eligible Indicator",desc:"폐기 해도 되는지 나타내는 표시"},{id:78,acronym:"LER",fullTerm:"Label Edge Router",desc:"MPLS망 가장자리에 있는 라우터"},{id:79,acronym:"LSP",fullTerm:"Label-Switched Path",desc:"라벨로 스위칭되어 지나가는 경로"},{id:80,acronym:"LDP",fullTerm:"Label Distribution Protocol",desc:"라벨을 분배하는 프로토콜"},{id:81,acronym:"SIFS",fullTerm:"Short Inter-frame Spacing",desc:"짧은 프레임 간 간격"},{id:82,acronym:"DIFS",fullTerm:"Distributed Inter-frame Space",desc:"분산 제어용 프레임 간격"},{id:83,acronym:"RTS",fullTerm:"Request to Send",desc:"송신을 요청함"},{id:84,acronym:"CTS",fullTerm:"Clear to Send",desc:"송신 해도 좋다"},{id:85,acronym:"FHSS",fullTerm:"Frequency-Hopping Spread Spectrum",desc:"주파수를 깡충깡충 뛰며 대역 확산"},{id:86,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선으로 접속하는 네트워크망"},{id:87,acronym:"MTSO",fullTerm:"Mobile Telecommunications Switching Office",desc:"이동통신 교환국"},{id:88,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자를 식별하는 모듈"},{id:89,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"길게 보고 진화시킨 4G 기술"},{id:90,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"일반적인 패킷 무선 서비스"},{id:91,acronym:"OFDMA",fullTerm:"Orthogonal Frequency-Division Multiple Access",desc:"직교 주파수 분할 다중 접속"},{id:92,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"4G 이동통신 (중복)"},{id:93,acronym:"HSPA",fullTerm:"High Speed Packet Access",desc:"고속 패킷 접속"},{id:94,acronym:"RNC",fullTerm:"Radio Network Controller",desc:"무선 네트워크를 제어하는 장비"},{id:95,acronym:"HSDPA",fullTerm:"High Speed Downlink Packet Access",desc:"고속 하향 패킷 접속"},{id:96,acronym:"WCDMA",fullTerm:"Wideband Code Division Multiple Access",desc:"광대역 코드 분할 다중 접속"},{id:97,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자 식별 모듈 (중복)"},{id:98,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"2.5G 서비스 (중복)"},{id:99,acronym:"IMSI",fullTerm:"International Mobile Subscriber Identity",desc:"국제 모바일 가입자 고유 식별 번호"},{id:100,acronym:"EDGE",fullTerm:"Enhanced Data Rates for GSM Evolution",desc:"GSM의 진화로 데이터 속도 향상"},{id:101,acronym:"MIMO",fullTerm:"Multiple Input Multiple Output",desc:"다중 입력 다중 출력"},{id:102,acronym:"SC-FDMA",fullTerm:"Single Carrier Frequency Division Multiple Access",desc:"단일 반송파를 사용하는 FDMA"},{id:103,acronym:"EPC",fullTerm:"Evolved Packet Core",desc:"진화된 패킷 코어 망"},{id:104,acronym:"MME",fullTerm:"Mobility Management Entity",desc:"이동성을 관리하는 개체"},{id:105,acronym:"eMBB",fullTerm:"Enhanced Mobile Broadband",desc:"향상된 초광대역 서비스"},{id:106,acronym:"DSS",fullTerm:"Dynamic Spectrum Sharing",desc:"주파수를 동적으로 공유"},{id:107,acronym:"FWA",fullTerm:"Fixed Wireless Access",desc:"고정된 위치에서 무선으로 접속"},{id:108,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선 접속망 (중복)"},{id:109,acronym:"UTRAN",fullTerm:"Universal Terrestrial Radio Access Network",desc:"범용 지상 무선 접속망"}],e=[{id:1001,acronym:"Random Access",fullTerm:"Random Access",desc:"임의 접근 (데이터 전송 시 경쟁하며 충돌 가능성이 있는 방식)"},{id:1002,acronym:"Controlled Access",fullTerm:"Controlled Access",desc:"제어 접근 (순서나 규칙에 따라 전송하여 충돌을 방지하는 방식)"},{id:1003,acronym:"Channelization",fullTerm:"Channelization",desc:"채널화 (대역폭을 주파수, 시간, 코드 등으로 나누어 할당하는 방식)"},{id:1004,acronym:"Ethernet",fullTerm:"Ethernet",desc:"이더넷 (가장 널리 사용되는 유선 LAN 기술 표준)"},{id:1005,acronym:"CRC",fullTerm:"Cyclic Redundancy Check",desc:"순환 중복 검사 (데이터 전송 오류를 검출하기 위한 수학적 알고리즘)"},{id:1006,acronym:"Loopback",fullTerm:"Loopback",desc:"루프백 (데이터를 송신한 장치로 다시 되돌려 보내는 기능, 예: 127.0.0.1)"},{id:1007,acronym:"Unicast",fullTerm:"Unicast",desc:"유니캐스트 (1:1 통신, 특정 단일 수신자에게 전송)"},{id:1008,acronym:"Multicast",fullTerm:"Multicast",desc:"멀티캐스트 (1:N 통신, 특정 그룹의 멤버들에게 전송)"},{id:1009,acronym:"Anycast",fullTerm:"Anycast",desc:"애니캐스트 (1:1 통신이나, 네트워크상에서 가장 가까운 노드와 통신)"},{id:1010,acronym:"IPv4",fullTerm:"Internet Protocol version 4",desc:"인터넷 프로토콜 버전 4 (32비트 주소 체계)"},{id:1011,acronym:"IPv6",fullTerm:"Internet Protocol version 6",desc:"인터넷 프로토콜 버전 6 (128비트 주소 체계, 무한대에 가까운 주소)"},{id:1012,acronym:"Subnet Mask",fullTerm:"Subnet Mask",desc:"서브넷 마스크 (IP 주소에서 네트워크 부분과 호스트 부분을 구분)"},{id:1013,acronym:"Dijkstra",fullTerm:"Dijkstra Algorithm",desc:"다익스트라 알고리즘 (OSPF 등에서 사용하는 최단 경로 탐색 알고리즘)"},{id:1014,acronym:"STP",fullTerm:"Spanning Tree Protocol",desc:"스패닝 트리 프로토콜 (스위치 네트워크의 루프 방지)"},{id:1015,acronym:"Flooding",fullTerm:"Flooding",desc:"플러딩 (수신 포트를 제외한 모든 포트로 프레임을 전송하는 것)"},{id:1016,acronym:"Star Topology",fullTerm:"Star Topology",desc:"성형 토폴로지 (중앙 허브나 스위치를 중심으로 모든 노드가 연결된 형태)"},{id:1017,acronym:"Traffic Engineering",fullTerm:"Traffic Engineering",desc:"트래픽 엔지니어링 (네트워크 트래픽의 흐름을 최적화하고 제어하는 기술)"},{id:1018,acronym:"Spread-spectrum",fullTerm:"Spread-spectrum",desc:"대역 확산 (신호를 넓은 주파수 대역으로 퍼뜨려 간섭을 줄이는 기술)"},{id:1019,acronym:"Gateway",fullTerm:"Gateway",desc:"게이트웨이 (서로 다른 네트워크 프로토콜을 사용하는 네트워크 간의 연결점)"},{id:1020,acronym:"SLAAC",fullTerm:"Stateless Address Autoconfiguration",desc:"상태 비보존 주소 자동 설정 (IPv6에서 라우터 없이 IP를 자동 생성)"},{id:1021,acronym:"NDP",fullTerm:"Neighbor Discovery Protocol",desc:"이웃 탐색 프로토콜 (IPv6에서 ARP를 대체하여 이웃 노드 관리)"},{id:1022,acronym:"IPsec",fullTerm:"Internet Protocol Security",desc:"IP 보안 (IP 계층에서 데이터를 암호화하고 인증하는 프로토콜 모음)"},{id:1023,acronym:"Collision",fullTerm:"Collision",desc:"충돌 (두 개 이상의 장치가 동시에 데이터를 전송하여 신호가 겹치는 현상)"},{id:1024,acronym:"MTU",fullTerm:"Maximum Transmission Unit",desc:"최대 전송 단위 (네트워크 인터페이스가 한 번에 보낼 수 있는 최대 데이터 크기)"}],i=`
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
`,[r,l]=V.useState("menu"),[c,f]=V.useState(10),[d,m]=V.useState([]),[p,x]=V.useState(0),[v,_]=V.useState(""),[S,E]=V.useState(!1),[T,b]=V.useState(null),[y,w]=V.useState(0),[C,U]=V.useState([]),k=V.useRef(null),[O,z]=V.useState(null),[Z,D]=V.useState(0),[R,H]=V.useState(!1),[K,ce]=V.useState([]),[pe,ge]=V.useState(0),[I,F]=V.useState(!1);V.useEffect(()=>{const Ae=i.split(`
`);let Fe="General";const xt=[];let it=1;Ae.forEach(_t=>{const G=_t.trim();if(G){if(/^(\d+\.\d+|HW\d+[A-Z]*)/.test(G)){Fe=G.replace("|","").trim();return}if(G.includes("(")&&G.includes(")")){const qe=G.split("|"),ft=qe[0].trim(),Ot=qe[1]?qe[1].trim():"",ke=[],Bt=[],Ze=/(\([^)]+\))/g;ft.split(Ze).forEach(B=>{if(B.startsWith("(")&&B.endsWith(")")){const A=B.slice(1,-1);ke.push({text:A,isAnswer:!0}),Bt.push(A)}else B.length>0&&ke.push({text:B,isAnswer:!1})}),xt.push({id:it++,category:Fe,originalText:ft,translation:Ot,parts:ke,answers:Bt})}}}),ce(xt)},[]);const q=V.useMemo(()=>{if(r!=="sentence"||!K[pe])return[];const Ae=K[pe],Fe=[];return Ae.answers.forEach(xt=>{const it=xt.toUpperCase(),_t=xt.toLowerCase(),G=qe=>{Fe.some(ft=>ft.id===qe.id)||Fe.push(qe)};s.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&G(qe),qe.fullTerm&&_t.includes(qe.fullTerm.toLowerCase())&&G(qe)}),e.forEach(qe=>{it.includes(qe.acronym.toUpperCase())&&G(qe),qe.fullTerm&&_t.includes(qe.fullTerm.toLowerCase())&&G(qe)})}),Fe},[r,pe,K]);V.useEffect(()=>{r==="playing"&&k.current&&k.current.focus()},[p,r]);const ne=Ae=>{let Fe=[];Ae==="all"?Fe=[...s]:Fe=[...s].sort(()=>.5-Math.random()).slice(0,Ae),m(Fe),f(Fe.length),x(0),w(0),U([]),l("playing"),Me()},J=()=>{l("flashcard"),D(1),z(X()),H(!1)},P=()=>{l("sentence");const Ae=[...K].sort(()=>.5-Math.random());ce(Ae),ge(0),F(!1)},X=()=>{const Ae=Math.floor(Math.random()*s.length);return s[Ae]},fe=V.useCallback(()=>{let Ae=X();if(s.length>1)for(;Ae.id===O?.id;)Ae=X();z(Ae),D(Fe=>Fe+1),H(!1)},[O,s]),_e=V.useCallback(()=>{ge(Ae=>(Ae+1)%K.length),F(!1)},[K.length]);V.useEffect(()=>{const Ae=Fe=>{Fe.code==="Space"&&(r==="flashcard"?(Fe.preventDefault(),R?fe():H(!0)):r==="sentence"&&(Fe.preventDefault(),I?_e():F(!0)))};return window.addEventListener("keydown",Ae),()=>window.removeEventListener("keydown",Ae)},[r,R,fe,I,_e]);const Me=()=>{_(""),E(!1),b(null)},te=Ae=>Ae.toLowerCase().replace(/[\s-]/g,""),de=Ae=>{if(Ae.preventDefault(),T)return;const Fe=d[p];te(v)===te(Fe.fullTerm)?(b("correct"),w(it=>it+1)):(b("incorrect"),U(it=>[...it,{...Fe,userAnswer:v}]))},Ce=()=>{p<d.length-1?(x(Ae=>Ae+1),Me()):l("result")};if(r==="menu")return g.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-slate-800",children:g.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-indigo-600",children:[g.jsx(Jo,{className:"w-16 h-16 mx-auto text-indigo-600 mb-4"}),g.jsx("h1",{className:"text-3xl font-bold mb-2",children:"네트워크 마스터"}),g.jsx("p",{className:"text-slate-500 mb-8",children:"약어 암기 및 핵심 문장 학습"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("button",{onClick:()=>ne(10),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[g.jsx(nu,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (10문제)"]}),g.jsxs("button",{onClick:()=>ne(20),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[g.jsx(nu,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (20문제)"]}),g.jsx("button",{onClick:()=>ne("all"),className:"w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200",children:"약어 전체 109문제 도전"}),g.jsxs("div",{className:"pt-4 border-t border-slate-100 mt-2 space-y-2",children:[g.jsxs("button",{onClick:J,className:"w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2",children:[g.jsx(_M,{className:"w-5 h-5"})," 무한 약어 단어장"]}),g.jsxs("button",{onClick:P,className:"w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2",children:[g.jsx(Zb,{className:"w-5 h-5"})," 문장 빈칸 채우기"]})]})]})]})});if(r==="result")return g.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-slate-800",children:g.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border-t-4 border-indigo-600",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx(rx,{className:"w-16 h-16 mx-auto text-yellow-500 mb-4"}),g.jsx("h2",{className:"text-3xl font-bold mb-2",children:"결과 리포트"}),g.jsxs("div",{className:"text-5xl font-black text-indigo-600 my-4",children:[y," / ",c]}),g.jsx("p",{className:"text-slate-500",children:y===c?"완벽합니다! 모든 약어를 마스터하셨네요!":"수고하셨습니다. 틀린 문제를 확인해보세요."})]}),C.length>0&&g.jsxs("div",{className:"mb-8",children:[g.jsxs("h3",{className:"font-bold text-lg mb-4 text-red-500 flex items-center gap-2",children:[g.jsx(ix,{className:"w-5 h-5"})," 오답 노트 (",C.length,")"]}),g.jsx("div",{className:"bg-red-50 rounded-xl overflow-hidden border border-red-100 max-h-96 overflow-y-auto",children:C.map((Ae,Fe)=>g.jsxs("div",{className:"p-4 border-b border-red-100 last:border-0 hover:bg-red-100 transition-colors",children:[g.jsxs("div",{className:"flex justify-between items-center mb-1",children:[g.jsx("span",{className:"font-bold text-slate-800 text-lg",children:Ae.acronym}),g.jsxs("span",{className:"text-xs font-mono bg-red-200 text-red-800 px-2 py-1 rounded",children:["오답: ",Ae.userAnswer]})]}),g.jsx("div",{className:"text-indigo-700 font-medium",children:Ae.fullTerm}),g.jsx("div",{className:"text-sm text-slate-500",children:Ae.desc})]},Fe))})]}),g.jsxs("button",{onClick:()=>l("menu"),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg",children:[g.jsx(ax,{className:"w-5 h-5"})," 다시 시작하기"]})]})});if(r==="sentence"){const Ae=K[pe],Fe=q;return g.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[g.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:g.jsx(Tg,{className:"w-6 h-6"})}),g.jsxs("div",{className:"w-full max-w-3xl",children:[g.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>I?_e():F(!0),children:[g.jsxs("div",{className:"bg-blue-50 px-6 py-3 flex items-center gap-2 border-b border-blue-100",children:[g.jsx(CM,{className:"w-4 h-4 text-blue-600"}),g.jsx("span",{className:"font-bold text-blue-800 text-sm uppercase tracking-wide",children:Ae?.category}),g.jsxs("span",{className:"ml-auto text-blue-400 text-xs",children:["#",Ae?.id]})]}),g.jsxs("div",{className:"flex-1 p-10 flex flex-col justify-center",children:[g.jsx("div",{className:"text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 mb-6",children:Ae?.parts.map((xt,it)=>g.jsx("span",{className:xt.isAnswer?"font-bold mx-1":"",children:xt.isAnswer?I?g.jsx("span",{className:"text-blue-600 underline decoration-2 underline-offset-4 animate-fade-in",children:xt.text}):g.jsx("span",{className:"bg-slate-200 text-slate-200 rounded px-2 select-none",children:"(           )"}):xt.text},it))}),I&&Ae?.translation&&g.jsxs("div",{className:"p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400 animate-fade-in mb-6",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-500 mb-1 font-bold text-xs uppercase",children:[g.jsx(rM,{className:"w-4 h-4"})," 한국어 해석"]}),g.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed break-keep",children:Ae.translation})]}),I&&Fe.length>0&&g.jsxs("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:[g.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2",children:[g.jsx(oM,{className:"w-4 h-4 text-yellow-500"})," 관련 용어 해설"]}),g.jsx("div",{className:"grid gap-3",children:Fe.map(xt=>g.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[g.jsx("span",{className:"font-bold text-blue-700",children:xt.acronym}),g.jsxs("span",{className:"text-xs text-blue-400",children:["(",xt.fullTerm,")"]})]}),g.jsx("p",{className:"text-slate-700 text-sm",children:xt.desc})]},xt.id))})]}),I&&Fe.length===0&&g.jsx("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:g.jsx("p",{className:"text-slate-500 text-sm text-center italic",children:"스페이스바를 눌러 다음 문장으로 넘어갑니다."})})]}),!I&&g.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-center text-slate-400 animate-pulse",children:g.jsxs("span",{className:"flex items-center gap-2 text-sm font-semibold",children:[g.jsx(Eg,{className:"w-4 h-4"})," 탭하여 정답 확인"]})}),I&&g.jsx("div",{className:"p-4 bg-blue-500 text-white flex justify-center hover:bg-blue-600 transition-colors",children:g.jsxs("span",{className:"flex items-center gap-2 text-lg font-bold",children:["다음 문장 ",g.jsx(Mg,{className:"w-5 h-5"})]})})]}),g.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[g.jsx(Ag,{className:"w-4 h-4"}),g.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]})}if(r==="flashcard")return g.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[g.jsxs("div",{className:"absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md font-bold text-emerald-600 flex items-center gap-2",children:[g.jsx(Jo,{className:"w-5 h-5"}),g.jsxs("span",{children:["본 단어 수: ",Z]})]}),g.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:g.jsx(Tg,{className:"w-6 h-6"})}),g.jsxs("div",{className:"w-full max-w-xl",children:[g.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-emerald-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>R?fe():H(!0),children:[g.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in",children:[g.jsxs("span",{className:"inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6",children:["No. ",O?.id]}),g.jsx("h1",{className:"text-7xl font-black text-slate-800 tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-300",children:O?.acronym}),g.jsx("div",{className:"w-full h-px bg-slate-100 mb-6"}),R?g.jsxs(g.Fragment,{children:[g.jsx("h2",{className:"text-2xl font-bold text-emerald-700 mb-3 animate-fade-in-up",children:O?.fullTerm}),g.jsx("p",{className:"text-slate-500 font-medium text-lg leading-relaxed max-w-md animate-fade-in-up delay-75",children:O?.desc})]}):g.jsxs("div",{className:"flex flex-col items-center py-6 text-slate-300 animate-pulse",children:[g.jsx("div",{className:"bg-slate-100 p-3 rounded-full mb-3",children:g.jsx(Eg,{className:"w-8 h-8 text-slate-400"})}),g.jsx("span",{className:"font-bold text-sm",children:"탭하여 정답 확인"})]})]}),g.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100",children:g.jsxs("button",{onClick:Ae=>{Ae.stopPropagation(),fe()},className:"w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 active:scale-95 transform",children:["다음 단어 ",g.jsx(Mg,{className:"w-6 h-6"})]})})]}),g.jsxs("div",{className:"mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[g.jsx(Ag,{className:"w-4 h-4"}),g.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]});const Ue=d[p];return g.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800",children:g.jsxs("div",{className:"w-full max-w-xl",children:[g.jsxs("div",{className:"mb-6 flex items-center justify-between text-sm font-semibold text-slate-500",children:[g.jsxs("span",{children:["Question ",p+1," / ",c]}),g.jsxs("span",{children:["Score: ",y]})]}),g.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2.5 mb-8",children:g.jsx("div",{className:"bg-indigo-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${(p+1)/c*100}%`}})}),g.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-600",children:[g.jsxs("div",{className:"p-10 text-center bg-slate-50 border-b border-slate-100",children:[g.jsxs("span",{className:"inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4",children:["No. ",Ue.id]}),g.jsx("h1",{className:"text-6xl font-black text-indigo-900 tracking-tighter mb-2",children:Ue.acronym}),g.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name을 입력하세요"})]}),g.jsxs("div",{className:"p-8",children:[T?g.jsxs("div",{className:"text-center animate-fade-in-up",children:[T==="correct"?g.jsxs("div",{className:"mb-6",children:[g.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3",children:g.jsx(Ub,{className:"w-8 h-8"})}),g.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-1",children:"정답입니다!"})]}):g.jsxs("div",{className:"mb-6",children:[g.jsx("div",{className:"w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3",children:g.jsx(sx,{className:"w-8 h-8"})}),g.jsx("h3",{className:"text-2xl font-bold text-red-500 mb-1",children:"오답입니다"}),g.jsxs("p",{className:"text-slate-400 text-sm mb-2",children:["내가 쓴 답: ",v]}),g.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg inline-block w-full",children:g.jsx("p",{className:"text-indigo-800 font-bold text-lg",children:Ue.fullTerm})})]}),g.jsxs("button",{onClick:Ce,className:"w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2",children:["다음 문제 ",g.jsx(nu,{className:"w-4 h-4"})]})]}):g.jsxs("form",{onSubmit:de,children:[g.jsx("input",{ref:k,type:"text",value:v,onChange:Ae=>_(Ae.target.value),placeholder:"예: Software Defined Networking",className:"w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all mb-4 text-center placeholder:text-slate-300",autoComplete:"off"}),g.jsxs("div",{className:"flex gap-2",children:[g.jsxs("button",{type:"button",onClick:()=>E(!S),className:"flex-1 py-3 px-4 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2",children:[g.jsx(Bb,{className:"w-5 h-5"})," 힌트 보기"]}),g.jsx("button",{type:"submit",className:"flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200",children:"정답 확인"})]})]}),(S||T)&&g.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-center",children:[g.jsx("span",{className:"block text-xs font-bold text-yellow-600 mb-1",children:"💡 암기 팁"}),g.jsx("p",{className:"text-slate-700 font-medium",children:Ue.desc})]})]})]}),g.jsx("div",{className:"mt-8 text-center text-slate-400 text-sm",children:"띄어쓰기, 대소문자, 하이픈(-)은 틀려도 정답 처리됩니다."})]})})};const dp="181",KM=0,Cg=1,QM=2,ox=1,$M=2,fa=3,ir=0,Xn=1,da=2,ga=0,Us=1,Ng=2,Dg=3,Lg=4,JM=5,Dr=100,e3=101,t3=102,n3=103,i3=104,a3=200,r3=201,s3=202,o3=203,mh=204,gh=205,l3=206,c3=207,u3=208,f3=209,d3=210,h3=211,p3=212,m3=213,g3=214,vh=0,xh=1,_h=2,Is=3,yh=4,Sh=5,bh=6,Mh=7,lx=0,v3=1,x3=2,nr=0,_3=1,y3=2,S3=3,b3=4,M3=5,E3=6,T3=7,cx=300,zs=301,Bs=302,Eh=303,Th=304,gu=306,Ah=1e3,ha=1001,wh=1002,ri=1003,A3=1004,Ec=1005,xi=1006,Od=1007,Ur=1008,_a=1009,ux=1010,fx=1011,el=1012,hp=1013,Pr=1014,pa=1015,Vs=1016,pp=1017,mp=1018,tl=1020,dx=35902,hx=35899,px=1021,mx=1022,wi=1023,nl=1026,il=1027,gx=1028,gp=1029,vp=1030,xp=1031,_p=1033,iu=33776,au=33777,ru=33778,su=33779,Rh=35840,Ch=35841,Nh=35842,Dh=35843,Lh=36196,Uh=37492,Ph=37496,Oh=37808,Ih=37809,zh=37810,Bh=37811,Fh=37812,kh=37813,Hh=37814,Vh=37815,Gh=37816,jh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Zh=36492,Kh=36494,Qh=36495,$h=36283,Jh=36284,ep=36285,tp=36286,w3=3200,R3=3201,C3=0,N3=1,er="",mi="srgb",Fs="srgb-linear",cu="linear",Wt="srgb",gs=7680,Ug=519,D3=512,L3=513,U3=514,vx=515,P3=516,O3=517,I3=518,z3=519,Pg=35044,Og="300 es",Ii=2e3,uu=2001;function xx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B3(){const s=fu("canvas");return s.style.display="block",s}const Ig={};function zg(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function al(...s){const e=s.join(" ");e in Ig||(Ig[e]=!0,ct(...s))}function F3(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bg=1234567;const Ps=Math.PI/180,rl=180/Math.PI;function js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function yp(s,e){return(s%e+e)%e}function k3(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function H3(s,e,i){return s!==e?(i-s)/(e-s):0}function Qo(s,e,i){return(1-i)*s+i*e}function V3(s,e,i,r){return Qo(s,e,1-Math.exp(-i*r))}function G3(s,e=1){return e-Math.abs(yp(s,e*2)-e)}function j3(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function X3(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function W3(s,e){return s+Math.floor(Math.random()*(e-s+1))}function q3(s,e){return s+Math.random()*(e-s)}function Y3(s){return s*(.5-Math.random())}function Z3(s){s!==void 0&&(Bg=s);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K3(s){return s*Ps}function Q3(s){return s*rl}function $3(s){return(s&s-1)===0&&s!==0}function J3(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tE(s,e,i,r,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((e+r)/2),x=f((e+r)/2),v=c((e-r)/2),_=f((e-r)/2),S=c((r-e)/2),E=f((r-e)/2);switch(l){case"XYX":s.set(d*x,m*v,m*_,d*p);break;case"YZY":s.set(m*_,d*x,m*v,d*p);break;case"ZXZ":s.set(m*v,m*_,d*x,d*p);break;case"XZX":s.set(d*x,m*E,m*S,d*p);break;case"YXY":s.set(m*S,d*x,m*E,d*p);break;case"ZYZ":s.set(m*E,m*S,d*x,d*p);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ls(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:Ps,RAD2DEG:rl,generateUUID:js,clamp:Et,euclideanModulo:yp,mapLinear:k3,inverseLerp:H3,lerp:Qo,damp:V3,pingpong:G3,smoothstep:j3,smootherstep:X3,randInt:W3,randFloat:q3,randFloatSpread:Y3,seededRandom:Z3,degToRad:K3,radToDeg:Q3,isPowerOfTwo:$3,ceilPowerOfTwo:J3,floorPowerOfTwo:eE,setQuaternionFromProperEuler:tE,normalize:On,denormalize:Ls};class zt{constructor(e=0,i=0){zt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],x=r[l+2],v=r[l+3],_=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v;return}if(d>=1){e[i+0]=_,e[i+1]=S,e[i+2]=E,e[i+3]=T;return}if(v!==T||m!==_||p!==S||x!==E){let b=m*_+p*S+x*E+v*T;b<0&&(_=-_,S=-S,E=-E,T=-T,b=-b);let y=1-d;if(b<.9995){const w=Math.acos(b),C=Math.sin(w);y=Math.sin(y*w)/C,d=Math.sin(d*w)/C,m=m*y+_*d,p=p*y+S*d,x=x*y+E*d,v=v*y+T*d}else{m=m*y+_*d,p=p*y+S*d,x=x*y+E*d,v=v*y+T*d;const w=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=w,p*=w,x*=w,v*=w}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],v=c[f],_=c[f+1],S=c[f+2],E=c[f+3];return e[i]=d*E+x*v+m*S-p*_,e[i+1]=m*E+x*_+p*v-d*S,e[i+2]=p*E+x*S+d*_-m*v,e[i+3]=x*E-d*v-m*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),v=d(c/2),_=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*x*v+p*S*E,this._y=p*S*v-_*x*E,this._z=p*x*E+_*S*v,this._w=p*x*v-_*S*E;break;case"YXZ":this._x=_*x*v+p*S*E,this._y=p*S*v-_*x*E,this._z=p*x*E-_*S*v,this._w=p*x*v+_*S*E;break;case"ZXY":this._x=_*x*v-p*S*E,this._y=p*S*v+_*x*E,this._z=p*x*E+_*S*v,this._w=p*x*v-_*S*E;break;case"ZYX":this._x=_*x*v-p*S*E,this._y=p*S*v+_*x*E,this._z=p*x*E-_*S*v,this._w=p*x*v+_*S*E;break;case"YZX":this._x=_*x*v+p*S*E,this._y=p*S*v+_*x*E,this._z=p*x*E-_*S*v,this._w=p*x*v-_*S*E;break;case"XZY":this._x=_*x*v-p*S*E,this._y=p*S*v-_*x*E,this._z=p*x*E+_*S*v,this._w=p*x*v+_*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],_=r+d+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(x-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+f*d+l*p-c*m,this._y=l*x+f*m+c*d-r*p,this._z=c*x+f*p+r*m-l*d,this._w=f*x-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(kg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),x=2*(d*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-d*x,this.y=r+m*x+d*p-c*v,this.z=l+m*v+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new le,kg=new cl;class mt{constructor(e,i,r,l,c,f,d,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p)}set(e,i,r,l,c,f,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],x=r[4],v=r[7],_=r[2],S=r[5],E=r[8],T=l[0],b=l[3],y=l[6],w=l[1],C=l[4],U=l[7],k=l[2],O=l[5],z=l[8];return c[0]=f*T+d*w+m*k,c[3]=f*b+d*C+m*O,c[6]=f*y+d*U+m*z,c[1]=p*T+x*w+v*k,c[4]=p*b+x*C+v*O,c[7]=p*y+x*U+v*z,c[2]=_*T+S*w+E*k,c[5]=_*b+S*C+E*O,c[8]=_*y+S*U+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*d*p-r*c*x+r*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=x*f-d*p,_=d*m-x*c,S=p*c-f*m,E=i*v+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(l*p-x*r)*T,e[2]=(d*r-l*f)*T,e[3]=_*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-d*i)*T,e[6]=S*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(zd.makeScale(e,i)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,i){return this.premultiply(zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new mt,Hg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:e,whitePoint:r,transfer:cu,toXYZ:Hg,fromXYZ:Vg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Hg,fromXYZ:Vg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Ut=nE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class iE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=fu("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class Sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Bd(l[f].image)):c.push(Bd(l[f]))}else c=Bd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let rE=0;const Fd=new le;class zn extends Gs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ha,l=ha,c=xi,f=Ur,d=wi,m=_a,p=zn.DEFAULT_ANISOTROPY,x=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=js(),this.name="",this.source=new Sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=cx;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],S=m[5],E=m[9],T=m[2],b=m[6],y=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-b)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,U=(S+1)/2,k=(y+1)/2,O=(x+_)/4,z=(v+T)/4,Z=(E+b)/4;return C>U&&C>k?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=O/r,c=z/r):U>k?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=O/l,c=Z/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=z/c,l=Z/c),this.set(r,l,c,i),this}let w=Math.sqrt((b-E)*(b-E)+(v-T)*(v-T)+(_-x)*(_-x));return Math.abs(w)<.001&&(w=1),this.x=(b-E)/w,this.y=(v-T)/w,this.z=(_-x)/w,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends Gs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends sE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _x extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ac.subVectors(this.max,jo),xs.subVectors(e.a,jo),_s.subVectors(e.b,jo),ys.subVectors(e.c,jo),Ya.subVectors(_s,xs),Za.subVectors(ys,_s),Mr.subVectors(xs,ys);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-Mr.z,Mr.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,Mr.z,0,-Mr.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-Mr.y,Mr.x,0];return!kd(i,xs,_s,ys,Ac)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,xs,_s,ys,Ac))?!1:(wc.crossVectors(Ya,Za),i=[wc.x,wc.y,wc.z],kd(i,xs,_s,ys,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new le,new le,new le,new le,new le,new le,new le,new le],Ei=new le,Tc=new ul,xs=new le,_s=new le,ys=new le,Ya=new le,Za=new le,Mr=new le,jo=new le,Ac=new le,wc=new le,Er=new le;function kd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),x=r.dot(Er);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const lE=new ul,Xo=new le,Hd=new le;class fl{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Hd)),this.expandByPoint(Xo.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new le,Vd=new le,Rc=new le,Ka=new le,Gd=new le,Cc=new le,jd=new le;class bp{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Vd.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Vd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Rc),d=Ka.dot(this.direction),m=-Ka.dot(Rc),p=Ka.lengthSq(),x=Math.abs(1-f*f);let v,_,S,E;if(x>0)if(v=f*m-d,_=f*d-m,E=c*x,v>=0)if(_>=-E)if(_<=E){const T=1/x;v*=T,_*=T,S=v*(v+f*_+2*d)+_*(f*v+_+2*m)+p}else _=c,v=Math.max(0,-(f*_+d)),S=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(f*_+d)),S=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-f*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(v=Math.max(0,-(f*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+p);else _=f>0?-c:c,v=Math.max(0,-(f*_+d)),S=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vd).addScaledVector(Rc,_),S}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,c){Gd.subVectors(i,e),Cc.subVectors(r,e),jd.crossVectors(Gd,Cc);let f=this.direction.dot(jd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ka.subVectors(this.origin,e);const m=d*this.direction.dot(Cc.crossVectors(Ka,Cc));if(m<0)return null;const p=d*this.direction.dot(Gd.cross(Ka));if(p<0||m+p>f)return null;const x=-d*Ka.dot(jd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,d,m,p,x,v,_,S,E,T,b){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p,x,v,_,S,E,T,b)}set(e,i,r,l,c,f,d,m,p,x,v,_,S,E,T,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=x,y[10]=v,y[14]=_,y[3]=S,y[7]=E,y[11]=T,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ss.setFromMatrixColumn(e,0).length(),c=1/Ss.setFromMatrixColumn(e,1).length(),f=1/Ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=f*x,S=f*v,E=d*x,T=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=_-T*p,i[9]=-d*m,i[2]=T-_*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*x,S=m*v,E=p*x,T=p*v;i[0]=_+T*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*x,i[9]=-d,i[2]=S*d-E,i[6]=T+_*d,i[10]=f*m}else if(e.order==="ZXY"){const _=m*x,S=m*v,E=p*x,T=p*v;i[0]=_-T*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*x,i[9]=T-_*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const _=f*x,S=f*v,E=d*x,T=d*v;i[0]=m*x,i[4]=E*p-S,i[8]=_*p+T,i[1]=m*v,i[5]=T*p+_,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*x,i[4]=T-_*v,i[8]=E*v+S,i[1]=v,i[5]=f*x,i[9]=-d*x,i[2]=-p*x,i[6]=S*v+E,i[10]=_-T*v}else if(e.order==="XZY"){const _=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=_*v+T,i[5]=f*x,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*x,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cE,e,uE)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Qa.crossVectors(r,ii),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Qa.crossVectors(r,ii)),Qa.normalize(),Nc.crossVectors(ii,Qa),l[0]=Qa.x,l[4]=Nc.x,l[8]=ii.x,l[1]=Qa.y,l[5]=Nc.y,l[9]=ii.y,l[2]=Qa.z,l[6]=Nc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],x=r[1],v=r[5],_=r[9],S=r[13],E=r[2],T=r[6],b=r[10],y=r[14],w=r[3],C=r[7],U=r[11],k=r[15],O=l[0],z=l[4],Z=l[8],D=l[12],R=l[1],H=l[5],K=l[9],ce=l[13],pe=l[2],ge=l[6],I=l[10],F=l[14],q=l[3],ne=l[7],J=l[11],P=l[15];return c[0]=f*O+d*R+m*pe+p*q,c[4]=f*z+d*H+m*ge+p*ne,c[8]=f*Z+d*K+m*I+p*J,c[12]=f*D+d*ce+m*F+p*P,c[1]=x*O+v*R+_*pe+S*q,c[5]=x*z+v*H+_*ge+S*ne,c[9]=x*Z+v*K+_*I+S*J,c[13]=x*D+v*ce+_*F+S*P,c[2]=E*O+T*R+b*pe+y*q,c[6]=E*z+T*H+b*ge+y*ne,c[10]=E*Z+T*K+b*I+y*J,c[14]=E*D+T*ce+b*F+y*P,c[3]=w*O+C*R+U*pe+k*q,c[7]=w*z+C*H+U*ge+k*ne,c[11]=w*Z+C*K+U*I+k*J,c[15]=w*D+C*ce+U*F+k*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],S=e[14],E=e[3],T=e[7],b=e[11],y=e[15];return E*(+c*m*v-l*p*v-c*d*_+r*p*_+l*d*S-r*m*S)+T*(+i*m*S-i*p*_+c*f*_-l*f*S+l*p*x-c*m*x)+b*(+i*p*v-i*d*S-c*f*v+r*f*S+c*d*x-r*p*x)+y*(-l*d*x-i*m*v+i*d*_+l*f*v-r*f*_+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],S=e[11],E=e[12],T=e[13],b=e[14],y=e[15],w=v*b*p-T*_*p+T*m*S-d*b*S-v*m*y+d*_*y,C=E*_*p-x*b*p-E*m*S+f*b*S+x*m*y-f*_*y,U=x*T*p-E*v*p+E*d*S-f*T*S-x*d*y+f*v*y,k=E*v*m-x*T*m-E*d*_+f*T*_+x*d*b-f*v*b,O=i*w+r*C+l*U+c*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=w*z,e[1]=(T*_*c-v*b*c-T*l*S+r*b*S+v*l*y-r*_*y)*z,e[2]=(d*b*c-T*m*c+T*l*p-r*b*p-d*l*y+r*m*y)*z,e[3]=(v*m*c-d*_*c-v*l*p+r*_*p+d*l*S-r*m*S)*z,e[4]=C*z,e[5]=(x*b*c-E*_*c+E*l*S-i*b*S-x*l*y+i*_*y)*z,e[6]=(E*m*c-f*b*c-E*l*p+i*b*p+f*l*y-i*m*y)*z,e[7]=(f*_*c-x*m*c+x*l*p-i*_*p-f*l*S+i*m*S)*z,e[8]=U*z,e[9]=(E*v*c-x*T*c-E*r*S+i*T*S+x*r*y-i*v*y)*z,e[10]=(f*T*c-E*d*c+E*r*p-i*T*p-f*r*y+i*d*y)*z,e[11]=(x*d*c-f*v*c-x*r*p+i*v*p+f*r*S-i*d*S)*z,e[12]=k*z,e[13]=(x*T*l-E*v*l+E*r*_-i*T*_-x*r*b+i*v*b)*z,e[14]=(E*d*l-f*T*l-E*r*m+i*T*m+f*r*b-i*d*b)*z,e[15]=(f*v*l-x*d*l+x*r*m-i*v*m-f*r*_+i*d*_)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,x=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*f,0,p*m-l*d,x*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,x=f+f,v=d+d,_=c*p,S=c*x,E=c*v,T=f*x,b=f*v,y=d*v,w=m*p,C=m*x,U=m*v,k=r.x,O=r.y,z=r.z;return l[0]=(1-(T+y))*k,l[1]=(S+U)*k,l[2]=(E-C)*k,l[3]=0,l[4]=(S-U)*O,l[5]=(1-(_+y))*O,l[6]=(b+w)*O,l[7]=0,l[8]=(E+C)*z,l[9]=(b-w)*z,l[10]=(1-(_+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ss.set(l[0],l[1],l[2]).length();const f=Ss.set(l[4],l[5],l[6]).length(),d=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const p=1/c,x=1/f,v=1/d;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=d,this}makePerspective(e,i,r,l,c,f,d=Ii,m=!1){const p=this.elements,x=2*c/(i-e),v=2*c/(r-l),_=(i+e)/(i-e),S=(r+l)/(r-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(d===Ii)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===uu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,d=Ii,m=!1){const p=this.elements,x=2/(i-e),v=2/(r-l),_=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(d===Ii)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===uu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ss=new le,Ti=new ln,cE=new le(0,0,0),uE=new le(1,1,1),Qa=new le,Nc=new le,ii=new le,Gg=new ln,jg=new cl;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return jg.setFromEuler(this),this.setFromQuaternion(jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const Xg=new le,bs=new cl,ra=new ln,Dc=new le,Wo=new le,dE=new le,hE=new cl,Wg=new le(1,0,0),qg=new le(0,1,0),Yg=new le(0,0,1),Zg={type:"added"},pE={type:"removed"},Ms={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Bn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new le,i=new ya,r=new cl,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new mt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,i){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Dc.copy(e):Dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Wo,Dc,this.up):ra.lookAt(Dc,Wo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(ra),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pE),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),v=f(e.shapes),_=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new le(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new le,sa=new le,Wd=new le,oa=new le,Es=new le,Ts=new le,Kg=new le,qd=new le,Yd=new le,Zd=new le,Kd=new on,Qd=new on,$d=new on;class vi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),sa.subVectors(r,i),Wd.subVectors(e,i);const f=Ai.dot(Ai),d=Ai.dot(sa),m=Ai.dot(Wd),p=sa.dot(sa),x=sa.dot(Wd),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(p*m-d*x)*_,E=(f*x-d*m)*_;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,c,f,d,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Kd.setScalar(0),Qd.setScalar(0),$d.setScalar(0),Kd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,r),$d.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Kd,c.x),f.addScaledVector(Qd,c.y),f.addScaledVector($d,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),sa.subVectors(e,i),Ai.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ai.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,d;Es.subVectors(l,r),Ts.subVectors(c,r),qd.subVectors(e,r);const m=Es.dot(qd),p=Ts.dot(qd);if(m<=0&&p<=0)return i.copy(r);Yd.subVectors(e,l);const x=Es.dot(Yd),v=Ts.dot(Yd);if(x>=0&&v<=x)return i.copy(l);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(r).addScaledVector(Es,f);Zd.subVectors(e,c);const S=Es.dot(Zd),E=Ts.dot(Zd);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ts,d);const b=x*E-S*v;if(b<=0&&v-x>=0&&S-E>=0)return Kg.subVectors(c,l),d=(v-x)/(v-x+(S-E)),i.copy(l).addScaledVector(Kg,d);const y=1/(b+T+_);return f=T*y,d=_*y,i.copy(r).addScaledVector(Es,f).addScaledVector(Ts,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Jd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=yp(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Jd(f,c,e+1/3),this.g=Jd(f,c,e),this.b=Jd(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=Sx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ut.workingToColorSpace(Un.copy(this),e),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const x=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=x<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Ut.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(Lc);const r=Qo($a.h,Lc.h,i),l=Qo($a.s,Lc.s,i),c=Qo($a.l,Lc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Pt;Pt.NAMES=Sx;let mE=0;class Xs extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Us,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bx extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new le,Uc=new zt;let gE=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ls(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ls(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ls(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ls(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ls(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class Mx extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ex extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wn extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vE=0;const pi=new ln,eh=new Bn,As=new le,ai=new ul,qo=new ul,En=new le;class qn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Ex:Mx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ai.min,qo.min),ai.expandByPoint(En),En.addVectors(ai.max,qo.max),ai.expandByPoint(En)):(ai.expandByPoint(qo.min),ai.expandByPoint(qo.max))}ai.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)En.fromBufferAttribute(d,p),m&&(As.fromBufferAttribute(e,p),En.add(As)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new le,m[Z]=new le;const p=new le,x=new le,v=new le,_=new zt,S=new zt,E=new zt,T=new le,b=new le;function y(Z,D,R){p.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),_.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),x.sub(p),v.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),b.copy(v).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(H),d[Z].add(T),d[D].add(T),d[R].add(T),m[Z].add(b),m[D].add(b),m[R].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let Z=0,D=w.length;Z<D;++Z){const R=w[Z],H=R.start,K=R.count;for(let ce=H,pe=H+K;ce<pe;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const C=new le,U=new le,k=new le,O=new le;function z(Z){k.fromBufferAttribute(l,Z),O.copy(k);const D=d[Z];C.copy(D),C.sub(k.multiplyScalar(k.dot(D))).normalize(),U.crossVectors(O,D);const H=U.dot(m[Z])<0?-1:1;f.setXYZW(Z,C.x,C.y,C.z,H)}for(let Z=0,D=w.length;Z<D;++Z){const R=w[Z],H=R.start,K=R.count;for(let ce=H,pe=H+K;ce<pe;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new le,c=new le,f=new le,d=new le,m=new le,p=new le,x=new le,v=new le;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),T=e.getX(_+1),b=e.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),d.add(x),m.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,v=d.normalized,_=new p.constructor(m.length*x);let S=0,E=0;for(let T=0,b=m.length;T<b;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*x;for(let y=0;y<x;y++)_[E++]=p[S++]}return new Ri(_,x,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,v=p.length;x<v;x++){const _=p[x],S=e(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];x.push(S.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],v=c[p];for(let _=0,S=v.length;_<S;_++)x.push(v[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new ln,Tr=new bp,Pc=new fl,$g=new le,Oc=new le,Ic=new le,zc=new le,th=new le,Bc=new le,Jg=new le,Fc=new le;class ar extends Bn{constructor(e=new qn,i=new bx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],v=c[m];x!==0&&(th.fromBufferAttribute(v,e),f?Bc.addScaledVector(th,x):Bc.addScaledVector(th.sub(i),x))}i.add(Bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(c),Tr.copy(e.ray).recast(e.near),!(Pc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Pc,$g)===null||Tr.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Qg.copy(c).invert(),Tr.copy(e.ray).applyMatrix4(Qg),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Tr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const b=_[E],y=f[b.materialIndex],w=Math.max(b.start,S.start),C=Math.min(d.count,Math.min(b.start+b.count,S.start+S.count));for(let U=w,k=C;U<k;U+=3){const O=d.getX(U),z=d.getX(U+1),Z=d.getX(U+2);l=kc(this,y,e,r,p,x,v,O,z,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let b=E,y=T;b<y;b+=3){const w=d.getX(b),C=d.getX(b+1),U=d.getX(b+2);l=kc(this,f,e,r,p,x,v,w,C,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const b=_[E],y=f[b.materialIndex],w=Math.max(b.start,S.start),C=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let U=w,k=C;U<k;U+=3){const O=U,z=U+1,Z=U+2;l=kc(this,y,e,r,p,x,v,O,z,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let b=E,y=T;b<y;b+=3){const w=b,C=b+1,U=b+2;l=kc(this,f,e,r,p,x,v,w,C,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function xE(s,e,i,r,l,c,f,d){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,e.side===ir,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:s}}function kc(s,e,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Oc),s.getVertexPosition(m,Ic),s.getVertexPosition(p,zc);const x=xE(s,e,i,r,Oc,Ic,zc,Jg);if(x){const v=new le;vi.getBarycoord(Jg,Oc,Ic,zc,v),l&&(x.uv=vi.getInterpolatedAttribute(l,d,m,p,v,new zt)),c&&(x.uv1=vi.getInterpolatedAttribute(c,d,m,p,v,new zt)),f&&(x.normal=vi.getInterpolatedAttribute(f,d,m,p,v,new le),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new le,materialIndex:0};vi.getNormal(Oc,Ic,zc,_.normal),x.face=_,x.barycoord=v}return x}class Ws extends qn{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(v,2));function E(T,b,y,w,C,U,k,O,z,Z,D){const R=U/z,H=k/Z,K=U/2,ce=k/2,pe=O/2,ge=z+1,I=Z+1;let F=0,q=0;const ne=new le;for(let J=0;J<I;J++){const P=J*H-ce;for(let X=0;X<ge;X++){const fe=X*R-K;ne[T]=fe*w,ne[b]=P*C,ne[y]=pe,p.push(ne.x,ne.y,ne.z),ne[T]=0,ne[b]=0,ne[y]=O>0?1:-1,x.push(ne.x,ne.y,ne.z),v.push(X/z),v.push(1-J/Z),F+=1}}for(let J=0;J<Z;J++)for(let P=0;P<z;P++){const X=_+P+ge*J,fe=_+P+ge*(J+1),_e=_+(P+1)+ge*(J+1),Me=_+(P+1)+ge*J;m.push(X,fe,Me),m.push(fe,_e,Me),q+=6}d.addGroup(S,q,D),S+=q,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const l in r)e[l]=r[l]}return e}function _E(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Tx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const yE={clone:ks,merge:In};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ax extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new le,ev=new zt,tv=new zt;class gi extends Ax{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ps*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Rs=1;class ME extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(ws,Rs,e,i);l.layers=this.layers,this.add(l);const c=new gi(ws,Rs,e,i);c.layers=this.layers,this.add(c);const f=new gi(ws,Rs,e,i);f.layers=this.layers,this.add(f);const d=new gi(ws,Rs,e,i);d.layers=this.layers,this.add(d);const m=new gi(ws,Rs,e,i);m.layers=this.layers,this.add(m);const p=new gi(ws,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(v,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wx extends zn{constructor(e=[],i=zs,r,l,c,f,d,m,p,x){super(e,i,r,l,c,f,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EE extends Or{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new wx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ws(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ga});c.uniforms.tEquirect.value=i;const f=new ar(l,c),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=xi),new ME(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Hc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const b=i.getJointPose(T,r),y=this._getHandJoint(p,T);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Mp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=i}clone(){return new Mp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wE extends zn{constructor(e=null,i=1,r=1,l,c,f,d,m,p=ri,x=ri,v,_){super(null,f,d,m,p,x,l,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new le,RE=new le,CE=new mt;class Nr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ih.subVectors(r,i).cross(RE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ih),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||CE.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new fl,NE=new zt(.5,.5),Vc=new le;class Rx{constructor(e=new Nr,i=new Nr,r=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],x=c[4],v=c[5],_=c[6],S=c[7],E=c[8],T=c[9],b=c[10],y=c[11],w=c[12],C=c[13],U=c[14],k=c[15];if(l[0].setComponents(p-f,S-x,y-E,k-w).normalize(),l[1].setComponents(p+f,S+x,y+E,k+w).normalize(),l[2].setComponents(p+d,S+v,y+T,k+C).normalize(),l[3].setComponents(p-d,S-v,y-T,k-C).normalize(),r)l[4].setComponents(m,_,b,U).normalize(),l[5].setComponents(p-m,S-_,y-b,k-U).normalize();else if(l[4].setComponents(p-m,S-_,y-b,k-U).normalize(),i===Ii)l[5].setComponents(p+m,S+_,y+b,k+U).normalize();else if(i===uu)l[5].setComponents(m,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const i=NE.distanceTo(e.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class np extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new le,hu=new le,nv=new ln,Yo=new bp,Gc=new fl,ah=new le,iv=new le;class DE extends Bn{constructor(e=new qn,i=new np){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)du.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Wn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;nv.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(nv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,b=E-1;T<b;T+=p){const y=x.getX(T),w=x.getX(T+1),C=jc(this,e,Yo,m,y,w,T);C&&i.push(C)}if(this.isLineLoop){const T=x.getX(E-1),b=x.getX(S),y=jc(this,e,Yo,m,T,b,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=S,b=E-1;T<b;T+=p){const y=jc(this,e,Yo,m,T,T+1,T);y&&i.push(y)}if(this.isLineLoop){const T=jc(this,e,Yo,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function jc(s,e,i,r,l,c,f){const d=s.geometry.attributes.position;if(du.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(du,hu,ah,iv)>r)return;ah.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ah);if(!(p<e.near||p>e.far))return{distance:p,point:iv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const av=new le,rv=new le;class sv extends DE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)av.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+av.distanceTo(rv);e.setAttribute("lineDistance",new Wn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cx extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ov=new ln,ip=new bp,Xc=new fl,Wc=new le;class LE extends Bn{constructor(e=new qn,i=new Cx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,e.ray.intersectsSphere(Xc)===!1)return;ov.copy(l).invert(),ip.copy(e.ray).applyMatrix4(ov);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=_,T=S;E<T;E++){const b=p.getX(E);Wc.fromBufferAttribute(v,b),lv(Wc,b,m,l,e,i,this)}}else{const _=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=_,T=S;E<T;E++)Wc.fromBufferAttribute(v,E),lv(Wc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function lv(s,e,i,r,l,c,f){const d=ip.distanceSqToPoint(s);if(d<i){const m=new le;ip.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Nx extends zn{constructor(e,i,r=Pr,l,c,f,d=ri,m=ri,p,x=nl,v=1){if(x!==nl&&x!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,c,f,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ep extends qn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],f=[];d(l),p(r),x(),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(c.slice(),3)),this.setAttribute("uv",new Wn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const C=new le,U=new le,k=new le;for(let O=0;O<i.length;O+=3)S(i[O+0],C),S(i[O+1],U),S(i[O+2],k),m(C,U,k,w)}function m(w,C,U,k){const O=k+1,z=[];for(let Z=0;Z<=O;Z++){z[Z]=[];const D=w.clone().lerp(U,Z/O),R=C.clone().lerp(U,Z/O),H=O-Z;for(let K=0;K<=H;K++)K===0&&Z===O?z[Z][K]=D:z[Z][K]=D.clone().lerp(R,K/H)}for(let Z=0;Z<O;Z++)for(let D=0;D<2*(O-Z)-1;D++){const R=Math.floor(D/2);D%2===0?(_(z[Z][R+1]),_(z[Z+1][R]),_(z[Z][R])):(_(z[Z][R+1]),_(z[Z+1][R+1]),_(z[Z+1][R]))}}function p(w){const C=new le;for(let U=0;U<c.length;U+=3)C.x=c[U+0],C.y=c[U+1],C.z=c[U+2],C.normalize().multiplyScalar(w),c[U+0]=C.x,c[U+1]=C.y,c[U+2]=C.z}function x(){const w=new le;for(let C=0;C<c.length;C+=3){w.x=c[C+0],w.y=c[C+1],w.z=c[C+2];const U=b(w)/2/Math.PI+.5,k=y(w)/Math.PI+.5;f.push(U,1-k)}E(),v()}function v(){for(let w=0;w<f.length;w+=6){const C=f[w+0],U=f[w+2],k=f[w+4],O=Math.max(C,U,k),z=Math.min(C,U,k);O>.9&&z<.1&&(C<.2&&(f[w+0]+=1),U<.2&&(f[w+2]+=1),k<.2&&(f[w+4]+=1))}}function _(w){c.push(w.x,w.y,w.z)}function S(w,C){const U=w*3;C.x=e[U+0],C.y=e[U+1],C.z=e[U+2]}function E(){const w=new le,C=new le,U=new le,k=new le,O=new zt,z=new zt,Z=new zt;for(let D=0,R=0;D<c.length;D+=9,R+=6){w.set(c[D+0],c[D+1],c[D+2]),C.set(c[D+3],c[D+4],c[D+5]),U.set(c[D+6],c[D+7],c[D+8]),O.set(f[R+0],f[R+1]),z.set(f[R+2],f[R+3]),Z.set(f[R+4],f[R+5]),k.copy(w).add(C).add(U).divideScalar(3);const H=b(k);T(O,R+0,w,H),T(z,R+2,C,H),T(Z,R+4,U,H)}}function T(w,C,U,k){k<0&&w.x===1&&(f[C]=w.x-1),U.x===0&&U.z===0&&(f[C]=k/2/Math.PI+.5)}function b(w){return Math.atan2(w.z,-w.x)}function y(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.details)}}const qc=new le,Yc=new le,rh=new le,Zc=new vi;class UE extends qn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Ps*i),f=e.getIndex(),d=e.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],x=["a","b","c"],v=new Array(3),_={},S=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b,c:y}=Zc;if(T.fromBufferAttribute(d,p[0]),b.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Zc.getNormal(rh),v[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,v[1]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,v[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let w=0;w<3;w++){const C=(w+1)%3,U=v[w],k=v[C],O=Zc[x[w]],z=Zc[x[C]],Z=`${U}_${k}`,D=`${k}_${U}`;D in _&&_[D]?(rh.dot(_[D].normal)<=c&&(S.push(O.x,O.y,O.z),S.push(z.x,z.y,z.z)),_[D]=null):Z in _||(_[Z]={index0:p[w],index1:p[C],normal:rh.clone()})}}for(const E in _)if(_[E]){const{index0:T,index1:b}=_[E];qc.fromBufferAttribute(d,T),Yc.fromBufferAttribute(d,b),S.push(qc.x,qc.y,qc.z),S.push(Yc.x,Yc.y,Yc.z)}this.setAttribute("position",new Wn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tp extends Ep{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Tp(e.radius,e.detail)}}class vu extends qn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,v=e/d,_=i/m,S=[],E=[],T=[],b=[];for(let y=0;y<x;y++){const w=y*_-f;for(let C=0;C<p;C++){const U=C*v-c;E.push(U,-w,0),T.push(0,0,1),b.push(C/d),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let w=0;w<d;w++){const C=w+p*y,U=w+p*(y+1),k=w+1+p*(y+1),O=w+1+p*y;S.push(C,U,O),S.push(U,k,O)}this.setIndex(S),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(T,3)),this.setAttribute("uv",new Wn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class PE extends qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],r=new Set,l=new le,c=new le;if(e.index!==null){const f=e.attributes.position,d=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,x=m.length;p<x;++p){const v=m[p],_=v.start,S=v.count;for(let E=_,T=_+S;E<T;E+=3)for(let b=0;b<3;b++){const y=d.getX(E+b),w=d.getX(E+(b+1)%3);l.fromBufferAttribute(f,y),c.fromBufferAttribute(f,w),cv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let d=0,m=f.count/3;d<m;d++)for(let p=0;p<3;p++){const x=3*d+p,v=3*d+(p+1)%3;l.fromBufferAttribute(f,x),c.fromBufferAttribute(f,v),cv(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Wn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function cv(s,e,i){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class OE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zE extends Ax{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BE extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function uv(s,e,i,r){const l=FE(r);switch(i){case px:return s*e;case gx:return s*e/l.components*l.byteLength;case gp:return s*e/l.components*l.byteLength;case vp:return s*e*2/l.components*l.byteLength;case xp:return s*e*2/l.components*l.byteLength;case mx:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case _p:return s*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case Rh:case Nh:return Math.max(s,8)*Math.max(e,8)/2;case Lh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $h:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FE(s){switch(s){case _a:case ux:return{byteLength:1,components:1};case el:case fx:case Vs:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Pr:case hp:case pa:return{byteLength:4,components:1};case dx:case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);function Lx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function kE(s){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const x=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,x);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
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
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eT=`#ifdef USE_IRIDESCENCE
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
#endif`,tT=`#ifdef USE_BUMPMAP
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
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uT=`#define PI 3.141592653589793
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
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dT=`vec3 transformedNormal = objectNormal;
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
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vT="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
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
}`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,PT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
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
#endif`,FT=`uniform sampler2D dfgLUT;
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
}`,kT=`
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
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
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KT=`#if defined( USE_POINTS_UV )
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
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
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
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_A=`#ifdef DITHERING
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
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`;const kA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$A=`uniform float scale;
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
}`,JA=`uniform vec3 diffuse;
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
}`,xw=`uniform float rotation;
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
}`,_w=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:HE,alphahash_pars_fragment:VE,alphamap_fragment:GE,alphamap_pars_fragment:jE,alphatest_fragment:XE,alphatest_pars_fragment:WE,aomap_fragment:qE,aomap_pars_fragment:YE,batching_pars_vertex:ZE,batching_vertex:KE,begin_vertex:QE,beginnormal_vertex:$E,bsdfs:JE,iridescence_fragment:eT,bumpmap_pars_fragment:tT,clipping_planes_fragment:nT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:aT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:oT,color_pars_vertex:lT,color_vertex:cT,common:uT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:dT,displacementmap_pars_vertex:hT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:vT,colorspace_pars_fragment:xT,envmap_fragment:_T,envmap_common_pars_fragment:yT,envmap_pars_fragment:ST,envmap_pars_vertex:bT,envmap_physical_pars_fragment:UT,envmap_vertex:MT,fog_vertex:ET,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:wT,gradientmap_pars_fragment:RT,lightmap_pars_fragment:CT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:DT,lights_pars_begin:LT,lights_toon_fragment:PT,lights_toon_pars_fragment:OT,lights_phong_fragment:IT,lights_phong_pars_fragment:zT,lights_physical_fragment:BT,lights_physical_pars_fragment:FT,lights_fragment_begin:kT,lights_fragment_maps:HT,lights_fragment_end:VT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:WT,map_fragment:qT,map_pars_fragment:YT,map_particle_fragment:ZT,map_particle_pars_fragment:KT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:$T,morphinstance_vertex:JT,morphcolor_vertex:eA,morphnormal_vertex:tA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:dA,iridescence_pars_fragment:hA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:vA,dithering_fragment:xA,dithering_pars_fragment:_A,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:MA,shadowmap_vertex:EA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:wA,skinning_vertex:RA,skinnormal_vertex:CA,specularmap_fragment:NA,specularmap_pars_fragment:DA,tonemapping_fragment:LA,tonemapping_pars_fragment:UA,transmission_fragment:PA,transmission_pars_fragment:OA,uv_pars_fragment:IA,uv_pars_vertex:zA,uv_vertex:BA,worldpos_vertex:FA,background_vert:kA,background_frag:HA,backgroundCube_vert:VA,backgroundCube_frag:GA,cube_vert:jA,cube_frag:XA,depth_vert:WA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:$A,linedashed_frag:JA,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:aw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:ow,meshphong_vert:lw,meshphong_frag:cw,meshphysical_vert:uw,meshphysical_frag:fw,meshtoon_vert:dw,meshtoon_frag:hw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:vw,sprite_vert:xw,sprite_frag:_w},ze={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Kc={r:0,b:0,g:0},wr=new ya,yw=new ln;function Sw(s,e,i,r,l,c,f){const d=new Pt(0);let m=c===!0?0:1,p,x,v=null,_=0,S=null;function E(C){let U=C.isScene===!0?C.background:null;return U&&U.isTexture&&(U=(C.backgroundBlurriness>0?i:e).get(U)),U}function T(C){let U=!1;const k=E(C);k===null?y(d,m):k&&k.isColor&&(y(k,1),U=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(C,U){const k=E(U);k&&(k.isCubeTexture||k.mapping===gu)?(x===void 0&&(x=new ar(new Ws(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:ks(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),wr.copy(U.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),x.material.uniforms.envMap.value=k,x.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(wr)),x.material.toneMapped=Ut.getTransfer(k.colorSpace)!==Wt,(v!==k||_!==k.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=k,_=k.version,S=s.toneMapping),x.layers.enableAll(),C.unshift(x,x.geometry,x.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new ar(new vu(2,2),new Sa({name:"BackgroundMaterial",uniforms:ks(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(k.colorSpace)!==Wt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||_!==k.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=k,_=k.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,U){C.getRGB(Kc,Tx(s)),r.buffers.color.setClear(Kc.r,Kc.g,Kc.b,U,f)}function w(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,U=1){d.set(C),m=U,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,y(d,m)},render:T,addToRenderList:b,dispose:w}}function bw(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function d(R,H,K,ce,pe){let ge=!1;const I=v(ce,K,H);c!==I&&(c=I,p(c.object)),ge=S(R,ce,K,pe),ge&&E(R,ce,K,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,U(R,H,K,ce),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,H,K){const ce=K.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let ge=pe[H.id];ge===void 0&&(ge={},pe[H.id]=ge);let I=ge[ce];return I===void 0&&(I=_(m()),ge[ce]=I),I}function _(R){const H=[],K=[],ce=[];for(let pe=0;pe<i;pe++)H[pe]=0,K[pe]=0,ce[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ce,object:R,attributes:{},index:null}}function S(R,H,K,ce){const pe=c.attributes,ge=H.attributes;let I=0;const F=K.getAttributes();for(const q in F)if(F[q].location>=0){const J=pe[q];let P=ge[q];if(P===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),J===void 0||J.attribute!==P||P&&J.data!==P.data)return!0;I++}return c.attributesNum!==I||c.index!==ce}function E(R,H,K,ce){const pe={},ge=H.attributes;let I=0;const F=K.getAttributes();for(const q in F)if(F[q].location>=0){let J=ge[q];J===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const P={};P.attribute=J,J&&J.data&&(P.data=J.data),pe[q]=P,I++}c.attributes=pe,c.attributesNum=I,c.index=ce}function T(){const R=c.newAttributes;for(let H=0,K=R.length;H<K;H++)R[H]=0}function b(R){y(R,0)}function y(R,H){const K=c.newAttributes,ce=c.enabledAttributes,pe=c.attributeDivisors;K[R]=1,ce[R]===0&&(s.enableVertexAttribArray(R),ce[R]=1),pe[R]!==H&&(s.vertexAttribDivisor(R,H),pe[R]=H)}function w(){const R=c.newAttributes,H=c.enabledAttributes;for(let K=0,ce=H.length;K<ce;K++)H[K]!==R[K]&&(s.disableVertexAttribArray(K),H[K]=0)}function C(R,H,K,ce,pe,ge,I){I===!0?s.vertexAttribIPointer(R,H,K,pe,ge):s.vertexAttribPointer(R,H,K,ce,pe,ge)}function U(R,H,K,ce){T();const pe=ce.attributes,ge=K.getAttributes(),I=H.defaultAttributeValues;for(const F in ge){const q=ge[F];if(q.location>=0){let ne=pe[F];if(ne===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const J=ne.normalized,P=ne.itemSize,X=e.get(ne);if(X===void 0)continue;const fe=X.buffer,_e=X.type,Me=X.bytesPerElement,te=_e===s.INT||_e===s.UNSIGNED_INT||ne.gpuType===hp;if(ne.isInterleavedBufferAttribute){const de=ne.data,Ce=de.stride,Ue=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ae=0;Ae<q.locationSize;Ae++)y(q.location+Ae,de.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ae=0;Ae<q.locationSize;Ae++)b(q.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Ae=0;Ae<q.locationSize;Ae++)C(q.location+Ae,P/q.locationSize,_e,J,Ce*Me,(Ue+P/q.locationSize*Ae)*Me,te)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)y(q.location+de,ne.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<q.locationSize;de++)b(q.location+de);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let de=0;de<q.locationSize;de++)C(q.location+de,P/q.locationSize,_e,J,P*Me,P/q.locationSize*de*Me,te)}}else if(I!==void 0){const J=I[F];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(q.location,J);break;case 3:s.vertexAttrib3fv(q.location,J);break;case 4:s.vertexAttrib4fv(q.location,J);break;default:s.vertexAttrib1fv(q.location,J)}}}}w()}function k(){Z();for(const R in r){const H=r[R];for(const K in H){const ce=H[K];for(const pe in ce)x(ce[pe].object),delete ce[pe];delete H[K]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const K in H){const ce=H[K];for(const pe in ce)x(ce[pe].object),delete ce[pe];delete H[K]}delete r[R.id]}function z(R){for(const H in r){const K=r[H];if(K[R.id]===void 0)continue;const ce=K[R.id];for(const pe in ce)x(ce[pe].object),delete ce[pe];delete K[R.id]}}function Z(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:b,disableUnusedAttributes:w}}function Mw(s,e,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function f(p,x,v){v!==0&&(s.drawArraysInstanced(r,p,x,v),i.update(x,r,v))}function d(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let S=0;for(let E=0;E<v;E++)S+=x[E];i.update(S,r,1)}function m(p,x,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],x[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=x[T]*_[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Ew(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_a&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==pa&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ct("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:U,vertexTextures:k,maxSamples:O}}function Tw(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Nr,d=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||l;return l=_,r=v.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,T=v.clipIntersection,b=v.clipShadows,y=s.get(v);if(!l||E===null||E.length===0||c&&!b)c?x(null):p();else{const w=c?0:r,C=w*4;let U=y.clippingState||null;m.value=U,U=x(E,_,C,S);for(let k=0;k!==C;++k)U[k]=i[k];y.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,S,E){const T=v!==null?v.length:0;let b=null;if(T!==0){if(b=m.value,E!==!0||b===null){const y=S+T*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(b===null||b.length<y)&&(b=new Float32Array(y));for(let C=0,U=S;C!==T;++C,U+=4)f.copy(v[C]).applyMatrix4(w,d),f.normal.toArray(b,U),b[U+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function Aw(s){let e=new WeakMap;function i(f,d){return d===Eh?f.mapping=zs:d===Th&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Eh||d===Th)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new EE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,fv=[.125,.215,.35,.446,.526,.582],Lr=20,ww=256,Zo=new zE,dv=new Pt;let sh=null,oh=0,lh=0,ch=!1;const Rw=new le;class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=Rw}=c;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Vs,format:wi,colorSpace:Fs,depthBuffer:!1},l=pv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cw(c)),this._blurMaterial=Dw(c,e,i),this._ggxMaterial=Nw(c,e,i)}return l}_compileMaterial(e){const i=new ar(new qn,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(dv),v.toneMapping=nr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ar(new Ws,new bx({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let y=!1;const w=e.background;w?w.isColor&&(b.color.copy(w),e.background=null,y=!0):(b.color.copy(dv),y=!0);for(let C=0;C<6;C++){const U=C%3;U===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[C],c.y,c.z)):U===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[C]));const k=this._cubeSize;Cs(l,U*k,C>2?k:0,k,k),v.setRenderTarget(l),y&&v.render(T,m),v.render(e,m)}v.toneMapping=S,v.autoClear=_,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zs||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=.05+p*.95,S=v*_,{_lodMax:E}=this,T=this._sizeLods[r],b=3*T*(r>E-tr?r-E+tr:0),y=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Cs(c,b,y,3*T,2*T),l.setRenderTarget(c),l.render(d,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Cs(e,b,y,3*T,2*T),l.setRenderTarget(e),l.render(d,Zo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Lr-1),T=c/E,b=isFinite(c)?1+Math.floor(x*T):Lr;b>Lr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Lr}`);const y=[];let w=0;for(let z=0;z<Lr;++z){const Z=z/T,D=Math.exp(-Z*Z/2);y.push(D),z===0?w+=D:z<b&&(w+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/w;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=y,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-r;const U=this._sizeLods[l],k=3*U*(l>C-tr?l-C+tr:0),O=4*(this._cubeSize-U);Cs(i,k,O,3*U,2*U),m.setRenderTarget(i),m.render(v,Zo)}}function Cw(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+fv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-tr?m=fv[f-s+tr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,v=1+p,_=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,E=6,T=3,b=2,y=1,w=new Float32Array(T*E*S),C=new Float32Array(b*E*S),U=new Float32Array(y*E*S);for(let O=0;O<S;O++){const z=O%3*2/3-1,Z=O>2?0:-1,D=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];w.set(D,T*E*O),C.set(_,b*E*O);const R=[O,O,O,O,O,O];U.set(R,y*E*O)}const k=new qn;k.setAttribute("position",new Ri(w,T)),k.setAttribute("uv",new Ri(C,b)),k.setAttribute("faceIndex",new Ri(U,y)),r.push(new ar(k,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function pv(s,e,i){const r=new Or(s,e,i);return r.texture.mapping=gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function Nw(s,e,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Dw(s,e,i){const r=new Float32Array(Lr),l=new le(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function mv(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function gv(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function Lw(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Eh||m===Th,x=m===zs||m===Bs;if(p||x){let v=e.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new hv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new hv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Uw(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&al("WebGLRenderer: "+r+" extension not supported."),l}}}function Pw(s,e,i,r){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const w=S.array;T=S.version;for(let C=0,U=w.length;C<U;C+=3){const k=w[C+0],O=w[C+1],z=w[C+2];_.push(k,O,O,z,z,k)}}else if(E!==void 0){const w=E.array;T=E.version;for(let C=0,U=w.length/3-1;C<U;C+=3){const k=C+0,O=C+1,z=C+2;_.push(k,O,O,z,z,k)}}else return;const b=new(xx(_)?Ex:Mx)(_,1);b.version=T;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function x(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function Ow(s,e,i){let r;function l(_){r=_}let c,f;function d(_){c=_.type,f=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*f),i.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,_*f,E),i.update(S,r,E))}function x(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,E);let b=0;for(let y=0;y<E;y++)b+=S[y];i.update(b,r,1)}function v(_,S,E,T){if(E===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<_.length;y++)p(_[y]/f,S[y],T[y]);else{b.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,T,0,E);let y=0;for(let w=0;w<E;w++)y+=S[w]*T[w];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function Iw(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:sn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zw(s,e,i){const r=new WeakMap,l=new on;function c(f,d,m){const p=f.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let S=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",S)};_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),T===!0&&(U=2),b===!0&&(U=3);let k=d.attributes.position.count*U,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*O*4*v),Z=new _x(z,k,O,v);Z.type=pa,Z.needsUpdate=!0;const D=U*4;for(let R=0;R<v;R++){const H=y[R],K=w[R],ce=C[R],pe=k*O*4*R;for(let ge=0;ge<H.count;ge++){const I=ge*D;E===!0&&(l.fromBufferAttribute(H,ge),z[pe+I+0]=l.x,z[pe+I+1]=l.y,z[pe+I+2]=l.z,z[pe+I+3]=0),T===!0&&(l.fromBufferAttribute(K,ge),z[pe+I+4]=l.x,z[pe+I+5]=l.y,z[pe+I+6]=l.z,z[pe+I+7]=0),b===!0&&(l.fromBufferAttribute(ce,ge),z[pe+I+8]=l.x,z[pe+I+9]=l.y,z[pe+I+10]=l.z,z[pe+I+11]=ce.itemSize===4?l.w:1)}}_={count:v,texture:Z,size:new zt(k,O)},r.set(d,_),d.addEventListener("dispose",S)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let T=0;T<p.length;T++)S+=p[T];const E=d.morphTargetsRelative?1:1-S;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Bw(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,v=e.get(m,x);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Ux=new zn,vv=new Nx(1,1),Px=new _x,Ox=new oE,Ix=new wx,xv=[],_v=[],yv=new Float32Array(16),Sv=new Float32Array(9),bv=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=xv[l];if(c===void 0&&(c=new Float32Array(l),xv[l]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function _u(s,e){let i=_v[e];i===void 0&&(i=new Int32Array(e),_v[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Fw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function kw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function Hw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function Vw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function Gw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(xn(i,r))return;bv.set(r),s.uniformMatrix2fv(this.addr,!1,bv),_n(i,r)}}function jw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(xn(i,r))return;Sv.set(r),s.uniformMatrix3fv(this.addr,!1,Sv),_n(i,r)}}function Xw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(xn(i,r))return;yv.set(r),s.uniformMatrix4fv(this.addr,!1,yv),_n(i,r)}}function Ww(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function qw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function Yw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function Zw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function Kw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Qw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function $w(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function Jw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function e4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(vv.compareFunction=vx,c=vv):c=Ux,i.setTexture2D(e||c,l)}function t4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ox,l)}function n4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ix,l)}function i4(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Px,l)}function a4(s){switch(s){case 5126:return Fw;case 35664:return kw;case 35665:return Hw;case 35666:return Vw;case 35674:return Gw;case 35675:return jw;case 35676:return Xw;case 5124:case 35670:return Ww;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return $w;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return e4;case 35679:case 36299:case 36307:return t4;case 35680:case 36300:case 36308:case 36293:return n4;case 36289:case 36303:case 36311:case 36292:return i4}}function r4(s,e){s.uniform1fv(this.addr,e)}function s4(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function o4(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function l4(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function c4(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function u4(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function f4(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function d4(s,e){s.uniform1iv(this.addr,e)}function h4(s,e){s.uniform2iv(this.addr,e)}function p4(s,e){s.uniform3iv(this.addr,e)}function m4(s,e){s.uniform4iv(this.addr,e)}function g4(s,e){s.uniform1uiv(this.addr,e)}function v4(s,e){s.uniform2uiv(this.addr,e)}function x4(s,e){s.uniform3uiv(this.addr,e)}function _4(s,e){s.uniform4uiv(this.addr,e)}function y4(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Ux,c[f])}function S4(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ox,c[f])}function b4(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ix,c[f])}function M4(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Px,c[f])}function E4(s){switch(s){case 5126:return r4;case 35664:return s4;case 35665:return o4;case 35666:return l4;case 35674:return c4;case 35675:return u4;case 35676:return f4;case 5124:case 35670:return d4;case 35667:case 35671:return h4;case 35668:case 35672:return p4;case 35669:case 35673:return m4;case 5125:return g4;case 36294:return v4;case 36295:return x4;case 36296:return _4;case 35678:case 36198:case 36298:case 36306:case 35682:return y4;case 35679:case 36299:case 36307:return S4;case 35680:case 36300:case 36308:case 36293:return b4;case 36289:case 36303:case 36311:case 36292:return M4}}class T4{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a4(i.type)}}class A4{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E4(i.type)}}class w4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function Mv(s,e){s.seq.push(e),s.map[e.id]=e}function R4(s,e,i){const r=s.name,l=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),f=uh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Mv(i,p===void 0?new T4(d,s,e):new A4(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new w4(d),Mv(i,v)),i=v}}}class ou{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);R4(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Ev(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const C4=37297;let N4=0;function D4(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Tv=new mt;function L4(s){Ut._getMatrix(Tv,Ut.workingColorSpace,s);const e=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case cu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Av(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+D4(s.getShaderSource(e),d)}else return c}function U4(s,e){const i=L4(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P4(s,e){let i;switch(e){case _3:i="Linear";break;case y3:i="Reinhard";break;case S3:i="Cineon";break;case b3:i="ACESFilmic";break;case E3:i="AgX";break;case T3:i="Neutral";break;case M3:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new le;function O4(){Ut.getLuminanceCoefficients(Qc);const s=Qc.x.toFixed(4),e=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I4(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function z4(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function B4(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function Ko(s){return s!==""}function wv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F4=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(s){return s.replace(F4,H4)}const k4=new Map;function H4(s,e){let i=vt[e];if(i===void 0){const r=k4.get(e);if(r!==void 0)i=vt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(i)}const V4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(s){return s.replace(V4,G4)}function G4(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Nv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function j4(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function X4(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W4(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function q4(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lx:e="ENVMAP_BLENDING_MULTIPLY";break;case v3:e="ENVMAP_BLENDING_MIX";break;case x3:e="ENVMAP_BLENDING_ADD";break}return e}function Y4(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Z4(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=j4(i),p=X4(i),x=W4(i),v=q4(i),_=Y4(i),S=I4(i),E=z4(c),T=l.createProgram();let b,y,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),y.length>0&&(y+=`
`)):(b=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),y=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?vt.tonemapping_pars_fragment:"",i.toneMapping!==nr?P4("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,U4("linearToOutputTexel",i.outputColorSpace),O4(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),f=ap(f),f=wv(f,i),f=Rv(f,i),d=ap(d),d=wv(d,i),d=Rv(d,i),f=Cv(f),d=Cv(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=w+b+f,U=w+y+d,k=Ev(l,l.VERTEX_SHADER,C),O=Ev(l,l.FRAGMENT_SHADER,U);l.attachShader(T,k),l.attachShader(T,O),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(H){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",ce=l.getShaderInfoLog(k)||"",pe=l.getShaderInfoLog(O)||"",ge=K.trim(),I=ce.trim(),F=pe.trim();let q=!0,ne=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,k,O);else{const J=Av(l,k,"vertex"),P=Av(l,O,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ge+`
`+J+`
`+P)}else ge!==""?ct("WebGLProgram: Program Info Log:",ge):(I===""||F==="")&&(ne=!1);ne&&(H.diagnostics={runnable:q,programLog:ge,vertexShader:{log:I,prefix:b},fragmentShader:{log:F,prefix:y}})}l.deleteShader(k),l.deleteShader(O),Z=new ou(l,T),D=B4(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,C4)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=N4++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=O,this}let K4=0;class Q4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new $4(e),i.set(e,r)),r}}class $4{constructor(e){this.id=K4++,this.code=e,this.usedTimes=0}}function J4(s,e,i,r,l,c,f){const d=new yx,m=new Q4,p=new Set,x=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function b(D,R,H,K,ce){const pe=K.fog,ge=ce.geometry,I=D.isMeshStandardMaterial?K.environment:null,F=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),q=F&&F.mapping===gu?F.image.height:null,ne=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&ct("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const J=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,P=J!==void 0?J.length:0;let X=0;ge.morphAttributes.position!==void 0&&(X=1),ge.morphAttributes.normal!==void 0&&(X=2),ge.morphAttributes.color!==void 0&&(X=3);let fe,_e,Me,te;if(ne){const Ct=Oi[ne];fe=Ct.vertexShader,_e=Ct.fragmentShader}else fe=D.vertexShader,_e=D.fragmentShader,m.update(D),Me=m.getVertexShaderID(D),te=m.getFragmentShaderID(D);const de=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ue=ce.isInstancedMesh===!0,Ae=ce.isBatchedMesh===!0,Fe=!!D.map,xt=!!D.matcap,it=!!F,_t=!!D.aoMap,G=!!D.lightMap,qe=!!D.bumpMap,ft=!!D.normalMap,Ot=!!D.displacementMap,ke=!!D.emissiveMap,Bt=!!D.metalnessMap,Ze=!!D.roughnessMap,ot=D.anisotropy>0,B=D.clearcoat>0,A=D.dispersion>0,ae=D.iridescence>0,ye=D.sheen>0,Ee=D.transmission>0,me=ot&&!!D.anisotropyMap,Ke=B&&!!D.clearcoatMap,Ie=B&&!!D.clearcoatNormalMap,et=B&&!!D.clearcoatRoughnessMap,Ye=ae&&!!D.iridescenceMap,Te=ae&&!!D.iridescenceThicknessMap,Re=ye&&!!D.sheenColorMap,Qe=ye&&!!D.sheenRoughnessMap,Xe=!!D.specularMap,Be=!!D.specularColorMap,st=!!D.specularIntensityMap,W=Ee&&!!D.transmissionMap,Pe=Ee&&!!D.thicknessMap,De=!!D.gradientMap,Le=!!D.alphaMap,we=D.alphaTest>0,be=!!D.alphaHash,Ve=!!D.extensions;let lt=nr;D.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Vt={shaderID:ne,shaderType:D.type,shaderName:D.name,vertexShader:fe,fragmentShader:_e,defines:D.defines,customVertexShaderID:Me,customFragmentShaderID:te,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Ae,batchingColor:Ae&&ce._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ce.instanceColor!==null,instancingMorph:Ue&&ce.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Fs,alphaToCoverage:!!D.alphaToCoverage,map:Fe,matcap:xt,envMap:it,envMapMode:it&&F.mapping,envMapCubeUVHeight:q,aoMap:_t,lightMap:G,bumpMap:qe,normalMap:ft,displacementMap:_&&Ot,emissiveMap:ke,normalMapObjectSpace:ft&&D.normalMapType===N3,normalMapTangentSpace:ft&&D.normalMapType===C3,metalnessMap:Bt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:me,clearcoat:B,clearcoatMap:Ke,clearcoatNormalMap:Ie,clearcoatRoughnessMap:et,dispersion:A,iridescence:ae,iridescenceMap:Ye,iridescenceThicknessMap:Te,sheen:ye,sheenColorMap:Re,sheenRoughnessMap:Qe,specularMap:Xe,specularColorMap:Be,specularIntensityMap:st,transmission:Ee,transmissionMap:W,thicknessMap:Pe,gradientMap:De,opaque:D.transparent===!1&&D.blending===Us&&D.alphaToCoverage===!1,alphaMap:Le,alphaTest:we,alphaHash:be,combine:D.combine,mapUv:Fe&&T(D.map.channel),aoMapUv:_t&&T(D.aoMap.channel),lightMapUv:G&&T(D.lightMap.channel),bumpMapUv:qe&&T(D.bumpMap.channel),normalMapUv:ft&&T(D.normalMap.channel),displacementMapUv:Ot&&T(D.displacementMap.channel),emissiveMapUv:ke&&T(D.emissiveMap.channel),metalnessMapUv:Bt&&T(D.metalnessMap.channel),roughnessMapUv:Ze&&T(D.roughnessMap.channel),anisotropyMapUv:me&&T(D.anisotropyMap.channel),clearcoatMapUv:Ke&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(D.sheenRoughnessMap.channel),specularMapUv:Xe&&T(D.specularMap.channel),specularColorMapUv:Be&&T(D.specularColorMap.channel),specularIntensityMapUv:st&&T(D.specularIntensityMap.channel),transmissionMapUv:W&&T(D.transmissionMap.channel),thicknessMapUv:Pe&&T(D.thicknessMap.channel),alphaMapUv:Le&&T(D.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ft||ot),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ge.attributes.uv&&(Fe||Le),fog:!!pe,useFog:D.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:ce.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Fe&&D.map.isVideoTexture===!0&&Ut.getTransfer(D.map.colorSpace)===Wt,decodeVideoTextureEmissive:ke&&D.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(D.emissiveMap.colorSpace)===Wt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===da,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ve&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&D.extensions.multiDraw===!0||Ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(w(R,D),C(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function w(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function C(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=E[D.type];let H;if(R){const K=Oi[R];H=yE.clone(K.uniforms)}else H=D.uniforms;return H}function k(D,R){let H;for(let K=0,ce=x.length;K<ce;K++){const pe=x[K];if(pe.cacheKey===R){H=pe,++H.usedTimes;break}}return H===void 0&&(H=new Z4(s,R,D,c),x.push(H)),H}function O(D){if(--D.usedTimes===0){const R=x.indexOf(D);x[R]=x[x.length-1],x.pop(),D.destroy()}}function z(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:U,acquireProgram:k,releaseProgram:O,releaseShaderCache:z,programs:x,dispose:Z}}function e2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function t2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(v,_,S,E,T,b){let y=s[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:b},s[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=T,y.group=b),e++,y}function d(v,_,S,E,T,b){const y=f(v,_,S,E,T,b);S.transmission>0?r.push(y):S.transparent===!0?l.push(y):i.push(y)}function m(v,_,S,E,T,b){const y=f(v,_,S,E,T,b);S.transmission>0?r.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function p(v,_){i.length>1&&i.sort(v||t2),r.length>1&&r.sort(_||Dv),l.length>1&&l.sort(_||Dv)}function x(){for(let v=e,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function n2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Lv,s.set(r,[f])):l>=c.length?(f=new Lv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function i2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Pt};break;case"SpotLight":i={position:new le,direction:new le,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function a2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let r2=0;function s2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o2(s){const e=new i2,i=a2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,c=new ln,f=new ln;function d(p){let x=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,T=0,b=0,y=0,w=0,C=0,U=0,k=0,O=0,z=0;p.sort(s2);for(let D=0,R=p.length;D<R;D++){const H=p[D],K=H.color,ce=H.intensity,pe=H.distance,ge=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=K.r*ce,v+=K.g*ce,_+=K.b*ce;else if(H.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(H.sh.coefficients[I],ce);z++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,q=i.get(H);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=ge,r.directionalShadowMatrix[S]=H.shadow.matrix,w++}r.directional[S]=I,S++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(K).multiplyScalar(ce),I.distance=pe,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,r.spot[T]=I;const F=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,F.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[T]=F.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,r.spotShadow[T]=q,r.spotShadowMap[T]=ge,U++}T++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(K).multiplyScalar(ce),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),r.rectArea[b]=I,b++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const F=H.shadow,q=i.get(H);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=ge,r.pointShadowMatrix[E]=H.shadow.matrix,C++}r.point[E]=I,E++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(ce),I.groundColor.copy(H.groundColor).multiplyScalar(ce),r.hemi[y]=I,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const Z=r.hash;(Z.directionalLength!==S||Z.pointLength!==E||Z.spotLength!==T||Z.rectAreaLength!==b||Z.hemiLength!==y||Z.numDirectionalShadows!==w||Z.numPointShadows!==C||Z.numSpotShadows!==U||Z.numSpotMaps!==k||Z.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=b,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=U+k-O,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,Z.directionalLength=S,Z.pointLength=E,Z.spotLength=T,Z.rectAreaLength=b,Z.hemiLength=y,Z.numDirectionalShadows=w,Z.numPointShadows=C,Z.numSpotShadows=U,Z.numSpotMaps=k,Z.numLightProbes=z,r.version=r2++)}function m(p,x){let v=0,_=0,S=0,E=0,T=0;const b=x.matrixWorldInverse;for(let y=0,w=p.length;y<w;y++){const C=p[y];if(C.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),v++}else if(C.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),S++}else if(C.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),f.identity(),c.copy(C.matrixWorld),c.premultiply(b),f.extractRotation(c),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),_++}else if(C.isHemisphereLight){const U=r.hemi[T];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(b),T++}}}return{setup:d,setupView:m,state:r}}function Uv(s){const e=new o2(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function f(x){r.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function l2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new Uv(s),e.set(l,[d])):c>=f.length?(d=new Uv(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const c2=`void main() {
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
}`;function f2(s,e,i){let r=new Rx;const l=new zt,c=new zt,f=new on,d=new OE({depthPacking:R3}),m=new IE,p={},x=i.maxTextureSize,v={[ir]:Xn,[Xn]:ir,[da]:da},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ar(E,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let y=this.type;this.render=function(O,z,Z){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),K=s.state;K.setBlending(ga),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=y!==fa&&this.type===fa,pe=y===fa&&this.type!==fa;for(let ge=0,I=O.length;ge<I;ge++){const F=O[ge],q=F.shadow;if(q===void 0){ct("WebGLShadowMap:",F,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ne=q.getFrameExtents();if(l.multiply(ne),c.copy(q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ne.x),l.x=c.x*ne.x,q.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ne.y),l.y=c.y*ne.y,q.mapSize.y=c.y)),q.map===null||ce===!0||pe===!0){const P=this.type!==fa?{minFilter:ri,magFilter:ri}:{};q.map!==null&&q.map.dispose(),q.map=new Or(l.x,l.y,P),q.map.texture.name=F.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const J=q.getViewportCount();for(let P=0;P<J;P++){const X=q.getViewport(P);f.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),K.viewport(f),q.updateMatrices(F,P),r=q.getFrustum(),U(z,Z,q.camera,F,this.type)}q.isPointLightShadow!==!0&&this.type===fa&&w(q,Z),q.needsUpdate=!1}y=this.type,b.needsUpdate=!1,s.setRenderTarget(D,R,H)};function w(O,z){const Z=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Or(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,_,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(z,null,Z,S,T,null)}function C(O,z,Z,D){let R=null;const H=Z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)R=H;else if(R=Z.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=R.uuid,ce=z.uuid;let pe=p[K];pe===void 0&&(pe={},p[K]=pe);let ge=pe[ce];ge===void 0&&(ge=R.clone(),pe[ce]=ge,z.addEventListener("dispose",k)),R=ge}if(R.visible=z.visible,R.wireframe=z.wireframe,D===fa?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:v[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=s.properties.get(R);K.light=Z}return R}function U(O,z,Z,D,R){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===fa)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,O.matrixWorld);const ce=e.update(O),pe=O.material;if(Array.isArray(pe)){const ge=ce.groups;for(let I=0,F=ge.length;I<F;I++){const q=ge[I],ne=pe[q.materialIndex];if(ne&&ne.visible){const J=C(O,ne,D,R);O.onBeforeShadow(s,O,z,Z,ce,J,q),s.renderBufferDirect(Z,null,ce,J,O,q),O.onAfterShadow(s,O,z,Z,ce,J,q)}}}else if(pe.visible){const ge=C(O,pe,D,R);O.onBeforeShadow(s,O,z,Z,ce,ge,null),s.renderBufferDirect(Z,null,ce,ge,O,null),O.onAfterShadow(s,O,z,Z,ce,ge,null)}}const K=O.children;for(let ce=0,pe=K.length;ce<pe;ce++)U(K[ce],z,Z,D,R)}function k(O){O.target.removeEventListener("dispose",k);for(const Z in p){const D=p[Z],R=O.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const d2={[vh]:xh,[_h]:bh,[yh]:Mh,[Is]:Sh,[xh]:vh,[bh]:_h,[Mh]:yh,[Sh]:Is};function h2(s,e){function i(){let W=!1;const Pe=new on;let De=null;const Le=new on(0,0,0,0);return{setMask:function(we){De!==we&&!W&&(s.colorMask(we,we,we,we),De=we)},setLocked:function(we){W=we},setClear:function(we,be,Ve,lt,Vt){Vt===!0&&(we*=lt,be*=lt,Ve*=lt),Pe.set(we,be,Ve,lt),Le.equals(Pe)===!1&&(s.clearColor(we,be,Ve,lt),Le.copy(Pe))},reset:function(){W=!1,De=null,Le.set(-1,0,0,0)}}}function r(){let W=!1,Pe=!1,De=null,Le=null,we=null;return{setReversed:function(be){if(Pe!==be){const Ve=e.get("EXT_clip_control");be?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Pe=be;const lt=we;we=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(be){be?de(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(be){De!==be&&!W&&(s.depthMask(be),De=be)},setFunc:function(be){if(Pe&&(be=d2[be]),Le!==be){switch(be){case vh:s.depthFunc(s.NEVER);break;case xh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case yh:s.depthFunc(s.EQUAL);break;case Sh:s.depthFunc(s.GEQUAL);break;case bh:s.depthFunc(s.GREATER);break;case Mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=be}},setLocked:function(be){W=be},setClear:function(be){we!==be&&(Pe&&(be=1-be),s.clearDepth(be),we=be)},reset:function(){W=!1,De=null,Le=null,we=null,Pe=!1}}}function l(){let W=!1,Pe=null,De=null,Le=null,we=null,be=null,Ve=null,lt=null,Vt=null;return{setTest:function(Ct){W||(Ct?de(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Ct){Pe!==Ct&&!W&&(s.stencilMask(Ct),Pe=Ct)},setFunc:function(Ct,Nn,Yn){(De!==Ct||Le!==Nn||we!==Yn)&&(s.stencilFunc(Ct,Nn,Yn),De=Ct,Le=Nn,we=Yn)},setOp:function(Ct,Nn,Yn){(be!==Ct||Ve!==Nn||lt!==Yn)&&(s.stencilOp(Ct,Nn,Yn),be=Ct,Ve=Nn,lt=Yn)},setLocked:function(Ct){W=Ct},setClear:function(Ct){Vt!==Ct&&(s.clearStencil(Ct),Vt=Ct)},reset:function(){W=!1,Pe=null,De=null,Le=null,we=null,be=null,Ve=null,lt=null,Vt=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},_=new WeakMap,S=[],E=null,T=!1,b=null,y=null,w=null,C=null,U=null,k=null,O=null,z=new Pt(0,0,0),Z=0,D=!1,R=null,H=null,K=null,ce=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=F>=2);let ne=null,J={};const P=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),fe=new on().fromArray(P),_e=new on().fromArray(X);function Me(W,Pe,De,Le){const we=new Uint8Array(4),be=s.createTexture();s.bindTexture(W,be),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<De;Ve++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return be}const te={};te[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),de(s.DEPTH_TEST),f.setFunc(Is),qe(!1),ft(Cg),de(s.CULL_FACE),_t(ga);function de(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function Ce(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function Ue(W,Pe){return v[W]!==Pe?(s.bindFramebuffer(W,Pe),v[W]=Pe,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ae(W,Pe){let De=S,Le=!1;if(W){De=_.get(Pe),De===void 0&&(De=[],_.set(Pe,De));const we=W.textures;if(De.length!==we.length||De[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ve=we.length;be<Ve;be++)De[be]=s.COLOR_ATTACHMENT0+be;De.length=we.length,Le=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Le=!0);Le&&s.drawBuffers(De)}function Fe(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const xt={[Dr]:s.FUNC_ADD,[e3]:s.FUNC_SUBTRACT,[t3]:s.FUNC_REVERSE_SUBTRACT};xt[n3]=s.MIN,xt[i3]=s.MAX;const it={[a3]:s.ZERO,[r3]:s.ONE,[s3]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[d3]:s.SRC_ALPHA_SATURATE,[u3]:s.DST_COLOR,[l3]:s.DST_ALPHA,[o3]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[f3]:s.ONE_MINUS_DST_COLOR,[c3]:s.ONE_MINUS_DST_ALPHA,[h3]:s.CONSTANT_COLOR,[p3]:s.ONE_MINUS_CONSTANT_COLOR,[m3]:s.CONSTANT_ALPHA,[g3]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Pe,De,Le,we,be,Ve,lt,Vt,Ct){if(W===ga){T===!0&&(Ce(s.BLEND),T=!1);return}if(T===!1&&(de(s.BLEND),T=!0),W!==JM){if(W!==b||Ct!==D){if((y!==Dr||U!==Dr)&&(s.blendEquation(s.FUNC_ADD),y=Dr,U=Dr),Ct)switch(W){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFunc(s.ONE,s.ONE);break;case Dg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",W);break}else switch(W){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dg:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",W);break}w=null,C=null,k=null,O=null,z.set(0,0,0),Z=0,b=W,D=Ct}return}we=we||Pe,be=be||De,Ve=Ve||Le,(Pe!==y||we!==U)&&(s.blendEquationSeparate(xt[Pe],xt[we]),y=Pe,U=we),(De!==w||Le!==C||be!==k||Ve!==O)&&(s.blendFuncSeparate(it[De],it[Le],it[be],it[Ve]),w=De,C=Le,k=be,O=Ve),(lt.equals(z)===!1||Vt!==Z)&&(s.blendColor(lt.r,lt.g,lt.b,Vt),z.copy(lt),Z=Vt),b=W,D=!1}function G(W,Pe){W.side===da?Ce(s.CULL_FACE):de(s.CULL_FACE);let De=W.side===Xn;Pe&&(De=!De),qe(De),W.blending===Us&&W.transparent===!1?_t(ga):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Le=W.stencilWrite;d.setTest(Le),Le&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function ft(W){W!==KM?(de(s.CULL_FACE),W!==H&&(W===Cg?s.cullFace(s.BACK):W===QM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),H=W}function Ot(W){W!==K&&(I&&s.lineWidth(W),K=W)}function ke(W,Pe,De){W?(de(s.POLYGON_OFFSET_FILL),(ce!==Pe||pe!==De)&&(s.polygonOffset(Pe,De),ce=Pe,pe=De)):Ce(s.POLYGON_OFFSET_FILL)}function Bt(W){W?de(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ze(W){W===void 0&&(W=s.TEXTURE0+ge-1),ne!==W&&(s.activeTexture(W),ne=W)}function ot(W,Pe,De){De===void 0&&(ne===null?De=s.TEXTURE0+ge-1:De=ne);let Le=J[De];Le===void 0&&(Le={type:void 0,texture:void 0},J[De]=Le),(Le.type!==W||Le.texture!==Pe)&&(ne!==De&&(s.activeTexture(De),ne=De),s.bindTexture(W,Pe||te[W]),Le.type=W,Le.texture=Pe)}function B(){const W=J[ne];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function ye(){try{s.texSubImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function Ie(){try{s.texStorage2D(...arguments)}catch(W){W("WebGLState:",W)}}function et(){try{s.texStorage3D(...arguments)}catch(W){W("WebGLState:",W)}}function Ye(){try{s.texImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function Te(){try{s.texImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function Re(W){fe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),fe.copy(W))}function Qe(W){_e.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),_e.copy(W))}function Xe(W,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let Le=De.get(W);Le===void 0&&(Le=s.getUniformBlockIndex(Pe,W.name),De.set(W,Le))}function Be(W,Pe){const Le=p.get(Pe).get(W);m.get(Pe)!==Le&&(s.uniformBlockBinding(Pe,Le,W.__bindingPointIndex),m.set(Pe,Le))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ne=null,J={},v={},_=new WeakMap,S=[],E=null,T=!1,b=null,y=null,w=null,C=null,U=null,k=null,O=null,z=new Pt(0,0,0),Z=0,D=!1,R=null,H=null,K=null,ce=null,pe=null,fe.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:de,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Fe,setBlending:_t,setMaterial:G,setFlipSided:qe,setCullFace:ft,setLineWidth:Ot,setPolygonOffset:ke,setScissorTest:Bt,activeTexture:Ze,bindTexture:ot,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:ae,texImage2D:Ye,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Ie,texStorage3D:et,texSubImage2D:ye,texSubImage3D:Ee,compressedTexSubImage2D:me,compressedTexSubImage3D:Ke,scissor:Re,viewport:Qe,reset:st}}function p2(s,e,i,r,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,x=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,A){return S?new OffscreenCanvas(B,A):fu("canvas")}function T(B,A,ae){let ye=1;const Ee=ot(B);if((Ee.width>ae||Ee.height>ae)&&(ye=ae/Math.max(Ee.width,Ee.height)),ye<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const me=Math.floor(ye*Ee.width),Ke=Math.floor(ye*Ee.height);v===void 0&&(v=E(me,Ke));const Ie=A?E(me,Ke):v;return Ie.width=me,Ie.height=Ke,Ie.getContext("2d").drawImage(B,0,0,me,Ke),ct("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+me+"x"+Ke+")."),Ie}else return"data"in B&&ct("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),B;return B}function b(B){return B.generateMipmaps}function y(B){s.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(B,A,ae,ye,Ee=!1){if(B!==null){if(s[B]!==void 0)return s[B];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let me=A;if(A===s.RED&&(ae===s.FLOAT&&(me=s.R32F),ae===s.HALF_FLOAT&&(me=s.R16F),ae===s.UNSIGNED_BYTE&&(me=s.R8)),A===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.R8UI),ae===s.UNSIGNED_SHORT&&(me=s.R16UI),ae===s.UNSIGNED_INT&&(me=s.R32UI),ae===s.BYTE&&(me=s.R8I),ae===s.SHORT&&(me=s.R16I),ae===s.INT&&(me=s.R32I)),A===s.RG&&(ae===s.FLOAT&&(me=s.RG32F),ae===s.HALF_FLOAT&&(me=s.RG16F),ae===s.UNSIGNED_BYTE&&(me=s.RG8)),A===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RG8UI),ae===s.UNSIGNED_SHORT&&(me=s.RG16UI),ae===s.UNSIGNED_INT&&(me=s.RG32UI),ae===s.BYTE&&(me=s.RG8I),ae===s.SHORT&&(me=s.RG16I),ae===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ae===s.UNSIGNED_INT&&(me=s.RGB32UI),ae===s.BYTE&&(me=s.RGB8I),ae===s.SHORT&&(me=s.RGB16I),ae===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ae===s.UNSIGNED_INT&&(me=s.RGBA32UI),ae===s.BYTE&&(me=s.RGBA8I),ae===s.SHORT&&(me=s.RGBA16I),ae===s.INT&&(me=s.RGBA32I)),A===s.RGB&&(ae===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),A===s.RGBA){const Ke=Ee?cu:Ut.getTransfer(ye);ae===s.FLOAT&&(me=s.RGBA32F),ae===s.HALF_FLOAT&&(me=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(me=Ke===Wt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function U(B,A){let ae;return B?A===null||A===Pr||A===tl?ae=s.DEPTH24_STENCIL8:A===pa?ae=s.DEPTH32F_STENCIL8:A===el&&(ae=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pr||A===tl?ae=s.DEPTH_COMPONENT24:A===pa?ae=s.DEPTH_COMPONENT32F:A===el&&(ae=s.DEPTH_COMPONENT16),ae}function k(B,A){return b(B)===!0||B.isFramebufferTexture&&B.minFilter!==ri&&B.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function O(B){const A=B.target;A.removeEventListener("dispose",O),Z(A),A.isVideoTexture&&x.delete(A)}function z(B){const A=B.target;A.removeEventListener("dispose",z),R(A)}function Z(B){const A=r.get(B);if(A.__webglInit===void 0)return;const ae=B.source,ye=_.get(ae);if(ye){const Ee=ye[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&D(B),Object.keys(ye).length===0&&_.delete(ae)}r.remove(B)}function D(B){const A=r.get(B);s.deleteTexture(A.__webglTexture);const ae=B.source,ye=_.get(ae);delete ye[A.__cacheKey],f.memory.textures--}function R(B){const A=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Ee=0;Ee<A.__webglFramebuffer[ye].length;Ee++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Ee]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ae=B.textures;for(let ye=0,Ee=ae.length;ye<Ee;ye++){const me=r.get(ae[ye]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(ae[ye])}r.remove(B)}let H=0;function K(){H=0}function ce(){const B=H;return B>=l.maxTextures&&ct("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),H+=1,B}function pe(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function ge(B,A){const ae=r.get(B);if(B.isVideoTexture&&Bt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ae.__version!==B.version){const ye=B.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{te(ae,B,A);return}}else B.isExternalTexture&&(ae.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+A)}function I(B,A){const ae=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ae.__version!==B.version){te(ae,B,A);return}else B.isExternalTexture&&(ae.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+A)}function F(B,A){const ae=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ae.__version!==B.version){te(ae,B,A);return}i.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+A)}function q(B,A){const ae=r.get(B);if(B.version>0&&ae.__version!==B.version){de(ae,B,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+A)}const ne={[Ah]:s.REPEAT,[ha]:s.CLAMP_TO_EDGE,[wh]:s.MIRRORED_REPEAT},J={[ri]:s.NEAREST,[A3]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Od]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},P={[D3]:s.NEVER,[z3]:s.ALWAYS,[L3]:s.LESS,[vx]:s.LEQUAL,[U3]:s.EQUAL,[I3]:s.GEQUAL,[P3]:s.GREATER,[O3]:s.NOTEQUAL};function X(B,A){if(A.type===pa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===Od||A.magFilter===Ec||A.magFilter===Ur||A.minFilter===xi||A.minFilter===Od||A.minFilter===Ec||A.minFilter===Ur)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ne[A.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ne[A.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ne[A.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,J[A.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,P[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==Ec&&A.minFilter!==Ur||A.type===pa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function fe(B,A){let ae=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",O));const ye=A.source;let Ee=_.get(ye);Ee===void 0&&(Ee={},_.set(ye,Ee));const me=pe(A);if(me!==B.__cacheKey){Ee[me]===void 0&&(Ee[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),Ee[me].usedTimes++;const Ke=Ee[B.__cacheKey];Ke!==void 0&&(Ee[B.__cacheKey].usedTimes--,Ke.usedTimes===0&&D(A)),B.__cacheKey=me,B.__webglTexture=Ee[me].texture}return ae}function _e(B,A,ae){return Math.floor(Math.floor(B/ae)/A)}function Me(B,A,ae,ye){const me=B.updateRanges;if(me.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ae,ye,A.data);else{me.sort((Te,Re)=>Te.start-Re.start);let Ke=0;for(let Te=1;Te<me.length;Te++){const Re=me[Ke],Qe=me[Te],Xe=Re.start+Re.count,Be=_e(Qe.start,A.width,4),st=_e(Re.start,A.width,4);Qe.start<=Xe+1&&Be===st&&_e(Qe.start+Qe.count-1,A.width,4)===Be?Re.count=Math.max(Re.count,Qe.start+Qe.count-Re.start):(++Ke,me[Ke]=Qe)}me.length=Ke+1;const Ie=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Te=0,Re=me.length;Te<Re;Te++){const Qe=me[Te],Xe=Math.floor(Qe.start/4),Be=Math.ceil(Qe.count/4),st=Xe%A.width,W=Math.floor(Xe/A.width),Pe=Be,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,st,W,Pe,De,ae,ye,A.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function te(B,A,ae){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const Ee=fe(B,A),me=A.source;i.bindTexture(ye,B.__webglTexture,s.TEXTURE0+ae);const Ke=r.get(me);if(me.version!==Ke.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ae);const Ie=Ut.getPrimaries(Ut.workingColorSpace),et=A.colorSpace===er?null:Ut.getPrimaries(A.colorSpace),Ye=A.colorSpace===er||Ie===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Te=T(A.image,!1,l.maxTextureSize);Te=Ze(A,Te);const Re=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Xe=C(A.internalFormat,Re,Qe,A.colorSpace,A.isVideoTexture);X(ye,A);let Be;const st=A.mipmaps,W=A.isVideoTexture!==!0,Pe=Ke.__version===void 0||Ee===!0,De=me.dataReady,Le=k(A,Te);if(A.isDepthTexture)Xe=U(A.format===il,A.type),Pe&&(W?i.texStorage2D(s.TEXTURE_2D,1,Xe,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,null));else if(A.isDataTexture)if(st.length>0){W&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,be=st.length;we<be;we++)Be=st[we],W?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data);A.generateMipmaps=!1}else W?(Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height),De&&Me(A,Te,Re,Qe)):i.texImage2D(s.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Re,Qe,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,st[0].width,st[0].height,Te.depth);for(let we=0,be=st.length;we<be;we++)if(Be=st[we],A.format!==wi)if(Re!==null)if(W){if(De)if(A.layerUpdates.size>0){const Ve=uv(Be.width,Be.height,A.format,A.type);for(const lt of A.layerUpdates){const Vt=Be.data.subarray(lt*Ve/Be.data.BYTES_PER_ELEMENT,(lt+1)*Ve/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,lt,Be.width,Be.height,1,Re,Vt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Te.depth,Re,Qe,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,we,Xe,Be.width,Be.height,Te.depth,0,Re,Qe,Be.data)}else{W&&Pe&&i.texStorage2D(s.TEXTURE_2D,Le,Xe,st[0].width,st[0].height);for(let we=0,be=st.length;we<be;we++)Be=st[we],A.format!==wi?Re!==null?W?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Be.width,Be.height,Re,Qe,Be.data):i.texImage2D(s.TEXTURE_2D,we,Xe,Be.width,Be.height,0,Re,Qe,Be.data)}else if(A.isDataArrayTexture)if(W){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,Te.width,Te.height,Te.depth),De)if(A.layerUpdates.size>0){const we=uv(Te.width,Te.height,A.format,A.type);for(const be of A.layerUpdates){const Ve=Te.data.subarray(be*we/Te.data.BYTES_PER_ELEMENT,(be+1)*we/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,Te.width,Te.height,1,Re,Qe,Ve)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isData3DTexture)W?(Pe&&i.texStorage3D(s.TEXTURE_3D,Le,Xe,Te.width,Te.height,Te.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Qe,Te.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Te.width,Te.height,Te.depth,0,Re,Qe,Te.data);else if(A.isFramebufferTexture){if(Pe)if(W)i.texStorage2D(s.TEXTURE_2D,Le,Xe,Te.width,Te.height);else{let we=Te.width,be=Te.height;for(let Ve=0;Ve<Le;Ve++)i.texImage2D(s.TEXTURE_2D,Ve,Xe,we,be,0,Re,Qe,null),we>>=1,be>>=1}}else if(st.length>0){if(W&&Pe){const we=ot(st[0]);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}for(let we=0,be=st.length;we<be;we++)Be=st[we],W?De&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Re,Qe,Be):i.texImage2D(s.TEXTURE_2D,we,Xe,Re,Qe,Be);A.generateMipmaps=!1}else if(W){if(Pe){const we=ot(Te);i.texStorage2D(s.TEXTURE_2D,Le,Xe,we.width,we.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Qe,Te)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Re,Qe,Te);b(A)&&y(ye),Ke.__version=me.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function de(B,A,ae){if(A.image.length!==6)return;const ye=fe(B,A),Ee=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+ae);const me=r.get(Ee);if(Ee.version!==me.__version||ye===!0){i.activeTexture(s.TEXTURE0+ae);const Ke=Ut.getPrimaries(Ut.workingColorSpace),Ie=A.colorSpace===er?null:Ut.getPrimaries(A.colorSpace),et=A.colorSpace===er||Ke===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let be=0;be<6;be++)!Ye&&!Te?Re[be]=T(A.image[be],!0,l.maxCubemapSize):Re[be]=Te?A.image[be].image:A.image[be],Re[be]=Ze(A,Re[be]);const Qe=Re[0],Xe=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),st=C(A.internalFormat,Xe,Be,A.colorSpace),W=A.isVideoTexture!==!0,Pe=me.__version===void 0||ye===!0,De=Ee.dataReady;let Le=k(A,Qe);X(s.TEXTURE_CUBE_MAP,A);let we;if(Ye){W&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,Qe.width,Qe.height);for(let be=0;be<6;be++){we=Re[be].mipmaps;for(let Ve=0;Ve<we.length;Ve++){const lt=we[Ve];A.format!==wi?Xe!==null?W?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,lt.width,lt.height,Xe,lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,st,lt.width,lt.height,0,lt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,lt.width,lt.height,Xe,Be,lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,st,lt.width,lt.height,0,Xe,Be,lt.data)}}}else{if(we=A.mipmaps,W&&Pe){we.length>0&&Le++;const be=ot(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,st,be.width,be.height)}for(let be=0;be<6;be++)if(Te){W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Re[be].width,Re[be].height,Xe,Be,Re[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Re[be].width,Re[be].height,0,Xe,Be,Re[be].data);for(let Ve=0;Ve<we.length;Ve++){const Vt=we[Ve].image[be].image;W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,Vt.width,Vt.height,Xe,Be,Vt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,st,Vt.width,Vt.height,0,Xe,Be,Vt.data)}}else{W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Xe,Be,Re[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Xe,Be,Re[be]);for(let Ve=0;Ve<we.length;Ve++){const lt=we[Ve];W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,Xe,Be,lt.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,st,Xe,Be,lt.image[be])}}}b(A)&&y(s.TEXTURE_CUBE_MAP),me.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Ce(B,A,ae,ye,Ee,me){const Ke=c.convert(ae.format,ae.colorSpace),Ie=c.convert(ae.type),et=C(ae.internalFormat,Ke,Ie,ae.colorSpace),Ye=r.get(A),Te=r.get(ae);if(Te.__renderTarget=A,!Ye.__hasExternalTextures){const Re=Math.max(1,A.width>>me),Qe=Math.max(1,A.height>>me);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,me,et,Re,Qe,A.depth,0,Ke,Ie,null):i.texImage2D(Ee,me,et,Re,Qe,0,Ke,Ie,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),ke(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,0,Ot(A)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Ee,Te.__webglTexture,me),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(B,A,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,B),A.depthBuffer){const ye=A.depthTexture,Ee=ye&&ye.isDepthTexture?ye.type:null,me=U(A.stencilBuffer,Ee),Ke=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Ot(A);ke(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,me,A.width,A.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,B)}else{const ye=A.textures;for(let Ee=0;Ee<ye.length;Ee++){const me=ye[Ee],Ke=c.convert(me.format,me.colorSpace),Ie=c.convert(me.type),et=C(me.internalFormat,Ke,Ie,me.colorSpace),Ye=Ot(A);ae&&ke(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,et,A.width,A.height):ke(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,et,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,et,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(A.depthTexture);ye.__renderTarget=A,(!ye.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);const Ee=ye.__webglTexture,me=Ot(A);if(A.depthTexture.format===nl)ke(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===il)ke(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Fe(B){const A=r.get(B),ae=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const ye=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",Ee)};ye.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=ye}if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");const ye=B.texture.mipmaps;ye&&ye.length>0?Ae(A.__webglFramebuffer[0],B):Ae(A.__webglFramebuffer,B)}else if(ae){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[ye],B,!1);else{const Ee=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}else{const ye=B.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,B,!1);else{const Ee=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,me)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(B,A,ae){const ye=r.get(B);A!==void 0&&Ce(ye.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Fe(B)}function it(B){const A=B.texture,ae=r.get(B),ye=r.get(A);B.addEventListener("dispose",z);const Ee=B.textures,me=B.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,f.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer[Ie]=[];for(let et=0;et<A.mipmaps.length;et++)ae.__webglFramebuffer[Ie][et]=s.createFramebuffer()}else ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ae.__webglFramebuffer[Ie]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=r.get(Ee[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&ke(B)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const et=Ee[Ie];ae.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const Ye=c.convert(et.format,et.colorSpace),Te=c.convert(et.type),Re=C(et.internalFormat,Ye,Te,et.colorSpace,B.isXRRenderTarget===!0),Qe=Ot(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Re,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(ae.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),X(s.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[Ie][et],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,et);else Ce(ae.__webglFramebuffer[Ie],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);b(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ie=0,et=Ee.length;Ie<et;Ie++){const Ye=Ee[Ie],Te=r.get(Ye);let Re=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Re=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),X(Re,Ye),Ce(ae.__webglFramebuffer,B,Ye,s.COLOR_ATTACHMENT0+Ie,Re,0),b(Ye)&&y(Re)}i.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ie=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ie,ye.__webglTexture),X(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let et=0;et<A.mipmaps.length;et++)Ce(ae.__webglFramebuffer[et],B,A,s.COLOR_ATTACHMENT0,Ie,et);else Ce(ae.__webglFramebuffer,B,A,s.COLOR_ATTACHMENT0,Ie,0);b(A)&&y(Ie),i.unbindTexture()}B.depthBuffer&&Fe(B)}function _t(B){const A=B.textures;for(let ae=0,ye=A.length;ae<ye;ae++){const Ee=A[ae];if(b(Ee)){const me=w(B),Ke=r.get(Ee).__webglTexture;i.bindTexture(me,Ke),y(me),i.unbindTexture()}}}const G=[],qe=[];function ft(B){if(B.samples>0){if(ke(B)===!1){const A=B.textures,ae=B.width,ye=B.height;let Ee=s.COLOR_BUFFER_BIT;const me=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(B),Ie=A.length>1;if(Ie)for(let Ye=0;Ye<A.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const et=B.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,ae,ye,0,0,ae,ye,Ee,s.NEAREST),m===!0&&(G.length=0,qe.length=0,G.push(s.COLOR_ATTACHMENT0+Ye),B.depthBuffer&&B.resolveDepthBuffer===!1&&(G.push(me),qe.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<A.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Te=r.get(A[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const A=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ot(B){return Math.min(l.maxSamples,B.samples)}function ke(B){const A=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(B){const A=f.render.frame;x.get(B)!==A&&(x.set(B,A),B.update())}function Ze(B,A){const ae=B.colorSpace,ye=B.format,Ee=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ae!==Fs&&ae!==er&&(Ut.getTransfer(ae)===Wt?(ye!==wi||Ee!==_a)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",ae)),A}function ot(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=K,this.setTexture2D=ge,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=xt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ke}function m2(s,e){function i(r,l=er){let c;const f=Ut.getTransfer(l);if(r===_a)return s.UNSIGNED_BYTE;if(r===pp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ux)return s.BYTE;if(r===fx)return s.SHORT;if(r===el)return s.UNSIGNED_SHORT;if(r===hp)return s.INT;if(r===Pr)return s.UNSIGNED_INT;if(r===pa)return s.FLOAT;if(r===Vs)return s.HALF_FLOAT;if(r===px)return s.ALPHA;if(r===mx)return s.RGB;if(r===wi)return s.RGBA;if(r===nl)return s.DEPTH_COMPONENT;if(r===il)return s.DEPTH_STENCIL;if(r===gx)return s.RED;if(r===gp)return s.RED_INTEGER;if(r===vp)return s.RG;if(r===xp)return s.RG_INTEGER;if(r===_p)return s.RGBA_INTEGER;if(r===iu||r===au||r===ru||r===su)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===Nh||r===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Uh||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Uh)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ph)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Ih||r===zh||r===Bh||r===Fh||r===kh||r===Hh||r===Vh||r===Gh||r===jh||r===Xh||r===Wh||r===qh||r===Yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Oh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zh||r===Kh||r===Qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Zh)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===Jh||r===ep||r===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const g2=`
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

}`;class x2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Sa({vertexShader:g2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ar(new vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _2 extends Gs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,x=null,v=null,_=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",b=new x2,y={},w=i.getContextAttributes();let C=null,U=null;const k=[],O=[],z=new zt;let Z=null;const D=new gi;D.viewport=new on;const R=new gi;R.viewport=new on;const H=[D,R],K=new BE;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=k[te];return de===void 0&&(de=new nh,k[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=k[te];return de===void 0&&(de=new nh,k[te]=de),de.getGripSpace()},this.getHand=function(te){let de=k[te];return de===void 0&&(de=new nh,k[te]=de),de.getHandSpace()};function ge(te){const de=O.indexOf(te.inputSource);if(de===-1)return;const Ce=k[de];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,p||f),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",F);for(let te=0;te<k.length;te++){const de=O[te];de!==null&&(O[te]=null,k[te].disconnect(de))}ce=null,pe=null,b.reset();for(const te in y)delete y[te];e.setRenderTarget(C),S=null,_=null,v=null,l=null,U=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",I),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ue=null,Ae=null;w.depth&&(Ae=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=w.stencil?il:nl,Ue=w.stencil?tl:Pr);const Fe={colorFormat:i.RGBA8,depthFormat:Ae,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Fe),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new Or(_.textureWidth,_.textureHeight,{format:wi,type:_a,depthTexture:new Nx(_.textureWidth,_.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Or(S.framebufferWidth,S.framebufferHeight,{format:wi,type:_a,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(te){for(let de=0;de<te.removed.length;de++){const Ce=te.removed[de],Ue=O.indexOf(Ce);Ue>=0&&(O[Ue]=null,k[Ue].disconnect(Ce))}for(let de=0;de<te.added.length;de++){const Ce=te.added[de];let Ue=O.indexOf(Ce);if(Ue===-1){for(let Fe=0;Fe<k.length;Fe++)if(Fe>=O.length){O.push(Ce),Ue=Fe;break}else if(O[Fe]===null){O[Fe]=Ce,Ue=Fe;break}if(Ue===-1)break}const Ae=k[Ue];Ae&&Ae.connect(Ce)}}const q=new le,ne=new le;function J(te,de,Ce){q.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(Ce.matrixWorld);const Ue=q.distanceTo(ne),Ae=de.projectionMatrix.elements,Fe=Ce.projectionMatrix.elements,xt=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],G=(Ae[9]-1)/Ae[5],qe=(Ae[8]-1)/Ae[0],ft=(Fe[8]+1)/Fe[0],Ot=xt*qe,ke=xt*ft,Bt=Ue/(-qe+ft),Ze=Bt*-qe;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(Bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ot=xt+Bt,B=it+Bt,A=Ot-Ze,ae=ke+(Ue-Ze),ye=_t*it/B*ot,Ee=G*it/B*ot;te.projectionMatrix.makePerspective(A,ae,ye,Ee,ot,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,Ce=te.far;b.texture!==null&&(b.depthNear>0&&(de=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),K.near=R.near=D.near=de,K.far=R.far=D.far=Ce,(ce!==K.near||pe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,pe=K.far),K.layers.mask=te.layers.mask|6,D.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const Ue=te.parent,Ae=K.cameras;P(K,Ue);for(let Fe=0;Fe<Ae.length;Fe++)P(Ae[Fe],Ue);Ae.length===2?J(K,D,R):K.projectionMatrix.copy(D.projectionMatrix),X(te,K,Ue)};function X(te,de,Ce){Ce===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=rl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(te){m=te,_!==null&&(_.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(te){return y[te]};let fe=null;function _e(te,de){if(x=de.getViewerPose(p||f),E=de,x!==null){const Ce=x.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let Ue=!1;Ce.length!==K.cameras.length&&(K.cameras.length=0,Ue=!0);for(let it=0;it<Ce.length;it++){const _t=Ce[it];let G=null;if(S!==null)G=S.getViewport(_t);else{const ft=v.getViewSubImage(_,_t);G=ft.viewport,it===0&&(e.setRenderTargetTextures(U,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(U))}let qe=H[it];qe===void 0&&(qe=new gi,qe.layers.enable(it),qe.viewport=new on,H[it]=qe),qe.matrix.fromArray(_t.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(_t.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(G.x,G.y,G.width,G.height),it===0&&(K.matrix.copy(qe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ue===!0&&K.cameras.push(qe)}const Ae=l.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const it=v.getDepthInformation(Ce[0]);it&&it.isValid&&it.texture&&b.init(it,l.renderState)}if(Ae&&Ae.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let it=0;it<Ce.length;it++){const _t=Ce[it].camera;if(_t){let G=y[_t];G||(G=new Dx,y[_t]=G);const qe=v.getCameraImage(_t);G.sourceTexture=qe}}}}for(let Ce=0;Ce<k.length;Ce++){const Ue=O[Ce],Ae=k[Ce];Ue!==null&&Ae!==void 0&&Ae.update(Ue,de,p||f)}fe&&fe(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Me=new Lx;Me.setAnimationLoop(_e),this.setAnimationLoop=function(te){fe=te},this.dispose=function(){}}}const Rr=new ya,y2=new ln;function S2(s,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,Tx(s)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,w,C,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(b,y):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),x(b,y)):y.isMeshStandardMaterial?(c(b,y),_(b,y),y.isMeshPhysicalMaterial&&S(b,y,U)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),T(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?m(b,y,w,C):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===Xn&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===Xn&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const w=e.get(y),C=w.envMap,U=w.envMapRotation;C&&(b.envMap.value=C,Rr.copy(U),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),b.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(Rr)),b.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,w,C){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*w,b.scale.value=C*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function x(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function _(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,w){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function T(b,y){const w=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function b2(s,e,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,C){const U=C.program;r.uniformBlockBinding(w,U)}function p(w,C){let U=l[w.id];U===void 0&&(E(w),U=x(w),l[w.id]=U,w.addEventListener("dispose",b));const k=C.program;r.updateUBOMapping(w,k);const O=e.render.frame;c[w.id]!==O&&(_(w),c[w.id]=O)}function x(w){const C=v();w.__bindingPointIndex=C;const U=s.createBuffer(),k=w.__size,O=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,k,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,U),U}function v(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const C=l[w.id],U=w.uniforms,k=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let O=0,z=U.length;O<z;O++){const Z=Array.isArray(U[O])?U[O]:[U[O]];for(let D=0,R=Z.length;D<R;D++){const H=Z[D];if(S(H,O,D,k)===!0){const K=H.__offset,ce=Array.isArray(H.value)?H.value:[H.value];let pe=0;for(let ge=0;ge<ce.length;ge++){const I=ce[ge],F=T(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,K+pe,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,pe),pe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(w,C,U,k){const O=w.value,z=C+"_"+U;if(k[z]===void 0)return typeof O=="number"||typeof O=="boolean"?k[z]=O:k[z]=O.clone(),!0;{const Z=k[z];if(typeof O=="number"||typeof O=="boolean"){if(Z!==O)return k[z]=O,!0}else if(Z.equals(O)===!1)return Z.copy(O),!0}return!1}function E(w){const C=w.uniforms;let U=0;const k=16;for(let z=0,Z=C.length;z<Z;z++){const D=Array.isArray(C[z])?C[z]:[C[z]];for(let R=0,H=D.length;R<H;R++){const K=D[R],ce=Array.isArray(K.value)?K.value:[K.value];for(let pe=0,ge=ce.length;pe<ge;pe++){const I=ce[pe],F=T(I),q=U%k,ne=q%F.boundary,J=q+ne;U+=ne,J!==0&&k-J<F.storage&&(U+=k-J),K.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=F.storage}}}const O=U%k;return O>0&&(U+=k-O),w.__size=U,w.__cache={},this}function T(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",w),C}function b(w){const C=w.target;C.removeEventListener("dispose",b);const U=f.indexOf(C.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function y(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const M2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function E2(){return la===null&&(la=new wE(M2,32,32,vp,Vs),la.minFilter=xi,la.magFilter=xi,la.wrapS=ha,la.wrapT=ha,la.generateMipmaps=!1,la.needsUpdate=!0),la}class T2{constructor(e={}){const{canvas:i=B3(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Set([_p,xp,gp]),T=new Set([_a,Pr,el,tl,pp,mp]),b=new Uint32Array(4),y=new Int32Array(4);let w=null,C=null;const U=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1;this._outputColorSpace=mi;let Z=0,D=0,R=null,H=-1,K=null;const ce=new on,pe=new on;let ge=null;const I=new Pt(0);let F=0,q=i.width,ne=i.height,J=1,P=null,X=null;const fe=new on(0,0,q,ne),_e=new on(0,0,q,ne);let Me=!1;const te=new Rx;let de=!1,Ce=!1;const Ue=new ln,Ae=new le,Fe=new on,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function _t(){return R===null?J:1}let G=r;function qe(L,Q){return i.getContext(L,Q)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dp}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",be,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),G===null){const Q="webgl2";if(G=qe(Q,L),G===null)throw qe(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw L("WebGLRenderer: "+L.message),L}let ft,Ot,ke,Bt,Ze,ot,B,A,ae,ye,Ee,me,Ke,Ie,et,Ye,Te,Re,Qe,Xe,Be,st,W,Pe;function De(){ft=new Uw(G),ft.init(),st=new m2(G,ft),Ot=new Ew(G,ft,e,st),ke=new h2(G,ft),Ot.reversedDepthBuffer&&_&&ke.buffers.depth.setReversed(!0),Bt=new Iw(G),Ze=new e2,ot=new p2(G,ft,ke,Ze,Ot,st,Bt),B=new Aw(O),A=new Lw(O),ae=new kE(G),W=new bw(G,ae),ye=new Pw(G,ae,Bt,W),Ee=new Bw(G,ye,ae,Bt),Qe=new zw(G,Ot,ot),Ye=new Tw(Ze),me=new J4(O,B,A,ft,Ot,W,Ye),Ke=new S2(O,Ze),Ie=new n2,et=new l2(ft),Re=new Sw(O,B,A,ke,Ee,S,m),Te=new f2(O,Ee,Ot),Pe=new b2(G,Bt,Ot,ke),Xe=new Mw(G,ft,Bt),Be=new Ow(G,ft,Bt),Bt.programs=me.programs,O.capabilities=Ot,O.extensions=ft,O.properties=Ze,O.renderLists=Ie,O.shadowMap=Te,O.state=ke,O.info=Bt}De();const Le=new _2(O,G);this.xr=Le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=ft.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ft.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(L){L!==void 0&&(J=L,this.setSize(q,ne,!1))},this.getSize=function(L){return L.set(q,ne)},this.setSize=function(L,Q,ue=!0){if(Le.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,ne=Q,i.width=Math.floor(L*J),i.height=Math.floor(Q*J),ue===!0&&(i.style.width=L+"px",i.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(q*J,ne*J).floor()},this.setDrawingBufferSize=function(L,Q,ue){q=L,ne=Q,J=ue,i.width=Math.floor(L*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(ce)},this.getViewport=function(L){return L.copy(fe)},this.setViewport=function(L,Q,ue,se){L.isVector4?fe.set(L.x,L.y,L.z,L.w):fe.set(L,Q,ue,se),ke.viewport(ce.copy(fe).multiplyScalar(J).round())},this.getScissor=function(L){return L.copy(_e)},this.setScissor=function(L,Q,ue,se){L.isVector4?_e.set(L.x,L.y,L.z,L.w):_e.set(L,Q,ue,se),ke.scissor(pe.copy(_e).multiplyScalar(J).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(L){ke.setScissorTest(Me=L)},this.setOpaqueSort=function(L){P=L},this.setTransparentSort=function(L){X=L},this.getClearColor=function(L){return L.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,ue=!0){let se=0;if(L){let ee=!1;if(R!==null){const Ne=R.texture.format;ee=E.has(Ne)}if(ee){const Ne=R.texture.type,Oe=T.has(Ne),He=Re.getClearColor(),Ge=Re.getClearAlpha(),nt=He.r,rt=He.g,$e=He.b;Oe?(b[0]=nt,b[1]=rt,b[2]=$e,b[3]=Ge,G.clearBufferuiv(G.COLOR,0,b)):(y[0]=nt,y[1]=rt,y[2]=$e,y[3]=Ge,G.clearBufferiv(G.COLOR,0,y))}else se|=G.COLOR_BUFFER_BIT}Q&&(se|=G.DEPTH_BUFFER_BIT),ue&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",be,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),Re.dispose(),Ie.dispose(),et.dispose(),Ze.dispose(),B.dispose(),A.dispose(),Ee.dispose(),W.dispose(),Pe.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ys),Le.removeEventListener("sessionend",Zs),yi.stop()};function we(L){L.preventDefault(),zg("WebGLRenderer: Context Lost."),z=!0}function be(){zg("WebGLRenderer: Context Restored."),z=!1;const L=Bt.autoReset,Q=Te.enabled,ue=Te.autoUpdate,se=Te.needsUpdate,ee=Te.type;De(),Bt.autoReset=L,Te.enabled=Q,Te.autoUpdate=ue,Te.needsUpdate=se,Te.type=ee}function Ve(L){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function lt(L){const Q=L.target;Q.removeEventListener("dispose",lt),Vt(Q)}function Vt(L){Ct(L),Ze.remove(L)}function Ct(L){const Q=Ze.get(L).programs;Q!==void 0&&(Q.forEach(function(ue){me.releaseProgram(ue)}),L.isShaderMaterial&&me.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ue,se,ee,Ne){Q===null&&(Q=xt);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,He=yu(L,Q,ue,se,ee);ke.setMaterial(se,Oe);let Ge=ue.index,nt=1;if(se.wireframe===!0){if(Ge=ye.getWireframeAttribute(ue),Ge===void 0)return;nt=2}const rt=ue.drawRange,$e=ue.attributes.position;let ht=rt.start*nt,Rt=(rt.start+rt.count)*nt;Ne!==null&&(ht=Math.max(ht,Ne.start*nt),Rt=Math.min(Rt,(Ne.start+Ne.count)*nt)),Ge!==null?(ht=Math.max(ht,0),Rt=Math.min(Rt,Ge.count)):$e!=null&&(ht=Math.max(ht,0),Rt=Math.min(Rt,$e.count));const Nt=Rt-ht;if(Nt<0||Nt===1/0)return;W.setup(ee,se,He,ue,Ge);let Tt,Ft=Xe;if(Ge!==null&&(Tt=ae.get(Ge),Ft=Be,Ft.setIndex(Tt)),ee.isMesh)se.wireframe===!0?(ke.setLineWidth(se.wireframeLinewidth*_t()),Ft.setMode(G.LINES)):Ft.setMode(G.TRIANGLES);else if(ee.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),ke.setLineWidth(tt*_t()),ee.isLineSegments?Ft.setMode(G.LINES):ee.isLineLoop?Ft.setMode(G.LINE_LOOP):Ft.setMode(G.LINE_STRIP)}else ee.isPoints?Ft.setMode(G.POINTS):ee.isSprite&&Ft.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,qt=ee._multiDrawCounts,At=ee._multiDrawCount,yn=Ge?ae.get(Ge).bytesPerElement:1,Ea=Ze.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<At;Zt++)Ea.setValue(G,"_gl_DrawID",Zt),Ft.render(tt[Zt]/yn,qt[Zt])}else if(ee.isInstancedMesh)Ft.renderInstances(ht,Nt,ee.count);else if(ue.isInstancedBufferGeometry){const tt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,qt=Math.min(ue.instanceCount,tt);Ft.renderInstances(ht,Nt,qt)}else Ft.render(ht,Nt)};function Nn(L,Q,ue){L.transparent===!0&&L.side===da&&L.forceSinglePass===!1?(L.side=Xn,L.needsUpdate=!0,mn(L,Q,ue),L.side=ir,L.needsUpdate=!0,mn(L,Q,ue),L.side=da):mn(L,Q,ue)}this.compile=function(L,Q,ue=null){ue===null&&(ue=L),C=et.get(ue),C.init(Q),k.push(C),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(C.pushLight(ee),ee.castShadow&&C.pushShadow(ee))}),L!==ue&&L.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(C.pushLight(ee),ee.castShadow&&C.pushShadow(ee))}),C.setupLights();const se=new Set;return L.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const He=Ne[Oe];Nn(He,ue,ee),se.add(He)}else Nn(Ne,ue,ee),se.add(Ne)}),C=k.pop(),se},this.compileAsync=function(L,Q,ue=null){const se=this.compile(L,Q,ue);return new Promise(ee=>{function Ne(){if(se.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){ee(L);return}setTimeout(Ne,10)}ft.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Yn=null;function dl(L){Yn&&Yn(L)}function Ys(){yi.stop()}function Zs(){yi.start()}const yi=new Lx;yi.setAnimationLoop(dl),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(L){Yn=L,Le.setAnimationLoop(L),L===null?yi.stop():yi.start()},Le.addEventListener("sessionstart",Ys),Le.addEventListener("sessionend",Zs),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Q),Q=Le.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,Q,R),C=et.get(L,k.length),C.init(Q),k.push(C),Ue.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),te.setFromProjectionMatrix(Ue,Ii,Q.reversedDepth),Ce=this.localClippingEnabled,de=Ye.init(this.clippingPlanes,Ce),w=Ie.get(L,U.length),w.init(),U.push(w),Le.enabled===!0&&Le.isPresenting===!0){const Ne=O.xr.getDepthSensingMesh();Ne!==null&&rr(Ne,Q,-1/0,O.sortObjects)}rr(L,Q,0,O.sortObjects),w.finish(),O.sortObjects===!0&&w.sort(P,X),it=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,it&&Re.addToRenderList(w,L),this.info.render.frame++,de===!0&&Ye.beginShadows();const ue=C.state.shadowsArray;Te.render(ue,L,Q),de===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=w.opaque,ee=w.transmissive;if(C.setupLights(),Q.isArrayCamera){const Ne=Q.cameras;if(ee.length>0)for(let Oe=0,He=Ne.length;Oe<He;Oe++){const Ge=Ne[Oe];Qs(se,ee,L,Ge)}it&&Re.render(L);for(let Oe=0,He=Ne.length;Oe<He;Oe++){const Ge=Ne[Oe];Ks(w,L,Ge,Ge.viewport)}}else ee.length>0&&Qs(se,ee,L,Q),it&&Re.render(L),Ks(w,L,Q);R!==null&&D===0&&(ot.updateMultisampleRenderTarget(R),ot.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(O,L,Q),W.resetDefaultState(),H=-1,K=null,k.pop(),k.length>0?(C=k[k.length-1],de===!0&&Ye.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?w=U[U.length-1]:w=null};function rr(L,Q,ue,se){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ue=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){se&&Fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ue);const Oe=Ee.update(L),He=L.material;He.visible&&w.push(L,Oe,He,ue,Fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){const Oe=Ee.update(L),He=L.material;if(se&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Fe.copy(L.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Fe.copy(Oe.boundingSphere.center)),Fe.applyMatrix4(L.matrixWorld).applyMatrix4(Ue)),Array.isArray(He)){const Ge=Oe.groups;for(let nt=0,rt=Ge.length;nt<rt;nt++){const $e=Ge[nt],ht=He[$e.materialIndex];ht&&ht.visible&&w.push(L,Oe,ht,ue,Fe.z,$e)}}else He.visible&&w.push(L,Oe,He,ue,Fe.z,null)}}const Ne=L.children;for(let Oe=0,He=Ne.length;Oe<He;Oe++)rr(Ne[Oe],Q,ue,se)}function Ks(L,Q,ue,se){const{opaque:ee,transmissive:Ne,transparent:Oe}=L;C.setupLightsView(ue),de===!0&&Ye.setGlobalState(O.clippingPlanes,ue),se&&ke.viewport(ce.copy(se)),ee.length>0&&Zn(ee,Q,ue),Ne.length>0&&Zn(Ne,Q,ue),Oe.length>0&&Zn(Oe,Q,ue),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Qs(L,Q,ue,se){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[se.id]===void 0&&(C.state.transmissionRenderTarget[se.id]=new Or(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Vs:_a,minFilter:Ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ne=C.state.transmissionRenderTarget[se.id],Oe=se.viewport||ce;Ne.setSize(Oe.z*O.transmissionResolutionScale,Oe.w*O.transmissionResolutionScale);const He=O.getRenderTarget(),Ge=O.getActiveCubeFace(),nt=O.getActiveMipmapLevel();O.setRenderTarget(Ne),O.getClearColor(I),F=O.getClearAlpha(),F<1&&O.setClearColor(16777215,.5),O.clear(),it&&Re.render(ue);const rt=O.toneMapping;O.toneMapping=nr;const $e=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),C.setupLightsView(se),de===!0&&Ye.setGlobalState(O.clippingPlanes,se),Zn(L,ue,se),ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Rt=0,Nt=Q.length;Rt<Nt;Rt++){const Tt=Q[Rt],{object:Ft,geometry:tt,material:qt,group:At}=Tt;if(qt.side===da&&Ft.layers.test(se.layers)){const yn=qt.side;qt.side=Xn,qt.needsUpdate=!0,cn(Ft,ue,se,tt,qt,At),qt.side=yn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Ne),ot.updateRenderTargetMipmap(Ne))}O.setRenderTarget(He,Ge,nt),O.setClearColor(I,F),$e!==void 0&&(se.viewport=$e),O.toneMapping=rt}function Zn(L,Q,ue){const se=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Ne=L.length;ee<Ne;ee++){const Oe=L[ee],{object:He,geometry:Ge,group:nt}=Oe;let rt=Oe.material;rt.allowOverride===!0&&se!==null&&(rt=se),He.layers.test(ue.layers)&&cn(He,Q,ue,Ge,rt,nt)}}function cn(L,Q,ue,se,ee,Ne){L.onBeforeRender(O,Q,ue,se,ee,Ne),L.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(O,Q,ue,se,L,Ne),ee.transparent===!0&&ee.side===da&&ee.forceSinglePass===!1?(ee.side=Xn,ee.needsUpdate=!0,O.renderBufferDirect(ue,Q,se,ee,L,Ne),ee.side=ir,ee.needsUpdate=!0,O.renderBufferDirect(ue,Q,se,ee,L,Ne),ee.side=da):O.renderBufferDirect(ue,Q,se,ee,L,Ne),L.onAfterRender(O,Q,ue,se,ee,Ne)}function mn(L,Q,ue){Q.isScene!==!0&&(Q=xt);const se=Ze.get(L),ee=C.state.lights,Ne=C.state.shadowsArray,Oe=ee.state.version,He=me.getParameters(L,ee.state,Ne,Q,ue),Ge=me.getProgramCacheKey(He);let nt=se.programs;se.environment=L.isMeshStandardMaterial?Q.environment:null,se.fog=Q.fog,se.envMap=(L.isMeshStandardMaterial?A:B).get(L.envMap||se.environment),se.envMapRotation=se.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,nt===void 0&&(L.addEventListener("dispose",lt),nt=new Map,se.programs=nt);let rt=nt.get(Ge);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===Oe)return Br(L,He),rt}else He.uniforms=me.getUniforms(L),L.onBeforeCompile(He,O),rt=me.acquireProgram(He,Ge),nt.set(Ge,rt),se.uniforms=He.uniforms;const $e=se.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($e.clippingPlanes=Ye.uniform),Br(L,He),se.needsLights=hl(L),se.lightsStateVersion=Oe,se.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMap.value=ee.state.directionalShadowMap,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotShadowMap.value=ee.state.spotShadowMap,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMap.value=ee.state.pointShadowMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function zi(L){if(L.uniformsList===null){const Q=L.currentProgram.getUniforms();L.uniformsList=ou.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Br(L,Q){const ue=Ze.get(L);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function yu(L,Q,ue,se,ee){Q.isScene!==!0&&(Q=xt),ot.resetTextureUnits();const Ne=Q.fog,Oe=se.isMeshStandardMaterial?Q.environment:null,He=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,Ge=(se.isMeshStandardMaterial?A:B).get(se.envMap||Oe),nt=se.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,rt=!!ue.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!ue.morphAttributes.position,ht=!!ue.morphAttributes.normal,Rt=!!ue.morphAttributes.color;let Nt=nr;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=O.toneMapping);const Tt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ft=Tt!==void 0?Tt.length:0,tt=Ze.get(se),qt=C.state.lights;if(de===!0&&(Ce===!0||L!==K)){const bn=L===K&&se.id===H;Ye.setState(se,L,bn)}let At=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==He||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==Ge||se.fog===!0&&tt.fog!==Ne||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==rt||tt.morphTargets!==$e||tt.morphNormals!==ht||tt.morphColors!==Rt||tt.toneMapping!==Nt||tt.morphTargetsCount!==Ft)&&(At=!0):(At=!0,tt.__version=se.version);let yn=tt.currentProgram;At===!0&&(yn=mn(se,Q,ee));let Ea=!1,Zt=!1,Bi=!1;const Kt=yn.getUniforms(),Sn=tt.uniforms;if(ke.useProgram(yn.program)&&(Ea=!0,Zt=!0,Bi=!0),se.id!==H&&(H=se.id,Zt=!0),Ea||K!==L){ke.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Kt.setValue(G,"projectionMatrix",L.projectionMatrix),Kt.setValue(G,"viewMatrix",L.matrixWorldInverse);const Tn=Kt.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Ae.setFromMatrixPosition(L.matrixWorld)),Ot.logarithmicDepthBuffer&&Kt.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Kt.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),K!==L&&(K=L,Zt=!0,Bi=!0)}if(ee.isSkinnedMesh){Kt.setOptional(G,ee,"bindMatrix"),Kt.setOptional(G,ee,"bindMatrixInverse");const bn=ee.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Kt.setValue(G,"boneTexture",bn.boneTexture,ot))}ee.isBatchedMesh&&(Kt.setOptional(G,ee,"batchingTexture"),Kt.setValue(G,"batchingTexture",ee._matricesTexture,ot),Kt.setOptional(G,ee,"batchingIdTexture"),Kt.setValue(G,"batchingIdTexture",ee._indirectTexture,ot),Kt.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Kt.setValue(G,"batchingColorTexture",ee._colorsTexture,ot));const gn=ue.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Qe.update(ee,ue,yn),(Zt||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Kt.setValue(G,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=Ge,Sn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Q.environment!==null&&(Sn.envMapIntensity.value=Q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=E2()),Zt&&(Kt.setValue(G,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&Su(Sn,Bi),Ne&&se.fog===!0&&Ke.refreshFogUniforms(Sn,Ne),Ke.refreshMaterialUniforms(Sn,se,J,ne,C.state.transmissionRenderTarget[L.id]),ou.upload(G,zi(tt),Sn,ot)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ou.upload(G,zi(tt),Sn,ot),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Kt.setValue(G,"center",ee.center),Kt.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Kt.setValue(G,"normalMatrix",ee.normalMatrix),Kt.setValue(G,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const bn=se.uniformsGroups;for(let Tn=0,Ni=bn.length;Tn<Ni;Tn++){const Fi=bn[Tn];Pe.update(Fi,yn),Pe.bind(Fi,yn)}}return yn}function Su(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function hl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,Q,ue){const se=Ze.get(L);se.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ze.get(L.texture).__webglTexture=Q,Ze.get(L.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ue,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){const ue=Ze.get(L);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const sr=G.createFramebuffer();this.setRenderTarget=function(L,Q=0,ue=0){R=L,Z=Q,D=ue;let se=!0,ee=null,Ne=!1,Oe=!1;if(L){const Ge=Ze.get(L);if(Ge.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(G.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)ot.setupRenderTarget(L);else if(Ge.__hasExternalTextures)ot.rebindTextures(L,Ze.get(L.texture).__webglTexture,Ze.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const $e=L.depthTexture;if(Ge.__boundDepthTexture!==$e){if($e!==null&&Ze.has($e)&&(L.width!==$e.image.width||L.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(L)}}const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const rt=Ze.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(rt[Q])?ee=rt[Q][ue]:ee=rt[Q],Ne=!0):L.samples>0&&ot.useMultisampledRTT(L)===!1?ee=Ze.get(L).__webglMultisampledFramebuffer:Array.isArray(rt)?ee=rt[ue]:ee=rt,ce.copy(L.viewport),pe.copy(L.scissor),ge=L.scissorTest}else ce.copy(fe).multiplyScalar(J).floor(),pe.copy(_e).multiplyScalar(J).floor(),ge=Me;if(ue!==0&&(ee=sr),ke.bindFramebuffer(G.FRAMEBUFFER,ee)&&se&&ke.drawBuffers(L,ee),ke.viewport(ce),ke.scissor(pe),ke.setScissorTest(ge),Ne){const Ge=Ze.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ge.__webglTexture,ue)}else if(Oe){const Ge=Q;for(let nt=0;nt<L.textures.length;nt++){const rt=Ze.get(L.textures[nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ue,Ge)}}else if(L!==null&&ue!==0){const Ge=Ze.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ge.__webglTexture,ue)}H=-1},this.readRenderTargetPixels=function(L,Q,ue,se,ee,Ne,Oe,He=0){if(!(L&&L.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ze.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){ke.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const nt=L.textures[He],rt=nt.format,$e=nt.type;if(!Ot.textureFormatReadable(rt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable($e)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-se&&ue>=0&&ue<=L.height-ee&&(L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+He),G.readPixels(Q,ue,se,ee,st.convert(rt),st.convert($e),Ne))}finally{const nt=R!==null?Ze.get(R).__webglFramebuffer:null;ke.bindFramebuffer(G.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,ue,se,ee,Ne,Oe,He=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ze.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(Q>=0&&Q<=L.width-se&&ue>=0&&ue<=L.height-ee){ke.bindFramebuffer(G.FRAMEBUFFER,Ge);const nt=L.textures[He],rt=nt.format,$e=nt.type;if(!Ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+He),G.readPixels(Q,ue,se,ee,st.convert(rt),st.convert($e),0);const Rt=R!==null?Ze.get(R).__webglFramebuffer:null;ke.bindFramebuffer(G.FRAMEBUFFER,Rt);const Nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await F3(G,Nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(ht),G.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,ue=0){const se=Math.pow(2,-ue),ee=Math.floor(L.image.width*se),Ne=Math.floor(L.image.height*se),Oe=Q!==null?Q.x:0,He=Q!==null?Q.y:0;ot.setTexture2D(L,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,Oe,He,ee,Ne),ke.unbindTexture()};const $s=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(L,Q,ue=null,se=null,ee=0,Ne=null){Ne===null&&(ee!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ee,ee=0):Ne=0);let Oe,He,Ge,nt,rt,$e,ht,Rt,Nt;const Tt=L.isCompressedTexture?L.mipmaps[Ne]:L.image;if(ue!==null)Oe=ue.max.x-ue.min.x,He=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,rt=ue.min.y,$e=ue.isBox3?ue.min.z:0;else{const gn=Math.pow(2,-ee);Oe=Math.floor(Tt.width*gn),He=Math.floor(Tt.height*gn),L.isDataArrayTexture?Ge=Tt.depth:L.isData3DTexture?Ge=Math.floor(Tt.depth*gn):Ge=1,nt=0,rt=0,$e=0}se!==null?(ht=se.x,Rt=se.y,Nt=se.z):(ht=0,Rt=0,Nt=0);const Ft=st.convert(Q.format),tt=st.convert(Q.type);let qt;Q.isData3DTexture?(ot.setTexture3D(Q,0),qt=G.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ot.setTexture2DArray(Q,0),qt=G.TEXTURE_2D_ARRAY):(ot.setTexture2D(Q,0),qt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const At=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ea=G.getParameter(G.UNPACK_SKIP_PIXELS),Zt=G.getParameter(G.UNPACK_SKIP_ROWS),Bi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Tt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,rt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$e);const Kt=L.isDataArrayTexture||L.isData3DTexture,Sn=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){const gn=Ze.get(L),bn=Ze.get(Q),Tn=Ze.get(gn.__renderTarget),Ni=Ze.get(bn.__renderTarget);ke.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<Ge;Fi++)Kt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(L).__webglTexture,ee,$e+Fi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(Q).__webglTexture,Ne,Nt+Fi)),G.blitFramebuffer(nt,rt,Oe,He,ht,Rt,Oe,He,G.DEPTH_BUFFER_BIT,G.NEAREST);ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||L.isRenderTargetTexture||Ze.has(L)){const gn=Ze.get(L),bn=Ze.get(Q);ke.bindFramebuffer(G.READ_FRAMEBUFFER,$s),ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let Tn=0;Tn<Ge;Tn++)Kt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gn.__webglTexture,ee,$e+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gn.__webglTexture,ee),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Ne,Nt+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Ne),ee!==0?G.blitFramebuffer(nt,rt,Oe,He,ht,Rt,Oe,He,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(qt,Ne,ht,Rt,Nt+Tn,nt,rt,Oe,He):G.copyTexSubImage2D(qt,Ne,ht,Rt,nt,rt,Oe,He);ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?L.isDataTexture||L.isData3DTexture?G.texSubImage3D(qt,Ne,ht,Rt,Nt,Oe,He,Ge,Ft,tt,Tt.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(qt,Ne,ht,Rt,Nt,Oe,He,Ge,Ft,Tt.data):G.texSubImage3D(qt,Ne,ht,Rt,Nt,Oe,He,Ge,Ft,tt,Tt):L.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,ht,Rt,Oe,He,Ft,tt,Tt.data):L.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,ht,Rt,Tt.width,Tt.height,Ft,Tt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,ht,Rt,Oe,He,Ft,tt,Tt);G.pixelStorei(G.UNPACK_ROW_LENGTH,At),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ea),G.pixelStorei(G.UNPACK_SKIP_ROWS,Zt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Bi),Ne===0&&Q.generateMipmaps&&G.generateMipmap(qt),ke.unbindTexture()},this.initRenderTarget=function(L){Ze.get(L).__webglFramebuffer===void 0&&ot.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ot.setTextureCube(L,0):L.isData3DTexture?ot.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ot.setTexture2DArray(L,0):ot.setTexture2D(L,0),ke.unbindTexture()},this.resetState=function(){Z=0,D=0,R=null,ke.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const A2=()=>{const s=V.useRef(null),[e,i]=V.useState(!1);return V.useEffect(()=>{if(!s.current)return;const r=new AE;r.fog=new Mp(328976,.0015),r.background=new Pt(328976);const l=new gi(75,window.innerWidth/window.innerHeight,.1,3e3);l.position.z=5;const c=new T2({antialias:!0,alpha:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(c.domElement);const f=[65535,16711935,16776960,65280,16724787,3355647],d=new Ws(1,1,1),m=new UE(d),p=[],x=400;for(let ne=0;ne<x;ne++){const J=f[Math.floor(Math.random()*f.length)],P=new np({color:J,transparent:!0,opacity:.8,linewidth:2}),X=new sv(m,P);X.position.x=(Math.random()-.5)*120,X.position.y=(Math.random()-.5)*120,X.position.z=(Math.random()-.5)*1e3-500,X.rotation.x=Math.random()*Math.PI,X.rotation.y=Math.random()*Math.PI;const fe=Math.random()*2+.5;X.scale.set(fe,fe,fe),X.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},speedZ:Math.random()*2+.5},r.add(X),p.push(X)}const v=new Tp(1,2),_=new PE(v),S=[],E=15;for(let ne=0;ne<E;ne++){const J=f[Math.floor(Math.random()*f.length)],P=new np({color:J,transparent:!0,opacity:.15,linewidth:1}),X=new sv(_,P);X.position.x=(Math.random()-.5)*600,X.position.y=(Math.random()-.5)*600,X.position.z=(Math.random()-.5)*2e3-800;const fe=Math.random()*50+30;X.scale.set(fe,fe,fe),X.userData={rotationSpeed:{x:(Math.random()-.5)*.002,y:(Math.random()-.5)*.002},speedZ:Math.random()*.5+.1},r.add(X),S.push(X)}const T=new qn,b=4e3,y=new Float32Array(b*3);for(let ne=0;ne<b*3;ne++)y[ne]=(Math.random()-.5)*2500;T.setAttribute("position",new Ri(y,3));const w=new Cx({color:16777215,size:1.5,transparent:!0,opacity:.6}),C=new LE(T,w);r.add(C);let U=!1,k=0,O=0,z=0,Z=0,D=0,R=0,H=0,K=0;const ce=ne=>{U=!0,i(!0),k=ne.clientX,O=ne.clientY,Z=z,R=D},pe=ne=>{U===!0&&(z=(k-ne.clientX)*.1+Z,D=(ne.clientY-O)*.1+R)},ge=()=>{U=!1,i(!1)},I=s.current;I.addEventListener("mousedown",ce),document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ge),I.addEventListener("touchstart",ne=>{const J=ne.touches[0];ce({clientX:J.clientX,clientY:J.clientY})}),I.addEventListener("touchmove",ne=>{const J=ne.touches[0];pe({clientX:J.clientX,clientY:J.clientY})}),I.addEventListener("touchend",ge);const F=()=>{requestAnimationFrame(F),D=Math.max(-85,Math.min(85,D)),H=Fg.degToRad(90-D),K=Fg.degToRad(z);const ne=new le;ne.x=500*Math.sin(H)*Math.cos(K),ne.y=500*Math.cos(H),ne.z=500*Math.sin(H)*Math.sin(K),l.lookAt(ne),p.forEach(J=>{J.position.z+=J.userData.speedZ,J.rotation.x+=J.userData.rotationSpeed.x,J.rotation.y+=J.userData.rotationSpeed.y,J.position.z>200&&(J.position.z=-800,J.position.x=(Math.random()-.5)*120,J.position.y=(Math.random()-.5)*120)}),S.forEach(J=>{J.position.z+=J.userData.speedZ,J.rotation.x+=J.userData.rotationSpeed.x,J.rotation.y+=J.userData.rotationSpeed.y,J.position.z>600&&(J.position.z=-1800,J.position.x=(Math.random()-.5)*600,J.position.y=(Math.random()-.5)*600)}),C.rotation.z+=3e-4,c.render(r,l)};F();const q=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",q),()=>{if(window.removeEventListener("resize",q),I)for(I.removeEventListener("mousedown",ce);I.firstChild;)I.removeChild(I.firstChild);document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ge)}},[]),g.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-sans",children:[g.jsx("div",{ref:s,className:"w-full h-full cursor-move"}),g.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8",children:[g.jsx("div",{className:"flex justify-between items-start",children:g.jsxs("div",{className:"bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-fade-in-down",children:[g.jsx("h1",{className:"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tighter mb-2 drop-shadow-lg",children:"NEON COSMOS"}),g.jsx("p",{className:"text-blue-200 text-sm font-light tracking-widest uppercase opacity-80",children:"Giant Structure Simulation"})]})}),g.jsx("div",{className:`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${e?"opacity-0":"opacity-60"}`,children:g.jsxs("div",{className:"flex flex-col items-center justify-center text-white/50",children:[g.jsx(ph,{className:"w-8 h-8 mb-2 animate-bounce"}),g.jsx("span",{className:"text-xs tracking-[0.2em] uppercase",children:"Drag to Explore"})]})}),g.jsxs("div",{className:"flex justify-between items-end",children:[g.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5",children:[g.jsxs("div",{className:"flex items-center gap-3 text-cyan-300 mb-1",children:[g.jsx(dM,{className:"w-4 h-4"}),g.jsx("span",{className:"text-xs font-bold",children:"CONTROLS"})]}),g.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed max-w-[200px]",children:["마우스를 클릭하고 드래그하여",g.jsx("br",{}),"광활한 우주를 탐험하세요."]})]}),g.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-right",children:[g.jsxs("div",{className:"flex items-center justify-end gap-2 text-pink-400 mb-1",children:[g.jsx(nM,{className:"w-4 h-4"}),g.jsx("span",{className:"text-xs font-bold",children:"SYSTEM"})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex items-center justify-end gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),g.jsx("span",{className:"text-gray-400 text-xs",children:"Simulation Running"})]}),g.jsxs("div",{className:"text-gray-500 text-[10px] font-mono",children:["ENTITIES: 400 CUBES",g.jsx("br",{}),"STRUCTURES: 15 GIANTS"]})]})]})]})]}),g.jsx("style",{children:`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `})]})},w2=20,$c=.08,Pv="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",R2=s=>{let e=null,i=null,r=null,l=null;const c=()=>{e||(e=new(window.AudioContext||window.webkitAudioContext),i=e.createGain(),i.connect(e.destination),i.gain.value=.8),e.state==="suspended"&&e.resume()},f=async v=>{if(c(),!!e)try{const _=await v.arrayBuffer();r=await e.decodeAudioData(_),console.log("Audio loaded successfully")}catch(_){console.error("Error decoding audio data:",_),alert("오디오 파일을 디코딩하는 데 실패했습니다. 다른 파일을 시도해주세요.")}},d=(v,_)=>{if(!s||!e||!i||!r)return;c();let E=v/_*r.duration;E+$c>r.duration&&(E=r.duration-$c),E<0&&(E=0);const T=e.createBufferSource();T.buffer=r;const b=e.createGain();T.connect(b),b.connect(i);const y=e.currentTime;b.gain.setValueAtTime(0,y),b.gain.linearRampToValueAtTime(1,y+.01),b.gain.linearRampToValueAtTime(0,y+$c),T.start(y,E,$c+.02)},m=()=>{if(!s||!e||!i||!r)return;c(),p();const v=e.createBufferSource();v.buffer=r,v.connect(i),v.start(0),l=v,v.onended=()=>{l=null}},p=()=>{if(l){try{l.stop()}catch{}l=null}};return{loadAudio:f,playSlice:d,playFull:m,stop:p,hasAudio:()=>!!r}};function C2(){const[s,e]=V.useState(Pv),[i,r]=V.useState(null),[l,c]=V.useState(!1),[f,d]=V.useState(!0),[m,p]=V.useState("quick"),[x,v]=V.useState(50),[_,S]=V.useState(!0),[E,T]=V.useState(0),[b,y]=V.useState(1),w=V.useRef(null),C=V.useRef(null),U=V.useRef([]),k=V.useRef(!1),O=V.useRef(null);V.useEffect(()=>{O.current=R2(_),_||O.current?.stop()},[_]),V.useEffect(()=>{const I=new Image;I.crossOrigin="Anonymous",I.src=s,I.onload=()=>{C.current=I,z(I)}},[s,b]);const z=I=>{const F=w.current;if(!F)return;const q=600,ne=Math.floor(I.width/b),J=Math.min(1,q/ne),P=Math.floor(ne*J),X=Math.floor(I.height*J);F.width=P,F.height=X,U.current=Array.from({length:P},(fe,_e)=>_e),T(P),d(!0),Z(U.current)},Z=I=>{const F=w.current,q=C.current;if(!F||!q)return;const ne=F.getContext("2d",{willReadFrequently:!0});if(!ne)return;ne.clearRect(0,0,F.width,F.height);const J=q.width/F.width*b;for(let P=0;P<I.length;P++){const X=I[P]*J;ne.drawImage(q,X,0,J,q.height,P,0,1,F.height)}},D=I=>new Promise(F=>setTimeout(F,I)),R=()=>{if(k.current)throw new Error("Aborted")},H=async()=>{if(l)return;const I=[...U.current];for(let F=I.length-1;F>0;F--){const q=Math.floor(Math.random()*(F+1));[I[F],I[q]]=[I[q],I[F]]}U.current=I,Z(I),d(!1),O.current?.stop()},K=I=>{const F=I.target.files?.[0];if(F){const q=new FileReader;q.onload=ne=>{ne.target?.result&&e(ne.target.result)},q.readAsDataURL(F)}},ce=async I=>{const F=I.target.files?.[0];F&&O.current&&(r("Loading audio..."),await O.current.loadAudio(F),r(F.name))},pe=async()=>{if(l||f)return;c(!0),k.current=!1,O.current?.stop();const I=Math.max(0,(100-x)/2);try{const F=[...U.current],q=F.length,ne=async J=>{U.current=F,Z(F),J%w2===0&&_&&O.current?.playSlice(F[J],q),I>0&&await D(I),R()};if(m==="bubble")for(let J=0;J<q;J++)for(let P=0;P<q-J-1;P++)F[P]>F[P+1]&&([F[P],F[P+1]]=[F[P+1],F[P]],await ne(P));else if(m==="selection")for(let J=0;J<q;J++){let P=J;for(let X=J+1;X<q;X++)F[X]<F[P]&&(P=X);P!==J&&([F[J],F[P]]=[F[P],F[J]],await ne(J))}else if(m==="insertion")for(let J=1;J<q;J++){let P=F[J],X=J-1;for(;X>=0&&F[X]>P;)F[X+1]=F[X],X=X-1,X%5===0&&await ne(X);F[X+1]=P,await ne(J)}else if(m==="quick"){const J=async(X,fe)=>{const _e=F[fe];let Me=X-1;for(let te=X;te<fe;te++)R(),F[te]<_e&&(Me++,[F[Me],F[te]]=[F[te],F[Me]],te%3===0&&await ne(te));return[F[Me+1],F[fe]]=[F[fe],F[Me+1]],await ne(fe),Me+1},P=async(X,fe)=>{if(X<fe){const _e=await J(X,fe);await P(X,_e-1),await P(_e+1,fe)}};await P(0,q-1)}else if(m==="heap"){const J=async(P,X)=>{let fe=X;const _e=2*X+1,Me=2*X+2;_e<P&&F[_e]>F[fe]&&(fe=_e),Me<P&&F[Me]>F[fe]&&(fe=Me),fe!==X&&([F[X],F[fe]]=[F[fe],F[X]],await ne(X),await J(P,fe))};for(let P=Math.floor(q/2)-1;P>=0;P--)await J(q,P);for(let P=q-1;P>0;P--)[F[0],F[P]]=[F[P],F[0]],await ne(P),await J(P,0)}else if(m==="radix"){const P=(X=>Math.max(...X))(F);for(let X=1;Math.floor(P/X)>0;X*=10){const fe=new Array(q).fill(0),_e=new Array(10).fill(0);for(let Me=0;Me<q;Me++)_e[Math.floor(F[Me]/X)%10]++;for(let Me=1;Me<10;Me++)_e[Me]+=_e[Me-1];for(let Me=q-1;Me>=0;Me--)fe[_e[Math.floor(F[Me]/X)%10]-1]=F[Me],_e[Math.floor(F[Me]/X)%10]--;for(let Me=0;Me<q;Me++)F[Me]=fe[Me],Me%3===0&&await ne(Me)}}else if(m==="merge"){const J=async(X,fe,_e)=>{const Me=F.slice(X,fe+1),te=F.slice(fe+1,_e+1);let de=0,Ce=0,Ue=X;for(;de<Me.length&&Ce<te.length;)R(),Me[de]<=te[Ce]?(F[Ue]=Me[de],de++):(F[Ue]=te[Ce],Ce++),Ue%2===0&&await ne(Ue),Ue++;for(;de<Me.length;)F[Ue]=Me[de],de++,Ue++,Ue%2===0&&await ne(Ue);for(;Ce<te.length;)F[Ue]=te[Ce],Ce++,Ue++,Ue%2===0&&await ne(Ue)},P=async(X,fe)=>{if(X>=fe)return;const _e=X+Math.floor((fe-X)/2);await P(X,_e),await P(_e+1,fe),await J(X,_e,fe)};await P(0,q-1)}d(!0),Z(U.current),_&&O.current?.hasAudio()&&O.current.playFull()}catch(F){console.log("Sorting aborted or error:",F)}finally{c(!1)}},ge=()=>{k.current=!0,c(!1),O.current?.stop()};return g.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col items-center p-4",children:[g.jsxs("header",{className:"w-full max-w-4xl flex justify-between items-center mb-8 border-b border-neutral-800 pb-4",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(eM,{className:"text-purple-400",size:24}),g.jsx("h1",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500",children:"Pixel Sort Audio Visualizer"})]}),g.jsxs("div",{className:"flex gap-4 text-sm text-neutral-400",children:[g.jsx("span",{children:E>0?`${E} Columns`:"Loading..."}),g.jsx("span",{children:l?"Sorting...":f?"Sorted":"Ready"})]})]}),g.jsxs("main",{className:"w-full max-w-4xl flex flex-col items-center gap-6",children:[g.jsxs("div",{className:"relative group w-full flex justify-center bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-neutral-800 backdrop-blur-sm min-h-[300px]",children:[g.jsx("canvas",{ref:w,className:"max-w-full h-auto object-contain cursor-pointer transition-opacity",onClick:l?void 0:H,title:"Click to Shuffle"}),f&&!l&&g.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:g.jsxs("span",{className:"flex items-center gap-2 text-white font-medium",children:[g.jsx(wg,{size:16})," 클릭해서 섞기"]})})]}),g.jsxs("div",{className:"w-full bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-md",children:[g.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-center justify-between",children:[g.jsxs("div",{className:"flex flex-col gap-4 w-full md:w-auto",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider",children:"Algorithm"}),g.jsxs("select",{value:m,onChange:I=>p(I.target.value),disabled:l,className:"bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none",children:[g.jsx("option",{value:"bubble",children:"Bubble Sort (Slow)"}),g.jsx("option",{value:"selection",children:"Selection Sort"}),g.jsx("option",{value:"insertion",children:"Insertion Sort"}),g.jsx("option",{value:"quick",children:"Quick Sort (Fast)"}),g.jsx("option",{value:"merge",children:"Merge Sort"}),g.jsx("option",{value:"heap",children:"Heap Sort"}),g.jsx("option",{value:"radix",children:"Radix Sort (Very Fast)"})]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Speed"}),g.jsx("input",{type:"range",min:"0",max:"100",value:x,onChange:I=>v(Number(I.target.value)),className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("label",{className:"text-xs font-bold text-neutral-400 uppercase tracking-wider w-16",children:"Pixel Size"}),g.jsxs("div",{className:"flex items-center gap-2 w-full",children:[g.jsx("input",{type:"range",min:"1",max:"20",value:b,onChange:I=>y(Number(I.target.value)),disabled:l,className:"w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"}),g.jsxs("span",{className:"text-sm text-neutral-400 min-w-[2rem]",children:[b,"x"]})]})]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("button",{onClick:()=>S(!_),className:`p-3 rounded-full transition-all ${_?"bg-neutral-700 text-purple-300 hover:bg-neutral-600":"bg-neutral-800 text-neutral-500"}`,title:_?"Mute":"Unmute",children:_?g.jsx(IM,{size:20}):g.jsx(BM,{size:20})}),l?g.jsxs("button",{onClick:ge,className:"flex items-center gap-2 px-8 py-3 bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 rounded-lg font-bold transition-all",children:[g.jsx(ax,{size:18})," 중지"]}):g.jsxs(g.Fragment,{children:[g.jsxs("button",{onClick:H,className:"flex items-center gap-2 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-all",children:[g.jsx(wg,{size:18})," 섞기"]}),g.jsxs("button",{onClick:pe,disabled:f,className:`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-purple-900/50 transition-all transform hover:scale-105
                            ${f?"bg-neutral-700 opacity-50 cursor-not-allowed":!i&&_?"bg-yellow-600 hover:bg-yellow-500":"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"}`,title:!i&&_?"오디오 파일이 없으면 소리가 나지 않습니다":"정렬 시작",children:[g.jsx(nu,{size:18,fill:"currentColor"})," 정렬 시작"]})]})]})]}),g.jsxs("div",{className:"mt-6 pt-4 border-t border-neutral-700 flex flex-wrap gap-4 justify-between items-center",children:[g.jsxs("div",{className:"flex gap-4",children:[g.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm text-neutral-400 hover:text-white transition-colors bg-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-700",children:[g.jsx(PM,{size:16}),g.jsx("span",{children:"이미지 업로드"}),g.jsx("input",{type:"file",accept:"image/*",onChange:K,className:"hidden"})]}),g.jsxs("label",{className:`flex items-center gap-2 cursor-pointer text-sm px-3 py-2 rounded-lg transition-colors ${i?"bg-purple-500/20 text-purple-300 hover:bg-purple-500/30":"text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700"}`,children:[g.jsx(pM,{size:16}),g.jsx("span",{className:"truncate max-w-[150px]",children:i||"오디오 파일(.mp3) 업로드"}),g.jsx("input",{type:"file",accept:"audio/*",onChange:ce,className:"hidden"})]})]}),g.jsx("button",{onClick:()=>{e(Pv),r(null),O.current?.stop()},className:"text-xs text-neutral-500 hover:text-neutral-300 underline",children:"초기화"})]})]})]}),g.jsxs("footer",{className:"mt-8 text-center text-neutral-500 text-xs max-w-lg leading-relaxed",children:[g.jsx("p",{children:"이미지를 섞은 후 정렬되는 과정을 시각화합니다."}),g.jsx("p",{children:i?"업로드된 오디오 파일이 정렬 위치에 맞춰 조각나서 재생되며, 정렬이 완료되면 전체 곡이 재생됩니다.":"오디오 파일을 업로드하면 정렬 과정에 맞춰 사운드가 재생됩니다."})]})]})}const N2=({children:s})=>g.jsx("span",{className:"animate-rainbow font-bold text-xl md:text-3xl",style:{fontFamily:'"Comic Sans MS", "Chalkboard SE", sans-serif'},children:s}),fh=({children:s,color:e="text-red-500"})=>{const[i,r]=V.useState(!0);return V.useEffect(()=>{const l=setInterval(()=>r(c=>!c),500);return()=>clearInterval(l)},[]),g.jsx("span",{className:`${i?"opacity-100":"opacity-0"} ${e}`,children:s})},D2=({text:s})=>g.jsx("div",{className:"overflow-hidden whitespace-nowrap bg-blue-800 text-yellow-300 border-y-4 border-red-600 font-mono p-1",children:g.jsxs("div",{className:"animate-marquee inline-block text-lg",children:["+++ ",s," +++ ",s," +++ ",s," +++"]})}),L2=[{date:"2024년 10월 1일",title:"계절에 맞지 않는 습기",content:"10월임에도 불구하고 대기가 마치 늪지대처럼 무겁고 축축하다. 창문을 닫아도 스며드는 이 끈적한 습기는 단순한 날씨 탓이 아닌 것 같다. 빗물에서는 맡아본 적 없는 기이한 악취가 난다. 마치 수천 년 동안 고인 웅덩이에서 퍼올린 듯한, 비릿하면서도 금속성 냄새가 섞인 짠내다. 해안가와는 수백 킬로미터나 떨어진 이 내륙 도시에서 왜 심해의 부패한 냄새가 진동하는 것일까? 머리가 멍하고 속이 메스껍다. 단순한 기분 탓이라고 믿고 싶지만, 본능이 무언가 잘못되었다고 경고하고 있다.",sanityLevel:98},{date:"2024년 10월 5일",title:"기하학적 악몽",content:"어젯밤, 나는 잠들지 말았어야 했다. 꿈속에서 나는 거대한 녹색 석재로 지어진 도시를 헤매고 있었다. 그곳의 건축 양식은 인류의 역사 그 어디에도 존재하지 않는 것이었다. 건물들은 '비유클리드 기하학'적으로 뒤틀려 있었고, 오목한지 볼록한지조차 구분할 수 없는 벽면이 시야를 어지럽혔다. 저 멀리 보이는 거대한 문은 분명히 수직으로 서 있었지만, 동시에 수평으로 누워있는 듯한 모순된 감각을 주었다. 깨어난 지 한참이 지났지만, 그 압도적인 거대함에 눌린 공포가 가시질 않는다. 시야 구석에서 자꾸만 그 도시의 잔상이 어른거린다.",sanityLevel:94},{date:"2024년 10월 8일",title:"뒷골목의 골동품점",content:"퇴근길, 늘 다니던 길이었지만 오늘 처음 보는 낡은 골동품 가게가 눈에 띄었다. 홀린 듯 들어간 가게 내부는 먼지와 곰팡이 냄새로 가득했다. 주인이라 짐작되는 노인은 눈꺼풀이 없나 싶을 정도로 눈을 깜빡이지 않았고, 목소리는 물속에서 말하는 것처럼 걸걸했다. 그가 나를 보며 '별들의 위치가 잡혔다'고 중얼거렸을 때 나가야 했다. 하지만 진열장 구석에 놓인, 녹색 비누석(soapstone)으로 조각된 기이한 우상(Idol)이 내 발을 붙잡았다. 조잡한 솜씨였지만, 그 기괴한 형태는 뇌리에 박혀 지워지지 않는다.",sanityLevel:90},{date:"2024년 10월 12일",title:"저주받은 우상",content:"미친 짓인 줄 알면서도 결국 그 조각상을 사들고 왔다. 책상 위에 올려두고 자세히 관찰해보니 더욱 끔찍하다. 문어의 머리를 한 인간의 형상, 혹은 인간을 닮은 용의 형상... 등 뒤에는 징그러운 비늘이 덮인 날개가 접혀 있다. 만져보면 돌인데도 불구하고 미세하게 체온이 느껴지는 것 같고, 표면은 늘 축축한 점액으로 덮여 있는 듯한 착각을 준다. 이 조각상의 눈동자가 내가 방 안 어디에 있든 나를 주시하고 있다는 느낌을 지울 수가 없다.",sanityLevel:86},{date:"2024년 10월 15일",title:"동물들의 도주",content:"집안 분위기가 흉흉하다. 내 고양이 '네로'는 평소 온순했는데, 지금은 내 방 근처에는 얼씬도 하지 않는다. 억지로 데려오면 털을 곤두세우고 허공을 향해 미친 듯이 하악질을 해댄다. 더 기이한 것은 집 천장에서 들리던 쥐들의 발소리가 완전히 끊겼다는 것이다. 쥐덫에는 아무것도 걸리지 않았다. 그저 짐승들은 본능적으로 알고 있는 것이다. 이 집, 아니, 이 방에 포식자보다 더 상위의 존재가 도사리고 있다는 것을.",sanityLevel:81},{date:"2024년 10월 19일",title:"변모하는 이웃들",content:"옆집 사는 존슨 씨와 엘리베이터에서 마주쳤다. 그는 평범한 회사원이었는데, 며칠 사이에 사람이 완전히 변해버렸다. 피부는 창백하다 못해 잿빛으로 변했고, 목 주변의 피부가 늘어져 주름이 잡혀 있었다. 무엇보다 끔찍한 건 그의 눈이었다. 눈꺼풀이 퇴화한 듯 튀어나온 안구는 퀭하게 초점을 잃고 있었다. 그가 내릴 때 내 귀에 대고 '다곤 님께서 기다리신다'라고 속삭였다. 그 목소리는 사람의 성대에서 나올 수 없는, 젖은 진흙이 뭉개지는 소리 같았다.",sanityLevel:72},{date:"2024년 10월 24일",title:"지하의 북소리",content:"잠을 잘 수가 없다. 두통이 머리를 쪼개는 것 같다. 진통제를 한 통을 다 비웠지만 소용없다. 밤이 깊어지면 지하 깊은 곳, 지각 밑바닥에서부터 둥... 둥... 하는 북소리가 들려온다. 규칙적인 심장 박동 같기도 하고, 어떤 거대한 존재가 땅을 파고 올라오는 소리 같기도 하다. 이 리듬은 불규칙하고 혼란스러워서 듣고 있으면 정신이 아득해진다. 바닥에 귀를 대면 그 소리와 함께 미세한 진동이 느껴진다. 그들이 오고 있다.",sanityLevel:65},{date:"2024년 10월 28일",title:"금지된 지식",content:"도서관의 폐쇄된 서고에 몰래 들어갔다. 내가 찾는 것이 거기에 있을 거라는 확신이 들었다. 그리고 발견했다. 압둘 알하자드가 저술했다는 '알 아지프', 즉 '네크로노미콘'의 라틴어 필사본을. 책에서는 썩은 흙냄새가 났다. 떨리는 손으로 페이지를 넘기자, 글자들이 살아서 꿈틀거렸다. 인간의 발성 기관으로는 발음할 수 없는 저주받은 주문들. 읽지 말아야 한다고 이성이 소리쳤지만, 내 눈은 이미 '옛 지배자(The Great Old Ones)'들에 대한 구절을 탐독하고 있었다.",sanityLevel:55},{date:"2024년 10월 31일",title:"침식",content:"밖을 내다볼 수가 없다. 창밖에는 녹색의 끈적이는 안개가 가득 차 있다. 안개 속에서 거대한 촉수 같은 그림자가 꿈틀거리는 것이 보인다. 창문 틈새로 젤리 같은 점액질이 스며 들어와 바닥에 고여있다. 닦아내려 걸레를 대니 걸레가 치이익 소리를 내며 녹아버렸다. 옆집 개가 짖는 소리가 들렸는데, 갑자기 끔찍한 비명과 함께 뼈가 으스러지는 소리가 났다. 그리고 찾아온 정적. 이 세상의 것이 아닌 끔찍한 고요함이다.",sanityLevel:45},{date:"2024년 11월 3일",title:"신체의 변화",content:"거울 속의 내가 낯설다. 내 눈동자가... 세로로 갈라져 있다. 아니, 다시 보니 정상이다. 환각인가? 하지만 목덜미가 간지러워 긁었더니 손톱 밑에 회색 비늘 같은 것이 묻어 나왔다. 목 양옆이 따끔거린다. 숨을 쉴 때마다 코가 아닌 목 옆에서 공기가 드나드는 느낌이 든다. 피부가 건조한 것을 견딜 수가 없다. 욕조에 물을 가득 받아놓고 몸을 담가야만 안정이 된다. 나는 무엇이 되어가고 있는 건가?",sanityLevel:38},{date:"2024년 11월 7일",title:"뒤틀린 천구",content:"밤하늘이 잘못되었다. 천문학자인 친구에게 전화를 걸어 별자리가 이동했다고 소리쳤지만, 전화기 너머에서는 젖은 물소리와 비명소리만 들려왔다. 오리온자리는 제 자리에 있지 않다. 카시오페이아는 기괴하게 뒤틀려 있다. 별들이... 살아서 움직이고 있다. 그것들은 단순히 빛나는 가스가 아니다. 그것들은 우주 밖에서 우리를 내려다보는 수십억 개의 눈동자다. 그들이 나를 보고 있다. 나를 찾았다.",sanityLevel:30},{date:"2024년 11월 12일",title:"단절",content:"모든 통신이 끊겼다. 인터넷도, 전화도 먹통이다. TV를 켜면 지직거리는 노이즈 화면 속에 기이한 형상들이 얼핏얼핏 지나간다. 그리고 그 소음 속에서 명확한 단어들이 들리기 시작했다. '이아(Iä)... 이아(Iä)...' 그것은 찬양인가? 비명인가? 내 입에서도 나도 모르게 그 소리가 흘러나온다. 머릿속이 끈적한 진흙으로 가득 찬 기분이다.",sanityLevel:22},{date:"2024년 11월 15일",title:"르뤼에의 부상",content:"PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN. 죽은 크툴루가 그의 처소 르뤼에에서 꿈꾸며 기다린다. 이제 뜻을 알 것 같다. 아니, 기억해냈다. 바닥에서 바닷물이 솟구친다. 벽지가 젖어 뜯겨 나가고 그 뒤로 축축한 석조 벽이 드러난다. 이곳은 더 이상 내 방이 아니다. 심해다. 수압이 느껴진다. 하지만 고통스럽지 않다. 오히려 포근하다.",sanityLevel:15},{date:"2024년 11월 18일",title:"방문자들",content:"방문 밖 복도에서 질척이는 발소리가 들린다. 찰박... 찰박... 하나가 아니다. 십수 명, 아니 수십 명의 발소리. 문 손잡이가 천천히, 아주 천천히 돌아간다. 나는 장롱 속에 숨어 숨을 죽인다. 틈새로 보이는 거실은 이미 물이 차오르고 해초들이 둥둥 떠다니고 있다. 썩은 생선 내장의 악취가 코를 찌른다. 문이 열린다. 그들이 들어온다.",sanityLevel:10},{date:"2024년 11월 21일",title:"그림자의 춤",content:"빛은 사라졌다. 오로지 인광(燐光)만이 주위를 밝힌다. 그림자들이 제멋대로 벽에서 떨어져 나와 춤을 춘다. 내 그림자를 보았다. 머리가 있어야 할 곳에 촉수들이 꿈틀거리고 있다. 그림자가 본체다. 육체는 껍데기일 뿐이다. 나는 내 그림자를 어루만진다. 차갑고 미끈거린다. 우리는 하나다.",sanityLevel:8},{date:"2024년 11월 24일",title:"포식",content:"인간의 음식은 역겨워서 토해버렸다. 냉장고를 뒤져 날생선을 꺼냈다. 비늘도 벗기지 않은 생선을 씹어 먹었다. 내장에서 터져 나오는 씁쓸하고 비릿한 액체가 입안 가득 퍼질 때, 나는 비로소 살아있음을 느꼈다. 더 큰 고기가 필요하다. 더 신선하고, 더 피가 흐르는...",sanityLevel:5},{date:"2024년 11월 28일",title:"환희와 귀환",content:"두려움? 아니, 이것은 축복이다. 창문을 깨부수자 검은 파도가 2층인 내 방 안으로 들이닥쳤다. 저 멀리 수평선 너머로, 구름을 뚫고 솟아오른 거대한 그림자가 보인다. 그분의 날갯짓 한 번에 태풍이 몰아친다. 머릿속을 맴돌던 목소리가 이제는 천둥처럼 울린다. 테켈리-리! 테켈리-리! 우리는 바다로 돌아가야 해. 어머니 히드라와 아버지 다곤이 우릴 기다리신다.",sanityLevel:2},{date:"2024년 11월 29일",title:"문",content:"심해의 아이들이 나를 둘러쌌다. 그들의 튀어나온 눈은 아름답다. 목덜미의 아가미가 벌려지며 바닷물이 폐로 들어온다. 숨이 막히지 않는다. 상쾌하다. 우리는 손을 잡고 가라앉는다. 저 아래, 녹색 빛이 감도는 웅장한 도시 르뤼에로. 영원한 생명이 그곳에 있다.",sanityLevel:1},{date:"기록 불가",title:"END",content:"IÄ! IÄ! CTHULHU FHTAGN! IÄ! IÄ! CTHULHU FHTAGN! 별들이 제자리를 찾았다! 창문! 창문! 창문을 보라!",sanityLevel:0}];function U2(){const[s,e]=V.useState(100),[i,r]=V.useState(665);return V.useEffect(()=>{const l=setInterval(()=>{e(c=>Math.max(0,c-1))},500);return()=>clearInterval(l)},[]),V.useEffect(()=>{const l=setTimeout(()=>r(666),3e3);return()=>clearTimeout(l)},[]),g.jsxs("div",{className:"min-h-screen bg-black text-lime-400 font-serif overflow-x-hidden selection:bg-red-500 selection:text-white",children:[g.jsx("style",{children:`
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
      `}),g.jsxs("header",{className:"border-b-8 border-double border-purple-600 bg-indigo-900 p-4 text-center",children:[g.jsxs("div",{className:"flex justify-center items-center gap-4",children:[g.jsx("span",{className:"text-6xl spin-3d",children:"🐙"}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-4xl md:text-6xl font-black text-red-600 drop-shadow-[4px_4px_0_rgba(255,255,255,0.8)]",children:"~*~ 금지된 지식 ~*~"}),g.jsx("h2",{className:"text-xl md:text-2xl mt-2 word-art",children:"THE FORBIDDEN LOG"})]}),g.jsx("span",{className:"text-6xl spin-3d",children:"👁️"})]}),g.jsx("p",{className:"mt-4 text-yellow-300 font-mono text-sm",children:"Best Viewed with Netscape Navigator 4.0"})]}),g.jsx(D2,{text:"경고: 이곳에 오래 머물지 마시오... 별들이 제자리를 찾았다... 이아! 이아! 크툴루 파탄... DO NOT READ THE LATIN TEXT..."}),g.jsxs("main",{className:"container mx-auto p-2 md:p-4 flex flex-col md:flex-row gap-4 bg-pattern min-h-screen",children:[g.jsxs("aside",{className:"w-full md:w-64 bg-blue-900 border-4 border-ridge border-gray-400 p-2 text-center h-fit shrink-0",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("h3",{className:"bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold p-1 border-2 border-white",children:"M E N U"}),g.jsxs("ul",{className:"list-disc list-inside text-left mt-2 space-y-2 pl-2 text-cyan-300 underline cursor-pointer",children:[g.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"HOME"}),g.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"MY PROFILE"}),g.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"CTHULHU PICS"}),g.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"GUESTBOOK"}),g.jsx("li",{className:"hover:text-white hover:bg-blue-700",children:"EMAIL ME"}),g.jsx("li",{className:"hover:text-white hover:bg-blue-700 text-red-500 font-bold",children:"SECRET LINK"})]})]}),g.jsxs("div",{className:"border-4 border-dotted border-red-500 p-2 bg-black mb-4",children:[g.jsx(fh,{color:"text-red-500",children:g.jsx("p",{className:"font-bold text-lg",children:"WARNING!!"})}),g.jsx("p",{className:"text-xs text-white mt-1",children:"Don't scroll down if you are scare!!"}),g.jsx("div",{className:"mt-2 text-4xl",children:"👻"})]}),g.jsxs("div",{className:"bg-gray-300 border-2 border-inset border-gray-500 p-1",children:[g.jsx("p",{className:"text-black text-xs font-bold mb-1",children:"Total Visitors:"}),g.jsx("div",{className:"bg-black text-red-600 font-mono text-xl border border-gray-500 tracking-widest",children:i.toString().padStart(6,"0")})]}),g.jsx("div",{className:"mt-4",children:g.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/70/Spinning_globe.gif",alt:"spinning globe",className:"mx-auto w-16 h-16"})}),g.jsxs("div",{className:"mt-4 border-2 border-white p-1",children:[g.jsx("p",{className:"text-[10px] text-yellow-300",children:"Join our WebRing!"}),g.jsxs("div",{className:"flex justify-center gap-1 mt-1",children:[g.jsx("div",{className:"w-4 h-4 bg-red-500 rounded-full"}),g.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),g.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded-full"})]})]})]}),g.jsxs("section",{className:"flex-1 bg-gray-900 border-8 border-double border-green-700 p-4 md:p-8 relative",children:[g.jsx("div",{className:"absolute top-0 right-0 p-2 text-xs text-gray-500",children:"Last updated: 2024.11.30"}),g.jsxs("div",{className:"text-center mb-8",children:[g.jsx(N2,{children:"WELCOME TO MY DARK WORLD"}),g.jsx("br",{}),g.jsx("img",{src:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5eDh4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LpSf6D96Q9J5L3T75m/giphy.gif",alt:"Under Construction",className:"inline-block my-4 h-12",onError:l=>l.currentTarget.style.display="none"}),g.jsx("p",{className:"text-xs text-green-500 mt-2",children:'"이곳은 나의 광기를 기록하는 성소..."'})]}),g.jsxs("div",{className:"bg-red-900 border-2 border-red-500 p-2 mb-6 text-center animate-pulse sticky top-0 z-10 shadow-lg shadow-red-900/50",children:[g.jsxs("span",{className:"text-yellow-400 font-bold text-xl drop-shadow-md",children:["현재 당신의 이성(Sanity): ",s,"/100"]}),s<30&&g.jsx("p",{className:"text-white font-bold text-2xl mt-1 blink",children:"RUN AWAY!!!"})]}),g.jsx("div",{className:"space-y-8 font-mono",children:L2.map((l,c)=>g.jsxs("article",{className:"border-b-2 border-dashed border-gray-600 pb-4 hover:bg-gray-800 transition-colors",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-2 mb-2",children:[g.jsxs("h3",{className:"text-xl text-fuchsia-400 font-bold bg-blue-900 inline-block px-2 border border-blue-400",children:[l.date," - ",l.title]}),g.jsxs("span",{className:"text-xs text-gray-400",children:["[Sanity Level: ",l.sanityLevel,"%]"]})]}),l.sanityLevel<30?g.jsx("div",{className:"bg-black text-center p-4 my-2 border-4 border-yellow-500 transform rotate-1",children:g.jsx(fh,{color:"text-cyan-400",children:g.jsx("span",{className:"text-lg md:text-2xl font-bold",children:l.content})})}):g.jsx("p",{className:`mt-2 leading-relaxed text-lg ${l.sanityLevel<60?"text-red-400":"text-green-300"}`,children:l.content}),c===8&&g.jsx("div",{className:"my-4 text-center",children:g.jsxs("div",{className:"inline-block border-4 border-red-600 p-1 bg-white",children:[g.jsx("span",{className:"text-black font-bold text-4xl block transform skew-x-12",children:"👁️ 👁️ 👁️"}),g.jsx("span",{className:"text-red-600 text-xs",children:"THEY ARE WATCHING"})]})})]},c))}),g.jsxs("div",{className:"mt-12 text-center p-4 border-t-2 border-gray-600",children:[g.jsx("p",{className:"text-purple-500 text-xl mb-4 font-bold",children:"방명록을 남겨주세요 (남기지 않으면 저주함)"}),g.jsx("input",{type:"text",placeholder:"Name",className:"bg-gray-200 border-2 border-inset border-gray-500 p-1 mr-2 text-black"}),g.jsx("button",{className:"bg-gray-300 border-2 border-outset border-gray-500 px-4 py-1 text-black font-bold active:border-inset",children:"Sign Guestbook"}),g.jsx("br",{}),g.jsx("br",{}),g.jsx("a",{href:"#",className:"text-blue-400 underline text-sm hover:bg-white hover:text-black",children:"[Top으로 돌아가기]"})]})]})]}),g.jsxs("footer",{className:"bg-gray-800 text-center p-4 border-t-4 border-gray-500 text-xs text-gray-400",children:[g.jsx("p",{children:"Copyright (c) 1999 Mystic Keeper. All rights reserved."}),g.jsx("p",{children:"이 사이트의 모든 저작권은 위대한 옛 지배자에게 있습니다."}),g.jsxs("div",{className:"flex justify-center gap-2 mt-2",children:[g.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"HTML 4.01"}),g.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"IE 5.0"}),g.jsx("div",{className:"w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]",children:"Netscape"})]}),g.jsx("br",{}),g.jsx(fh,{children:g.jsx("span",{className:"text-yellow-500 font-bold",children:"공사중 (Under Construction)"})}),g.jsx("div",{className:"mt-4 text-[10px] text-gray-600",children:"Design by: DarkSoulMaster666"})]})]})}const Ns=600,Ds=400,ca=50,Jc=24,Cr={easy:{aiSpeed:2.5,targetScore:10,label:"쉬움 (Easy)"},medium:{aiSpeed:4.5,targetScore:15,label:"보통 (Normal)"},hard:{aiSpeed:7,targetScore:20,label:"어려움 (Hard)"},impossible:{aiSpeed:10,targetScore:25,label:"불가능 (Insane)"}};function P2(){const[s,e]=V.useState("menu"),[i,r]=V.useState("medium"),[l,c]=V.useState({player:0,ai:0}),[f,d]=V.useState(null),[m,p]=V.useState({x:0,y:0}),[x,v]=V.useState({x:Ns/2,y:Ds/2}),_=V.useRef(void 0),S=V.useRef({player:0,ai:0}),E=V.useRef({x:0,y:0}),T=V.useRef({x:Ns/2,y:Ds/2}),b=V.useRef(Cr.medium),y=V.useCallback(()=>({x:Math.random()*(Ns-ca),y:Math.random()*(Ds-ca)}),[]),w=V.useCallback(()=>{const z=y();p(z),E.current=z},[y]),C=V.useCallback(()=>{const z=b.current;return S.current.player>=z.targetScore?(d("player"),e("ended"),!0):S.current.ai>=z.targetScore?(d("ai"),e("ended"),!0):!1},[]),U=V.useCallback(()=>{if(s!=="playing")return;const z=T.current,Z=E.current,D=b.current.aiSpeed,R=Z.x+ca/2,H=Z.y+ca/2,K=R-z.x,ce=H-z.y,pe=Math.sqrt(K*K+ce*ce);if(pe>0){const ge=K/pe*D,I=ce/pe*D,F={x:z.x+ge,y:z.y+I};T.current=F,v(F)}if(pe<ca/2)if(S.current.ai+=1,c({...S.current}),!C())w();else return;_.current=requestAnimationFrame(U)},[s,w,C]);V.useEffect(()=>(s==="playing"&&(_.current=requestAnimationFrame(U)),()=>{_.current&&cancelAnimationFrame(_.current)}),[s,U]);const k=()=>{S.current={player:0,ai:0},c({player:0,ai:0}),d(null),b.current=Cr[i],T.current={x:Ns/2,y:Ds/2},v(T.current),w(),e("playing")},O=z=>{if(s!=="playing")return;const Z=z.currentTarget.getBoundingClientRect(),D=z.clientX-Z.left,R=z.clientY-Z.top,H=E.current;D>=H.x&&D<=H.x+ca&&R>=H.y&&R<=H.y+ca&&(S.current.player+=1,c({...S.current}),C()||w())};return s==="menu"?g.jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800",children:g.jsxs("div",{className:"bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100",children:[g.jsx("div",{className:"mb-6 flex justify-center",children:g.jsx("div",{className:"w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12",children:g.jsx(ph,{className:"text-white w-8 h-8"})})}),g.jsx("h1",{className:"text-3xl font-bold mb-2 text-slate-900",children:"레드 스퀘어 헌터"}),g.jsx("p",{className:"text-slate-500 mb-8",children:"AI보다 먼저 빨간 사각형을 클릭하세요!"}),g.jsxs("div",{className:"space-y-4 mb-8",children:[g.jsx("p",{className:"text-sm font-semibold text-slate-400 uppercase tracking-wider",children:"난이도 선택"}),g.jsx("div",{className:"grid grid-cols-1 gap-3",children:Object.keys(Cr).map(z=>g.jsxs("button",{onClick:()=>r(z),className:`py-3 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${i===z?"border-red-500 bg-red-50 text-red-600":"border-slate-100 hover:border-red-200 hover:bg-slate-50 text-slate-600"}`,children:[g.jsx("span",{className:"font-medium",children:Cr[z].label}),g.jsxs("span",{className:"text-xs opacity-60 bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm",children:["목표: ",Cr[z].targetScore,"점"]})]},z))})]}),g.jsx("button",{onClick:k,className:"w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-100",children:"게임 시작"})]})}):g.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans select-none",children:[g.jsxs("div",{className:"w-full max-w-[600px] mb-6 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold",children:"P"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-slate-400 font-bold uppercase",children:"Player"}),g.jsx("p",{className:"text-2xl font-bold text-slate-800 leading-none",children:l.player})]})]}),g.jsxs("div",{className:"flex flex-col items-center",children:[g.jsxs("div",{className:"text-xs font-bold text-slate-300 uppercase tracking-widest mb-1",children:["Target: ",Cr[i].targetScore]}),g.jsx("div",{className:"w-32 h-2 bg-slate-100 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-slate-800 transition-all duration-300",style:{width:`${Math.max(l.player,l.ai)/Cr[i].targetScore*100}%`}})})]}),g.jsxs("div",{className:"flex items-center gap-3 text-right",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-slate-400 font-bold uppercase",children:"AI Bot"}),g.jsx("p",{className:"text-2xl font-bold text-slate-800 leading-none",children:l.ai})]}),g.jsx("div",{className:"w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold",children:"AI"})]})]}),g.jsxs("div",{className:"relative bg-white rounded-3xl shadow-xl border-4 border-slate-100 overflow-hidden",style:{width:Ns,height:Ds},children:[s==="playing"&&g.jsxs("div",{className:"absolute inset-0 cursor-crosshair active:cursor-grabbing z-10",onClick:O,children:[g.jsx("div",{className:"absolute bg-red-500 rounded-xl shadow-[0_8px_16px_-4px_rgba(239,68,68,0.5)] transform transition-transform duration-75 hover:scale-105 active:scale-95 flex items-center justify-center group",style:{left:m.x,top:m.y,width:ca,height:ca},children:g.jsx(DM,{className:"text-white w-6 h-6 opacity-80 group-hover:opacity-100"})}),g.jsxs("div",{className:"absolute pointer-events-none transition-transform duration-75 flex flex-col items-center",style:{left:x.x-Jc/2,top:x.y-Jc/2,transform:"translate(0, 0)",width:Jc,height:Jc,zIndex:5},children:[g.jsx(ph,{className:"text-slate-800 fill-slate-800 w-6 h-6 transform -rotate-12 drop-shadow-md",strokeWidth:1}),g.jsx("span",{className:"text-[10px] font-bold text-slate-500 mt-1 bg-white/80 px-1 rounded",children:"AI"})]})]}),s==="ended"&&g.jsxs("div",{className:"absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300",children:[f==="player"?g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce",children:g.jsx(rx,{className:"w-10 h-10"})}),g.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2",children:"승리!"}),g.jsx("p",{className:"text-slate-500 mb-6",children:"AI의 속도를 이겨냈습니다."})]}):g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4",children:g.jsx(ix,{className:"w-10 h-10"})}),g.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2",children:"패배..."}),g.jsx("p",{className:"text-slate-500 mb-6",children:"AI가 더 빨랐습니다."})]}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("button",{onClick:()=>e("menu"),className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors",children:"메뉴로"}),g.jsxs("button",{onClick:k,className:"px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2",children:[g.jsx(vM,{className:"w-4 h-4"}),"다시 하기"]})]})]})]}),g.jsx("div",{className:"mt-8 text-center",children:g.jsxs("p",{className:"text-slate-400 text-sm",children:["Board Size: ",Ns,"x",Ds," | Current Diff: ",g.jsx("span",{className:"font-semibold text-slate-600 capitalize",children:i})]})})]})}const O2=Array.from({length:24},(s,e)=>e),Ov=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Iv={sleep:{bg:"bg-indigo-900/20 hover:bg-indigo-900/40",border:"border-indigo-500",text:"text-indigo-200",glow:"shadow-[0_0_15px_rgba(99,102,241,0.3)]",gradient:"from-indigo-500 to-blue-600"},study:{bg:"bg-blue-900/20 hover:bg-blue-900/40",border:"border-blue-400",text:"text-blue-200",glow:"shadow-[0_0_15px_rgba(96,165,250,0.3)]",gradient:"from-blue-400 to-cyan-400"},food:{bg:"bg-orange-900/20 hover:bg-orange-900/40",border:"border-orange-400",text:"text-orange-200",glow:"shadow-[0_0_15px_rgba(251,146,60,0.3)]",gradient:"from-orange-400 to-amber-400"},class:{bg:"bg-emerald-900/20 hover:bg-emerald-900/40",border:"border-emerald-400",text:"text-emerald-200",glow:"shadow-[0_0_15px_rgba(52,211,153,0.3)]",gradient:"from-emerald-400 to-teal-400"},rest:{bg:"bg-slate-800/30 hover:bg-slate-800/50",border:"border-slate-400",text:"text-slate-300",glow:"shadow-[0_0_15px_rgba(148,163,184,0.3)]",gradient:"from-slate-400 to-gray-400"},game:{bg:"bg-purple-900/20 hover:bg-purple-900/40",border:"border-purple-400",text:"text-purple-200",glow:"shadow-[0_0_15px_rgba(192,132,252,0.3)]",gradient:"from-purple-400 to-fuchsia-400"},free:{bg:"bg-pink-900/20 hover:bg-pink-900/40",border:"border-pink-400",text:"text-pink-200",glow:"shadow-[0_0_15px_rgba(244,114,182,0.3)]",gradient:"from-pink-400 to-rose-400"}},zv={sleep:g.jsx(cM,{size:16}),study:g.jsx(Jo,{size:16}),food:g.jsx(Vb,{size:16}),class:g.jsx(Db,{size:16}),rest:g.jsx(wM,{size:16}),game:g.jsx(Qb,{size:16}),free:g.jsx(Ib,{size:16})},rp=s=>{const e=s===6,i={};for(let r=0;r<24;r++)e?i[r]={title:"Free",type:"free",description:"자유 시간 (Recharge)"}:r===0?i[r]={title:"Rest",type:"rest",description:"하루 마무리 및 휴식"}:r>=1&&r<9?i[r]={title:"Sleep",type:"sleep",description:"수면 (Recharge)"}:r>=9&&r<12?i[r]={title:"Voca",type:"study",description:"영단어 암기"}:r>=12&&r<13?i[r]={title:"Lunch",type:"food",description:"점심 식사"}:r>=13&&r<16?i[r]={title:"LC/RC",type:"study",description:"리스닝 & 리딩"}:r>=16&&r<18?i[r]={title:"Class",type:"class",description:"토익 강의 수강"}:r>=18&&r<19?i[r]={title:"Dinner",type:"food",description:"저녁 식사"}:r>=19&&r<22?i[r]={title:"Study",type:"rest",description:"자율 공부 및 휴식"}:r>=22&&r<24?i[r]={title:"Game",type:"game",description:"게임 및 여가"}:i[r]={title:"-",type:"rest",description:""};return i},I2=s=>{const e=rp(s),i=[];let r=0,l=e[0],c=1;for(let f=1;f<24;f++){const d=e[f];d.type===l.type&&d.title===l.title?c++:(i.push({start:r,duration:c,item:l}),r=f,l=d,c=1)}return i.push({start:r,duration:c,item:l}),i};function z2(){const[s,e]=V.useState(new Date);V.useEffect(()=>{const d=setInterval(()=>e(new Date),1e3);return()=>clearInterval(d)},[]);const i=V.useMemo(()=>{const d=s.getDay();return d===0?6:d-1},[s]),r=s.getHours(),l=V.useMemo(()=>rp(i)[r],[i,r]),c=Iv[l.type],f=V.useMemo(()=>Ov.map((d,m)=>I2(m)),[]);return g.jsxs("div",{className:"flex w-full h-screen bg-[#0f111a] text-slate-300 overflow-hidden font-sans selection:bg-indigo-500/30",children:[g.jsxs("div",{className:"w-3/5 h-full flex flex-col bg-[#0f111a] relative z-10",children:[g.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0",children:[g.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[120px]"}),g.jsx("div",{className:"absolute bottom-[-20%] right-[10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[100px]"})]}),g.jsxs("div",{className:"relative z-10 flex w-full border-b border-white/5 bg-[#0f111a]/95 backdrop-blur-sm",children:[g.jsx("div",{className:"w-16 shrink-0 p-4 flex items-center justify-center text-[10px] text-slate-500 font-bold tracking-widest uppercase",children:"Time"}),g.jsx("div",{className:"flex-1 grid grid-cols-7",children:Ov.map((d,m)=>g.jsxs("div",{className:`flex flex-col items-center justify-center py-4 transition-colors duration-300 ${m===i?"bg-white/5":""}`,children:[g.jsx("span",{className:`text-xs font-bold tracking-widest uppercase ${m===i?"text-white":"text-slate-500"}`,children:d}),m===i&&g.jsx("span",{className:"mt-1 w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"})]},d))})]}),g.jsx("div",{className:"relative z-10 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar",children:g.jsxs("div",{className:"flex relative min-h-[1440px]",children:[" ",g.jsx("div",{className:"w-16 shrink-0 flex flex-col bg-[#0f111a]/50 border-r border-white/5 z-10 sticky left-0",children:O2.map(d=>g.jsx("div",{className:"h-[60px] flex items-start justify-center pt-2 text-[10px] font-medium text-slate-600 font-mono",children:d.toString().padStart(2,"0")},d))}),g.jsx("div",{className:"flex-1 grid grid-cols-7",children:f.map((d,m)=>{const p=m===i;return g.jsx("div",{className:`flex flex-col border-r border-white/5 last:border-r-0 ${p?"bg-white/2":""}`,children:d.map((x,v)=>{const _=x.item,S=Iv[_.type],E=p&&r>=x.start&&r<x.start+x.duration;return g.jsx("div",{className:"p-1 flex relative group transition-all duration-300",style:{height:`${x.duration*60}px`},children:g.jsxs("div",{className:`w-full h-full rounded-md flex flex-col justify-center items-center px-2 text-center transition-all duration-300 
                            ${E?`bg-slate-800 shadow-lg ring-1 ring-inset ${S.border} z-10 scale-[1.02]`:`${S.bg} border-l-2 ${S.border} opacity-80 hover:opacity-100 hover:scale-[1.02] hover:z-10`}`,children:[g.jsxs("div",{className:"flex flex-col items-center gap-2 overflow-hidden",children:[g.jsx("span",{className:`${E?"text-white":S.text} opacity-70`,children:zv[_.type]}),g.jsx("span",{className:`text-[11px] font-medium leading-tight ${E?"text-white":S.text}`,children:_.title}),x.duration>2&&g.jsxs("span",{className:"text-[9px] opacity-50 hidden xl:block",children:[x.start.toString().padStart(2,"0"),":00 - ",(x.start+x.duration).toString().padStart(2,"0"),":00"]})]}),E&&g.jsx("div",{className:`absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white animate-ping ${S.glow}`})]})},`${m}-${v}`)})},m)})}),g.jsxs("div",{className:"absolute left-16 right-0 h-0.5 bg-red-500/60 z-20 pointer-events-none shadow-[0_0_10px_rgba(239,68,68,0.4)]",style:{top:`${r*60+s.getMinutes()/60*60}px`},children:[g.jsx("div",{className:"absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-red-500 shadow-md"}),g.jsx("div",{className:"absolute right-0 -top-2 px-1 text-[9px] font-bold text-red-500 bg-[#0f111a] border border-red-500/30 rounded",children:"NOW"})]})]})})]}),g.jsxs("div",{className:"w-2/5 h-full relative flex flex-col items-center justify-center p-12 overflow-hidden bg-[#0a0c10]",children:[g.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 transition-all duration-1000 bg-linear-to-tr ${c.gradient}`}),g.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"}),g.jsxs("div",{className:"z-10 w-full max-w-sm flex flex-col gap-8",children:[g.jsxs("div",{className:"flex flex-col items-center",children:[g.jsxs("div",{className:"text-8xl font-thin tracking-tighter text-white/90 drop-shadow-lg tabular-nums",children:[s.toLocaleTimeString("ko-KR",{hour12:!1,hour:"2-digit",minute:"2-digit"}),g.jsx("span",{className:"text-4xl text-white/40 ml-2 font-light",children:s.getSeconds().toString().padStart(2,"0")})]}),g.jsx("div",{className:"text-white/40 font-light tracking-widest text-sm mt-2 uppercase flex items-center gap-2",children:s.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),g.jsxs("div",{className:"relative group perspective-1000",children:[g.jsx("div",{className:`absolute -inset-1 bg-linear-to-r ${c.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}),g.jsxs("div",{className:"relative p-8 bg-[#13151f]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-6",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1",children:"Current Task"}),g.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:l.title})]}),g.jsx("div",{className:`p-3 rounded-xl bg-white/5 border border-white/10 ${c.text} shadow-inner`,children:zv[l.type]})]}),g.jsxs("div",{className:"flex flex-col gap-2",children:[g.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/30",children:[g.jsx("span",{children:"Progress"}),g.jsxs("span",{children:[Math.floor(s.getMinutes()/60*100),"%"]})]}),g.jsx("div",{className:"w-full h-1.5 bg-white/5 rounded-full overflow-hidden",children:g.jsx("div",{className:`h-full bg-linear-to-r ${c.gradient} shadow-[0_0_10px_currentColor] transition-all duration-1000`,style:{width:`${s.getMinutes()/60*100}%`}})})]}),g.jsx("div",{className:"p-4 rounded-lg bg-white/3 border border-white/5",children:g.jsx("p",{className:"text-sm text-slate-300 font-light leading-relaxed",children:l.description})}),g.jsxs("div",{className:"flex items-center gap-3 pt-2 border-t border-white/5",children:[g.jsx("div",{className:"w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30",children:g.jsx(jb,{size:14})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-[10px] text-white/30 uppercase tracking-wider",children:"Up Next"}),g.jsx("span",{className:"text-sm text-white/60 font-medium",children:rp(i)[(r+1)%24].title})]}),g.jsxs("div",{className:"ml-auto text-xs text-white/30 font-mono",children:[(r+1)%24,":00"]})]})]})]})]})]})]})}const B2=({image:s})=>{const[e,i]=V.useState(s),[r,l]=V.useState(null),[c,f]=V.useState(!1);return V.useEffect(()=>{if(s!==e){l(s),f(!0);const d=setTimeout(()=>{i(s),l(null),f(!1)},1e3);return()=>clearTimeout(d)}},[s,e]),g.jsxs("div",{className:"absolute inset-0 w-full h-full overflow-hidden",children:[g.jsx("div",{className:`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat 
          transition-opacity duration-1000 ease-in-out
          ${c?"opacity-0":"opacity-100"}`,style:{backgroundImage:`url('/web-hub/VisualNovel/Background/${e}')`,backgroundColor:"#ffc0cb"}}),r&&g.jsx("div",{className:`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat 
            transition-opacity duration-1000 ease-in-out
            ${c?"opacity-100":"opacity-0"}`,style:{backgroundImage:`url('/web-hub/VisualNovel/Background/${r}')`,backgroundColor:"#ffc0cb"}})]})},F2=s=>({left:"left-[10%]","center-left":"left-[25%]",center:"left-1/2 -translate-x-1/2","center-right":"right-[25%]",right:"right-[10%]"})[s],k2=({character:s})=>{const[e,i]=V.useState(!1);return V.useEffect(()=>{const r=setTimeout(()=>i(!0),50);return()=>clearTimeout(r)},[s.id]),g.jsx("div",{className:`absolute bottom-0 ${F2(s.position)} 
        transition-all duration-700 ease-out z-10
        ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{height:"100%",filter:"drop-shadow(0 15px 40px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 20px rgba(236, 72, 153, 0.2))"},children:g.jsx("div",{className:"relative h-full flex items-end",children:g.jsx("img",{src:`/web-hub/VisualNovel/Character/${s.image}`,alt:s.name,className:`h-full w-auto object-contain object-bottom transform \r
            hover:scale-[1.02] transition-transform duration-300`,onError:r=>{r.currentTarget.style.display="none"}})})})},H2=({text:s,speed:e=50,onComplete:i,isSkipped:r=!1})=>{const[l,c]=V.useState(""),[f,d]=V.useState(0),[m,p]=V.useState(!1);return V.useEffect(()=>{r?(c(s),d(s.length),p(!0),i?.()):(c(""),d(0),p(!1))},[s,r]),V.useEffect(()=>{if(!(r||m))if(f<s.length){const x=setTimeout(()=>{c(v=>v+s[f]),d(v=>v+1)},e);return()=>clearTimeout(x)}else f===s.length&&!m&&(p(!0),i?.())},[f,s,e,m,r,i]),g.jsxs("span",{className:"inline",children:[l,!m&&g.jsx("span",{className:"inline-block w-[2px] h-5 bg-pink-500 ml-1 animate-pulse"})]})},V2=({isAutoMode:s,onToggleAuto:e,onSkip:i,onShowLog:r,onToggleUI:l,isUIHidden:c,isChoiceActive:f=!1})=>c?null:g.jsxs("div",{className:"flex gap-2 animate-fadeIn",children:[g.jsxs("button",{onClick:e,disabled:f,className:`group relative w-12 h-12 rounded-full backdrop-blur-md border-2 
          shadow-lg transition-all duration-300 hover:scale-110 active:scale-95
          ${f?"opacity-40 cursor-not-allowed":""}
          ${s?"bg-pink-500 border-pink-400 shadow-pink-500/50":"bg-pink-100/80 border-pink-300 hover:bg-pink-200/90"}`,title:"자동 모드",children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:g.jsxs("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,style:{color:s?"white":"#ec4899"},children:[g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})}),s&&g.jsx("div",{className:"absolute inset-0 rounded-full bg-pink-400 blur-xl opacity-60 -z-10 animate-pulse"}),g.jsx("span",{className:`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 \r
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap\r
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`,children:"Auto"})]}),g.jsxs("button",{onClick:i,disabled:f,className:`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${f?"opacity-40 cursor-not-allowed":""}`,title:"스킵",children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:g.jsx("svg",{className:"w-6 h-6 text-pink-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})}),g.jsx("span",{className:`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 \r
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap\r
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`,children:"Skip"})]}),g.jsxs("button",{onClick:r,disabled:f,className:`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${f?"opacity-40 cursor-not-allowed":""}`,title:"대화 로그",children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:g.jsx("svg",{className:"w-6 h-6 text-pink-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),g.jsx("span",{className:`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 \r
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap\r
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`,children:"Log"})]}),g.jsxs("button",{onClick:l,disabled:f,className:`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${f?"opacity-40 cursor-not-allowed":""}`,title:"UI 숨기기",children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:g.jsx("svg",{className:"w-6 h-6 text-pink-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),g.jsx("span",{className:`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 \r
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap\r
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`,children:"Hide"})]})]}),G2=({speaker:s,speakerImage:e,dialogue:i,onNext:r,isAutoMode:l,onToggleAuto:c,onSkip:f,onShowLog:d,onToggleUI:m})=>{const[p,x]=V.useState(!1),[v,_]=V.useState(!1),S=()=>{!p&&!v?_(!0):(r(),x(!1),_(!1))};return g.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-8 z-20 animate-slideUpFade",children:[g.jsx("div",{className:"max-w-6xl mx-auto",children:g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:`absolute -inset-1 bg-gradient-to-r from-pink-300 via-pink-400 to-rose-300 \r
            rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}),g.jsxs("div",{className:`relative bg-gradient-to-br from-pink-50/85 via-white/80 to-rose-50/85 \r
            backdrop-blur-xl border-[6px] border-pink-300/80 rounded-3xl shadow-2xl overflow-hidden`,children:[g.jsx("div",{className:"absolute inset-0 rounded-3xl border-2 border-white/40 pointer-events-none"}),g.jsx("div",{className:"absolute inset-0 rounded-3xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)] pointer-events-none"}),g.jsxs("div",{className:"relative flex items-start p-6 gap-5",children:[e&&g.jsx("div",{className:"flex-shrink-0 relative",children:g.jsxs("div",{className:`relative w-28 h-28 rounded-2xl border-4 border-pink-300/80 \r
                    overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 \r
                    shadow-2xl shadow-pink-400/40 ring-4 ring-white/40`,children:[g.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"}),g.jsx("img",{src:`/web-hub/VisualNovel/Character/${e}`,alt:s||"Character",className:"w-full h-full object-cover",onError:E=>{E.currentTarget.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23fbb6ce" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="white" font-size="40"%3E?%3C/text%3E%3C/svg%3E'}})]})}),g.jsxs("div",{className:"flex-1 min-h-[120px] flex flex-col justify-center",children:[s&&g.jsx("div",{className:"mb-3 -mt-1",children:g.jsxs("div",{className:"inline-block relative group/name",children:[g.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 \r
                        rounded-xl blur-md opacity-50 group-hover/name:opacity-70 transition-opacity duration-300`}),g.jsxs("div",{className:`relative bg-gradient-to-r from-pink-400/95 via-pink-500/95 to-rose-400/95 \r
                        backdrop-blur-sm border-3 border-pink-300/60 rounded-xl px-5 py-2 \r
                        shadow-lg shadow-pink-500/30 overflow-hidden`,children:[g.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"}),g.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"}),g.jsx("p",{className:"relative text-white font-bold text-lg tracking-wide drop-shadow-lg",children:s})]})]})}),g.jsx("div",{className:"flex-1 flex items-center",children:g.jsx("p",{className:"text-gray-800 text-lg leading-relaxed font-medium",style:{fontFamily:"'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif"},children:g.jsx(H2,{text:i,speed:50,onComplete:()=>x(!0),isSkipped:v})})})]})]}),g.jsx("div",{className:"absolute top-4 right-4",children:g.jsx(V2,{isAutoMode:l,onToggleAuto:c,onSkip:f,onShowLog:d,onToggleUI:m,isUIHidden:!1,isChoiceActive:!1})})]})]})}),g.jsx("div",{className:"absolute inset-0 cursor-pointer",onClick:S,"aria-label":"다음 대화로 진행"}),g.jsx("style",{children:`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-slideUpFade {
          animation: slideUpFade 0.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 15s linear infinite;
        }
      `})]})},j2=({choices:s,onChoice:e})=>g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-sm z-20 animate-fadeIn"}),g.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-30",children:g.jsx("div",{className:"w-full max-w-3xl px-8",children:g.jsx("div",{className:"space-y-5 animate-fadeIn",style:{animationDelay:"0.1s"},children:s.map((i,r)=>g.jsxs("button",{onClick:()=>e(i),className:`w-full bg-gradient-to-br from-pink-50/95 via-white/90 to-rose-50/95 \r
                  backdrop-blur-xl border-[5px] border-pink-300/80 \r
                  rounded-2xl p-6 shadow-2xl\r
                  hover:bg-gradient-to-br hover:from-pink-100/95 hover:via-pink-50/90 hover:to-rose-100/95 \r
                  hover:border-pink-400 hover:scale-[1.03]\r
                  active:scale-95\r
                  transition-all duration-300 ease-out\r
                  group relative overflow-hidden`,style:{animationDelay:`${.15+r*.1}s`},children:[g.jsx("div",{className:"absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none"}),g.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-pink-300/0 via-pink-300/40 to-pink-300/0 \r
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}),g.jsx("div",{className:`absolute left-5 top-1/2 -translate-y-1/2 \r
                  w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-3 border-pink-300\r
                  flex items-center justify-center shadow-lg\r
                  group-hover:from-pink-500 group-hover:to-pink-600 group-hover:scale-110\r
                  transition-all duration-200`,children:g.jsx("span",{className:"text-white font-bold text-xl drop-shadow-md",children:r+1})}),g.jsx("p",{className:`relative text-gray-800 font-bold text-xl pl-20 pr-16 text-left\r
                  group-hover:text-gray-900 transition-colors duration-200`,style:{fontFamily:"'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif"},children:i.text}),g.jsx("div",{className:`absolute right-7 top-1/2 -translate-y-1/2 \r
                  opacity-0 group-hover:opacity-100 group-hover:translate-x-2\r
                  transition-all duration-300`,children:g.jsx("span",{className:"text-pink-500 text-3xl font-bold drop-shadow-md",children:"→"})}),g.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none rounded-2xl",children:g.jsx("div",{className:`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200/20 via-transparent to-transparent \r
                    group-hover:animate-shimmer`})})]},r))})})}),g.jsx("style",{children:`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `})]}),X2=({isOpen:s,onClose:e,logs:i})=>s?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn",onClick:e}),g.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 p-8 pointer-events-none",children:g.jsxs("div",{className:"relative w-full max-w-3xl max-h-[80vh] pointer-events-auto animate-slideUp",children:[g.jsxs("div",{className:`bg-gradient-to-r from-pink-400/90 via-pink-500/90 to-rose-400/90 \r
            backdrop-blur-md border-4 border-pink-300 rounded-t-3xl p-6 shadow-2xl\r
            relative overflow-hidden`,children:[g.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"}),g.jsx("div",{className:"absolute -top-10 -right-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"}),g.jsx("div",{className:"absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300/30 rounded-full blur-3xl"}),g.jsxs("div",{className:"relative flex items-center justify-between",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white drop-shadow-lg flex items-center gap-3",children:[g.jsx("svg",{className:"w-7 h-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),"대화 기록"]}),g.jsx("button",{onClick:e,className:`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40\r
                  hover:bg-white/30 transition-all duration-200 flex items-center justify-center\r
                  hover:rotate-90 hover:scale-110 active:scale-95`,children:g.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:3,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})]}),g.jsx("div",{className:`bg-pink-50/95 backdrop-blur-md border-4 border-t-0 border-pink-300 \r
            rounded-b-3xl shadow-2xl overflow-hidden`,children:g.jsx("div",{className:"max-h-[60vh] overflow-y-auto p-6 space-y-4 custom-scrollbar",children:i.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("div",{className:"text-pink-300 mb-4",children:g.jsx("svg",{className:"w-16 h-16 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),g.jsx("p",{className:"text-pink-400 text-lg font-medium",children:"아직 대화 기록이 없습니다"})]}):i.map((r,l)=>g.jsx("div",{className:"group",children:g.jsxs("div",{className:`bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-pink-200\r
                      hover:border-pink-300 hover:bg-white/80 transition-all duration-200\r
                      hover:shadow-lg hover:shadow-pink-200/50`,children:[r.speaker&&g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("div",{className:"w-2 h-2 rounded-full bg-pink-400"}),g.jsx("p",{className:"font-bold text-pink-600 text-sm",children:r.speaker})]}),g.jsx("p",{className:"text-gray-700 leading-relaxed pl-4",children:r.dialogue})]})},l))})})]})}),g.jsx("style",{children:`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(251, 207, 232, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f472b6, #ec4899);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ec4899, #db2777);
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `})]}):null,W2=({onClose:s})=>{const[e,i]=V.useState({}),[r,l]=V.useState([]),[c,f]=V.useState(!0),[d,m]=V.useState(null),p=["intro","library_route","cafe_route","garden_route","after_tour","library_ending","cafe_ending","park_ending","home_ending","ending"];V.useEffect(()=>{(async()=>{f(!0);const _={};for(const S of p)try{const T=await(await fetch(`/web-hub/VisualNovel/Script/blocks/${S}.json`)).json();_[S]=T}catch(E){console.error(`블록 로드 실패: ${S}`,E)}i(_),x(_),f(!1)})()},[]);const x=v=>{const _=[],S={};Object.entries(v).forEach(([w,C])=>{S[w]||(S[w]=new Set),Object.values(C.lines).forEach(U=>{U.nextBlockId&&S[w].add(U.nextBlockId),U.choices&&U.choices.forEach(k=>{k.nextBlockId&&S[w].add(k.nextBlockId)})})});const E={},T=new Set,b=(w,C=0)=>{T.has(w)||(T.add(w),E[w]=Math.max(E[w]||0,C),S[w]?.forEach(U=>{b(U,C+1)}))};b("intro",0);const y={};Object.entries(E).forEach(([w,C])=>{y[C]||(y[C]=[]),y[C].push(w)}),Object.entries(y).forEach(([w,C])=>{C.forEach((U,k)=>{const O=v[U];O&&_.push({id:U,title:O.title,x:200+parseInt(w)*300,y:100+k*150,connections:Array.from(S[U]||[])})})}),l(_)};return c?g.jsx("div",{className:"fixed inset-0 bg-[#2D1115] z-50 flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"inline-block animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-pink-600 mb-4"}),g.jsx("p",{className:"text-2xl text-pink-600 font-bold",children:"로딩 중..."})]})}):g.jsxs("div",{className:"fixed inset-0 bg-[#2D1115] z-50 overflow-auto",children:[g.jsx("div",{className:"sticky top-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 shadow-lg z-10",children:g.jsxs("div",{className:"flex items-center justify-between max-w-7xl mx-auto",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold",children:"스토리 그래프 편집기"}),g.jsx("p",{className:"text-sm text-pink-100",children:"블록 간 연결 관계를 시각화합니다"})]}),g.jsx("button",{onClick:s,className:"bg-white/20 hover:bg-white/30 rounded-lg px-6 py-2 transition-colors",children:"닫기"})]})}),g.jsxs("div",{className:"relative",style:{width:"2000px",height:"1500px"},children:[g.jsx("svg",{className:"absolute inset-0",style:{width:"100%",height:"100%"},children:r.map(v=>v.connections.map(_=>{const S=r.find(E=>E.id===_);return S?g.jsxs("g",{children:[g.jsx("defs",{children:g.jsx("marker",{id:`arrow-${v.id}-${_}`,markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",markerUnits:"strokeWidth",children:g.jsx("path",{d:"M0,0 L0,6 L9,3 z",fill:"#ec4899"})})}),g.jsx("line",{x1:v.x+120,y1:v.y+40,x2:S.x,y2:S.y+40,stroke:"#ec4899",strokeWidth:"2",markerEnd:`url(#arrow-${v.id}-${_})`})]},`${v.id}-${_}`):null}))}),r.map(v=>g.jsx("div",{onClick:()=>m(e[v.id]),className:`absolute bg-gradient-to-br from-pink-50 to-white border-4 border-pink-300 \r
              rounded-xl shadow-xl p-4 cursor-pointer hover:shadow-2xl hover:scale-105 \r
              transition-all duration-200`,style:{left:v.x,top:v.y,width:"240px"},children:g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx("div",{className:`w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 \r
                rounded-full flex items-center justify-center text-white font-bold shadow-lg`,children:v.id.charAt(0).toUpperCase()}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"text-xs text-pink-600 font-semibold mb-1",children:v.id}),g.jsx("div",{className:"text-sm font-bold text-gray-800",children:v.title}),v.connections.length>0&&g.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["→ ",v.connections.length,"개 연결"]})]})]})},v.id))]}),d&&g.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center p-8",onClick:()=>m(null),children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:v=>v.stopPropagation(),children:[g.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold",children:d.title}),g.jsxs("p",{className:"text-sm text-pink-100 mt-1",children:["블록 ID: ",d.blockId]})]}),g.jsx("button",{onClick:()=>m(null),className:"bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors",children:g.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}),g.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(80vh-140px)]",children:g.jsx("div",{className:"space-y-4",children:Object.values(d.lines).map((v,_)=>g.jsxs("div",{className:`bg-gradient-to-br from-pink-50 to-white border-2 border-pink-200 \r
                      rounded-xl p-4 hover:border-pink-300 transition-colors`,children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[g.jsx("div",{className:`w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 \r
                        rounded-full flex items-center justify-center text-white font-bold text-sm`,children:_+1}),g.jsx("span",{className:"text-xs text-pink-600 font-mono",children:v.id})]}),v.speaker&&g.jsx("div",{className:"mb-2",children:g.jsx("span",{className:`inline-block bg-gradient-to-r from-pink-400 to-pink-500 \r
                          text-white px-3 py-1 rounded-full text-sm font-bold`,children:v.speaker})}),g.jsx("p",{className:"text-gray-800 leading-relaxed",children:v.dialogue}),v.choices&&v.choices.length>0&&g.jsxs("div",{className:"mt-3 pt-3 border-t-2 border-pink-200",children:[g.jsx("div",{className:"text-xs text-pink-600 font-bold mb-2",children:"선택지:"}),g.jsx("div",{className:"space-y-1",children:v.choices.map((S,E)=>g.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[g.jsx("span",{className:"text-pink-400",children:"→"}),g.jsx("span",{children:S.text}),g.jsxs("span",{className:"text-xs text-gray-400",children:["(",S.nextBlockId||S.nextScriptId,")"]})]},E))})]}),(v.nextScriptId||v.nextBlockId)&&g.jsxs("div",{className:"mt-3 text-xs text-gray-500",children:["다음: ",v.nextBlockId?`블록 ${v.nextBlockId}`:`씬 ${v.nextScriptId}`]})]},v.id))})})]})}),g.jsxs("div",{className:`fixed bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl \r
        border-4 border-pink-300 p-4 shadow-xl`,children:[g.jsx("h3",{className:"font-bold text-gray-800 mb-3",children:"범례"}),g.jsxs("div",{className:"space-y-2 text-sm",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-4 h-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-300 rounded"}),g.jsx("span",{children:"스토리 블록"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-8 h-0.5 bg-pink-500"}),g.jsx("span",{children:"→"}),g.jsx("span",{children:"연결 관계"})]})]})]})]})},q2="intro",Y2={startBlockId:q2},Z2=()=>{const[s,e]=V.useState(Y2.startBlockId),[i,r]=V.useState(null),[l,c]=V.useState(""),[f,d]=V.useState(null),[m,p]=V.useState(!1),[x,v]=V.useState(!1),[_,S]=V.useState(!1),[E,T]=V.useState(!1),[b,y]=V.useState(!1),[w,C]=V.useState([]),U=V.useRef(null);V.useEffect(()=>{(async()=>{p(!0);try{const ce=await(await fetch(`/web-hub/VisualNovel/Script/blocks/${s}.json`)).json();r(ce),c(ce.startId)}catch(K){console.error("블록 로드 실패:",K)}finally{p(!1)}})()},[s]),V.useEffect(()=>{if(i&&l){const H=i.lines[l];H&&(d(H),H.dialogue&&!H.choices&&C(K=>[...K,{speaker:H.speaker,dialogue:H.dialogue,timestamp:Date.now()}]))}},[i,l]),V.useEffect(()=>{if(_&&f&&!f.choices)return U.current=setTimeout(()=>{k()},3e3),()=>{U.current&&clearTimeout(U.current)}},[_,f,l]);const k=V.useCallback(()=>{f?.nextScriptId?c(f.nextScriptId):f?.nextBlockId&&e(f.nextBlockId)},[f]),O=V.useCallback(H=>{H.nextScriptId?c(H.nextScriptId):H.nextBlockId&&e(H.nextBlockId),S(!1)},[]),z=V.useCallback(()=>{S(H=>!H)},[]),Z=V.useCallback(()=>{f?.nextScriptId&&c(f.nextScriptId)},[f]),D=V.useCallback(()=>{y(H=>!H)},[]),R=V.useCallback(()=>{T(H=>!H)},[]);return V.useEffect(()=>{const H=K=>{K.code==="Space"&&!b&&(K.preventDefault(),R())};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[b,R]),m||!i||!f?g.jsx("div",{className:"w-full h-screen flex items-center justify-center bg-[#2D1115]",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"inline-block animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-pink-600 mb-4"}),g.jsx("p",{className:"text-2xl text-pink-600 font-bold",children:"로딩 중..."})]})}):x?g.jsx(W2,{onClose:()=>v(!1)}):g.jsxs("div",{className:"w-full h-screen flex items-center justify-center bg-[#2D1115] overflow-hidden",children:[g.jsx("button",{onClick:()=>v(!0),className:`fixed top-4 right-4 z-50 bg-gradient-to-br from-pink-400 to-pink-500 \r
          hover:from-pink-500 hover:to-pink-600 text-white rounded-full w-12 h-12 \r
          flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200\r
          border-2 border-white/30`,title:"스토리 그래프 보기",children:g.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})})}),g.jsxs("div",{className:"relative w-full max-w-[177.78vh] h-full max-h-[56.25vw] bg-pink-50 shadow-2xl",children:[g.jsx(B2,{image:f.background}),!E&&f.characters?.map(H=>g.jsx(k2,{character:H},H.id)),!E&&g.jsx(g.Fragment,{children:f.choices&&f.choices.length>0?g.jsx(j2,{choices:f.choices,onChoice:O}):g.jsx(G2,{speaker:f.speaker,speakerImage:f.speakerImage,dialogue:f.dialogue,onNext:k,isAutoMode:_,onToggleAuto:z,onSkip:Z,onShowLog:D,onToggleUI:R})}),g.jsx(X2,{isOpen:b,onClose:D,logs:w}),E&&g.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 animate-fadeIn",children:g.jsx("div",{className:"bg-black/60 backdrop-blur-sm text-white px-8 py-4 rounded-2xl border-2 border-white/20",children:g.jsx("p",{className:"text-center text-lg",children:"스페이스바를 눌러 UI 표시"})})}),g.jsx("div",{className:"absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none z-5"})]}),g.jsx("style",{children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* 웹폰트 import */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
      `})]})};$y.createRoot(document.getElementById("root")).render(g.jsx(V.StrictMode,{children:g.jsx(hb,{children:g.jsxs(jS,{children:[g.jsx(ua,{path:"/",element:g.jsx(YM,{})}),g.jsx(ua,{path:"/network-quiz",element:g.jsx(ZM,{})}),g.jsx(ua,{path:"/neonspace",element:g.jsx(A2,{})}),g.jsx(ua,{path:"/pixel-sort",element:g.jsx(C2,{})}),g.jsx(ua,{path:"/cthulhu",element:g.jsx(U2,{})}),g.jsx(ua,{path:"/speed-clicker",element:g.jsx(P2,{})}),g.jsx(ua,{path:"/schedule",element:g.jsx(z2,{})}),g.jsx(ua,{path:"/visual-novel",element:g.jsx(Z2,{})})]})})}));
