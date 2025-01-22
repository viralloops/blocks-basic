/*! grapesjs-blocks-basic - 1.0.11 */
!function(t,n){'object'==typeof exports&&'object'==typeof module?module.exports=n():'function'==typeof define&&define.amd?define([],n):'object'==typeof exports?exports["gjs-blocks-basic"]=n():t["gjs-blocks-basic"]=n()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var t={d:(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})}},n={};t.r(n),t.d(n,{default:()=>o});var e=void 0&&(void 0).__assign||function(){return e=Object.assign||function(t){for(var n,e=1,a=arguments.length;e<a;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},e.apply(this,arguments)};var a=void 0&&(void 0).__assign||function(){return a=Object.assign||function(t){for(var n,e=1,a=arguments.length;e<a;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},a.apply(this,arguments)};const o=function(t,n){void 0===n&&(n={}),function(t,n){var a=t.BlockManager,o=n.category,l=n.blocks,i=n.stylePrefix,c=n.flexGrid,d=n.rowHeight,r=n.addBasicStyle,s="".concat(i,"row"),C="".concat(i,"cell"),g=c?"\n    .".concat(s," {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .").concat(s," {\n        flex-wrap: wrap;\n      }\n    }"):"\n    .".concat(s," {\n      display: table;\n      padding: 10px;\n      width: 100%;\n    }\n    @media (max-width: 768px) {\n      .").concat(i,"cell, .").concat(i,"cell30, .").concat(i,"cell70 {\n        width: 100%;\n        display: block;\n      }\n    }"),h=c?"\n    .".concat(C," {\n      min-height: ").concat(d,"px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }"):"\n    .".concat(C," {\n      width: 8%;\n      display: table-cell;\n      height: ").concat(d,"px;\n    }"),w="\n  .".concat(i,"cell30 {\n    width: 30%;\n  }"),v="\n  .".concat(i,"cell70 {\n    width: 70%;\n  }"),p=1,x={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:p},m=e(e({},x),{cr:1,bc:0,currentUnit:1,minDim:p,step:.2});c&&(m.keyWidth='flex-basis');var y={class:s,'data-gjs-droppable':".".concat(C),'data-gjs-resizable':x,'data-gjs-name':'Row'},b={class:C,'data-gjs-draggable':".".concat(s),'data-gjs-resizable':m,'data-gjs-name':'Cell'};c&&(b['data-gjs-unstylable']=['width'],b['data-gjs-stylable-require']=['flex-basis']);var f=[".".concat(s),".".concat(C)];t.on('selector:add',(function(t){return f.indexOf(t.getFullName())>=0&&t.set('private',1)}));var u=function(t){var n=[];for(var e in t){var a=t[e];a=a instanceof Array||a instanceof Object?JSON.stringify(a):a,n.push("".concat(e,"=").concat("'".concat(a,"'")))}return n.length?" ".concat(n.join(' ')):''},D=function(t){return l.indexOf(t)>=0},L=u(y),V=u(b),k={category:o,select:!0};D('column1')&&a.add('column1',e(e({},k),{label:n.labelColumn1,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"0.5\" width=\"59\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n</svg>\n",content:"<div ".concat(L,">\n        <div ").concat(V,"></div>\n      </div>\n      ").concat(r?"<style>\n          ".concat(g,"\n          ").concat(h,"\n        </style>"):'')})),D('column2')&&a.add('column2',e(e({},k),{label:n.labelColumn2,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"0.5\" width=\"27\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n<rect x=\"33\" y=\"0.5\" width=\"27\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n</svg>\n",content:"<div ".concat(L,">\n        <div ").concat(V,"></div>\n        <div ").concat(V,"></div>\n      </div>\n      ").concat(r?"<style>\n          ".concat(g,"\n          ").concat(h,"\n        </style>"):'')})),D('column3')&&a.add('column3',e(e({},k),{label:n.labelColumn3,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"0.500122\" width=\"16.3333\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n<rect x=\"22.3333\" y=\"0.500122\" width=\"16.3333\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n<rect x=\"43.6667\" y=\"0.500122\" width=\"16.3333\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n</svg>\n",content:"<div ".concat(L,">\n        <div ").concat(V,"></div>\n        <div ").concat(V,"></div>\n        <div ").concat(V,"></div>\n      </div>\n      ").concat(r?"<style>\n          ".concat(g,"\n          ").concat(h,"\n        </style>"):'')})),D('column3-7')&&a.add('column3-7',e(e({},k),{label:n.labelColumn37,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"0.500122\" width=\"16\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n<rect x=\"22\" y=\"0.500122\" width=\"38\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n</svg>\n",content:"<div ".concat(L,">\n        <div ").concat(V," style='").concat(c?'flex-basis':'width',": 30%;'></div>\n        <div ").concat(V," style='").concat(c?'flex-basis':'width',": 70%;'></div>\n      </div>\n      ").concat(r?"<style>\n          ".concat(g,"\n          ").concat(h,"\n          ").concat(w,"\n          ").concat(v,"\n        </style>"):'')})),D('text')&&a.add('text',e(e({},k),{activate:!0,label:n.labelText,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"0.5\" width=\"59\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\" stroke-dasharray=\"2 2\"/>\n<path d=\"M33.9286 14.0714V15.3571C33.9286 15.4424 33.8947 15.5241 33.8344 15.5844C33.7741 15.6447 33.6924 15.6786 33.6071 15.6786H18.8214C18.7362 15.6786 18.6544 15.6447 18.5941 15.5844C18.5339 15.5241 18.5 15.4424 18.5 15.3571V14.0714C18.5 13.9862 18.5339 13.9044 18.5941 13.8441C18.6544 13.7839 18.7362 13.75 18.8214 13.75H33.6071C33.6924 13.75 33.7741 13.7839 33.8344 13.8441C33.8947 13.9044 33.9286 13.9862 33.9286 14.0714ZM18.8214 22.5357H42.1786C42.2638 22.5357 42.3456 22.5019 42.4059 22.4416C42.4661 22.3813 42.5 22.2995 42.5 22.2143V20.9286C42.5 20.8433 42.4661 20.7616 42.4059 20.7013C42.3456 20.641 42.2638 20.6071 42.1786 20.6071H18.8214C18.7362 20.6071 18.6544 20.641 18.5941 20.7013C18.5339 20.7616 18.5 20.8433 18.5 20.9286V22.2143C18.5 22.2995 18.5339 22.3813 18.5941 22.4416C18.6544 22.5019 18.7362 22.5357 18.8214 22.5357ZM18.8214 36.25H42.1786C42.2638 36.25 42.3456 36.2161 42.4059 36.1559C42.4661 36.0956 42.5 36.0138 42.5 35.9286V34.6429C42.5 34.5576 42.4661 34.4759 42.4059 34.4156C42.3456 34.3553 42.2638 34.3214 42.1786 34.3214H18.8214C18.7362 34.3214 18.6544 34.3553 18.5941 34.4156C18.5339 34.4759 18.5 34.5576 18.5 34.6429V35.9286C18.5 36.0138 18.5339 36.0956 18.5941 36.1559C18.6544 36.2161 18.7362 36.25 18.8214 36.25ZM33.6071 27.4643H18.8214C18.7362 27.4643 18.6544 27.4981 18.5941 27.5584C18.5339 27.6187 18.5 27.7005 18.5 27.7857V29.0714C18.5 29.1567 18.5339 29.2384 18.5941 29.2987C18.6544 29.359 18.7362 29.3929 18.8214 29.3929H33.6071C33.6924 29.3929 33.7741 29.359 33.8344 29.2987C33.8947 29.2384 33.9286 29.1567 33.9286 29.0714V27.7857C33.9286 27.7005 33.8947 27.6187 33.8344 27.5584C33.7741 27.4981 33.6924 27.4643 33.6071 27.4643Z\" fill=\"#D9D9D9\"/>\n</svg>\n",content:{type:'text',content:'Insert your text here',style:{padding:'10px'}}})),D('link')&&a.add('link',e(e({},k),{label:n.labelLink,media:"<svg width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M27.3217 32.6689L22.3718 37.6183C19.1981 40.7932 14.057 40.7948 10.8818 37.6183C7.70685 34.4447 7.70529 29.3035 10.8818 26.1283L15.8311 21.1783C15.9034 21.1061 15.977 21.0352 16.0519 20.9656C16.5238 20.5278 17.2891 20.8404 17.3149 21.4835C17.327 21.7839 17.3523 22.0839 17.3909 22.3825C17.421 22.6148 17.3443 22.8479 17.1786 23.0135C16.1486 24.0428 12.4822 27.709 12.4723 27.7189C10.1762 30.0163 10.1767 33.7306 12.4723 36.0276C14.7698 38.3237 18.4841 38.3233 20.7811 36.0276L25.7311 31.0776L25.7536 31.0551C28.0224 28.7631 28.0123 25.0507 25.7304 22.7689C25.2171 22.2555 24.6319 21.8576 24.0064 21.5746C23.721 21.4454 23.5423 21.1579 23.5605 20.8452C23.5793 20.5212 23.6387 20.2008 23.7371 19.8915C23.8686 19.4789 24.3328 19.2689 24.7321 19.4365C25.6741 19.8318 26.5562 20.4128 27.3217 21.1783C30.4897 24.3463 30.4892 29.5014 27.3217 32.6689ZM21.6783 26.8218C22.4438 27.5873 23.3259 28.1683 24.2679 28.5635C24.6672 28.731 25.1314 28.521 25.2629 28.1085C25.3613 27.7993 25.4207 27.4789 25.4395 27.1549C25.4577 26.8422 25.2789 26.5546 24.9936 26.4255C24.3681 26.1425 23.7829 25.7446 23.2696 25.2312C20.9877 22.9493 20.9776 19.2369 23.2464 16.945L23.2689 16.9225L28.2189 11.9725C30.5159 9.67678 34.2302 9.67635 36.5277 11.9725C38.8233 14.2695 38.8238 17.9838 36.5277 20.2812C36.5178 20.291 32.8515 23.9572 31.8214 24.9866C31.6557 25.1522 31.579 25.3852 31.6091 25.6176C31.6477 25.9159 31.673 26.2159 31.6851 26.5165C31.7109 27.1597 32.4763 27.4722 32.9481 27.0344C33.023 26.9649 33.0966 26.894 33.1689 26.8217L38.1182 21.8717C41.2947 18.6966 41.2931 13.5554 38.1182 10.3818C34.9431 7.20529 29.8019 7.20685 26.6282 10.3818L21.6783 15.3311C18.5108 18.4988 18.5103 23.6538 21.6783 26.8218Z\" fill=\"#D9D9D9\"/>\n</svg>\n",content:{type:'link',content:'Link',style:{color:'#d983a6'}}})),D('image')&&a.add('image',e(e({},k),{activate:!0,label:n.labelImage,media:"<svg width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M37.5 12H11.5C9.84312 12 8.5 13.3431 8.5 15V33C8.5 34.6569 9.84312 36 11.5 36H37.5C39.1569 36 40.5 34.6569 40.5 33V15C40.5 13.3431 39.1569 12 37.5 12ZM38.5 33C38.5 33.5514 38.0514 34 37.5 34H11.5C10.9486 34 10.5 33.5514 10.5 33V15C10.5 14.4486 10.9486 14 11.5 14H37.5C38.0514 14 38.5 14.4486 38.5 15V33ZM15.5 22.5C17.433 22.5 19 20.933 19 19C19 17.067 17.433 15.5 15.5 15.5C13.567 15.5 12 17.067 12 19C12 20.933 13.567 22.5 15.5 22.5ZM15.5 17.5C16.3271 17.5 17 18.1729 17 19C17 19.8271 16.3271 20.5 15.5 20.5C14.6729 20.5 14 19.8271 14 19C14 18.1729 14.6729 17.5 15.5 17.5ZM28.4393 18.9393L22.5 24.8787L20.5607 22.9394C19.9749 22.3536 19.0251 22.3536 18.4394 22.9394L12.9394 28.4394C12.8001 28.5787 12.6896 28.744 12.6142 28.926C12.5388 29.108 12.5 29.303 12.5 29.5V31.25C12.5 31.6642 12.8358 32 13.25 32H35.75C36.1642 32 36.5 31.6642 36.5 31.25V25.5C36.5 25.1022 36.3419 24.7206 36.0607 24.4393L30.5607 18.9393C29.9749 18.3536 29.0251 18.3536 28.4393 18.9393ZM34.5 30H14.5V29.7071L19.5 24.7071L22.5 27.7071L29.5 20.7071L34.5 25.7071V30Z\" fill=\"#D9D9D9\"/>\n</svg>\n",content:{style:{color:'black'},type:'image'}})),D('video')&&a.add('video',e(e({},k),{label:n.labelVideo,media:"<svg width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M38.7219 15.1096C38.3774 15.1096 38.0273 15.2096 37.7106 15.4263L31.6151 19.3104V15.9876C31.6151 14.5206 30.326 13.3315 28.7368 13.3315H11.3783C9.78911 13.3315 8.5 14.5206 8.5 15.9876V32.0125C8.5 33.4795 9.78911 34.6686 11.3783 34.6686H28.7368C30.326 34.6686 31.6151 33.4795 31.6151 32.0125V28.6898L37.705 32.5738C38.0218 32.796 38.3774 32.8905 38.7163 32.8905C39.6387 32.8905 40.5 32.1681 40.5 31.1402V16.8599C40.5055 15.832 39.6443 15.1096 38.7219 15.1096ZM29.837 32.0125C29.837 32.4904 29.3314 32.8905 28.7368 32.8905H11.3783C10.7837 32.8905 10.2781 32.4904 10.2781 32.0125V15.9876C10.2781 15.5097 10.7837 15.1096 11.3783 15.1096H28.7368C29.3314 15.1096 29.837 15.5097 29.837 15.9876V32.0125ZM38.7274 31.1402L38.6608 31.0679L31.6151 26.5783V21.4163L38.7274 16.8877V31.1402Z\" fill=\"#D9D9D9\"/>\n</svg>",content:{type:'video',src:'img/video2.webm',style:{height:'350px',width:'615px'}}})),D('map')&&a.add('map',e(e({},k),{label:n.labelMap,media:"<svg width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M39.6122 11.5555C39.5033 11.5555 39.3911 11.5761 39.2811 11.62L29.8339 15.1111H29.8333L20.2778 11.7378C19.9151 11.6172 19.5355 11.5557 19.1533 11.5555C18.7817 11.5555 18.4106 11.6139 18.0528 11.73L9.61778 14.6639C9.28788 14.7958 9.00507 15.0236 8.80584 15.3178C8.6066 15.612 8.50008 15.9591 8.5 16.3144V35.5544C8.5 36.065 8.91833 36.4444 9.38833 36.4444C9.49722 36.4444 9.60889 36.4239 9.71944 36.38L19.1667 32.8889L28.7222 36.2617C29.4439 36.5025 30.2238 36.5054 30.9472 36.27L39.3822 33.3361C39.7122 33.2042 39.995 32.9765 40.1943 32.6823C40.3935 32.388 40.5 32.0409 40.5 31.6855V12.4455C40.5 11.935 40.0817 11.5555 39.6122 11.5555ZM10.2017 16.3433L18.2778 13.5339V31.3222L10.2728 34.2805L10.2017 16.3433ZM20.0556 31.3172V13.5444L28.9444 16.6822V34.455L20.0556 31.3172ZM30.7222 34.4661V16.6778L38.7272 13.7189L38.7983 31.6561L30.7222 34.4661Z\" fill=\"#D9D9D9\"/>\n</svg>\n\n",content:{type:'map',style:{height:'350px'}}})),D('separator')&&a.add('Separator',e(e({},k),{label:n.labelMap,media:"<svg width=\"61\" height=\"50\" viewBox=\"0 0 61 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"transform: rotate(90deg);\">\n<rect x=\"1\" y=\"0.500122\" width=\"16\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n<rect x=\"22\" y=\"0.500122\" width=\"38\" height=\"49.0001\" rx=\"4.5\" stroke=\"#D9D9D9\"/>\n</svg>\n\n",content:{type:'div',style:{marginTop:'90px',marginBottom:'90px'},attributes:{class:'separator'}}}))}(t,a({blocks:['column1','column2','column3','column3-7','text','link','image','video','map'],flexGrid:!1,stylePrefix:'gjs-',addBasicStyle:!0,category:'Basic',labelColumn1:'1 Column',labelColumn2:'2 Columns',labelColumn3:'3 Columns',labelColumn37:'2 Columns 3/7',labelText:'Text',labelLink:'Link',labelImage:'Image',labelVideo:'Video',labelMap:'Map',rowHeight:75},n))};return n})()));
//# sourceMappingURL=index.js.map