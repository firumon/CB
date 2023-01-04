/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[h],t[l],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const l=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const w=u<<6&192|l;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ed=function(n){const e=Rc(n);return Mc.encodeByteArray(e,!0)},qs=function(n){return ed(n).replace(/\./g,"")},td=function(n){try{return Mc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sd(){return!nd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oc(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function id(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=()=>id().__FIREBASE_DEFAULTS__,ad=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cd=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&td(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return od()||ad()||cd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ud=n=>{var e,t;return(t=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hd=n=>{const e=ud(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ld=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[qs(JSON.stringify(t)),qs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class on extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=md,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fc.prototype.create)}}class Fc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new on(r,a,s)}}function gd(n,e){return n.replace(pd,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const pd=/\{\$([^}]+)}/g;function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(ca(i)&&ca(o)){if(!Fn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new dd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ot){return this.instances.has(e)}getOptions(e=ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ot){return this.component?this.component.multipleInstances?e:ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(n){return n===ot?void 0:n}function vd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Ed={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},bd=O.INFO,Td={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Sd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Td[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vc{constructor(e){this.name=e,this._logLevel=bd,this._logHandler=Sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Dd=(n,e)=>e.some(t=>n instanceof t);let ua,ha;function Cd(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pc=new WeakMap,ui=new WeakMap,Bc=new WeakMap,zr=new WeakMap,Gi=new WeakMap;function Ad(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ke(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pc.set(t,n)}).catch(()=>{}),Gi.set(e,n),e}function _d(n){if(ui.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ui.set(n,e)}let hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nd(n){hi=n(hi)}function kd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Qr(this),e,...t);return Bc.set(s,e.sort?e.sort():[e]),Ke(s)}:xd().includes(n)?function(...e){return n.apply(Qr(this),e),Ke(Pc.get(this))}:function(...e){return Ke(n.apply(Qr(this),e))}}function Rd(n){return typeof n=="function"?kd(n):(n instanceof IDBTransaction&&_d(n),Dd(n,Cd())?new Proxy(n,hi):n)}function Ke(n){if(n instanceof IDBRequest)return Ad(n);if(zr.has(n))return zr.get(n);const e=Rd(n);return e!==n&&(zr.set(n,e),Gi.set(e,n)),e}const Qr=n=>Gi.get(n);function Md(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Ke(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ke(o.result),c.oldVersion,c.newVersion,Ke(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Od=["get","getKey","getAll","getAllKeys","count"],Ld=["put","add","delete","clear"],Hr=new Map;function la(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hr.get(e))return Hr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Ld.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Od.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Hr.set(e,i),i}Nd(n=>({...n,get:(e,t,s)=>la(e,t)||n.get(e,t,s),has:(e,t)=>!!la(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Vd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const li="@firebase/app",da="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Vc("@firebase/app"),Pd="@firebase/app-compat",Bd="@firebase/analytics-compat",qd="@firebase/analytics",Ud="@firebase/app-check-compat",$d="@firebase/app-check",Gd="@firebase/auth",jd="@firebase/auth-compat",Kd="@firebase/database",zd="@firebase/database-compat",Qd="@firebase/functions",Hd="@firebase/functions-compat",Wd="@firebase/installations",Yd="@firebase/installations-compat",Xd="@firebase/messaging",Jd="@firebase/messaging-compat",Zd="@firebase/performance",ef="@firebase/performance-compat",tf="@firebase/remote-config",nf="@firebase/remote-config-compat",sf="@firebase/storage",rf="@firebase/storage-compat",of="@firebase/firestore",af="@firebase/firestore-compat",cf="firebase",uf="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",hf={[li]:"fire-core",[Pd]:"fire-core-compat",[qd]:"fire-analytics",[Bd]:"fire-analytics-compat",[$d]:"fire-app-check",[Ud]:"fire-app-check-compat",[Gd]:"fire-auth",[jd]:"fire-auth-compat",[Kd]:"fire-rtdb",[zd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Hd]:"fire-fn-compat",[Wd]:"fire-iid",[Yd]:"fire-iid-compat",[Xd]:"fire-fcm",[Jd]:"fire-fcm-compat",[Zd]:"fire-perf",[ef]:"fire-perf-compat",[tf]:"fire-rc",[nf]:"fire-rc-compat",[sf]:"fire-gcs",[rf]:"fire-gcs-compat",[of]:"fire-fst",[af]:"fire-fst-compat","fire-js":"fire-js",[cf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map,di=new Map;function lf(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gs(n){const e=n.name;if(di.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,n);for(const t of $s.values())lf(t,n);return!0}function ji(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function df(n,e,t=Us){ji(n,e).clearInstance(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ze=new Fc("app","Firebase",ff);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=uf;function qc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Us,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ze.create("bad-app-name",{appName:String(r)});if(t||(t=ld()),!t)throw ze.create("no-options");const i=$s.get(r);if(i){if(Fn(t,i.options)&&Fn(s,i.config))return i;throw ze.create("duplicate-app",{appName:r})}const o=new Id(r);for(const c of di.values())o.addComponent(c);const a=new mf(t,s,o);return $s.set(r,a),a}function pf(n=Us){const e=$s.get(n);if(!e&&n===Us)return qc();if(!e)throw ze.create("no-app",{appName:n});return e}function Ut(n,e,t){var s;let r=(s=hf[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(a.join(" "));return}Gs(new Vn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="firebase-heartbeat-database",wf=1,Pn="firebase-heartbeat-store";let Wr=null;function Uc(){return Wr||(Wr=Md(yf,wf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pn)}}}).catch(n=>{throw ze.create("idb-open",{originalErrorMessage:n.message})})),Wr}async function vf(n){try{return(await Uc()).transaction(Pn).objectStore(Pn).get($c(n))}catch(e){if(e instanceof on)yt.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function fa(n,e){try{const s=(await Uc()).transaction(Pn,"readwrite");return await s.objectStore(Pn).put(e,$c(n)),s.done}catch(t){if(t instanceof on)yt.warn(t.message);else{const s=ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(s.message)}}}function $c(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1024,Ef=30*24*60*60*1e3;class bf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ma();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ef}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ma(),{heartbeatsToSend:t,unsentEntries:s}=Tf(this._heartbeatsCache.heartbeats),r=qs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ma(){return new Date().toISOString().substring(0,10)}function Tf(n,e=If){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ga(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ga(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Sf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?rd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ga(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){Gs(new Vn("platform-logger",e=>new Fd(e),"PRIVATE")),Gs(new Vn("heartbeat",e=>new bf(e),"PRIVATE")),Ut(li,da,n),Ut(li,da,"esm2017"),Ut("fire-js","")}Df("");var Cf="firebase",xf="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(Cf,xf,"app");var Af=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},S,Ki=Ki||{},A=Af||self;function js(){}function hr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ts(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function _f(n){return Object.prototype.hasOwnProperty.call(n,Yr)&&n[Yr]||(n[Yr]=++Nf)}var Yr="closure_uid_"+(1e9*Math.random()>>>0),Nf=0;function kf(n,e,t){return n.call.apply(n.bind,arguments)}function Rf(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function ge(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ge=kf:ge=Rf,ge.apply(null,arguments)}function Ts(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function me(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ze(){this.s=this.s,this.o=this.o}var Mf=0;Ze.prototype.s=!1;Ze.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Mf!=0)&&_f(this)};Ze.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function zi(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function pa(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(hr(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Of=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",js,e),A.removeEventListener("test",js,e)}catch{}return n}();function Ks(n){return/^[\s\xa0]*$/.test(n)}var ya=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Xr(n,e){return n<e?-1:n>e?1:0}function lr(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Ae(n){return lr().indexOf(n)!=-1}function Qi(n){return Qi[" "](n),n}Qi[" "]=js;function Lf(n){var e=Pf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Ff=Ae("Opera"),jt=Ae("Trident")||Ae("MSIE"),jc=Ae("Edge"),fi=jc||jt,Kc=Ae("Gecko")&&!(lr().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge"))&&!(Ae("Trident")||Ae("MSIE"))&&!Ae("Edge"),Vf=lr().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge");function zc(){var n=A.document;return n?n.documentMode:void 0}var zs;e:{var Jr="",Zr=function(){var n=lr();if(Kc)return/rv:([^\);]+)(\)|;)/.exec(n);if(jc)return/Edge\/([\d\.]+)/.exec(n);if(jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Vf)return/WebKit\/(\S+)/.exec(n);if(Ff)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Zr&&(Jr=Zr?Zr[1]:""),jt){var ei=zc();if(ei!=null&&ei>parseFloat(Jr)){zs=String(ei);break e}}zs=Jr}var Pf={};function Bf(){return Lf(function(){let n=0;const e=ya(String(zs)).split("."),t=ya("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Xr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Xr(r[2].length==0,i[2].length==0)||Xr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var mi;if(A.document&&jt){var wa=zc();mi=wa||parseInt(zs,10)||void 0}else mi=void 0;var qf=mi;function Bn(n,e){if(pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Kc){e:{try{Qi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Uf[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Bn.X.h.call(this)}}me(Bn,pe);var Uf={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ns="closure_listenable_"+(1e6*Math.random()|0),$f=0;function Gf(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++$f,this.ba=this.ea=!1}function dr(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Hi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Qc(n){const e={};for(const t in n)e[t]=n[t];return e}const va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hc(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<va.length;i++)t=va[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function fr(n){this.src=n,this.g={},this.h=0}fr.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=pi(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Gf(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function gi(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Gc(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(dr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function pi(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),ti={};function Wc(n,e,t,s,r){if(s&&s.once)return Xc(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wc(n,e[i],t,s,r);return null}return t=Ji(t),n&&n[ns]?n.N(e,t,ts(s)?!!s.capture:!!s,r):Yc(n,e,t,!1,s,r)}function Yc(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=ts(r)?!!r.capture:!!r,a=Xi(n);if(a||(n[Wi]=a=new fr(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=jf(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Of||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Zc(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function jf(){function n(t){return e.call(n.src,n.listener,t)}const e=Kf;return n}function Xc(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xc(n,e[i],t,s,r);return null}return t=Ji(t),n&&n[ns]?n.O(e,t,ts(s)?!!s.capture:!!s,r):Yc(n,e,t,!0,s,r)}function Jc(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jc(n,e[i],t,s,r);else s=ts(s)?!!s.capture:!!s,t=Ji(t),n&&n[ns]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=pi(i,t,s,r),-1<t&&(dr(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Xi(n))&&(e=n.g[e.toString()],n=-1,e&&(n=pi(e,t,s,r)),(t=-1<n?e[n]:null)&&Yi(t))}function Yi(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[ns])gi(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Zc(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Xi(e))?(gi(t,n),t.h==0&&(t.src=null,e[Wi]=null)):dr(n)}}}function Zc(n){return n in ti?ti[n]:ti[n]="on"+n}function Kf(n,e){if(n.ba)n=!0;else{e=new Bn(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&Yi(n),n=t.call(s,e)}return n}function Xi(n){return n=n[Wi],n instanceof fr?n:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ji(n){return typeof n=="function"?n:(n[ni]||(n[ni]=function(e){return n.handleEvent(e)}),n[ni])}function ce(){Ze.call(this),this.i=new fr(this),this.P=this,this.I=null}me(ce,Ze);ce.prototype[ns]=!0;ce.prototype.removeEventListener=function(n,e,t,s){Jc(this,n,e,t,s)};function de(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new pe(e,n);else if(e instanceof pe)e.target=e.target||n;else{var r=e;e=new pe(s,n),Hc(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Ss(o,s,!0,e)&&r}if(o=e.g=n,r=Ss(o,s,!0,e)&&r,r=Ss(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Ss(o,s,!1,e)&&r}ce.prototype.M=function(){if(ce.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)dr(t[s]);delete n.g[e],n.h--}}this.I=null};ce.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ce.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Ss(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&gi(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Zi=A.JSON.stringify;function zf(){var n=nu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Qf{constructor(){this.h=this.g=null}add(e,t){const s=eu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var eu=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Hf,n=>n.reset());class Hf{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Wf(n){A.setTimeout(()=>{throw n},0)}function tu(n,e){yi||Yf(),wi||(yi(),wi=!0),nu.add(n,e)}var yi;function Yf(){var n=A.Promise.resolve(void 0);yi=function(){n.then(Xf)}}var wi=!1,nu=new Qf;function Xf(){for(var n;n=zf();){try{n.h.call(n.g)}catch(t){Wf(t)}var e=eu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}wi=!1}function mr(n,e){ce.call(this),this.h=n||1,this.g=e||A,this.j=ge(this.lb,this),this.l=Date.now()}me(mr,ce);S=mr.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),de(this,"tick"),this.ca&&(eo(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eo(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){mr.X.M.call(this),eo(this),delete this.g};function to(n,e,t){if(typeof n=="function")t&&(n=ge(n,t));else if(n&&typeof n.handleEvent=="function")n=ge(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function su(n){n.g=to(()=>{n.g=null,n.i&&(n.i=!1,su(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Jf extends Ze{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:su(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qn(n){Ze.call(this),this.h=n,this.g={}}me(qn,Ze);var Ia=[];function ru(n,e,t,s){Array.isArray(t)||(t&&(Ia[0]=t.toString()),t=Ia);for(var r=0;r<t.length;r++){var i=Wc(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function iu(n){Hi(n.g,function(e,t){this.g.hasOwnProperty(t)&&Yi(e)},n),n.g={}}qn.prototype.M=function(){qn.X.M.call(this),iu(this)};qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gr(){this.g=!0}gr.prototype.Aa=function(){this.g=!1};function Zf(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function em(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function qt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+nm(n,t)+(s?" "+s:"")})}function tm(n,e){n.info(function(){return"TIMEOUT: "+e})}gr.prototype.info=function(){};function nm(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Zi(t)}catch{return e}}var _t={},Ea=null;function pr(){return Ea=Ea||new ce}_t.Pa="serverreachability";function ou(n){pe.call(this,_t.Pa,n)}me(ou,pe);function Un(n){const e=pr();de(e,new ou(e))}_t.STAT_EVENT="statevent";function au(n,e){pe.call(this,_t.STAT_EVENT,n),this.stat=e}me(au,pe);function ye(n){const e=pr();de(e,new au(e,n))}_t.Qa="timingevent";function cu(n,e){pe.call(this,_t.Qa,n),this.size=e}me(cu,pe);function ss(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var yr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function no(){}no.prototype.h=null;function ba(n){return n.h||(n.h=n.i())}function hu(){}var rs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function so(){pe.call(this,"d")}me(so,pe);function ro(){pe.call(this,"c")}me(ro,pe);var vi;function wr(){}me(wr,no);wr.prototype.g=function(){return new XMLHttpRequest};wr.prototype.i=function(){return{}};vi=new wr;function is(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new qn(this),this.O=sm,n=fi?125:void 0,this.T=new mr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var sm=45e3,Ii={},Qs={};S=is.prototype;S.setTimeout=function(n){this.O=n};function Ei(n,e,t){n.K=1,n.v=Ir(Le(e)),n.s=t,n.P=!0,du(n,null)}function du(n,e){n.F=Date.now(),os(n),n.A=Le(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Iu(t.i,"t",s),n.C=0,t=n.l.H,n.h=new lu,n.g=Uu(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Jf(ge(n.La,n,n.g),n.N)),ru(n.S,n.g,"readystatechange",n.ib),e=n.H?Qc(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Un(),Zf(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&Oe(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const h=Oe(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||fi||this.g&&(this.h.h||this.g.fa()||Ca(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Un(3):Un(2)),vr(this);var t=this.g.aa();this.Y=t;t:if(fu(this)){var s=Ca(this.g);n="";var r=s.length,i=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){dt(this),Nn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,em(this.j,this.u,this.A,this.m,this.U,h,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ks(a)){var u=a;break t}}u=null}if(t=u)qt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bi(this,t);else{this.i=!1,this.o=3,ye(12),dt(this),Nn(this);break e}}this.P?(mu(this,h,o),fi&&this.i&&h==3&&(ru(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),bi(this,o)),h==4&&dt(this),this.i&&!this.I&&(h==4?Vu(this.l,this):(this.i=!1,os(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ye(12)):(this.o=0,ye(13)),dt(this),Nn(this)}}}catch{}finally{}};function fu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function mu(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=rm(n,t),r==Qs){e==4&&(n.o=4,ye(14),s=!1),qt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Ii){n.o=4,ye(15),qt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else qt(n.j,n.m,r,null),bi(n,r);fu(n)&&r!=Qs&&r!=Ii&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ye(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),lo(e),e.K=!0,ye(11))):(qt(n.j,n.m,t,"[Invalid Chunked Response]"),dt(n),Nn(n))}S.hb=function(){if(this.g){var n=Oe(this.g),e=this.g.fa();this.C<e.length&&(vr(this),mu(this,n,e),this.i&&n!=4&&os(this))}};function rm(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Qs:(t=Number(e.substring(t,s)),isNaN(t)?Ii:(s+=1,s+t>e.length?Qs:(e=e.substr(s,t),n.C=s+t,e)))}S.cancel=function(){this.I=!0,dt(this)};function os(n){n.V=Date.now()+n.O,gu(n,n.O)}function gu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ss(ge(n.gb,n),e)}function vr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(tm(this.j,this.A),this.K!=2&&(Un(),ye(17)),dt(this),this.o=2,Nn(this)):gu(this,this.V-n)};function Nn(n){n.l.G==0||n.I||Vu(n.l,n)}function dt(n){vr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,eo(n.T),iu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function bi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ti(t.h,n))){if(!n.J&&Ti(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ys(t),Tr(t);else break e;ho(t),ye(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=ss(ge(t.cb,t),6e3));if(1>=Tu(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ft(t,11)}else if((n.J||t.g==n)&&Ys(t),!Ks(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const h=u[3];h!=null&&(t.ma=h,t.j.info("VER="+t.ma));const l=u[4];l!=null&&(t.Ca=l,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(io(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,j(s.F,s.D,E))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=qu(s,s.H?s.ka:null,s.V),o.J){Su(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(vr(a),os(a)),s.g=o}else Lu(s);0<t.i.length&&Sr(t)}else u[0]!="stop"&&u[0]!="close"||ft(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ft(t,7):uo(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Un(4)}catch{}}function im(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(hr(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function om(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(hr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function pu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(hr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=om(n),s=im(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function am(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof gt){this.h=e!==void 0?e:n.h,Hs(this,n.j),this.s=n.s,this.g=n.g,Ws(this,n.m),this.l=n.l,e=n.i;var t=new $n;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ta(this,t),this.o=n.o}else n&&(t=String(n).match(yu))?(this.h=!!e,Hs(this,t[1]||"",!0),this.s=Cn(t[2]||""),this.g=Cn(t[3]||"",!0),Ws(this,t[4]),this.l=Cn(t[5]||"",!0),Ta(this,t[6]||"",!0),this.o=Cn(t[7]||"")):(this.h=!!e,this.i=new $n(null,this.h))}gt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(xn(e,Sa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(xn(e,Sa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(xn(t,t.charAt(0)=="/"?hm:um,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",xn(t,dm)),n.join("")};function Le(n){return new gt(n)}function Hs(n,e,t){n.j=t?Cn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ws(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ta(n,e,t){e instanceof $n?(n.i=e,fm(n.i,n.h)):(t||(e=xn(e,lm)),n.i=new $n(e,n.h))}function j(n,e,t){n.i.set(e,t)}function Ir(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Cn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function xn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,cm),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function cm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sa=/[#\/\?@]/g,um=/[#\?:]/g,hm=/[#\?]/g,lm=/[#\?@]/g,dm=/#/g;function $n(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function et(n){n.g||(n.g=new Map,n.h=0,n.i&&am(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=$n.prototype;S.add=function(n,e){et(this),this.i=null,n=an(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function wu(n,e){et(n),e=an(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function vu(n,e){return et(n),e=an(n,e),n.g.has(e)}S.forEach=function(n,e){et(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};S.oa=function(){et(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};S.W=function(n){et(this);let e=[];if(typeof n=="string")vu(this,n)&&(e=e.concat(this.g.get(an(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return et(this),this.i=null,n=an(this,n),vu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Iu(n,e,t){wu(n,e),0<t.length&&(n.i=null,n.g.set(an(n,e),zi(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function an(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function fm(n,e){e&&!n.j&&(et(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(wu(this,s),Iu(this,r,t))},n)),n.j=e}var mm=class{constructor(n,e){this.h=n,this.g=e}};function Eu(n){this.l=n||gm,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gm=10;function bu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Tu(n){return n.h?1:n.g?n.g.size:0}function Ti(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function io(n,e){n.g?n.g.add(e):n.h=e}function Su(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Eu.prototype.cancel=function(){if(this.i=Du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Du(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return zi(n.i)}function oo(){}oo.prototype.stringify=function(n){return A.JSON.stringify(n,void 0)};oo.prototype.parse=function(n){return A.JSON.parse(n,void 0)};function pm(){this.g=new oo}function ym(n,e,t){const s=t||"";try{pu(n,function(r,i){let o=r;ts(r)&&(o=Zi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function wm(n,e){const t=new gr;if(A.Image){const s=new Image;s.onload=Ts(Ds,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Ts(Ds,t,s,"TestLoadImage: error",!1,e),s.onabort=Ts(Ds,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ts(Ds,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Ds(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function as(n){this.l=n.ac||null,this.j=n.jb||!1}me(as,no);as.prototype.g=function(){return new Er(this.l,this.j)};as.prototype.i=function(n){return function(){return n}}({});function Er(n,e){ce.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=ao,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me(Er,ce);var ao=0;S=Er.prototype;S.open=function(n,e){if(this.readyState!=ao)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Gn(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||A).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=ao};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cu(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Cu(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?cs(this):Gn(this),this.readyState==3&&Cu(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,cs(this))};S.Ua=function(n){this.g&&(this.response=n,cs(this))};S.ga=function(){this.g&&cs(this)};function cs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Gn(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Gn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var vm=A.JSON.parse;function W(n){ce.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xu,this.K=this.L=!1}me(W,ce);var xu="",Im=/^https?$/i,Em=["POST","PUT"];S=W.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vi.g(),this.C=this.u?ba(this.u):ba(vi),this.g.onreadystatechange=ge(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Da(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=A.FormData&&n instanceof A.FormData,!(0<=Gc(Em,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nu(this),0<this.B&&((this.K=bm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.qa,this)):this.A=to(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Da(this,i)}};function bm(n){return jt&&Bf()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof Ki!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function Da(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Au(n),br(n)}function Au(n){n.D||(n.D=!0,de(n,"complete"),de(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,de(this,"complete"),de(this,"abort"),br(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),br(this,!0)),W.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?_u(this):this.fb())};S.fb=function(){_u(this)};function _u(n){if(n.h&&typeof Ki!="undefined"&&(!n.C[1]||Oe(n)!=4||n.aa()!=2)){if(n.v&&Oe(n)==4)to(n.Ha,0,n);else if(de(n,"readystatechange"),Oe(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(yu)[1]||null;if(!r&&A.self&&A.self.location){var i=A.self.location.protocol;r=i.substr(0,i.length-1)}s=!Im.test(r?r.toLowerCase():"")}t=s}if(t)de(n,"complete"),de(n,"success");else{n.m=6;try{var o=2<Oe(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Au(n)}}finally{br(n)}}}}function br(n,e){if(n.g){Nu(n);const t=n.g,s=n.C[0]?js:null;n.g=null,n.C=null,e||de(n,"ready");try{t.onreadystatechange=s}catch{}}}function Nu(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}function Oe(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),vm(e)}};function Ca(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case xu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ku(n){let e="";return Hi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function co(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=ku(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function vn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ru(n){this.Ca=0,this.i=[],this.j=new gr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vn("baseRetryDelayMs",5e3,n),this.bb=vn("retryDelaySeedMs",1e4,n),this.$a=vn("forwardChannelMaxRetries",2,n),this.ta=vn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Eu(n&&n.concurrentRequestLimit),this.Fa=new pm,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Ru.prototype;S.ma=8;S.G=1;function uo(n){if(Mu(n),n.G==3){var e=n.U++,t=Le(n.F);j(t,"SID",n.I),j(t,"RID",e),j(t,"TYPE","terminate"),us(n,t),e=new is(n,n.j,e,void 0),e.K=2,e.v=Ir(Le(t)),t=!1,A.navigator&&A.navigator.sendBeacon&&(t=A.navigator.sendBeacon(e.v.toString(),"")),!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=Uu(e.l,null),e.g.da(e.v)),e.F=Date.now(),os(e)}Bu(n)}function Tr(n){n.g&&(lo(n),n.g.cancel(),n.g=null)}function Mu(n){Tr(n),n.u&&(A.clearTimeout(n.u),n.u=null),Ys(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function Sr(n){bu(n.h)||n.m||(n.m=!0,tu(n.Ja,n),n.C=0)}function Tm(n,e){return Tu(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=ss(ge(n.Ja,n,e),Pu(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new is(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Qc(i),Hc(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ou(this,r,e),t=Le(this.F),j(t,"RID",n),j(t,"CVER",22),this.D&&j(t,"X-HTTP-Session-Id",this.D),us(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(ku(i)))+"&"+e:this.o&&co(t,this.o,i)),io(this.h,r),this.Ya&&j(t,"TYPE","init"),this.O?(j(t,"$req",e),j(t,"SID","null"),r.Z=!0,Ei(r,t,null)):Ei(r,t,e),this.G=2}}else this.G==3&&(n?xa(this,n):this.i.length==0||bu(this.h)||xa(this))};function xa(n,e){var t;e?t=e.m:t=n.U++;const s=Le(n.F);j(s,"SID",n.I),j(s,"RID",t),j(s,"AID",n.T),us(n,s),n.o&&n.s&&co(s,n.o,n.s),t=new is(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Ou(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),io(n.h,t),Ei(t,s,e)}function us(n,e){n.ia&&Hi(n.ia,function(t,s){j(e,s,t)}),n.l&&pu({},function(t,s){j(e,s,t)})}function Ou(n,e,t){t=Math.min(n.i.length,t);var s=n.l?ge(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{ym(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function Lu(n){n.g||n.u||(n.Z=1,tu(n.Ia,n),n.A=0)}function ho(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=ss(ge(n.Ia,n),Pu(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,Fu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=ss(ge(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ye(10),Tr(this),Fu(this))};function lo(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function Fu(n){n.g=new is(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Le(n.sa);j(e,"RID","rpc"),j(e,"SID",n.I),j(e,"CI",n.L?"0":"1"),j(e,"AID",n.T),j(e,"TYPE","xmlhttp"),us(n,e),n.o&&n.s&&co(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Ir(Le(e)),t.s=null,t.P=!0,du(t,n)}S.cb=function(){this.v!=null&&(this.v=null,Tr(this),ho(this),ye(19))};function Ys(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Vu(n,e){var t=null;if(n.g==e){Ys(n),lo(n),n.g=null;var s=2}else if(Ti(n.h,e))t=e.D,Su(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=pr(),de(s,new cu(s,t)),Sr(n)}else Lu(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&Tm(n,e)||s==2&&ho(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:ft(n,5);break;case 4:ft(n,10);break;case 3:ft(n,6);break;default:ft(n,2)}}}function Pu(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ft(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=ge(n.kb,n);t||(t=new gt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Hs(t,"https"),Ir(t)),wm(t.toString(),s)}else ye(2);n.G=0,n.l&&n.l.va(e),Bu(n),Mu(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Bu(n){if(n.G=0,n.la=[],n.l){const e=Du(n.h);(e.length!=0||n.i.length!=0)&&(pa(n.la,e),pa(n.la,n.i),n.h.i.length=0,zi(n.i),n.i.length=0),n.l.ua()}}function qu(n,e,t){var s=t instanceof gt?Le(t):new gt(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ws(s,s.m);else{var r=A.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gt(null,void 0);s&&Hs(i,s),e&&(i.g=e),r&&Ws(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&j(s,t,e),j(s,"VER",n.ma),us(n,s),s}function Uu(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new W(new as({jb:!0})):new W(n.ra),e.Ka(n.H),e}function $u(){}S=$u.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function Xs(){if(jt&&!(10<=Number(qf)))throw Error("Environmental error: no available transport.")}Xs.prototype.g=function(n,e){return new De(n,e)};function De(n,e){ce.call(this),this.g=new Ru(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Ks(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ks(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new cn(this)}me(De,ce);De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ye(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=qu(n,null,n.V),Sr(n)};De.prototype.close=function(){uo(this.g)};De.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Zi(n),n=t);e.i.push(new mm(e.ab++,n)),e.G==3&&Sr(e)};De.prototype.M=function(){this.g.l=null,delete this.j,uo(this.g),delete this.g,De.X.M.call(this)};function Gu(n){so.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}me(Gu,so);function ju(){ro.call(this),this.status=1}me(ju,ro);function cn(n){this.g=n}me(cn,$u);cn.prototype.xa=function(){de(this.g,"a")};cn.prototype.wa=function(n){de(this.g,new Gu(n))};cn.prototype.va=function(n){de(this.g,new ju)};cn.prototype.ua=function(){de(this.g,"b")};Xs.prototype.createWebChannel=Xs.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;yr.NO_ERROR=0;yr.TIMEOUT=8;yr.HTTP_ERROR=6;uu.COMPLETE="complete";hu.EventType=rs;rs.OPEN="a";rs.CLOSE="b";rs.ERROR="c";rs.MESSAGE="d";ce.prototype.listen=ce.prototype.N;W.prototype.listenOnce=W.prototype.O;W.prototype.getLastError=W.prototype.Oa;W.prototype.getLastErrorCode=W.prototype.Ea;W.prototype.getStatus=W.prototype.aa;W.prototype.getResponseJson=W.prototype.Sa;W.prototype.getResponseText=W.prototype.fa;W.prototype.send=W.prototype.da;W.prototype.setWithCredentials=W.prototype.Ka;var Sm=function(){return new Xs},Dm=function(){return pr()},si=yr,Cm=uu,xm=_t,Aa={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Am=as,Cs=hu,_m=W;const _a="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Vc("@firebase/firestore");function Si(){return He.logLevel}function Xy(n){He.setLogLevel(n)}function y(n,...e){if(He.logLevel<=O.DEBUG){const t=e.map(fo);He.debug(`Firestore (${un}): ${n}`,...t)}}function X(n,...e){if(He.logLevel<=O.ERROR){const t=e.map(fo);He.error(`Firestore (${un}): ${n}`,...t)}}function Kt(n,...e){if(He.logLevel<=O.WARN){const t=e.map(fo);He.warn(`Firestore (${un}): ${n}`,...t)}}function fo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n="Unexpected state"){const e=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: `+n;throw X(e),new Error(e)}function T(n,e){n||b()}function Jy(n,e){n||b()}function I(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class km{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rm{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new se;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new se,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new se)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(T(typeof s.accessToken=="string"),new Ku(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return T(e===null||typeof e=="string"),new oe(e)}}class Mm{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(T(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Om{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new Mm(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(T(typeof t.token=="string"),this.A=t.token,new zu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Zy{getToken(){return Promise.resolve(new zu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Fm(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function x(n,e){return n<e?-1:n>e?1:0}function zt(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function Hu(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Q(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new Q(0,0))}static max(){return new D(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&b(),s===void 0?s=e.length-t:s>e.length-t&&b(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends jn{construct(e,t,s){return new M(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new M(t)}static emptyPath(){return new M([])}}const Vm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends jn{construct(e,t,s){return new J(e,t,s)}static isValidIdentifier(e){return Vm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(M.fromString(e))}static fromName(e){return new v(M.fromString(e).popFirst(5))}static empty(){return new v(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new M(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Di(n){return n.fields.find(e=>e.kind===2)}function at(n){return n.fields.filter(e=>e.kind!==2)}function Pm(n,e){let t=x(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(n.fields.length,e.fields.length);++s)if(t=Bm(n.fields[s],e.fields[s]),t!==0)return t;return x(n.fields.length,e.fields.length)}Js.UNKNOWN_ID=-1;class Rs{constructor(e,t){this.fieldPath=e,this.kind=t}}function Bm(n,e){const t=J.comparator(n.fieldPath,e.fieldPath);return t!==0?t:x(n.kind,e.kind)}class Kn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Kn(0,Ce.min())}}function Wu(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=D.fromTimestamp(s===1e9?new Q(t+1,0):new Q(t,s));return new Ce(r,v.empty(),e)}function Yu(n){return new Ce(n.readTime,n.key,-1)}class Ce{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ce(D.min(),v.empty(),-1)}static max(){return new Ce(D.max(),v.empty(),-1)}}function mo(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:x(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ju{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Xu)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new f((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new se,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new kn(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=go(s.target.error);this.P.reject(new kn(e,r))}}static open(e,t,s,r){try{return new Dr(t,e.transaction(r,s))}catch(i){throw new kn(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Um(t)}}class xe{constructor(e,t,s){this.name=e,this.version=t,this.S=s,xe.D(ci())===12.2&&X("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),ct(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Oc())return!1;if(xe.N())return!0;const e=ci(),t=xe.D(e),s=0<t&&t<10,r=xe.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new kn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new kn(e,o))},r.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,r.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Dr.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qm{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return ct(this.q.delete())}}class kn extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function nt(n){return n.name==="IndexedDbTransactionError"}class Um{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),ct(s)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),ct(this.store.add(e))}get(e){return ct(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),ct(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),ct(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,t){y("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.H(r,t)}tt(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=go(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new qm(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const h=u.catch(l=>(c.done(),f.reject(l)));s.push(h)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ct(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=go(s.target.error);t(r)}})}let Na=!1;function go(n){const e=xe.D(ci());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Na||(Na=!0,setTimeout(()=>{throw s},0)),s}}return n}class $m{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){nt(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await tt(t)}await this.nt(6e4)})}}class Gm{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let r=t,i=!0;return f.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=Yu(i);mo(o,s)>0&&(s=o)}),new Ce(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}be.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Nt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){return n==null}function zn(n){return n===0&&1/n==-1/0}function eh(n){return typeof n=="number"&&Number.isInteger(n)&&!zn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new re(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}re.EMPTY_BYTE_STRING=new re("");const Km=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(T(!!n),typeof n=="string"){let e=0;const t=Km.exec(n);if(T(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:H(n.seconds),nanos:H(n.nanos)}}function H(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vt(n){return typeof n=="string"?re.fromBase64String(n):re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function th(n){const e=n.mapValue.fields.__previous_value__;return po(e)?th(e):e}function Qn(n){const e=We(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ms={nullValue:"NULL_VALUE"};function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?po(n)?4:nh(n)?9007199254740991:10:b()}function Me(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qn(n).isEqual(Qn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=We(s.timestampValue),o=We(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return vt(s.bytesValue).isEqual(vt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return H(s.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return H(s.integerValue)===H(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=H(s.doubleValue),o=H(r.doubleValue);return i===o?zn(i)===zn(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return zt(n.arrayValue.values||[],e.arrayValue.values||[],Me);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ka(i)!==ka(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Me(i[a],o[a])))return!1;return!0}(n,e);default:return b()}}function Hn(n,e){return(n.values||[]).find(t=>Me(t,e))!==void 0}function Ye(n,e){if(n===e)return 0;const t=It(n),s=It(e);if(t!==s)return x(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=H(r.integerValue||r.doubleValue),a=H(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ra(n.timestampValue,e.timestampValue);case 4:return Ra(Qn(n),Qn(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(r,i){const o=vt(r),a=vt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=x(H(r.latitude),H(i.latitude));return o!==0?o:x(H(r.longitude),H(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ye(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===je.mapValue&&i===je.mapValue)return 0;if(r===je.mapValue)return 1;if(i===je.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=x(a[h],u[h]);if(l!==0)return l;const d=Ye(o[a[h]],c[u[h]]);if(d!==0)return d}return x(a.length,u.length)}(n.mapValue,e.mapValue);default:throw b()}}function Ra(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=We(n),s=We(e),r=x(t.seconds,s.seconds);return r!==0?r:x(t.nanos,s.nanos)}function Qt(n){return Ci(n)}function Ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=We(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?vt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ci(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ci(s.fields[a])}`;return i+"}"}(n.mapValue):b();var e,t}function Et(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xi(n){return!!n&&"integerValue"in n}function Wn(n){return!!n&&"arrayValue"in n}function Ma(n){return!!n&&"nullValue"in n}function Oa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Os(n){return!!n&&"mapValue"in n}function Rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Nt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Rn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function zm(n){return"nullValue"in n?Ms:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Et(wt.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:b()}function Qm(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Et(wt.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?je:b()}function La(n,e){const t=Ye(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Fa(n,e){const t=Ye(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.position=e,this.inclusive=t}}function Va(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=Ye(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Me(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{}class N extends sh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Hm(e,t,s):t==="array-contains"?new Xm(e,s):t==="in"?new lh(e,s):t==="not-in"?new Jm(e,s):t==="array-contains-any"?new Zm(e,s):new N(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Wm(e,s):new Ym(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ye(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(Ye(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class L extends sh{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new L(e,t)}matches(e){return Ht(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ht(n){return n.op==="and"}function Ai(n){return n.op==="or"}function rh(n){return ih(n)&&Ht(n)}function ih(n){for(const e of n.filters)if(e instanceof L)return!1;return!0}function oh(n){if(n instanceof N)return n.field.canonicalString()+n.op.toString()+Qt(n.value);{const e=n.filters.map(t=>oh(t)).join(",");return`${n.op}(${e})`}}function ah(n,e){return n instanceof N?function(t,s){return s instanceof N&&t.op===s.op&&t.field.isEqual(s.field)&&Me(t.value,s.value)}(n,e):n instanceof L?function(t,s){return s instanceof L&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((r,i,o)=>r&&ah(i,s.filters[o]),!0):!1}(n,e):void b()}function ch(n,e){const t=n.filters.concat(e);return L.create(t,n.op)}function uh(n){return n instanceof N?function(e){return`${e.field.canonicalString()} ${e.op} ${Qt(e.value)}`}(n):n instanceof L?function(e){return e.op.toString()+" {"+e.getFilters().map(uh).join(" ,")+"}"}(n):"Filter"}class Hm extends N{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wm extends N{constructor(e,t){super(e,"in",t),this.keys=hh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ym extends N{constructor(e,t){super(e,"not-in",t),this.keys=hh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class Xm extends N{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wn(t)&&Hn(t.arrayValue,this.value)}}class lh extends N{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hn(this.value.arrayValue,t)}}class Jm extends N{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hn(this.value.arrayValue,t)}}class Zm extends N{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Hn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t="asc"){this.field=e,this.dir=t}}function eg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xs(this.root,e,this.comparator,!0)}}class xs{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:he.RED,this.left=r!=null?r:he.EMPTY,this.right=i!=null?i:he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new he(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return he.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,s,r){return this}insert(n,e,t){return new he(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ba(this.data.getIterator())}getIteratorFrom(e){return new Ba(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof F)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new F(this.comparator);return t.data=e,t}}class Ba{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Lt(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new Se([])}unionWith(e){let t=new F(J.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Se(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Os(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rn(t)}setAll(e){let t=J.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=Rn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Os(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Me(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Os(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Nt(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new le(Rn(this.value))}}function dh(n){const e=[];return Nt(n.fields,(t,s)=>{const r=new J([t]);if(Os(s)){const i=dh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Se(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new q(e,0,D.min(),D.min(),D.min(),le.empty(),0)}static newFoundDocument(e,t,s,r){return new q(e,1,t,D.min(),s,r,0)}static newNoDocument(e,t){return new q(e,2,t,D.min(),D.min(),le.empty(),0)}static newUnknownDocument(e,t){return new q(e,3,t,D.min(),D.min(),le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof q&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function _i(n,e=null,t=[],s=[],r=null,i=null,o=null){return new tg(n,e,t,s,r,i,o)}function bt(n){const e=I(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>oh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),hs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Qt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Qt(s)).join(",")),e.ft=t}return e.ft}function ls(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ah(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pa(n.startAt,e.startAt)&&Pa(n.endAt,e.endAt)}function Zs(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function er(n,e){return n.filters.filter(t=>t instanceof N&&t.field.isEqual(e))}function qa(n,e,t){let s=Ms,r=!0;for(const i of er(n,e)){let o=Ms,a=!0;switch(i.op){case"<":case"<=":o=zm(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ms}La({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];La({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Ua(n,e,t){let s=je,r=!0;for(const i of er(n,e)){let o=je,a=!0;switch(i.op){case">=":case">":o=Qm(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=je}Fa({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Fa({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function fh(n,e,t,s,r,i,o,a){return new Fe(n,e,t,s,r,i,o,a)}function hn(n){return new Fe(n)}function $a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Cr(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function wo(n){return n.collectionGroup!==null}function pt(n){const e=I(n);if(e.dt===null){e.dt=[];const t=Cr(e),s=yo(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new $t(t)),e.dt.push(new $t(J.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new $t(J.keyField(),i))}}}return e.dt}function ve(n){const e=I(n);if(!e._t)if(e.limitType==="F")e._t=_i(e.path,e.collectionGroup,pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of pt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new $t(i.field,o))}const s=e.endAt?new Xe(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xe(e.startAt.position,e.startAt.inclusive):null;e._t=_i(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e._t}function Ni(n,e){e.getFirstInequalityField(),Cr(n);const t=n.filters.concat([e]);return new Fe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function tr(n,e,t){return new Fe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ds(n,e){return ls(ve(n),ve(e))&&n.limitType===e.limitType}function mh(n){return`${bt(ve(n))}|lt:${n.limitType}`}function ki(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>uh(s)).join(", ")}]`),hs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Qt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Qt(s)).join(",")),`Target(${t})`}(ve(n))}; limitType=${n.limitType})`}function vo(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of pt(t))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Va(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,pt(t),s)||t.endAt&&!function(r,i,o){const a=Va(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,pt(t),s))}(n,e)}function gh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ph(n){return(e,t)=>{let s=!1;for(const r of pt(n)){const i=ng(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ng(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ye(a,c):b()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zn(e)?"-0":e}}function wh(n){return{integerValue:""+n}}function vh(n,e){return eh(e)?wh(e):yh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this._=void 0}}function sg(n,e,t){return n instanceof Wt?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Tt?Eh(n,e):n instanceof St?bh(n,e):function(s,r){const i=Ih(s,r),o=Ga(i)+Ga(s.gt);return xi(i)&&xi(s.gt)?wh(o):yh(s.yt,o)}(n,e)}function rg(n,e,t){return n instanceof Tt?Eh(n,e):n instanceof St?bh(n,e):t}function Ih(n,e){return n instanceof Yt?xi(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Wt extends xr{}class Tt extends xr{constructor(e){super(),this.elements=e}}function Eh(n,e){const t=Th(e);for(const s of n.elements)t.some(r=>Me(r,s))||t.push(s);return{arrayValue:{values:t}}}class St extends xr{constructor(e){super(),this.elements=e}}function bh(n,e){let t=Th(e);for(const s of n.elements)t=t.filter(r=>!Me(r,s));return{arrayValue:{values:t}}}class Yt extends xr{constructor(e,t){super(),this.yt=e,this.gt=t}}function Ga(n){return H(n.integerValue||n.doubleValue)}function Th(n){return Wn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.field=e,this.transform=t}}function ig(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Tt&&s instanceof Tt||t instanceof St&&s instanceof St?zt(t.elements,s.elements,Me):t instanceof Yt&&s instanceof Yt?Me(t.gt,s.gt):t instanceof Wt&&s instanceof Wt}(n.transform,e.transform)}class og{constructor(e,t){this.version=e,this.transformResults=t}}class K{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new K}static exists(e){return new K(void 0,e)}static updateTime(e){return new K(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ar{}function Sh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dn(n.key,K.none()):new ln(n.key,n.data,K.none());{const t=n.data,s=le.empty();let r=new F(J.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ve(n.key,s,new Se(r.toArray()),K.none())}}function ag(n,e,t){n instanceof ln?function(s,r,i){const o=s.value.clone(),a=Ka(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ve?function(s,r,i){if(!Ls(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ka(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Mn(n,e,t,s){return n instanceof ln?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const c=r.value.clone(),u=za(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ve?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const c=za(r.fieldTransforms,a,i),u=i.data;return u.setAll(Dh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,s):function(r,i,o){return Ls(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function cg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Ih(s.transform,r||null);i!=null&&(t===null&&(t=le.empty()),t.set(s.field,i))}return t||null}function ja(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&zt(t,s,(r,i)=>ig(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ln extends Ar{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ve extends Ar{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Ka(n,e,t){const s=new Map;T(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,rg(o,a,t[r]))}return s}function za(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,sg(i,o,e))}return s}class dn extends Ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Io extends Ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,R;function Ch(n){switch(n){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function xh(n){if(n===void 0)return X("GRPC error has no .code"),m.UNKNOWN;switch(n){case te.OK:return m.OK;case te.CANCELLED:return m.CANCELLED;case te.UNKNOWN:return m.UNKNOWN;case te.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case te.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case te.INTERNAL:return m.INTERNAL;case te.UNAVAILABLE:return m.UNAVAILABLE;case te.UNAUTHENTICATED:return m.UNAUTHENTICATED;case te.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case te.NOT_FOUND:return m.NOT_FOUND;case te.ALREADY_EXISTS:return m.ALREADY_EXISTS;case te.PERMISSION_DENIED:return m.PERMISSION_DENIED;case te.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case te.ABORTED:return m.ABORTED;case te.OUT_OF_RANGE:return m.OUT_OF_RANGE;case te.UNIMPLEMENTED:return m.UNIMPLEMENTED;case te.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(R=te||(te={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nt(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Zu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Y(v.comparator);function Te(){return hg}const Ah=new Y(v.comparator);function An(...n){let e=Ah;for(const t of n)e=e.insert(t.key,t);return e}function _h(n){let e=Ah;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function _e(){return On()}function Nh(){return On()}function On(){return new st(n=>n.toString(),(n,e)=>n.isEqual(e))}const lg=new Y(v.comparator),dg=new F(v.comparator);function _(...n){let e=dg;for(const t of n)e=e.add(t);return e}const fg=new F(x);function _r(){return fg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ms(D.min(),r,_r(),Te(),_())}}class gs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new gs(s,t,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,s,r){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=r}}class kh{constructor(e,t){this.targetId=e,this.Et=t}}class Rh{constructor(e,t,s=re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Qa{constructor(){this.At=0,this.Rt=Wa(),this.bt=re.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=_(),t=_(),s=_();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:b()}}),new gs(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=Wa()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class mg{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Te(),this.qt=Ha(),this.Ut=new F(x)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,r)=>{this.zt(r)&&t(r)})}Jt(e){const t=e.targetId,s=e.Et.count,r=this.Yt(t);if(r){const i=r.target;if(Zs(i))if(s===0){const o=new v(i.path);this.Qt(t,o,q.newNoDocument(o,D.min()))}else T(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Zs(a.target)){const c=new v(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,q.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let s=_();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ms(e,t,this.Ut,this.Lt,s);return this.Lt=Te(),this.qt=Ha(),this.Ut=new F(x),r}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Qa,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new F(x),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qa),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Ha(){return new Y(v.comparator)}function Wa(){return new Y(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yg=(()=>({and:"AND",or:"OR"}))();class wg{constructor(e,t){this.databaseId=e,this.wt=t}}function Xt(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mh(n,e){return n.wt?e.toBase64():e.toUint8Array()}function vg(n,e){return Xt(n,e.toTimestamp())}function Z(n){return T(!!n),D.fromTimestamp(function(e){const t=We(e);return new Q(t.seconds,t.nanos)}(n))}function Eo(n,e){return function(t){return new M(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Oh(n){const e=M.fromString(n);return T($h(e)),e}function Yn(n,e){return Eo(n.databaseId,e.path)}function ke(n,e){const t=Oh(e);if(t.get(1)!==n.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Fh(t))}function Ri(n,e){return Eo(n.databaseId,e)}function Lh(n){const e=Oh(n);return e.length===4?M.emptyPath():Fh(e)}function Xn(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fh(n){return T(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ya(n,e,t){return{name:Yn(n,e),fields:t.value.mapValue.fields}}function Vh(n,e,t){const s=ke(n,e.name),r=Z(e.updateTime),i=e.createTime?Z(e.createTime):D.min(),o=new le({mapValue:{fields:e.fields}}),a=q.newFoundDocument(s,r,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Ig(n,e){return"found"in e?function(t,s){T(!!s.found),s.found.name,s.found.updateTime;const r=ke(t,s.found.name),i=Z(s.found.updateTime),o=s.found.createTime?Z(s.found.createTime):D.min(),a=new le({mapValue:{fields:s.found.fields}});return q.newFoundDocument(r,i,o,a)}(n,e):"missing"in e?function(t,s){T(!!s.missing),T(!!s.readTime);const r=ke(t,s.missing),i=Z(s.readTime);return q.newNoDocument(r,i)}(n,e):b()}function Eg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(T(u===void 0||typeof u=="string"),re.fromBase64String(u||"")):(T(u===void 0||u instanceof Uint8Array),re.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:xh(c.code);return new p(u,c.message||"")}(o);t=new Rh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ke(n,s.document.name),i=Z(s.document.updateTime),o=s.document.createTime?Z(s.document.createTime):D.min(),a=new le({mapValue:{fields:s.document.fields}}),c=q.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Fs(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ke(n,s.document),i=s.readTime?Z(s.readTime):D.min(),o=q.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Fs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ke(n,s.document),i=s.removedTargetIds||[];t=new Fs([],i,r,null)}else{if(!("filter"in e))return b();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ug(r),o=s.targetId;t=new kh(o,i)}}return t}function Jn(n,e){let t;if(e instanceof ln)t={update:Ya(n,e.key,e.value)};else if(e instanceof dn)t={delete:Yn(n,e.key)};else if(e instanceof Ve)t={update:Ya(n,e.key,e.data),updateMask:xg(e.fieldMask)};else{if(!(e instanceof Io))return b();t={verify:Yn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Wt)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Tt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof St)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yt)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw b()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:vg(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b()}(n,e.precondition)),t}function Mi(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?K.updateTime(Z(r.updateTime)):r.exists!==void 0?K.exists(r.exists):K.none()}(e.currentDocument):K.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)T(o.setToServerValue==="REQUEST_TIME"),a=new Wt;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Tt(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new St(u)}else"increment"in o?a=new Yt(i,o.increment):b();const c=J.fromServerFormat(o.fieldPath);return new fs(c,a)}(n,r)):[];if(e.update){e.update.name;const r=ke(n,e.update.name),i=new le({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Se(c.map(u=>J.fromServerFormat(u)))}(e.updateMask);return new Ve(r,i,o,t,s)}return new ln(r,i,t,s)}if(e.delete){const r=ke(n,e.delete);return new dn(r,t)}if(e.verify){const r=ke(n,e.verify);return new Io(r,t)}return b()}function bg(n,e){return n&&n.length>0?(T(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?Z(s.updateTime):Z(r);return i.isEqual(D.min())&&(i=Z(r)),new og(i,s.transformResults||[])}(t,e))):[]}function Ph(n,e){return{documents:[Ri(n,e.path)]}}function bo(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Ri(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ri(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Uh(L.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Vt(h.field),direction:Sg(h.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||hs(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Bh(n){let e=Lh(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){T(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(h){const l=qh(h);return l instanceof L&&rh(l)?l.getFilters():[l]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new $t(Pt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,hs(l)?null:l}(t.limit));let c=null;t.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new Xe(d,l)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new Xe(d,l)}(t.endAt)),fh(e,r,o,i,a,"F",c,u)}function Tg(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function qh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Pt(e.unaryFilter.field);return N.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Pt(e.unaryFilter.field);return N.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pt(e.unaryFilter.field);return N.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pt(e.unaryFilter.field);return N.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(n):n.fieldFilter!==void 0?function(e){return N.create(Pt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return L.create(e.compositeFilter.filters.map(t=>qh(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(n):b()}function Sg(n){return gg[n]}function Dg(n){return pg[n]}function Cg(n){return yg[n]}function Vt(n){return{fieldPath:n.canonicalString()}}function Pt(n){return J.fromServerFormat(n.fieldPath)}function Uh(n){return n instanceof N?function(e){if(e.op==="=="){if(Oa(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NAN"}};if(Ma(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Oa(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NOT_NAN"}};if(Ma(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(e.field),op:Dg(e.op),value:e.value}}}(n):n instanceof L?function(e){const t=e.getFilters().map(s=>Uh(s));return t.length===1?t[0]:{compositeFilter:{op:Cg(e.op),filters:t}}}(n):b()}function xg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $h(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xa(e)),e=Ag(n.get(t),e);return Xa(e)}function Ag(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Xa(n){return n+""}function Ne(n){const e=n.length;if(T(e>=2),e===2)return T(n.charAt(0)===""&&n.charAt(1)===""),M.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:b()}i=o+2}return new M(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n,e){return[n,we(e)]}function Gh(n,e,t){return[n,we(e),t]}const _g={},Ng=["prefixPath","collectionGroup","readTime","documentId"],kg=["prefixPath","collectionGroup","documentId"],Rg=["collectionGroup","readTime","prefixPath","documentId"],Mg=["canonicalId","targetId"],Og=["targetId","path"],Lg=["path","targetId"],Fg=["collectionId","parent"],Vg=["indexId","uid"],Pg=["uid","sequenceNumber"],Bg=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qg=["indexId","uid","orderedDocumentKey"],Ug=["userId","collectionPath","documentId"],$g=["userId","collectionPath","largestBatchId"],Gg=["userId","collectionGroup","largestBatchId"],jh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],jg=[...jh,"documentOverlays"],Kh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zh=Kh,Kg=[...zh,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Ju{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function ue(n,e){const t=I(n);return xe.M(t.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ag(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Mn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Mn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Nh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=Sh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_())}isEqual(e){return this.batchId===e.batchId&&zt(this.mutations,e.mutations,(t,s)=>ja(t,s))&&zt(this.baseMutations,e.baseMutations,(t,s)=>ja(t,s))}}class So{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){T(e.mutations.length===s.length);let r=lg;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new So(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,s,r,i=D.min(),o=D.min(),a=re.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.ie=e}}function zg(n,e){let t;if(e.document)t=Vh(n.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=Ct(e.noDocument.readTime);t=q.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const s=v.fromSegments(e.unknownDocument.path),r=Ct(e.unknownDocument.version);t=q.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new Q(s[0],s[1]);return D.fromTimestamp(r)}(e.readTime)),t}function Za(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:nr(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:Yn(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Xt(r,i.version.toTimestamp()),createTime:Xt(r,i.createTime.toTimestamp())}}(n.ie,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:Dt(e.version)};else{if(!e.isUnknownDocument())return b();s.unknownDocument={path:t.path.toArray(),version:Dt(e.version)}}return s}function nr(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Dt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ct(n){const e=new Q(n.seconds,n.nanoseconds);return D.fromTimestamp(e)}function ut(n,e){const t=(e.baseMutations||[]).map(i=>Mi(n.ie,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Mi(n.ie,i)),r=Q.fromMillis(e.localWriteTimeMs);return new To(e.batchId,r,t,s)}function _n(n){const e=Ct(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ct(n.lastLimboFreeSnapshotVersion):D.min();let s;var r;return n.query.documents!==void 0?(T((r=n.query).documents.length===1),s=ve(hn(Lh(r.documents[0])))):s=function(i){return ve(Bh(i))}(n.query),new Qe(s,n.targetId,0,n.lastListenSequenceNumber,e,t,re.fromBase64String(n.resumeToken))}function Hh(n,e){const t=Dt(e.snapshotVersion),s=Dt(e.lastLimboFreeSnapshotVersion);let r;r=Zs(e.target)?Ph(n.ie,e.target):bo(n.ie,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:bt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Co(n){const e=Bh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tr(e,e.limit,"L"):e}function ri(n,e){return new Do(e.largestBatchId,Mi(n.ie,e.overlayMutation))}function ec(n,e){const t=e.path.lastSegment();return[n,we(e.path.popLast()),t]}function tc(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Dt(s.readTime),documentKey:we(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{getBundleMetadata(e,t){return nc(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Ct(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return nc(e).put({bundleId:(s=t).id,createTime:Dt(Z(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return sc(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:Co(r.bundledQuery),readTime:Ct(r.readTime)};var r})}saveNamedQuery(e,t){return sc(e).put(function(s){return{name:s.name,readTime:Dt(Z(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function nc(n){return ue(n,"bundles")}function sc(n){return ue(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const s=t.uid||"";return new Nr(e,s)}getOverlay(e,t){return In(e).get(ec(this.userId,t)).next(s=>s?ri(this.yt,s):null)}getOverlays(e,t){const s=_e();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new Do(t,o);r.push(this.oe(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(we(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(In(e).Y("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=_e(),i=we(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return In(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=ri(this.yt,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=_e();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return In(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,h)=>{const l=ri(this.yt,u);i.size()<r||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}oe(e,t){return In(e).put(function(s,r,i){const[o,a,c]=ec(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Jn(s.ie,i.mutation)}}(this.yt,this.userId,t))}}function In(n){return ue(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(H(e.integerValue));else if("doubleValue"in e){const s=H(e.doubleValue);isNaN(s)?this.he(t,13):(this.he(t,15),zn(s)?t.le(0):t.le(s))}else if("timestampValue"in e){const s=e.timestampValue;this.he(t,20),typeof s=="string"?t.fe(s):(t.fe(`${s.seconds||""}`),t.le(s.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(vt(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.he(t,45),t.le(s.latitude||0),t.le(s.longitude||0)}else"mapValue"in e?nh(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):b()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const s=e.fields||{};this.he(t,55);for(const r of Object.keys(s))this.de(r,t),this.ce(s[r],t)}ye(e,t){const s=e.values||[];this.he(t,50);for(const r of s)this.ce(r,t)}me(e,t){this.he(t,37),v.fromName(e).path.forEach(s=>{this.he(t,60),this.pe(s,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}ht.Ie=new ht;function Hg(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function rc(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=Hg(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Wg{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ee(s.value),s=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.be(s.value),s=t.next();this.Pe()}ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ee(s);else if(s<2048)this.Ee(960|s>>>6),this.Ee(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ee(480|s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s);else{const r=t.codePointAt(0);this.Ee(240|r>>>18),this.Ee(128|63&r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r)}}this.Ae()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const r=t.codePointAt(0);this.be(240|r>>>18),this.be(128|63&r>>>12),this.be(128|63&r>>>6),this.be(128|63&r)}}this.Pe()}Se(e){const t=this.De(e),s=rc(t);this.Ce(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}xe(e){const t=this.De(e),s=rc(t);this.Ce(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Ee(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Yg{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class Xg{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class En{constructor(){this.$e=new Wg,this.Be=new Yg(this.$e),this.Le=new Xg(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Ue(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new lt(this.indexId,this.documentKey,this.arrayValue,s)}}function qe(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ic(n.arrayValue,e.arrayValue),t!==0?t:(t=ic(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function ic(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const s=t;s.isInequality()?this.Qe=s:this.Ge.push(s)}}je(e){T(e.collectionGroup===this.collectionId);const t=Di(e);if(t!==void 0&&!this.We(t))return!1;const s=at(e);let r=0,i=0;for(;r<s.length&&this.We(s[r]);++r);if(r===s.length)return!0;if(this.Qe!==void 0){const o=s[r];if(!this.ze(this.Qe,o)||!this.He(this.Ke[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],o))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n){var e,t;if(T(n instanceof N||n instanceof L),n instanceof N){if(n instanceof lh){const r=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>N.create(n.field,"==",i)))||[];return L.create(r,"or")}return n}const s=n.filters.map(r=>Wh(r));return L.create(s,n.op)}function Zg(n){if(n.getFilters().length===0)return[];const e=Vi(Wh(n));return T(Yh(e)),Li(e)||Fi(e)?[e]:e.getFilters()}function Li(n){return n instanceof N}function Fi(n){return n instanceof L&&rh(n)}function Yh(n){return Li(n)||Fi(n)||function(e){if(e instanceof L&&Ai(e)){for(const t of e.getFilters())if(!Li(t)&&!Fi(t))return!1;return!0}return!1}(n)}function Vi(n){if(T(n instanceof N||n instanceof L),n instanceof N)return n;if(n.filters.length===1)return Vi(n.filters[0]);const e=n.filters.map(s=>Vi(s));let t=L.create(e,n.op);return t=sr(t),Yh(t)?t:(T(t instanceof L),T(Ht(t)),T(t.filters.length>1),t.filters.reduce((s,r)=>xo(s,r)))}function xo(n,e){let t;return T(n instanceof N||n instanceof L),T(e instanceof N||e instanceof L),t=n instanceof N?e instanceof N?function(s,r){return L.create([s,r],"and")}(n,e):oc(n,e):e instanceof N?oc(e,n):function(s,r){if(T(s.filters.length>0&&r.filters.length>0),Ht(s)&&Ht(r))return ch(s,r.getFilters());const i=Ai(s)?s:r,o=Ai(s)?r:s,a=i.filters.map(c=>xo(c,o));return L.create(a,"or")}(n,e),sr(t)}function oc(n,e){if(Ht(e))return ch(e,n.getFilters());{const t=e.filters.map(s=>xo(n,s));return L.create(t,"or")}}function sr(n){if(T(n instanceof N||n instanceof L),n instanceof N)return n;const e=n.getFilters();if(e.length===1)return sr(e[0]);if(ih(n))return n;const t=e.map(r=>sr(r)),s=[];return t.forEach(r=>{r instanceof N?s.push(r):r instanceof L&&(r.op===n.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:L.create(s,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Je=new Ao}addToCollectionParentIndex(e,t){return this.Je.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ce.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ce.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Ao{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new F(M.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new F(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Uint8Array(0);class tp{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new Ao,this.Xe=new st(s=>bt(s),(s,r)=>ls(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const i={collectionId:s,parent:we(r)};return ac(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[Hu(t),""],!1,!0);return ac(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(Ne(o.parent))}return s})}addFieldIndex(e,t){const s=_s(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=Tn(e);return i.next(a=>{o.put(tc(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=_s(e),r=Tn(e),i=bn(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=bn(e);let r=!0;const i=new Map;return f.forEach(this.Ze(t),o=>this.tn(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=_();const a=[];return f.forEach(i,(c,u)=>{var h;y("IndexedDbIndexManager",`Using index ${h=c,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(P=>`${P.fieldPath}:${P.kind}`).join(",")}`} to execute ${bt(t)}`);const l=function(P,z){const B=Di(z);if(B===void 0)return null;for(const G of er(P,B.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(u,c),d=function(P,z){const B=new Map;for(const G of at(z))for(const Ie of er(P,G.fieldPath))switch(Ie.op){case"==":case"in":B.set(G.fieldPath.canonicalString(),Ie.value);break;case"not-in":case"!=":return B.set(G.fieldPath.canonicalString(),Ie.value),Array.from(B.values())}return null}(u,c),g=function(P,z){const B=[];let G=!0;for(const Ie of at(z)){const wn=Ie.kind===0?qa(P,Ie.fieldPath,P.startAt):Ua(P,Ie.fieldPath,P.startAt);B.push(wn.value),G&&(G=wn.inclusive)}return new Xe(B,G)}(u,c),w=function(P,z){const B=[];let G=!0;for(const Ie of at(z)){const wn=Ie.kind===0?Ua(P,Ie.fieldPath,P.endAt):qa(P,Ie.fieldPath,P.endAt);B.push(wn.value),G&&(G=wn.inclusive)}return new Xe(B,G)}(u,c),E=this.en(c,u,g),C=this.en(c,u,w),V=this.nn(c,u,d),$=this.sn(c.indexId,l,E,g.inclusive,C,w.inclusive,V);return f.forEach($,P=>s.J(P,t.limit).next(z=>{z.forEach(B=>{const G=v.fromSegments(B.documentKey);o.has(G)||(o=o.add(G),a.push(G))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(e.filters.length===0?t=[e]:t=Zg(L.create(e.filters,"and")).map(s=>_i(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,s,r,i,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,i.length),u=c/(t!=null?t.length:1),h=[];for(let l=0;l<c;++l){const d=t?this.rn(t[l/u]):As,g=this.on(e,d,s[l%u],r),w=this.un(e,d,i[l%u],o),E=a.map(C=>this.on(e,d,C,!0));h.push(...this.createRange(g,w,E))}return h}on(e,t,s,r){const i=new lt(e,v.empty(),t,s);return r?i:i.Ue()}un(e,t,s,r){const i=new lt(e,v.empty(),t,s);return r?i.Ue():i}tn(e,t){const s=new Jg(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const r=this.Ze(t);return f.forEach(r,i=>this.tn(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new F(J.comparator),u=!1;for(const h of a.filters)for(const l of h.getFlattenedFilters())l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?u=!0:c=c.add(l.field));for(const h of a.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(u?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(t)&&r.length>1&&s===2?1:s)}cn(e,t){const s=new En;for(const r of at(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.qe(r.kind);ht.Ie.ue(i,o)}return s.Fe()}rn(e){const t=new En;return ht.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const s=new En;return ht.Ie.ue(Et(this.databaseId,t),s.qe(function(r){const i=at(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Fe()}nn(e,t,s){if(s===null)return[];let r=[];r.push(new En);let i=0;for(const o of at(e)){const a=s[i++];for(const c of r)if(this.hn(t,o.fieldPath)&&Wn(a))r=this.ln(r,o,a);else{const u=c.qe(o.kind);ht.Ie.ue(a,u)}}return this.fn(r)}en(e,t,s){return this.nn(e,t,s.position)}fn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Fe();return t}ln(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new En;c.seed(a.Fe()),ht.Ie.ue(o,c.qe(t.kind)),i.push(c)}return i}hn(e,t){return!!e.filters.find(s=>s instanceof N&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=_s(e),r=Tn(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const l=h?new Kn(h.sequenceNumber,new Ce(Ct(h.readTime),new v(Ne(h.documentKey)),h.largestBatchId)):Kn.empty(),d=u.fields.map(([g,w])=>new Rs(J.fromServerFormat(g),w));return new Js(u.indexId,u.collectionGroup,d,l)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:x(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=_s(e),i=Tn(e);return this.dn(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>i.put(tc(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,c=>this._n(e,r,c).next(u=>{const h=this.wn(i,c);return u.isEqual(h)?f.resolve():this.mn(e,i,c,u,h)}))))})}gn(e,t,s,r){return bn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(s,t.key),documentKey:t.key.path.toArray()})}yn(e,t,s,r){return bn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(s,t.key),t.key.path.toArray()])}_n(e,t,s){const r=bn(e);let i=new F(qe);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.an(s,t)])},(o,a)=>{i=i.add(new lt(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,t){let s=new F(qe);const r=this.cn(t,e);if(r==null)return s;const i=Di(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Wn(o))for(const a of o.arrayValue.values||[])s=s.add(new lt(t.indexId,e.key,this.rn(a),r))}else s=s.add(new lt(t.indexId,e.key,As,r));return s}mn(e,t,s,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,h,l){const d=a.getIterator(),g=c.getIterator();let w=Lt(d),E=Lt(g);for(;w||E;){let C=!1,V=!1;if(w&&E){const $=u(w,E);$<0?V=!0:$>0&&(C=!0)}else w!=null?V=!0:C=!0;C?(h(E),E=Lt(g)):V?(l(w),w=Lt(d)):(w=Lt(d),E=Lt(g))}}(r,i,qe,a=>{o.push(this.gn(e,t,s,a))},a=>{o.push(this.yn(e,t,s,a))}),f.waitFor(o)}dn(e){let t=1;return Tn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>qe(o,a)).filter((o,a,c)=>!a||qe(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=qe(o,e),c=qe(o,t);if(a===0)r[0]=e.Ue();else if(a>0&&c<0)r.push(o),r.push(o.Ue());else if(c>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2){if(this.pn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,As,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,As,[]];i.push(IDBKeyRange.bound(a,c))}return i}pn(e,t){return qe(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(cc)}getMinOffset(e,t){return f.mapArray(this.Ze(t),s=>this.tn(e,s).next(r=>r||b())).next(cc)}}function ac(n){return ue(n,"collectionParents")}function bn(n){return ue(n,"indexEntries")}function _s(n){return ue(n,"indexConfiguration")}function Tn(n){return ue(n,"indexState")}function cc(n){T(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;mo(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Ce(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ee{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(h,l,d)=>(a++,d.delete()));i.push(c.next(()=>{T(a===1)}));const u=[];for(const h of t.mutations){const l=Gh(e,h.key.path,t.batchId);i.push(r.delete(l)),u.push(h.key)}return f.waitFor(i).next(()=>u)}function rr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(41943040,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);class kr{constructor(e,t,s,r){this.userId=e,this.yt=t,this.indexManager=s,this.referenceDelegate=r,this.In={}}static re(e,t,s,r){T(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new kr(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ue(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=Bt(e),o=Ue(e);return o.add({}).next(a=>{T(typeof a=="number");const c=new To(a,t,s,r),u=function(d,g,w){const E=w.baseMutations.map(V=>Jn(d.ie,V)),C=w.mutations.map(V=>Jn(d.ie,V));return{userId:g,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:E,mutations:C}}(this.yt,this.userId,c),h=[];let l=new F((d,g)=>x(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Gh(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,_g))}return l.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),f.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return Ue(e).get(t).next(s=>s?(T(s.userId===this.userId),ut(this.yt,s)):null)}Tn(e,t){return this.In[t]?f.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.In[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Ue(e).Z({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(T(a.batchId>=s),i=ut(this.yt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Ue(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ue(e).W("userMutationsIndex",t).next(s=>s.map(r=>ut(this.yt,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Vs(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return Bt(e).Z({range:r},(o,a,c)=>{const[u,h,l]=o,d=Ne(h);if(u===this.userId&&t.path.isEqual(d))return Ue(e).get(l).next(g=>{if(!g)throw b();T(g.userId===this.userId),i.push(ut(this.yt,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new F(x);const r=[];return t.forEach(i=>{const o=Vs(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Bt(e).Z({range:a},(u,h,l)=>{const[d,g,w]=u,E=Ne(g);d===this.userId&&i.path.isEqual(E)?s=s.add(w):l.done()});r.push(c)}),f.waitFor(r).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=Vs(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new F(x);return Bt(e).Z({range:o},(c,u,h)=>{const[l,d,g]=c,w=Ne(d);l===this.userId&&s.isPrefixOf(w)?w.length===r&&(a=a.add(g)):h.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],r=[];return t.forEach(i=>{r.push(Ue(e).get(i).next(o=>{if(o===null)throw b();T(o.userId===this.userId),s.push(ut(this.yt,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Xh(e.se,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Bt(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=Ne(i[1]);r.push(c)}else a.done()}).next(()=>{T(r.length===0)})})}containsKey(e,t){return Jh(e,this.userId,t)}Rn(e){return Zh(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Jh(n,e,t){const s=Vs(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Bt(n).Z({range:i,X:!0},(a,c,u)=>{const[h,l,d]=a;h===e&&l===r&&(o=!0),u.done()}).next(()=>o)}function Ue(n){return ue(n,"mutations")}function Bt(n){return ue(n,"documentMutations")}function Zh(n){return ue(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new xt(0)}static vn(){return new xt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new xt(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>D.fromTimestamp(new Q(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ft(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(T(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return Ft(e).Z((o,a)=>{const c=_n(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Ft(e).Z((s,r)=>{const i=_n(r);t(i)})}Vn(e){return hc(e).get("targetGlobalKey").next(t=>(T(t!==null),t))}Sn(e,t){return hc(e).put("targetGlobalKey",t)}Dn(e,t){return Ft(e).put(Hh(this.yt,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=bt(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Ft(e).Z({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const u=_n(a);ls(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=$e(e);return t.forEach(o=>{const a=we(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=$e(e);return f.forEach(t,i=>{const o=we(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=$e(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=$e(e);let i=_();return r.Z({range:s,X:!0},(o,a,c)=>{const u=Ne(o[1]),h=new v(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const s=we(t.path),r=IDBKeyRange.bound([s],[Hu(s)],!1,!0);let i=0;return $e(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,t){return Ft(e).get(t).next(s=>s?_n(s):null)}}function Ft(n){return ue(n,"targets")}function hc(n){return ue(n,"targetGlobal")}function $e(n){return ue(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc([n,e],[t,s]){const r=x(n,t);return r===0?x(e,s):r}class sp{constructor(e){this.xn=e,this.buffer=new F(lc),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();lc(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rp{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){nt(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await tt(t)}await this.Fn(3e5)})}}class ip{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(be.at);const s=new sp(t);return this.$n.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(uc)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uc):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),r=this.params.maximumSequenceNumbersToCollect):r=l,o=Date.now(),this.nthSequenceNumber(e,r))).next(l=>(s=l,a=Date.now(),this.removeTargets(e,s,t))).next(l=>(i=l,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(l=>(u=Date.now(),Si()<=O.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${l} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new ip(s,r)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Un(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,r)=>t(r))}addReference(e,t,s){return Ns(e,s)}removeReference(e,t,s){return Ns(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Ns(e,t)}Gn(e,t){return function(s,r){let i=!1;return Zh(s).tt(o=>Jh(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,D.min()),$e(e).delete([0,we(o.path)])))});r.push(c)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Ns(e,t)}Kn(e,t){const s=$e(e);let r,i=be.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==be.at&&t(new v(Ne(r)),i),i=u,r=c):i=be.at}).next(()=>{i!==be.at&&t(new v(Ne(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ns(n,e){return $e(n).put(function(t,s){return{targetId:0,path:we(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.changes=new st(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,q.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return it(e).put(s)}removeEntry(e,t,s){return it(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],nr(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=q.newInvalidDocument(t);return it(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Sn(t))},(r,i)=>{s=this.jn(t,i)}).next(()=>s)}Wn(e,t){let s={size:0,document:q.newInvalidDocument(t)};return it(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Sn(t))},(r,i)=>{s={document:this.jn(t,i),size:rr(i)}}).next(()=>s)}getEntries(e,t){let s=Te();return this.zn(e,t,(r,i)=>{const o=this.jn(r,i);s=s.insert(r,o)}).next(()=>s)}Hn(e,t){let s=Te(),r=new Y(v.comparator);return this.zn(e,t,(i,o)=>{const a=this.jn(i,o);s=s.insert(i,a),r=r.insert(i,rr(o))}).next(()=>({documents:s,Jn:r}))}zn(e,t,s){if(t.isEmpty())return f.resolve();let r=new F(mc);t.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(Sn(r.first()),Sn(r.last())),o=r.getIterator();let a=o.getNext();return it(e).Z({index:"documentKeyIndex",range:i},(c,u,h)=>{const l=v.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&mc(a,l)<0;)s(a,null),a=o.getNext();a&&a.isEqual(l)&&(s(a,u),a=o.hasNext()?o.getNext():null),a?h.j(Sn(a)):h.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),nr(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return it(e).W(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=Te();for(const c of o){const u=this.jn(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=Te();const o=fc(t,s),a=fc(t,Ce.max());return it(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,h)=>{const l=this.jn(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(l.key,l),i.size===r&&h.done()}).next(()=>i)}newChangeBuffer(e){return new cp(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return dc(e).get("remoteDocumentGlobalKey").next(t=>(T(!!t),t))}Qn(e,t){return dc(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=zg(this.yt,t);if(!(s.isNoDocument()&&s.version.isEqual(D.min())))return s}return q.newInvalidDocument(e)}}function tl(n){return new ap(n)}class cp extends el{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new st(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new F((i,o)=>x(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Za(this.Yn.yt,o);r=r.add(i.path.popLast()),s+=rr(c)-a.size,t.push(this.Yn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=Za(this.Yn.yt,o.convertToNoDocument(D.min()));t.push(this.Yn.addEntry(e,i,c))}}),r.forEach(i=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Yn.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:r})=>(r.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function dc(n){return ue(n,"remoteDocumentGlobal")}function it(n){return ue(n,"remoteDocumentsV14")}function Sn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function fc(n,e){const t=e.documentKey.path.toArray();return[n,nr(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function mc(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=x(t[i],s[i]),r)return r;return r=x(t.length,s.length),r||(r=x(t[t.length-2],s[s.length-2]),r||x(t[t.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Mn(s.mutation,r,Se.empty(),Q.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,_()).next(()=>s))}getLocalViewOfDocuments(e,t,s=_()){const r=_e();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=An();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=_e();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,_()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Te();const o=On(),a=On();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ve)?i=i.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),Mn(h.mutation,u,h.mutation.getFieldMask(),Q.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var l;return a.set(u,new up(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(e,t){const s=On();let r=new Y((o,a)=>o-a),i=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Se.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||_()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Nh();h.forEach(d=>{if(!i.has(d)){const g=Sh(t.get(d),s.get(d));g!==null&&l.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):f.resolve(_e());let a=-1,c=i;return o.next(u=>f.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_())).next(h=>({batchId:a,changes:_h(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let r=An();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=An();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const c=function(u,h){return new Fe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,q.newInvalidDocument(u)))});let o=An();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Mn(u.mutation,c,Se.empty(),Q.now()),vo(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:Z(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:Co(s.bundledQuery),readTime:Z(s.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.overlays=new Y(v.comparator),this.es=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_e();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.oe(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=_e(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Y((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=_e(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=_e(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}oe(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Do(t,s));let i=this.es.get(t);i===void 0&&(i=_(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.ns=new F(ie.ss),this.rs=new F(ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new ie(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new ie(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new v(new M([])),s=new ie(t,e),r=new ie(t,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new v(new M([])),s=new ie(t,e),r=new ie(t,e+1);let i=_();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ie(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ie{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return v.comparator(e.key,t.key)||x(e._s,t._s)}static os(e,t){return x(e._s,t._s)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new F(ie.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new To(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ps(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ie(t,0),r=new ie(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new F(x);return t.forEach(r=>{const i=new ie(r,0),o=new ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new ie(new v(i),0);let a=new F(x);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){T(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(t.mutations,r=>{const i=new ie(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new ie(t,0),r=this.gs.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.Es=e,this.docs=new Y(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():q.newInvalidDocument(t))}getEntries(e,t){let s=Te();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():q.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(e,t,s){let r=Te();const i=new v(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||mo(Yu(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,t,s,r){b()}As(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new mp(this)}getSize(e){return f.resolve(this.size)}}class mp extends el{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.persistence=e,this.Rs=new st(t=>bt(t),ls),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _o,this.targetCount=0,this.vs=xt.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),f.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new xt(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Dn(t),f.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new be(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new gp(this),this.indexManager=new ep,this.remoteDocumentCache=function(s){return new fp(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Qh(t),this.Ns=new hp(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new dp(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){y("MemoryPersistence","Starting transaction:",e);const r=new pp(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,t){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class pp extends Ju{constructor(e){super(),this.currentSequenceNumber=e}}class Rr{constructor(e){this.persistence=e,this.Fs=new _o,this.$s=null}static Bs(e){return new Rr(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),f.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const r=v.fromPath(s);return this.qs(e,r).next(i=>{i||t.removeEntry(r,D.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return f.or([()=>f.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.yt=e}$(e,t,s,r){const i=new Dr("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ja,{unique:!0}),a.createObjectStore("documentMutations")}(e),gc(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),gc(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:D.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ja,{unique:!0});const h=c.store("mutations"),l=u.map(d=>h.put(d));return f.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Us(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),s<7&&r>=7&&(o=o.next(()=>this.Gs(i))),s<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.js(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:Ug});c.createIndex("collectionPathOverlayIndex",$g,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Gg,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:Ng});c.createIndex("documentKeyIndex",kg),c.createIndex("collectionGroupIndex",Rg)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Vg}).createIndex("sequenceNumberIndex",Pg,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Bg}).createIndex("documentKeyIndex",qg,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,r)=>{t+=rr(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Us(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{T(c.userId===i.userId);const u=ut(this.yt,c);return Xh(e,i.userId,u).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const c=new M(o),u=function(h){return[0,we(h)]}(c);i.push(t.get(u).next(h=>h?f.resolve():(l=>t.put({targetId:0,path:we(l),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(i))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Fg});const s=t.store("collectionParents"),r=new Ao,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:we(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new M(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const h=Ne(a);return i(h.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,r)=>{const i=_n(r),o=Hh(this.yt,i);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new v(M.fromString(u.document.name).popFirst(5)):u.noDocument?v.fromSegments(u.noDocument.path):u.unknownDocument?v.fromSegments(u.unknownDocument.path):b()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(h))}).next(()=>f.waitFor(r))}zs(e,t){const s=t.store("mutations"),r=tl(this.yt),i=new sl(Rr.Bs,this.yt.ie);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let h=(u=a.get(c.userId))!==null&&u!==void 0?u:_();ut(this.yt,c).keys().forEach(l=>h=h.add(l)),a.set(c.userId,h)}),f.forEach(a,(c,u)=>{const h=new oe(u),l=Nr.re(this.yt,h),d=i.getIndexManager(h),g=kr.re(h,this.yt,d,i.referenceDelegate);return new nl(r,g,l,d).recalculateAndSaveOverlaysForDocumentKeys(new Oi(t,be.at),c).next()})})}}function gc(n){n.createObjectStore("targetDocuments",{keyPath:Og}).createIndex("documentTargetsIndex",Lg,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Mg,{unique:!0}),n.createObjectStore("targetGlobal")}const ii="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class No{constructor(e,t,s,r,i,o,a,c,u,h,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=h,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!No.C())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new op(this,r),this.ii=t+"main",this.yt=new Qh(c),this.ri=new xe(this.ii,this.Xs,new yp(this.yt)),this.Cs=new np(this.referenceDelegate,this.yt),this.remoteDocumentCache=tl(this.yt),this.Ns=new Qg,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,h===!1&&X("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,ii);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new be(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ks(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(nt(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Dn(e).get("owner").next(t=>f.resolve(this.mi(t)))}gi(e){return ks(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=ue(t,"clientMetadata");return s.W().next(r=>{const i=this.Ii(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?f.resolve(!0):Dn(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,ii);return!1}}return!(!this.networkEnabled||!this.inForeground)||ks(e).W().next(s=>this.Ii(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Oi(e,be.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>ks(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return kr.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new tp(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Nr.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){y("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?Kg:o===14?zh:o===13?Kh:o===12?jg:o===11?jh:void b();var o;let a;return this.ri.runTransaction(e,r,i,c=>(a=new Oi(c,this.Ss?this.Ss.next():be.at),t==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw X(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new p(m.FAILED_PRECONDITION,Xu);return s(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Dn(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,ii)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Dn(e).put("owner",t)}static C(){return xe.C()}_i(e){const t=Dn(e);return t.get("owner").next(s=>this.mi(s)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(X(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),sd()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return X("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){X("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Dn(n){return ue(n,"owner")}function ks(n){return ue(n,"clientMetadata")}function ko(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=r}static Ci(e,t){let s=_(),r=_();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ro(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,s)).next(i=>i||this.Mi(e,t))}ki(e,t){if($a(t))return f.resolve(null);let s=ve(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=tr(t,null,"F"),s=ve(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,tr(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,s,r){return $a(t)||r.isEqual(D.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,s,r)?this.Mi(e,t):(Si()<=O.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ki(t)),this.Bi(e,o,t,Wu(r,-1)))})}Fi(e,t){let s=new F(ph(e));return t.forEach((r,i)=>{vo(e,i)&&(s=s.add(i))}),s}$i(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Si()<=O.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ki(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ce.min())}Bi(e,t,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,s,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new Y(x),this.Ui=new st(i=>bt(i),ls),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nl(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function il(n,e,t,s){return new wp(n,e,t,s)}async function ol(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function vp(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=f.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const E=c.docVersions.get(g);T(E!==null),w.version.compareTo(E)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function al(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Ip(n,e){const t=I(n),s=e.snapshotVersion;let r=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});r=t.qi;const a=[];e.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>t.Cs.addMatchingKeys(i,h.addedDocuments,l)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?g=g.withResumeToken(re.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(w,E,C){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,g,h)&&a.push(t.Cs.updateTargetData(i,g))});let c=Te(),u=_();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(cl(i,o,e.documentUpdates).next(h=>{c=h.Wi,u=h.zi})),!s.isEqual(D.min())){const h=t.Cs.getLastRemoteSnapshotVersion(i).next(l=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.qi=r,i))}function cl(n,e,t){let s=_(),r=_();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Te();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(D.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Ep(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jt(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Cs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.Cs.allocateTargetId(s).next(o=>(r=new Qe(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function Zt(n,e,t){const s=I(n),r=s.qi.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!nt(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function ir(n,e,t){const s=I(n);let r=D.min(),i=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.Ui.get(u);return l!==void 0?f.resolve(h.qi.get(l)):h.Cs.getTargetData(c,u)}(s,o,ve(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?r:D.min(),t?i:_())).next(a=>(ll(s,gh(e),a),{documents:a,Hi:i})))}function ul(n,e){const t=I(n),s=I(t.Cs),r=t.qi.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.ne(i,e).next(o=>o?o.target:null))}function hl(n,e){const t=I(n),s=t.Ki.get(e)||D.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Gi.getAllFromCollectionGroup(r,e,Wu(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(ll(t,e,r),r))}function ll(n,e,t){let s=n.Ki.get(e)||D.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ki.set(e,s)}async function bp(n,e,t,s){const r=I(n);let i=_(),o=Te();for(const u of t){const h=e.Ji(u.metadata.name);u.document&&(i=i.add(h));const l=e.Yi(u);l.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(h,l)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),c=await Jt(r,function(u){return ve(hn(M.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>cl(u,a,o).next(h=>(a.apply(u),h)).next(h=>r.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Cs.addMatchingKeys(u,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(u,h.Wi,h.zi)).next(()=>h.Wi)))}async function Tp(n,e,t=_()){const s=await Jt(n,ve(Co(e.bundledQuery))),r=I(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=Z(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ns.saveNamedQuery(i,e);const a=s.withResumeToken(re.EMPTY_BYTE_STRING,o);return r.qi=r.qi.insert(a.targetId,a),r.Cs.updateTargetData(i,a).next(()=>r.Cs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Cs.addMatchingKeys(i,t,s.targetId)).next(()=>r.Ns.saveNamedQuery(i,e))})}function pc(n,e){return`firestore_clients_${n}_${e}`}function yc(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function oi(n,e){return`firestore_targets_${n}_${e}`}class or{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Zi(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new p(r.error.code,r.error.message))),o?new or(e,t,r.state,i):(X("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ln{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new p(s.error.code,s.error.message))),i?new Ln(e,s.state,r):(X("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ar{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=_r();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=eh(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new ar(e,i):(X("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Mo{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Mo(t.clientId,t.onlineState):(X("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pi{constructor(){this.activeTargetIds=_r()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ai{constructor(e,t,s,r,i){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Y(x),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=pc(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Pi),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const r=this.getItem(pc(this.persistenceKey,s));if(r){const i=ar.Zi(s,r);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(oi(this.persistenceKey,e));if(s){const r=Ln.Zi(e,s);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(oi(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Er(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void X("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(r){let i=be.at;if(r!=null)try{const o=JSON.parse(r);T(typeof o=="number"),i=o}catch(o){X("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==be.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Mr(r)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const r=new or(this.currentUser,e,t,s),i=yc(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=yc(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const r=oi(this.persistenceKey,e),i=new Ln(e,t,s);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return ar.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return or.Zi(new oe(i),r,t)}Nr(e,t){const s=this._r.exec(e),r=Number(s[1]);return Ln.Zi(r,t)}yr(e){return Mo.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=_r();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class dl{constructor(){this.Lr=new Pi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Pi,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,r,i){const o=this.ho(e,t);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Kt("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,r,i,o){return this.ao(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+un,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=Dp[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new _m;a.setWithCredentials(!0),a.listenOnce(Cm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case si.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),i(u);break;case si.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),o(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case si.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const d=l==null?void 0:l.error;if(d&&d.status&&d.message){const g=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(d.status);o(new p(g,d.message))}else o(new p(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new p(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}wo(e,t,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Sm(),o=Dm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Am({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=r.join("");y("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const d=new Cp({Hr:w=>{l?y("Connection","Not sending because WebChannel is closed:",w):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),g=(w,E,C)=>{w.listen(E,V=>{try{C(V)}catch($){setTimeout(()=>{throw $},0)}})};return g(u,Cs.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),g(u,Cs.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),d.io())}),g(u,Cs.EventType.ERROR,w=>{l||(l=!0,Kt("Connection","WebChannel transport errored:",w),d.io(new p(m.UNAVAILABLE,"The operation could not be completed")))}),g(u,Cs.EventType.MESSAGE,w=>{var E;if(!l){const C=w.data[0];T(!!C);const V=C,$=V.error||((E=V[0])===null||E===void 0?void 0:E.error);if($){y("Connection","WebChannel received error:",$);const P=$.status;let z=function(G){const Ie=te[G];if(Ie!==void 0)return xh(Ie)}(P),B=$.message;z===void 0&&(z=m.INTERNAL,B="Unknown error status: "+P+" with message "+$.message),l=!0,d.io(new p(z,B)),u.close()}else y("Connection","WebChannel received:",C),d.ro(C)}}),g(o,xm.STAT_EVENT,w=>{w.stat===Aa.PROXY?y("Connection","Detected buffering proxy"):w.stat===Aa.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return typeof window!="undefined"?window:null}function Ps(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){return new wg(n,!0)}class Oo{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Oo(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(X(t.toString()),X("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===t&&this.Go(s,r)},s=>{e(()=>{const r=new p(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ap extends ml{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Eg(this.yt,e),s=function(r){if(!("targetChange"in r))return D.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?D.min():i.readTime?Z(i.readTime):D.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=Xn(this.yt),t.addTarget=function(r,i){let o;const a=i.target;return o=Zs(a)?{documents:Ph(r,a)}:{query:bo(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mh(r,i.resumeToken):i.snapshotVersion.compareTo(D.min())>0&&(o.readTime=Xt(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Tg(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=Xn(this.yt),t.removeTarget=e,this.Bo(t)}}class _p extends ml{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(T(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=bg(e.writeResults,e.commitTime),s=Z(e.commitTime);return this.listener.Zo(s,t)}return T(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xn(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Jn(this.yt,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new p(m.UNKNOWN,r.toString())})}_o(e,t,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}async function kp(n,e){const t=I(n),s=function(i,o){const a=bo(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(t.yt,ve(e)),r=s.parent;return t.connection.co||delete s.parent,(await t._o("RunAggregationQuery",r,s,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}class Rp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(X(t),this.ou=!1):y("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Pe(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c._u.add(4),await fn(c),c.gu.set("Unknown"),c._u.delete(4),await ys(c)}(this))})}),this.gu=new Rp(s,r)}}async function ys(n){if(Pe(n))for(const e of n.wu)await e(!0)}async function fn(n){for(const e of n.wu)await e(!1)}function Mr(n,e){const t=I(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Vo(t)?Fo(t):gn(t).ko()&&Lo(t,e))}function Zn(n,e){const t=I(n),s=gn(t);t.du.delete(e),s.ko()&&gl(t,e),t.du.size===0&&(s.ko()?s.Fo():Pe(t)&&t.gu.set("Unknown"))}function Lo(n,e){n.yu.Ot(e.targetId),gn(n).zo(e)}function gl(n,e){n.yu.Ot(e),gn(n).Ho(e)}function Fo(n){n.yu=new mg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),gn(n).start(),n.gu.uu()}function Vo(n){return Pe(n)&&!gn(n).No()&&n.du.size>0}function Pe(n){return I(n)._u.size===0}function pl(n){n.yu=void 0}async function Op(n){n.du.forEach((e,t)=>{Lo(n,e)})}async function Lp(n,e){pl(n),Vo(n)?(n.gu.hu(e),Fo(n)):n.gu.set("Unknown")}async function Fp(n,e,t){if(n.gu.set("Online"),e instanceof Rh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cr(n,s)}else if(e instanceof Fs?n.yu.Kt(e):e instanceof kh?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(D.min()))try{const s=await al(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(re.EMPTY_BYTE_STRING,c.snapshotVersion)),gl(r,a);const u=new Qe(c.target,a,1,c.sequenceNumber);Lo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await cr(n,s)}}async function cr(n,e,t){if(!nt(e))throw e;n._u.add(1),await fn(n),n.gu.set("Offline"),t||(t=()=>al(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await ys(n)})}function yl(n,e){return e().catch(t=>cr(n,t,e))}async function mn(n){const e=I(n),t=Je(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Vp(e);)try{const r=await Ep(e.localStore,s);if(r===null){e.fu.length===0&&t.Fo();break}s=r.batchId,Pp(e,r)}catch(r){await cr(e,r)}wl(e)&&vl(e)}function Vp(n){return Pe(n)&&n.fu.length<10}function Pp(n,e){n.fu.push(e);const t=Je(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function wl(n){return Pe(n)&&!Je(n).No()&&n.fu.length>0}function vl(n){Je(n).start()}async function Bp(n){Je(n).eu()}async function qp(n){const e=Je(n);for(const t of n.fu)e.Xo(t.mutations)}async function Up(n,e,t){const s=n.fu.shift(),r=So.from(s,e,t);await yl(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await mn(n)}async function $p(n,e){e&&Je(n).Yo&&await async function(t,s){if(r=s.code,Ch(r)&&r!==m.ABORTED){const i=t.fu.shift();Je(t).Mo(),await yl(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mn(t)}var r}(n,e),wl(n)&&vl(n)}async function vc(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Pe(t);t._u.add(3),await fn(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await ys(t)}async function Bi(n,e){const t=I(n);e?(t._u.delete(2),await ys(t)):e||(t._u.add(2),await fn(t),t.gu.set("Unknown"))}function gn(n){return n.pu||(n.pu=function(e,t,s){const r=I(e);return r.su(),new Ap(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(n.datastore,n.asyncQueue,{Yr:Op.bind(null,n),Zr:Lp.bind(null,n),Wo:Fp.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Vo(n)?Fo(n):n.gu.set("Unknown")):(await n.pu.stop(),pl(n))})),n.pu}function Je(n){return n.Iu||(n.Iu=function(e,t,s){const r=I(e);return r.su(),new _p(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(n.datastore,n.asyncQueue,{Yr:Bp.bind(null,n),Zr:$p.bind(null,n),tu:qp.bind(null,n),Zo:Up.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await mn(n)):(await n.Iu.stop(),n.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Po(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pn(n,e){if(X("AsyncQueue",`${e}: ${n}`),nt(n))return new p(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=An(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Gt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Gt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.Tu=new Y(v.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class en{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new en(e,t,Gt.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.Au=void 0,this.listeners=[]}}class jp{constructor(){this.queries=new st(e=>mh(e),ds),this.onlineState="Unknown",this.Ru=new Set}}async function Bo(n,e){const t=I(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new Gp),r)try{i.Au=await t.onListen(s)}catch(o){const a=pn(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&Uo(t)}async function qo(n,e){const t=I(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function Kp(n,e){const t=I(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Uo(t)}function zp(n,e,t){const s=I(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function Uo(n){n.Ru.forEach(e=>{e.next()})}class $o{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new en(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=en.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.yt=e}Ji(e){return ke(this.yt,e)}Yi(e){return e.metadata.exists?Vh(this.yt,e.document,!1):q.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Z(e)}}class Hp{constructor(e,t,s){this.Mu=e,this.localStore=t,this.yt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Il(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=M.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new Ec(this.yt);for(const r of e)if(r.metadata.queries){const i=s.Ji(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||_()).add(i);t.set(o,a)}}return t}async complete(){const e=await bp(this.localStore,new Ec(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await Tp(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Il(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.key=e}}class bl{constructor(e){this.key=e}}class Tl{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=_(),this.mutatedKeys=_(),this.Gu=ph(e),this.Qu=new Gt(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new Ic,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,l)=>{const d=r.get(h),g=vo(this.query,l)?l:null,w=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;d&&g?d.data.isEqual(g.data)?w!==E&&(s.track({type:3,doc:g}),C=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),C=!0):d&&!g&&(s.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,h)=>function(l,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(l)-g(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new en(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ic,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=_(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new bl(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new El(s))}),t}tc(e){this.qu=e.Hi,this.Ku=_();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return en.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Wp{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Yp{constructor(e){this.key=e,this.nc=!1}}class Xp{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new st(a=>mh(a),ds),this.rc=new Map,this.oc=new Set,this.uc=new Y(v.comparator),this.cc=new Map,this.ac=new _o,this.hc={},this.lc=new Map,this.fc=xt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Jp(n,e){const t=Qo(n);let s,r;const i=t.ic.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Jt(t.localStore,ve(e));t.isPrimaryClient&&Mr(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Go(t,e,s,a==="current",o.resumeToken)}return r}async function Go(n,e,t,s,r){n._c=(l,d,g)=>async function(w,E,C,V){let $=E.view.Wu(C);$.$i&&($=await ir(w.localStore,E.query,!1).then(({documents:B})=>E.view.Wu(B,$)));const P=V&&V.targetChanges.get(E.targetId),z=E.view.applyChanges($,w.isPrimaryClient,P);return qi(w,E.targetId,z.Xu),z.snapshot}(n,l,d,g);const i=await ir(n.localStore,e,!0),o=new Tl(e,i.Hi),a=o.Wu(i.documents),c=gs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);qi(n,t,u.Xu);const h=new Wp(e,t,o);return n.ic.set(e,h),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function Zp(n,e){const t=I(n),s=t.ic.get(e),r=t.rc.get(s.targetId);if(r.length>1)return t.rc.set(s.targetId,r.filter(i=>!ds(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Zt(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Zn(t.remoteStore,s.targetId),tn(t,s.targetId)}).catch(tt)):(tn(t,s.targetId),await Zt(t.localStore,s.targetId,!0))}async function ey(n,e,t){const s=Ho(n);try{const r=await function(i,o){const a=I(i),c=Q.now(),u=o.reduce((d,g)=>d.add(g.key),_());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Te(),w=_();return a.Gi.getEntries(d,u).next(E=>{g=E,g.forEach((C,V)=>{V.isValidDocument()||(w=w.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{h=E;const C=[];for(const V of o){const $=cg(V,h.get(V.key).overlayedDocument);$!=null&&C.push(new Ve(V.key,$,dh($.value.mapValue),K.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,C,o)}).next(E=>{l=E;const C=E.applyToLocalDocumentSet(h,w);return a.documentOverlayCache.saveOverlays(d,E.batchId,C)})}).then(()=>({batchId:l.batchId,changes:_h(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Y(x)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,t),await Be(s,r.changes),await mn(s.remoteStore)}catch(r){const i=pn(r,"Failed to persist write");t.reject(i)}}async function Sl(n,e){const t=I(n);try{const s=await Ip(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.cc.get(i);o&&(T(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?T(o.nc):r.removedDocuments.size>0&&(T(o.nc),o.nc=!1))}),await Be(t,s,e)}catch(s){await tt(s)}}function bc(n,e,t){const s=I(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&Uo(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ty(n,e,t){const s=I(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Y(v.comparator);o=o.insert(i,q.newNoDocument(i,D.min()));const a=_().add(i),c=new ms(D.min(),new Map,new F(x),o,a);await Sl(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),zo(s)}else await Zt(s.localStore,e,!1).then(()=>tn(s,e,t)).catch(tt)}async function ny(n,e){const t=I(n),s=e.batch.batchId;try{const r=await vp(t.localStore,e);Ko(t,s,null),jo(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Be(t,r)}catch(r){await tt(r)}}async function sy(n,e,t){const s=I(n);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(T(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Ko(s,e,t),jo(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Be(s,r)}catch(r){await tt(r)}}async function ry(n,e){const t=I(n);Pe(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.lc.get(s)||[];r.push(e),t.lc.set(s,r)}catch(s){const r=pn(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function jo(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function Ko(n,e,t){const s=I(n);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function tn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||Dl(n,s)})}function Dl(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Zn(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),zo(n))}function qi(n,e,t){for(const s of t)s instanceof El?(n.ac.addReference(s.key,e),iy(n,s)):s instanceof bl?(y("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||Dl(n,s.key)):b()}function iy(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(y("SyncEngine","New document in limbo: "+t),n.oc.add(s),zo(n))}function zo(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new v(M.fromString(e)),s=n.fc.next();n.cc.set(s,new Yp(t)),n.uc=n.uc.insert(t,s),Mr(n.remoteStore,new Qe(ve(hn(t.path)),s,2,be.at))}}async function Be(n,e,t){const s=I(n),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Ro.Ci(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Si,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>f.forEach(l.Di,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!nt(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.qi.get(l),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(l,w)}}}(s.localStore,i))}async function oy(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await ol(t.localStore,e);t.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new p(m.CANCELLED,i))})}),r.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Be(t,s.ji)}}function ay(n,e){const t=I(n),s=t.cc.get(e);if(s&&s.nc)return _().add(s.key);{let r=_();const i=t.rc.get(e);if(!i)return r;for(const o of i){const a=t.ic.get(o);r=r.unionWith(a.view.ju)}return r}}async function cy(n,e){const t=I(n),s=await ir(t.localStore,e.query,!0),r=e.view.tc(s);return t.isPrimaryClient&&qi(t,e.targetId,r.Xu),r}async function uy(n,e){const t=I(n);return hl(t.localStore,e).then(s=>Be(t,s))}async function hy(n,e,t,s){const r=I(n),i=await function(o,a){const c=I(o),u=I(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Tn(h,a).next(l=>l?c.localDocuments.getDocuments(h,l):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await mn(r.remoteStore):t==="acknowledged"||t==="rejected"?(Ko(r,e,s||null),jo(r,e),function(o,a){I(I(o).mutationQueue).An(a)}(r.localStore,e)):b(),await Be(r,i)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ly(n,e){const t=I(n);if(Qo(t),Ho(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await Tc(t,s.toArray());t.dc=!0,await Bi(t.remoteStore,!0);for(const i of r)Mr(t.remoteStore,i)}else if(e===!1&&t.dc!==!1){const s=[];let r=Promise.resolve();t.rc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(tn(t,o),Zt(t.localStore,o,!0))),Zn(t.remoteStore,o)}),await r,await Tc(t,s),function(i){const o=I(i);o.cc.forEach((a,c)=>{Zn(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Y(v.comparator)}(t),t.dc=!1,await Bi(t.remoteStore,!1)}}async function Tc(n,e,t){const s=I(n),r=[],i=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await Jt(s.localStore,ve(c[0]));for(const u of c){const h=s.ic.get(u),l=await cy(s,h);l.snapshot&&i.push(l.snapshot)}}else{const u=await ul(s.localStore,o);a=await Jt(s.localStore,u),await Go(s,Cl(u),o,!1,a.resumeToken)}r.push(a)}return s.sc.Wo(i),r}function Cl(n){return fh(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function dy(n){const e=I(n);return I(I(e.localStore).persistence).vi()}async function fy(n,e,t,s){const r=I(n);if(r.dc)return void y("SyncEngine","Ignoring unexpected query state notification.");const i=r.rc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await hl(r.localStore,gh(i[0])),a=ms.createSynthesizedRemoteEventForCurrentChange(e,t==="current",re.EMPTY_BYTE_STRING);await Be(r,o,a);break}case"rejected":await Zt(r.localStore,e,!0),tn(r,e,s);break;default:b()}}async function my(n,e,t){const s=Qo(n);if(s.dc){for(const r of e){if(s.rc.has(r)){y("SyncEngine","Adding an already active target "+r);continue}const i=await ul(s.localStore,r),o=await Jt(s.localStore,i);await Go(s,Cl(i),o.targetId,!1,o.resumeToken),Mr(s.remoteStore,o)}for(const r of t)s.rc.has(r)&&await Zt(s.localStore,r,!1).then(()=>{Zn(s.remoteStore,r),tn(s,r)}).catch(tt)}}function Qo(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ty.bind(null,e),e.sc.Wo=Kp.bind(null,e.eventManager),e.sc.wc=zp.bind(null,e.eventManager),e}function Ho(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ny.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sy.bind(null,e),e}function gy(n,e,t){const s=I(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(l,d){const g=I(l),w=Z(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",E=>g.Ns.getBundleMetadata(E,d.id)).then(E=>!!E&&E.createTime.compareTo(w)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Il(a));const c=new Hp(a,r.localStore,i.yt);let u=await i.mc();for(;u;){const l=await c.Fu(u);l&&o._updateProgress(l),u=await i.mc()}const h=await c.complete();return await Be(r,h.Lu,void 0),await function(l,d){const g=I(l);return g.persistence.runTransaction("Save bundle","readwrite",w=>g.Ns.saveBundleMetadata(w,d))}(r.localStore,a),o._completeWith(h.progress),Promise.resolve(h.Bu)}catch(a){return Kt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class xl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ps(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return il(this.persistence,new rl,e.initialUser,this.yt)}yc(e){return new sl(Rr.Bs,this.yt)}gc(e){return new dl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Al extends xl{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Ho(this.Ac.syncEngine),await mn(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return il(this.persistence,new rl,e.initialUser,this.yt)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new rp(s,e.asyncQueue,t)}Ec(e,t){const s=new Gm(t,this.persistence);return new $m(e.asyncQueue,s)}yc(e){const t=ko(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new No(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,fl(),Ps(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new dl}}class py extends Al{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof ai&&(this.sharedClientState.syncEngine={Fr:hy.bind(null,t),$r:fy.bind(null,t),Br:my.bind(null,t),vi:dy.bind(null,t),Mr:uy.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await ly(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=fl();if(!ai.C(t))throw new p(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=ko(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ai(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oy.bind(null,this.syncEngine),await Bi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jp}createDatastore(e){const t=ps(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new xp(r));var r;return function(i,o,a,c){return new Np(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>bc(this.syncEngine,a,0),o=wc.C()?new wc:new Sp,new Mp(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const h=new Xp(s,r,i,o,a,c);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);y("RemoteStore","RemoteStore shutting down."),t._u.add(5),await fn(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yy(n,e,t,s){if(e===!0&&s===!0)throw new p(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sc(n){if(!v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Or(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function k(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Or(n);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _l(n,e){if(e<=0)throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map;class xc{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,yy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Nm;switch(t.type){case"gapi":const s=t.client;return new Om(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Cc.get(e);t&&(y("ComponentProvider","Removing Datastore"),Cc.delete(e),t.terminate())}(this),Promise.resolve()}}function wy(n,e,t,s={}){var r;const i=(n=k(n,ws))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Kt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=oe.MOCK_USER;else{o=fd(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}n._authCredentials=new km(new Ku(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ee(this.firestore,e,this._key)}}class fe{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fe(this.firestore,e,this._query)}}class Re extends fe{constructor(e,t,s){super(e,t,hn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ee(this.firestore,null,new v(e))}withConverter(e){return new Re(this.firestore,e,this._path)}}function tw(n,e,...t){if(n=ae(n),Yo("collection","path",e),n instanceof ws){const s=M.fromString(e,...t);return Dc(s),new Re(n,null,s)}{if(!(n instanceof ee||n instanceof Re))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return Dc(s),new Re(n.firestore,null,s)}}function nw(n,e){if(n=k(n,ws),Yo("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new fe(n,null,function(t){return new Fe(M.emptyPath(),t)}(e))}function vy(n,e,...t){if(n=ae(n),arguments.length===1&&(e=Qu.R()),Yo("doc","path",e),n instanceof ws){const s=M.fromString(e,...t);return Sc(s),new ee(n,null,new v(s))}{if(!(n instanceof ee||n instanceof Re))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return Sc(s),new ee(n.firestore,n instanceof Re?n.converter:null,new v(s))}}function sw(n,e){return n=ae(n),e=ae(e),(n instanceof ee||n instanceof Re)&&(e instanceof ee||e instanceof Re)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Nl(n,e){return n=ae(n),e=ae(e),n instanceof fe&&e instanceof fe&&n.firestore===e.firestore&&ds(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):X("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new se,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(s);return new Qp(JSON.parse(r),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.type="AggregateField"}}class Ey{constructor(e,t){this._data=t,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,s){this.query=e,this.datastore=t,this.userDataWriter=s}run(){return kp(this.datastore,this.query._query).then(e=>{T(e[0]!==void 0);const t=Object.entries(e[0]).filter(([s,r])=>s==="count_alias").map(([s,r])=>this.userDataWriter.convertValue(r))[0];return T(typeof t=="number"),Promise.resolve(new Ey(this.query,{count:t}))})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=I(s),o=Xn(i.yt)+"/documents",a={documents:r.map(l=>Yn(i.yt,l))},c=await i._o("BatchGetDocuments",o,a,r.length),u=new Map;c.forEach(l=>{const d=Ig(i.yt,l);u.set(d.key.toString(),d)});const h=[];return r.forEach(l=>{const d=u.get(l.toString());T(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new dn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new Io(r,this.precondition(r)))}),await async function(t,s){const r=I(t),i=Xn(r.yt)+"/documents",o={writes:s.map(a=>Jn(r.yt,a))};await r.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=D.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new p(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(D.min())?K.exists(!1):K.updateTime(t):K.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(D.min()))throw new p(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return K.updateTime(t)}return K.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.kc=s.maxAttempts,this.xo=new Oo(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new Ty(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Fc(r)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!hs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Ch(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=Qu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=pn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function kl(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ol(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Rl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xo(n);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>vc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vc(e.remoteStore,i)),n.onlineComponents=e}async function Xo(n){return n.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await kl(n,new xl)),n.offlineComponents}async function Fr(n){return n.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Rl(n,new Wo)),n.onlineComponents}function Ml(n){return Xo(n).then(e=>e.persistence)}function Vr(n){return Xo(n).then(e=>e.localStore)}function Jo(n){return Fr(n).then(e=>e.remoteStore)}function Zo(n){return Fr(n).then(e=>e.syncEngine)}function Ol(n){return Fr(n).then(e=>e.datastore)}async function nn(n){const e=await Fr(n),t=e.eventManager;return t.onListen=Jp.bind(null,e.syncEngine),t.onUnlisten=Zp.bind(null,e.syncEngine),t}function Cy(n){return n.asyncQueue.enqueue(async()=>{const e=await Ml(n),t=await Jo(n);return e.setNetworkEnabled(!0),function(s){const r=I(s);return r._u.delete(0),ys(r)}(t)})}function xy(n){return n.asyncQueue.enqueue(async()=>{const e=await Ml(n),t=await Jo(n);return e.setNetworkEnabled(!1),async function(s){const r=I(s);r._u.add(0),await fn(r),r.gu.set("Offline")}(t)})}function Ay(n,e){const t=new se;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=I(a);return u.persistence.runTransaction("read document","readonly",h=>u.localDocuments.getDocument(h,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new p(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=pn(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await Vr(n),e,t)),t.promise}function Ll(n,e,t={}){const s=new se;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Lr({next:l=>{i.enqueueAndForget(()=>qo(r,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new $o(hn(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Bo(r,h)}(await nn(n),n.asyncQueue,e,t,s)),s.promise}function _y(n,e){const t=new se;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await ir(s,r,!0),a=new Tl(r,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=pn(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await Vr(n),e,t)),t.promise}function Fl(n,e,t={}){const s=new se;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Lr({next:l=>{i.enqueueAndForget(()=>qo(r,h)),l.fromCache&&a.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new $o(o,u,{includeMetadataChanges:!0,Nu:!0});return Bo(r,h)}(await nn(n),n.asyncQueue,e,t,s)),s.promise}function Ny(n,e){const t=new Lr(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Ru.add(r),r.next()}(await nn(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Ru.delete(r)}(await nn(n),t))}}function ky(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new Iy(c,u)}(function(c,u){if(c instanceof Uint8Array)return Ac(c,u);if(c instanceof ArrayBuffer)return Ac(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ps(e));n.asyncQueue.enqueueAndForget(async()=>{gy(await Zo(n),r,s)})}function Ry(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=I(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ns.getNamedQuery(i,s))}(await Vr(n),e))}class My{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Oo(this,"async_queue_retry"),this.Wc=()=>{const t=Ps();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new se;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!nt(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw X("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Po.createAndSchedule(this,e,t,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Ui(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Oy{constructor(){this._progressObserver={},this._taskCompletionResolver=new se,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=-1;class U extends ws{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new My,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vl(this),this._firestoreClient.terminate()}}function ow(n,e,t){t||(t="(default)");const s=ji(n,"firestore");if(s.isInitialized(t)){const r=s.getImmediate({identifier:t}),i=s.getOptions(t);if(Fn(i,e))return r;throw new p(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function Ly(n,e){const t=typeof n=="object"?n:pf(),s=typeof n=="string"?n:e||"(default)",r=ji(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=hd("firestore");i&&wy(r,...i)}return r}function ne(n){return n._firestoreClient||Vl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Vl(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new jm(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Dy(n._authCredentials,n._appCheckCredentials,n._queue,s)}function aw(n,e){Bl(n=k(n,U));const t=ne(n),s=n._freezeSettings(),r=new Wo;return Pl(t,r,new Al(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function cw(n){Bl(n=k(n,U));const e=ne(n),t=n._freezeSettings(),s=new Wo;return Pl(e,s,new py(s,t.cacheSizeBytes))}function Pl(n,e,t){const s=new se;return n.asyncQueue.enqueue(async()=>{try{await kl(n,t),await Rl(n,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException!="undefined"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Kt("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function uw(n){if(n._initialized&&!n._terminated)throw new p(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new se;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!xe.C())return Promise.resolve();const s=t+"main";await xe.delete(s)}(ko(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function hw(n){return function(e){const t=new se;return e.asyncQueue.enqueueAndForget(async()=>ry(await Zo(e),t)),t.promise}(ne(n=k(n,U)))}function lw(n){return Cy(ne(n=k(n,U)))}function dw(n){return xy(ne(n=k(n,U)))}function fw(n){return df(n.app,"firestore",n._databaseId.database),n._delete()}function mw(n,e){const t=ne(n=k(n,U)),s=new Oy;return ky(t,n._databaseId,e,s),s}function gw(n,e){return Ry(ne(n=k(n,U)),e).then(t=>t?new fe(n,null,t.query):null)}function Bl(n){if(n._initialized||n._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(re.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function pw(){return new kt("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=/^__.*__$/;class Vy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms):new ln(e,this.data,t,this.fieldTransforms)}}class ql{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ul(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Pr{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Pr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ur(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ul(this.sa)&&Fy.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Py{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||ps(e)}da(e,t,s,r=!1){return new Pr({sa:e,methodName:t,fa:s,path:J.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Mt(n){const e=n._freezeSettings(),t=ps(n._databaseId);return new Py(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Br(n,e,t,s,r,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,r);ra("Data must be an object, but it was:",o,s);const a=jl(s,o);let c,u;if(i.merge)c=new Se(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=$i(e,l,t);if(!o.contains(d))throw new p(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zl(h,d)||h.push(d)}c=new Se(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Vy(new le(a),c,u)}class vs extends Rt{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vs}}function $l(n,e,t){return new Pr({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class ta extends Rt{_toFieldTransform(e){return new fs(e.path,new Wt)}isEqual(e){return e instanceof ta}}class By extends Rt{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=$l(this,e,!0),s=this._a.map(i=>Ot(i,t)),r=new Tt(s);return new fs(e.path,r)}isEqual(e){return this===e}}class qy extends Rt{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=$l(this,e,!0),s=this._a.map(i=>Ot(i,t)),r=new St(s);return new fs(e.path,r)}isEqual(e){return this===e}}class Uy extends Rt{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Yt(e.yt,vh(e.yt,this.wa));return new fs(e.path,t)}isEqual(e){return this===e}}function na(n,e,t,s){const r=n.da(1,e,t);ra("Data must be an object, but it was:",r,s);const i=[],o=le.empty();Nt(s,(c,u)=>{const h=qr(e,c,t);u=ae(u);const l=r.ca(h);if(u instanceof vs)i.push(h);else{const d=Ot(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new Se(i);return new ql(o,a,r.fieldTransforms)}function sa(n,e,t,s,r,i){const o=n.da(1,e,t),a=[$i(e,s,t)],c=[r];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push($i(e,i[d])),c.push(i[d+1]);const u=[],h=le.empty();for(let d=a.length-1;d>=0;--d)if(!zl(u,a[d])){const g=a[d];let w=c[d];w=ae(w);const E=o.ca(g);if(w instanceof vs)u.push(g);else{const C=Ot(w,E);C!=null&&(u.push(g),h.set(g,C))}}const l=new Se(u);return new ql(h,l,o.fieldTransforms)}function Gl(n,e,t,s=!1){return Ot(t,n.da(s?4:3,e))}function Ot(n,e){if(Kl(n=ae(n)))return ra("Unsupported field value:",e,n),jl(n,e);if(n instanceof Rt)return function(t,s){if(!Ul(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=Ot(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=ae(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return vh(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=Q.fromDate(t);return{timestampValue:Xt(s.yt,r)}}if(t instanceof Q){const r=new Q(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xt(s.yt,r)}}if(t instanceof ea)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof At)return{bytesValue:Mh(s.yt,t._byteString)};if(t instanceof ee){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Eo(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Or(t)}`)}(n,e)}function jl(n,e){const t={};return Zu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nt(n,(s,r)=>{const i=Ot(r,e.ra(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Kl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof ea||n instanceof At||n instanceof ee||n instanceof Rt)}function ra(n,e,t){if(!Kl(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Or(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function $i(n,e,t){if((e=ae(e))instanceof kt)return e._internalPath;if(typeof e=="string")return qr(n,e);throw ur("Field path arguments must be of type string or ",n,!1,void 0,t)}const $y=new RegExp("[~\\*/\\[\\]]");function qr(n,e,t){if(e.search($y)>=0)throw ur(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kt(...e.split("."))._internalPath}catch{throw ur(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ur(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new p(m.INVALID_ARGUMENT,a+n+c)}function zl(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ur("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gy extends es{data(){return super.data()}}function Ur(n,e){return typeof e=="string"?qr(n,e):e instanceof kt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ia{}class Is extends ia{}function yw(n,e,...t){let s=[];e instanceof ia&&s.push(e),s=s.concat(t),function(r){const i=r.filter(a=>a instanceof yn).length,o=r.filter(a=>a instanceof Es).length;if(i>1||i>0&&o>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Es extends Is{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Es(e,t,s)}_apply(e){const t=this._parse(e);return Wl(e._query,t),new fe(e.firestore,e.converter,Ni(e._query,t))}_parse(e){const t=Mt(e.firestore);return function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nc(h,u);const d=[];for(const g of h)d.push(_c(a,r,g));l={arrayValue:{values:d}}}else l=_c(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nc(h,u),l=Gl(o,i,h,u==="in"||u==="not-in");return N.create(c,u,l)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ww(n,e,t){const s=e,r=Ur("where",n);return Es._create(r,s,t)}class yn extends ia{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yn(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Wl(i,a),i=Ni(i,a)}(e._query,t),new fe(e.firestore,e.converter,Ni(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vw(...n){return n.forEach(e=>Xl("or",e)),yn._create("or",n)}function Iw(...n){return n.forEach(e=>Xl("and",e)),yn._create("and",n)}class oa extends Is{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oa(e,t)}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new $t(r,i);return function(a,c){if(yo(a)===null){const u=Cr(a);u!==null&&Yl(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new fe(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Fe(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Ew(n,e="asc"){const t=e,s=Ur("orderBy",n);return oa._create(s,t)}class $r extends Is{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new $r(e,t,s)}_apply(e){return new fe(e.firestore,e.converter,tr(e._query,this._limit,this._limitType))}}function bw(n){return _l("limit",n),$r._create("limit",n,"F")}function Tw(n){return _l("limitToLast",n),$r._create("limitToLast",n,"L")}class Gr extends Is{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new Gr(e,t,s)}_apply(e){const t=Hl(e,this.type,this._docOrFields,this._inclusive);return new fe(e.firestore,e.converter,function(s,r){return new Fe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function Sw(...n){return Gr._create("startAt",n,!0)}function Dw(...n){return Gr._create("startAfter",n,!1)}class jr extends Is{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new jr(e,t,s)}_apply(e){const t=Hl(e,this.type,this._docOrFields,this._inclusive);return new fe(e.firestore,e.converter,function(s,r){return new Fe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function Cw(...n){return jr._create("endBefore",n,!1)}function xw(...n){return jr._create("endAt",n,!0)}function Hl(n,e,t,s){if(t[0]=ae(t[0]),t[0]instanceof es)return function(r,i,o,a,c){if(!a)throw new p(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const h of pt(r))if(h.field.isKeyField())u.push(Et(i,a.key));else{const l=a.data.field(h.field);if(po(l))throw new p(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new p(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(l)}return new Xe(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=Mt(n.firestore);return function(i,o,a,c,u,h){const l=i.explicitOrderBy;if(u.length>l.length)throw new p(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<u.length;g++){const w=u[g];if(l[g].field.isKeyField()){if(typeof w!="string")throw new p(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!wo(i)&&w.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const E=i.path.child(M.fromString(w));if(!v.isDocumentKey(E))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const C=new v(E);d.push(Et(o,C))}else{const E=Gl(a,c,w);d.push(E)}}return new Xe(d,h)}(n._query,n.firestore._databaseId,r,e,t,s)}}function _c(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wo(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(M.fromString(t));if(!v.isDocumentKey(s))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Et(n,new v(s))}if(t instanceof ee)return Et(n,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Or(t)}.`)}function Nc(n,e){if(!Array.isArray(n)||n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new p(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wl(n,e){if(e.isInequality()){const s=Cr(n),r=e.field;if(s!==null&&!s.isEqual(r))throw new p(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=yo(n);i!==null&&Yl(n,r,i)}const t=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Yl(n,e,t){if(!t.isEqual(e))throw new p(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}function Xl(n,e){if(!(e instanceof Es||e instanceof yn))throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Jl{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const s={};return Nt(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new ea(H(e.latitude),H(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=th(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const t=We(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=M.fromString(e);T($h(s));const r=new wt(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||X(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class jy extends Jl{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends es{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ur("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Bs extends sn{data(e={}){return super.data(e)}}class rn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mt(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Bs(this._firestore,this._userDataWriter,s.key,s,new mt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Bs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Ky(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ky(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function Aw(n,e){return n instanceof sn&&e instanceof sn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof rn&&e instanceof rn&&n._firestore===e._firestore&&Nl(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n){n=k(n,ee);const e=k(n.firestore,U);return Ll(ne(e),n._key).then(t=>aa(e,n,t))}class rt extends Jl{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,t)}}function Nw(n){n=k(n,ee);const e=k(n.firestore,U),t=ne(e),s=new rt(e);return Ay(t,n._key).then(r=>new sn(e,s,n._key,r,new mt(r!==null&&r.hasLocalMutations,!0),n.converter))}function kw(n){n=k(n,ee);const e=k(n.firestore,U);return Ll(ne(e),n._key,{source:"server"}).then(t=>aa(e,n,t))}function Rw(n){n=k(n,fe);const e=k(n.firestore,U),t=ne(e),s=new rt(e);return Ql(n._query),Fl(t,n._query).then(r=>new rn(e,s,n,r))}function Mw(n){n=k(n,fe);const e=k(n.firestore,U),t=ne(e),s=new rt(e);return _y(t,n._query).then(r=>new rn(e,s,n,r))}function Ow(n){n=k(n,fe);const e=k(n.firestore,U),t=ne(e),s=new rt(e);return Fl(t,n._query,{source:"server"}).then(r=>new rn(e,s,n,r))}function Lw(n,e,t){n=k(n,ee);const s=k(n.firestore,U),r=Kr(n.converter,e,t);return bs(s,[Br(Mt(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,K.none())])}function Fw(n,e,t,...s){n=k(n,ee);const r=k(n.firestore,U),i=Mt(r);let o;return o=typeof(e=ae(e))=="string"||e instanceof kt?sa(i,"updateDoc",n._key,e,t,s):na(i,"updateDoc",n._key,e),bs(r,[o.toMutation(n._key,K.exists(!0))])}function Vw(n){return bs(k(n.firestore,U),[new dn(n._key,K.none())])}function Pw(n,e){const t=k(n.firestore,U),s=vy(n),r=Kr(n.converter,e);return bs(t,[Br(Mt(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,K.exists(!1))]).then(()=>s)}function Bw(n,...e){var t,s,r;n=ae(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ui(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ui(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),e[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(n instanceof ee)u=k(n.firestore,U),h=hn(n._key.path),c={next:l=>{e[o]&&e[o](aa(u,n,l))},error:e[o+1],complete:e[o+2]};else{const l=k(n,fe);u=k(l.firestore,U),h=l._query;const d=new rt(u);c={next:g=>{e[o]&&e[o](new rn(u,d,l,g))},error:e[o+1],complete:e[o+2]},Ql(n._query)}return function(l,d,g,w){const E=new Lr(w),C=new $o(d,E,g);return l.asyncQueue.enqueueAndForget(async()=>Bo(await nn(l),C)),()=>{E.bc(),l.asyncQueue.enqueueAndForget(async()=>qo(await nn(l),C))}}(ne(u),h,a,c)}function qw(n,e){return Ny(ne(n=k(n,U)),Ui(e)?e:{next:e})}function bs(n,e){return function(t,s){const r=new se;return t.asyncQueue.enqueueAndForget(async()=>ey(await Zo(t),s,r)),r.promise}(ne(n),e)}function aa(n,e,t){const s=t.docs.get(e._key),r=new rt(n);return new sn(n,r,e._key,s,new mt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n,e){return Nl(n.query,e.query)&&Fn(n.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n){const e=k(n.firestore,U);return function(t,s,r){const i=new se;return t.asyncQueue.enqueueAndForget(async()=>{try{if(Pe(await Jo(t))){const o=await Ol(t),a=new by(s,o,r).run();i.resolve(a)}else i.reject(new p(m.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(o){i.reject(o)}}),i.promise}(ne(e),n,new rt(e))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mt(e)}set(e,t,s){this._verifyNotCommitted();const r=Ge(e,this._firestore),i=Kr(r.converter,t,s),o=Br(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,K.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=Ge(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof kt?sa(this._dataReader,"WriteBatch.update",i._key,t,s,r):na(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,K.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ge(e,this._firestore);return this._mutations=this._mutations.concat(new dn(t._key,K.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ge(n,e){if((n=ae(n)).firestore!==e)throw new p(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Mt(e)}get(e){const t=Ge(e,this._firestore),s=new jy(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return b();const i=r[0];if(i.isFoundDocument())return new es(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new es(this._firestore,s,t._key,null,t.converter);throw b()})}set(e,t,s){const r=Ge(e,this._firestore),i=Kr(r.converter,t,s),o=Br(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=Ge(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof kt?sa(this._dataReader,"Transaction.update",i._key,t,s,r):na(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ge(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ge(e,this._firestore),s=new rt(this._firestore);return super.get(e).then(r=>new sn(this._firestore,s,t._key,r._document,new mt(!1,!1),t.converter))}}function Gw(n,e,t){n=k(n,U);const s=Object.assign(Object.assign({},zy),t);return function(r){if(r.maxAttempts<1)throw new p(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new se;return r.asyncQueue.enqueueAndForget(async()=>{const c=await Ol(r);new Sy(r.asyncQueue,c,o,i,a).run()}),a.promise}(ne(n),r=>e(new Hy(n,r)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return new vs("deleteField")}function Kw(){return new ta("serverTimestamp")}function zw(...n){return new By("arrayUnion",n)}function Qw(...n){return new qy("arrayRemove",n)}function Hw(n){return new Uy("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n){return ne(n=k(n,U)),new Qy(n,e=>bs(n,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(n,e){var t;const s=ne(n=k(n,U));if(!(!((t=s.offlineComponents)===null||t===void 0)&&t.indexBackfillerScheduler))return Kt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(c){try{return JSON.parse(c)}catch(u){throw new p(m.INVALID_ARGUMENT,"Failed to parse JSON: "+(u==null?void 0:u.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const u=kc(c,"collectionGroup"),h=[];if(Array.isArray(c.fields))for(const l of c.fields){const d=qr("setIndexConfiguration",kc(l,"fieldPath"));l.arrayConfig==="CONTAINS"?h.push(new Rs(d,2)):l.order==="ASCENDING"?h.push(new Rs(d,0)):l.order==="DESCENDING"&&h.push(new Rs(d,1))}a.push(new Js(Js.UNKNOWN_ID,u,h,Kn.empty()))}return a}(e);return Vr(s).then(i=>async function(o,a){const c=I(o),u=c.indexManager,h=[];return c.persistence.runTransaction("Configure indexes","readwrite",l=>u.getFieldIndexes(l).next(d=>function(g,w,E,C,V){g=[...g],w=[...w],g.sort(E),w.sort(E);const $=g.length,P=w.length;let z=0,B=0;for(;z<P&&B<$;){const G=E(g[B],w[z]);G<0?V(g[B++]):G>0?C(w[z++]):(z++,B++)}for(;z<P;)C(w[z++]);for(;B<$;)V(g[B++])}(d,a,Pm,g=>{h.push(u.addFieldIndex(l,g))},g=>{h.push(u.deleteFieldIndex(l,g))})).next(()=>f.waitFor(h)))}(i,r))}function kc(n,e){if(typeof n[e]!="string")throw new p(m.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(n,e=!0){(function(t){un=t})(gf),Gs(new Vn("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new U(new Rm(t.getProvider("auth-internal")),new Lm(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ut(_a,"3.8.0",n),Ut(_a,"3.8.0","esm2017")})();const Wy={apiKey:"AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",authDomain:"firumon-9abec.firebaseapp.com",projectId:"firumon-9abec",storageBucket:"firumon-9abec.appspot.com",messagingSenderId:"985218982992",appId:"1:985218982992:web:5c9162029480c63f04dd55"},Yy=qc(Wy),Xw=Ly(Yy);export{Jl as AbstractUserDataWriter,rw as AggregateField,Ey as AggregateQuerySnapshot,At as Bytes,iw as CACHE_SIZE_UNLIMITED,Re as CollectionReference,ee as DocumentReference,sn as DocumentSnapshot,kt as FieldPath,Rt as FieldValue,U as Firestore,p as FirestoreError,ea as GeoPoint,Oy as LoadBundleTask,fe as Query,yn as QueryCompositeFilterConstraint,Is as QueryConstraint,Bs as QueryDocumentSnapshot,jr as QueryEndAtConstraint,Es as QueryFieldFilterConstraint,$r as QueryLimitConstraint,oa as QueryOrderByConstraint,rn as QuerySnapshot,Gr as QueryStartAtConstraint,mt as SnapshotMetadata,Q as Timestamp,Hy as Transaction,Qy as WriteBatch,wt as _DatabaseId,v as _DocumentKey,Zy as _EmptyAppCheckTokenProvider,Nm as _EmptyAuthCredentialsProvider,J as _FieldPath,k as _cast,Jy as _debugAssert,ew as _isBase64Available,Kt as _logWarn,yy as _validateIsNotUsedTogether,Pw as addDoc,Uw as aggregateQuerySnapshotEqual,Iw as and,Yy as app,Qw as arrayRemove,zw as arrayUnion,uw as clearIndexedDbPersistence,tw as collection,nw as collectionGroup,wy as connectFirestoreEmulator,Xw as db,Vw as deleteDoc,jw as deleteField,dw as disableNetwork,vy as doc,pw as documentId,aw as enableIndexedDbPersistence,cw as enableMultiTabIndexedDbPersistence,lw as enableNetwork,xw as endAt,Cw as endBefore,ne as ensureFirestoreConfigured,bs as executeWrite,$w as getCountFromServer,_w as getDoc,Nw as getDocFromCache,kw as getDocFromServer,Rw as getDocs,Mw as getDocsFromCache,Ow as getDocsFromServer,Ly as getFirestore,Hw as increment,ow as initializeFirestore,bw as limit,Tw as limitToLast,mw as loadBundle,gw as namedQuery,Bw as onSnapshot,qw as onSnapshotsInSync,vw as or,Ew as orderBy,yw as query,Nl as queryEqual,sw as refEqual,Gw as runTransaction,Kw as serverTimestamp,Lw as setDoc,Yw as setIndexConfiguration,Xy as setLogLevel,Aw as snapshotEqual,Dw as startAfter,Sw as startAt,fw as terminate,Fw as updateDoc,hw as waitForPendingWrites,ww as where,Ww as writeBatch};
