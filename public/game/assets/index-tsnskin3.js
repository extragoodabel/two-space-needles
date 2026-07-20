(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Td={exports:{}},Ko={};var o_;function ES(){if(o_)return Ko;o_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ko.Fragment=e,Ko.jsx=i,Ko.jsxs=i,Ko}var l_;function bS(){return l_||(l_=1,Td.exports=ES()),Td.exports}var ht=bS(),Ad={exports:{}},me={};var c_;function TS(){if(c_)return me;c_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),g=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,S={};function x(F,Q,Tt){this.props=F,this.context=Q,this.refs=S,this.updater=Tt||b}x.prototype.isReactComponent={},x.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function C(){}C.prototype=x.prototype;function I(F,Q,Tt){this.props=F,this.context=Q,this.refs=S,this.updater=Tt||b}var N=I.prototype=new C;N.constructor=I,D(N,x.prototype),N.isPureReactComponent=!0;var k=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(F,Q,Tt){var Bt=Tt.ref;return{$$typeof:r,type:F,key:Q,ref:Bt!==void 0?Bt:null,props:Tt}}function at(F,Q){return U(F.type,Q,F.props)}function X(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function $(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Tt){return Q[Tt]})}var it=/\/+/g;function ct(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):Q.toString(36)}function et(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(Q){F.status==="pending"&&(F.status="fulfilled",F.value=Q)},function(Q){F.status==="pending"&&(F.status="rejected",F.reason=Q)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,Q,Tt,Bt,jt){var rt=typeof F;(rt==="undefined"||rt==="boolean")&&(F=null);var Rt=!1;if(F===null)Rt=!0;else switch(rt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(F.$$typeof){case r:case e:Rt=!0;break;case _:return Rt=F._init,O(Rt(F._payload),Q,Tt,Bt,jt)}}if(Rt)return jt=jt(F),Rt=Bt===""?"."+ct(F,0):Bt,k(jt)?(Tt="",Rt!=null&&(Tt=Rt.replace(it,"$&/")+"/"),O(jt,Q,Tt,"",function(Qt){return Qt})):jt!=null&&(X(jt)&&(jt=at(jt,Tt+(jt.key==null||F&&F.key===jt.key?"":(""+jt.key).replace(it,"$&/")+"/")+Rt)),Q.push(jt)),1;Rt=0;var Ut=Bt===""?".":Bt+":";if(k(F))for(var zt=0;zt<F.length;zt++)Bt=F[zt],rt=Ut+ct(Bt,zt),Rt+=O(Bt,Q,Tt,rt,jt);else if(zt=y(F),typeof zt=="function")for(F=zt.call(F),zt=0;!(Bt=F.next()).done;)Bt=Bt.value,rt=Ut+ct(Bt,zt++),Rt+=O(Bt,Q,Tt,rt,jt);else if(rt==="object"){if(typeof F.then=="function")return O(et(F),Q,Tt,Bt,jt);throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function G(F,Q,Tt){if(F==null)return F;var Bt=[],jt=0;return O(F,Bt,"","",function(rt){return Q.call(Tt,rt,jt++)}),Bt}function _t(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Tt){(F._status===0||F._status===-1)&&(F._status=1,F._result=Tt)},function(Tt){(F._status===0||F._status===-1)&&(F._status=2,F._result=Tt)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var yt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Ot={map:G,forEach:function(F,Q,Tt){G(F,function(){Q.apply(this,arguments)},Tt)},count:function(F){var Q=0;return G(F,function(){Q++}),Q},toArray:function(F){return G(F,function(Q){return Q})||[]},only:function(F){if(!X(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return me.Activity=M,me.Children=Ot,me.Component=x,me.Fragment=i,me.Profiler=l,me.PureComponent=I,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,me.__COMPILER_RUNTIME={__proto__:null,c:function(F){return H.H.useMemoCache(F)}},me.cache=function(F){return function(){return F.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(F,Q,Tt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Bt=D({},F.props),jt=F.key;if(Q!=null)for(rt in Q.key!==void 0&&(jt=""+Q.key),Q)!T.call(Q,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&Q.ref===void 0||(Bt[rt]=Q[rt]);var rt=arguments.length-2;if(rt===1)Bt.children=Tt;else if(1<rt){for(var Rt=Array(rt),Ut=0;Ut<rt;Ut++)Rt[Ut]=arguments[Ut+2];Bt.children=Rt}return U(F.type,jt,Bt)},me.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},me.createElement=function(F,Q,Tt){var Bt,jt={},rt=null;if(Q!=null)for(Bt in Q.key!==void 0&&(rt=""+Q.key),Q)T.call(Q,Bt)&&Bt!=="key"&&Bt!=="__self"&&Bt!=="__source"&&(jt[Bt]=Q[Bt]);var Rt=arguments.length-2;if(Rt===1)jt.children=Tt;else if(1<Rt){for(var Ut=Array(Rt),zt=0;zt<Rt;zt++)Ut[zt]=arguments[zt+2];jt.children=Ut}if(F&&F.defaultProps)for(Bt in Rt=F.defaultProps,Rt)jt[Bt]===void 0&&(jt[Bt]=Rt[Bt]);return U(F,rt,jt)},me.createRef=function(){return{current:null}},me.forwardRef=function(F){return{$$typeof:p,render:F}},me.isValidElement=X,me.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:_t}},me.memo=function(F,Q){return{$$typeof:h,type:F,compare:Q===void 0?null:Q}},me.startTransition=function(F){var Q=H.T,Tt={};H.T=Tt;try{var Bt=F(),jt=H.S;jt!==null&&jt(Tt,Bt),typeof Bt=="object"&&Bt!==null&&typeof Bt.then=="function"&&Bt.then(z,yt)}catch(rt){yt(rt)}finally{Q!==null&&Tt.types!==null&&(Q.types=Tt.types),H.T=Q}},me.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},me.use=function(F){return H.H.use(F)},me.useActionState=function(F,Q,Tt){return H.H.useActionState(F,Q,Tt)},me.useCallback=function(F,Q){return H.H.useCallback(F,Q)},me.useContext=function(F){return H.H.useContext(F)},me.useDebugValue=function(){},me.useDeferredValue=function(F,Q){return H.H.useDeferredValue(F,Q)},me.useEffect=function(F,Q){return H.H.useEffect(F,Q)},me.useEffectEvent=function(F){return H.H.useEffectEvent(F)},me.useId=function(){return H.H.useId()},me.useImperativeHandle=function(F,Q,Tt){return H.H.useImperativeHandle(F,Q,Tt)},me.useInsertionEffect=function(F,Q){return H.H.useInsertionEffect(F,Q)},me.useLayoutEffect=function(F,Q){return H.H.useLayoutEffect(F,Q)},me.useMemo=function(F,Q){return H.H.useMemo(F,Q)},me.useOptimistic=function(F,Q){return H.H.useOptimistic(F,Q)},me.useReducer=function(F,Q,Tt){return H.H.useReducer(F,Q,Tt)},me.useRef=function(F){return H.H.useRef(F)},me.useState=function(F){return H.H.useState(F)},me.useSyncExternalStore=function(F,Q,Tt){return H.H.useSyncExternalStore(F,Q,Tt)},me.useTransition=function(){return H.H.useTransition()},me.version="19.2.4",me}var u_;function hp(){return u_||(u_=1,Ad.exports=TS()),Ad.exports}var Ft=hp(),Rd={exports:{}},Qo={},Cd={exports:{}},wd={};var f_;function AS(){return f_||(f_=1,(function(r){function e(O,G){var _t=O.length;O.push(G);t:for(;0<_t;){var yt=_t-1>>>1,Ot=O[yt];if(0<l(Ot,G))O[yt]=G,O[_t]=Ot,_t=yt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var G=O[0],_t=O.pop();if(_t!==G){O[0]=_t;t:for(var yt=0,Ot=O.length,F=Ot>>>1;yt<F;){var Q=2*(yt+1)-1,Tt=O[Q],Bt=Q+1,jt=O[Bt];if(0>l(Tt,_t))Bt<Ot&&0>l(jt,Tt)?(O[yt]=jt,O[Bt]=_t,yt=Bt):(O[yt]=Tt,O[Q]=_t,yt=Q);else if(Bt<Ot&&0>l(jt,_t))O[yt]=jt,O[Bt]=_t,yt=Bt;else break t}}return G}function l(O,G){var _t=O.sortIndex-G.sortIndex;return _t!==0?_t:O.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,M=null,g=3,y=!1,b=!1,D=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=O)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function k(O){if(D=!1,N(O),!b)if(i(m)!==null)b=!0,z||(z=!0,$());else{var G=i(h);G!==null&&et(k,G.startTime-O)}}var z=!1,H=-1,T=5,U=-1;function at(){return S?!0:!(r.unstable_now()-U<T)}function X(){if(S=!1,z){var O=r.unstable_now();U=O;var G=!0;try{t:{b=!1,D&&(D=!1,C(H),H=-1),y=!0;var _t=g;try{e:{for(N(O),M=i(m);M!==null&&!(M.expirationTime>O&&at());){var yt=M.callback;if(typeof yt=="function"){M.callback=null,g=M.priorityLevel;var Ot=yt(M.expirationTime<=O);if(O=r.unstable_now(),typeof Ot=="function"){M.callback=Ot,N(O),G=!0;break e}M===i(m)&&s(m),N(O)}else s(m);M=i(m)}if(M!==null)G=!0;else{var F=i(h);F!==null&&et(k,F.startTime-O),G=!1}}break t}finally{M=null,g=_t,y=!1}G=void 0}}finally{G?$():z=!1}}}var $;if(typeof I=="function")$=function(){I(X)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=X,$=function(){ct.postMessage(null)}}else $=function(){x(X,0)};function et(O,G){H=x(function(){O(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var _t=g;g=G;try{return O()}finally{g=_t}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var _t=g;g=O;try{return G()}finally{g=_t}},r.unstable_scheduleCallback=function(O,G,_t){var yt=r.unstable_now();switch(typeof _t=="object"&&_t!==null?(_t=_t.delay,_t=typeof _t=="number"&&0<_t?yt+_t:yt):_t=yt,O){case 1:var Ot=-1;break;case 2:Ot=250;break;case 5:Ot=1073741823;break;case 4:Ot=1e4;break;default:Ot=5e3}return Ot=_t+Ot,O={id:_++,callback:G,priorityLevel:O,startTime:_t,expirationTime:Ot,sortIndex:-1},_t>yt?(O.sortIndex=_t,e(h,O),i(m)===null&&O===i(h)&&(D?(C(H),H=-1):D=!0,et(k,_t-yt))):(O.sortIndex=Ot,e(m,O),b||y||(b=!0,z||(z=!0,$()))),O},r.unstable_shouldYield=at,r.unstable_wrapCallback=function(O){var G=g;return function(){var _t=g;g=G;try{return O.apply(this,arguments)}finally{g=_t}}}})(wd)),wd}var d_;function RS(){return d_||(d_=1,Cd.exports=AS()),Cd.exports}var Dd={exports:{}},qn={};var h_;function CS(){if(h_)return qn;h_=1;var r=hp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:""+M,children:m,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},qn.flushSync=function(m){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=_,s.d.f()}},qn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},qn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,M=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:M,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},qn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},qn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,M=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},qn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},qn.requestFormReset=function(m){s.d.r(m)},qn.unstable_batchedUpdates=function(m,h){return m(h)},qn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},qn.useFormStatus=function(){return d.H.useHostTransitionStatus()},qn.version="19.2.4",qn}var p_;function wS(){if(p_)return Dd.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=CS(),Dd.exports}var m_;function DS(){if(m_)return Qo;m_=1;var r=RS(),e=hp(),i=wS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var M=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case I:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var et=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t={pending:!1,data:null,method:null,action:null},yt=[],Ot=-1;function F(t){return{current:t}}function Q(t){0>Ot||(t.current=yt[Ot],yt[Ot]=null,Ot--)}function Tt(t,n){Ot++,yt[Ot]=t.current,t.current=n}var Bt=F(null),jt=F(null),rt=F(null),Rt=F(null);function Ut(t,n){switch(Tt(rt,n),Tt(jt,t),Tt(Bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=D0(n),t=U0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Bt),Tt(Bt,t)}function zt(){Q(Bt),Q(jt),Q(rt)}function Qt(t){t.memoizedState!==null&&Tt(Rt,t);var n=Bt.current,a=U0(n,t.type);n!==a&&(Tt(jt,t),Tt(Bt,a))}function ee(t){jt.current===t&&(Q(Bt),Q(jt)),Rt.current===t&&(Q(Rt),qo._currentValue=_t)}var nn,_e;function xe(t){if(nn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nn=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+_e}var Ce=!1;function he(t,n){if(!t||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(xt){var pt=xt}Reflect.construct(t,[],wt)}else{try{wt.call()}catch(xt){pt=xt}t.call(wt.prototype)}}else{try{throw Error()}catch(xt){pt=xt}(wt=t())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(xt){if(xt&&pt&&typeof xt.stack=="string")return[xt.stack,pt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var W=v.split(`
`),lt=R.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===lt.length)for(o=W.length-1,u=lt.length-1;1<=o&&0<=u&&W[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==lt[u]){var bt=`
`+W[o].replace(" at new "," at ");return t.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",t.displayName)),bt}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xe(a):""}function Be(t,n){switch(t.tag){case 26:case 27:case 5:return xe(t.type);case 16:return xe("Lazy");case 13:return t.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return xe("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Be(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Te=r.unstable_cancelCallback,te=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,Mt=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,St=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,Vt=r.unstable_IdlePriority,ae=r.log,oe=r.unstable_setDisableYieldValue,Dt=null,Et=null;function qt(t){if(typeof ae=="function"&&oe(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Dt,t)}catch{}}var Xt=Math.clz32?Math.clz32:K,Wt=Math.log,de=Math.LN2;function K(t){return t>>>=0,t===0?32:31-(Wt(t)/de|0)|0}var Gt=256,Ht=262144,Zt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Pt(o):(v&=R,v!==0?u=Pt(v):a||(a=R&~t,a!==0&&(u=Pt(a))))):(R=o&~f,R!==0?u=Pt(R):v!==0?u=Pt(v):a||(a=o&~t,a!==0&&(u=Pt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Yt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ce(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pn(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,W=t.expirationTimes,lt=t.hiddenUpdates;for(a=v&~a;0<a;){var bt=31-Xt(a),wt=1<<bt;R[bt]=0,W[bt]=-1;var pt=lt[bt];if(pt!==null)for(lt[bt]=null,bt=0;bt<pt.length;bt++){var xt=pt[bt];xt!==null&&(xt.lane&=-536870913)}a&=~wt}o!==0&&Dn(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Dn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xt(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function mi(t,n){var a=n&-n;return a=(a&42)!==0?1:$n(a),(a&(t.suspendedLanes|n))!==0?0:a}function $n(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function In(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xn(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:t_(t.type))}function gi(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,an="__reactProps$"+fn,Fn="__reactContainer$"+fn,An="__reactEvents$"+fn,Xi="__reactListeners$"+fn,_i="__reactHandles$"+fn,va="__reactResources$"+fn,vi="__reactMarker$"+fn;function Di(t){delete t[rn],delete t[an],delete t[An],delete t[Xi],delete t[_i]}function si(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=B0(t);t!==null;){if(a=t[rn])return a;t=B0(t)}return n}t=a,a=t.parentNode}return null}function Ui(t){if(t=t[rn]||t[Fn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Wi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function A(t){var n=t[va];return n||(n=t[va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Z(t){t[vi]=!0}var mt=new Set,st={};function P(t,n){ut(t,n),ut(t+"Capture",n)}function ut(t,n){for(st[t]=n,t=0;t<n.length;t++)mt.add(n[t])}var gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),w={},B={};function q(t){return qe.call(B,t)?!0:qe.call(w,t)?!1:gt.test(t)?B[t]=!0:(w[t]=!0,!1)}function nt(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Y(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function It(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $t(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ue(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ne(t){if(!t._valueTracker){var n=$t(t)?"checked":"value";t._valueTracker=ue(t,n,""+t[n])}}function kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=$t(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pe=/[\n"\\]/g;function Nt(t){return t.replace(pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function re(t,n,a,o,u,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+It(n)):t.value!==""+It(n)&&(t.value=""+It(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Je(t,v,It(n)):a!=null?Je(t,v,It(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+It(R):t.removeAttribute("name")}function Fe(t,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ne(t);return}a=a!=null?""+It(a):"",n=n!=null?""+It(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ne(t)}function Je(t,n,a){n==="number"&&Lt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+It(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function we(t,n,a){if(n!=null&&(n=""+It(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+It(a):""}function on(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(et(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=It(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),ne(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||dn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Wn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Wn(t,f,n[f])}function xa(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ja(t){return sr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oe(){}var ri=null;function ti(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function wp(t){var n=Ui(t);if(n&&(t=n.stateNode)){var a=t[an]||null;t:switch(t=n.stateNode,n.type){case"input":if(re(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[an]||null;if(!u)throw Error(s(90));re(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&kt(o)}break t;case"textarea":we(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var Eu=!1;function Dp(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var o=t(n);return o}finally{if(Eu=!1,(rr!==null||or!==null)&&(nc(),rr&&(n=rr,t=or,or=rr=null,wp(n),t)))for(n=0;n<t.length;n++)wp(t[n])}}function lo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[an]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Ma)try{var co={};Object.defineProperty(co,"passive",{get:function(){bu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{bu=!1}var Za=null,Tu=null,gl=null;function Up(){if(gl)return gl;var t,n=Tu,a=n.length,o,u="value"in Za?Za.value:Za.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Np(){return!1}function oi(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:Np,this.isPropagationStopped=Np,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=oi(Ds),uo=M({},Ds,{view:0,detail:0}),Sx=oi(uo),Au,Ru,fo,Ml=M({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Au=t.screenX-fo.screenX,Ru=t.screenY-fo.screenY):Ru=Au=0,fo=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Lp=oi(Ml),yx=M({},Ml,{dataTransfer:0}),Ex=oi(yx),bx=M({},uo,{relatedTarget:0}),Cu=oi(bx),Tx=M({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=oi(Tx),Rx=M({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=oi(Rx),wx=M({},Ds,{data:0}),Op=oi(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nx[t])?!!n[t]:!1}function wu(){return Lx}var Ox=M({},uo,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=oi(Ox),Ix=M({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=oi(Ix),Fx=M({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Bx=oi(Fx),zx=M({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=oi(zx),Gx=M({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=oi(Gx),kx=M({},Ds,{newState:0,oldState:0}),Xx=oi(kx),Wx=[9,13,27,32],Du=Ma&&"CompositionEvent"in window,ho=null;Ma&&"documentMode"in document&&(ho=document.documentMode);var qx=Ma&&"TextEvent"in window&&!ho,Ip=Ma&&(!Du||ho&&8<ho&&11>=ho),Fp=" ",Bp=!1;function zp(t,n){switch(t){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function Yx(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Bp=!0,Fp);case"textInput":return t=n.data,t===Fp&&Bp?null:t;default:return null}}function jx(t,n){if(lr)return t==="compositionend"||!Du&&zp(t,n)?(t=Up(),gl=Tu=Za=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zx[t.type]:n==="textarea"}function Vp(t,n,a,o){rr?or?or.push(o):or=[o]:rr=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var po=null,mo=null;function Kx(t){b0(t,0)}function Sl(t){var n=Wi(t);if(kt(n))return t}function kp(t,n){if(t==="change")return n}var Xp=!1;if(Ma){var Uu;if(Ma){var Nu="oninput"in document;if(!Nu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nu=typeof Wp.oninput=="function"}Uu=Nu}else Uu=!1;Xp=Uu&&(!document.documentMode||9<document.documentMode)}function qp(){po&&(po.detachEvent("onpropertychange",Yp),mo=po=null)}function Yp(t){if(t.propertyName==="value"&&Sl(mo)){var n=[];Vp(n,mo,t,ti(t)),Dp(Kx,n)}}function Qx(t,n,a){t==="focusin"?(qp(),po=n,mo=a,po.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(mo)}function $x(t,n){if(t==="click")return Sl(n)}function tM(t,n){if(t==="input"||t==="change")return Sl(n)}function eM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var xi=typeof Object.is=="function"?Object.is:eM;function go(t,n){if(xi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!xi(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Lt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Lt(t.document)}return n}function Lu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nM=Ma&&"documentMode"in document&&11>=document.documentMode,cr=null,Ou=null,_o=null,Pu=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||cr==null||cr!==Lt(o)||(o=cr,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=cc(Ou,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=cr)))}function Us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Iu={},$p={};Ma&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Ns(t){if(Iu[t])return Iu[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Iu[t]=n[a];return t}var tm=Ns("animationend"),em=Ns("animationiteration"),nm=Ns("animationstart"),iM=Ns("transitionrun"),aM=Ns("transitionstart"),sM=Ns("transitioncancel"),im=Ns("transitionend"),am=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Yi(t,n){am.set(t,n),P(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ni=[],fr=0,Bu=0;function El(){for(var t=fr,n=Bu=fr=0;n<t;){var a=Ni[n];Ni[n++]=null;var o=Ni[n];Ni[n++]=null;var u=Ni[n];Ni[n++]=null;var f=Ni[n];if(Ni[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&sm(a,u,f)}}function bl(t,n,a,o){Ni[fr++]=t,Ni[fr++]=n,Ni[fr++]=a,Ni[fr++]=o,Bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return bl(t,n,a,o),Tl(t)}function Ls(t,n){return bl(t,null,null,n),Tl(t)}function sm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Xt(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<zo)throw zo=0,Zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var dr={};function rM(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,n,a,o){return new rM(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=Mi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")Hu(t)&&(v=1);else if(typeof t=="string")v=fS(t,a,Bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Mi(31,a,n,u),t.elementType=U,t.lanes=f,t;case D:return Os(a.children,u,f,n);case S:v=8,u|=24;break;case x:return t=Mi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case k:return t=Mi(13,a,n,u),t.elementType=k,t.lanes=f,t;case z:return t=Mi(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break t;case C:v=9;break t;case N:v=11;break t;case H:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Mi(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Os(t,n,a,o){return t=Mi(7,t,o,n),t.lanes=a,t}function Gu(t,n,a){return t=Mi(6,t,null,n),t.lanes=a,t}function om(t){var n=Mi(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=Mi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function Li(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},lm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var hr=[],pr=0,Rl=null,vo=0,Oi=[],Pi=0,Ka=null,ea=1,na="";function ya(t,n){hr[pr++]=vo,hr[pr++]=Rl,Rl=t,vo=n}function cm(t,n,a){Oi[Pi++]=ea,Oi[Pi++]=na,Oi[Pi++]=Ka,Ka=t;var o=ea;t=na;var u=32-Xt(o)-1;o&=~(1<<u),a+=1;var f=32-Xt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,ea=1<<32-Xt(n)+u|a<<u|o,na=f+t}else ea=1<<f|a<<u|o,na=t}function ku(t){t.return!==null&&(ya(t,1),cm(t,1,0))}function Xu(t){for(;t===Rl;)Rl=hr[--pr],hr[pr]=null,vo=hr[--pr],hr[pr]=null;for(;t===Ka;)Ka=Oi[--Pi],Oi[Pi]=null,na=Oi[--Pi],Oi[Pi]=null,ea=Oi[--Pi],Oi[Pi]=null}function um(t,n){Oi[Pi++]=ea,Oi[Pi++]=na,Oi[Pi++]=Ka,ea=n.id,na=n.overflow,Ka=t}var Bn=null,ln=null,Pe=!1,Qa=null,Ii=!1,Wu=Error(s(519));function Ja(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Li(n,t)),Wu}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[rn]=t,n[an]=o,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)Ue(Go[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),Fe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C0(n.textContent,a)?(o.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),o.onScroll!=null&&Ue("scroll",n),o.onScrollEnd!=null&&Ue("scrollend",n),o.onClick!=null&&(n.onclick=Oe),n=!0):n=!1,n||Ja(t,!0)}function dm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Bn=Bn.return}}function mr(t){if(t!==Bn)return!1;if(!Pe)return dm(t),Pe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&ln&&Ja(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ln=F0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ln=F0(t)}else n===27?(n=ln,ds(t.type)?(t=md,md=null,ln=t):ln=n):ln=Bn?Bi(t.stateNode.nextSibling):null;return!0}function Ps(){ln=Bn=null,Pe=!1}function qu(){var t=Qa;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),Qa=null),t}function xo(t){Qa===null?Qa=[t]:Qa.push(t)}var Yu=F(null),Is=null,Ea=null;function $a(t,n,a){Tt(Yu,n._currentValue),n._currentValue=a}function ba(t){t._currentValue=Yu.current,Q(Yu)}function ju(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var W=0;W<n.length;W++)if(R.context===n[W]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ju(f.return,a,t),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),ju(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function gr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;xi(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===Rt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}u=u.return}t!==null&&Zu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fs(t){Is=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return hm(Is,t)}function wl(t,n){return Is===null&&Fs(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(t===null)throw Error(s(308));Ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ea=Ea.next=n;return a}var oM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lM=r.unstable_scheduleCallback,cM=r.unstable_NormalPriority,Sn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new oM,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&lM(cM,function(){t.controller.abort()})}var So=null,Qu=0,_r=0,vr=null;function uM(t,n){if(So===null){var a=So=[];Qu=0,_r=ed(),vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qu++,n.then(pm,pm),n}function pm(){if(--Qu===0&&So!==null){vr!==null&&(vr.status="fulfilled");var t=So;So=null,_r=0,vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fM(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=O.S;O.S=function(t,n){Jg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uM(t,n),mm!==null&&mm(t,n)};var Bs=F(null);function Ju(){var t=Bs.current;return t!==null?t:sn.pooledCache}function Dl(t,n){n===null?Tt(Bs,Bs.current):Tt(Bs,n.pool)}function gm(){var t=Ju();return t===null?null:{parent:Sn._currentValue,pool:t}}var xr=Error(s(460)),$u=Error(s(474)),Ul=Error(s(542)),Nl={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oe,Oe),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t;default:if(typeof n.status=="string")n.then(Oe,Oe);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t}throw Hs=n,xr}}function zs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hs=a,xr):a}}var Hs=null;function xm(){if(Hs===null)throw Error(s(459));var t=Hs;return Hs=null,t}function Mm(t){if(t===xr||t===Ul)throw Error(s(483))}var Mr=null,yo=0;function Ll(t){var n=yo;return yo+=1,Mr===null&&(Mr=[]),vm(Mr,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(tt,j){if(t){var ot=tt.deletions;ot===null?(tt.deletions=[j],tt.flags|=16):ot.push(j)}}function a(tt,j){if(!t)return null;for(;j!==null;)n(tt,j),j=j.sibling;return null}function o(tt){for(var j=new Map;tt!==null;)tt.key!==null?j.set(tt.key,tt):j.set(tt.index,tt),tt=tt.sibling;return j}function u(tt,j){return tt=Sa(tt,j),tt.index=0,tt.sibling=null,tt}function f(tt,j,ot){return tt.index=ot,t?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<j?(tt.flags|=67108866,j):ot):(tt.flags|=67108866,j)):(tt.flags|=1048576,j)}function v(tt){return t&&tt.alternate===null&&(tt.flags|=67108866),tt}function R(tt,j,ot,Ct){return j===null||j.tag!==6?(j=Gu(ot,tt.mode,Ct),j.return=tt,j):(j=u(j,ot),j.return=tt,j)}function W(tt,j,ot,Ct){var le=ot.type;return le===D?bt(tt,j,ot.props.children,Ct,ot.key):j!==null&&(j.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&zs(le)===j.type)?(j=u(j,ot.props),Eo(j,ot),j.return=tt,j):(j=Al(ot.type,ot.key,ot.props,null,tt.mode,Ct),Eo(j,ot),j.return=tt,j)}function lt(tt,j,ot,Ct){return j===null||j.tag!==4||j.stateNode.containerInfo!==ot.containerInfo||j.stateNode.implementation!==ot.implementation?(j=Vu(ot,tt.mode,Ct),j.return=tt,j):(j=u(j,ot.children||[]),j.return=tt,j)}function bt(tt,j,ot,Ct,le){return j===null||j.tag!==7?(j=Os(ot,tt.mode,Ct,le),j.return=tt,j):(j=u(j,ot),j.return=tt,j)}function wt(tt,j,ot){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Gu(""+j,tt.mode,ot),j.return=tt,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ot=Al(j.type,j.key,j.props,null,tt.mode,ot),Eo(ot,j),ot.return=tt,ot;case b:return j=Vu(j,tt.mode,ot),j.return=tt,j;case T:return j=zs(j),wt(tt,j,ot)}if(et(j)||$(j))return j=Os(j,tt.mode,ot,null),j.return=tt,j;if(typeof j.then=="function")return wt(tt,Ll(j),ot);if(j.$$typeof===I)return wt(tt,wl(tt,j),ot);Ol(tt,j)}return null}function pt(tt,j,ot,Ct){var le=j!==null?j.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return le!==null?null:R(tt,j,""+ot,Ct);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case y:return ot.key===le?W(tt,j,ot,Ct):null;case b:return ot.key===le?lt(tt,j,ot,Ct):null;case T:return ot=zs(ot),pt(tt,j,ot,Ct)}if(et(ot)||$(ot))return le!==null?null:bt(tt,j,ot,Ct,null);if(typeof ot.then=="function")return pt(tt,j,Ll(ot),Ct);if(ot.$$typeof===I)return pt(tt,j,wl(tt,ot),Ct);Ol(tt,ot)}return null}function xt(tt,j,ot,Ct,le){if(typeof Ct=="string"&&Ct!==""||typeof Ct=="number"||typeof Ct=="bigint")return tt=tt.get(ot)||null,R(j,tt,""+Ct,le);if(typeof Ct=="object"&&Ct!==null){switch(Ct.$$typeof){case y:return tt=tt.get(Ct.key===null?ot:Ct.key)||null,W(j,tt,Ct,le);case b:return tt=tt.get(Ct.key===null?ot:Ct.key)||null,lt(j,tt,Ct,le);case T:return Ct=zs(Ct),xt(tt,j,ot,Ct,le)}if(et(Ct)||$(Ct))return tt=tt.get(ot)||null,bt(j,tt,Ct,le,null);if(typeof Ct.then=="function")return xt(tt,j,ot,Ll(Ct),le);if(Ct.$$typeof===I)return xt(tt,j,ot,wl(j,Ct),le);Ol(j,Ct)}return null}function ie(tt,j,ot,Ct){for(var le=null,Ge=null,se=j,Me=j=0,Le=null;se!==null&&Me<ot.length;Me++){se.index>Me?(Le=se,se=null):Le=se.sibling;var Ve=pt(tt,se,ot[Me],Ct);if(Ve===null){se===null&&(se=Le);break}t&&se&&Ve.alternate===null&&n(tt,se),j=f(Ve,j,Me),Ge===null?le=Ve:Ge.sibling=Ve,Ge=Ve,se=Le}if(Me===ot.length)return a(tt,se),Pe&&ya(tt,Me),le;if(se===null){for(;Me<ot.length;Me++)se=wt(tt,ot[Me],Ct),se!==null&&(j=f(se,j,Me),Ge===null?le=se:Ge.sibling=se,Ge=se);return Pe&&ya(tt,Me),le}for(se=o(se);Me<ot.length;Me++)Le=xt(se,tt,Me,ot[Me],Ct),Le!==null&&(t&&Le.alternate!==null&&se.delete(Le.key===null?Me:Le.key),j=f(Le,j,Me),Ge===null?le=Le:Ge.sibling=Le,Ge=Le);return t&&se.forEach(function(_s){return n(tt,_s)}),Pe&&ya(tt,Me),le}function fe(tt,j,ot,Ct){if(ot==null)throw Error(s(151));for(var le=null,Ge=null,se=j,Me=j=0,Le=null,Ve=ot.next();se!==null&&!Ve.done;Me++,Ve=ot.next()){se.index>Me?(Le=se,se=null):Le=se.sibling;var _s=pt(tt,se,Ve.value,Ct);if(_s===null){se===null&&(se=Le);break}t&&se&&_s.alternate===null&&n(tt,se),j=f(_s,j,Me),Ge===null?le=_s:Ge.sibling=_s,Ge=_s,se=Le}if(Ve.done)return a(tt,se),Pe&&ya(tt,Me),le;if(se===null){for(;!Ve.done;Me++,Ve=ot.next())Ve=wt(tt,Ve.value,Ct),Ve!==null&&(j=f(Ve,j,Me),Ge===null?le=Ve:Ge.sibling=Ve,Ge=Ve);return Pe&&ya(tt,Me),le}for(se=o(se);!Ve.done;Me++,Ve=ot.next())Ve=xt(se,tt,Me,Ve.value,Ct),Ve!==null&&(t&&Ve.alternate!==null&&se.delete(Ve.key===null?Me:Ve.key),j=f(Ve,j,Me),Ge===null?le=Ve:Ge.sibling=Ve,Ge=Ve);return t&&se.forEach(function(yS){return n(tt,yS)}),Pe&&ya(tt,Me),le}function en(tt,j,ot,Ct){if(typeof ot=="object"&&ot!==null&&ot.type===D&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case y:t:{for(var le=ot.key;j!==null;){if(j.key===le){if(le=ot.type,le===D){if(j.tag===7){a(tt,j.sibling),Ct=u(j,ot.props.children),Ct.return=tt,tt=Ct;break t}}else if(j.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&zs(le)===j.type){a(tt,j.sibling),Ct=u(j,ot.props),Eo(Ct,ot),Ct.return=tt,tt=Ct;break t}a(tt,j);break}else n(tt,j);j=j.sibling}ot.type===D?(Ct=Os(ot.props.children,tt.mode,Ct,ot.key),Ct.return=tt,tt=Ct):(Ct=Al(ot.type,ot.key,ot.props,null,tt.mode,Ct),Eo(Ct,ot),Ct.return=tt,tt=Ct)}return v(tt);case b:t:{for(le=ot.key;j!==null;){if(j.key===le)if(j.tag===4&&j.stateNode.containerInfo===ot.containerInfo&&j.stateNode.implementation===ot.implementation){a(tt,j.sibling),Ct=u(j,ot.children||[]),Ct.return=tt,tt=Ct;break t}else{a(tt,j);break}else n(tt,j);j=j.sibling}Ct=Vu(ot,tt.mode,Ct),Ct.return=tt,tt=Ct}return v(tt);case T:return ot=zs(ot),en(tt,j,ot,Ct)}if(et(ot))return ie(tt,j,ot,Ct);if($(ot)){if(le=$(ot),typeof le!="function")throw Error(s(150));return ot=le.call(ot),fe(tt,j,ot,Ct)}if(typeof ot.then=="function")return en(tt,j,Ll(ot),Ct);if(ot.$$typeof===I)return en(tt,j,wl(tt,ot),Ct);Ol(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,j!==null&&j.tag===6?(a(tt,j.sibling),Ct=u(j,ot),Ct.return=tt,tt=Ct):(a(tt,j),Ct=Gu(ot,tt.mode,Ct),Ct.return=tt,tt=Ct),v(tt)):a(tt,j)}return function(tt,j,ot,Ct){try{yo=0;var le=en(tt,j,ot,Ct);return Mr=null,le}catch(se){if(se===xr||se===Ul)throw se;var Ge=Mi(29,se,null,tt.mode);return Ge.lanes=Ct,Ge.return=tt,Ge}}}var Gs=Sm(!0),ym=Sm(!1),ts=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ns(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),sm(t,null,a),n}return bl(t,o,n,a),Tl(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function nf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var af=!1;function To(){if(af){var t=vr;if(t!==null)throw t}}function Ao(t,n,a,o){af=!1;var u=t.updateQueue;ts=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var W=R,lt=W.next;W.next=null,v===null?f=lt:v.next=lt,v=W;var bt=t.alternate;bt!==null&&(bt=bt.updateQueue,R=bt.lastBaseUpdate,R!==v&&(R===null?bt.firstBaseUpdate=lt:R.next=lt,bt.lastBaseUpdate=W))}if(f!==null){var wt=u.baseState;v=0,bt=lt=W=null,R=f;do{var pt=R.lane&-536870913,xt=pt!==R.lane;if(xt?(Ne&pt)===pt:(o&pt)===pt){pt!==0&&pt===_r&&(af=!0),bt!==null&&(bt=bt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ie=t,fe=R;pt=n;var en=a;switch(fe.tag){case 1:if(ie=fe.payload,typeof ie=="function"){wt=ie.call(en,wt,pt);break t}wt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=fe.payload,pt=typeof ie=="function"?ie.call(en,wt,pt):ie,pt==null)break t;wt=M({},wt,pt);break t;case 2:ts=!0}}pt=R.callback,pt!==null&&(t.flags|=64,xt&&(t.flags|=8192),xt=u.callbacks,xt===null?u.callbacks=[pt]:xt.push(pt))}else xt={lane:pt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},bt===null?(lt=bt=xt,W=wt):bt=bt.next=xt,v|=pt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;xt=R,R=xt.next,xt.next=null,u.lastBaseUpdate=xt,u.shared.pending=null}}while(!0);bt===null&&(W=wt),u.baseState=W,u.firstBaseUpdate=lt,u.lastBaseUpdate=bt,f===null&&(u.shared.lanes=0),os|=v,t.lanes=v,t.memoizedState=wt}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var Sr=F(null),Pl=F(0);function Tm(t,n){t=La,Tt(Pl,t),Tt(Sr,n),La=t|n.baseLanes}function sf(){Tt(Pl,La),Tt(Sr,Sr.current)}function rf(){La=Pl.current,Q(Sr),Q(Pl)}var Si=F(null),Fi=null;function is(t){var n=t.alternate;Tt(xn,xn.current&1),Tt(Si,t),Fi===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(Fi=t)}function of(t){Tt(xn,xn.current),Tt(Si,t),Fi===null&&(Fi=t)}function Am(t){t.tag===22?(Tt(xn,xn.current),Tt(Si,t),Fi===null&&(Fi=t)):as()}function as(){Tt(xn,xn.current),Tt(Si,Si.current)}function yi(t){Q(Si),Fi===t&&(Fi=null),Q(xn)}var xn=F(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,ve=null,$e=null,yn=null,Fl=!1,yr=!1,Vs=!1,Bl=0,Ro=0,Er=null,dM=0;function hn(){throw Error(s(321))}function lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!xi(t[a],n[a]))return!1;return!0}function cf(t,n,a,o,u,f){return Ta=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?cg:bf,Vs=!1,f=a(o,u),Vs=!1,yr&&(f=Cm(n,a,o,u)),Rm(t),f}function Rm(t){O.H=Do;var n=$e!==null&&$e.next!==null;if(Ta=0,yn=$e=ve=null,Fl=!1,Ro=0,Er=null,n)throw Error(s(300));t===null||En||(t=t.dependencies,t!==null&&Cl(t)&&(En=!0))}function Cm(t,n,a,o){ve=t;var u=0;do{if(yr&&(Er=null),Ro=0,yr=!1,25<=u)throw Error(s(301));if(u+=1,yn=$e=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=ug,f=n(a,o)}while(yr);return f}function hM(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(ve.flags|=1024),n}function uf(){var t=Bl!==0;return Bl=0,t}function ff(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function df(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}Ta=0,yn=$e=ve=null,yr=!1,Ro=Bl=0,Er=null}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?ve.memoizedState=yn=t:yn=yn.next=t,yn}function Mn(){if($e===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var n=yn===null?ve.memoizedState:yn.next;if(n!==null)yn=n,$e=t;else{if(t===null)throw ve.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},yn===null?ve.memoizedState=yn=t:yn=yn.next=t}return yn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=Ro;return Ro+=1,Er===null&&(Er=[]),t=vm(Er,t,n),n=ve,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?cg:bf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===I)return zn(t)}throw Error(s(438,String(t)))}function hf(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=at;return n.index++,a}function Aa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=Mn();return pf(n,$e,t)}function pf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=v=null,W=null,lt=n,bt=!1;do{var wt=lt.lane&-536870913;if(wt!==lt.lane?(Ne&wt)===wt:(Ta&wt)===wt){var pt=lt.revertLane;if(pt===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),wt===_r&&(bt=!0);else if((Ta&pt)===pt){lt=lt.next,pt===_r&&(bt=!0);continue}else wt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(R=W=wt,v=f):W=W.next=wt,ve.lanes|=pt,os|=pt;wt=lt.action,Vs&&a(f,wt),f=lt.hasEagerState?lt.eagerState:a(f,wt)}else pt={lane:wt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(R=W=pt,v=f):W=W.next=pt,ve.lanes|=wt,os|=wt;lt=lt.next}while(lt!==null&&lt!==n);if(W===null?v=f:W.next=R,!xi(f,t.memoizedState)&&(En=!0,bt&&(a=vr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function mf(t){var n=Mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);xi(f,n.memoizedState)||(En=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function wm(t,n,a){var o=ve,u=Mn(),f=Pe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!xi(($e||u).memoizedState,a);if(v&&(u.memoizedState=a,En=!0),u=u.queue,vf(Nm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),sn===null)throw Error(s(349));f||(Ta&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=zl(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Om(t)}function Nm(t,n,a){return a(function(){Lm(n)&&Om(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!xi(t,a)}catch{return!0}}function Om(t){var n=Ls(t,2);n!==null&&di(n,t,2)}function gf(t){var n=ei();if(typeof t=="function"){var a=t;if(t=a(),Vs){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,pf(t,$e,typeof o=="function"?o:Aa)}function pM(t,n,a,o,u){if(Xl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var R=a(u,o),W=O.S;W!==null&&W(v,R),Fm(t,n,R)}catch(lt){_f(t,n,lt)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),Fm(t,n,f)}catch(lt){_f(t,n,lt)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bm(t,n,o)},function(o){return _f(t,n,o)}):Bm(t,n,a)}function Bm(t,n,a){n.status="fulfilled",n.value=a,zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,zm(n),n=n.next;while(n!==o)}t.action=null}function zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(Pe){var a=sn.formState;if(a!==null){t:{var o=ve;if(Pe){if(ln){e:{for(var u=ln,f=Ii;u.nodeType!==8;){if(!f){u=null;break e}if(u=Bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ln=Bi(u.nextSibling),o=u.data==="F!";break t}}Ja(o)}o=!1}o&&(n=a[0])}}return a=ei(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=rg.bind(null,ve,o),o.dispatch=a,o=gf(!1),f=Ef.bind(null,ve,!1,o.queue),o=ei(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=pM.bind(null,ve,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=Mn();return km(n,$e,t)}function km(t,n,a){if(n=pf(t,n,Hm)[0],t=Gl(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(v){throw v===xr?Ul:v}else o=n;n=Mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,br(9,{destroy:void 0},mM.bind(null,u,a),null)),[o,f,t]}function mM(t,n){t.action=n}function Xm(t){var n=Mn(),a=$e;if(a!==null)return km(n,a,t);Mn(),n=n.memoizedState,a=Mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function br(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=zl(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return Mn().memoizedState}function Vl(t,n,a,o){var u=ei();ve.flags|=t,u.memoizedState=br(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(t,n,a,o){var u=Mn();o=o===void 0?null:o;var f=u.memoizedState.inst;$e!==null&&o!==null&&lf(o,$e.memoizedState.deps)?u.memoizedState=br(n,f,a,o):(ve.flags|=t,u.memoizedState=br(1|n,f,a,o))}function qm(t,n){Vl(8390656,8,t,n)}function vf(t,n){kl(2048,8,t,n)}function gM(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=zl(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=Mn().memoizedState;return gM({ref:n,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return kl(4,2,t,n)}function Zm(t,n){return kl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Km.bind(null,n,t),a)}function xf(){}function Jm(t,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=t(),Vs){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t0(),ve.lanes|=t,os|=t,a)}function tg(t,n,a,o){return xi(a,n)?a:Sr.current!==null?(t=Mf(t,a,o),xi(t,n)||(En=!0),t):(Ta&42)===0||(Ta&1073741824)!==0&&(Ne&261930)===0?(En=!0,t.memoizedState=a):(t=t0(),ve.lanes|=t,os|=t,n)}function eg(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=O.T,R={};O.T=R,Ef(t,!1,n,a);try{var W=u(),lt=O.S;if(lt!==null&&lt(R,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var bt=fM(W,o);wo(t,n,bt,Ti(t))}else wo(t,n,o,Ti(t))}catch(wt){wo(t,n,{then:function(){},status:"rejected",reason:wt},Ti())}finally{G.p=f,v!==null&&R.types!==null&&(v.types=R.types),O.T=v}}function _M(){}function Sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=ng(t).queue;eg(t,u,n,_t,a===null?_M:function(){return ig(t),a(o)})}function ng(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:_t,baseState:_t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:_t},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ig(t){var n=ng(t);n.next===null&&(n=t.alternate.memoizedState),wo(t,n.next.queue,{},Ti())}function yf(){return zn(qo)}function ag(){return Mn().memoizedState}function sg(){return Mn().memoizedState}function vM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ti();t=es(a);var o=ns(n,t,a);o!==null&&(di(o,n,a),bo(o,n,a)),n={cache:Ku()},t.payload=n;return}n=n.return}}function xM(t,n,a){var o=Ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?og(n,a):(a=zu(t,n,a,o),a!==null&&(di(a,t,o),lg(a,n,o)))}function rg(t,n,a){var o=Ti();wo(t,n,a,o)}function wo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))og(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,xi(R,v))return bl(t,n,u,0),sn===null&&El(),!1}catch{}if(a=zu(t,n,u,o),a!==null)return di(a,t,o),lg(a,n,o),!0}return!1}function Ef(t,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(s(479))}else n=zu(t,a,o,2),n!==null&&di(n,t,2)}function Xl(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function og(t,n){yr=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function lg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var Do={readContext:zn,use:Hl,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Do.useEffectEvent=hn;var cg={readContext:zn,use:Hl,useCallback:function(t,n){return ei().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=ei();n=n===void 0?null:n;var o=t();if(Vs){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ei();if(a!==void 0){var u=a(n);if(Vs){qt(!0);try{a(n)}finally{qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=xM.bind(null,ve,t),[o.memoizedState,t]},useRef:function(t){var n=ei();return t={current:t},n.memoizedState=t},useState:function(t){t=gf(t);var n=t.queue,a=rg.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=ei();return Mf(a,t,n)},useTransition:function(){var t=gf(!1);return t=eg.bind(null,ve,t.queue,!0,!1),ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ve,u=ei();if(Pe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ne&127)!==0||Dm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,qm(Nm.bind(null,o,f,t),[t]),o.flags|=2048,br(9,{destroy:void 0},Um.bind(null,o,f,a,n),null),a},useId:function(){var t=ei(),n=sn.identifierPrefix;if(Pe){var a=na,o=ea;a=(o&~(1<<32-Xt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=ei();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:hf,useCacheRefresh:function(){return ei().memoizedState=vM.bind(null,ve)},useEffectEvent:function(t){var n=ei(),a={impl:t};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bf={readContext:zn,use:Hl,useCallback:Jm,useContext:zn,useEffect:vf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:Gl,useRef:Wm,useState:function(){return Gl(Aa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=Mn();return tg(a,$e.memoizedState,t,n)},useTransition:function(){var t=Gl(Aa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:yf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=Mn();return Pm(a,$e,t,n)},useMemoCache:hf,useCacheRefresh:sg};bf.useEffectEvent=Ym;var ug={readContext:zn,use:Hl,useCallback:Jm,useContext:zn,useEffect:vf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:mf,useRef:Wm,useState:function(){return mf(Aa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=Mn();return $e===null?Mf(a,t,n):tg(a,$e.memoizedState,t,n)},useTransition:function(){var t=mf(Aa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:yf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=Mn();return $e!==null?Pm(a,$e,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:sg};ug.useEffectEvent=Ym;function Tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:M({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Ti(),u=es(o);u.payload=n,a!=null&&(u.callback=a),n=ns(t,u,o),n!==null&&(di(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Ti(),u=es(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ns(t,u,o),n!==null&&(di(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ti(),o=es(a);o.tag=2,n!=null&&(o.callback=n),n=ns(t,o,a),n!==null&&(di(n,t,a),bo(n,t,a))}};function fg(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(u,f):!0}function dg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Af.enqueueReplaceState(n,n.state,null)}function ks(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=M({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function hg(t){yl(t)}function pg(t){console.error(t)}function mg(t){yl(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=es(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function _g(t){return t=es(t),t.tag=3,t}function vg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){gg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){gg(n,a,o),typeof u!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function MM(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&gr(n,a,u,!0),a=Si.current,a!==null){switch(a.tag){case 31:case 13:return Fi===null?ic():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(t,o,u)),!1}throw Error(s(435,a.tag))}return Jf(t,o,u),ic(),!1}if(Pe)return n=Si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(t=Error(s(422),{cause:o}),xo(Li(t,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),xo(Li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Li(o,a),u=Rf(t.stateNode,o,u),nf(t,u),pn!==4&&(pn=2)),!1;var f=Error(s(520),{cause:o});if(f=Li(f,a),Bo===null?Bo=[f]:Bo.push(f),pn!==4&&(pn=2),n===null)return!0;o=Li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),nf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ls===null||!ls.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),vg(u,t,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),En=!1;function Hn(t,n,a,o){n.child=t===null?ym(n,null,a,o):Gs(n,t.child,a,o)}function xg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Fs(n),o=cf(t,n,a,v,f,u),R=uf(),t!==null&&!En?(ff(t,n,u),Ra(t,n,u)):(Pe&&R&&ku(n),n.flags|=1,Hn(t,n,o,u),n.child)}function Mg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sg(t,n,f,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!If(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(v,o)&&t.ref===n.ref)return Ra(t,n,u)}return n.flags|=1,t=Sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function Sg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(go(f,o)&&t.ref===n.ref)if(En=!1,n.pendingProps=o=f,If(t,u))(t.flags&131072)!==0&&(En=!0);else return n.lanes=t.lanes,Ra(t,n,u)}return wf(t,n,a,o,u)}function yg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Eg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?Tm(n,f):sf(),Am(n);else return o=n.lanes=536870912,Eg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Dl(n,f.cachePool),Tm(n,f),as(),n.memoizedState=null):(t!==null&&Dl(n,null),sf(),as());return Hn(t,n,u,a),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(t,n,a,o,u){var f=Ju();return f=f===null?null:{parent:Sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Dl(n,null),sf(),Am(n),t!==null&&gr(t,n,o,!0),n.childLanes=u,null}function ql(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bg(t,n,a){return Gs(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,yi(n),n.memoizedState=null,t}function SM(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Pe){if(o.mode==="hidden")return t=ql(n,o),n.lanes=536870912,Uo(null,t);if(of(n),(t=ln)?(t=I0(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Bn=n,ln=null)):t=null,t===null)throw Ja(n);return n.lanes=536870912,null}return ql(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=bg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||gr(t,n,a,!1),u=(a&t.childLanes)!==0,En||u){if(o=sn,o!==null&&(v=mi(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ls(t,v),di(o,t,v),Cf;ic(),n=bg(t,n,a)}else t=f.treeContext,ln=Bi(v.nextSibling),Bn=n,Pe=!0,Qa=null,Ii=!1,t!==null&&um(n,t),n=ql(n,o),n.flags|=4096;return n}return t=Sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wf(t,n,a,o,u){return Fs(n),a=cf(t,n,a,o,void 0,u),o=uf(),t!==null&&!En?(ff(t,n,u),Ra(t,n,u)):(Pe&&o&&ku(n),n.flags|=1,Hn(t,n,a,u),n.child)}function Tg(t,n,a,o,u,f){return Fs(n),n.updateQueue=null,a=Cm(n,o,a,u),Rm(t),o=uf(),t!==null&&!En?(ff(t,n,f),Ra(t,n,f)):(Pe&&o&&ku(n),n.flags|=1,Hn(t,n,a,f),n.child)}function Ag(t,n,a,o,u){if(Fs(n),n.stateNode===null){var f=dr,v=a.contextType;typeof v=="object"&&v!==null&&(f=zn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},tf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?zn(v):dr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Tf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Af.enqueueReplaceState(f,f.state,null),Ao(n,o,f,u),To(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,W=ks(a,R);f.props=W;var lt=f.context,bt=a.contextType;v=dr,typeof bt=="object"&&bt!==null&&(v=zn(bt));var wt=a.getDerivedStateFromProps;bt=typeof wt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,bt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||lt!==v)&&dg(n,f,o,v),ts=!1;var pt=n.memoizedState;f.state=pt,Ao(n,o,f,u),To(),lt=n.memoizedState,R||pt!==lt||ts?(typeof wt=="function"&&(Tf(n,a,wt,o),lt=n.memoizedState),(W=ts||fg(n,a,W,o,pt,lt,v))?(bt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=v,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ef(t,n),v=n.memoizedProps,bt=ks(a,v),f.props=bt,wt=n.pendingProps,pt=f.context,lt=a.contextType,W=dr,typeof lt=="object"&&lt!==null&&(W=zn(lt)),R=a.getDerivedStateFromProps,(lt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==wt||pt!==W)&&dg(n,f,o,W),ts=!1,pt=n.memoizedState,f.state=pt,Ao(n,o,f,u),To();var xt=n.memoizedState;v!==wt||pt!==xt||ts||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(Tf(n,a,R,o),xt=n.memoizedState),(bt=ts||fg(n,a,bt,o,pt,xt,W)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,xt,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,xt,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&pt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pt===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=xt),f.props=o,f.state=xt,f.context=W,o=bt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&pt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pt===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Gs(n,t.child,null,u),n.child=Gs(n,null,a,u)):Hn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ra(t,n,u),t}function Rg(t,n,a,o){return Ps(),n.flags|=256,Hn(t,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:gm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=bi),t}function Cg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Pe){if(u?is(n):as(),(t=ln)?(t=I0(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Bn=n,ln=null)):t=null,t===null)throw Ja(n);return pd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(as(),u=n.mode,R=jl({mode:"hidden",children:R},u),o=Os(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(t,v,a),n.memoizedState=Df,Uo(null,o)):(is(n),Lf(n,R))}var W=t.memoizedState;if(W!==null&&(R=W.dehydrated,R!==null)){if(f)n.flags&256?(is(n),n.flags&=-257,n=Of(t,n,a)):n.memoizedState!==null?(as(),n.child=t.child,n.flags|=128,n=null):(as(),R=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),R=Os(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Gs(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(t,v,a),n.memoizedState=Df,n=Uo(null,o));else if(is(n),pd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var lt=v.dgst;v=lt,o=Error(s(419)),o.stack="",o.digest=v,xo({value:o,source:null,stack:null}),n=Of(t,n,a)}else if(En||gr(t,n,a,!1),v=(a&t.childLanes)!==0,En||v){if(v=sn,v!==null&&(o=mi(v,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,Ls(t,o),di(v,t,o),Cf;hd(R)||ic(),n=Of(t,n,a)}else hd(R)?(n.flags|=192,n.child=t.child,n=null):(t=W.treeContext,ln=Bi(R.nextSibling),Bn=n,Pe=!0,Qa=null,Ii=!1,t!==null&&um(n,t),n=Lf(n,o.children),n.flags|=4096);return n}return u?(as(),R=o.fallback,u=n.mode,W=t.child,lt=W.sibling,o=Sa(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,lt!==null?R=Sa(lt,R):(R=Os(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Uo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Uf(a):(u=R.cachePool,u!==null?(W=Sn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=gm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Nf(t,v,a),n.memoizedState=Df,Uo(t.child,o)):(is(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Lf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Mi(22,t,null,n),t.lanes=0,t}function Of(t,n,a){return Gs(n,t.child,null,a),t=Lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,a)}function Pf(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Dg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=xn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Tt(xn,v),Hn(t,n,o,a),o=Pe?vo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,a,n);else if(t.tag===19)wg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pf(n,!0,a,null,f,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),os|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(gr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function If(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function yM(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),$a(n,Sn,t.memoizedState.cache),Ps();break;case 27:case 5:Qt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:$a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(is(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(t,n,a):(is(n),t=Ra(t,n,a),t!==null?t.sibling:null);is(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(gr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(xn,xn.current),o)break;return null;case 22:return n.lanes=0,yg(t,n,a,n.pendingProps);case 24:$a(n,Sn,t.memoizedState.cache)}return Ra(t,n,a)}function Ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)En=!0;else{if(!If(t,a)&&(n.flags&128)===0)return En=!1,yM(t,n,a);En=(t.flags&131072)!==0}else En=!1,Pe&&(n.flags&1048576)!==0&&cm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=zs(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=ks(t,o),n.tag=1,n=Ag(null,n,t,o,a)):(n.tag=0,n=wf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=xg(null,n,t,o,a);break t}else if(u===H){n.tag=14,n=Mg(null,n,t,o,a);break t}}throw n=ct(t)||t,Error(s(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ks(o,n.pendingProps),Ag(t,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ef(t,n),Ao(n,o,null,a);var v=n.memoizedState;if(o=v.cache,$a(n,Sn,o),o!==f.cache&&Zu(n,[Sn],a,!0),To(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rg(t,n,o,a);break t}else if(o!==u){u=Li(Error(s(424)),n),xo(u),n=Rg(t,n,o,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ln=Bi(t.firstChild),Bn=n,Pe=!0,Qa=null,Ii=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ps(),o===u){n=Ra(t,n,a);break t}Hn(t,n,o,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=V0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,t=n.pendingProps,o=uc(rt.current).createElement(a),o[rn]=n,o[an]=t,Gn(o,a,t),Z(o),n.stateNode=o):n.memoizedState=V0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&Pe&&(o=n.stateNode=z0(n.type,n.pendingProps,rt.current),Bn=n,Ii=!0,u=ln,ds(n.type)?(md=u,ln=Bi(o.firstChild)):ln=u),Hn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Pe&&((u=o=ln)&&(o=JM(o,n.type,n.pendingProps,Ii),o!==null?(n.stateNode=o,Bn=n,ln=Bi(o.firstChild),Ii=!1,u=!0):u=!1),u||Ja(n)),Qt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,ud(u,f)?o=null:v!==null&&ud(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(t,n,hM,null,null,a),qo._currentValue=u),Yl(t,n),Hn(t,n,o,a),n.child;case 6:return t===null&&Pe&&((t=a=ln)&&(a=$M(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Bn=n,ln=null,t=!0):t=!1),t||Ja(n)),null;case 13:return Cg(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gs(n,null,o,a):Hn(t,n,o,a),n.child;case 11:return xg(t,n,n.type,n.pendingProps,a);case 7:return Hn(t,n,n.pendingProps,a),n.child;case 8:return Hn(t,n,n.pendingProps.children,a),n.child;case 12:return Hn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,$a(n,n.type,o.value),Hn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Fs(n),u=zn(u),o=o(u),n.flags|=1,Hn(t,n,o,a),n.child;case 14:return Mg(t,n,n.type,n.pendingProps,a);case 15:return Sg(t,n,n.type,n.pendingProps,a);case 19:return Dg(t,n,a);case 31:return SM(t,n,a);case 22:return yg(t,n,a,n.pendingProps);case 24:return Fs(n),o=zn(Sn),t===null?(u=Ju(),u===null&&(u=sn,f=Ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},tf(n),$a(n,Sn,u)):((t.lanes&a)!==0&&(ef(t,n),Ao(n,null,null,a),To()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),$a(n,Sn,o)):(o=f.cache,$a(n,Sn,o),o!==u.cache&&Zu(n,[Sn],a,!0))),Hn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ca(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw Hs=Nl,$u}else t.flags&=-16777217}function Ng(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(a0())t.flags|=8192;else throw Hs=Nl,$u}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,Cr|=n)}function No(t,n){if(!Pe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function cn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function EM(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ba(Sn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mr(n)?Ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qu())),cn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ca(n),f!==null?(cn(n),Ng(n,f)):(cn(n),Ff(n,u,null,o,a))):f?f!==t.memoizedState?(Ca(n),cn(n),Ng(n,f)):(cn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ca(n),cn(n),Ff(n,u,t,o,a)),null;case 27:if(ee(n),a=rt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}t=Bt.current,mr(n)?fm(n):(t=z0(u,o,a),n.stateNode=t,Ca(n))}return cn(n),null;case 5:if(ee(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return cn(n),null}if(f=Bt.current,mr(n))fm(n);else{var v=uc(rt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[rn]=n,f[an]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Gn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ca(n)}}return cn(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=rt.current,mr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C0(t.nodeValue,a)),t||Ja(n,!0)}else t=uc(t).createTextNode(o),t[rn]=n,n.stateNode=t}return cn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=mr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[rn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(yi(n),n):(yi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return cn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=mr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(yi(n),n):(yi(n),null)}return yi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),cn(n),null);case 4:return zt(),t===null&&sd(n.stateNode.containerInfo),cn(n),null;case 10:return ba(n.type),cn(n),null;case 19:if(Q(xn),o=n.memoizedState,o===null)return cn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)No(o,!1);else{if(pn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Il(t),f!==null){for(n.flags|=128,No(o,!1),t=f.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rm(a,t),a=a.sibling;return Tt(xn,xn.current&1|2),Pe&&ya(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>tc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Pe)return cn(n),null}else 2*E()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=xn.current,Tt(xn,u?a&1|2:a&1),Pe&&ya(n,o.treeForkCount),t):(cn(n),null);case 22:case 23:return yi(n),rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(Sn),cn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bM(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ba(Sn),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if(yi(n),n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(yi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(xn),null;case 4:return zt(),null;case 10:return ba(n.type),null;case 22:case 23:return yi(n),rf(),t!==null&&Q(Bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ba(Sn),null;case 25:return null;default:return null}}function Lg(t,n){switch(Xu(n),n.tag){case 3:ba(Sn),zt();break;case 26:case 27:case 5:ee(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&yi(n);break;case 13:yi(n);break;case 19:Q(xn);break;case 10:ba(n.type);break;case 22:case 23:yi(n),rf(),t!==null&&Q(Bs);break;case 24:ba(Sn)}}function Lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Ke(n,n.return,R)}}function ss(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var W=a,lt=R;try{lt()}catch(bt){Ke(u,W,bt)}}}o=o.next}while(o!==f)}}catch(bt){Ke(n,n.return,bt)}}function Og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){Ke(t,t.return,o)}}}function Pg(t,n,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(t,n,o)}}function Oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ke(t,n,u)}}function ia(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ke(t,n,u)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ke(t,t.return,u)}}function Bf(t,n,a){try{var o=t.stateNode;qM(o,t.type,a,n),o[an]=n}catch(u){Ke(t,t.return,u)}}function Fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ds(t.type)||t.tag===4}function zf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ds(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oe));else if(o!==4&&(o===27&&ds(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ds(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function Bg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,o,a),n[rn]=t,n[an]=a}catch(f){Ke(t,t.return,f)}}var wa=!1,bn=!1,Gf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function TM(t,n){if(t=t.containerInfo,ld=_c,t=Qp(t),Lu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,W=-1,lt=0,bt=0,wt=t,pt=null;e:for(;;){for(var xt;wt!==a||u!==0&&wt.nodeType!==3||(R=v+u),wt!==f||o!==0&&wt.nodeType!==3||(W=v+o),wt.nodeType===3&&(v+=wt.nodeValue.length),(xt=wt.firstChild)!==null;)pt=wt,wt=xt;for(;;){if(wt===t)break e;if(pt===a&&++lt===u&&(R=v),pt===f&&++bt===o&&(W=v),(xt=wt.nextSibling)!==null)break;wt=pt,pt=wt.parentNode}wt=xt}a=R===-1||W===-1?null:{start:R,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},_c=!1,Nn=n;Nn!==null;)if(n=Nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nn=t;else for(;Nn!==null;){switch(n=Nn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=ks(a.type,u);t=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(fe){Ke(a,a.return,fe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Nn=t;break}Nn=n.return}}function Hg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(t,a),o&4&&Lo(5,a);break;case 1:if(Ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ke(a,a.return,v)}else{var u=ks(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ke(a,a.return,v)}}o&64&&Og(a),o&512&&Oo(a,a.return);break;case 3:if(Ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(v){Ke(a,a.return,v)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:Ua(t,a),n===null&&o&4&&Ig(a),o&512&&Oo(a,a.return);break;case 12:Ua(t,a);break;case 31:Ua(t,a),o&4&&kg(t,a);break;case 13:Ua(t,a),o&4&&Xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=OM.bind(null,a),tS(t,a))));break;case 22:if(o=a.memoizedState!==null||wa,!o){n=n!==null&&n.memoizedState!==null||bn,u=wa;var f=bn;wa=o,(bn=n)&&!f?Na(t,a,(a.subtreeFlags&8772)!==0):Ua(t,a),wa=u,bn=f}break;case 30:break;default:Ua(t,a)}}function Gg(t){var n=t.alternate;n!==null&&(t.alternate=null,Gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Di(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,li=!1;function Da(t,n,a){for(a=a.child;a!==null;)Vg(t,n,a),a=a.sibling}function Vg(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:bn||ia(a,n),Da(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||ia(a,n);var o=un,u=li;ds(a.type)&&(un=a.stateNode,li=!1),Da(t,n,a),ko(a.stateNode),un=o,li=u;break;case 5:bn||ia(a,n);case 6:if(o=un,u=li,un=null,Da(t,n,a),un=o,li=u,un!==null)if(li)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode)}catch(f){Ke(a,n,f)}else try{un.removeChild(a.stateNode)}catch(f){Ke(a,n,f)}break;case 18:un!==null&&(li?(t=un,O0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ir(t)):O0(un,a.stateNode));break;case 4:o=un,u=li,un=a.stateNode.containerInfo,li=!0,Da(t,n,a),un=o,li=u;break;case 0:case 11:case 14:case 15:ss(2,a,n),bn||ss(4,a,n),Da(t,n,a);break;case 1:bn||(ia(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pg(a,n,o)),Da(t,n,a);break;case 21:Da(t,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,Da(t,n,a),bn=o;break;default:Da(t,n,a)}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ir(t)}catch(a){Ke(n,n.return,a)}}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ir(t)}catch(a){Ke(n,n.return,a)}}function AM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new zg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new zg),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=AM(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=PM.bind(null,t,o);o.then(u,u)}})}function ci(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(ds(R.type)){un=R.stateNode,li=!1;break t}break;case 5:un=R.stateNode,li=!1;break t;case 3:case 4:un=R.stateNode.containerInfo,li=!0;break t}R=R.return}if(un===null)throw Error(s(160));Vg(f,v,u),un=null,li=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t),n=n.sibling}var ji=null;function Wg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),o&4&&(ss(3,t,t.return),Lo(3,t),ss(5,t,t.return));break;case 1:ci(n,t),ui(t),o&512&&(bn||a===null||ia(a,a.return)),o&64&&wa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ji;if(ci(n,t),ui(t),o&512&&(bn||a===null||ia(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[vi]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Gn(f,o,a),f[rn]=t,Z(f),o=f;break t;case"link":var v=W0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=W0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=t,Z(f),o=f}t.stateNode=o}else q0(u,t.type,t.stateNode);else t.stateNode=X0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?q0(u,t.type,t.stateNode):X0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ci(n,t),ui(t),o&512&&(bn||a===null||ia(a,a.return)),a!==null&&o&4&&Bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ci(n,t),ui(t),o&512&&(bn||a===null||ia(a,a.return)),t.flags&32){u=t.stateNode;try{Un(u,"")}catch(ie){Ke(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(ci(n,t),ui(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Ke(t,t.return,ie)}}break;case 3:if(hc=null,u=ji,ji=fc(n.containerInfo),ci(n,t),ji=u,ui(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(ie){Ke(t,t.return,ie)}Gf&&(Gf=!1,qg(t));break;case 4:o=ji,ji=fc(t.stateNode.containerInfo),ci(n,t),ui(t),ji=o;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,lt=wa,bt=bn;if(wa=lt||u,bn=bt||W,ci(n,t),bn=bt,wa=lt,ui(t),o&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||wa||bn||Xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=W.stateNode;var wt=W.memoizedProps.style,pt=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;R.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch(ie){Ke(W,W.return,ie)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(ie){Ke(W,W.return,ie)}}}else if(n.tag===18){if(a===null){W=n;try{var xt=W.stateNode;u?P0(xt,!0):P0(W.stateNode,!1)}catch(ie){Ke(W,W.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:ci(n,t),ui(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(t);Kl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Un(v,""),a.flags&=-33);var R=zf(t);Kl(t,R,v);break;case 3:case 4:var W=a.stateNode.containerInfo,lt=zf(t);Hf(t,lt,W);break;default:throw Error(s(161))}}catch(bt){Ke(t,t.return,bt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(t,n.alternate,n),n=n.sibling}function Xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ss(4,n,n.return),Xs(n);break;case 1:ia(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pg(n,n.return,a),Xs(n);break;case 27:ko(n.stateNode);case 26:case 5:ia(n,n.return),Xs(n);break;case 22:n.memoizedState===null&&Xs(n);break;case 30:Xs(n);break;default:Xs(n)}t=t.sibling}}function Na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Na(u,f,a),Lo(4,f);break;case 1:if(Na(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ke(o,o.return,lt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Em(W[u],R)}catch(lt){Ke(o,o.return,lt)}}a&&v&64&&Og(f),Oo(f,f.return);break;case 27:Bg(f);case 26:case 5:Na(u,f,a),a&&o===null&&v&4&&Ig(f),Oo(f,f.return);break;case 12:Na(u,f,a);break;case 31:Na(u,f,a),a&&v&4&&kg(u,f);break;case 13:Na(u,f,a),a&&v&4&&Xg(u,f);break;case 22:f.memoizedState===null&&Na(u,f,a),Oo(f,f.return);break;case 30:break;default:Na(u,f,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Zi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(t,n,a,o),n=n.sibling}function Yg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(t,n,a,o),u&2048&&Lo(9,n);break;case 1:Zi(t,n,a,o);break;case 3:Zi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){Zi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){Ke(n,n.return,W)}}else Zi(t,n,a,o);break;case 31:Zi(t,n,a,o);break;case 13:Zi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Zi(t,n,a,o):Po(t,n):f._visibility&2?Zi(t,n,a,o):(f._visibility|=2,Tr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(v,n);break;case 24:Zi(t,n,a,o),u&2048&&kf(n.alternate,n);break;default:Zi(t,n,a,o)}}function Tr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,W=o,lt=v.flags;switch(v.tag){case 0:case 11:case 15:Tr(f,v,R,W,u),Lo(8,v);break;case 23:break;case 22:var bt=v.stateNode;v.memoizedState!==null?bt._visibility&2?Tr(f,v,R,W,u):Po(f,v):(bt._visibility|=2,Tr(f,v,R,W,u)),u&&lt&2048&&Vf(v.alternate,v);break;case 24:Tr(f,v,R,W,u),u&&lt&2048&&kf(v.alternate,v);break;default:Tr(f,v,R,W,u)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Po(a,o),u&2048&&kf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Io=8192;function Ar(t,n,a){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)jg(t,n,a),t=t.sibling}function jg(t,n,a){switch(t.tag){case 26:Ar(t,n,a),t.flags&Io&&t.memoizedState!==null&&dS(a,ji,t.memoizedState,t.memoizedProps);break;case 5:Ar(t,n,a);break;case 3:case 4:var o=ji;ji=fc(t.stateNode.containerInfo),Ar(t,n,a),ji=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,Ar(t,n,a),Io=o):Ar(t,n,a));break;default:Ar(t,n,a)}}function Zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Qg(o,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&ss(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Fo(t);break;default:Fo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Qg(o,t)}Zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ss(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Qg(t,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:ss(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Nn=o;else t:for(a=t;Nn!==null;){o=Nn;var u=o.sibling,f=o.return;if(Gg(o),o===a){Nn=null;break t}if(u!==null){u.return=f,Nn=u;break t}Nn=f}}}var RM={getCacheForType:function(t){var n=zn(Sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(Sn).controller.signal}},CM=typeof WeakMap=="function"?WeakMap:Map,Ye=0,sn=null,De=null,Ne=0,Ze=0,Ei=null,rs=!1,Rr=!1,Xf=!1,La=0,pn=0,os=0,Ws=0,Wf=0,bi=0,Cr=0,Bo=null,fi=null,qf=!1,$l=0,Jg=0,tc=1/0,ec=null,ls=null,Rn=0,cs=null,wr=null,Oa=0,Yf=0,jf=null,$g=null,zo=0,Zf=null;function Ti(){return(Ye&2)!==0&&Ne!==0?Ne&-Ne:O.T!==null?ed():Xn()}function t0(){if(bi===0)if((Ne&536870912)===0||Pe){var t=Ht;Ht<<=1,(Ht&3932160)===0&&(Ht=262144),bi=t}else bi=536870912;return t=Si.current,t!==null&&(t.flags|=32),bi}function di(t,n,a){(t===sn&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),us(t,Ne,bi,!1)),_n(t,a),((Ye&2)===0||t!==sn)&&(t===sn&&((Ye&2)===0&&(Ws|=a),pn===4&&us(t,Ne,bi,!1)),aa(t))}function e0(t,n,a){if((Ye&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Yt(t,n),u=o?UM(t,n):Qf(t,n,!0),f=o;do{if(u===0){Rr&&!o&&us(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!wM(a)){u=Qf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=t;u=Bo;var W=R.current.memoizedState.isDehydrated;if(W&&(Dr(R,v).flags|=256),v=Qf(R,v,!1),v!==2){if(Xf&&!W){R.errorRecoveryDisabledLanes|=f,Ws|=f,u=4;break t}f=fi,fi=u,f!==null&&(fi===null?fi=f:fi.push.apply(fi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Dr(t,0),us(t,n,0,!0);break}t:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:us(o,n,bi,!rs);break t;case 2:fi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(us(o,n,bi,!rs),vt(o,0,!0)!==0)break t;Oa=n,o.timeoutHandle=N0(n0.bind(null,o,a,fi,ec,qf,n,bi,Ws,Cr,rs,f,"Throttled",-0,0),u);break t}n0(o,a,fi,ec,qf,n,bi,Ws,Cr,rs,f,null,-0,0)}}break}while(!0);aa(t)}function n0(t,n,a,o,u,f,v,R,W,lt,bt,wt,pt,xt){if(t.timeoutHandle=-1,wt=n.subtreeFlags,wt&8192||(wt&16785408)===16785408){wt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},jg(n,f,wt);var ie=(f&62914560)===f?$l-E():(f&4194048)===f?Jg-E():0;if(ie=hS(wt,ie),ie!==null){Oa=f,t.cancelPendingCommit=ie(u0.bind(null,t,n,f,a,o,u,v,R,W,bt,wt,null,pt,xt)),us(t,f,v,!lt);return}}u0(t,n,f,a,o,u,v,R,W)}function wM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!xi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function us(t,n,a,o){n&=~Wf,n&=~Ws,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Xt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Dn(t,a,n)}function nc(){return(Ye&6)===0?(Ho(0),!1):!0}function Kf(){if(De!==null){if(Ze===0)var t=De.return;else t=De,Ea=Is=null,df(t),Mr=null,yo=0,t=De;for(;t!==null;)Lg(t.alternate,t),t=t.return;De=null}}function Dr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ZM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Oa=0,Kf(),sn=t,De=a=Sa(t.current,null),Ne=n,Ze=0,Ei=null,rs=!1,Rr=Yt(t,n),Xf=!1,Cr=bi=Wf=Ws=os=pn=0,fi=Bo=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xt(o),f=1<<u;n|=t[u],o&=~f}return La=n,El(),a}function i0(t,n){ve=null,O.H=Do,n===xr||n===Ul?(n=xm(),Ze=3):n===$u?(n=xm(),Ze=4):Ze=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,De===null&&(pn=1,Wl(t,Li(n,t.current)))}function a0(){var t=Si.current;return t===null?!0:(Ne&4194048)===Ne?Fi===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Fi:!1}function s0(){var t=O.H;return O.H=Do,t===null?Do:t}function r0(){var t=O.A;return O.A=RM,t}function ic(){pn=4,rs||(Ne&4194048)!==Ne&&Si.current!==null||(Rr=!0),(os&134217727)===0&&(Ws&134217727)===0||sn===null||us(sn,Ne,bi,!1)}function Qf(t,n,a){var o=Ye;Ye|=2;var u=s0(),f=r0();(sn!==t||Ne!==n)&&(ec=null,Dr(t,n)),n=!1;var v=pn;t:do try{if(Ze!==0&&De!==null){var R=De,W=Ei;switch(Ze){case 8:Kf(),v=6;break t;case 3:case 2:case 9:case 6:Si.current===null&&(n=!0);var lt=Ze;if(Ze=0,Ei=null,Ur(t,R,W,lt),a&&Rr){v=0;break t}break;default:lt=Ze,Ze=0,Ei=null,Ur(t,R,W,lt)}}DM(),v=pn;break}catch(bt){i0(t,bt)}while(!0);return n&&t.shellSuspendCounter++,Ea=Is=null,Ye=o,O.H=u,O.A=f,De===null&&(sn=null,Ne=0,El()),v}function DM(){for(;De!==null;)o0(De)}function UM(t,n){var a=Ye;Ye|=2;var o=s0(),u=r0();sn!==t||Ne!==n?(ec=null,tc=E()+500,Dr(t,n)):Rr=Yt(t,n);t:do try{if(Ze!==0&&De!==null){n=De;var f=Ei;e:switch(Ze){case 1:Ze=0,Ei=null,Ur(t,n,f,1);break;case 2:case 9:if(_m(f)){Ze=0,Ei=null,l0(n);break}n=function(){Ze!==2&&Ze!==9||sn!==t||(Ze=7),aa(t)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:_m(f)?(Ze=0,Ei=null,l0(n)):(Ze=0,Ei=null,Ur(t,n,f,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var R=De;if(v?Y0(v):R.stateNode.complete){Ze=0,Ei=null;var W=R.sibling;if(W!==null)De=W;else{var lt=R.return;lt!==null?(De=lt,ac(lt)):De=null}break e}}Ze=0,Ei=null,Ur(t,n,f,5);break;case 6:Ze=0,Ei=null,Ur(t,n,f,6);break;case 8:Kf(),pn=6;break t;default:throw Error(s(462))}}NM();break}catch(bt){i0(t,bt)}while(!0);return Ea=Is=null,O.H=o,O.A=u,Ye=a,De!==null?0:(sn=null,Ne=0,El(),pn)}function NM(){for(;De!==null&&!te();)o0(De)}function o0(t){var n=Ug(t.alternate,t,La);t.memoizedProps=t.pendingProps,n===null?ac(t):De=n}function l0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Tg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Tg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:df(n);default:Lg(a,n),n=De=rm(n,La),n=Ug(a,n,La)}t.memoizedProps=t.pendingProps,n===null?ac(t):De=n}function Ur(t,n,a,o){Ea=Is=null,df(n),Mr=null,yo=0;var u=n.return;try{if(MM(t,u,n,a,Ne)){pn=1,Wl(t,Li(a,t.current)),De=null;return}}catch(f){if(u!==null)throw De=u,f;pn=1,Wl(t,Li(a,t.current)),De=null;return}n.flags&32768?(Pe||o===1?t=!0:Rr||(Ne&536870912)!==0?t=!1:(rs=t=!0,(o===2||o===9||o===3||o===6)&&(o=Si.current,o!==null&&o.tag===13&&(o.flags|=16384))),c0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){c0(n,rs);return}t=n.return;var a=EM(n.alternate,n,La);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);pn===0&&(pn=5)}function c0(t,n){do{var a=bM(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);pn=6,De=null}function u0(t,n,a,o,u,f,v,R,W){t.cancelPendingCommit=null;do sc();while(Rn!==0);if((Ye&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Bu,Pn(t,a,f,v,R,W),t===sn&&(De=sn=null,Ne=0),wr=n,cs=t,Oa=a,Yf=f,jf=u,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,IM(St,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=G.p,G.p=2,v=Ye,Ye|=4;try{TM(t,n,a)}finally{Ye=v,G.p=u,O.T=o}}Rn=1,f0(),d0(),h0()}}function f0(){if(Rn===1){Rn=0;var t=cs,n=wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Ye;Ye|=4;try{Wg(n,t);var f=cd,v=Qp(t.containerInfo),R=f.focusedElem,W=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(W!==null&&Lu(R)){var lt=W.start,bt=W.end;if(bt===void 0&&(bt=lt),"selectionStart"in R)R.selectionStart=lt,R.selectionEnd=Math.min(bt,R.value.length);else{var wt=R.ownerDocument||document,pt=wt&&wt.defaultView||window;if(pt.getSelection){var xt=pt.getSelection(),ie=R.textContent.length,fe=Math.min(W.start,ie),en=W.end===void 0?fe:Math.min(W.end,ie);!xt.extend&&fe>en&&(v=en,en=fe,fe=v);var tt=Zp(R,fe),j=Zp(R,en);if(tt&&j&&(xt.rangeCount!==1||xt.anchorNode!==tt.node||xt.anchorOffset!==tt.offset||xt.focusNode!==j.node||xt.focusOffset!==j.offset)){var ot=wt.createRange();ot.setStart(tt.node,tt.offset),xt.removeAllRanges(),fe>en?(xt.addRange(ot),xt.extend(j.node,j.offset)):(ot.setEnd(j.node,j.offset),xt.addRange(ot))}}}}for(wt=[],xt=R;xt=xt.parentNode;)xt.nodeType===1&&wt.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<wt.length;R++){var Ct=wt[R];Ct.element.scrollLeft=Ct.left,Ct.element.scrollTop=Ct.top}}_c=!!ld,cd=ld=null}finally{Ye=u,G.p=o,O.T=a}}t.current=n,Rn=2}}function d0(){if(Rn===2){Rn=0;var t=cs,n=wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Ye;Ye|=4;try{Hg(t,n.alternate,n)}finally{Ye=u,G.p=o,O.T=a}}Rn=3}}function h0(){if(Rn===4||Rn===3){Rn=0,L();var t=cs,n=wr,a=Oa,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,wr=cs=null,p0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ls=null),In(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=G.p,G.p=2,O.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{O.T=n,G.p=u}}(Oa&3)!==0&&sc(),aa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Zf?zo++:(zo=0,Zf=t):zo=0,Ho(0)}}function p0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function sc(){return f0(),d0(),h0(),m0()}function m0(){if(Rn!==5)return!1;var t=cs,n=Yf;Yf=0;var a=In(Oa),o=O.T,u=G.p;try{G.p=32>a?32:a,O.T=null,a=jf,jf=null;var f=cs,v=Oa;if(Rn=0,wr=cs=null,Oa=0,(Ye&6)!==0)throw Error(s(331));var R=Ye;if(Ye|=4,Kg(f.current),Yg(f,f.current,v,a),Ye=R,Ho(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Dt,f)}catch{}return!0}finally{G.p=u,O.T=o,p0(t,n)}}function g0(t,n,a){n=Li(a,n),n=Rf(t.stateNode,n,2),t=ns(t,n,2),t!==null&&(_n(t,2),aa(t))}function Ke(t,n,a){if(t.tag===3)g0(t,t,a);else for(;n!==null;){if(n.tag===3){g0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ls===null||!ls.has(o))){t=Li(a,t),a=_g(2),o=ns(n,a,2),o!==null&&(vg(a,o,n,t),_n(o,2),aa(o));break}}n=n.return}}function Jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new CM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=LM.bind(null,t,n,a),n.then(t,t))}function LM(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,sn===t&&(Ne&a)===a&&(pn===4||pn===3&&(Ne&62914560)===Ne&&300>E()-$l?(Ye&2)===0&&Dr(t,0):Wf|=a,Cr===Ne&&(Cr=0)),aa(t)}function _0(t,n){n===0&&(n=Re()),t=Ls(t,n),t!==null&&(_n(t,n),aa(t))}function OM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(t,a)}function PM(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),_0(t,a)}function IM(t,n){return be(t,n)}var rc=null,Nr=null,$f=!1,oc=!1,td=!1,fs=0;function aa(t){t!==Nr&&t.next===null&&(Nr===null?rc=Nr=t:Nr=Nr.next=t),oc=!0,$f||($f=!0,BM())}function Ho(t,n){if(!td&&oc){td=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Xt(42|t)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,S0(o,f))}else f=Ne,f=vt(o,o===sn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Yt(o,f)||(a=!0,S0(o,f));o=o.next}while(a);td=!1}}function FM(){v0()}function v0(){oc=$f=!1;var t=0;fs!==0&&jM()&&(t=fs);for(var n=E(),a=null,o=rc;o!==null;){var u=o.next,f=x0(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(Nr=a)):(a=o,(t!==0||(f&3)!==0)&&(oc=!0)),o=u}Rn!==0&&Rn!==5||Ho(t),fs!==0&&(fs=0)}function x0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Xt(f),R=1<<v,W=u[v];W===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ce(R,n)):W<=n&&(t.expiredLanes|=R),f&=~R}if(n=sn,a=Ne,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Te(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Yt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Te(o),In(a)){case 2:case 8:a=At;break;case 32:a=St;break;case 268435456:a=Vt;break;default:a=St}return o=M0.bind(null,t),a=be(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Te(o),t.callbackPriority=2,t.callbackNode=null,2}function M0(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var o=Ne;return o=vt(t,t===sn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(e0(t,o,n),x0(t,E()),t.callbackNode!=null&&t.callbackNode===a?M0.bind(null,t):null)}function S0(t,n){if(sc())return null;e0(t,n,!0)}function BM(){KM(function(){(Ye&6)!==0?be(Mt,FM):v0()})}function ed(){if(fs===0){var t=_r;t===0&&(t=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),fs=t}return fs}function y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ja(""+t)}function E0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zM(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=y0((u[an]||null).action),v=o.submitter;v&&(n=(n=v[an]||null)?y0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new xl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var W=v?E0(u,v):new FormData(u);Sf(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(R.preventDefault(),W=v?E0(u,v):new FormData(u),Sf(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var nd=0;nd<Fu.length;nd++){var id=Fu[nd],HM=id.toLowerCase(),GM=id[0].toUpperCase()+id.slice(1);Yi(HM,"on"+GM)}Yi(tm,"onAnimationEnd"),Yi(em,"onAnimationIteration"),Yi(nm,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(iM,"onTransitionRun"),Yi(aM,"onTransitionStart"),Yi(sM,"onTransitionCancel"),Yi(im,"onTransitionEnd"),ut("onMouseEnter",["mouseout","mouseover"]),ut("onMouseLeave",["mouseout","mouseover"]),ut("onPointerEnter",["pointerout","pointerover"]),ut("onPointerLeave",["pointerout","pointerover"]),P("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),P("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),P("onBeforeInput",["compositionend","keypress","textInput","paste"]),P("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function b0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],W=R.instance,lt=R.currentTarget;if(R=R.listener,W!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(bt){yl(bt)}u.currentTarget=null,f=W}else for(v=0;v<o.length;v++){if(R=o[v],W=R.instance,lt=R.currentTarget,R=R.listener,W!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(bt){yl(bt)}u.currentTarget=null,f=W}}}}function Ue(t,n){var a=n[An];a===void 0&&(a=n[An]=new Set);var o=t+"__bubble";a.has(o)||(T0(n,t,2,!1),a.add(o))}function ad(t,n,a){var o=0;n&&(o|=4),T0(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[lc]){t[lc]=!0,mt.forEach(function(a){a!=="selectionchange"&&(VM.has(a)||ad(a,!1,t),ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,ad("selectionchange",!1,n))}}function T0(t,n,a,o){switch(t_(n)){case 2:var u=gS;break;case 8:u=_S;break;default:u=Md}a=u.bind(null,n,a,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rd(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var W=v.tag;if((W===3||W===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=si(R),v===null)return;if(W=v.tag,W===5||W===6||W===26||W===27){o=f=v;continue t}R=R.parentNode}}o=o.return}Dp(function(){var lt=f,bt=ti(a),wt=[];t:{var pt=am.get(t);if(pt!==void 0){var xt=xl,ie=t;switch(t){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":xt=Px;break;case"focusin":ie="focus",xt=Cu;break;case"focusout":ie="blur",xt=Cu;break;case"beforeblur":case"afterblur":xt=Cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=Bx;break;case tm:case em:case nm:xt=Ax;break;case im:xt=Hx;break;case"scroll":case"scrollend":xt=Sx;break;case"wheel":xt=Vx;break;case"copy":case"cut":case"paste":xt=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=Pp;break;case"toggle":case"beforetoggle":xt=Xx}var fe=(n&4)!==0,en=!fe&&(t==="scroll"||t==="scrollend"),tt=fe?pt!==null?pt+"Capture":null:pt;fe=[];for(var j=lt,ot;j!==null;){var Ct=j;if(ot=Ct.stateNode,Ct=Ct.tag,Ct!==5&&Ct!==26&&Ct!==27||ot===null||tt===null||(Ct=lo(j,tt),Ct!=null&&fe.push(Vo(j,Ct,ot))),en)break;j=j.return}0<fe.length&&(pt=new xt(pt,ie,null,a,bt),wt.push({event:pt,listeners:fe}))}}if((n&7)===0){t:{if(pt=t==="mouseover"||t==="pointerover",xt=t==="mouseout"||t==="pointerout",pt&&a!==ri&&(ie=a.relatedTarget||a.fromElement)&&(si(ie)||ie[Fn]))break t;if((xt||pt)&&(pt=bt.window===bt?bt:(pt=bt.ownerDocument)?pt.defaultView||pt.parentWindow:window,xt?(ie=a.relatedTarget||a.toElement,xt=lt,ie=ie?si(ie):null,ie!==null&&(en=c(ie),fe=ie.tag,ie!==en||fe!==5&&fe!==27&&fe!==6)&&(ie=null)):(xt=null,ie=lt),xt!==ie)){if(fe=Lp,Ct="onMouseLeave",tt="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(fe=Pp,Ct="onPointerLeave",tt="onPointerEnter",j="pointer"),en=xt==null?pt:Wi(xt),ot=ie==null?pt:Wi(ie),pt=new fe(Ct,j+"leave",xt,a,bt),pt.target=en,pt.relatedTarget=ot,Ct=null,si(bt)===lt&&(fe=new fe(tt,j+"enter",ie,a,bt),fe.target=ot,fe.relatedTarget=en,Ct=fe),en=Ct,xt&&ie)e:{for(fe=kM,tt=xt,j=ie,ot=0,Ct=tt;Ct;Ct=fe(Ct))ot++;Ct=0;for(var le=j;le;le=fe(le))Ct++;for(;0<ot-Ct;)tt=fe(tt),ot--;for(;0<Ct-ot;)j=fe(j),Ct--;for(;ot--;){if(tt===j||j!==null&&tt===j.alternate){fe=tt;break e}tt=fe(tt),j=fe(j)}fe=null}else fe=null;xt!==null&&A0(wt,pt,xt,fe,!1),ie!==null&&en!==null&&A0(wt,en,ie,fe,!0)}}t:{if(pt=lt?Wi(lt):window,xt=pt.nodeName&&pt.nodeName.toLowerCase(),xt==="select"||xt==="input"&&pt.type==="file")var Ge=kp;else if(Gp(pt))if(Xp)Ge=tM;else{Ge=Jx;var se=Qx}else xt=pt.nodeName,!xt||xt.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?lt&&xa(lt.elementType)&&(Ge=kp):Ge=$x;if(Ge&&(Ge=Ge(t,lt))){Vp(wt,Ge,a,bt);break t}se&&se(t,pt,lt),t==="focusout"&&lt&&pt.type==="number"&&lt.memoizedProps.value!=null&&Je(pt,"number",pt.value)}switch(se=lt?Wi(lt):window,t){case"focusin":(Gp(se)||se.contentEditable==="true")&&(cr=se,Ou=lt,_o=null);break;case"focusout":_o=Ou=cr=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Jp(wt,a,bt);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":Jp(wt,a,bt)}var Me;if(Du)t:{switch(t){case"compositionstart":var Le="onCompositionStart";break t;case"compositionend":Le="onCompositionEnd";break t;case"compositionupdate":Le="onCompositionUpdate";break t}Le=void 0}else lr?zp(t,a)&&(Le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Ip&&a.locale!=="ko"&&(lr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&lr&&(Me=Up()):(Za=bt,Tu="value"in Za?Za.value:Za.textContent,lr=!0)),se=cc(lt,Le),0<se.length&&(Le=new Op(Le,t,null,a,bt),wt.push({event:Le,listeners:se}),Me?Le.data=Me:(Me=Hp(a),Me!==null&&(Le.data=Me)))),(Me=qx?Yx(t,a):jx(t,a))&&(Le=cc(lt,"onBeforeInput"),0<Le.length&&(se=new Op("onBeforeInput","beforeinput",null,a,bt),wt.push({event:se,listeners:Le}),se.data=Me)),zM(wt,t,lt,a,bt)}b0(wt,n)})}function Vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=lo(t,a),u!=null&&o.unshift(Vo(t,u,f)),u=lo(t,n),u!=null&&o.push(Vo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function kM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,W=R.alternate,lt=R.stateNode;if(R=R.tag,W!==null&&W===o)break;R!==5&&R!==26&&R!==27||lt===null||(W=lt,u?(lt=lo(a,f),lt!=null&&v.unshift(Vo(a,lt,W))):u||(lt=lo(a,f),lt!=null&&v.push(Vo(a,lt,W)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var XM=/\r\n?/g,WM=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(XM,`
`).replace(WM,"")}function C0(t,n){return n=R0(n),R0(t)===n}function tn(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Un(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Un(t,""+o);break;case"className":dt(t,"class",o);break;case"tabIndex":dt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(t,a,o);break;case"style":qi(t,o,f);break;case"data":if(n!=="object"){dt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ja(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&tn(t,n,"name",u.name,u,null),tn(t,n,"formEncType",u.formEncType,u,null),tn(t,n,"formMethod",u.formMethod,u,null),tn(t,n,"formTarget",u.formTarget,u,null)):(tn(t,n,"encType",u.encType,u,null),tn(t,n,"method",u.method,u,null),tn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ja(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Oe);break;case"onScroll":o!=null&&Ue("scroll",t);break;case"onScrollEnd":o!=null&&Ue("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ja(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Ue("beforetoggle",t),Ue("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":Y(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Y(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Y(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Y(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Y(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Y(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Y(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Y(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Y(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ya.get(a)||a,nt(t,a,o))}}function od(t,n,a,o,u,f){switch(a){case"style":qi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Un(t,o):(typeof o=="number"||typeof o=="bigint")&&Un(t,""+o);break;case"onScroll":o!=null&&Ue("scroll",t);break;case"onScrollEnd":o!=null&&Ue("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[an]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function Gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",t),Ue("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,f,v,a,null)}}u&&tn(t,n,"srcSet",a.srcSet,a,null),o&&tn(t,n,"src",a.src,a,null);return;case"input":Ue("invalid",t);var R=f=v=u=null,W=null,lt=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":v=bt;break;case"checked":W=bt;break;case"defaultChecked":lt=bt;break;case"value":f=bt;break;case"defaultValue":R=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:tn(t,n,o,bt,a,null)}}Fe(t,f,R,W,lt,v,u,!1);return;case"select":Ue("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:tn(t,n,u,R,a,null)}n=f,a=v,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":Ue("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:tn(t,n,v,R,a,null)}on(t,o,u,f);return;case"option":for(W in a)a.hasOwnProperty(W)&&(o=a[W],o!=null)&&(W==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":tn(t,n,W,o,a,null));return;case"dialog":Ue("beforetoggle",t),Ue("toggle",t),Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":Ue("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)Ue(Go[o],t);break;case"image":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"embed":case"source":case"link":Ue("error",t),Ue("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(o=a[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,lt,o,a,null)}return;default:if(xa(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&od(t,n,bt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&tn(t,n,R,o,a,null))}function qM(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,W=null,lt=null,bt=null;for(xt in a){var wt=a[xt];if(a.hasOwnProperty(xt)&&wt!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":W=wt;default:o.hasOwnProperty(xt)||tn(t,n,xt,null,o,wt)}}for(var pt in o){var xt=o[pt];if(wt=a[pt],o.hasOwnProperty(pt)&&(xt!=null||wt!=null))switch(pt){case"type":f=xt;break;case"name":u=xt;break;case"checked":lt=xt;break;case"defaultChecked":bt=xt;break;case"value":v=xt;break;case"defaultValue":R=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:xt!==wt&&tn(t,n,pt,xt,o,wt)}}re(t,v,R,W,lt,bt,f,u);return;case"select":xt=v=R=pt=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":xt=W;default:o.hasOwnProperty(f)||tn(t,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":pt=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==W&&tn(t,n,u,f,o,W)}n=R,a=v,o=xt,pt!=null?vn(t,!!a,pt,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":xt=pt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:tn(t,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":pt=u;break;case"defaultValue":xt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&tn(t,n,v,u,o,f)}we(t,pt,xt);return;case"option":for(var ie in a)pt=a[ie],a.hasOwnProperty(ie)&&pt!=null&&!o.hasOwnProperty(ie)&&(ie==="selected"?t.selected=!1:tn(t,n,ie,null,o,pt));for(W in o)pt=o[W],xt=a[W],o.hasOwnProperty(W)&&pt!==xt&&(pt!=null||xt!=null)&&(W==="selected"?t.selected=pt&&typeof pt!="function"&&typeof pt!="symbol":tn(t,n,W,pt,o,xt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)pt=a[fe],a.hasOwnProperty(fe)&&pt!=null&&!o.hasOwnProperty(fe)&&tn(t,n,fe,null,o,pt);for(lt in o)if(pt=o[lt],xt=a[lt],o.hasOwnProperty(lt)&&pt!==xt&&(pt!=null||xt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:tn(t,n,lt,pt,o,xt)}return;default:if(xa(n)){for(var en in a)pt=a[en],a.hasOwnProperty(en)&&pt!==void 0&&!o.hasOwnProperty(en)&&od(t,n,en,void 0,o,pt);for(bt in o)pt=o[bt],xt=a[bt],!o.hasOwnProperty(bt)||pt===xt||pt===void 0&&xt===void 0||od(t,n,bt,pt,o,xt);return}}for(var tt in a)pt=a[tt],a.hasOwnProperty(tt)&&pt!=null&&!o.hasOwnProperty(tt)&&tn(t,n,tt,null,o,pt);for(wt in o)pt=o[wt],xt=a[wt],!o.hasOwnProperty(wt)||pt===xt||pt==null&&xt==null||tn(t,n,wt,pt,o,xt)}function w0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&w0(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],lt=W.startTime;if(lt>R)break;var bt=W.transferSize,wt=W.initiatorType;bt&&w0(wt)&&(W=W.responseEnd,v+=bt*(W<R?1:(R-lt)/(W-lt)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function jM(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var N0=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,KM=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(QM)}:N0;function QM(t){setTimeout(function(){throw t})}function ds(t){return t==="head"}function O0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ir(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ko(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[vi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&ko(t.ownerDocument.body);a=u}while(a);Ir(n)}function P0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),Di(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function JM(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[vi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Bi(t.nextSibling),t===null)break}return null}function $M(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Bi(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Bi(t.nextSibling),t===null))return null;return t}function hd(t){return t.data==="$?"||t.data==="$~"}function pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var md=null;function F0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function B0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function z0(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Di(t)}var zi=new Map,H0=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pa=G.d;G.d={f:eS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function eS(){var t=Pa.f(),n=nc();return t||n}function nS(t){var n=Ui(t);n!==null&&n.tag===5&&n.type==="form"?ig(n):Pa.r(t)}var Lr=typeof document>"u"?null:document;function G0(t,n,a){var o=Lr;if(o&&typeof n=="string"&&n){var u=Nt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H0.has(u)||(H0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Gn(n,"link",t),Z(n),o.head.appendChild(n)))}}function iS(t){Pa.D(t),G0("dns-prefetch",t,null)}function aS(t,n){Pa.C(t,n),G0("preconnect",t,n)}function sS(t,n,a){Pa.L(t,n,a);var o=Lr;if(o&&t&&n){var u='link[rel="preload"][as="'+Nt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Nt(a.imageSizes)+'"]')):u+='[href="'+Nt(t)+'"]';var f=u;switch(n){case"style":f=Or(t);break;case"script":f=Pr(t)}zi.has(f)||(t=M({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),zi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Xo(f))||n==="script"&&o.querySelector(Wo(f))||(n=o.createElement("link"),Gn(n,"link",t),Z(n),o.head.appendChild(n)))}}function rS(t,n){Pa.m(t,n);var a=Lr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Nt(o)+'"][href="'+Nt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pr(t)}if(!zi.has(f)&&(t=M({rel:"modulepreload",href:t},n),zi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(f)))return}o=a.createElement("link"),Gn(o,"link",t),Z(o),a.head.appendChild(o)}}}function oS(t,n,a){Pa.S(t,n,a);var o=Lr;if(o&&t){var u=A(o).hoistableStyles,f=Or(t);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Xo(f)))R.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":n},a),(a=zi.get(f))&&gd(t,a);var W=v=o.createElement("link");Z(W),Gn(W,"link",t),W._p=new Promise(function(lt,bt){W.onload=lt,W.onerror=bt}),W.addEventListener("load",function(){R.loading|=1}),W.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function lS(t,n){Pa.X(t,n);var a=Lr;if(a&&t){var o=A(a).hoistableScripts,u=Pr(t),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(t=M({src:t,async:!0},n),(n=zi.get(u))&&_d(t,n),f=a.createElement("script"),Z(f),Gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function cS(t,n){Pa.M(t,n);var a=Lr;if(a&&t){var o=A(a).hoistableScripts,u=Pr(t),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(t=M({src:t,async:!0,type:"module"},n),(n=zi.get(u))&&_d(t,n),f=a.createElement("script"),Z(f),Gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function V0(t,n,a,o){var u=(u=rt.current)?fc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Or(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Or(a.href);var f=A(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Xo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),zi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zi.set(t,a),f||uS(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pr(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Or(t){return'href="'+Nt(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Gn(n,"link",a),Z(n),t.head.appendChild(n))}function Pr(t){return'[src="'+Nt(t)+'"]'}function Wo(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(o)return n.instance=o,Z(o),o;var u=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Z(o),Gn(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Or(a.href);var f=t.querySelector(Xo(u));if(f)return n.state.loading|=4,n.instance=f,Z(f),f;o=k0(a),(u=zi.get(u))&&gd(o,u),f=(t.ownerDocument||t).createElement("link"),Z(f);var v=f;return v._p=new Promise(function(R,W){v.onload=R,v.onerror=W}),Gn(f,"link",o),n.state.loading|=4,dc(f,a.precedence,t),n.instance=f;case"script":return f=Pr(a.src),(u=t.querySelector(Wo(f)))?(n.instance=u,Z(u),u):(o=a,(u=zi.get(f))&&(o=M({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Z(u),Gn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function W0(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[vi]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function q0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(o.href),f=n.querySelector(Xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Z(f);return}f=n.ownerDocument||n,o=k0(o),(u=zi.get(u))&&gd(o,u),f=f.createElement("link"),Z(f);var v=f;v._p=new Promise(function(R,W){v.onload=R,v.onerror=W}),Gn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function hS(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*YM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(pS,t),mc=null,pc.call(t))}function pS(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var qo={$$typeof:I,Provider:null,Consumer:null,_currentValue:_t,_currentValue2:_t,_threadCount:0};function mS(t,n,a,o,u,f,v,R,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function j0(t,n,a,o,u,f,v,R,W,lt,bt,wt){return t=new mS(t,n,a,v,W,lt,bt,wt,R),n=1,f===!0&&(n|=24),f=Mi(3,null,null,n),t.current=f,f.stateNode=t,n=Ku(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},tf(f),t}function Z0(t){return t?(t=dr,t):dr}function K0(t,n,a,o,u,f){u=Z0(u),o.context===null?o.context=u:o.pendingContext=u,o=es(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ns(t,o,n),a!==null&&(di(a,t,n),bo(a,t,n))}function Q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){Q0(t,n),(t=t.alternate)&&Q0(t,n)}function J0(t){if(t.tag===13||t.tag===31){var n=Ls(t,67108864);n!==null&&di(n,t,67108864),xd(t,67108864)}}function $0(t){if(t.tag===13||t.tag===31){var n=Ti();n=$n(n);var a=Ls(t,n);a!==null&&di(a,t,n),xd(t,n)}}var _c=!0;function gS(t,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=2,Md(t,n,a,o)}finally{G.p=f,O.T=u}}function _S(t,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=8,Md(t,n,a,o)}finally{G.p=f,O.T=u}}function Md(t,n,a,o){if(_c){var u=Sd(o);if(u===null)rd(t,n,o,vc,a),e_(t,o);else if(xS(u,t,n,a,o))o.stopPropagation();else if(e_(t,o),n&4&&-1<vS.indexOf(t)){for(;u!==null;){var f=Ui(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Pt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var W=1<<31-Xt(v);R.entanglements[1]|=W,v&=~W}aa(f),(Ye&6)===0&&(tc=E()+500,Ho(0))}}break;case 31:case 13:R=Ls(f,2),R!==null&&di(R,f,2),nc(),xd(f,2)}if(f=Sd(o),f===null&&rd(t,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else rd(t,n,o,null,a)}}function Sd(t){return t=ti(t),yd(t)}var vc=null;function yd(t){if(vc=null,t=si(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function t_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case Mt:return 2;case At:return 8;case St:case Jt:return 32;case Vt:return 268435456;default:return 32}default:return 32}}var Ed=!1,hs=null,ps=null,ms=null,Yo=new Map,jo=new Map,gs=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(t,n){switch(t){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Zo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ui(n),n!==null&&J0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xS(t,n,a,o,u){switch(n){case"focusin":return hs=Zo(hs,t,n,a,o,u),!0;case"dragenter":return ps=Zo(ps,t,n,a,o,u),!0;case"mouseover":return ms=Zo(ms,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Yo.set(f,Zo(Yo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,jo.set(f,Zo(jo.get(f)||null,t,n,a,o,u)),!0}return!1}function n_(t){var n=si(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,gi(t.priority,function(){$0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,gi(t.priority,function(){$0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ri=o,a.target.dispatchEvent(o),ri=null}else return n=Ui(a),n!==null&&J0(n),t.blockedOn=a,!1;n.shift()}return!0}function i_(t,n,a){xc(t)&&a.delete(n)}function MS(){Ed=!1,hs!==null&&xc(hs)&&(hs=null),ps!==null&&xc(ps)&&(ps=null),ms!==null&&xc(ms)&&(ms=null),Yo.forEach(i_),jo.forEach(i_)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MS)))}var Sc=null;function a_(t){Sc!==t&&(Sc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||a)===null)continue;break}var f=Ui(a);f!==null&&(t.splice(n,3),n-=3,Sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ir(t){function n(W){return Mc(W,t)}hs!==null&&Mc(hs,t),ps!==null&&Mc(ps,t),ms!==null&&Mc(ms,t),Yo.forEach(n),jo.forEach(n);for(var a=0;a<gs.length;a++){var o=gs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<gs.length&&(a=gs[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&gs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[an]||null;if(typeof f=="function")v||a_(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[an]||null)R=v.formAction;else if(yd(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),a_(a)}}}function s_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(t){this._internalRoot=t}yc.prototype.render=bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ti();K0(a,o,t,n,null,null)},yc.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;K0(t.current,2,null,t,null,null),nc(),n[Fn]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<gs.length&&n!==0&&n<gs[a].priority;a++);gs.splice(a,0,t),a===0&&n_(t)}};var r_=e.version;if(r_!=="19.2.4")throw Error(s(527,r_,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var SS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Dt=Ec.inject(SS),Et=Ec}catch{}}return Qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=hg,f=pg,v=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=j0(t,1,!1,null,null,a,o,null,u,f,v,s_),t[Fn]=n.current,sd(t),new bd(n)},Qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=hg,v=pg,R=mg,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=j0(t,1,!0,n,a??null,o,u,W,f,v,R,s_),n.context=Z0(null),a=n.current,o=Ti(),o=$n(o),u=es(o),u.callback=null,ns(a,u,o),a=o,n.current.lanes=a,_n(n,a),aa(n),t[Fn]=n.current,sd(t),new yc(n)},Qo.version="19.2.4",Qo}var g_;function US(){if(g_)return Rd.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=DS(),Rd.exports}var NS=US();function LS(r,e){r.src=e}const OS=r=>{var e,i,s,l="The Google Maps JavaScript API",c="google",d="importLibrary",p="__ib__",m=document,h=window,_=h[c]||(h[c]={}),M=_.maps||(_.maps={}),g=new Set,y=new URLSearchParams,b=()=>e||(e=new Promise(async(D,S)=>{await(i=m.createElement("script")),y.set("libraries",[...g]+"");for(s in r)y.set(s.replace(/[A-Z]/g,x=>"_"+x[0].toLowerCase()),r[s]);y.set("callback",c+".maps."+p),LS(i,"https://maps.googleapis.com/maps/api/js?"+y),M[p]=D,i.onerror=()=>e=S(Error(l+" could not load.")),i.nonce=m.querySelector("script[nonce]")?.nonce||"",m.head.append(i)}));M[d]?console.warn(l+" only loads once. Ignoring:",r):M[d]=(D,...S)=>g.add(D)&&b().then(()=>M[d](D,...S))},PS=r=>`The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(r)}) will be ignored.`,IS=r=>`The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(r)}) will be ignored.`,FS=()=>{},BS=()=>{};let __=!1;function zS(r){if(__){FS(PS(r));return}HS(r),__=!0}async function hu(r){if(!window?.google?.maps?.importLibrary)throw new Error("google.maps.importLibrary is not installed.");return await google.maps.importLibrary(r)}function HS(r){const e=!!window.google?.maps?.importLibrary;e&&BS(IS(r)),e||OS(r)}const pp="183",GS=0,v_=1,VS=2,au=1,kS=2,rl=3,ws=0,pi=1,Ga=2,ka=0,Jr=1,x_=2,M_=3,S_=4,XS=5,$s=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,xh=204,Mh=205,$S=206,ty=207,ey=208,ny=209,iy=210,ay=211,sy=212,ry=213,oy=214,Sh=0,yh=1,Eh=2,to=3,bh=4,Th=5,Ah=6,Rh=7,mp=0,ly=1,cy=2,da=0,Bv=1,zv=2,Hv=3,Gv=4,Vv=5,kv=6,Xv=7,Wv=300,ar=301,eo=302,Ud=303,Nd=304,Mu=306,Ch=1e3,Va=1001,wh=1002,kn=1003,uy=1004,bc=1005,Kn=1006,Ld=1007,er=1008,wi=1009,qv=1010,Yv=1011,cl=1012,gp=1013,ma=1014,ua=1015,Wa=1016,_p=1017,vp=1018,ul=1020,jv=35902,Zv=35899,Kv=1021,Qv=1022,ta=1023,qa=1026,nr=1027,Jv=1028,xp=1029,no=1030,Mp=1031,Sp=1033,su=33776,ru=33777,ou=33778,lu=33779,Dh=35840,Uh=35841,Nh=35842,Lh=35843,Oh=36196,Ph=37492,Ih=37496,Fh=37488,Bh=37489,zh=37490,Hh=37491,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,tp=37821,ep=36492,np=36494,ip=36495,ap=36283,sp=36284,rp=36285,op=36286,fy=3200,$v=0,dy=1,Rs="",Gi="srgb",io="srgb-linear",pu="linear",Qe="srgb",Fr=7680,y_=519,hy=512,py=513,my=514,yp=515,gy=516,_y=517,Ep=518,vy=519,E_=35044,b_="300 es",fa=2e3,fl=2001;function xy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function My(){const r=mu("canvas");return r.style.display="block",r}const T_={};function A_(...r){const e="THREE."+r.shift();console.log(e,...r)}function tx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ge(...r){r=tx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Xe(...r){r=tx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function gu(...r){const e=r.join(" ");e in T_||(T_[e]=!0,ge(...r))}function Sy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const yy={[Sh]:yh,[Eh]:Ah,[bh]:Rh,[to]:Th,[yh]:Sh,[Ah]:Eh,[Rh]:bh,[Th]:to};class so{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,lp=180/Math.PI;function hl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function Ie(r,e,i){return Math.max(e,Math.min(i,r))}function Ey(r,e){return(r%e+e)%e}function Pd(r,e,i){return(1-i)*r+i*e}function Jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,i=0){We.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ie(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ro{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],_=s[l+2],M=s[l+3],g=c[d+0],y=c[d+1],b=c[d+2],D=c[d+3];if(M!==D||m!==g||h!==y||_!==b){let S=m*g+h*y+_*b+M*D;S<0&&(g=-g,y=-y,b=-b,D=-D,S=-S);let x=1-p;if(S<.9995){const C=Math.acos(S),I=Math.sin(C);x=Math.sin(x*C)/I,p=Math.sin(p*C)/I,m=m*x+g*p,h=h*x+y*p,_=_*x+b*p,M=M*x+D*p}else{m=m*x+g*p,h=h*x+y*p,_=_*x+b*p,M=M*x+D*p;const C=1/Math.sqrt(m*m+h*h+_*_+M*M);m*=C,h*=C,_*=C,M*=C}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=M}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],M=c[d],g=c[d+1],y=c[d+2],b=c[d+3];return e[i]=p*b+_*M+m*y-h*g,e[i+1]=m*b+_*g+h*M-p*y,e[i+2]=h*b+_*y+p*g-m*M,e[i+3]=_*b-p*M-m*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),M=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*_*M+h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M-g*y*b;break;case"YXZ":this._x=g*_*M+h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M+g*y*b;break;case"ZXY":this._x=g*_*M-h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M-g*y*b;break;case"ZYX":this._x=g*_*M-h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M+g*y*b;break;case"YZX":this._x=g*_*M+h*y*b,this._y=h*y*M+g*_*b,this._z=h*_*b-g*y*M,this._w=h*_*M-g*y*b;break;case"XZY":this._x=g*_*M-h*y*b,this._y=h*y*M-g*_*b,this._z=h*_*b+g*y*M,this._w=h*_*M+g*y*b;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],M=i[10],g=s+p+M;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-h)*y,this._z=(d-l)*y}else if(s>p&&s>M){const y=2*Math.sqrt(1+s-p-M);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+h)/y}else if(p>M){const y=2*Math.sqrt(1+p-s-M);this._w=(c-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+M-s-p);this._w=(d-l)/y,this._x=(c+h)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-s*h,this._z=c*_+d*h+s*m-l*p,this._w=d*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(e=0,i=0,s=0){ft.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(R_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),_=2*(p*i-c*l),M=2*(c*s-d*i);return this.x=i+m*h+d*M-p*_,this.y=s+m*_+p*h-c*M,this.z=l+m*M+c*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ie(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new ft,R_=new ro;class Se{constructor(e,i,s,l,c,d,p,m,h){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],_=s[4],M=s[7],g=s[2],y=s[5],b=s[8],D=l[0],S=l[3],x=l[6],C=l[1],I=l[4],N=l[7],k=l[2],z=l[5],H=l[8];return c[0]=d*D+p*C+m*k,c[3]=d*S+p*I+m*z,c[6]=d*x+p*N+m*H,c[1]=h*D+_*C+M*k,c[4]=h*S+_*I+M*z,c[7]=h*x+_*N+M*H,c[2]=g*D+y*C+b*k,c[5]=g*S+y*I+b*z,c[8]=g*x+y*N+b*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-s*c*_+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],M=_*d-p*h,g=p*m-_*c,y=h*c-d*m,b=i*M+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=M*D,e[1]=(l*h-_*s)*D,e[2]=(p*s-l*d)*D,e[3]=g*D,e[4]=(_*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=y*D,e[7]=(s*m-h*i)*D,e[8]=(d*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Fd.makeScale(e,i)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fd=new Se,C_=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const r={enabled:!0,workingColorSpace:io,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Qe&&(l.r=Xa(l.r),l.g=Xa(l.g),l.b=Xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qe&&(l.r=$r(l.r),l.g=$r(l.g),l.b=$r(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Rs?pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[io]:{primaries:e,whitePoint:s,transfer:pu,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gi},outputColorSpaceConfig:{drawingBufferColorSpace:Gi}},[Gi]:{primaries:e,whitePoint:s,transfer:Qe,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gi}}}),r}const ze=by();function Xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class Ty{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Br===void 0&&(Br=mu("canvas")),Br.width=e.width,Br.height=e.height;const l=Br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Xa(i[s]/255)*255):i[s]=Xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ay=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Bd(l[d].image)):c.push(Bd(l[d]))}else c=Bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ty.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}let Ry=0;const zd=new ft;class ai extends so{constructor(e=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=Va,l=Va,c=Kn,d=er,p=ta,m=wi,h=ai.DEFAULT_ANISOTROPY,_=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=hl(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case Va:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case Va:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Wv;ai.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,i=0,s=0,l=1){mn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],_=m[4],M=m[8],g=m[1],y=m[5],b=m[9],D=m[2],S=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(M-D)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(M+D)<.1&&Math.abs(b+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,N=(y+1)/2,k=(x+1)/2,z=(_+g)/4,H=(M+D)/4,T=(b+S)/4;return I>N&&I>k?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=z/s,c=H/s):N>k?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=z/l,c=T/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=H/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((S-b)*(S-b)+(M-D)*(M-D)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(S-b)/C,this.y=(M-D)/C,this.z=(g-_)/C,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this.w=Ie(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this.w=Ie(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends so{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new mn(0,0,e,i),this.scissorTest=!1,this.viewport=new mn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new ai(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends Cy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ex extends ai{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wy extends ai{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e,i,s,l,c,d,p,m,h,_,M,g,y,b,D,S){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,_,M,g,y,b,D,S)}set(e,i,s,l,c,d,p,m,h,_,M,g,y,b,D,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=_,x[10]=M,x[14]=g,x[3]=y,x[7]=b,x[11]=D,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/zr.setFromMatrixColumn(e,0).length(),c=1/zr.setFromMatrixColumn(e,1).length(),d=1/zr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const g=d*_,y=d*M,b=p*_,D=p*M;i[0]=m*_,i[4]=-m*M,i[8]=h,i[1]=y+b*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=b+y*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*_,y=m*M,b=h*_,D=h*M;i[0]=g+D*p,i[4]=b*p-y,i[8]=d*h,i[1]=d*M,i[5]=d*_,i[9]=-p,i[2]=y*p-b,i[6]=D+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*_,y=m*M,b=h*_,D=h*M;i[0]=g-D*p,i[4]=-d*M,i[8]=b+y*p,i[1]=y+b*p,i[5]=d*_,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*_,y=d*M,b=p*_,D=p*M;i[0]=m*_,i[4]=b*h-y,i[8]=g*h+D,i[1]=m*M,i[5]=D*h+g,i[9]=y*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,y=d*h,b=p*m,D=p*h;i[0]=m*_,i[4]=D-g*M,i[8]=b*M+y,i[1]=M,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=y*M+b,i[10]=g-D*M}else if(e.order==="XZY"){const g=d*m,y=d*h,b=p*m,D=p*h;i[0]=m*_,i[4]=-M,i[8]=h*_,i[1]=g*M+D,i[5]=d*_,i[9]=y*M-b,i[2]=b*M-y,i[6]=p*_,i[10]=D*M+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,i,s){const l=this.elements;return Ai.subVectors(e,i),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),vs.crossVectors(s,Ai),vs.lengthSq()===0&&(Math.abs(s.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),vs.crossVectors(s,Ai)),vs.normalize(),Tc.crossVectors(Ai,vs),l[0]=vs.x,l[4]=Tc.x,l[8]=Ai.x,l[1]=vs.y,l[5]=Tc.y,l[9]=Ai.y,l[2]=vs.z,l[6]=Tc.z,l[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],_=s[1],M=s[5],g=s[9],y=s[13],b=s[2],D=s[6],S=s[10],x=s[14],C=s[3],I=s[7],N=s[11],k=s[15],z=l[0],H=l[4],T=l[8],U=l[12],at=l[1],X=l[5],$=l[9],it=l[13],ct=l[2],et=l[6],O=l[10],G=l[14],_t=l[3],yt=l[7],Ot=l[11],F=l[15];return c[0]=d*z+p*at+m*ct+h*_t,c[4]=d*H+p*X+m*et+h*yt,c[8]=d*T+p*$+m*O+h*Ot,c[12]=d*U+p*it+m*G+h*F,c[1]=_*z+M*at+g*ct+y*_t,c[5]=_*H+M*X+g*et+y*yt,c[9]=_*T+M*$+g*O+y*Ot,c[13]=_*U+M*it+g*G+y*F,c[2]=b*z+D*at+S*ct+x*_t,c[6]=b*H+D*X+S*et+x*yt,c[10]=b*T+D*$+S*O+x*Ot,c[14]=b*U+D*it+S*G+x*F,c[3]=C*z+I*at+N*ct+k*_t,c[7]=C*H+I*X+N*et+k*yt,c[11]=C*T+I*$+N*O+k*Ot,c[15]=C*U+I*it+N*G+k*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],_=e[2],M=e[6],g=e[10],y=e[14],b=e[3],D=e[7],S=e[11],x=e[15],C=m*y-h*g,I=p*y-h*M,N=p*g-m*M,k=d*y-h*_,z=d*g-m*_,H=d*M-p*_;return i*(D*C-S*I+x*N)-s*(b*C-S*k+x*z)+l*(b*I-D*k+x*H)-c*(b*N-D*z+S*H)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],M=e[9],g=e[10],y=e[11],b=e[12],D=e[13],S=e[14],x=e[15],C=i*p-s*d,I=i*m-l*d,N=i*h-c*d,k=s*m-l*p,z=s*h-c*p,H=l*h-c*m,T=_*D-M*b,U=_*S-g*b,at=_*x-y*b,X=M*S-g*D,$=M*x-y*D,it=g*x-y*S,ct=C*it-I*$+N*X+k*at-z*U+H*T;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const et=1/ct;return e[0]=(p*it-m*$+h*X)*et,e[1]=(l*$-s*it-c*X)*et,e[2]=(D*H-S*z+x*k)*et,e[3]=(g*z-M*H-y*k)*et,e[4]=(m*at-d*it-h*U)*et,e[5]=(i*it-l*at+c*U)*et,e[6]=(S*N-b*H-x*I)*et,e[7]=(_*H-g*N+y*I)*et,e[8]=(d*$-p*at+h*T)*et,e[9]=(s*at-i*$-c*T)*et,e[10]=(b*z-D*N+x*C)*et,e[11]=(M*N-_*z-y*C)*et,e[12]=(p*U-d*X-m*T)*et,e[13]=(i*X-s*U+l*T)*et,e[14]=(D*I-b*k-S*C)*et,e[15]=(_*k-M*I+g*C)*et,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,M=p+p,g=c*h,y=c*_,b=c*M,D=d*_,S=d*M,x=p*M,C=m*h,I=m*_,N=m*M,k=s.x,z=s.y,H=s.z;return l[0]=(1-(D+x))*k,l[1]=(y+N)*k,l[2]=(b-I)*k,l[3]=0,l[4]=(y-N)*z,l[5]=(1-(g+x))*z,l[6]=(S+C)*z,l[7]=0,l[8]=(b+I)*H,l[9]=(S-C)*H,l[10]=(1-(g+D))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=zr.set(l[0],l[1],l[2]).length();const p=zr.set(l[4],l[5],l[6]).length(),m=zr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ki.copy(this);const h=1/d,_=1/p,M=1/m;return Ki.elements[0]*=h,Ki.elements[1]*=h,Ki.elements[2]*=h,Ki.elements[4]*=_,Ki.elements[5]*=_,Ki.elements[6]*=_,Ki.elements[8]*=M,Ki.elements[9]*=M,Ki.elements[10]*=M,i.setFromRotationMatrix(Ki),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=fa,m=!1){const h=this.elements,_=2*c/(i-e),M=2*c/(s-l),g=(i+e)/(i-e),y=(s+l)/(s-l);let b,D;if(m)b=c/(d-c),D=d*c/(d-c);else if(p===fa)b=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===fl)b=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=M,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=fa,m=!1){const h=this.elements,_=2/(i-e),M=2/(s-l),g=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,D;if(m)b=1/(d-c),D=d/(d-c);else if(p===fa)b=-2/(d-c),D=-(d+c)/(d-c);else if(p===fl)b=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=M,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=b,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const zr=new ft,Ki=new gn,Dy=new ft(0,0,0),Uy=new ft(1,1,1),vs=new ft,Tc=new ft,Ai=new ft,D_=new gn,U_=new ro;class ga{constructor(e=0,i=0,s=0,l=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],M=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ie(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ie(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const N_=new ft,Hr=new ro,Ia=new gn,Ac=new ft,$o=new ft,Ly=new ft,Oy=new ro,L_=new ft(1,0,0),O_=new ft(0,1,0),P_=new ft(0,0,1),I_={type:"added"},Py={type:"removed"},Gr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Qn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new ft,i=new ga,s=new ro,l=new ft(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new Se}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Hr.setFromAxisAngle(e,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,i){return Hr.setFromAxisAngle(e,i),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(L_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(P_,e)}translateOnAxis(e,i){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(L_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(P_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt($o,Ac,this.up):Ia.lookAt(Ac,$o,this.up),this.quaternion.setFromRotationMatrix(Ia),l&&(Ia.extractRotation(l.matrixWorld),Hr.setFromRotationMatrix(Ia),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I_),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Py),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I_),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const M=m[h];c(e.shapes,M)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),_=d(e.images),M=d(e.shapes),g=d(e.skeletons),y=d(e.animations),b=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),M.length>0&&(s.shapes=M),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new ft(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qr extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const S=i.getJointPose(D,s),x=this._getHandJoint(h,D);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=h.joints["index-finger-tip"],M=h.joints["thumb-tip"],g=_.position.distanceTo(M.position),y=.02,b=.005;h.inputState.pinching&&g>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Vd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class He{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=ze.workingColorSpace){if(e=Ey(e,1),i=Ie(i,0,1),s=Ie(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Vd(d,c,e+1/3),this.g=Vd(d,c,e),this.b=Vd(d,c,e-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(e,i=Gi){function s(c){c!==void 0&&parseFloat(c)<1&&ge("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ge("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Gi){const s=ix[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gi){return ze.workingToColorSpace(jn.copy(this),e),Math.round(Ie(jn.r*255,0,255))*65536+Math.round(Ie(jn.g*255,0,255))*256+Math.round(Ie(jn.b*255,0,255))}getHexString(e=Gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.workingToColorSpace(jn.copy(this),i);const s=jn.r,l=jn.g,c=jn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const M=d-p;switch(h=_<=.5?M/(d+p):M/(2-d-p),d){case s:m=(l-c)/M+(l<c?6:0);break;case l:m=(c-s)/M+2;break;case c:m=(s-l)/M+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=ze.workingColorSpace){return ze.workingToColorSpace(jn.copy(this),i),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Gi){ze.workingToColorSpace(jn.copy(this),e);const i=jn.r,s=jn.g,l=jn.b;return e!==Gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+i,xs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(xs),e.getHSL(Rc);const s=Pd(xs.h,Rc.h,i),l=Pd(xs.s,Rc.s,i),c=Pd(xs.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new He;He.NAMES=ix;class Tp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=i,this.far=s}clone(){return new Tp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fy extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ga,this.environmentIntensity=1,this.environmentRotation=new ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Qi=new ft,Fa=new ft,kd=new ft,Ba=new ft,Vr=new ft,kr=new ft,F_=new ft,Xd=new ft,Wd=new ft,qd=new ft,Yd=new mn,jd=new mn,Zd=new mn;class $i{constructor(e=new ft,i=new ft,s=new ft){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Qi.subVectors(e,i),l.cross(Qi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Qi.subVectors(l,i),Fa.subVectors(s,i),kd.subVectors(e,i);const d=Qi.dot(Qi),p=Qi.dot(Fa),m=Qi.dot(kd),h=Fa.dot(Fa),_=Fa.dot(kd),M=d*h-p*p;if(M===0)return c.set(0,0,0),null;const g=1/M,y=(h*m-p*_)*g,b=(d*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,Ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ba.x),m.addScaledVector(d,Ba.y),m.addScaledVector(p,Ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Yd.setScalar(0),jd.setScalar(0),Zd.setScalar(0),Yd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),Zd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Yd,c.x),d.addScaledVector(jd,c.y),d.addScaledVector(Zd,c.z),d}static isFrontFacing(e,i,s,l){return Qi.subVectors(s,i),Fa.subVectors(e,i),Qi.cross(Fa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),Qi.cross(Fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return $i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return $i.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Vr.subVectors(l,s),kr.subVectors(c,s),Xd.subVectors(e,s);const m=Vr.dot(Xd),h=kr.dot(Xd);if(m<=0&&h<=0)return i.copy(s);Wd.subVectors(e,l);const _=Vr.dot(Wd),M=kr.dot(Wd);if(_>=0&&M<=_)return i.copy(l);const g=m*M-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Vr,d);qd.subVectors(e,c);const y=Vr.dot(qd),b=kr.dot(qd);if(b>=0&&y<=b)return i.copy(c);const D=y*h-m*b;if(D<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(kr,p);const S=_*b-y*M;if(S<=0&&M-_>=0&&y-b>=0)return F_.subVectors(c,l),p=(M-_)/(M-_+(y-b)),i.copy(l).addScaledVector(F_,p);const x=1/(S+D+g);return d=D*x,p=g*x,i.copy(s).addScaledVector(Vr,d).addScaledVector(kr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pl{constructor(e=new ft(1/0,1/0,1/0),i=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ji):Ji.fromBufferAttribute(c,d),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),wc.subVectors(this.max,tl),Xr.subVectors(e.a,tl),Wr.subVectors(e.b,tl),qr.subVectors(e.c,tl),Ms.subVectors(Wr,Xr),Ss.subVectors(qr,Wr),qs.subVectors(Xr,qr);let i=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-qs.z,qs.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,qs.z,0,-qs.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-qs.y,qs.x,0];return!Kd(i,Xr,Wr,qr,wc)||(i=[1,0,0,0,1,0,0,0,1],!Kd(i,Xr,Wr,qr,wc))?!1:(Dc.crossVectors(Ms,Ss),i=[Dc.x,Dc.y,Dc.z],Kd(i,Xr,Wr,qr,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],Ji=new ft,Cc=new pl,Xr=new ft,Wr=new ft,qr=new ft,Ms=new ft,Ss=new ft,qs=new ft,tl=new ft,wc=new ft,Dc=new ft,Ys=new ft;function Kd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ys.fromArray(r,c);const p=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),m=e.dot(Ys),h=i.dot(Ys),_=s.dot(Ys);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const Tn=new ft,Uc=new We;let By=0;class pa{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:By++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=E_,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=hi(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),s=hi(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),s=hi(s,this.array),l=hi(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),s=hi(s,this.array),l=hi(l,this.array),c=hi(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}}class ax extends pa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class sx extends pa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class On extends pa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const zy=new pl,el=new ft,Qd=new ft;class Ap{constructor(e=new ft,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):zy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Qd)),this.expandByPoint(el.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hy=0;const Hi=new gn,Jd=new Qn,Yr=new ft,Ri=new pl,nl=new pl,Ln=new ft;class ki extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?sx:ax)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,i,s){return Hi.makeTranslation(e,i,s),this.applyMatrix4(Hi),this}scale(e,i,s){return Hi.makeScale(e,i,s),this.applyMatrix4(Hi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new On(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(e){const s=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];nl.setFromBufferAttribute(p),this.morphTargetsRelative?(Ln.addVectors(Ri.min,nl.min),Ri.expandByPoint(Ln),Ln.addVectors(Ri.max,nl.max),Ri.expandByPoint(Ln)):(Ri.expandByPoint(nl.min),Ri.expandByPoint(nl.max))}Ri.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Ln.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Ln.fromBufferAttribute(p,h),m&&(Yr.fromBufferAttribute(e,h),Ln.add(Yr)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pa(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new ft,m[T]=new ft;const h=new ft,_=new ft,M=new ft,g=new We,y=new We,b=new We,D=new ft,S=new ft;function x(T,U,at){h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,U),M.fromBufferAttribute(s,at),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,U),b.fromBufferAttribute(c,at),_.sub(h),M.sub(h),y.sub(g),b.sub(g);const X=1/(y.x*b.y-b.x*y.y);isFinite(X)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(M,-y.y).multiplyScalar(X),S.copy(M).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(X),p[T].add(D),p[U].add(D),p[at].add(D),m[T].add(S),m[U].add(S),m[at].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,U=C.length;T<U;++T){const at=C[T],X=at.start,$=at.count;for(let it=X,ct=X+$;it<ct;it+=3)x(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const I=new ft,N=new ft,k=new ft,z=new ft;function H(T){k.fromBufferAttribute(l,T),z.copy(k);const U=p[T];I.copy(U),I.sub(k.multiplyScalar(k.dot(U))).normalize(),N.crossVectors(z,U);const X=N.dot(m[T])<0?-1:1;d.setXYZW(T,I.x,I.y,I.z,X)}for(let T=0,U=C.length;T<U;++T){const at=C[T],X=at.start,$=at.count;for(let it=X,ct=X+$;it<ct;it+=3)H(e.getX(it+0)),H(e.getX(it+1)),H(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new ft,c=new ft,d=new ft,p=new ft,m=new ft,h=new ft,_=new ft,M=new ft;if(e)for(let g=0,y=e.count;g<y;g+=3){const b=e.getX(g+0),D=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),_.subVectors(d,c),M.subVectors(l,c),_.cross(M),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),p.add(_),m.add(_),h.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),M.subVectors(l,c),_.cross(M),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Ln.fromBufferAttribute(e,i),Ln.normalize(),e.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,M=p.normalized,g=new h.constructor(m.length*_);let y=0,b=0;for(let D=0,S=m.length;D<S;D++){p.isInterleavedBufferAttribute?y=m[D]*p.data.stride+p.offset:y=m[D]*_;for(let x=0;x<_;x++)g[b++]=h[y++]}return new pa(g,_,M)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ki,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,M=h.length;_<M;_++){const g=h[_],y=e(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let M=0,g=h.length;M<g;M++){const y=h[M];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],M=c[h];for(let g=0,y=M.length;g<y;g++)_.push(M[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const M=d[h];this.addGroup(M.start,M.count,M.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Gy=0;class ml extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=Jr,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Mh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ge(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(s.blending=this.blending),this.side!==ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ha=new ft,$d=new ft,Nc=new ft,ys=new ft,th=new ft,Lc=new ft,eh=new ft;class Vy{constructor(e=new ft,i=new ft(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,i),Ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){$d.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),ys.copy(this.origin).sub($d);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Nc),p=ys.dot(this.direction),m=-ys.dot(Nc),h=ys.lengthSq(),_=Math.abs(1-d*d);let M,g,y,b;if(_>0)if(M=d*m-p,g=d*p-m,b=c*_,M>=0)if(g>=-b)if(g<=b){const D=1/_;M*=D,g*=D,y=M*(M+d*g+2*p)+g*(d*M+g+2*m)+h}else g=c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;else g=-c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;else g<=-b?(M=Math.max(0,-(-d*c+p)),g=M>0?-c:Math.min(Math.max(-c,-m),c),y=-M*M+g*(g+2*m)+h):g<=b?(M=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(M=Math.max(0,-(d*c+p)),g=M>0?c:Math.min(Math.max(-c,-m),c),y=-M*M+g*(g+2*m)+h);else g=d>0?-c:c,M=Math.max(0,-(d*g+p)),y=-M*M+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,M),l&&l.copy($d).addScaledVector(Nc,g),y}intersectSphere(e,i){Ha.subVectors(e.center,this.origin);const s=Ha.dot(this.direction),l=Ha.dot(Ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),M>=0?(p=(e.min.z-g.z)*M,m=(e.max.z-g.z)*M):(p=(e.max.z-g.z)*M,m=(e.min.z-g.z)*M),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,i,s,l,c){th.subVectors(i,e),Lc.subVectors(s,e),eh.crossVectors(th,Lc);let d=this.direction.dot(eh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ys.subVectors(this.origin,e);const m=p*this.direction.dot(Lc.crossVectors(ys,Lc));if(m<0)return null;const h=p*this.direction.dot(th.cross(ys));if(h<0||m+h>d)return null;const _=-p*ys.dot(eh);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rx extends ml{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const B_=new gn,js=new Vy,Oc=new Ap,z_=new ft,Pc=new ft,Ic=new ft,Fc=new ft,nh=new ft,Bc=new ft,H_=new ft,zc=new ft;class je extends Qn{constructor(e=new ki,i=new rx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],M=c[m];_!==0&&(nh.fromBufferAttribute(M,e),d?Bc.addScaledVector(nh,_):Bc.addScaledVector(nh.sub(i),_))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),js.copy(e.ray).recast(e.near),!(Oc.containsPoint(js.origin)===!1&&(js.intersectSphere(Oc,z_)===null||js.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(B_.copy(c).invert(),js.copy(e.ray).applyMatrix4(B_),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,js)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,M=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,D=g.length;b<D;b++){const S=g[b],x=d[S.materialIndex],C=Math.max(S.start,y.start),I=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let N=C,k=I;N<k;N+=3){const z=p.getX(N),H=p.getX(N+1),T=p.getX(N+2);l=Hc(this,x,e,s,h,_,M,z,H,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(p.count,y.start+y.count);for(let S=b,x=D;S<x;S+=3){const C=p.getX(S),I=p.getX(S+1),N=p.getX(S+2);l=Hc(this,d,e,s,h,_,M,C,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,D=g.length;b<D;b++){const S=g[b],x=d[S.materialIndex],C=Math.max(S.start,y.start),I=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let N=C,k=I;N<k;N+=3){const z=N,H=N+1,T=N+2;l=Hc(this,x,e,s,h,_,M,z,H,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let S=b,x=D;S<x;S+=3){const C=S,I=S+1,N=S+2;l=Hc(this,d,e,s,h,_,M,C,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function ky(r,e,i,s,l,c,d,p){let m;if(e.side===pi?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===ws,p),m===null)return null;zc.copy(p),zc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(zc);return h<i.near||h>i.far?null:{distance:h,point:zc.clone(),object:r}}function Hc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Pc),r.getVertexPosition(m,Ic),r.getVertexPosition(h,Fc);const _=ky(r,e,i,s,Pc,Ic,Fc,H_);if(_){const M=new ft;$i.getBarycoord(H_,Pc,Ic,Fc,M),l&&(_.uv=$i.getInterpolatedAttribute(l,p,m,h,M,new We)),c&&(_.uv1=$i.getInterpolatedAttribute(c,p,m,h,M,new We)),d&&(_.normal=$i.getInterpolatedAttribute(d,p,m,h,M,new ft),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ft,materialIndex:0};$i.getNormal(Pc,Ic,Fc,g.normal),_.face=g,_.barycoord=M}return _}class Xy extends ai{constructor(e=null,i=1,s=1,l,c,d,p,m,h=kn,_=kn,M,g){super(null,d,p,m,h,_,l,c,M,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new ft,Wy=new ft,qy=new Se;class Js{constructor(e=new ft(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=ih.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(ih),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new Ap,Yy=new We(.5,.5),Gc=new ft;class Rp{constructor(e=new Js,i=new Js,s=new Js,l=new Js,c=new Js,d=new Js){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=fa,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],M=c[5],g=c[6],y=c[7],b=c[8],D=c[9],S=c[10],x=c[11],C=c[12],I=c[13],N=c[14],k=c[15];if(l[0].setComponents(h-d,y-_,x-b,k-C).normalize(),l[1].setComponents(h+d,y+_,x+b,k+C).normalize(),l[2].setComponents(h+p,y+M,x+D,k+I).normalize(),l[3].setComponents(h-p,y-M,x-D,k-I).normalize(),s)l[4].setComponents(m,g,S,N).normalize(),l[5].setComponents(h-m,y-g,x-S,k-N).normalize();else if(l[4].setComponents(h-m,y-g,x-S,k-N).normalize(),i===fa)l[5].setComponents(h+m,y+g,x+S,k+N).normalize();else if(i===fl)l[5].setComponents(m,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);const i=Yy.distanceTo(e.center);return Zs.radius=.7071067811865476+i,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ox extends ai{constructor(e=[],i=ar,s,l,c,d,p,m,h,_){super(e,i,s,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dl extends ai{constructor(e,i,s=ma,l,c,d,p=kn,m=kn,h,_=qa,M=1){if(_!==qa&&_!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:M};super(g,l,c,d,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jy extends dl{constructor(e,i=ma,s=ar,l,c,d=kn,p=kn,m,h=qa){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,i,s,l,c,d,p,m,h),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lx extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ca extends ki{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],M=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new On(h,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(M,2));function b(D,S,x,C,I,N,k,z,H,T,U){const at=N/H,X=k/T,$=N/2,it=k/2,ct=z/2,et=H+1,O=T+1;let G=0,_t=0;const yt=new ft;for(let Ot=0;Ot<O;Ot++){const F=Ot*X-it;for(let Q=0;Q<et;Q++){const Tt=Q*at-$;yt[D]=Tt*C,yt[S]=F*I,yt[x]=ct,h.push(yt.x,yt.y,yt.z),yt[D]=0,yt[S]=0,yt[x]=z>0?1:-1,_.push(yt.x,yt.y,yt.z),M.push(Q/H),M.push(1-Ot/T),G+=1}}for(let Ot=0;Ot<T;Ot++)for(let F=0;F<H;F++){const Q=g+F+et*Ot,Tt=g+F+et*(Ot+1),Bt=g+(F+1)+et*(Ot+1),jt=g+(F+1)+et*Ot;m.push(Q,Tt,jt),m.push(Tt,Bt,jt),_t+=6}p.addGroup(y,_t,U),y+=_t,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oa extends ki{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const _=[],M=[],g=[],y=[];let b=0;const D=[],S=s/2;let x=0;C(),d===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(_),this.setAttribute("position",new On(M,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(y,2));function C(){const N=new ft,k=new ft;let z=0;const H=(i-e)/s;for(let T=0;T<=c;T++){const U=[],at=T/c,X=at*(i-e)+e;for(let $=0;$<=l;$++){const it=$/l,ct=it*m+p,et=Math.sin(ct),O=Math.cos(ct);k.x=X*et,k.y=-at*s+S,k.z=X*O,M.push(k.x,k.y,k.z),N.set(et,H,O).normalize(),g.push(N.x,N.y,N.z),y.push(it,1-at),U.push(b++)}D.push(U)}for(let T=0;T<l;T++)for(let U=0;U<c;U++){const at=D[U][T],X=D[U+1][T],$=D[U+1][T+1],it=D[U][T+1];(e>0||U!==0)&&(_.push(at,X,it),z+=3),(i>0||U!==c-1)&&(_.push(X,$,it),z+=3)}h.addGroup(x,z,0),x+=z}function I(N){const k=b,z=new We,H=new ft;let T=0;const U=N===!0?e:i,at=N===!0?1:-1;for(let $=1;$<=l;$++)M.push(0,S*at,0),g.push(0,at,0),y.push(.5,.5),b++;const X=b;for(let $=0;$<=l;$++){const ct=$/l*m+p,et=Math.cos(ct),O=Math.sin(ct);H.x=U*O,H.y=S*at,H.z=U*et,M.push(H.x,H.y,H.z),g.push(0,at,0),z.x=et*.5+.5,z.y=O*.5*at+.5,y.push(z.x,z.y),b++}for(let $=0;$<l;$++){const it=k+$,ct=X+$;N===!0?_.push(ct,ct+1,it):_.push(ct+1,ct,it),T+=3}h.addGroup(x,T,N===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends oa{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,e,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(e){return new ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends ki{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,M=e/p,g=i/m,y=[],b=[],D=[],S=[];for(let x=0;x<_;x++){const C=x*g-d;for(let I=0;I<h;I++){const N=I*M-c;b.push(N,-C,0),D.push(0,0,1),S.push(I/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<p;C++){const I=C+h*x,N=C+h*(x+1),k=C+1+h*(x+1),z=C+1+h*x;y.push(I,N,z),y.push(N,k,z)}this.setIndex(y),this.setAttribute("position",new On(b,3)),this.setAttribute("normal",new On(D,3)),this.setAttribute("uv",new On(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class _u extends ki{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const _=[],M=new ft,g=new ft,y=[],b=[],D=[],S=[];for(let x=0;x<=s;x++){const C=[],I=x/s;let N=0;x===0&&d===0?N=.5/i:x===s&&m===Math.PI&&(N=-.5/i);for(let k=0;k<=i;k++){const z=k/i;M.x=-e*Math.cos(l+z*c)*Math.sin(d+I*p),M.y=e*Math.cos(d+I*p),M.z=e*Math.sin(l+z*c)*Math.sin(d+I*p),b.push(M.x,M.y,M.z),g.copy(M).normalize(),D.push(g.x,g.y,g.z),S.push(z+N,1-I),C.push(h++)}_.push(C)}for(let x=0;x<s;x++)for(let C=0;C<i;C++){const I=_[x][C+1],N=_[x][C],k=_[x+1][C],z=_[x+1][C+1];(x!==0||d>0)&&y.push(I,N,z),(x!==s-1||m<Math.PI)&&y.push(N,k,z)}this.setIndex(y),this.setAttribute("position",new On(b,3)),this.setAttribute("normal",new On(D,3)),this.setAttribute("uv",new On(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vu extends ki{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],_=[],M=[],g=new ft,y=new ft,b=new ft;for(let D=0;D<=s;D++){const S=d+D/s*p;for(let x=0;x<=l;x++){const C=x/l*c;y.x=(e+i*Math.cos(S))*Math.cos(C),y.y=(e+i*Math.cos(S))*Math.sin(C),y.z=i*Math.sin(S),h.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),b.subVectors(y,g).normalize(),_.push(b.x,b.y,b.z),M.push(x/l),M.push(D/s)}}for(let D=1;D<=s;D++)for(let S=1;S<=l;S++){const x=(l+1)*D+S-1,C=(l+1)*(D-1)+S-1,I=(l+1)*(D-1)+S,N=(l+1)*D+S;m.push(x,C,N),m.push(C,I,N)}this.setIndex(m),this.setAttribute("position",new On(h,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ao(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ii(r){const e={};for(let i=0;i<r.length;i++){const s=ao(r[i]);for(const l in s)e[l]=s[l]}return e}function Zy(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function cx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Ky={clone:ao,merge:ii};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _a extends ml{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class $y extends _a{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vn extends ml{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.combine=mp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tE extends ml{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eE extends ml{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ux extends Qn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ah=new gn,G_=new ft,V_=new ft;class nE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(e.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vc=new ft,kc=new ro,sa=new ft;class fx extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,kc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,sa.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Vc,kc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new ft,k_=new We,X_=new We;class Vi extends fx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,i){return this.getViewBounds(e,k_,X_),i.subVectors(X_,k_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Od*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Cp extends fx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iE extends nE{constructor(){super(new Cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aE extends ux{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qn.DEFAULT_UP),this.updateMatrix(),this.target=new Qn,this.shadow=new iE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class sE extends ux{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const jr=-90,Zr=1;class rE extends Qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Vi(jr,Zr,e,i);l.layers=this.layers,this.add(l);const c=new Vi(jr,Zr,e,i);c.layers=this.layers,this.add(c);const d=new Vi(jr,Zr,e,i);d.layers=this.layers,this.add(d);const p=new Vi(jr,Zr,e,i);p.layers=this.layers,this.add(p);const m=new Vi(jr,Zr,e,i);m.layers=this.layers,this.add(m);const h=new Vi(jr,Zr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===fa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,M=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(M,g,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class oE extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function W_(r,e,i,s){const l=lE(s);switch(i){case Kv:return r*e;case Jv:return r*e/l.components*l.byteLength;case xp:return r*e/l.components*l.byteLength;case no:return r*e*2/l.components*l.byteLength;case Mp:return r*e*2/l.components*l.byteLength;case Qv:return r*e*3/l.components*l.byteLength;case ta:return r*e*4/l.components*l.byteLength;case Sp:return r*e*4/l.components*l.byteLength;case su:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Lh:return Math.max(r,16)*Math.max(e,8)/4;case Dh:case Nh:return Math.max(r,8)*Math.max(e,8)/2;case Oh:case Ph:case Fh:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ih:case zh:case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ep:case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ap:case sp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rp:case op:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(r){switch(r){case wi:case qv:return{byteLength:1,components:1};case cl:case Yv:case Wa:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case ma:case gp:case ua:return{byteLength:4,components:1};case jv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function dx(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cE(r){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,M=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,_),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:M}}function s(p,m,h){const _=m.array,M=m.updateRanges;if(r.bindBuffer(h,p),M.length===0)r.bufferSubData(h,0,_);else{M.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<M.length;y++){const b=M[g],D=M[y];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,M[g]=D)}M.length=g+1;for(let y=0,b=M.length;y<b;y++){const D=M[y];r.bufferSubData(h,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
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
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
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
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
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
}`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
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
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
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
#endif`,lb=`uniform sampler2D dfgLUT;
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
}`,cb=`
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xb=`#if defined( USE_POINTS_UV )
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
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jb=`float getShadowMask() {
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
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,UT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,LT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,PT=`#define TOON
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
}`,IT=`#define TOON
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
}`,FT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:dE,alphamap_pars_fragment:hE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:ME,beginnormal_vertex:SE,bsdfs:yE,iridescence_fragment:EE,bumpmap_pars_fragment:bE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:CE,color_fragment:wE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:NE,common:LE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:PE,displacementmap_pars_vertex:IE,displacementmap_vertex:FE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:XE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:nb,envmap_vertex:qE,fog_vertex:YE,fog_pars_vertex:jE,fog_fragment:ZE,fog_pars_fragment:KE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:JE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:tb,lights_pars_begin:eb,lights_toon_fragment:ib,lights_toon_pars_fragment:ab,lights_phong_fragment:sb,lights_phong_pars_fragment:rb,lights_physical_fragment:ob,lights_physical_pars_fragment:lb,lights_fragment_begin:cb,lights_fragment_maps:ub,lights_fragment_end:fb,logdepthbuf_fragment:db,logdepthbuf_pars_fragment:hb,logdepthbuf_pars_vertex:pb,logdepthbuf_vertex:mb,map_fragment:gb,map_pars_fragment:_b,map_particle_fragment:vb,map_particle_pars_fragment:xb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:yb,morphcolor_vertex:Eb,morphnormal_vertex:bb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:wb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Ib,opaque_fragment:Fb,packing:Bb,premultiplied_alpha_fragment:zb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Vb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:qb,shadowmap_vertex:Yb,shadowmask_pars_fragment:jb,skinbase_vertex:Zb,skinning_pars_vertex:Kb,skinning_vertex:Qb,skinnormal_vertex:Jb,specularmap_fragment:$b,specularmap_pars_fragment:tT,tonemapping_fragment:eT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:MT,linedashed_vert:ST,linedashed_frag:yT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:UT,meshphong_frag:NT,meshphysical_vert:LT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:IT,points_vert:FT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},Kt={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},la={basic:{uniforms:ii([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ii([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ii([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ii([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ii([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new He(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ii([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ii([Kt.points,Kt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ii([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ii([Kt.common,Kt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ii([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ii([Kt.sprite,Kt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ii([Kt.common,Kt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ii([Kt.lights,Kt.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};la.physical={uniforms:ii([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Xc={r:0,b:0,g:0},Ks=new ga,kT=new gn;function XT(r,e,i,s,l,c){const d=new He(0);let p=l===!0?0:1,m,h,_=null,M=0,g=null;function y(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const N=C.backgroundBlurriness>0;I=e.get(I,N)}return I}function b(C){let I=!1;const N=y(C);N===null?S(d,p):N&&N.isColor&&(S(N,1),I=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(C,I){const N=y(I);N&&(N.isCubeTexture||N.mapping===Mu)?(h===void 0&&(h=new je(new ca(1,1,1),new _a({name:"BackgroundCubeMaterial",uniforms:ao(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ks.copy(I.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Ks)),h.material.toneMapped=ze.getTransfer(N.colorSpace)!==Qe,(_!==N||M!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=N,M=N.version,g=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new je(new ir(2,2),new _a({name:"BackgroundMaterial",uniforms:ao(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=ze.getTransfer(N.colorSpace)!==Qe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||M!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,M=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function S(C,I){C.getRGB(Xc,cx(r)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,I=1){d.set(C),p=I,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,S(d,p)},render:b,addToRenderList:D,dispose:x}}function WT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(X,$,it,ct,et){let O=!1;const G=M(X,ct,it,$);c!==G&&(c=G,h(c.object)),O=y(X,ct,it,et),O&&b(X,ct,it,et),et!==null&&e.update(et,r.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,N(X,$,it,ct),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function m(){return r.createVertexArray()}function h(X){return r.bindVertexArray(X)}function _(X){return r.deleteVertexArray(X)}function M(X,$,it,ct){const et=ct.wireframe===!0;let O=s[$.id];O===void 0&&(O={},s[$.id]=O);const G=X.isInstancedMesh===!0?X.id:0;let _t=O[G];_t===void 0&&(_t={},O[G]=_t);let yt=_t[it.id];yt===void 0&&(yt={},_t[it.id]=yt);let Ot=yt[et];return Ot===void 0&&(Ot=g(m()),yt[et]=Ot),Ot}function g(X){const $=[],it=[],ct=[];for(let et=0;et<i;et++)$[et]=0,it[et]=0,ct[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:it,attributeDivisors:ct,object:X,attributes:{},index:null}}function y(X,$,it,ct){const et=c.attributes,O=$.attributes;let G=0;const _t=it.getAttributes();for(const yt in _t)if(_t[yt].location>=0){const F=et[yt];let Q=O[yt];if(Q===void 0&&(yt==="instanceMatrix"&&X.instanceMatrix&&(Q=X.instanceMatrix),yt==="instanceColor"&&X.instanceColor&&(Q=X.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==ct}function b(X,$,it,ct){const et={},O=$.attributes;let G=0;const _t=it.getAttributes();for(const yt in _t)if(_t[yt].location>=0){let F=O[yt];F===void 0&&(yt==="instanceMatrix"&&X.instanceMatrix&&(F=X.instanceMatrix),yt==="instanceColor"&&X.instanceColor&&(F=X.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),et[yt]=Q,G++}c.attributes=et,c.attributesNum=G,c.index=ct}function D(){const X=c.newAttributes;for(let $=0,it=X.length;$<it;$++)X[$]=0}function S(X){x(X,0)}function x(X,$){const it=c.newAttributes,ct=c.enabledAttributes,et=c.attributeDivisors;it[X]=1,ct[X]===0&&(r.enableVertexAttribArray(X),ct[X]=1),et[X]!==$&&(r.vertexAttribDivisor(X,$),et[X]=$)}function C(){const X=c.newAttributes,$=c.enabledAttributes;for(let it=0,ct=$.length;it<ct;it++)$[it]!==X[it]&&(r.disableVertexAttribArray(it),$[it]=0)}function I(X,$,it,ct,et,O,G){G===!0?r.vertexAttribIPointer(X,$,it,et,O):r.vertexAttribPointer(X,$,it,ct,et,O)}function N(X,$,it,ct){D();const et=ct.attributes,O=it.getAttributes(),G=$.defaultAttributeValues;for(const _t in O){const yt=O[_t];if(yt.location>=0){let Ot=et[_t];if(Ot===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(Ot=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(Ot=X.instanceColor)),Ot!==void 0){const F=Ot.normalized,Q=Ot.itemSize,Tt=e.get(Ot);if(Tt===void 0)continue;const Bt=Tt.buffer,jt=Tt.type,rt=Tt.bytesPerElement,Rt=jt===r.INT||jt===r.UNSIGNED_INT||Ot.gpuType===gp;if(Ot.isInterleavedBufferAttribute){const Ut=Ot.data,zt=Ut.stride,Qt=Ot.offset;if(Ut.isInstancedInterleavedBuffer){for(let ee=0;ee<yt.locationSize;ee++)x(yt.location+ee,Ut.meshPerAttribute);X.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ee=0;ee<yt.locationSize;ee++)S(yt.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let ee=0;ee<yt.locationSize;ee++)I(yt.location+ee,Q/yt.locationSize,jt,F,zt*rt,(Qt+Q/yt.locationSize*ee)*rt,Rt)}else{if(Ot.isInstancedBufferAttribute){for(let Ut=0;Ut<yt.locationSize;Ut++)x(yt.location+Ut,Ot.meshPerAttribute);X.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Ut=0;Ut<yt.locationSize;Ut++)S(yt.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Ut=0;Ut<yt.locationSize;Ut++)I(yt.location+Ut,Q/yt.locationSize,jt,F,Q*rt,Q/yt.locationSize*Ut*rt,Rt)}}else if(G!==void 0){const F=G[_t];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(yt.location,F);break;case 3:r.vertexAttrib3fv(yt.location,F);break;case 4:r.vertexAttrib4fv(yt.location,F);break;default:r.vertexAttrib1fv(yt.location,F)}}}}C()}function k(){U();for(const X in s){const $=s[X];for(const it in $){const ct=$[it];for(const et in ct){const O=ct[et];for(const G in O)_(O[G].object),delete O[G];delete ct[et]}}delete s[X]}}function z(X){if(s[X.id]===void 0)return;const $=s[X.id];for(const it in $){const ct=$[it];for(const et in ct){const O=ct[et];for(const G in O)_(O[G].object),delete O[G];delete ct[et]}}delete s[X.id]}function H(X){for(const $ in s){const it=s[$];for(const ct in it){const et=it[ct];if(et[X.id]===void 0)continue;const O=et[X.id];for(const G in O)_(O[G].object),delete O[G];delete et[X.id]}}}function T(X){for(const $ in s){const it=s[$],ct=X.isInstancedMesh===!0?X.id:0,et=it[ct];if(et!==void 0){for(const O in et){const G=et[O];for(const _t in G)_(G[_t].object),delete G[_t];delete et[O]}delete it[ct],Object.keys(it).length===0&&delete s[$]}}}function U(){at(),d=!0,c!==l&&(c=l,h(c.object))}function at(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:at,dispose:k,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:D,enableAttribute:S,disableUnusedAttributes:C}}function qT(r,e,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function d(h,_,M){M!==0&&(r.drawArraysInstanced(s,h,_,M),i.update(_,s,M))}function p(h,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,M);let y=0;for(let b=0;b<M;b++)y+=_[b];i.update(y,s,1)}function m(h,_,M,g){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<h.length;b++)d(h[b],_[b],g[b]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,_,0,g,0,M);let b=0;for(let D=0;D<M;D++)b+=_[D]*g[D];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function YT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(H){return!(H!==ta&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const T=H===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==wi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ua&&!T)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(ge("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const M=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:M,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:N,maxSamples:k,samples:z}}function jT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Js,p=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const y=M.length!==0||g||s!==0||l;return l=g,s=M.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,g){i=_(M,g,0)},this.setState=function(M,g,y){const b=M.clippingPlanes,D=M.clipIntersection,S=M.clipShadows,x=r.get(M);if(!l||b===null||b.length===0||c&&!S)c?_(null):h();else{const C=c?0:s,I=C*4;let N=x.clippingState||null;m.value=N,N=_(b,g,I,y);for(let k=0;k!==I;++k)N[k]=i[k];x.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(M,g,y,b){const D=M!==null?M.length:0;let S=null;if(D!==0){if(S=m.value,b!==!0||S===null){const x=y+D*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,N=y;I!==D;++I,N+=4)d.copy(M[I]).applyMatrix4(C,p),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,S}}const Cs=4,q_=[.125,.215,.35,.446,.526,.582],tr=20,ZT=256,il=new Cp,Y_=new He;let sh=null,rh=0,oh=0,lh=!1;const KT=new ft;class j_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=KT}=c;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ar||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Wa,format:ta,colorSpace:io,depthBuffer:!1},l=Z_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,e,i),this._ggxMaterial=JT(c,e,i)}return l}_compileMaterial(e){const i=new je(new ki,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,s,l,c){const m=new Vi(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],M=this._renderer,g=M.autoClear,y=M.toneMapping;M.getClearColor(Y_),M.toneMapping=da,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(l),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new ca,new rx({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,S=D.material;let x=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,x=!0):(S.color.copy(Y_),x=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[I],c.y,c.z)):N===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[I]));const k=this._cubeSize;Kr(l,N*k,I>2?k:0,k,k),M.setRenderTarget(l),x&&M.render(D,m),M.render(e,m)}M.toneMapping=y,M.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ar||e.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,il)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),M=Math.sqrt(h*h-_*_),g=0+h*1.25,y=M*g,{_lodMax:b}=this,D=this._sizeLods[s],S=3*D*(s>b-Cs?s-b+Cs:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Kr(c,S,x,3*D,2*D),l.setRenderTarget(c),l.render(p,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Kr(e,S,x,3*D,2*D),l.setRenderTarget(e),l.render(p,il)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const _=3,M=this._lodMeshes[l];M.material=h;const g=h.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*tr-1),D=c/b,S=isFinite(c)?1+Math.floor(_*D):tr;S>tr&&ge(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${tr}`);const x=[];let C=0;for(let H=0;H<tr;++H){const T=H/D,U=Math.exp(-T*T/2);x.push(U),H===0?C+=U:H<S&&(C+=2*U)}for(let H=0;H<x.length;H++)x[H]=x[H]/C;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=b,g.mipInt.value=I-s;const N=this._sizeLods[l],k=3*N*(l>I-Cs?l-I+Cs:0),z=4*(this._cubeSize-N);Kr(i,k,z,3*N,2*N),m.setRenderTarget(i),m.render(M,il)}}function QT(r){const e=[],i=[],s=[];let l=r;const c=r-Cs+1+q_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-Cs?m=q_[d-r+Cs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,M=1+h,g=[_,_,M,_,M,M,_,_,M,M,_,M],y=6,b=6,D=3,S=2,x=1,C=new Float32Array(D*b*y),I=new Float32Array(S*b*y),N=new Float32Array(x*b*y);for(let z=0;z<y;z++){const H=z%3*2/3-1,T=z>2?0:-1,U=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];C.set(U,D*b*z),I.set(g,S*b*z);const at=[z,z,z,z,z,z];N.set(at,x*b*z)}const k=new ki;k.setAttribute("position",new pa(C,D)),k.setAttribute("uv",new pa(I,S)),k.setAttribute("faceIndex",new pa(N,x)),s.push(new je(k,null)),l>Cs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Z_(r,e,i){const s=new ha(r,e,i);return s.texture.mapping=Mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function JT(r,e,i){return new _a({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function $T(r,e,i){const s=new Float32Array(tr),l=new ft(0,1,0);return new _a({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function K_(){return new _a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Q_(){return new _a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}class hx extends ha{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ox(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ca(5,5,5),c=new _a({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:pi,blending:ka});c.uniforms.tEquirect.value=i;const d=new je(l,c),p=i.minFilter;return i.minFilter===er&&(i.minFilter=Kn),new rE(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function t1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Ud||y===Nd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new hx(b.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,b=y===Ud||y===Nd,D=y===ar||y===eo;if(b||D){let S=i.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new j_(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const C=g.image;return b&&C&&C.height>0||D&&C&&m(C)?(s===null&&(s=new j_(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function p(g,y){return y===Ud?g.mapping=ar:y===Nd&&(g.mapping=eo),g}function m(g){let y=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&y++;return y===b}function h(g){const y=g.target;y.removeEventListener("dispose",h);const b=e.get(y);b!==void 0&&(e.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function M(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:M}}function e1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function n1(r,e,i,s){const l={},c=new WeakMap;function d(M){const g=M.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(M,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(M){const g=M.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function h(M){const g=[],y=M.index,b=M.attributes.position;let D=0;if(b===void 0)return;if(y!==null){const C=y.array;D=y.version;for(let I=0,N=C.length;I<N;I+=3){const k=C[I+0],z=C[I+1],H=C[I+2];g.push(k,z,z,H,H,k)}}else{const C=b.array;D=b.version;for(let I=0,N=C.length/3-1;I<N;I+=3){const k=I+0,z=I+1,H=I+2;g.push(k,z,z,H,H,k)}}const S=new(b.count>=65535?sx:ax)(g,1);S.version=D;const x=c.get(M);x&&e.remove(x),c.set(M,S)}function _(M){const g=c.get(M);if(g){const y=M.index;y!==null&&g.version<y.version&&h(M)}else h(M);return c.get(M)}return{get:p,update:m,getWireframeAttribute:_}}function i1(r,e,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*d),i.update(y,s,1)}function h(g,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,g*d,b),i.update(y,s,b))}function _(g,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,b);let S=0;for(let x=0;x<b;x++)S+=y[x];i.update(S,s,1)}function M(g,y,b,D){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)h(g[x]/d,y[x],D[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,D,0,b);let x=0;for(let C=0;C<b;C++)x+=y[C]*D[C];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=M}function a1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Xe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function s1(r,e,i){const s=new WeakMap,l=new mn;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==M){let at=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",at)};var y=at;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),D===!0&&(N=2),S===!0&&(N=3);let k=p.attributes.position.count*N,z=1;k>e.maxTextureSize&&(z=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const H=new Float32Array(k*z*4*M),T=new ex(H,k,z,M);T.type=ua,T.needsUpdate=!0;const U=N*4;for(let X=0;X<M;X++){const $=x[X],it=C[X],ct=I[X],et=k*z*4*X;for(let O=0;O<$.count;O++){const G=O*U;b===!0&&(l.fromBufferAttribute($,O),H[et+G+0]=l.x,H[et+G+1]=l.y,H[et+G+2]=l.z,H[et+G+3]=0),D===!0&&(l.fromBufferAttribute(it,O),H[et+G+4]=l.x,H[et+G+5]=l.y,H[et+G+6]=l.z,H[et+G+7]=0),S===!0&&(l.fromBufferAttribute(ct,O),H[et+G+8]=l.x,H[et+G+9]=l.y,H[et+G+10]=l.z,H[et+G+11]=ct.itemSize===4?l.w:1)}}g={count:M,texture:T,size:new We(k,z)},s.set(p,g),p.addEventListener("dispose",at)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const D=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function r1(r,e,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,M=h.geometry,g=e.get(h,M);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const o1={[Bv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Hv]:"CINEON_TONE_MAPPING",[Gv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Vv]:"CUSTOM_TONE_MAPPING"};function l1(r,e,i,s,l){const c=new ha(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new ha(e,i,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),p=new ki;p.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new On([0,2,0,0,2,0],2));const m=new $y({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new je(p,m),_=new Cp(-1,1,1,-1,0,1);let M=null,g=null,y=!1,b,D=null,S=[],x=!1;this.setSize=function(C,I){c.setSize(C,I),d.setSize(C,I);for(let N=0;N<S.length;N++){const k=S[N];k.setSize&&k.setSize(C,I)}},this.setEffects=function(C){S=C,x=S.length>0&&S[0].isRenderPass===!0;const I=c.width,N=c.height;for(let k=0;k<S.length;k++){const z=S[k];z.setSize&&z.setSize(I,N)}},this.begin=function(C,I){if(y||C.toneMapping===da&&S.length===0)return!1;if(D=I,I!==null){const N=I.width,k=I.height;(c.width!==N||c.height!==k)&&this.setSize(N,k)}return x===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=da,!0},this.hasRenderPass=function(){return x},this.end=function(C,I){C.toneMapping=b,y=!0;let N=c,k=d;for(let z=0;z<S.length;z++){const H=S[z];if(H.enabled!==!1&&(H.render(C,k,N,I),H.needsSwap!==!1)){const T=N;N=k,k=T}}if(M!==C.outputColorSpace||g!==C.toneMapping){M=C.outputColorSpace,g=C.toneMapping,m.defines={},ze.getTransfer(M)===Qe&&(m.defines.SRGB_TRANSFER="");const z=o1[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(D),C.render(h,_),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const px=new ai,cp=new dl(1,1),mx=new ex,gx=new wy,_x=new ox,J_=[],$_=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function oo(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=J_[l];if(c===void 0&&(c=new Float32Array(l),J_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function Cn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function wn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function yu(r,e){let i=$_[e];i===void 0&&(i=new Int32Array(e),$_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function c1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function u1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;r.uniform2fv(this.addr,e),wn(i,e)}}function f1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Cn(i,e))return;r.uniform3fv(this.addr,e),wn(i,e)}}function d1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;r.uniform4fv(this.addr,e),wn(i,e)}}function h1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Cn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,s))return;nv.set(s),r.uniformMatrix2fv(this.addr,!1,nv),wn(i,s)}}function p1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Cn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,s))return;ev.set(s),r.uniformMatrix3fv(this.addr,!1,ev),wn(i,s)}}function m1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Cn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,s))return;tv.set(s),r.uniformMatrix4fv(this.addr,!1,tv),wn(i,s)}}function g1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function _1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;r.uniform2iv(this.addr,e),wn(i,e)}}function v1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;r.uniform3iv(this.addr,e),wn(i,e)}}function x1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;r.uniform4iv(this.addr,e),wn(i,e)}}function M1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function S1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;r.uniform2uiv(this.addr,e),wn(i,e)}}function y1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;r.uniform3uiv(this.addr,e),wn(i,e)}}function E1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;r.uniform4uiv(this.addr,e),wn(i,e)}}function b1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?Ep:yp,c=cp):c=px,i.setTexture2D(e||c,l)}function T1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||gx,l)}function A1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_x,l)}function R1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||mx,l)}function C1(r){switch(r){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return M1;case 36294:return S1;case 36295:return y1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function w1(r,e){r.uniform1fv(this.addr,e)}function D1(r,e){const i=oo(e,this.size,2);r.uniform2fv(this.addr,i)}function U1(r,e){const i=oo(e,this.size,3);r.uniform3fv(this.addr,i)}function N1(r,e){const i=oo(e,this.size,4);r.uniform4fv(this.addr,i)}function L1(r,e){const i=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function O1(r,e){const i=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function P1(r,e){const i=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function I1(r,e){r.uniform1iv(this.addr,e)}function F1(r,e){r.uniform2iv(this.addr,e)}function B1(r,e){r.uniform3iv(this.addr,e)}function z1(r,e){r.uniform4iv(this.addr,e)}function H1(r,e){r.uniform1uiv(this.addr,e)}function G1(r,e){r.uniform2uiv(this.addr,e)}function V1(r,e){r.uniform3uiv(this.addr,e)}function k1(r,e){r.uniform4uiv(this.addr,e)}function X1(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=cp:d=px;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function W1(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||gx,c[d])}function q1(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||_x,c[d])}function Y1(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||mx,c[d])}function j1(r){switch(r){case 5126:return w1;case 35664:return D1;case 35665:return U1;case 35666:return N1;case 35674:return L1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return F1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}class Z1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=C1(i.type)}}class K1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=j1(i.type)}}class Q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function iv(r,e){r.seq.push(e),r.map[e.id]=e}function J1(r,e,i){const s=r.name,l=s.length;for(ch.lastIndex=0;;){const c=ch.exec(s),d=ch.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){iv(i,h===void 0?new Z1(p,r,e):new K1(p,r,e));break}else{let M=i.map[p];M===void 0&&(M=new Q1(p),iv(i,M)),i=M}}}class cu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);J1(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function av(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const $1=37297;let tA=0;function eA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const sv=new Se;function nA(r){ze._getMatrix(sv,ze.workingColorSpace,r);const e=`mat3( ${sv.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(r)){case pu:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+eA(r.getShaderSource(e),p)}else return c}function iA(r,e){const i=nA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aA={[Bv]:"Linear",[zv]:"Reinhard",[Hv]:"Cineon",[Gv]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Vv]:"Custom"};function sA(r,e){const i=aA[e];return i===void 0?(ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new ft;function rA(){ze.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function lA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function cA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function ol(r){return r!==""}function ov(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(uA,dA)}const fA=new Map;function dA(r,e){let i=Ee[e];if(i===void 0){const s=fA.get(e);if(s!==void 0)i=Ee[s],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return up(i)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(r){return r.replace(hA,pA)}function pA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function uv(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mA={[au]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[ar]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function vA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_A[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[eo]:"ENVMAP_MODE_REFRACTION"};function MA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SA={[mp]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function yA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=gA(i),h=vA(i),_=MA(i),M=yA(i),g=EA(i),y=oA(i),b=lA(c),D=l.createProgram();let S,x,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ol).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ol).join(`
`),x.length>0&&(x+=`
`)):(S=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),x=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+M:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==da?"#define TONE_MAPPING":"",i.toneMapping!==da?Ee.tonemapping_pars_fragment:"",i.toneMapping!==da?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),d=up(d),d=ov(d,i),d=lv(d,i),p=up(p),p=ov(p,i),p=lv(p,i),d=cv(d),p=cv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=C+S+d,N=C+x+p,k=av(l,l.VERTEX_SHADER,I),z=av(l,l.FRAGMENT_SHADER,N);l.attachShader(D,k),l.attachShader(D,z),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function H(X){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(D)||"",it=l.getShaderInfoLog(k)||"",ct=l.getShaderInfoLog(z)||"",et=$.trim(),O=it.trim(),G=ct.trim();let _t=!0,yt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(_t=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,k,z);else{const Ot=rv(l,k,"vertex"),F=rv(l,z,"fragment");Xe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+et+`
`+Ot+`
`+F)}else et!==""?ge("WebGLProgram: Program Info Log:",et):(O===""||G==="")&&(yt=!1);yt&&(X.diagnostics={runnable:_t,programLog:et,vertexShader:{log:O,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(k),l.deleteShader(z),T=new cu(l,D),U=cA(l,D)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let U;this.getAttributes=function(){return U===void 0&&H(this),U};let at=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=l.getProgramParameter(D,$1)),at},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=z,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new RA(e),i.set(e,s)),s}}class RA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function CA(r,e,i,s,l,c){const d=new nx,p=new AA,m=new Set,h=[],_=new Map,M=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,U,at,X,$){const it=X.fog,ct=$.geometry,et=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||et,O),_t=G&&G.mapping===Mu?G.image.height:null,yt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ge("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Ot=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,F=Ot!==void 0?Ot.length:0;let Q=0;ct.morphAttributes.position!==void 0&&(Q=1),ct.morphAttributes.normal!==void 0&&(Q=2),ct.morphAttributes.color!==void 0&&(Q=3);let Tt,Bt,jt,rt;if(yt){const Ae=la[yt];Tt=Ae.vertexShader,Bt=Ae.fragmentShader}else Tt=T.vertexShader,Bt=T.fragmentShader,p.update(T),jt=p.getVertexShaderID(T),rt=p.getFragmentShaderID(T);const Rt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),zt=$.isInstancedMesh===!0,Qt=$.isBatchedMesh===!0,ee=!!T.map,nn=!!T.matcap,_e=!!G,xe=!!T.aoMap,Ce=!!T.lightMap,he=!!T.bumpMap,Be=!!T.normalMap,V=!!T.displacementMap,qe=!!T.emissiveMap,be=!!T.metalnessMap,Te=!!T.roughnessMap,te=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,J=T.iridescence>0,Mt=T.sheen>0,At=T.transmission>0,St=te&&!!T.anisotropyMap,Jt=L&&!!T.clearcoatMap,Vt=L&&!!T.clearcoatNormalMap,ae=L&&!!T.clearcoatRoughnessMap,oe=J&&!!T.iridescenceMap,Dt=J&&!!T.iridescenceThicknessMap,Et=Mt&&!!T.sheenColorMap,qt=Mt&&!!T.sheenRoughnessMap,Xt=!!T.specularMap,Wt=!!T.specularColorMap,de=!!T.specularIntensityMap,K=At&&!!T.transmissionMap,Gt=At&&!!T.thicknessMap,Ht=!!T.gradientMap,Zt=!!T.alphaMap,Pt=T.alphaTest>0,vt=!!T.alphaHash,Yt=!!T.extensions;let ce=da;T.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Re={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:Tt,fragmentShader:Bt,defines:T.defines,customVertexShaderID:jt,customFragmentShaderID:rt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&$._colorsTexture!==null,instancing:zt,instancingColor:zt&&$.instanceColor!==null,instancingMorph:zt&&$.morphTexture!==null,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:io,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:nn,envMap:_e,envMapMode:_e&&G.mapping,envMapCubeUVHeight:_t,aoMap:xe,lightMap:Ce,bumpMap:he,normalMap:Be,displacementMap:V,emissiveMap:qe,normalMapObjectSpace:Be&&T.normalMapType===dy,normalMapTangentSpace:Be&&T.normalMapType===$v,metalnessMap:be,roughnessMap:Te,anisotropy:te,anisotropyMap:St,clearcoat:L,clearcoatMap:Jt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ae,dispersion:E,iridescence:J,iridescenceMap:oe,iridescenceThicknessMap:Dt,sheen:Mt,sheenColorMap:Et,sheenRoughnessMap:qt,specularMap:Xt,specularColorMap:Wt,specularIntensityMap:de,transmission:At,transmissionMap:K,thicknessMap:Gt,gradientMap:Ht,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:Zt,alphaTest:Pt,alphaHash:vt,combine:T.combine,mapUv:ee&&b(T.map.channel),aoMapUv:xe&&b(T.aoMap.channel),lightMapUv:Ce&&b(T.lightMap.channel),bumpMapUv:he&&b(T.bumpMap.channel),normalMapUv:Be&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:qe&&b(T.emissiveMap.channel),metalnessMapUv:be&&b(T.metalnessMap.channel),roughnessMapUv:Te&&b(T.roughnessMap.channel),anisotropyMapUv:St&&b(T.anisotropyMap.channel),clearcoatMapUv:Jt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:qt&&b(T.sheenRoughnessMap.channel),specularMapUv:Xt&&b(T.specularMap.channel),specularColorMapUv:Wt&&b(T.specularColorMap.channel),specularIntensityMapUv:de&&b(T.specularIntensityMap.channel),transmissionMapUv:K&&b(T.transmissionMap.channel),thicknessMapUv:Gt&&b(T.thicknessMap.channel),alphaMapUv:Zt&&b(T.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Be||te),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ct.attributes.uv&&(ee||Zt),fog:!!it,useFog:T.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ct.attributes.normal===void 0&&Be===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ut,skinning:$.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Q,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&at.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&ze.getTransfer(T.map.colorSpace)===Qe,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&ze.getTransfer(T.emissiveMap.colorSpace)===Qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ga,flipSided:T.side===pi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Re.vertexUv1s=m.has(1),Re.vertexUv2s=m.has(2),Re.vertexUv3s=m.has(3),m.clear(),Re}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const at in T.defines)U.push(at),U.push(T.defines[at]);return T.isRawShaderMaterial===!1&&(x(U,T),C(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),T.push(d.mask)}function I(T){const U=y[T.type];let at;if(U){const X=la[U];at=Ky.clone(X.uniforms)}else at=T.uniforms;return at}function N(T,U){let at=_.get(U);return at!==void 0?++at.usedTimes:(at=new bA(r,U,T,l),h.push(at),_.set(U,at)),at}function k(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function H(){p.dispose()}return{getParameters:D,getProgramCacheKey:S,getUniforms:I,acquireProgram:N,releaseProgram:k,releaseShaderCache:z,programs:h,dispose:H}}function wA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function DA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,D,S,x){let C=r[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:S,group:x},r[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=d(g),C.groupOrder=D,C.renderOrder=g.renderOrder,C.z=S,C.group=x),e++,C}function m(g,y,b,D,S,x){const C=p(g,y,b,D,S,x);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function h(g,y,b,D,S,x){const C=p(g,y,b,D,S,x);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||DA),s.length>1&&s.sort(y||fv),l.length>1&&l.sort(y||fv)}function M(){for(let g=e,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:M,sort:_}}function UA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new dv,r.set(s,[d])):l>=c.length?(d=new dv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function NA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ft,color:new He};break;case"SpotLight":i={position:new ft,direction:new ft,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ft,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ft,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return r[e.id]=i,i}}}function LA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let OA=0;function PA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IA(r){const e=new NA,i=LA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ft);const l=new ft,c=new gn,d=new gn;function p(h){let _=0,M=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,b=0,D=0,S=0,x=0,C=0,I=0,N=0,k=0,z=0,H=0;h.sort(PA);for(let U=0,at=h.length;U<at;U++){const X=h[U],$=X.color,it=X.intensity,ct=X.distance;let et=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===no?et=X.shadow.map.texture:et=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=$.r*it,M+=$.g*it,g+=$.b*it;else if(X.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(X.sh.coefficients[O],it);H++}else if(X.isDirectionalLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,_t=i.get(X);_t.shadowIntensity=G.intensity,_t.shadowBias=G.bias,_t.shadowNormalBias=G.normalBias,_t.shadowRadius=G.radius,_t.shadowMapSize=G.mapSize,s.directionalShadow[y]=_t,s.directionalShadowMap[y]=et,s.directionalShadowMatrix[y]=X.shadow.matrix,C++}s.directional[y]=O,y++}else if(X.isSpotLight){const O=e.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy($).multiplyScalar(it),O.distance=ct,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,s.spot[D]=O;const G=X.shadow;if(X.map&&(s.spotLightMap[k]=X.map,k++,G.updateMatrices(X),X.castShadow&&z++),s.spotLightMatrix[D]=G.matrix,X.castShadow){const _t=i.get(X);_t.shadowIntensity=G.intensity,_t.shadowBias=G.bias,_t.shadowNormalBias=G.normalBias,_t.shadowRadius=G.radius,_t.shadowMapSize=G.mapSize,s.spotShadow[D]=_t,s.spotShadowMap[D]=et,N++}D++}else if(X.isRectAreaLight){const O=e.get(X);O.color.copy($).multiplyScalar(it),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),s.rectArea[S]=O,S++}else if(X.isPointLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const G=X.shadow,_t=i.get(X);_t.shadowIntensity=G.intensity,_t.shadowBias=G.bias,_t.shadowNormalBias=G.normalBias,_t.shadowRadius=G.radius,_t.shadowMapSize=G.mapSize,_t.shadowCameraNear=G.camera.near,_t.shadowCameraFar=G.camera.far,s.pointShadow[b]=_t,s.pointShadowMap[b]=et,s.pointShadowMatrix[b]=X.shadow.matrix,I++}s.point[b]=O,b++}else if(X.isHemisphereLight){const O=e.get(X);O.skyColor.copy(X.color).multiplyScalar(it),O.groundColor.copy(X.groundColor).multiplyScalar(it),s.hemi[x]=O,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Kt.LTC_FLOAT_1,s.rectAreaLTC2=Kt.LTC_FLOAT_2):(s.rectAreaLTC1=Kt.LTC_HALF_1,s.rectAreaLTC2=Kt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=M,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==I||T.numSpotShadows!==N||T.numSpotMaps!==k||T.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=S,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+k-z,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,T.directionalLength=y,T.pointLength=b,T.spotLength=D,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=I,T.numSpotShadows=N,T.numSpotMaps=k,T.numLightProbes=H,s.version=OA++)}function m(h,_){let M=0,g=0,y=0,b=0,D=0;const S=_.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){const I=h[x];if(I.isDirectionalLight){const N=s.directional[M];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(I.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(I.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(S),D++}}}return{setup:p,setupView:m,state:s}}function hv(r){const e=new IA(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function p(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function FA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new hv(r),e.set(l,[p])):c>=d.length?(p=new hv(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`,HA=[new ft(1,0,0),new ft(-1,0,0),new ft(0,1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1)],GA=[new ft(0,-1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,-1,0),new ft(0,-1,0)],pv=new gn,al=new ft,uh=new ft;function VA(r,e,i){let s=new Rp;const l=new We,c=new We,d=new mn,p=new tE,m=new eE,h={},_=i.maxTextureSize,M={[ws]:pi,[pi]:ws,[Ga]:Ga},g=new _a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new ki;b.setAttribute("position",new pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new je(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let x=this.type;this.render=function(z,H,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===kS&&(ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=au);const U=r.getRenderTarget(),at=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ka),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const it=x!==this.type;it&&H.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(et=>et.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,et=z.length;ct<et;ct++){const O=z[ct],G=O.shadow;if(G===void 0){ge("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const _t=G.getFrameExtents();l.multiply(_t),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/_t.x),l.x=c.x*_t.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/_t.y),l.y=c.y*_t.y,G.mapSize.y=c.y));const yt=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=yt,G.map===null||it===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===rl){if(O.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ha(l.x,l.y,{format:no,type:Wa,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new dl(l.x,l.y,ua),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=qa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn}else O.isPointLight?(G.map=new hx(l.x),G.map.depthTexture=new jy(l.x,ma)):(G.map=new ha(l.x,l.y),G.map.depthTexture=new dl(l.x,l.y,ma)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=qa,this.type===au?(G.map.depthTexture.compareFunction=yt?Ep:yp,G.map.depthTexture.minFilter=Kn,G.map.depthTexture.magFilter=Kn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn);G.camera.updateProjectionMatrix()}const Ot=G.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Ot;F++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,F),r.clear();else{F===0&&(r.setRenderTarget(G.map),r.clear());const Q=G.getViewport(F);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),$.viewport(d)}if(O.isPointLight){const Q=G.camera,Tt=G.matrix,Bt=O.distance||Q.far;Bt!==Q.far&&(Q.far=Bt,Q.updateProjectionMatrix()),al.setFromMatrixPosition(O.matrixWorld),Q.position.copy(al),uh.copy(Q.position),uh.add(HA[F]),Q.up.copy(GA[F]),Q.lookAt(uh),Q.updateMatrixWorld(),Tt.makeTranslation(-al.x,-al.y,-al.z),pv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(pv,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(O);s=G.getFrustum(),N(H,T,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===rl&&C(G,T),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(U,at,X)};function C(z,H){const T=e.update(D);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ha(l.x,l.y,{format:no,type:Wa})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,T,g,D,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,T,y,D,null)}function I(z,H,T,U){let at=null;const X=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(X!==void 0)at=X;else if(at=T.isPointLight===!0?m:p,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const $=at.uuid,it=H.uuid;let ct=h[$];ct===void 0&&(ct={},h[$]=ct);let et=ct[it];et===void 0&&(et=at.clone(),ct[it]=et,H.addEventListener("dispose",k)),at=et}if(at.visible=H.visible,at.wireframe=H.wireframe,U===rl?at.side=H.shadowSide!==null?H.shadowSide:H.side:at.side=H.shadowSide!==null?H.shadowSide:M[H.side],at.alphaMap=H.alphaMap,at.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,at.map=H.map,at.clipShadows=H.clipShadows,at.clippingPlanes=H.clippingPlanes,at.clipIntersection=H.clipIntersection,at.displacementMap=H.displacementMap,at.displacementScale=H.displacementScale,at.displacementBias=H.displacementBias,at.wireframeLinewidth=H.wireframeLinewidth,at.linewidth=H.linewidth,T.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const $=r.properties.get(at);$.light=T}return at}function N(z,H,T,U,at){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&at===rl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const it=e.update(z),ct=z.material;if(Array.isArray(ct)){const et=it.groups;for(let O=0,G=et.length;O<G;O++){const _t=et[O],yt=ct[_t.materialIndex];if(yt&&yt.visible){const Ot=I(z,yt,U,at);z.onBeforeShadow(r,z,H,T,it,Ot,_t),r.renderBufferDirect(T,null,it,Ot,z,_t),z.onAfterShadow(r,z,H,T,it,Ot,_t)}}}else if(ct.visible){const et=I(z,ct,U,at);z.onBeforeShadow(r,z,H,T,it,et,null),r.renderBufferDirect(T,null,it,et,z,null),z.onAfterShadow(r,z,H,T,it,et,null)}}const $=z.children;for(let it=0,ct=$.length;it<ct;it++)N($[it],H,T,U,at)}function k(z){z.target.removeEventListener("dispose",k);for(const T in h){const U=h[T],at=z.target.uuid;at in U&&(U[at].dispose(),delete U[at])}}}function kA(r,e){function i(){let K=!1;const Gt=new mn;let Ht=null;const Zt=new mn(0,0,0,0);return{setMask:function(Pt){Ht!==Pt&&!K&&(r.colorMask(Pt,Pt,Pt,Pt),Ht=Pt)},setLocked:function(Pt){K=Pt},setClear:function(Pt,vt,Yt,ce,Re){Re===!0&&(Pt*=ce,vt*=ce,Yt*=ce),Gt.set(Pt,vt,Yt,ce),Zt.equals(Gt)===!1&&(r.clearColor(Pt,vt,Yt,ce),Zt.copy(Gt))},reset:function(){K=!1,Ht=null,Zt.set(-1,0,0,0)}}}function s(){let K=!1,Gt=!1,Ht=null,Zt=null,Pt=null;return{setReversed:function(vt){if(Gt!==vt){const Yt=e.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Gt=vt;const ce=Pt;Pt=null,this.setClear(ce)}},getReversed:function(){return Gt},setTest:function(vt){vt?Rt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(vt){Ht!==vt&&!K&&(r.depthMask(vt),Ht=vt)},setFunc:function(vt){if(Gt&&(vt=yy[vt]),Zt!==vt){switch(vt){case Sh:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case Eh:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case bh:r.depthFunc(r.EQUAL);break;case Th:r.depthFunc(r.GEQUAL);break;case Ah:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Zt=vt}},setLocked:function(vt){K=vt},setClear:function(vt){Pt!==vt&&(Pt=vt,Gt&&(vt=1-vt),r.clearDepth(vt))},reset:function(){K=!1,Ht=null,Zt=null,Pt=null,Gt=!1}}}function l(){let K=!1,Gt=null,Ht=null,Zt=null,Pt=null,vt=null,Yt=null,ce=null,Re=null;return{setTest:function(Ae){K||(Ae?Rt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(Ae){Gt!==Ae&&!K&&(r.stencilMask(Ae),Gt=Ae)},setFunc:function(Ae,_n,Pn){(Ht!==Ae||Zt!==_n||Pt!==Pn)&&(r.stencilFunc(Ae,_n,Pn),Ht=Ae,Zt=_n,Pt=Pn)},setOp:function(Ae,_n,Pn){(vt!==Ae||Yt!==_n||ce!==Pn)&&(r.stencilOp(Ae,_n,Pn),vt=Ae,Yt=_n,ce=Pn)},setLocked:function(Ae){K=Ae},setClear:function(Ae){Re!==Ae&&(r.clearStencil(Ae),Re=Ae)},reset:function(){K=!1,Gt=null,Ht=null,Zt=null,Pt=null,vt=null,Yt=null,ce=null,Re=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},M={},g=new WeakMap,y=[],b=null,D=!1,S=null,x=null,C=null,I=null,N=null,k=null,z=null,H=new He(0,0,0),T=0,U=!1,at=null,X=null,$=null,it=null,ct=null;const et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const _t=r.getParameter(r.VERSION);_t.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(_t)[1]),O=G>=1):_t.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),O=G>=2);let yt=null,Ot={};const F=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),Tt=new mn().fromArray(F),Bt=new mn().fromArray(Q);function jt(K,Gt,Ht,Zt){const Pt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(K,vt),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<Ht;Yt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Gt,0,r.RGBA,1,1,Zt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Gt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return vt}const rt={};rt[r.TEXTURE_2D]=jt(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=jt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[r.TEXTURE_2D_ARRAY]=jt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=jt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Rt(r.DEPTH_TEST),d.setFunc(to),he(!1),Be(v_),Rt(r.CULL_FACE),xe(ka);function Rt(K){_[K]!==!0&&(r.enable(K),_[K]=!0)}function Ut(K){_[K]!==!1&&(r.disable(K),_[K]=!1)}function zt(K,Gt){return M[K]!==Gt?(r.bindFramebuffer(K,Gt),M[K]=Gt,K===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Gt),K===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Qt(K,Gt){let Ht=y,Zt=!1;if(K){Ht=g.get(Gt),Ht===void 0&&(Ht=[],g.set(Gt,Ht));const Pt=K.textures;if(Ht.length!==Pt.length||Ht[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Yt=Pt.length;vt<Yt;vt++)Ht[vt]=r.COLOR_ATTACHMENT0+vt;Ht.length=Pt.length,Zt=!0}}else Ht[0]!==r.BACK&&(Ht[0]=r.BACK,Zt=!0);Zt&&r.drawBuffers(Ht)}function ee(K){return b!==K?(r.useProgram(K),b=K,!0):!1}const nn={[$s]:r.FUNC_ADD,[WS]:r.FUNC_SUBTRACT,[qS]:r.FUNC_REVERSE_SUBTRACT};nn[YS]=r.MIN,nn[jS]=r.MAX;const _e={[ZS]:r.ZERO,[KS]:r.ONE,[QS]:r.SRC_COLOR,[xh]:r.SRC_ALPHA,[iy]:r.SRC_ALPHA_SATURATE,[ey]:r.DST_COLOR,[$S]:r.DST_ALPHA,[JS]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[ny]:r.ONE_MINUS_DST_COLOR,[ty]:r.ONE_MINUS_DST_ALPHA,[ay]:r.CONSTANT_COLOR,[sy]:r.ONE_MINUS_CONSTANT_COLOR,[ry]:r.CONSTANT_ALPHA,[oy]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(K,Gt,Ht,Zt,Pt,vt,Yt,ce,Re,Ae){if(K===ka){D===!0&&(Ut(r.BLEND),D=!1);return}if(D===!1&&(Rt(r.BLEND),D=!0),K!==XS){if(K!==S||Ae!==U){if((x!==$s||N!==$s)&&(r.blendEquation(r.FUNC_ADD),x=$s,N=$s),Ae)switch(K){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x_:r.blendFunc(r.ONE,r.ONE);break;case M_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case S_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",K);break}else switch(K){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case M_:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",K);break}C=null,I=null,k=null,z=null,H.set(0,0,0),T=0,S=K,U=Ae}return}Pt=Pt||Gt,vt=vt||Ht,Yt=Yt||Zt,(Gt!==x||Pt!==N)&&(r.blendEquationSeparate(nn[Gt],nn[Pt]),x=Gt,N=Pt),(Ht!==C||Zt!==I||vt!==k||Yt!==z)&&(r.blendFuncSeparate(_e[Ht],_e[Zt],_e[vt],_e[Yt]),C=Ht,I=Zt,k=vt,z=Yt),(ce.equals(H)===!1||Re!==T)&&(r.blendColor(ce.r,ce.g,ce.b,Re),H.copy(ce),T=Re),S=K,U=!1}function Ce(K,Gt){K.side===Ga?Ut(r.CULL_FACE):Rt(r.CULL_FACE);let Ht=K.side===pi;Gt&&(Ht=!Ht),he(Ht),K.blending===Jr&&K.transparent===!1?xe(ka):xe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Zt=K.stencilWrite;p.setTest(Zt),Zt&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),qe(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(K){at!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),at=K)}function Be(K){K!==GS?(Rt(r.CULL_FACE),K!==X&&(K===v_?r.cullFace(r.BACK):K===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),X=K}function V(K){K!==$&&(O&&r.lineWidth(K),$=K)}function qe(K,Gt,Ht){K?(Rt(r.POLYGON_OFFSET_FILL),(it!==Gt||ct!==Ht)&&(it=Gt,ct=Ht,d.getReversed()&&(Gt=-Gt),r.polygonOffset(Gt,Ht))):Ut(r.POLYGON_OFFSET_FILL)}function be(K){K?Rt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function Te(K){K===void 0&&(K=r.TEXTURE0+et-1),yt!==K&&(r.activeTexture(K),yt=K)}function te(K,Gt,Ht){Ht===void 0&&(yt===null?Ht=r.TEXTURE0+et-1:Ht=yt);let Zt=Ot[Ht];Zt===void 0&&(Zt={type:void 0,texture:void 0},Ot[Ht]=Zt),(Zt.type!==K||Zt.texture!==Gt)&&(yt!==Ht&&(r.activeTexture(Ht),yt=Ht),r.bindTexture(K,Gt||rt[K]),Zt.type=K,Zt.texture=Gt)}function L(){const K=Ot[yt];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Mt(){try{r.texSubImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function At(){try{r.texSubImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function St(){try{r.compressedTexSubImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Vt(){try{r.texStorage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function ae(){try{r.texStorage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function oe(){try{r.texImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Dt(){try{r.texImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Et(K){Tt.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),Tt.copy(K))}function qt(K){Bt.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Bt.copy(K))}function Xt(K,Gt){let Ht=h.get(Gt);Ht===void 0&&(Ht=new WeakMap,h.set(Gt,Ht));let Zt=Ht.get(K);Zt===void 0&&(Zt=r.getUniformBlockIndex(Gt,K.name),Ht.set(K,Zt))}function Wt(K,Gt){const Zt=h.get(Gt).get(K);m.get(Gt)!==Zt&&(r.uniformBlockBinding(Gt,Zt,K.__bindingPointIndex),m.set(Gt,Zt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},yt=null,Ot={},M={},g=new WeakMap,y=[],b=null,D=!1,S=null,x=null,C=null,I=null,N=null,k=null,z=null,H=new He(0,0,0),T=0,U=!1,at=null,X=null,$=null,it=null,ct=null,Tt.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Rt,disable:Ut,bindFramebuffer:zt,drawBuffers:Qt,useProgram:ee,setBlending:xe,setMaterial:Ce,setFlipSided:he,setCullFace:Be,setLineWidth:V,setPolygonOffset:qe,setScissorTest:be,activeTexture:Te,bindTexture:te,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:oe,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Wt,texStorage2D:Vt,texStorage3D:ae,texSubImage2D:Mt,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:Jt,scissor:Et,viewport:qt,reset:de}}function XA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new We,_=new WeakMap;let M;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):mu("canvas")}function D(L,E,J){let Mt=1;const At=te(L);if((At.width>J||At.height>J)&&(Mt=J/Math.max(At.width,At.height)),Mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const St=Math.floor(Mt*At.width),Jt=Math.floor(Mt*At.height);M===void 0&&(M=b(St,Jt));const Vt=E?b(St,Jt):M;return Vt.width=St,Vt.height=Jt,Vt.getContext("2d").drawImage(L,0,0,St,Jt),ge("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+St+"x"+Jt+")."),Vt}else return"data"in L&&ge("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(L,E,J,Mt,At=!1){if(L!==null){if(r[L]!==void 0)return r[L];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let St=E;if(E===r.RED&&(J===r.FLOAT&&(St=r.R32F),J===r.HALF_FLOAT&&(St=r.R16F),J===r.UNSIGNED_BYTE&&(St=r.R8)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(St=r.R8UI),J===r.UNSIGNED_SHORT&&(St=r.R16UI),J===r.UNSIGNED_INT&&(St=r.R32UI),J===r.BYTE&&(St=r.R8I),J===r.SHORT&&(St=r.R16I),J===r.INT&&(St=r.R32I)),E===r.RG&&(J===r.FLOAT&&(St=r.RG32F),J===r.HALF_FLOAT&&(St=r.RG16F),J===r.UNSIGNED_BYTE&&(St=r.RG8)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(St=r.RG8UI),J===r.UNSIGNED_SHORT&&(St=r.RG16UI),J===r.UNSIGNED_INT&&(St=r.RG32UI),J===r.BYTE&&(St=r.RG8I),J===r.SHORT&&(St=r.RG16I),J===r.INT&&(St=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(St=r.RGB8UI),J===r.UNSIGNED_SHORT&&(St=r.RGB16UI),J===r.UNSIGNED_INT&&(St=r.RGB32UI),J===r.BYTE&&(St=r.RGB8I),J===r.SHORT&&(St=r.RGB16I),J===r.INT&&(St=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(St=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(St=r.RGBA16UI),J===r.UNSIGNED_INT&&(St=r.RGBA32UI),J===r.BYTE&&(St=r.RGBA8I),J===r.SHORT&&(St=r.RGBA16I),J===r.INT&&(St=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(St=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(St=r.R11F_G11F_B10F)),E===r.RGBA){const Jt=At?pu:ze.getTransfer(Mt);J===r.FLOAT&&(St=r.RGBA32F),J===r.HALF_FLOAT&&(St=r.RGBA16F),J===r.UNSIGNED_BYTE&&(St=Jt===Qe?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(St=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(St=r.RGB5_A1)}return(St===r.R16F||St===r.R32F||St===r.RG16F||St===r.RG32F||St===r.RGBA16F||St===r.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function N(L,E){let J;return L?E===null||E===ma||E===ul?J=r.DEPTH24_STENCIL8:E===ua?J=r.DEPTH32F_STENCIL8:E===cl&&(J=r.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ma||E===ul?J=r.DEPTH_COMPONENT24:E===ua?J=r.DEPTH_COMPONENT32F:E===cl&&(J=r.DEPTH_COMPONENT16),J}function k(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==kn&&L.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),T(E),E.isVideoTexture&&_.delete(E)}function H(L){const E=L.target;E.removeEventListener("dispose",H),at(E)}function T(L){const E=s.get(L);if(E.__webglInit===void 0)return;const J=L.source,Mt=g.get(J);if(Mt){const At=Mt[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&U(L),Object.keys(Mt).length===0&&g.delete(J)}s.remove(L)}function U(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const J=L.source,Mt=g.get(J);delete Mt[E.__cacheKey],d.memory.textures--}function at(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(E.__webglFramebuffer[Mt]))for(let At=0;At<E.__webglFramebuffer[Mt].length;At++)r.deleteFramebuffer(E.__webglFramebuffer[Mt][At]);else r.deleteFramebuffer(E.__webglFramebuffer[Mt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let Mt=0;Mt<E.__webglFramebuffer.length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[Mt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Mt=0;Mt<E.__webglColorRenderbuffer.length;Mt++)E.__webglColorRenderbuffer[Mt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Mt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let Mt=0,At=J.length;Mt<At;Mt++){const St=s.get(J[Mt]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),d.memory.textures--),s.remove(J[Mt])}s.remove(L)}let X=0;function $(){X=0}function it(){const L=X;return L>=l.maxTextures&&ge("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),X+=1,L}function ct(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function et(L,E){const J=s.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const Mt=L.image;if(Mt===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function O(L,E){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){rt(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function G(L,E){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){rt(J,L,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function _t(L,E){const J=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){Rt(J,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const yt={[Ch]:r.REPEAT,[Va]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},Ot={[kn]:r.NEAREST,[uy]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[Ld]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},F={[hy]:r.NEVER,[vy]:r.ALWAYS,[py]:r.LESS,[yp]:r.LEQUAL,[my]:r.EQUAL,[Ep]:r.GEQUAL,[gy]:r.GREATER,[_y]:r.NOTEQUAL};function Q(L,E){if(E.type===ua&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kn||E.magFilter===Ld||E.magFilter===bc||E.magFilter===er||E.minFilter===Kn||E.minFilter===Ld||E.minFilter===bc||E.minFilter===er)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,yt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Ot[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Ot[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==bc&&E.minFilter!==er||E.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Tt(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const Mt=E.source;let At=g.get(Mt);At===void 0&&(At={},g.set(Mt,At));const St=ct(E);if(St!==L.__cacheKey){At[St]===void 0&&(At[St]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,J=!0),At[St].usedTimes++;const Jt=At[L.__cacheKey];Jt!==void 0&&(At[L.__cacheKey].usedTimes--,Jt.usedTimes===0&&U(E)),L.__cacheKey=St,L.__webglTexture=At[St].texture}return J}function Bt(L,E,J){return Math.floor(Math.floor(L/J)/E)}function jt(L,E,J,Mt){const St=L.updateRanges;if(St.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,Mt,E.data);else{St.sort((Dt,Et)=>Dt.start-Et.start);let Jt=0;for(let Dt=1;Dt<St.length;Dt++){const Et=St[Jt],qt=St[Dt],Xt=Et.start+Et.count,Wt=Bt(qt.start,E.width,4),de=Bt(Et.start,E.width,4);qt.start<=Xt+1&&Wt===de&&Bt(qt.start+qt.count-1,E.width,4)===Wt?Et.count=Math.max(Et.count,qt.start+qt.count-Et.start):(++Jt,St[Jt]=qt)}St.length=Jt+1;const Vt=r.getParameter(r.UNPACK_ROW_LENGTH),ae=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,Et=St.length;Dt<Et;Dt++){const qt=St[Dt],Xt=Math.floor(qt.start/4),Wt=Math.ceil(qt.count/4),de=Xt%E.width,K=Math.floor(Xt/E.width),Gt=Wt,Ht=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,de,K,Gt,Ht,J,Mt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Vt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function rt(L,E,J){let Mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Mt=r.TEXTURE_3D);const At=Tt(L,E),St=E.source;i.bindTexture(Mt,L.__webglTexture,r.TEXTURE0+J);const Jt=s.get(St);if(St.version!==Jt.__version||At===!0){i.activeTexture(r.TEXTURE0+J);const Vt=ze.getPrimaries(ze.workingColorSpace),ae=E.colorSpace===Rs?null:ze.getPrimaries(E.colorSpace),oe=E.colorSpace===Rs||Vt===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Dt=D(E.image,!1,l.maxTextureSize);Dt=Te(E,Dt);const Et=c.convert(E.format,E.colorSpace),qt=c.convert(E.type);let Xt=I(E.internalFormat,Et,qt,E.colorSpace,E.isVideoTexture);Q(Mt,E);let Wt;const de=E.mipmaps,K=E.isVideoTexture!==!0,Gt=Jt.__version===void 0||At===!0,Ht=St.dataReady,Zt=k(E,Dt);if(E.isDepthTexture)Xt=N(E.format===nr,E.type),Gt&&(K?i.texStorage2D(r.TEXTURE_2D,1,Xt,Dt.width,Dt.height):i.texImage2D(r.TEXTURE_2D,0,Xt,Dt.width,Dt.height,0,Et,qt,null));else if(E.isDataTexture)if(de.length>0){K&&Gt&&i.texStorage2D(r.TEXTURE_2D,Zt,Xt,de[0].width,de[0].height);for(let Pt=0,vt=de.length;Pt<vt;Pt++)Wt=de[Pt],K?Ht&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,Wt.width,Wt.height,Et,qt,Wt.data):i.texImage2D(r.TEXTURE_2D,Pt,Xt,Wt.width,Wt.height,0,Et,qt,Wt.data);E.generateMipmaps=!1}else K?(Gt&&i.texStorage2D(r.TEXTURE_2D,Zt,Xt,Dt.width,Dt.height),Ht&&jt(E,Dt,Et,qt)):i.texImage2D(r.TEXTURE_2D,0,Xt,Dt.width,Dt.height,0,Et,qt,Dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){K&&Gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Xt,de[0].width,de[0].height,Dt.depth);for(let Pt=0,vt=de.length;Pt<vt;Pt++)if(Wt=de[Pt],E.format!==ta)if(Et!==null)if(K){if(Ht)if(E.layerUpdates.size>0){const Yt=W_(Wt.width,Wt.height,E.format,E.type);for(const ce of E.layerUpdates){const Re=Wt.data.subarray(ce*Yt/Wt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/Wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,ce,Wt.width,Wt.height,1,Et,Re)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,0,Wt.width,Wt.height,Dt.depth,Et,Wt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Pt,Xt,Wt.width,Wt.height,Dt.depth,0,Wt.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Ht&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,0,Wt.width,Wt.height,Dt.depth,Et,qt,Wt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Pt,Xt,Wt.width,Wt.height,Dt.depth,0,Et,qt,Wt.data)}else{K&&Gt&&i.texStorage2D(r.TEXTURE_2D,Zt,Xt,de[0].width,de[0].height);for(let Pt=0,vt=de.length;Pt<vt;Pt++)Wt=de[Pt],E.format!==ta?Et!==null?K?Ht&&i.compressedTexSubImage2D(r.TEXTURE_2D,Pt,0,0,Wt.width,Wt.height,Et,Wt.data):i.compressedTexImage2D(r.TEXTURE_2D,Pt,Xt,Wt.width,Wt.height,0,Wt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Ht&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,Wt.width,Wt.height,Et,qt,Wt.data):i.texImage2D(r.TEXTURE_2D,Pt,Xt,Wt.width,Wt.height,0,Et,qt,Wt.data)}else if(E.isDataArrayTexture)if(K){if(Gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Xt,Dt.width,Dt.height,Dt.depth),Ht)if(E.layerUpdates.size>0){const Pt=W_(Dt.width,Dt.height,E.format,E.type);for(const vt of E.layerUpdates){const Yt=Dt.data.subarray(vt*Pt/Dt.data.BYTES_PER_ELEMENT,(vt+1)*Pt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Dt.width,Dt.height,1,Et,qt,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Et,qt,Dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Dt.width,Dt.height,Dt.depth,0,Et,qt,Dt.data);else if(E.isData3DTexture)K?(Gt&&i.texStorage3D(r.TEXTURE_3D,Zt,Xt,Dt.width,Dt.height,Dt.depth),Ht&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Et,qt,Dt.data)):i.texImage3D(r.TEXTURE_3D,0,Xt,Dt.width,Dt.height,Dt.depth,0,Et,qt,Dt.data);else if(E.isFramebufferTexture){if(Gt)if(K)i.texStorage2D(r.TEXTURE_2D,Zt,Xt,Dt.width,Dt.height);else{let Pt=Dt.width,vt=Dt.height;for(let Yt=0;Yt<Zt;Yt++)i.texImage2D(r.TEXTURE_2D,Yt,Xt,Pt,vt,0,Et,qt,null),Pt>>=1,vt>>=1}}else if(de.length>0){if(K&&Gt){const Pt=te(de[0]);i.texStorage2D(r.TEXTURE_2D,Zt,Xt,Pt.width,Pt.height)}for(let Pt=0,vt=de.length;Pt<vt;Pt++)Wt=de[Pt],K?Ht&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,Et,qt,Wt):i.texImage2D(r.TEXTURE_2D,Pt,Xt,Et,qt,Wt);E.generateMipmaps=!1}else if(K){if(Gt){const Pt=te(Dt);i.texStorage2D(r.TEXTURE_2D,Zt,Xt,Pt.width,Pt.height)}Ht&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,qt,Dt)}else i.texImage2D(r.TEXTURE_2D,0,Xt,Et,qt,Dt);S(E)&&x(Mt),Jt.__version=St.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Rt(L,E,J){if(E.image.length!==6)return;const Mt=Tt(L,E),At=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const St=s.get(At);if(At.version!==St.__version||Mt===!0){i.activeTexture(r.TEXTURE0+J);const Jt=ze.getPrimaries(ze.workingColorSpace),Vt=E.colorSpace===Rs?null:ze.getPrimaries(E.colorSpace),ae=E.colorSpace===Rs||Jt===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!oe&&!Dt?Et[vt]=D(E.image[vt],!0,l.maxCubemapSize):Et[vt]=Dt?E.image[vt].image:E.image[vt],Et[vt]=Te(E,Et[vt]);const qt=Et[0],Xt=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type),de=I(E.internalFormat,Xt,Wt,E.colorSpace),K=E.isVideoTexture!==!0,Gt=St.__version===void 0||Mt===!0,Ht=At.dataReady;let Zt=k(E,qt);Q(r.TEXTURE_CUBE_MAP,E);let Pt;if(oe){K&&Gt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,de,qt.width,qt.height);for(let vt=0;vt<6;vt++){Pt=Et[vt].mipmaps;for(let Yt=0;Yt<Pt.length;Yt++){const ce=Pt[Yt];E.format!==ta?Xt!==null?K?Ht&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,ce.width,ce.height,Xt,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,de,ce.width,ce.height,0,ce.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,ce.width,ce.height,Xt,Wt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,de,ce.width,ce.height,0,Xt,Wt,ce.data)}}}else{if(Pt=E.mipmaps,K&&Gt){Pt.length>0&&Zt++;const vt=te(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,de,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Dt){K?Ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Xt,Wt,Et[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,de,Et[vt].width,Et[vt].height,0,Xt,Wt,Et[vt].data);for(let Yt=0;Yt<Pt.length;Yt++){const Re=Pt[Yt].image[vt].image;K?Ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Re.width,Re.height,Xt,Wt,Re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,de,Re.width,Re.height,0,Xt,Wt,Re.data)}}else{K?Ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt,Wt,Et[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,de,Xt,Wt,Et[vt]);for(let Yt=0;Yt<Pt.length;Yt++){const ce=Pt[Yt];K?Ht&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Xt,Wt,ce.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,de,Xt,Wt,ce.image[vt])}}}S(E)&&x(r.TEXTURE_CUBE_MAP),St.__version=At.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ut(L,E,J,Mt,At,St){const Jt=c.convert(J.format,J.colorSpace),Vt=c.convert(J.type),ae=I(J.internalFormat,Jt,Vt,J.colorSpace),oe=s.get(E),Dt=s.get(J);if(Dt.__renderTarget=E,!oe.__hasExternalTextures){const Et=Math.max(1,E.width>>St),qt=Math.max(1,E.height>>St);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,St,ae,Et,qt,E.depth,0,Jt,Vt,null):i.texImage2D(At,St,ae,Et,qt,0,Jt,Vt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,At,Dt.__webglTexture,0,V(E)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Mt,At,Dt.__webglTexture,St),i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(L,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const Mt=E.depthTexture,At=Mt&&Mt.isDepthTexture?Mt.type:null,St=N(E.stencilBuffer,At),Jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),St,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),St,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,St,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,L)}else{const Mt=E.textures;for(let At=0;At<Mt.length;At++){const St=Mt[At],Jt=c.convert(St.format,St.colorSpace),Vt=c.convert(St.type),ae=I(St.internalFormat,Jt,Vt,St.colorSpace);qe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ae,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ae,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(L,E,J){const Mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Mt){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),Q(r.TEXTURE_CUBE_MAP,E.depthTexture);const oe=c.convert(E.depthTexture.format),Dt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===qa?Et=r.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(Et=r.DEPTH24_STENCIL8);for(let qt=0;qt<6;qt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+qt,0,Et,E.width,E.height,0,oe,Dt,null)}}else et(E.depthTexture,0);const St=At.__webglTexture,Jt=V(E),Vt=Mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ae=E.depthTexture.format===nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===qa)qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,Vt,St,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,ae,Vt,St,0);else if(E.depthTexture.format===nr)qe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,Vt,St,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,ae,Vt,St,0);else throw new Error("Unknown depthTexture format")}function ee(L){const E=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Mt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Mt){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Mt.removeEventListener("dispose",At)};Mt.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=Mt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let Mt=0;Mt<6;Mt++)Qt(E.__webglFramebuffer[Mt],L,Mt);else{const Mt=L.texture.mipmaps;Mt&&Mt.length>0?Qt(E.__webglFramebuffer[0],L,0):Qt(E.__webglFramebuffer,L,0)}else if(J){E.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Mt]),E.__webglDepthbuffer[Mt]===void 0)E.__webglDepthbuffer[Mt]=r.createRenderbuffer(),zt(E.__webglDepthbuffer[Mt],L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer[Mt];r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,St)}}else{const Mt=L.texture.mipmaps;if(Mt&&Mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),zt(E.__webglDepthbuffer,L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,St)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function nn(L,E,J){const Mt=s.get(L);E!==void 0&&Ut(Mt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ee(L)}function _e(L){const E=L.texture,J=s.get(L),Mt=s.get(E);L.addEventListener("dispose",H);const At=L.textures,St=L.isWebGLCubeRenderTarget===!0,Jt=At.length>1;if(Jt||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture()),Mt.__version=E.version,d.memory.textures++),St){J.__webglFramebuffer=[];for(let Vt=0;Vt<6;Vt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Vt]=[];for(let ae=0;ae<E.mipmaps.length;ae++)J.__webglFramebuffer[Vt][ae]=r.createFramebuffer()}else J.__webglFramebuffer[Vt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Vt=0;Vt<E.mipmaps.length;Vt++)J.__webglFramebuffer[Vt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let Vt=0,ae=At.length;Vt<ae;Vt++){const oe=s.get(At[Vt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&qe(L)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Vt=0;Vt<At.length;Vt++){const ae=At[Vt];J.__webglColorRenderbuffer[Vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Vt]);const oe=c.convert(ae.format,ae.colorSpace),Dt=c.convert(ae.type),Et=I(ae.internalFormat,oe,Dt,ae.colorSpace,L.isXRRenderTarget===!0),qt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Et,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,J.__webglColorRenderbuffer[Vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(St){i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),Q(r.TEXTURE_CUBE_MAP,E);for(let Vt=0;Vt<6;Vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Ut(J.__webglFramebuffer[Vt][ae],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,ae);else Ut(J.__webglFramebuffer[Vt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0);S(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Vt=0,ae=At.length;Vt<ae;Vt++){const oe=At[Vt],Dt=s.get(oe);let Et=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,Dt.__webglTexture),Q(Et,oe),Ut(J.__webglFramebuffer,L,oe,r.COLOR_ATTACHMENT0+Vt,Et,0),S(oe)&&x(Et)}i.unbindTexture()}else{let Vt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Vt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Vt,Mt.__webglTexture),Q(Vt,E),E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Ut(J.__webglFramebuffer[ae],L,E,r.COLOR_ATTACHMENT0,Vt,ae);else Ut(J.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Vt,0);S(E)&&x(Vt),i.unbindTexture()}L.depthBuffer&&ee(L)}function xe(L){const E=L.textures;for(let J=0,Mt=E.length;J<Mt;J++){const At=E[J];if(S(At)){const St=C(L),Jt=s.get(At).__webglTexture;i.bindTexture(St,Jt),x(St),i.unbindTexture()}}}const Ce=[],he=[];function Be(L){if(L.samples>0){if(qe(L)===!1){const E=L.textures,J=L.width,Mt=L.height;let At=r.COLOR_BUFFER_BIT;const St=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=s.get(L),Vt=E.length>1;if(Vt)for(let oe=0;oe<E.length;oe++)i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const ae=L.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Dt=s.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,J,Mt,0,0,J,Mt,At,r.NEAREST),m===!0&&(Ce.length=0,he.length=0,Ce.push(r.COLOR_ATTACHMENT0+oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(St),he.push(St),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Vt)for(let oe=0;oe<E.length;oe++){i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Dt=s.get(E[oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Dt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function qe(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(L){const E=d.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Te(L,E){const J=L.colorSpace,Mt=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==io&&J!==Rs&&(ze.getTransfer(J)===Qe?(Mt!==ta||At!==wi)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",J)),E}function te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=it,this.resetTextureUnits=$,this.setTexture2D=et,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=_t,this.rebindTextures=nn,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function WA(r,e){function i(s,l=Rs){let c;const d=ze.getTransfer(l);if(s===wi)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Zv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===qv)return r.BYTE;if(s===Yv)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===ma)return r.UNSIGNED_INT;if(s===ua)return r.FLOAT;if(s===Wa)return r.HALF_FLOAT;if(s===Kv)return r.ALPHA;if(s===Qv)return r.RGB;if(s===ta)return r.RGBA;if(s===qa)return r.DEPTH_COMPONENT;if(s===nr)return r.DEPTH_STENCIL;if(s===Jv)return r.RED;if(s===xp)return r.RED_INTEGER;if(s===no)return r.RG;if(s===Mp)return r.RG_INTEGER;if(s===Sp)return r.RGBA_INTEGER;if(s===su||s===ru||s===ou||s===lu)if(d===Qe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dh||s===Uh||s===Nh||s===Lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oh||s===Ph||s===Ih||s===Fh||s===Bh||s===zh||s===Hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Oh||s===Ph)return d===Qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ih)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fh)return c.COMPRESSED_R11_EAC;if(s===Bh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zh)return c.COMPRESSED_RG11_EAC;if(s===Hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===np||s===ip)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return d===Qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ap||s===sp||s===rp||s===op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new lx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new _a({vertexShader:qA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new je(new ir(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends so{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,M=null,g=null,y=null,b=null;const D=typeof XRWebGLBinding<"u",S=new jA,x={},C=i.getContextAttributes();let I=null,N=null;const k=[],z=[],H=new We;let T=null;const U=new Vi;U.viewport=new mn;const at=new Vi;at.viewport=new mn;const X=[U,at],$=new oE;let it=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let Rt=k[rt];return Rt===void 0&&(Rt=new Gd,k[rt]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(rt){let Rt=k[rt];return Rt===void 0&&(Rt=new Gd,k[rt]=Rt),Rt.getGripSpace()},this.getHand=function(rt){let Rt=k[rt];return Rt===void 0&&(Rt=new Gd,k[rt]=Rt),Rt.getHandSpace()};function et(rt){const Rt=z.indexOf(rt.inputSource);if(Rt===-1)return;const Ut=k[Rt];Ut!==void 0&&(Ut.update(rt.inputSource,rt.frame,h||d),Ut.dispatchEvent({type:rt.type,data:rt.inputSource}))}function O(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let rt=0;rt<k.length;rt++){const Rt=z[rt];Rt!==null&&(z[rt]=null,k[rt].disconnect(Rt))}it=null,ct=null,S.reset();for(const rt in x)delete x[rt];e.setRenderTarget(I),y=null,g=null,M=null,l=null,N=null,jt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){p=rt,s.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return M===null&&D&&(M=new XRWebGLBinding(l,i)),M},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(H),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,zt=null,Qt=null;C.depth&&(Qt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=C.stencil?nr:qa,zt=C.stencil?ul:ma);const ee={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:c};M=this.getBinding(),g=M.createProjectionLayer(ee),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ha(g.textureWidth,g.textureHeight,{format:ta,type:wi,depthTexture:new dl(g.textureWidth,g.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ut={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ha(y.framebufferWidth,y.framebufferHeight,{format:ta,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),jt.setContext(l),jt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(rt){for(let Rt=0;Rt<rt.removed.length;Rt++){const Ut=rt.removed[Rt],zt=z.indexOf(Ut);zt>=0&&(z[zt]=null,k[zt].disconnect(Ut))}for(let Rt=0;Rt<rt.added.length;Rt++){const Ut=rt.added[Rt];let zt=z.indexOf(Ut);if(zt===-1){for(let ee=0;ee<k.length;ee++)if(ee>=z.length){z.push(Ut),zt=ee;break}else if(z[ee]===null){z[ee]=Ut,zt=ee;break}if(zt===-1)break}const Qt=k[zt];Qt&&Qt.connect(Ut)}}const _t=new ft,yt=new ft;function Ot(rt,Rt,Ut){_t.setFromMatrixPosition(Rt.matrixWorld),yt.setFromMatrixPosition(Ut.matrixWorld);const zt=_t.distanceTo(yt),Qt=Rt.projectionMatrix.elements,ee=Ut.projectionMatrix.elements,nn=Qt[14]/(Qt[10]-1),_e=Qt[14]/(Qt[10]+1),xe=(Qt[9]+1)/Qt[5],Ce=(Qt[9]-1)/Qt[5],he=(Qt[8]-1)/Qt[0],Be=(ee[8]+1)/ee[0],V=nn*he,qe=nn*Be,be=zt/(-he+Be),Te=be*-he;if(Rt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Te),rt.translateZ(be),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Qt[10]===-1)rt.projectionMatrix.copy(Rt.projectionMatrix),rt.projectionMatrixInverse.copy(Rt.projectionMatrixInverse);else{const te=nn+be,L=_e+be,E=V-Te,J=qe+(zt-Te),Mt=xe*_e/L*te,At=Ce*_e/L*te;rt.projectionMatrix.makePerspective(E,J,Mt,At,te,L),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function F(rt,Rt){Rt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(Rt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let Rt=rt.near,Ut=rt.far;S.texture!==null&&(S.depthNear>0&&(Rt=S.depthNear),S.depthFar>0&&(Ut=S.depthFar)),$.near=at.near=U.near=Rt,$.far=at.far=U.far=Ut,(it!==$.near||ct!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),it=$.near,ct=$.far),$.layers.mask=rt.layers.mask|6,U.layers.mask=$.layers.mask&-5,at.layers.mask=$.layers.mask&-3;const zt=rt.parent,Qt=$.cameras;F($,zt);for(let ee=0;ee<Qt.length;ee++)F(Qt[ee],zt);Qt.length===2?Ot($,U,at):$.projectionMatrix.copy(U.projectionMatrix),Q(rt,$,zt)};function Q(rt,Rt,Ut){Ut===null?rt.matrix.copy(Rt.matrixWorld):(rt.matrix.copy(Ut.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(Rt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(Rt.projectionMatrix),rt.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=lp*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(rt){m=rt,g!==null&&(g.fixedFoveation=rt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=rt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(rt){return x[rt]};let Tt=null;function Bt(rt,Rt){if(_=Rt.getViewerPose(h||d),b=Rt,_!==null){const Ut=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let zt=!1;Ut.length!==$.cameras.length&&($.cameras.length=0,zt=!0);for(let _e=0;_e<Ut.length;_e++){const xe=Ut[_e];let Ce=null;if(y!==null)Ce=y.getViewport(xe);else{const Be=M.getViewSubImage(g,xe);Ce=Be.viewport,_e===0&&(e.setRenderTargetTextures(N,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(N))}let he=X[_e];he===void 0&&(he=new Vi,he.layers.enable(_e),he.viewport=new mn,X[_e]=he),he.matrix.fromArray(xe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(xe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),_e===0&&($.matrix.copy(he.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),zt===!0&&$.cameras.push(he)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){M=s.getBinding();const _e=M.getDepthInformation(Ut[0]);_e&&_e.isValid&&_e.texture&&S.init(_e,l.renderState)}if(Qt&&Qt.includes("camera-access")&&D){e.state.unbindTexture(),M=s.getBinding();for(let _e=0;_e<Ut.length;_e++){const xe=Ut[_e].camera;if(xe){let Ce=x[xe];Ce||(Ce=new lx,x[xe]=Ce);const he=M.getCameraImage(xe);Ce.sourceTexture=he}}}}for(let Ut=0;Ut<k.length;Ut++){const zt=z[Ut],Qt=k[Ut];zt!==null&&Qt!==void 0&&Qt.update(zt,Rt,h||d)}Tt&&Tt(rt,Rt),Rt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Rt}),b=null}const jt=new dx;jt.setAnimationLoop(Bt),this.setAnimationLoop=function(rt){Tt=rt},this.dispose=function(){}}}const Qs=new ga,KA=new gn;function QA(r,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,cx(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,C,I,N){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),M(S,x)):x.isMeshPhongMaterial?(c(S,x),_(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,N)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),D(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,C,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===pi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===pi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const C=e.get(x),I=C.envMap,N=C.envMapRotation;I&&(S.envMap.value=I,Qs.copy(N),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),S.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Qs)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,C,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*C,S.scale.value=I*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function M(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,C){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function D(S,x){const C=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function JA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const N=I.program;s.uniformBlockBinding(C,N)}function h(C,I){let N=l[C.id];N===void 0&&(b(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",S));const k=I.program;s.updateUBOMapping(C,k);const z=e.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const I=M();C.__bindingPointIndex=I;const N=r.createBuffer(),k=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,k,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function M(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=l[C.id],N=C.uniforms,k=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let z=0,H=N.length;z<H;z++){const T=Array.isArray(N[z])?N[z]:[N[z]];for(let U=0,at=T.length;U<at;U++){const X=T[U];if(y(X,z,U,k)===!0){const $=X.__offset,it=Array.isArray(X.value)?X.value:[X.value];let ct=0;for(let et=0;et<it.length;et++){const O=it[et],G=D(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,$+ct,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,ct),ct+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,I,N,k){const z=C.value,H=I+"_"+N;if(k[H]===void 0)return typeof z=="number"||typeof z=="boolean"?k[H]=z:k[H]=z.clone(),!0;{const T=k[H];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return k[H]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function b(C){const I=C.uniforms;let N=0;const k=16;for(let H=0,T=I.length;H<T;H++){const U=Array.isArray(I[H])?I[H]:[I[H]];for(let at=0,X=U.length;at<X;at++){const $=U[at],it=Array.isArray($.value)?$.value:[$.value];for(let ct=0,et=it.length;ct<et;ct++){const O=it[ct],G=D(O),_t=N%k,yt=_t%G.boundary,Ot=_t+yt;N+=yt,Ot!==0&&k-Ot<G.storage&&(N+=k-Ot),$.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=G.storage}}}const z=N%k;return z>0&&(N+=k-z),C.__size=N,C.__cache={},this}function D(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ge("WebGLRenderer: Unsupported uniform value type.",C),I}function S(C){const I=C.target;I.removeEventListener("dispose",S);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function x(){for(const C in l)r.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const $A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function t2(){return ra===null&&(ra=new Xy($A,16,16,no,Wa),ra.name="DFG_LUT",ra.minFilter=Kn,ra.magFilter=Kn,ra.wrapS=Va,ra.wrapT=Va,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class e2{constructor(e={}){const{canvas:i=My(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:y=wi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const D=y,S=new Set([Sp,Mp,xp]),x=new Set([wi,ma,cl,ul,_p,vp]),C=new Uint32Array(4),I=new Int32Array(4);let N=null,k=null;const z=[],H=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let at=!1;this._outputColorSpace=Gi;let X=0,$=0,it=null,ct=-1,et=null;const O=new mn,G=new mn;let _t=null;const yt=new He(0);let Ot=0,F=i.width,Q=i.height,Tt=1,Bt=null,jt=null;const rt=new mn(0,0,F,Q),Rt=new mn(0,0,F,Q);let Ut=!1;const zt=new Rp;let Qt=!1,ee=!1;const nn=new gn,_e=new ft,xe=new mn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Be(){return it===null?Tt:1}let V=s;function qe(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Re,!1),V===null){const Z="webgl2";if(V=qe(Z,A),V===null)throw qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xe("WebGLRenderer: "+A.message),A}let be,Te,te,L,E,J,Mt,At,St,Jt,Vt,ae,oe,Dt,Et,qt,Xt,Wt,de,K,Gt,Ht,Zt;function Pt(){be=new e1(V),be.init(),Gt=new WA(V,be),Te=new YT(V,be,e,Gt),te=new kA(V,be),Te.reversedDepthBuffer&&g&&te.buffers.depth.setReversed(!0),L=new a1(V),E=new wA,J=new XA(V,be,te,E,Te,Gt,L),Mt=new t1(U),At=new cE(V),Ht=new WT(V,At),St=new n1(V,At,L,Ht),Jt=new r1(V,St,At,Ht,L),Wt=new s1(V,Te,J),Et=new jT(E),Vt=new CA(U,Mt,be,Te,Ht,Et),ae=new QA(U,E),oe=new UA,Dt=new FA(be),Xt=new XT(U,Mt,te,Jt,b,m),qt=new VA(U,Jt,Te),Zt=new JA(V,L,Te,te),de=new qT(V,be,L),K=new i1(V,be,L),L.programs=Vt.programs,U.capabilities=Te,U.extensions=be,U.properties=E,U.renderLists=oe,U.shadowMap=qt,U.state=te,U.info=L}Pt(),D!==wi&&(T=new l1(D,i.width,i.height,l,c));const vt=new ZA(U,V);this.xr=vt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(A){A!==void 0&&(Tt=A,this.setSize(F,Q,!1))},this.getSize=function(A){return A.set(F,Q)},this.setSize=function(A,Z,mt=!0){if(vt.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,Q=Z,i.width=Math.floor(A*Tt),i.height=Math.floor(Z*Tt),mt===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(F*Tt,Q*Tt).floor()},this.setDrawingBufferSize=function(A,Z,mt){F=A,Q=Z,Tt=mt,i.width=Math.floor(A*mt),i.height=Math.floor(Z*mt),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(D===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,Z,mt,st){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,Z,mt,st),te.viewport(O.copy(rt).multiplyScalar(Tt).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,Z,mt,st){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,Z,mt,st),te.scissor(G.copy(Rt).multiplyScalar(Tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){te.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){Bt=A},this.setTransparentSort=function(A){jt=A},this.getClearColor=function(A){return A.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,mt=!0){let st=0;if(A){let P=!1;if(it!==null){const ut=it.texture.format;P=S.has(ut)}if(P){const ut=it.texture.type,gt=x.has(ut),w=Xt.getClearColor(),B=Xt.getClearAlpha(),q=w.r,nt=w.g,dt=w.b;gt?(C[0]=q,C[1]=nt,C[2]=dt,C[3]=B,V.clearBufferuiv(V.COLOR,0,C)):(I[0]=q,I[1]=nt,I[2]=dt,I[3]=B,V.clearBufferiv(V.COLOR,0,I))}else st|=V.COLOR_BUFFER_BIT}Z&&(st|=V.DEPTH_BUFFER_BIT),mt&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Xt.dispose(),oe.dispose(),Dt.dispose(),E.dispose(),Mt.dispose(),Jt.dispose(),Ht.dispose(),Zt.dispose(),Vt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$n),vt.removeEventListener("sessionend",In),Xn.stop()};function Yt(A){A.preventDefault(),A_("WebGLRenderer: Context Lost."),at=!0}function ce(){A_("WebGLRenderer: Context Restored."),at=!1;const A=L.autoReset,Z=qt.enabled,mt=qt.autoUpdate,st=qt.needsUpdate,P=qt.type;Pt(),L.autoReset=A,qt.enabled=Z,qt.autoUpdate=mt,qt.needsUpdate=st,qt.type=P}function Re(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const Z=A.target;Z.removeEventListener("dispose",Ae),_n(Z)}function _n(A){Pn(A),E.remove(A)}function Pn(A){const Z=E.get(A).programs;Z!==void 0&&(Z.forEach(function(mt){Vt.releaseProgram(mt)}),A.isShaderMaterial&&Vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,mt,st,P,ut){Z===null&&(Z=Ce);const gt=P.isMesh&&P.matrixWorld.determinant()<0,w=va(A,Z,mt,st,P);te.setMaterial(st,gt);let B=mt.index,q=1;if(st.wireframe===!0){if(B=St.getWireframeAttribute(mt),B===void 0)return;q=2}const nt=mt.drawRange,dt=mt.attributes.position;let Y=nt.start*q,It=(nt.start+nt.count)*q;ut!==null&&(Y=Math.max(Y,ut.start*q),It=Math.min(It,(ut.start+ut.count)*q)),B!==null?(Y=Math.max(Y,0),It=Math.min(It,B.count)):dt!=null&&(Y=Math.max(Y,0),It=Math.min(It,dt.count));const $t=It-Y;if($t<0||$t===1/0)return;Ht.setup(P,st,w,mt,B);let ue,ne=de;if(B!==null&&(ue=At.get(B),ne=K,ne.setIndex(ue)),P.isMesh)st.wireframe===!0?(te.setLineWidth(st.wireframeLinewidth*Be()),ne.setMode(V.LINES)):ne.setMode(V.TRIANGLES);else if(P.isLine){let kt=st.linewidth;kt===void 0&&(kt=1),te.setLineWidth(kt*Be()),P.isLineSegments?ne.setMode(V.LINES):P.isLineLoop?ne.setMode(V.LINE_LOOP):ne.setMode(V.LINE_STRIP)}else P.isPoints?ne.setMode(V.POINTS):P.isSprite&&ne.setMode(V.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))ne.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const kt=P._multiDrawStarts,Lt=P._multiDrawCounts,pe=P._multiDrawCount,Nt=B?At.get(B).bytesPerElement:1,re=E.get(st).currentProgram.getUniforms();for(let Fe=0;Fe<pe;Fe++)re.setValue(V,"_gl_DrawID",Fe),ne.render(kt[Fe]/Nt,Lt[Fe])}else if(P.isInstancedMesh)ne.renderInstances(Y,$t,P.count);else if(mt.isInstancedBufferGeometry){const kt=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Lt=Math.min(mt.instanceCount,kt);ne.renderInstances(Y,$t,Lt)}else ne.render(Y,$t)};function Dn(A,Z,mt){A.transparent===!0&&A.side===Ga&&A.forceSinglePass===!1?(A.side=pi,A.needsUpdate=!0,An(A,Z,mt),A.side=ws,A.needsUpdate=!0,An(A,Z,mt),A.side=Ga):An(A,Z,mt)}this.compile=function(A,Z,mt=null){mt===null&&(mt=A),k=Dt.get(mt),k.init(Z),H.push(k),mt.traverseVisible(function(P){P.isLight&&P.layers.test(Z.layers)&&(k.pushLight(P),P.castShadow&&k.pushShadow(P))}),A!==mt&&A.traverseVisible(function(P){P.isLight&&P.layers.test(Z.layers)&&(k.pushLight(P),P.castShadow&&k.pushShadow(P))}),k.setupLights();const st=new Set;return A.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const ut=P.material;if(ut)if(Array.isArray(ut))for(let gt=0;gt<ut.length;gt++){const w=ut[gt];Dn(w,mt,P),st.add(w)}else Dn(ut,mt,P),st.add(ut)}),k=H.pop(),st},this.compileAsync=function(A,Z,mt=null){const st=this.compile(A,Z,mt);return new Promise(P=>{function ut(){if(st.forEach(function(gt){E.get(gt).currentProgram.isReady()&&st.delete(gt)}),st.size===0){P(A);return}setTimeout(ut,10)}be.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Jn=null;function mi(A){Jn&&Jn(A)}function $n(){Xn.stop()}function In(){Xn.start()}const Xn=new dx;Xn.setAnimationLoop(mi),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Jn=A,vt.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},vt.addEventListener("sessionstart",$n),vt.addEventListener("sessionend",In),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(at===!0)return;const mt=vt.enabled===!0&&vt.isPresenting===!0,st=T!==null&&(it===null||mt)&&T.begin(U,it);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Z),Z=vt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Z,it),k=Dt.get(A,H.length),k.init(Z),H.push(k),nn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),zt.setFromProjectionMatrix(nn,fa,Z.reversedDepth),ee=this.localClippingEnabled,Qt=Et.init(this.clippingPlanes,ee),N=oe.get(A,z.length),N.init(),z.push(N),vt.enabled===!0&&vt.isPresenting===!0){const gt=U.xr.getDepthSensingMesh();gt!==null&&gi(gt,Z,-1/0,U.sortObjects)}gi(A,Z,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(Bt,jt),he=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,he&&Xt.addToRenderList(N,A),this.info.render.frame++,Qt===!0&&Et.beginShadows();const P=k.state.shadowsArray;if(qt.render(P,A,Z),Qt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const gt=N.opaque,w=N.transmissive;if(k.setupLights(),Z.isArrayCamera){const B=Z.cameras;if(w.length>0)for(let q=0,nt=B.length;q<nt;q++){const dt=B[q];rn(gt,w,A,dt)}he&&Xt.render(A);for(let q=0,nt=B.length;q<nt;q++){const dt=B[q];fn(N,A,dt,dt.viewport)}}else w.length>0&&rn(gt,w,A,Z),he&&Xt.render(A),fn(N,A,Z)}it!==null&&$===0&&(J.updateMultisampleRenderTarget(it),J.updateRenderTargetMipmap(it)),st&&T.end(U),A.isScene===!0&&A.onAfterRender(U,A,Z),Ht.resetDefaultState(),ct=-1,et=null,H.pop(),H.length>0?(k=H[H.length-1],Qt===!0&&Et.setGlobalState(U.clippingPlanes,k.state.camera)):k=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function gi(A,Z,mt,st){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)mt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)k.pushLight(A),A.castShadow&&k.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){st&&xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nn);const gt=Jt.update(A),w=A.material;w.visible&&N.push(A,gt,w,mt,xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const gt=Jt.update(A),w=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xe.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),xe.copy(gt.boundingSphere.center)),xe.applyMatrix4(A.matrixWorld).applyMatrix4(nn)),Array.isArray(w)){const B=gt.groups;for(let q=0,nt=B.length;q<nt;q++){const dt=B[q],Y=w[dt.materialIndex];Y&&Y.visible&&N.push(A,gt,Y,mt,xe.z,dt)}}else w.visible&&N.push(A,gt,w,mt,xe.z,null)}}const ut=A.children;for(let gt=0,w=ut.length;gt<w;gt++)gi(ut[gt],Z,mt,st)}function fn(A,Z,mt,st){const{opaque:P,transmissive:ut,transparent:gt}=A;k.setupLightsView(mt),Qt===!0&&Et.setGlobalState(U.clippingPlanes,mt),st&&te.viewport(O.copy(st)),P.length>0&&an(P,Z,mt),ut.length>0&&an(ut,Z,mt),gt.length>0&&an(gt,Z,mt),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function rn(A,Z,mt,st){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[st.id]===void 0){const Y=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[st.id]=new ha(1,1,{generateMipmaps:!0,type:Y?Wa:wi,minFilter:er,samples:Te.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const ut=k.state.transmissionRenderTarget[st.id],gt=st.viewport||O;ut.setSize(gt.z*U.transmissionResolutionScale,gt.w*U.transmissionResolutionScale);const w=U.getRenderTarget(),B=U.getActiveCubeFace(),q=U.getActiveMipmapLevel();U.setRenderTarget(ut),U.getClearColor(yt),Ot=U.getClearAlpha(),Ot<1&&U.setClearColor(16777215,.5),U.clear(),he&&Xt.render(mt);const nt=U.toneMapping;U.toneMapping=da;const dt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),k.setupLightsView(st),Qt===!0&&Et.setGlobalState(U.clippingPlanes,st),an(A,mt,st),J.updateMultisampleRenderTarget(ut),J.updateRenderTargetMipmap(ut),be.has("WEBGL_multisampled_render_to_texture")===!1){let Y=!1;for(let It=0,$t=Z.length;It<$t;It++){const ue=Z[It],{object:ne,geometry:kt,material:Lt,group:pe}=ue;if(Lt.side===Ga&&ne.layers.test(st.layers)){const Nt=Lt.side;Lt.side=pi,Lt.needsUpdate=!0,Fn(ne,mt,st,kt,Lt,pe),Lt.side=Nt,Lt.needsUpdate=!0,Y=!0}}Y===!0&&(J.updateMultisampleRenderTarget(ut),J.updateRenderTargetMipmap(ut))}U.setRenderTarget(w,B,q),U.setClearColor(yt,Ot),dt!==void 0&&(st.viewport=dt),U.toneMapping=nt}function an(A,Z,mt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let P=0,ut=A.length;P<ut;P++){const gt=A[P],{object:w,geometry:B,group:q}=gt;let nt=gt.material;nt.allowOverride===!0&&st!==null&&(nt=st),w.layers.test(mt.layers)&&Fn(w,Z,mt,B,nt,q)}}function Fn(A,Z,mt,st,P,ut){A.onBeforeRender(U,Z,mt,st,P,ut),A.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),P.onBeforeRender(U,Z,mt,st,A,ut),P.transparent===!0&&P.side===Ga&&P.forceSinglePass===!1?(P.side=pi,P.needsUpdate=!0,U.renderBufferDirect(mt,Z,st,P,A,ut),P.side=ws,P.needsUpdate=!0,U.renderBufferDirect(mt,Z,st,P,A,ut),P.side=Ga):U.renderBufferDirect(mt,Z,st,P,A,ut),A.onAfterRender(U,Z,mt,st,P,ut)}function An(A,Z,mt){Z.isScene!==!0&&(Z=Ce);const st=E.get(A),P=k.state.lights,ut=k.state.shadowsArray,gt=P.state.version,w=Vt.getParameters(A,P.state,ut,Z,mt),B=Vt.getProgramCacheKey(w);let q=st.programs;st.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,st.fog=Z.fog;const nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;st.envMap=Mt.get(A.envMap||st.environment,nt),st.envMapRotation=st.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,q===void 0&&(A.addEventListener("dispose",Ae),q=new Map,st.programs=q);let dt=q.get(B);if(dt!==void 0){if(st.currentProgram===dt&&st.lightsStateVersion===gt)return _i(A,w),dt}else w.uniforms=Vt.getUniforms(A),A.onBeforeCompile(w,U),dt=Vt.acquireProgram(w,B),q.set(B,dt),st.uniforms=w.uniforms;const Y=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Y.clippingPlanes=Et.uniform),_i(A,w),st.needsLights=Di(A),st.lightsStateVersion=gt,st.needsLights&&(Y.ambientLightColor.value=P.state.ambient,Y.lightProbe.value=P.state.probe,Y.directionalLights.value=P.state.directional,Y.directionalLightShadows.value=P.state.directionalShadow,Y.spotLights.value=P.state.spot,Y.spotLightShadows.value=P.state.spotShadow,Y.rectAreaLights.value=P.state.rectArea,Y.ltc_1.value=P.state.rectAreaLTC1,Y.ltc_2.value=P.state.rectAreaLTC2,Y.pointLights.value=P.state.point,Y.pointLightShadows.value=P.state.pointShadow,Y.hemisphereLights.value=P.state.hemi,Y.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Y.spotLightMatrix.value=P.state.spotLightMatrix,Y.spotLightMap.value=P.state.spotLightMap,Y.pointShadowMatrix.value=P.state.pointShadowMatrix),st.currentProgram=dt,st.uniformsList=null,dt}function Xi(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=cu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function _i(A,Z){const mt=E.get(A);mt.outputColorSpace=Z.outputColorSpace,mt.batching=Z.batching,mt.batchingColor=Z.batchingColor,mt.instancing=Z.instancing,mt.instancingColor=Z.instancingColor,mt.instancingMorph=Z.instancingMorph,mt.skinning=Z.skinning,mt.morphTargets=Z.morphTargets,mt.morphNormals=Z.morphNormals,mt.morphColors=Z.morphColors,mt.morphTargetsCount=Z.morphTargetsCount,mt.numClippingPlanes=Z.numClippingPlanes,mt.numIntersection=Z.numClipIntersection,mt.vertexAlphas=Z.vertexAlphas,mt.vertexTangents=Z.vertexTangents,mt.toneMapping=Z.toneMapping}function va(A,Z,mt,st,P){Z.isScene!==!0&&(Z=Ce),J.resetTextureUnits();const ut=Z.fog,gt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?Z.environment:null,w=it===null?U.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:io,B=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,q=Mt.get(st.envMap||gt,B),nt=st.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,dt=!!mt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Y=!!mt.morphAttributes.position,It=!!mt.morphAttributes.normal,$t=!!mt.morphAttributes.color;let ue=da;st.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=U.toneMapping);const ne=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,kt=ne!==void 0?ne.length:0,Lt=E.get(st),pe=k.state.lights;if(Qt===!0&&(ee===!0||A!==et)){const dn=A===et&&st.id===ct;Et.setState(st,A,dn)}let Nt=!1;st.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==pe.state.version||Lt.outputColorSpace!==w||P.isBatchedMesh&&Lt.batching===!1||!P.isBatchedMesh&&Lt.batching===!0||P.isBatchedMesh&&Lt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Lt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Lt.instancing===!1||!P.isInstancedMesh&&Lt.instancing===!0||P.isSkinnedMesh&&Lt.skinning===!1||!P.isSkinnedMesh&&Lt.skinning===!0||P.isInstancedMesh&&Lt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Lt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Lt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Lt.instancingMorph===!1&&P.morphTexture!==null||Lt.envMap!==q||st.fog===!0&&Lt.fog!==ut||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Et.numPlanes||Lt.numIntersection!==Et.numIntersection)||Lt.vertexAlphas!==nt||Lt.vertexTangents!==dt||Lt.morphTargets!==Y||Lt.morphNormals!==It||Lt.morphColors!==$t||Lt.toneMapping!==ue||Lt.morphTargetsCount!==kt)&&(Nt=!0):(Nt=!0,Lt.__version=st.version);let re=Lt.currentProgram;Nt===!0&&(re=An(st,Z,P));let Fe=!1,Je=!1,vn=!1;const we=re.getUniforms(),on=Lt.uniforms;if(te.useProgram(re.program)&&(Fe=!0,Je=!0,vn=!0),st.id!==ct&&(ct=st.id,Je=!0),Fe||et!==A){te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),we.setValue(V,"projectionMatrix",A.projectionMatrix),we.setValue(V,"viewMatrix",A.matrixWorldInverse);const Wn=we.map.cameraPosition;Wn!==void 0&&Wn.setValue(V,_e.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&we.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&we.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),et!==A&&(et=A,Je=!0,vn=!0)}if(Lt.needsLights&&(pe.state.directionalShadowMap.length>0&&we.setValue(V,"directionalShadowMap",pe.state.directionalShadowMap,J),pe.state.spotShadowMap.length>0&&we.setValue(V,"spotShadowMap",pe.state.spotShadowMap,J),pe.state.pointShadowMap.length>0&&we.setValue(V,"pointShadowMap",pe.state.pointShadowMap,J)),P.isSkinnedMesh){we.setOptional(V,P,"bindMatrix"),we.setOptional(V,P,"bindMatrixInverse");const dn=P.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),we.setValue(V,"boneTexture",dn.boneTexture,J))}P.isBatchedMesh&&(we.setOptional(V,P,"batchingTexture"),we.setValue(V,"batchingTexture",P._matricesTexture,J),we.setOptional(V,P,"batchingIdTexture"),we.setValue(V,"batchingIdTexture",P._indirectTexture,J),we.setOptional(V,P,"batchingColorTexture"),P._colorsTexture!==null&&we.setValue(V,"batchingColorTexture",P._colorsTexture,J));const Un=mt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Wt.update(P,mt,re),(Je||Lt.receiveShadow!==P.receiveShadow)&&(Lt.receiveShadow=P.receiveShadow,we.setValue(V,"receiveShadow",P.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=t2()),Je&&(we.setValue(V,"toneMappingExposure",U.toneMappingExposure),Lt.needsLights&&vi(on,vn),ut&&st.fog===!0&&ae.refreshFogUniforms(on,ut),ae.refreshMaterialUniforms(on,st,Tt,Q,k.state.transmissionRenderTarget[A.id]),cu.upload(V,Xi(Lt),on,J)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(cu.upload(V,Xi(Lt),on,J),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&we.setValue(V,"center",P.center),we.setValue(V,"modelViewMatrix",P.modelViewMatrix),we.setValue(V,"normalMatrix",P.normalMatrix),we.setValue(V,"modelMatrix",P.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const dn=st.uniformsGroups;for(let Wn=0,qi=dn.length;Wn<qi;Wn++){const xa=dn[Wn];Zt.update(xa,re),Zt.bind(xa,re)}}return re}function vi(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Di(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(A,Z,mt){const st=E.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=Z,E.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:mt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const mt=E.get(A);mt.__webglFramebuffer=Z,mt.__useDefaultFramebuffer=Z===void 0};const si=V.createFramebuffer();this.setRenderTarget=function(A,Z=0,mt=0){it=A,X=Z,$=mt;let st=null,P=!1,ut=!1;if(A){const w=E.get(A);if(w.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(V.FRAMEBUFFER,w.__webglFramebuffer),O.copy(A.viewport),G.copy(A.scissor),_t=A.scissorTest,te.viewport(O),te.scissor(G),te.setScissorTest(_t),ct=-1;return}else if(w.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(w.__hasExternalTextures)J.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const nt=A.depthTexture;if(w.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}const B=A.texture;(B.isData3DTexture||B.isDataArrayTexture||B.isCompressedArrayTexture)&&(ut=!0);const q=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(q[Z])?st=q[Z][mt]:st=q[Z],P=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?st=E.get(A).__webglMultisampledFramebuffer:Array.isArray(q)?st=q[mt]:st=q,O.copy(A.viewport),G.copy(A.scissor),_t=A.scissorTest}else O.copy(rt).multiplyScalar(Tt).floor(),G.copy(Rt).multiplyScalar(Tt).floor(),_t=Ut;if(mt!==0&&(st=si),te.bindFramebuffer(V.FRAMEBUFFER,st)&&te.drawBuffers(A,st),te.viewport(O),te.scissor(G),te.setScissorTest(_t),P){const w=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,w.__webglTexture,mt)}else if(ut){const w=Z;for(let B=0;B<A.textures.length;B++){const q=E.get(A.textures[B]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+B,q.__webglTexture,mt,w)}}else if(A!==null&&mt!==0){const w=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,w.__webglTexture,mt)}ct=-1},this.readRenderTargetPixels=function(A,Z,mt,st,P,ut,gt,w=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(B=B[gt]),B){te.bindFramebuffer(V.FRAMEBUFFER,B);try{const q=A.textures[w],nt=q.format,dt=q.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+w),!Te.textureFormatReadable(nt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(dt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-st&&mt>=0&&mt<=A.height-P&&V.readPixels(Z,mt,st,P,Gt.convert(nt),Gt.convert(dt),ut)}finally{const q=it!==null?E.get(it).__webglFramebuffer:null;te.bindFramebuffer(V.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(A,Z,mt,st,P,ut,gt,w=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(B=B[gt]),B)if(Z>=0&&Z<=A.width-st&&mt>=0&&mt<=A.height-P){te.bindFramebuffer(V.FRAMEBUFFER,B);const q=A.textures[w],nt=q.format,dt=q.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+w),!Te.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Y=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Y),V.bufferData(V.PIXEL_PACK_BUFFER,ut.byteLength,V.STREAM_READ),V.readPixels(Z,mt,st,P,Gt.convert(nt),Gt.convert(dt),0);const It=it!==null?E.get(it).__webglFramebuffer:null;te.bindFramebuffer(V.FRAMEBUFFER,It);const $t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sy(V,$t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Y),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ut),V.deleteBuffer(Y),V.deleteSync($t),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,mt=0){const st=Math.pow(2,-mt),P=Math.floor(A.image.width*st),ut=Math.floor(A.image.height*st),gt=Z!==null?Z.x:0,w=Z!==null?Z.y:0;J.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,mt,0,0,gt,w,P,ut),te.unbindTexture()};const Ui=V.createFramebuffer(),Wi=V.createFramebuffer();this.copyTextureToTexture=function(A,Z,mt=null,st=null,P=0,ut=0){let gt,w,B,q,nt,dt,Y,It,$t;const ue=A.isCompressedTexture?A.mipmaps[ut]:A.image;if(mt!==null)gt=mt.max.x-mt.min.x,w=mt.max.y-mt.min.y,B=mt.isBox3?mt.max.z-mt.min.z:1,q=mt.min.x,nt=mt.min.y,dt=mt.isBox3?mt.min.z:0;else{const on=Math.pow(2,-P);gt=Math.floor(ue.width*on),w=Math.floor(ue.height*on),A.isDataArrayTexture?B=ue.depth:A.isData3DTexture?B=Math.floor(ue.depth*on):B=1,q=0,nt=0,dt=0}st!==null?(Y=st.x,It=st.y,$t=st.z):(Y=0,It=0,$t=0);const ne=Gt.convert(Z.format),kt=Gt.convert(Z.type);let Lt;Z.isData3DTexture?(J.setTexture3D(Z,0),Lt=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(J.setTexture2DArray(Z,0),Lt=V.TEXTURE_2D_ARRAY):(J.setTexture2D(Z,0),Lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const pe=V.getParameter(V.UNPACK_ROW_LENGTH),Nt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),re=V.getParameter(V.UNPACK_SKIP_PIXELS),Fe=V.getParameter(V.UNPACK_SKIP_ROWS),Je=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ue.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,q),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const vn=A.isDataArrayTexture||A.isData3DTexture,we=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=E.get(A),Un=E.get(Z),dn=E.get(on.__renderTarget),Wn=E.get(Un.__renderTarget);te.bindFramebuffer(V.READ_FRAMEBUFFER,dn.__webglFramebuffer),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let qi=0;qi<B;qi++)vn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(A).__webglTexture,P,dt+qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,ut,$t+qi)),V.blitFramebuffer(q,nt,gt,w,Y,It,gt,w,V.DEPTH_BUFFER_BIT,V.NEAREST);te.bindFramebuffer(V.READ_FRAMEBUFFER,null),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(P!==0||A.isRenderTargetTexture||E.has(A)){const on=E.get(A),Un=E.get(Z);te.bindFramebuffer(V.READ_FRAMEBUFFER,Ui),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wi);for(let dn=0;dn<B;dn++)vn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,P,dt+dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,P),we?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Un.__webglTexture,ut,$t+dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Un.__webglTexture,ut),P!==0?V.blitFramebuffer(q,nt,gt,w,Y,It,gt,w,V.COLOR_BUFFER_BIT,V.NEAREST):we?V.copyTexSubImage3D(Lt,ut,Y,It,$t+dn,q,nt,gt,w):V.copyTexSubImage2D(Lt,ut,Y,It,q,nt,gt,w);te.bindFramebuffer(V.READ_FRAMEBUFFER,null),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else we?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Lt,ut,Y,It,$t,gt,w,B,ne,kt,ue.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,ut,Y,It,$t,gt,w,B,ne,ue.data):V.texSubImage3D(Lt,ut,Y,It,$t,gt,w,B,ne,kt,ue):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ut,Y,It,gt,w,ne,kt,ue.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ut,Y,It,ue.width,ue.height,ne,ue.data):V.texSubImage2D(V.TEXTURE_2D,ut,Y,It,gt,w,ne,kt,ue);V.pixelStorei(V.UNPACK_ROW_LENGTH,pe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,re),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je),ut===0&&Z.generateMipmaps&&V.generateMipmap(Lt),te.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){X=0,$=0,it=null,te.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}const ye={lat:47.6205,lng:-122.3493,altitude:0},uu={lat:47.6205,lng:-122.3493,altitude:0},ke=0,fh=67,dh=230,hh=900,Ci=122,bs=32,ni=60,n2=10,mv=20;function i2(r){return function(){let i=r+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function a2(){return{foregroundZ:{min:-55,max:-20},midgroundZ:{min:-120,max:-55},backgroundZ:{min:-240,max:-120},farBackgroundZ:{min:-350,max:-240}}}const s2=12;function Ts(r,e,i=s2){const s=r*r+e*e;if(s<i*i&&s>0){const l=Math.sqrt(s),c=(i+1)/l;return{x:r*c,z:e*c}}return{x:r,z:e}}function r2(r,e){const i=Number(r),s=Number(e);let l=!1,c=!1,d=null;return i>=47.58&&i<=47.65&&s>=-122.42&&s<=-122.34&&(d="puget_sound",l=!0),i>=47.618&&i<=47.648&&s>=-122.345&&s<=-122.318&&(d="lake_union",l=!0),i>=47.52&&i<=47.68&&s>=-122.32&&s<=-122.22&&(d="lake_washington",l=!0),i>=47.598&&i<=47.622&&s>=-122.362&&s<=-122.338&&(c=!0,d||(d="puget_sound")),{isWaterZone:l,isCoastlineZone:c,waterType:d}}const o2=[{name:"downtown",latMin:47.605,latMax:47.613,lngMin:-122.346,lngMax:-122.33,buildingStyle:"tall",parkFactor:0},{name:"belltown",latMin:47.612,latMax:47.619,lngMin:-122.358,lngMax:-122.342,buildingStyle:"medium",parkFactor:0},{name:"south_lake_union",latMin:47.616,latMax:47.626,lngMin:-122.34,lngMax:-122.33,buildingStyle:"tall",parkFactor:.2},{name:"queen_anne",latMin:47.633,latMax:47.644,lngMin:-122.365,lngMax:-122.345,buildingStyle:"small",parkFactor:.3},{name:"capitol_hill",latMin:47.618,latMax:47.636,lngMin:-122.325,lngMax:-122.298,buildingStyle:"small",parkFactor:.4},{name:"volunteer_park",latMin:47.628,latMax:47.633,lngMin:-122.321,lngMax:-122.314,buildingStyle:"small",parkFactor:1},{name:"green_lake",latMin:47.675,latMax:47.684,lngMin:-122.335,lngMax:-122.318,buildingStyle:"small",parkFactor:1},{name:"ballard",latMin:47.664,latMax:47.672,lngMin:-122.388,lngMax:-122.37,buildingStyle:"medium",parkFactor:.2},{name:"freemont",latMin:47.648,latMax:47.656,lngMin:-122.358,lngMax:-122.345,buildingStyle:"medium",parkFactor:.3},{name:"u_district",latMin:47.654,latMax:47.664,lngMin:-122.322,lngMax:-122.308,buildingStyle:"medium",parkFactor:.2},{name:"seattle_center_park",latMin:47.619,latMax:47.622,lngMin:-122.354,lngMax:-122.348,buildingStyle:"small",parkFactor:.7},{name:"sodo",latMin:47.578,latMax:47.592,lngMin:-122.338,lngMax:-122.318,buildingStyle:"medium",parkFactor:0},{name:"georgetown",latMin:47.548,latMax:47.558,lngMin:-122.332,lngMax:-122.318,buildingStyle:"small",parkFactor:.2}],l2={buildingStyle:"medium",parkFactor:.2};function c2(r,e){const i=Number(r),s=Number(e);for(const l of o2)if(i>=l.latMin&&i<=l.latMax&&s>=l.lngMin&&s<=l.lngMax)return{buildingStyle:l.buildingStyle,parkFactor:l.parkFactor,zoneName:l.name};return{...l2}}function u2(r,e,i){const s=(e??"").toLowerCase();if(s==="stadiums")return"stadium";if((s==="waterfront"||s==="ferris_wheel")&&i)return"waterfront";if((r.parkFactor??.2)>=.7)return"park";const c=r.buildingStyle??"medium",d=(r.zoneName??"").toLowerCase();return c==="tall"||d==="downtown"||d==="belltown"||d==="south_lake_union"?"downtown":c==="small"||c==="medium"?"residential":"general"}function f2(r){switch(r){case"downtown":return{hMin:20,hMax:40};case"residential":return{hMin:6,hMax:14};case"park":return{hMin:4,hMax:8};default:return null}}function gv(r){const e=r();return e<.33?{w:.7,d:1.1}:e<.66?{w:1,d:1}:{w:1.4,d:.8}}const ph=20,fp="./models/space-needle-park.glb",mh="./models/low_poly_space_needle.glb",_v=fp,d2=0,h2=[{category:"3D Model",name:"Space Needle",creator:"Microsoft",license:"Sketchfab",sourceUrl:"",notes:"space-needle (default)"},{category:"3D Model",name:"Low Poly Space Needle",creator:"Mejje mobile coffee",license:"Sketchfab",sourceUrl:"",notes:"low_poly_space_needle.glb"},{category:"Sound",name:"Dog Bark",creator:"Dragon Studio",license:"Pixabay",sourceUrl:"",notes:"Free Dog Bark"},{category:"Sound",name:"Crowd Stomp",creator:"Djart music",license:"Pixabay",sourceUrl:"",notes:"Powerful Stomps Claps Cheering (Sport Rhythmic Applause)"},{category:"Sound",name:"Baseball organ",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"baseball cavalry sting short sustain 80564"},{category:"Sound",name:"Musical saw hit",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"81382"},{category:"Sound",name:"Crunch",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"plastic crunch 83779"},{category:"Sound",name:"Poof",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"poof of smoke 87381"},{category:"Sound",name:"Splash",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"6213"},{category:"Sound",name:"Wilhelm",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"wilhelm 1 86895"},{category:"Sound",name:"Glass smash",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"6266"},{category:"Sound",name:"Camera",creator:"Irinairinafomicheva",license:"Freesound",sourceUrl:"",notes:"13695"},{category:"Sound",name:"Percussive hit 02",creator:"Freesound Community",license:"Pixabay",sourceUrl:"",notes:"105799"}],gh=3.5*(7/8),p2=158.5,m2=200,g2=82,vv=1800,_2=250,xv=1e-4,v2=5,x2=1,M2=2,S2=60,y2=Math.PI*S2**2*10.7639,Mv=35e7,Sv=.6,yv=1.4,E2=.3,Ev=.5,b2=12,T2=1.25,A2=900,qc=2e-4,R2=1.75;function C2(r,e,i){const s=i.length;if(s<3)return!1;let l=!1;for(let c=0,d=s-1;c<s;d=c++){const[p,m]=i[c],[h,_]=i[d];if(p===h)continue;const M=p>r!=h>r,g=m+(_-m)*(r-p)/(h-p);M&&g>e&&(l=!l)}return l}const w2="https://raw.githubusercontent.com/seattleio/seattle-boundaries-data/master/data/neighborhoods.geojson";let dp=null;function D2(r){if(!r?.features?.length)return[];const e=[];for(const i of r.features){const s=i.geometry;if(s?.coordinates){if(s.type==="Polygon"){const l=s.coordinates[0].map(([c,d])=>[d,c]);l.length>=3&&e.push(l)}else if(s.type==="MultiPolygon")for(const l of s.coordinates.map(c=>c[0].map(([d,p])=>[p,d])))l.length>=3&&e.push(l)}}return e}function U2(r,e){return dp?.length?dp.some(i=>C2(r,e,i)):!1}const N2=[{latMin:47.53,latMax:47.68,lngMin:-122.48,lngMax:-122.32},{latMin:47.634,latMax:47.648,lngMin:-122.338,lngMax:-122.318},{latMin:47.53,latMax:47.66,lngMin:-122.318,lngMax:-122.24},{latMin:47.648,latMax:47.658,lngMin:-122.318,lngMax:-122.298}];function L2(r,e){return N2.some(i=>r>=i.latMin&&r<=i.latMax&&e>=i.lngMin&&e<=i.lngMax)}function bv(r,e,i){return U2(r,e)?!1:L2(r,e)?!0:i!==null&&typeof i=="number"?i<=1:!1}const Yc={latMin:47.6498,latMax:47.6578,lngMin:-122.314,lngMax:-122.296};function Tv(r,e){return r>=Yc.latMin&&r<=Yc.latMax&&e>=Yc.lngMin&&e<=Yc.lngMax}const jc={latMin:47.5942,latMax:47.5958,lngMin:-122.3328,lngMax:-122.3302};function Av(r,e){return r>=jc.latMin&&r<=jc.latMax&&e>=jc.lngMin&&e<=jc.lngMax}const Zc={latMin:47.5906,latMax:47.5932,lngMin:-122.3348,lngMax:-122.3302};function Rv(r,e){return r>=Zc.latMin&&r<=Zc.latMax&&e>=Zc.lngMin&&e<=Zc.lngMax}const Kc={latMin:47.6214,latMax:47.6226,lngMin:-122.3542,lngMax:-122.3518};function Cv(r,e){return r>=Kc.latMin&&r<=Kc.latMax&&e>=Kc.lngMin&&e<=Kc.lngMax}const Qc={latMin:47.62105,latMax:47.62173,lngMin:-122.34845,lngMax:-122.34767};function wv(r,e){return r>=Qc.latMin&&r<=Qc.latMax&&e>=Qc.lngMin&&e<=Qc.lngMax}const Jc={latMin:47.61998,latMax:47.62048,lngMin:-122.35095,lngMax:-122.35048};function Dv(r,e){return r>=Jc.latMin&&r<=Jc.latMax&&e>=Jc.lngMin&&e<=Jc.lngMax}const $c={latMin:47.61928,latMax:47.61968,lngMin:-122.35108,lngMax:-122.35052};function Uv(r,e){return r>=$c.latMin&&r<=$c.latMax&&e>=$c.lngMin&&e<=$c.lngMax}const tu={latMin:47.53,latMax:47.68,lngMin:-122.44,lngMax:-122.25};function O2(r,e){return r>=tu.latMin&&r<=tu.latMax&&e>=tu.lngMin&&e<=tu.lngMax}const P2=[{id:"downtown",name:"Downtown",center:{lat:47.6097,lng:-122.3331},radiusM:650,ratePerSqFt:2800},{id:"slu",name:"South Lake Union",center:{lat:47.6279,lng:-122.3372},radiusM:520,ratePerSqFt:2200},{id:"belltown",name:"Belltown",center:{lat:47.6163,lng:-122.3456},radiusM:480,ratePerSqFt:2500},{id:"queen-anne",name:"Queen Anne",center:{lat:47.6354,lng:-122.357},radiusM:600,ratePerSqFt:1700},{id:"capitol-hill",name:"Capitol Hill",center:{lat:47.6252,lng:-122.3212},radiusM:580,ratePerSqFt:1800},{id:"ballard",name:"Ballard",center:{lat:47.6684,lng:-122.3846},radiusM:550,ratePerSqFt:1200},{id:"fremont",name:"Fremont",center:{lat:47.6513,lng:-122.3507},radiusM:400,ratePerSqFt:1100},{id:"udistrict",name:"U District",center:{lat:47.6605,lng:-122.314},radiusM:500,ratePerSqFt:1e3},{id:"magnolia",name:"Magnolia",center:{lat:47.6397,lng:-122.3992},radiusM:600,ratePerSqFt:1100},{id:"west-seattle",name:"West Seattle",center:{lat:47.5652,lng:-122.3868},radiusM:700,ratePerSqFt:800},{id:"beacon-hill",name:"Beacon Hill",center:{lat:47.5805,lng:-122.3102},radiusM:500,ratePerSqFt:700},{id:"rainier-valley",name:"Rainier Valley",center:{lat:47.5575,lng:-122.2845},radiusM:600,ratePerSqFt:600},{id:"seattle-center",name:"Seattle Center",center:{lat:47.6205,lng:-122.3493},radiusM:400,ratePerSqFt:2e3},{id:"first-hill",name:"First Hill",center:{lat:47.6102,lng:-122.3258},radiusM:380,ratePerSqFt:1900}],xu=1;function Nv(r,e,i,s){if(!e)return null;const l=i-e.left,c=s-e.top;if(l<0||l>e.width||c<0||c>e.height)return null;const d=r.center,p=r.range??1200;if(!d||typeof d.lat!="number")return null;const m=d.lat,h=p*2.2/Math.min(e.width,e.height),_=(l-e.width/2)*xu;let M=(c-e.height/2)*xu;const y=(r.tilt??0)*Math.PI/180,b=1/Math.max(.25,Math.cos(y));M*=b;const S=(r.heading??0)*Math.PI/180,x=(_*Math.cos(S)-M*Math.sin(S))*h,I=(-_*Math.sin(S)-M*Math.cos(S))*h*.5/111320,N=x*.5/(111320*Math.cos(m*Math.PI/180));return{lat:m+I,lng:d.lng+N,altitude:0}}function fu(r,e,i){if(!r||!e||!i)return null;const s=r.center,l=r.range??1200;if(!s||typeof s.lat!="number")return null;const c=s.lat,d=l*2.2/Math.min(e.width,e.height),p=(i.lat-s.lat)*111320*2,m=(i.lng-s.lng)*(111320*Math.cos(c*Math.PI/180))*2,_=(r.heading??0)*Math.PI/180;let M=(m*Math.cos(_)-p*Math.sin(_))/d,g=(-m*Math.sin(_)-p*Math.cos(_))/d;const b=(r.tilt??0)*Math.PI/180,D=1/Math.max(.25,Math.cos(b));g/=D;const S=e.width/2+M/xu,x=e.height/2+g/xu;return{x:S,y:x}}function sl(r,e,i,s){if(!r||!e||!i)return null;const l=r.innerMap,d=s?.current?.getProjection?.();if(l&&d&&typeof google<"u"&&google.maps?.LatLng)try{const m=new google.maps.LatLng(i.lat,i.lng),h=d.fromLatLngToDivPixel(m);if(h==null)return null;const _=l.getDiv();if(!_)return null;const M=_.getBoundingClientRect(),g=e.getBoundingClientRect(),y=M.left-g.left+h.x,b=M.top-g.top+h.y;return{x:y,y:b}}catch{}const p=e.getBoundingClientRect();return fu(r,p,i)}function Lv(r,e,i,s){if(!r)return null;const l=r.innerMap,d=s?.current?.getProjection?.();if(!l||!d||typeof google>"u"||!google.maps?.Point)return null;const p=l.getDiv?.();if(!p)return null;const m=p.getBoundingClientRect(),h=e-m.left,_=i-m.top;if(h<0||h>m.width||_<0||_>m.height)return null;try{const M=new google.maps.Point(h,_),g=typeof d.fromContainerPixelToLatLng=="function"&&d.fromContainerPixelToLatLng(M)||typeof d.fromDivPixelToLatLng=="function"&&d.fromDivPixelToLatLng(M);return g?{lat:g.lat(),lng:g.lng(),altitude:0}:null}catch{return null}}function Zn(r,e){const s=(e.lat-r.lat)*Math.PI/180,l=(e.lng-r.lng)*Math.PI/180,c=Math.sin(s/2)**2+Math.cos(r.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(l/2)**2;return 2*6371e3*Math.asin(Math.sqrt(c))}function vx(r,e){const i=Math.round(r/qc)*qc,s=Math.round(e/qc)*qc,l=`${i.toFixed(6)}${s.toFixed(6)}`;let c=0;for(let d=0;d<l.length;d++)c=c*31+l.charCodeAt(d)>>>0;return c}function xx(r){return()=>(r=(r*9301+49297)%233280,r/233280)}function eu(r,e){const s=Zn({lat:r,lng:e},uu)/1e3,l=Math.max(.2,1-s/b2),c=vx(r,e),d=xx(c),p=O2(r,e);let m;if(p){const h=Sv+d()*(yv-Sv),_=(d()-.5)*2*E2;m=(h+_)*l,m=Math.max(.3,Math.min(yv,m))}else{const h=.2+d()*(Ev-.25),_=(d()-.5)*.2;m=(h+_)*l,m=Math.max(.05,Math.min(Ev,m))}return m*1e9}function nu(r,e){const i={lat:r,lng:e},s=P2.filter(g=>Zn(i,g.center)<=g.radiusM);let l,c;s.length===0?(l=A2,c="Seattle (General)"):s.length===1?(l=s[0].ratePerSqFt,c=s[0].name):(l=s.reduce((g,y)=>g+y.ratePerSqFt,0)/s.length,c="Border Zone: "+s.map(g=>g.name).join(" + "));const d=vx(r,e),m=.95+xx(d)()*.1,h=l*m,_=h*y2,M=Math.round(_*T2/1e4)*1e4;return{ratePerSqFt:h,landValue:M,neighborhoodLabel:c}}function _h(r){return r>=1e9?`$${(r/1e9).toFixed(1)}B`:r>=1e6?`$${(r/1e6).toFixed(1)}M`:r>=1e3?`$${(r/1e3).toFixed(0)}K`:`$${r.toFixed(0)}`}function I2(r){return r>=1e9?`$${(r/1e9).toFixed(1)}B/year`:r>=1e6?`$${(r/1e6).toFixed(1)}M/year`:r>=1e3?`$${(r/1e3).toFixed(1)}K/year`:`$${r.toFixed(1)}/year`}function Ov(r){return`$${Math.round(r)}/sqft`}function vh(r,e,i=", "){const s=Number(r),l=Number(e),c=s>=0?"N":"S",d=l>=0?"E":"W",p=`${Math.abs(s).toFixed(5)}° ${c}`,m=`${Math.abs(l).toFixed(5)}° ${d}`;return`${p}${i}${m}`}function F2(r,e){const i=r>=0?"N":"S",s=e>=0?"E":"W";return`${Math.abs(Number(r)).toFixed(5)}° ${i}, ${Math.abs(Number(e)).toFixed(5)}° ${s}`}function Pv(r){return new Promise((e,i)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>e(s),s.onerror=i,s.src=r})}async function B2(r){if(!r?.dataUrl)return;const[e,i]=await Promise.all([Pv(r.dataUrl),Pv("./eg_logo_postcard.png").catch(()=>null)]),s=1600,l=1200,c=document.createElement("canvas");c.width=s,c.height=l;const d=c.getContext("2d"),p="#F2E8CC",m="#F2E8CC",h="#0B1428",_="rgba(11, 20, 40,0.75)",M=70,g=220,y=24,b=M,D=M,S=s-M*2,x=l-M*2-g,C=b+y,I=D+y,N=S-y*2,k=x-y*2;d.fillStyle=p,d.fillRect(0,0,s,l),d.fillStyle=m,d.fillRect(b,D,S,x);const z=e.width/e.height,H=N/k;let T=0,U=0,at=e.width,X=e.height;z>H?(X=e.height,at=X*H,T=(e.width-at)/2,U=0):(at=e.width,X=at/H,T=0,U=(e.height-X)/2),d.drawImage(e,T,U,at,X,C,I,N,k);const $=M,it=D+x,ct=S,et=g;d.fillStyle=m,d.fillRect($,it,ct,et);const O=r.needleNumber??r.needleId??"",G=F2(r.lat??0,r.lng??0),_t=$+34,yt=$+ct-34,Ot=it+72;if(d.fillStyle=h,d.font="600 34px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.textBaseline="alphabetic",d.textAlign="left",d.fillText(`Greetings from Space Needle #${O}`,_t,Ot),d.fillStyle=_,d.font="500 26px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText(G,_t,Ot+40),d.fillStyle=h,d.font="600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("twospaceneedles.org | @twospaceneedles",_t,it+et-44),d.textAlign="right",i&&i.width>0&&i.height>0){const Bt=i.width/i.height*48;d.drawImage(i,yt-Bt,Ot-48,Bt,48)}else d.fillStyle=h,d.font="800 30px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("EXTRA GOOD",yt,Ot);d.fillStyle=_,d.font="600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",d.fillText("extragood.studio | @extragood.studio",yt,it+et-44);const F=c.toDataURL("image/jpeg",.92),Q=document.createElement("a");Q.href=F,Q.download=`two-space-needles-postcard-needle-${O}.jpg`,document.body.appendChild(Q),Q.click(),Q.remove()}function iu(r,e={}){const{duration:i=600}=e,[s,l]=Ft.useState(()=>r),c=Ft.useRef(r),d=Ft.useRef(r),p=Ft.useRef(r),m=Ft.useRef(null);return c.current=s,Ft.useEffect(()=>{if(r===p.current)return;const h=c.current;p.current=r;const _=performance.now(),M=g=>{const y=g-_,b=Math.min(y/i,1),D=1-(1-b)**2,S=h+(r-h)*D;l(S),b<1?m.current=requestAnimationFrame(M):d.current=r};return m.current=requestAnimationFrame(M),()=>{m.current&&cancelAnimationFrame(m.current)}},[r,i]),s}async function Iv(r,e){try{const{ElevationService:i}=await hu("elevation"),l=await new i().getElevationForLocations({locations:[{lat:r,lng:e}]});if(l?.results?.[0]!=null&&typeof l.results[0].elevation=="number")return l.results[0].elevation}catch(i){console.warn("Elevation check failed, using land sound:",i?.message)}return null}function du(r,e){const i=(e.lng-r.lng)*Math.PI/180,s=r.lat*Math.PI/180,l=e.lat*Math.PI/180,c=Math.sin(i)*Math.cos(l),d=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(i);return(Math.atan2(c,d)*180/Math.PI+360)%360}function Fv(r,e){let i=Math.abs(r%360-e%360);return i>180&&(i=360-i),i}function z2(r,e=1200,i=900){const s=new Fy;s.background=new He(12113128);const l=80,c=320;s.fog=new Tp(13421772,l,c);const d=new Vi(45,e/i,.1,500),p=r.visitedLat??47.62,m=r.visitedLng??-122.35,h=r.originalLat??47.6205,_=r.originalLng??-122.3493,M=r.cameraHeading??0,g=12e3,y=1/20,b=y,D=g*y,S=r.visibleNeedles??[],x=c2(p,m),C={lat:p,lng:m},I={lat:h,lng:_},k=S.some(P=>P.needleId===ke)&&(h!==p||_!==m)?du(C,I):Math.round(Number(M)/30)*30;let z=(360-k)*Math.PI/180;function H(P){return P<=750?180:P<=1500?95:70}const T=S[0],U=[];T&&U.push(T);const at=S.find(P=>P.needleId===ke),$=S.slice(1).filter(P=>P.needleId!==ke).filter(P=>{const ut=P.distanceMeters??0,gt=P.bearingDeg??0,w=Fv(gt,k);return ut<=g&&w<=H(ut)});at!=null&&U.push(at);const it=[...$].sort((P,ut)=>(P.distanceMeters??0)-(ut.distanceMeters??0)),ct=it.filter(P=>(P.distanceMeters??0)<=2e3),et=it.filter(P=>!ct.includes(P)).slice(0,10),O=new Set(U.map(P=>P.needleId));for(const P of ct)O.has(P.needleId)||(U.push(P),O.add(P.needleId));for(const P of et)O.has(P.needleId)||(U.push(P),O.add(P.needleId));U.sort((P,ut)=>(P.distanceMeters??0)-(ut.distanceMeters??0));const G=k,_t=U.find(P=>P.needleId===ke),yt=55,Ot=P=>{if(_t==null)return"right";const ut=(360-P)*Math.PI/180,gt=(_t.bearingDeg??0)*Math.PI/180,w=Math.min(D,(_t.distanceMeters??0)*b),B=Math.sin(gt)*w,q=-Math.cos(gt)*w,nt=Math.sin(ut)*yt,dt=Math.cos(ut)*yt,Y=B-nt,It=q-dt,$t=Math.cos(ut),ue=-Math.sin(ut);return Y*$t+It*ue>=0?"right":"left"},F=(G+mv+360)%360,Q=(G-mv+360)%360;let Tt=Ot(F)==="left"?F:Q;const Bt=U.slice(1).map(P=>(P.bearingDeg??0)%360);let jt=Bt.length>=2?360:0;if(Bt.length>=2){let P=0,ut=1;for(let gt=0;gt<Bt.length;gt++)for(let w=gt+1;w<Bt.length;w++){const B=Fv(Bt[gt],Bt[w]);B<jt&&(jt=B,P=gt,ut=w)}if(jt<n2){const gt=Bt[P],w=Bt[ut];let B=(gt+w)/2;Math.abs(gt-w)>180&&(B=(B+180)%360);const q=(B+360)%360;(Ot(q)==="left"||_t==null)&&(Tt=q)}}z=(360-Tt)*Math.PI/180;const rt=U.length>0,Rt=Math.round(Number(k)/30)*30,Ut=Math.round(p*1e4)*1e4+Math.round(m*1e4)^Rt+1,zt=i2(Ut);let Qt=0;const ee=P=>Qt>=ni?!1:(s.add(P),Qt++,!0),nn=new sE(16777215,.55);s.add(nn);const _e=new aE(16774630,.85);_e.position.set(80,120,60),_e.castShadow=!1,s.add(_e);const xe=(x.parkFactor??0)>=.6||x.zoneName==="seattle_center_park"||Math.abs(p-ye.lat)<.002&&Math.abs(m-ye.lng)<.002?5933658:8035966,Ce=new ir(400,400),he=new Vn({color:xe}),Be=new je(Ce,he);Be.rotation.x=-Math.PI/2,Be.position.y=-.5,s.add(Be);const V=a2(),qe=r2(p,m),{isWaterZone:be,isCoastlineZone:Te,waterType:te}=qe;if(be||Te){const P=(V.backgroundZ.min+V.backgroundZ.max)/2,ut=new ir(500,180),gt=new Vn({color:3829656}),w=new je(ut,gt);if(w.rotation.x=-Math.PI/2,w.position.set(0,-2,P),s.add(w),Te||te==="puget_sound"){const B=V.backgroundZ.max,q=new ir(500,10),nt=new Vn({color:5925466}),dt=new je(q,nt);dt.rotation.x=-Math.PI/2,dt.position.set(0,-1.5,B),s.add(dt)}}const L=be||Te,E=L?V.backgroundZ.max:null,J=L?{zMin:V.backgroundZ.min,zMax:V.backgroundZ.max}:null,Mt=(P,ut)=>J!=null&&ut>=J.zMin&&ut<=J.zMax,At=r.sceneContext??"seattle_general",St=u2(x,At,L),Jt=f2(St),Vt=x.buildingStyle??"medium",ae=x.parkFactor??.2,oe={tall:{skyline:6,mid:12,backH:28,hMin:18,hMax:32,footW:14,footD:10},medium:{skyline:2,mid:10,backH:16,hMin:8,hMax:18,footW:10,footD:8},small:{skyline:0,mid:10,backH:0,hMin:4,hMax:10,footW:8,footD:6}},Dt=oe[Vt]??oe.medium;Dt.skyline+Dt.mid;const Et=V.farBackgroundZ;if(Et&&Qt<ni){const P=new Vn({color:10136508}),ut=5;for(let gt=0;gt<ut&&Qt<ni;gt++){const w=12+zt()*10,B=24+zt()*20,q=new ll(B,w,8),nt=new je(q,P),dt=Et.min+zt()*(Et.max-Et.min),Y=(zt()-.5)*160;nt.position.set(Y,w/2+(zt()-.5)*2,dt),ee(nt)}}const qt=new Vn({color:4871528}),Xt=new Vn({color:2972205}),Wt=5,de=(V.midgroundZ.min+V.midgroundZ.max)/2,K=(V.backgroundZ.min+V.backgroundZ.max)/2;let Gt=null;const Ht=14,Zt=14,Pt=6;let vt=0;const Yt=At==="pike_place";if(Dt.skyline>0&&!L&&!Yt)for(let P=0;P<Dt.skyline&&Qt<ni&&vt<Ht;P++){const ut=(P%2===0?-1:1)*(25+zt()*20);let gt=K+(zt()-.5)*30;gt=Math.max(V.backgroundZ.min,Math.min(gt,V.backgroundZ.max));const w=Ts(ut,gt),B=gv(zt);let q=St==="downtown"&&Jt?Jt.hMin+zt()*(Jt.hMax-Jt.hMin):Dt.backH;const nt=Math.max(4,Math.round(Dt.footW*B.w)),dt=Math.max(4,Math.round(Dt.footD*B.d)),Y=new ca(nt,q,dt),It=new je(Y,qt);It.position.set(w.x,q/2,w.z),It.rotation.y=(zt()-.5)*.4,ee(It)&&vt++}const ce=Yt?12:Dt.mid;for(let P=0;P<ce&&Qt<ni&&vt<Ht;P++){let ut,gt,w,B,q;if(Yt)ut=(zt()-.5)*40,gt=de+(zt()-.5)*28,w=4+P%3*2,B=8,q=6;else{ut=(P%6-2.5)*45+P%3*8,gt=-90-Math.floor(P/6)*35-P%2*15,Jt?w=Jt.hMin+zt()*(Jt.hMax-Jt.hMin):w=Dt.hMin+zt()*(Dt.hMax-Dt.hMin);const $t=gv(zt);B=Math.max(4,Math.round(Dt.footW*$t.w)),q=Math.max(4,Math.round(Dt.footD*$t.d))}gt=Math.max(V.backgroundZ.min,Math.min(gt,V.midgroundZ.max)),L&&(gt=Math.max(V.backgroundZ.max+5,gt),gt=Math.min(gt,V.midgroundZ.max));let nt=0;for(;L&&Mt(ut,gt)&&nt<Wt;)ut=-40+zt()*80,gt=V.backgroundZ.max+5+zt()*(V.midgroundZ.max-V.backgroundZ.max-10),nt++;if(L&&Mt(ut,gt))continue;const dt=Ts(ut,gt),Y=new ca(B,w,q),It=new je(Y,qt);It.position.set(dt.x,w/2,dt.z),Yt||(It.rotation.y=(zt()-.5)*.4),ee(It)&&vt++}if((Vt==="tall"||Vt==="medium")&&!L&&Qt<ni){const P=Vt==="tall"?38:24;Gt=new ca(14,P,12);const ut=Ts(55,-140),gt=new je(Gt,qt);if(gt.position.set(ut.x,P/2,ut.z),ee(gt),Qt<ni){const w=Ts(-50,-130),B=new je(Gt.clone(),qt);B.position.set(w.x,P/2,w.z),ee(B)}}if(At==="stadiums"&&Qt<ni){const P=(V.midgroundZ.max+V.backgroundZ.min)/2-8,ut=new je(new _u(32,12,8,0,Math.PI*2,0,Math.PI/2.2),new Vn({color:5921378}));ut.position.set(-58,16,P),ee(ut)}if((At==="waterfront"||At==="ferris_wheel")&&L&&E!=null&&Qt<ni){const P=new Vn({color:5917242}),ut=E-12;for(let gt=0;gt<4&&Qt<ni;gt++){const w=new je(new ca(80,1.5,6),P);w.position.set(-35+gt*26,.75,ut-gt*20),ee(w)}}if(At==="ferris_wheel"&&Qt<ni){const P=L&&E!=null?E+10:V.backgroundZ.max-20,ut=new je(new vu(18,1.2,8,24),new Vn({color:2763306}));ut.rotation.x=Math.PI/2,ut.position.set(32,20,P),ee(ut)}if(Qt<ni){const P=new Vn({color:5921362}),ut=new je(new oa(6,7,14,8),P);ut.position.set(-70+zt()*40,7,K-20);const gt=Ts(ut.position.x,ut.position.z);if(ut.position.set(gt.x,7,gt.z),ee(ut)&&Qt<ni){const w=new je(new ca(10,8,6),P);w.position.set(50-zt()*30,4,K-30);const B=Ts(w.position.x,w.position.z);w.position.set(B.x,4,B.z),w.rotation.y=(zt()-.5)*.3,ee(w)}}let Re=Vt==="tall"?4:Vt==="medium"?8:14;ae>=.6&&(Re+=10),Re=Math.min(Re,Zt);const Ae=new ll(4,10,6),_n=new oa(.5,.7,2,6);for(let P=0;P<Re&&Qt<ni;P++){const ut=-50+zt()*100,gt=de+(zt()-.5)*50,w=Ts(ut,gt),B=.7+zt()*.6,q=new Qr,nt=new je(_n,Xt);nt.position.y=1,q.add(nt);const dt=new je(Ae,Xt);dt.position.y=2+5*B,dt.scale.setScalar(B),q.add(dt),q.position.set(w.x,0,w.z),ee(q)}const Pn=new Vn({color:2771498}),Dn=Math.min(ae>=.5?8:4,Pt),Jn=new _u(2,6,5),mi=new ll(1.5,3,5);for(let P=0;P<Dn&&Qt<ni;P++){const ut=(zt()-.5)*100,gt=Math.max(V.midgroundZ.min,V.midgroundZ.max*.3+zt()*(V.midgroundZ.max-V.midgroundZ.min)*.7),w=Ts(ut,gt),B=zt()<.6,q=new je(B?Jn:mi,Pn),nt=.8+zt()*.6;q.scale.setScalar(nt),q.position.set(w.x,(B?2:1.5)*nt,w.z),ee(q)}const $n=7043979;function In(P,ut,gt){gt=Math.max(0,Math.min(1,gt));const w=P>>16&255,B=P>>8&255,q=P&255,nt=ut>>16&255,dt=ut>>8&255,Y=ut&255;return Math.round(w+(nt-w)*gt)<<16|Math.round(B+(dt-B)*gt)<<8|Math.round(q+(Y-q)*gt)}function Xn(P){return P>9e3?"silhouette":P>6e3?"simplified":"full"}function gi(P,ut=2904706){const gt=new Qr;if(P==="silhouette"){const It=new oa(.8,2.2,28,6),$t=new Vn({color:ut}),ue=new je(It,$t);ue.position.y=14,gt.add(ue);const ne=new oa(4,4,.6,8),kt=new Vn({color:In(14870768,ut,.3)}),Lt=new je(ne,kt);return Lt.position.y=28.6,gt.add(Lt),gt}const w=new oa(1.2,2.2,28,P==="simplified"?6:8),B=new Vn({color:ut}),q=new je(w,B);q.position.y=14,gt.add(q);const nt=new oa(4.5,4.8,1.2,P==="simplified"?8:16),dt=new Vn({color:14870768}),Y=new je(nt,dt);if(Y.position.y=28.6,gt.add(Y),P==="full"){const It=new vu(5,.4,8,24),$t=new Vn({color:13358560}),ue=new je(It,$t);ue.rotation.x=Math.PI/2,ue.position.y=29.2,gt.add(ue);const ne=new oa(.15,.2,6,6),kt=new Vn({color:4871528}),Lt=new je(ne,kt);Lt.position.y=31.2,gt.add(Lt)}return gt}const fn=P=>Math.max(.12,Math.min(1,1-P/g*.85)),rn=[2904706,1985899,2450344,1981023,3362155,2968174];if(rt)U.forEach((P,ut)=>{const gt=P.distanceMeters??0,w=rn[ut%rn.length],B=Math.min(1,gt/g*.7),q=gt===0?w:In(w,$n,B),nt=Xn(gt),dt=gi(nt,q);if(ut===0)dt.position.set(0,0,0),dt.scale.setScalar(1);else{const Y=Math.min(D,gt*b),It=(P.bearingDeg??0)*Math.PI/180;dt.position.set(Math.sin(It)*Y,0,-Math.cos(It)*Y),dt.scale.setScalar(fn(gt))}s.add(dt)});else{const P=typeof Zn=="function"?Zn(C,I):500,ut=Xn(P),gt=Math.min(D,P*b),w=Math.sin(z)*gt,B=-Math.cos(z)*gt,q=gi("full",2904706);q.position.set(0,0,0),q.scale.setScalar(1),s.add(q);const nt=fn(P),dt=In(1985899,$n,P/g*.7),Y=gi(ut,dt);Y.position.set(w,0,B),Y.scale.setScalar(nt),s.add(Y)}const an=15,Fn=55,An=80;let Xi=Fn,_i=!1;const va=rt?Math.max(0,U.length-1):1,vi=U.find(P=>P.needleId===ke);let Di=0,si=0;if(va>0){if(vi!=null){const P=Math.min(D,(vi.distanceMeters??0)*b),ut=(vi.bearingDeg??0)*Math.PI/180;Di=Math.sin(ut)*P,si=-Math.cos(ut)*P,_i=!0}else if(!rt){const P=typeof Zn=="function"?Zn(C,I):500,ut=Math.min(D,P*b);Di=Math.sin(z)*ut,si=-Math.cos(z)*ut,_i=!0}if(_i){const P=Math.sin(z)*Fn,ut=Math.cos(z)*Fn,gt=-P,w=an-25,B=-ut,q=Math.sqrt(gt*gt+w*w+B*B)||1,nt=Di-P,dt=si-ut,Y=(nt*gt+w*-25+dt*B)/q,It=Math.sqrt(nt*nt+625+dt*dt)||1,$t=Math.cos(22.5*Math.PI/180);(Y<0||It>0&&Y/It<$t)&&(Xi=Math.min(An,Fn+12))}}const Ui=Math.sin(z)*Xi,Wi=Math.cos(z)*Xi;d.position.set(Ui,an+10,Wi),d.lookAt(0,an,0),d.updateProjectionMatrix();const A=new e2({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});A.setSize(e,i),A.setClearColor(12113128),A.render(s,d);let Z=A.domElement.toDataURL("image/png");const mt=document.createElement("canvas");mt.width=e,mt.height=i;const st=mt.getContext("2d");if(st){st.drawImage(A.domElement,0,0);const P=st.createRadialGradient(e/2,i/2,e*.2,e/2,i/2,e*.75);P.addColorStop(0,"rgba(242, 232, 204,0)"),P.addColorStop(.6,"rgba(200,200,200,0.15)"),P.addColorStop(1,"rgba(80,80,80,0.4)"),st.globalCompositeOperation="multiply",st.fillStyle=P,st.fillRect(0,0,e,i),Z=mt.toDataURL("image/png")}return A.dispose(),Ce.dispose(),he.dispose(),qt.dispose(),Xt.dispose(),Gt&&Gt.dispose(),Z}function Mx(r){return!(r.composedPath?.()??[]).some(i=>!i||typeof i.classList?.contains!="function"?!1:!!(i.classList.contains("exhibit-footer")||i.classList.contains("exhibit-legend")||i.classList.contains("exhibit-header")||i.classList.contains("exhibit-buttons-section")||i.classList.contains("exhibit-data")||i.classList.contains("map-overlay")||i.classList.contains("needle-action-menu")||i.classList.contains("needle-exit-view")||i.tagName==="BUTTON"||i.classList.contains("gmnoprint")||i.getAttribute?.("role")==="button"))}function H2(r){return Mx(r)}function As(r,e,i,s){const l=898311174991017e-20,c=1/(111320*Math.cos(r*Math.PI/180)),d=i*l,p=i*c,m=[];for(let h=0;h<=s;h++){const _=h/s*2*Math.PI;m.push({lat:r+d*Math.cos(_),lng:e+p*Math.sin(_),altitude:0})}return m}function G2(){if(!window.__TWO_NEEDLES_MAPS3D_PROMISE__){const r={key:"AIzaSyDf3DBK0tNq5BPLa5lOd5RHEUgqZwNCIKo",v:"beta"},e="e61fa144b288162660c04ef5";r.mapIds=[e],zS(r),window.__TWO_NEEDLES_MAPS3D_PROMISE__=hu("maps3d")}return window.__TWO_NEEDLES_MAPS3D_PROMISE__}function V2(){const[r,e]=Ft.useState(!1),[i,s]=Ft.useState(!1),[l,c]=Ft.useState(null),[d,p]=Ft.useState(null),[m,h]=Ft.useState(!1),[_,M]=Ft.useState([]),[g,y]=Ft.useState(!0),[b,D]=Ft.useState(!0),[S,x]=Ft.useState(!1),[C,I]=Ft.useState(null),[N,k]=Ft.useState(null),[z,H]=Ft.useState(null),[T,U]=Ft.useState(null),[at,X]=Ft.useState(!1),[$,it]=Ft.useState(!1),[ct,et]=Ft.useState(null),[O,G]=Ft.useState(null),[_t,yt]=Ft.useState(!1),[Ot,F]=Ft.useState(null),[Q,Tt]=Ft.useState(null),[Bt,jt]=Ft.useState(0),[rt,Rt]=Ft.useState(!1),[Ut,zt]=Ft.useState(null),[Qt,ee]=Ft.useState(!1),[nn,_e]=Ft.useState(null),[xe,Ce]=Ft.useState(!1),[he,Be]=Ft.useState(!1),[V,qe]=Ft.useState(!1),[be,Te]=Ft.useState(!1),te=Ft.useRef(null),L=Ft.useRef(at);L.current=at;const E=Ft.useRef(null),J=Ft.useRef(!1),Mt=Ft.useRef(null),At=Ft.useRef(new Map),St=1+_.length,Jt=iu(St),Vt=iu(.33+_.length*R2),ae=iu(45e5+_.length*Mv+_.reduce((w,B)=>w+(B.landValue??0),0)),oe=_.reduce((w,B)=>w+(B.tourismRevenue??eu(B.lat,B.lng)),0),Dt=iu(oe),Et=Ft.useRef(null),qt=Ft.useRef([]),Xt=Ft.useRef(null),Wt=Ft.useRef(null),de=Ft.useRef(null),K=Ft.useRef(null),Gt=Ft.useRef(null),Ht=Ft.useRef(null),Zt=Ft.useRef(null),Pt=Ft.useRef(null),vt=Ft.useRef(null),Yt=Ft.useRef(null),ce=Ft.useRef(null),Re=Ft.useRef(null),Ae=Ft.useRef(null),_n=Ft.useRef(null),Pn=Ft.useRef(null),Dn=Ft.useRef(null),Jn=Ft.useRef(null),mi=Ft.useRef(null),$n=Ft.useRef(null),In=Ft.useRef(null),Xn=Ft.useRef(0),gi=Ft.useRef(null),fn=Ft.useRef(new Map),rn=Ft.useRef(1),an=Ft.useRef(null),Fn=Ft.useRef(null),An=Ft.useRef(null),Xi=Ft.useRef(!1);Ft.useEffect(()=>{Fn.current=C},[C]),Ft.useEffect(()=>{G2().then(()=>e(!0)).catch(w=>{console.error(w),c(w?.message||String(w))})},[]),Ft.useEffect(()=>{fetch(w2).then(w=>w.json()).then(w=>{dp=D2(w)}).catch(w=>console.warn("Seattle neighborhoods GeoJSON load failed, using water bounds only:",w))},[]),Ft.useEffect(()=>{if(!r||!Et.current)return;const w=Et.current;w.center=ye,w.tilt=fh,w.heading=dh,w.range=hh,w.mode="HYBRID",w.mapId="e61fa144b288162660c04ef5",w.style.width="100%",w.style.height="100%";const B=nt=>{(nt?.detail?.isSteady??nt?.isSteady)&&s(!0)};w.addEventListener("gmp-steadystate",B),w.addEventListener("gmp-steadychange",B);const q=window.setTimeout(()=>s(!0),2500);return w.isSteady&&s(!0),()=>{window.clearTimeout(q),w.removeEventListener("gmp-steadystate",B),w.removeEventListener("gmp-steadychange",B)}},[r]),Ft.useEffect(()=>{if(!i||!Et.current||m)return;const w=Et.current;(async()=>{try{const B=await hu("maps3d"),{Model3DElement:q,Polygon3DElement:nt}=B;if(q){if(gi.current=q,de.current)w.contains(de.current)||w.appendChild(de.current);else{const Y=new q({src:_v,position:{lat:uu.lat,lng:uu.lng,altitude:(uu.altitude??0)+d2},scale:gh,orientation:{tilt:270}});de.current=Y,w.appendChild(Y)}const dt=new q({src:mh,position:ye,scale:gh,orientation:{tilt:270}});K.current=dt,w.appendChild(dt)}else console.warn("Model3DElement not in maps3d library (try v=alpha). Ghost model disabled.");if(nt){const dt=new nt({path:As(ye.lat,ye.lng,Ci,bs),fillColor:"rgba(136, 181, 216, 0.25)",strokeColor:"rgba(59, 127, 184, 0.8)",strokeWidth:2,altitudeMode:"RELATIVE_TO_GROUND"});Gt.current=dt;const Y=new nt({path:As(ye.lat,ye.lng,ph,bs),fillColor:"rgba(232, 184, 66, 0.35)",strokeColor:"rgba(232, 184, 66, 0.6)",strokeWidth:2,altitudeMode:"RELATIVE_TO_GROUND"});Ht.current=Y;const It=new nt({path:As(ye.lat,ye.lng,Ci,bs),fillColor:"rgba(136, 181, 216, 0.45)",strokeColor:"rgba(59, 127, 184, 1)",strokeWidth:3,altitudeMode:"RELATIVE_TO_GROUND"});Zt.current=It}else console.warn("Polygon3DElement missing; footprint disabled.");h(!0)}catch(B){console.error(B)}})()},[i,m]),Ft.useEffect(()=>{const w=Wt.current,B=Et.current;if(!w||!B||!m)return;const q=Y=>Y.some(It=>It?.classList?.contains?.("needle-action-menu")),nt=Y=>{const It=Y.composedPath?.()??[],$t=typeof document.elementsFromPoint=="function"?document.elementsFromPoint(Y.clientX,Y.clientY):It,ue=q(It)||q($t);if(!Mx(Y)){ue||(I(null),F(null));return}let ne=Lv(B,Y.clientX,Y.clientY,An);if(!ne){const kt=w.getBoundingClientRect();ne=Nv(B,kt,Y.clientX,Y.clientY)}if(an.current=ne,p(ne),!b&&!T&&!at){if(!ue)if(ne){const kt=Zn(ne,{lat:ye.lat,lng:ye.lng}),pe=(qt.current??[]).reduce((Je,vn)=>{const we=Zn(ne,{lat:vn.lat,lng:vn.lng});return we<Je.d?{id:vn.id,d:we}:Je},{id:null,d:1/0}),Nt=kt<Ci,re=pe.id!=null&&pe.d<Ci;Nt&&(!re||kt<=pe.d)?I(ke):re?I(pe.id):(I(null),F(null))}else I(null),F(null);if(Fn.current==null&&ne){const kt=qt.current,Lt=Zn(ne,{lat:ye.lat,lng:ye.lng}),pe=Lt<Ci;if(kt?.length){const Nt=kt.reduce((re,Fe)=>{const Je=Zn(ne,{lat:Fe.lat,lng:Fe.lng});return Je<re.d?{id:Fe.id,d:Je}:re},{id:null,d:1/0});if(pe&&(!Nt.id||Nt.d>=Ci||Lt<=Nt.d))k(ke);else if(Nt.id!=null&&Nt.d<Ci){const re=N;if(re==null)k(Nt.id);else if(Nt.id===re)k(Nt.id);else{const Fe=kt.find(vn=>vn.id===re),Je=Fe?Zn(ne,{lat:Fe.lat,lng:Fe.lng}):re===ke?Lt:1/0;Nt.d<Je*.75&&k(Nt.id)}}else k(null)}else k(pe?ke:null)}}else k(null)},dt=()=>{an.current=null,p(null),k(null),I(null),F(null)};return w.addEventListener("pointermove",nt),w.addEventListener("pointerleave",dt),()=>{w.removeEventListener("pointermove",nt),w.removeEventListener("pointerleave",dt)}},[m,b,T,at,C,N]);const _i=Ft.useCallback(()=>{if(N==null){Tt(null);return}const w=Et.current,B=Wt.current;if(!w||!B){Tt(null);return}if(N===ke){const Y=At.current.get(ke)??sl(w,B,{lat:ye.lat,lng:ye.lng},An);Tt(Y??null);return}const q=_.find(Y=>Y.id===N);if(!q){Tt(null);return}const nt=B.getBoundingClientRect(),dt=fu(w,nt,{lat:q.lat,lng:q.lng});Tt(dt||null)},[N,_]);Ft.useLayoutEffect(()=>{_i()},[_i]),Ft.useEffect(()=>{const w=Et.current,B=Wt.current;if(!w||!B||N==null)return;const q=()=>_i();w.addEventListener("gmp-centerchange",q),w.addEventListener("gmp-headingchange",q),w.addEventListener("gmp-rangechange",q);const nt=new ResizeObserver(q);return nt.observe(B),()=>{w.removeEventListener("gmp-centerchange",q),w.removeEventListener("gmp-headingchange",q),w.removeEventListener("gmp-rangechange",q),nt.disconnect()}},[N,_i]);const va=Ft.useCallback(()=>{const w=Et.current,B=Wt.current;if(!w||!B)return;const q=At.current;q.clear();const nt=sl(w,B,{lat:ye.lat,lng:ye.lng},An);nt!=null&&q.set(ke,nt);for(const dt of _){const Y=sl(w,B,{lat:dt.lat,lng:dt.lng},An);Y!=null&&q.set(dt.id,Y)}jt(dt=>dt+1),F(dt=>C==null?null:At.current.get(C)??null)},[_,C]);Ft.useEffect(()=>{va()},[va]),Ft.useEffect(()=>{const w=Et.current,B=Wt.current;if(!w||!B)return;const q=()=>{const dt=At.current;dt.clear();const Y=sl(w,B,{lat:ye.lat,lng:ye.lng},An);Y!=null&&dt.set(ke,Y);for(const It of _){const $t=sl(w,B,{lat:It.lat,lng:It.lng},An);$t!=null&&dt.set(It.id,$t)}jt(It=>It+1),F(It=>C!=null?At.current.get(C)??null:null)};w.addEventListener("gmp-centerchange",q),w.addEventListener("gmp-headingchange",q),w.addEventListener("gmp-rangechange",q),w.addEventListener("gmp-tiltchange",q);const nt=new ResizeObserver(q);return nt.observe(B),()=>{w.removeEventListener("gmp-centerchange",q),w.removeEventListener("gmp-headingchange",q),w.removeEventListener("gmp-rangechange",q),w.removeEventListener("gmp-tiltchange",q),nt.disconnect()}},[_,C]),Ft.useLayoutEffect(()=>{F(C!=null?At.current.get(C)??null:null)},[C]),Ft.useEffect(()=>{if(!rt)return;const w=B=>{B.key==="Escape"&&Rt(!1)};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[rt]),Ft.useEffect(()=>{if(!i||!Et.current)return;const B=Et.current.innerMap;B&&hu("maps").then(({OverlayView:q})=>{class nt extends q{onAdd(){}draw(){Xi.current=!0}onRemove(){Xi.current=!1}}const dt=new nt;dt.setMap(B),An.current=dt}).catch(()=>{})},[i]),Ft.useEffect(()=>{const w=Wt.current,B=Et.current;if(!w||!B||!m)return;const q=async nt=>{if(!H2(nt))return;let dt=Lv(B,nt.clientX,nt.clientY,An);if(!dt){const kt=w.getBoundingClientRect();dt=Nv(B,kt,nt.clientX,nt.clientY)}const Y=dt??an.current;if(!Y)return;if(T!=null){const kt=await Iv(Y.lat,Y.lng),Lt=bv(Y.lat,Y.lng,kt);if(g)if(Tv(Y.lat,Y.lng)){const Nt=ce.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else if(Av(Y.lat,Y.lng)){const Nt=Ae.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else if(Rv(Y.lat,Y.lng)){const Nt=Re.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else if(Cv(Y.lat,Y.lng)){const Nt=_n.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else if(wv(Y.lat,Y.lng)||Dv(Y.lat,Y.lng)||Uv(Y.lat,Y.lng)){const Nt=vt.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else if(Lt){const Nt=Yt.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}else{const Nt=Pt.current;Nt&&(Nt.volume=.9,Nt.currentTime=0,Nt.play().catch(re=>console.error("audio play failed",re)))}const pe=nu(Y.lat,Y.lng);M(Nt=>Nt.map(re=>re.id===T?{...re,lat:Y.lat,lng:Y.lng,altitude:Y.altitude??0,neighborhoodLabel:pe.neighborhoodLabel,landValue:pe.landValue,ratePerSqFt:pe.ratePerSqFt,tourismRevenue:eu(Y.lat,Y.lng)}:re)),U(null),D(!1);return}if(!b&&!at){let Lt=(nt.composedPath?.()??[]).find(pe=>pe?.dataset?.needleId)?.dataset?.needleId;if(!Lt&&_.length>0){const pe=_.reduce((Nt,re)=>{const Fe=Zn(Y,{lat:re.lat,lng:re.lng});return Fe<Nt.d?{id:re.id,d:Fe}:Nt},{id:null,d:1/0});pe.id!=null&&pe.d<Ci&&(Lt=String(pe.id))}if(Lt==null){const pe=Zn(Y,{lat:ye.lat,lng:ye.lng}),Nt=_.reduce((re,Fe)=>{const Je=Zn(Y,{lat:Fe.lat,lng:Fe.lng});return Je<re.d?{id:Fe.id,d:Je}:re},{id:null,d:1/0});pe<Ci&&(Nt.id==null||Nt.d>=Ci||pe<=Nt.d)&&(Lt=String(ke))}if(Lt!=null){const pe=Number(Lt),Nt=pe===ke?null:_.find(re=>re.id===pe);if(Nt||pe===ke){if(Nt){const re=Et.current,Fe=w.getBoundingClientRect(),Je=re&&Fe?fu(re,Fe,{lat:Nt.lat,lng:Nt.lng}):null;Je&&(H({x:Je.x,y:Je.y}),setTimeout(()=>H(null),280))}k(null),I(pe);return}}I(null),F(null)}if(!b)return;const It=Xn.current+1,$t=await Iv(Y.lat,Y.lng),ue=bv(Y.lat,Y.lng,$t);if(g){if(Tv(Y.lat,Y.lng)){const kt=ce.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else if(Av(Y.lat,Y.lng)){const kt=Ae.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else if(Rv(Y.lat,Y.lng)){const kt=Re.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else if(Cv(Y.lat,Y.lng)){const kt=_n.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else if(wv(Y.lat,Y.lng)||Dv(Y.lat,Y.lng)||Uv(Y.lat,Y.lng)){const kt=vt.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else if(ue){const kt=Yt.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}else{const kt=Pt.current;kt&&(kt.volume=.9,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}if(It>=5&&(It-5)%10===0){const kt=Pn.current;kt&&(kt.volume=.2,kt.currentTime=0,kt.play().catch(Lt=>console.error("audio play failed",Lt)))}}const ne=nu(Y.lat,Y.lng);M(kt=>[...kt,{id:rn.current++,lat:Y.lat,lng:Y.lng,altitude:Y.altitude??0,neighborhoodLabel:ne.neighborhoodLabel,landValue:ne.landValue,ratePerSqFt:ne.ratePerSqFt,tourismRevenue:eu(Y.lat,Y.lng)}]),D(!1)};return w.addEventListener("click",q,!0),()=>w.removeEventListener("click",q,!0)},[m,g,b,T,at,_]),Ft.useEffect(()=>{const w=Et.current,B=gi.current;if(!w||!B)return;const q=fn.current;for(const nt of _){if(q.has(nt.id))continue;const dt=new B({src:fp,position:{lat:nt.lat,lng:nt.lng,altitude:nt.altitude??0},scale:gh,orientation:{tilt:270}});dt.dataset.needleId=String(nt.id),q.set(nt.id,dt),w.appendChild(dt)}},[_]),Ft.useEffect(()=>{Xn.current=_.length,qt.current=_},[_]),Ft.useEffect(()=>(_.length>=1&&!_t&&(Xt.current=window.setTimeout(()=>{yt(!0)},2e3)),()=>{Xt.current&&(window.clearTimeout(Xt.current),Xt.current=null)}),[_.length,_t]),Ft.useEffect(()=>{if(!O)return;const w=setTimeout(()=>G(null),450);return()=>clearTimeout(w)},[O]),Ft.useEffect(()=>{if(!at)return;const w=Et.current;if(!w)return;const B=E.current;if(!B?.center)return;const q=()=>{if(!L.current||!J.current)return;const nt=w.center,dt=w.range??B.range,Y=w.tilt??B.tilt,It=w.heading??0,$t=Math.abs((nt?.lat??0)-B.center.lat)>xv||Math.abs((nt?.lng??0)-B.center.lng)>xv,ue=Math.abs(dt-B.range)>v2,ne=Math.abs(Y-B.tilt)>x2;let kt=Math.abs(It%360-B.heading%360);kt>180&&(kt=360-kt);const Lt=kt>M2;($t||ue||ne||Lt)&&X(!1)};return w.addEventListener("gmp-centerchange",q),w.addEventListener("gmp-rangechange",q),w.addEventListener("gmp-tiltchange",q),w.addEventListener("gmp-headingchange",q),()=>{w.removeEventListener("gmp-centerchange",q),w.removeEventListener("gmp-rangechange",q),w.removeEventListener("gmp-tiltchange",q),w.removeEventListener("gmp-headingchange",q)}},[at]),Ft.useEffect(()=>{at||(J.current=!1,Mt.current&&(clearTimeout(Mt.current),Mt.current=null))},[at]),Ft.useEffect(()=>{const w=Et.current,B=K.current,q=Gt.current;if(!w||!q)return;b&&d?(B&&(B.position=d,B.parentElement||w.appendChild(B),B.classList?.add?.("needle-model-outlined")),q.path=As(d.lat,d.lng,Ci,bs),q.parentElement||w.appendChild(q)):(B?.classList?.remove?.("needle-model-outlined"),B?.parentElement&&w.removeChild(B),q.parentElement&&w.removeChild(q))},[b,d]),Ft.useEffect(()=>{const w=Et.current,B=Ht.current;if(!w||!B)return;const q=N!=null&&C==null&&!b&&!T&&!at,nt=q&&N!==ke?_.find(Y=>Y.id===N):null;nt?(B.path=As(nt.lat,nt.lng,ph,bs),B.parentElement||w.appendChild(B)):q&&N===ke?(B.path=As(ye.lat,ye.lng,ph,bs),B.parentElement||w.appendChild(B)):B.parentElement&&w.removeChild(B)},[N,C,b,T,at,_]),Ft.useEffect(()=>{const w=Et.current,B=Zt.current;if(!w||!B)return;const q=C!=null&&!b&&!T&&!at,nt=q&&C!==ke?_.find(Y=>Y.id===C):null;nt?(B.path=As(nt.lat,nt.lng,Ci,bs),B.parentElement||w.appendChild(B)):q&&C===ke?(B.path=As(ye.lat,ye.lng,Ci,bs),B.parentElement||w.appendChild(B)):B.parentElement&&w.removeChild(B)},[C,b,T,at,_]),Ft.useEffect(()=>{const w=fn.current,B=C!=null&&!b&&!T&&!at?C:null;w.forEach((q,nt)=>{if(!q)return;const dt=nt===B;q.src!==void 0&&(q.src=dt?mh:fp),q?.classList!=null&&(dt?q.classList.add("needle-model-outlined"):q.classList.remove("needle-model-outlined"))})},[C,b,T,at]),Ft.useEffect(()=>{const w=de.current;if(!w)return;const B=C===ke&&!b&&!T&&!at;w.src!==void 0&&(w.src=B?mh:_v),w?.classList!=null&&(B?w.classList.add("needle-model-outlined"):w.classList.remove("needle-model-outlined"))},[C,b,T,at]);const vi=!r||!i,Di=()=>{const w=Pt.current;w&&(w.volume=0,w.play().then(()=>{w.pause(),w.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const B=vt.current;B&&(B.volume=0,B.play().then(()=>{B.pause(),B.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const q=Pn.current;q&&(q.volume=0,q.play().then(()=>{q.pause(),q.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const nt=Jn.current;nt&&(nt.volume=0,nt.play().then(()=>{nt.pause(),nt.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const dt=mi.current;dt&&(dt.volume=0,dt.play().then(()=>{dt.pause(),dt.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const Y=Dn.current;Y&&(Y.volume=0,Y.play().then(()=>{Y.pause(),Y.currentTime=0}).catch($t=>console.error("audio play failed",$t)));const It=In.current;It&&(It.volume=0,It.play().then(()=>{It.pause(),It.currentTime=0}).catch($t=>console.error("audio play failed",$t)))},si=()=>{Di(),y(!0)},Ui=()=>{Di(),y(!1)},Wi=w=>{g&&Dn.current&&(Dn.current.volume=.6,Dn.current.currentTime=0,Dn.current.play().catch(It=>console.error("poof play failed",It)));const B=Et.current,q=Wt.current,nt=_.find(It=>It.id===w),dt=_.filter(It=>It.id!==w).length===0;M(It=>It.filter($t=>$t.id!==w));const Y=fn.current.get(w);if(Y?.parentElement&&Y.parentElement.removeChild(Y),fn.current.delete(w),nt&&B&&q){const It=q.getBoundingClientRect(),$t=fu(B,It,{lat:nt.lat,lng:nt.lng});$t&&G({x:$t.x,y:$t.y})}I(null),F(null),dt&&D(!0)},A=w=>{g&&Jn.current&&(Jn.current.volume=.5,Jn.current.currentTime=0,Jn.current.play().catch(q=>console.error("move play failed",q)));const B=fn.current.get(w);B?.parentElement&&B.parentElement.removeChild(B),fn.current.delete(w),U(w),D(!0),I(null),F(null)},Z=w=>{const B=w===ke,q=B?null:_.find(kt=>kt.id===w),nt=Et.current,dt=B?{lat:ye.lat,lng:ye.lng}:q?{lat:q.lat,lng:q.lng}:null;if(!dt||!nt)return;g&&mi.current&&(mi.current.volume=.5,mi.current.currentTime=0,mi.current.play().catch(kt=>console.error("visit play failed",kt))),I(null),F(null),et(w),_e(w),X(!0),it(!1),J.current=!1,Mt.current&&(clearTimeout(Mt.current),Mt.current=null);const Y={lat:ye.lat,lng:ye.lng},ue=(du(dt,Y)+15+360)%360,ne={center:{lat:dt.lat,lng:dt.lng,altitude:p2},tilt:g2,range:m2,heading:ue};E.current=ne,typeof nt.flyCameraTo=="function"?nt.flyCameraTo({endCamera:ne,durationMillis:vv}):(nt.center=ne.center,nt.tilt=ne.tilt,nt.range=ne.range,nt.heading=ne.heading),Mt.current=window.setTimeout(()=>{J.current=!0,Mt.current=null},vv+_2)},mt=()=>{Mt.current&&(clearTimeout(Mt.current),Mt.current=null),J.current=!1,E.current=null;const w=Et.current;w&&(w.center=ye,w.tilt=fh,w.heading=dh,w.range=hh),et(null),X(!1),it(!1),_e(null)},st=Ft.useCallback(()=>{const w=document.createElement("canvas");w.width=400,w.height=300;const B=w.getContext("2d");return B?(B.fillStyle="#F2E8CC",B.fillRect(0,0,w.width,w.height),B.fillStyle="#13243F",B.font="16px Work Sans, sans-serif",B.textAlign="center",B.fillText("Screenshot unavailable",w.width/2,w.height/2),w.toDataURL("image/png")):null},[]),P=Ft.useCallback(()=>{te.current?.abort(),te.current=null,zt(null),ee(!1)},[]);Ft.useEffect(()=>{if(!Ut?.id){Be(!1),qe(!1),Te(!1);return}Be(!1),qe(!1),Te(!1);const B=window.setTimeout(()=>Be(!0),5e3),q=window.setTimeout(()=>qe(!0),1e4),nt=window.setTimeout(()=>Be(!1),12e3),dt=window.setTimeout(()=>Te(!0),15e3);return()=>{window.clearTimeout(B),window.clearTimeout(q),window.clearTimeout(nt),window.clearTimeout(dt),Be(!1),qe(!1),Te(!1)}},[Ut?.id]);const ut=Ft.useCallback(async()=>{g&&$n.current&&($n.current.volume=.5,$n.current.currentTime=0,$n.current.play().catch(Oe=>console.error("camera shutter play failed",Oe))),Ce(!0),setTimeout(()=>Ce(!1),150);const B=nn??ct,q=B===ke,nt=q?null:_.find(Oe=>Oe.id===B),dt=q?ye.lat:nt?.lat??ye.lat,Y=q?ye.lng:nt?.lng??ye.lng,It=q?1:_.findIndex(Oe=>Oe.id===B)+2,$t=Number(dt.toFixed(5)),ue=Number(Y.toFixed(5)),ne=Number(ye.lat.toFixed(5)),kt=Number(ye.lng.toFixed(5)),Lt=Et.current;let pe,Nt,re;Lt&&(pe=Lt.heading??void 0,Nt=Lt.tilt??void 0,re=Lt.range??void 0);const Fe=nt?.landValue??(q?nu(dt,Y).landValue:0),Je=Mv,vn=nt?.tourismRevenue??eu(dt,Y),we=Date.now(),on={lat:dt,lng:Y},Un={lat:ne,lng:kt},dn=12e3,Wn=[];Wn.push({needleId:B,lat:dt,lng:Y,distanceMeters:0,bearingDeg:0}),q||Wn.push({needleId:ke,lat:ne,lng:kt,distanceMeters:Zn(on,Un),bearingDeg:du(on,Un)});const qi=_.filter(Oe=>Oe.id!==B).map(Oe=>{const ri=Zn(on,{lat:Oe.lat,lng:Oe.lng}),ti=du(on,{lat:Oe.lat,lng:Oe.lng});return{needleId:Oe.id,lat:Oe.lat,lng:Oe.lng,distanceMeters:ri,bearingDeg:ti}}).filter(Oe=>Oe.distanceMeters<=dn);Wn.push(...qi);const xa={visitedLat:dt,visitedLng:Y,originalLat:ne,originalLng:kt,cameraHeading:pe,cameraTilt:Nt,cameraRange:re,landAcquisition:Fe,constructionCost:Je,projectedTourismRevenue:vn,createdAt:we,needleId:B,needleNumber:It,visibleNeedles:Wn};let Ya;try{Ya=z2(xa,1200,900)}catch(Oe){console.warn("Placeholder polaroid render failed:",Oe?.message??Oe),Ya=st()}Ya||(Ya=st());const sr=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`polaroid-${we}`;zt({id:sr,dataUrl:Ya,placeholderUrl:Ya,aiUrl:null,needleId:B,needleNumber:It,lat:$t,lng:ue,createdAt:we,status:"developing"}),ee(!0);const ja=new AbortController;te.current=ja;try{const Oe=await fetch("/api/generate-polaroid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...xa,stylePreset:"photoreal_postcard"}),signal:ja.signal}),ri=await Oe.json().catch(()=>({}));Oe.ok&&ri.dataUrl?zt(ti=>ti&&ti.id===sr?{...ti,dataUrl:ri.dataUrl,aiUrl:ri.dataUrl,status:"ready"}:ti):zt(ti=>ti&&ti.id===sr?{...ti,status:"failed"}:ti)}catch(Oe){Oe?.name!=="AbortError"&&zt(ri=>ri&&ri.id===sr?{...ri,status:"failed"}:ri)}finally{te.current===ja&&(te.current=null),ee(!1)}},[g,nn,ct,_,st]),gt=()=>{g&&Dn.current&&(Dn.current.volume=.6,Dn.current.currentTime=0,Dn.current.play().catch(q=>console.error("poof play failed",q)));const w=Et.current,B=fn.current;B.forEach(q=>{q?.parentElement&&q.parentElement.removeChild(q)}),B.clear(),M([]),U(null),I(null),et(null),X(!1),it(!1),yt(!1),D(!0),w&&(w.center=ye,w.tilt=fh,w.heading=dh,w.range=hh)};return ht.jsxs("div",{className:"exhibit-page",children:[ht.jsx("audio",{ref:Pt,src:"./audio/crunch.mp3",preload:"auto"}),ht.jsx("audio",{ref:vt,src:"./audio/glass-smash.mp3",preload:"auto"}),ht.jsx("audio",{ref:Yt,src:"./audio/splash.mp3",preload:"auto"}),ht.jsx("audio",{ref:ce,src:"./audio/dog-bark.mp3",preload:"auto"}),ht.jsx("audio",{ref:Re,src:"./audio/baseball-organ.mp3",preload:"auto"}),ht.jsx("audio",{ref:Ae,src:"./audio/crowd-stomp.mp3",preload:"auto"}),ht.jsx("audio",{ref:_n,src:"./audio/air-horn.mp3",preload:"auto"}),ht.jsx("audio",{ref:Pn,src:"./audio/wilhelm.mp3",preload:"auto"}),ht.jsx("audio",{ref:Dn,src:"./audio/poof.mp3",preload:"auto"}),ht.jsx("audio",{ref:Jn,src:"./audio/move.mp3",preload:"auto"}),ht.jsx("audio",{ref:mi,src:"./audio/visit.mp3",preload:"auto"}),ht.jsx("audio",{ref:$n,src:"./audio/camera-shutter.mp3",preload:"auto"}),ht.jsx("audio",{ref:In,src:"./audio/percussive-hit.mp3",preload:"auto"}),ht.jsx("button",{type:"button",className:"exhibit-sound-toggle",onClick:g?Ui:si,children:ht.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24","aria-hidden":!0,children:[ht.jsx("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"currentColor"}),g?ht.jsx("path",{d:"M16 9c1.6 1.4 1.6 4.6 0 6M18.5 7c2.8 2.4 2.8 7.6 0 10",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"square"}):ht.jsx("path",{d:"M16 9.5l5 5M21 9.5l-5 5",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"square"})]})}),ht.jsxs("div",{className:"exhibit-panel",children:[ht.jsx("span",{className:"exhibit-registration-top-left","aria-hidden":"true"}),ht.jsx("span",{className:"exhibit-registration-top-right","aria-hidden":"true"}),ht.jsx("span",{className:"exhibit-registration-bottom-left","aria-hidden":"true"}),ht.jsx("span",{className:"exhibit-registration-bottom-right","aria-hidden":"true"}),ht.jsxs("header",{className:"exhibit-header",children:[ht.jsx("h1",{className:"exhibit-title",children:"PLACE NEEDLES"}),ht.jsxs("p",{className:"exhibit-subhead",children:["Civic expansion simulator by"," ",ht.jsx("span",{className:"exhibit-header-link",children:"Two Space Needles campaign"}),"."]}),ht.jsxs("p",{className:"exhibit-instructions",children:["Click to place Needle. Observe civic impact."," ",ht.jsx("button",{type:"button",className:"exhibit-credits-button",onClick:()=>Rt(!0),"aria-label":"Open credits",children:"Credits"})]})]}),ht.jsxs("div",{className:"exhibit-viewport",children:[ht.jsxs("div",{ref:Wt,className:`exhibit-viewport-inner${b&&S?" is-placing":""}`,onPointerEnter:()=>x(!0),onPointerLeave:()=>x(!1),children:[r&&ht.jsx("gmp-map-3d",{ref:Et,style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0}}),ht.jsxs("div",{className:"needle-ui-overlay","aria-hidden":"true",children:[(()=>{const w=N!=null&&C==null&&!b&&!T&&!at,B=w&&N!==ke?_.find(nt=>nt.id===N):null,q=w&&N===ke;return ht.jsxs(ht.Fragment,{children:[w&&B&&Q&&ht.jsx("div",{className:"needle-click-hint needle-click-hint-hit-only","aria-label":"Click to open needle menu","data-needle-id":B.id,style:{position:"absolute",left:Q.x,top:Q.y,transform:"translate(-50%, -50%)",zIndex:9996}}),q&&Q&&ht.jsx("div",{className:"needle-click-hint needle-click-hint-hit-only","aria-label":"Click to open needle menu","data-needle-id":ke,style:{position:"absolute",left:Q.x,top:Q.y,transform:"translate(-50%, -50%)",zIndex:9996}}),z&&ht.jsx("div",{className:"needle-click-press","aria-hidden":!0,style:{position:"absolute",left:z.x,top:z.y,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:9997}})]})})(),(()=>{const w=C!=null&&!b&&!T&&!at,B=C===ke,q=w&&!B?_.find($t=>$t.id===C):null,nt=Wt.current,dt=w?Ot:null,Y=nt?.getBoundingClientRect?.(),It=dt!=null&&Number.isFinite(dt.x)&&Number.isFinite(dt.y)&&Y!=null&&dt.x>=0&&dt.y>=0&&dt.x<=Y.width&&dt.y<=Y.height;return w&&(q!=null||B)&&dt&&It&&ht.jsxs("div",{className:"needle-action-menu",style:{position:"absolute",left:dt.x,top:dt.y,transform:"translate(12px, -12px)",pointerEvents:"auto",zIndex:9998,display:"flex",flexDirection:"column",gap:0},children:[B&&ht.jsx("div",{className:"needle-action-menu-title","aria-hidden":!0,children:"Space Needle #1"}),ht.jsx("button",{type:"button",onClick:()=>Z(C),children:"View Needle"}),!B&&ht.jsx("button",{type:"button",onClick:()=>A(C),children:"Move Needle"}),!B&&_.length>1&&ht.jsx("button",{type:"button",className:"exhibit-btn-destructive",onClick:()=>Wi(C),children:"Remove Needle"})]})})(),O&&ht.jsx("div",{className:"needle-poof","aria-hidden":!0,style:{position:"absolute",left:O.x,top:O.y,transform:"translate(-50%, -50%)",width:60,height:60,pointerEvents:"none",zIndex:9997}})]})]}),at&&ht.jsxs("div",{className:"needle-visit-actions map-overlay",style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:100,pointerEvents:"none",display:"flex",alignItems:"center",gap:16},children:[ht.jsx("button",{type:"button",className:"needle-exit-view exhibit-btn-primary",style:{pointerEvents:"auto"},onClick:mt,children:"Exit View"}),ht.jsx("button",{type:"button",className:"needle-take-photo exhibit-btn-primary",style:{pointerEvents:"auto"},disabled:Qt,onClick:ut,children:"Take Photo"})]}),xe&&ht.jsx("div",{className:"photo-flash-overlay map-overlay","aria-hidden":!0,style:{pointerEvents:"none"}}),vi&&ht.jsx("div",{className:"exhibit-loading-overlay map-overlay",children:"Loading map…"}),l&&ht.jsxs("div",{className:"exhibit-error-overlay map-overlay",children:[ht.jsx("div",{className:"exhibit-error-title",children:"Map load error"}),ht.jsx("div",{children:l})]})]}),ht.jsxs("div",{className:"exhibit-buttons-section",children:[ht.jsx("button",{type:"button",className:"exhibit-btn-clear",disabled:_.length<1,onClick:()=>{_.length<1||gt()},children:"Erase Needles"}),ht.jsx("button",{type:"button",className:"exhibit-place-another",disabled:_.length<1&&!b||T!=null,onClick:()=>{_.length<1&&!b||T!=null||(g&&In.current&&(In.current.volume=.5,In.current.currentTime=0,In.current.play().catch(w=>console.error("place needle sound play failed",w))),et(null),D(!0))},children:"Place Needle"})]}),ht.jsxs("div",{className:"exhibit-data",children:[ht.jsx("div",{className:"exhibit-live-estimate",children:(()=>{const w=b&&d?nu(d.lat,d.lng):null,B=at&&ct!=null,q=!B&&!b&&!T&&!at&&C===ke,nt=B&&ct!==ke?_.find(ue=>ue.id===ct):!B&&!b&&!T&&!at&&C!=null&&C!==ke?_.find(ue=>ue.id===C):null,dt=B&&ct===ke,Y=T!=null?_.find(ue=>ue.id===T):null,It=dt||q?"Space Needle #1":nt!=null?`Space Needle #${_.findIndex(ue=>ue.id===(B?ct:C))+2}`:"LIVE ESTIMATE",$t=b&&d?{lat:d.lat,lng:d.lng}:nt||Y?{lat:(nt||Y).lat,lng:(nt||Y).lng}:null;return ht.jsxs(ht.Fragment,{children:[ht.jsx("h3",{children:It}),dt||q?ht.jsxs(ht.Fragment,{children:[ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Year constructed"}),ht.jsx("span",{className:"exhibit-live-value",children:"1962"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Land required"}),ht.jsx("span",{className:"exhibit-live-value",children:"0.33 acres"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Total Cost"}),ht.jsx("span",{className:"exhibit-live-value",children:"$4.5M"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Coordinates"}),ht.jsx("span",{className:"exhibit-live-value",children:vh(ye.lat,ye.lng)})]})]}):ht.jsxs(ht.Fragment,{children:[ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Neighborhood"}),ht.jsx("span",{className:"exhibit-live-value",children:w?w.neighborhoodLabel:nt?nt.neighborhoodLabel:"—"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Land Acquisition"}),ht.jsx("span",{className:"exhibit-live-value",children:w?_h(w.landValue):nt!=null&&nt.landValue!=null?_h(nt.landValue):"—"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Rate"}),ht.jsx("span",{className:"exhibit-live-value",children:w?Ov(w.ratePerSqFt):nt!=null&&nt.ratePerSqFt!=null?Ov(nt.ratePerSqFt):"—"})]}),ht.jsxs("div",{className:"exhibit-live-row",children:[ht.jsx("span",{className:"exhibit-live-label",children:"Coordinates"}),ht.jsx("span",{className:"exhibit-live-value",children:$t?vh($t.lat,$t.lng):"—"})]})]})]})})()}),ht.jsxs("div",{className:"exhibit-civic",children:[ht.jsx("h3",{children:"CIVIC IMPACT"}),ht.jsxs("div",{className:"exhibit-civic-row",children:[ht.jsx("span",{className:"exhibit-civic-label",children:"Needles Constructed"}),ht.jsx("span",{className:"exhibit-civic-value",children:Math.round(Jt)})]}),ht.jsxs("div",{className:"exhibit-civic-row",children:[ht.jsx("span",{className:"exhibit-civic-label",children:"Land Required"}),ht.jsxs("span",{className:"exhibit-civic-value",children:[Vt.toFixed(2)," acres"]})]}),ht.jsxs("div",{className:"exhibit-civic-row",children:[ht.jsx("span",{className:"exhibit-civic-label",children:"Estimated Total Cost"}),ht.jsx("span",{className:"exhibit-civic-value",children:_h(ae)})]}),ht.jsxs("div",{className:"exhibit-civic-row",children:[ht.jsx("span",{className:"exhibit-civic-label",children:"Projected Tourism Revenue"}),ht.jsx("span",{className:"exhibit-civic-value",children:I2(Dt)})]})]})]})]}),Ut&&ht.jsxs(ht.Fragment,{children:[ht.jsx("div",{className:"exhibit-polaroid-backdrop","aria-hidden":!0,onClick:P}),ht.jsx("div",{className:"exhibit-polaroid-wrap",role:"dialog","aria-label":"Polaroid photo",children:ht.jsxs("div",{className:"exhibit-polaroid-card",children:[ht.jsx("button",{type:"button",className:"exhibit-polaroid-close",onClick:P,"aria-label":"Close polaroid",children:"×"}),ht.jsxs("div",{className:"exhibit-polaroid-frame",children:[Ut.dataUrl?ht.jsx("img",{src:Ut.dataUrl,alt:"",className:"exhibit-polaroid-img"}):ht.jsx("div",{className:"exhibit-polaroid-unavailable",children:"Screenshot unavailable"}),Ut.status==="developing"&&ht.jsx("div",{className:"exhibit-polaroid-developing",children:"Developing…"}),V&&ht.jsx("div",{className:"exhibit-polaroid-blackout","aria-hidden":!0}),he&&ht.jsx("div",{className:"exhibit-polaroid-battery-corner","aria-hidden":!0,children:ht.jsxs("div",{className:"polaroid-warning blink",children:[ht.jsx("span",{className:"led"}),ht.jsx("span",{className:"battery"}),ht.jsx("span",{className:"polaroid-warning-label",children:"CAMERA BATTERY DEAD"})]})}),be&&ht.jsxs("div",{className:"exhibit-polaroid-ascii-overlay","aria-hidden":!0,children:[ht.jsxs("div",{className:"exhibit-polaroid-ascii-needles",children:[ht.jsx("pre",{className:"exhibit-polaroid-ascii-needle",children:`         |
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
    -----------`}),ht.jsx("pre",{className:"exhibit-polaroid-ascii-needle",children:`         |
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
    -----------`})]}),ht.jsx("div",{className:"exhibit-polaroid-production",children:ht.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-polaroid-production-link",children:"an Extra Good Studio production"})})]})]}),ht.jsxs("div",{className:"exhibit-polaroid-caption",children:[ht.jsxs("div",{className:"exhibit-polaroid-greeting",children:["Greetings from Space Needle #",Ut.needleNumber,"!"]}),ht.jsx("div",{className:"exhibit-polaroid-coords",children:vh(Ut.lat,Ut.lng," · ")})]}),ht.jsxs("div",{className:"exhibit-polaroid-actions",children:[ht.jsx("button",{type:"button",className:"exhibit-polaroid-delete",onClick:P,children:"Delete"}),ht.jsx("button",{type:"button",className:"exhibit-polaroid-download",disabled:!Ut.dataUrl,onClick:()=>Ut.dataUrl&&B2(Ut),children:"Download photo"})]})]})})]}),rt&&ht.jsxs(ht.Fragment,{children:[ht.jsx("div",{className:"exhibit-credits-backdrop","aria-hidden":!0,onClick:()=>Rt(!1)}),ht.jsx("div",{className:"exhibit-credits-modal",role:"dialog","aria-labelledby":"credits-title","aria-modal":"true",children:ht.jsxs("div",{className:"exhibit-credits-modal-inner",children:[ht.jsxs("div",{className:"exhibit-credits-modal-header",children:[ht.jsx("h2",{id:"credits-title",className:"exhibit-credits-modal-title",children:"Credits"}),ht.jsx("button",{type:"button",className:"exhibit-credits-modal-close",onClick:()=>Rt(!1),"aria-label":"Close credits",children:"×"})]}),ht.jsxs("div",{className:"exhibit-credits-modal-body",children:[ht.jsxs("p",{className:"exhibit-credits-intro",children:["The Campaign for Two Space Needles is an"," ",ht.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-eg-link",children:"Extra Good Studio"})," ","production."]}),ht.jsx("div",{className:"exhibit-credits-eg-logo-wrap",children:ht.jsx("a",{href:"https://www.extragood.studio",target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-eg-logo-link","aria-label":"Extra Good Studio",children:ht.jsx("img",{src:"./eg_logo.png",alt:"",className:"exhibit-credits-eg-logo"})})}),[["3D Model","3D Model Sources"],["Sound","Sound Sources"]].map(([w,B])=>ht.jsxs("section",{className:"exhibit-credits-section",children:[ht.jsx("h3",{className:"exhibit-credits-category",children:B}),ht.jsx("ul",{className:"exhibit-credits-list",children:h2.filter(q=>q.category===w).map((q,nt)=>ht.jsxs("li",{className:"exhibit-credits-item",children:[ht.jsx("span",{className:"exhibit-credits-name",children:q.name}),q.creator&&ht.jsx("span",{className:"exhibit-credits-creator",children:q.creator}),q.license&&ht.jsx("span",{className:"exhibit-credits-license",children:q.license}),q.sourceUrl&&ht.jsx("a",{href:q.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"exhibit-credits-link",children:"Source"}),q.notes&&ht.jsx("span",{className:"exhibit-credits-notes",children:q.notes})]},`${w}-${nt}`))})]},w))]})]})})]})]})}function k2(){return ht.jsx(V2,{})}NS.createRoot(document.getElementById("root")).render(ht.jsx(Ft.StrictMode,{children:ht.jsx(k2,{})}));
