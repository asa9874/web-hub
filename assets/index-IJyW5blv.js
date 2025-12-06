(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ex(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yd={exports:{}},Io={};var Qg;function Tx(){if(Qg)return Io;Qg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var Jg;function Ax(){return Jg||(Jg=1,yd.exports=Tx()),yd.exports}var F=Ax(),xd={exports:{}},ut={};var $g;function wx(){if($g)return ut;$g=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function _(z,Q,_e){this.props=z,this.context=Q,this.refs=S,this.updater=_e||b}_.prototype.isReactComponent={},_.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=_.prototype;function C(z,Q,_e){this.props=z,this.context=Q,this.refs=S,this.updater=_e||b}var L=C.prototype=new R;L.constructor=C,E(L,_.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function N(z,Q,_e){var we=_e.ref;return{$$typeof:s,type:z,key:Q,ref:we!==void 0?we:null,props:_e}}function w(z,Q){return N(z.type,Q,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function K(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_e){return Q[_e]})}var ce=/\/+/g;function pe(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?K(""+z.key):Q.toString(36)}function ge(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(U,U):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,Q,_e,we,Ie){var ae=typeof z;(ae==="undefined"||ae==="boolean")&&(z=null);var de=!1;if(z===null)de=!0;else switch(ae){case"bigint":case"string":case"number":de=!0;break;case"object":switch(z.$$typeof){case s:case e:de=!0;break;case v:return de=z._init,I(de(z._payload),Q,_e,we,Ie)}}if(de)return Ie=Ie(z),de=we===""?"."+pe(z,0):we,B(Ie)?(_e="",de!=null&&(_e=de.replace(ce,"$&/")+"/"),I(Ie,Q,_e,"",function(Ee){return Ee})):Ie!=null&&(G(Ie)&&(Ie=w(Ie,_e+(Ie.key==null||z&&z.key===Ie.key?"":(""+Ie.key).replace(ce,"$&/")+"/")+de)),Q.push(Ie)),1;de=0;var Ne=we===""?".":we+":";if(B(z))for(var Be=0;Be<z.length;Be++)we=z[Be],ae=Ne+pe(we,Be),de+=I(we,Q,_e,ae,Ie);else if(Be=M(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(we=z.next()).done;)we=we.value,ae=Ne+pe(we,Be++),de+=I(we,Q,_e,ae,Ie);else if(ae==="object"){if(typeof z.then=="function")return I(ge(z),Q,_e,we,Ie);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return de}function J(z,Q,_e){if(z==null)return z;var we=[],Ie=0;return I(z,we,"","",function(ae){return Q.call(_e,ae,Ie++)}),we}function Y(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(_e){(z._status===0||z._status===-1)&&(z._status=1,z._result=_e)},function(_e){(z._status===0||z._status===-1)&&(z._status=2,z._result=_e)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var fe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ue={map:J,forEach:function(z,Q,_e){J(z,function(){Q.apply(this,arguments)},_e)},count:function(z){var Q=0;return J(z,function(){Q++}),Q},toArray:function(z){return J(z,function(Q){return Q})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ut.Activity=g,ut.Children=ue,ut.Component=_,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=C,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ut.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},ut.cache=function(z){return function(){return z.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(z,Q,_e){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var we=E({},z.props),Ie=z.key;if(Q!=null)for(ae in Q.key!==void 0&&(Ie=""+Q.key),Q)!W.call(Q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Q.ref===void 0||(we[ae]=Q[ae]);var ae=arguments.length-2;if(ae===1)we.children=_e;else if(1<ae){for(var de=Array(ae),Ne=0;Ne<ae;Ne++)de[Ne]=arguments[Ne+2];we.children=de}return N(z.type,Ie,we)},ut.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ut.createElement=function(z,Q,_e){var we,Ie={},ae=null;if(Q!=null)for(we in Q.key!==void 0&&(ae=""+Q.key),Q)W.call(Q,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Ie[we]=Q[we]);var de=arguments.length-2;if(de===1)Ie.children=_e;else if(1<de){for(var Ne=Array(de),Be=0;Be<de;Be++)Ne[Be]=arguments[Be+2];Ie.children=Ne}if(z&&z.defaultProps)for(we in de=z.defaultProps,de)Ie[we]===void 0&&(Ie[we]=de[we]);return N(z,ae,Ie)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(z){return{$$typeof:h,render:z}},ut.isValidElement=G,ut.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:Y}},ut.memo=function(z,Q){return{$$typeof:p,type:z,compare:Q===void 0?null:Q}},ut.startTransition=function(z){var Q=O.T,_e={};O.T=_e;try{var we=z(),Ie=O.S;Ie!==null&&Ie(_e,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(U,fe)}catch(ae){fe(ae)}finally{Q!==null&&_e.types!==null&&(Q.types=_e.types),O.T=Q}},ut.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ut.use=function(z){return O.H.use(z)},ut.useActionState=function(z,Q,_e){return O.H.useActionState(z,Q,_e)},ut.useCallback=function(z,Q){return O.H.useCallback(z,Q)},ut.useContext=function(z){return O.H.useContext(z)},ut.useDebugValue=function(){},ut.useDeferredValue=function(z,Q){return O.H.useDeferredValue(z,Q)},ut.useEffect=function(z,Q){return O.H.useEffect(z,Q)},ut.useEffectEvent=function(z){return O.H.useEffectEvent(z)},ut.useId=function(){return O.H.useId()},ut.useImperativeHandle=function(z,Q,_e){return O.H.useImperativeHandle(z,Q,_e)},ut.useInsertionEffect=function(z,Q){return O.H.useInsertionEffect(z,Q)},ut.useLayoutEffect=function(z,Q){return O.H.useLayoutEffect(z,Q)},ut.useMemo=function(z,Q){return O.H.useMemo(z,Q)},ut.useOptimistic=function(z,Q){return O.H.useOptimistic(z,Q)},ut.useReducer=function(z,Q,_e){return O.H.useReducer(z,Q,_e)},ut.useRef=function(z){return O.H.useRef(z)},ut.useState=function(z){return O.H.useState(z)},ut.useSyncExternalStore=function(z,Q,_e){return O.H.useSyncExternalStore(z,Q,_e)},ut.useTransition=function(){return O.H.useTransition()},ut.version="19.2.1",ut}var e1;function Qh(){return e1||(e1=1,xd.exports=wx()),xd.exports}var ie=Qh();const Rx=Ex(ie);var Sd={exports:{}},zo={},Md={exports:{}},bd={};var t1;function Cx(){return t1||(t1=1,(function(s){function e(I,J){var Y=I.length;I.push(J);e:for(;0<Y;){var fe=Y-1>>>1,ue=I[fe];if(0<l(ue,J))I[fe]=J,I[Y]=ue,Y=fe;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var J=I[0],Y=I.pop();if(Y!==J){I[0]=Y;e:for(var fe=0,ue=I.length,z=ue>>>1;fe<z;){var Q=2*(fe+1)-1,_e=I[Q],we=Q+1,Ie=I[we];if(0>l(_e,Y))we<ue&&0>l(Ie,_e)?(I[fe]=Ie,I[we]=Y,fe=we):(I[fe]=_e,I[Q]=Y,fe=Q);else if(we<ue&&0>l(Ie,Y))I[fe]=Ie,I[we]=Y,fe=we;else break e}}return J}function l(I,J){var Y=I.sortIndex-J.sortIndex;return Y!==0?Y:I.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,y=3,M=!1,b=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var J=i(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=I)r(p),J.sortIndex=J.expirationTime,e(m,J);else break;J=i(p)}}function B(I){if(E=!1,L(I),!b)if(i(m)!==null)b=!0,U||(U=!0,K());else{var J=i(p);J!==null&&ge(B,J.startTime-I)}}var U=!1,O=-1,W=5,N=-1;function w(){return S?!0:!(s.unstable_now()-N<W)}function G(){if(S=!1,U){var I=s.unstable_now();N=I;var J=!0;try{e:{b=!1,E&&(E=!1,R(O),O=-1),M=!0;var Y=y;try{t:{for(L(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var fe=g.callback;if(typeof fe=="function"){g.callback=null,y=g.priorityLevel;var ue=fe(g.expirationTime<=I);if(I=s.unstable_now(),typeof ue=="function"){g.callback=ue,L(I),J=!0;break t}g===i(m)&&r(m),L(I)}else r(m);g=i(m)}if(g!==null)J=!0;else{var z=i(p);z!==null&&ge(B,z.startTime-I),J=!1}}break e}finally{g=null,y=Y,M=!1}J=void 0}}finally{J?K():U=!1}}}var K;if(typeof C=="function")K=function(){C(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=G,K=function(){pe.postMessage(null)}}else K=function(){_(G,0)};function ge(I,J){O=_(function(){I(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(I){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var Y=y;y=J;try{return I()}finally{y=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=y;y=I;try{return J()}finally{y=Y}},s.unstable_scheduleCallback=function(I,J,Y){var fe=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,I){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Y+ue,I={id:v++,callback:J,priorityLevel:I,startTime:Y,expirationTime:ue,sortIndex:-1},Y>fe?(I.sortIndex=Y,e(p,I),i(m)===null&&I===i(p)&&(E?(R(O),O=-1):E=!0,ge(B,Y-fe))):(I.sortIndex=ue,e(m,I),b||M||(b=!0,U||(U=!0,K()))),I},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(I){var J=y;return function(){var Y=y;y=J;try{return I.apply(this,arguments)}finally{y=Y}}}})(bd)),bd}var n1;function Dx(){return n1||(n1=1,Md.exports=Cx()),Md.exports}var Ed={exports:{}},Nn={};var i1;function Nx(){if(i1)return Nn;i1=1;var s=Qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Nn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.1",Nn}var a1;function Ux(){if(a1)return Ed.exports;a1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=Nx(),Ed.exports}var r1;function Lx(){if(r1)return zo;r1=1;var s=Dx(),e=Qh(),i=Ux();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case B:return"Suspense";case U:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case C:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ge=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},fe=[],ue=-1;function z(t){return{current:t}}function Q(t){0>ue||(t.current=fe[ue],fe[ue]=null,ue--)}function _e(t,n){ue++,fe[ue]=t.current,t.current=n}var we=z(null),Ie=z(null),ae=z(null),de=z(null);function Ne(t,n){switch(_e(ae,n),_e(Ie,t),_e(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xg(n),t=Sg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(we),_e(we,t)}function Be(){Q(we),Q(Ie),Q(ae)}function Ee(t){t.memoizedState!==null&&_e(de,t);var n=we.current,a=Sg(n,t.type);n!==a&&(_e(Ie,t),_e(we,a))}function Fe(t){Ie.current===t&&(Q(we),Q(Ie)),de.current===t&&(Q(de),Uo._currentValue=Y)}var vt,it;function _t(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+it}var H=!1;function je(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var re=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){re=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){re=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var V=x.split(`
`),te=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===te.length)for(o=V.length-1,u=te.length-1;1<=o&&0<=u&&V[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==te[u]){var me=`
`+V[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function ft(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return je(t.type,!1);case 11:return je(t.type.render,!1);case 1:return je(t.type,!0);case 31:return _t("Activity");default:return""}}function Pt(t){try{var n="",a=null;do n+=ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,zt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,ot=s.unstable_shouldYield,P=s.unstable_requestPaint,T=s.unstable_now,ee=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Pe=s.unstable_IdlePriority,et=s.log,Ye=s.unstable_setDisableYieldValue,be=null,Ae=null;function Qe(t){if(typeof et=="function"&&Ye(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(be,t)}catch{}}var We=Math.clz32?Math.clz32:k,ze=Math.log,st=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(ze(t)/st|0)|0}var Ue=256,Ce=262144,De=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Te(o):(x&=A,x!==0?u=Te(x):a||(a=A&~t,a!==0&&(u=Te(a))))):(A=o&~d,A!==0?u=Te(A):x!==0?u=Te(x):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ge(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,te=t.hiddenUpdates;for(a=x&~a;0<a;){var me=31-We(a),xe=1<<me;A[me]=0,V[me]=-1;var re=te[me];if(re!==null)for(te[me]=null,me=0;me<re.length;me++){var le=re[me];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&sl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function sl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ks(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-We(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Xs(t,n){var a=n&-n;return a=(a&42)!==0?1:xi(a),(a&(t.suspendedLanes|n))!==0?0:a}function xi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:Xg(t.type))}function qs(t,n){var a=J.p;try{return J.p=t,n()}finally{J.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,mn="__reactProps$"+Zn,zi="__reactContainer$"+Zn,Or="__reactEvents$"+Zn,du="__reactListeners$"+Zn,hu="__reactHandles$"+Zn,ol="__reactResources$"+Zn,ar="__reactMarker$"+Zn;function js(t){delete t[cn],delete t[mn],delete t[Or],delete t[du],delete t[hu]}function Sa(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Rg(t);t!==null;){if(a=t[cn])return a;t=Rg(t)}return n}t=a,a=t.parentNode}return null}function D(t){if(t=t[cn]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oe(t){var n=t[ol];return n||(n=t[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ne(t){t[ar]=!0}var Z=new Set,Re={};function Le(t,n){Ve(t,n),Ve(t+"Capture",n)}function Ve(t,n){for(Re[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},rt={};function Je(t){return He.call(rt,t)?!0:He.call(nt,t)?!1:ke.test(t)?rt[t]=!0:(nt[t]=!0,!1)}function ht(t,n,a){if(Je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Bt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function xn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function Yt(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(t,n,a,o,u,d,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Et(n)):t.value!==""+Et(n)&&(t.value=""+Et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,x,Et(n)):a!=null?Sn(t,x,Et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Et(A):t.removeAttribute("name")}function Zt(t,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Et(a):"",n=n!=null?""+Et(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),qt(t)}function Sn(t,n,a){n==="number"&&xn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Mn(t,n,a){if(n!=null&&(n=""+Et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Et(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Di(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _p(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&vp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&vp(t,d,n[d])}function pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(t){return S_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,zr=null;function yp(t){var n=D(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Tt(o)}break e;case"textarea":Mn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var vu=!1;function xp(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(Ir!==null||zr!==null)&&(Zl(),Ir&&(n=Ir,t=zr,zr=Ir=null,yp(n),t)))for(n=0;n<t.length;n++)yp(t[n])}}function Ys(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Vi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{_u=!1}var ba=null,yu=null,cl=null;function Sp(){if(cl)return cl;var t,n=yu,a=n.length,o,u="value"in ba?ba.value:ba.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return cl=u.slice(t,1<o?1-o:void 0)}function ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Mp(){return!1}function Fn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:Mp,this.isPropagationStopped=Mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Fn(rr),Ks=g({},rr,{view:0,detail:0}),M_=Fn(Ks),xu,Su,Qs,hl=g({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(xu=t.screenX-Qs.screenX,Su=t.screenY-Qs.screenY):Su=xu=0,Qs=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),bp=Fn(hl),b_=g({},hl,{dataTransfer:0}),E_=Fn(b_),T_=g({},Ks,{relatedTarget:0}),Mu=Fn(T_),A_=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=Fn(A_),R_=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C_=Fn(R_),D_=g({},rr,{data:0}),Ep=Fn(D_),N_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=L_[t])?!!n[t]:!1}function bu(){return P_}var O_=g({},Ks,{key:function(t){if(t.key){var n=N_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=Fn(O_),z_=g({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Fn(z_),B_=g({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),F_=Fn(B_),H_=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=Fn(H_),G_=g({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=Fn(G_),X_=g({},rr,{newState:0,oldState:0}),W_=Fn(X_),q_=[9,13,27,32],Eu=Vi&&"CompositionEvent"in window,Js=null;Vi&&"documentMode"in document&&(Js=document.documentMode);var j_=Vi&&"TextEvent"in window&&!Js,Ap=Vi&&(!Eu||Js&&8<Js&&11>=Js),wp=" ",Rp=!1;function Cp(t,n){switch(t){case"keyup":return q_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Y_(t,n){switch(t){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(Rp=!0,wp);case"textInput":return t=n.data,t===wp&&Rp?null:t;default:return null}}function Z_(t,n){if(Br)return t==="compositionend"||!Eu&&Cp(t,n)?(t=Sp(),cl=yu=ba=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!K_[t.type]:n==="textarea"}function Up(t,n,a,o){Ir?zr?zr.push(o):zr=[o]:Ir=o,n=nc(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var $s=null,eo=null;function Q_(t){pg(t,0)}function pl(t){var n=q(t);if(Tt(n))return t}function Lp(t,n){if(t==="change")return n}var Pp=!1;if(Vi){var Tu;if(Vi){var Au="oninput"in document;if(!Au){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Au=typeof Op.oninput=="function"}Tu=Au}else Tu=!1;Pp=Tu&&(!document.documentMode||9<document.documentMode)}function Ip(){$s&&($s.detachEvent("onpropertychange",zp),eo=$s=null)}function zp(t){if(t.propertyName==="value"&&pl(eo)){var n=[];Up(n,eo,t,gu(t)),xp(Q_,n)}}function J_(t,n,a){t==="focusin"?(Ip(),$s=n,eo=a,$s.attachEvent("onpropertychange",zp)):t==="focusout"&&Ip()}function $_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(eo)}function ey(t,n){if(t==="click")return pl(n)}function ty(t,n){if(t==="input"||t==="change")return pl(n)}function ny(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:ny;function to(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!He.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,n){var a=Bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bp(a)}}function Hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=xn(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var iy=Vi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Ru=null,no=null,Cu=!1;function Gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Fr==null||Fr!==xn(o)||(o=Fr,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=nc(Ru,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Fr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Du={},kp={};Vi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function or(t){if(Du[t])return Du[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Du[t]=n[a];return t}var Xp=or("animationend"),Wp=or("animationiteration"),qp=or("animationstart"),ay=or("transitionrun"),ry=or("transitionstart"),sy=or("transitioncancel"),jp=or("transitionend"),Yp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Si(t,n){Yp.set(t,n),Le(n,[t])}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Vr=0,Uu=0;function gl(){for(var t=Vr,n=Uu=Vr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function vl(t,n,a,o){si[Vr++]=t,si[Vr++]=n,si[Vr++]=a,si[Vr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,a,o){return vl(t,n,a,o),_l(t)}function lr(t,n){return vl(t,null,null,n),_l(t)}function Zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-We(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(t){if(50<To)throw To=0,kf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function oy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new oy(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Pu(t)&&(x=1);else if(typeof t=="string")x=dx(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Qn(31,a,n,u),t.elementType=N,t.lanes=d,t;case E:return cr(a.children,u,d,n);case S:x=8,u|=24;break;case _:return t=Qn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case B:return t=Qn(13,a,n,u),t.elementType=B,t.lanes=d,t;case U:return t=Qn(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:x=10;break e;case R:x=9;break e;case L:x=11;break e;case O:x=14;break e;case W:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Qn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function cr(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function Qp(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Jp=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},Jp.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var kr=[],Xr=0,xl=null,io=0,li=[],ci=0,Ea=null,Ni=1,Ui="";function ki(t,n){kr[Xr++]=io,kr[Xr++]=xl,xl=t,io=n}function $p(t,n,a){li[ci++]=Ni,li[ci++]=Ui,li[ci++]=Ea,Ea=t;var o=Ni;t=Ui;var u=32-We(o)-1;o&=~(1<<u),a+=1;var d=32-We(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ni=1<<32-We(n)+u|a<<u|o,Ui=d+t}else Ni=1<<d|a<<u|o,Ui=t}function zu(t){t.return!==null&&(ki(t,1),$p(t,1,0))}function Bu(t){for(;t===xl;)xl=kr[--Xr],kr[Xr]=null,io=kr[--Xr],kr[Xr]=null;for(;t===Ea;)Ea=li[--ci],li[ci]=null,Ui=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null}function em(t,n){li[ci++]=Ni,li[ci++]=Ui,li[ci++]=Ea,Ni=n.id,Ui=n.overflow,Ea=t}var An=null,Kt=null,At=!1,Ta=null,ui=!1,Fu=Error(r(519));function Aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(oi(n,t)),Fu}function tm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[mn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)xt(wo[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Zt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_g(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Aa(t,!0)}function nm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function Wr(t){if(t!==An)return!1;if(!At)return nm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&Kt&&Aa(t),nm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=wg(t)}else n===27?(n=Kt,Ha(t.type)?(t=cd,cd=null,Kt=t):Kt=n):Kt=An?di(t.stateNode.nextSibling):null;return!0}function ur(){Kt=An=null,At=!1}function Hu(){var t=Ta;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Ta=null),t}function ao(t){Ta===null?Ta=[t]:Ta.push(t)}var Vu=z(null),fr=null,Xi=null;function wa(t,n,a){_e(Vu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=Vu.current,Q(Vu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Gu(d.return,a,t),o||(x=null);break e}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Gu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function qr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=u.type;Kn(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===de.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return im(fr,t)}function Ml(t,n){return fr===null&&dr(t),im(t,n)}function im(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(r(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var ly=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},cy=s.unstable_scheduleCallback,uy=s.unstable_NormalPriority,un={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new ly,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&cy(uy,function(){t.controller.abort()})}var so=null,Wu=0,jr=0,Yr=null;function fy(t,n){if(so===null){var a=so=[];Wu=0,jr=Zf(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(am,am),n}function am(){if(--Wu===0&&so!==null){Yr!==null&&(Yr.status="fulfilled");var t=so;so=null,jr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=I.S;I.S=function(t,n){G0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fy(t,n),rm!==null&&rm(t,n)};var hr=z(null);function qu(){var t=hr.current;return t!==null?t:jt.pooledCache}function bl(t,n){n===null?_e(hr,hr.current):_e(hr,n.pool)}function sm(){var t=qu();return t===null?null:{parent:un._currentValue,pool:t}}var Zr=Error(r(460)),ju=Error(r(474)),El=Error(r(542)),Tl={then:function(){}};function om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,um(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,um(t),t}throw mr=n,Zr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Zr):a}}var mr=null;function cm(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function um(t){if(t===Zr||t===El)throw Error(r(483))}var Kr=null,oo=0;function Al(t){var n=oo;return oo+=1,Kr===null&&(Kr=[]),lm(Kr,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function fm(t){function n(j,X){if(t){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Gi(j,X),j.index=0,j.sibling=null,j}function d(j,X,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,$,ve){return X===null||X.tag!==6?(X=Ou($,j.mode,ve),X.return=j,X):(X=u(X,$),X.return=j,X)}function V(j,X,$,ve){var $e=$.type;return $e===E?me(j,X,$.props.children,ve,$.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&pr($e)===X.type)?(X=u(X,$.props),lo(X,$),X.return=j,X):(X=yl($.type,$.key,$.props,null,j.mode,ve),lo(X,$),X.return=j,X)}function te(j,X,$,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Iu($,j.mode,ve),X.return=j,X):(X=u(X,$.children||[]),X.return=j,X)}function me(j,X,$,ve,$e){return X===null||X.tag!==7?(X=cr($,j.mode,ve,$e),X.return=j,X):(X=u(X,$),X.return=j,X)}function xe(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ou(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return $=yl(X.type,X.key,X.props,null,j.mode,$),lo($,X),$.return=j,$;case b:return X=Iu(X,j.mode,$),X.return=j,X;case W:return X=pr(X),xe(j,X,$)}if(ge(X)||K(X))return X=cr(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return xe(j,Al(X),$);if(X.$$typeof===C)return xe(j,Ml(j,X),$);wl(j,X)}return null}function re(j,X,$,ve){var $e=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $e!==null?null:A(j,X,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===$e?V(j,X,$,ve):null;case b:return $.key===$e?te(j,X,$,ve):null;case W:return $=pr($),re(j,X,$,ve)}if(ge($)||K($))return $e!==null?null:me(j,X,$,ve,null);if(typeof $.then=="function")return re(j,X,Al($),ve);if($.$$typeof===C)return re(j,X,Ml(j,$),ve);wl(j,$)}return null}function le(j,X,$,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get($)||null,A(X,j,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return j=j.get(ve.key===null?$:ve.key)||null,V(X,j,ve,$e);case b:return j=j.get(ve.key===null?$:ve.key)||null,te(X,j,ve,$e);case W:return ve=pr(ve),le(j,X,$,ve,$e)}if(ge(ve)||K(ve))return j=j.get($)||null,me(X,j,ve,$e,null);if(typeof ve.then=="function")return le(j,X,$,Al(ve),$e);if(ve.$$typeof===C)return le(j,X,$,Ml(X,ve),$e);wl(X,ve)}return null}function Xe(j,X,$,ve){for(var $e=null,Dt=null,qe=X,pt=X=0,Mt=null;qe!==null&&pt<$.length;pt++){qe.index>pt?(Mt=qe,qe=null):Mt=qe.sibling;var Nt=re(j,qe,$[pt],ve);if(Nt===null){qe===null&&(qe=Mt);break}t&&qe&&Nt.alternate===null&&n(j,qe),X=d(Nt,X,pt),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt,qe=Mt}if(pt===$.length)return a(j,qe),At&&ki(j,pt),$e;if(qe===null){for(;pt<$.length;pt++)qe=xe(j,$[pt],ve),qe!==null&&(X=d(qe,X,pt),Dt===null?$e=qe:Dt.sibling=qe,Dt=qe);return At&&ki(j,pt),$e}for(qe=o(qe);pt<$.length;pt++)Mt=le(qe,j,pt,$[pt],ve),Mt!==null&&(t&&Mt.alternate!==null&&qe.delete(Mt.key===null?pt:Mt.key),X=d(Mt,X,pt),Dt===null?$e=Mt:Dt.sibling=Mt,Dt=Mt);return t&&qe.forEach(function(Wa){return n(j,Wa)}),At&&ki(j,pt),$e}function at(j,X,$,ve){if($==null)throw Error(r(151));for(var $e=null,Dt=null,qe=X,pt=X=0,Mt=null,Nt=$.next();qe!==null&&!Nt.done;pt++,Nt=$.next()){qe.index>pt?(Mt=qe,qe=null):Mt=qe.sibling;var Wa=re(j,qe,Nt.value,ve);if(Wa===null){qe===null&&(qe=Mt);break}t&&qe&&Wa.alternate===null&&n(j,qe),X=d(Wa,X,pt),Dt===null?$e=Wa:Dt.sibling=Wa,Dt=Wa,qe=Mt}if(Nt.done)return a(j,qe),At&&ki(j,pt),$e;if(qe===null){for(;!Nt.done;pt++,Nt=$.next())Nt=xe(j,Nt.value,ve),Nt!==null&&(X=d(Nt,X,pt),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt);return At&&ki(j,pt),$e}for(qe=o(qe);!Nt.done;pt++,Nt=$.next())Nt=le(qe,j,pt,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&qe.delete(Nt.key===null?pt:Nt.key),X=d(Nt,X,pt),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt);return t&&qe.forEach(function(bx){return n(j,bx)}),At&&ki(j,pt),$e}function Xt(j,X,$,ve){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var $e=$.key;X!==null;){if(X.key===$e){if($e=$.type,$e===E){if(X.tag===7){a(j,X.sibling),ve=u(X,$.props.children),ve.return=j,j=ve;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&pr($e)===X.type){a(j,X.sibling),ve=u(X,$.props),lo(ve,$),ve.return=j,j=ve;break e}a(j,X);break}else n(j,X);X=X.sibling}$.type===E?(ve=cr($.props.children,j.mode,ve,$.key),ve.return=j,j=ve):(ve=yl($.type,$.key,$.props,null,j.mode,ve),lo(ve,$),ve.return=j,j=ve)}return x(j);case b:e:{for($e=$.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(j,X.sibling),ve=u(X,$.children||[]),ve.return=j,j=ve;break e}else{a(j,X);break}else n(j,X);X=X.sibling}ve=Iu($,j.mode,ve),ve.return=j,j=ve}return x(j);case W:return $=pr($),Xt(j,X,$,ve)}if(ge($))return Xe(j,X,$,ve);if(K($)){if($e=K($),typeof $e!="function")throw Error(r(150));return $=$e.call($),at(j,X,$,ve)}if(typeof $.then=="function")return Xt(j,X,Al($),ve);if($.$$typeof===C)return Xt(j,X,Ml(j,$),ve);wl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(j,X.sibling),ve=u(X,$),ve.return=j,j=ve):(a(j,X),ve=Ou($,j.mode,ve),ve.return=j,j=ve),x(j)):a(j,X)}return function(j,X,$,ve){try{oo=0;var $e=Xt(j,X,$,ve);return Kr=null,$e}catch(qe){if(qe===Zr||qe===El)throw qe;var Dt=Qn(29,qe,null,j.mode);return Dt.lanes=ve,Dt.return=j,Dt}finally{}}}var gr=fm(!0),dm=fm(!1),Ra=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),Zp(t,null,a),n}return vl(t,o,n,a),_l(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function uo(){if(Qu){var t=Yr;if(t!==null)throw t}}function fo(t,n,a,o){Qu=!1;var u=t.updateQueue;Ra=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,te=V.next;V.next=null,x===null?d=te:x.next=te,x=V;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==x&&(A===null?me.firstBaseUpdate=te:A.next=te,me.lastBaseUpdate=V))}if(d!==null){var xe=u.baseState;x=0,me=te=V=null,A=d;do{var re=A.lane&-536870913,le=re!==A.lane;if(le?(St&re)===re:(o&re)===re){re!==0&&re===jr&&(Qu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,at=A;re=n;var Xt=a;switch(at.tag){case 1:if(Xe=at.payload,typeof Xe=="function"){xe=Xe.call(Xt,xe,re);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=at.payload,re=typeof Xe=="function"?Xe.call(Xt,xe,re):Xe,re==null)break e;xe=g({},xe,re);break e;case 2:Ra=!0}}re=A.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(te=me=le,V=xe):me=me.next=le,x|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);me===null&&(V=xe),u.baseState=V,u.firstBaseUpdate=te,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Oa|=x,t.lanes=x,t.memoizedState=xe}}function hm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function pm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hm(a[t],n)}var Qr=z(null),Rl=z(0);function mm(t,n){t=ea,_e(Rl,t),_e(Qr,n),ea=t|n.baseLanes}function Ju(){_e(Rl,ea),_e(Qr,Qr.current)}function $u(){ea=Rl.current,Q(Qr),Q(Rl)}var Jn=z(null),fi=null;function Na(t){var n=t.alternate;_e(an,an.current&1),_e(Jn,t),fi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(fi=t)}function ef(t){_e(an,an.current),_e(Jn,t),fi===null&&(fi=t)}function gm(t){t.tag===22?(_e(an,an.current),_e(Jn,t),fi===null&&(fi=t)):Ua()}function Ua(){_e(an,an.current),_e(Jn,Jn.current)}function $n(t){Q(Jn),fi===t&&(fi=null),Q(an)}var an=z(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,dt=null,Gt=null,fn=null,Dl=!1,Jr=!1,vr=!1,Nl=0,ho=0,$r=null,hy=0;function en(){throw Error(r(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,d){return qi=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?$m:_f,vr=!1,d=a(o,u),vr=!1,Jr&&(d=_m(n,a,o,u)),vm(t),d}function vm(t){I.H=go;var n=Gt!==null&&Gt.next!==null;if(qi=0,fn=Gt=dt=null,Dl=!1,ho=0,$r=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Sl(t)&&(dn=!0))}function _m(t,n,a,o){dt=t;var u=0;do{if(Jr&&($r=null),ho=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,fn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=e0,d=n(a,o)}while(Jr);return d}function py(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(dt.flags|=1024),n}function af(){var t=Nl!==0;return Nl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}qi=0,fn=Gt=dt=null,Jr=!1,ho=Nl=0,$r=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?dt.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(Gt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=fn===null?dt.memoizedState:fn.next;if(n!==null)fn=n,Gt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},fn===null?dt.memoizedState=fn=t:fn=fn.next=t}return fn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,$r===null&&($r=[]),t=lm($r,t,n),n=dt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?$m:_f),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===C)return wn(t)}throw Error(r(438,String(t)))}function of(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function ji(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=rn();return lf(n,Gt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=x=null,V=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(St&xe)===xe:(qi&xe)===xe){var re=te.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===jr&&(me=!0);else if((qi&re)===re){te=te.next,re===jr&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(A=V=xe,x=d):V=V.next=xe,dt.lanes|=re,Oa|=re;xe=te.action,vr&&a(d,xe),d=te.hasEagerState?te.eagerState:a(d,xe)}else re={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(A=V=re,x=d):V=V.next=re,dt.lanes|=xe,Oa|=xe;te=te.next}while(te!==null&&te!==n);if(V===null?x=d:V.next=A,!Kn(d,t.memoizedState)&&(dn=!0,me&&(a=Yr,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Kn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function ym(t,n,a){var o=dt,u=rn(),d=At;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Kn((Gt||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,df(Mm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},Sm.bind(null,o,u,a,n),null),jt===null)throw Error(r(349));d||(qi&127)!==0||xm(o,n,a)}return a}function xm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Ul(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Sm(t,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Em(t)}function Mm(t,n,a){return a(function(){bm(n)&&Em(t)})}function bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function Em(t){var n=lr(t,2);n!==null&&Xn(n,t,2)}function uf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),vr){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},n}function Tm(t,n,a,o){return t.baseState=a,lf(t,Gt,typeof o=="function"?o:ji)}function my(t,n,a,o,u){if(zl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Am(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Am(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,x={};I.T=x;try{var A=a(u,o),V=I.S;V!==null&&V(x,A),wm(t,n,A)}catch(te){ff(t,n,te)}finally{d!==null&&x.types!==null&&(d.types=x.types),I.T=d}}else try{d=a(u,o),wm(t,n,d)}catch(te){ff(t,n,te)}}function wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(t,n,o)},function(o){return ff(t,n,o)}):Rm(t,n,a)}function Rm(t,n,a){n.status="fulfilled",n.value=a,Cm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Am(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cm(n),n=n.next;while(n!==o)}t.action=null}function Cm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Dm(t,n){return n}function Nm(t,n){if(At){var a=jt.formState;if(a!==null){e:{var o=dt;if(At){if(Kt){t:{for(var u=Kt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=di(u.nextSibling),o=u.data==="F!";break e}}Aa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dm,lastRenderedState:n},a.queue=o,a=Km.bind(null,dt,o),o.dispatch=a,o=uf(!1),d=vf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=my.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Um(t){var n=rn();return Lm(n,Gt,t)}function Lm(t,n,a){if(n=lf(t,n,Dm)[0],t=Pl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(x){throw x===Zr?El:x}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,es(9,{destroy:void 0},gy.bind(null,u,a),null)),[o,d,t]}function gy(t,n){t.action=n}function Pm(t){var n=rn(),a=Gt;if(a!==null)return Lm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function es(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Ul(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Om(){return rn().memoizedState}function Ol(t,n,a,o){var u=Pn();dt.flags|=t,u.memoizedState=es(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&tf(o,Gt.memoizedState.deps)?u.memoizedState=es(n,d,a,o):(dt.flags|=t,u.memoizedState=es(1|n,d,a,o))}function Im(t,n){Ol(8390656,8,t,n)}function df(t,n){Il(2048,8,t,n)}function vy(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Ul(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function zm(t){var n=rn().memoizedState;return vy({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Bm(t,n){return Il(4,2,t,n)}function Fm(t,n){return Il(4,4,t,n)}function Hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vm(t,n,a){a=a!=null?a.concat([t]):null,Il(4,4,Hm.bind(null,n,t),a)}function hf(){}function Gm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function km(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),vr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(qi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=X0(),dt.lanes|=t,Oa|=t,a)}function Xm(t,n,a,o){return Kn(a,n)?a:Qr.current!==null?(t=pf(t,a,o),Kn(t,n)||(dn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(St&261930)===0?(dn=!0,t.memoizedState=a):(t=X0(),dt.lanes|=t,Oa|=t,n)}function Wm(t,n,a,o,u){var d=J.p;J.p=d!==0&&8>d?d:8;var x=I.T,A={};I.T=A,vf(t,!1,n,a);try{var V=u(),te=I.S;if(te!==null&&te(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=dy(V,o);mo(t,n,me,ni(t))}else mo(t,n,o,ni(t))}catch(xe){mo(t,n,{then:function(){},status:"rejected",reason:xe},ni())}finally{J.p=d,x!==null&&A.types!==null&&(x.types=A.types),I.T=x}}function _y(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=qm(t).queue;Wm(t,u,n,Y,a===null?_y:function(){return jm(t),a(o)})}function qm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jm(t){var n=qm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},ni())}function gf(){return wn(Uo)}function Ym(){return rn().memoizedState}function Zm(){return rn().memoizedState}function yy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Ca(a);var o=Da(n,t,a);o!==null&&(Xn(o,n,a),co(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function xy(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Qm(n,a):(a=Lu(t,n,a,o),a!==null&&(Xn(a,t,o),Jm(a,n,o)))}function Km(t,n,a){var o=ni();mo(t,n,a,o)}function mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Qm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,x))return vl(t,n,u,0),jt===null&&gl(),!1}catch{}finally{}if(a=Lu(t,n,u,o),a!==null)return Xn(a,t,o),Jm(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(r(479))}else n=Lu(t,a,o,2),n!==null&&Xn(n,t,2)}function zl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Qm(t,n){Jr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}var go={readContext:wn,use:Ll,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};go.useEffectEvent=en;var $m={readContext:wn,use:Ll,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(vr){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(vr){Qe(!0);try{a(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=xy.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=Km.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Pn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=Wm.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Pn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(St&127)!==0||xm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Im(Mm.bind(null,o,d,t),[t]),o.flags|=2048,es(9,{destroy:void 0},Sm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=jt.identifierPrefix;if(At){var a=Ui,o=Ni;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Pn().memoizedState=yy.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:wn,use:Ll,useCallback:Gm,useContext:wn,useEffect:df,useImperativeHandle:Vm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:km,useReducer:Pl,useRef:Om,useState:function(){return Pl(ji)},useDebugValue:hf,useDeferredValue:function(t,n){var a=rn();return Xm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Pl(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:ym,useId:Ym,useHostTransitionStatus:gf,useFormState:Um,useActionState:Um,useOptimistic:function(t,n){var a=rn();return Tm(a,Gt,t,n)},useMemoCache:of,useCacheRefresh:Zm};_f.useEffectEvent=zm;var e0={readContext:wn,use:Ll,useCallback:Gm,useContext:wn,useEffect:df,useImperativeHandle:Vm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:km,useReducer:cf,useRef:Om,useState:function(){return cf(ji)},useDebugValue:hf,useDeferredValue:function(t,n){var a=rn();return Gt===null?pf(a,t,n):Xm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=cf(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:ym,useId:Ym,useHostTransitionStatus:gf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=rn();return Gt!==null?Tm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:Zm};e0.useEffectEvent=zm;function yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ca(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Xn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ca(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Xn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Ca(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&(Xn(n,t,a),co(n,t,a))}};function t0(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,d):!0}function n0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function i0(t){ml(t)}function a0(t){console.error(t)}function r0(t){ml(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function s0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function o0(t){return t=Ca(t),t.tag=3,t}function l0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){s0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){s0(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Sy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Kl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(t,o,u)),!1}throw Error(r(435,a.tag))}return qf(t,o,u),Kl(),!1}if(At)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(t=Error(r(422),{cause:o}),ao(oi(t,a)))):(o!==Fu&&(n=Error(r(423),{cause:o}),ao(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),Eo===null?Eo=[d]:Eo.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ia===null||!Ia.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=o0(u),l0(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(r(461)),dn=!1;function Rn(t,n,a,o){n.child=t===null?dm(n,null,a,o):gr(n,t.child,a,o)}function c0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return dr(n),o=nf(t,n,a,x,d,u),A=af(),t!==null&&!dn?(rf(t,n,u),Yi(t,n,u)):(At&&A&&zu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function u0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,f0(t,n,d,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Df(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(x,o)&&t.ref===n.ref)return Yi(t,n,u)}return n.flags|=1,t=Gi(d,o),t.ref=n.ref,t.return=n,n.child=t}function f0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(to(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,Df(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Yi(t,n,u)}return bf(t,n,a,o,u)}function d0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return h0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,d!==null?d.cachePool:null),d!==null?mm(n,d):Ju(),gm(n);else return o=n.lanes=536870912,h0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(bl(n,d.cachePool),mm(n,d),Ua(),n.memoizedState=null):(t!==null&&bl(n,null),Ju(),Ua());return Rn(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function h0(t,n,a,o,u){var d=qu();return d=d===null?null:{parent:un._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&bl(n,null),Ju(),gm(n),t!==null&&qr(t,n,o,!0),n.childLanes=u,null}function Fl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function p0(t,n,a){return gr(n,t.child,null,a),t=Fl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function My(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Fl(n,o),n.lanes=536870912,vo(null,t);if(ef(n),(t=Kt)?(t=Ag(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Qp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Fl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=p0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||qr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=jt,o!==null&&(x=Xs(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,lr(t,x),Xn(o,t,x),Mf;Kl(),n=p0(t,n,a)}else t=d.treeContext,Kt=di(x.nextSibling),An=n,At=!0,Ta=null,ui=!1,t!==null&&em(n,t),n=Fl(n,o),n.flags|=4096;return n}return t=Gi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Hl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return dr(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!dn?(rf(t,n,u),Yi(t,n,u)):(At&&o&&zu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function m0(t,n,a,o,u,d){return dr(n),n.updateQueue=null,a=_m(n,o,a,u),vm(t),o=af(),t!==null&&!dn?(rf(t,n,d),Yi(t,n,d)):(At&&o&&zu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function g0(t,n,a,o,u){if(dr(n),n.stateNode===null){var d=Gr,x=a.contextType;typeof x=="object"&&x!==null&&(d=wn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?wn(x):Gr,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(yf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&xf.enqueueReplaceState(d,d.state,null),fo(n,o,d,u),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,V=_r(a,A);d.props=V;var te=d.context,me=a.contextType;x=Gr,typeof me=="object"&&me!==null&&(x=wn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||te!==x)&&n0(n,d,o,x),Ra=!1;var re=n.memoizedState;d.state=re,fo(n,o,d,u),uo(),te=n.memoizedState,A||re!==te||Ra?(typeof xe=="function"&&(yf(n,a,xe,o),te=n.memoizedState),(V=Ra||t0(n,a,V,o,re,te,x))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=x,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),x=n.memoizedProps,me=_r(a,x),d.props=me,xe=n.pendingProps,re=d.context,te=a.contextType,V=Gr,typeof te=="object"&&te!==null&&(V=wn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==xe||re!==V)&&n0(n,d,o,V),Ra=!1,re=n.memoizedState,d.state=re,fo(n,o,d,u),uo();var le=n.memoizedState;x!==xe||re!==le||Ra||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof A=="function"&&(yf(n,a,A,o),le=n.memoizedState),(me=Ra||t0(n,a,me,o,re,le,V)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=V,o=me):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Hl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Yi(t,n,u),t}function v0(t,n,a,o){return ur(),n.flags|=256,Rn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:sm()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function _0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Na(n):Ua(),(t=Kt)?(t=Ag(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Qp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Aa(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ua(),u=n.mode,A=Vl({mode:"hidden",children:A},u),o=cr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=Ef,vo(null,o)):(Na(n),wf(n,A))}var V=t.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(d)n.flags&256?(Na(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),A=o.fallback,u=n.mode,o=Vl({mode:"visible",children:o.children},u),A=cr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=Ef,n=vo(null,o));else if(Na(n),ld(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var te=x.dgst;x=te,o=Error(r(419)),o.stack="",o.digest=x,ao({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(dn||qr(t,n,a,!1),x=(a&t.childLanes)!==0,dn||x){if(x=jt,x!==null&&(o=Xs(x,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,lr(t,o),Xn(x,t,o),Mf;od(A)||Kl(),n=Rf(t,n,a)}else od(A)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Kt=di(A.nextSibling),An=n,At=!0,Ta=null,ui=!1,t!==null&&em(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(Ua(),A=o.fallback,u=n.mode,V=t.child,te=V.sibling,o=Gi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,te!==null?A=Gi(te,A):(A=cr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Tf(a):(u=A.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Af(t,x,a),n.memoizedState=Ef,vo(t.child,o)):(Na(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return gr(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function y0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function x0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_e(an,x),Rn(t,n,o,a),o=At?io:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,a,n);else if(t.tag===19)y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function by(t,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),wa(n,un,t.memoizedState.cache),ur();break;case 27:case 5:Ee(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_0(t,n,a):(Na(n),t=Yi(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return x0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(an,an.current),o)break;return null;case 22:return n.lanes=0,d0(t,n,a,n.pendingProps);case 24:wa(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function S0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return dn=!1,by(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,At&&(n.flags&1048576)!==0&&$p(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=_r(t,o),n.tag=1,n=g0(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=c0(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=u0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),g0(t,n,o,u,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),fo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,wa(n,un,o),o!==d.cache&&ku(n,[un],a,!0),uo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=v0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),ao(u),n=v0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=di(t.firstChild),An=n,At=!0,Ta=null,ui=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),o===u){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Hl(t,n),t===null?(a=Ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=ic(ae.current).createElement(a),o[cn]=n,o[mn]=t,Cn(o,a,t),ne(o),n.stateNode=o):n.memoizedState=Ug(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ee(n),t===null&&At&&(o=n.stateNode=Cg(n.type,n.pendingProps,ae.current),An=n,ui=!0,u=Kt,Ha(n.type)?(cd=u,Kt=di(o.firstChild)):Kt=u),Rn(t,n,n.pendingProps.children,a),Hl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Kt)&&(o=$y(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Kt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Aa(n)),Ee(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,ad(u,d)?o=null:x!==null&&ad(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,py,null,null,a),Uo._currentValue=u),Hl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Kt)&&(a=ex(a,n.pendingProps,ui),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||Aa(n)),null;case 13:return _0(t,n,a);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return c0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return u0(t,n,n.type,n.pendingProps,a);case 15:return f0(t,n,n.type,n.pendingProps,a);case 19:return x0(t,n,a);case 31:return My(t,n,a);case 22:return d0(t,n,a,n.pendingProps);case 24:return dr(n),o=wn(un),t===null?(u=qu(),u===null&&(u=jt,d=Xu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),wa(n,un,u)):((t.lanes&a)!==0&&(Zu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,un,o)):(o=d.cache,wa(n,un,o),o!==u.cache&&ku(n,[un],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(t){t.flags|=4}function Nf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Y0())t.flags|=8192;else throw mr=Tl,ju}else t.flags&=-16777217}function M0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zg(n))if(Y0())t.flags|=8192;else throw mr=Tl,ju}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vt():536870912,t.lanes|=n,as|=n)}function _o(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ey(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(un),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wr(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Zi(n),d!==null?(Qt(n),M0(n,d)):(Qt(n),Nf(n,u,null,o,a))):d?d!==t.memoizedState?(Zi(n),Qt(n),M0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zi(n),Qt(n),Nf(n,u,t,o,a)),null;case 27:if(Fe(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=we.current,Wr(n)?tm(n):(t=Cg(u,o,a),n.stateNode=t,Zi(n))}return Qt(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(d=we.current,Wr(n))tm(n);else{var x=ic(ae.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[cn]=n,d[mn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zi(n)}}return Qt(n),Nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Wr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_g(t.nodeValue,a)),t||Aa(n,!0)}else t=ic(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Wr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Qt(n),null);case 4:return Be(),t===null&&$f(n.stateNode.containerInfo),Qt(n),null;case 10:return Wi(n.type),Qt(n),null;case 19:if(Q(an),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)_o(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Cl(t),d!==null){for(n.flags|=128,_o(o,!1),t=d.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kp(a,t),a=a.sibling;return _e(an,an.current&1|2),At&&ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&T()>jl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return Qt(n),null}else 2*T()-o.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=T(),t.sibling=null,a=an.current,_e(an,u?a&1|2:a&1),At&&ki(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return $n(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(un),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ty(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(un),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(an),null;case 4:return Be(),null;case 10:return Wi(n.type),null;case 22:case 23:return $n(n),$u(),t!==null&&Q(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(un),null;case 25:return null;default:return null}}function b0(t,n){switch(Bu(n),n.tag){case 3:Wi(un),Be();break;case 26:case 27:case 5:Fe(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Q(an);break;case 10:Wi(n.type);break;case 22:case 23:$n(n),$u(),t!==null&&Q(hr);break;case 24:Wi(un)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Ht(n,n.return,A)}}function La(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var V=a,te=A;try{te()}catch(me){Ht(u,V,me)}}}o=o.next}while(o!==d)}}catch(me){Ht(n,n.return,me)}}function E0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pm(n,a)}catch(o){Ht(t,t.return,o)}}}function T0(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Li(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function A0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Uf(t,n,a){try{var o=t.stateNode;jy(o,t.type,a,n),o[mn]=n}catch(u){Ht(t,t.return,u)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(kl(t,n,a),t=t.sibling;t!==null;)kl(t,n,a),t=t.sibling}function R0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[cn]=t,n[mn]=a}catch(d){Ht(t,t.return,d)}}var Ki=!1,hn=!1,Of=!1,C0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Ay(t,n){if(t=t.containerInfo,nd=uc,t=Vp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,A=-1,V=-1,te=0,me=0,xe=t,re=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(A=x+u),xe!==d||o!==0&&xe.nodeType!==3||(V=x+o),xe.nodeType===3&&(x+=xe.nodeValue.length),(le=xe.firstChild)!==null;)re=xe,xe=le;for(;;){if(xe===t)break t;if(re===a&&++te===u&&(A=x),re===d&&++me===o&&(V=x),(le=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=le}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},uc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Xe=_r(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Ht(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function D0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),o&4&&yo(5,a);break;case 1:if(Ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ht(a,a.return,x)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ht(a,a.return,x)}}o&64&&E0(a),o&512&&xo(a,a.return);break;case 3:if(Ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(t,n)}catch(x){Ht(a,a.return,x)}}break;case 27:n===null&&o&4&&R0(a);case 26:case 5:Ji(t,a),n===null&&o&4&&A0(a),o&512&&xo(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),o&4&&L0(t,a);break;case 13:Ji(t,a),o&4&&P0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Oy.bind(null,a),tx(t,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||hn,u=Ki;var d=hn;Ki=o,(hn=n)&&!d?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=u,hn=d}break;case 30:break;default:Ji(t,a)}}function N0(t){var n=t.alternate;n!==null&&(t.alternate=null,N0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&js(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Hn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)U0(t,n,a),a=a.sibling}function U0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var o=Jt,u=Hn;Ha(a.type)&&(Jt=a.stateNode,Hn=!1),Qi(t,n,a),Co(a.stateNode),Jt=o,Hn=u;break;case 5:hn||Li(a,n);case 6:if(o=Jt,u=Hn,Jt=null,Qi(t,n,a),Jt=o,Hn=u,Jt!==null)if(Hn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(d){Ht(a,n,d)}else try{Jt.removeChild(a.stateNode)}catch(d){Ht(a,n,d)}break;case 18:Jt!==null&&(Hn?(t=Jt,Eg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ds(t)):Eg(Jt,a.stateNode));break;case 4:o=Jt,u=Hn,Jt=a.stateNode.containerInfo,Hn=!0,Qi(t,n,a),Jt=o,Hn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),hn||La(4,a,n),Qi(t,n,a);break;case 1:hn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&T0(a,n,o)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Qi(t,n,a),hn=o;break;default:Qi(t,n,a)}}function L0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ds(t)}catch(a){Ht(n,n.return,a)}}}function P0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ds(t)}catch(a){Ht(n,n.return,a)}}function wy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new C0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new C0),n;default:throw Error(r(435,t.tag))}}function Xl(t,n){var a=wy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Iy.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(Ha(A.type)){Jt=A.stateNode,Hn=!1;break e}break;case 5:Jt=A.stateNode,Hn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if(Jt===null)throw Error(r(160));U0(d,x,u),Jt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)O0(n,t),n=n.sibling}var Mi=null;function O0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),Gn(t),o&4&&(La(3,t,t.return),yo(3,t),La(5,t,t.return));break;case 1:Vn(n,t),Gn(t),o&512&&(hn||a===null||Li(a,a.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Vn(n,t),Gn(t),o&512&&(hn||a===null||Li(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ar]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[cn]=t,ne(d),o=d;break e;case"link":var x=Og("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=Og("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,ne(d),o=d}t.stateNode=o}else Ig(u,t.type,t.stateNode);else t.stateNode=Pg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Ig(u,t.type,t.stateNode):Pg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),Gn(t),o&512&&(hn||a===null||Li(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),Gn(t),o&512&&(hn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{Di(u,"")}catch(Xe){Ht(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Uf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Vn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Ht(t,t.return,Xe)}}break;case 3:if(sc=null,u=Mi,Mi=ac(n.containerInfo),Vn(n,t),Mi=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Xe){Ht(t,t.return,Xe)}Of&&(Of=!1,I0(t));break;case 4:o=Mi,Mi=ac(t.stateNode.containerInfo),Vn(n,t),Gn(t),Mi=o;break;case 12:Vn(n,t),Gn(t);break;case 31:Vn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 13:Vn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=T()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,te=Ki,me=hn;if(Ki=te||u,hn=me||V,Vn(n,t),hn=me,Ki=te,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Ki||hn||yr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=V.stateNode;var xe=V.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Xe){Ht(V,V.return,Xe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Xe){Ht(V,V.return,Xe)}}}else if(n.tag===18){if(a===null){V=n;try{var le=V.stateNode;u?Tg(le,!0):Tg(V.stateNode,!1)}catch(Xe){Ht(V,V.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(t,a))));break;case 19:Vn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(w0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Lf(t);kl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(Di(x,""),a.flags&=-33);var A=Lf(t);kl(t,A,x);break;case 3:case 4:var V=a.stateNode.containerInfo,te=Lf(t);Pf(t,te,V);break;default:throw Error(r(161))}}catch(me){Ht(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)D0(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),yr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&T0(n,n.return,a),yr(n);break;case 27:Co(n.stateNode);case 26:case 5:Li(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:$i(u,d,a),yo(4,d);break;case 1:if($i(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ht(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)hm(V[u],A)}catch(te){Ht(o,o.return,te)}}a&&x&64&&E0(d),xo(d,d.return);break;case 27:R0(d);case 26:case 5:$i(u,d,a),a&&o===null&&x&4&&A0(d),xo(d,d.return);break;case 12:$i(u,d,a);break;case 31:$i(u,d,a),a&&x&4&&L0(u,d);break;case 13:$i(u,d,a),a&&x&4&&P0(u,d);break;case 22:d.memoizedState===null&&$i(u,d,a),xo(d,d.return);break;case 30:break;default:$i(u,d,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)z0(t,n,a,o),n=n.sibling}function z0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&yo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ht(n,n.return,V)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?bi(t,n,a,o):So(t,n):d._visibility&2?bi(t,n,a,o):(d._visibility|=2,ts(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(x,n);break;case 24:bi(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:bi(t,n,a,o)}}function ts(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,A=a,V=o,te=x.flags;switch(x.tag){case 0:case 11:case 15:ts(d,x,A,V,u),yo(8,x);break;case 23:break;case 22:var me=x.stateNode;x.memoizedState!==null?me._visibility&2?ts(d,x,A,V,u):So(d,x):(me._visibility|=2,ts(d,x,A,V,u)),u&&te&2048&&If(x.alternate,x);break;case 24:ts(d,x,A,V,u),u&&te&2048&&zf(x.alternate,x);break;default:ts(d,x,A,V,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&If(o.alternate,o);break;case 24:So(a,o),u&2048&&zf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function ns(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)B0(t,n,a),t=t.sibling}function B0(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&Mo&&t.memoizedState!==null&&hx(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var o=Mi;Mi=ac(t.stateNode.containerInfo),ns(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ns(t,n,a),Mo=o):ns(t,n,a));break;default:ns(t,n,a)}}function F0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,V0(o,t)}F0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)H0(t),t=t.sibling}function H0(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&La(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):bo(t);break;default:bo(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,V0(o,t)}F0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function V0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(N0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var Ry={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Ot=0,jt=null,yt=null,St=0,Ft=0,ei=null,Pa=!1,is=!1,Bf=!1,ea=0,tn=0,Oa=0,xr=0,Ff=0,ti=0,as=0,Eo=null,kn=null,Hf=!1,ql=0,G0=0,jl=1/0,Yl=null,Ia=null,vn=0,za=null,rs=null,ta=0,Vf=0,Gf=null,k0=null,To=0,kf=null;function ni(){return(Ot&2)!==0&&St!==0?St&-St:I.T!==null?Zf():Ws()}function X0(){if(ti===0)if((St&536870912)===0||At){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function Xn(t,n,a){(t===jt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Ba(t,St,ti,!1)),Dn(t,a),((Ot&2)===0||t!==jt)&&(t===jt&&((Ot&2)===0&&(xr|=a),tn===4&&Ba(t,St,ti,!1)),Pi(t))}function W0(t,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ge(t,n),u=o?Uy(t,n):Wf(t,n,!0),d=o;do{if(u===0){is&&!o&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Dy(a)){u=Wf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;u=Eo;var V=A.current.memoizedState.isDehydrated;if(V&&(ss(A,x).flags|=256),x=Wf(A,x,!1),x!==2){if(Bf&&!V){A.errorRecoveryDisabledLanes|=d,xr|=d,u=4;break e}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){ss(t,0),Ba(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(o,n,ti,!Pa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ql+300-T(),10<u)){if(Ba(o,n,ti,!Pa),Se(o,0,!0)!==0)break e;ta=n,o.timeoutHandle=Mg(q0.bind(null,o,a,kn,Yl,Hf,n,ti,xr,as,Pa,d,"Throttled",-0,0),u);break e}q0(o,a,kn,Yl,Hf,n,ti,xr,as,Pa,d,null,-0,0)}}break}while(!0);Pi(t)}function q0(t,n,a,o,u,d,x,A,V,te,me,xe,re,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},B0(n,d,xe);var Xe=(d&62914560)===d?ql-T():(d&4194048)===d?G0-T():0;if(Xe=px(xe,Xe),Xe!==null){ta=d,t.cancelPendingCommit=Xe(eg.bind(null,t,n,d,a,o,u,x,A,V,me,xe,null,re,le)),Ba(t,d,x,!te);return}}eg(t,n,d,a,o,u,x,A,V)}function Dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,o){n&=~Ff,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-We(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&sl(t,a,n)}function Zl(){return(Ot&6)===0?(Ao(0),!1):!0}function Xf(){if(yt!==null){if(Ft===0)var t=yt.return;else t=yt,Xi=fr=null,sf(t),Kr=null,oo=0,t=yt;for(;t!==null;)b0(t.alternate,t),t=t.return;yt=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ky(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Xf(),jt=t,yt=a=Gi(t.current,null),St=n,Ft=0,ei=null,Pa=!1,is=Ge(t,n),Bf=!1,as=ti=Ff=xr=Oa=tn=0,kn=Eo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),d=1<<u;n|=t[u],o&=~d}return ea=n,gl(),a}function j0(t,n){dt=null,I.H=go,n===Zr||n===El?(n=cm(),Ft=3):n===ju?(n=cm(),Ft=4):Ft=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,yt===null&&(tn=1,Bl(t,oi(n,t.current)))}function Y0(){var t=Jn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function Z0(){var t=I.H;return I.H=go,t===null?go:t}function K0(){var t=I.A;return I.A=Ry,t}function Kl(){tn=4,Pa||(St&4194048)!==St&&Jn.current!==null||(is=!0),(Oa&134217727)===0&&(xr&134217727)===0||jt===null||Ba(jt,St,ti,!1)}function Wf(t,n,a){var o=Ot;Ot|=2;var u=Z0(),d=K0();(jt!==t||St!==n)&&(Yl=null,ss(t,n)),n=!1;var x=tn;e:do try{if(Ft!==0&&yt!==null){var A=yt,V=ei;switch(Ft){case 8:Xf(),x=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var te=Ft;if(Ft=0,ei=null,os(t,A,V,te),a&&is){x=0;break e}break;default:te=Ft,Ft=0,ei=null,os(t,A,V,te)}}Ny(),x=tn;break}catch(me){j0(t,me)}while(!0);return n&&t.shellSuspendCounter++,Xi=fr=null,Ot=o,I.H=u,I.A=d,yt===null&&(jt=null,St=0,gl()),x}function Ny(){for(;yt!==null;)Q0(yt)}function Uy(t,n){var a=Ot;Ot|=2;var o=Z0(),u=K0();jt!==t||St!==n?(Yl=null,jl=T()+500,ss(t,n)):is=Ge(t,n);e:do try{if(Ft!==0&&yt!==null){n=yt;var d=ei;t:switch(Ft){case 1:Ft=0,ei=null,os(t,n,d,1);break;case 2:case 9:if(om(d)){Ft=0,ei=null,J0(n);break}n=function(){Ft!==2&&Ft!==9||jt!==t||(Ft=7),Pi(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:om(d)?(Ft=0,ei=null,J0(n)):(Ft=0,ei=null,os(t,n,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var A=yt;if(x?zg(x):A.stateNode.complete){Ft=0,ei=null;var V=A.sibling;if(V!==null)yt=V;else{var te=A.return;te!==null?(yt=te,Ql(te)):yt=null}break t}}Ft=0,ei=null,os(t,n,d,5);break;case 6:Ft=0,ei=null,os(t,n,d,6);break;case 8:Xf(),tn=6;break e;default:throw Error(r(462))}}Ly();break}catch(me){j0(t,me)}while(!0);return Xi=fr=null,I.H=o,I.A=u,Ot=a,yt!==null?0:(jt=null,St=0,gl(),tn)}function Ly(){for(;yt!==null&&!ot();)Q0(yt)}function Q0(t){var n=S0(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?Ql(t):yt=n}function J0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=m0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=m0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:sf(n);default:b0(a,n),n=yt=Kp(n,ea),n=S0(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?Ql(t):yt=n}function os(t,n,a,o){Xi=fr=null,sf(n),Kr=null,oo=0;var u=n.return;try{if(Sy(t,u,n,a,St)){tn=1,Bl(t,oi(a,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;tn=1,Bl(t,oi(a,t.current)),yt=null;return}n.flags&32768?(At||o===1?t=!0:is||(St&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),$0(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){$0(n,Pa);return}t=n.return;var a=Ey(n.alternate,n,ea);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);tn===0&&(tn=5)}function $0(t,n){do{var a=Ty(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);tn=6,yt=null}function eg(t,n,a,o,u,d,x,A,V){t.cancelPendingCommit=null;do Jl();while(vn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Uu,Yn(t,a,d,x,A,V),t===jt&&(yt=jt=null,St=0),rs=n,za=t,ta=a,Vf=d,Gf=u,k0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zy(he,function(){return rg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=J.p,J.p=2,x=Ot,Ot|=4;try{Ay(t,n,a)}finally{Ot=x,J.p=u,I.T=o}}vn=1,tg(),ng(),ig()}}function tg(){if(vn===1){vn=0;var t=za,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=J.p;J.p=2;var u=Ot;Ot|=4;try{O0(n,t);var d=id,x=Vp(t.containerInfo),A=d.focusedElem,V=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(V!==null&&wu(A)){var te=V.start,me=V.end;if(me===void 0&&(me=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var le=re.getSelection(),Xe=A.textContent.length,at=Math.min(V.start,Xe),Xt=V.end===void 0?at:Math.min(V.end,Xe);!le.extend&&at>Xt&&(x=Xt,Xt=at,at=x);var j=Fp(A,at),X=Fp(A,Xt);if(j&&X&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var $=xe.createRange();$.setStart(j.node,j.offset),le.removeAllRanges(),at>Xt?(le.addRange($),le.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),le.addRange($))}}}}for(xe=[],le=A;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ve=xe[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}uc=!!nd,id=nd=null}finally{Ot=u,J.p=o,I.T=a}}t.current=n,vn=2}}function ng(){if(vn===2){vn=0;var t=za,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=J.p;J.p=2;var u=Ot;Ot|=4;try{D0(t,n.alternate,n)}finally{Ot=u,J.p=o,I.T=a}}vn=3}}function ig(){if(vn===4||vn===3){vn=0,P();var t=za,n=rs,a=ta,o=k0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,rs=za=null,ag(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),ir(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=J.p,J.p=2,I.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{I.T=n,J.p=u}}(ta&3)!==0&&Jl(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?To++:(To=0,kf=t):To=0,Ao(0)}}function ag(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function Jl(){return tg(),ng(),ig(),rg()}function rg(){if(vn!==5)return!1;var t=za,n=Vf;Vf=0;var a=ir(ta),o=I.T,u=J.p;try{J.p=32>a?32:a,I.T=null,a=Gf,Gf=null;var d=za,x=ta;if(vn=0,rs=za=null,ta=0,(Ot&6)!==0)throw Error(r(331));var A=Ot;if(Ot|=4,H0(d.current),z0(d,d.current,x,a),Ot=A,Ao(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{J.p=u,I.T=o,ag(t,n)}}function sg(t,n,a){n=oi(a,n),n=Sf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Dn(t,2),Pi(t))}function Ht(t,n,a){if(t.tag===3)sg(t,t,a);else for(;n!==null;){if(n.tag===3){sg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=oi(a,t),a=o0(2),o=Da(n,a,2),o!==null&&(l0(a,o,n,t),Dn(o,2),Pi(o));break}}n=n.return}}function qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=Py.bind(null,t,n,a),n.then(t,t))}function Py(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>T()-ql?(Ot&2)===0&&ss(t,0):Ff|=a,as===St&&(as=0)),Pi(t)}function og(t,n){n===0&&(n=Vt()),t=lr(t,n),t!==null&&(Dn(t,n),Pi(t))}function Oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),og(t,a)}function Iy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),og(t,a)}function zy(t,n){return zt(t,n)}var $l=null,ls=null,jf=!1,ec=!1,Yf=!1,Fa=0;function Pi(t){t!==ls&&t.next===null&&(ls===null?$l=ls=t:ls=ls.next=t),ec=!0,jf||(jf=!0,Fy())}function Ao(t,n){if(!Yf&&ec){Yf=!0;do for(var a=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-We(42|t)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,fg(o,d))}else d=St,d=Se(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ge(o,d)||(a=!0,fg(o,d));o=o.next}while(a);Yf=!1}}function By(){lg()}function lg(){ec=jf=!1;var t=0;Fa!==0&&Zy()&&(t=Fa);for(var n=T(),a=null,o=$l;o!==null;){var u=o.next,d=cg(o,n);d===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(ls=a)):(a=o,(t!==0||(d&3)!==0)&&(ec=!0)),o=u}vn!==0&&vn!==5||Ao(t),Fa!==0&&(Fa=0)}function cg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-We(d),A=1<<x,V=u[x];V===-1?((A&a)===0||(A&o)!==0)&&(u[x]=lt(A,n)):V<=n&&(t.expiredLanes|=A),d&=~A}if(n=jt,a=St,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ge(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),ir(a)){case 2:case 8:a=Me;break;case 32:a=he;break;case 268435456:a=Pe;break;default:a=he}return o=ug.bind(null,t),a=zt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function ug(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var o=St;return o=Se(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(W0(t,o,n),cg(t,T()),t.callbackNode!=null&&t.callbackNode===a?ug.bind(null,t):null)}function fg(t,n){if(Jl())return null;W0(t,n,!0)}function Fy(){Qy(function(){(Ot&6)!==0?zt(ye,By):lg()})}function Zf(){if(Fa===0){var t=jr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Fa=t}return Fa}function dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ll(""+t)}function hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Hy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=dg((u[mn]||null).action),x=o.submitter;x&&(n=(n=x[mn]||null)?dg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new dl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var V=x?hg(u,x):new FormData(u);mf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(A.preventDefault(),V=x?hg(u,x):new FormData(u),mf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Kf=0;Kf<Nu.length;Kf++){var Qf=Nu[Kf],Vy=Qf.toLowerCase(),Gy=Qf[0].toUpperCase()+Qf.slice(1);Si(Vy,"on"+Gy)}Si(Xp,"onAnimationEnd"),Si(Wp,"onAnimationIteration"),Si(qp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(ay,"onTransitionRun"),Si(ry,"onTransitionStart"),Si(sy,"onTransitionCancel"),Si(jp,"onTransitionEnd"),Ve("onMouseEnter",["mouseout","mouseover"]),Ve("onMouseLeave",["mouseout","mouseover"]),Ve("onPointerEnter",["pointerout","pointerover"]),Ve("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function pg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],V=A.instance,te=A.currentTarget;if(A=A.listener,V!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=te;try{d(u)}catch(me){ml(me)}u.currentTarget=null,d=V}else for(x=0;x<o.length;x++){if(A=o[x],V=A.instance,te=A.currentTarget,A=A.listener,V!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=te;try{d(u)}catch(me){ml(me)}u.currentTarget=null,d=V}}}}function xt(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var o=t+"__bubble";a.has(o)||(mg(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),mg(a,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[tc]){t[tc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(ky.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Jf("selectionchange",!1,n))}}function mg(t,n,a,o){switch(Xg(n)){case 2:var u=vx;break;case 8:u=_x;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Sa(A),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){o=d=x;continue e}A=A.parentNode}}o=o.return}xp(function(){var te=d,me=gu(a),xe=[];e:{var re=Yp.get(t);if(re!==void 0){var le=dl,Xe=t;switch(t){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":le=I_;break;case"focusin":Xe="focus",le=Mu;break;case"focusout":Xe="blur",le=Mu;break;case"beforeblur":case"afterblur":le=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=F_;break;case Xp:case Wp:case qp:le=w_;break;case jp:le=V_;break;case"scroll":case"scrollend":le=M_;break;case"wheel":le=k_;break;case"copy":case"cut":case"paste":le=C_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Tp;break;case"toggle":case"beforetoggle":le=W_}var at=(n&4)!==0,Xt=!at&&(t==="scroll"||t==="scrollend"),j=at?re!==null?re+"Capture":null:re;at=[];for(var X=te,$;X!==null;){var ve=X;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||j===null||(ve=Ys(X,j),ve!=null&&at.push(Ro(X,ve,$))),Xt)break;X=X.return}0<at.length&&(re=new le(re,Xe,null,a,me),xe.push({event:re,listeners:at}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==mu&&(Xe=a.relatedTarget||a.fromElement)&&(Sa(Xe)||Xe[zi]))break e;if((le||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,le?(Xe=a.relatedTarget||a.toElement,le=te,Xe=Xe?Sa(Xe):null,Xe!==null&&(Xt=c(Xe),at=Xe.tag,Xe!==Xt||at!==5&&at!==27&&at!==6)&&(Xe=null)):(le=null,Xe=te),le!==Xe)){if(at=bp,ve="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(at=Tp,ve="onPointerLeave",j="onPointerEnter",X="pointer"),Xt=le==null?re:q(le),$=Xe==null?re:q(Xe),re=new at(ve,X+"leave",le,a,me),re.target=Xt,re.relatedTarget=$,ve=null,Sa(me)===te&&(at=new at(j,X+"enter",Xe,a,me),at.target=$,at.relatedTarget=Xt,ve=at),Xt=ve,le&&Xe)t:{for(at=Xy,j=le,X=Xe,$=0,ve=j;ve;ve=at(ve))$++;ve=0;for(var $e=X;$e;$e=at($e))ve++;for(;0<$-ve;)j=at(j),$--;for(;0<ve-$;)X=at(X),ve--;for(;$--;){if(j===X||X!==null&&j===X.alternate){at=j;break t}j=at(j),X=at(X)}at=null}else at=null;le!==null&&gg(xe,re,le,at,!1),Xe!==null&&Xt!==null&&gg(xe,Xt,Xe,at,!0)}}e:{if(re=te?q(te):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Dt=Lp;else if(Np(re))if(Pp)Dt=ty;else{Dt=$_;var qe=J_}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&pu(te.elementType)&&(Dt=Lp):Dt=ey;if(Dt&&(Dt=Dt(t,te))){Up(xe,Dt,a,me);break e}qe&&qe(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Sn(re,"number",re.value)}switch(qe=te?q(te):window,t){case"focusin":(Np(qe)||qe.contentEditable==="true")&&(Fr=qe,Ru=te,no=null);break;case"focusout":no=Ru=Fr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Gp(xe,a,me);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Gp(xe,a,me)}var pt;if(Eu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Br?Cp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ap&&a.locale!=="ko"&&(Br||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Br&&(pt=Sp()):(ba=me,yu="value"in ba?ba.value:ba.textContent,Br=!0)),qe=nc(te,Mt),0<qe.length&&(Mt=new Ep(Mt,t,null,a,me),xe.push({event:Mt,listeners:qe}),pt?Mt.data=pt:(pt=Dp(a),pt!==null&&(Mt.data=pt)))),(pt=j_?Y_(t,a):Z_(t,a))&&(Mt=nc(te,"onBeforeInput"),0<Mt.length&&(qe=new Ep("onBeforeInput","beforeinput",null,a,me),xe.push({event:qe,listeners:Mt}),qe.data=pt)),Hy(xe,t,te,a,me)}pg(xe,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ys(t,a),u!=null&&o.unshift(Ro(t,u,d)),u=Ys(t,n),u!=null&&o.push(Ro(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Xy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,V=A.alternate,te=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||te===null||(V=te,u?(te=Ys(a,d),te!=null&&x.unshift(Ro(a,te,V))):u||(te=Ys(a,d),te!=null&&x.push(Ro(a,te,V)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Wy=/\r\n?/g,qy=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(Wy,`
`).replace(qy,"")}function _g(t,n){return n=vg(n),vg(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Di(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Di(t,""+o);break;case"className":wt(t,"class",o);break;case"tabIndex":wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,o);break;case"style":_p(t,o,d);break;case"data":if(n!=="object"){wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ll(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ll(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ll(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=x_.get(a)||a,ht(t,a,o))}}function td(t,n,a,o,u,d){switch(a){case"style":_p(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Di(t,o):(typeof o=="number"||typeof o=="bigint")&&Di(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,d,x,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var A=d=x=u=null,V=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":x=me;break;case"checked":V=me;break;case"defaultChecked":te=me;break;case"value":d=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:kt(t,n,o,me,a,null)}}Zt(t,d,A,V,te,x,u,!1);return;case"select":xt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:kt(t,n,u,A,a,null)}n=d,a=x,t.multiple=!!o,n!=null?gn(t,!!o,n,!1):a!=null&&gn(t,!!o,a,!0);return;case"textarea":xt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:kt(t,n,x,A,a,null)}Tn(t,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,V,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)xt(wo[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,te,o,a,null)}return;default:if(pu(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&td(t,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&kt(t,n,A,o,a,null))}function jy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,V=null,te=null,me=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=xe;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,xe)}}for(var re in o){var le=o[re];if(xe=a[re],o.hasOwnProperty(re)&&(le!=null||xe!=null))switch(re){case"type":d=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":me=le;break;case"value":x=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&kt(t,n,re,le,o,xe)}}Bi(t,x,A,V,te,me,d,u);return;case"select":le=x=A=re=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":le=V;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":re=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==V&&kt(t,n,u,d,o,V)}n=A,a=x,o=le,re!=null?gn(t,!!a,re,!1):!!o!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:kt(t,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&kt(t,n,x,u,o,d)}Mn(t,re,le);return;case"option":for(var Xe in a)if(re=a[Xe],a.hasOwnProperty(Xe)&&re!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:kt(t,n,Xe,null,o,re)}for(V in o)if(re=o[V],le=a[V],o.hasOwnProperty(V)&&re!==le&&(re!=null||le!=null))switch(V){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:kt(t,n,V,re,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)re=a[at],a.hasOwnProperty(at)&&re!=null&&!o.hasOwnProperty(at)&&kt(t,n,at,null,o,re);for(te in o)if(re=o[te],le=a[te],o.hasOwnProperty(te)&&re!==le&&(re!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:kt(t,n,te,re,o,le)}return;default:if(pu(n)){for(var Xt in a)re=a[Xt],a.hasOwnProperty(Xt)&&re!==void 0&&!o.hasOwnProperty(Xt)&&td(t,n,Xt,void 0,o,re);for(me in o)re=o[me],le=a[me],!o.hasOwnProperty(me)||re===le||re===void 0&&le===void 0||td(t,n,me,re,o,le);return}}for(var j in a)re=a[j],a.hasOwnProperty(j)&&re!=null&&!o.hasOwnProperty(j)&&kt(t,n,j,null,o,re);for(xe in o)re=o[xe],le=a[xe],!o.hasOwnProperty(xe)||re===le||re==null&&le==null||kt(t,n,xe,re,o,le)}function yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&yg(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],te=V.startTime;if(te>A)break;var me=V.transferSize,xe=V.initiatorType;me&&yg(xe)&&(V=V.responseEnd,x+=me*(V<A?1:(A-te)/(V-te)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function Zy(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(Jy)}:Mg;function Jy(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function Eg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[ar]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Co(t.ownerDocument.body);a=u}while(a);ds(n)}function Tg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $y(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function ex(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Rg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Cg(t,n,a){switch(n=ic(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);js(t)}var hi=new Map,Dg=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=J.d;J.d={f:nx,r:ix,D:ax,C:rx,L:sx,m:ox,X:cx,S:lx,M:ux};function nx(){var t=na.f(),n=Zl();return t||n}function ix(t){var n=D(t);n!==null&&n.tag===5&&n.type==="form"?jm(n):na.r(t)}var cs=typeof document>"u"?null:document;function Ng(t,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Dg.has(u)||(Dg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),ne(n),o.head.appendChild(n)))}}function ax(t){na.D(t),Ng("dns-prefetch",t,null)}function rx(t,n){na.C(t,n),Ng("preconnect",t,n)}function sx(t,n,a){na.L(t,n,a);var o=cs;if(o&&t&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Yt(a.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var d=u;switch(n){case"style":d=us(t);break;case"script":d=fs(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Cn(n,"link",t),ne(n),o.head.appendChild(n)))}}function ox(t,n){na.m(t,n);var a=cs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Cn(o,"link",t),ne(o),a.head.appendChild(o)}}}function lx(t,n,a){na.S(t,n,a);var o=cs;if(o&&t){var u=oe(o).hoistableStyles,d=us(t);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Do(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&ud(t,a);var V=x=o.createElement("link");ne(V),Cn(V,"link",t),V._p=new Promise(function(te,me){V.onload=te,V.onerror=me}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,rc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function cx(t,n){na.X(t,n);var a=cs;if(a&&t){var o=oe(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&fd(t,n),d=a.createElement("script"),ne(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ux(t,n){na.M(t,n);var a=cs;if(a&&t){var o=oe(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&fd(t,n),d=a.createElement("script"),ne(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ug(t,n,a,o){var u=(u=ae.current)?ac(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=oe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var d=oe(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Do(t)))&&!d._p&&(x.instance=d,x.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||fx(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=oe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+Yt(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function Lg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function fx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),ne(n),t.head.appendChild(n))}function fs(t){return'[src="'+Yt(t)+'"]'}function No(t){return"script[async]"+t}function Pg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,ne(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ne(o),Cn(o,"style",u),rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=us(a.href);var d=t.querySelector(Do(u));if(d)return n.state.loading|=4,n.instance=d,ne(d),d;o=Lg(a),(u=hi.get(u))&&ud(o,u),d=(t.ownerDocument||t).createElement("link"),ne(d);var x=d;return x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),Cn(d,"link",o),n.state.loading|=4,rc(d,a.precedence,t),n.instance=d;case"script":return d=fs(a.src),(u=t.querySelector(No(d)))?(n.instance=u,ne(u),u):(o=a,(u=hi.get(d))&&(o=g({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ne(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,t));return n.instance}function rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function Og(t,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ar]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function Ig(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hx(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(o.href),d=n.querySelector(Do(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=oc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,ne(d);return}d=n.ownerDocument||n,o=Lg(o),(u=hi.get(u))&&ud(o,u),d=d.createElement("link"),ne(d);var x=d;x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=oc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function px(t,n){return t.stylesheets&&t.count===0&&cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*Yy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(mx,t),lc=null,oc.call(t))}function mx(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var o=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:C,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function gx(t,n,a,o,u,d,x,A,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Bg(t,n,a,o,u,d,x,A,V,te,me,xe){return t=new gx(t,n,a,x,V,te,me,xe,A),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),t.current=d,d.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),t}function Fg(t){return t?(t=Gr,t):Gr}function Hg(t,n,a,o,u,d){u=Fg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ca(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Da(t,o,n),a!==null&&(Xn(a,t,n),co(a,t,n))}function Vg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){Vg(t,n),(t=t.alternate)&&Vg(t,n)}function Gg(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Xn(n,t,67108864),hd(t,67108864)}}function kg(t){if(t.tag===13||t.tag===31){var n=ni();n=xi(n);var a=lr(t,n);a!==null&&Xn(a,t,n),hd(t,n)}}var uc=!0;function vx(t,n,a,o){var u=I.T;I.T=null;var d=J.p;try{J.p=2,pd(t,n,a,o)}finally{J.p=d,I.T=u}}function _x(t,n,a,o){var u=I.T;I.T=null;var d=J.p;try{J.p=8,pd(t,n,a,o)}finally{J.p=d,I.T=u}}function pd(t,n,a,o){if(uc){var u=md(o);if(u===null)ed(t,n,o,fc,a),Wg(t,o);else if(xx(u,t,n,a,o))o.stopPropagation();else if(Wg(t,o),n&4&&-1<yx.indexOf(t)){for(;u!==null;){var d=D(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Te(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var V=1<<31-We(x);A.entanglements[1]|=V,x&=~V}Pi(d),(Ot&6)===0&&(jl=T()+500,Ao(0))}}break;case 31:case 13:A=lr(d,2),A!==null&&Xn(A,d,2),Zl(),hd(d,2)}if(d=md(o),d===null&&ed(t,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=gu(t),gd(t)}var fc=null;function gd(t){if(fc=null,t=Sa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function Xg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ye:return 2;case Me:return 8;case he:case Ke:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var vd=!1,Va=null,Ga=null,ka=null,Lo=new Map,Po=new Map,Xa=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Oo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=D(n),n!==null&&Gg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xx(t,n,a,o,u){switch(n){case"focusin":return Va=Oo(Va,t,n,a,o,u),!0;case"dragenter":return Ga=Oo(Ga,t,n,a,o,u),!0;case"mouseover":return ka=Oo(ka,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,Oo(Lo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Po.set(d,Oo(Po.get(d)||null,t,n,a,o,u)),!0}return!1}function qg(t){var n=Sa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,qs(t.priority,function(){kg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qs(t.priority,function(){kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=D(a),n!==null&&Gg(n),t.blockedOn=a,!1;n.shift()}return!0}function jg(t,n,a){dc(t)&&a.delete(n)}function Sx(){vd=!1,Va!==null&&dc(Va)&&(Va=null),Ga!==null&&dc(Ga)&&(Ga=null),ka!==null&&dc(ka)&&(ka=null),Lo.forEach(jg),Po.forEach(jg)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Sx)))}var pc=null;function Yg(t){pc!==t&&(pc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=D(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ds(t){function n(V){return hc(V,t)}Va!==null&&hc(Va,t),Ga!==null&&hc(Ga,t),ka!==null&&hc(ka,t),Lo.forEach(n),Po.forEach(n);for(var a=0;a<Xa.length;a++){var o=Xa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)qg(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[mn]||null;if(typeof d=="function")x||Yg(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[mn]||null)A=x.formAction;else if(gd(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Yg(a)}}}function Zg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}mc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Hg(a,o,t,n,null,null)},mc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Hg(t.current,2,null,t,null,null),Zl(),n[zi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&qg(t)}};var Kg=e.version;if(Kg!=="19.2.1")throw Error(r(527,Kg,"19.2.1"));J.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Mx={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{be=gc.inject(Mx),Ae=gc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=i0,d=a0,x=r0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Bg(t,1,!1,null,null,a,o,null,u,d,x,Zg),t[zi]=n.current,$f(t),new _d(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=i0,x=a0,A=r0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Bg(t,1,!0,n,a??null,o,u,V,d,x,A,Zg),n.context=Fg(null),a=n.current,o=ni(),o=xi(o),u=Ca(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Pi(n),t[zi]=n.current,$f(t),new mc(n)},zo.version="19.2.1",zo}var s1;function Px(){if(s1)return Sd.exports;s1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=Lx(),Sd.exports}var Ox=Px();var o1="popstate";function Ix(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Lr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),ah("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:jo(c))}function r(l,c){yi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Bx(e,i,r,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function yi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zx(){return Math.random().toString(36).substring(2,10)}function l1(s,e){return{usr:s.state,key:s.key,idx:e}}function ah(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Lr(e):e,state:i,key:e&&e.key||r||zx()}}function jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Lr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Bx(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:E.location,delta:_})}function y(S,_){h="PUSH";let R=ah(E.location,S,_);i&&i(R,S),p=v()+1;let C=l1(R,p),L=E.createHref(R);try{f.pushState(C,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(L)}c&&m&&m({action:h,location:E.location,delta:1})}function M(S,_){h="REPLACE";let R=ah(E.location,S,_);i&&i(R,S),p=v();let C=l1(R,p),L=E.createHref(R);f.replaceState(C,"",L),c&&m&&m({action:h,location:E.location,delta:0})}function b(S){return Fx(S)}let E={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(o1,g),m=S,()=>{l.removeEventListener(o1,g),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:M,go(S){return f.go(S)}};return E}function Fx(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Ev(s,e,i="/"){return Hx(s,e,i,!1)}function Hx(s,e,i,r){let l=typeof e=="string"?Lr(e):e,c=ga(l.pathname||"/",i);if(c==null)return null;let f=Tv(s);Vx(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Jx(c);h=Kx(f[m],p,r)}return h}function Tv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;$t(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=ha([r,v.relativePath]),y=i.concat(v);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Tv(f.children,e,y,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:Yx(g,f.index),routesMeta:y})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Av(f.path))c(f,h,!0,m)}),e}function Av(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Av(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Vx(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Zx(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Gx=/^:[\w-]+$/,kx=3,Xx=2,Wx=1,qx=10,jx=-2,c1=s=>s==="*";function Yx(s,e){let i=s.split("/"),r=i.length;return i.some(c1)&&(r+=jx),e&&(r+=Xx),i.filter(l=>!c1(l)).reduce((l,c)=>l+(Gx.test(c)?kx:c===""?Wx:qx),r)}function Zx(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Kx(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),y=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ha([c,g.pathname]),pathnameBase:iS(ha([c,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(c=ha([c,g.pathnameBase]))}return f}function eu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Qx(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},y)=>{if(v==="*"){let b=h[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[y];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function Qx(s,e=!1,i=!0){yi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Jx(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ga(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var $x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eS=s=>$x.test(s);function tS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Lr(s):s,c;if(i)if(eS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),yi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=u1(i.substring(1),"/"):c=u1(i,e)}else c=e;return{pathname:c,search:aS(r),hash:rS(l)}}function u1(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Td(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function wv(s){let e=nS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Rv(s,e,i,r=!1){let l;typeof s=="string"?l=Lr(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),Td("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Td("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Td("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),g-=1;l.pathname=y.join("/")}h=g>=0?e[g]:"/"}let m=tS(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ha=s=>s.join("/").replace(/\/\/+/g,"/"),iS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),aS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function oS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cv=["POST","PUT","PATCH","DELETE"];new Set(Cv);var lS=["GET",...Cv];new Set(lS);var Is=ie.createContext(null);Is.displayName="DataRouter";var su=ie.createContext(null);su.displayName="DataRouterState";ie.createContext(!1);var Dv=ie.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var cS=ie.createContext(new Map);cS.displayName="Fetchers";var uS=ie.createContext(null);uS.displayName="Await";var Ci=ie.createContext(null);Ci.displayName="Navigation";var el=ie.createContext(null);el.displayName="Location";var xa=ie.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Jh=ie.createContext(null);Jh.displayName="RouteError";function fS(s,{relative:e}={}){$t(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ie.useContext(Ci),{hash:l,pathname:c,search:f}=nl(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ha([i,c])),r.createHref({pathname:h,search:f,hash:l})}function tl(){return ie.useContext(el)!=null}function Pr(){return $t(tl(),"useLocation() may be used only in the context of a <Router> component."),ie.useContext(el).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uv(s){ie.useContext(Ci).static||ie.useLayoutEffect(s)}function Lv(){let{isDataRoute:s}=ie.useContext(xa);return s?ES():dS()}function dS(){$t(tl(),"useNavigate() may be used only in the context of a <Router> component.");let s=ie.useContext(Is),{basename:e,navigator:i}=ie.useContext(Ci),{matches:r}=ie.useContext(xa),{pathname:l}=Pr(),c=JSON.stringify(wv(r)),f=ie.useRef(!1);return Uv(()=>{f.current=!0}),ie.useCallback((m,p={})=>{if(yi(f.current,Nv),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Rv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ha([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}ie.createContext(null);function nl(s,{relative:e}={}){let{matches:i}=ie.useContext(xa),{pathname:r}=Pr(),l=JSON.stringify(wv(i));return ie.useMemo(()=>Rv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function hS(s,e){return Pv(s,e)}function Pv(s,e,i,r,l){$t(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ie.useContext(Ci),{matches:f}=ie.useContext(xa),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let R=g&&g.path||"";Ov(p,!g||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let y=Pr(),M;if(e){let R=typeof e=="string"?Lr(e):e;$t(v==="/"||R.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${R.pathname}" was given in the \`location\` prop.`),M=R}else M=y;let b=M.pathname||"/",E=b;if(v!=="/"){let R=v.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=Ev(s,{pathname:E});yi(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),yi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=_S(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:ha([v,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?v:ha([v,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,r,l);return e&&_?ie.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function pS(){let s=bS(),e=sS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ie.createElement(ie.Fragment,null,ie.createElement("p",null,"💿 Hey developer 👋"),ie.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ie.createElement("code",{style:c},"ErrorBoundary")," or"," ",ie.createElement("code",{style:c},"errorElement")," prop on your route.")),ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),i?ie.createElement("pre",{style:l},i):null,f)}var mS=ie.createElement(pS,null),gS=class extends ie.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?ie.createElement(xa.Provider,{value:this.props.routeContext},ie.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vS({routeContext:s,match:e,children:i}){let r=ie.useContext(Is);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ie.createElement(xa.Provider,{value:s},i)}function _S(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$t(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:y,errors:M}=i,b=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:oS(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,y)=>{let M,b=!1,E=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||mS,h&&(m<0&&y===0?(Ov("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):m===y&&(b=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,y+1)),R=()=>{let C;return M?C=E:b?C=S:g.route.Component?C=ie.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=v,ie.createElement(vS,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:C})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?ie.createElement(gS,{location:i.location,revalidation:i.revalidation,component:E,error:M,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):R()},null)}function $h(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yS(s){let e=ie.useContext(Is);return $t(e,$h(s)),e}function xS(s){let e=ie.useContext(su);return $t(e,$h(s)),e}function SS(s){let e=ie.useContext(xa);return $t(e,$h(s)),e}function ep(s){let e=SS(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function MS(){return ep("useRouteId")}function bS(){let s=ie.useContext(Jh),e=xS("useRouteError"),i=ep("useRouteError");return s!==void 0?s:e.errors?.[i]}function ES(){let{router:s}=yS("useNavigate"),e=ep("useNavigate"),i=ie.useRef(!1);return Uv(()=>{i.current=!0}),ie.useCallback(async(l,c={})=>{yi(i.current,Nv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var f1={};function Ov(s,e,i){!e&&!f1[s]&&(f1[s]=!0,yi(!1,i))}ie.memo(TS);function TS({routes:s,future:e,state:i,unstable_onError:r}){return Pv(s,void 0,i,r,e)}function qc(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=ie.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Lr(i));let{pathname:p="/",search:v="",hash:g="",state:y=null,key:M="default"}=i,b=ie.useMemo(()=>{let E=ga(p,h);return E==null?null:{location:{pathname:E,search:v,hash:g,state:y,key:M},navigationType:r}},[h,p,v,g,y,M,r]);return yi(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ie.createElement(Ci.Provider,{value:m},ie.createElement(el.Provider,{children:e,value:b}))}function wS({children:s,location:e}){return hS(rh(s),e)}function rh(s,e=[]){let i=[];return ie.Children.forEach(s,(r,l)=>{if(!ie.isValidElement(r))return;let c=[...e,l];if(r.type===ie.Fragment){i.push.apply(i,rh(r.props.children,c));return}$t(r.type===qc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=rh(r.props.children,c)),i.push(f)}),i}var jc="get",Yc="application/x-www-form-urlencoded";function ou(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function RS(s){return ou(s)&&s.tagName.toLowerCase()==="button"}function CS(s){return ou(s)&&s.tagName.toLowerCase()==="form"}function DS(s){return ou(s)&&s.tagName.toLowerCase()==="input"}function NS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function US(s,e){return s.button===0&&(!e||e==="_self")&&!NS(s)}var vc=null;function LS(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var PS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(s){return s!=null&&!PS.has(s)?(yi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):s}function OS(s,e){let i,r,l,c,f;if(CS(s)){let h=s.getAttribute("action");r=h?ga(h,e):null,i=s.getAttribute("method")||jc,l=Ad(s.getAttribute("enctype"))||Yc,c=new FormData(s)}else if(RS(s)||DS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||jc,l=Ad(s.getAttribute("formenctype"))||Ad(h.getAttribute("enctype"))||Yc,c=new FormData(h,s),!LS()){let{name:p,type:v,value:g}=s;if(v==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,g)}}else{if(ou(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=jc,r=null,l=Yc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function IS(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function zS(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function FS(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await zS(c,i);return f.links?f.links():[]}return[]}));return kS(r.flat(1).filter(BS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function d1(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function HS(s,e,{includeHydrateFallback:i}={}){return VS(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function VS(s){return[...new Set(s)]}function GS(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function kS(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(GS(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Iv(){let s=ie.useContext(Is);return tp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function XS(){let s=ie.useContext(su);return tp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var np=ie.createContext(void 0);np.displayName="FrameworkContext";function zv(){let s=ie.useContext(np);return tp(s,"You must render this element inside a <HydratedRouter> element"),s}function WS(s,e){let i=ie.useContext(np),[r,l]=ie.useState(!1),[c,f]=ie.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,y=ie.useRef(null);ie.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let E=_=>{_.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[s]),ie.useEffect(()=>{if(r){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Bo(h,M),onBlur:Bo(m,b),onMouseEnter:Bo(p,M),onMouseLeave:Bo(v,b),onTouchStart:Bo(g,M)}]:[!1,y,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function qS({page:s,...e}){let{router:i}=Iv(),r=ie.useMemo(()=>Ev(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ie.createElement(YS,{page:s,matches:r,...e}):null}function jS(s){let{manifest:e,routeModules:i}=zv(),[r,l]=ie.useState([]);return ie.useEffect(()=>{let c=!1;return FS(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function YS({page:s,matches:e,...i}){let r=Pr(),{manifest:l,routeModules:c}=zv(),{basename:f}=Iv(),{loaderData:h,matches:m}=XS(),p=ie.useMemo(()=>d1(s,e,m,l,r,"data"),[s,e,m,l,r]),v=ie.useMemo(()=>d1(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=ie.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,E=!1;if(e.forEach(_=>{let R=l.routes[_.route.id];!R||!R.hasLoader||(!p.some(C=>C.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||R.hasClientLoader?E=!0:b.add(_.route.id))}),b.size===0)return[];let S=IS(s,f,"data");return E&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),y=ie.useMemo(()=>HS(v,l),[v,l]),M=jS(v);return ie.createElement(ie.Fragment,null,g.map(b=>ie.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>ie.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:E})=>ie.createElement("link",{key:b,nonce:i.nonce,...E})))}function ZS(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bv&&(window.__reactRouterVersion="7.10.1")}catch{}function KS({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=ie.useRef();l.current==null&&(l.current=Ix({window:r,v5Compat:!0}));let c=l.current,[f,h]=ie.useState({action:c.action,location:c.location}),m=ie.useCallback(p=>{i===!1?h(p):ie.startTransition(()=>h(p))},[i]);return ie.useLayoutEffect(()=>c.listen(m),[c,m]),ie.createElement(AS,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hv=ie.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,...y},M){let{basename:b,unstable_useTransitions:E}=ie.useContext(Ci),S=typeof p=="string"&&Fv.test(p),_,R=!1;if(typeof p=="string"&&S&&(_=p,Bv))try{let w=new URL(window.location.href),G=p.startsWith("//")?new URL(w.protocol+p):new URL(p),K=ga(G.pathname,b);G.origin===w.origin&&K!=null?p=K+G.search+G.hash:R=!0}catch{yi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=fS(p,{relative:l}),[L,B,U]=WS(r,y),O=eM(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_useTransitions:E});function W(w){e&&e(w),w.defaultPrevented||O(w)}let N=ie.createElement("a",{...y,...U,href:_||C,onClick:R||c?e:W,ref:ZS(M,B),target:m,"data-discover":!S&&i==="render"?"true":void 0});return L&&!S?ie.createElement(ie.Fragment,null,N,ie.createElement(qS,{page:C})):N});Hv.displayName="Link";var QS=ie.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=nl(f,{relative:p.relative}),y=Pr(),M=ie.useContext(su),{navigator:b,basename:E}=ie.useContext(Ci),S=M!=null&&rM(g)&&h===!0,_=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,R=y.pathname,C=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(R=R.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&E&&(C=ga(C,E)||C);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=R===_||!l&&R.startsWith(_)&&R.charAt(L)==="/",U=C!=null&&(C===_||!l&&C.startsWith(_)&&C.charAt(_.length)==="/"),O={isActive:B,isPending:U,isTransitioning:S},W=B?e:void 0,N;typeof r=="function"?N=r(O):N=[r,B?"active":null,U?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(O):c;return ie.createElement(Hv,{...p,"aria-current":W,className:N,ref:v,style:w,to:f,viewTransition:h},typeof m=="function"?m(O):m)});QS.displayName="NavLink";var JS=ie.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=jc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,...y},M)=>{let{unstable_useTransitions:b}=ie.useContext(Ci),E=iM(),S=aM(h,{relative:p}),_=f.toLowerCase()==="get"?"get":"post",R=typeof h=="string"&&Fv.test(h),C=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let B=L.nativeEvent.submitter,U=B?.getAttribute("formmethod")||f,O=()=>E(B||L.currentTarget,{fetcherKey:e,method:U,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g});b&&i!==!1?ie.startTransition(()=>O()):O()};return ie.createElement("form",{ref:M,method:_,action:S,onSubmit:r?m:C,...y,"data-discover":!R&&s==="render"?"true":void 0})});JS.displayName="Form";function $S(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vv(s){let e=ie.useContext(Is);return $t(e,$S(s)),e}function eM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=Lv(),p=Pr(),v=nl(s,{relative:c});return ie.useCallback(g=>{if(US(g,e)){g.preventDefault();let y=i!==void 0?i:jo(p)===jo(v),M=()=>m(s,{replace:y,state:r,preventScrollReset:l,relative:c,viewTransition:f});h?ie.startTransition(()=>M()):M()}},[p,m,v,i,r,e,s,l,c,f,h])}var tM=0,nM=()=>`__${String(++tM)}__`;function iM(){let{router:s}=Vv("useSubmit"),{basename:e}=ie.useContext(Ci),i=MS(),r=s.fetch,l=s.navigate;return ie.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=OS(c,e);if(f.navigate===!1){let y=f.fetcherKey||nM();await r(y,i,f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function aM(s,{relative:e}={}){let{basename:i}=ie.useContext(Ci),r=ie.useContext(xa);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...nl(s||".",{relative:e})},f=Pr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ha([i,c.pathname])),jo(c)}function rM(s,{relative:e}={}){let i=ie.useContext(Dv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vv("useViewTransitionState"),l=nl(s,{relative:e});if(!i.isTransitioning)return!1;let c=ga(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,r)||i.nextLocation.pathname;return eu(l.pathname,f)!=null||eu(l.pathname,c)!=null}const sM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),h1=s=>{const e=oM(s);return e.charAt(0).toUpperCase()+e.slice(1)},Gv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),lM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var cM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uM=ie.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>ie.createElement("svg",{ref:m,...cM,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Gv("lucide",l),...!c&&!lM(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>ie.createElement(p,v)),...Array.isArray(c)?c:[c]]));const nn=(s,e)=>{const i=ie.forwardRef(({className:r,...l},c)=>ie.createElement(uM,{ref:c,iconNode:e,className:Gv(`lucide-${sM(h1(s))}`,`lucide-${s}`,r),...l}));return i.displayName=h1(s),i};const fM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],p1=nn("arrow-right",fM);const dM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],sh=nn("book-open",dM);const hM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pM=nn("check",hM);const mM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gM=nn("circle-alert",mM);const vM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_M=nn("circle-question-mark",vM);const yM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xM=nn("external-link",yM);const SM=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],m1=nn("eye",SM);const MM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],bM=nn("file-text",MM);const EM=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],g1=nn("house",EM);const TM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],AM=nn("info",TM);const wM=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],v1=nn("keyboard",wM);const RM=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],CM=nn("languages",RM);const DM=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],NM=nn("lightbulb",DM);const UM=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],LM=nn("mouse-pointer-2",UM);const PM=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],OM=nn("move",PM);const IM=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wd=nn("play",IM);const zM=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],BM=nn("repeat",zM);const FM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],HM=nn("rotate-ccw",FM);const VM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],GM=nn("sparkles",VM);const kM=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],XM=nn("tag",kM);const WM=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],qM=nn("trophy",WM);const jM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kv=nn("x",jM),YM=()=>[{id:"networkquiz",title:"NETWORK QUIZ",subtitle:"Learning Game",description:"109개의 필수 네트워크 약어를 게임 형식으로 학습할 수 있습니다. 퀴즈 모드와 무한 단어장 모드로 효과적으로 암기하세요.",icon:sh,x:300,y:100,size:"md",link:"/network-quiz",image:"https://images.unsplash.com/photo-1562883676-8c6fbf064050?auto=format&fit=crop&q=80&w=800"},{id:"neonspace",title:"NEON SPACE",subtitle:"Interactive Art",description:"네온 글로우 효과와 상호작용 애니메이션을 통한 시각적 예술 공간입니다. 창의적인 UI/UX 표현의 경계를 탐험합니다.",icon:GM,x:-200,y:200,size:"md",link:"/neonspace",image:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800"}],_1=YM(),ZM=({panX:s,panY:e,scale:i})=>{const r=ie.useRef(null),l=ie.useRef({panX:s,panY:e,scale:i});return ie.useEffect(()=>{l.current={panX:s,panY:e,scale:i}},[s,e,i]),ie.useEffect(()=>{const c=r.current;if(!c)return;const f=c.getContext("2d");if(!f)return;let h=window.innerWidth,m=window.innerHeight;c.width=h,c.height=m;const p=Array.from({length:500},()=>({x:Math.random()*h,y:Math.random()*m,z:Math.random()*2+.5,radius:Math.random()*1.5,alpha:Math.random()}));let v;const g=()=>{f.clearRect(0,0,h,m);const M=f.createLinearGradient(0,0,0,m);M.addColorStop(0,"#02020a"),M.addColorStop(1,"#000000"),f.fillStyle=M,f.fillRect(0,0,h,m);const{panX:b,panY:E,scale:S}=l.current;p.forEach(_=>{const R=b*.05*_.z,C=E*.05*_.z;let L=(_.x+R)%h,B=(_.y+C)%m;L<0&&(L+=h),B<0&&(B+=m),f.beginPath(),f.arc(L,B,_.radius*(S*.5+.5),0,Math.PI*2);const U=Math.sin(Date.now()*.003*_.z+_.x),O=Math.max(.1,Math.min(1,_.alpha+U*.2));f.fillStyle=`rgba(255, 255, 255, ${O})`,f.fill()}),v=requestAnimationFrame(g)};g();const y=()=>{h=window.innerWidth,m=window.innerHeight,c.width=h,c.height=m};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),cancelAnimationFrame(v)}},[]),F.jsx("canvas",{ref:r,className:"absolute inset-0 z-0 pointer-events-none"})},KM=Rx.memo(({data:s,isSelected:e,onClick:i})=>{const r={sm:"w-24 h-24 text-xs",md:"w-32 h-32 text-sm",lg:"w-48 h-48 text-base"},l={sm:24,md:32,lg:48};return F.jsx("div",{className:`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
        ${e?"z-30":"z-10 hover:z-20"}
      `,style:{transform:`translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`},onClick:c=>{c.stopPropagation(),i(s)},children:F.jsxs("div",{className:`transition-transform duration-500 ${e?"scale-150":"hover:scale-110 animate-float-slow"}`,children:[F.jsx("div",{className:`absolute inset-0 rounded-full blur-xl transition-all duration-500
          ${e?"bg-white/50 scale-125":"bg-white/10 opacity-0 group-hover:opacity-40 group-hover:scale-110"}
        `}),F.jsxs("div",{className:`
          relative flex flex-col items-center justify-center rounded-full border overflow-hidden
          backdrop-blur-md shadow-2xl transition-all duration-500
          ${r[s.size]}
          ${e?"bg-black/80 border-white text-white shadow-[0_0_50px_rgba(255,255,255,0.6)]":"bg-black/30 border-white/30 text-gray-300 hover:border-white/70 hover:text-white hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"}
        `,children:[F.jsx("div",{className:`absolute inset-0 bg-cover bg-center transition-opacity duration-500 
              ${e?"opacity-40":"opacity-30 group-hover:opacity-50"}`,style:{backgroundImage:`url(${s.image})`}}),F.jsx("div",{className:`absolute inset-0 bg-black/60 transition-opacity duration-500 ${e?"bg-black/70":""}`}),F.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[F.jsx(s.icon,{size:l[s.size],strokeWidth:1.5,className:"mb-2 drop-shadow-lg"}),F.jsx("span",{className:"font-mono tracking-wider font-bold text-center px-2 opacity-90 select-none drop-shadow-md",children:s.title})]}),e&&F.jsx("div",{className:"absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow pointer-events-none z-20"})]})]})})}),QM=({data:s,onClose:e,onNavigate:i})=>{const r=l=>{const c=s?.link||"";c.startsWith("/")&&(l.preventDefault(),i?.(c))};return F.jsx("div",{className:`
      fixed inset-y-0 left-0 z-40 h-full flex flex-col justify-center
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
      ${s?"w-full md:w-[55%] opacity-100 translate-x-0":"w-0 opacity-0 -translate-x-20"}
    `,children:s&&F.jsxs("div",{className:"pointer-events-auto h-full w-full bg-black/80 backdrop-blur-2xl border-r border-white/20 flex flex-col justify-center relative overflow-hidden",style:{boxShadow:"20px 0 50px rgba(0,0,0,0.5)"},children:[F.jsxs("div",{className:"absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden",children:[F.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[20s] ease-linear",style:{backgroundImage:`url(${s.image})`}}),F.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"})]}),F.jsxs("button",{onClick:e,className:"absolute top-8 left-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2 group",children:[F.jsx("div",{className:"p-2 bg-black/40 border border-white/10 rounded-full group-hover:bg-white/20 transition-colors backdrop-blur-sm",children:F.jsx(kv,{size:24})}),F.jsx("span",{className:"text-sm font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded",children:"CLOSE"})]}),F.jsxs("div",{className:"relative z-10 px-8 md:px-16 animate-slide-in-up mt-20",children:[F.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[F.jsx("div",{className:"p-4 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm",children:F.jsx(s.icon,{size:48,className:"text-white"})}),F.jsxs("div",{children:[F.jsxs("div",{className:"text-xs font-mono text-white/70 mb-1 border-b border-white/20 inline-block pb-1",children:["ID: ",s.id.toUpperCase()]}),F.jsx("h2",{className:"text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",children:s.title})]})]}),F.jsx("p",{className:"text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase mb-8 pl-1 border-l-2 border-white/50 drop-shadow-md",children:s.subtitle}),F.jsx("div",{className:"text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm",children:s.description}),F.jsxs("a",{href:s.link,onClick:r,target:s.link.startsWith("/")?void 0:"_blank",rel:s.link.startsWith("/")?void 0:"noopener noreferrer",className:"group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] hover:bg-gray-200 transition-all overflow-hidden rounded-sm",children:[F.jsx("span",{className:"relative z-10 mr-4",children:"INITIATE CONNECTION"}),F.jsx(xM,{size:20,className:"relative z-10 group-hover:translate-x-1 transition-transform"}),F.jsx("div",{className:"absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"})]})]})]})})},JM=()=>{const s=Lv(),[e,i]=ie.useState(null),[r,l]=ie.useState({x:0,y:0}),[c,f]=ie.useState(1),[h,m]=ie.useState(!1),p=ie.useRef({x:0,y:0}),v=ie.useRef({x:0,y:0}),g=ie.useCallback(E=>{const _=-E.deltaY*.001;f(R=>{const C=R+_;return Math.min(Math.max(C,.3),3)})},[]),y=E=>{e||(m(!0),p.current={x:E.clientX,y:E.clientY},v.current={...r})},M=E=>{if(!h||e)return;const S=E.clientX-p.current.x,_=E.clientY-p.current.y;l({x:v.current.x+S,y:v.current.y+_})},b=()=>m(!1);return ie.useEffect(()=>{if(e){const E=window.innerWidth*.75,S=window.innerHeight*.5,_=window.innerWidth/2,R=window.innerHeight/2,C=(E-_)/c-e.x,L=(S-R)/c-e.y;l({x:C,y:L})}},[e,c]),F.jsxs("div",{className:`relative w-full h-screen bg-black overflow-hidden font-sans select-none 
        ${h?"cursor-grabbing":e?"cursor-default":"cursor-grab"}
      `,onMouseDown:y,onMouseMove:M,onMouseUp:b,onMouseLeave:b,onWheel:g,children:[F.jsx("style",{children:`
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
      `}),F.jsx(ZM,{panX:r.x,panY:r.y,scale:c}),F.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"}),F.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1]"}),F.jsxs("div",{className:"absolute top-1/2 left-1/2 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",style:{transform:`translate(-50%, -50%) scale(${c}) translate(${r.x}px, ${r.y}px)`},children:[F.jsx("div",{className:"absolute -top-[500px] left-0 -translate-x-1/2 w-[1500px] text-center pointer-events-none z-0 opacity-10 select-none",children:F.jsx("h1",{className:"text-[200px] font-black text-white tracking-[0.2em] blur-[4px]",children:"UNIVERSE"})}),_1.map(E=>F.jsx(KM,{data:E,isSelected:e?.id===E.id,onClick:i},E.id)),F.jsx("svg",{className:"absolute top-0 left-0 overflow-visible pointer-events-none z-0 opacity-10",children:_1.map((E,S)=>S<5&&F.jsx("line",{x1:0,y1:0,x2:E.x,y2:E.y,stroke:"white",strokeWidth:"2",strokeDasharray:"10,10"},`line-${S}`))}),F.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"}),F.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full"})]}),F.jsxs("header",{className:`absolute top-8 left-0 w-full text-center pointer-events-none z-30 transition-opacity duration-500 ${e?"opacity-0":"opacity-100"}`,children:[F.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white tracking-[0.2em]",style:{textShadow:"0 0 30px rgba(255,255,255,0.2)"},children:"NEXUS"}),F.jsxs("div",{className:"mt-4 flex justify-center gap-4",children:[F.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"SCROLL TO ZOOM"}),F.jsx("span",{className:"text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm",children:"DRAG TO MOVE"})]})]}),F.jsx(QM,{data:e,onClose:()=>i(null),onNavigate:s}),F.jsxs("div",{className:`absolute bottom-6 right-8 z-30 text-right font-mono text-[10px] text-white/30 transition-opacity ${e?"opacity-0":"opacity-100"}`,children:[F.jsxs("div",{className:"mb-1",children:["POS X: ",Math.round(-r.x)]}),F.jsxs("div",{className:"mb-1",children:["POS Y: ",Math.round(-r.y)]}),F.jsxs("div",{children:["ZOOM: ",Math.round(c*100),"%"]})]})]})},$M=()=>{const s=[{id:1,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 네트워크를 정의하고 제어하는 기술"},{id:2,acronym:"TCAM",fullTerm:"Ternary Content Addressable Memory",desc:"0, 1, X 세 가지 상태를 저장하는 고속 검색 메모리"},{id:3,acronym:"SNMP",fullTerm:"Simple Network Management Protocol",desc:"네트워크 장비를 간단하게 관리하고 감시하는 프로토콜"},{id:4,acronym:"VBR",fullTerm:"Variable Bit Rate",desc:"전송률이 상황에 따라 변하는 방식"},{id:5,acronym:"ICMP",fullTerm:"Internet Control Message Protocol",desc:"인터넷 제어 메시지(오류 보고, Ping 등)를 보내는 프로토콜"},{id:6,acronym:"OSPF",fullTerm:"Open Shortest Path First",desc:"개방형 최단 경로 우선 라우팅 프로토콜"},{id:7,acronym:"ATM",fullTerm:"Asynchronous Transfer Mode",desc:"비동기 전송 모드 (셀 단위 전송)"},{id:8,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체에 접근을 제어하는 고유 물리 주소"},{id:9,acronym:"DPI",fullTerm:"Deep Packet Inspection",desc:"패킷의 내용까지 깊게 검사하는 기술"},{id:10,acronym:"RIP",fullTerm:"Routing Information Protocol",desc:"라우팅 정보를 홉 수 기반으로 교환하는 프로토콜"},{id:11,acronym:"ASN",fullTerm:"Autonomous System Number",desc:"자율 시스템(AS)을 식별하는 고유 번호"},{id:12,acronym:"ISIS",fullTerm:"Intermediate System to Intermediate System",desc:"중간 시스템(라우터) 끼리의 라우팅 프로토콜"},{id:13,acronym:"EIGRP",fullTerm:"Enhanced Interior Gateway Routing Protocol",desc:"향상된 내부 게이트웨이 라우팅 (Cisco 전용)"},{id:14,acronym:"MOSPF",fullTerm:"Multicast Open Shortest Path First",desc:"멀티캐스트를 지원하는 OSPF"},{id:15,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 운영체제 (SDN 컨트롤러)"},{id:16,acronym:"NAT",fullTerm:"Network Address Translation",desc:"네트워크 주소(IP)를 변환하는 기술"},{id:17,acronym:"OFC",fullTerm:"Optical Fiber Cable",desc:"광 섬유 케이블"},{id:18,acronym:"PDU",fullTerm:"Protocol Data Unit",desc:"프로토콜에서 처리하는 데이터의 단위"},{id:19,acronym:"NCS",fullTerm:"Network Control System",desc:"네트워크를 제어하는 시스템"},{id:20,acronym:"ONF",fullTerm:"Open Networking Foundation",desc:"개방형 네트워킹 표준화 재단"},{id:21,acronym:"WFQ",fullTerm:"Weighted Fair Queuing",desc:"가중치를 두어 공평하게 처리하는 큐 방식"},{id:22,acronym:"NCP",fullTerm:"Network Control Protocol",desc:"네트워크 계층을 제어/설정하는 프로토콜"},{id:23,acronym:"CBR",fullTerm:"Constant Bit Rate",desc:"전송률이 일정하게 고정된 방식"},{id:24,acronym:"SOHO",fullTerm:"Small Office Home Office",desc:"소규모 사무실이나 재택 근무 환경"},{id:25,acronym:"DHCP",fullTerm:"Dynamic Host Configuration Protocol",desc:"호스트 설정을 동적으로 자동 할당하는 프로토콜"},{id:26,acronym:"BGP",fullTerm:"Border Gateway Protocol",desc:"AS 경계에서 사용하는 게이트웨이 프로토콜"},{id:27,acronym:"CIDR",fullTerm:"Classless Inter-Domain Routing",desc:"클래스 구분 없는 도메인 간 라우팅"},{id:28,acronym:"HOL",fullTerm:"Head-of-the-Line",desc:"줄의 맨 앞이 막혀 뒤까지 지연되는 현상"},{id:29,acronym:"AQM",fullTerm:"Active Queue Management",desc:"큐를 능동적으로 관리하여 혼잡 방지"},{id:30,acronym:"VRRP",fullTerm:"Virtual Router Redundancy Protocol",desc:"가상 라우터를 만들어 중복(예비) 구성"},{id:31,acronym:"OVSDB",fullTerm:"Open vSwitch Database Management Protocol",desc:"Open vSwitch의 데이터베이스를 관리하는 프로토콜"},{id:32,acronym:"SAL",fullTerm:"Service Abstraction Layer",desc:"서비스를 추상화하여 하드웨어 종속성 제거"},{id:33,acronym:"VMM",fullTerm:"Virtual Machine Monitor",desc:"가상 머신을 감시/관리하는 모니터"},{id:34,acronym:"NLRI",fullTerm:"Network Layer Reachability Information",desc:"네트워크 계층의 도달 가능성 정보"},{id:35,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄로 입력하는 텍스트 인터페이스"},{id:36,acronym:"MIB",fullTerm:"Management Information Base",desc:"관리 정보가 저장된 베이스"},{id:37,acronym:"SMI",fullTerm:"Structure of Management Information",desc:"관리 정보를 정의하는 구조 및 규칙"},{id:38,acronym:"RPC",fullTerm:"Remote Procedure Call",desc:"원격에 있는 프로시저를 호출함"},{id:39,acronym:"EGP",fullTerm:"Exterior Gateway Protocol",desc:"외부 게이트웨이(AS 간) 프로토콜"},{id:40,acronym:"IGP",fullTerm:"Interior Gateway Protocol",desc:"내부 게이트웨이(AS 내) 프로토콜"},{id:41,acronym:"SDN",fullTerm:"Software-Defined Networking",desc:"소프트웨어로 정의된 네트워킹 (중복)"},{id:42,acronym:"OFP",fullTerm:"OpenFlow Protocol",desc:"오픈플로우 스위치와 컨트롤러 간 프로토콜"},{id:43,acronym:"OFS",fullTerm:"OpenFlow Switch",desc:"오픈플로우를 지원하는 스위치"},{id:44,acronym:"ONOS",fullTerm:"Open Network Operating System",desc:"개방형 네트워크 OS (중복)"},{id:45,acronym:"NFV",fullTerm:"Network Functions Virtualization",desc:"네트워크 기능을 가상화하는 기술"},{id:46,acronym:"CLI",fullTerm:"Command Line Interface",desc:"명령 줄 인터페이스 (중복)"},{id:47,acronym:"DCN",fullTerm:"Data Center Network",desc:"데이터 센터 내부 네트워크"},{id:48,acronym:"NFVI",fullTerm:"NFV Infrastructure",desc:"NFV를 구동하기 위한 인프라 자원"},{id:49,acronym:"NBI",fullTerm:"Northbound Interface",desc:"북쪽(상위 응용) 방향 인터페이스"},{id:50,acronym:"SBI",fullTerm:"Southbound Interface",desc:"남쪽(하부 장비) 방향 인터페이스"},{id:51,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상으로 나눈 근거리 통신망"},{id:52,acronym:"VPN",fullTerm:"Virtual Private Network",desc:"가상으로 만든 사설 네트워크"},{id:53,acronym:"OVS",fullTerm:"Open vSwitch",desc:"오픈 소스 가상 스위치"},{id:54,acronym:"YANG",fullTerm:"Yet Another Next Generation",desc:"또 다른 차세대 데이터 모델링 언어"},{id:55,acronym:"NETCONF",fullTerm:"Network Configuration Protocol",desc:"네트워크 설정을 위한 프로토콜"},{id:56,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"다양한 프로토콜 위에서 라벨로 스위칭"},{id:57,acronym:"MANO",fullTerm:"Management and Orchestration",desc:"NFV의 관리와 조율"},{id:58,acronym:"ODL",fullTerm:"OpenDaylight",desc:"오픈데이라이트 (SDN 컨트롤러)"},{id:59,acronym:"MPLS",fullTerm:"Multiprotocol Label Switching",desc:"라벨 스위칭 (중복)"},{id:60,acronym:"LSR",fullTerm:"Label Switch Router",desc:"라벨을 보고 스위칭하는 라우터"},{id:61,acronym:"LLC",fullTerm:"Logical Link Control",desc:"논리적인 링크 제어"},{id:62,acronym:"MAC",fullTerm:"Media Access Control",desc:"매체 접근 제어 (중복)"},{id:63,acronym:"HDLC",fullTerm:"High Level Data Link Protocol",desc:"고수준 데이터 링크 제어 프로토콜"},{id:64,acronym:"CSMA",fullTerm:"Carrier Sense Multiple Access",desc:"반송파 감지 후 다중 접속"},{id:65,acronym:"FDMA",fullTerm:"Frequency Division Multiple Access",desc:"주파수를 나누어 접속"},{id:66,acronym:"TDMA",fullTerm:"Time Division Multiple Access",desc:"시간을 나누어 접속"},{id:67,acronym:"CDMA",fullTerm:"Code Division Multiple Access",desc:"코드로 구분하여 나누어 접속"},{id:68,acronym:"ARP",fullTerm:"Address Resolution Protocol",desc:"주소(IP)를 해석하여 MAC 주소를 알아냄"},{id:69,acronym:"FDDI",fullTerm:"Fiber Distributed Data Interface",desc:"광섬유로 분산된 데이터 인터페이스"},{id:70,acronym:"SFD",fullTerm:"Start Frame Delimiter",desc:"프레임의 시작을 알리는 구분자"},{id:71,acronym:"VLAN",fullTerm:"Virtual Local Area Network",desc:"가상 LAN (중복)"},{id:72,acronym:"DTP",fullTerm:"Dynamic Trunking Protocol",desc:"트렁킹을 동적으로 협상함"},{id:73,acronym:"VTP",fullTerm:"VLAN Trunking Protocol",desc:"VLAN 정보를 트렁킹 구간에 전파"},{id:74,acronym:"TPID",fullTerm:"Tag Protocol Identifier",desc:"태그 프로토콜임을 식별하는 필드"},{id:75,acronym:"TCI",fullTerm:"Tag Control Information",desc:"태그를 제어하는 정보"},{id:76,acronym:"PCP",fullTerm:"Priority Code Point",desc:"우선순위를 나타내는 코드 지점"},{id:77,acronym:"DEI",fullTerm:"Drop Eligible Indicator",desc:"폐기 해도 되는지 나타내는 표시"},{id:78,acronym:"LER",fullTerm:"Label Edge Router",desc:"MPLS망 가장자리에 있는 라우터"},{id:79,acronym:"LSP",fullTerm:"Label-Switched Path",desc:"라벨로 스위칭되어 지나가는 경로"},{id:80,acronym:"LDP",fullTerm:"Label Distribution Protocol",desc:"라벨을 분배하는 프로토콜"},{id:81,acronym:"SIFS",fullTerm:"Short Inter-frame Spacing",desc:"짧은 프레임 간 간격"},{id:82,acronym:"DIFS",fullTerm:"Distributed Inter-frame Space",desc:"분산 제어용 프레임 간격"},{id:83,acronym:"RTS",fullTerm:"Request to Send",desc:"송신을 요청함"},{id:84,acronym:"CTS",fullTerm:"Clear to Send",desc:"송신 해도 좋다"},{id:85,acronym:"FHSS",fullTerm:"Frequency-Hopping Spread Spectrum",desc:"주파수를 깡충깡충 뛰며 대역 확산"},{id:86,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선으로 접속하는 네트워크망"},{id:87,acronym:"MTSO",fullTerm:"Mobile Telecommunications Switching Office",desc:"이동통신 교환국"},{id:88,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자를 식별하는 모듈"},{id:89,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"길게 보고 진화시킨 4G 기술"},{id:90,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"일반적인 패킷 무선 서비스"},{id:91,acronym:"OFDMA",fullTerm:"Orthogonal Frequency-Division Multiple Access",desc:"직교 주파수 분할 다중 접속"},{id:92,acronym:"LTE",fullTerm:"Long Term Evolution",desc:"4G 이동통신 (중복)"},{id:93,acronym:"HSPA",fullTerm:"High Speed Packet Access",desc:"고속 패킷 접속"},{id:94,acronym:"RNC",fullTerm:"Radio Network Controller",desc:"무선 네트워크를 제어하는 장비"},{id:95,acronym:"HSDPA",fullTerm:"High Speed Downlink Packet Access",desc:"고속 하향 패킷 접속"},{id:96,acronym:"WCDMA",fullTerm:"Wideband Code Division Multiple Access",desc:"광대역 코드 분할 다중 접속"},{id:97,acronym:"SIM",fullTerm:"Subscriber Identity Module",desc:"가입자 식별 모듈 (중복)"},{id:98,acronym:"GPRS",fullTerm:"General Packet Radio Service",desc:"2.5G 서비스 (중복)"},{id:99,acronym:"IMSI",fullTerm:"International Mobile Subscriber Identity",desc:"국제 모바일 가입자 고유 식별 번호"},{id:100,acronym:"EDGE",fullTerm:"Enhanced Data Rates for GSM Evolution",desc:"GSM의 진화로 데이터 속도 향상"},{id:101,acronym:"MIMO",fullTerm:"Multiple Input Multiple Output",desc:"다중 입력 다중 출력"},{id:102,acronym:"SC-FDMA",fullTerm:"Single Carrier Frequency Division Multiple Access",desc:"단일 반송파를 사용하는 FDMA"},{id:103,acronym:"EPC",fullTerm:"Evolved Packet Core",desc:"진화된 패킷 코어 망"},{id:104,acronym:"MME",fullTerm:"Mobility Management Entity",desc:"이동성을 관리하는 개체"},{id:105,acronym:"eMBB",fullTerm:"Enhanced Mobile Broadband",desc:"향상된 초광대역 서비스"},{id:106,acronym:"DSS",fullTerm:"Dynamic Spectrum Sharing",desc:"주파수를 동적으로 공유"},{id:107,acronym:"FWA",fullTerm:"Fixed Wireless Access",desc:"고정된 위치에서 무선으로 접속"},{id:108,acronym:"RAN",fullTerm:"Radio Access Network",desc:"무선 접속망 (중복)"},{id:109,acronym:"UTRAN",fullTerm:"Universal Terrestrial Radio Access Network",desc:"범용 지상 무선 접속망"}],e=[{id:1001,acronym:"Random Access",fullTerm:"Random Access",desc:"임의 접근 (데이터 전송 시 경쟁하며 충돌 가능성이 있는 방식)"},{id:1002,acronym:"Controlled Access",fullTerm:"Controlled Access",desc:"제어 접근 (순서나 규칙에 따라 전송하여 충돌을 방지하는 방식)"},{id:1003,acronym:"Channelization",fullTerm:"Channelization",desc:"채널화 (대역폭을 주파수, 시간, 코드 등으로 나누어 할당하는 방식)"},{id:1004,acronym:"Ethernet",fullTerm:"Ethernet",desc:"이더넷 (가장 널리 사용되는 유선 LAN 기술 표준)"},{id:1005,acronym:"CRC",fullTerm:"Cyclic Redundancy Check",desc:"순환 중복 검사 (데이터 전송 오류를 검출하기 위한 수학적 알고리즘)"},{id:1006,acronym:"Loopback",fullTerm:"Loopback",desc:"루프백 (데이터를 송신한 장치로 다시 되돌려 보내는 기능, 예: 127.0.0.1)"},{id:1007,acronym:"Unicast",fullTerm:"Unicast",desc:"유니캐스트 (1:1 통신, 특정 단일 수신자에게 전송)"},{id:1008,acronym:"Multicast",fullTerm:"Multicast",desc:"멀티캐스트 (1:N 통신, 특정 그룹의 멤버들에게 전송)"},{id:1009,acronym:"Anycast",fullTerm:"Anycast",desc:"애니캐스트 (1:1 통신이나, 네트워크상에서 가장 가까운 노드와 통신)"},{id:1010,acronym:"IPv4",fullTerm:"Internet Protocol version 4",desc:"인터넷 프로토콜 버전 4 (32비트 주소 체계)"},{id:1011,acronym:"IPv6",fullTerm:"Internet Protocol version 6",desc:"인터넷 프로토콜 버전 6 (128비트 주소 체계, 무한대에 가까운 주소)"},{id:1012,acronym:"Subnet Mask",fullTerm:"Subnet Mask",desc:"서브넷 마스크 (IP 주소에서 네트워크 부분과 호스트 부분을 구분)"},{id:1013,acronym:"Dijkstra",fullTerm:"Dijkstra Algorithm",desc:"다익스트라 알고리즘 (OSPF 등에서 사용하는 최단 경로 탐색 알고리즘)"},{id:1014,acronym:"STP",fullTerm:"Spanning Tree Protocol",desc:"스패닝 트리 프로토콜 (스위치 네트워크의 루프 방지)"},{id:1015,acronym:"Flooding",fullTerm:"Flooding",desc:"플러딩 (수신 포트를 제외한 모든 포트로 프레임을 전송하는 것)"},{id:1016,acronym:"Star Topology",fullTerm:"Star Topology",desc:"성형 토폴로지 (중앙 허브나 스위치를 중심으로 모든 노드가 연결된 형태)"},{id:1017,acronym:"Traffic Engineering",fullTerm:"Traffic Engineering",desc:"트래픽 엔지니어링 (네트워크 트래픽의 흐름을 최적화하고 제어하는 기술)"},{id:1018,acronym:"Spread-spectrum",fullTerm:"Spread-spectrum",desc:"대역 확산 (신호를 넓은 주파수 대역으로 퍼뜨려 간섭을 줄이는 기술)"},{id:1019,acronym:"Gateway",fullTerm:"Gateway",desc:"게이트웨이 (서로 다른 네트워크 프로토콜을 사용하는 네트워크 간의 연결점)"},{id:1020,acronym:"SLAAC",fullTerm:"Stateless Address Autoconfiguration",desc:"상태 비보존 주소 자동 설정 (IPv6에서 라우터 없이 IP를 자동 생성)"},{id:1021,acronym:"NDP",fullTerm:"Neighbor Discovery Protocol",desc:"이웃 탐색 프로토콜 (IPv6에서 ARP를 대체하여 이웃 노드 관리)"},{id:1022,acronym:"IPsec",fullTerm:"Internet Protocol Security",desc:"IP 보안 (IP 계층에서 데이터를 암호화하고 인증하는 프로토콜 모음)"},{id:1023,acronym:"Collision",fullTerm:"Collision",desc:"충돌 (두 개 이상의 장치가 동시에 데이터를 전송하여 신호가 겹치는 현상)"},{id:1024,acronym:"MTU",fullTerm:"Maximum Transmission Unit",desc:"최대 전송 단위 (네트워크 인터페이스가 한 번에 보낼 수 있는 최대 데이터 크기)"}],i=`
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
`,[r,l]=ie.useState("menu"),[c,f]=ie.useState(10),[h,m]=ie.useState([]),[p,v]=ie.useState(0),[g,y]=ie.useState(""),[M,b]=ie.useState(!1),[E,S]=ie.useState(null),[_,R]=ie.useState(0),[C,L]=ie.useState([]),B=ie.useRef(null),[U,O]=ie.useState(null),[W,N]=ie.useState(0),[w,G]=ie.useState(!1),[K,ce]=ie.useState([]),[pe,ge]=ie.useState(0),[I,J]=ie.useState(!1);ie.useEffect(()=>{const Ee=i.split(`
`);let Fe="General";const vt=[];let it=1;Ee.forEach(_t=>{const H=_t.trim();if(H){if(/^(\d+\.\d+|HW\d+[A-Z]*)/.test(H)){Fe=H.replace("|","").trim();return}if(H.includes("(")&&H.includes(")")){const je=H.split("|"),ft=je[0].trim(),Pt=je[1]?je[1].trim():"",He=[],zt=[],Ze=/(\([^)]+\))/g;ft.split(Ze).forEach(P=>{if(P.startsWith("(")&&P.endsWith(")")){const T=P.slice(1,-1);He.push({text:T,isAnswer:!0}),zt.push(T)}else P.length>0&&He.push({text:P,isAnswer:!1})}),vt.push({id:it++,category:Fe,originalText:ft,translation:Pt,parts:He,answers:zt})}}}),ce(vt)},[]);const Y=ie.useMemo(()=>{if(r!=="sentence"||!K[pe])return[];const Ee=K[pe],Fe=[];return Ee.answers.forEach(vt=>{const it=vt.toUpperCase(),_t=vt.toLowerCase(),H=je=>{Fe.some(ft=>ft.id===je.id)||Fe.push(je)};s.forEach(je=>{it.includes(je.acronym.toUpperCase())&&H(je),je.fullTerm&&_t.includes(je.fullTerm.toLowerCase())&&H(je)}),e.forEach(je=>{it.includes(je.acronym.toUpperCase())&&H(je),je.fullTerm&&_t.includes(je.fullTerm.toLowerCase())&&H(je)})}),Fe},[r,pe,K]);ie.useEffect(()=>{r==="playing"&&B.current&&B.current.focus()},[p,r]);const fe=Ee=>{let Fe=[];Ee==="all"?Fe=[...s]:Fe=[...s].sort(()=>.5-Math.random()).slice(0,Ee),m(Fe),f(Fe.length),v(0),R(0),L([]),l("playing"),Ie()},ue=()=>{l("flashcard"),N(1),O(Q()),G(!1)},z=()=>{l("sentence");const Ee=[...K].sort(()=>.5-Math.random());ce(Ee),ge(0),J(!1)},Q=()=>{const Ee=Math.floor(Math.random()*s.length);return s[Ee]},_e=ie.useCallback(()=>{let Ee=Q();if(s.length>1)for(;Ee.id===U?.id;)Ee=Q();O(Ee),N(Fe=>Fe+1),G(!1)},[U,s]),we=ie.useCallback(()=>{ge(Ee=>(Ee+1)%K.length),J(!1)},[K.length]);ie.useEffect(()=>{const Ee=Fe=>{Fe.code==="Space"&&(r==="flashcard"?(Fe.preventDefault(),w?_e():G(!0)):r==="sentence"&&(Fe.preventDefault(),I?we():J(!0)))};return window.addEventListener("keydown",Ee),()=>window.removeEventListener("keydown",Ee)},[r,w,_e,I,we]);const Ie=()=>{y(""),b(!1),S(null)},ae=Ee=>Ee.toLowerCase().replace(/[\s-]/g,""),de=Ee=>{if(Ee.preventDefault(),E)return;const Fe=h[p];ae(g)===ae(Fe.fullTerm)?(S("correct"),R(it=>it+1)):(S("incorrect"),L(it=>[...it,{...Fe,userAnswer:g}]))},Ne=()=>{p<h.length-1?(v(Ee=>Ee+1),Ie()):l("result")};if(r==="menu")return F.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-slate-800",children:F.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-indigo-600",children:[F.jsx(sh,{className:"w-16 h-16 mx-auto text-indigo-600 mb-4"}),F.jsx("h1",{className:"text-3xl font-bold mb-2",children:"네트워크 마스터"}),F.jsx("p",{className:"text-slate-500 mb-8",children:"약어 암기 및 핵심 문장 학습"}),F.jsxs("div",{className:"space-y-3",children:[F.jsxs("button",{onClick:()=>fe(10),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[F.jsx(wd,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (10문제)"]}),F.jsxs("button",{onClick:()=>fe(20),className:"w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group",children:[F.jsx(wd,{className:"w-5 h-5 group-hover:scale-110 transition-transform"})," 약어 퀴즈 (20문제)"]}),F.jsx("button",{onClick:()=>fe("all"),className:"w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200",children:"약어 전체 109문제 도전"}),F.jsxs("div",{className:"pt-4 border-t border-slate-100 mt-2 space-y-2",children:[F.jsxs("button",{onClick:ue,className:"w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2",children:[F.jsx(BM,{className:"w-5 h-5"})," 무한 약어 단어장"]}),F.jsxs("button",{onClick:z,className:"w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2",children:[F.jsx(bM,{className:"w-5 h-5"})," 문장 빈칸 채우기"]})]})]})]})});if(r==="result")return F.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-slate-800",children:F.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border-t-4 border-indigo-600",children:[F.jsxs("div",{className:"text-center mb-8",children:[F.jsx(qM,{className:"w-16 h-16 mx-auto text-yellow-500 mb-4"}),F.jsx("h2",{className:"text-3xl font-bold mb-2",children:"결과 리포트"}),F.jsxs("div",{className:"text-5xl font-black text-indigo-600 my-4",children:[_," / ",c]}),F.jsx("p",{className:"text-slate-500",children:_===c?"완벽합니다! 모든 약어를 마스터하셨네요!":"수고하셨습니다. 틀린 문제를 확인해보세요."})]}),C.length>0&&F.jsxs("div",{className:"mb-8",children:[F.jsxs("h3",{className:"font-bold text-lg mb-4 text-red-500 flex items-center gap-2",children:[F.jsx(gM,{className:"w-5 h-5"})," 오답 노트 (",C.length,")"]}),F.jsx("div",{className:"bg-red-50 rounded-xl overflow-hidden border border-red-100 max-h-96 overflow-y-auto",children:C.map((Ee,Fe)=>F.jsxs("div",{className:"p-4 border-b border-red-100 last:border-0 hover:bg-red-100 transition-colors",children:[F.jsxs("div",{className:"flex justify-between items-center mb-1",children:[F.jsx("span",{className:"font-bold text-slate-800 text-lg",children:Ee.acronym}),F.jsxs("span",{className:"text-xs font-mono bg-red-200 text-red-800 px-2 py-1 rounded",children:["오답: ",Ee.userAnswer]})]}),F.jsx("div",{className:"text-indigo-700 font-medium",children:Ee.fullTerm}),F.jsx("div",{className:"text-sm text-slate-500",children:Ee.desc})]},Fe))})]}),F.jsxs("button",{onClick:()=>l("menu"),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg",children:[F.jsx(HM,{className:"w-5 h-5"})," 다시 시작하기"]})]})});if(r==="sentence"){const Ee=K[pe],Fe=Y;return F.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[F.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:F.jsx(g1,{className:"w-6 h-6"})}),F.jsxs("div",{className:"w-full max-w-3xl",children:[F.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>I?we():J(!0),children:[F.jsxs("div",{className:"bg-blue-50 px-6 py-3 flex items-center gap-2 border-b border-blue-100",children:[F.jsx(XM,{className:"w-4 h-4 text-blue-600"}),F.jsx("span",{className:"font-bold text-blue-800 text-sm uppercase tracking-wide",children:Ee?.category}),F.jsxs("span",{className:"ml-auto text-blue-400 text-xs",children:["#",Ee?.id]})]}),F.jsxs("div",{className:"flex-1 p-10 flex flex-col justify-center",children:[F.jsx("div",{className:"text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 mb-6",children:Ee?.parts.map((vt,it)=>F.jsx("span",{className:vt.isAnswer?"font-bold mx-1":"",children:vt.isAnswer?I?F.jsx("span",{className:"text-blue-600 underline decoration-2 underline-offset-4 animate-fade-in",children:vt.text}):F.jsx("span",{className:"bg-slate-200 text-slate-200 rounded px-2 select-none",children:"(           )"}):vt.text},it))}),I&&Ee?.translation&&F.jsxs("div",{className:"p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400 animate-fade-in mb-6",children:[F.jsxs("div",{className:"flex items-center gap-2 text-slate-500 mb-1 font-bold text-xs uppercase",children:[F.jsx(CM,{className:"w-4 h-4"})," 한국어 해석"]}),F.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed break-keep",children:Ee.translation})]}),I&&Fe.length>0&&F.jsxs("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:[F.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2",children:[F.jsx(NM,{className:"w-4 h-4 text-yellow-500"})," 관련 용어 해설"]}),F.jsx("div",{className:"grid gap-3",children:Fe.map(vt=>F.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100",children:[F.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[F.jsx("span",{className:"font-bold text-blue-700",children:vt.acronym}),F.jsxs("span",{className:"text-xs text-blue-400",children:["(",vt.fullTerm,")"]})]}),F.jsx("p",{className:"text-slate-700 text-sm",children:vt.desc})]},vt.id))})]}),I&&Fe.length===0&&F.jsx("div",{className:"mt-4 pt-6 border-t border-slate-100 animate-fade-in-up",children:F.jsx("p",{className:"text-slate-500 text-sm text-center italic",children:"스페이스바를 눌러 다음 문장으로 넘어갑니다."})})]}),!I&&F.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-center text-slate-400 animate-pulse",children:F.jsxs("span",{className:"flex items-center gap-2 text-sm font-semibold",children:[F.jsx(m1,{className:"w-4 h-4"})," 탭하여 정답 확인"]})}),I&&F.jsx("div",{className:"p-4 bg-blue-500 text-white flex justify-center hover:bg-blue-600 transition-colors",children:F.jsxs("span",{className:"flex items-center gap-2 text-lg font-bold",children:["다음 문장 ",F.jsx(p1,{className:"w-5 h-5"})]})})]}),F.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[F.jsx(v1,{className:"w-4 h-4"}),F.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]})}if(r==="flashcard")return F.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative",children:[F.jsxs("div",{className:"absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md font-bold text-emerald-600 flex items-center gap-2",children:[F.jsx(sh,{className:"w-5 h-5"}),F.jsxs("span",{children:["본 단어 수: ",W]})]}),F.jsx("button",{onClick:()=>l("menu"),className:"absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors",title:"메뉴로 돌아가기",children:F.jsx(g1,{className:"w-6 h-6"})}),F.jsxs("div",{className:"w-full max-w-xl",children:[F.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-emerald-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none",onClick:()=>w?_e():G(!0),children:[F.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in",children:[F.jsxs("span",{className:"inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6",children:["No. ",U?.id]}),F.jsx("h1",{className:"text-7xl font-black text-slate-800 tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-300",children:U?.acronym}),F.jsx("div",{className:"w-full h-px bg-slate-100 mb-6"}),w?F.jsxs(F.Fragment,{children:[F.jsx("h2",{className:"text-2xl font-bold text-emerald-700 mb-3 animate-fade-in-up",children:U?.fullTerm}),F.jsx("p",{className:"text-slate-500 font-medium text-lg leading-relaxed max-w-md animate-fade-in-up delay-75",children:U?.desc})]}):F.jsxs("div",{className:"flex flex-col items-center py-6 text-slate-300 animate-pulse",children:[F.jsx("div",{className:"bg-slate-100 p-3 rounded-full mb-3",children:F.jsx(m1,{className:"w-8 h-8 text-slate-400"})}),F.jsx("span",{className:"font-bold text-sm",children:"탭하여 정답 확인"})]})]}),F.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100",children:F.jsxs("button",{onClick:Ee=>{Ee.stopPropagation(),_e()},className:"w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 active:scale-95 transform",children:["다음 단어 ",F.jsx(p1,{className:"w-6 h-6"})]})})]}),F.jsxs("div",{className:"mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[F.jsx(v1,{className:"w-4 h-4"}),F.jsx("span",{children:"스페이스바(Space)를 눌러 넘기세요"})]})]})]});const Be=h[p];return F.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800",children:F.jsxs("div",{className:"w-full max-w-xl",children:[F.jsxs("div",{className:"mb-6 flex items-center justify-between text-sm font-semibold text-slate-500",children:[F.jsxs("span",{children:["Question ",p+1," / ",c]}),F.jsxs("span",{children:["Score: ",_]})]}),F.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2.5 mb-8",children:F.jsx("div",{className:"bg-indigo-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${(p+1)/c*100}%`}})}),F.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-600",children:[F.jsxs("div",{className:"p-10 text-center bg-slate-50 border-b border-slate-100",children:[F.jsxs("span",{className:"inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4",children:["No. ",Be.id]}),F.jsx("h1",{className:"text-6xl font-black text-indigo-900 tracking-tighter mb-2",children:Be.acronym}),F.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name을 입력하세요"})]}),F.jsxs("div",{className:"p-8",children:[E?F.jsxs("div",{className:"text-center animate-fade-in-up",children:[E==="correct"?F.jsxs("div",{className:"mb-6",children:[F.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3",children:F.jsx(pM,{className:"w-8 h-8"})}),F.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-1",children:"정답입니다!"})]}):F.jsxs("div",{className:"mb-6",children:[F.jsx("div",{className:"w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3",children:F.jsx(kv,{className:"w-8 h-8"})}),F.jsx("h3",{className:"text-2xl font-bold text-red-500 mb-1",children:"오답입니다"}),F.jsxs("p",{className:"text-slate-400 text-sm mb-2",children:["내가 쓴 답: ",g]}),F.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg inline-block w-full",children:F.jsx("p",{className:"text-indigo-800 font-bold text-lg",children:Be.fullTerm})})]}),F.jsxs("button",{onClick:Ne,className:"w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2",children:["다음 문제 ",F.jsx(wd,{className:"w-4 h-4"})]})]}):F.jsxs("form",{onSubmit:de,children:[F.jsx("input",{ref:B,type:"text",value:g,onChange:Ee=>y(Ee.target.value),placeholder:"예: Software Defined Networking",className:"w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all mb-4 text-center placeholder:text-slate-300",autoComplete:"off"}),F.jsxs("div",{className:"flex gap-2",children:[F.jsxs("button",{type:"button",onClick:()=>b(!M),className:"flex-1 py-3 px-4 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2",children:[F.jsx(_M,{className:"w-5 h-5"})," 힌트 보기"]}),F.jsx("button",{type:"submit",className:"flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200",children:"정답 확인"})]})]}),(M||E)&&F.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-center",children:[F.jsx("span",{className:"block text-xs font-bold text-yellow-600 mb-1",children:"💡 암기 팁"}),F.jsx("p",{className:"text-slate-700 font-medium",children:Be.desc})]})]})]}),F.jsx("div",{className:"mt-8 text-center text-slate-400 text-sm",children:"띄어쓰기, 대소문자, 하이픈(-)은 틀려도 정답 처리됩니다."})]})})};const ip="181",eb=0,y1=1,tb=2,Xv=1,nb=2,ca=3,tr=0,Wn=1,ua=2,pa=0,Rs=1,x1=2,S1=3,M1=4,ib=5,Rr=100,ab=101,rb=102,sb=103,ob=104,lb=200,cb=201,ub=202,fb=203,oh=204,lh=205,db=206,hb=207,pb=208,mb=209,gb=210,vb=211,_b=212,yb=213,xb=214,ch=0,uh=1,fh=2,Ns=3,dh=4,hh=5,ph=6,mh=7,Wv=0,Sb=1,Mb=2,er=0,bb=1,Eb=2,Tb=3,Ab=4,wb=5,Rb=6,Cb=7,qv=300,Us=301,Ls=302,gh=303,vh=304,lu=306,_h=1e3,fa=1001,yh=1002,ri=1003,Db=1004,_c=1005,_i=1006,Rd=1007,Dr=1008,va=1009,jv=1010,Yv=1011,Yo=1012,ap=1013,Nr=1014,da=1015,zs=1016,rp=1017,sp=1018,Zo=1020,Zv=35902,Kv=35899,Qv=1021,Jv=1022,wi=1023,Ko=1026,Qo=1027,$v=1028,op=1029,lp=1030,cp=1031,up=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,xh=35840,Sh=35841,Mh=35842,bh=35843,Eh=36196,Th=37492,Ah=37496,wh=37808,Rh=37809,Ch=37810,Dh=37811,Nh=37812,Uh=37813,Lh=37814,Ph=37815,Oh=37816,Ih=37817,zh=37818,Bh=37819,Fh=37820,Hh=37821,Vh=36492,Gh=36494,kh=36495,Xh=36283,Wh=36284,qh=36285,jh=36286,Nb=3200,Ub=3201,Lb=0,Pb=1,Ja="",mi="srgb",Ps="srgb-linear",tu="linear",Wt="srgb",hs=7680,b1=519,Ob=512,Ib=513,zb=514,e_=515,Bb=516,Fb=517,Hb=518,Vb=519,E1=35044,T1="300 es",Ii=2e3,nu=2001;function t_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function iu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gb(){const s=iu("canvas");return s.style.display="block",s}const A1={};function w1(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function Jo(...s){const e=s.join(" ");e in A1||(A1[e]=!0,ct(...s))}function kb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R1=1234567;const Cs=Math.PI/180,$o=180/Math.PI;function Fs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function fp(s,e){return(s%e+e)%e}function Xb(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function Wb(s,e,i){return s!==e?(i-s)/(e-s):0}function qo(s,e,i){return(1-i)*s+i*e}function qb(s,e,i,r){return qo(s,e,1-Math.exp(-i*r))}function jb(s,e=1){return e-Math.abs(fp(s,e*2)-e)}function Yb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Zb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Kb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qb(s,e){return s+Math.random()*(e-s)}function Jb(s){return s*(.5-Math.random())}function $b(s){s!==void 0&&(R1=s);let e=R1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eE(s){return s*Cs}function tE(s){return s*$o}function nE(s){return(s&s-1)===0&&s!==0}function iE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function aE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rE(s,e,i,r,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+r)/2),v=f((e+r)/2),g=c((e-r)/2),y=f((e-r)/2),M=c((r-e)/2),b=f((r-e)/2);switch(l){case"XYX":s.set(h*v,m*g,m*y,h*p);break;case"YZY":s.set(m*y,h*v,m*g,h*p);break;case"ZXZ":s.set(m*g,m*y,h*v,h*p);break;case"XZX":s.set(h*v,m*b,m*M,h*p);break;case"YXY":s.set(m*M,h*v,m*b,h*p);break;case"ZYZ":s.set(m*b,m*M,h*v,h*p);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ws(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const C1={DEG2RAD:Cs,RAD2DEG:$o,generateUUID:Fs,clamp:bt,euclideanModulo:fp,mapLinear:Xb,inverseLerp:Wb,lerp:qo,damp:qb,pingpong:jb,smoothstep:Yb,smootherstep:Zb,randInt:Kb,randFloat:Qb,randFloatSpread:Jb,seededRandom:$b,degToRad:eE,radToDeg:tE,isPowerOfTwo:nE,ceilPowerOfTwo:iE,floorPowerOfTwo:aE,setQuaternionFromProperEuler:rE,normalize:On,denormalize:ws};class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],y=c[f+0],M=c[f+1],b=c[f+2],E=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=E;return}if(g!==E||m!==y||p!==M||v!==b){let S=m*y+p*M+v*b+g*E;S<0&&(y=-y,M=-M,b=-b,E=-E,S=-S);let _=1-h;if(S<.9995){const R=Math.acos(S),C=Math.sin(R);_=Math.sin(_*R)/C,h=Math.sin(h*R)/C,m=m*_+y*h,p=p*_+M*h,v=v*_+b*h,g=g*_+E*h}else{m=m*_+y*h,p=p*_+M*h,v=v*_+b*h,g=g*_+E*h;const R=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=R,p*=R,v*=R,g*=R}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],y=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+v*g+m*M-p*y,e[i+1]=m*b+v*y+p*g-h*M,e[i+2]=p*b+v*M+h*y-m*g,e[i+3]=v*b-h*g-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),y=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=y*v*g+p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g-y*M*b;break;case"YXZ":this._x=y*v*g+p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g+y*M*b;break;case"ZXY":this._x=y*v*g-p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g-y*M*b;break;case"ZYX":this._x=y*v*g-p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g+y*M*b;break;case"YZX":this._x=y*v*g+p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g-y*M*b;break;case"XZY":this._x=y*v*g-p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g+y*M*b;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=r+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(D1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(D1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new se,D1=new il;class mt{constructor(e,i,r,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],y=r[2],M=r[5],b=r[8],E=l[0],S=l[3],_=l[6],R=l[1],C=l[4],L=l[7],B=l[2],U=l[5],O=l[8];return c[0]=f*E+h*R+m*B,c[3]=f*S+h*C+m*U,c[6]=f*_+h*L+m*O,c[1]=p*E+v*R+g*B,c[4]=p*S+v*C+g*U,c[7]=p*_+v*L+g*O,c[2]=y*E+M*R+b*B,c[5]=y*S+M*C+b*U,c[8]=y*_+M*L+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,y=h*m-v*c,M=p*c-f*m,b=i*g+r*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=g*E,e[1]=(l*p-v*r)*E,e[2]=(h*r-l*f)*E,e[3]=y*E,e[4]=(v*i-l*m)*E,e[5]=(l*c-h*i)*E,e[6]=M*E,e[7]=(r*m-p*i)*E,e[8]=(f*i-r*c)*E,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new mt,N1=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U1=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sE(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:e,whitePoint:r,transfer:tu,toXYZ:N1,fromXYZ:U1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:N1,fromXYZ:U1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Ut=sE();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class oE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=iu("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=iu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lE=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let cE=0;const Ud=new se;class zn extends Bs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=fa,l=fa,c=_i,f=Dr,h=wi,m=va,p=zn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Fs(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=qv;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],y=m[1],M=m[5],b=m[9],E=m[2],S=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,L=(M+1)/2,B=(_+1)/2,U=(v+y)/4,O=(g+E)/4,W=(b+S)/4;return C>L&&C>B?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=U/r,c=O/r):L>B?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=U/l,c=W/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=O/c,l=W/c),this.set(r,l,c,i),this}let R=Math.sqrt((S-b)*(S-b)+(g-E)*(g-E)+(y-v)*(y-v));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(g-E)/R,this.z=(y-v)/R,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends uE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class n_ extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fE extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),xc.subVectors(this.max,Fo),ms.subVectors(e.a,Fo),gs.subVectors(e.b,Fo),vs.subVectors(e.c,Fo),qa.subVectors(gs,ms),ja.subVectors(vs,gs),Sr.subVectors(ms,vs);let i=[0,-qa.z,qa.y,0,-ja.z,ja.y,0,-Sr.z,Sr.y,qa.z,0,-qa.x,ja.z,0,-ja.x,Sr.z,0,-Sr.x,-qa.y,qa.x,0,-ja.y,ja.x,0,-Sr.y,Sr.x,0];return!Ld(i,ms,gs,vs,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,ms,gs,vs,xc))?!1:(Sc.crossVectors(qa,ja),i=[Sc.x,Sc.y,Sc.z],Ld(i,ms,gs,vs,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new se,new se,new se,new se,new se,new se,new se,new se],Ei=new se,yc=new al,ms=new se,gs=new se,vs=new se,qa=new se,ja=new se,Sr=new se,Fo=new se,xc=new se,Sc=new se,Mr=new se;function Ld(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const dE=new al,Ho=new se,Pd=new se;class rl{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Pd)),this.expandByPoint(Ho.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new se,Od=new se,Mc=new se,Ya=new se,Id=new se,bc=new se,zd=new se;class hp{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Od.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(Od);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Mc),h=Ya.dot(this.direction),m=-Ya.dot(Mc),p=Ya.lengthSq(),v=Math.abs(1-f*f);let g,y,M,b;if(v>0)if(g=f*m-h,y=f*h-m,b=c*v,g>=0)if(y>=-b)if(y<=b){const E=1/v;g*=E,y*=E,M=g*(g+f*y+2*h)+y*(f*g+y+2*m)+p}else y=c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-f*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(f*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=f>0?-c:c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Od).addScaledVector(Mc,y),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),v>=0?(c=(e.min.y-y.y)*v,f=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,f=(e.min.y-y.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,c){Id.subVectors(i,e),bc.subVectors(r,e),zd.crossVectors(Id,bc);let f=this.direction.dot(zd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ya.subVectors(this.origin,e);const m=h*this.direction.dot(bc.crossVectors(Ya,bc));if(m<0)return null;const p=h*this.direction.dot(Id.cross(Ya));if(p<0||m+p>f)return null;const v=-h*Ya.dot(zd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,h,m,p,v,g,y,M,b,E,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,g,y,M,b,E,S)}set(e,i,r,l,c,f,h,m,p,v,g,y,M,b,E,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=M,_[7]=b,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=f*v,M=f*g,b=h*v,E=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=y-E*p,i[9]=-h*m,i[2]=E-y*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*v,M=m*g,b=p*v,E=p*g;i[0]=y+E*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=M*h-b,i[6]=E+y*h,i[10]=f*m}else if(e.order==="ZXY"){const y=m*v,M=m*g,b=p*v,E=p*g;i[0]=y-E*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*v,i[9]=E-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const y=f*v,M=f*g,b=h*v,E=h*g;i[0]=m*v,i[4]=b*p-M,i[8]=y*p+E,i[1]=m*g,i[5]=E*p+y,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,M=f*p,b=h*m,E=h*p;i[0]=m*v,i[4]=E-y*g,i[8]=b*g+M,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+b,i[10]=y-E*g}else if(e.order==="XZY"){const y=f*m,M=f*p,b=h*m,E=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+E,i[5]=f*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*v,i[10]=E*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,pE)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(r,ii),Za.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(r,ii)),Za.normalize(),Ec.crossVectors(ii,Za),l[0]=Za.x,l[4]=Ec.x,l[8]=ii.x,l[1]=Za.y,l[5]=Ec.y,l[9]=ii.y,l[2]=Za.z,l[6]=Ec.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],y=r[9],M=r[13],b=r[2],E=r[6],S=r[10],_=r[14],R=r[3],C=r[7],L=r[11],B=r[15],U=l[0],O=l[4],W=l[8],N=l[12],w=l[1],G=l[5],K=l[9],ce=l[13],pe=l[2],ge=l[6],I=l[10],J=l[14],Y=l[3],fe=l[7],ue=l[11],z=l[15];return c[0]=f*U+h*w+m*pe+p*Y,c[4]=f*O+h*G+m*ge+p*fe,c[8]=f*W+h*K+m*I+p*ue,c[12]=f*N+h*ce+m*J+p*z,c[1]=v*U+g*w+y*pe+M*Y,c[5]=v*O+g*G+y*ge+M*fe,c[9]=v*W+g*K+y*I+M*ue,c[13]=v*N+g*ce+y*J+M*z,c[2]=b*U+E*w+S*pe+_*Y,c[6]=b*O+E*G+S*ge+_*fe,c[10]=b*W+E*K+S*I+_*ue,c[14]=b*N+E*ce+S*J+_*z,c[3]=R*U+C*w+L*pe+B*Y,c[7]=R*O+C*G+L*ge+B*fe,c[11]=R*W+C*K+L*I+B*ue,c[15]=R*N+C*ce+L*J+B*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],y=e[10],M=e[14],b=e[3],E=e[7],S=e[11],_=e[15];return b*(+c*m*g-l*p*g-c*h*y+r*p*y+l*h*M-r*m*M)+E*(+i*m*M-i*p*y+c*f*y-l*f*M+l*p*v-c*m*v)+S*(+i*p*g-i*h*M-c*f*g+r*f*M+c*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*y+l*f*g-r*f*y+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],y=e[10],M=e[11],b=e[12],E=e[13],S=e[14],_=e[15],R=g*S*p-E*y*p+E*m*M-h*S*M-g*m*_+h*y*_,C=b*y*p-v*S*p-b*m*M+f*S*M+v*m*_-f*y*_,L=v*E*p-b*g*p+b*h*M-f*E*M-v*h*_+f*g*_,B=b*g*m-v*E*m-b*h*y+f*E*y+v*h*S-f*g*S,U=i*R+r*C+l*L+c*B;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=R*O,e[1]=(E*y*c-g*S*c-E*l*M+r*S*M+g*l*_-r*y*_)*O,e[2]=(h*S*c-E*m*c+E*l*p-r*S*p-h*l*_+r*m*_)*O,e[3]=(g*m*c-h*y*c-g*l*p+r*y*p+h*l*M-r*m*M)*O,e[4]=C*O,e[5]=(v*S*c-b*y*c+b*l*M-i*S*M-v*l*_+i*y*_)*O,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*_-i*m*_)*O,e[7]=(f*y*c-v*m*c+v*l*p-i*y*p-f*l*M+i*m*M)*O,e[8]=L*O,e[9]=(b*g*c-v*E*c-b*r*M+i*E*M+v*r*_-i*g*_)*O,e[10]=(f*E*c-b*h*c+b*r*p-i*E*p-f*r*_+i*h*_)*O,e[11]=(v*h*c-f*g*c-v*r*p+i*g*p+f*r*M-i*h*M)*O,e[12]=B*O,e[13]=(v*E*l-b*g*l+b*r*y-i*E*y-v*r*S+i*g*S)*O,e[14]=(b*h*l-f*E*l-b*r*m+i*E*m+f*r*S-i*h*S)*O,e[15]=(f*g*l-v*h*l+v*r*m-i*g*m-f*r*y+i*h*y)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,y=c*p,M=c*v,b=c*g,E=f*v,S=f*g,_=h*g,R=m*p,C=m*v,L=m*g,B=r.x,U=r.y,O=r.z;return l[0]=(1-(E+_))*B,l[1]=(M+L)*B,l[2]=(b-C)*B,l[3]=0,l[4]=(M-L)*U,l[5]=(1-(y+_))*U,l[6]=(S+R)*U,l[7]=0,l[8]=(b+C)*O,l[9]=(S-R)*O,l[10]=(1-(y+E))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const p=1/c,v=1/f,g=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),M=(r+l)/(r-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(h===Ii)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===nu)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(h===Ii)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===nu)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new se,Ti=new ln,hE=new se(0,0,0),pE=new se(1,1,1),Za=new se,Ec=new se,ii=new se,L1=new ln,P1=new il;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return L1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L1,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P1.setFromEuler(this),this.setFromQuaternion(P1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const O1=new se,ys=new il,ra=new ln,Tc=new se,Vo=new se,gE=new se,vE=new il,I1=new se(1,0,0),z1=new se(0,1,0),B1=new se(0,0,1),F1={type:"added"},_E={type:"removed"},xs={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Bn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new se,i=new _a,r=new il,l=new se(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new mt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(I1,e)}rotateY(e){return this.rotateOnAxis(z1,e)}rotateZ(e){return this.rotateOnAxis(B1,e)}translateOnAxis(e,i){return O1.copy(e).applyQuaternion(this.quaternion),this.position.add(O1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(I1,e)}translateY(e){return this.translateOnAxis(z1,e)}translateZ(e){return this.translateOnAxis(B1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Tc.copy(e):Tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Vo,Tc,this.up):ra.lookAt(Tc,Vo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ra),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F1),xs.child=e,this.dispatchEvent(xs),xs.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_E),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F1),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,vE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),y=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new se(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new se,sa=new se,Fd=new se,oa=new se,Ss=new se,Ms=new se,H1=new se,Hd=new se,Vd=new se,Gd=new se,kd=new on,Xd=new on,Wd=new on;class vi{constructor(e=new se,i=new se,r=new se){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),sa.subVectors(r,i),Fd.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(sa),m=Ai.dot(Fd),p=sa.dot(sa),v=sa.dot(Fd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-h*v)*y,b=(f*v-h*m)*y;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return kd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),kd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,r),Wd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(kd,c.x),f.addScaledVector(Xd,c.y),f.addScaledVector(Wd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),sa.subVectors(e,i),Ai.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ai.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Ms.subVectors(c,r),Hd.subVectors(e,r);const m=Ss.dot(Hd),p=Ms.dot(Hd);if(m<=0&&p<=0)return i.copy(r);Vd.subVectors(e,l);const v=Ss.dot(Vd),g=Ms.dot(Vd);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ss,f);Gd.subVectors(e,c);const M=Ss.dot(Gd),b=Ms.dot(Gd);if(b>=0&&M<=b)return i.copy(c);const E=M*p-m*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Ms,h);const S=v*b-M*g;if(S<=0&&g-v>=0&&M-b>=0)return H1.subVectors(c,l),h=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(H1,h);const _=1/(S+E+y);return f=E*_,h=y*_,i.copy(r).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=fp(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=qd(f,c,e+1/3),this.g=qd(f,c,e),this.b=qd(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=a_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ut.workingToColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){Ut.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(Ac);const r=qo(Ka.h,Ac.h,i),l=qo(Ka.s,Ac.s,i),c=qo(Ka.l,Ac.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Lt;Lt.NAMES=a_;let yE=0;class Hs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Rs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==oh&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b1&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class r_ extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new se,wc=new It;let xE=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=E1,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ws(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ws(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ws(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ws(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ws(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E1&&(e.usage=this.usage),e}}class s_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class o_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class qn extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let SE=0;const pi=new ln,jd=new Bn,bs=new se,ai=new al,Go=new al,En=new se;class jn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?o_:s_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ai.min,Go.min),ai.expandByPoint(En),En.addVectors(ai.max,Go.max),ai.expandByPoint(En)):(ai.expandByPoint(Go.min),ai.expandByPoint(Go.max))}ai.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(e,p),En.add(bs)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new se,m[W]=new se;const p=new se,v=new se,g=new se,y=new It,M=new It,b=new It,E=new se,S=new se;function _(W,N,w){p.fromBufferAttribute(r,W),v.fromBufferAttribute(r,N),g.fromBufferAttribute(r,w),y.fromBufferAttribute(c,W),M.fromBufferAttribute(c,N),b.fromBufferAttribute(c,w),v.sub(p),g.sub(p),M.sub(y),b.sub(y);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(E.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(G),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(G),h[W].add(E),h[N].add(E),h[w].add(E),m[W].add(S),m[N].add(S),m[w].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let W=0,N=R.length;W<N;++W){const w=R[W],G=w.start,K=w.count;for(let ce=G,pe=G+K;ce<pe;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const C=new se,L=new se,B=new se,U=new se;function O(W){B.fromBufferAttribute(l,W),U.copy(B);const N=h[W];C.copy(N),C.sub(B.multiplyScalar(B.dot(N))).normalize(),L.crossVectors(U,N);const G=L.dot(m[W])<0?-1:1;f.setXYZW(W,C.x,C.y,C.z,G)}for(let W=0,N=R.length;W<N;++W){const w=R[W],G=w.start,K=w.count;for(let ce=G,pe=G+K;ce<pe;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new se,c=new se,f=new se,h=new se,m=new se,p=new se,v=new se,g=new se;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),E=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,y=new p.constructor(m.length*v);let M=0,b=0;for(let E=0,S=m.length;E<S;E++){h.isInterleavedBufferAttribute?M=m[E]*h.data.stride+h.offset:M=m[E]*v;for(let _=0;_<v;_++)y[b++]=p[M++]}return new Ri(y,v,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const y=p[v],M=e(y,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,M=g.length;y<M;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V1=new ln,br=new hp,Rc=new rl,G1=new se,Cc=new se,Dc=new se,Nc=new se,Yd=new se,Uc=new se,k1=new se,Lc=new se;class nr extends Bn{constructor(e=new jn,i=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Yd.fromBufferAttribute(g,e),f?Uc.addScaledVector(Yd,v):Uc.addScaledVector(Yd.sub(i),v))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Rc.containsPoint(br.origin)===!1&&(br.intersectSphere(Rc,G1)===null||br.origin.distanceToSquared(G1)>(e.far-e.near)**2))&&(V1.copy(c).invert(),br.copy(e.ray).applyMatrix4(V1),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=f[S.materialIndex],R=Math.max(S.start,M.start),C=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let L=R,B=C;L<B;L+=3){const U=h.getX(L),O=h.getX(L+1),W=h.getX(L+2);l=Pc(this,_,e,r,p,v,g,U,O,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(h.count,M.start+M.count);for(let S=b,_=E;S<_;S+=3){const R=h.getX(S),C=h.getX(S+1),L=h.getX(S+2);l=Pc(this,f,e,r,p,v,g,R,C,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=f[S.materialIndex],R=Math.max(S.start,M.start),C=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let L=R,B=C;L<B;L+=3){const U=L,O=L+1,W=L+2;l=Pc(this,_,e,r,p,v,g,U,O,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let S=b,_=E;S<_;S+=3){const R=S,C=S+1,L=S+2;l=Pc(this,f,e,r,p,v,g,R,C,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function ME(s,e,i,r,l,c,f,h){let m;if(e.side===Wn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===tr,h),m===null)return null;Lc.copy(h),Lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:s}}function Pc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Cc),s.getVertexPosition(m,Dc),s.getVertexPosition(p,Nc);const v=ME(s,e,i,r,Cc,Dc,Nc,k1);if(v){const g=new se;vi.getBarycoord(k1,Cc,Dc,Nc,g),l&&(v.uv=vi.getInterpolatedAttribute(l,h,m,p,g,new It)),c&&(v.uv1=vi.getInterpolatedAttribute(c,h,m,p,g,new It)),f&&(v.normal=vi.getInterpolatedAttribute(f,h,m,p,g,new se),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new se,materialIndex:0};vi.getNormal(Cc,Dc,Nc,y.normal),v.face=y,v.barycoord=g}return v}class Vs extends jn{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let y=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new qn(p,3)),this.setAttribute("normal",new qn(v,3)),this.setAttribute("uv",new qn(g,2));function b(E,S,_,R,C,L,B,U,O,W,N){const w=L/O,G=B/W,K=L/2,ce=B/2,pe=U/2,ge=O+1,I=W+1;let J=0,Y=0;const fe=new se;for(let ue=0;ue<I;ue++){const z=ue*G-ce;for(let Q=0;Q<ge;Q++){const _e=Q*w-K;fe[E]=_e*R,fe[S]=z*C,fe[_]=pe,p.push(fe.x,fe.y,fe.z),fe[E]=0,fe[S]=0,fe[_]=U>0?1:-1,v.push(fe.x,fe.y,fe.z),g.push(Q/O),g.push(1-ue/W),J+=1}}for(let ue=0;ue<W;ue++)for(let z=0;z<O;z++){const Q=y+z+ge*ue,_e=y+z+ge*(ue+1),we=y+(z+1)+ge*(ue+1),Ie=y+(z+1)+ge*ue;m.push(Q,_e,Ie),m.push(_e,we,Ie),Y+=6}h.addGroup(M,Y,N),M+=Y,y+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function bE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function l_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const EE={clone:Os,merge:In};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=bE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class c_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new se,X1=new It,W1=new It;class gi extends c_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,X1,W1),i.subVectors(W1,X1)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cs*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class wE extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new gi(Es,Ts,e,i);c.layers=this.layers,this.add(c);const f=new gi(Es,Ts,e,i);f.layers=this.layers,this.add(f);const h=new gi(Es,Ts,e,i);h.layers=this.layers,this.add(h);const m=new gi(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new gi(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class u_ extends zn{constructor(e=[],i=Us,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RE extends Ur{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new u_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vs(5,5,5),c=new ya({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:pa});c.uniforms.tEquirect.value=i;const f=new nr(l,c),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=_i),new wE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Oc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CE={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const S=i.getJointPose(E,r),_=this._getHandJoint(p,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class pp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(e),this.density=i}clone(){return new pp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class DE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class NE extends zn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ri,v=ri,g,y){super(null,f,h,m,p,v,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new se,UE=new se,LE=new mt;class wr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kd.subVectors(r,i).cross(UE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||LE.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new rl,PE=new It(.5,.5),Ic=new se;class f_{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,f=new wr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],M=c[7],b=c[8],E=c[9],S=c[10],_=c[11],R=c[12],C=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-f,M-v,_-b,B-R).normalize(),l[1].setComponents(p+f,M+v,_+b,B+R).normalize(),l[2].setComponents(p+h,M+g,_+E,B+C).normalize(),l[3].setComponents(p-h,M-g,_-E,B-C).normalize(),r)l[4].setComponents(m,y,S,L).normalize(),l[5].setComponents(p-m,M-y,_-S,B-L).normalize();else if(l[4].setComponents(p-m,M-y,_-S,B-L).normalize(),i===Ii)l[5].setComponents(p+m,M+y,_+S,B+L).normalize();else if(i===nu)l[5].setComponents(m,y,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=PE.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yh extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new se,ru=new se,q1=new ln,ko=new hp,zc=new rl,Qd=new se,j1=new se;class OE extends Bn{constructor(e=new jn,i=new Yh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),ru.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=au.distanceTo(ru);e.setAttribute("lineDistance",new qn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;q1.copy(l).invert(),ko.copy(e.ray).applyMatrix4(q1);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let E=M,S=b-1;E<S;E+=p){const _=v.getX(E),R=v.getX(E+1),C=Bc(this,e,ko,m,_,R,E);C&&i.push(C)}if(this.isLineLoop){const E=v.getX(b-1),S=v.getX(M),_=Bc(this,e,ko,m,E,S,b-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let E=M,S=b-1;E<S;E+=p){const _=Bc(this,e,ko,m,E,E+1,E);_&&i.push(_)}if(this.isLineLoop){const E=Bc(this,e,ko,m,b-1,M,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(au.fromBufferAttribute(h,l),ru.fromBufferAttribute(h,c),i.distanceSqToSegment(au,ru,Qd,j1)>r)return;Qd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Qd);if(!(p<e.near||p>e.far))return{distance:p,point:j1.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Y1=new se,Z1=new se;class K1 extends OE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Y1.fromBufferAttribute(i,l),Z1.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Y1.distanceTo(Z1);e.setAttribute("lineDistance",new qn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d_ extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Q1=new ln,Zh=new hp,Fc=new rl,Hc=new se;class IE extends Bn{constructor(e=new jn,i=new d_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;Q1.copy(l).invert(),Zh.copy(e.ray).applyMatrix4(Q1);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=y,E=M;b<E;b++){const S=p.getX(b);Hc.fromBufferAttribute(g,S),J1(Hc,S,m,l,e,i,this)}}else{const y=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=y,E=M;b<E;b++)Hc.fromBufferAttribute(g,b),J1(Hc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function J1(s,e,i,r,l,c,f){const h=Zh.distanceSqToPoint(s);if(h<i){const m=new se;Zh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class h_ extends zn{constructor(e,i,r=Nr,l,c,f,h=ri,m=ri,p,v=Ko,g=1){if(v!==Ko&&v!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class p_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mp extends jn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],f=[];h(l),p(r),v(),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(c.slice(),3)),this.setAttribute("uv",new qn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(R){const C=new se,L=new se,B=new se;for(let U=0;U<i.length;U+=3)M(i[U+0],C),M(i[U+1],L),M(i[U+2],B),m(C,L,B,R)}function m(R,C,L,B){const U=B+1,O=[];for(let W=0;W<=U;W++){O[W]=[];const N=R.clone().lerp(L,W/U),w=C.clone().lerp(L,W/U),G=U-W;for(let K=0;K<=G;K++)K===0&&W===U?O[W][K]=N:O[W][K]=N.clone().lerp(w,K/G)}for(let W=0;W<U;W++)for(let N=0;N<2*(U-W)-1;N++){const w=Math.floor(N/2);N%2===0?(y(O[W][w+1]),y(O[W+1][w]),y(O[W][w])):(y(O[W][w+1]),y(O[W+1][w+1]),y(O[W+1][w]))}}function p(R){const C=new se;for(let L=0;L<c.length;L+=3)C.x=c[L+0],C.y=c[L+1],C.z=c[L+2],C.normalize().multiplyScalar(R),c[L+0]=C.x,c[L+1]=C.y,c[L+2]=C.z}function v(){const R=new se;for(let C=0;C<c.length;C+=3){R.x=c[C+0],R.y=c[C+1],R.z=c[C+2];const L=S(R)/2/Math.PI+.5,B=_(R)/Math.PI+.5;f.push(L,1-B)}b(),g()}function g(){for(let R=0;R<f.length;R+=6){const C=f[R+0],L=f[R+2],B=f[R+4],U=Math.max(C,L,B),O=Math.min(C,L,B);U>.9&&O<.1&&(C<.2&&(f[R+0]+=1),L<.2&&(f[R+2]+=1),B<.2&&(f[R+4]+=1))}}function y(R){c.push(R.x,R.y,R.z)}function M(R,C){const L=R*3;C.x=e[L+0],C.y=e[L+1],C.z=e[L+2]}function b(){const R=new se,C=new se,L=new se,B=new se,U=new It,O=new It,W=new It;for(let N=0,w=0;N<c.length;N+=9,w+=6){R.set(c[N+0],c[N+1],c[N+2]),C.set(c[N+3],c[N+4],c[N+5]),L.set(c[N+6],c[N+7],c[N+8]),U.set(f[w+0],f[w+1]),O.set(f[w+2],f[w+3]),W.set(f[w+4],f[w+5]),B.copy(R).add(C).add(L).divideScalar(3);const G=S(B);E(U,w+0,R,G),E(O,w+2,C,G),E(W,w+4,L,G)}}function E(R,C,L,B){B<0&&R.x===1&&(f[C]=R.x-1),L.x===0&&L.z===0&&(f[C]=B/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function _(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.vertices,e.indices,e.radius,e.details)}}const Vc=new se,Gc=new se,Jd=new se,kc=new vi;class zE extends jn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Cs*i),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),y={},M=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:E,b:S,c:_}=kc;if(E.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),kc.getNormal(Jd),g[0]=`${Math.round(E.x*l)},${Math.round(E.y*l)},${Math.round(E.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let R=0;R<3;R++){const C=(R+1)%3,L=g[R],B=g[C],U=kc[v[R]],O=kc[v[C]],W=`${L}_${B}`,N=`${B}_${L}`;N in y&&y[N]?(Jd.dot(y[N].normal)<=c&&(M.push(U.x,U.y,U.z),M.push(O.x,O.y,O.z)),y[N]=null):W in y||(y[W]={index0:p[R],index1:p[C],normal:Jd.clone()})}}for(const b in y)if(y[b]){const{index0:E,index1:S}=y[b];Vc.fromBufferAttribute(h,E),Gc.fromBufferAttribute(h,S),M.push(Vc.x,Vc.y,Vc.z),M.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new qn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class gp extends mp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new gp(e.radius,e.detail)}}class cu extends jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,y=i/m,M=[],b=[],E=[],S=[];for(let _=0;_<v;_++){const R=_*y-f;for(let C=0;C<p;C++){const L=C*g-c;b.push(L,-R,0),E.push(0,0,1),S.push(C/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let R=0;R<h;R++){const C=R+p*_,L=R+p*(_+1),B=R+1+p*(_+1),U=R+1+p*_;M.push(C,L,U),M.push(L,B,U)}this.setIndex(M),this.setAttribute("position",new qn(b,3)),this.setAttribute("normal",new qn(E,3)),this.setAttribute("uv",new qn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class BE extends jn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],r=new Set,l=new se,c=new se;if(e.index!==null){const f=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const g=m[p],y=g.start,M=g.count;for(let b=y,E=y+M;b<E;b+=3)for(let S=0;S<3;S++){const _=h.getX(b+S),R=h.getX(b+(S+1)%3);l.fromBufferAttribute(f,_),c.fromBufferAttribute(f,R),$1(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,g=3*h+(p+1)%3;l.fromBufferAttribute(f,v),c.fromBufferAttribute(f,g),$1(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new qn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $1(s,e,i){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class FE extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class VE extends c_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GE extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ev(s,e,i,r){const l=kE(r);switch(i){case Qv:return s*e;case $v:return s*e/l.components*l.byteLength;case op:return s*e/l.components*l.byteLength;case lp:return s*e*2/l.components*l.byteLength;case cp:return s*e*2/l.components*l.byteLength;case Jv:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case up:return s*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case bh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case Mh:return Math.max(s,8)*Math.max(e,8)/2;case Eh:case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vh:case Gh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xh:case Wh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(s){switch(s){case va:case jv:return{byteLength:1,components:1};case Yo:case Yv:case zs:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Nr:case ap:case da:return{byteLength:4,components:1};case Zv:case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);function m_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function XE(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<g.length;M++){const b=g[y],E=g[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,g[y]=E)}g.length=y+1;for(let M=0,b=g.length;M<b;M++){const E=g[M];s.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
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
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
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
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aT=`#ifdef USE_IRIDESCENCE
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
#endif`,rT=`#ifdef USE_BUMPMAP
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pT=`#define PI 3.141592653589793
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
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gT=`vec3 transformedNormal = objectNormal;
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
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
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
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
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
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,kT=`uniform sampler2D dfgLUT;
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
}`,XT=`
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
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
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e3=`#if defined( USE_POINTS_UV )
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
#endif`,t3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C3=`float getShadowMask() {
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
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,U3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L3=`#ifdef USE_SKINNING
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
#endif`,P3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
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
#endif`,F3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W3=`uniform sampler2D t2D;
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
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`#include <common>
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
}`,Q3=`#if DEPTH_PACKING == 3200
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
}`,J3=`#define DISTANCE
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
}`,$3=`#define DISTANCE
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define LAMBERT
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
}`,lA=`#define MATCAP
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
}`,cA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,fA=`#define NORMAL
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
}`,dA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,pA=`#define STANDARD
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
}`,mA=`#define STANDARD
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
}`,gA=`#define TOON
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
}`,vA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,MA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:WE,alphahash_pars_fragment:qE,alphamap_fragment:jE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:aT,bumpmap_pars_fragment:rT,clipping_planes_fragment:sT,clipping_planes_pars_fragment:oT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:dT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:vT,displacementmap_vertex:_T,emissivemap_fragment:yT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:bT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:zT,envmap_vertex:wT,fog_vertex:RT,fog_pars_vertex:CT,fog_fragment:DT,fog_pars_fragment:NT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:OT,lights_pars_begin:IT,lights_toon_fragment:BT,lights_toon_pars_fragment:FT,lights_phong_fragment:HT,lights_phong_pars_fragment:VT,lights_physical_fragment:GT,lights_physical_pars_fragment:kT,lights_fragment_begin:XT,lights_fragment_maps:WT,lights_fragment_end:qT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:ZT,logdepthbuf_vertex:KT,map_fragment:QT,map_pars_fragment:JT,map_particle_fragment:$T,map_particle_pars_fragment:e3,metalnessmap_fragment:t3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:a3,morphnormal_vertex:r3,morphtarget_pars_vertex:s3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:c3,normal_pars_fragment:u3,normal_pars_vertex:f3,normal_vertex:d3,normalmap_pars_fragment:h3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:g3,iridescence_pars_fragment:v3,opaque_fragment:_3,packing:y3,premultiplied_alpha_fragment:x3,project_vertex:S3,dithering_fragment:M3,dithering_pars_fragment:b3,roughnessmap_fragment:E3,roughnessmap_pars_fragment:T3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:w3,shadowmap_vertex:R3,shadowmask_pars_fragment:C3,skinbase_vertex:D3,skinning_pars_vertex:N3,skinning_vertex:U3,skinnormal_vertex:L3,specularmap_fragment:P3,specularmap_pars_fragment:O3,tonemapping_fragment:I3,tonemapping_pars_fragment:z3,transmission_fragment:B3,transmission_pars_fragment:F3,uv_pars_fragment:H3,uv_pars_vertex:V3,uv_vertex:G3,worldpos_vertex:k3,background_vert:X3,background_frag:W3,backgroundCube_vert:q3,backgroundCube_frag:j3,cube_vert:Y3,cube_frag:Z3,depth_vert:K3,depth_frag:Q3,distanceRGBA_vert:J3,distanceRGBA_frag:$3,equirect_vert:eA,equirect_frag:tA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:dA,meshphong_frag:hA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:vA,points_vert:_A,points_frag:yA,shadow_vert:xA,shadow_frag:SA,sprite_vert:MA,sprite_frag:bA},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Xc={r:0,b:0,g:0},Tr=new _a,EA=new ln;function TA(s,e,i,r,l,c,f){const h=new Lt(0);let m=c===!0?0:1,p,v,g=null,y=0,M=null;function b(C){let L=C.isScene===!0?C.background:null;return L&&L.isTexture&&(L=(C.backgroundBlurriness>0?i:e).get(L)),L}function E(C){let L=!1;const B=b(C);B===null?_(h,m):B&&B.isColor&&(_(B,1),L=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,L){const B=b(L);B&&(B.isCubeTexture||B.mapping===lu)?(v===void 0&&(v=new nr(new Vs(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Os(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(U,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Tr.copy(L.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Tr)),v.material.toneMapped=Ut.getTransfer(B.colorSpace)!==Wt,(g!==B||y!==B.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=B,y=B.version,M=s.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new nr(new cu(2,2),new ya({name:"BackgroundMaterial",uniforms:Os(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(B.colorSpace)!==Wt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||y!==B.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=B,y=B.version,M=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,L){C.getRGB(Xc,l_(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,L,f)}function R(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),m=L,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,_(h,m)},render:E,addToRenderList:S,dispose:R}}function AA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(w,G,K,ce,pe){let ge=!1;const I=g(ce,K,G);c!==I&&(c=I,p(c.object)),ge=M(w,ce,K,pe),ge&&b(w,ce,K,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,L(w,G,K,ce),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function v(w){return s.deleteVertexArray(w)}function g(w,G,K){const ce=K.wireframe===!0;let pe=r[w.id];pe===void 0&&(pe={},r[w.id]=pe);let ge=pe[G.id];ge===void 0&&(ge={},pe[G.id]=ge);let I=ge[ce];return I===void 0&&(I=y(m()),ge[ce]=I),I}function y(w){const G=[],K=[],ce=[];for(let pe=0;pe<i;pe++)G[pe]=0,K[pe]=0,ce[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:ce,object:w,attributes:{},index:null}}function M(w,G,K,ce){const pe=c.attributes,ge=G.attributes;let I=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){const ue=pe[Y];let z=ge[Y];if(z===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),ue===void 0||ue.attribute!==z||z&&ue.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==ce}function b(w,G,K,ce){const pe={},ge=G.attributes;let I=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){let ue=ge[Y];ue===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor));const z={};z.attribute=ue,ue&&ue.data&&(z.data=ue.data),pe[Y]=z,I++}c.attributes=pe,c.attributesNum=I,c.index=ce}function E(){const w=c.newAttributes;for(let G=0,K=w.length;G<K;G++)w[G]=0}function S(w){_(w,0)}function _(w,G){const K=c.newAttributes,ce=c.enabledAttributes,pe=c.attributeDivisors;K[w]=1,ce[w]===0&&(s.enableVertexAttribArray(w),ce[w]=1),pe[w]!==G&&(s.vertexAttribDivisor(w,G),pe[w]=G)}function R(){const w=c.newAttributes,G=c.enabledAttributes;for(let K=0,ce=G.length;K<ce;K++)G[K]!==w[K]&&(s.disableVertexAttribArray(K),G[K]=0)}function C(w,G,K,ce,pe,ge,I){I===!0?s.vertexAttribIPointer(w,G,K,pe,ge):s.vertexAttribPointer(w,G,K,ce,pe,ge)}function L(w,G,K,ce){E();const pe=ce.attributes,ge=K.getAttributes(),I=G.defaultAttributeValues;for(const J in ge){const Y=ge[J];if(Y.location>=0){let fe=pe[J];if(fe===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),fe!==void 0){const ue=fe.normalized,z=fe.itemSize,Q=e.get(fe);if(Q===void 0)continue;const _e=Q.buffer,we=Q.type,Ie=Q.bytesPerElement,ae=we===s.INT||we===s.UNSIGNED_INT||fe.gpuType===ap;if(fe.isInterleavedBufferAttribute){const de=fe.data,Ne=de.stride,Be=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)_(Y.location+Ee,de.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)S(Y.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ee=0;Ee<Y.locationSize;Ee++)C(Y.location+Ee,z/Y.locationSize,we,ue,Ne*Ie,(Be+z/Y.locationSize*Ee)*Ie,ae)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)_(Y.location+de,fe.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<Y.locationSize;de++)S(Y.location+de);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let de=0;de<Y.locationSize;de++)C(Y.location+de,z/Y.locationSize,we,ue,z*Ie,z/Y.locationSize*de*Ie,ae)}}else if(I!==void 0){const ue=I[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(Y.location,ue);break;case 3:s.vertexAttrib3fv(Y.location,ue);break;case 4:s.vertexAttrib4fv(Y.location,ue);break;default:s.vertexAttrib1fv(Y.location,ue)}}}}R()}function B(){W();for(const w in r){const G=r[w];for(const K in G){const ce=G[K];for(const pe in ce)v(ce[pe].object),delete ce[pe];delete G[K]}delete r[w]}}function U(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const K in G){const ce=G[K];for(const pe in ce)v(ce[pe].object),delete ce[pe];delete G[K]}delete r[w.id]}function O(w){for(const G in r){const K=r[G];if(K[w.id]===void 0)continue;const ce=K[w.id];for(const pe in ce)v(ce[pe].object),delete ce[pe];delete K[w.id]}}function W(){N(),f=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function wA(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,r,1)}function m(p,v,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,g);let b=0;for(let E=0;E<g;E++)b+=v[E]*y[E];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function RA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const W=O===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==va&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==da&&!W)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ct("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:L,vertexTextures:B,maxSamples:U}}function CA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new wr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||l;return l=y,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,M){const b=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||b===null||b.length===0||c&&!S)c?v(null):p();else{const R=c?0:r,C=R*4;let L=_.clippingState||null;m.value=L,L=v(b,y,C,M);for(let B=0;B!==C;++B)L[B]=i[B];_.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,y,M,b){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=m.value,b!==!0||S===null){const _=M+E*4,R=y.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let C=0,L=M;C!==E;++C,L+=4)f.copy(g[C]).applyMatrix4(R,h),f.normal.toArray(S,L),S[L+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function DA(s){let e=new WeakMap;function i(f,h){return h===gh?f.mapping=Us:h===vh&&(f.mapping=Ls),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===gh||h===vh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new RE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const $a=4,tv=[.125,.215,.35,.446,.526,.582],Cr=20,NA=256,Xo=new VE,nv=new Lt;let $d=null,eh=0,th=0,nh=!1;const UA=new se;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=UA}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:zs,format:wi,colorSpace:Ps,depthBuffer:!1},l=av(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LA(c)),this._blurMaterial=OA(c,e,i),this._ggxMaterial=PA(c,e,i)}return l}_compileMaterial(e){const i=new nr(new jn,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(nv),g.toneMapping=er,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nr(new Vs,new r_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let _=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,_=!0):(S.color.copy(nv),_=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[C],c.y,c.z)):L===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[C]));const B=this._cubeSize;As(l,L*B,C>2?B:0,B,B),g.setRenderTarget(l),_&&g.render(E,m),g.render(e,m)}g.toneMapping=M,g.autoClear=y,e.background=R}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),y=.05+p*.95,M=g*y,{_lodMax:b}=this,E=this._sizeLods[r],S=3*E*(r>b-$a?r-b+$a:0),_=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,As(c,S,_,3*E,2*E),l.setRenderTarget(c),l.render(h,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,As(e,S,_,3*E,2*E),l.setRenderTarget(e),l.render(h,Xo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),E=c/b,S=isFinite(c)?1+Math.floor(v*E):Cr;S>Cr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let R=0;for(let O=0;O<Cr;++O){const W=O/E,N=Math.exp(-W*W/2);_.push(N),O===0?R+=N:O<S&&(R+=2*N)}for(let O=0;O<_.length;O++)_[O]=_[O]/R;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:C}=this;y.dTheta.value=b,y.mipInt.value=C-r;const L=this._sizeLods[l],B=3*L*(l>C-$a?l-C+$a:0),U=4*(this._cubeSize-L);As(i,B,U,3*L,2*L),m.setRenderTarget(i),m.render(g,Xo)}}function LA(s){const e=[],i=[],r=[];let l=s;const c=s-$a+1+tv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-$a?m=tv[f-s+$a-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,E=3,S=2,_=1,R=new Float32Array(E*b*M),C=new Float32Array(S*b*M),L=new Float32Array(_*b*M);for(let U=0;U<M;U++){const O=U%3*2/3-1,W=U>2?0:-1,N=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];R.set(N,E*b*U),C.set(y,S*b*U);const w=[U,U,U,U,U,U];L.set(w,_*b*U)}const B=new jn;B.setAttribute("position",new Ri(R,E)),B.setAttribute("uv",new Ri(C,S)),B.setAttribute("faceIndex",new Ri(L,_)),r.push(new nr(B,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function av(s,e,i){const r=new Ur(s,e,i);return r.texture.mapping=lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function PA(s,e,i){return new ya({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function OA(s,e,i){const r=new Float32Array(Cr),l=new se(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function rv(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function sv(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}function IA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===gh||m===vh,v=m===Us||m===Ls;if(p||v){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new iv(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new iv(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function zA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jo("WebGLRenderer: "+r+" extension not supported."),l}}}function BA(s,e,i,r){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,b=g.attributes.position;let E=0;if(M!==null){const R=M.array;E=M.version;for(let C=0,L=R.length;C<L;C+=3){const B=R[C+0],U=R[C+1],O=R[C+2];y.push(B,U,U,O,O,B)}}else if(b!==void 0){const R=b.array;E=b.version;for(let C=0,L=R.length/3-1;C<L;C+=3){const B=C+0,U=C+1,O=C+2;y.push(B,U,U,O,O,B)}}else return;const S=new(t_(y)?o_:s_)(y,1);S.version=E;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function FA(s,e,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*f),i.update(M,r,1)}function p(y,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,y*f,b),i.update(M,r,b))}function v(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,r,1)}function g(y,M,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/f,M[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,E,0,b);let _=0;for(let R=0;R<b;R++)_+=M[R]*E[R];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function HA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function VA(s,e,i){const r=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let M=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",M)};y!==void 0&&y.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),E===!0&&(L=2),S===!0&&(L=3);let B=h.attributes.position.count*L,U=1;B>e.maxTextureSize&&(U=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*U*4*g),W=new n_(O,B,U,g);W.type=da,W.needsUpdate=!0;const N=L*4;for(let w=0;w<g;w++){const G=_[w],K=R[w],ce=C[w],pe=B*U*4*w;for(let ge=0;ge<G.count;ge++){const I=ge*N;b===!0&&(l.fromBufferAttribute(G,ge),O[pe+I+0]=l.x,O[pe+I+1]=l.y,O[pe+I+2]=l.z,O[pe+I+3]=0),E===!0&&(l.fromBufferAttribute(K,ge),O[pe+I+4]=l.x,O[pe+I+5]=l.y,O[pe+I+6]=l.z,O[pe+I+7]=0),S===!0&&(l.fromBufferAttribute(ce,ge),O[pe+I+8]=l.x,O[pe+I+9]=l.y,O[pe+I+10]=l.z,O[pe+I+11]=ce.itemSize===4?l.w:1)}}y={count:g,texture:W,size:new It(B,U)},r.set(h,y),h.addEventListener("dispose",M)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let E=0;E<p.length;E++)M+=p[E];const b=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function GA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const g_=new zn,ov=new h_(1,1),v_=new n_,__=new fE,y_=new u_,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),dv=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=lv[l];if(c===void 0&&(c=new Float32Array(l),lv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fu(s,e){let i=cv[e];i===void 0&&(i=new Int32Array(e),cv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function kA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function qA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function jA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;dv.set(r),s.uniformMatrix2fv(this.addr,!1,dv),yn(i,r)}}function YA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;fv.set(r),s.uniformMatrix3fv(this.addr,!1,fv),yn(i,r)}}function ZA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;uv.set(r),s.uniformMatrix4fv(this.addr,!1,uv),yn(i,r)}}function KA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function ew(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function tw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function nw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function iw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function aw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ov.compareFunction=e_,c=ov):c=g_,i.setTexture2D(e||c,l)}function rw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||__,l)}function sw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||y_,l)}function ow(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||v_,l)}function lw(s){switch(s){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return qA;case 35674:return jA;case 35675:return YA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}function cw(s,e){s.uniform1fv(this.addr,e)}function uw(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function fw(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function dw(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function hw(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function pw(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function mw(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function gw(s,e){s.uniform1iv(this.addr,e)}function vw(s,e){s.uniform2iv(this.addr,e)}function _w(s,e){s.uniform3iv(this.addr,e)}function yw(s,e){s.uniform4iv(this.addr,e)}function xw(s,e){s.uniform1uiv(this.addr,e)}function Sw(s,e){s.uniform2uiv(this.addr,e)}function Mw(s,e){s.uniform3uiv(this.addr,e)}function bw(s,e){s.uniform4uiv(this.addr,e)}function Ew(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||g_,c[f])}function Tw(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||__,c[f])}function Aw(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||y_,c[f])}function ww(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||v_,c[f])}function Rw(s){switch(s){case 5126:return cw;case 35664:return uw;case 35665:return fw;case 35666:return dw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return yw;case 5125:return xw;case 36294:return Sw;case 36295:return Mw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return ww}}class Cw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=lw(i.type)}}class Dw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Rw(i.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function hv(s,e){s.seq.push(e),s.map[e.id]=e}function Uw(s,e,i){const r=s.name,l=r.length;for(ih.lastIndex=0;;){const c=ih.exec(r),f=ih.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){hv(i,p===void 0?new Cw(h,s,e):new Dw(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new Nw(h),hv(i,g)),i=g}}}class $c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);Uw(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function pv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Lw=37297;let Pw=0;function Ow(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const mv=new mt;function Iw(s){Ut._getMatrix(mv,Ut.workingColorSpace,s);const e=`mat3( ${mv.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case tu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Ow(s.getShaderSource(e),h)}else return c}function zw(s,e){const i=Iw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Bw(s,e){let i;switch(e){case bb:i="Linear";break;case Eb:i="Reinhard";break;case Tb:i="Cineon";break;case Ab:i="ACESFilmic";break;case Rb:i="AgX";break;case Cb:i="Neutral";break;case wb:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new se;function Fw(){Ut.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Vw(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Gw(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Wo(s){return s!==""}function vv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(kw,Ww)}const Xw=new Map;function Ww(s,e){let i=gt[e];if(i===void 0){const r=Xw.get(e);if(r!==void 0)i=gt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(i)}const qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(s){return s.replace(qw,jw)}function jw(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Yw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Qw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wv:e="ENVMAP_BLENDING_MULTIPLY";break;case Sb:e="ENVMAP_BLENDING_MIX";break;case Mb:e="ENVMAP_BLENDING_ADD";break}return e}function Jw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $w(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=Yw(i),p=Zw(i),v=Kw(i),g=Qw(i),y=Jw(i),M=Hw(i),b=Vw(c),E=l.createProgram();let S,_,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(S=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?gt.tonemapping_pars_fragment:"",i.toneMapping!==er?Bw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,zw("linearToOutputTexel",i.outputColorSpace),Fw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Kh(f),f=vv(f,i),f=_v(f,i),h=Kh(h),h=vv(h,i),h=_v(h,i),f=yv(f),h=yv(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===T1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+S+f,L=R+_+h,B=pv(l,l.VERTEX_SHADER,C),U=pv(l,l.FRAGMENT_SHADER,L);l.attachShader(E,B),l.attachShader(E,U),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function O(G){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(E)||"",ce=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(U)||"",ge=K.trim(),I=ce.trim(),J=pe.trim();let Y=!0,fe=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,B,U);else{const ue=gv(l,B,"vertex"),z=gv(l,U,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ge+`
`+ue+`
`+z)}else ge!==""?ct("WebGLProgram: Program Info Log:",ge):(I===""||J==="")&&(fe=!1);fe&&(G.diagnostics={runnable:Y,programLog:ge,vertexShader:{log:I,prefix:S},fragmentShader:{log:J,prefix:_}})}l.deleteShader(B),l.deleteShader(U),W=new $c(l,E),N=Gw(l,E)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(E,Lw)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=U,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new nR(e),i.set(e,r)),r}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function iR(s,e,i,r,l,c,f){const h=new i_,m=new tR,p=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return p.add(N),N===0?"uv":`uv${N}`}function S(N,w,G,K,ce){const pe=K.fog,ge=ce.geometry,I=N.isMeshStandardMaterial?K.environment:null,J=(N.isMeshStandardMaterial?i:e).get(N.envMap||I),Y=J&&J.mapping===lu?J.image.height:null,fe=b[N.type];N.precision!==null&&(M=l.getMaxPrecision(N.precision),M!==N.precision&&ct("WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const ue=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,z=ue!==void 0?ue.length:0;let Q=0;ge.morphAttributes.position!==void 0&&(Q=1),ge.morphAttributes.normal!==void 0&&(Q=2),ge.morphAttributes.color!==void 0&&(Q=3);let _e,we,Ie,ae;if(fe){const Rt=Oi[fe];_e=Rt.vertexShader,we=Rt.fragmentShader}else _e=N.vertexShader,we=N.fragmentShader,m.update(N),Ie=m.getVertexShaderID(N),ae=m.getFragmentShaderID(N);const de=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Be=ce.isInstancedMesh===!0,Ee=ce.isBatchedMesh===!0,Fe=!!N.map,vt=!!N.matcap,it=!!J,_t=!!N.aoMap,H=!!N.lightMap,je=!!N.bumpMap,ft=!!N.normalMap,Pt=!!N.displacementMap,He=!!N.emissiveMap,zt=!!N.metalnessMap,Ze=!!N.roughnessMap,ot=N.anisotropy>0,P=N.clearcoat>0,T=N.dispersion>0,ee=N.iridescence>0,ye=N.sheen>0,Me=N.transmission>0,he=ot&&!!N.anisotropyMap,Ke=P&&!!N.clearcoatMap,Pe=P&&!!N.clearcoatNormalMap,et=P&&!!N.clearcoatRoughnessMap,Ye=ee&&!!N.iridescenceMap,be=ee&&!!N.iridescenceThicknessMap,Ae=ye&&!!N.sheenColorMap,Qe=ye&&!!N.sheenRoughnessMap,We=!!N.specularMap,ze=!!N.specularColorMap,st=!!N.specularIntensityMap,k=Me&&!!N.transmissionMap,Ue=Me&&!!N.thicknessMap,Ce=!!N.gradientMap,De=!!N.alphaMap,Te=N.alphaTest>0,Se=!!N.alphaHash,Ge=!!N.extensions;let lt=er;N.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Vt={shaderID:fe,shaderType:N.type,shaderName:N.name,vertexShader:_e,fragmentShader:we,defines:N.defines,customVertexShaderID:Ie,customFragmentShaderID:ae,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ee,batchingColor:Ee&&ce._colorsTexture!==null,instancing:Be,instancingColor:Be&&ce.instanceColor!==null,instancingMorph:Be&&ce.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ps,alphaToCoverage:!!N.alphaToCoverage,map:Fe,matcap:vt,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:Y,aoMap:_t,lightMap:H,bumpMap:je,normalMap:ft,displacementMap:y&&Pt,emissiveMap:He,normalMapObjectSpace:ft&&N.normalMapType===Pb,normalMapTangentSpace:ft&&N.normalMapType===Lb,metalnessMap:zt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:he,clearcoat:P,clearcoatMap:Ke,clearcoatNormalMap:Pe,clearcoatRoughnessMap:et,dispersion:T,iridescence:ee,iridescenceMap:Ye,iridescenceThicknessMap:be,sheen:ye,sheenColorMap:Ae,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:ze,specularIntensityMap:st,transmission:Me,transmissionMap:k,thicknessMap:Ue,gradientMap:Ce,opaque:N.transparent===!1&&N.blending===Rs&&N.alphaToCoverage===!1,alphaMap:De,alphaTest:Te,alphaHash:Se,combine:N.combine,mapUv:Fe&&E(N.map.channel),aoMapUv:_t&&E(N.aoMap.channel),lightMapUv:H&&E(N.lightMap.channel),bumpMapUv:je&&E(N.bumpMap.channel),normalMapUv:ft&&E(N.normalMap.channel),displacementMapUv:Pt&&E(N.displacementMap.channel),emissiveMapUv:He&&E(N.emissiveMap.channel),metalnessMapUv:zt&&E(N.metalnessMap.channel),roughnessMapUv:Ze&&E(N.roughnessMap.channel),anisotropyMapUv:he&&E(N.anisotropyMap.channel),clearcoatMapUv:Ke&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(N.sheenRoughnessMap.channel),specularMapUv:We&&E(N.specularMap.channel),specularColorMapUv:ze&&E(N.specularColorMap.channel),specularIntensityMapUv:st&&E(N.specularIntensityMap.channel),transmissionMapUv:k&&E(N.transmissionMap.channel),thicknessMapUv:Ue&&E(N.thicknessMap.channel),alphaMapUv:De&&E(N.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ft||ot),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ge.attributes.uv&&(Fe||De),fog:!!pe,useFog:N.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ne,skinning:ce.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Fe&&N.map.isVideoTexture===!0&&Ut.getTransfer(N.map.colorSpace)===Wt,decodeVideoTextureEmissive:He&&N.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(N.emissiveMap.colorSpace)===Wt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ua,flipSided:N.side===Wn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ge&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&N.extensions.multiDraw===!0||Ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function _(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const G in N.defines)w.push(G),w.push(N.defines[G]);return N.isRawShaderMaterial===!1&&(R(w,N),C(w,N),w.push(s.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function R(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function C(N,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),N.push(h.mask)}function L(N){const w=b[N.type];let G;if(w){const K=Oi[w];G=EE.clone(K.uniforms)}else G=N.uniforms;return G}function B(N,w){let G;for(let K=0,ce=v.length;K<ce;K++){const pe=v[K];if(pe.cacheKey===w){G=pe,++G.usedTimes;break}}return G===void 0&&(G=new $w(s,w,N,c),v.push(G)),G}function U(N){if(--N.usedTimes===0){const w=v.indexOf(N);v[w]=v[v.length-1],v.pop(),N.destroy()}}function O(N){m.remove(N)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:B,releaseProgram:U,releaseShaderCache:O,programs:v,dispose:W}}function aR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function rR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,y,M,b,E,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:y,material:M,groupOrder:b,renderOrder:g.renderOrder,z:E,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=E,_.group=S),e++,_}function h(g,y,M,b,E,S){const _=f(g,y,M,b,E,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,y,M,b,E,S){const _=f(g,y,M,b,E,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||rR),r.length>1&&r.sort(y||Sv),l.length>1&&l.sort(y||Sv)}function v(){for(let g=e,y=s.length;g<y;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function sR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Mv,s.set(r,[f])):l>=c.length?(f=new Mv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function oR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Lt};break;case"SpotLight":i={position:new se,direction:new se,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=i,i}}}function lR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let cR=0;function uR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fR(s){const e=new oR,i=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const l=new se,c=new ln,f=new ln;function h(p){let v=0,g=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,E=0,S=0,_=0,R=0,C=0,L=0,B=0,U=0,O=0;p.sort(uR);for(let N=0,w=p.length;N<w;N++){const G=p[N],K=G.color,ce=G.intensity,pe=G.distance,ge=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=K.r*ce,g+=K.g*ce,y+=K.b*ce;else if(G.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(G.sh.coefficients[I],ce);O++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const J=G.shadow,Y=i.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=G.shadow.matrix,R++}r.directional[M]=I,M++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(K).multiplyScalar(ce),I.distance=pe,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,r.spot[E]=I;const J=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,J.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[E]=J.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.spotShadow[E]=Y,r.spotShadowMap[E]=ge,L++}E++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(K).multiplyScalar(ce),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=I,S++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const J=G.shadow,Y=i.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=ge,r.pointShadowMatrix[b]=G.shadow.matrix,C++}r.point[b]=I,b++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(ce),I.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[_]=I,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==M||W.pointLength!==b||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==R||W.numPointShadows!==C||W.numSpotShadows!==L||W.numSpotMaps!==B||W.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=L+B-U,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,W.directionalLength=M,W.pointLength=b,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=R,W.numPointShadows=C,W.numSpotShadows=L,W.numSpotMaps=B,W.numLightProbes=O,r.version=cR++)}function m(p,v){let g=0,y=0,M=0,b=0,E=0;const S=v.matrixWorldInverse;for(let _=0,R=p.length;_<R;_++){const C=p[_];if(C.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),g++}else if(C.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),M++}else if(C.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),f.identity(),c.copy(C.matrixWorld),c.premultiply(S),f.extractRotation(c),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(C.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const L=r.hemi[E];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),E++}}}return{setup:h,setupView:m,state:r}}function bv(s){const e=new fR(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function dR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new bv(s),e.set(l,[h])):c>=f.length?(h=new bv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
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
}`;function mR(s,e,i){let r=new f_;const l=new It,c=new It,f=new on,h=new FE({depthPacking:Ub}),m=new HE,p={},v=i.maxTextureSize,g={[tr]:Wn,[Wn]:tr,[ua]:ua},y=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:hR,fragmentShader:pR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new jn;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new nr(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let _=this.type;this.render=function(U,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const N=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),K=s.state;K.setBlending(pa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=_!==ca&&this.type===ca,pe=_===ca&&this.type!==ca;for(let ge=0,I=U.length;ge<I;ge++){const J=U[ge],Y=J.shadow;if(Y===void 0){ct("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const fe=Y.getFrameExtents();if(l.multiply(fe),c.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/fe.x),l.x=c.x*fe.x,Y.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/fe.y),l.y=c.y*fe.y,Y.mapSize.y=c.y)),Y.map===null||ce===!0||pe===!0){const z=this.type!==ca?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ur(l.x,l.y,z),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ue=Y.getViewportCount();for(let z=0;z<ue;z++){const Q=Y.getViewport(z);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(f),Y.updateMatrices(J,z),r=Y.getFrustum(),L(O,W,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===ca&&R(Y,W),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(N,w,G)};function R(U,O){const W=e.update(E);y.defines.VSM_SAMPLES!==U.blurSamples&&(y.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ur(l.x,l.y)),y.uniforms.shadow_pass.value=U.map.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,W,y,E,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,W,M,E,null)}function C(U,O,W,N){let w=null;const G=W.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)w=G;else if(w=W.isPointLight===!0?m:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=w.uuid,ce=O.uuid;let pe=p[K];pe===void 0&&(pe={},p[K]=pe);let ge=pe[ce];ge===void 0&&(ge=w.clone(),pe[ce]=ge,O.addEventListener("dispose",B)),w=ge}if(w.visible=O.visible,w.wireframe=O.wireframe,N===ca?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=s.properties.get(w);K.light=W}return w}function L(U,O,W,N,w){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ca)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,U.matrixWorld);const ce=e.update(U),pe=U.material;if(Array.isArray(pe)){const ge=ce.groups;for(let I=0,J=ge.length;I<J;I++){const Y=ge[I],fe=pe[Y.materialIndex];if(fe&&fe.visible){const ue=C(U,fe,N,w);U.onBeforeShadow(s,U,O,W,ce,ue,Y),s.renderBufferDirect(W,null,ce,ue,U,Y),U.onAfterShadow(s,U,O,W,ce,ue,Y)}}}else if(pe.visible){const ge=C(U,pe,N,w);U.onBeforeShadow(s,U,O,W,ce,ge,null),s.renderBufferDirect(W,null,ce,ge,U,null),U.onAfterShadow(s,U,O,W,ce,ge,null)}}const K=U.children;for(let ce=0,pe=K.length;ce<pe;ce++)L(K[ce],O,W,N,w)}function B(U){U.target.removeEventListener("dispose",B);for(const W in p){const N=p[W],w=U.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const gR={[ch]:uh,[fh]:ph,[dh]:mh,[Ns]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:Ns};function vR(s,e){function i(){let k=!1;const Ue=new on;let Ce=null;const De=new on(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Se,Ge,lt,Vt){Vt===!0&&(Te*=lt,Se*=lt,Ge*=lt),Ue.set(Te,Se,Ge,lt),De.equals(Ue)===!1&&(s.clearColor(Te,Se,Ge,lt),De.copy(Ue))},reset:function(){k=!1,Ce=null,De.set(-1,0,0,0)}}}function r(){let k=!1,Ue=!1,Ce=null,De=null,Te=null;return{setReversed:function(Se){if(Ue!==Se){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ue=Se;const lt=Te;Te=null,this.setClear(lt)}},getReversed:function(){return Ue},setTest:function(Se){Se?de(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Se){Ce!==Se&&!k&&(s.depthMask(Se),Ce=Se)},setFunc:function(Se){if(Ue&&(Se=gR[Se]),De!==Se){switch(Se){case ch:s.depthFunc(s.NEVER);break;case uh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case dh:s.depthFunc(s.EQUAL);break;case hh:s.depthFunc(s.GEQUAL);break;case ph:s.depthFunc(s.GREATER);break;case mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Te!==Se&&(Ue&&(Se=1-Se),s.clearDepth(Se),Te=Se)},reset:function(){k=!1,Ce=null,De=null,Te=null,Ue=!1}}}function l(){let k=!1,Ue=null,Ce=null,De=null,Te=null,Se=null,Ge=null,lt=null,Vt=null;return{setTest:function(Rt){k||(Rt?de(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Rt){Ue!==Rt&&!k&&(s.stencilMask(Rt),Ue=Rt)},setFunc:function(Rt,Dn,Yn){(Ce!==Rt||De!==Dn||Te!==Yn)&&(s.stencilFunc(Rt,Dn,Yn),Ce=Rt,De=Dn,Te=Yn)},setOp:function(Rt,Dn,Yn){(Se!==Rt||Ge!==Dn||lt!==Yn)&&(s.stencilOp(Rt,Dn,Yn),Se=Rt,Ge=Dn,lt=Yn)},setLocked:function(Rt){k=Rt},setClear:function(Rt){Vt!==Rt&&(s.clearStencil(Rt),Vt=Rt)},reset:function(){k=!1,Ue=null,Ce=null,De=null,Te=null,Se=null,Ge=null,lt=null,Vt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,M=[],b=null,E=!1,S=null,_=null,R=null,C=null,L=null,B=null,U=null,O=new Lt(0,0,0),W=0,N=!1,w=null,G=null,K=null,ce=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,J=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=J>=2);let fe=null,ue={};const z=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),_e=new on().fromArray(z),we=new on().fromArray(Q);function Ie(k,Ue,Ce,De){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(k,Se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<Ce;Ge++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ue+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Se}const ae={};ae[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(s.DEPTH_TEST),f.setFunc(Ns),je(!1),ft(y1),de(s.CULL_FACE),_t(pa);function de(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function Ne(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function Be(k,Ue){return g[k]!==Ue?(s.bindFramebuffer(k,Ue),g[k]=Ue,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ee(k,Ue){let Ce=M,De=!1;if(k){Ce=y.get(Ue),Ce===void 0&&(Ce=[],y.set(Ue,Ce));const Te=k.textures;if(Ce.length!==Te.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ge=Te.length;Se<Ge;Se++)Ce[Se]=s.COLOR_ATTACHMENT0+Se;Ce.length=Te.length,De=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,De=!0);De&&s.drawBuffers(Ce)}function Fe(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const vt={[Rr]:s.FUNC_ADD,[ab]:s.FUNC_SUBTRACT,[rb]:s.FUNC_REVERSE_SUBTRACT};vt[sb]=s.MIN,vt[ob]=s.MAX;const it={[lb]:s.ZERO,[cb]:s.ONE,[ub]:s.SRC_COLOR,[oh]:s.SRC_ALPHA,[gb]:s.SRC_ALPHA_SATURATE,[pb]:s.DST_COLOR,[db]:s.DST_ALPHA,[fb]:s.ONE_MINUS_SRC_COLOR,[lh]:s.ONE_MINUS_SRC_ALPHA,[mb]:s.ONE_MINUS_DST_COLOR,[hb]:s.ONE_MINUS_DST_ALPHA,[vb]:s.CONSTANT_COLOR,[_b]:s.ONE_MINUS_CONSTANT_COLOR,[yb]:s.CONSTANT_ALPHA,[xb]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(k,Ue,Ce,De,Te,Se,Ge,lt,Vt,Rt){if(k===pa){E===!0&&(Ne(s.BLEND),E=!1);return}if(E===!1&&(de(s.BLEND),E=!0),k!==ib){if(k!==S||Rt!==N){if((_!==Rr||L!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,L=Rr),Rt)switch(k){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case x1:s.blendFunc(s.ONE,s.ONE);break;case S1:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case M1:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",k);break}else switch(k){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case x1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case S1:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M1:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",k);break}R=null,C=null,B=null,U=null,O.set(0,0,0),W=0,S=k,N=Rt}return}Te=Te||Ue,Se=Se||Ce,Ge=Ge||De,(Ue!==_||Te!==L)&&(s.blendEquationSeparate(vt[Ue],vt[Te]),_=Ue,L=Te),(Ce!==R||De!==C||Se!==B||Ge!==U)&&(s.blendFuncSeparate(it[Ce],it[De],it[Se],it[Ge]),R=Ce,C=De,B=Se,U=Ge),(lt.equals(O)===!1||Vt!==W)&&(s.blendColor(lt.r,lt.g,lt.b,Vt),O.copy(lt),W=Vt),S=k,N=!1}function H(k,Ue){k.side===ua?Ne(s.CULL_FACE):de(s.CULL_FACE);let Ce=k.side===Wn;Ue&&(Ce=!Ce),je(Ce),k.blending===Rs&&k.transparent===!1?_t(pa):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;h.setTest(De),De&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function ft(k){k!==eb?(de(s.CULL_FACE),k!==G&&(k===y1?s.cullFace(s.BACK):k===tb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),G=k}function Pt(k){k!==K&&(I&&s.lineWidth(k),K=k)}function He(k,Ue,Ce){k?(de(s.POLYGON_OFFSET_FILL),(ce!==Ue||pe!==Ce)&&(s.polygonOffset(Ue,Ce),ce=Ue,pe=Ce)):Ne(s.POLYGON_OFFSET_FILL)}function zt(k){k?de(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Ze(k){k===void 0&&(k=s.TEXTURE0+ge-1),fe!==k&&(s.activeTexture(k),fe=k)}function ot(k,Ue,Ce){Ce===void 0&&(fe===null?Ce=s.TEXTURE0+ge-1:Ce=fe);let De=ue[Ce];De===void 0&&(De={type:void 0,texture:void 0},ue[Ce]=De),(De.type!==k||De.texture!==Ue)&&(fe!==Ce&&(s.activeTexture(Ce),fe=Ce),s.bindTexture(k,Ue||ae[k]),De.type=k,De.texture=Ue)}function P(){const k=ue[fe];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ye(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Me(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Pe(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function et(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ye(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function be(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ae(k){_e.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function Qe(k){we.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),we.copy(k))}function We(k,Ue){let Ce=p.get(Ue);Ce===void 0&&(Ce=new WeakMap,p.set(Ue,Ce));let De=Ce.get(k);De===void 0&&(De=s.getUniformBlockIndex(Ue,k.name),Ce.set(k,De))}function ze(k,Ue){const De=p.get(Ue).get(k);m.get(Ue)!==De&&(s.uniformBlockBinding(Ue,De,k.__bindingPointIndex),m.set(Ue,De))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},fe=null,ue={},g={},y=new WeakMap,M=[],b=null,E=!1,S=null,_=null,R=null,C=null,L=null,B=null,U=null,O=new Lt(0,0,0),W=0,N=!1,w=null,G=null,K=null,ce=null,pe=null,_e.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:de,disable:Ne,bindFramebuffer:Be,drawBuffers:Ee,useProgram:Fe,setBlending:_t,setMaterial:H,setFlipSided:je,setCullFace:ft,setLineWidth:Pt,setPolygonOffset:He,setScissorTest:zt,activeTexture:Ze,bindTexture:ot,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:Ye,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:et,texSubImage2D:ye,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:Ke,scissor:Ae,viewport:Qe,reset:st}}function _R(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):iu("canvas")}function E(P,T,ee){let ye=1;const Me=ot(P);if((Me.width>ee||Me.height>ee)&&(ye=ee/Math.max(Me.width,Me.height)),ye<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(ye*Me.width),Ke=Math.floor(ye*Me.height);g===void 0&&(g=b(he,Ke));const Pe=T?b(he,Ke):g;return Pe.width=he,Pe.height=Ke,Pe.getContext("2d").drawImage(P,0,0,he,Ke),ct("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+he+"x"+Ke+")."),Pe}else return"data"in P&&ct("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),P;return P}function S(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(P,T,ee,ye,Me=!1){if(P!==null){if(s[P]!==void 0)return s[P];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=T;if(T===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ee===s.UNSIGNED_INT&&(he=s.RGB32UI),ee===s.BYTE&&(he=s.RGB8I),ee===s.SHORT&&(he=s.RGB16I),ee===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ee===s.UNSIGNED_INT&&(he=s.RGBA32UI),ee===s.BYTE&&(he=s.RGBA8I),ee===s.SHORT&&(he=s.RGBA16I),ee===s.INT&&(he=s.RGBA32I)),T===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),T===s.RGBA){const Ke=Me?tu:Ut.getTransfer(ye);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=Ke===Wt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(P,T){let ee;return P?T===null||T===Nr||T===Zo?ee=s.DEPTH24_STENCIL8:T===da?ee=s.DEPTH32F_STENCIL8:T===Yo&&(ee=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Nr||T===Zo?ee=s.DEPTH_COMPONENT24:T===da?ee=s.DEPTH_COMPONENT32F:T===Yo&&(ee=s.DEPTH_COMPONENT16),ee}function B(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ri&&P.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function U(P){const T=P.target;T.removeEventListener("dispose",U),W(T),T.isVideoTexture&&v.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),w(T)}function W(P){const T=r.get(P);if(T.__webglInit===void 0)return;const ee=P.source,ye=y.get(ee);if(ye){const Me=ye[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&N(P),Object.keys(ye).length===0&&y.delete(ee)}r.remove(P)}function N(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const ee=P.source,ye=y.get(ee);delete ye[T.__cacheKey],f.memory.textures--}function w(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(T.__webglFramebuffer[ye]))for(let Me=0;Me<T.__webglFramebuffer[ye].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[ye][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[ye]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ye])}else{if(Array.isArray(T.__webglFramebuffer))for(let ye=0;ye<T.__webglFramebuffer.length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[ye]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ye=0;ye<T.__webglColorRenderbuffer.length;ye++)T.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ye]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=P.textures;for(let ye=0,Me=ee.length;ye<Me;ye++){const he=r.get(ee[ye]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(ee[ye])}r.remove(P)}let G=0;function K(){G=0}function ce(){const P=G;return P>=l.maxTextures&&ct("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function pe(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ge(P,T){const ee=r.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const ye=P.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ee,P,T);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function I(P,T){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){ae(ee,P,T);return}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function J(P,T){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){ae(ee,P,T);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function Y(P,T){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){de(ee,P,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const fe={[_h]:s.REPEAT,[fa]:s.CLAMP_TO_EDGE,[yh]:s.MIRRORED_REPEAT},ue={[ri]:s.NEAREST,[Db]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Rd]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},z={[Ob]:s.NEVER,[Vb]:s.ALWAYS,[Ib]:s.LESS,[e_]:s.LEQUAL,[zb]:s.EQUAL,[Hb]:s.GEQUAL,[Bb]:s.GREATER,[Fb]:s.NOTEQUAL};function Q(P,T){if(T.type===da&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===Rd||T.magFilter===_c||T.magFilter===Dr||T.minFilter===_i||T.minFilter===Rd||T.minFilter===_c||T.minFilter===Dr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,fe[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,fe[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,fe[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==_c&&T.minFilter!==Dr||T.type===da&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function _e(P,T){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const ye=T.source;let Me=y.get(ye);Me===void 0&&(Me={},y.set(ye,Me));const he=pe(T);if(he!==P.__cacheKey){Me[he]===void 0&&(Me[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),Me[he].usedTimes++;const Ke=Me[P.__cacheKey];Ke!==void 0&&(Me[P.__cacheKey].usedTimes--,Ke.usedTimes===0&&N(T)),P.__cacheKey=he,P.__webglTexture=Me[he].texture}return ee}function we(P,T,ee){return Math.floor(Math.floor(P/ee)/T)}function Ie(P,T,ee,ye){const he=P.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ee,ye,T.data);else{he.sort((be,Ae)=>be.start-Ae.start);let Ke=0;for(let be=1;be<he.length;be++){const Ae=he[Ke],Qe=he[be],We=Ae.start+Ae.count,ze=we(Qe.start,T.width,4),st=we(Ae.start,T.width,4);Qe.start<=We+1&&ze===st&&we(Qe.start+Qe.count-1,T.width,4)===ze?Ae.count=Math.max(Ae.count,Qe.start+Qe.count-Ae.start):(++Ke,he[Ke]=Qe)}he.length=Ke+1;const Pe=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let be=0,Ae=he.length;be<Ae;be++){const Qe=he[be],We=Math.floor(Qe.start/4),ze=Math.ceil(Qe.count/4),st=We%T.width,k=Math.floor(We/T.width),Ue=ze,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,st,k,Ue,Ce,ee,ye,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function ae(P,T,ee){let ye=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=s.TEXTURE_3D);const Me=_e(P,T),he=T.source;i.bindTexture(ye,P.__webglTexture,s.TEXTURE0+ee);const Ke=r.get(he);if(he.version!==Ke.__version||Me===!0){i.activeTexture(s.TEXTURE0+ee);const Pe=Ut.getPrimaries(Ut.workingColorSpace),et=T.colorSpace===Ja?null:Ut.getPrimaries(T.colorSpace),Ye=T.colorSpace===Ja||Pe===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let be=E(T.image,!1,l.maxTextureSize);be=Ze(T,be);const Ae=c.convert(T.format,T.colorSpace),Qe=c.convert(T.type);let We=C(T.internalFormat,Ae,Qe,T.colorSpace,T.isVideoTexture);Q(ye,T);let ze;const st=T.mipmaps,k=T.isVideoTexture!==!0,Ue=Ke.__version===void 0||Me===!0,Ce=he.dataReady,De=B(T,be);if(T.isDepthTexture)We=L(T.format===Qo,T.type),Ue&&(k?i.texStorage2D(s.TEXTURE_2D,1,We,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,We,be.width,be.height,0,Ae,Qe,null));else if(T.isDataTexture)if(st.length>0){k&&Ue&&i.texStorage2D(s.TEXTURE_2D,De,We,st[0].width,st[0].height);for(let Te=0,Se=st.length;Te<Se;Te++)ze=st[Te],k?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Qe,ze.data):i.texImage2D(s.TEXTURE_2D,Te,We,ze.width,ze.height,0,Ae,Qe,ze.data);T.generateMipmaps=!1}else k?(Ue&&i.texStorage2D(s.TEXTURE_2D,De,We,be.width,be.height),Ce&&Ie(T,be,Ae,Qe)):i.texImage2D(s.TEXTURE_2D,0,We,be.width,be.height,0,Ae,Qe,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,We,st[0].width,st[0].height,be.depth);for(let Te=0,Se=st.length;Te<Se;Te++)if(ze=st[Te],T.format!==wi)if(Ae!==null)if(k){if(Ce)if(T.layerUpdates.size>0){const Ge=ev(ze.width,ze.height,T.format,T.type);for(const lt of T.layerUpdates){const Vt=ze.data.subarray(lt*Ge/ze.data.BYTES_PER_ELEMENT,(lt+1)*Ge/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,lt,ze.width,ze.height,1,Ae,Vt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,be.depth,Ae,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,We,ze.width,ze.height,be.depth,0,ze.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,be.depth,Ae,Qe,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,We,ze.width,ze.height,be.depth,0,Ae,Qe,ze.data)}else{k&&Ue&&i.texStorage2D(s.TEXTURE_2D,De,We,st[0].width,st[0].height);for(let Te=0,Se=st.length;Te<Se;Te++)ze=st[Te],T.format!==wi?Ae!==null?k?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,We,ze.width,ze.height,0,ze.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Qe,ze.data):i.texImage2D(s.TEXTURE_2D,Te,We,ze.width,ze.height,0,Ae,Qe,ze.data)}else if(T.isDataArrayTexture)if(k){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,We,be.width,be.height,be.depth),Ce)if(T.layerUpdates.size>0){const Te=ev(be.width,be.height,T.format,T.type);for(const Se of T.layerUpdates){const Ge=be.data.subarray(Se*Te/be.data.BYTES_PER_ELEMENT,(Se+1)*Te/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,be.width,be.height,1,Ae,Qe,Ge)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ae,Qe,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,We,be.width,be.height,be.depth,0,Ae,Qe,be.data);else if(T.isData3DTexture)k?(Ue&&i.texStorage3D(s.TEXTURE_3D,De,We,be.width,be.height,be.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ae,Qe,be.data)):i.texImage3D(s.TEXTURE_3D,0,We,be.width,be.height,be.depth,0,Ae,Qe,be.data);else if(T.isFramebufferTexture){if(Ue)if(k)i.texStorage2D(s.TEXTURE_2D,De,We,be.width,be.height);else{let Te=be.width,Se=be.height;for(let Ge=0;Ge<De;Ge++)i.texImage2D(s.TEXTURE_2D,Ge,We,Te,Se,0,Ae,Qe,null),Te>>=1,Se>>=1}}else if(st.length>0){if(k&&Ue){const Te=ot(st[0]);i.texStorage2D(s.TEXTURE_2D,De,We,Te.width,Te.height)}for(let Te=0,Se=st.length;Te<Se;Te++)ze=st[Te],k?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Qe,ze):i.texImage2D(s.TEXTURE_2D,Te,We,Ae,Qe,ze);T.generateMipmaps=!1}else if(k){if(Ue){const Te=ot(be);i.texStorage2D(s.TEXTURE_2D,De,We,Te.width,Te.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Qe,be)}else i.texImage2D(s.TEXTURE_2D,0,We,Ae,Qe,be);S(T)&&_(ye),Ke.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,ee){if(T.image.length!==6)return;const ye=_e(P,T),Me=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ee);const he=r.get(Me);if(Me.version!==he.__version||ye===!0){i.activeTexture(s.TEXTURE0+ee);const Ke=Ut.getPrimaries(Ut.workingColorSpace),Pe=T.colorSpace===Ja?null:Ut.getPrimaries(T.colorSpace),et=T.colorSpace===Ja||Ke===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!Ye&&!be?Ae[Se]=E(T.image[Se],!0,l.maxCubemapSize):Ae[Se]=be?T.image[Se].image:T.image[Se],Ae[Se]=Ze(T,Ae[Se]);const Qe=Ae[0],We=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),st=C(T.internalFormat,We,ze,T.colorSpace),k=T.isVideoTexture!==!0,Ue=he.__version===void 0||ye===!0,Ce=Me.dataReady;let De=B(T,Qe);Q(s.TEXTURE_CUBE_MAP,T);let Te;if(Ye){k&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,Qe.width,Qe.height);for(let Se=0;Se<6;Se++){Te=Ae[Se].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const lt=Te[Ge];T.format!==wi?We!==null?k?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,lt.width,lt.height,We,lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,st,lt.width,lt.height,0,lt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,lt.width,lt.height,We,ze,lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,st,lt.width,lt.height,0,We,ze,lt.data)}}}else{if(Te=T.mipmaps,k&&Ue){Te.length>0&&De++;const Se=ot(Ae[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(be){k?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,We,ze,Ae[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Ae[Se].width,Ae[Se].height,0,We,ze,Ae[Se].data);for(let Ge=0;Ge<Te.length;Ge++){const Vt=Te[Ge].image[Se].image;k?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,Vt.width,Vt.height,We,ze,Vt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,st,Vt.width,Vt.height,0,We,ze,Vt.data)}}else{k?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,We,ze,Ae[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,We,ze,Ae[Se]);for(let Ge=0;Ge<Te.length;Ge++){const lt=Te[Ge];k?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,We,ze,lt.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,st,We,ze,lt.image[Se])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=Me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ne(P,T,ee,ye,Me,he){const Ke=c.convert(ee.format,ee.colorSpace),Pe=c.convert(ee.type),et=C(ee.internalFormat,Ke,Pe,ee.colorSpace),Ye=r.get(T),be=r.get(ee);if(be.__renderTarget=T,!Ye.__hasExternalTextures){const Ae=Math.max(1,T.width>>he),Qe=Math.max(1,T.height>>he);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,he,et,Ae,Qe,T.depth,0,Ke,Pe,null):i.texImage2D(Me,he,et,Ae,Qe,0,Ke,Pe,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Me,be.__webglTexture,0,Pt(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Me,be.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(P,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const ye=T.depthTexture,Me=ye&&ye.isDepthTexture?ye.type:null,he=L(T.stencilBuffer,Me),Ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=Pt(T);He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,he,T.width,T.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,P)}else{const ye=T.textures;for(let Me=0;Me<ye.length;Me++){const he=ye[Me],Ke=c.convert(he.format,he.colorSpace),Pe=c.convert(he.type),et=C(he.internalFormat,Ke,Pe,he.colorSpace),Ye=Pt(T);ee&&He(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,et,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(T.depthTexture);ye.__renderTarget=T,(!ye.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const Me=ye.__webglTexture,he=Pt(T);if(T.depthTexture.format===Ko)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(T.depthTexture.format===Qo)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const T=r.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ye=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ye){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ye.removeEventListener("dispose",Me)};ye.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=ye}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ye=P.texture.mipmaps;ye&&ye.length>0?Ee(T.__webglFramebuffer[0],P):Ee(T.__webglFramebuffer,P)}else if(ee){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]===void 0)T.__webglDepthbuffer[ye]=s.createRenderbuffer(),Be(T.__webglDepthbuffer[ye],P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,he)}}else{const ye=P.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Be(T.__webglDepthbuffer,P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(P,T,ee){const ye=r.get(P);T!==void 0&&Ne(ye.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Fe(P)}function it(P){const T=P.texture,ee=r.get(P),ye=r.get(T);P.addEventListener("dispose",O);const Me=P.textures,he=P.isWebGLCubeRenderTarget===!0,Ke=Me.length>1;if(Ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=T.version,f.memory.textures++),he){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let et=0;et<T.mipmaps.length;et++)ee.__webglFramebuffer[Pe][et]=s.createFramebuffer()}else ee.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Pe=0,et=Me.length;Pe<et;Pe++){const Ye=r.get(Me[Pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&He(P)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Me.length;Pe++){const et=Me[Pe];ee.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const Ye=c.convert(et.format,et.colorSpace),be=c.convert(et.type),Ae=C(et.internalFormat,Ye,be,et.colorSpace,P.isXRRenderTarget===!0),Qe=Pt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(ee.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Q(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ne(ee.__webglFramebuffer[Pe][et],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,et);else Ne(ee.__webglFramebuffer[Pe],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Pe=0,et=Me.length;Pe<et;Pe++){const Ye=Me[Pe],be=r.get(Ye);let Ae=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,be.__webglTexture),Q(Ae,Ye),Ne(ee.__webglFramebuffer,P,Ye,s.COLOR_ATTACHMENT0+Pe,Ae,0),S(Ye)&&_(Ae)}i.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,ye.__webglTexture),Q(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ne(ee.__webglFramebuffer[et],P,T,s.COLOR_ATTACHMENT0,Pe,et);else Ne(ee.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Pe,0);S(T)&&_(Pe),i.unbindTexture()}P.depthBuffer&&Fe(P)}function _t(P){const T=P.textures;for(let ee=0,ye=T.length;ee<ye;ee++){const Me=T[ee];if(S(Me)){const he=R(P),Ke=r.get(Me).__webglTexture;i.bindTexture(he,Ke),_(he),i.unbindTexture()}}}const H=[],je=[];function ft(P){if(P.samples>0){if(He(P)===!1){const T=P.textures,ee=P.width,ye=P.height;let Me=s.COLOR_BUFFER_BIT;const he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(P),Pe=T.length>1;if(Pe)for(let Ye=0;Ye<T.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const et=P.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const be=r.get(T[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,ee,ye,0,0,ee,ye,Me,s.NEAREST),m===!0&&(H.length=0,je.length=0,H.push(s.COLOR_ATTACHMENT0+Ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(H.push(he),je.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<T.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const be=r.get(T[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Pt(P){return Math.min(l.maxSamples,P.samples)}function He(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(P){const T=f.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function Ze(P,T){const ee=P.colorSpace,ye=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==Ps&&ee!==Ja&&(Ut.getTransfer(ee)===Wt?(ye!==wi||Me!==va)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",ee)),T}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=K,this.setTexture2D=ge,this.setTexture2DArray=I,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=vt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=He}function yR(s,e){function i(r,l=Ja){let c;const f=Ut.getTransfer(l);if(r===va)return s.UNSIGNED_BYTE;if(r===rp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jv)return s.BYTE;if(r===Yv)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===ap)return s.INT;if(r===Nr)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===zs)return s.HALF_FLOAT;if(r===Qv)return s.ALPHA;if(r===Jv)return s.RGB;if(r===wi)return s.RGBA;if(r===Ko)return s.DEPTH_COMPONENT;if(r===Qo)return s.DEPTH_STENCIL;if(r===$v)return s.RED;if(r===op)return s.RED_INTEGER;if(r===lp)return s.RG;if(r===cp)return s.RG_INTEGER;if(r===up)return s.RGBA_INTEGER;if(r===Zc||r===Kc||r===Qc||r===Jc)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===Mh||r===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===Th||r===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Eh||r===Th)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ah)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wh||r===Rh||r===Ch||r===Dh||r===Nh||r===Uh||r===Lh||r===Ph||r===Oh||r===Ih||r===zh||r===Bh||r===Fh||r===Hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ch)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vh||r===Gh||r===kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Vh)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xh||r===Wh||r===qh||r===jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Xh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
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

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new p_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ya({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new nr(new cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends Bs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,y=null,M=null,b=null;const E=typeof XRWebGLBinding<"u",S=new MR,_={},R=i.getContextAttributes();let C=null,L=null;const B=[],U=[],O=new It;let W=null;const N=new gi;N.viewport=new on;const w=new gi;w.viewport=new on;const G=[N,w],K=new GE;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let de=B[ae];return de===void 0&&(de=new Zd,B[ae]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ae){let de=B[ae];return de===void 0&&(de=new Zd,B[ae]=de),de.getGripSpace()},this.getHand=function(ae){let de=B[ae];return de===void 0&&(de=new Zd,B[ae]=de),de.getHandSpace()};function ge(ae){const de=U.indexOf(ae.inputSource);if(de===-1)return;const Ne=B[de];Ne!==void 0&&(Ne.update(ae.inputSource,ae.frame,p||f),Ne.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",J);for(let ae=0;ae<B.length;ae++){const de=U[ae];de!==null&&(U[ae]=null,B[ae].disconnect(de))}ce=null,pe=null,S.reset();for(const ae in _)delete _[ae];e.setRenderTarget(C),M=null,y=null,g=null,l=null,L=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",I),l.addEventListener("inputsourceschange",J),R.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Be=null,Ee=null;R.depth&&(Ee=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=R.stencil?Qo:Ko,Be=R.stencil?Zo:Nr);const Fe={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(Fe),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Ur(y.textureWidth,y.textureHeight,{format:wi,type:va,depthTexture:new h_(y.textureWidth,y.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ne={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Ur(M.framebufferWidth,M.framebufferHeight,{format:wi,type:va,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ie.setContext(l),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(ae){for(let de=0;de<ae.removed.length;de++){const Ne=ae.removed[de],Be=U.indexOf(Ne);Be>=0&&(U[Be]=null,B[Be].disconnect(Ne))}for(let de=0;de<ae.added.length;de++){const Ne=ae.added[de];let Be=U.indexOf(Ne);if(Be===-1){for(let Fe=0;Fe<B.length;Fe++)if(Fe>=U.length){U.push(Ne),Be=Fe;break}else if(U[Fe]===null){U[Fe]=Ne,Be=Fe;break}if(Be===-1)break}const Ee=B[Be];Ee&&Ee.connect(Ne)}}const Y=new se,fe=new se;function ue(ae,de,Ne){Y.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Ne.matrixWorld);const Be=Y.distanceTo(fe),Ee=de.projectionMatrix.elements,Fe=Ne.projectionMatrix.elements,vt=Ee[14]/(Ee[10]-1),it=Ee[14]/(Ee[10]+1),_t=(Ee[9]+1)/Ee[5],H=(Ee[9]-1)/Ee[5],je=(Ee[8]-1)/Ee[0],ft=(Fe[8]+1)/Fe[0],Pt=vt*je,He=vt*ft,zt=Be/(-je+ft),Ze=zt*-je;if(de.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ze),ae.translateZ(zt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ee[10]===-1)ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ot=vt+zt,P=it+zt,T=Pt-Ze,ee=He+(Be-Ze),ye=_t*it/P*ot,Me=H*it/P*ot;ae.projectionMatrix.makePerspective(T,ee,ye,Me,ot,P),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function z(ae,de){de===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(de.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let de=ae.near,Ne=ae.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),K.near=w.near=N.near=de,K.far=w.far=N.far=Ne,(ce!==K.near||pe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,pe=K.far),K.layers.mask=ae.layers.mask|6,N.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const Be=ae.parent,Ee=K.cameras;z(K,Be);for(let Fe=0;Fe<Ee.length;Fe++)z(Ee[Fe],Be);Ee.length===2?ue(K,N,w):K.projectionMatrix.copy(N.projectionMatrix),Q(ae,K,Be)};function Q(ae,de,Ne){Ne===null?ae.matrix.copy(de.matrixWorld):(ae.matrix.copy(Ne.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(de.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=$o*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(ae){m=ae,y!==null&&(y.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ae){return _[ae]};let _e=null;function we(ae,de){if(v=de.getViewerPose(p||f),b=de,v!==null){const Ne=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Be=!1;Ne.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let it=0;it<Ne.length;it++){const _t=Ne[it];let H=null;if(M!==null)H=M.getViewport(_t);else{const ft=g.getViewSubImage(y,_t);H=ft.viewport,it===0&&(e.setRenderTargetTextures(L,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(L))}let je=G[it];je===void 0&&(je=new gi,je.layers.enable(it),je.viewport=new on,G[it]=je),je.matrix.fromArray(_t.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(_t.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(H.x,H.y,H.width,H.height),it===0&&(K.matrix.copy(je.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(je)}const Ee=l.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const it=g.getDepthInformation(Ne[0]);it&&it.isValid&&it.texture&&S.init(it,l.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<Ne.length;it++){const _t=Ne[it].camera;if(_t){let H=_[_t];H||(H=new p_,_[_t]=H);const je=g.getCameraImage(_t);H.sourceTexture=je}}}}for(let Ne=0;Ne<B.length;Ne++){const Be=U[Ne],Ee=B[Ne];Be!==null&&Ee!==void 0&&Ee.update(Be,de,p||f)}_e&&_e(ae,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),b=null}const Ie=new m_;Ie.setAnimationLoop(we),this.setAnimationLoop=function(ae){_e=ae},this.dispose=function(){}}}const Ar=new _a,ER=new ln;function TR(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,l_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,R,C,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,L)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),E(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,R,C):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Wn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Wn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=e.get(_),C=R.envMap,L=R.envMapRotation;C&&(S.envMap.value=C,Ar.copy(L),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(Ar)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,R,C){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=C*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const R=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,C){const L=C.program;r.uniformBlockBinding(R,L)}function p(R,C){let L=l[R.id];L===void 0&&(b(R),L=v(R),l[R.id]=L,R.addEventListener("dispose",S));const B=C.program;r.updateUBOMapping(R,B);const U=e.render.frame;c[R.id]!==U&&(y(R),c[R.id]=U)}function v(R){const C=g();R.__bindingPointIndex=C;const L=s.createBuffer(),B=R.__size,U=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,B,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function g(){for(let R=0;R<h;R++)if(f.indexOf(R)===-1)return f.push(R),R;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(R){const C=l[R.id],L=R.uniforms,B=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let U=0,O=L.length;U<O;U++){const W=Array.isArray(L[U])?L[U]:[L[U]];for(let N=0,w=W.length;N<w;N++){const G=W[N];if(M(G,U,N,B)===!0){const K=G.__offset,ce=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let ge=0;ge<ce.length;ge++){const I=ce[ge],J=E(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,K+pe,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,pe),pe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,C,L,B){const U=R.value,O=C+"_"+L;if(B[O]===void 0)return typeof U=="number"||typeof U=="boolean"?B[O]=U:B[O]=U.clone(),!0;{const W=B[O];if(typeof U=="number"||typeof U=="boolean"){if(W!==U)return B[O]=U,!0}else if(W.equals(U)===!1)return W.copy(U),!0}return!1}function b(R){const C=R.uniforms;let L=0;const B=16;for(let O=0,W=C.length;O<W;O++){const N=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,G=N.length;w<G;w++){const K=N[w],ce=Array.isArray(K.value)?K.value:[K.value];for(let pe=0,ge=ce.length;pe<ge;pe++){const I=ce[pe],J=E(I),Y=L%B,fe=Y%J.boundary,ue=Y+fe;L+=fe,ue!==0&&B-ue<J.storage&&(L+=B-ue),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=J.storage}}}const U=L%B;return U>0&&(L+=B-U),R.__size=L,R.__cache={},this}function E(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",R),C}function S(R){const C=R.target;C.removeEventListener("dispose",S);const L=f.indexOf(C.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function _(){for(const R in l)s.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const wR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function RR(){return la===null&&(la=new NE(wR,32,32,lp,zs),la.minFilter=_i,la.magFilter=_i,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class CR{constructor(e={}){const{canvas:i=Gb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Set([up,cp,op]),E=new Set([va,Nr,Yo,Zo,rp,sp]),S=new Uint32Array(4),_=new Int32Array(4);let R=null,C=null;const L=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1;this._outputColorSpace=mi;let W=0,N=0,w=null,G=-1,K=null;const ce=new on,pe=new on;let ge=null;const I=new Lt(0);let J=0,Y=i.width,fe=i.height,ue=1,z=null,Q=null;const _e=new on(0,0,Y,fe),we=new on(0,0,Y,fe);let Ie=!1;const ae=new f_;let de=!1,Ne=!1;const Be=new ln,Ee=new se,Fe=new on,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function _t(){return w===null?ue:1}let H=r;function je(D,q){return i.getContext(D,q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Ge,!1),H===null){const q="webgl2";if(H=je(q,D),H===null)throw je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let ft,Pt,He,zt,Ze,ot,P,T,ee,ye,Me,he,Ke,Pe,et,Ye,be,Ae,Qe,We,ze,st,k,Ue;function Ce(){ft=new zA(H),ft.init(),st=new yR(H,ft),Pt=new RA(H,ft,e,st),He=new vR(H,ft),Pt.reversedDepthBuffer&&y&&He.buffers.depth.setReversed(!0),zt=new HA(H),Ze=new aR,ot=new _R(H,ft,He,Ze,Pt,st,zt),P=new DA(U),T=new IA(U),ee=new XE(H),k=new AA(H,ee),ye=new BA(H,ee,zt,k),Me=new GA(H,ye,ee,zt),Qe=new VA(H,Pt,ot),Ye=new CA(Ze),he=new iR(U,P,T,ft,Pt,k,Ye),Ke=new TR(U,Ze),Pe=new sR,et=new dR(ft),Ae=new TA(U,P,T,He,Me,M,m),be=new mR(U,Me,Pt),Ue=new AR(H,zt,Pt,He),We=new wA(H,ft,zt),ze=new FA(H,ft,zt),zt.programs=he.programs,U.capabilities=Pt,U.extensions=ft,U.properties=Ze,U.renderLists=Pe,U.shadowMap=be,U.state=He,U.info=zt}Ce();const De=new bR(U,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=ft.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ft.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(D){D!==void 0&&(ue=D,this.setSize(Y,fe,!1))},this.getSize=function(D){return D.set(Y,fe)},this.setSize=function(D,q,oe=!0){if(De.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=D,fe=q,i.width=Math.floor(D*ue),i.height=Math.floor(q*ue),oe===!0&&(i.style.width=D+"px",i.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(Y*ue,fe*ue).floor()},this.setDrawingBufferSize=function(D,q,oe){Y=D,fe=q,ue=oe,i.width=Math.floor(D*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(ce)},this.getViewport=function(D){return D.copy(_e)},this.setViewport=function(D,q,oe,ne){D.isVector4?_e.set(D.x,D.y,D.z,D.w):_e.set(D,q,oe,ne),He.viewport(ce.copy(_e).multiplyScalar(ue).round())},this.getScissor=function(D){return D.copy(we)},this.setScissor=function(D,q,oe,ne){D.isVector4?we.set(D.x,D.y,D.z,D.w):we.set(D,q,oe,ne),He.scissor(pe.copy(we).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(D){He.setScissorTest(Ie=D)},this.setOpaqueSort=function(D){z=D},this.setTransparentSort=function(D){Q=D},this.getClearColor=function(D){return D.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,oe=!0){let ne=0;if(D){let Z=!1;if(w!==null){const Re=w.texture.format;Z=b.has(Re)}if(Z){const Re=w.texture.type,Le=E.has(Re),Ve=Ae.getClearColor(),ke=Ae.getClearAlpha(),nt=Ve.r,rt=Ve.g,Je=Ve.b;Le?(S[0]=nt,S[1]=rt,S[2]=Je,S[3]=ke,H.clearBufferuiv(H.COLOR,0,S)):(_[0]=nt,_[1]=rt,_[2]=Je,_[3]=ke,H.clearBufferiv(H.COLOR,0,_))}else ne|=H.COLOR_BUFFER_BIT}q&&(ne|=H.DEPTH_BUFFER_BIT),oe&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),Ae.dispose(),Pe.dispose(),et.dispose(),Ze.dispose(),P.dispose(),T.dispose(),Me.dispose(),k.dispose(),Ue.dispose(),he.dispose(),De.dispose(),De.removeEventListener("sessionstart",ks),De.removeEventListener("sessionend",Xs),xi.stop()};function Te(D){D.preventDefault(),w1("WebGLRenderer: Context Lost."),O=!0}function Se(){w1("WebGLRenderer: Context Restored."),O=!1;const D=zt.autoReset,q=be.enabled,oe=be.autoUpdate,ne=be.needsUpdate,Z=be.type;Ce(),zt.autoReset=D,be.enabled=q,be.autoUpdate=oe,be.needsUpdate=ne,be.type=Z}function Ge(D){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const q=D.target;q.removeEventListener("dispose",lt),Vt(q)}function Vt(D){Rt(D),Ze.remove(D)}function Rt(D){const q=Ze.get(D).programs;q!==void 0&&(q.forEach(function(oe){he.releaseProgram(oe)}),D.isShaderMaterial&&he.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,oe,ne,Z,Re){q===null&&(q=vt);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=du(D,q,oe,ne,Z);He.setMaterial(ne,Le);let ke=oe.index,nt=1;if(ne.wireframe===!0){if(ke=ye.getWireframeAttribute(oe),ke===void 0)return;nt=2}const rt=oe.drawRange,Je=oe.attributes.position;let ht=rt.start*nt,wt=(rt.start+rt.count)*nt;Re!==null&&(ht=Math.max(ht,Re.start*nt),wt=Math.min(wt,(Re.start+Re.count)*nt)),ke!==null?(ht=Math.max(ht,0),wt=Math.min(wt,ke.count)):Je!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Je.count));const Ct=wt-ht;if(Ct<0||Ct===1/0)return;k.setup(Z,ne,Ve,oe,ke);let Et,Bt=We;if(ke!==null&&(Et=ee.get(ke),Bt=ze,Bt.setIndex(Et)),Z.isMesh)ne.wireframe===!0?(He.setLineWidth(ne.wireframeLinewidth*_t()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(Z.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),He.setLineWidth(tt*_t()),Z.isLineSegments?Bt.setMode(H.LINES):Z.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else Z.isPoints?Bt.setMode(H.POINTS):Z.isSprite&&Bt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const tt=Z._multiDrawStarts,qt=Z._multiDrawCounts,Tt=Z._multiDrawCount,xn=ke?ee.get(ke).bytesPerElement:1,Ma=Ze.get(ne).currentProgram.getUniforms();for(let Yt=0;Yt<Tt;Yt++)Ma.setValue(H,"_gl_DrawID",Yt),Bt.render(tt[Yt]/xn,qt[Yt])}else if(Z.isInstancedMesh)Bt.renderInstances(ht,Ct,Z.count);else if(oe.isInstancedBufferGeometry){const tt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,qt=Math.min(oe.instanceCount,tt);Bt.renderInstances(ht,Ct,qt)}else Bt.render(ht,Ct)};function Dn(D,q,oe){D.transparent===!0&&D.side===ua&&D.forceSinglePass===!1?(D.side=Wn,D.needsUpdate=!0,mn(D,q,oe),D.side=tr,D.needsUpdate=!0,mn(D,q,oe),D.side=ua):mn(D,q,oe)}this.compile=function(D,q,oe=null){oe===null&&(oe=D),C=et.get(oe),C.init(q),B.push(C),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),D!==oe&&D.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights();const ne=new Set;return D.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ve=Re[Le];Dn(Ve,oe,Z),ne.add(Ve)}else Dn(Re,oe,Z),ne.add(Re)}),C=B.pop(),ne},this.compileAsync=function(D,q,oe=null){const ne=this.compile(D,q,oe);return new Promise(Z=>{function Re(){if(ne.forEach(function(Le){Ze.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){Z(D);return}setTimeout(Re,10)}ft.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Yn=null;function sl(D){Yn&&Yn(D)}function ks(){xi.stop()}function Xs(){xi.start()}const xi=new m_;xi.setAnimationLoop(sl),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(D){Yn=D,De.setAnimationLoop(D),D===null?xi.stop():xi.start()},De.addEventListener("sessionstart",ks),De.addEventListener("sessionend",Xs),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),D.isScene===!0&&D.onBeforeRender(U,D,q,w),C=et.get(D,B.length),C.init(q),B.push(C),Be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ae.setFromProjectionMatrix(Be,Ii,q.reversedDepth),Ne=this.localClippingEnabled,de=Ye.init(this.clippingPlanes,Ne),R=Pe.get(D,L.length),R.init(),L.push(R),De.enabled===!0&&De.isPresenting===!0){const Re=U.xr.getDepthSensingMesh();Re!==null&&ir(Re,q,-1/0,U.sortObjects)}ir(D,q,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(z,Q),it=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,it&&Ae.addToRenderList(R,D),this.info.render.frame++,de===!0&&Ye.beginShadows();const oe=C.state.shadowsArray;be.render(oe,D,q),de===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=R.opaque,Z=R.transmissive;if(C.setupLights(),q.isArrayCamera){const Re=q.cameras;if(Z.length>0)for(let Le=0,Ve=Re.length;Le<Ve;Le++){const ke=Re[Le];qs(ne,Z,D,ke)}it&&Ae.render(D);for(let Le=0,Ve=Re.length;Le<Ve;Le++){const ke=Re[Le];Ws(R,D,ke,ke.viewport)}}else Z.length>0&&qs(ne,Z,D,q),it&&Ae.render(D),Ws(R,D,q);w!==null&&N===0&&(ot.updateMultisampleRenderTarget(w),ot.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(U,D,q),k.resetDefaultState(),G=-1,K=null,B.pop(),B.length>0?(C=B[B.length-1],de===!0&&Ye.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?R=L[L.length-1]:R=null};function ir(D,q,oe,ne){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ae.intersectsSprite(D)){ne&&Fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Be);const Le=Me.update(D),Ve=D.material;Ve.visible&&R.push(D,Le,Ve,oe,Fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ae.intersectsObject(D))){const Le=Me.update(D),Ve=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Fe.copy(D.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Fe.copy(Le.boundingSphere.center)),Fe.applyMatrix4(D.matrixWorld).applyMatrix4(Be)),Array.isArray(Ve)){const ke=Le.groups;for(let nt=0,rt=ke.length;nt<rt;nt++){const Je=ke[nt],ht=Ve[Je.materialIndex];ht&&ht.visible&&R.push(D,Le,ht,oe,Fe.z,Je)}}else Ve.visible&&R.push(D,Le,Ve,oe,Fe.z,null)}}const Re=D.children;for(let Le=0,Ve=Re.length;Le<Ve;Le++)ir(Re[Le],q,oe,ne)}function Ws(D,q,oe,ne){const{opaque:Z,transmissive:Re,transparent:Le}=D;C.setupLightsView(oe),de===!0&&Ye.setGlobalState(U.clippingPlanes,oe),ne&&He.viewport(ce.copy(ne)),Z.length>0&&Zn(Z,q,oe),Re.length>0&&Zn(Re,q,oe),Le.length>0&&Zn(Le,q,oe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function qs(D,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[ne.id]===void 0&&(C.state.transmissionRenderTarget[ne.id]=new Ur(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?zs:va,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Re=C.state.transmissionRenderTarget[ne.id],Le=ne.viewport||ce;Re.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const Ve=U.getRenderTarget(),ke=U.getActiveCubeFace(),nt=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(I),J=U.getClearAlpha(),J<1&&U.setClearColor(16777215,.5),U.clear(),it&&Ae.render(oe);const rt=U.toneMapping;U.toneMapping=er;const Je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),de===!0&&Ye.setGlobalState(U.clippingPlanes,ne),Zn(D,oe,ne),ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let wt=0,Ct=q.length;wt<Ct;wt++){const Et=q[wt],{object:Bt,geometry:tt,material:qt,group:Tt}=Et;if(qt.side===ua&&Bt.layers.test(ne.layers)){const xn=qt.side;qt.side=Wn,qt.needsUpdate=!0,cn(Bt,oe,ne,tt,qt,Tt),qt.side=xn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re))}U.setRenderTarget(Ve,ke,nt),U.setClearColor(I,J),Je!==void 0&&(ne.viewport=Je),U.toneMapping=rt}function Zn(D,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Re=D.length;Z<Re;Z++){const Le=D[Z],{object:Ve,geometry:ke,group:nt}=Le;let rt=Le.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),Ve.layers.test(oe.layers)&&cn(Ve,q,oe,ke,rt,nt)}}function cn(D,q,oe,ne,Z,Re){D.onBeforeRender(U,q,oe,ne,Z,Re),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Z.onBeforeRender(U,q,oe,ne,D,Re),Z.transparent===!0&&Z.side===ua&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,Z,D,Re),Z.side=tr,Z.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,Z,D,Re),Z.side=ua):U.renderBufferDirect(oe,q,ne,Z,D,Re),D.onAfterRender(U,q,oe,ne,Z,Re)}function mn(D,q,oe){q.isScene!==!0&&(q=vt);const ne=Ze.get(D),Z=C.state.lights,Re=C.state.shadowsArray,Le=Z.state.version,Ve=he.getParameters(D,Z.state,Re,q,oe),ke=he.getProgramCacheKey(Ve);let nt=ne.programs;ne.environment=D.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(D.isMeshStandardMaterial?T:P).get(D.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",lt),nt=new Map,ne.programs=nt);let rt=nt.get(ke);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Le)return Or(D,Ve),rt}else Ve.uniforms=he.getUniforms(D),D.onBeforeCompile(Ve,U),rt=he.acquireProgram(Ve,ke),nt.set(ke,rt),ne.uniforms=Ve.uniforms;const Je=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Or(D,Ve),ne.needsLights=ol(D),ne.lightsStateVersion=Le,ne.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.directionalShadowMap.value=Z.state.directionalShadowMap,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotShadowMap.value=Z.state.spotShadowMap,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMap.value=Z.state.pointShadowMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function zi(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=$c.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Or(D,q){const oe=Ze.get(D);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function du(D,q,oe,ne,Z){q.isScene!==!0&&(q=vt),ot.resetTextureUnits();const Re=q.fog,Le=ne.isMeshStandardMaterial?q.environment:null,Ve=w===null?U.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ps,ke=(ne.isMeshStandardMaterial?T:P).get(ne.envMap||Le),nt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Ct=er;ne.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=U.toneMapping);const Et=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Bt=Et!==void 0?Et.length:0,tt=Ze.get(ne),qt=C.state.lights;if(de===!0&&(Ne===!0||D!==K)){const Mn=D===K&&ne.id===G;Ye.setState(ne,D,Mn)}let Tt=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==Ve||Z.isBatchedMesh&&tt.batching===!1||!Z.isBatchedMesh&&tt.batching===!0||Z.isBatchedMesh&&tt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&tt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&tt.instancing===!1||!Z.isInstancedMesh&&tt.instancing===!0||Z.isSkinnedMesh&&tt.skinning===!1||!Z.isSkinnedMesh&&tt.skinning===!0||Z.isInstancedMesh&&tt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&tt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&tt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&tt.instancingMorph===!1&&Z.morphTexture!==null||tt.envMap!==ke||ne.fog===!0&&tt.fog!==Re||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==rt||tt.morphTargets!==Je||tt.morphNormals!==ht||tt.morphColors!==wt||tt.toneMapping!==Ct||tt.morphTargetsCount!==Bt)&&(Tt=!0):(Tt=!0,tt.__version=ne.version);let xn=tt.currentProgram;Tt===!0&&(xn=mn(ne,q,Z));let Ma=!1,Yt=!1,Bi=!1;const Zt=xn.getUniforms(),Sn=tt.uniforms;if(He.useProgram(xn.program)&&(Ma=!0,Yt=!0,Bi=!0),ne.id!==G&&(G=ne.id,Yt=!0),Ma||K!==D){He.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Zt.setValue(H,"projectionMatrix",D.projectionMatrix),Zt.setValue(H,"viewMatrix",D.matrixWorldInverse);const Tn=Zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Ee.setFromMatrixPosition(D.matrixWorld)),Pt.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),K!==D&&(K=D,Yt=!0,Bi=!0)}if(Z.isSkinnedMesh){Zt.setOptional(H,Z,"bindMatrix"),Zt.setOptional(H,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Zt.setValue(H,"boneTexture",Mn.boneTexture,ot))}Z.isBatchedMesh&&(Zt.setOptional(H,Z,"batchingTexture"),Zt.setValue(H,"batchingTexture",Z._matricesTexture,ot),Zt.setOptional(H,Z,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",Z._indirectTexture,ot),Zt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",Z._colorsTexture,ot));const gn=oe.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Qe.update(Z,oe,xn),(Yt||tt.receiveShadow!==Z.receiveShadow)&&(tt.receiveShadow=Z.receiveShadow,Zt.setValue(H,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Sn.envMap.value=ke,Sn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=RR()),Yt&&(Zt.setValue(H,"toneMappingExposure",U.toneMappingExposure),tt.needsLights&&hu(Sn,Bi),Re&&ne.fog===!0&&Ke.refreshFogUniforms(Sn,Re),Ke.refreshMaterialUniforms(Sn,ne,ue,fe,C.state.transmissionRenderTarget[D.id]),$c.upload(H,zi(tt),Sn,ot)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($c.upload(H,zi(tt),Sn,ot),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Zt.setValue(H,"center",Z.center),Zt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Zt.setValue(H,"normalMatrix",Z.normalMatrix),Zt.setValue(H,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Mn=ne.uniformsGroups;for(let Tn=0,Di=Mn.length;Tn<Di;Tn++){const Fi=Mn[Tn];Ue.update(Fi,xn),Ue.bind(Fi,xn)}}return xn}function hu(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function ol(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,q,oe){const ne=Ze.get(D);ne.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ze.get(D.texture).__webglTexture=q,Ze.get(D.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const oe=Ze.get(D);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const ar=H.createFramebuffer();this.setRenderTarget=function(D,q=0,oe=0){w=D,W=q,N=oe;let ne=!0,Z=null,Re=!1,Le=!1;if(D){const ke=Ze.get(D);if(ke.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(D);else if(ke.__hasExternalTextures)ot.rebindTextures(D,Ze.get(D.texture).__webglTexture,Ze.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Je=D.depthTexture;if(ke.__boundDepthTexture!==Je){if(Je!==null&&Ze.has(Je)&&(D.width!==Je.image.width||D.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const rt=Ze.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?Z=rt[q][oe]:Z=rt[q],Re=!0):D.samples>0&&ot.useMultisampledRTT(D)===!1?Z=Ze.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[oe]:Z=rt,ce.copy(D.viewport),pe.copy(D.scissor),ge=D.scissorTest}else ce.copy(_e).multiplyScalar(ue).floor(),pe.copy(we).multiplyScalar(ue).floor(),ge=Ie;if(oe!==0&&(Z=ar),He.bindFramebuffer(H.FRAMEBUFFER,Z)&&ne&&He.drawBuffers(D,Z),He.viewport(ce),He.scissor(pe),He.setScissorTest(ge),Re){const ke=Ze.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,oe)}else if(Le){const ke=q;for(let nt=0;nt<D.textures.length;nt++){const rt=Ze.get(D.textures[nt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+nt,rt.__webglTexture,oe,ke)}}else if(D!==null&&oe!==0){const ke=Ze.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,oe)}G=-1},this.readRenderTargetPixels=function(D,q,oe,ne,Z,Re,Le,Ve=0){if(!(D&&D.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){He.bindFramebuffer(H.FRAMEBUFFER,ke);try{const nt=D.textures[Ve],rt=nt.format,Je=nt.type;if(!Pt.textureFormatReadable(rt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Je)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ne&&oe>=0&&oe<=D.height-Z&&(D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(q,oe,ne,Z,st.convert(rt),st.convert(Je),Re))}finally{const nt=w!==null?Ze.get(w).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,q,oe,ne,Z,Re,Le,Ve=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ze.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(q>=0&&q<=D.width-ne&&oe>=0&&oe<=D.height-Z){He.bindFramebuffer(H.FRAMEBUFFER,ke);const nt=D.textures[Ve],rt=nt.format,Je=nt.type;if(!Pt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(q,oe,ne,Z,st.convert(rt),st.convert(Je),0);const wt=w!==null?Ze.get(w).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,wt);const Ct=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await kb(H,Ct,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(ht),H.deleteSync(Ct),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,oe=0){const ne=Math.pow(2,-oe),Z=Math.floor(D.image.width*ne),Re=Math.floor(D.image.height*ne),Le=q!==null?q.x:0,Ve=q!==null?q.y:0;ot.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,Le,Ve,Z,Re),He.unbindTexture()};const js=H.createFramebuffer(),Sa=H.createFramebuffer();this.copyTextureToTexture=function(D,q,oe=null,ne=null,Z=0,Re=null){Re===null&&(Z!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Z,Z=0):Re=0);let Le,Ve,ke,nt,rt,Je,ht,wt,Ct;const Et=D.isCompressedTexture?D.mipmaps[Re]:D.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ve=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,rt=oe.min.y,Je=oe.isBox3?oe.min.z:0;else{const gn=Math.pow(2,-Z);Le=Math.floor(Et.width*gn),Ve=Math.floor(Et.height*gn),D.isDataArrayTexture?ke=Et.depth:D.isData3DTexture?ke=Math.floor(Et.depth*gn):ke=1,nt=0,rt=0,Je=0}ne!==null?(ht=ne.x,wt=ne.y,Ct=ne.z):(ht=0,wt=0,Ct=0);const Bt=st.convert(q.format),tt=st.convert(q.type);let qt;q.isData3DTexture?(ot.setTexture3D(q,0),qt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),qt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),xn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ma=H.getParameter(H.UNPACK_SKIP_PIXELS),Yt=H.getParameter(H.UNPACK_SKIP_ROWS),Bi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Je);const Zt=D.isDataArrayTexture||D.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const gn=Ze.get(D),Mn=Ze.get(q),Tn=Ze.get(gn.__renderTarget),Di=Ze.get(Mn.__renderTarget);He.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Fi=0;Fi<ke;Fi++)Zt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(D).__webglTexture,Z,Je+Fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(q).__webglTexture,Re,Ct+Fi)),H.blitFramebuffer(nt,rt,Le,Ve,ht,wt,Le,Ve,H.DEPTH_BUFFER_BIT,H.NEAREST);He.bindFramebuffer(H.READ_FRAMEBUFFER,null),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||D.isRenderTargetTexture||Ze.has(D)){const gn=Ze.get(D),Mn=Ze.get(q);He.bindFramebuffer(H.READ_FRAMEBUFFER,js),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,Sa);for(let Tn=0;Tn<ke;Tn++)Zt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Z,Je+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Z),Sn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mn.__webglTexture,Re,Ct+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mn.__webglTexture,Re),Z!==0?H.blitFramebuffer(nt,rt,Le,Ve,ht,wt,Le,Ve,H.COLOR_BUFFER_BIT,H.NEAREST):Sn?H.copyTexSubImage3D(qt,Re,ht,wt,Ct+Tn,nt,rt,Le,Ve):H.copyTexSubImage2D(qt,Re,ht,wt,nt,rt,Le,Ve);He.bindFramebuffer(H.READ_FRAMEBUFFER,null),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Sn?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(qt,Re,ht,wt,Ct,Le,Ve,ke,Bt,tt,Et.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,Re,ht,wt,Ct,Le,Ve,ke,Bt,Et.data):H.texSubImage3D(qt,Re,ht,wt,Ct,Le,Ve,ke,Bt,tt,Et):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,ht,wt,Le,Ve,Bt,tt,Et.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,ht,wt,Et.width,Et.height,Bt,Et.data):H.texSubImage2D(H.TEXTURE_2D,Re,ht,wt,Le,Ve,Bt,tt,Et);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bi),Re===0&&q.generateMipmaps&&H.generateMipmap(qt),He.unbindTexture()},this.initRenderTarget=function(D){Ze.get(D).__webglFramebuffer===void 0&&ot.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){W=0,N=0,w=null,He.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const DR=()=>{const s=ie.useRef(null),[e,i]=ie.useState(!1);return ie.useEffect(()=>{if(!s.current)return;const r=new DE;r.fog=new pp(328976,.0015),r.background=new Lt(328976);const l=new gi(75,window.innerWidth/window.innerHeight,.1,3e3);l.position.z=5;const c=new CR({antialias:!0,alpha:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(c.domElement);const f=[65535,16711935,16776960,65280,16724787,3355647],h=new Vs(1,1,1),m=new zE(h),p=[],v=400;for(let fe=0;fe<v;fe++){const ue=f[Math.floor(Math.random()*f.length)],z=new Yh({color:ue,transparent:!0,opacity:.8,linewidth:2}),Q=new K1(m,z);Q.position.x=(Math.random()-.5)*120,Q.position.y=(Math.random()-.5)*120,Q.position.z=(Math.random()-.5)*1e3-500,Q.rotation.x=Math.random()*Math.PI,Q.rotation.y=Math.random()*Math.PI;const _e=Math.random()*2+.5;Q.scale.set(_e,_e,_e),Q.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},speedZ:Math.random()*2+.5},r.add(Q),p.push(Q)}const g=new gp(1,2),y=new BE(g),M=[],b=15;for(let fe=0;fe<b;fe++){const ue=f[Math.floor(Math.random()*f.length)],z=new Yh({color:ue,transparent:!0,opacity:.15,linewidth:1}),Q=new K1(y,z);Q.position.x=(Math.random()-.5)*600,Q.position.y=(Math.random()-.5)*600,Q.position.z=(Math.random()-.5)*2e3-800;const _e=Math.random()*50+30;Q.scale.set(_e,_e,_e),Q.userData={rotationSpeed:{x:(Math.random()-.5)*.002,y:(Math.random()-.5)*.002},speedZ:Math.random()*.5+.1},r.add(Q),M.push(Q)}const E=new jn,S=4e3,_=new Float32Array(S*3);for(let fe=0;fe<S*3;fe++)_[fe]=(Math.random()-.5)*2500;E.setAttribute("position",new Ri(_,3));const R=new d_({color:16777215,size:1.5,transparent:!0,opacity:.6}),C=new IE(E,R);r.add(C);let L=!1,B=0,U=0,O=0,W=0,N=0,w=0,G=0,K=0;const ce=fe=>{L=!0,i(!0),B=fe.clientX,U=fe.clientY,W=O,w=N},pe=fe=>{L===!0&&(O=(B-fe.clientX)*.1+W,N=(fe.clientY-U)*.1+w)},ge=()=>{L=!1,i(!1)},I=s.current;I.addEventListener("mousedown",ce),document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ge),I.addEventListener("touchstart",fe=>{const ue=fe.touches[0];ce({clientX:ue.clientX,clientY:ue.clientY})}),I.addEventListener("touchmove",fe=>{const ue=fe.touches[0];pe({clientX:ue.clientX,clientY:ue.clientY})}),I.addEventListener("touchend",ge);const J=()=>{requestAnimationFrame(J),N=Math.max(-85,Math.min(85,N)),G=C1.degToRad(90-N),K=C1.degToRad(O);const fe=new se;fe.x=500*Math.sin(G)*Math.cos(K),fe.y=500*Math.cos(G),fe.z=500*Math.sin(G)*Math.sin(K),l.lookAt(fe),p.forEach(ue=>{ue.position.z+=ue.userData.speedZ,ue.rotation.x+=ue.userData.rotationSpeed.x,ue.rotation.y+=ue.userData.rotationSpeed.y,ue.position.z>200&&(ue.position.z=-800,ue.position.x=(Math.random()-.5)*120,ue.position.y=(Math.random()-.5)*120)}),M.forEach(ue=>{ue.position.z+=ue.userData.speedZ,ue.rotation.x+=ue.userData.rotationSpeed.x,ue.rotation.y+=ue.userData.rotationSpeed.y,ue.position.z>600&&(ue.position.z=-1800,ue.position.x=(Math.random()-.5)*600,ue.position.y=(Math.random()-.5)*600)}),C.rotation.z+=3e-4,c.render(r,l)};J();const Y=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Y),()=>{if(window.removeEventListener("resize",Y),I)for(I.removeEventListener("mousedown",ce);I.firstChild;)I.removeChild(I.firstChild);document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ge)}},[]),F.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-sans",children:[F.jsx("div",{ref:s,className:"w-full h-full cursor-move"}),F.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8",children:[F.jsx("div",{className:"flex justify-between items-start",children:F.jsxs("div",{className:"bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-fade-in-down",children:[F.jsx("h1",{className:"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tighter mb-2 drop-shadow-lg",children:"NEON COSMOS"}),F.jsx("p",{className:"text-blue-200 text-sm font-light tracking-widest uppercase opacity-80",children:"Giant Structure Simulation"})]})}),F.jsx("div",{className:`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${e?"opacity-0":"opacity-60"}`,children:F.jsxs("div",{className:"flex flex-col items-center justify-center text-white/50",children:[F.jsx(LM,{className:"w-8 h-8 mb-2 animate-bounce"}),F.jsx("span",{className:"text-xs tracking-[0.2em] uppercase",children:"Drag to Explore"})]})}),F.jsxs("div",{className:"flex justify-between items-end",children:[F.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5",children:[F.jsxs("div",{className:"flex items-center gap-3 text-cyan-300 mb-1",children:[F.jsx(OM,{className:"w-4 h-4"}),F.jsx("span",{className:"text-xs font-bold",children:"CONTROLS"})]}),F.jsxs("p",{className:"text-gray-400 text-xs leading-relaxed max-w-[200px]",children:["마우스를 클릭하고 드래그하여",F.jsx("br",{}),"광활한 우주를 탐험하세요."]})]}),F.jsxs("div",{className:"bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-right",children:[F.jsxs("div",{className:"flex items-center justify-end gap-2 text-pink-400 mb-1",children:[F.jsx(AM,{className:"w-4 h-4"}),F.jsx("span",{className:"text-xs font-bold",children:"SYSTEM"})]}),F.jsxs("div",{className:"space-y-1",children:[F.jsxs("div",{className:"flex items-center justify-end gap-2",children:[F.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),F.jsx("span",{className:"text-gray-400 text-xs",children:"Simulation Running"})]}),F.jsxs("div",{className:"text-gray-500 text-[10px] font-mono",children:["ENTITIES: 400 CUBES",F.jsx("br",{}),"STRUCTURES: 15 GIANTS"]})]})]})]})]}),F.jsx("style",{children:`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `})]})};Ox.createRoot(document.getElementById("root")).render(F.jsx(ie.StrictMode,{children:F.jsx(KS,{children:F.jsxs(wS,{children:[F.jsx(qc,{path:"/",element:F.jsx(JM,{})}),F.jsx(qc,{path:"/network-quiz",element:F.jsx($M,{})}),F.jsx(qc,{path:"/neonspace",element:F.jsx(DR,{})})]})})}));
