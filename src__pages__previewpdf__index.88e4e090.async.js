"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[266],{26909:function(F,d,e){e.r(d),e.d(d,{default:function(){return A}});var y=e(5574),f=e.n(y),s=e(30301),c=e(67294),I=e(27589),v=e(82188),j=e(75672),l={iframeBox:"iframeBox___kvKte",iframe:"iframe___KxcQo",pdfview:"pdfview___Kvk4h",btnBox:"btnBox___Kooak",pagenum:"pagenum___OCWZf"},p=e(74877),B=e(40640),t=e(85893),C=10;function A(K){var u=(0,p.O)("code"),m="",g=localStorage.getItem("name");g&&(0,p.v)(g)||v.m8.push("/login?backUrl="+encodeURIComponent("/previewpdf?code="+u));function h(o,a){(o||[]).forEach(function(n){if(n.children)h(n.children,a);else if(n.code==a){m=n.filename;return}})}u?h(B.Z,u):m=localStorage.getItem("filename")||"12.pdf";var w="/"+m;s.v0.GlobalWorkerOptions.workerSrc="/pdf.worker.js";var N=(0,c.useState)(10),x=f()(N,2),i=x[0],T=x[1],D=(0,c.useState)(0),S=f()(D,2),r=S[0],E=S[1];(0,c.useEffect)(function(){return document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1,maximum-scale=3, minimum-scale=1, user-scalable=yes"),function(){document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")}},[]);var L=function(a){var n=a.numPages;E(n)},O=function(a){var n=i+C;n>r&&(n=r),T(n)};function P(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.BB,{className:l.pdfview,loading:"\u52A0\u8F7D\u4E2D...",onLoadSuccess:L,file:w,children:r>20?Array.from(new Array(i),function(o,a){return(0,t.jsx)(s.T3,{renderTextLayer:!1,pageNumber:a+1},"page_".concat(a+1))}):Array.from(new Array(r),function(o,a){return(0,t.jsx)(s.T3,{renderTextLayer:!1,pageNumber:a+1},"page_".concat(a+1))})})})}return(0,t.jsxs)("div",{className:l.iframeBox,children:[P(),r>20?(0,t.jsxs)("div",{className:l.btnBox,children:[(0,t.jsxs)("span",{className:l.pagenum,children:["\u5F53\u524D\u7B2C",i,"\u9875/\u5171",r,"\u9875"]}),i==r||r<2?null:(0,t.jsx)(j.zx,{color:"primary",fill:"solid",onClick:O,children:"\u4E0B\u4E00\u9875"})]}):null]})}}}]);
