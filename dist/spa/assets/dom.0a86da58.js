import{z as o,A as i,B as c}from"./index.2feea5d2.js";const f=n=>o(i(n)),u=n=>o(n);function d(n,t){return n!==void 0&&n()||t}function s(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function v(n,t){return n!==void 0?t.concat(n()):t}function m(n,t){return n===void 0?t:t!==void 0?t.concat(n()):n()}function p(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function g(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=c(n);if(t)return t.$el||t}export{s as a,p as b,f as c,v as d,m as e,u as f,g,d as h};