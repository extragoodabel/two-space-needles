(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Dd={exports:{}},rl={};var u_;function LS(){if(u_)return rl;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return rl.Fragment=t,rl.jsx=i,rl.jsxs=i,rl}var f_;function OS(){return f_||(f_=1,Dd.exports=LS()),Dd.exports}var at=OS(),Ud={exports:{}},be={};var d_;function PS(){if(d_)return be;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function x(I,J,yt){this.props=I,this.context=J,this.refs=S,this.updater=yt||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=x.prototype;function N(I,J,yt){this.props=I,this.context=J,this.refs=S,this.updater=yt||b}var U=N.prototype=new D;U.constructor=N,w(U,x.prototype),U.isPureReactComponent=!0;var k=Array.isArray;function z(){}var G={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function C(I,J,yt){var Pt=yt.ref;return{$$typeof:r,type:I,key:J,ref:Pt!==void 0?Pt:null,props:yt}}function rt(I,J){return C(I.type,J,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Y(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(yt){return J[yt]})}var $=/\/+/g;function ft(I,J){return typeof I=="object"&&I!==null&&I.key!=null?Y(""+I.key):J.toString(36)}function K(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,J,yt,Pt,$t){var st=typeof I;(st==="undefined"||st==="boolean")&&(I=null);var bt=!1;if(I===null)bt=!0;else switch(st){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(I.$$typeof){case r:case t:bt=!0;break;case _:return bt=I._init,P(bt(I._payload),J,yt,Pt,$t)}}if(bt)return $t=$t(I),bt=Pt===""?"."+ft(I,0):Pt,k($t)?(yt="",bt!=null&&(yt=bt.replace($,"$&/")+"/"),P($t,J,yt,"",function(Qt){return Qt})):$t!=null&&(F($t)&&($t=rt($t,yt+($t.key==null||I&&I.key===$t.key?"":(""+$t.key).replace($,"$&/")+"/")+bt)),J.push($t)),1;bt=0;var Ut=Pt===""?".":Pt+":";if(k(I))for(var zt=0;zt<I.length;zt++)Pt=I[zt],st=Ut+ft(Pt,zt),bt+=P(Pt,J,yt,st,$t);else if(zt=y(I),typeof zt=="function")for(I=zt.call(I),zt=0;!(Pt=I.next()).done;)Pt=Pt.value,st=Ut+ft(Pt,zt++),bt+=P(Pt,J,yt,st,$t);else if(st==="object"){if(typeof I.then=="function")return P(K(I),J,yt,Pt,$t);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return bt}function B(I,J,yt){if(I==null)return I;var Pt=[],$t=0;return P(I,Pt,"","",function(st){return J.call(yt,st,$t++)}),Pt}function ht(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(yt){(I._status===0||I._status===-1)&&(I._status=1,I._result=yt)},function(yt){(I._status===0||I._status===-1)&&(I._status=2,I._result=yt)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Ot={map:B,forEach:function(I,J,yt){B(I,function(){J.apply(this,arguments)},yt)},count:function(I){var J=0;return B(I,function(){J++}),J},toArray:function(I){return B(I,function(J){return J})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return be.Activity=M,be.Children=Ot,be.Component=x,be.Fragment=i,be.Profiler=l,be.PureComponent=N,be.StrictMode=s,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,be.__COMPILER_RUNTIME={__proto__:null,c:function(I){return G.H.useMemoCache(I)}},be.cache=function(I){return function(){return I.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(I,J,yt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Pt=w({},I.props),$t=I.key;if(J!=null)for(st in J.key!==void 0&&($t=""+J.key),J)!T.call(J,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&J.ref===void 0||(Pt[st]=J[st]);var st=arguments.length-2;if(st===1)Pt.children=yt;else if(1<st){for(var bt=Array(st),Ut=0;Ut<st;Ut++)bt[Ut]=arguments[Ut+2];Pt.children=bt}return C(I.type,$t,Pt)},be.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},be.createElement=function(I,J,yt){var Pt,$t={},st=null;if(J!=null)for(Pt in J.key!==void 0&&(st=""+J.key),J)T.call(J,Pt)&&Pt!=="key"&&Pt!=="__self"&&Pt!=="__source"&&($t[Pt]=J[Pt]);var bt=arguments.length-2;if(bt===1)$t.children=yt;else if(1<bt){for(var Ut=Array(bt),zt=0;zt<bt;zt++)Ut[zt]=arguments[zt+2];$t.children=Ut}if(I&&I.defaultProps)for(Pt in bt=I.defaultProps,bt)$t[Pt]===void 0&&($t[Pt]=bt[Pt]);return C(I,st,$t)},be.createRef=function(){return{current:null}},be.forwardRef=function(I){return{$$typeof:p,render:I}},be.isValidElement=F,be.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ht}},be.memo=function(I,J){return{$$typeof:h,type:I,compare:J===void 0?null:J}},be.startTransition=function(I){var J=G.T,yt={};G.T=yt;try{var Pt=I(),$t=G.S;$t!==null&&$t(yt,Pt),typeof Pt=="object"&&Pt!==null&&typeof Pt.then=="function"&&Pt.then(z,St)}catch(st){St(st)}finally{J!==null&&yt.types!==null&&(J.types=yt.types),G.T=J}},be.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},be.use=function(I){return G.H.use(I)},be.useActionState=function(I,J,yt){return G.H.useActionState(I,J,yt)},be.useCallback=function(I,J){return G.H.useCallback(I,J)},be.useContext=function(I){return G.H.useContext(I)},be.useDebugValue=function(){},be.useDeferredValue=function(I,J){return G.H.useDeferredValue(I,J)},be.useEffect=function(I,J){return G.H.useEffect(I,J)},be.useEffectEvent=function(I){return G.H.useEffectEvent(I)},be.useId=function(){return G.H.useId()},be.useImperativeHandle=function(I,J,yt){return G.H.useImperativeHandle(I,J,yt)},be.useInsertionEffect=function(I,J){return G.H.useInsertionEffect(I,J)},be.useLayoutEffect=function(I,J){return G.H.useLayoutEffect(I,J)},be.useMemo=function(I,J){return G.H.useMemo(I,J)},be.useOptimistic=function(I,J){return G.H.useOptimistic(I,J)},be.useReducer=function(I,J,yt){return G.H.useReducer(I,J,yt)},be.useRef=function(I){return G.H.useRef(I)},be.useState=function(I){return G.H.useState(I)},be.useSyncExternalStore=function(I,J,yt){return G.H.useSyncExternalStore(I,J,yt)},be.useTransition=function(){return G.H.useTransition()},be.version="19.2.4",be}var h_;function Mp(){return h_||(h_=1,Ud.exports=PS()),Ud.exports}var gt=Mp(),Nd={exports:{}},ol={},Ld={exports:{}},Od={};var p_;function IS(){return p_||(p_=1,(function(r){function t(P,B){var ht=P.length;P.push(B);t:for(;0<ht;){var St=ht-1>>>1,Ot=P[St];if(0<l(Ot,B))P[St]=B,P[ht]=Ot,ht=St;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],ht=P.pop();if(ht!==B){P[0]=ht;t:for(var St=0,Ot=P.length,I=Ot>>>1;St<I;){var J=2*(St+1)-1,yt=P[J],Pt=J+1,$t=P[Pt];if(0>l(yt,ht))Pt<Ot&&0>l($t,yt)?(P[St]=$t,P[Pt]=ht,St=Pt):(P[St]=yt,P[J]=ht,St=J);else if(Pt<Ot&&0>l($t,ht))P[St]=$t,P[Pt]=ht,St=Pt;else break t}}return B}function l(P,B){var ht=P.sortIndex-B.sortIndex;return ht!==0?ht:P.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,M=null,g=3,y=!1,b=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=P)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function k(P){if(w=!1,U(P),!b)if(i(m)!==null)b=!0,z||(z=!0,Y());else{var B=i(h);B!==null&&K(k,B.startTime-P)}}var z=!1,G=-1,T=5,C=-1;function rt(){return S?!0:!(r.unstable_now()-C<T)}function F(){if(S=!1,z){var P=r.unstable_now();C=P;var B=!0;try{t:{b=!1,w&&(w=!1,D(G),G=-1),y=!0;var ht=g;try{e:{for(U(P),M=i(m);M!==null&&!(M.expirationTime>P&&rt());){var St=M.callback;if(typeof St=="function"){M.callback=null,g=M.priorityLevel;var Ot=St(M.expirationTime<=P);if(P=r.unstable_now(),typeof Ot=="function"){M.callback=Ot,U(P),B=!0;break e}M===i(m)&&s(m),U(P)}else s(m);M=i(m)}if(M!==null)B=!0;else{var I=i(h);I!==null&&K(k,I.startTime-P),B=!1}}break t}finally{M=null,g=ht,y=!1}B=void 0}}finally{B?Y():z=!1}}}var Y;if(typeof N=="function")Y=function(){N(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ft=$.port2;$.port1.onmessage=F,Y=function(){ft.postMessage(null)}}else Y=function(){x(F,0)};function K(P,B){G=x(function(){P(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var ht=g;g=B;try{return P()}finally{g=ht}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ht=g;g=P;try{return B()}finally{g=ht}},r.unstable_scheduleCallback=function(P,B,ht){var St=r.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?St+ht:St):ht=St,P){case 1:var Ot=-1;break;case 2:Ot=250;break;case 5:Ot=1073741823;break;case 4:Ot=1e4;break;default:Ot=5e3}return Ot=ht+Ot,P={id:_++,callback:B,priorityLevel:P,startTime:ht,expirationTime:Ot,sortIndex:-1},ht>St?(P.sortIndex=ht,t(h,P),i(m)===null&&P===i(h)&&(w?(D(G),G=-1):w=!0,K(k,ht-St))):(P.sortIndex=Ot,t(m,P),b||y||(b=!0,z||(z=!0,Y()))),P},r.unstable_shouldYield=rt,r.unstable_wrapCallback=function(P){var B=g;return function(){var ht=g;g=B;try{return P.apply(this,arguments)}finally{g=ht}}}})(Od)),Od}var m_;function FS(){return m_||(m_=1,Ld.exports=IS()),Ld.exports}var Pd={exports:{}},ni={};var g_;function BS(){if(g_)return ni;g_=1;var r=Mp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:""+M,children:m,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ni.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,_)},ni.flushSync=function(m){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=_,s.d.f()}},ni.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},ni.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ni.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,M=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:M,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ni.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},ni.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,M=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ni.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},ni.requestFormReset=function(m){s.d.r(m)},ni.unstable_batchedUpdates=function(m,h){return m(h)},ni.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},ni.useFormStatus=function(){return d.H.useHostTransitionStatus()},ni.version="19.2.4",ni}var __;function zS(){if(__)return Pd.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=BS(),Pd.exports}var v_;function HS(){if(v_)return ol;v_=1;var r=FS(),t=Mp(),i=zS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var M=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var K=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},St=[],Ot=-1;function I(e){return{current:e}}function J(e){0>Ot||(e.current=St[Ot],St[Ot]=null,Ot--)}function yt(e,n){Ot++,St[Ot]=e.current,e.current=n}var Pt=I(null),$t=I(null),st=I(null),bt=I(null);function Ut(e,n){switch(yt(st,n),yt($t,e),yt(Pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L0(n),e=O0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Pt),yt(Pt,e)}function zt(){J(Pt),J($t),J(st)}function Qt(e){e.memoizedState!==null&&yt(bt,e);var n=Pt.current,a=O0(n,e.type);n!==a&&(yt($t,e),yt(Pt,a))}function le(e){$t.current===e&&(J(Pt),J($t)),bt.current===e&&(J(bt),nl._currentValue=ht)}var cn,Ee;function Se(e){if(cn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);cn=n&&n[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cn+e+Ee}var Fe=!1;function ge(e,n){if(!e||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(_t){var dt=_t}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(_t){dt=_t}e.call(Dt.prototype)}}else{try{throw Error()}catch(_t){dt=_t}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(_t){if(_t&&dt&&typeof _t.stack=="string")return[_t.stack,dt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var X=v.split(`
`),lt=R.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===lt.length)for(o=X.length-1,u=lt.length-1;1<=o&&0<=u&&X[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==lt[u]){var Et=`
`+X[o].replace(" at new "," at ");return e.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",e.displayName)),Et}while(1<=o&&0<=u);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function Ce(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return Se("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Ce(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,we=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback,se=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,Mt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,xt=r.unstable_NormalPriority,ee=r.unstable_LowPriority,Gt=r.unstable_IdlePriority,re=r.log,he=r.unstable_setDisableYieldValue,At=null,Lt=null;function Zt(e){if(typeof re=="function"&&he(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(At,e)}catch{}}var Wt=Math.clz32?Math.clz32:j,qt=Math.log,_e=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(qt(e)/_e|0)|0}var kt=256,Vt=262144,ne=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=It(o):(v&=R,v!==0?u=It(v):a||(a=R&~e,a!==0&&(u=It(a))))):(R=o&~f,R!==0?u=It(R):v!==0?u=It(v):a||(a=o&~e,a!==0&&(u=It(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function me(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var e=ne;return ne<<=1,(ne&62914560)===0&&(ne=4194304),e}function ye(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ti(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,X=e.expirationTimes,lt=e.hiddenUpdates;for(a=v&~a;0<a;){var Et=31-Wt(a),Dt=1<<Et;R[Et]=0,X[Et]=-1;var dt=lt[Et];if(dt!==null)for(lt[Et]=null,Et=0;Et<dt.length;Et++){var _t=dt[Et];_t!==null&&(_t.lane&=-536870913)}a&=~Dt}o!==0&&da(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function da(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ea(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function La(e,n){var a=n&-n;return a=(a&42)!==0?1:vi(a),(a&(e.suspendedLanes|n))!==0?0:a}function vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function li(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xn(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:i_(e.type))}function xi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Bn=Math.random().toString(36).slice(2),un="__reactFiber$"+Bn,fn="__reactProps$"+Bn,zn="__reactContainer$"+Bn,bn="__reactEvents$"+Bn,ci="__reactListeners$"+Bn,ui="__reactHandles$"+Bn,Hi="__reactResources$"+Bn,Hn="__reactMarker$"+Bn;function ei(e){delete e[un],delete e[fn],delete e[bn],delete e[ci],delete e[ui]}function fi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=G0(e);e!==null;){if(a=e[un])return a;e=G0(e)}return n}e=a,a=e.parentNode}return null}function Ri(e){if(e=e[un]||e[zn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[Hi];return n||(n=e[Hi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[Hn]=!0}var ut=new Set,nt={};function O(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(nt[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Rt={};function Bt(e){return sn.call(Rt,e)?!0:sn.call(et,e)?!1:pt.test(e)?Rt[e]=!0:(et[e]=!0,!1)}function Yt(e,n,a){if(Bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ie(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Pe(e)?"checked":"value";e._valueTracker=Ie(e,n,""+e[n])}}function hn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qn=/[\n"\\]/g;function xe(e){return e.replace(qn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ce(n)):e.value!==""+ce(n)&&(e.value=""+ce(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?hi(e,v,ce(n)):a!=null?hi(e,v,ce(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ce(R):e.removeAttribute("name")}function di(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Oe(e)}function hi(e,n,a){n==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function H(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Z(e,n,a){if(n!=null&&(n=""+ce(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ce(a):""}function mt(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ce(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function wt(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nt(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jt(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nt(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Nt(e,f,n[f])}function ie(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var de=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ue(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Me(){}var mn=null;function On(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rn=null,Yn=null;function Gi(e){var n=Ri(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[fn]||null;if(!u)throw Error(s(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&hn(o)}break t;case"textarea":Z(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&H(e,!!a.multiple,n,!1)}}}var na=!1;function Oa(e,n,a){if(na)return e(n,a);na=!0;try{var o=e(n);return o}finally{if(na=!1,(Rn!==null||Yn!==null)&&(cc(),Rn&&(n=Rn,e=Yn,Yn=Rn=null,Gi(n),e)))for(n=0;n<e.length;n++)Gi(e[n])}}function ha(e,n){var a=e.stateNode;if(a===null)return null;var o=a[fn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=!1;if(Vi)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Mo=!1}var ma=null,vr=null,ia=null;function Vs(){if(ia)return ia;var e,n=vr,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ia=u.slice(e,1<o?1-o:void 0)}function os(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tn(){return!0}function Ci(){return!1}function pn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tn:Ci,this.isPropagationStopped=Ci,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),n}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=pn(ks),So=M({},ks,{view:0,detail:0}),Ux=pn(So),Uu,Nu,yo,Rl=M({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(Uu=e.screenX-yo.screenX,Nu=e.screenY-yo.screenY):Nu=Uu=0,yo=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),Ip=pn(Rl),Nx=M({},Rl,{dataTransfer:0}),Lx=pn(Nx),Ox=M({},So,{relatedTarget:0}),Lu=pn(Ox),Px=M({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=pn(Px),Fx=M({},ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=pn(Fx),zx=M({},ks,{data:0}),Fp=pn(zx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vx[e])?!!n[e]:!1}function Ou(){return kx}var Xx=M({},So,{key:function(e){if(e.key){var n=Hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wx=pn(Xx),qx=M({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=pn(qx),Yx=M({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),jx=pn(Yx),Zx=M({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=pn(Zx),Qx=M({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=pn(Qx),$x=M({},ks,{newState:0,oldState:0}),tM=pn($x),eM=[9,13,27,32],Pu=Vi&&"CompositionEvent"in window,Eo=null;Vi&&"documentMode"in document&&(Eo=document.documentMode);var nM=Vi&&"TextEvent"in window&&!Eo,zp=Vi&&(!Pu||Eo&&8<Eo&&11>=Eo),Hp=" ",Gp=!1;function Vp(e,n){switch(e){case"keyup":return eM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function iM(e,n){switch(e){case"compositionend":return kp(n);case"keypress":return n.which!==32?null:(Gp=!0,Hp);case"textInput":return e=n.data,e===Hp&&Gp?null:e;default:return null}}function aM(e,n){if(xr)return e==="compositionend"||!Pu&&Vp(e,n)?(e=Vs(),ia=vr=ma=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var sM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sM[e.type]:n==="textarea"}function Wp(e,n,a,o){Rn?Yn?Yn.push(o):Yn=[o]:Rn=o,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var bo=null,To=null;function rM(e){R0(e,0)}function Cl(e){var n=Wn(e);if(hn(n))return e}function qp(e,n){if(e==="change")return n}var Yp=!1;if(Vi){var Iu;if(Vi){var Fu="oninput"in document;if(!Fu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Fu=typeof jp.oninput=="function"}Iu=Fu}else Iu=!1;Yp=Iu&&(!document.documentMode||9<document.documentMode)}function Zp(){bo&&(bo.detachEvent("onpropertychange",Kp),To=bo=null)}function Kp(e){if(e.propertyName==="value"&&Cl(To)){var n=[];Wp(n,To,e,On(e)),Oa(rM,n)}}function oM(e,n,a){e==="focusin"?(Zp(),bo=n,To=a,bo.attachEvent("onpropertychange",Kp)):e==="focusout"&&Zp()}function lM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(To)}function cM(e,n){if(e==="click")return Cl(n)}function uM(e,n){if(e==="input"||e==="change")return Cl(n)}function fM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wi=typeof Object.is=="function"?Object.is:fM;function Ao(e,n){if(wi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!sn.call(n,u)||!wi(e[u],n[u]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,n){var a=Qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qp(a)}}function $p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ae(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ae(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dM=Vi&&"documentMode"in document&&11>=document.documentMode,Mr=null,zu=null,Ro=null,Hu=!1;function em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||Mr==null||Mr!==ae(o)||(o=Mr,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ro&&Ao(Ro,o)||(Ro=o,o=gc(zu,"onSelect"),0<o.length&&(n=new Al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Mr)))}function Xs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Sr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},Gu={},nm={};Vi&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Ws(e){if(Gu[e])return Gu[e];if(!Sr[e])return e;var n=Sr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in nm)return Gu[e]=n[a];return e}var im=Ws("animationend"),am=Ws("animationiteration"),sm=Ws("animationstart"),hM=Ws("transitionrun"),pM=Ws("transitionstart"),mM=Ws("transitioncancel"),rm=Ws("transitionend"),om=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function aa(e,n){om.set(e,n),O(n,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ki=[],yr=0,ku=0;function Dl(){for(var e=yr,n=ku=yr=0;n<e;){var a=ki[n];ki[n++]=null;var o=ki[n];ki[n++]=null;var u=ki[n];ki[n++]=null;var f=ki[n];if(ki[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&lm(a,u,f)}}function Ul(e,n,a,o){ki[yr++]=e,ki[yr++]=n,ki[yr++]=a,ki[yr++]=o,ku|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Xu(e,n,a,o){return Ul(e,n,a,o),Nl(e)}function qs(e,n){return Ul(e,null,null,n),Nl(e)}function lm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Wt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Nl(e){if(50<Zo)throw Zo=0,td=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Er={};function gM(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(e,n,a,o){return new gM(e,n,a,o)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,n){var a=e.alternate;return a===null?(a=Di(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ll(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Wu(e)&&(v=1);else if(typeof e=="string")v=SS(e,a,Pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Di(31,a,n,u),e.elementType=C,e.lanes=f,e;case w:return Ys(a.children,u,f,n);case S:v=8,u|=24;break;case x:return e=Di(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case k:return e=Di(13,a,n,u),e.elementType=k,e.lanes=f,e;case z:return e=Di(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case D:v=9;break t;case U:v=11;break t;case G:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Di(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ys(e,n,a,o){return e=Di(7,e,o,n),e.lanes=a,e}function qu(e,n,a){return e=Di(6,e,null,n),e.lanes=a,e}function um(e){var n=Di(18,null,null,0);return n.stateNode=e,n}function Yu(e,n,a){return n=Di(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fm=new WeakMap;function Xi(e,n){if(typeof e=="object"&&e!==null){var a=fm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},fm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var br=[],Tr=0,Ol=null,Co=0,Wi=[],qi=0,ls=null,ga=1,_a="";function Ia(e,n){br[Tr++]=Co,br[Tr++]=Ol,Ol=e,Co=n}function dm(e,n,a){Wi[qi++]=ga,Wi[qi++]=_a,Wi[qi++]=ls,ls=e;var o=ga;e=_a;var u=32-Wt(o)-1;o&=~(1<<u),a+=1;var f=32-Wt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,ga=1<<32-Wt(n)+u|a<<u|o,_a=f+e}else ga=1<<f|a<<u|o,_a=e}function ju(e){e.return!==null&&(Ia(e,1),dm(e,1,0))}function Zu(e){for(;e===Ol;)Ol=br[--Tr],br[Tr]=null,Co=br[--Tr],br[Tr]=null;for(;e===ls;)ls=Wi[--qi],Wi[qi]=null,_a=Wi[--qi],Wi[qi]=null,ga=Wi[--qi],Wi[qi]=null}function hm(e,n){Wi[qi++]=ga,Wi[qi++]=_a,Wi[qi++]=ls,ga=n.id,_a=n.overflow,ls=e}var jn=null,gn=null,ke=!1,cs=null,Yi=!1,Ku=Error(s(519));function us(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(Xi(n,e)),Ku}function pm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[fn]=o,a){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)He(Qo[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),di(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),mt(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||U0(n.textContent,a)?(o.popover!=null&&(He("beforetoggle",n),He("toggle",n)),o.onScroll!=null&&He("scroll",n),o.onScrollEnd!=null&&He("scrollend",n),o.onClick!=null&&(n.onclick=Me),n=!0):n=!1,n||us(e,!0)}function mm(e){for(jn=e.return;jn;)switch(jn.tag){case 5:case 31:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:jn=jn.return}}function Ar(e){if(e!==jn)return!1;if(!ke)return mm(e),ke=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&gn&&us(e),mm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=H0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=H0(e)}else n===27?(n=gn,bs(e.type)?(e=Md,Md=null,gn=e):gn=n):gn=jn?Zi(e.stateNode.nextSibling):null;return!0}function js(){gn=jn=null,ke=!1}function Qu(){var e=cs;return e!==null&&(Ei===null?Ei=e:Ei.push.apply(Ei,e),cs=null),e}function wo(e){cs===null?cs=[e]:cs.push(e)}var Ju=I(null),Zs=null,Fa=null;function fs(e,n,a){yt(Ju,n._currentValue),n._currentValue=a}function Ba(e){e._currentValue=Ju.current,J(Ju)}function $u(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function tf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var X=0;X<n.length;X++)if(R.context===n[X]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),$u(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),$u(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Rr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;wi(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===bt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}u=u.return}e!==null&&tf(n,e,a,o),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!wi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ks(e){Zs=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return gm(Zs,e)}function Il(e,n){return Zs===null&&Ks(e),gm(e,n)}function gm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fa===null){if(e===null)throw Error(s(308));Fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fa=Fa.next=n;return a}var _M=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vM=r.unstable_scheduleCallback,xM=r.unstable_NormalPriority,Cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new _M,data:new Map,refCount:0}}function Do(e){e.refCount--,e.refCount===0&&vM(xM,function(){e.controller.abort()})}var Uo=null,nf=0,Cr=0,wr=null;function MM(e,n){if(Uo===null){var a=Uo=[];nf=0,Cr=rd(),wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(_m,_m),n}function _m(){if(--nf===0&&Uo!==null){wr!==null&&(wr.status="fulfilled");var e=Uo;Uo=null,Cr=0,wr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function SM(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=P.S;P.S=function(e,n){e0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&MM(e,n),vm!==null&&vm(e,n)};var Qs=I(null);function af(){var e=Qs.current;return e!==null?e:dn.pooledCache}function Fl(e,n){n===null?yt(Qs,Qs.current):yt(Qs,n.pool)}function xm(){var e=af();return e===null?null:{parent:Cn._currentValue,pool:e}}var Dr=Error(s(460)),sf=Error(s(474)),Bl=Error(s(542)),zl={then:function(){}};function Mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Me,Me),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e;default:if(typeof n.status=="string")n.then(Me,Me);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e}throw $s=n,Dr}}function Js(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($s=a,Dr):a}}var $s=null;function ym(){if($s===null)throw Error(s(459));var e=$s;return $s=null,e}function Em(e){if(e===Dr||e===Bl)throw Error(s(483))}var Ur=null,No=0;function Hl(e){var n=No;return No+=1,Ur===null&&(Ur=[]),Sm(Ur,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){function n(tt,q){if(e){var ot=tt.deletions;ot===null?(tt.deletions=[q],tt.flags|=16):ot.push(q)}}function a(tt,q){if(!e)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function o(tt){for(var q=new Map;tt!==null;)tt.key!==null?q.set(tt.key,tt):q.set(tt.index,tt),tt=tt.sibling;return q}function u(tt,q){return tt=Pa(tt,q),tt.index=0,tt.sibling=null,tt}function f(tt,q,ot){return tt.index=ot,e?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<q?(tt.flags|=67108866,q):ot):(tt.flags|=67108866,q)):(tt.flags|=1048576,q)}function v(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function R(tt,q,ot,Tt){return q===null||q.tag!==6?(q=qu(ot,tt.mode,Tt),q.return=tt,q):(q=u(q,ot),q.return=tt,q)}function X(tt,q,ot,Tt){var pe=ot.type;return pe===w?Et(tt,q,ot.props.children,Tt,ot.key):q!==null&&(q.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===T&&Js(pe)===q.type)?(q=u(q,ot.props),Lo(q,ot),q.return=tt,q):(q=Ll(ot.type,ot.key,ot.props,null,tt.mode,Tt),Lo(q,ot),q.return=tt,q)}function lt(tt,q,ot,Tt){return q===null||q.tag!==4||q.stateNode.containerInfo!==ot.containerInfo||q.stateNode.implementation!==ot.implementation?(q=Yu(ot,tt.mode,Tt),q.return=tt,q):(q=u(q,ot.children||[]),q.return=tt,q)}function Et(tt,q,ot,Tt,pe){return q===null||q.tag!==7?(q=Ys(ot,tt.mode,Tt,pe),q.return=tt,q):(q=u(q,ot),q.return=tt,q)}function Dt(tt,q,ot){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=qu(""+q,tt.mode,ot),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return ot=Ll(q.type,q.key,q.props,null,tt.mode,ot),Lo(ot,q),ot.return=tt,ot;case b:return q=Yu(q,tt.mode,ot),q.return=tt,q;case T:return q=Js(q),Dt(tt,q,ot)}if(K(q)||Y(q))return q=Ys(q,tt.mode,ot,null),q.return=tt,q;if(typeof q.then=="function")return Dt(tt,Hl(q),ot);if(q.$$typeof===N)return Dt(tt,Il(tt,q),ot);Gl(tt,q)}return null}function dt(tt,q,ot,Tt){var pe=q!==null?q.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return pe!==null?null:R(tt,q,""+ot,Tt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case y:return ot.key===pe?X(tt,q,ot,Tt):null;case b:return ot.key===pe?lt(tt,q,ot,Tt):null;case T:return ot=Js(ot),dt(tt,q,ot,Tt)}if(K(ot)||Y(ot))return pe!==null?null:Et(tt,q,ot,Tt,null);if(typeof ot.then=="function")return dt(tt,q,Hl(ot),Tt);if(ot.$$typeof===N)return dt(tt,q,Il(tt,ot),Tt);Gl(tt,ot)}return null}function _t(tt,q,ot,Tt,pe){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return tt=tt.get(ot)||null,R(q,tt,""+Tt,pe);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case y:return tt=tt.get(Tt.key===null?ot:Tt.key)||null,X(q,tt,Tt,pe);case b:return tt=tt.get(Tt.key===null?ot:Tt.key)||null,lt(q,tt,Tt,pe);case T:return Tt=Js(Tt),_t(tt,q,ot,Tt,pe)}if(K(Tt)||Y(Tt))return tt=tt.get(ot)||null,Et(q,tt,Tt,pe,null);if(typeof Tt.then=="function")return _t(tt,q,ot,Hl(Tt),pe);if(Tt.$$typeof===N)return _t(tt,q,ot,Il(q,Tt),pe);Gl(q,Tt)}return null}function oe(tt,q,ot,Tt){for(var pe=null,Ye=null,fe=q,De=q=0,Ve=null;fe!==null&&De<ot.length;De++){fe.index>De?(Ve=fe,fe=null):Ve=fe.sibling;var je=dt(tt,fe,ot[De],Tt);if(je===null){fe===null&&(fe=Ve);break}e&&fe&&je.alternate===null&&n(tt,fe),q=f(je,q,De),Ye===null?pe=je:Ye.sibling=je,Ye=je,fe=Ve}if(De===ot.length)return a(tt,fe),ke&&Ia(tt,De),pe;if(fe===null){for(;De<ot.length;De++)fe=Dt(tt,ot[De],Tt),fe!==null&&(q=f(fe,q,De),Ye===null?pe=fe:Ye.sibling=fe,Ye=fe);return ke&&Ia(tt,De),pe}for(fe=o(fe);De<ot.length;De++)Ve=_t(fe,tt,De,ot[De],Tt),Ve!==null&&(e&&Ve.alternate!==null&&fe.delete(Ve.key===null?De:Ve.key),q=f(Ve,q,De),Ye===null?pe=Ve:Ye.sibling=Ve,Ye=Ve);return e&&fe.forEach(function(ws){return n(tt,ws)}),ke&&Ia(tt,De),pe}function ve(tt,q,ot,Tt){if(ot==null)throw Error(s(151));for(var pe=null,Ye=null,fe=q,De=q=0,Ve=null,je=ot.next();fe!==null&&!je.done;De++,je=ot.next()){fe.index>De?(Ve=fe,fe=null):Ve=fe.sibling;var ws=dt(tt,fe,je.value,Tt);if(ws===null){fe===null&&(fe=Ve);break}e&&fe&&ws.alternate===null&&n(tt,fe),q=f(ws,q,De),Ye===null?pe=ws:Ye.sibling=ws,Ye=ws,fe=Ve}if(je.done)return a(tt,fe),ke&&Ia(tt,De),pe;if(fe===null){for(;!je.done;De++,je=ot.next())je=Dt(tt,je.value,Tt),je!==null&&(q=f(je,q,De),Ye===null?pe=je:Ye.sibling=je,Ye=je);return ke&&Ia(tt,De),pe}for(fe=o(fe);!je.done;De++,je=ot.next())je=_t(fe,tt,De,je.value,Tt),je!==null&&(e&&je.alternate!==null&&fe.delete(je.key===null?De:je.key),q=f(je,q,De),Ye===null?pe=je:Ye.sibling=je,Ye=je);return e&&fe.forEach(function(NS){return n(tt,NS)}),ke&&Ia(tt,De),pe}function ln(tt,q,ot,Tt){if(typeof ot=="object"&&ot!==null&&ot.type===w&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case y:t:{for(var pe=ot.key;q!==null;){if(q.key===pe){if(pe=ot.type,pe===w){if(q.tag===7){a(tt,q.sibling),Tt=u(q,ot.props.children),Tt.return=tt,tt=Tt;break t}}else if(q.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===T&&Js(pe)===q.type){a(tt,q.sibling),Tt=u(q,ot.props),Lo(Tt,ot),Tt.return=tt,tt=Tt;break t}a(tt,q);break}else n(tt,q);q=q.sibling}ot.type===w?(Tt=Ys(ot.props.children,tt.mode,Tt,ot.key),Tt.return=tt,tt=Tt):(Tt=Ll(ot.type,ot.key,ot.props,null,tt.mode,Tt),Lo(Tt,ot),Tt.return=tt,tt=Tt)}return v(tt);case b:t:{for(pe=ot.key;q!==null;){if(q.key===pe)if(q.tag===4&&q.stateNode.containerInfo===ot.containerInfo&&q.stateNode.implementation===ot.implementation){a(tt,q.sibling),Tt=u(q,ot.children||[]),Tt.return=tt,tt=Tt;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}Tt=Yu(ot,tt.mode,Tt),Tt.return=tt,tt=Tt}return v(tt);case T:return ot=Js(ot),ln(tt,q,ot,Tt)}if(K(ot))return oe(tt,q,ot,Tt);if(Y(ot)){if(pe=Y(ot),typeof pe!="function")throw Error(s(150));return ot=pe.call(ot),ve(tt,q,ot,Tt)}if(typeof ot.then=="function")return ln(tt,q,Hl(ot),Tt);if(ot.$$typeof===N)return ln(tt,q,Il(tt,ot),Tt);Gl(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,q!==null&&q.tag===6?(a(tt,q.sibling),Tt=u(q,ot),Tt.return=tt,tt=Tt):(a(tt,q),Tt=qu(ot,tt.mode,Tt),Tt.return=tt,tt=Tt),v(tt)):a(tt,q)}return function(tt,q,ot,Tt){try{No=0;var pe=ln(tt,q,ot,Tt);return Ur=null,pe}catch(fe){if(fe===Dr||fe===Bl)throw fe;var Ye=Di(29,fe,null,tt.mode);return Ye.lanes=Tt,Ye.return=tt,Ye}}}var tr=bm(!0),Tm=bm(!1),ds=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ps(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Nl(e),lm(e,null,a),n}return Ul(e,o,n,a),Nl(e)}function Oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ea(e,a)}}function lf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var cf=!1;function Po(){if(cf){var e=wr;if(e!==null)throw e}}function Io(e,n,a,o){cf=!1;var u=e.updateQueue;ds=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var X=R,lt=X.next;X.next=null,v===null?f=lt:v.next=lt,v=X;var Et=e.alternate;Et!==null&&(Et=Et.updateQueue,R=Et.lastBaseUpdate,R!==v&&(R===null?Et.firstBaseUpdate=lt:R.next=lt,Et.lastBaseUpdate=X))}if(f!==null){var Dt=u.baseState;v=0,Et=lt=X=null,R=f;do{var dt=R.lane&-536870913,_t=dt!==R.lane;if(_t?(Ge&dt)===dt:(o&dt)===dt){dt!==0&&dt===Cr&&(cf=!0),Et!==null&&(Et=Et.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var oe=e,ve=R;dt=n;var ln=a;switch(ve.tag){case 1:if(oe=ve.payload,typeof oe=="function"){Dt=oe.call(ln,Dt,dt);break t}Dt=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ve.payload,dt=typeof oe=="function"?oe.call(ln,Dt,dt):oe,dt==null)break t;Dt=M({},Dt,dt);break t;case 2:ds=!0}}dt=R.callback,dt!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=u.callbacks,_t===null?u.callbacks=[dt]:_t.push(dt))}else _t={lane:dt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Et===null?(lt=Et=_t,X=Dt):Et=Et.next=_t,v|=dt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;_t=R,R=_t.next,_t.next=null,u.lastBaseUpdate=_t,u.shared.pending=null}}while(!0);Et===null&&(X=Dt),u.baseState=X,u.firstBaseUpdate=lt,u.lastBaseUpdate=Et,f===null&&(u.shared.lanes=0),xs|=v,e.lanes=v,e.memoizedState=Dt}}function Am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Am(a[e],n)}var Nr=I(null),Vl=I(0);function Cm(e,n){e=Ya,yt(Vl,e),yt(Nr,n),Ya=e|n.baseLanes}function uf(){yt(Vl,Ya),yt(Nr,Nr.current)}function ff(){Ya=Vl.current,J(Nr),J(Vl)}var Ui=I(null),ji=null;function ms(e){var n=e.alternate;yt(Tn,Tn.current&1),yt(Ui,e),ji===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(ji=e)}function df(e){yt(Tn,Tn.current),yt(Ui,e),ji===null&&(ji=e)}function wm(e){e.tag===22?(yt(Tn,Tn.current),yt(Ui,e),ji===null&&(ji=e)):gs()}function gs(){yt(Tn,Tn.current),yt(Ui,Ui.current)}function Ni(e){J(Ui),ji===e&&(ji=null),J(Tn)}var Tn=I(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vd(a)||xd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var za=0,Ae=null,rn=null,wn=null,Xl=!1,Lr=!1,er=!1,Wl=0,Fo=0,Or=null,yM=0;function Mn(){throw Error(s(321))}function hf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!wi(e[a],n[a]))return!1;return!0}function pf(e,n,a,o,u,f){return za=f,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?dg:wf,er=!1,f=a(o,u),er=!1,Lr&&(f=Um(n,a,o,u)),Dm(e),f}function Dm(e){P.H=Ho;var n=rn!==null&&rn.next!==null;if(za=0,wn=rn=Ae=null,Xl=!1,Fo=0,Or=null,n)throw Error(s(300));e===null||Dn||(e=e.dependencies,e!==null&&Pl(e)&&(Dn=!0))}function Um(e,n,a,o){Ae=e;var u=0;do{if(Lr&&(Or=null),Fo=0,Lr=!1,25<=u)throw Error(s(301));if(u+=1,wn=rn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=hg,f=n(a,o)}while(Lr);return f}function EM(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Bo(n):n,e=e.useState()[0],(rn!==null?rn.memoizedState:null)!==e&&(Ae.flags|=1024),n}function mf(){var e=Wl!==0;return Wl=0,e}function gf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function _f(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}za=0,wn=rn=Ae=null,Lr=!1,Fo=Wl=0,Or=null}function pi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ae.memoizedState=wn=e:wn=wn.next=e,wn}function An(){if(rn===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=rn.next;var n=wn===null?Ae.memoizedState:wn.next;if(n!==null)wn=n,rn=e;else{if(e===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));rn=e,e={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},wn===null?Ae.memoizedState=wn=e:wn=wn.next=e}return wn}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var n=Fo;return Fo+=1,Or===null&&(Or=[]),e=Sm(Or,e,n),n=Ae,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?dg:wf),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===N)return Zn(e)}throw Error(s(438,String(e)))}function vf(e){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ae.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ql(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=rt;return n.index++,a}function Ha(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=An();return xf(n,rn,e)}function xf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,X=null,lt=n,Et=!1;do{var Dt=lt.lane&-536870913;if(Dt!==lt.lane?(Ge&Dt)===Dt:(za&Dt)===Dt){var dt=lt.revertLane;if(dt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),Dt===Cr&&(Et=!0);else if((za&dt)===dt){lt=lt.next,dt===Cr&&(Et=!0);continue}else Dt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},X===null?(R=X=Dt,v=f):X=X.next=Dt,Ae.lanes|=dt,xs|=dt;Dt=lt.action,er&&a(f,Dt),f=lt.hasEagerState?lt.eagerState:a(f,Dt)}else dt={lane:Dt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},X===null?(R=X=dt,v=f):X=X.next=dt,Ae.lanes|=Dt,xs|=Dt;lt=lt.next}while(lt!==null&&lt!==n);if(X===null?v=f:X.next=R,!wi(f,e.memoizedState)&&(Dn=!0,Et&&(a=wr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=X,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Mf(e){var n=An(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);wi(f,n.memoizedState)||(Dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Nm(e,n,a){var o=Ae,u=An(),f=ke;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!wi((rn||u).memoizedState,a);if(v&&(u.memoizedState=a,Dn=!0),u=u.queue,Ef(Pm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||wn!==null&&wn.memoizedState.tag&1){if(o.flags|=2048,Pr(9,{destroy:void 0},Om.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));f||(za&127)!==0||Lm(o,n,a)}return a}function Lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=ql(),Ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Om(e,n,a,o){n.value=a,n.getSnapshot=o,Im(n)&&Fm(e)}function Pm(e,n,a){return a(function(){Im(n)&&Fm(e)})}function Im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!wi(e,a)}catch{return!0}}function Fm(e){var n=qs(e,2);n!==null&&bi(n,e,2)}function Sf(e){var n=pi();if(typeof e=="function"){var a=e;if(e=a(),er){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},n}function Bm(e,n,a,o){return e.baseState=a,xf(e,rn,typeof o=="function"?o:Ha)}function bM(e,n,a,o,u){if(Ql(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,zm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function zm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var R=a(u,o),X=P.S;X!==null&&X(v,R),Hm(e,n,R)}catch(lt){yf(e,n,lt)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,o),Hm(e,n,f)}catch(lt){yf(e,n,lt)}}function Hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Gm(e,n,o)},function(o){return yf(e,n,o)}):Gm(e,n,a)}function Gm(e,n,a){n.status="fulfilled",n.value=a,Vm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zm(e,a)))}function yf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==o)}e.action=null}function Vm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function km(e,n){return n}function Xm(e,n){if(ke){var a=dn.formState;if(a!==null){t:{var o=Ae;if(ke){if(gn){e:{for(var u=gn,f=Yi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Zi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=Zi(u.nextSibling),o=u.data==="F!";break t}}us(o)}o=!1}o&&(n=a[0])}}return a=pi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=o,a=cg.bind(null,Ae,o),o.dispatch=a,o=Sf(!1),f=Cf.bind(null,Ae,!1,o.queue),o=pi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=bM.bind(null,Ae,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wm(e){var n=An();return qm(n,rn,e)}function qm(e,n,a){if(n=xf(e,n,km)[0],e=jl(Ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Bo(n)}catch(v){throw v===Dr?Bl:v}else o=n;n=An();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Ae.flags|=2048,Pr(9,{destroy:void 0},TM.bind(null,u,a),null)),[o,f,e]}function TM(e,n){e.action=n}function Ym(e){var n=An(),a=rn;if(a!==null)return qm(n,a,e);An(),n=n.memoizedState,a=An();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=ql(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return An().memoizedState}function Zl(e,n,a,o){var u=pi();Ae.flags|=e,u.memoizedState=Pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Kl(e,n,a,o){var u=An();o=o===void 0?null:o;var f=u.memoizedState.inst;rn!==null&&o!==null&&hf(o,rn.memoizedState.deps)?u.memoizedState=Pr(n,f,a,o):(Ae.flags|=e,u.memoizedState=Pr(1|n,f,a,o))}function Zm(e,n){Zl(8390656,8,e,n)}function Ef(e,n){Kl(2048,8,e,n)}function AM(e){Ae.flags|=4;var n=Ae.updateQueue;if(n===null)n=ql(),Ae.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Km(e){var n=An().memoizedState;return AM({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return Kl(4,2,e,n)}function Jm(e,n){return Kl(4,4,e,n)}function $m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tg(e,n,a){a=a!=null?a.concat([e]):null,Kl(4,4,$m.bind(null,n,e),a)}function bf(){}function eg(e,n){var a=An();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&hf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ng(e,n){var a=An();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&hf(n,o[1]))return o[0];if(o=e(),er){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o}function Tf(e,n,a){return a===void 0||(za&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=i0(),Ae.lanes|=e,xs|=e,a)}function ig(e,n,a,o){return wi(a,n)?a:Nr.current!==null?(e=Tf(e,a,o),wi(e,n)||(Dn=!0),e):(za&42)===0||(za&1073741824)!==0&&(Ge&261930)===0?(Dn=!0,e.memoizedState=a):(e=i0(),Ae.lanes|=e,xs|=e,n)}function ag(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var v=P.T,R={};P.T=R,Cf(e,!1,n,a);try{var X=u(),lt=P.S;if(lt!==null&&lt(R,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Et=SM(X,o);zo(e,n,Et,Pi(e))}else zo(e,n,o,Pi(e))}catch(Dt){zo(e,n,{then:function(){},status:"rejected",reason:Dt},Pi())}finally{B.p=f,v!==null&&R.types!==null&&(v.types=R.types),P.T=v}}function RM(){}function Af(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=sg(e).queue;ag(e,u,n,ht,a===null?RM:function(){return rg(e),a(o)})}function sg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rg(e){var n=sg(e);n.next===null&&(n=e.alternate.memoizedState),zo(e,n.next.queue,{},Pi())}function Rf(){return Zn(nl)}function og(){return An().memoizedState}function lg(){return An().memoizedState}function CM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Pi();e=hs(a);var o=ps(n,e,a);o!==null&&(bi(o,n,a),Oo(o,n,a)),n={cache:ef()},e.payload=n;return}n=n.return}}function wM(e,n,a){var o=Pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?ug(n,a):(a=Xu(e,n,a,o),a!==null&&(bi(a,e,o),fg(a,n,o)))}function cg(e,n,a){var o=Pi();zo(e,n,a,o)}function zo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))ug(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,wi(R,v))return Ul(e,n,u,0),dn===null&&Dl(),!1}catch{}if(a=Xu(e,n,u,o),a!==null)return bi(a,e,o),fg(a,n,o),!0}return!1}function Cf(e,n,a,o){if(o={lane:2,revertLane:rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(n)throw Error(s(479))}else n=Xu(e,a,o,2),n!==null&&bi(n,e,2)}function Ql(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function ug(e,n){Lr=Xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ea(e,a)}}var Ho={readContext:Zn,use:Yl,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn};Ho.useEffectEvent=Mn;var dg={readContext:Zn,use:Yl,useCallback:function(e,n){return pi().memoizedState=[e,n===void 0?null:n],e},useContext:Zn,useEffect:Zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,$m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zl(4194308,4,e,n)},useInsertionEffect:function(e,n){Zl(4,2,e,n)},useMemo:function(e,n){var a=pi();n=n===void 0?null:n;var o=e();if(er){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=pi();if(a!==void 0){var u=a(n);if(er){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wM.bind(null,Ae,e),[o.memoizedState,e]},useRef:function(e){var n=pi();return e={current:e},n.memoizedState=e},useState:function(e){e=Sf(e);var n=e.queue,a=cg.bind(null,Ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(e,n){var a=pi();return Tf(a,e,n)},useTransition:function(){var e=Sf(!1);return e=ag.bind(null,Ae,e.queue,!0,!1),pi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ae,u=pi();if(ke){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(Ge&127)!==0||Lm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zm(Pm.bind(null,o,f,e),[e]),o.flags|=2048,Pr(9,{destroy:void 0},Om.bind(null,o,f,a,n),null),a},useId:function(){var e=pi(),n=dn.identifierPrefix;if(ke){var a=_a,o=ga;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e){var n=pi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cf.bind(null,Ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:vf,useCacheRefresh:function(){return pi().memoizedState=CM.bind(null,Ae)},useEffectEvent:function(e){var n=pi(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},wf={readContext:Zn,use:Yl,useCallback:eg,useContext:Zn,useEffect:Ef,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:jl,useRef:jm,useState:function(){return jl(Ha)},useDebugValue:bf,useDeferredValue:function(e,n){var a=An();return ig(a,rn.memoizedState,e,n)},useTransition:function(){var e=jl(Ha)[0],n=An().memoizedState;return[typeof e=="boolean"?e:Bo(e),n]},useSyncExternalStore:Nm,useId:og,useHostTransitionStatus:Rf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=An();return Bm(a,rn,e,n)},useMemoCache:vf,useCacheRefresh:lg};wf.useEffectEvent=Km;var hg={readContext:Zn,use:Yl,useCallback:eg,useContext:Zn,useEffect:Ef,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:Mf,useRef:jm,useState:function(){return Mf(Ha)},useDebugValue:bf,useDeferredValue:function(e,n){var a=An();return rn===null?Tf(a,e,n):ig(a,rn.memoizedState,e,n)},useTransition:function(){var e=Mf(Ha)[0],n=An().memoizedState;return[typeof e=="boolean"?e:Bo(e),n]},useSyncExternalStore:Nm,useId:og,useHostTransitionStatus:Rf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=An();return rn!==null?Bm(a,rn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:lg};hg.useEffectEvent=Km;function Df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:M({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Pi(),u=hs(o);u.payload=n,a!=null&&(u.callback=a),n=ps(e,u,o),n!==null&&(bi(n,e,o),Oo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Pi(),u=hs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ps(e,u,o),n!==null&&(bi(n,e,o),Oo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Pi(),o=hs(a);o.tag=2,n!=null&&(o.callback=n),n=ps(e,o,a),n!==null&&(bi(n,e,a),Oo(n,e,a))}};function pg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,o)||!Ao(u,f):!0}function mg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Uf.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=M({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function gg(e){wl(e)}function _g(e){console.error(e)}function vg(e){wl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Nf(e,n,a){return a=hs(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function Mg(e){return e=hs(e),e.tag=3,e}function Sg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){xg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){xg(n,a,o),typeof u!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function DM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,u,!0),a=Ui.current,a!==null){switch(a.tag){case 31:case 13:return ji===null?uc():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),id(e,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),id(e,o,u)),!1}throw Error(s(435,a.tag))}return id(e,o,u),uc(),!1}if(ke)return n=Ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ku&&(e=Error(s(422),{cause:o}),wo(Xi(e,a)))):(o!==Ku&&(n=Error(s(423),{cause:o}),wo(Xi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Xi(o,a),u=Nf(e.stateNode,o,u),lf(e,u),Sn!==4&&(Sn=2)),!1;var f=Error(s(520),{cause:o});if(f=Xi(f,a),jo===null?jo=[f]:jo.push(f),Sn!==4&&(Sn=2),n===null)return!0;o=Xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Nf(a.stateNode,o,e),lf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ms===null||!Ms.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Mg(u),Sg(u,e,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Lf=Error(s(461)),Dn=!1;function Kn(e,n,a,o){n.child=e===null?Tm(n,null,a,o):tr(n,e.child,a,o)}function yg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Ks(n),o=pf(e,n,a,v,f,u),R=mf(),e!==null&&!Dn?(gf(e,n,u),Ga(e,n,u)):(ke&&R&&ju(n),n.flags|=1,Kn(e,n,o,u),n.child)}function Eg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bg(e,n,f,o,u)):(e=Ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(v,o)&&e.ref===n.ref)return Ga(e,n,u)}return n.flags|=1,e=Pa(f,o),e.ref=n.ref,e.return=n,n.child=e}function bg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Ao(f,o)&&e.ref===n.ref)if(Dn=!1,n.pendingProps=o=f,Gf(e,u))(e.flags&131072)!==0&&(Dn=!0);else return n.lanes=e.lanes,Ga(e,n,u)}return Of(e,n,a,o,u)}function Tg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Ag(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fl(n,f!==null?f.cachePool:null),f!==null?Cm(n,f):uf(),wm(n);else return o=n.lanes=536870912,Ag(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Fl(n,f.cachePool),Cm(n,f),gs(),n.memoizedState=null):(e!==null&&Fl(n,null),uf(),gs());return Kn(e,n,u,a),n.child}function Go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ag(e,n,a,o,u){var f=af();return f=f===null?null:{parent:Cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Fl(n,null),uf(),wm(n),e!==null&&Rr(e,n,o,!0),n.childLanes=u,null}function $l(e,n){return n=ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rg(e,n,a){return tr(n,e.child,null,a),e=$l(n,n.pendingProps),e.flags|=2,Ni(n),n.memoizedState=null,e}function UM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ke){if(o.mode==="hidden")return e=$l(n,o),n.lanes=536870912,Go(null,e);if(df(n),(e=gn)?(e=z0(e,Yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ga,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,jn=n,gn=null)):e=null,e===null)throw us(n);return n.lanes=536870912,null}return $l(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(df(n),u)if(n.flags&256)n.flags&=-257,n=Rg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Dn||Rr(e,n,a,!1),u=(a&e.childLanes)!==0,Dn||u){if(o=dn,o!==null&&(v=La(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,qs(e,v),bi(o,e,v),Lf;uc(),n=Rg(e,n,a)}else e=f.treeContext,gn=Zi(v.nextSibling),jn=n,ke=!0,cs=null,Yi=!1,e!==null&&hm(n,e),n=$l(n,o),n.flags|=4096;return n}return e=Pa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function tc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Of(e,n,a,o,u){return Ks(n),a=pf(e,n,a,o,void 0,u),o=mf(),e!==null&&!Dn?(gf(e,n,u),Ga(e,n,u)):(ke&&o&&ju(n),n.flags|=1,Kn(e,n,a,u),n.child)}function Cg(e,n,a,o,u,f){return Ks(n),n.updateQueue=null,a=Um(n,o,a,u),Dm(e),o=mf(),e!==null&&!Dn?(gf(e,n,f),Ga(e,n,f)):(ke&&o&&ju(n),n.flags|=1,Kn(e,n,a,f),n.child)}function wg(e,n,a,o,u){if(Ks(n),n.stateNode===null){var f=Er,v=a.contextType;typeof v=="object"&&v!==null&&(f=Zn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},rf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Zn(v):Er,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Df(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Uf.enqueueReplaceState(f,f.state,null),Io(n,o,f,u),Po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,X=nr(a,R);f.props=X;var lt=f.context,Et=a.contextType;v=Er,typeof Et=="object"&&Et!==null&&(v=Zn(Et));var Dt=a.getDerivedStateFromProps;Et=typeof Dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||lt!==v)&&mg(n,f,o,v),ds=!1;var dt=n.memoizedState;f.state=dt,Io(n,o,f,u),Po(),lt=n.memoizedState,R||dt!==lt||ds?(typeof Dt=="function"&&(Df(n,a,Dt,o),lt=n.memoizedState),(X=ds||pg(n,a,X,o,dt,lt,v))?(Et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=v,o=X):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,of(e,n),v=n.memoizedProps,Et=nr(a,v),f.props=Et,Dt=n.pendingProps,dt=f.context,lt=a.contextType,X=Er,typeof lt=="object"&&lt!==null&&(X=Zn(lt)),R=a.getDerivedStateFromProps,(lt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Dt||dt!==X)&&mg(n,f,o,X),ds=!1,dt=n.memoizedState,f.state=dt,Io(n,o,f,u),Po();var _t=n.memoizedState;v!==Dt||dt!==_t||ds||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof R=="function"&&(Df(n,a,R,o),_t=n.memoizedState),(Et=ds||pg(n,a,Et,o,dt,_t,X)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,_t,X),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,_t,X)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_t),f.props=o,f.state=_t,f.context=X,o=Et):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,tc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=tr(n,e.child,null,u),n.child=tr(n,null,a,u)):Kn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ga(e,n,u),e}function Dg(e,n,a,o){return js(),n.flags|=256,Kn(e,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(e){return{baseLanes:e,cachePool:xm()}}function Ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Oi),e}function Ug(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(ke){if(u?ms(n):gs(),(e=gn)?(e=z0(e,Yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ga,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,jn=n,gn=null)):e=null,e===null)throw us(n);return xd(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(gs(),u=n.mode,R=ec({mode:"hidden",children:R},u),o=Ys(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=If(a),o.childLanes=Ff(e,v,a),n.memoizedState=Pf,Go(null,o)):(ms(n),Bf(n,R))}var X=e.memoizedState;if(X!==null&&(R=X.dehydrated,R!==null)){if(f)n.flags&256?(ms(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(gs(),n.child=e.child,n.flags|=128,n=null):(gs(),R=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),R=Ys(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,tr(n,e.child,null,a),o=n.child,o.memoizedState=If(a),o.childLanes=Ff(e,v,a),n.memoizedState=Pf,n=Go(null,o));else if(ms(n),xd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var lt=v.dgst;v=lt,o=Error(s(419)),o.stack="",o.digest=v,wo({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(Dn||Rr(e,n,a,!1),v=(a&e.childLanes)!==0,Dn||v){if(v=dn,v!==null&&(o=La(v,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,qs(e,o),bi(v,e,o),Lf;vd(R)||uc(),n=zf(e,n,a)}else vd(R)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,gn=Zi(R.nextSibling),jn=n,ke=!0,cs=null,Yi=!1,e!==null&&hm(n,e),n=Bf(n,o.children),n.flags|=4096);return n}return u?(gs(),R=o.fallback,u=n.mode,X=e.child,lt=X.sibling,o=Pa(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,lt!==null?R=Pa(lt,R):(R=Ys(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Go(null,o),o=n.child,R=e.child.memoizedState,R===null?R=If(a):(u=R.cachePool,u!==null?(X=Cn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=xm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Ff(e,v,a),n.memoizedState=Pf,Go(e.child,o)):(ms(n),a=e.child,e=a.sibling,a=Pa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Bf(e,n){return n=ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ec(e,n){return e=Di(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return tr(n,e.child,null,a),e=Bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ng(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$u(e.return,n,a)}function Hf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Lg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Tn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,yt(Tn,v),Kn(e,n,o,a),o=ke?Co:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ng(e,a,n);else if(e.tag===19)Ng(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hf(n,!0,a,null,f,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function NM(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),fs(n,Cn,e.memoizedState.cache),js();break;case 27:case 5:Qt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ms(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ug(e,n,a):(ms(n),e=Ga(e,n,a),e!==null?e.sibling:null);ms(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Rr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Lg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(Tn,Tn.current),o)break;return null;case 22:return n.lanes=0,Tg(e,n,a,n.pendingProps);case 24:fs(n,Cn,e.memoizedState.cache)}return Ga(e,n,a)}function Og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Dn=!0;else{if(!Gf(e,a)&&(n.flags&128)===0)return Dn=!1,NM(e,n,a);Dn=(e.flags&131072)!==0}else Dn=!1,ke&&(n.flags&1048576)!==0&&dm(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Js(n.elementType),n.type=e,typeof e=="function")Wu(e)?(o=nr(e,o),n.tag=1,n=wg(null,n,e,o,a)):(n.tag=0,n=Of(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=yg(null,n,e,o,a);break t}else if(u===G){n.tag=14,n=Eg(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return Of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=nr(o,n.pendingProps),wg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,of(e,n),Io(n,o,null,a);var v=n.memoizedState;if(o=v.cache,fs(n,Cn,o),o!==f.cache&&tf(n,[Cn],a,!0),Po(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dg(e,n,o,a);break t}else if(o!==u){u=Xi(Error(s(424)),n),wo(u),n=Dg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=Zi(e.firstChild),jn=n,ke=!0,cs=null,Yi=!0,a=Tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),o===u){n=Ga(e,n,a);break t}Kn(e,n,o,a)}n=n.child}return n;case 26:return tc(e,n),e===null?(a=W0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ke||(a=n.type,e=n.pendingProps,o=_c(st.current).createElement(a),o[un]=n,o[fn]=e,Qn(o,a,e),W(o),n.stateNode=o):n.memoizedState=W0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&ke&&(o=n.stateNode=V0(n.type,n.pendingProps,st.current),jn=n,Yi=!0,u=gn,bs(n.type)?(Md=u,gn=Zi(o.firstChild)):gn=u),Kn(e,n,n.pendingProps.children,a),tc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ke&&((u=o=gn)&&(o=lS(o,n.type,n.pendingProps,Yi),o!==null?(n.stateNode=o,jn=n,gn=Zi(o.firstChild),Yi=!1,u=!0):u=!1),u||us(n)),Qt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,md(u,f)?o=null:v!==null&&md(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=pf(e,n,EM,null,null,a),nl._currentValue=u),tc(e,n),Kn(e,n,o,a),n.child;case 6:return e===null&&ke&&((e=a=gn)&&(a=cS(a,n.pendingProps,Yi),a!==null?(n.stateNode=a,jn=n,gn=null,e=!0):e=!1),e||us(n)),null;case 13:return Ug(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=tr(n,null,o,a):Kn(e,n,o,a),n.child;case 11:return yg(e,n,n.type,n.pendingProps,a);case 7:return Kn(e,n,n.pendingProps,a),n.child;case 8:return Kn(e,n,n.pendingProps.children,a),n.child;case 12:return Kn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,fs(n,n.type,o.value),Kn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ks(n),u=Zn(u),o=o(u),n.flags|=1,Kn(e,n,o,a),n.child;case 14:return Eg(e,n,n.type,n.pendingProps,a);case 15:return bg(e,n,n.type,n.pendingProps,a);case 19:return Lg(e,n,a);case 31:return UM(e,n,a);case 22:return Tg(e,n,a,n.pendingProps);case 24:return Ks(n),o=Zn(Cn),e===null?(u=af(),u===null&&(u=dn,f=ef(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},rf(n),fs(n,Cn,u)):((e.lanes&a)!==0&&(of(e,n),Io(n,null,null,a),Po()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fs(n,Cn,o)):(o=f.cache,fs(n,Cn,o),o!==u.cache&&tf(n,[Cn],a,!0))),Kn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Va(e){e.flags|=4}function Vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(o0())e.flags|=8192;else throw $s=zl,sf}else e.flags&=-16777217}function Pg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(n))if(o0())e.flags|=8192;else throw $s=zl,sf}function nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Le():536870912,e.lanes|=n,zr|=n)}function Vo(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function LM(e,n,a){var o=n.pendingProps;switch(Zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ba(Cn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ar(n)?Va(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),_n(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Va(n),f!==null?(_n(n),Pg(n,f)):(_n(n),Vf(n,u,null,o,a))):f?f!==e.memoizedState?(Va(n),_n(n),Pg(n,f)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Va(n),_n(n),Vf(n,u,e,o,a)),null;case 27:if(le(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Pt.current,Ar(n)?pm(n):(e=V0(u,o,a),n.stateNode=e,Va(n))}return _n(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(f=Pt.current,Ar(n))pm(n);else{var v=_c(st.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[un]=n,f[fn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Qn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Va(n)}}return _n(n),Vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,Ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=jn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||U0(e.nodeValue,a)),e||us(n,!0)}else e=_c(e).createTextNode(o),e[un]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Ni(n),n):(Ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ni(n),n):(Ni(n),null)}return Ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),_n(n),null);case 4:return zt(),e===null&&ud(n.stateNode.containerInfo),_n(n),null;case 10:return Ba(n.type),_n(n),null;case 19:if(J(Tn),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Vo(o,!1);else{if(Sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=kl(e),f!==null){for(n.flags|=128,Vo(o,!1),e=f.updateQueue,n.updateQueue=e,nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cm(a,e),a=a.sibling;return yt(Tn,Tn.current&1|2),ke&&Ia(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>oc&&(n.flags|=128,u=!0,Vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=kl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,nc(n,e),Vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ke)return _n(n),null}else 2*E()-o.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Tn.current,yt(Tn,u?a&1|2:a&1),ke&&Ia(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return Ni(n),ff(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Qs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ba(Cn),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OM(e,n){switch(Zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ba(Cn),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Ni(n),n.alternate===null)throw Error(s(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(Tn),null;case 4:return zt(),null;case 10:return Ba(n.type),null;case 22:case 23:return Ni(n),ff(),e!==null&&J(Qs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ba(Cn),null;case 25:return null;default:return null}}function Ig(e,n){switch(Zu(n),n.tag){case 3:Ba(Cn),zt();break;case 26:case 27:case 5:le(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Ni(n);break;case 13:Ni(n);break;case 19:J(Tn);break;case 10:Ba(n.type);break;case 22:case 23:Ni(n),ff(),e!==null&&J(Qs);break;case 24:Ba(Cn)}}function ko(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){nn(n,n.return,R)}}function _s(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var X=a,lt=R;try{lt()}catch(Et){nn(u,X,Et)}}}o=o.next}while(o!==f)}}catch(Et){nn(n,n.return,Et)}}function Fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rm(n,a)}catch(o){nn(e,e.return,o)}}}function Bg(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function Xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function va(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function zg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function kf(e,n,a){try{var o=e.stateNode;nS(o,e.type,a,n),o[fn]=n}catch(u){nn(e,e.return,u)}}function Hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bs(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Me));else if(o!==4&&(o===27&&bs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Wf(e,n,a),e=e.sibling;e!==null;)Wf(e,n,a),e=e.sibling}function ic(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&bs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,n,a),e=e.sibling;e!==null;)ic(e,n,a),e=e.sibling}function Gg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Qn(n,o,a),n[un]=e,n[fn]=a}catch(f){nn(e,e.return,f)}}var ka=!1,Un=!1,qf=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function PM(e,n){if(e=e.containerInfo,hd=bc,e=tm(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,X=-1,lt=0,Et=0,Dt=e,dt=null;e:for(;;){for(var _t;Dt!==a||u!==0&&Dt.nodeType!==3||(R=v+u),Dt!==f||o!==0&&Dt.nodeType!==3||(X=v+o),Dt.nodeType===3&&(v+=Dt.nodeValue.length),(_t=Dt.firstChild)!==null;)dt=Dt,Dt=_t;for(;;){if(Dt===e)break e;if(dt===a&&++lt===u&&(R=v),dt===f&&++Et===o&&(X=v),(_t=Dt.nextSibling)!==null)break;Dt=dt,dt=Dt.parentNode}Dt=_t}a=R===-1||X===-1?null:{start:R,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},bc=!1,Gn=n;Gn!==null;)if(n=Gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Gn=e;else for(;Gn!==null;){switch(n=Gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var oe=nr(a.type,u);e=o.getSnapshotBeforeUpdate(oe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ve){nn(a,a.return,ve)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Gn=e;break}Gn=n.return}}function kg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(e,a),o&4&&ko(5,a);break;case 1:if(Wa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){nn(a,a.return,v)}else{var u=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){nn(a,a.return,v)}}o&64&&Fg(a),o&512&&Xo(a,a.return);break;case 3:if(Wa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rm(e,n)}catch(v){nn(a,a.return,v)}}break;case 27:n===null&&o&4&&Gg(a);case 26:case 5:Wa(e,a),n===null&&o&4&&zg(a),o&512&&Xo(a,a.return);break;case 12:Wa(e,a);break;case 31:Wa(e,a),o&4&&qg(e,a);break;case 13:Wa(e,a),o&4&&Yg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XM.bind(null,a),uS(e,a))));break;case 22:if(o=a.memoizedState!==null||ka,!o){n=n!==null&&n.memoizedState!==null||Un,u=ka;var f=Un;ka=o,(Un=n)&&!f?qa(e,a,(a.subtreeFlags&8772)!==0):Wa(e,a),ka=u,Un=f}break;case 30:break;default:Wa(e,a)}}function Xg(e){var n=e.alternate;n!==null&&(e.alternate=null,Xg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ei(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vn=null,Mi=!1;function Xa(e,n,a){for(a=a.child;a!==null;)Wg(e,n,a),a=a.sibling}function Wg(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:Un||va(a,n),Xa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Un||va(a,n);var o=vn,u=Mi;bs(a.type)&&(vn=a.stateNode,Mi=!1),Xa(e,n,a),$o(a.stateNode),vn=o,Mi=u;break;case 5:Un||va(a,n);case 6:if(o=vn,u=Mi,vn=null,Xa(e,n,a),vn=o,Mi=u,vn!==null)if(Mi)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(a.stateNode)}catch(f){nn(a,n,f)}else try{vn.removeChild(a.stateNode)}catch(f){nn(a,n,f)}break;case 18:vn!==null&&(Mi?(e=vn,F0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yr(e)):F0(vn,a.stateNode));break;case 4:o=vn,u=Mi,vn=a.stateNode.containerInfo,Mi=!0,Xa(e,n,a),vn=o,Mi=u;break;case 0:case 11:case 14:case 15:_s(2,a,n),Un||_s(4,a,n),Xa(e,n,a);break;case 1:Un||(va(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Bg(a,n,o)),Xa(e,n,a);break;case 21:Xa(e,n,a);break;case 22:Un=(o=Un)||a.memoizedState!==null,Xa(e,n,a),Un=o;break;default:Xa(e,n,a)}}function qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(a){nn(n,n.return,a)}}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(a){nn(n,n.return,a)}}function IM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vg),n;default:throw Error(s(435,e.tag))}}function ac(e,n){var a=IM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=WM.bind(null,e,o);o.then(u,u)}})}function Si(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(bs(R.type)){vn=R.stateNode,Mi=!1;break t}break;case 5:vn=R.stateNode,Mi=!1;break t;case 3:case 4:vn=R.stateNode.containerInfo,Mi=!0;break t}R=R.return}if(vn===null)throw Error(s(160));Wg(f,v,u),vn=null,Mi=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var sa=null;function jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Si(n,e),yi(e),o&4&&(_s(3,e,e.return),ko(3,e),_s(5,e,e.return));break;case 1:Si(n,e),yi(e),o&512&&(Un||a===null||va(a,a.return)),o&64&&ka&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=sa;if(Si(n,e),yi(e),o&512&&(Un||a===null||va(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Hn]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Qn(f,o,a),f[un]=e,W(f),o=f;break t;case"link":var v=j0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),Qn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=j0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),Qn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=e,W(f),o=f}e.stateNode=o}else Z0(u,e.type,e.stateNode);else e.stateNode=Y0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Z0(u,e.type,e.stateNode):Y0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Si(n,e),yi(e),o&512&&(Un||a===null||va(a,a.return)),a!==null&&o&4&&kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Si(n,e),yi(e),o&512&&(Un||a===null||va(a,a.return)),e.flags&32){u=e.stateNode;try{wt(u,"")}catch(oe){nn(e,e.return,oe)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,kf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(qf=!0);break;case 6:if(Si(n,e),yi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(oe){nn(e,e.return,oe)}}break;case 3:if(Mc=null,u=sa,sa=vc(n.containerInfo),Si(n,e),sa=u,yi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(oe){nn(e,e.return,oe)}qf&&(qf=!1,Zg(e));break;case 4:o=sa,sa=vc(e.stateNode.containerInfo),Si(n,e),yi(e),sa=o;break;case 12:Si(n,e),yi(e);break;case 31:Si(n,e),yi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 13:Si(n,e),yi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,lt=ka,Et=Un;if(ka=lt||u,Un=Et||X,Si(n,e),Un=Et,ka=lt,yi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||ka||Un||ir(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(f=X.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=X.stateNode;var Dt=X.memoizedProps.style,dt=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;R.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(oe){nn(X,X.return,oe)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(oe){nn(X,X.return,oe)}}}else if(n.tag===18){if(a===null){X=n;try{var _t=X.stateNode;u?B0(_t,!0):B0(X.stateNode,!1)}catch(oe){nn(X,X.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ac(e,a))));break;case 19:Si(n,e),yi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 30:break;case 21:break;default:Si(n,e),yi(e)}}function yi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Hg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Xf(e);ic(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(wt(v,""),a.flags&=-33);var R=Xf(e);ic(e,R,v);break;case 3:case 4:var X=a.stateNode.containerInfo,lt=Xf(e);Wf(e,lt,X);break;default:throw Error(s(161))}}catch(Et){nn(e,e.return,Et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kg(e,n.alternate,n),n=n.sibling}function ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),ir(n);break;case 1:va(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bg(n,n.return,a),ir(n);break;case 27:$o(n.stateNode);case 26:case 5:va(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}e=e.sibling}}function qa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:qa(u,f,a),ko(4,f);break;case 1:if(qa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){nn(o,o.return,lt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Am(X[u],R)}catch(lt){nn(o,o.return,lt)}}a&&v&64&&Fg(f),Xo(f,f.return);break;case 27:Gg(f);case 26:case 5:qa(u,f,a),a&&o===null&&v&4&&zg(f),Xo(f,f.return);break;case 12:qa(u,f,a);break;case 31:qa(u,f,a),a&&v&4&&qg(u,f);break;case 13:qa(u,f,a),a&&v&4&&Yg(u,f);break;case 22:f.memoizedState===null&&qa(u,f,a),Xo(f,f.return);break;case 30:break;default:qa(u,f,a)}n=n.sibling}}function Yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Do(a))}function jf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Do(e))}function ra(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(e,n,a,o),n=n.sibling}function Kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ra(e,n,a,o),u&2048&&ko(9,n);break;case 1:ra(e,n,a,o);break;case 3:ra(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Do(e)));break;case 12:if(u&2048){ra(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){nn(n,n.return,X)}}else ra(e,n,a,o);break;case 31:ra(e,n,a,o);break;case 13:ra(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ra(e,n,a,o):Wo(e,n):f._visibility&2?ra(e,n,a,o):(f._visibility|=2,Ir(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Yf(v,n);break;case 24:ra(e,n,a,o),u&2048&&jf(n.alternate,n);break;default:ra(e,n,a,o)}}function Ir(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,X=o,lt=v.flags;switch(v.tag){case 0:case 11:case 15:Ir(f,v,R,X,u),ko(8,v);break;case 23:break;case 22:var Et=v.stateNode;v.memoizedState!==null?Et._visibility&2?Ir(f,v,R,X,u):Wo(f,v):(Et._visibility|=2,Ir(f,v,R,X,u)),u&&lt&2048&&Yf(v.alternate,v);break;case 24:Ir(f,v,R,X,u),u&&lt&2048&&jf(v.alternate,v);break;default:Ir(f,v,R,X,u)}n=n.sibling}}function Wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Wo(a,o),u&2048&&Yf(o.alternate,o);break;case 24:Wo(a,o),u&2048&&jf(o.alternate,o);break;default:Wo(a,o)}n=n.sibling}}var qo=8192;function Fr(e,n,a){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)Qg(e,n,a),e=e.sibling}function Qg(e,n,a){switch(e.tag){case 26:Fr(e,n,a),e.flags&qo&&e.memoizedState!==null&&yS(a,sa,e.memoizedState,e.memoizedProps);break;case 5:Fr(e,n,a);break;case 3:case 4:var o=sa;sa=vc(e.stateNode.containerInfo),Fr(e,n,a),sa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=qo,qo=16777216,Fr(e,n,a),qo=o):Fr(e,n,a));break;default:Fr(e,n,a)}}function Jg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,t0(o,e)}Jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$g(e),e=e.sibling}function $g(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&_s(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,sc(e)):Yo(e);break;default:Yo(e)}}function sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,t0(o,e)}Jg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_s(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}e=e.sibling}}function t0(e,n){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:_s(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Do(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Gn=o;else t:for(a=e;Gn!==null;){o=Gn;var u=o.sibling,f=o.return;if(Xg(o),o===a){Gn=null;break t}if(u!==null){u.return=f,Gn=u;break t}Gn=f}}}var FM={getCacheForType:function(e){var n=Zn(Cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Zn(Cn).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,Je=0,dn=null,ze=null,Ge=0,en=0,Li=null,vs=!1,Br=!1,Zf=!1,Ya=0,Sn=0,xs=0,ar=0,Kf=0,Oi=0,zr=0,jo=null,Ei=null,Qf=!1,rc=0,e0=0,oc=1/0,lc=null,Ms=null,Pn=0,Ss=null,Hr=null,ja=0,Jf=0,$f=null,n0=null,Zo=0,td=null;function Pi(){return(Je&2)!==0&&Ge!==0?Ge&-Ge:P.T!==null?rd():Xn()}function i0(){if(Oi===0)if((Ge&536870912)===0||ke){var e=Vt;Vt<<=1,(Vt&3932160)===0&&(Vt=262144),Oi=e}else Oi=536870912;return e=Ui.current,e!==null&&(e.flags|=32),Oi}function bi(e,n,a){(e===dn&&(en===2||en===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),ys(e,Ge,Oi,!1)),xn(e,a),((Je&2)===0||e!==dn)&&(e===dn&&((Je&2)===0&&(ar|=a),Sn===4&&ys(e,Ge,Oi,!1)),xa(e))}function a0(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?GM(e,n):nd(e,n,!0),f=o;do{if(u===0){Br&&!o&&ys(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!zM(a)){u=nd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=jo;var X=R.current.memoizedState.isDehydrated;if(X&&(Gr(R,v).flags|=256),v=nd(R,v,!1),v!==2){if(Zf&&!X){R.errorRecoveryDisabledLanes|=f,ar|=f,u=4;break t}f=Ei,Ei=u,f!==null&&(Ei===null?Ei=f:Ei.push.apply(Ei,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Gr(e,0),ys(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ys(o,n,Oi,!vs);break t;case 2:Ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-E(),10<u)){if(ys(o,n,Oi,!vs),vt(o,0,!0)!==0)break t;ja=n,o.timeoutHandle=P0(s0.bind(null,o,a,Ei,lc,Qf,n,Oi,ar,zr,vs,f,"Throttled",-0,0),u);break t}s0(o,a,Ei,lc,Qf,n,Oi,ar,zr,vs,f,null,-0,0)}}break}while(!0);xa(e)}function s0(e,n,a,o,u,f,v,R,X,lt,Et,Dt,dt,_t){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,Dt&8192||(Dt&16785408)===16785408){Dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Me},Qg(n,f,Dt);var oe=(f&62914560)===f?rc-E():(f&4194048)===f?e0-E():0;if(oe=ES(Dt,oe),oe!==null){ja=f,e.cancelPendingCommit=oe(h0.bind(null,e,n,f,a,o,u,v,R,X,Et,Dt,null,dt,_t)),ys(e,f,v,!lt);return}}h0(e,n,f,a,o,u,v,R,X)}function zM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!wi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(e,n,a,o){n&=~Kf,n&=~ar,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Wt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&da(e,a,n)}function cc(){return(Je&6)===0?(Ko(0),!1):!0}function ed(){if(ze!==null){if(en===0)var e=ze.return;else e=ze,Fa=Zs=null,_f(e),Ur=null,No=0,e=ze;for(;e!==null;)Ig(e.alternate,e),e=e.return;ze=null}}function Gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,ed(),dn=e,ze=a=Pa(e.current,null),Ge=n,en=0,Li=null,vs=!1,Br=Ht(e,n),Zf=!1,zr=Oi=Kf=ar=xs=Sn=0,Ei=jo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),f=1<<u;n|=e[u],o&=~f}return Ya=n,Dl(),a}function r0(e,n){Ae=null,P.H=Ho,n===Dr||n===Bl?(n=ym(),en=3):n===sf?(n=ym(),en=4):en=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Li=n,ze===null&&(Sn=1,Jl(e,Xi(n,e.current)))}function o0(){var e=Ui.current;return e===null?!0:(Ge&4194048)===Ge?ji===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===ji:!1}function l0(){var e=P.H;return P.H=Ho,e===null?Ho:e}function c0(){var e=P.A;return P.A=FM,e}function uc(){Sn=4,vs||(Ge&4194048)!==Ge&&Ui.current!==null||(Br=!0),(xs&134217727)===0&&(ar&134217727)===0||dn===null||ys(dn,Ge,Oi,!1)}function nd(e,n,a){var o=Je;Je|=2;var u=l0(),f=c0();(dn!==e||Ge!==n)&&(lc=null,Gr(e,n)),n=!1;var v=Sn;t:do try{if(en!==0&&ze!==null){var R=ze,X=Li;switch(en){case 8:ed(),v=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(n=!0);var lt=en;if(en=0,Li=null,Vr(e,R,X,lt),a&&Br){v=0;break t}break;default:lt=en,en=0,Li=null,Vr(e,R,X,lt)}}HM(),v=Sn;break}catch(Et){r0(e,Et)}while(!0);return n&&e.shellSuspendCounter++,Fa=Zs=null,Je=o,P.H=u,P.A=f,ze===null&&(dn=null,Ge=0,Dl()),v}function HM(){for(;ze!==null;)u0(ze)}function GM(e,n){var a=Je;Je|=2;var o=l0(),u=c0();dn!==e||Ge!==n?(lc=null,oc=E()+500,Gr(e,n)):Br=Ht(e,n);t:do try{if(en!==0&&ze!==null){n=ze;var f=Li;e:switch(en){case 1:en=0,Li=null,Vr(e,n,f,1);break;case 2:case 9:if(Mm(f)){en=0,Li=null,f0(n);break}n=function(){en!==2&&en!==9||dn!==e||(en=7),xa(e)},f.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:Mm(f)?(en=0,Li=null,f0(n)):(en=0,Li=null,Vr(e,n,f,7));break;case 5:var v=null;switch(ze.tag){case 26:v=ze.memoizedState;case 5:case 27:var R=ze;if(v?K0(v):R.stateNode.complete){en=0,Li=null;var X=R.sibling;if(X!==null)ze=X;else{var lt=R.return;lt!==null?(ze=lt,fc(lt)):ze=null}break e}}en=0,Li=null,Vr(e,n,f,5);break;case 6:en=0,Li=null,Vr(e,n,f,6);break;case 8:ed(),Sn=6;break t;default:throw Error(s(462))}}VM();break}catch(Et){r0(e,Et)}while(!0);return Fa=Zs=null,P.H=o,P.A=u,Je=a,ze!==null?0:(dn=null,Ge=0,Dl(),Sn)}function VM(){for(;ze!==null&&!se();)u0(ze)}function u0(e){var n=Og(e.alternate,e,Ya);e.memoizedProps=e.pendingProps,n===null?fc(e):ze=n}function f0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:_f(n);default:Ig(a,n),n=ze=cm(n,Ya),n=Og(a,n,Ya)}e.memoizedProps=e.pendingProps,n===null?fc(e):ze=n}function Vr(e,n,a,o){Fa=Zs=null,_f(n),Ur=null,No=0;var u=n.return;try{if(DM(e,u,n,a,Ge)){Sn=1,Jl(e,Xi(a,e.current)),ze=null;return}}catch(f){if(u!==null)throw ze=u,f;Sn=1,Jl(e,Xi(a,e.current)),ze=null;return}n.flags&32768?(ke||o===1?e=!0:Br||(Ge&536870912)!==0?e=!1:(vs=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),d0(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){d0(n,vs);return}e=n.return;var a=LM(n.alternate,n,Ya);if(a!==null){ze=a;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Sn===0&&(Sn=5)}function d0(e,n){do{var a=OM(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);Sn=6,ze=null}function h0(e,n,a,o,u,f,v,R,X){e.cancelPendingCommit=null;do dc();while(Pn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ku,ti(e,a,f,v,R,X),e===dn&&(ze=dn=null,Ge=0),Hr=n,Ss=e,ja=a,Jf=f,$f=u,n0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qM(xt,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=B.p,B.p=2,v=Je,Je|=4;try{PM(e,n,a)}finally{Je=v,B.p=u,P.T=o}}Pn=1,p0(),m0(),g0()}}function p0(){if(Pn===1){Pn=0;var e=Ss,n=Hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Je;Je|=4;try{jg(n,e);var f=pd,v=tm(e.containerInfo),R=f.focusedElem,X=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&$p(R.ownerDocument.documentElement,R)){if(X!==null&&Bu(R)){var lt=X.start,Et=X.end;if(Et===void 0&&(Et=lt),"selectionStart"in R)R.selectionStart=lt,R.selectionEnd=Math.min(Et,R.value.length);else{var Dt=R.ownerDocument||document,dt=Dt&&Dt.defaultView||window;if(dt.getSelection){var _t=dt.getSelection(),oe=R.textContent.length,ve=Math.min(X.start,oe),ln=X.end===void 0?ve:Math.min(X.end,oe);!_t.extend&&ve>ln&&(v=ln,ln=ve,ve=v);var tt=Jp(R,ve),q=Jp(R,ln);if(tt&&q&&(_t.rangeCount!==1||_t.anchorNode!==tt.node||_t.anchorOffset!==tt.offset||_t.focusNode!==q.node||_t.focusOffset!==q.offset)){var ot=Dt.createRange();ot.setStart(tt.node,tt.offset),_t.removeAllRanges(),ve>ln?(_t.addRange(ot),_t.extend(q.node,q.offset)):(ot.setEnd(q.node,q.offset),_t.addRange(ot))}}}}for(Dt=[],_t=R;_t=_t.parentNode;)_t.nodeType===1&&Dt.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Dt.length;R++){var Tt=Dt[R];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}bc=!!hd,pd=hd=null}finally{Je=u,B.p=o,P.T=a}}e.current=n,Pn=2}}function m0(){if(Pn===2){Pn=0;var e=Ss,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Je;Je|=4;try{kg(e,n.alternate,n)}finally{Je=u,B.p=o,P.T=a}}Pn=3}}function g0(){if(Pn===4||Pn===3){Pn=0,L();var e=Ss,n=Hr,a=ja,o=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pn=5:(Pn=0,Hr=Ss=null,_0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ms=null),li(a),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{P.T=n,B.p=u}}(ja&3)!==0&&dc(),xa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===td?Zo++:(Zo=0,td=e):Zo=0,Ko(0)}}function _0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Do(n)))}function dc(){return p0(),m0(),g0(),v0()}function v0(){if(Pn!==5)return!1;var e=Ss,n=Jf;Jf=0;var a=li(ja),o=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=$f,$f=null;var f=Ss,v=ja;if(Pn=0,Hr=Ss=null,ja=0,(Je&6)!==0)throw Error(s(331));var R=Je;if(Je|=4,$g(f.current),Kg(f,f.current,v,a),Je=R,Ko(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{B.p=u,P.T=o,_0(e,n)}}function x0(e,n,a){n=Xi(a,n),n=Nf(e.stateNode,n,2),e=ps(e,n,2),e!==null&&(xn(e,2),xa(e))}function nn(e,n,a){if(e.tag===3)x0(e,e,a);else for(;n!==null;){if(n.tag===3){x0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ms===null||!Ms.has(o))){e=Xi(a,e),a=Mg(2),o=ps(n,a,2),o!==null&&(Sg(a,o,n,e),xn(o,2),xa(o));break}}n=n.return}}function id(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zf=!0,u.add(a),e=kM.bind(null,e,n,a),n.then(e,e))}function kM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(Ge&a)===a&&(Sn===4||Sn===3&&(Ge&62914560)===Ge&&300>E()-rc?(Je&2)===0&&Gr(e,0):Kf|=a,zr===Ge&&(zr=0)),xa(e)}function M0(e,n){n===0&&(n=Le()),e=qs(e,n),e!==null&&(xn(e,n),xa(e))}function XM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),M0(e,a)}function WM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),M0(e,a)}function qM(e,n){return we(e,n)}var hc=null,kr=null,ad=!1,pc=!1,sd=!1,Es=0;function xa(e){e!==kr&&e.next===null&&(kr===null?hc=kr=e:kr=kr.next=e),pc=!0,ad||(ad=!0,jM())}function Ko(e,n){if(!sd&&pc){sd=!0;do for(var a=!1,o=hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Wt(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,b0(o,f))}else f=Ge,f=vt(o,o===dn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ht(o,f)||(a=!0,b0(o,f));o=o.next}while(a);sd=!1}}function YM(){S0()}function S0(){pc=ad=!1;var e=0;Es!==0&&aS()&&(e=Es);for(var n=E(),a=null,o=hc;o!==null;){var u=o.next,f=y0(o,n);f===0?(o.next=null,a===null?hc=u:a.next=u,u===null&&(kr=a)):(a=o,(e!==0||(f&3)!==0)&&(pc=!0)),o=u}Pn!==0&&Pn!==5||Ko(e),Es!==0&&(Es=0)}function y0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Wt(f),R=1<<v,X=u[v];X===-1?((R&a)===0||(R&o)!==0)&&(u[v]=me(R,n)):X<=n&&(e.expiredLanes|=R),f&=~R}if(n=dn,a=Ge,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(en===2||en===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Be(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Be(o),li(a)){case 2:case 8:a=Ct;break;case 32:a=xt;break;case 268435456:a=Gt;break;default:a=xt}return o=E0.bind(null,e),a=we(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Be(o),e.callbackPriority=2,e.callbackNode=null,2}function E0(e,n){if(Pn!==0&&Pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Ge;return o=vt(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a0(e,o,n),y0(e,E()),e.callbackNode!=null&&e.callbackNode===a?E0.bind(null,e):null)}function b0(e,n){if(dc())return null;a0(e,n,!0)}function jM(){rS(function(){(Je&6)!==0?we(Mt,YM):S0()})}function rd(){if(Es===0){var e=Cr;e===0&&(e=kt,kt<<=1,(kt&261888)===0&&(kt=256)),Es=e}return Es}function T0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ue(""+e)}function A0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ZM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=T0((u[fn]||null).action),v=o.submitter;v&&(n=(n=v[fn]||null)?T0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new Al("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Es!==0){var X=v?A0(u,v):new FormData(u);Af(a,{pending:!0,data:X,method:u.method,action:f},null,X)}}else typeof f=="function"&&(R.preventDefault(),X=v?A0(u,v):new FormData(u),Af(a,{pending:!0,data:X,method:u.method,action:f},f,X))},currentTarget:u}]})}}for(var od=0;od<Vu.length;od++){var ld=Vu[od],KM=ld.toLowerCase(),QM=ld[0].toUpperCase()+ld.slice(1);aa(KM,"on"+QM)}aa(im,"onAnimationEnd"),aa(am,"onAnimationIteration"),aa(sm,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(hM,"onTransitionRun"),aa(pM,"onTransitionStart"),aa(mM,"onTransitionCancel"),aa(rm,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),O("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),O("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),O("onBeforeInput",["compositionend","keypress","textInput","paste"]),O("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function R0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],X=R.instance,lt=R.currentTarget;if(R=R.listener,X!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(Et){wl(Et)}u.currentTarget=null,f=X}else for(v=0;v<o.length;v++){if(R=o[v],X=R.instance,lt=R.currentTarget,R=R.listener,X!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(Et){wl(Et)}u.currentTarget=null,f=X}}}}function He(e,n){var a=n[bn];a===void 0&&(a=n[bn]=new Set);var o=e+"__bubble";a.has(o)||(C0(n,e,2,!1),a.add(o))}function cd(e,n,a){var o=0;n&&(o|=4),C0(a,e,o,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[mc]){e[mc]=!0,ut.forEach(function(a){a!=="selectionchange"&&(JM.has(a)||cd(a,!1,e),cd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mc]||(n[mc]=!0,cd("selectionchange",!1,n))}}function C0(e,n,a,o){switch(i_(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=Td}a=u.bind(null,n,a,e),u=void 0,!Mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function fd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var X=v.tag;if((X===3||X===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=fi(R),v===null)return;if(X=v.tag,X===5||X===6||X===26||X===27){o=f=v;continue t}R=R.parentNode}}o=o.return}Oa(function(){var lt=f,Et=On(a),Dt=[];t:{var dt=om.get(e);if(dt!==void 0){var _t=Al,oe=e;switch(e){case"keypress":if(os(a)===0)break t;case"keydown":case"keyup":_t=Wx;break;case"focusin":oe="focus",_t=Lu;break;case"focusout":oe="blur",_t=Lu;break;case"beforeblur":case"afterblur":_t=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=jx;break;case im:case am:case sm:_t=Ix;break;case rm:_t=Kx;break;case"scroll":case"scrollend":_t=Ux;break;case"wheel":_t=Jx;break;case"copy":case"cut":case"paste":_t=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=Bp;break;case"toggle":case"beforetoggle":_t=tM}var ve=(n&4)!==0,ln=!ve&&(e==="scroll"||e==="scrollend"),tt=ve?dt!==null?dt+"Capture":null:dt;ve=[];for(var q=lt,ot;q!==null;){var Tt=q;if(ot=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||ot===null||tt===null||(Tt=ha(q,tt),Tt!=null&&ve.push(Jo(q,Tt,ot))),ln)break;q=q.return}0<ve.length&&(dt=new _t(dt,oe,null,a,Et),Dt.push({event:dt,listeners:ve}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",dt&&a!==mn&&(oe=a.relatedTarget||a.fromElement)&&(fi(oe)||oe[zn]))break t;if((_t||dt)&&(dt=Et.window===Et?Et:(dt=Et.ownerDocument)?dt.defaultView||dt.parentWindow:window,_t?(oe=a.relatedTarget||a.toElement,_t=lt,oe=oe?fi(oe):null,oe!==null&&(ln=c(oe),ve=oe.tag,oe!==ln||ve!==5&&ve!==27&&ve!==6)&&(oe=null)):(_t=null,oe=lt),_t!==oe)){if(ve=Ip,Tt="onMouseLeave",tt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Bp,Tt="onPointerLeave",tt="onPointerEnter",q="pointer"),ln=_t==null?dt:Wn(_t),ot=oe==null?dt:Wn(oe),dt=new ve(Tt,q+"leave",_t,a,Et),dt.target=ln,dt.relatedTarget=ot,Tt=null,fi(Et)===lt&&(ve=new ve(tt,q+"enter",oe,a,Et),ve.target=ot,ve.relatedTarget=ln,Tt=ve),ln=Tt,_t&&oe)e:{for(ve=$M,tt=_t,q=oe,ot=0,Tt=tt;Tt;Tt=ve(Tt))ot++;Tt=0;for(var pe=q;pe;pe=ve(pe))Tt++;for(;0<ot-Tt;)tt=ve(tt),ot--;for(;0<Tt-ot;)q=ve(q),Tt--;for(;ot--;){if(tt===q||q!==null&&tt===q.alternate){ve=tt;break e}tt=ve(tt),q=ve(q)}ve=null}else ve=null;_t!==null&&w0(Dt,dt,_t,ve,!1),oe!==null&&ln!==null&&w0(Dt,ln,oe,ve,!0)}}t:{if(dt=lt?Wn(lt):window,_t=dt.nodeName&&dt.nodeName.toLowerCase(),_t==="select"||_t==="input"&&dt.type==="file")var Ye=qp;else if(Xp(dt))if(Yp)Ye=uM;else{Ye=lM;var fe=oM}else _t=dt.nodeName,!_t||_t.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?lt&&ie(lt.elementType)&&(Ye=qp):Ye=cM;if(Ye&&(Ye=Ye(e,lt))){Wp(Dt,Ye,a,Et);break t}fe&&fe(e,dt,lt),e==="focusout"&&lt&&dt.type==="number"&&lt.memoizedProps.value!=null&&hi(dt,"number",dt.value)}switch(fe=lt?Wn(lt):window,e){case"focusin":(Xp(fe)||fe.contentEditable==="true")&&(Mr=fe,zu=lt,Ro=null);break;case"focusout":Ro=zu=Mr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,em(Dt,a,Et);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":em(Dt,a,Et)}var De;if(Pu)t:{switch(e){case"compositionstart":var Ve="onCompositionStart";break t;case"compositionend":Ve="onCompositionEnd";break t;case"compositionupdate":Ve="onCompositionUpdate";break t}Ve=void 0}else xr?Vp(e,a)&&(Ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ve="onCompositionStart");Ve&&(zp&&a.locale!=="ko"&&(xr||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&xr&&(De=Vs()):(ma=Et,vr="value"in ma?ma.value:ma.textContent,xr=!0)),fe=gc(lt,Ve),0<fe.length&&(Ve=new Fp(Ve,e,null,a,Et),Dt.push({event:Ve,listeners:fe}),De?Ve.data=De:(De=kp(a),De!==null&&(Ve.data=De)))),(De=nM?iM(e,a):aM(e,a))&&(Ve=gc(lt,"onBeforeInput"),0<Ve.length&&(fe=new Fp("onBeforeInput","beforeinput",null,a,Et),Dt.push({event:fe,listeners:Ve}),fe.data=De)),ZM(Dt,e,lt,a,Et)}R0(Dt,n)})}function Jo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ha(e,a),u!=null&&o.unshift(Jo(e,u,f)),u=ha(e,n),u!=null&&o.push(Jo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function $M(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w0(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,X=R.alternate,lt=R.stateNode;if(R=R.tag,X!==null&&X===o)break;R!==5&&R!==26&&R!==27||lt===null||(X=lt,u?(lt=ha(a,f),lt!=null&&v.unshift(Jo(a,lt,X))):u||(lt=ha(a,f),lt!=null&&v.push(Jo(a,lt,X)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var tS=/\r\n?/g,eS=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(tS,`
`).replace(eS,"")}function U0(e,n){return n=D0(n),D0(e)===n}function on(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wt(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wt(e,""+o);break;case"className":Kt(e,"class",o);break;case"tabIndex":Kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,a,o);break;case"style":Jt(e,o,f);break;case"data":if(n!=="object"){Kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ue(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&on(e,n,"name",u.name,u,null),on(e,n,"formEncType",u.formEncType,u,null),on(e,n,"formMethod",u.formMethod,u,null),on(e,n,"formTarget",u.formTarget,u,null)):(on(e,n,"encType",u.encType,u,null),on(e,n,"method",u.method,u,null),on(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ue(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Me);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ue(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":He("beforetoggle",e),He("toggle",e),Yt(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=de.get(a)||a,Yt(e,a,o))}}function dd(e,n,a,o,u,f){switch(a){case"style":Jt(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wt(e,o):(typeof o=="number"||typeof o=="bigint")&&wt(e,""+o);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Me);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Yt(e,a,o)}}}function Qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:on(e,n,f,v,a,null)}}u&&on(e,n,"srcSet",a.srcSet,a,null),o&&on(e,n,"src",a.src,a,null);return;case"input":He("invalid",e);var R=f=v=u=null,X=null,lt=null;for(o in a)if(a.hasOwnProperty(o)){var Et=a[o];if(Et!=null)switch(o){case"name":u=Et;break;case"type":v=Et;break;case"checked":X=Et;break;case"defaultChecked":lt=Et;break;case"value":f=Et;break;case"defaultValue":R=Et;break;case"children":case"dangerouslySetInnerHTML":if(Et!=null)throw Error(s(137,n));break;default:on(e,n,o,Et,a,null)}}di(e,f,R,X,lt,v,u,!1);return;case"select":He("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:on(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?H(e,!!o,n,!1):a!=null&&H(e,!!o,a,!0);return;case"textarea":He("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:on(e,n,v,R,a,null)}mt(e,o,u,f);return;case"option":for(X in a)a.hasOwnProperty(X)&&(o=a[X],o!=null)&&(X==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":on(e,n,X,o,a,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(o=0;o<Qo.length;o++)He(Qo[o],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(o=a[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:on(e,n,lt,o,a,null)}return;default:if(ie(n)){for(Et in a)a.hasOwnProperty(Et)&&(o=a[Et],o!==void 0&&dd(e,n,Et,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&on(e,n,R,o,a,null))}function nS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,X=null,lt=null,Et=null;for(_t in a){var Dt=a[_t];if(a.hasOwnProperty(_t)&&Dt!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":X=Dt;default:o.hasOwnProperty(_t)||on(e,n,_t,null,o,Dt)}}for(var dt in o){var _t=o[dt];if(Dt=a[dt],o.hasOwnProperty(dt)&&(_t!=null||Dt!=null))switch(dt){case"type":f=_t;break;case"name":u=_t;break;case"checked":lt=_t;break;case"defaultChecked":Et=_t;break;case"value":v=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:_t!==Dt&&on(e,n,dt,_t,o,Dt)}}Ln(e,v,R,X,lt,Et,f,u);return;case"select":_t=v=R=dt=null;for(f in a)if(X=a[f],a.hasOwnProperty(f)&&X!=null)switch(f){case"value":break;case"multiple":_t=X;default:o.hasOwnProperty(f)||on(e,n,f,null,o,X)}for(u in o)if(f=o[u],X=a[u],o.hasOwnProperty(u)&&(f!=null||X!=null))switch(u){case"value":dt=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==X&&on(e,n,u,f,o,X)}n=R,a=v,o=_t,dt!=null?H(e,!!a,dt,!1):!!o!=!!a&&(n!=null?H(e,!!a,n,!0):H(e,!!a,a?[]:"",!1));return;case"textarea":_t=dt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:on(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":dt=u;break;case"defaultValue":_t=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&on(e,n,v,u,o,f)}Z(e,dt,_t);return;case"option":for(var oe in a)dt=a[oe],a.hasOwnProperty(oe)&&dt!=null&&!o.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:on(e,n,oe,null,o,dt));for(X in o)dt=o[X],_t=a[X],o.hasOwnProperty(X)&&dt!==_t&&(dt!=null||_t!=null)&&(X==="selected"?e.selected=dt&&typeof dt!="function"&&typeof dt!="symbol":on(e,n,X,dt,o,_t));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)dt=a[ve],a.hasOwnProperty(ve)&&dt!=null&&!o.hasOwnProperty(ve)&&on(e,n,ve,null,o,dt);for(lt in o)if(dt=o[lt],_t=a[lt],o.hasOwnProperty(lt)&&dt!==_t&&(dt!=null||_t!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:on(e,n,lt,dt,o,_t)}return;default:if(ie(n)){for(var ln in a)dt=a[ln],a.hasOwnProperty(ln)&&dt!==void 0&&!o.hasOwnProperty(ln)&&dd(e,n,ln,void 0,o,dt);for(Et in o)dt=o[Et],_t=a[Et],!o.hasOwnProperty(Et)||dt===_t||dt===void 0&&_t===void 0||dd(e,n,Et,dt,o,_t);return}}for(var tt in a)dt=a[tt],a.hasOwnProperty(tt)&&dt!=null&&!o.hasOwnProperty(tt)&&on(e,n,tt,null,o,dt);for(Dt in o)dt=o[Dt],_t=a[Dt],!o.hasOwnProperty(Dt)||dt===_t||dt==null&&_t==null||on(e,n,Dt,dt,o,_t)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&N0(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],lt=X.startTime;if(lt>R)break;var Et=X.transferSize,Dt=X.initiatorType;Et&&N0(Dt)&&(X=X.responseEnd,v+=Et*(X<R?1:(R-lt)/(X-lt)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hd=null,pd=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function md(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(oS)}:P0;function oS(e){setTimeout(function(){throw e})}function bs(e){return e==="head"}function F0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")$o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,$o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Hn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&$o(e.ownerDocument.body);a=u}while(a);Yr(n)}function B0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function _d(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),ei(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Hn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Zi(e.nextSibling),e===null)break}return null}function cS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zi(e.nextSibling),e===null))return null;return e}function z0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zi(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$?"||e.data==="$~"}function xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Zi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Md=null;function H0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Zi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function V0(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function $o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ei(e)}var Ki=new Map,k0=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Za=B.d;B.d={f:fS,r:dS,D:hS,C:pS,L:mS,m:gS,X:vS,S:_S,M:xS};function fS(){var e=Za.f(),n=cc();return e||n}function dS(e){var n=Ri(e);n!==null&&n.tag===5&&n.type==="form"?rg(n):Za.r(e)}var Xr=typeof document>"u"?null:document;function X0(e,n,a){var o=Xr;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),k0.has(u)||(k0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Qn(n,"link",e),W(n),o.head.appendChild(n)))}}function hS(e){Za.D(e),X0("dns-prefetch",e,null)}function pS(e,n){Za.C(e,n),X0("preconnect",e,n)}function mS(e,n,a){Za.L(e,n,a);var o=Xr;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var f=u;switch(n){case"style":f=Wr(e);break;case"script":f=qr(e)}Ki.has(f)||(e=M({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ki.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(tl(f))||n==="script"&&o.querySelector(el(f))||(n=o.createElement("link"),Qn(n,"link",e),W(n),o.head.appendChild(n)))}}function gS(e,n){Za.m(e,n);var a=Xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qr(e)}if(!Ki.has(f)&&(e=M({rel:"modulepreload",href:e},n),Ki.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(f)))return}o=a.createElement("link"),Qn(o,"link",e),W(o),a.head.appendChild(o)}}}function _S(e,n,a){Za.S(e,n,a);var o=Xr;if(o&&e){var u=A(o).hoistableStyles,f=Wr(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(tl(f)))R.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ki.get(f))&&Sd(e,a);var X=v=o.createElement("link");W(X),Qn(X,"link",e),X._p=new Promise(function(lt,Et){X.onload=lt,X.onerror=Et}),X.addEventListener("load",function(){R.loading|=1}),X.addEventListener("error",function(){R.loading|=2}),R.loading|=4,xc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function vS(e,n){Za.X(e,n);var a=Xr;if(a&&e){var o=A(a).hoistableScripts,u=qr(e),f=o.get(u);f||(f=a.querySelector(el(u)),f||(e=M({src:e,async:!0},n),(n=Ki.get(u))&&yd(e,n),f=a.createElement("script"),W(f),Qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xS(e,n){Za.M(e,n);var a=Xr;if(a&&e){var o=A(a).hoistableScripts,u=qr(e),f=o.get(u);f||(f=a.querySelector(el(u)),f||(e=M({src:e,async:!0,type:"module"},n),(n=Ki.get(u))&&yd(e,n),f=a.createElement("script"),W(f),Qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function W0(e,n,a,o){var u=(u=st.current)?vc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Wr(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Wr(a.href);var f=A(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(tl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ki.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ki.set(e,a),f||MS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qr(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Wr(e){return'href="'+xe(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Qn(n,"link",a),W(n),e.head.appendChild(n))}function qr(e){return'[src="'+xe(e)+'"]'}function el(e){return"script[async]"+e}function Y0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),Qn(o,"style",u),xc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Wr(a.href);var f=e.querySelector(tl(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=q0(a),(u=Ki.get(u))&&Sd(o,u),f=(e.ownerDocument||e).createElement("link"),W(f);var v=f;return v._p=new Promise(function(R,X){v.onload=R,v.onerror=X}),Qn(f,"link",o),n.state.loading|=4,xc(f,a.precedence,e),n.instance=f;case"script":return f=qr(a.src),(u=e.querySelector(el(f)))?(n.instance=u,W(u),u):(o=a,(u=Ki.get(f))&&(o=M({},a),yd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),Qn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,e));return n.instance}function xc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Sd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function j0(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Hn]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function SS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Wr(o.href),f=n.querySelector(tl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=q0(o),(u=Ki.get(u))&&Sd(o,u),f=f.createElement("link"),W(f);var v=f;v._p=new Promise(function(R,X){v.onload=R,v.onerror=X}),Qn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ed=0;function ES(e,n){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Ed===0&&(Ed=62500*iS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Ed?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,n.forEach(bS,e),yc=null,Sc.call(e))}function bS(e,n){if(!(n.state.loading&4)){var a=yc.get(e);if(a)var o=a.get(null);else{a=new Map,yc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var nl={$$typeof:N,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function TS(e,n,a,o,u,f,v,R,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function Q0(e,n,a,o,u,f,v,R,X,lt,Et,Dt){return e=new TS(e,n,a,v,X,lt,Et,Dt,R),n=1,f===!0&&(n|=24),f=Di(3,null,null,n),e.current=f,f.stateNode=e,n=ef(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},rf(f),e}function J0(e){return e?(e=Er,e):Er}function $0(e,n,a,o,u,f){u=J0(u),o.context===null?o.context=u:o.pendingContext=u,o=hs(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ps(e,o,n),a!==null&&(bi(a,e,n),Oo(a,e,n))}function t_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function bd(e,n){t_(e,n),(e=e.alternate)&&t_(e,n)}function e_(e){if(e.tag===13||e.tag===31){var n=qs(e,67108864);n!==null&&bi(n,e,67108864),bd(e,67108864)}}function n_(e){if(e.tag===13||e.tag===31){var n=Pi();n=vi(n);var a=qs(e,n);a!==null&&bi(a,e,n),bd(e,n)}}var bc=!0;function AS(e,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=2,Td(e,n,a,o)}finally{B.p=f,P.T=u}}function RS(e,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=8,Td(e,n,a,o)}finally{B.p=f,P.T=u}}function Td(e,n,a,o){if(bc){var u=Ad(o);if(u===null)fd(e,n,o,Tc,a),a_(e,o);else if(wS(u,e,n,a,o))o.stopPropagation();else if(a_(e,o),n&4&&-1<CS.indexOf(e)){for(;u!==null;){var f=Ri(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=It(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var X=1<<31-Wt(v);R.entanglements[1]|=X,v&=~X}xa(f),(Je&6)===0&&(oc=E()+500,Ko(0))}}break;case 31:case 13:R=qs(f,2),R!==null&&bi(R,f,2),cc(),bd(f,2)}if(f=Ad(o),f===null&&fd(e,n,o,Tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else fd(e,n,o,null,a)}}function Ad(e){return e=On(e),Rd(e)}var Tc=null;function Rd(e){if(Tc=null,e=fi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function i_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case Mt:return 2;case Ct:return 8;case xt:case ee:return 32;case Gt:return 268435456;default:return 32}default:return 32}}var Cd=!1,Ts=null,As=null,Rs=null,il=new Map,al=new Map,Cs=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,n){switch(e){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ri(n),n!==null&&e_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wS(e,n,a,o,u){switch(n){case"focusin":return Ts=sl(Ts,e,n,a,o,u),!0;case"dragenter":return As=sl(As,e,n,a,o,u),!0;case"mouseover":return Rs=sl(Rs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return il.set(f,sl(il.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,al.set(f,sl(al.get(f)||null,e,n,a,o,u)),!0}return!1}function s_(e){var n=fi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,xi(e.priority,function(){n_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,xi(e.priority,function(){n_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ad(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);mn=o,a.target.dispatchEvent(o),mn=null}else return n=Ri(a),n!==null&&e_(n),e.blockedOn=a,!1;n.shift()}return!0}function r_(e,n,a){Ac(e)&&a.delete(n)}function DS(){Cd=!1,Ts!==null&&Ac(Ts)&&(Ts=null),As!==null&&Ac(As)&&(As=null),Rs!==null&&Ac(Rs)&&(Rs=null),il.forEach(r_),al.forEach(r_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,DS)))}var Cc=null;function o_(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Rd(o||a)===null)continue;break}var f=Ri(a);f!==null&&(e.splice(n,3),n-=3,Af(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Yr(e){function n(X){return Rc(X,e)}Ts!==null&&Rc(Ts,e),As!==null&&Rc(As,e),Rs!==null&&Rc(Rs,e),il.forEach(n),al.forEach(n);for(var a=0;a<Cs.length;a++){var o=Cs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&Cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[fn]||null;if(typeof f=="function")v||o_(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[fn]||null)R=v.formAction;else if(Rd(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),o_(a)}}}function l_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function wd(e){this._internalRoot=e}wc.prototype.render=wd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Pi();$0(a,o,e,n,null,null)},wc.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$0(e.current,2,null,e,null,null),cc(),n[zn]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Cs.length&&n!==0&&n<Cs[a].priority;a++);Cs.splice(a,0,e),a===0&&s_(e)}};var c_=t.version;if(c_!=="19.2.4")throw Error(s(527,c_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var US={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{At=Dc.inject(US),Lt=Dc}catch{}}return ol.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=gg,f=_g,v=vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Q0(e,1,!1,null,null,a,o,null,u,f,v,l_),e[zn]=n.current,ud(e),new wd(n)},ol.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=gg,v=_g,R=vg,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=Q0(e,1,!0,n,a??null,o,u,X,f,v,R,l_),n.context=J0(null),a=n.current,o=Pi(),o=vi(o),u=hs(o),u.callback=null,ps(a,u,o),a=o,n.current.lanes=a,xn(n,a),xa(n),e[zn]=n.current,ud(e),new wc(n)},ol.version="19.2.4",ol}var x_;function GS(){if(x_)return Nd.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nd.exports=HS(),Nd.exports}var VS=GS();const M_="tsn_audio_music_enabled_v1",S_="tsn_audio_sfx_enabled_v1";function y_(r,t=!0){try{const i=localStorage.getItem(r);return i===null?t:i==="true"}catch{return t}}function E_(r,t){try{localStorage.setItem(r,t?"true":"false")}catch{}}const Yv=gt.createContext(null);function kS({children:r}){const[t,i]=gt.useState(()=>y_(M_,!0)),[s,l]=gt.useState(()=>y_(S_,!0)),[c,d]=gt.useState(!1),[p,m]=gt.useState(!1),h=gt.useRef(null),_=gt.useRef(null),M=gt.useRef(null),g=gt.useRef(null),y=gt.useRef(!1),b=gt.useRef(!1),w=gt.useRef(t);w.current=t;const S=.04,x=gt.useCallback(()=>{i(F=>{const Y=!F;E_(M_,Y);const $=h.current;return $&&(Y?($.volume=S,$.play().catch(()=>{})):($.pause(),$.currentTime=0)),Y})},[]),D=gt.useCallback(()=>{l(F=>{const Y=!F;return E_(S_,Y),Y})},[]),N=gt.useCallback(()=>m(!0),[]),U=gt.useCallback(()=>m(!1),[]),k=gt.useCallback(F=>{_.current=F},[]),z=gt.useCallback(F=>{M.current=F},[]),G=gt.useCallback(F=>{g.current=F},[]),T=gt.useCallback(()=>{g.current?.(),U(),M.current?.()},[U]),C=gt.useCallback(()=>{g.current?.(),U()},[U]);gt.useEffect(()=>{const F=()=>{if(y.current)return;y.current=!0,b.current=!0,d(!0);const Y=h.current;Y&&w.current&&(Y.volume=S,Y.play().catch(()=>{})),setTimeout(()=>{b.current=!1,_.current?.()},300),window.removeEventListener("pointerdown",F),window.removeEventListener("touchstart",F)};return window.addEventListener("pointerdown",F,{passive:!0}),window.addEventListener("touchstart",F,{passive:!0}),()=>{window.removeEventListener("pointerdown",F),window.removeEventListener("touchstart",F)}},[]),gt.useEffect(()=>{if(!c||!t)return;const F=h.current;F&&(F.volume=S,F.play().catch(()=>{}))},[c,t]);const rt={musicEnabled:t,sfxEnabled:s,isAudioUnlocked:c,isUnlockingRef:b,toggleMusic:x,toggleSfx:D,openAudioModal:N,closeAudioModal:U,audioModalOpen:p,registerUnlockSfxCallback:k,registerOpenCreditsCallback:z,registerPlayShootingSoundCallback:G,onSeeCredits:T,onCloseAudioModal:C};return at.jsxs(Yv.Provider,{value:rt,children:[at.jsx("audio",{ref:h,src:"./audio/thrift-shop-8bit-cover-oscar.mp3",preload:"auto",loop:!0,playsInline:!0}),r,p&&at.jsxs(at.Fragment,{children:[at.jsx("div",{className:"exhibit-audio-backdrop","aria-hidden":!0,onClick:C}),at.jsx("div",{className:"exhibit-audio-modal",role:"dialog","aria-labelledby":"audio-modal-title","aria-modal":"true",children:at.jsxs("div",{className:"exhibit-audio-modal-inner",children:[at.jsxs("div",{className:"exhibit-audio-modal-header",children:[at.jsx("h2",{id:"audio-modal-title",className:"exhibit-audio-modal-title",children:"Audio"}),at.jsx("button",{type:"button",className:"exhibit-audio-modal-close",onClick:C,"aria-label":"Close audio settings",children:"×"})]}),at.jsxs("div",{className:"exhibit-audio-modal-body",children:[at.jsxs("div",{className:"exhibit-audio-row",children:[at.jsx("span",{className:"exhibit-audio-label",children:"Music"}),at.jsx("button",{type:"button",className:`exhibit-audio-toggle ${t?"is-on":""}`,onClick:x,"aria-pressed":t,children:t?"On":"Off"})]}),at.jsxs("div",{className:"exhibit-audio-row",children:[at.jsx("span",{className:"exhibit-audio-label",children:"Effects"}),at.jsx("button",{type:"button",className:`exhibit-audio-toggle ${s?"is-on":""}`,onClick:D,"aria-pressed":s,children:s?"On":"Off"})]})]})]})})]})]})}const XS={musicEnabled:!0,sfxEnabled:!0,isAudioUnlocked:!1,isUnlockingRef:{current:!1},toggleMusic:()=>{},toggleSfx:()=>{},openAudioModal:()=>{},closeAudioModal:()=>{},audioModalOpen:!1,registerUnlockSfxCallback:()=>{},registerOpenCreditsCallback:()=>{},registerPlayShootingSoundCallback:()=>{},onSeeCredits:()=>{},onCloseAudioModal:()=>{}};function WS(){return gt.useContext(Yv)??XS}function qS(r,t){r.src=t}const YS=r=>{var t,i,s,l="The Google Maps JavaScript API",c="google",d="importLibrary",p="__ib__",m=document,h=window,_=h[c]||(h[c]={}),M=_.maps||(_.maps={}),g=new Set,y=new URLSearchParams,b=()=>t||(t=new Promise(async(w,S)=>{await(i=m.createElement("script")),y.set("libraries",[...g]+"");for(s in r)y.set(s.replace(/[A-Z]/g,x=>"_"+x[0].toLowerCase()),r[s]);y.set("callback",c+".maps."+p),qS(i,"https://maps.googleapis.com/maps/api/js?"+y),M[p]=w,i.onerror=()=>t=S(Error(l+" could not load.")),i.nonce=m.querySelector("script[nonce]")?.nonce||"",m.head.append(i)}));M[d]?console.warn(l+" only loads once. Ignoring:",r):M[d]=(w,...S)=>g.add(w)&&b().then(()=>M[d](w,...S))},jS=r=>`The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(r)}) will be ignored.`,ZS=r=>`The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(r)}) will be ignored.`,KS=()=>{},QS=()=>{};let b_=!1;function JS(r){if(b_){KS(jS(r));return}$S(r),b_=!0}async function Su(r){if(!window?.google?.maps?.importLibrary)throw new Error("google.maps.importLibrary is not installed.");return await google.maps.importLibrary(r)}function $S(r){const t=!!window.google?.maps?.importLibrary;t&&QS(ZS(r)),t||YS(r)}const Sp="183",ty=0,T_=1,ey=2,du=1,ny=2,gl=3,Gs=0,Ai=1,es=2,is=0,co=1,A_=2,R_=3,C_=4,iy=5,dr=100,ay=101,sy=102,ry=103,oy=104,ly=200,cy=201,uy=202,fy=203,Th=204,Ah=205,dy=206,hy=207,py=208,my=209,gy=210,_y=211,vy=212,xy=213,My=214,Rh=0,Ch=1,wh=2,fo=3,Dh=4,Uh=5,Nh=6,Lh=7,yp=0,Sy=1,yy=2,Ra=0,jv=1,Zv=2,Kv=3,Qv=4,Jv=5,$v=6,tx=7,ex=300,_r=301,ho=302,Id=303,Fd=304,Cu=306,Oh=1e3,ns=1001,Ph=1002,$n=1003,Ey=1004,Uc=1005,ri=1006,Bd=1007,pr=1008,zi=1009,nx=1010,ix=1011,xl=1012,Ep=1013,Da=1014,Ta=1015,ss=1016,bp=1017,Tp=1018,Ml=1020,ax=35902,sx=35899,rx=1021,ox=1022,fa=1023,rs=1026,mr=1027,lx=1028,Ap=1029,po=1030,Rp=1031,Cp=1033,hu=33776,pu=33777,mu=33778,gu=33779,Ih=35840,Fh=35841,Bh=35842,zh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37488,Xh=37489,Wh=37490,qh=37491,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,tp=37815,ep=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,dp=36285,hp=36286,by=3200,cx=0,Ty=1,zs="",Ji="srgb",mo="srgb-linear",yu="linear",an="srgb",jr=7680,w_=519,Ay=512,Ry=513,Cy=514,wp=515,wy=516,Dy=517,Dp=518,Uy=519,D_=35044,U_="300 es",Aa=2e3,Sl=2001;function Ny(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ly(){const r=Eu("canvas");return r.style.display="block",r}const N_={};function L_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ux(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Te(...r){r=ux(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ke(...r){r=ux(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function bu(...r){const t=r.join(" ");t in N_||(N_[t]=!0,Te(...r))}function Oy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Py={[Rh]:Ch,[wh]:Nh,[Dh]:Lh,[fo]:Uh,[Ch]:Rh,[Nh]:wh,[Lh]:Dh,[Uh]:fo};class _o{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,pp=180/Math.PI;function El(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[i&63|128]+ii[i>>8&255]+"-"+ii[i>>16&255]+ii[i>>24&255]+ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]).toLowerCase()}function Xe(r,t,i){return Math.max(t,Math.min(i,r))}function Iy(r,t){return(r%t+t)%t}function Hd(r,t,i){return(1-i)*r+i*t}function ll(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(t=0,i=0){Qe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],_=s[l+2],M=s[l+3],g=c[d+0],y=c[d+1],b=c[d+2],w=c[d+3];if(M!==w||m!==g||h!==y||_!==b){let S=m*g+h*y+_*b+M*w;S<0&&(g=-g,y=-y,b=-b,w=-w,S=-S);let x=1-p;if(S<.9995){const D=Math.acos(S),N=Math.sin(D);x=Math.sin(x*D)/N,p=Math.sin(p*D)/N,m=m*x+g*p,h=h*x+y*p,_=_*x+b*p,M=M*x+w*p}else{m=m*x+g*p,h=h*x+y*p,_=_*x+b*p,M=M*x+w*p;const D=1/Math.sqrt(m*m+h*h+_*_+M*M);m*=D,h*=D,_*=D,M*=D}}t[i]=m,t[i+1]=h,t[i+2]=_,t[i+3]=M}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],M=c[d],g=c[d+1],y=c[d+2],b=c[d+3];return t[i]=p*b+_*M+m*y-h*g,t[i+1]=m*b+_*g+h*M-p*y,t[i+2]=h*b+_*y+p*g-m*M,t[i+3]=_*b-p*M-m*g-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),M=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*_*M+h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M-g*y*b;break;case"YXZ":this._x=g*_*M+h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M+g*y*b;break;case"ZXY":this._x=g*_*M-h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M-g*y*b;break;case"ZYX":this._x=g*_*M-h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M+g*y*b;break;case"YZX":this._x=g*_*M+h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M-g*y*b;break;case"XZY":this._x=g*_*M-h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M+g*y*b;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],M=i[10],g=s+p+M;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-h)*y,this._z=(d-l)*y}else if(s>p&&s>M){const y=2*Math.sqrt(1+s-p-M);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+h)/y}else if(p>M){const y=2*Math.sqrt(1+p-s-M);this._w=(c-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+M-s-p);this._w=(d-l)/y,this._x=(c+h)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-s*h,this._z=c*_+d*h+s*m-l*p,this._w=d*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,i=0,s=0){ct.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(O_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(O_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),_=2*(p*i-c*l),M=2*(c*s-d*i);return this.x=i+m*h+d*M-p*_,this.y=s+m*_+p*h-c*M,this.z=l+m*M+c*_-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this.z=Xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this.z=Xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new ct,O_=new vo;class Ue{constructor(t,i,s,l,c,d,p,m,h){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],_=s[4],M=s[7],g=s[2],y=s[5],b=s[8],w=l[0],S=l[3],x=l[6],D=l[1],N=l[4],U=l[7],k=l[2],z=l[5],G=l[8];return c[0]=d*w+p*D+m*k,c[3]=d*S+p*N+m*z,c[6]=d*x+p*U+m*G,c[1]=h*w+_*D+M*k,c[4]=h*S+_*N+M*z,c[7]=h*x+_*U+M*G,c[2]=g*w+y*D+b*k,c[5]=g*S+y*N+b*z,c[8]=g*x+y*U+b*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8];return i*d*_-i*p*h-s*c*_+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],M=_*d-p*h,g=p*m-_*c,y=h*c-d*m,b=i*M+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=M*w,t[1]=(l*h-_*s)*w,t[2]=(p*s-l*d)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(s*m-h*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Vd.makeScale(t,i)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new Ue,P_=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){const r={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===an&&(l.r=as(l.r),l.g=as(l.g),l.b=as(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===an&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zs?yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[mo]:{primaries:t,whitePoint:s,transfer:yu,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ji},outputColorSpaceConfig:{drawingBufferColorSpace:Ji}},[Ji]:{primaries:t,whitePoint:s,transfer:an,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ji}}}),r}const We=Fy();function as(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zr;class By{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Zr===void 0&&(Zr=Eu("canvas")),Zr.width=t.width,Zr.height=t.height;const l=Zr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Zr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=as(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(as(i[s]/255)*255):i[s]=as(i[s]);return{data:i,width:t.width,height:t.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zy=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=El(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(kd(l[d].image)):c.push(kd(l[d]))}else c=kd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function kd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?By.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let Hy=0;const Xd=new ct;class _i extends _o{constructor(t=_i.DEFAULT_IMAGE,i=_i.DEFAULT_MAPPING,s=ns,l=ns,c=ri,d=pr,p=fa,m=zi,h=_i.DEFAULT_ANISOTROPY,_=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=El(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ex)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oh:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oh:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=ex;_i.DEFAULT_ANISOTROPY=1;class yn{constructor(t=0,i=0,s=0,l=1){yn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],_=m[4],M=m[8],g=m[1],y=m[5],b=m[9],w=m[2],S=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(M-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(M+w)<.1&&Math.abs(b+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,U=(y+1)/2,k=(x+1)/2,z=(_+g)/4,G=(M+w)/4,T=(b+S)/4;return N>U&&N>k?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=G/s):U>k?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=T/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=G/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-b)*(S-b)+(M-w)*(M-w)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(M-w)/D,this.z=(g-_)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this.z=Xe(this.z,t.z,i.z),this.w=Xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this.z=Xe(this.z,t,i),this.w=Xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gy extends _o{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new yn(0,0,t,i),this.scissorTest=!1,this.viewport=new yn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new _i(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends Gy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class fx extends _i{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends _i{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t,i,s,l,c,d,p,m,h,_,M,g,y,b,w,S){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,_,M,g,y,b,w,S)}set(t,i,s,l,c,d,p,m,h,_,M,g,y,b,w,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=_,x[10]=M,x[14]=g,x[3]=y,x[7]=b,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Kr.setFromMatrixColumn(t,0).length(),c=1/Kr.setFromMatrixColumn(t,1).length(),d=1/Kr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),M=Math.sin(c);if(t.order==="XYZ"){const g=d*_,y=d*M,b=p*_,w=p*M;i[0]=m*_,i[4]=-m*M,i[8]=h,i[1]=y+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+y*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*_,y=m*M,b=h*_,w=h*M;i[0]=g+w*p,i[4]=b*p-y,i[8]=d*h,i[1]=d*M,i[5]=d*_,i[9]=-p,i[2]=y*p-b,i[6]=w+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*_,y=m*M,b=h*_,w=h*M;i[0]=g-w*p,i[4]=-d*M,i[8]=b+y*p,i[1]=y+b*p,i[5]=d*_,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*_,y=d*M,b=p*_,w=p*M;i[0]=m*_,i[4]=b*h-y,i[8]=g*h+w,i[1]=m*M,i[5]=w*h+g,i[9]=y*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,y=d*h,b=p*m,w=p*h;i[0]=m*_,i[4]=w-g*M,i[8]=b*M+y,i[1]=M,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=y*M+b,i[10]=g-w*M}else if(t.order==="XZY"){const g=d*m,y=d*h,b=p*m,w=p*h;i[0]=m*_,i[4]=-M,i[8]=h*_,i[1]=g*M+w,i[5]=d*_,i[9]=y*M-b,i[2]=b*M-y,i[6]=p*_,i[10]=w*M+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ky,t,Xy)}lookAt(t,i,s){const l=this.elements;return Ii.subVectors(t,i),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Ds.crossVectors(s,Ii),Ds.lengthSq()===0&&(Math.abs(s.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Ds.crossVectors(s,Ii)),Ds.normalize(),Nc.crossVectors(Ii,Ds),l[0]=Ds.x,l[4]=Nc.x,l[8]=Ii.x,l[1]=Ds.y,l[5]=Nc.y,l[9]=Ii.y,l[2]=Ds.z,l[6]=Nc.z,l[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],_=s[1],M=s[5],g=s[9],y=s[13],b=s[2],w=s[6],S=s[10],x=s[14],D=s[3],N=s[7],U=s[11],k=s[15],z=l[0],G=l[4],T=l[8],C=l[12],rt=l[1],F=l[5],Y=l[9],$=l[13],ft=l[2],K=l[6],P=l[10],B=l[14],ht=l[3],St=l[7],Ot=l[11],I=l[15];return c[0]=d*z+p*rt+m*ft+h*ht,c[4]=d*G+p*F+m*K+h*St,c[8]=d*T+p*Y+m*P+h*Ot,c[12]=d*C+p*$+m*B+h*I,c[1]=_*z+M*rt+g*ft+y*ht,c[5]=_*G+M*F+g*K+y*St,c[9]=_*T+M*Y+g*P+y*Ot,c[13]=_*C+M*$+g*B+y*I,c[2]=b*z+w*rt+S*ft+x*ht,c[6]=b*G+w*F+S*K+x*St,c[10]=b*T+w*Y+S*P+x*Ot,c[14]=b*C+w*$+S*B+x*I,c[3]=D*z+N*rt+U*ft+k*ht,c[7]=D*G+N*F+U*K+k*St,c[11]=D*T+N*Y+U*P+k*Ot,c[15]=D*C+N*$+U*B+k*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],_=t[2],M=t[6],g=t[10],y=t[14],b=t[3],w=t[7],S=t[11],x=t[15],D=m*y-h*g,N=p*y-h*M,U=p*g-m*M,k=d*y-h*_,z=d*g-m*_,G=d*M-p*_;return i*(w*D-S*N+x*U)-s*(b*D-S*k+x*z)+l*(b*N-w*k+x*G)-c*(b*U-w*z+S*G)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],M=t[9],g=t[10],y=t[11],b=t[12],w=t[13],S=t[14],x=t[15],D=i*p-s*d,N=i*m-l*d,U=i*h-c*d,k=s*m-l*p,z=s*h-c*p,G=l*h-c*m,T=_*w-M*b,C=_*S-g*b,rt=_*x-y*b,F=M*S-g*w,Y=M*x-y*w,$=g*x-y*S,ft=D*$-N*Y+U*F+k*rt-z*C+G*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ft;return t[0]=(p*$-m*Y+h*F)*K,t[1]=(l*Y-s*$-c*F)*K,t[2]=(w*G-S*z+x*k)*K,t[3]=(g*z-M*G-y*k)*K,t[4]=(m*rt-d*$-h*C)*K,t[5]=(i*$-l*rt+c*C)*K,t[6]=(S*U-b*G-x*N)*K,t[7]=(_*G-g*U+y*N)*K,t[8]=(d*Y-p*rt+h*T)*K,t[9]=(s*rt-i*Y-c*T)*K,t[10]=(b*z-w*U+x*D)*K,t[11]=(M*U-_*z-y*D)*K,t[12]=(p*C-d*F-m*T)*K,t[13]=(i*F-s*C+l*T)*K,t[14]=(w*N-b*k-S*D)*K,t[15]=(_*k-M*N+g*D)*K,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,M=p+p,g=c*h,y=c*_,b=c*M,w=d*_,S=d*M,x=p*M,D=m*h,N=m*_,U=m*M,k=s.x,z=s.y,G=s.z;return l[0]=(1-(w+x))*k,l[1]=(y+U)*k,l[2]=(b-N)*k,l[3]=0,l[4]=(y-U)*z,l[5]=(1-(g+x))*z,l[6]=(S+D)*z,l[7]=0,l[8]=(b+N)*G,l[9]=(S-D)*G,l[10]=(1-(g+w))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Kr.set(l[0],l[1],l[2]).length();const p=Kr.set(l[4],l[5],l[6]).length(),m=Kr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),oa.copy(this);const h=1/d,_=1/p,M=1/m;return oa.elements[0]*=h,oa.elements[1]*=h,oa.elements[2]*=h,oa.elements[4]*=_,oa.elements[5]*=_,oa.elements[6]*=_,oa.elements[8]*=M,oa.elements[9]*=M,oa.elements[10]*=M,i.setFromRotationMatrix(oa),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=Aa,m=!1){const h=this.elements,_=2*c/(i-t),M=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===Aa)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===Sl)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=M,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=Aa,m=!1){const h=this.elements,_=2/(i-t),M=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===Aa)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===Sl)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=M,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Kr=new ct,oa=new En,ky=new ct(0,0,0),Xy=new ct(1,1,1),Ds=new ct,Nc=new ct,Ii=new ct,F_=new En,B_=new vo;class Ua{constructor(t=0,i=0,s=0,l=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],M=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Xe(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B_.setFromEuler(this),this.setFromQuaternion(B_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wy=0;const z_=new ct,Qr=new vo,Ka=new En,Lc=new ct,cl=new ct,qy=new ct,Yy=new vo,H_=new ct(1,0,0),G_=new ct(0,1,0),V_=new ct(0,0,1),k_={type:"added"},jy={type:"removed"},Jr={type:"childadded",child:null},Wd={type:"childremoved",child:null};class oi extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new ct,i=new Ua,s=new vo,l=new ct(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new En},normalMatrix:{value:new Ue}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(H_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(V_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(H_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(V_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ka.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lc.copy(t):Lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ka.lookAt(cl,Lc,this.up):Ka.lookAt(Lc,cl,this.up),this.quaternion.setFromRotationMatrix(Ka),l&&(Ka.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Ka),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jy),Wd.child=t,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ka.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ka.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ka),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,qy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,Yy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const M=m[h];c(t.shapes,M)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),_=d(t.images),M=d(t.shapes),g=d(t.skeletons),y=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),M.length>0&&(s.shapes=M),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}oi.DEFAULT_UP=new ct(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lo extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const S=i.getJointPose(w,s),x=this._getHandJoint(h,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=h.joints["index-finger-tip"],M=h.joints["thumb-tip"],g=_.position.distanceTo(M.position),y=.02,b=.005;h.inputState.pinching&&g>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new lo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Yd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class qe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=s,We.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=We.workingColorSpace){if(t=Iy(t,1),i=Xe(i,0,1),s=Xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Yd(d,c,t+1/3),this.g=Yd(d,c,t),this.b=Yd(d,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=Ji){function s(c){c!==void 0&&parseFloat(c)<1&&Te("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Te("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);Te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ji){const s=hx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ji){return We.workingToColorSpace(ai.copy(this),t),Math.round(Xe(ai.r*255,0,255))*65536+Math.round(Xe(ai.g*255,0,255))*256+Math.round(Xe(ai.b*255,0,255))}getHexString(t=Ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(ai.copy(this),i);const s=ai.r,l=ai.g,c=ai.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const M=d-p;switch(h=_<=.5?M/(d+p):M/(2-d-p),d){case s:m=(l-c)/M+(l<c?6:0);break;case l:m=(c-s)/M+2;break;case c:m=(s-l)/M+4;break}m/=6}return t.h=m,t.s=h,t.l=_,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(ai.copy(this),i),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=Ji){We.workingToColorSpace(ai.copy(this),t);const i=ai.r,s=ai.g,l=ai.b;return t!==Ji?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+i,Us.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Us),t.getHSL(Oc);const s=Hd(Us.h,Oc.h,i),l=Hd(Us.s,Oc.s,i),c=Hd(Us.l,Oc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new qe;qe.NAMES=hx;class Np{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new qe(t),this.near=i,this.far=s}clone(){return new Np(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ky extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ua,this.environmentIntensity=1,this.environmentRotation=new Ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const la=new ct,Qa=new ct,jd=new ct,Ja=new ct,$r=new ct,to=new ct,X_=new ct,Zd=new ct,Kd=new ct,Qd=new ct,Jd=new yn,$d=new yn,th=new yn;class ua{constructor(t=new ct,i=new ct,s=new ct){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),la.subVectors(t,i),l.cross(la);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){la.subVectors(l,i),Qa.subVectors(s,i),jd.subVectors(t,i);const d=la.dot(la),p=la.dot(Qa),m=la.dot(jd),h=Qa.dot(Qa),_=Qa.dot(jd),M=d*h-p*p;if(M===0)return c.set(0,0,0),null;const g=1/M,y=(h*m-p*_)*g,b=(d*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ja)===null?!1:Ja.x>=0&&Ja.y>=0&&Ja.x+Ja.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,Ja)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ja.x),m.addScaledVector(d,Ja.y),m.addScaledVector(p,Ja.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Jd.setScalar(0),$d.setScalar(0),th.setScalar(0),Jd.fromBufferAttribute(t,i),$d.fromBufferAttribute(t,s),th.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Jd,c.x),d.addScaledVector($d,c.y),d.addScaledVector(th,c.z),d}static isFrontFacing(t,i,s,l){return la.subVectors(s,i),Qa.subVectors(t,i),la.cross(Qa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return la.subVectors(this.c,this.b),Qa.subVectors(this.a,this.b),la.cross(Qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ua.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ua.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ua.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ua.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ua.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;$r.subVectors(l,s),to.subVectors(c,s),Zd.subVectors(t,s);const m=$r.dot(Zd),h=to.dot(Zd);if(m<=0&&h<=0)return i.copy(s);Kd.subVectors(t,l);const _=$r.dot(Kd),M=to.dot(Kd);if(_>=0&&M<=_)return i.copy(l);const g=m*M-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector($r,d);Qd.subVectors(t,c);const y=$r.dot(Qd),b=to.dot(Qd);if(b>=0&&y<=b)return i.copy(c);const w=y*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(to,p);const S=_*b-y*M;if(S<=0&&M-_>=0&&y-b>=0)return X_.subVectors(c,l),p=(M-_)/(M-_+(y-b)),i.copy(l).addScaledVector(X_,p);const x=1/(S+w+g);return d=w*x,p=g*x,i.copy(s).addScaledVector($r,d).addScaledVector(to,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bl{constructor(t=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ca.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ca.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ca.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,ca):ca.fromBufferAttribute(c,d),ca.applyMatrix4(t.matrixWorld),this.expandByPoint(ca);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pc.copy(s.boundingBox)),Pc.applyMatrix4(t.matrixWorld),this.union(Pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ca),ca.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ul),Ic.subVectors(this.max,ul),eo.subVectors(t.a,ul),no.subVectors(t.b,ul),io.subVectors(t.c,ul),Ns.subVectors(no,eo),Ls.subVectors(io,no),sr.subVectors(eo,io);let i=[0,-Ns.z,Ns.y,0,-Ls.z,Ls.y,0,-sr.z,sr.y,Ns.z,0,-Ns.x,Ls.z,0,-Ls.x,sr.z,0,-sr.x,-Ns.y,Ns.x,0,-Ls.y,Ls.x,0,-sr.y,sr.x,0];return!eh(i,eo,no,io,Ic)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,eo,no,io,Ic))?!1:(Fc.crossVectors(Ns,Ls),i=[Fc.x,Fc.y,Fc.z],eh(i,eo,no,io,Ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ca).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ca).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $a=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],ca=new ct,Pc=new bl,eo=new ct,no=new ct,io=new ct,Ns=new ct,Ls=new ct,sr=new ct,ul=new ct,Ic=new ct,Fc=new ct,rr=new ct;function eh(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){rr.fromArray(r,c);const p=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=t.dot(rr),h=i.dot(rr),_=s.dot(rr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const Nn=new ct,Bc=new Qe;let Qy=0;class wa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=D_,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(t),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix3(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ll(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ti(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array),l=Ti(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array),l=Ti(l,this.array),c=Ti(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==D_&&(t.usage=this.usage),t}}class px extends wa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class mx extends wa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class kn extends wa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Jy=new bl,fl=new ct,nh=new ct;class Lp{constructor(t=new ct,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Jy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fl.subVectors(t,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(fl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fl.copy(t.center).add(nh)),this.expandByPoint(fl.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $y=0;const Qi=new En,ih=new oi,ao=new ct,Fi=new bl,dl=new bl,Vn=new ct;class ta extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ny(t)?mx:px)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qi.makeRotationFromQuaternion(t),this.applyMatrix4(Qi),this}rotateX(t){return Qi.makeRotationX(t),this.applyMatrix4(Qi),this}rotateY(t){return Qi.makeRotationY(t),this.applyMatrix4(Qi),this}rotateZ(t){return Qi.makeRotationZ(t),this.applyMatrix4(Qi),this}translate(t,i,s){return Qi.makeTranslation(t,i,s),this.applyMatrix4(Qi),this}scale(t,i,s){return Qi.makeScale(t,i,s),this.applyMatrix4(Qi),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const s=this.boundingSphere.center;if(Fi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];dl.setFromBufferAttribute(p),this.morphTargetsRelative?(Vn.addVectors(Fi.min,dl.min),Fi.expandByPoint(Vn),Vn.addVectors(Fi.max,dl.max),Fi.expandByPoint(Vn)):(Fi.expandByPoint(dl.min),Fi.expandByPoint(dl.max))}Fi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Vn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Vn.fromBufferAttribute(p,h),m&&(ao.fromBufferAttribute(t,h),Vn.add(ao)),l=Math.max(l,s.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wa(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new ct,m[T]=new ct;const h=new ct,_=new ct,M=new ct,g=new Qe,y=new Qe,b=new Qe,w=new ct,S=new ct;function x(T,C,rt){h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,C),M.fromBufferAttribute(s,rt),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,rt),_.sub(h),M.sub(h),y.sub(g),b.sub(g);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(M,-y.y).multiplyScalar(F),S.copy(M).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(F),p[T].add(w),p[C].add(w),p[rt].add(w),m[T].add(S),m[C].add(S),m[rt].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,C=D.length;T<C;++T){const rt=D[T],F=rt.start,Y=rt.count;for(let $=F,ft=F+Y;$<ft;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const N=new ct,U=new ct,k=new ct,z=new ct;function G(T){k.fromBufferAttribute(l,T),z.copy(k);const C=p[T];N.copy(C),N.sub(k.multiplyScalar(k.dot(C))).normalize(),U.crossVectors(z,C);const F=U.dot(m[T])<0?-1:1;d.setXYZW(T,N.x,N.y,N.z,F)}for(let T=0,C=D.length;T<C;++T){const rt=D[T],F=rt.start,Y=rt.count;for(let $=F,ft=F+Y;$<ft;$+=3)G(t.getX($+0)),G(t.getX($+1)),G(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new ct,c=new ct,d=new ct,p=new ct,m=new ct,h=new ct,_=new ct,M=new ct;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),w=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),_.subVectors(d,c),M.subVectors(l,c),_.cross(M),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,S),p.add(_),m.add(_),h.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),M.subVectors(l,c),_.cross(M),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Vn.fromBufferAttribute(t,i),Vn.normalize(),t.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(p,m){const h=p.array,_=p.itemSize,M=p.normalized,g=new h.constructor(m.length*_);let y=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*_;for(let x=0;x<_;x++)g[b++]=h[y++]}return new wa(g,_,M)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ta,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,M=h.length;_<M;_++){const g=h[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let M=0,g=h.length;M<g;M++){const y=h[M];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=t.morphAttributes;for(const h in c){const _=[],M=c[h];for(let g=0,y=M.length;g<y;g++)_.push(M[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,_=d.length;h<_;h++){const M=d[h];this.addGroup(M.start,M.count,M.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tE=0;class Tl extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=El(),this.name="",this.type="Material",this.blending=co,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Te(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==Gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==Ah&&(s.blendDst=this.blendDst),this.blendEquation!==dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ts=new ct,ah=new ct,zc=new ct,Os=new ct,sh=new ct,Hc=new ct,rh=new ct;class eE{constructor(t=new ct,i=new ct(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ts.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,i),ts.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ah.copy(t).add(i).multiplyScalar(.5),zc.copy(i).sub(t).normalize(),Os.copy(this.origin).sub(ah);const c=t.distanceTo(i)*.5,d=-this.direction.dot(zc),p=Os.dot(this.direction),m=-Os.dot(zc),h=Os.lengthSq(),_=Math.abs(1-d*d);let M,g,y,b;if(_>0)if(M=d*m-p,g=d*p-m,b=c*_,M>=0)if(g>=-b)if(g<=b){const w=1/_;M*=w,g*=w,y=M*(M+d*g+2*p)+g*(d*M+g+2*m)+h}else g=c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;else g=-c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;else g<=-b?(M=Math.max(0,-(-d*c+p)),g=M>0?-c:Math.min(Math.max(-c,-m),c),y=-M*M+g*(g+2*m)+h):g<=b?(M=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(M=Math.max(0,-(d*c+p)),g=M>0?c:Math.min(Math.max(-c,-m),c),y=-M*M+g*(g+2*m)+h);else g=d>0?-c:c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,M),l&&l.copy(ah).addScaledVector(zc,g),y}intersectSphere(t,i){ts.subVectors(t.center,this.origin);const s=ts.dot(this.direction),l=ts.dot(ts)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),_>=0?(c=(t.min.y-g.y)*_,d=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,d=(t.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),M>=0?(p=(t.min.z-g.z)*M,m=(t.max.z-g.z)*M):(p=(t.max.z-g.z)*M,m=(t.min.z-g.z)*M),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,i,s,l,c){sh.subVectors(i,t),Hc.subVectors(s,t),rh.crossVectors(sh,Hc);let d=this.direction.dot(rh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Os.subVectors(this.origin,t);const m=p*this.direction.dot(Hc.crossVectors(Os,Hc));if(m<0)return null;const h=p*this.direction.dot(sh.cross(Os));if(h<0||m+h>d)return null;const _=-p*Os.dot(rh);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gx extends Tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const W_=new En,or=new eE,Gc=new Lp,q_=new ct,Vc=new ct,kc=new ct,Xc=new ct,oh=new ct,Wc=new ct,Y_=new ct,qc=new ct;class $e extends oi{constructor(t=new ta,i=new gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Wc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],M=c[m];_!==0&&(oh.fromBufferAttribute(M,t),d?Wc.addScaledVector(oh,_):Wc.addScaledVector(oh.sub(i),_))}i.add(Wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(c),or.copy(t.ray).recast(t.near),!(Gc.containsPoint(or.origin)===!1&&(or.intersectSphere(Gc,q_)===null||or.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(W_.copy(c).invert(),or.copy(t.ray).applyMatrix4(W_),!(s.boundingBox!==null&&or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,M=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],x=d[S.materialIndex],D=Math.max(S.start,y.start),N=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let U=D,k=N;U<k;U+=3){const z=p.getX(U),G=p.getX(U+1),T=p.getX(U+2);l=Yc(this,x,t,s,h,_,M,z,G,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let S=b,x=w;S<x;S+=3){const D=p.getX(S),N=p.getX(S+1),U=p.getX(S+2);l=Yc(this,d,t,s,h,_,M,D,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],x=d[S.materialIndex],D=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=D,k=N;U<k;U+=3){const z=U,G=U+1,T=U+2;l=Yc(this,x,t,s,h,_,M,z,G,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let S=b,x=w;S<x;S+=3){const D=S,N=S+1,U=S+2;l=Yc(this,d,t,s,h,_,M,D,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nE(r,t,i,s,l,c,d,p){let m;if(t.side===Ai?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===Gs,p),m===null)return null;qc.copy(p),qc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(qc);return h<i.near||h>i.far?null:{distance:h,point:qc.clone(),object:r}}function Yc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Vc),r.getVertexPosition(m,kc),r.getVertexPosition(h,Xc);const _=nE(r,t,i,s,Vc,kc,Xc,Y_);if(_){const M=new ct;ua.getBarycoord(Y_,Vc,kc,Xc,M),l&&(_.uv=ua.getInterpolatedAttribute(l,p,m,h,M,new Qe)),c&&(_.uv1=ua.getInterpolatedAttribute(c,p,m,h,M,new Qe)),d&&(_.normal=ua.getInterpolatedAttribute(d,p,m,h,M,new ct),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ct,materialIndex:0};ua.getNormal(Vc,kc,Xc,g.normal),_.face=g,_.barycoord=M}return _}class iE extends _i{constructor(t=null,i=1,s=1,l,c,d,p,m,h=$n,_=$n,M,g){super(null,d,p,m,h,_,l,c,M,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new ct,aE=new ct,sE=new Ue;class fr{constructor(t=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=lh.subVectors(s,i).cross(aE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||sE.getNormalMatrix(t),l=this.coplanarPoint(lh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Lp,rE=new Qe(.5,.5),jc=new ct;class Op{constructor(t=new fr,i=new fr,s=new fr,l=new fr,c=new fr,d=new fr){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Aa,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],M=c[5],g=c[6],y=c[7],b=c[8],w=c[9],S=c[10],x=c[11],D=c[12],N=c[13],U=c[14],k=c[15];if(l[0].setComponents(h-d,y-_,x-b,k-D).normalize(),l[1].setComponents(h+d,y+_,x+b,k+D).normalize(),l[2].setComponents(h+p,y+M,x+w,k+N).normalize(),l[3].setComponents(h-p,y-M,x-w,k-N).normalize(),s)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(h-m,y-g,x-S,k-U).normalize();else if(l[4].setComponents(h-m,y-g,x-S,k-U).normalize(),i===Aa)l[5].setComponents(h+m,y+g,x+S,k+U).normalize();else if(i===Sl)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);const i=rE.distanceTo(t.center);return lr.radius=.7071067811865476+i,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _x extends _i{constructor(t=[],i=_r,s,l,c,d,p,m,h,_){super(t,i,s,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yl extends _i{constructor(t,i,s=Da,l,c,d,p=$n,m=$n,h,_=rs,M=1){if(_!==rs&&_!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:M};super(g,l,c,d,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oE extends yl{constructor(t,i=Da,s=_r,l,c,d=$n,p=$n,m,h=rs){const _={width:t,height:t,depth:1},M=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,p,m,h),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vx extends _i{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ba extends ta{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],M=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(M,2));function b(w,S,x,D,N,U,k,z,G,T,C){const rt=U/G,F=k/T,Y=U/2,$=k/2,ft=z/2,K=G+1,P=T+1;let B=0,ht=0;const St=new ct;for(let Ot=0;Ot<P;Ot++){const I=Ot*F-$;for(let J=0;J<K;J++){const yt=J*rt-Y;St[w]=yt*D,St[S]=I*N,St[x]=ft,h.push(St.x,St.y,St.z),St[w]=0,St[S]=0,St[x]=z>0?1:-1,_.push(St.x,St.y,St.z),M.push(J/G),M.push(1-Ot/T),B+=1}}for(let Ot=0;Ot<T;Ot++)for(let I=0;I<G;I++){const J=g+I+K*Ot,yt=g+I+K*(Ot+1),Pt=g+(I+1)+K*(Ot+1),$t=g+(I+1)+K*Ot;m.push(J,yt,$t),m.push(yt,Pt,$t),ht+=6}p.addGroup(y,ht,C),y+=ht,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ya extends ta{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const _=[],M=[],g=[],y=[];let b=0;const w=[],S=s/2;let x=0;D(),d===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(y,2));function D(){const U=new ct,k=new ct;let z=0;const G=(i-t)/s;for(let T=0;T<=c;T++){const C=[],rt=T/c,F=rt*(i-t)+t;for(let Y=0;Y<=l;Y++){const $=Y/l,ft=$*m+p,K=Math.sin(ft),P=Math.cos(ft);k.x=F*K,k.y=-rt*s+S,k.z=F*P,M.push(k.x,k.y,k.z),U.set(K,G,P).normalize(),g.push(U.x,U.y,U.z),y.push($,1-rt),C.push(b++)}w.push(C)}for(let T=0;T<l;T++)for(let C=0;C<c;C++){const rt=w[C][T],F=w[C+1][T],Y=w[C+1][T+1],$=w[C][T+1];(t>0||C!==0)&&(_.push(rt,F,$),z+=3),(i>0||C!==c-1)&&(_.push(F,Y,$),z+=3)}h.addGroup(x,z,0),x+=z}function N(U){const k=b,z=new Qe,G=new ct;let T=0;const C=U===!0?t:i,rt=U===!0?1:-1;for(let Y=1;Y<=l;Y++)M.push(0,S*rt,0),g.push(0,rt,0),y.push(.5,.5),b++;const F=b;for(let Y=0;Y<=l;Y++){const ft=Y/l*m+p,K=Math.cos(ft),P=Math.sin(ft);G.x=C*P,G.y=S*rt,G.z=C*K,M.push(G.x,G.y,G.z),g.push(0,rt,0),z.x=K*.5+.5,z.y=P*.5*rt+.5,y.push(z.x,z.y),b++}for(let Y=0;Y<l;Y++){const $=k+Y,ft=F+Y;U===!0?_.push(ft,ft+1,$):_.push(ft+1,ft,$),T+=3}h.addGroup(x,T,U===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends ya{constructor(t=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,t,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(t){return new vl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gr extends ta{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,M=t/p,g=i/m,y=[],b=[],w=[],S=[];for(let x=0;x<_;x++){const D=x*g-d;for(let N=0;N<h;N++){const U=N*M-c;b.push(U,-D,0),w.push(0,0,1),S.push(N/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<p;D++){const N=D+h*x,U=D+h*(x+1),k=D+1+h*(x+1),z=D+1+h*x;y.push(N,U,z),y.push(U,k,z)}this.setIndex(y),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tu extends ta{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const _=[],M=new ct,g=new ct,y=[],b=[],w=[],S=[];for(let x=0;x<=s;x++){const D=[],N=x/s;let U=0;x===0&&d===0?U=.5/i:x===s&&m===Math.PI&&(U=-.5/i);for(let k=0;k<=i;k++){const z=k/i;M.x=-t*Math.cos(l+z*c)*Math.sin(d+N*p),M.y=t*Math.cos(d+N*p),M.z=t*Math.sin(l+z*c)*Math.sin(d+N*p),b.push(M.x,M.y,M.z),g.copy(M).normalize(),w.push(g.x,g.y,g.z),S.push(z+U,1-N),D.push(h++)}_.push(D)}for(let x=0;x<s;x++)for(let D=0;D<i;D++){const N=_[x][D+1],U=_[x][D],k=_[x+1][D],z=_[x+1][D+1];(x!==0||d>0)&&y.push(N,U,z),(x!==s-1||m<Math.PI)&&y.push(U,k,z)}this.setIndex(y),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Au extends ta{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],_=[],M=[],g=new ct,y=new ct,b=new ct;for(let w=0;w<=s;w++){const S=d+w/s*p;for(let x=0;x<=l;x++){const D=x/l*c;y.x=(t+i*Math.cos(S))*Math.cos(D),y.y=(t+i*Math.cos(S))*Math.sin(D),y.z=i*Math.sin(S),h.push(y.x,y.y,y.z),g.x=t*Math.cos(D),g.y=t*Math.sin(D),b.subVectors(y,g).normalize(),_.push(b.x,b.y,b.z),M.push(x/l),M.push(w/s)}}for(let w=1;w<=s;w++)for(let S=1;S<=l;S++){const x=(l+1)*w+S-1,D=(l+1)*(w-1)+S-1,N=(l+1)*(w-1)+S,U=(l+1)*w+S;m.push(x,D,U),m.push(D,N,U)}this.setIndex(m),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function go(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function gi(r){const t={};for(let i=0;i<r.length;i++){const s=go(r[i]);for(const l in s)t[l]=s[l]}return t}function lE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function xx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const cE={clone:go,merge:gi};var uE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends Tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uE,this.fragmentShader=fE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=lE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dE extends Na{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jn extends Tl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cx,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=yp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hE extends Tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pE extends Tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mx extends oi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ch=new En,j_=new ct,Z_=new ct;class mE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new En,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),Z_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Z_),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new ct,Kc=new vo,Ma=new ct;class Sx extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=Aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zc,Kc,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Ma.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Zc,Kc,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new ct,K_=new Qe,Q_=new Qe;class $i extends Sx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,i){return this.getViewBounds(t,K_,Q_),i.subVectors(Q_,K_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Pp extends Sx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gE extends mE{constructor(){super(new Pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _E extends Mx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oi.DEFAULT_UP),this.updateMatrix(),this.target=new oi,this.shadow=new gE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class vE extends Mx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const so=-90,ro=1;class xE extends oi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $i(so,ro,t,i);l.layers=this.layers,this.add(l);const c=new $i(so,ro,t,i);c.layers=this.layers,this.add(c);const d=new $i(so,ro,t,i);d.layers=this.layers,this.add(d);const p=new $i(so,ro,t,i);p.layers=this.layers,this.add(p);const m=new $i(so,ro,t,i);m.layers=this.layers,this.add(m);const h=new $i(so,ro,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,M=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(M,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ME extends $i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function J_(r,t,i,s){const l=SE(s);switch(i){case rx:return r*t;case lx:return r*t/l.components*l.byteLength;case Ap:return r*t/l.components*l.byteLength;case po:return r*t*2/l.components*l.byteLength;case Rp:return r*t*2/l.components*l.byteLength;case ox:return r*t*3/l.components*l.byteLength;case fa:return r*t*4/l.components*l.byteLength;case Cp:return r*t*4/l.components*l.byteLength;case hu:case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fh:case zh:return Math.max(r,16)*Math.max(t,8)/4;case Ih:case Bh:return Math.max(r,8)*Math.max(t,8)/2;case Hh:case Gh:case kh:case Xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vh:case Wh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case op:case lp:case cp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case up:case fp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case dp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SE(r){switch(r){case zi:case nx:return{byteLength:1,components:1};case xl:case ix:case ss:return{byteLength:2,components:1};case bp:case Tp:return{byteLength:2,components:4};case Da:case Ep:case Ta:return{byteLength:4,components:1};case ax:case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);function yx(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function yE(r){const t=new WeakMap;function i(p,m){const h=p.array,_=p.usage,M=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,_),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:M}}function s(p,m,h){const _=m.array,M=m.updateRanges;if(r.bindBuffer(h,p),M.length===0)r.bufferSubData(h,0,_);else{M.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<M.length;y++){const b=M[g],w=M[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,M[g]=w)}M.length=g+1;for(let y=0,b=M.length;y<b;y++){const w=M[y];r.bufferSubData(h,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
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
#endif`,TE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,FE=`#ifdef USE_BUMPMAP
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`#define PI 3.141592653589793
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
} // validated`,YE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jE=`vec3 transformedNormal = objectNormal;
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
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
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
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
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
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Sb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nb=`#if defined( USE_POINTS_UV )
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
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
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
#endif`,zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
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
#endif`,dT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,UT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,PT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,FT=`uniform vec3 diffuse;
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
}`,BT=`#define LAMBERT
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
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,HT=`#define MATCAP
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
}`,GT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
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
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,qT=`#define STANDARD
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
}`,YT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jT=`#define TOON
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
}`,ZT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,KT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,t1=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:EE,alphahash_pars_fragment:bE,alphamap_fragment:TE,alphamap_pars_fragment:AE,alphatest_fragment:RE,alphatest_pars_fragment:CE,aomap_fragment:wE,aomap_pars_fragment:DE,batching_pars_vertex:UE,batching_vertex:NE,begin_vertex:LE,beginnormal_vertex:OE,bsdfs:PE,iridescence_fragment:IE,bumpmap_pars_fragment:FE,clipping_planes_fragment:BE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:VE,color_pars_fragment:kE,color_pars_vertex:XE,color_vertex:WE,common:qE,cube_uv_reflection_fragment:YE,defaultnormal_vertex:jE,displacementmap_pars_vertex:ZE,displacementmap_vertex:KE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:$E,colorspace_pars_fragment:tb,envmap_fragment:eb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:ab,envmap_physical_pars_fragment:mb,envmap_vertex:sb,fog_vertex:rb,fog_pars_vertex:ob,fog_fragment:lb,fog_pars_fragment:cb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:fb,lights_lambert_fragment:db,lights_lambert_pars_fragment:hb,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:xb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Sb,lights_fragment_begin:yb,lights_fragment_maps:Eb,lights_fragment_end:bb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Fb,morphtarget_pars_vertex:Bb,morphtarget_vertex:zb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Zb,opaque_fragment:Kb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:tT,dithering_pars_fragment:eT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:sT,shadowmap_vertex:rT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:fT,specularmap_fragment:dT,specularmap_pars_fragment:hT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:_T,uv_pars_fragment:vT,uv_pars_vertex:xT,uv_vertex:MT,worldpos_vertex:ST,background_vert:yT,background_frag:ET,backgroundCube_vert:bT,backgroundCube_frag:TT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:wT,distance_vert:DT,distance_frag:UT,equirect_vert:NT,equirect_frag:LT,linedashed_vert:OT,linedashed_frag:PT,meshbasic_vert:IT,meshbasic_frag:FT,meshlambert_vert:BT,meshlambert_frag:zT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:VT,meshnormal_frag:kT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:qT,meshphysical_frag:YT,meshtoon_vert:jT,meshtoon_frag:ZT,points_vert:KT,points_frag:QT,shadow_vert:JT,shadow_frag:$T,sprite_vert:t1,sprite_frag:e1},te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ea={basic:{uniforms:gi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:gi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:gi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:gi([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:gi([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:gi([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:gi([te.points,te.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:gi([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:gi([te.common,te.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:gi([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:gi([te.sprite,te.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:gi([te.common,te.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:gi([te.lights,te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ea.physical={uniforms:gi([Ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Qc={r:0,b:0,g:0},cr=new Ua,n1=new En;function i1(r,t,i,s,l,c){const d=new qe(0);let p=l===!0?0:1,m,h,_=null,M=0,g=null;function y(D){let N=D.isScene===!0?D.background:null;if(N&&N.isTexture){const U=D.backgroundBlurriness>0;N=t.get(N,U)}return N}function b(D){let N=!1;const U=y(D);U===null?S(d,p):U&&U.isColor&&(S(U,1),N=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,N){const U=y(N);U&&(U.isCubeTexture||U.mapping===Cu)?(h===void 0&&(h=new $e(new ba(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:go(Ea.backgroundCube.uniforms),vertexShader:Ea.backgroundCube.vertexShader,fragmentShader:Ea.backgroundCube.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cr.copy(N.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(cr)),h.material.toneMapped=We.getTransfer(U.colorSpace)!==an,(_!==U||M!==U.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=U,M=U.version,g=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new $e(new gr(2,2),new Na({name:"BackgroundMaterial",uniforms:go(Ea.background.uniforms),vertexShader:Ea.background.vertexShader,fragmentShader:Ea.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=We.getTransfer(U.colorSpace)!==an,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||M!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,M=U.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function S(D,N){D.getRGB(Qc,xx(r)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,N,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,N=1){d.set(D),p=N,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,S(d,p)},render:b,addToRenderList:w,dispose:x}}function a1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(F,Y,$,ft,K){let P=!1;const B=M(F,ft,$,Y);c!==B&&(c=B,h(c.object)),P=y(F,ft,$,K),P&&b(F,ft,$,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,U(F,Y,$,ft),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function h(F){return r.bindVertexArray(F)}function _(F){return r.deleteVertexArray(F)}function M(F,Y,$,ft){const K=ft.wireframe===!0;let P=s[Y.id];P===void 0&&(P={},s[Y.id]=P);const B=F.isInstancedMesh===!0?F.id:0;let ht=P[B];ht===void 0&&(ht={},P[B]=ht);let St=ht[$.id];St===void 0&&(St={},ht[$.id]=St);let Ot=St[K];return Ot===void 0&&(Ot=g(m()),St[K]=Ot),Ot}function g(F){const Y=[],$=[],ft=[];for(let K=0;K<i;K++)Y[K]=0,$[K]=0,ft[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:ft,object:F,attributes:{},index:null}}function y(F,Y,$,ft){const K=c.attributes,P=Y.attributes;let B=0;const ht=$.getAttributes();for(const St in ht)if(ht[St].location>=0){const I=K[St];let J=P[St];if(J===void 0&&(St==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),St==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;B++}return c.attributesNum!==B||c.index!==ft}function b(F,Y,$,ft){const K={},P=Y.attributes;let B=0;const ht=$.getAttributes();for(const St in ht)if(ht[St].location>=0){let I=P[St];I===void 0&&(St==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),St==="instanceColor"&&F.instanceColor&&(I=F.instanceColor));const J={};J.attribute=I,I&&I.data&&(J.data=I.data),K[St]=J,B++}c.attributes=K,c.attributesNum=B,c.index=ft}function w(){const F=c.newAttributes;for(let Y=0,$=F.length;Y<$;Y++)F[Y]=0}function S(F){x(F,0)}function x(F,Y){const $=c.newAttributes,ft=c.enabledAttributes,K=c.attributeDivisors;$[F]=1,ft[F]===0&&(r.enableVertexAttribArray(F),ft[F]=1),K[F]!==Y&&(r.vertexAttribDivisor(F,Y),K[F]=Y)}function D(){const F=c.newAttributes,Y=c.enabledAttributes;for(let $=0,ft=Y.length;$<ft;$++)Y[$]!==F[$]&&(r.disableVertexAttribArray($),Y[$]=0)}function N(F,Y,$,ft,K,P,B){B===!0?r.vertexAttribIPointer(F,Y,$,K,P):r.vertexAttribPointer(F,Y,$,ft,K,P)}function U(F,Y,$,ft){w();const K=ft.attributes,P=$.getAttributes(),B=Y.defaultAttributeValues;for(const ht in P){const St=P[ht];if(St.location>=0){let Ot=K[ht];if(Ot===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(Ot=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(Ot=F.instanceColor)),Ot!==void 0){const I=Ot.normalized,J=Ot.itemSize,yt=t.get(Ot);if(yt===void 0)continue;const Pt=yt.buffer,$t=yt.type,st=yt.bytesPerElement,bt=$t===r.INT||$t===r.UNSIGNED_INT||Ot.gpuType===Ep;if(Ot.isInterleavedBufferAttribute){const Ut=Ot.data,zt=Ut.stride,Qt=Ot.offset;if(Ut.isInstancedInterleavedBuffer){for(let le=0;le<St.locationSize;le++)x(St.location+le,Ut.meshPerAttribute);F.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let le=0;le<St.locationSize;le++)S(St.location+le);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let le=0;le<St.locationSize;le++)N(St.location+le,J/St.locationSize,$t,I,zt*st,(Qt+J/St.locationSize*le)*st,bt)}else{if(Ot.isInstancedBufferAttribute){for(let Ut=0;Ut<St.locationSize;Ut++)x(St.location+Ut,Ot.meshPerAttribute);F.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Ut=0;Ut<St.locationSize;Ut++)S(St.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let Ut=0;Ut<St.locationSize;Ut++)N(St.location+Ut,J/St.locationSize,$t,I,J*st,J/St.locationSize*Ut*st,bt)}}else if(B!==void 0){const I=B[ht];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(St.location,I);break;case 3:r.vertexAttrib3fv(St.location,I);break;case 4:r.vertexAttrib4fv(St.location,I);break;default:r.vertexAttrib1fv(St.location,I)}}}}D()}function k(){C();for(const F in s){const Y=s[F];for(const $ in Y){const ft=Y[$];for(const K in ft){const P=ft[K];for(const B in P)_(P[B].object),delete P[B];delete ft[K]}}delete s[F]}}function z(F){if(s[F.id]===void 0)return;const Y=s[F.id];for(const $ in Y){const ft=Y[$];for(const K in ft){const P=ft[K];for(const B in P)_(P[B].object),delete P[B];delete ft[K]}}delete s[F.id]}function G(F){for(const Y in s){const $=s[Y];for(const ft in $){const K=$[ft];if(K[F.id]===void 0)continue;const P=K[F.id];for(const B in P)_(P[B].object),delete P[B];delete K[F.id]}}}function T(F){for(const Y in s){const $=s[Y],ft=F.isInstancedMesh===!0?F.id:0,K=$[ft];if(K!==void 0){for(const P in K){const B=K[P];for(const ht in B)_(B[ht].object),delete B[ht];delete K[P]}delete $[ft],Object.keys($).length===0&&delete s[Y]}}}function C(){rt(),d=!0,c!==l&&(c=l,h(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:C,resetDefaultState:rt,dispose:k,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function s1(r,t,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function d(h,_,M){M!==0&&(r.drawArraysInstanced(s,h,_,M),i.update(_,s,M))}function p(h,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,M);let y=0;for(let b=0;b<M;b++)y+=_[b];i.update(y,s,1)}function m(h,_,M,g){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<h.length;b++)d(h[b],_[b],g[b]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,_,0,g,0,M);let b=0;for(let w=0;w<M;w++)b+=_[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function r1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==fa&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(G){const T=G===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==zi&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ta&&!T)}function m(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(Te("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const M=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:M,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:k,samples:z}}function o1(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new fr,p=new Ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const y=M.length!==0||g||s!==0||l;return l=g,s=M.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,g){i=_(M,g,0)},this.setState=function(M,g,y){const b=M.clippingPlanes,w=M.clipIntersection,S=M.clipShadows,x=r.get(M);if(!l||b===null||b.length===0||c&&!S)c?_(null):h();else{const D=c?0:s,N=D*4;let U=x.clippingState||null;m.value=U,U=_(b,g,N,y);for(let k=0;k!==N;++k)U[k]=i[k];x.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(M,g,y,b){const w=M!==null?M.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const x=y+w*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,U=y;N!==w;++N,U+=4)d.copy(M[N]).applyMatrix4(D,p),d.normal.toArray(S,U),S[U+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const Hs=4,$_=[.125,.215,.35,.446,.526,.582],hr=20,l1=256,hl=new Pp,tv=new qe;let uh=null,fh=0,dh=0,hh=!1;const c1=new ct;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=c1}=c;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=hh,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_r||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ss,format:fa,colorSpace:mo,depthBuffer:!1},l=nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u1(c)),this._blurMaterial=d1(c,t,i),this._ggxMaterial=f1(c,t,i)}return l}_compileMaterial(t){const i=new $e(new ta,t);this._renderer.compile(i,hl)}_sceneToCubeUV(t,i,s,l,c){const m=new $i(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],M=this._renderer,g=M.autoClear,y=M.toneMapping;M.getClearColor(tv),M.toneMapping=Ra,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(l),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new ba,new gx({name:"PMREM.Background",side:Ai,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let x=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,x=!0):(S.color.copy(tv),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const k=this._cubeSize;oo(l,U*k,N>2?k:0,k,k),M.setRenderTarget(l),x&&M.render(w,m),M.render(t,m)}M.toneMapping=y,M.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===_r||t.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;oo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,hl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),M=Math.sqrt(h*h-_*_),g=0+h*1.25,y=M*g,{_lodMax:b}=this,w=this._sizeLods[s],S=3*w*(s>b-Hs?s-b+Hs:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,oo(c,S,x,3*w,2*w),l.setRenderTarget(c),l.render(p,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,oo(t,S,x,3*w,2*w),l.setRenderTarget(t),l.render(p,hl)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const _=3,M=this._lodMeshes[l];M.material=h;const g=h.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*hr-1),w=c/b,S=isFinite(c)?1+Math.floor(_*w):hr;S>hr&&Te(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hr}`);const x=[];let D=0;for(let G=0;G<hr;++G){const T=G/w,C=Math.exp(-T*T/2);x.push(C),G===0?D+=C:G<S&&(D+=2*C)}for(let G=0;G<x.length;G++)x[G]=x[G]/D;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const U=this._sizeLods[l],k=3*U*(l>N-Hs?l-N+Hs:0),z=4*(this._cubeSize-U);oo(i,k,z,3*U,2*U),m.setRenderTarget(i),m.render(M,hl)}}function u1(r){const t=[],i=[],s=[];let l=r;const c=r-Hs+1+$_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-Hs?m=$_[d-r+Hs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,M=1+h,g=[_,_,M,_,M,M,_,_,M,M,_,M],y=6,b=6,w=3,S=2,x=1,D=new Float32Array(w*b*y),N=new Float32Array(S*b*y),U=new Float32Array(x*b*y);for(let z=0;z<y;z++){const G=z%3*2/3-1,T=z>2?0:-1,C=[G,T,0,G+2/3,T,0,G+2/3,T+1,0,G,T,0,G+2/3,T+1,0,G,T+1,0];D.set(C,w*b*z),N.set(g,S*b*z);const rt=[z,z,z,z,z,z];U.set(rt,x*b*z)}const k=new ta;k.setAttribute("position",new wa(D,w)),k.setAttribute("uv",new wa(N,S)),k.setAttribute("faceIndex",new wa(U,x)),s.push(new $e(k,null)),l>Hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function nv(r,t,i){const s=new Ca(r,t,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function f1(r,t,i){return new Na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function d1(r,t,i){const s=new Float32Array(hr),l=new ct(0,1,0);return new Na({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wu(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function iv(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function av(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}class Ex extends Ca{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ba(5,5,5),c=new Na({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ai,blending:is});c.uniforms.tEquirect.value=i;const d=new $e(l,c),p=i.minFilter;return i.minFilter===pr&&(i.minFilter=ri),new xE(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function h1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Id||y===Fd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Ex(b.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,b=y===Id||y===Fd,w=y===_r||y===ho;if(b||w){let S=i.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new ev(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return b&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new ev(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function p(g,y){return y===Id?g.mapping=_r:y===Fd&&(g.mapping=ho),g}function m(g){let y=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&y++;return y===b}function h(g){const y=g.target;y.removeEventListener("dispose",h);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function M(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:M}}function p1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&bu("WebGLRenderer: "+s+" extension not supported."),l}}}function m1(r,t,i,s){const l={},c=new WeakMap;function d(M){const g=M.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(M,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(M){const g=M.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function h(M){const g=[],y=M.index,b=M.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const D=y.array;w=y.version;for(let N=0,U=D.length;N<U;N+=3){const k=D[N+0],z=D[N+1],G=D[N+2];g.push(k,z,z,G,G,k)}}else{const D=b.array;w=b.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const k=N+0,z=N+1,G=N+2;g.push(k,z,z,G,G,k)}}const S=new(b.count>=65535?mx:px)(g,1);S.version=w;const x=c.get(M);x&&t.remove(x),c.set(M,S)}function _(M){const g=c.get(M);if(g){const y=M.index;y!==null&&g.version<y.version&&h(M)}else h(M);return c.get(M)}return{get:p,update:m,getWireframeAttribute:_}}function g1(r,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*d),i.update(y,s,1)}function h(g,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,g*d,b),i.update(y,s,b))}function _(g,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,b);let S=0;for(let x=0;x<b;x++)S+=y[x];i.update(S,s,1)}function M(g,y,b,w){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)h(g[x]/d,y[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,b);let x=0;for(let D=0;D<b;D++)x+=y[D]*w[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=M}function _1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ke("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v1(r,t,i){const s=new WeakMap,l=new yn;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==M){let rt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",rt)};var y=rt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let k=p.attributes.position.count*U,z=1;k>t.maxTextureSize&&(z=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const G=new Float32Array(k*z*4*M),T=new fx(G,k,z,M);T.type=Ta,T.needsUpdate=!0;const C=U*4;for(let F=0;F<M;F++){const Y=x[F],$=D[F],ft=N[F],K=k*z*4*F;for(let P=0;P<Y.count;P++){const B=P*C;b===!0&&(l.fromBufferAttribute(Y,P),G[K+B+0]=l.x,G[K+B+1]=l.y,G[K+B+2]=l.z,G[K+B+3]=0),w===!0&&(l.fromBufferAttribute($,P),G[K+B+4]=l.x,G[K+B+5]=l.y,G[K+B+6]=l.z,G[K+B+7]=0),S===!0&&(l.fromBufferAttribute(ft,P),G[K+B+8]=l.x,G[K+B+9]=l.y,G[K+B+10]=l.z,G[K+B+11]=ft.itemSize===4?l.w:1)}}g={count:M,texture:T,size:new Qe(k,z)},s.set(p,g),p.addEventListener("dispose",rt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function x1(r,t,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,M=h.geometry,g=t.get(h,M);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const M1={[jv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[tx]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function S1(r,t,i,s,l){const c=new Ca(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Ca(t,i,{type:ss,depthBuffer:!1,stencilBuffer:!1}),p=new ta;p.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new kn([0,2,0,0,2,0],2));const m=new dE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $e(p,m),_=new Pp(-1,1,1,-1,0,1);let M=null,g=null,y=!1,b,w=null,S=[],x=!1;this.setSize=function(D,N){c.setSize(D,N),d.setSize(D,N);for(let U=0;U<S.length;U++){const k=S[U];k.setSize&&k.setSize(D,N)}},this.setEffects=function(D){S=D,x=S.length>0&&S[0].isRenderPass===!0;const N=c.width,U=c.height;for(let k=0;k<S.length;k++){const z=S[k];z.setSize&&z.setSize(N,U)}},this.begin=function(D,N){if(y||D.toneMapping===Ra&&S.length===0)return!1;if(w=N,N!==null){const U=N.width,k=N.height;(c.width!==U||c.height!==k)&&this.setSize(U,k)}return x===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Ra,!0},this.hasRenderPass=function(){return x},this.end=function(D,N){D.toneMapping=b,y=!0;let U=c,k=d;for(let z=0;z<S.length;z++){const G=S[z];if(G.enabled!==!1&&(G.render(D,k,U,N),G.needsSwap!==!1)){const T=U;U=k,k=T}}if(M!==D.outputColorSpace||g!==D.toneMapping){M=D.outputColorSpace,g=D.toneMapping,m.defines={},We.getTransfer(M)===an&&(m.defines.SRGB_TRANSFER="");const z=M1[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(w),D.render(h,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const bx=new _i,mp=new yl(1,1),Tx=new fx,Ax=new Vy,Rx=new _x,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function xo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function In(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Fn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Du(r,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function y1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(In(i,t))return;r.uniform2fv(this.addr,t),Fn(i,t)}}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(In(i,t))return;r.uniform3fv(this.addr,t),Fn(i,t)}}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(In(i,t))return;r.uniform4fv(this.addr,t),Fn(i,t)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(In(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Fn(i,t)}else{if(In(i,s))return;cv.set(s),r.uniformMatrix2fv(this.addr,!1,cv),Fn(i,s)}}function R1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(In(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Fn(i,t)}else{if(In(i,s))return;lv.set(s),r.uniformMatrix3fv(this.addr,!1,lv),Fn(i,s)}}function C1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(In(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Fn(i,t)}else{if(In(i,s))return;ov.set(s),r.uniformMatrix4fv(this.addr,!1,ov),Fn(i,s)}}function w1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(In(i,t))return;r.uniform2iv(this.addr,t),Fn(i,t)}}function U1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(In(i,t))return;r.uniform3iv(this.addr,t),Fn(i,t)}}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(In(i,t))return;r.uniform4iv(this.addr,t),Fn(i,t)}}function L1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(In(i,t))return;r.uniform2uiv(this.addr,t),Fn(i,t)}}function P1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(In(i,t))return;r.uniform3uiv(this.addr,t),Fn(i,t)}}function I1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(In(i,t))return;r.uniform4uiv(this.addr,t),Fn(i,t)}}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(mp.compareFunction=i.isReversedDepthBuffer()?Dp:wp,c=mp):c=bx,i.setTexture2D(t||c,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ax,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Rx,l)}function H1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tx,l)}function G1(r){switch(r){case 5126:return y1;case 35664:return E1;case 35665:return b1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return L1;case 36294:return O1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(r,t){r.uniform1fv(this.addr,t)}function k1(r,t){const i=xo(t,this.size,2);r.uniform2fv(this.addr,i)}function X1(r,t){const i=xo(t,this.size,3);r.uniform3fv(this.addr,i)}function W1(r,t){const i=xo(t,this.size,4);r.uniform4fv(this.addr,i)}function q1(r,t){const i=xo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Y1(r,t){const i=xo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function j1(r,t){const i=xo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Z1(r,t){r.uniform1iv(this.addr,t)}function K1(r,t){r.uniform2iv(this.addr,t)}function Q1(r,t){r.uniform3iv(this.addr,t)}function J1(r,t){r.uniform4iv(this.addr,t)}function $1(r,t){r.uniform1uiv(this.addr,t)}function tA(r,t){r.uniform2uiv(this.addr,t)}function eA(r,t){r.uniform3uiv(this.addr,t)}function nA(r,t){r.uniform4uiv(this.addr,t)}function iA(r,t,i){const s=this.cache,l=t.length,c=Du(i,l);In(s,c)||(r.uniform1iv(this.addr,c),Fn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=mp:d=bx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function aA(r,t,i){const s=this.cache,l=t.length,c=Du(i,l);In(s,c)||(r.uniform1iv(this.addr,c),Fn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Ax,c[d])}function sA(r,t,i){const s=this.cache,l=t.length,c=Du(i,l);In(s,c)||(r.uniform1iv(this.addr,c),Fn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Rx,c[d])}function rA(r,t,i){const s=this.cache,l=t.length,c=Du(i,l);In(s,c)||(r.uniform1iv(this.addr,c),Fn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Tx,c[d])}function oA(r){switch(r){case 5126:return V1;case 35664:return k1;case 35665:return X1;case 35666:return W1;case 35674:return q1;case 35675:return Y1;case 35676:return j1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}class lA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=G1(i.type)}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oA(i.type)}}class uA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function uv(r,t){r.seq.push(t),r.map[t.id]=t}function fA(r,t,i){const s=r.name,l=s.length;for(ph.lastIndex=0;;){const c=ph.exec(s),d=ph.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){uv(i,h===void 0?new lA(p,r,t):new cA(p,r,t));break}else{let M=i.map[p];M===void 0&&(M=new uA(p),uv(i,M)),i=M}}}class _u{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);fA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const dA=37297;let hA=0;function pA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const dv=new Ue;function mA(r){We._getMatrix(dv,We.workingColorSpace,r);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(r)){case yu:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+pA(r.getShaderSource(t),p)}else return c}function gA(r,t){const i=mA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _A={[jv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Qv]:"ACESFilmic",[$v]:"AgX",[tx]:"Neutral",[Jv]:"Custom"};function vA(r,t){const i=_A[t];return i===void 0?(Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new ct;function xA(){We.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),t=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function SA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function _l(r){return r!==""}function pv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(r){return r.replace(EA,TA)}const bA=new Map;function TA(r,t){let i=Ne[t];if(i===void 0){const s=bA.get(t);if(s!==void 0)i=Ne[s],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gp(i)}const AA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(AA,RA)}function RA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const CA={[du]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function wA(r){return CA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DA={[_r]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function UA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":DA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[ho]:"ENVMAP_MODE_REFRACTION"};function LA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OA={[yp]:"ENVMAP_BLENDING_MULTIPLY",[Sy]:"ENVMAP_BLENDING_MIX",[yy]:"ENVMAP_BLENDING_ADD"};function PA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OA[r.combine]||"ENVMAP_BLENDING_NONE"}function IA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FA(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=wA(i),h=UA(i),_=LA(i),M=PA(i),g=IA(i),y=MA(i),b=SA(c),w=l.createProgram();let S,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(_l).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(_l).join(`
`),x.length>0&&(x+=`
`)):(S=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),x=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+M:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?Ne.tonemapping_pars_fragment:"",i.toneMapping!==Ra?vA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,gA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),d=gp(d),d=pv(d,i),d=mv(d,i),p=gp(p),p=pv(p,i),p=mv(p,i),d=gv(d),p=gv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+S+d,U=D+x+p,k=fv(l,l.VERTEX_SHADER,N),z=fv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,k),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function G(F){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",$=l.getShaderInfoLog(k)||"",ft=l.getShaderInfoLog(z)||"",K=Y.trim(),P=$.trim(),B=ft.trim();let ht=!0,St=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,k,z);else{const Ot=hv(l,k,"vertex"),I=hv(l,z,"fragment");Ke("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+K+`
`+Ot+`
`+I)}else K!==""?Te("WebGLProgram: Program Info Log:",K):(P===""||B==="")&&(St=!1);St&&(F.diagnostics={runnable:ht,programLog:K,vertexShader:{log:P,prefix:S},fragmentShader:{log:B,prefix:x}})}l.deleteShader(k),l.deleteShader(z),T=new _u(l,w),C=yA(l,w)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let C;this.getAttributes=function(){return C===void 0&&G(this),C};let rt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return rt===!1&&(rt=l.getProgramParameter(w,dA)),rt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=z,this}let BA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new HA(t),i.set(t,s)),s}}class HA{constructor(t){this.id=BA++,this.code=t,this.usedTimes=0}}function GA(r,t,i,s,l,c){const d=new dx,p=new zA,m=new Set,h=[],_=new Map,M=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,C,rt,F,Y){const $=F.fog,ft=Y.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||K,P),ht=B&&B.mapping===Cu?B.image.height:null,St=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&Te("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Ot=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,I=Ot!==void 0?Ot.length:0;let J=0;ft.morphAttributes.position!==void 0&&(J=1),ft.morphAttributes.normal!==void 0&&(J=2),ft.morphAttributes.color!==void 0&&(J=3);let yt,Pt,$t,st;if(St){const ye=Ea[St];yt=ye.vertexShader,Pt=ye.fragmentShader}else yt=T.vertexShader,Pt=T.fragmentShader,p.update(T),$t=p.getVertexShaderID(T),st=p.getFragmentShaderID(T);const bt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),zt=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,le=!!T.map,cn=!!T.matcap,Ee=!!B,Se=!!T.aoMap,Fe=!!T.lightMap,ge=!!T.bumpMap,Ce=!!T.normalMap,V=!!T.displacementMap,sn=!!T.emissiveMap,we=!!T.metalnessMap,Be=!!T.roughnessMap,se=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,Mt=T.sheen>0,Ct=T.transmission>0,xt=se&&!!T.anisotropyMap,ee=L&&!!T.clearcoatMap,Gt=L&&!!T.clearcoatNormalMap,re=L&&!!T.clearcoatRoughnessMap,he=Q&&!!T.iridescenceMap,At=Q&&!!T.iridescenceThicknessMap,Lt=Mt&&!!T.sheenColorMap,Zt=Mt&&!!T.sheenRoughnessMap,Wt=!!T.specularMap,qt=!!T.specularColorMap,_e=!!T.specularIntensityMap,j=Ct&&!!T.transmissionMap,kt=Ct&&!!T.thicknessMap,Vt=!!T.gradientMap,ne=!!T.alphaMap,It=T.alphaTest>0,vt=!!T.alphaHash,Ht=!!T.extensions;let me=Ra;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(me=r.toneMapping);const Le={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:yt,fragmentShader:Pt,defines:T.defines,customVertexShaderID:$t,customFragmentShaderID:st,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:zt,instancingColor:zt&&Y.instanceColor!==null,instancingMorph:zt&&Y.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:mo,alphaToCoverage:!!T.alphaToCoverage,map:le,matcap:cn,envMap:Ee,envMapMode:Ee&&B.mapping,envMapCubeUVHeight:ht,aoMap:Se,lightMap:Fe,bumpMap:ge,normalMap:Ce,displacementMap:V,emissiveMap:sn,normalMapObjectSpace:Ce&&T.normalMapType===Ty,normalMapTangentSpace:Ce&&T.normalMapType===cx,metalnessMap:we,roughnessMap:Be,anisotropy:se,anisotropyMap:xt,clearcoat:L,clearcoatMap:ee,clearcoatNormalMap:Gt,clearcoatRoughnessMap:re,dispersion:E,iridescence:Q,iridescenceMap:he,iridescenceThicknessMap:At,sheen:Mt,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:Wt,specularColorMap:qt,specularIntensityMap:_e,transmission:Ct,transmissionMap:j,thicknessMap:kt,gradientMap:Vt,opaque:T.transparent===!1&&T.blending===co&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:It,alphaHash:vt,combine:T.combine,mapUv:le&&b(T.map.channel),aoMapUv:Se&&b(T.aoMap.channel),lightMapUv:Fe&&b(T.lightMap.channel),bumpMapUv:ge&&b(T.bumpMap.channel),normalMapUv:Ce&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:sn&&b(T.emissiveMap.channel),metalnessMapUv:we&&b(T.metalnessMap.channel),roughnessMapUv:Be&&b(T.roughnessMap.channel),anisotropyMapUv:xt&&b(T.anisotropyMap.channel),clearcoatMapUv:ee&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(T.sheenRoughnessMap.channel),specularMapUv:Wt&&b(T.specularMap.channel),specularColorMapUv:qt&&b(T.specularColorMap.channel),specularIntensityMapUv:_e&&b(T.specularIntensityMap.channel),transmissionMapUv:j&&b(T.transmissionMap.channel),thicknessMapUv:kt&&b(T.thicknessMap.channel),alphaMapUv:ne&&b(T.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ce||se),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ft.attributes.uv&&(le||ne),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ft.attributes.normal===void 0&&Ce===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ut,skinning:Y.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&rt.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:le&&T.map.isVideoTexture===!0&&We.getTransfer(T.map.colorSpace)===an,decodeVideoTextureEmissive:sn&&T.emissiveMap.isVideoTexture===!0&&We.getTransfer(T.emissiveMap.colorSpace)===an,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===es,flipSided:T.side===Ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ht&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Le.vertexUv1s=m.has(1),Le.vertexUv2s=m.has(2),Le.vertexUv3s=m.has(3),m.clear(),Le}function S(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const rt in T.defines)C.push(rt),C.push(T.defines[rt]);return T.isRawShaderMaterial===!1&&(x(C,T),D(C,T),C.push(r.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function x(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function D(T,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),T.push(d.mask)}function N(T){const C=y[T.type];let rt;if(C){const F=Ea[C];rt=cE.clone(F.uniforms)}else rt=T.uniforms;return rt}function U(T,C){let rt=_.get(C);return rt!==void 0?++rt.usedTimes:(rt=new FA(r,C,T,l),h.push(rt),_.set(C,rt)),rt}function k(T){if(--T.usedTimes===0){const C=h.indexOf(T);h[C]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function G(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:N,acquireProgram:U,releaseProgram:k,releaseShaderCache:z,programs:h,dispose:G}}function VA(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function kA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function vv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,w,S,x){let D=r[t];return D===void 0?(D={id:g.id,object:g,geometry:y,material:b,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:x},r[t]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=b,D.materialVariant=d(g),D.groupOrder=w,D.renderOrder=g.renderOrder,D.z=S,D.group=x),t++,D}function m(g,y,b,w,S,x){const D=p(g,y,b,w,S,x);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function h(g,y,b,w,S,x){const D=p(g,y,b,w,S,x);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function _(g,y){i.length>1&&i.sort(g||kA),s.length>1&&s.sort(y||vv),l.length>1&&l.sort(y||vv)}function M(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:M,sort:_}}function XA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new xv,r.set(s,[d])):l>=c.length?(d=new xv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function WA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ct,color:new qe};break;case"SpotLight":i={position:new ct,direction:new ct,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return r[t.id]=i,i}}}function qA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let YA=0;function jA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ZA(r){const t=new WA,i=qA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ct);const l=new ct,c=new En,d=new En;function p(h){let _=0,M=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,w=0,S=0,x=0,D=0,N=0,U=0,k=0,z=0,G=0;h.sort(jA);for(let C=0,rt=h.length;C<rt;C++){const F=h[C],Y=F.color,$=F.intensity,ft=F.distance;let K=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===po?K=F.shadow.map.texture:K=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=Y.r*$,M+=Y.g*$,g+=Y.b*$;else if(F.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(F.sh.coefficients[P],$);G++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,ht=i.get(F);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,s.directionalShadow[y]=ht,s.directionalShadowMap[y]=K,s.directionalShadowMatrix[y]=F.shadow.matrix,D++}s.directional[y]=P,y++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(Y).multiplyScalar($),P.distance=ft,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,s.spot[w]=P;const B=F.shadow;if(F.map&&(s.spotLightMap[k]=F.map,k++,B.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[w]=B.matrix,F.castShadow){const ht=i.get(F);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,s.spotShadow[w]=ht,s.spotShadowMap[w]=K,U++}w++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(Y).multiplyScalar($),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=P,S++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const B=F.shadow,ht=i.get(F);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,ht.shadowCameraNear=B.camera.near,ht.shadowCameraFar=B.camera.far,s.pointShadow[b]=ht,s.pointShadowMap[b]=K,s.pointShadowMatrix[b]=F.shadow.matrix,N++}s.point[b]=P,b++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar($),P.groundColor.copy(F.groundColor).multiplyScalar($),s.hemi[x]=P,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=te.LTC_FLOAT_1,s.rectAreaLTC2=te.LTC_FLOAT_2):(s.rectAreaLTC1=te.LTC_HALF_1,s.rectAreaLTC2=te.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=M,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==D||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==k||T.numLightProbes!==G)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+k-z,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=G,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=D,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=k,T.numLightProbes=G,s.version=YA++)}function m(h,_){let M=0,g=0,y=0,b=0,w=0;const S=_.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const N=h[x];if(N.isDirectionalLight){const U=s.directional[M];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),d.identity(),c.copy(N.matrixWorld),c.premultiply(S),d.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),g++}else if(N.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:s}}function Mv(r){const t=new ZA(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function p(){t.setup(i)}function m(_){t.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function KA(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Mv(r),t.set(l,[p])):c>=d.length?(p=new Mv(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$A=[new ct(1,0,0),new ct(-1,0,0),new ct(0,1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1)],t2=[new ct(0,-1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,-1,0),new ct(0,-1,0)],Sv=new En,pl=new ct,mh=new ct;function e2(r,t,i){let s=new Op;const l=new Qe,c=new Qe,d=new yn,p=new hE,m=new pE,h={},_=i.maxTextureSize,M={[Gs]:Ai,[Ai]:Gs,[es]:es},g=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new ta;b.setAttribute("position",new wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $e(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let x=this.type;this.render=function(z,G,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===ny&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=du);const C=r.getRenderTarget(),rt=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(is),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=x!==this.type;$&&G.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(K=>K.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,K=z.length;ft<K;ft++){const P=z[ft],B=P.shadow;if(B===void 0){Te("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ht=B.getFrameExtents();l.multiply(ht),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ht.x),l.x=c.x*ht.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ht.y),l.y=c.y*ht.y,B.mapSize.y=c.y));const St=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=St,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===gl){if(P.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ca(l.x,l.y,{format:po,type:ss,minFilter:ri,magFilter:ri,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new yl(l.x,l.y,Ta),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=rs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$n,B.map.depthTexture.magFilter=$n}else P.isPointLight?(B.map=new Ex(l.x),B.map.depthTexture=new oE(l.x,Da)):(B.map=new Ca(l.x,l.y),B.map.depthTexture=new yl(l.x,l.y,Da)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=rs,this.type===du?(B.map.depthTexture.compareFunction=St?Dp:wp,B.map.depthTexture.minFilter=ri,B.map.depthTexture.magFilter=ri):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$n,B.map.depthTexture.magFilter=$n);B.camera.updateProjectionMatrix()}const Ot=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Ot;I++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,I),r.clear();else{I===0&&(r.setRenderTarget(B.map),r.clear());const J=B.getViewport(I);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Y.viewport(d)}if(P.isPointLight){const J=B.camera,yt=B.matrix,Pt=P.distance||J.far;Pt!==J.far&&(J.far=Pt,J.updateProjectionMatrix()),pl.setFromMatrixPosition(P.matrixWorld),J.position.copy(pl),mh.copy(J.position),mh.add($A[I]),J.up.copy(t2[I]),J.lookAt(mh),J.updateMatrixWorld(),yt.makeTranslation(-pl.x,-pl.y,-pl.z),Sv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Sv,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices(P);s=B.getFrustum(),U(G,T,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===gl&&D(B,T),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(C,rt,F)};function D(z,G){const T=t.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ca(l.x,l.y,{format:po,type:ss})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(G,null,T,g,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(G,null,T,y,w,null)}function N(z,G,T,C){let rt=null;const F=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)rt=F;else if(rt=T.isPointLight===!0?m:p,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const Y=rt.uuid,$=G.uuid;let ft=h[Y];ft===void 0&&(ft={},h[Y]=ft);let K=ft[$];K===void 0&&(K=rt.clone(),ft[$]=K,G.addEventListener("dispose",k)),rt=K}if(rt.visible=G.visible,rt.wireframe=G.wireframe,C===gl?rt.side=G.shadowSide!==null?G.shadowSide:G.side:rt.side=G.shadowSide!==null?G.shadowSide:M[G.side],rt.alphaMap=G.alphaMap,rt.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,rt.map=G.map,rt.clipShadows=G.clipShadows,rt.clippingPlanes=G.clippingPlanes,rt.clipIntersection=G.clipIntersection,rt.displacementMap=G.displacementMap,rt.displacementScale=G.displacementScale,rt.displacementBias=G.displacementBias,rt.wireframeLinewidth=G.wireframeLinewidth,rt.linewidth=G.linewidth,T.isPointLight===!0&&rt.isMeshDistanceMaterial===!0){const Y=r.properties.get(rt);Y.light=T}return rt}function U(z,G,T,C,rt){if(z.visible===!1)return;if(z.layers.test(G.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&rt===gl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const $=t.update(z),ft=z.material;if(Array.isArray(ft)){const K=$.groups;for(let P=0,B=K.length;P<B;P++){const ht=K[P],St=ft[ht.materialIndex];if(St&&St.visible){const Ot=N(z,St,C,rt);z.onBeforeShadow(r,z,G,T,$,Ot,ht),r.renderBufferDirect(T,null,$,Ot,z,ht),z.onAfterShadow(r,z,G,T,$,Ot,ht)}}}else if(ft.visible){const K=N(z,ft,C,rt);z.onBeforeShadow(r,z,G,T,$,K,null),r.renderBufferDirect(T,null,$,K,z,null),z.onAfterShadow(r,z,G,T,$,K,null)}}const Y=z.children;for(let $=0,ft=Y.length;$<ft;$++)U(Y[$],G,T,C,rt)}function k(z){z.target.removeEventListener("dispose",k);for(const T in h){const C=h[T],rt=z.target.uuid;rt in C&&(C[rt].dispose(),delete C[rt])}}}function n2(r,t){function i(){let j=!1;const kt=new yn;let Vt=null;const ne=new yn(0,0,0,0);return{setMask:function(It){Vt!==It&&!j&&(r.colorMask(It,It,It,It),Vt=It)},setLocked:function(It){j=It},setClear:function(It,vt,Ht,me,Le){Le===!0&&(It*=me,vt*=me,Ht*=me),kt.set(It,vt,Ht,me),ne.equals(kt)===!1&&(r.clearColor(It,vt,Ht,me),ne.copy(kt))},reset:function(){j=!1,Vt=null,ne.set(-1,0,0,0)}}}function s(){let j=!1,kt=!1,Vt=null,ne=null,It=null;return{setReversed:function(vt){if(kt!==vt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),kt=vt;const me=It;It=null,this.setClear(me)}},getReversed:function(){return kt},setTest:function(vt){vt?bt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(vt){Vt!==vt&&!j&&(r.depthMask(vt),Vt=vt)},setFunc:function(vt){if(kt&&(vt=Py[vt]),ne!==vt){switch(vt){case Rh:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case fo:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Nh:r.depthFunc(r.GREATER);break;case Lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=vt}},setLocked:function(vt){j=vt},setClear:function(vt){It!==vt&&(It=vt,kt&&(vt=1-vt),r.clearDepth(vt))},reset:function(){j=!1,Vt=null,ne=null,It=null,kt=!1}}}function l(){let j=!1,kt=null,Vt=null,ne=null,It=null,vt=null,Ht=null,me=null,Le=null;return{setTest:function(ye){j||(ye?bt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(ye){kt!==ye&&!j&&(r.stencilMask(ye),kt=ye)},setFunc:function(ye,xn,ti){(Vt!==ye||ne!==xn||It!==ti)&&(r.stencilFunc(ye,xn,ti),Vt=ye,ne=xn,It=ti)},setOp:function(ye,xn,ti){(vt!==ye||Ht!==xn||me!==ti)&&(r.stencilOp(ye,xn,ti),vt=ye,Ht=xn,me=ti)},setLocked:function(ye){j=ye},setClear:function(ye){Le!==ye&&(r.clearStencil(ye),Le=ye)},reset:function(){j=!1,kt=null,Vt=null,ne=null,It=null,vt=null,Ht=null,me=null,Le=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},M={},g=new WeakMap,y=[],b=null,w=!1,S=null,x=null,D=null,N=null,U=null,k=null,z=null,G=new qe(0,0,0),T=0,C=!1,rt=null,F=null,Y=null,$=null,ft=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,B=0;const ht=r.getParameter(r.VERSION);ht.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ht)[1]),P=B>=1):ht.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),P=B>=2);let St=null,Ot={};const I=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),yt=new yn().fromArray(I),Pt=new yn().fromArray(J);function $t(j,kt,Vt,ne){const It=new Uint8Array(4),vt=r.createTexture();r.bindTexture(j,vt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<Vt;Ht++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(kt,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(kt+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return vt}const st={};st[r.TEXTURE_2D]=$t(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=$t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=$t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=$t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),bt(r.DEPTH_TEST),d.setFunc(fo),ge(!1),Ce(T_),bt(r.CULL_FACE),Se(is);function bt(j){_[j]!==!0&&(r.enable(j),_[j]=!0)}function Ut(j){_[j]!==!1&&(r.disable(j),_[j]=!1)}function zt(j,kt){return M[j]!==kt?(r.bindFramebuffer(j,kt),M[j]=kt,j===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=kt),j===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=kt),!0):!1}function Qt(j,kt){let Vt=y,ne=!1;if(j){Vt=g.get(kt),Vt===void 0&&(Vt=[],g.set(kt,Vt));const It=j.textures;if(Vt.length!==It.length||Vt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Ht=It.length;vt<Ht;vt++)Vt[vt]=r.COLOR_ATTACHMENT0+vt;Vt.length=It.length,ne=!0}}else Vt[0]!==r.BACK&&(Vt[0]=r.BACK,ne=!0);ne&&r.drawBuffers(Vt)}function le(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const cn={[dr]:r.FUNC_ADD,[ay]:r.FUNC_SUBTRACT,[sy]:r.FUNC_REVERSE_SUBTRACT};cn[ry]=r.MIN,cn[oy]=r.MAX;const Ee={[ly]:r.ZERO,[cy]:r.ONE,[uy]:r.SRC_COLOR,[Th]:r.SRC_ALPHA,[gy]:r.SRC_ALPHA_SATURATE,[py]:r.DST_COLOR,[dy]:r.DST_ALPHA,[fy]:r.ONE_MINUS_SRC_COLOR,[Ah]:r.ONE_MINUS_SRC_ALPHA,[my]:r.ONE_MINUS_DST_COLOR,[hy]:r.ONE_MINUS_DST_ALPHA,[_y]:r.CONSTANT_COLOR,[vy]:r.ONE_MINUS_CONSTANT_COLOR,[xy]:r.CONSTANT_ALPHA,[My]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(j,kt,Vt,ne,It,vt,Ht,me,Le,ye){if(j===is){w===!0&&(Ut(r.BLEND),w=!1);return}if(w===!1&&(bt(r.BLEND),w=!0),j!==iy){if(j!==S||ye!==C){if((x!==dr||U!==dr)&&(r.blendEquation(r.FUNC_ADD),x=dr,U=dr),ye)switch(j){case co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFunc(r.ONE,r.ONE);break;case R_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ke("WebGLState: Invalid blending: ",j);break}else switch(j){case co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R_:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",j);break}D=null,N=null,k=null,z=null,G.set(0,0,0),T=0,S=j,C=ye}return}It=It||kt,vt=vt||Vt,Ht=Ht||ne,(kt!==x||It!==U)&&(r.blendEquationSeparate(cn[kt],cn[It]),x=kt,U=It),(Vt!==D||ne!==N||vt!==k||Ht!==z)&&(r.blendFuncSeparate(Ee[Vt],Ee[ne],Ee[vt],Ee[Ht]),D=Vt,N=ne,k=vt,z=Ht),(me.equals(G)===!1||Le!==T)&&(r.blendColor(me.r,me.g,me.b,Le),G.copy(me),T=Le),S=j,C=!1}function Fe(j,kt){j.side===es?Ut(r.CULL_FACE):bt(r.CULL_FACE);let Vt=j.side===Ai;kt&&(Vt=!Vt),ge(Vt),j.blending===co&&j.transparent===!1?Se(is):Se(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const ne=j.stencilWrite;p.setTest(ne),ne&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),sn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(j){rt!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),rt=j)}function Ce(j){j!==ty?(bt(r.CULL_FACE),j!==F&&(j===T_?r.cullFace(r.BACK):j===ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),F=j}function V(j){j!==Y&&(P&&r.lineWidth(j),Y=j)}function sn(j,kt,Vt){j?(bt(r.POLYGON_OFFSET_FILL),($!==kt||ft!==Vt)&&($=kt,ft=Vt,d.getReversed()&&(kt=-kt),r.polygonOffset(kt,Vt))):Ut(r.POLYGON_OFFSET_FILL)}function we(j){j?bt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function Be(j){j===void 0&&(j=r.TEXTURE0+K-1),St!==j&&(r.activeTexture(j),St=j)}function se(j,kt,Vt){Vt===void 0&&(St===null?Vt=r.TEXTURE0+K-1:Vt=St);let ne=Ot[Vt];ne===void 0&&(ne={type:void 0,texture:void 0},Ot[Vt]=ne),(ne.type!==j||ne.texture!==kt)&&(St!==Vt&&(r.activeTexture(Vt),St=Vt),r.bindTexture(j,kt||st[j]),ne.type=j,ne.texture=kt)}function L(){const j=Ot[St];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(j){Ke("WebGLState:",j)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(j){Ke("WebGLState:",j)}}function Mt(){try{r.texSubImage2D(...arguments)}catch(j){Ke("WebGLState:",j)}}function Ct(){try{r.texSubImage3D(...arguments)}catch(j){Ke("WebGLState:",j)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Ke("WebGLState:",j)}}function ee(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Ke("WebGLState:",j)}}function Gt(){try{r.texStorage2D(...arguments)}catch(j){Ke("WebGLState:",j)}}function re(){try{r.texStorage3D(...arguments)}catch(j){Ke("WebGLState:",j)}}function he(){try{r.texImage2D(...arguments)}catch(j){Ke("WebGLState:",j)}}function At(){try{r.texImage3D(...arguments)}catch(j){Ke("WebGLState:",j)}}function Lt(j){yt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),yt.copy(j))}function Zt(j){Pt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Pt.copy(j))}function Wt(j,kt){let Vt=h.get(kt);Vt===void 0&&(Vt=new WeakMap,h.set(kt,Vt));let ne=Vt.get(j);ne===void 0&&(ne=r.getUniformBlockIndex(kt,j.name),Vt.set(j,ne))}function qt(j,kt){const ne=h.get(kt).get(j);m.get(kt)!==ne&&(r.uniformBlockBinding(kt,ne,j.__bindingPointIndex),m.set(kt,ne))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},St=null,Ot={},M={},g=new WeakMap,y=[],b=null,w=!1,S=null,x=null,D=null,N=null,U=null,k=null,z=null,G=new qe(0,0,0),T=0,C=!1,rt=null,F=null,Y=null,$=null,ft=null,yt.set(0,0,r.canvas.width,r.canvas.height),Pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:bt,disable:Ut,bindFramebuffer:zt,drawBuffers:Qt,useProgram:le,setBlending:Se,setMaterial:Fe,setFlipSided:ge,setCullFace:Ce,setLineWidth:V,setPolygonOffset:sn,setScissorTest:we,activeTexture:Be,bindTexture:se,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:he,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:qt,texStorage2D:Gt,texStorage3D:re,texSubImage2D:Mt,texSubImage3D:Ct,compressedTexSubImage2D:xt,compressedTexSubImage3D:ee,scissor:Lt,viewport:Zt,reset:_e}}function i2(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Qe,_=new WeakMap;let M;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):Eu("canvas")}function w(L,E,Q){let Mt=1;const Ct=se(L);if((Ct.width>Q||Ct.height>Q)&&(Mt=Q/Math.max(Ct.width,Ct.height)),Mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xt=Math.floor(Mt*Ct.width),ee=Math.floor(Mt*Ct.height);M===void 0&&(M=b(xt,ee));const Gt=E?b(xt,ee):M;return Gt.width=xt,Gt.height=ee,Gt.getContext("2d").drawImage(L,0,0,xt,ee),Te("WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+xt+"x"+ee+")."),Gt}else return"data"in L&&Te("WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,Q,Mt,Ct=!1){if(L!==null){if(r[L]!==void 0)return r[L];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt=E;if(E===r.RED&&(Q===r.FLOAT&&(xt=r.R32F),Q===r.HALF_FLOAT&&(xt=r.R16F),Q===r.UNSIGNED_BYTE&&(xt=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.R8UI),Q===r.UNSIGNED_SHORT&&(xt=r.R16UI),Q===r.UNSIGNED_INT&&(xt=r.R32UI),Q===r.BYTE&&(xt=r.R8I),Q===r.SHORT&&(xt=r.R16I),Q===r.INT&&(xt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(xt=r.RG32F),Q===r.HALF_FLOAT&&(xt=r.RG16F),Q===r.UNSIGNED_BYTE&&(xt=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RG16UI),Q===r.UNSIGNED_INT&&(xt=r.RG32UI),Q===r.BYTE&&(xt=r.RG8I),Q===r.SHORT&&(xt=r.RG16I),Q===r.INT&&(xt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),Q===r.UNSIGNED_INT&&(xt=r.RGB32UI),Q===r.BYTE&&(xt=r.RGB8I),Q===r.SHORT&&(xt=r.RGB16I),Q===r.INT&&(xt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(xt=r.RGBA32UI),Q===r.BYTE&&(xt=r.RGBA8I),Q===r.SHORT&&(xt=r.RGBA16I),Q===r.INT&&(xt=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(xt=r.R11F_G11F_B10F)),E===r.RGBA){const ee=Ct?yu:We.getTransfer(Mt);Q===r.FLOAT&&(xt=r.RGBA32F),Q===r.HALF_FLOAT&&(xt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(xt=ee===an?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function U(L,E){let Q;return L?E===null||E===Da||E===Ml?Q=r.DEPTH24_STENCIL8:E===Ta?Q=r.DEPTH32F_STENCIL8:E===xl&&(Q=r.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Da||E===Ml?Q=r.DEPTH_COMPONENT24:E===Ta?Q=r.DEPTH_COMPONENT32F:E===xl&&(Q=r.DEPTH_COMPONENT16),Q}function k(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==$n&&L.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),T(E),E.isVideoTexture&&_.delete(E)}function G(L){const E=L.target;E.removeEventListener("dispose",G),rt(E)}function T(L){const E=s.get(L);if(E.__webglInit===void 0)return;const Q=L.source,Mt=g.get(Q);if(Mt){const Ct=Mt[E.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&C(L),Object.keys(Mt).length===0&&g.delete(Q)}s.remove(L)}function C(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const Q=L.source,Mt=g.get(Q);delete Mt[E.__cacheKey],d.memory.textures--}function rt(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(E.__webglFramebuffer[Mt]))for(let Ct=0;Ct<E.__webglFramebuffer[Mt].length;Ct++)r.deleteFramebuffer(E.__webglFramebuffer[Mt][Ct]);else r.deleteFramebuffer(E.__webglFramebuffer[Mt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let Mt=0;Mt<E.__webglFramebuffer.length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[Mt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Mt=0;Mt<E.__webglColorRenderbuffer.length;Mt++)E.__webglColorRenderbuffer[Mt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Mt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let Mt=0,Ct=Q.length;Mt<Ct;Mt++){const xt=s.get(Q[Mt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),d.memory.textures--),s.remove(Q[Mt])}s.remove(L)}let F=0;function Y(){F=0}function $(){const L=F;return L>=l.maxTextures&&Te("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function ft(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function K(L,E){const Q=s.get(L);if(L.isVideoTexture&&we(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const Mt=L.image;if(Mt===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{st(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function P(L,E){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){st(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function B(L,E){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){st(Q,L,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function ht(L,E){const Q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){bt(Q,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const St={[Oh]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[Ph]:r.MIRRORED_REPEAT},Ot={[$n]:r.NEAREST,[Ey]:r.NEAREST_MIPMAP_NEAREST,[Uc]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[Bd]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},I={[Ay]:r.NEVER,[Uy]:r.ALWAYS,[Ry]:r.LESS,[wp]:r.LEQUAL,[Cy]:r.EQUAL,[Dp]:r.GEQUAL,[wy]:r.GREATER,[Dy]:r.NOTEQUAL};function J(L,E){if(E.type===Ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Bd||E.magFilter===Uc||E.magFilter===pr||E.minFilter===ri||E.minFilter===Bd||E.minFilter===Uc||E.minFilter===pr)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,St[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,St[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,St[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Ot[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Ot[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$n||E.minFilter!==Uc&&E.minFilter!==pr||E.type===Ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const Mt=E.source;let Ct=g.get(Mt);Ct===void 0&&(Ct={},g.set(Mt,Ct));const xt=ft(E);if(xt!==L.__cacheKey){Ct[xt]===void 0&&(Ct[xt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Ct[xt].usedTimes++;const ee=Ct[L.__cacheKey];ee!==void 0&&(Ct[L.__cacheKey].usedTimes--,ee.usedTimes===0&&C(E)),L.__cacheKey=xt,L.__webglTexture=Ct[xt].texture}return Q}function Pt(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function $t(L,E,Q,Mt){const xt=L.updateRanges;if(xt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,Mt,E.data);else{xt.sort((At,Lt)=>At.start-Lt.start);let ee=0;for(let At=1;At<xt.length;At++){const Lt=xt[ee],Zt=xt[At],Wt=Lt.start+Lt.count,qt=Pt(Zt.start,E.width,4),_e=Pt(Lt.start,E.width,4);Zt.start<=Wt+1&&qt===_e&&Pt(Zt.start+Zt.count-1,E.width,4)===qt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++ee,xt[ee]=Zt)}xt.length=ee+1;const Gt=r.getParameter(r.UNPACK_ROW_LENGTH),re=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let At=0,Lt=xt.length;At<Lt;At++){const Zt=xt[At],Wt=Math.floor(Zt.start/4),qt=Math.ceil(Zt.count/4),_e=Wt%E.width,j=Math.floor(Wt/E.width),kt=qt,Vt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,_e,j,kt,Vt,Q,Mt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Gt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function st(L,E,Q){let Mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Mt=r.TEXTURE_3D);const Ct=yt(L,E),xt=E.source;i.bindTexture(Mt,L.__webglTexture,r.TEXTURE0+Q);const ee=s.get(xt);if(xt.version!==ee.__version||Ct===!0){i.activeTexture(r.TEXTURE0+Q);const Gt=We.getPrimaries(We.workingColorSpace),re=E.colorSpace===zs?null:We.getPrimaries(E.colorSpace),he=E.colorSpace===zs||Gt===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let At=w(E.image,!1,l.maxTextureSize);At=Be(E,At);const Lt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Wt=N(E.internalFormat,Lt,Zt,E.colorSpace,E.isVideoTexture);J(Mt,E);let qt;const _e=E.mipmaps,j=E.isVideoTexture!==!0,kt=ee.__version===void 0||Ct===!0,Vt=xt.dataReady,ne=k(E,At);if(E.isDepthTexture)Wt=U(E.format===mr,E.type),kt&&(j?i.texStorage2D(r.TEXTURE_2D,1,Wt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,Lt,Zt,null));else if(E.isDataTexture)if(_e.length>0){j&&kt&&i.texStorage2D(r.TEXTURE_2D,ne,Wt,_e[0].width,_e[0].height);for(let It=0,vt=_e.length;It<vt;It++)qt=_e[It],j?Vt&&i.texSubImage2D(r.TEXTURE_2D,It,0,0,qt.width,qt.height,Lt,Zt,qt.data):i.texImage2D(r.TEXTURE_2D,It,Wt,qt.width,qt.height,0,Lt,Zt,qt.data);E.generateMipmaps=!1}else j?(kt&&i.texStorage2D(r.TEXTURE_2D,ne,Wt,At.width,At.height),Vt&&$t(E,At,Lt,Zt)):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,Lt,Zt,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&kt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Wt,_e[0].width,_e[0].height,At.depth);for(let It=0,vt=_e.length;It<vt;It++)if(qt=_e[It],E.format!==fa)if(Lt!==null)if(j){if(Vt)if(E.layerUpdates.size>0){const Ht=J_(qt.width,qt.height,E.format,E.type);for(const me of E.layerUpdates){const Le=qt.data.subarray(me*Ht/qt.data.BYTES_PER_ELEMENT,(me+1)*Ht/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,It,0,0,me,qt.width,qt.height,1,Lt,Le)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,It,0,0,0,qt.width,qt.height,At.depth,Lt,qt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,It,Wt,qt.width,qt.height,At.depth,0,qt.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Vt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,It,0,0,0,qt.width,qt.height,At.depth,Lt,Zt,qt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,It,Wt,qt.width,qt.height,At.depth,0,Lt,Zt,qt.data)}else{j&&kt&&i.texStorage2D(r.TEXTURE_2D,ne,Wt,_e[0].width,_e[0].height);for(let It=0,vt=_e.length;It<vt;It++)qt=_e[It],E.format!==fa?Lt!==null?j?Vt&&i.compressedTexSubImage2D(r.TEXTURE_2D,It,0,0,qt.width,qt.height,Lt,qt.data):i.compressedTexImage2D(r.TEXTURE_2D,It,Wt,qt.width,qt.height,0,qt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Vt&&i.texSubImage2D(r.TEXTURE_2D,It,0,0,qt.width,qt.height,Lt,Zt,qt.data):i.texImage2D(r.TEXTURE_2D,It,Wt,qt.width,qt.height,0,Lt,Zt,qt.data)}else if(E.isDataArrayTexture)if(j){if(kt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Wt,At.width,At.height,At.depth),Vt)if(E.layerUpdates.size>0){const It=J_(At.width,At.height,E.format,E.type);for(const vt of E.layerUpdates){const Ht=At.data.subarray(vt*It/At.data.BYTES_PER_ELEMENT,(vt+1)*It/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Lt,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Lt,Zt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,Lt,Zt,At.data);else if(E.isData3DTexture)j?(kt&&i.texStorage3D(r.TEXTURE_3D,ne,Wt,At.width,At.height,At.depth),Vt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Lt,Zt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,Lt,Zt,At.data);else if(E.isFramebufferTexture){if(kt)if(j)i.texStorage2D(r.TEXTURE_2D,ne,Wt,At.width,At.height);else{let It=At.width,vt=At.height;for(let Ht=0;Ht<ne;Ht++)i.texImage2D(r.TEXTURE_2D,Ht,Wt,It,vt,0,Lt,Zt,null),It>>=1,vt>>=1}}else if(_e.length>0){if(j&&kt){const It=se(_e[0]);i.texStorage2D(r.TEXTURE_2D,ne,Wt,It.width,It.height)}for(let It=0,vt=_e.length;It<vt;It++)qt=_e[It],j?Vt&&i.texSubImage2D(r.TEXTURE_2D,It,0,0,Lt,Zt,qt):i.texImage2D(r.TEXTURE_2D,It,Wt,Lt,Zt,qt);E.generateMipmaps=!1}else if(j){if(kt){const It=se(At);i.texStorage2D(r.TEXTURE_2D,ne,Wt,It.width,It.height)}Vt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Zt,At)}else i.texImage2D(r.TEXTURE_2D,0,Wt,Lt,Zt,At);S(E)&&x(Mt),ee.__version=xt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,Q){if(E.image.length!==6)return;const Mt=yt(L,E),Ct=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const xt=s.get(Ct);if(Ct.version!==xt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Q);const ee=We.getPrimaries(We.workingColorSpace),Gt=E.colorSpace===zs?null:We.getPrimaries(E.colorSpace),re=E.colorSpace===zs||ee===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!he&&!At?Lt[vt]=w(E.image[vt],!0,l.maxCubemapSize):Lt[vt]=At?E.image[vt].image:E.image[vt],Lt[vt]=Be(E,Lt[vt]);const Zt=Lt[0],Wt=c.convert(E.format,E.colorSpace),qt=c.convert(E.type),_e=N(E.internalFormat,Wt,qt,E.colorSpace),j=E.isVideoTexture!==!0,kt=xt.__version===void 0||Mt===!0,Vt=Ct.dataReady;let ne=k(E,Zt);J(r.TEXTURE_CUBE_MAP,E);let It;if(he){j&&kt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,_e,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){It=Lt[vt].mipmaps;for(let Ht=0;Ht<It.length;Ht++){const me=It[Ht];E.format!==fa?Wt!==null?j?Vt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,me.width,me.height,Wt,me.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,_e,me.width,me.height,0,me.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,me.width,me.height,Wt,qt,me.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,_e,me.width,me.height,0,Wt,qt,me.data)}}}else{if(It=E.mipmaps,j&&kt){It.length>0&&ne++;const vt=se(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,_e,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){j?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,Wt,qt,Lt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_e,Lt[vt].width,Lt[vt].height,0,Wt,qt,Lt[vt].data);for(let Ht=0;Ht<It.length;Ht++){const Le=It[Ht].image[vt].image;j?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Le.width,Le.height,Wt,qt,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,_e,Le.width,Le.height,0,Wt,qt,Le.data)}}else{j?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,qt,Lt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_e,Wt,qt,Lt[vt]);for(let Ht=0;Ht<It.length;Ht++){const me=It[Ht];j?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Wt,qt,me.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,_e,Wt,qt,me.image[vt])}}}S(E)&&x(r.TEXTURE_CUBE_MAP),xt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ut(L,E,Q,Mt,Ct,xt){const ee=c.convert(Q.format,Q.colorSpace),Gt=c.convert(Q.type),re=N(Q.internalFormat,ee,Gt,Q.colorSpace),he=s.get(E),At=s.get(Q);if(At.__renderTarget=E,!he.__hasExternalTextures){const Lt=Math.max(1,E.width>>xt),Zt=Math.max(1,E.height>>xt);Ct===r.TEXTURE_3D||Ct===r.TEXTURE_2D_ARRAY?i.texImage3D(Ct,xt,re,Lt,Zt,E.depth,0,ee,Gt,null):i.texImage2D(Ct,xt,re,Lt,Zt,0,ee,Gt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,Ct,At.__webglTexture,0,V(E)):(Ct===r.TEXTURE_2D||Ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Mt,Ct,At.__webglTexture,xt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(L,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const Mt=E.depthTexture,Ct=Mt&&Mt.isDepthTexture?Mt.type:null,xt=U(E.stencilBuffer,Ct),ee=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),xt,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,L)}else{const Mt=E.textures;for(let Ct=0;Ct<Mt.length;Ct++){const xt=Mt[Ct],ee=c.convert(xt.format,xt.colorSpace),Gt=c.convert(xt.type),re=N(xt.internalFormat,ee,Gt,xt.colorSpace);sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),re,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,re,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(L,E,Q){const Mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ct=s.get(E.depthTexture);if(Ct.__renderTarget=E,(!Ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Mt){if(Ct.__webglInit===void 0&&(Ct.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Ct.__webglTexture===void 0){Ct.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ct.__webglTexture),J(r.TEXTURE_CUBE_MAP,E.depthTexture);const he=c.convert(E.depthTexture.format),At=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===rs?Lt=r.DEPTH_COMPONENT24:E.depthTexture.format===mr&&(Lt=r.DEPTH24_STENCIL8);for(let Zt=0;Zt<6;Zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Lt,E.width,E.height,0,he,At,null)}}else K(E.depthTexture,0);const xt=Ct.__webglTexture,ee=V(E),Gt=Mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,re=E.depthTexture.format===mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===rs)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Gt,xt,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,re,Gt,xt,0);else if(E.depthTexture.format===mr)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Gt,xt,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,re,Gt,xt,0);else throw new Error("Unknown depthTexture format")}function le(L){const E=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Mt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Mt){const Ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Mt.removeEventListener("dispose",Ct)};Mt.addEventListener("dispose",Ct),E.__depthDisposeCallback=Ct}E.__boundDepthTexture=Mt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let Mt=0;Mt<6;Mt++)Qt(E.__webglFramebuffer[Mt],L,Mt);else{const Mt=L.texture.mipmaps;Mt&&Mt.length>0?Qt(E.__webglFramebuffer[0],L,0):Qt(E.__webglFramebuffer,L,0)}else if(Q){E.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Mt]),E.__webglDepthbuffer[Mt]===void 0)E.__webglDepthbuffer[Mt]=r.createRenderbuffer(),zt(E.__webglDepthbuffer[Mt],L,!1);else{const Ct=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[Mt];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,xt)}}else{const Mt=L.texture.mipmaps;if(Mt&&Mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),zt(E.__webglDepthbuffer,L,!1);else{const Ct=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,xt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function cn(L,E,Q){const Mt=s.get(L);E!==void 0&&Ut(Mt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&le(L)}function Ee(L){const E=L.texture,Q=s.get(L),Mt=s.get(E);L.addEventListener("dispose",G);const Ct=L.textures,xt=L.isWebGLCubeRenderTarget===!0,ee=Ct.length>1;if(ee||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture()),Mt.__version=E.version,d.memory.textures++),xt){Q.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Gt]=[];for(let re=0;re<E.mipmaps.length;re++)Q.__webglFramebuffer[Gt][re]=r.createFramebuffer()}else Q.__webglFramebuffer[Gt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)Q.__webglFramebuffer[Gt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(ee)for(let Gt=0,re=Ct.length;Gt<re;Gt++){const he=s.get(Ct[Gt]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&sn(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Ct.length;Gt++){const re=Ct[Gt];Q.__webglColorRenderbuffer[Gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Gt]);const he=c.convert(re.format,re.colorSpace),At=c.convert(re.type),Lt=N(re.internalFormat,he,At,re.colorSpace,L.isXRRenderTarget===!0),Zt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Lt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),J(r.TEXTURE_CUBE_MAP,E);for(let Gt=0;Gt<6;Gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Ut(Q.__webglFramebuffer[Gt][re],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,re);else Ut(Q.__webglFramebuffer[Gt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);S(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let Gt=0,re=Ct.length;Gt<re;Gt++){const he=Ct[Gt],At=s.get(he);let Lt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,At.__webglTexture),J(Lt,he),Ut(Q.__webglFramebuffer,L,he,r.COLOR_ATTACHMENT0+Gt,Lt,0),S(he)&&x(Lt)}i.unbindTexture()}else{let Gt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Gt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Mt.__webglTexture),J(Gt,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Ut(Q.__webglFramebuffer[re],L,E,r.COLOR_ATTACHMENT0,Gt,re);else Ut(Q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Gt,0);S(E)&&x(Gt),i.unbindTexture()}L.depthBuffer&&le(L)}function Se(L){const E=L.textures;for(let Q=0,Mt=E.length;Q<Mt;Q++){const Ct=E[Q];if(S(Ct)){const xt=D(L),ee=s.get(Ct).__webglTexture;i.bindTexture(xt,ee),x(xt),i.unbindTexture()}}}const Fe=[],ge=[];function Ce(L){if(L.samples>0){if(sn(L)===!1){const E=L.textures,Q=L.width,Mt=L.height;let Ct=r.COLOR_BUFFER_BIT;const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=s.get(L),Gt=E.length>1;if(Gt)for(let he=0;he<E.length;he++)i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const re=L.texture.mipmaps;re&&re.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let he=0;he<E.length;he++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ct|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ct|=r.STENCIL_BUFFER_BIT)),Gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const At=s.get(E[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,Q,Mt,0,0,Q,Mt,Ct,r.NEAREST),m===!0&&(Fe.length=0,ge.length=0,Fe.push(r.COLOR_ATTACHMENT0+he),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Fe.push(xt),ge.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Gt)for(let he=0;he<E.length;he++){i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const At=s.get(E[he]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function sn(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(L){const E=d.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Be(L,E){const Q=L.colorSpace,Mt=L.format,Ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==mo&&Q!==zs&&(We.getTransfer(Q)===an?(Mt!==fa||Ct!==zi)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",Q)),E}function se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=P,this.setTexture3D=B,this.setTextureCube=ht,this.rebindTextures=cn,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a2(r,t){function i(s,l=zs){let c;const d=We.getTransfer(l);if(s===zi)return r.UNSIGNED_BYTE;if(s===bp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Tp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ax)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===sx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===nx)return r.BYTE;if(s===ix)return r.SHORT;if(s===xl)return r.UNSIGNED_SHORT;if(s===Ep)return r.INT;if(s===Da)return r.UNSIGNED_INT;if(s===Ta)return r.FLOAT;if(s===ss)return r.HALF_FLOAT;if(s===rx)return r.ALPHA;if(s===ox)return r.RGB;if(s===fa)return r.RGBA;if(s===rs)return r.DEPTH_COMPONENT;if(s===mr)return r.DEPTH_STENCIL;if(s===lx)return r.RED;if(s===Ap)return r.RED_INTEGER;if(s===po)return r.RG;if(s===Rp)return r.RG_INTEGER;if(s===Cp)return r.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(d===an)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ih||s===Fh||s===Bh||s===zh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hh||s===Gh)return d===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kh)return c.COMPRESSED_R11_EAC;if(s===Xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wh)return c.COMPRESSED_RG11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tp)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ap)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===op||s===lp||s===cp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===op)return d===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===fp||s===dp||s===hp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===up)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const s2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
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

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new vx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Na({vertexShader:s2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $e(new gr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends _o{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,M=null,g=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",S=new o2,x={},D=i.getContextAttributes();let N=null,U=null;const k=[],z=[],G=new Qe;let T=null;const C=new $i;C.viewport=new yn;const rt=new $i;rt.viewport=new yn;const F=[C,rt],Y=new ME;let $=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let bt=k[st];return bt===void 0&&(bt=new qd,k[st]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(st){let bt=k[st];return bt===void 0&&(bt=new qd,k[st]=bt),bt.getGripSpace()},this.getHand=function(st){let bt=k[st];return bt===void 0&&(bt=new qd,k[st]=bt),bt.getHandSpace()};function K(st){const bt=z.indexOf(st.inputSource);if(bt===-1)return;const Ut=k[bt];Ut!==void 0&&(Ut.update(st.inputSource,st.frame,h||d),Ut.dispatchEvent({type:st.type,data:st.inputSource}))}function P(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let st=0;st<k.length;st++){const bt=z[st];bt!==null&&(z[st]=null,k[st].disconnect(bt))}$=null,ft=null,S.reset();for(const st in x)delete x[st];t.setRenderTarget(N),y=null,g=null,M=null,l=null,U=null,$t.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){p=st,s.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(st){h=st},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return M===null&&w&&(M=new XRWebGLBinding(l,i)),M},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(G),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,zt=null,Qt=null;D.depth&&(Qt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=D.stencil?mr:rs,zt=D.stencil?Ml:Da);const le={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:c};M=this.getBinding(),g=M.createProjectionLayer(le),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Ca(g.textureWidth,g.textureHeight,{format:fa,type:zi,depthTexture:new yl(g.textureWidth,g.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ut={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ca(y.framebufferWidth,y.framebufferHeight,{format:fa,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),$t.setContext(l),$t.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(st){for(let bt=0;bt<st.removed.length;bt++){const Ut=st.removed[bt],zt=z.indexOf(Ut);zt>=0&&(z[zt]=null,k[zt].disconnect(Ut))}for(let bt=0;bt<st.added.length;bt++){const Ut=st.added[bt];let zt=z.indexOf(Ut);if(zt===-1){for(let le=0;le<k.length;le++)if(le>=z.length){z.push(Ut),zt=le;break}else if(z[le]===null){z[le]=Ut,zt=le;break}if(zt===-1)break}const Qt=k[zt];Qt&&Qt.connect(Ut)}}const ht=new ct,St=new ct;function Ot(st,bt,Ut){ht.setFromMatrixPosition(bt.matrixWorld),St.setFromMatrixPosition(Ut.matrixWorld);const zt=ht.distanceTo(St),Qt=bt.projectionMatrix.elements,le=Ut.projectionMatrix.elements,cn=Qt[14]/(Qt[10]-1),Ee=Qt[14]/(Qt[10]+1),Se=(Qt[9]+1)/Qt[5],Fe=(Qt[9]-1)/Qt[5],ge=(Qt[8]-1)/Qt[0],Ce=(le[8]+1)/le[0],V=cn*ge,sn=cn*Ce,we=zt/(-ge+Ce),Be=we*-ge;if(bt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Be),st.translateZ(we),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Qt[10]===-1)st.projectionMatrix.copy(bt.projectionMatrix),st.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const se=cn+we,L=Ee+we,E=V-Be,Q=sn+(zt-Be),Mt=Se*Ee/L*se,Ct=Fe*Ee/L*se;st.projectionMatrix.makePerspective(E,Q,Mt,Ct,se,L),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function I(st,bt){bt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(bt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let bt=st.near,Ut=st.far;S.texture!==null&&(S.depthNear>0&&(bt=S.depthNear),S.depthFar>0&&(Ut=S.depthFar)),Y.near=rt.near=C.near=bt,Y.far=rt.far=C.far=Ut,($!==Y.near||ft!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),$=Y.near,ft=Y.far),Y.layers.mask=st.layers.mask|6,C.layers.mask=Y.layers.mask&-5,rt.layers.mask=Y.layers.mask&-3;const zt=st.parent,Qt=Y.cameras;I(Y,zt);for(let le=0;le<Qt.length;le++)I(Qt[le],zt);Qt.length===2?Ot(Y,C,rt):Y.projectionMatrix.copy(C.projectionMatrix),J(st,Y,zt)};function J(st,bt,Ut){Ut===null?st.matrix.copy(bt.matrixWorld):(st.matrix.copy(Ut.matrixWorld),st.matrix.invert(),st.matrix.multiply(bt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(bt.projectionMatrix),st.projectionMatrixInverse.copy(bt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=pp*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(st){m=st,g!==null&&(g.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(st){return x[st]};let yt=null;function Pt(st,bt){if(_=bt.getViewerPose(h||d),b=bt,_!==null){const Ut=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let zt=!1;Ut.length!==Y.cameras.length&&(Y.cameras.length=0,zt=!0);for(let Ee=0;Ee<Ut.length;Ee++){const Se=Ut[Ee];let Fe=null;if(y!==null)Fe=y.getViewport(Se);else{const Ce=M.getViewSubImage(g,Se);Fe=Ce.viewport,Ee===0&&(t.setRenderTargetTextures(U,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(U))}let ge=F[Ee];ge===void 0&&(ge=new $i,ge.layers.enable(Ee),ge.viewport=new yn,F[Ee]=ge),ge.matrix.fromArray(Se.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Se.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ee===0&&(Y.matrix.copy(ge.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),zt===!0&&Y.cameras.push(ge)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){M=s.getBinding();const Ee=M.getDepthInformation(Ut[0]);Ee&&Ee.isValid&&Ee.texture&&S.init(Ee,l.renderState)}if(Qt&&Qt.includes("camera-access")&&w){t.state.unbindTexture(),M=s.getBinding();for(let Ee=0;Ee<Ut.length;Ee++){const Se=Ut[Ee].camera;if(Se){let Fe=x[Se];Fe||(Fe=new vx,x[Se]=Fe);const ge=M.getCameraImage(Se);Fe.sourceTexture=ge}}}}for(let Ut=0;Ut<k.length;Ut++){const zt=z[Ut],Qt=k[Ut];zt!==null&&Qt!==void 0&&Qt.update(zt,bt,h||d)}yt&&yt(st,bt),bt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:bt}),b=null}const $t=new yx;$t.setAnimationLoop(Pt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const ur=new Ua,c2=new En;function u2(r,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,xx(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,D,N,U){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),M(S,x)):x.isMeshPhongMaterial?(c(S,x),_(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,U)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),w(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,D,N):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Ai&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Ai&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=t.get(x),N=D.envMap,U=D.envMapRotation;N&&(S.envMap.value=N,ur.copy(U),ur.x*=-1,ur.y*=-1,ur.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),S.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(ur)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,D,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=N*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function M(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ai&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const D=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function f2(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;s.uniformBlockBinding(D,U)}function h(D,N){let U=l[D.id];U===void 0&&(b(D),U=_(D),l[D.id]=U,D.addEventListener("dispose",S));const k=N.program;s.updateUBOMapping(D,k);const z=t.render.frame;c[D.id]!==z&&(g(D),c[D.id]=z)}function _(D){const N=M();D.__bindingPointIndex=N;const U=r.createBuffer(),k=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,k,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function M(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const N=l[D.id],U=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,G=U.length;z<G;z++){const T=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,rt=T.length;C<rt;C++){const F=T[C];if(y(F,z,C,k)===!0){const Y=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let K=0;K<$.length;K++){const P=$[K],B=w(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Y+ft,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,ft),ft+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,N,U,k){const z=D.value,G=N+"_"+U;if(k[G]===void 0)return typeof z=="number"||typeof z=="boolean"?k[G]=z:k[G]=z.clone(),!0;{const T=k[G];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return k[G]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function b(D){const N=D.uniforms;let U=0;const k=16;for(let G=0,T=N.length;G<T;G++){const C=Array.isArray(N[G])?N[G]:[N[G]];for(let rt=0,F=C.length;rt<F;rt++){const Y=C[rt],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let ft=0,K=$.length;ft<K;ft++){const P=$[ft],B=w(P),ht=U%k,St=ht%B.boundary,Ot=ht+St;U+=St,Ot!==0&&k-Ot<B.storage&&(U+=k-Ot),Y.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=B.storage}}}const z=U%k;return z>0&&(U+=k-z),D.__size=U,D.__cache={},this}function w(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Te("WebGLRenderer: Unsupported uniform value type.",D),N}function S(D){const N=D.target;N.removeEventListener("dispose",S);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function h2(){return Sa===null&&(Sa=new iE(d2,16,16,po,ss),Sa.name="DFG_LUT",Sa.minFilter=ri,Sa.magFilter=ri,Sa.wrapS=ns,Sa.wrapT=ns,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class p2{constructor(t={}){const{canvas:i=Ly(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:y=zi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=y,S=new Set([Cp,Rp,Ap]),x=new Set([zi,Da,xl,Ml,bp,Tp]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,k=null;const z=[],G=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let rt=!1;this._outputColorSpace=Ji;let F=0,Y=0,$=null,ft=-1,K=null;const P=new yn,B=new yn;let ht=null;const St=new qe(0);let Ot=0,I=i.width,J=i.height,yt=1,Pt=null,$t=null;const st=new yn(0,0,I,J),bt=new yn(0,0,I,J);let Ut=!1;const zt=new Op;let Qt=!1,le=!1;const cn=new En,Ee=new ct,Se=new yn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ce(){return $===null?yt:1}let V=s;function sn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sp}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",Le,!1),V===null){const W="webgl2";if(V=sn(W,A),V===null)throw sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ke("WebGLRenderer: "+A.message),A}let we,Be,se,L,E,Q,Mt,Ct,xt,ee,Gt,re,he,At,Lt,Zt,Wt,qt,_e,j,kt,Vt,ne;function It(){we=new p1(V),we.init(),kt=new a2(V,we),Be=new r1(V,we,t,kt),se=new n2(V,we),Be.reversedDepthBuffer&&g&&se.buffers.depth.setReversed(!0),L=new _1(V),E=new VA,Q=new i2(V,we,se,E,Be,kt,L),Mt=new h1(C),Ct=new yE(V),Vt=new a1(V,Ct),xt=new m1(V,Ct,L,Vt),ee=new x1(V,xt,Ct,Vt,L),qt=new v1(V,Be,Q),Lt=new o1(E),Gt=new GA(C,Mt,we,Be,Vt,Lt),re=new u2(C,E),he=new XA,At=new KA(we),Wt=new i1(C,Mt,se,ee,b,m),Zt=new e2(C,ee,Be),ne=new f2(V,L,Be,se),_e=new s1(V,we,L),j=new g1(V,we,L),L.programs=Gt.programs,C.capabilities=Be,C.extensions=we,C.properties=E,C.renderLists=he,C.shadowMap=Zt,C.state=se,C.info=L}It(),w!==zi&&(T=new S1(w,i.width,i.height,l,c));const vt=new l2(C,V);this.xr=vt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(A){A!==void 0&&(yt=A,this.setSize(I,J,!1))},this.getSize=function(A){return A.set(I,J)},this.setSize=function(A,W,ut=!0){if(vt.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,J=W,i.width=Math.floor(A*yt),i.height=Math.floor(W*yt),ut===!0&&(i.style.width=A+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(I*yt,J*yt).floor()},this.setDrawingBufferSize=function(A,W,ut){I=A,J=W,yt=ut,i.width=Math.floor(A*ut),i.height=Math.floor(W*ut),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,W,ut,nt){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,W,ut,nt),se.viewport(P.copy(st).multiplyScalar(yt).round())},this.getScissor=function(A){return A.copy(bt)},this.setScissor=function(A,W,ut,nt){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,W,ut,nt),se.scissor(B.copy(bt).multiplyScalar(yt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){se.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){$t=A},this.getClearColor=function(A){return A.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ut=!0){let nt=0;if(A){let O=!1;if($!==null){const it=$.texture.format;O=S.has(it)}if(O){const it=$.texture.type,pt=x.has(it),et=Wt.getClearColor(),Rt=Wt.getClearAlpha(),Bt=et.r,Yt=et.g,Kt=et.b;pt?(D[0]=Bt,D[1]=Yt,D[2]=Kt,D[3]=Rt,V.clearBufferuiv(V.COLOR,0,D)):(N[0]=Bt,N[1]=Yt,N[2]=Kt,N[3]=Rt,V.clearBufferiv(V.COLOR,0,N))}else nt|=V.COLOR_BUFFER_BIT}W&&(nt|=V.DEPTH_BUFFER_BIT),ut&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),Wt.dispose(),he.dispose(),At.dispose(),E.dispose(),Mt.dispose(),ee.dispose(),Vt.dispose(),ne.dispose(),Gt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",vi),vt.removeEventListener("sessionend",li),Xn.stop()};function Ht(A){A.preventDefault(),L_("WebGLRenderer: Context Lost."),rt=!0}function me(){L_("WebGLRenderer: Context Restored."),rt=!1;const A=L.autoReset,W=Zt.enabled,ut=Zt.autoUpdate,nt=Zt.needsUpdate,O=Zt.type;It(),L.autoReset=A,Zt.enabled=W,Zt.autoUpdate=ut,Zt.needsUpdate=nt,Zt.type=O}function Le(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ye(A){const W=A.target;W.removeEventListener("dispose",ye),xn(W)}function xn(A){ti(A),E.remove(A)}function ti(A){const W=E.get(A).programs;W!==void 0&&(W.forEach(function(ut){Gt.releaseProgram(ut)}),A.isShaderMaterial&&Gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ut,nt,O,it){W===null&&(W=Fe);const pt=O.isMesh&&O.matrixWorld.determinant()<0,et=Hi(A,W,ut,nt,O);se.setMaterial(nt,pt);let Rt=ut.index,Bt=1;if(nt.wireframe===!0){if(Rt=xt.getWireframeAttribute(ut),Rt===void 0)return;Bt=2}const Yt=ut.drawRange,Kt=ut.attributes.position;let Xt=Yt.start*Bt,ce=(Yt.start+Yt.count)*Bt;it!==null&&(Xt=Math.max(Xt,it.start*Bt),ce=Math.min(ce,(it.start+it.count)*Bt)),Rt!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,Rt.count)):Kt!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,Kt.count));const Pe=ce-Xt;if(Pe<0||Pe===1/0)return;Vt.setup(O,nt,et,ut,Rt);let Ie,Oe=_e;if(Rt!==null&&(Ie=Ct.get(Rt),Oe=j,Oe.setIndex(Ie)),O.isMesh)nt.wireframe===!0?(se.setLineWidth(nt.wireframeLinewidth*Ce()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if(O.isLine){let hn=nt.linewidth;hn===void 0&&(hn=1),se.setLineWidth(hn*Ce()),O.isLineSegments?Oe.setMode(V.LINES):O.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else O.isPoints?Oe.setMode(V.POINTS):O.isSprite&&Oe.setMode(V.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)bu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const hn=O._multiDrawStarts,ae=O._multiDrawCounts,qn=O._multiDrawCount,xe=Rt?Ct.get(Rt).bytesPerElement:1,Ln=E.get(nt).currentProgram.getUniforms();for(let di=0;di<qn;di++)Ln.setValue(V,"_gl_DrawID",di),Oe.render(hn[di]/xe,ae[di])}else if(O.isInstancedMesh)Oe.renderInstances(Xt,Pe,O.count);else if(ut.isInstancedBufferGeometry){const hn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ae=Math.min(ut.instanceCount,hn);Oe.renderInstances(Xt,Pe,ae)}else Oe.render(Xt,Pe)};function da(A,W,ut){A.transparent===!0&&A.side===es&&A.forceSinglePass===!1?(A.side=Ai,A.needsUpdate=!0,bn(A,W,ut),A.side=Gs,A.needsUpdate=!0,bn(A,W,ut),A.side=es):bn(A,W,ut)}this.compile=function(A,W,ut=null){ut===null&&(ut=A),k=At.get(ut),k.init(W),G.push(k),ut.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(k.pushLight(O),O.castShadow&&k.pushShadow(O))}),A!==ut&&A.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(k.pushLight(O),O.castShadow&&k.pushShadow(O))}),k.setupLights();const nt=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const et=it[pt];da(et,ut,O),nt.add(et)}else da(it,ut,O),nt.add(it)}),k=G.pop(),nt},this.compileAsync=function(A,W,ut=null){const nt=this.compile(A,W,ut);return new Promise(O=>{function it(){if(nt.forEach(function(pt){E.get(pt).currentProgram.isReady()&&nt.delete(pt)}),nt.size===0){O(A);return}setTimeout(it,10)}we.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ea=null;function La(A){ea&&ea(A)}function vi(){Xn.stop()}function li(){Xn.start()}const Xn=new yx;Xn.setAnimationLoop(La),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){ea=A,vt.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},vt.addEventListener("sessionstart",vi),vt.addEventListener("sessionend",li),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(rt===!0)return;const ut=vt.enabled===!0&&vt.isPresenting===!0,nt=T!==null&&($===null||ut)&&T.begin(C,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(W),W=vt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,$),k=At.get(A,G.length),k.init(W),G.push(k),cn.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),zt.setFromProjectionMatrix(cn,Aa,W.reversedDepth),le=this.localClippingEnabled,Qt=Lt.init(this.clippingPlanes,le),U=he.get(A,z.length),U.init(),z.push(U),vt.enabled===!0&&vt.isPresenting===!0){const pt=C.xr.getDepthSensingMesh();pt!==null&&xi(pt,W,-1/0,C.sortObjects)}xi(A,W,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Pt,$t),ge=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,ge&&Wt.addToRenderList(U,A),this.info.render.frame++,Qt===!0&&Lt.beginShadows();const O=k.state.shadowsArray;if(Zt.render(O,A,W),Qt===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&T.hasRenderPass())===!1){const pt=U.opaque,et=U.transmissive;if(k.setupLights(),W.isArrayCamera){const Rt=W.cameras;if(et.length>0)for(let Bt=0,Yt=Rt.length;Bt<Yt;Bt++){const Kt=Rt[Bt];un(pt,et,A,Kt)}ge&&Wt.render(A);for(let Bt=0,Yt=Rt.length;Bt<Yt;Bt++){const Kt=Rt[Bt];Bn(U,A,Kt,Kt.viewport)}}else et.length>0&&un(pt,et,A,W),ge&&Wt.render(A),Bn(U,A,W)}$!==null&&Y===0&&(Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($)),nt&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,W),Vt.resetDefaultState(),ft=-1,K=null,G.pop(),G.length>0?(k=G[G.length-1],Qt===!0&&Lt.setGlobalState(C.clippingPlanes,k.state.camera)):k=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function xi(A,W,ut,nt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)k.pushLight(A),A.castShadow&&k.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){nt&&Se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(cn);const pt=ee.update(A),et=A.material;et.visible&&U.push(A,pt,et,ut,Se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const pt=ee.update(A),et=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Se.copy(A.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Se.copy(pt.boundingSphere.center)),Se.applyMatrix4(A.matrixWorld).applyMatrix4(cn)),Array.isArray(et)){const Rt=pt.groups;for(let Bt=0,Yt=Rt.length;Bt<Yt;Bt++){const Kt=Rt[Bt],Xt=et[Kt.materialIndex];Xt&&Xt.visible&&U.push(A,pt,Xt,ut,Se.z,Kt)}}else et.visible&&U.push(A,pt,et,ut,Se.z,null)}}const it=A.children;for(let pt=0,et=it.length;pt<et;pt++)xi(it[pt],W,ut,nt)}function Bn(A,W,ut,nt){const{opaque:O,transmissive:it,transparent:pt}=A;k.setupLightsView(ut),Qt===!0&&Lt.setGlobalState(C.clippingPlanes,ut),nt&&se.viewport(P.copy(nt)),O.length>0&&fn(O,W,ut),it.length>0&&fn(it,W,ut),pt.length>0&&fn(pt,W,ut),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function un(A,W,ut,nt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[nt.id]===void 0){const Xt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[nt.id]=new Ca(1,1,{generateMipmaps:!0,type:Xt?ss:zi,minFilter:pr,samples:Be.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const it=k.state.transmissionRenderTarget[nt.id],pt=nt.viewport||P;it.setSize(pt.z*C.transmissionResolutionScale,pt.w*C.transmissionResolutionScale);const et=C.getRenderTarget(),Rt=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(it),C.getClearColor(St),Ot=C.getClearAlpha(),Ot<1&&C.setClearColor(16777215,.5),C.clear(),ge&&Wt.render(ut);const Yt=C.toneMapping;C.toneMapping=Ra;const Kt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),k.setupLightsView(nt),Qt===!0&&Lt.setGlobalState(C.clippingPlanes,nt),fn(A,ut,nt),Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it),we.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ce=0,Pe=W.length;ce<Pe;ce++){const Ie=W[ce],{object:Oe,geometry:hn,material:ae,group:qn}=Ie;if(ae.side===es&&Oe.layers.test(nt.layers)){const xe=ae.side;ae.side=Ai,ae.needsUpdate=!0,zn(Oe,ut,nt,hn,ae,qn),ae.side=xe,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it))}C.setRenderTarget(et,Rt,Bt),C.setClearColor(St,Ot),Kt!==void 0&&(nt.viewport=Kt),C.toneMapping=Yt}function fn(A,W,ut){const nt=W.isScene===!0?W.overrideMaterial:null;for(let O=0,it=A.length;O<it;O++){const pt=A[O],{object:et,geometry:Rt,group:Bt}=pt;let Yt=pt.material;Yt.allowOverride===!0&&nt!==null&&(Yt=nt),et.layers.test(ut.layers)&&zn(et,W,ut,Rt,Yt,Bt)}}function zn(A,W,ut,nt,O,it){A.onBeforeRender(C,W,ut,nt,O,it),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(C,W,ut,nt,A,it),O.transparent===!0&&O.side===es&&O.forceSinglePass===!1?(O.side=Ai,O.needsUpdate=!0,C.renderBufferDirect(ut,W,nt,O,A,it),O.side=Gs,O.needsUpdate=!0,C.renderBufferDirect(ut,W,nt,O,A,it),O.side=es):C.renderBufferDirect(ut,W,nt,O,A,it),A.onAfterRender(C,W,ut,nt,O,it)}function bn(A,W,ut){W.isScene!==!0&&(W=Fe);const nt=E.get(A),O=k.state.lights,it=k.state.shadowsArray,pt=O.state.version,et=Gt.getParameters(A,O.state,it,W,ut),Rt=Gt.getProgramCacheKey(et);let Bt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,nt.fog=W.fog;const Yt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Mt.get(A.envMap||nt.environment,Yt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",ye),Bt=new Map,nt.programs=Bt);let Kt=Bt.get(Rt);if(Kt!==void 0){if(nt.currentProgram===Kt&&nt.lightsStateVersion===pt)return ui(A,et),Kt}else et.uniforms=Gt.getUniforms(A),A.onBeforeCompile(et,C),Kt=Gt.acquireProgram(et,Rt),Bt.set(Rt,Kt),nt.uniforms=et.uniforms;const Xt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Lt.uniform),ui(A,et),nt.needsLights=ei(A),nt.lightsStateVersion=pt,nt.needsLights&&(Xt.ambientLightColor.value=O.state.ambient,Xt.lightProbe.value=O.state.probe,Xt.directionalLights.value=O.state.directional,Xt.directionalLightShadows.value=O.state.directionalShadow,Xt.spotLights.value=O.state.spot,Xt.spotLightShadows.value=O.state.spotShadow,Xt.rectAreaLights.value=O.state.rectArea,Xt.ltc_1.value=O.state.rectAreaLTC1,Xt.ltc_2.value=O.state.rectAreaLTC2,Xt.pointLights.value=O.state.point,Xt.pointLightShadows.value=O.state.pointShadow,Xt.hemisphereLights.value=O.state.hemi,Xt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Xt.spotLightMatrix.value=O.state.spotLightMatrix,Xt.spotLightMap.value=O.state.spotLightMap,Xt.pointShadowMatrix.value=O.state.pointShadowMatrix),nt.currentProgram=Kt,nt.uniformsList=null,Kt}function ci(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=_u.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ui(A,W){const ut=E.get(A);ut.outputColorSpace=W.outputColorSpace,ut.batching=W.batching,ut.batchingColor=W.batchingColor,ut.instancing=W.instancing,ut.instancingColor=W.instancingColor,ut.instancingMorph=W.instancingMorph,ut.skinning=W.skinning,ut.morphTargets=W.morphTargets,ut.morphNormals=W.morphNormals,ut.morphColors=W.morphColors,ut.morphTargetsCount=W.morphTargetsCount,ut.numClippingPlanes=W.numClippingPlanes,ut.numIntersection=W.numClipIntersection,ut.vertexAlphas=W.vertexAlphas,ut.vertexTangents=W.vertexTangents,ut.toneMapping=W.toneMapping}function Hi(A,W,ut,nt,O){W.isScene!==!0&&(W=Fe),Q.resetTextureUnits();const it=W.fog,pt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?W.environment:null,et=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:mo,Rt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Bt=Mt.get(nt.envMap||pt,Rt),Yt=nt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Kt=!!ut.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Xt=!!ut.morphAttributes.position,ce=!!ut.morphAttributes.normal,Pe=!!ut.morphAttributes.color;let Ie=Ra;nt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ie=C.toneMapping);const Oe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,hn=Oe!==void 0?Oe.length:0,ae=E.get(nt),qn=k.state.lights;if(Qt===!0&&(le===!0||A!==K)){const Ft=A===K&&nt.id===ft;Lt.setState(nt,A,Ft)}let xe=!1;nt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==qn.state.version||ae.outputColorSpace!==et||O.isBatchedMesh&&ae.batching===!1||!O.isBatchedMesh&&ae.batching===!0||O.isBatchedMesh&&ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ae.instancing===!1||!O.isInstancedMesh&&ae.instancing===!0||O.isSkinnedMesh&&ae.skinning===!1||!O.isSkinnedMesh&&ae.skinning===!0||O.isInstancedMesh&&ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ae.instancingMorph===!1&&O.morphTexture!==null||ae.envMap!==Bt||nt.fog===!0&&ae.fog!==it||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Lt.numPlanes||ae.numIntersection!==Lt.numIntersection)||ae.vertexAlphas!==Yt||ae.vertexTangents!==Kt||ae.morphTargets!==Xt||ae.morphNormals!==ce||ae.morphColors!==Pe||ae.toneMapping!==Ie||ae.morphTargetsCount!==hn)&&(xe=!0):(xe=!0,ae.__version=nt.version);let Ln=ae.currentProgram;xe===!0&&(Ln=bn(nt,W,O));let di=!1,hi=!1,H=!1;const Z=Ln.getUniforms(),mt=ae.uniforms;if(se.useProgram(Ln.program)&&(di=!0,hi=!0,H=!0),nt.id!==ft&&(ft=nt.id,hi=!0),di||K!==A){se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Z.setValue(V,"projectionMatrix",A.projectionMatrix),Z.setValue(V,"viewMatrix",A.matrixWorldInverse);const Nt=Z.map.cameraPosition;Nt!==void 0&&Nt.setValue(V,Ee.setFromMatrixPosition(A.matrixWorld)),Be.logarithmicDepthBuffer&&Z.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Z.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,hi=!0,H=!0)}if(ae.needsLights&&(qn.state.directionalShadowMap.length>0&&Z.setValue(V,"directionalShadowMap",qn.state.directionalShadowMap,Q),qn.state.spotShadowMap.length>0&&Z.setValue(V,"spotShadowMap",qn.state.spotShadowMap,Q),qn.state.pointShadowMap.length>0&&Z.setValue(V,"pointShadowMap",qn.state.pointShadowMap,Q)),O.isSkinnedMesh){Z.setOptional(V,O,"bindMatrix"),Z.setOptional(V,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Z.setValue(V,"boneTexture",Ft.boneTexture,Q))}O.isBatchedMesh&&(Z.setOptional(V,O,"batchingTexture"),Z.setValue(V,"batchingTexture",O._matricesTexture,Q),Z.setOptional(V,O,"batchingIdTexture"),Z.setValue(V,"batchingIdTexture",O._indirectTexture,Q),Z.setOptional(V,O,"batchingColorTexture"),O._colorsTexture!==null&&Z.setValue(V,"batchingColorTexture",O._colorsTexture,Q));const wt=ut.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&qt.update(O,ut,Ln),(hi||ae.receiveShadow!==O.receiveShadow)&&(ae.receiveShadow=O.receiveShadow,Z.setValue(V,"receiveShadow",O.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&W.environment!==null&&(mt.envMapIntensity.value=W.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=h2()),hi&&(Z.setValue(V,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&Hn(mt,H),it&&nt.fog===!0&&re.refreshFogUniforms(mt,it),re.refreshMaterialUniforms(mt,nt,yt,J,k.state.transmissionRenderTarget[A.id]),_u.upload(V,ci(ae),mt,Q)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(_u.upload(V,ci(ae),mt,Q),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Z.setValue(V,"center",O.center),Z.setValue(V,"modelViewMatrix",O.modelViewMatrix),Z.setValue(V,"normalMatrix",O.normalMatrix),Z.setValue(V,"modelMatrix",O.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Ft=nt.uniformsGroups;for(let Nt=0,Jt=Ft.length;Nt<Jt;Nt++){const ie=Ft[Nt];ne.update(ie,Ln),ne.bind(ie,Ln)}}return Ln}function Hn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ei(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,ut){const nt=E.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=W,E.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ut,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ut=E.get(A);ut.__webglFramebuffer=W,ut.__useDefaultFramebuffer=W===void 0};const fi=V.createFramebuffer();this.setRenderTarget=function(A,W=0,ut=0){$=A,F=W,Y=ut;let nt=null,O=!1,it=!1;if(A){const et=E.get(A);if(et.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(V.FRAMEBUFFER,et.__webglFramebuffer),P.copy(A.viewport),B.copy(A.scissor),ht=A.scissorTest,se.viewport(P),se.scissor(B),se.setScissorTest(ht),ft=-1;return}else if(et.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(et.__hasExternalTextures)Q.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(et.__boundDepthTexture!==Yt){if(Yt!==null&&E.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const Rt=A.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(it=!0);const Bt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[W])?nt=Bt[W][ut]:nt=Bt[W],O=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?nt=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?nt=Bt[ut]:nt=Bt,P.copy(A.viewport),B.copy(A.scissor),ht=A.scissorTest}else P.copy(st).multiplyScalar(yt).floor(),B.copy(bt).multiplyScalar(yt).floor(),ht=Ut;if(ut!==0&&(nt=fi),se.bindFramebuffer(V.FRAMEBUFFER,nt)&&se.drawBuffers(A,nt),se.viewport(P),se.scissor(B),se.setScissorTest(ht),O){const et=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,et.__webglTexture,ut)}else if(it){const et=W;for(let Rt=0;Rt<A.textures.length;Rt++){const Bt=E.get(A.textures[Rt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Rt,Bt.__webglTexture,ut,et)}}else if(A!==null&&ut!==0){const et=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,et.__webglTexture,ut)}ft=-1},this.readRenderTargetPixels=function(A,W,ut,nt,O,it,pt,et=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(Rt=Rt[pt]),Rt){se.bindFramebuffer(V.FRAMEBUFFER,Rt);try{const Bt=A.textures[et],Yt=Bt.format,Kt=Bt.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+et),!Be.textureFormatReadable(Yt)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Kt)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-nt&&ut>=0&&ut<=A.height-O&&V.readPixels(W,ut,nt,O,kt.convert(Yt),kt.convert(Kt),it)}finally{const Bt=$!==null?E.get($).__webglFramebuffer:null;se.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,W,ut,nt,O,it,pt,et=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(Rt=Rt[pt]),Rt)if(W>=0&&W<=A.width-nt&&ut>=0&&ut<=A.height-O){se.bindFramebuffer(V.FRAMEBUFFER,Rt);const Bt=A.textures[et],Yt=Bt.format,Kt=Bt.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+et),!Be.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.bufferData(V.PIXEL_PACK_BUFFER,it.byteLength,V.STREAM_READ),V.readPixels(W,ut,nt,O,kt.convert(Yt),kt.convert(Kt),0);const ce=$!==null?E.get($).__webglFramebuffer:null;se.bindFramebuffer(V.FRAMEBUFFER,ce);const Pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Oy(V,Pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,it),V.deleteBuffer(Xt),V.deleteSync(Pe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ut=0){const nt=Math.pow(2,-ut),O=Math.floor(A.image.width*nt),it=Math.floor(A.image.height*nt),pt=W!==null?W.x:0,et=W!==null?W.y:0;Q.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ut,0,0,pt,et,O,it),se.unbindTexture()};const Ri=V.createFramebuffer(),Wn=V.createFramebuffer();this.copyTextureToTexture=function(A,W,ut=null,nt=null,O=0,it=0){let pt,et,Rt,Bt,Yt,Kt,Xt,ce,Pe;const Ie=A.isCompressedTexture?A.mipmaps[it]:A.image;if(ut!==null)pt=ut.max.x-ut.min.x,et=ut.max.y-ut.min.y,Rt=ut.isBox3?ut.max.z-ut.min.z:1,Bt=ut.min.x,Yt=ut.min.y,Kt=ut.isBox3?ut.min.z:0;else{const mt=Math.pow(2,-O);pt=Math.floor(Ie.width*mt),et=Math.floor(Ie.height*mt),A.isDataArrayTexture?Rt=Ie.depth:A.isData3DTexture?Rt=Math.floor(Ie.depth*mt):Rt=1,Bt=0,Yt=0,Kt=0}nt!==null?(Xt=nt.x,ce=nt.y,Pe=nt.z):(Xt=0,ce=0,Pe=0);const Oe=kt.convert(W.format),hn=kt.convert(W.type);let ae;W.isData3DTexture?(Q.setTexture3D(W,0),ae=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Q.setTexture2DArray(W,0),ae=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(W,0),ae=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const qn=V.getParameter(V.UNPACK_ROW_LENGTH),xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),di=V.getParameter(V.UNPACK_SKIP_ROWS),hi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ie.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ie.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kt);const H=A.isDataArrayTexture||A.isData3DTexture,Z=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const mt=E.get(A),wt=E.get(W),Ft=E.get(mt.__renderTarget),Nt=E.get(wt.__renderTarget);se.bindFramebuffer(V.READ_FRAMEBUFFER,Ft.__webglFramebuffer),se.bindFramebuffer(V.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Jt=0;Jt<Rt;Jt++)H&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(A).__webglTexture,O,Kt+Jt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(W).__webglTexture,it,Pe+Jt)),V.blitFramebuffer(Bt,Yt,pt,et,Xt,ce,pt,et,V.DEPTH_BUFFER_BIT,V.NEAREST);se.bindFramebuffer(V.READ_FRAMEBUFFER,null),se.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||E.has(A)){const mt=E.get(A),wt=E.get(W);se.bindFramebuffer(V.READ_FRAMEBUFFER,Ri),se.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wn);for(let Ft=0;Ft<Rt;Ft++)H?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mt.__webglTexture,O,Kt+Ft):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mt.__webglTexture,O),Z?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wt.__webglTexture,it,Pe+Ft):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wt.__webglTexture,it),O!==0?V.blitFramebuffer(Bt,Yt,pt,et,Xt,ce,pt,et,V.COLOR_BUFFER_BIT,V.NEAREST):Z?V.copyTexSubImage3D(ae,it,Xt,ce,Pe+Ft,Bt,Yt,pt,et):V.copyTexSubImage2D(ae,it,Xt,ce,Bt,Yt,pt,et);se.bindFramebuffer(V.READ_FRAMEBUFFER,null),se.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Z?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ae,it,Xt,ce,Pe,pt,et,Rt,Oe,hn,Ie.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(ae,it,Xt,ce,Pe,pt,et,Rt,Oe,Ie.data):V.texSubImage3D(ae,it,Xt,ce,Pe,pt,et,Rt,Oe,hn,Ie):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,it,Xt,ce,pt,et,Oe,hn,Ie.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,it,Xt,ce,Ie.width,Ie.height,Oe,Ie.data):V.texSubImage2D(V.TEXTURE_2D,it,Xt,ce,pt,et,Oe,hn,Ie);V.pixelStorei(V.UNPACK_ROW_LENGTH,qn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,di),V.pixelStorei(V.UNPACK_SKIP_IMAGES,hi),it===0&&W.generateMipmaps&&V.generateMipmap(ae),se.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){F=0,Y=0,$=null,se.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const m2=120;let yv=0;function g2(){return typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}function _2(r="light"){if(!g2())return;const t=typeof performance<"u"?performance.now():Date.now();if(!(t-yv<m2)){yv=t;try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(10)}catch{}}}const Re={lat:47.6205,lng:-122.3493,altitude:0},vu={lat:47.6205,lng:-122.3493,altitude:0},Ze=0,gh=67,_h=230,vh=900,Bi=122,Is=32,mi=60,v2=10,Ev=20,bv={Neighborhood:"Hood",Coordinates:"Coords","Land Acquisition":"Land",Rate:"Rate","Year constructed":"Year","Land required":"Land","Total Cost":"Cost",Needles:"Needles","Land Acquired":"Acres","Tourism Revenue":"Revenue/yr"};function x2(r){return function(){let i=r+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function M2(){return{foregroundZ:{min:-55,max:-20},midgroundZ:{min:-120,max:-55},backgroundZ:{min:-240,max:-120},farBackgroundZ:{min:-350,max:-240}}}const S2=12;function Fs(r,t,i=S2){const s=r*r+t*t;if(s<i*i&&s>0){const l=Math.sqrt(s),c=(i+1)/l;return{x:r*c,z:t*c}}return{x:r,z:t}}function y2(r,t){const i=Number(r),s=Number(t);let l=!1,c=!1,d=null;return i>=47.58&&i<=47.65&&s>=-122.42&&s<=-122.34&&(d="puget_sound",l=!0),i>=47.618&&i<=47.648&&s>=-122.345&&s<=-122.318&&(d="lake_union",l=!0),i>=47.52&&i<=47.68&&s>=-122.32&&s<=-122.22&&(d="lake_washington",l=!0),i>=47.598&&i<=47.622&&s>=-122.362&&s<=-122.338&&(c=!0,d||(d="puget_sound")),{isWaterZone:l,isCoastlineZone:c,waterType:d}}const E2=[{name:"downtown",latMin:47.605,latMax:47.613,lngMin:-122.346,lngMax:-122.33,buildingStyle:"tall",parkFactor:0},{name:"belltown",latMin:47.612,latMax:47.619,lngMin:-122.358,lngMax:-122.342,buildingStyle:"medium",parkFactor:0},{name:"south_lake_union",latMin:47.616,latMax:47.626,lngMin:-122.34,lngMax:-122.33,buildingStyle:"tall",parkFactor:.2},{name:"queen_anne",latMin:47.633,latMax:47.644,lngMin:-122.365,lngMax:-122.345,buildingStyle:"small",parkFactor:.3},{name:"capitol_hill",latMin:47.618,latMax:47.636,lngMin:-122.325,lngMax:-122.298,buildingStyle:"small",parkFactor:.4},{name:"volunteer_park",latMin:47.628,latMax:47.633,lngMin:-122.321,lngMax:-122.314,buildingStyle:"small",parkFactor:1},{name:"green_lake",latMin:47.675,latMax:47.684,lngMin:-122.335,lngMax:-122.318,buildingStyle:"small",parkFactor:1},{name:"ballard",latMin:47.664,latMax:47.672,lngMin:-122.388,lngMax:-122.37,buildingStyle:"medium",parkFactor:.2},{name:"freemont",latMin:47.648,latMax:47.656,lngMin:-122.358,lngMax:-122.345,buildingStyle:"medium",parkFactor:.3},{name:"u_district",latMin:47.654,latMax:47.664,lngMin:-122.322,lngMax:-122.308,buildingStyle:"medium",parkFactor:.2},{name:"seattle_center_park",latMin:47.619,latMax:47.622,lngMin:-122.354,lngMax:-122.348,buildingStyle:"small",parkFactor:.7},{name:"sodo",latMin:47.578,latMax:47.592,lngMin:-122.338,lngMax:-122.318,buildingStyle:"medium",parkFactor:0},{name:"georgetown",latMin:47.548,latMax:47.558,lngMin:-122.332,lngMax:-122.318,buildingStyle:"small",parkFactor:.2}],b2={buildingStyle:"medium",parkFactor:.2};function T2(r,t){const i=Number(r),s=Number(t);for(const l of E2)if(i>=l.latMin&&i<=l.latMax&&s>=l.lngMin&&s<=l.lngMax)return{buildingStyle:l.buildingStyle,parkFactor:l.parkFactor,zoneName:l.name};return{...b2}}function A2(r,t,i){const s=(t??"").toLowerCase();if(s==="stadiums")return"stadium";if((s==="waterfront"||s==="ferris_wheel")&&i)return"waterfront";if((r.parkFactor??.2)>=.7)return"park";const c=r.buildingStyle??"medium",d=(r.zoneName??"").toLowerCase();return c==="tall"||d==="downtown"||d==="belltown"||d==="south_lake_union"?"downtown":c==="small"||c==="medium"?"residential":"general"}function R2(r){switch(r){case"downtown":return{hMin:20,hMax:40};case"residential":return{hMin:6,hMax:14};case"park":return{hMin:4,hMax:8};default:return null}}function Tv(r){const t=r();return t<.33?{w:.7,d:1.1}:t<.66?{w:1,d:1}:{w:1.4,d:.8}}const xh=20,_p="./models/space-needle-park.glb",Mh="./models/low_poly_space_needle.glb",Av=_p,C2=0,w2=[{category:"3D Model",name:"Space Needle",creator:"Microsoft",license:"Sketchfab",sourceUrl:"",notes:"space-needle (default)"},{category:"3D Model",name:"Low Poly Space Needle",creator:"Mejje mobile coffee",license:"Sketchfab",sourceUrl:"",notes:"low_poly_space_needle.glb"},{category:"Sound",name:"Dog Bark",creator:"Dragon Studio",license:"Pixabay",sourceUrl:"",notes:"Free Dog Bark"},{category:"Sound",name:"Crowd Stomp",creator:"Djart music",license:"Pixabay",sourceUrl:"",notes:"Powerful Stomps Claps Cheering (Sport Rhythmic Applause)"},{category:"Sound",name:"Baseball organ",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"baseball cavalry sting short sustain 80564"},{category:"Sound",name:"Musical saw hit",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"81382"},{category:"Sound",name:"Crunch",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"plastic crunch 83779"},{category:"Sound",name:"Poof",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"poof of smoke 87381"},{category:"Sound",name:"Splash",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"6213"},{category:"Sound",name:"Wilhelm",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"wilhelm 1 86895"},{category:"Sound",name:"Glass smash",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"6266"},{category:"Sound",name:"Camera",creator:"Irinairinafomicheva",license:"Freesound",sourceUrl:"",notes:"13695"},{category:"Sound",name:"Percussive hit 02",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"105799"},{category:"Sound",name:"Shooting sound fx",creator:"lucadialessandro",license:"Pixabay",sourceUrl:"",notes:"159024"}],Sh=3.5*(7/8),D2=158.5,U2=200,N2=82,Rv=1800,L2=250,Cv=1e-4,O2=5,P2=1,I2=2,wv=2200,F2=60,B2=Math.PI*F2**2*10.7639,Dv=35e7,Uv=.6,Nv=1.4,z2=.3,Lv=.5,H2=12,G2=1.25,V2=900,$c=2e-4,k2=1.75;function X2(r,t,i){const s=i.length;if(s<3)return!1;let l=!1;for(let c=0,d=s-1;c<s;d=c++){const[p,m]=i[c],[h,_]=i[d];if(p===h)continue;const M=p>r!=h>r,g=m+(_-m)*(r-p)/(h-p);M&&g>t&&(l=!l)}return l}const W2="https://raw.githubusercontent.com/seattleio/seattle-boundaries-data/master/data/neighborhoods.geojson";let vp=null;function q2(r){if(!r?.features?.length)return[];const t=[];for(const i of r.features){const s=i.geometry;if(s?.coordinates){if(s.type==="Polygon"){const l=s.coordinates[0].map(([c,d])=>[d,c]);l.length>=3&&t.push(l)}else if(s.type==="MultiPolygon")for(const l of s.coordinates.map(c=>c[0].map(([d,p])=>[p,d])))l.length>=3&&t.push(l)}}return t}function Y2(r,t){return vp?.length?vp.some(i=>X2(r,t,i)):!1}const j2=[{latMin:47.53,latMax:47.68,lngMin:-122.48,lngMax:-122.32},{latMin:47.634,latMax:47.648,lngMin:-122.338,lngMax:-122.318},{latMin:47.53,latMax:47.66,lngMin:-122.318,lngMax:-122.24},{latMin:47.648,latMax:47.658,lngMin:-122.318,lngMax:-122.298}];function Z2(r,t){return j2.some(i=>r>=i.latMin&&r<=i.latMax&&t>=i.lngMin&&t<=i.lngMax)}function Ov(r,t,i){return Y2(r,t)?!1:Z2(r,t)?!0:i!==null&&typeof i=="number"?i<=1:!1}const tu={latMin:47.6498,latMax:47.6578,lngMin:-122.314,lngMax:-122.296};function Pv(r,t){return r>=tu.latMin&&r<=tu.latMax&&t>=tu.lngMin&&t<=tu.lngMax}const eu={latMin:47.5942,latMax:47.5958,lngMin:-122.3328,lngMax:-122.3302};function Iv(r,t){return r>=eu.latMin&&r<=eu.latMax&&t>=eu.lngMin&&t<=eu.lngMax}const nu={latMin:47.5906,latMax:47.5932,lngMin:-122.3348,lngMax:-122.3302};function Fv(r,t){return r>=nu.latMin&&r<=nu.latMax&&t>=nu.lngMin&&t<=nu.lngMax}const iu={latMin:47.6214,latMax:47.6226,lngMin:-122.3542,lngMax:-122.3518};function Bv(r,t){return r>=iu.latMin&&r<=iu.latMax&&t>=iu.lngMin&&t<=iu.lngMax}const au={latMin:47.62105,latMax:47.62173,lngMin:-122.34845,lngMax:-122.34767};function zv(r,t){return r>=au.latMin&&r<=au.latMax&&t>=au.lngMin&&t<=au.lngMax}const su={latMin:47.61998,latMax:47.62048,lngMin:-122.35095,lngMax:-122.35048};function Hv(r,t){return r>=su.latMin&&r<=su.latMax&&t>=su.lngMin&&t<=su.lngMax}const ru={latMin:47.61928,latMax:47.61968,lngMin:-122.35108,lngMax:-122.35052};function Gv(r,t){return r>=ru.latMin&&r<=ru.latMax&&t>=ru.lngMin&&t<=ru.lngMax}const ou={latMin:47.53,latMax:47.68,lngMin:-122.44,lngMax:-122.25};function K2(r,t){return r>=ou.latMin&&r<=ou.latMax&&t>=ou.lngMin&&t<=ou.lngMax}const Q2=[{id:"downtown",name:"Downtown",center:{lat:47.6097,lng:-122.3331},radiusM:650,ratePerSqFt:2800},{id:"slu",name:"South Lake Union",center:{lat:47.6279,lng:-122.3372},radiusM:520,ratePerSqFt:2200},{id:"belltown",name:"Belltown",center:{lat:47.6163,lng:-122.3456},radiusM:480,ratePerSqFt:2500},{id:"queen-anne",name:"Queen Anne",center:{lat:47.6354,lng:-122.357},radiusM:600,ratePerSqFt:1700},{id:"capitol-hill",name:"Capitol Hill",center:{lat:47.6252,lng:-122.3212},radiusM:580,ratePerSqFt:1800},{id:"ballard",name:"Ballard",center:{lat:47.6684,lng:-122.3846},radiusM:550,ratePerSqFt:1200},{id:"fremont",name:"Fremont",center:{lat:47.6513,lng:-122.3507},radiusM:400,ratePerSqFt:1100},{id:"udistrict",name:"U District",center:{lat:47.6605,lng:-122.314},radiusM:500,ratePerSqFt:1e3},{id:"magnolia",name:"Magnolia",center:{lat:47.6397,lng:-122.3992},radiusM:600,ratePerSqFt:1100},{id:"west-seattle",name:"West Seattle",center:{lat:47.5652,lng:-122.3868},radiusM:700,ratePerSqFt:800},{id:"beacon-hill",name:"Beacon Hill",center:{lat:47.5805,lng:-122.3102},radiusM:500,ratePerSqFt:700},{id:"rainier-valley",name:"Rainier Valley",center:{lat:47.5575,lng:-122.2845},radiusM:600,ratePerSqFt:600},{id:"seattle-center",name:"Seattle Center",center:{lat:47.6205,lng:-122.3493},radiusM:400,ratePerSqFt:2e3},{id:"first-hill",name:"First Hill",center:{lat:47.6102,lng:-122.3258},radiusM:380,ratePerSqFt:1900}],Ru=1;function yh(r,t,i,s){if(!t)return null;const l=i-t.left,c=s-t.top;if(l<0||l>t.width||c<0||c>t.height)return null;const d=r.center,p=r.range??1200;if(!d||typeof d.lat!="number")return null;const m=d.lat,h=p*2.2/Math.min(t.width,t.height),_=(l-t.width/2)*Ru;let M=(c-t.height/2)*Ru;const y=(r.tilt??0)*Math.PI/180,b=1/Math.max(.25,Math.cos(y));M*=b;const S=(r.heading??0)*Math.PI/180,x=(_*Math.cos(S)-M*Math.sin(S))*h,N=(-_*Math.sin(S)-M*Math.cos(S))*h*.5/111320,U=x*.5/(111320*Math.cos(m*Math.PI/180));return{lat:m+N,lng:d.lng+U,altitude:0}}function xu(r,t,i){if(!r||!t||!i)return null;const s=r.center,l=r.range??1200;if(!s||typeof s.lat!="number")return null;const c=s.lat,d=l*2.2/Math.min(t.width,t.height),p=(i.lat-s.lat)*111320*2,m=(i.lng-s.lng)*(111320*Math.cos(c*Math.PI/180))*2,_=(r.heading??0)*Math.PI/180;let M=(m*Math.cos(_)-p*Math.sin(_))/d,g=(-m*Math.sin(_)-p*Math.cos(_))/d;const b=(r.tilt??0)*Math.PI/180,w=1/Math.max(.25,Math.cos(b));g/=w;const S=t.width/2+M/Ru,x=t.height/2+g/Ru;return{x:S,y:x}}function ml(r,t,i,s){if(!r||!t||!i)return null;const l=r.innerMap,d=s?.current?.getProjection?.();if(l&&d&&typeof google<"u"&&google.maps?.LatLng)try{const m=new google.maps.LatLng(i.lat,i.lng),h=d.fromLatLngToDivPixel(m);if(h==null)return null;const _=l.getDiv();if(!_)return null;const M=_.getBoundingClientRect(),g=t.getBoundingClientRect(),y=M.left-g.left+h.x,b=M.top-g.top+h.y;return{x:y,y:b}}catch{}const p=t.getBoundingClientRect();return xu(r,p,i)}function Eh(r,t,i,s){if(!r)return null;const l=r.innerMap,d=s?.current?.getProjection?.();if(!l||!d||typeof google>"u"||!google.maps?.Point)return null;const p=l.getDiv?.();if(!p)return null;const m=p.getBoundingClientRect(),h=t-m.left,_=i-m.top;if(h<0||h>m.width||_<0||_>m.height)return null;try{const M=new google.maps.Point(h,_),g=typeof d.fromContainerPixelToLatLng=="function"&&d.fromContainerPixelToLatLng(M)||typeof d.fromDivPixelToLatLng=="function"&&d.fromDivPixelToLatLng(M);return g?{lat:g.lat(),lng:g.lng(),altitude:0}:null}catch{return null}}function si(r,t){const s=(t.lat-r.lat)*Math.PI/180,l=(t.lng-r.lng)*Math.PI/180,c=Math.sin(s/2)**2+Math.cos(r.lat*Math.PI/180)*Math.cos(t.lat*Math.PI/180)*Math.sin(l/2)**2;return 2*6371e3*Math.asin(Math.sqrt(c))}function Cx(r,t){const i=Math.round(r/$c)*$c,s=Math.round(t/$c)*$c,l=`${i.toFixed(6)}${s.toFixed(6)}`;let c=0;for(let d=0;d<l.length;d++)c=c*31+l.charCodeAt(d)>>>0;return c}function wx(r){return()=>(r=(r*9301+49297)%233280,r/233280)}function lu(r,t){const s=si({lat:r,lng:t},vu)/1e3,l=Math.max(.2,1-s/H2),c=Cx(r,t),d=wx(c),p=K2(r,t);let m;if(p){const h=Uv+d()*(Nv-Uv),_=(d()-.5)*2*z2;m=(h+_)*l,m=Math.max(.3,Math.min(Nv,m))}else{const h=.2+d()*(Lv-.25),_=(d()-.5)*.2;m=(h+_)*l,m=Math.max(.05,Math.min(Lv,m))}return m*1e9}function cu(r,t){const i={lat:r,lng:t},s=Q2.filter(g=>si(i,g.center)<=g.radiusM);let l,c;s.length===0?(l=V2,c="Seattle (General)"):s.length===1?(l=s[0].ratePerSqFt,c=s[0].name):(l=s.reduce((g,y)=>g+y.ratePerSqFt,0)/s.length,c=s.map(g=>g.name).join("/"));const d=Cx(r,t),m=.95+wx(d)()*.1,h=l*m,_=h*B2,M=Math.round(_*G2/1e4)*1e4;return{ratePerSqFt:h,landValue:M,neighborhoodLabel:c}}function uu(r){return r>=1e9?`$${(r/1e9).toFixed(1)}B`:r>=1e6?`$${(r/1e6).toFixed(1)}M`:r>=1e3?`$${(r/1e3).toFixed(0)}K`:`$${r.toFixed(0)}`}function J2(r){return r>=1e9?`$${(r/1e9).toFixed(1)}B/yr`:r>=1e6?`$${(r/1e6).toFixed(1)}M/yr`:r>=1e3?`$${(r/1e3).toFixed(1)}K/yr`:`$${r.toFixed(1)}/yr`}function Vv(r){return`$${Math.round(r)}/sqft`}function bh(r,t,i=", "){const s=Number(r),l=Number(t),c=s>=0?"N":"S",d=l>=0?"E":"W",p=`${Math.abs(s).toFixed(5)}° ${c}`,m=`${Math.abs(l).toFixed(5)}° ${d}`;return`${p}${i}${m}`}function kv(r,t){return`${Number(r).toFixed(5)}, ${Number(t).toFixed(5)}`}function $2(r,t){const i=r>=0?"N":"S",s=t>=0?"E":"W";return`${Math.abs(Number(r)).toFixed(5)}° ${i}, ${Math.abs(Number(t)).toFixed(5)}° ${s}`}function Xv(r){return new Promise((t,i)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>t(s),s.onerror=i,s.src=r})}function tR(){if(typeof navigator>"u")return!1;const r=navigator.userAgent;return/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}async function Dx(r){if(!r?.dataUrl)return null;const[t,i]=await Promise.all([Xv(r.dataUrl),Xv("./eg_logo_postcard.png").catch(()=>null)]),s=1600,l=1200,c=document.createElement("canvas");c.width=s,c.height=l;const d=c.getContext("2d"),p="#F2E8CC",m="#F2E8CC",h="#0B1428",_="rgba(11, 20, 40,0.75)",M=70,g=220,y=24,b=M,w=M,S=s-M*2,x=l-M*2-g,D=b+y,N=w+y,U=S-y*2,k=x-y*2;d.fillStyle=p,d.fillRect(0,0,s,l),d.fillStyle=m,d.fillRect(b,w,S,x);const z=t.width/t.height,G=U/k;let T=0,C=0,rt=t.width,F=t.height;z>G?(F=t.height,rt=F*G,T=(t.width-rt)/2,C=0):(rt=t.width,F=rt/G,T=0,C=(t.height-F)/2),d.drawImage(t,T,C,rt,F,D,N,U,k);const Y=M,$=w+x,ft=S,K=g;d.fillStyle=m,d.fillRect(Y,$,ft,K);const P=r.needleNumber??r.needleId??"",B=$2(r.lat??0,r.lng??0),ht=Y+34,St=Y+ft-34,Ot=$+72;d.fillStyle=h,d.font="600 34px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.textBaseline="alphabetic",d.textAlign="left",d.fillText(`Greetings from Space Needle #${P}!`,ht,Ot),d.fillStyle=_,d.font="500 26px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText(B,ht,Ot+40),d.fillStyle=h,d.font="600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("twospaceneedles.org | @twospaceneedles",ht,$+K-44),d.textAlign="right";const I=$+18,yt=$+K-52-I;if(i&&i.width>0&&i.height>0){const Pt=Math.min(yt,100),$t=i.width/i.height*Pt,st=St-$t,bt=I+(yt-Pt)/2;d.drawImage(i,st,bt,$t,Pt)}else d.fillStyle=h,d.font="800 36px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("EXTRA GOOD",St,I+yt/2+12);return d.fillStyle=_,d.font="600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("extragood.studio | @extragood.studio",St,$+K-44),c.toDataURL("image/jpeg",.92)}async function eR(r){const t=await Dx(r);if(!t)return;const i=r?.needleNumber??r?.needleId??"",s=document.createElement("a");s.href=t,s.download=`two-space-needles-postcard-needle-${i}.jpg`,document.body.appendChild(s),s.click(),s.remove()}function fu(r,t={}){const{duration:i=600}=t,[s,l]=gt.useState(()=>r),c=gt.useRef(r),d=gt.useRef(r),p=gt.useRef(r),m=gt.useRef(null);return c.current=s,gt.useEffect(()=>{if(r===p.current)return;const h=c.current;p.current=r;const _=performance.now(),M=g=>{const y=g-_,b=Math.min(y/i,1),w=1-(1-b)**2,S=h+(r-h)*w;l(S),b<1?m.current=requestAnimationFrame(M):d.current=r};return m.current=requestAnimationFrame(M),()=>{m.current&&cancelAnimationFrame(m.current)}},[r,i]),s}async function Wv(r,t){try{const{ElevationService:i}=await Su("elevation"),l=await new i().getElevationForLocations({locations:[{lat:r,lng:t}]});if(l?.results?.[0]!=null&&typeof l.results[0].elevation=="number")return l.results[0].elevation}catch(i){console.warn("Elevation check failed, using land sound:",i?.message)}return null}function Mu(r,t){const i=(t.lng-r.lng)*Math.PI/180,s=r.lat*Math.PI/180,l=t.lat*Math.PI/180,c=Math.sin(i)*Math.cos(l),d=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(i);return(Math.atan2(c,d)*180/Math.PI+360)%360}function qv(r,t){let i=Math.abs(r%360-t%360);return i>180&&(i=360-i),i}function nR(r,t=1200,i=900){const s=new Ky;s.background=new qe(12113128);const l=80,c=320;s.fog=new Np(13421772,l,c);const d=new $i(45,t/i,.1,500),p=r.visitedLat??47.62,m=r.visitedLng??-122.35,h=r.originalLat??47.6205,_=r.originalLng??-122.3493,M=r.cameraHeading??0,g=12e3,y=1/20,b=y,w=g*y,S=r.visibleNeedles??[],x=T2(p,m),D={lat:p,lng:m},N={lat:h,lng:_},k=S.some(O=>O.needleId===Ze)&&(h!==p||_!==m)?Mu(D,N):Math.round(Number(M)/30)*30;let z=(360-k)*Math.PI/180;function G(O){return O<=750?180:O<=1500?95:70}const T=S[0],C=[];T&&C.push(T);const rt=S.find(O=>O.needleId===Ze),Y=S.slice(1).filter(O=>O.needleId!==Ze).filter(O=>{const it=O.distanceMeters??0,pt=O.bearingDeg??0,et=qv(pt,k);return it<=g&&et<=G(it)});rt!=null&&C.push(rt);const $=[...Y].sort((O,it)=>(O.distanceMeters??0)-(it.distanceMeters??0)),ft=$.filter(O=>(O.distanceMeters??0)<=2e3),K=$.filter(O=>!ft.includes(O)).slice(0,10),P=new Set(C.map(O=>O.needleId));for(const O of ft)P.has(O.needleId)||(C.push(O),P.add(O.needleId));for(const O of K)P.has(O.needleId)||(C.push(O),P.add(O.needleId));C.sort((O,it)=>(O.distanceMeters??0)-(it.distanceMeters??0));const B=k,ht=C.find(O=>O.needleId===Ze),St=55,Ot=O=>{if(ht==null)return"right";const it=(360-O)*Math.PI/180,pt=(ht.bearingDeg??0)*Math.PI/180,et=Math.min(w,(ht.distanceMeters??0)*b),Rt=Math.sin(pt)*et,Bt=-Math.cos(pt)*et,Yt=Math.sin(it)*St,Kt=Math.cos(it)*St,Xt=Rt-Yt,ce=Bt-Kt,Pe=Math.cos(it),Ie=-Math.sin(it);return Xt*Pe+ce*Ie>=0?"right":"left"},I=(B+Ev+360)%360,J=(B-Ev+360)%360;let yt=Ot(I)==="left"?I:J;const Pt=C.slice(1).map(O=>(O.bearingDeg??0)%360);let $t=Pt.length>=2?360:0;if(Pt.length>=2){let O=0,it=1;for(let pt=0;pt<Pt.length;pt++)for(let et=pt+1;et<Pt.length;et++){const Rt=qv(Pt[pt],Pt[et]);Rt<$t&&($t=Rt,O=pt,it=et)}if($t<v2){const pt=Pt[O],et=Pt[it];let Rt=(pt+et)/2;Math.abs(pt-et)>180&&(Rt=(Rt+180)%360);const Bt=(Rt+360)%360;(Ot(Bt)==="left"||ht==null)&&(yt=Bt)}}z=(360-yt)*Math.PI/180;const st=C.length>0,bt=Math.round(Number(k)/30)*30,Ut=Math.round(p*1e4)*1e4+Math.round(m*1e4)^bt+1,zt=x2(Ut);let Qt=0;const le=O=>Qt>=mi?!1:(s.add(O),Qt++,!0),cn=new vE(16777215,.55);s.add(cn);const Ee=new _E(16774630,.85);Ee.position.set(80,120,60),Ee.castShadow=!1,s.add(Ee);const Se=(x.parkFactor??0)>=.6||x.zoneName==="seattle_center_park"||Math.abs(p-Re.lat)<.002&&Math.abs(m-Re.lng)<.002?5933658:8035966,Fe=new gr(400,400),ge=new Jn({color:Se}),Ce=new $e(Fe,ge);Ce.rotation.x=-Math.PI/2,Ce.position.y=-.5,s.add(Ce);const V=M2(),sn=y2(p,m),{isWaterZone:we,isCoastlineZone:Be,waterType:se}=sn;if(we||Be){const O=(V.backgroundZ.min+V.backgroundZ.max)/2,it=new gr(500,180),pt=new Jn({color:3829656}),et=new $e(it,pt);if(et.rotation.x=-Math.PI/2,et.position.set(0,-2,O),s.add(et),Be||se==="puget_sound"){const Rt=V.backgroundZ.max,Bt=new gr(500,10),Yt=new Jn({color:5925466}),Kt=new $e(Bt,Yt);Kt.rotation.x=-Math.PI/2,Kt.position.set(0,-1.5,Rt),s.add(Kt)}}const L=we||Be,E=L?V.backgroundZ.max:null,Q=L?{zMin:V.backgroundZ.min,zMax:V.backgroundZ.max}:null,Mt=(O,it)=>Q!=null&&it>=Q.zMin&&it<=Q.zMax,Ct=r.sceneContext??"seattle_general",xt=A2(x,Ct,L),ee=R2(xt),Gt=x.buildingStyle??"medium",re=x.parkFactor??.2,he={tall:{skyline:6,mid:12,backH:28,hMin:18,hMax:32,footW:14,footD:10},medium:{skyline:2,mid:10,backH:16,hMin:8,hMax:18,footW:10,footD:8},small:{skyline:0,mid:10,backH:0,hMin:4,hMax:10,footW:8,footD:6}},At=he[Gt]??he.medium;At.skyline+At.mid;const Lt=V.farBackgroundZ;if(Lt&&Qt<mi){const O=new Jn({color:10136508}),it=5;for(let pt=0;pt<it&&Qt<mi;pt++){const et=12+zt()*10,Rt=24+zt()*20,Bt=new vl(Rt,et,8),Yt=new $e(Bt,O),Kt=Lt.min+zt()*(Lt.max-Lt.min),Xt=(zt()-.5)*160;Yt.position.set(Xt,et/2+(zt()-.5)*2,Kt),le(Yt)}}const Zt=new Jn({color:4871528}),Wt=new Jn({color:2972205}),qt=5,_e=(V.midgroundZ.min+V.midgroundZ.max)/2,j=(V.backgroundZ.min+V.backgroundZ.max)/2;let kt=null;const Vt=14,ne=14,It=6;let vt=0;const Ht=Ct==="pike_place";if(At.skyline>0&&!L&&!Ht)for(let O=0;O<At.skyline&&Qt<mi&&vt<Vt;O++){const it=(O%2===0?-1:1)*(25+zt()*20);let pt=j+(zt()-.5)*30;pt=Math.max(V.backgroundZ.min,Math.min(pt,V.backgroundZ.max));const et=Fs(it,pt),Rt=Tv(zt);let Bt=xt==="downtown"&&ee?ee.hMin+zt()*(ee.hMax-ee.hMin):At.backH;const Yt=Math.max(4,Math.round(At.footW*Rt.w)),Kt=Math.max(4,Math.round(At.footD*Rt.d)),Xt=new ba(Yt,Bt,Kt),ce=new $e(Xt,Zt);ce.position.set(et.x,Bt/2,et.z),ce.rotation.y=(zt()-.5)*.4,le(ce)&&vt++}const me=Ht?12:At.mid;for(let O=0;O<me&&Qt<mi&&vt<Vt;O++){let it,pt,et,Rt,Bt;if(Ht)it=(zt()-.5)*40,pt=_e+(zt()-.5)*28,et=4+O%3*2,Rt=8,Bt=6;else{it=(O%6-2.5)*45+O%3*8,pt=-90-Math.floor(O/6)*35-O%2*15,ee?et=ee.hMin+zt()*(ee.hMax-ee.hMin):et=At.hMin+zt()*(At.hMax-At.hMin);const Pe=Tv(zt);Rt=Math.max(4,Math.round(At.footW*Pe.w)),Bt=Math.max(4,Math.round(At.footD*Pe.d))}pt=Math.max(V.backgroundZ.min,Math.min(pt,V.midgroundZ.max)),L&&(pt=Math.max(V.backgroundZ.max+5,pt),pt=Math.min(pt,V.midgroundZ.max));let Yt=0;for(;L&&Mt(it,pt)&&Yt<qt;)it=-40+zt()*80,pt=V.backgroundZ.max+5+zt()*(V.midgroundZ.max-V.backgroundZ.max-10),Yt++;if(L&&Mt(it,pt))continue;const Kt=Fs(it,pt),Xt=new ba(Rt,et,Bt),ce=new $e(Xt,Zt);ce.position.set(Kt.x,et/2,Kt.z),Ht||(ce.rotation.y=(zt()-.5)*.4),le(ce)&&vt++}if((Gt==="tall"||Gt==="medium")&&!L&&Qt<mi){const O=Gt==="tall"?38:24;kt=new ba(14,O,12);const it=Fs(55,-140),pt=new $e(kt,Zt);if(pt.position.set(it.x,O/2,it.z),le(pt),Qt<mi){const et=Fs(-50,-130),Rt=new $e(kt.clone(),Zt);Rt.position.set(et.x,O/2,et.z),le(Rt)}}if(Ct==="stadiums"&&Qt<mi){const O=(V.midgroundZ.max+V.backgroundZ.min)/2-8,it=new $e(new Tu(32,12,8,0,Math.PI*2,0,Math.PI/2.2),new Jn({color:5921378}));it.position.set(-58,16,O),le(it)}if((Ct==="waterfront"||Ct==="ferris_wheel")&&L&&E!=null&&Qt<mi){const O=new Jn({color:5917242}),it=E-12;for(let pt=0;pt<4&&Qt<mi;pt++){const et=new $e(new ba(80,1.5,6),O);et.position.set(-35+pt*26,.75,it-pt*20),le(et)}}if(Ct==="ferris_wheel"&&Qt<mi){const O=L&&E!=null?E+10:V.backgroundZ.max-20,it=new $e(new Au(18,1.2,8,24),new Jn({color:2763306}));it.rotation.x=Math.PI/2,it.position.set(32,20,O),le(it)}if(Qt<mi){const O=new Jn({color:5921362}),it=new $e(new ya(6,7,14,8),O);it.position.set(-70+zt()*40,7,j-20);const pt=Fs(it.position.x,it.position.z);if(it.position.set(pt.x,7,pt.z),le(it)&&Qt<mi){const et=new $e(new ba(10,8,6),O);et.position.set(50-zt()*30,4,j-30);const Rt=Fs(et.position.x,et.position.z);et.position.set(Rt.x,4,Rt.z),et.rotation.y=(zt()-.5)*.3,le(et)}}let Le=Gt==="tall"?4:Gt==="medium"?8:14;re>=.6&&(Le+=10),Le=Math.min(Le,ne);const ye=new vl(4,10,6),xn=new ya(.5,.7,2,6);for(let O=0;O<Le&&Qt<mi;O++){const it=-50+zt()*100,pt=_e+(zt()-.5)*50,et=Fs(it,pt),Rt=.7+zt()*.6,Bt=new lo,Yt=new $e(xn,Wt);Yt.position.y=1,Bt.add(Yt);const Kt=new $e(ye,Wt);Kt.position.y=2+5*Rt,Kt.scale.setScalar(Rt),Bt.add(Kt),Bt.position.set(et.x,0,et.z),le(Bt)}const ti=new Jn({color:2771498}),da=Math.min(re>=.5?8:4,It),ea=new Tu(2,6,5),La=new vl(1.5,3,5);for(let O=0;O<da&&Qt<mi;O++){const it=(zt()-.5)*100,pt=Math.max(V.midgroundZ.min,V.midgroundZ.max*.3+zt()*(V.midgroundZ.max-V.midgroundZ.min)*.7),et=Fs(it,pt),Rt=zt()<.6,Bt=new $e(Rt?ea:La,ti),Yt=.8+zt()*.6;Bt.scale.setScalar(Yt),Bt.position.set(et.x,(Rt?2:1.5)*Yt,et.z),le(Bt)}const vi=7043979;function li(O,it,pt){pt=Math.max(0,Math.min(1,pt));const et=O>>16&255,Rt=O>>8&255,Bt=O&255,Yt=it>>16&255,Kt=it>>8&255,Xt=it&255;return Math.round(et+(Yt-et)*pt)<<16|Math.round(Rt+(Kt-Rt)*pt)<<8|Math.round(Bt+(Xt-Bt)*pt)}function Xn(O){return O>9e3?"silhouette":O>6e3?"simplified":"full"}function xi(O,it=2904706){const pt=new lo;if(O==="silhouette"){const ce=new ya(.8,2.2,28,6),Pe=new Jn({color:it}),Ie=new $e(ce,Pe);Ie.position.y=14,pt.add(Ie);const Oe=new ya(4,4,.6,8),hn=new Jn({color:li(14870768,it,.3)}),ae=new $e(Oe,hn);return ae.position.y=28.6,pt.add(ae),pt}const et=new ya(1.2,2.2,28,O==="simplified"?6:8),Rt=new Jn({color:it}),Bt=new $e(et,Rt);Bt.position.y=14,pt.add(Bt);const Yt=new ya(4.5,4.8,1.2,O==="simplified"?8:16),Kt=new Jn({color:14870768}),Xt=new $e(Yt,Kt);if(Xt.position.y=28.6,pt.add(Xt),O==="full"){const ce=new Au(5,.4,8,24),Pe=new Jn({color:13358560}),Ie=new $e(ce,Pe);Ie.rotation.x=Math.PI/2,Ie.position.y=29.2,pt.add(Ie);const Oe=new ya(.15,.2,6,6),hn=new Jn({color:4871528}),ae=new $e(Oe,hn);ae.position.y=31.2,pt.add(ae)}return pt}const Bn=O=>Math.max(.12,Math.min(1,1-O/g*.85)),un=[2904706,1985899,2450344,1981023,3362155,2968174];if(st)C.forEach((O,it)=>{const pt=O.distanceMeters??0,et=un[it%un.length],Rt=Math.min(1,pt/g*.7),Bt=pt===0?et:li(et,vi,Rt),Yt=Xn(pt),Kt=xi(Yt,Bt);if(it===0)Kt.position.set(0,0,0),Kt.scale.setScalar(1);else{const Xt=Math.min(w,pt*b),ce=(O.bearingDeg??0)*Math.PI/180;Kt.position.set(Math.sin(ce)*Xt,0,-Math.cos(ce)*Xt),Kt.scale.setScalar(Bn(pt))}s.add(Kt)});else{const O=typeof si=="function"?si(D,N):500,it=Xn(O),pt=Math.min(w,O*b),et=Math.sin(z)*pt,Rt=-Math.cos(z)*pt,Bt=xi("full",2904706);Bt.position.set(0,0,0),Bt.scale.setScalar(1),s.add(Bt);const Yt=Bn(O),Kt=li(1985899,vi,O/g*.7),Xt=xi(it,Kt);Xt.position.set(et,0,Rt),Xt.scale.setScalar(Yt),s.add(Xt)}const fn=15,zn=55,bn=80;let ci=zn,ui=!1;const Hi=st?Math.max(0,C.length-1):1,Hn=C.find(O=>O.needleId===Ze);let ei=0,fi=0;if(Hi>0){if(Hn!=null){const O=Math.min(w,(Hn.distanceMeters??0)*b),it=(Hn.bearingDeg??0)*Math.PI/180;ei=Math.sin(it)*O,fi=-Math.cos(it)*O,ui=!0}else if(!st){const O=typeof si=="function"?si(D,N):500,it=Math.min(w,O*b);ei=Math.sin(z)*it,fi=-Math.cos(z)*it,ui=!0}if(ui){const O=Math.sin(z)*zn,it=Math.cos(z)*zn,pt=-O,et=fn-25,Rt=-it,Bt=Math.sqrt(pt*pt+et*et+Rt*Rt)||1,Yt=ei-O,Kt=fi-it,Xt=(Yt*pt+et*-25+Kt*Rt)/Bt,ce=Math.sqrt(Yt*Yt+625+Kt*Kt)||1,Pe=Math.cos(22.5*Math.PI/180);(Xt<0||ce>0&&Xt/ce<Pe)&&(ci=Math.min(bn,zn+12))}}const Ri=Math.sin(z)*ci,Wn=Math.cos(z)*ci;d.position.set(Ri,fn+10,Wn),d.lookAt(0,fn,0),d.updateProjectionMatrix();const A=new p2({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});A.setSize(t,i),A.setClearColor(12113128),A.render(s,d);let W=A.domElement.toDataURL("image/png");const ut=document.createElement("canvas");ut.width=t,ut.height=i;const nt=ut.getContext("2d");if(nt){nt.drawImage(A.domElement,0,0);const O=nt.createRadialGradient(t/2,i/2,t*.2,t/2,i/2,t*.75);O.addColorStop(0,"rgba(242, 232, 204,0)"),O.addColorStop(.6,"rgba(200,200,200,0.15)"),O.addColorStop(1,"rgba(80,80,80,0.4)"),nt.globalCompositeOperation="multiply",nt.fillStyle=O,nt.fillRect(0,0,t,i),W=ut.toDataURL("image/png")}return A.dispose(),Fe.dispose(),ge.dispose(),Zt.dispose(),Wt.dispose(),kt&&kt.dispose(),W}function xp(r){return!(r.composedPath?.()??[]).some(i=>!i||typeof i.classList?.contains!="function"?!1:!!(i.classList.contains("exhibit-footer")||i.classList.contains("exhibit-legend")||i.classList.contains("exhibit-header")||i.classList.contains("exhibit-buttons-section")||i.classList.contains("exhibit-data")||i.classList.contains("map-overlay")||i.classList.contains("needle-action-menu")||i.classList.contains("needle-exit-view")||i.tagName==="BUTTON"||i.classList.contains("gmnoprint")||i.getAttribute?.("role")==="button"))}function iR(r){return xp(r)}function Bs(r,t,i,s){const l=898311174991017e-20,c=1/(111320*Math.cos(r*Math.PI/180)),d=i*l,p=i*c,m=[];for(let h=0;h<=s;h++){const _=h/s*2*Math.PI;m.push({lat:r+d*Math.cos(_),lng:t+p*Math.sin(_),altitude:0})}return m}function aR(){if(!window.__TWO_NEEDLES_MAPS3D_PROMISE__){const r={key:"AIzaSyDf3DBK0tNq5BPLa5lOd5RHEUgqZwNCIKo",v:"beta"},t="e61fa144b288162660c04ef5";r.mapIds=[t],JS(r),window.__TWO_NEEDLES_MAPS3D_PROMISE__=Su("maps3d")}return window.__TWO_NEEDLES_MAPS3D_PROMISE__}function sR(){const[r,t]=gt.useState(!1),[i,s]=gt.useState(!1),[l,c]=gt.useState(null),[d,p]=gt.useState(null),[m,h]=gt.useState(!1),[_,M]=gt.useState([]),{sfxEnabled:g,isUnlockingRef:y,openAudioModal:b,registerUnlockSfxCallback:w,registerOpenCreditsCallback:S,registerPlayShootingSoundCallback:x}=WS(),D=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window),[N,U]=gt.useState(!0),[k,z]=gt.useState(!1),[G,T]=gt.useState(!1),[C,rt]=gt.useState(null),[F,Y]=gt.useState(null),[$,ft]=gt.useState(null),[K,P]=gt.useState(null),[B,ht]=gt.useState(!1),[St,Ot]=gt.useState(!1),[I,J]=gt.useState(null),[yt,Pt]=gt.useState(null),[$t,st]=gt.useState(!1),[bt,Ut]=gt.useState(null),[zt,Qt]=gt.useState(null),[le,cn]=gt.useState(0),[Ee,Se]=gt.useState(!1),[Fe,ge]=gt.useState(null),[Ce,V]=gt.useState(null),[sn,we]=gt.useState(!1),[Be,se]=gt.useState(null),[L,E]=gt.useState(!1),[Q,Mt]=gt.useState(!1),[Ct,xt]=gt.useState(!1),[ee,Gt]=gt.useState(!1),[re,he]=gt.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 640px)").matches:!1);gt.useEffect(()=>{const H=window.matchMedia("(max-width: 640px)"),Z=()=>he(H.matches);return H.addEventListener("change",Z),()=>H.removeEventListener("change",Z)},[]);const At=gt.useRef(null),Lt=gt.useRef(B);Lt.current=B;const Zt=gt.useRef(null),Wt=gt.useRef(!1),qt=gt.useRef(null),_e=gt.useRef(new Map),j=1+_.length,kt=fu(j),Vt=fu(.33+_.length*k2),ne=fu(45e5+_.length*Dv+_.reduce((H,Z)=>H+(Z.landValue??0),0)),It=_.reduce((H,Z)=>H+(Z.tourismRevenue??lu(Z.lat,Z.lng)),0),vt=fu(It),Ht=gt.useRef(null),me=gt.useRef([]),Le=gt.useRef(null),ye=gt.useRef(null),xn=gt.useRef(null),ti=gt.useRef(null),da=gt.useRef(null),ea=gt.useRef(null),La=gt.useRef(null),vi=gt.useRef(null),li=gt.useRef(null),Xn=gt.useRef(null),xi=gt.useRef(null),Bn=gt.useRef(null),un=gt.useRef(null),fn=gt.useRef(null),zn=gt.useRef(null),bn=gt.useRef(null),ci=gt.useRef(null),ui=gt.useRef(null),Hi=gt.useRef(null),Hn=gt.useRef(null),ei=gt.useRef(null),fi=gt.useRef(0),Ri=gt.useRef(null),Wn=gt.useRef(new Map),A=gt.useRef(1),W=gt.useRef(null),ut=gt.useRef(null),nt=gt.useRef(null),O=gt.useRef(!1),it=gt.useRef(!1),pt=gt.useRef(null),et=gt.useRef(null),Rt=gt.useRef(null),Bt=gt.useRef(!1);gt.useEffect(()=>{pt.current=C},[C]),gt.useEffect(()=>{aR().then(()=>t(!0)).catch(H=>{console.error(H),c(H?.message||String(H))})},[]),gt.useEffect(()=>{fetch(W2).then(H=>H.json()).then(H=>{vp=q2(H)}).catch(H=>console.warn("Seattle neighborhoods GeoJSON load failed, using water bounds only:",H))},[]),gt.useEffect(()=>{if(!r||!Ht.current)return;const H=Ht.current;H.center=Re,H.tilt=gh,H.heading=_h,H.range=vh,H.mode="HYBRID",H.mapId="e61fa144b288162660c04ef5",H.style.width="100%",H.style.height="100%";const Z=wt=>{(wt?.detail?.isSteady??wt?.isSteady)&&s(!0)};H.addEventListener("gmp-steadystate",Z),H.addEventListener("gmp-steadychange",Z);const mt=window.setTimeout(()=>s(!0),2500);return H.isSteady&&s(!0),()=>{window.clearTimeout(mt),H.removeEventListener("gmp-steadystate",Z),H.removeEventListener("gmp-steadychange",Z)}},[r]),gt.useEffect(()=>{if(!i||!Ht.current||m)return;const H=Ht.current;(async()=>{try{const Z=await Su("maps3d"),{Model3DElement:mt,Polygon3DElement:wt}=Z;if(mt){if(Ri.current=mt,xn.current)H.contains(xn.current)||H.appendChild(xn.current);else{const Nt=new mt({src:Av,position:{lat:vu.lat,lng:vu.lng,altitude:(vu.altitude??0)+C2},scale:Sh,orientation:{tilt:270}});xn.current=Nt,H.appendChild(Nt)}const Ft=new mt({src:Mh,position:Re,scale:Sh,orientation:{tilt:270}});ti.current=Ft,H.appendChild(Ft)}else console.warn("Model3DElement not in maps3d library (try v=alpha). Ghost model disabled.");if(wt){const Ft=new wt({path:Bs(Re.lat,Re.lng,Bi,Is),fillColor:"rgba(136, 181, 216, 0.25)",strokeColor:"rgba(59, 127, 184, 0.8)",strokeWidth:2,altitudeMode:"RELATIVE_TO_GROUND"});da.current=Ft;const Nt=new wt({path:Bs(Re.lat,Re.lng,xh,Is),fillColor:"rgba(232, 184, 66, 0.35)",strokeColor:"rgba(232, 184, 66, 0.6)",strokeWidth:2,altitudeMode:"RELATIVE_TO_GROUND"});ea.current=Nt;const Jt=new wt({path:Bs(Re.lat,Re.lng,Bi,Is),fillColor:"rgba(136, 181, 216, 0.45)",strokeColor:"rgba(59, 127, 184, 1)",strokeWidth:3,altitudeMode:"RELATIVE_TO_GROUND"});La.current=Jt}else console.warn("Polygon3DElement missing; footprint disabled.");h(!0)}catch(Z){console.error(Z)}})()},[i,m]),gt.useEffect(()=>{const H=ye.current,Z=Ht.current;if(!H||!Z||!m)return;const mt=Nt=>Nt.some(Jt=>Jt?.classList?.contains?.("needle-action-menu")),wt=Nt=>{const Jt=Nt.composedPath?.()??[],ie=typeof document.elementsFromPoint=="function"?document.elementsFromPoint(Nt.clientX,Nt.clientY):Jt,de=mt(Jt)||mt(ie);if(!xp(Nt)){de||(et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null));return}let jt=Eh(Z,Nt.clientX,Nt.clientY,Rt);if(!jt){const ue=H.getBoundingClientRect();jt=yh(Z,ue,Nt.clientX,Nt.clientY)}if(W.current=jt,p(jt),it.current&&N&&jt&&(ut.current=jt,Nt.preventDefault()),!N&&!K&&!B){if(!de)if(jt){const ue=si(jt,{lat:Re.lat,lng:Re.lng}),mn=(me.current??[]).reduce((Gi,na)=>{const Oa=si(jt,{lat:na.lat,lng:na.lng});return Oa<Gi.d?{id:na.id,d:Oa}:Gi},{id:null,d:1/0}),On=ue<Bi,Rn=mn.id!=null&&mn.d<Bi;On&&(!Rn||ue<=mn.d)?(D&&(et.current&&(clearTimeout(et.current),et.current=null),et.current=setTimeout(()=>{et.current=null,rt(null),Ut(null)},wv)),rt(Ze)):Rn?(D&&(et.current&&(clearTimeout(et.current),et.current=null),et.current=setTimeout(()=>{et.current=null,rt(null),Ut(null)},wv)),rt(mn.id)):D||(rt(null),Ut(null))}else D||(rt(null),Ut(null));if(pt.current==null&&jt){const ue=me.current,Me=si(jt,{lat:Re.lat,lng:Re.lng}),mn=Me<Bi;if(ue?.length){const On=ue.reduce((Rn,Yn)=>{const Gi=si(jt,{lat:Yn.lat,lng:Yn.lng});return Gi<Rn.d?{id:Yn.id,d:Gi}:Rn},{id:null,d:1/0});if(mn&&(!On.id||On.d>=Bi||Me<=On.d))Y(Ze);else if(On.id!=null&&On.d<Bi){const Rn=F;if(Rn==null)Y(On.id);else if(On.id===Rn)Y(On.id);else{const Yn=ue.find(na=>na.id===Rn),Gi=Yn?si(jt,{lat:Yn.lat,lng:Yn.lng}):Rn===Ze?Me:1/0;On.d<Gi*.75&&Y(On.id)}}else Y(null)}else Y(mn?Ze:null)}}else Y(null)},Ft=()=>{W.current=null,p(null),Y(null),D||(et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null))};return H.addEventListener("pointermove",wt,{passive:!1}),H.addEventListener("pointerleave",Ft),()=>{H.removeEventListener("pointermove",wt),H.removeEventListener("pointerleave",Ft)}},[m,N,K,B,C,F]);const Yt=gt.useCallback(()=>{if(F==null){Qt(null);return}const H=Ht.current,Z=ye.current;if(!H||!Z){Qt(null);return}if(F===Ze){const Nt=_e.current.get(Ze)??ml(H,Z,{lat:Re.lat,lng:Re.lng},Rt);Qt(Nt??null);return}const mt=_.find(Nt=>Nt.id===F);if(!mt){Qt(null);return}const wt=Z.getBoundingClientRect(),Ft=xu(H,wt,{lat:mt.lat,lng:mt.lng});Qt(Ft||null)},[F,_]);gt.useLayoutEffect(()=>{Yt()},[Yt]),gt.useEffect(()=>{const H=Ht.current,Z=ye.current;if(!H||!Z||F==null)return;const mt=()=>Yt();H.addEventListener("gmp-centerchange",mt),H.addEventListener("gmp-headingchange",mt),H.addEventListener("gmp-rangechange",mt);const wt=new ResizeObserver(mt);return wt.observe(Z),()=>{H.removeEventListener("gmp-centerchange",mt),H.removeEventListener("gmp-headingchange",mt),H.removeEventListener("gmp-rangechange",mt),wt.disconnect()}},[F,Yt]);const Kt=gt.useCallback(()=>{const H=Ht.current,Z=ye.current;if(!H||!Z)return;const mt=_e.current;mt.clear();const wt=ml(H,Z,{lat:Re.lat,lng:Re.lng},Rt);wt!=null&&mt.set(Ze,wt);for(const Ft of _){const Nt=ml(H,Z,{lat:Ft.lat,lng:Ft.lng},Rt);Nt!=null&&mt.set(Ft.id,Nt)}cn(Ft=>Ft+1),Ut(Ft=>C==null?null:_e.current.get(C)??null)},[_,C]);gt.useEffect(()=>{Kt()},[Kt]),gt.useEffect(()=>{const H=Ht.current,Z=ye.current;if(!H||!Z)return;const mt=()=>{const Ft=_e.current;Ft.clear();const Nt=ml(H,Z,{lat:Re.lat,lng:Re.lng},Rt);Nt!=null&&Ft.set(Ze,Nt);for(const Jt of _){const ie=ml(H,Z,{lat:Jt.lat,lng:Jt.lng},Rt);ie!=null&&Ft.set(Jt.id,ie)}cn(Jt=>Jt+1),Ut(Jt=>C!=null?_e.current.get(C)??null:null)};H.addEventListener("gmp-centerchange",mt),H.addEventListener("gmp-headingchange",mt),H.addEventListener("gmp-rangechange",mt),H.addEventListener("gmp-tiltchange",mt);const wt=new ResizeObserver(mt);return wt.observe(Z),()=>{H.removeEventListener("gmp-centerchange",mt),H.removeEventListener("gmp-headingchange",mt),H.removeEventListener("gmp-rangechange",mt),H.removeEventListener("gmp-tiltchange",mt),wt.disconnect()}},[_,C]),gt.useLayoutEffect(()=>{Ut(C!=null?_e.current.get(C)??null:null)},[C]),gt.useEffect(()=>{if(!Ee)return;const H=Z=>{Z.key==="Escape"&&Se(!1)};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[Ee]),gt.useEffect(()=>{if(!i||!Ht.current)return;const Z=Ht.current.innerMap;Z&&Su("maps").then(({OverlayView:mt})=>{class wt extends mt{onAdd(){}draw(){Bt.current=!0}onRemove(){Bt.current=!1}}const Ft=new wt;Ft.setMap(Z),Rt.current=Ft}).catch(()=>{})},[i]);const Xt=gt.useCallback(async H=>{if(!H)return;const Z=fi.current+1,mt=await Wv(H.lat,H.lng),wt=Ov(H.lat,H.lng,mt),Ft=g&&(!y?.current||Z===1),Nt=Z===1&&y?.current,Jt=(de,jt=.9)=>{de&&(Nt?(de.volume=0,de.currentTime=0,de.play().catch(()=>{}),requestAnimationFrame(()=>{de.volume=jt,de.currentTime=0,de.play().catch(ue=>console.error("audio play failed",ue))})):(de.volume=jt,de.currentTime=0,de.play().catch(ue=>console.error("audio play failed",ue))))};Ft&&(Pv(H.lat,H.lng)?Jt(xi.current):Iv(H.lat,H.lng)?Jt(un.current):Fv(H.lat,H.lng)?Jt(Bn.current):Bv(H.lat,H.lng)?Jt(fn.current):zv(H.lat,H.lng)||Hv(H.lat,H.lng)||Gv(H.lat,H.lng)?Jt(li.current):Jt(wt?Xn.current:vi.current),Z>=5&&(Z-5)%10===0&&Jt(zn.current,.2));const ie=cu(H.lat,H.lng);M(de=>[...de,{id:A.current++,lat:H.lat,lng:H.lng,altitude:H.altitude??0,neighborhoodLabel:ie.neighborhoodLabel,landValue:ie.landValue,ratePerSqFt:ie.ratePerSqFt,tourismRevenue:lu(H.lat,H.lng)}]),U(!1)},[g,y]);gt.useEffect(()=>{const H=ye.current,Z=Ht.current;if(!H||!Z||!m)return;const mt=async wt=>{if(O.current){O.current=!1;return}if(!iR(wt))return;let Ft=Eh(Z,wt.clientX,wt.clientY,Rt);if(!Ft){const Jt=H.getBoundingClientRect();Ft=yh(Z,Jt,wt.clientX,wt.clientY)}const Nt=Ft??W.current;if(Nt){if(K!=null){const Jt=await Wv(Nt.lat,Nt.lng),ie=Ov(Nt.lat,Nt.lng,Jt);if(!y?.current&&g)if(Pv(Nt.lat,Nt.lng)){const jt=xi.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else if(Iv(Nt.lat,Nt.lng)){const jt=un.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else if(Fv(Nt.lat,Nt.lng)){const jt=Bn.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else if(Bv(Nt.lat,Nt.lng)){const jt=fn.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else if(zv(Nt.lat,Nt.lng)||Hv(Nt.lat,Nt.lng)||Gv(Nt.lat,Nt.lng)){const jt=li.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else if(ie){const jt=Xn.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}else{const jt=vi.current;jt&&(jt.volume=.9,jt.currentTime=0,jt.play().catch(ue=>console.error("audio play failed",ue)))}const de=cu(Nt.lat,Nt.lng);M(jt=>jt.map(ue=>ue.id===K?{...ue,lat:Nt.lat,lng:Nt.lng,altitude:Nt.altitude??0,neighborhoodLabel:de.neighborhoodLabel,landValue:de.landValue,ratePerSqFt:de.ratePerSqFt,tourismRevenue:lu(Nt.lat,Nt.lng)}:ue)),P(null),U(!1);return}if(!N&&!B){let ie=(wt.composedPath?.()??[]).find(de=>de?.dataset?.needleId)?.dataset?.needleId;if(!ie&&_.length>0){const de=_.reduce((jt,ue)=>{const Me=si(Nt,{lat:ue.lat,lng:ue.lng});return Me<jt.d?{id:ue.id,d:Me}:jt},{id:null,d:1/0});de.id!=null&&de.d<Bi&&(ie=String(de.id))}if(ie==null){const de=si(Nt,{lat:Re.lat,lng:Re.lng}),jt=_.reduce((ue,Me)=>{const mn=si(Nt,{lat:Me.lat,lng:Me.lng});return mn<ue.d?{id:Me.id,d:mn}:ue},{id:null,d:1/0});de<Bi&&(jt.id==null||jt.d>=Bi||de<=jt.d)&&(ie=String(Ze))}if(ie!=null){const de=Number(ie),jt=de===Ze?null:_.find(ue=>ue.id===de);if(jt||de===Ze){if(jt){const ue=Ht.current,Me=H.getBoundingClientRect(),mn=ue&&Me?xu(ue,Me,{lat:jt.lat,lng:jt.lng}):null;mn&&(ft({x:mn.x,y:mn.y}),setTimeout(()=>ft(null),280))}Y(null),rt(de);return}}et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null)}N&&await Xt(Nt)}};return H.addEventListener("click",mt,!0),()=>H.removeEventListener("click",mt,!0)},[m,N,K,B,_,Xt]),gt.useEffect(()=>{const H=ye.current,Z=Ht.current;if(!H||!Z||!m||!(typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window)))return;const wt=Jt=>{if(!N||!xp(Jt))return;if(it.current){try{H.releasePointerCapture(nt.current)}catch{}z(!1),it.current=!1,nt.current=null;return}z(!0),it.current=!0,nt.current=Jt.pointerId;try{Jt.currentTarget.setPointerCapture(Jt.pointerId)}catch{}Jt.preventDefault();let ie=Eh(Z,Jt.clientX,Jt.clientY,Rt);if(!ie){const de=H.getBoundingClientRect();ie=yh(Z,de,Jt.clientX,Jt.clientY)}ut.current=ie??ut.current},Ft=Jt=>{if(!it.current||Jt.pointerId!==nt.current)return;const ie=ut.current??W.current;try{H.releasePointerCapture(Jt.pointerId)}catch{}z(!1),it.current=!1,nt.current=null,ie&&(O.current=!0,Xt(ie))},Nt=Jt=>{if(!(!it.current||Jt.pointerId!==nt.current)){try{H.releasePointerCapture(Jt.pointerId)}catch{}z(!1),it.current=!1,nt.current=null}};return H.addEventListener("pointerdown",wt,{passive:!1}),H.addEventListener("pointerup",Ft,{passive:!0}),H.addEventListener("pointercancel",Nt,{passive:!0}),()=>{H.removeEventListener("pointerdown",wt),H.removeEventListener("pointerup",Ft),H.removeEventListener("pointercancel",Nt)}},[m,N,Xt]),gt.useEffect(()=>{const H=Ht.current,Z=Ri.current;if(!H||!Z)return;const mt=Wn.current;for(const wt of _){if(mt.has(wt.id))continue;const Ft=new Z({src:_p,position:{lat:wt.lat,lng:wt.lng,altitude:wt.altitude??0},scale:Sh,orientation:{tilt:270}});Ft.dataset.needleId=String(wt.id),mt.set(wt.id,Ft),H.appendChild(Ft)}},[_]),gt.useEffect(()=>{fi.current=_.length,me.current=_},[_]),gt.useEffect(()=>(_.length>=1&&!$t&&(Le.current=window.setTimeout(()=>{st(!0)},2e3)),()=>{Le.current&&(window.clearTimeout(Le.current),Le.current=null)}),[_.length,$t]),gt.useEffect(()=>{if(!yt)return;const H=setTimeout(()=>Pt(null),450);return()=>clearTimeout(H)},[yt]),gt.useEffect(()=>{if(!B)return;const H=Ht.current;if(!H)return;const Z=Zt.current;if(!Z?.center)return;const mt=()=>{if(!Lt.current||!Wt.current)return;const wt=H.center,Ft=H.range??Z.range,Nt=H.tilt??Z.tilt,Jt=H.heading??0,ie=Math.abs((wt?.lat??0)-Z.center.lat)>Cv||Math.abs((wt?.lng??0)-Z.center.lng)>Cv,de=Math.abs(Ft-Z.range)>O2,jt=Math.abs(Nt-Z.tilt)>P2;let ue=Math.abs(Jt%360-Z.heading%360);ue>180&&(ue=360-ue);const Me=ue>I2;(ie||de||jt||Me)&&ht(!1)};return H.addEventListener("gmp-centerchange",mt),H.addEventListener("gmp-rangechange",mt),H.addEventListener("gmp-tiltchange",mt),H.addEventListener("gmp-headingchange",mt),()=>{H.removeEventListener("gmp-centerchange",mt),H.removeEventListener("gmp-rangechange",mt),H.removeEventListener("gmp-tiltchange",mt),H.removeEventListener("gmp-headingchange",mt)}},[B]),gt.useEffect(()=>{B||(Wt.current=!1,qt.current&&(clearTimeout(qt.current),qt.current=null))},[B]),gt.useEffect(()=>{const H=Ht.current,Z=ti.current,mt=da.current;if(!H||!mt)return;N&&d?(Z&&(Z.position=d,Z.parentElement||H.appendChild(Z),Z.classList?.add?.("needle-model-outlined")),mt.path=Bs(d.lat,d.lng,Bi,Is),mt.parentElement||H.appendChild(mt)):(Z?.classList?.remove?.("needle-model-outlined"),Z?.parentElement&&H.removeChild(Z),mt.parentElement&&H.removeChild(mt))},[N,d]),gt.useEffect(()=>{const H=Ht.current,Z=ea.current;if(!H||!Z)return;const mt=F!=null&&C==null&&!N&&!K&&!B,wt=mt&&F!==Ze?_.find(Nt=>Nt.id===F):null;wt?(Z.path=Bs(wt.lat,wt.lng,xh,Is),Z.parentElement||H.appendChild(Z)):mt&&F===Ze?(Z.path=Bs(Re.lat,Re.lng,xh,Is),Z.parentElement||H.appendChild(Z)):Z.parentElement&&H.removeChild(Z)},[F,C,N,K,B,_]),gt.useEffect(()=>{const H=Ht.current,Z=La.current;if(!H||!Z)return;const mt=C!=null&&!N&&!K&&!B,wt=mt&&C!==Ze?_.find(Nt=>Nt.id===C):null;wt?(Z.path=Bs(wt.lat,wt.lng,Bi,Is),Z.parentElement||H.appendChild(Z)):mt&&C===Ze?(Z.path=Bs(Re.lat,Re.lng,Bi,Is),Z.parentElement||H.appendChild(Z)):Z.parentElement&&H.removeChild(Z)},[C,N,K,B,_]),gt.useEffect(()=>{const H=Wn.current,Z=C!=null&&!N&&!K&&!B?C:null;H.forEach((mt,wt)=>{if(!mt)return;const Ft=wt===Z;mt.src!==void 0&&(mt.src=Ft?Mh:_p),mt?.classList!=null&&(Ft?mt.classList.add("needle-model-outlined"):mt.classList.remove("needle-model-outlined"))})},[C,N,K,B]),gt.useEffect(()=>{const H=xn.current;if(!H)return;const Z=C===Ze&&!N&&!K&&!B;H.src!==void 0&&(H.src=Z?Mh:Av),H?.classList!=null&&(Z?H.classList.add("needle-model-outlined"):H.classList.remove("needle-model-outlined"))},[C,N,K,B]);const ce=!r||!i,Pe=gt.useCallback(()=>{const H=vi.current;H&&(H.volume=0,H.play().then(()=>{H.pause(),H.currentTime=0}).catch(()=>{}));const Z=li.current;Z&&(Z.volume=0,Z.play().then(()=>{Z.pause(),Z.currentTime=0}).catch(()=>{}));const mt=zn.current;mt&&(mt.volume=0,mt.play().then(()=>{mt.pause(),mt.currentTime=0}).catch(()=>{}));const wt=ci.current;wt&&(wt.volume=0,wt.play().then(()=>{wt.pause(),wt.currentTime=0}).catch(()=>{}));const Ft=ui.current;Ft&&(Ft.volume=0,Ft.play().then(()=>{Ft.pause(),Ft.currentTime=0}).catch(()=>{}));const Nt=bn.current;Nt&&(Nt.volume=0,Nt.play().then(()=>{Nt.pause(),Nt.currentTime=0}).catch(()=>{}));const Jt=Hn.current;Jt&&(Jt.volume=0,Jt.play().then(()=>{Jt.pause(),Jt.currentTime=0}).catch(()=>{}));const ie=ei.current;ie&&(ie.volume=0,ie.play().then(()=>{ie.pause(),ie.currentTime=0}).catch(()=>{}))},[]),Ie=gt.useCallback(()=>{y?.current||g&&ei.current&&(ei.current.volume=.4,ei.current.currentTime=0,ei.current.play().catch(()=>{}))},[g,y]);gt.useEffect(()=>{w(Pe)},[w,Pe]),gt.useEffect(()=>{x?.(Ie)},[x,Ie]),gt.useEffect(()=>{S(()=>Se(!0))},[S]);const Oe=H=>{!y?.current&&g&&bn.current&&(bn.current.volume=.6,bn.current.currentTime=0,bn.current.play().catch(Jt=>console.error("poof play failed",Jt)));const Z=Ht.current,mt=ye.current,wt=_.find(Jt=>Jt.id===H),Ft=_.filter(Jt=>Jt.id!==H).length===0;M(Jt=>Jt.filter(ie=>ie.id!==H));const Nt=Wn.current.get(H);if(Nt?.parentElement&&Nt.parentElement.removeChild(Nt),Wn.current.delete(H),wt&&Z&&mt){const Jt=mt.getBoundingClientRect(),ie=xu(Z,Jt,{lat:wt.lat,lng:wt.lng});ie&&Pt({x:ie.x,y:ie.y})}et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null),Ft&&U(!0)},hn=H=>{!y?.current&&g&&ci.current&&(ci.current.volume=.5,ci.current.currentTime=0,ci.current.play().catch(mt=>console.error("move play failed",mt)));const Z=Wn.current.get(H);Z?.parentElement&&Z.parentElement.removeChild(Z),Wn.current.delete(H),P(H),U(!0),et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null)},ae=H=>{const Z=H===Ze,mt=Z?null:_.find(ue=>ue.id===H),wt=Ht.current,Ft=Z?{lat:Re.lat,lng:Re.lng}:mt?{lat:mt.lat,lng:mt.lng}:null;if(!Ft||!wt)return;!y?.current&&g&&ui.current&&(ui.current.volume=.5,ui.current.currentTime=0,ui.current.play().catch(ue=>console.error("visit play failed",ue))),et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null),J(H),se(H),ht(!0),Ot(!1),Wt.current=!1,qt.current&&(clearTimeout(qt.current),qt.current=null);const Nt={lat:Re.lat,lng:Re.lng},de=(Mu(Ft,Nt)+15+360)%360,jt={center:{lat:Ft.lat,lng:Ft.lng,altitude:D2},tilt:N2,range:U2,heading:de};Zt.current=jt,typeof wt.flyCameraTo=="function"?wt.flyCameraTo({endCamera:jt,durationMillis:Rv}):(wt.center=jt.center,wt.tilt=jt.tilt,wt.range=jt.range,wt.heading=jt.heading),qt.current=window.setTimeout(()=>{Wt.current=!0,qt.current=null},Rv+L2)},qn=(H=!0)=>{if(qt.current&&(clearTimeout(qt.current),qt.current=null),Wt.current=!1,Zt.current=null,H){const Z=Ht.current;Z&&(Z.center=Re,Z.tilt=gh,Z.heading=_h,Z.range=vh)}J(null),ht(!1),Ot(!1),se(null)},xe=gt.useCallback(()=>{const H=document.createElement("canvas");H.width=400,H.height=300;const Z=H.getContext("2d");return Z?(Z.fillStyle="#F2E8CC",Z.fillRect(0,0,H.width,H.height),Z.fillStyle="#13243F",Z.font="16px Inter, sans-serif",Z.textAlign="center",Z.fillText("Screenshot unavailable",H.width/2,H.height/2),H.toDataURL("image/png")):null},[]),Ln=gt.useCallback(()=>{At.current?.abort(),At.current=null,V(null),we(!1)},[]);gt.useEffect(()=>{if(!Ce?.id){Mt(!1),xt(!1),Gt(!1);return}Mt(!1),xt(!1),Gt(!1);const Z=window.setTimeout(()=>Mt(!0),5e3),mt=window.setTimeout(()=>xt(!0),1e4),wt=window.setTimeout(()=>Mt(!1),12e3),Ft=window.setTimeout(()=>Gt(!0),14e3);return()=>{window.clearTimeout(Z),window.clearTimeout(mt),window.clearTimeout(wt),window.clearTimeout(Ft),Mt(!1),xt(!1),Gt(!1)}},[Ce?.id]);const di=gt.useCallback(async()=>{!y?.current&&g&&Hi.current&&(Hi.current.volume=.5,Hi.current.currentTime=0,Hi.current.play().catch(tn=>console.error("camera shutter play failed",tn))),E(!0),setTimeout(()=>E(!1),150);const Z=Be??I,mt=Z===Ze,wt=mt?null:_.find(tn=>tn.id===Z),Ft=mt?Re.lat:wt?.lat??Re.lat,Nt=mt?Re.lng:wt?.lng??Re.lng,Jt=mt?1:_.findIndex(tn=>tn.id===Z)+2,ie=Number(Ft.toFixed(5)),de=Number(Nt.toFixed(5)),jt=Number(Re.lat.toFixed(5)),ue=Number(Re.lng.toFixed(5)),Me=Ht.current;let mn,On,Rn;Me&&(mn=Me.heading??void 0,On=Me.tilt??void 0,Rn=Me.range??void 0);const Yn=wt?.landValue??(mt?cu(Ft,Nt).landValue:0),Gi=Dv,na=wt?.tourismRevenue??lu(Ft,Nt),Oa=Date.now(),ha={lat:Ft,lng:Nt},Vi={lat:jt,lng:ue},Mo=12e3,pa=[];pa.push({needleId:Z,lat:Ft,lng:Nt,distanceMeters:0,bearingDeg:0}),mt||pa.push({needleId:Ze,lat:jt,lng:ue,distanceMeters:si(ha,Vi),bearingDeg:Mu(ha,Vi)});const ma=_.filter(tn=>tn.id!==Z).map(tn=>{const Ci=si(ha,{lat:tn.lat,lng:tn.lng}),pn=Mu(ha,{lat:tn.lat,lng:tn.lng});return{needleId:tn.id,lat:tn.lat,lng:tn.lng,distanceMeters:Ci,bearingDeg:pn}}).filter(tn=>tn.distanceMeters<=Mo);pa.push(...ma);const vr={visitedLat:Ft,visitedLng:Nt,originalLat:jt,originalLng:ue,cameraHeading:mn,cameraTilt:On,cameraRange:Rn,landAcquisition:Yn,constructionCost:Gi,projectedTourismRevenue:na,createdAt:Oa,needleId:Z,needleNumber:Jt,visibleNeedles:pa};let ia;try{ia=nR(vr,1200,900)}catch(tn){console.warn("Placeholder polaroid render failed:",tn?.message??tn),ia=xe()}ia||(ia=xe());const Vs=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`polaroid-${Oa}`;V({id:Vs,dataUrl:ia,placeholderUrl:ia,aiUrl:null,needleId:Z,needleNumber:Jt,lat:ie,lng:de,createdAt:Oa,status:"developing"}),we(!0);const os=new AbortController;At.current=os;try{const tn=await fetch("/api/generate-polaroid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...vr,stylePreset:"photoreal_postcard"}),signal:os.signal}),Ci=await tn.json().catch(()=>({}));tn.ok&&Ci.dataUrl?V(pn=>pn&&pn.id===Vs?{...pn,dataUrl:Ci.dataUrl,aiUrl:Ci.dataUrl,status:"ready"}:pn):V(pn=>pn&&pn.id===Vs?{...pn,status:"failed"}:pn)}catch(tn){tn?.name!=="AbortError"&&V(Ci=>Ci&&Ci.id===Vs?{...Ci,status:"failed"}:Ci)}finally{At.current===os&&(At.current=null),we(!1)}},[g,Be,I,_,xe]),hi=()=>{!y?.current&&g&&bn.current&&(bn.current.volume=.6,bn.current.currentTime=0,bn.current.play().catch(mt=>console.error("poof play failed",mt)));const H=Ht.current,Z=Wn.current;Z.forEach(mt=>{mt?.parentElement&&mt.parentElement.removeChild(mt)}),Z.clear(),M([]),P(null),et.current&&(clearTimeout(et.current),et.current=null),rt(null),J(null),ht(!1),Ot(!1),st(!1),U(!0),H&&(H.center=Re,H.tilt=gh,H.heading=_h,H.range=vh)};return gt.useEffect(()=>{const H=Z=>{const mt=Z.target.closest?.("#root")&&Z.target.closest?.("button");!mt||mt.disabled||(_2("light"),Ie())};return document.addEventListener("pointerdown",H,{passive:!0,capture:!0}),()=>document.removeEventListener("pointerdown",H,{capture:!0})},[Ie]),at.jsxs("div",{className:"exhibit-page",children:[at.jsx("audio",{ref:vi,src:"./audio/crunch.mp3",preload:"auto"}),at.jsx("audio",{ref:li,src:"./audio/glass-smash.mp3",preload:"auto"}),at.jsx("audio",{ref:Xn,src:"./audio/splash.mp3",preload:"auto"}),at.jsx("audio",{ref:xi,src:"./audio/dog-bark.mp3",preload:"auto"}),at.jsx("audio",{ref:Bn,src:"./audio/baseball-organ.mp3",preload:"auto"}),at.jsx("audio",{ref:un,src:"./audio/crowd-stomp.mp3",preload:"auto"}),at.jsx("audio",{ref:fn,src:"./audio/air-horn.mp3",preload:"auto"}),at.jsx("audio",{ref:zn,src:"./audio/wilhelm.mp3",preload:"auto"}),at.jsx("audio",{ref:bn,src:"./audio/poof.mp3",preload:"auto"}),at.jsx("audio",{ref:ci,src:"./audio/move.mp3",preload:"auto"}),at.jsx("audio",{ref:ui,src:"./audio/visit.mp3",preload:"auto"}),at.jsx("audio",{ref:Hi,src:"./audio/camera-shutter.mp3",preload:"auto"}),at.jsx("audio",{ref:Hn,src:"./audio/percussive-hit.mp3",preload:"auto"}),at.jsx("audio",{ref:ei,src:"./audio/shooting-sound-fx.mp3",preload:"auto"}),at.jsx("button",{type:"button",className:"exhibit-audio-button",onClick:()=>b(),"aria-label":"Open audio settings",children:at.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",children:[at.jsx("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"currentColor"}),at.jsx("path",{d:"M16 9c1.6 1.4 1.6 4.6 0 6M18.5 7c2.8 2.4 2.8 7.6 0 10",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"})]})}),at.jsxs("div",{className:"exhibit-panel",children:[at.jsxs("header",{className:"exhibit-header",children:[at.jsx("h1",{className:"exhibit-title",children:"PLACE NEEDLES"}),at.jsxs("p",{className:"exhibit-subhead",children:["Civic expansion simulator by"," ",at.jsx("span",{className:"exhibit-header-link",children:"Two Space Needles campaign"}),"."]}),at.jsxs("p",{className:"exhibit-instructions",children:[D?"Drag and release to place Needle. Observe civic impact.":"Click to place Needle. Observe civic impact."," ",at.jsx("button",{type:"button",className:"exhibit-credits-button",onClick:()=>Se(!0),"aria-label":"Open credits",children:"Credits"})]})]}),at.jsxs("div",{className:"exhibit-viewport",children:[at.jsxs("div",{ref:ye,className:`exhibit-viewport-inner${N&&G?" is-placing":""}${k?" is-placing-drag":""}`,onPointerEnter:()=>T(!0),onPointerLeave:()=>T(!1),children:[r&&at.jsx("gmp-map-3d",{ref:Ht,style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0}}),at.jsxs("div",{className:"needle-ui-overlay","aria-hidden":"true",children:[(()=>{const H=F!=null&&C==null&&!N&&!K&&!B,Z=H&&F!==Ze?_.find(wt=>wt.id===F):null,mt=H&&F===Ze;return at.jsxs(at.Fragment,{children:[H&&Z&&zt&&at.jsx("div",{className:"needle-click-hint needle-click-hint-hit-only","aria-label":"Click to open needle menu","data-needle-id":Z.id,style:{position:"absolute",left:zt.x,top:zt.y,transform:"translate(-50%, -50%)",zIndex:9996}}),mt&&zt&&at.jsx("div",{className:"needle-click-hint needle-click-hint-hit-only","aria-label":"Click to open needle menu","data-needle-id":Ze,style:{position:"absolute",left:zt.x,top:zt.y,transform:"translate(-50%, -50%)",zIndex:9996}}),$&&at.jsx("div",{className:"needle-click-press","aria-hidden":!0,style:{position:"absolute",left:$.x,top:$.y,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:9997}})]})})(),at.jsxs("div",{className:"needle-map-button-cluster",children:[!N&&at.jsx("button",{type:"button",className:"needle-place-overlay",onClick:()=>{B&&qn(!1),!y?.current&&g&&Hn.current&&(Hn.current.volume=.5,Hn.current.currentTime=0,Hn.current.play().catch(H=>console.error("place needle sound play failed",H))),et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null),U(!0)},"aria-label":"Place Needle",children:"Place Needle"}),B&&at.jsx("button",{type:"button",className:"needle-take-photo exhibit-btn-primary",disabled:sn,onClick:di,"aria-label":"Take photo",children:"Take Photo"})]}),(()=>{const H=C!=null&&!N&&!K&&!B,Z=C===Ze,mt=H&&!Z?_.find(ie=>ie.id===C):null,wt=ye.current,Ft=H?bt:null,Nt=wt?.getBoundingClientRect?.(),Jt=Ft!=null&&Number.isFinite(Ft.x)&&Number.isFinite(Ft.y)&&Nt!=null&&Ft.x>=0&&Ft.y>=0&&Ft.x<=Nt.width&&Ft.y<=Nt.height;return H&&(mt!=null||Z)&&Ft&&Jt&&at.jsxs("div",{className:"needle-action-menu",style:{position:"absolute",left:Ft.x,top:Ft.y,transform:"translate(12px, -12px)",pointerEvents:"auto",zIndex:9998,display:"flex",flexDirection:"column",gap:0},onPointerDown:ie=>{ie.stopPropagation(),D&&ie.preventDefault()},onPointerUp:ie=>{ie.stopPropagation(),D&&ie.preventDefault()},onClick:ie=>ie.stopPropagation(),children:[Z&&at.jsx("div",{className:"needle-action-menu-title","aria-hidden":!0,children:"Space Needle #1"}),at.jsx("button",{type:"button",onClick:()=>!D&&ae(C),onPointerUp:ie=>{D&&(ie.preventDefault(),ie.stopPropagation(),ae(C))},"aria-label":"View this needle",children:"View Needle"}),!Z&&at.jsx("button",{type:"button",onClick:()=>!D&&hn(C),onPointerUp:ie=>{D&&(ie.preventDefault(),ie.stopPropagation(),hn(C))},"aria-label":"Move this needle",children:"Move Needle"}),!Z&&_.length>1&&at.jsx("button",{type:"button",className:"exhibit-btn-destructive",onClick:()=>!D&&Oe(C),onPointerUp:ie=>{D&&(ie.preventDefault(),ie.stopPropagation(),Oe(C))},"aria-label":"Remove this needle",children:"Remove Needle"})]})})(),yt&&at.jsx("div",{className:"needle-poof","aria-hidden":!0,style:{position:"absolute",left:yt.x,top:yt.y,transform:"translate(-50%, -50%)",width:60,height:60,pointerEvents:"none",zIndex:9997}})]})]}),L&&at.jsx("div",{className:"photo-flash-overlay map-overlay","aria-hidden":!0,style:{pointerEvents:"none"}}),ce&&at.jsx("div",{className:"exhibit-loading-overlay map-overlay",children:"Loading map…"}),l&&at.jsxs("div",{className:"exhibit-error-overlay map-overlay",children:[at.jsx("div",{className:"exhibit-error-title",children:"Map load error"}),at.jsx("div",{children:l})]})]}),at.jsx("div",{className:"exhibit-data",children:(()=>{const H=N&&d?cu(d.lat,d.lng):null,Z=B&&I!=null,mt=!Z&&!N&&!K&&!B&&C===Ze,wt=Z&&I!==Ze?_.find(Me=>Me.id===I):!Z&&!N&&!K&&!B&&C!=null&&C!==Ze?_.find(Me=>Me.id===C):null,Ft=Z&&I===Ze,Nt=K!=null?_.find(Me=>Me.id===K):null,Jt=Ft||mt?"Space Needle #1":wt!=null?`Space Needle #${_.findIndex(Me=>Me.id===(Z?I:C))+2}`:"LIVE ESTIMATE",ie=N&&d?{lat:d.lat,lng:d.lng}:wt||Nt?{lat:(wt||Nt).lat,lng:(wt||Nt).lng}:null,de=Me=>re&&bv[Me]!=null?bv[Me]:Me,jt=[{civicLabel:de("Needles"),civicValue:Math.round(kt)},{civicLabel:de("Land Acquired"),civicValue:re?Vt.toFixed(2):`${Vt.toFixed(2)} acres`},{civicLabel:de("Total Cost"),civicValue:uu(ne)},{civicLabel:de("Tourism Revenue"),civicValue:re?uu(vt):J2(vt)}],ue=Ft||mt?[{liveLabel:de("Year constructed"),liveValue:"1962"},{liveLabel:de("Land required"),liveValue:re?"0.33":"0.33 acres"},{liveLabel:de("Total Cost"),liveValue:"$4.5M"},{liveLabel:de("Coordinates"),liveValue:re?kv(Re.lat,Re.lng):bh(Re.lat,Re.lng)}]:[{liveLabel:de("Neighborhood"),liveValue:H?H.neighborhoodLabel:wt?wt.neighborhoodLabel:"—"},{liveLabel:de("Coordinates"),liveValue:ie?re?kv(ie.lat,ie.lng):bh(ie.lat,ie.lng):"—"},{liveLabel:de("Land Acquisition"),liveValue:H?uu(H.landValue):wt!=null&&wt.landValue!=null?uu(wt.landValue):"—"},{liveLabel:de("Rate"),liveValue:H?Vv(H.ratePerSqFt):wt!=null&&wt.ratePerSqFt!=null?Vv(wt.ratePerSqFt):"—"}];return at.jsxs("div",{className:"exhibit-stats-panel",children:[at.jsxs("div",{className:"exhibit-live-block",children:[at.jsx("h3",{className:"exhibit-key-title-live",children:Jt}),ue.map((Me,mn)=>at.jsxs("div",{className:"exhibit-live-row",children:[at.jsx("span",{className:"exhibit-live-label",children:Me.liveLabel}),at.jsx("span",{className:"exhibit-live-value",children:Me.liveValue})]},mn))]}),at.jsx("div",{className:"exhibit-panel-divider","aria-hidden":!0}),at.jsxs("div",{className:"exhibit-civic-block",children:[at.jsx("h3",{className:"exhibit-key-title-civic",children:"CIVIC IMPACT"}),jt.map((Me,mn)=>at.jsxs("div",{className:"exhibit-civic-row",children:[at.jsx("span",{className:"exhibit-civic-label",children:Me.civicLabel}),at.jsx("span",{className:"exhibit-civic-value",children:Me.civicValue})]},mn))]})]})})()}),at.jsxs("div",{className:"exhibit-desktop-controls",children:[at.jsx("button",{type:"button",className:"exhibit-desktop-controls-credits",onClick:()=>Se(!0),"aria-label":"Open credits",children:"Credits"}),at.jsx("button",{type:"button",className:"exhibit-desktop-controls-place",disabled:N,onClick:()=>{B&&qn(!1),!y?.current&&g&&Hn.current&&(Hn.current.volume=.5,Hn.current.currentTime=0,Hn.current.play().catch(H=>console.error("place needle sound play failed",H))),et.current&&(clearTimeout(et.current),et.current=null),rt(null),Ut(null),U(!0)},"aria-label":"Place Needle",children:"Place Needle"}),at.jsx("button",{type:"button",className:"exhibit-desktop-controls-erase exhibit-btn-clear",disabled:_.length<1,onClick:()=>{_.length<1||hi()},children:"Erase Needles"}),at.jsx("button",{type:"button",className:"exhibit-desktop-controls-audio",onClick:()=>b(),"aria-label":"Open audio settings",children:"Audio"})]}),at.jsxs("div",{className:"exhibit-buttons-section",children:[at.jsxs("div",{className:"mobile-topbar",children:[at.jsx("button",{type:"button",className:"mobile-topbar-credits",onClick:()=>Se(!0),"aria-label":"Open credits",children:"Credits"}),at.jsx("button",{type:"button",className:"mobile-topbar-erase exhibit-btn-clear",disabled:_.length<1,onClick:()=>{_.length<1||hi()},children:"Erase Needles"}),at.jsx("button",{type:"button",className:"mobile-topbar-audio",onClick:()=>b(),"aria-label":"Open audio settings",children:"Audio"})]}),at.jsx("button",{type:"button",className:"exhibit-btn-clear",disabled:_.length<1,onClick:()=>{_.length<1||hi()},children:"Erase Needles"})]})]}),Ce&&at.jsxs(at.Fragment,{children:[at.jsx("div",{className:"exhibit-polaroid-backdrop","aria-hidden":!0,onClick:Ln}),at.jsx("div",{className:"exhibit-polaroid-wrap",role:"dialog","aria-label":"Polaroid photo",children:at.jsxs("div",{className:"exhibit-polaroid-card",children:[at.jsx("button",{type:"button",className:"exhibit-polaroid-close",onClick:Ln,"aria-label":"Close polaroid",children:"×"}),at.jsxs("div",{className:"exhibit-polaroid-frame",children:[Ce.dataUrl?at.jsx("img",{src:Ce.dataUrl,alt:"",className:"exhibit-polaroid-img"}):at.jsx("div",{className:"exhibit-polaroid-unavailable",children:"Screenshot unavailable"}),Ce.status==="developing"&&at.jsx("div",{className:"exhibit-polaroid-developing",children:"Developing…"}),Ct&&at.jsx("div",{className:"exhibit-polaroid-blackout","aria-hidden":!0}),Q&&at.jsx("div",{className:"exhibit-polaroid-battery-corner","aria-hidden":!0,children:at.jsxs("div",{className:"polaroid-warning blink",children:[at.jsx("span",{className:"led"}),at.jsx("span",{className:"battery"}),at.jsx("span",{className:"polaroid-warning-label",children:"CAMERA BATTERY DEAD"})]})}),ee&&at.jsxs("div",{className:"exhibit-polaroid-ascii-overlay","aria-hidden":!0,children:[at.jsxs("div",{className:"exhibit-polaroid-ascii-needles",children:[at.jsx("pre",{className:"exhibit-polaroid-ascii-needle",children:`         |
     --------
    ----------
     --------
       \\   /
        \\-/
        |||
        |||
        |||
        |||
       /   \\
      /     \\
     /       \\
    -----------`}),at.jsx("pre",{className:"exhibit-polaroid-ascii-needle",children:`         |
     --------
    ----------
     --------
       \\   /
        \\-/
        |||
        |||
        |||
        |||
       /   \\
      /     \\
     /       \\
    -----------`})]}),at.jsx("div",{className:"exhibit-polaroid-production",children:at.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-polaroid-production-link",children:"an Extra Good Studio production"})})]})]}),at.jsxs("div",{className:"exhibit-polaroid-caption",children:[at.jsxs("div",{className:"exhibit-polaroid-greeting",children:["Greetings from Space Needle #",Ce.needleNumber,"!"]}),at.jsx("div",{className:"exhibit-polaroid-coords",children:bh(Ce.lat,Ce.lng," · ")})]}),at.jsxs("div",{className:"exhibit-polaroid-actions",children:[at.jsx("button",{type:"button",className:"exhibit-polaroid-delete",onClick:Ln,children:"Delete"}),at.jsx("button",{type:"button",className:"exhibit-polaroid-download",disabled:!Ce.dataUrl,onClick:async()=>{if(Ce.dataUrl)if(tR()){const H=await Dx(Ce);H&&ge(H)}else eR(Ce)},children:"Save photo"})]})]})})]}),Fe&&at.jsxs(at.Fragment,{children:[at.jsx("div",{className:"exhibit-polaroid-backdrop exhibit-ios-save-backdrop","aria-hidden":!0,onClick:()=>ge(null)}),at.jsx("div",{className:"exhibit-polaroid-wrap exhibit-ios-save-modal",role:"dialog","aria-label":"Save photo to Photos","aria-modal":"true",children:at.jsxs("div",{className:"exhibit-polaroid-card exhibit-ios-save-card",children:[at.jsx("button",{type:"button",className:"exhibit-polaroid-close",onClick:()=>ge(null),"aria-label":"Close",children:"×"}),at.jsx("p",{className:"exhibit-ios-save-instruction",children:"To save: long-press the image, then tap “Save to Photos”."}),at.jsx("img",{src:Fe,alt:"Postcard to save",className:"exhibit-ios-save-img",draggable:!1}),at.jsx("button",{type:"button",className:"exhibit-polaroid-download exhibit-ios-save-close",onClick:()=>ge(null),children:"Close"})]})})]}),Ee&&at.jsxs(at.Fragment,{children:[at.jsx("div",{className:"exhibit-credits-backdrop","aria-hidden":!0,onClick:()=>Se(!1)}),at.jsx("div",{className:"exhibit-credits-modal",role:"dialog","aria-labelledby":"credits-title","aria-modal":"true",children:at.jsxs("div",{className:"exhibit-credits-modal-inner",children:[at.jsxs("div",{className:"exhibit-credits-modal-header",children:[at.jsx("h2",{id:"credits-title",className:"exhibit-credits-modal-title",children:"Credits"}),at.jsx("button",{type:"button",className:"exhibit-credits-modal-close",onClick:()=>Se(!1),"aria-label":"Close credits",children:"×"})]}),at.jsxs("div",{className:"exhibit-credits-modal-body",children:[at.jsxs("p",{className:"exhibit-credits-intro",children:["The Campaign for Two Space Needles is an"," ",at.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-eg-link",children:"Extra Good Studio"})," ","production."]}),at.jsx("div",{className:"exhibit-credits-eg-logo-wrap",children:at.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-eg-logo-link","aria-label":"Extra Good Studio",children:at.jsx("img",{src:"./eg_logo.png",alt:"",className:"exhibit-credits-eg-logo"})})}),at.jsxs("section",{className:"exhibit-credits-section exhibit-credits-music-section",children:[at.jsx("h3",{className:"exhibit-credits-category",children:"Music Credit"}),at.jsxs("div",{className:"exhibit-credits-music-block",children:[at.jsx("p",{className:"exhibit-credits-music-title",children:"“Thrift Shop (8bit cover)”"}),at.jsx("p",{className:"exhibit-credits-music-by",children:"by Oscar"}),at.jsx("p",{className:"exhibit-credits-music-link-wrap",children:at.jsx("a",{href:"https://linktr.ee/vvizardofos",target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-link",children:"See more of Oscar's work!"})}),at.jsx("p",{className:"exhibit-credits-music-original",children:"Original composition by Macklemore & Ryan Lewis"})]})]}),[["3D Model","3D Model Sources"],["Sound","Sound Sources"]].map(([H,Z])=>at.jsxs("section",{className:"exhibit-credits-section",children:[at.jsx("h3",{className:"exhibit-credits-category",children:Z}),at.jsx("ul",{className:"exhibit-credits-list",children:w2.filter(mt=>mt.category===H).map((mt,wt)=>at.jsxs("li",{className:"exhibit-credits-item",children:[at.jsx("span",{className:"exhibit-credits-name",children:mt.name}),mt.creator&&at.jsx("span",{className:"exhibit-credits-creator",children:mt.creator}),mt.license&&at.jsx("span",{className:"exhibit-credits-license",children:mt.license}),mt.sourceUrl&&at.jsx("a",{href:mt.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-link",children:"Source"}),mt.notes&&at.jsx("span",{className:"exhibit-credits-notes",children:mt.notes})]},`${H}-${wt}`))})]},H)),at.jsx("p",{className:"exhibit-credits-disclaimer",children:"Two Space Needles is in no way related to the original Space Needle, the Space Needle Corporation, or the Wright family."})]})]})})]})]})}function rR(){return at.jsx(kS,{children:at.jsx(sR,{})})}VS.createRoot(document.getElementById("root")).render(at.jsx(gt.StrictMode,{children:at.jsx(rR,{})}));
