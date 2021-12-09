(this["webpackJsonpcapital-test-task"]=this["webpackJsonpcapital-test-task"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),i=a.n(s),l=(a(9),a(10),a.p+"static/media/logo.91395cfa.svg"),r=(a(11),a(0)),o=function(){return Object(r.jsx)("div",{className:"Header",children:Object(r.jsx)("a",{href:"/test-capital-task/",className:"Header__link",children:Object(r.jsx)("img",{src:l,alt:"Test Capital logo"})})})},m=(a(13),"Token"),j="Create your own crypto token",d=[{name:"Ethereum",id:1},{name:"Binance Smart Chain",id:2}],u=[{name:"Terms",href:"/test-capital-task/",id:1},{name:"Privacy",href:"/test-capital-task/",id:2},{name:"Faq",href:"/test-capital-task/",id:3}],b=function(){return Object(r.jsxs)("div",{className:"Footer",children:[Object(r.jsx)("div",{className:"Footer__text",children:"\xa9 2021 All rights reserved."}),Object(r.jsx)("div",{className:"Footer__links",children:u.map((function(e){return Object(r.jsx)("a",{href:e.href,className:"links__item",children:e.name},e.id)}))}),Object(r.jsx)("div",{className:"Footer__text",children:"Contact us: ask@test.capital"})]})},p=a(2),_=(a(14),a(15),function(e){var t=e.company,a=e.tokenName,c=e.symbol,n=e.maxSupply,s=e.selectedBlockchain;return Object(r.jsxs)("div",{className:"TokenFormSubmitted",children:[Object(r.jsxs)("div",{className:"TokenFormSubmitted__item",children:["Company:\xa0",t]}),Object(r.jsxs)("div",{className:"TokenFormSubmitted__item",children:["Token name:\xa0",a]}),Object(r.jsxs)("div",{className:"TokenFormSubmitted__item",children:["Symbol:\xa0",c]}),Object(r.jsxs)("div",{className:"TokenFormSubmitted__item",children:["Maximum token supply:\xa0",n]}),Object(r.jsxs)("div",{className:"TokenFormSubmitted__item",children:["Selected blockchain:\xa0",s]})]})}),h=(a(16),function(e){var t=e.title,a=e.id,c=e.type,n=e.pattern,s=e.setValue,i=e.value,l=function(e){s(e.target.value)},o=function(e){var t=e.target.value.toUpperCase();s(t)},m=function(e){var t=e.target.value;s(t.replace(/\W/gi,"").replace(/(.{3})/g,"$1 "))};return Object(r.jsxs)("label",{className:"TokenFormInput",htmlFor:a,children:[Object(r.jsx)("span",{className:"TokenFormInput__name",children:t}),Object(r.jsx)("input",{type:c,className:"TokenFormInput__input",id:a,value:i,placeholder:t,pattern:n,onChange:function(){switch(t){case"Symbol":return o;case"Maximum token supply":return m;default:return l}}(),required:!0})]})}),x=(a(17),function(e){var t=e.setSelectedBlockchain,a=function(e){t(e.target.value)};return Object(r.jsx)("div",{className:"TokenFormRadio",children:Object(r.jsxs)("div",{className:"TokenFormRadio__item",children:[Object(r.jsx)("span",{className:"TokenFormRadio__name",children:"Blockchain"}),Object(r.jsx)("div",{className:"TokenFormRadio__container",children:d.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"radio",name:"radioButton",className:"TokenFormRadio__input",value:e.name,id:e.name,onChange:a,required:!0},e.id),Object(r.jsx)("label",{htmlFor:e.name,className:"TokenFormRadio__label",children:e.name})]})}))})]})})}),O=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(""),u=Object(p.a)(d,2),b=u[0],O=u[1],k=Object(c.useState)(""),f=Object(p.a)(k,2),v=f[0],N=f[1],y=Object(c.useState)(""),F=Object(p.a)(y,2),S=F[0],T=F[1],g=Object(c.useState)(!1),I=Object(p.a)(g,2),C=I[0],B=I[1];return Object(r.jsx)("div",{className:"container",children:C?Object(r.jsx)(_,{company:l,tokenName:b,symbol:v,maxSupply:S,selectedBlockchain:a}):Object(r.jsxs)("div",{className:"TokenForm",children:[Object(r.jsx)("h1",{className:"TokenForm__title",children:m}),Object(r.jsx)("h2",{className:"TokenForm__subtitle",children:j}),Object(r.jsx)("form",{action:"#",method:"GET",onSubmit:function(){return B(!0)},children:Object(r.jsxs)("div",{className:"TokenForm__form form",children:[Object(r.jsxs)("label",{className:"form__item",htmlFor:"companyId",children:[Object(r.jsx)("span",{className:"form__item__name",children:"Company"}),Object(r.jsxs)("select",{className:"form__item__select",name:"company",id:"companyId",onChange:function(e){o(e.target.value)},required:!0,children:[Object(r.jsx)("option",{value:"",children:"Select company"}),Object(r.jsx)("option",{value:"My company",children:"My company"}),Object(r.jsx)("option",{value:"Our company",children:"Our company"})]})]}),Object(r.jsx)(h,{title:"Token name",id:"tokenNameId",type:"text",setValue:O,value:b}),Object(r.jsx)(h,{title:"Symbol",id:"symbolId",type:"text",setValue:N,value:v}),Object(r.jsx)(h,{title:"Maximum token supply",id:"maxSupplyId",type:"text",pattern:"[0-9 ]+",setValue:T,value:S}),Object(r.jsx)(x,{setSelectedBlockchain:n}),Object(r.jsxs)("div",{className:"form__item form__supply",children:[Object(r.jsx)("span",{className:"form__item__name",children:"Supply"}),Object(r.jsxs)("label",{htmlFor:"checkboxId",className:"form__item__label",children:[Object(r.jsx)("input",{type:"checkbox",id:"checkboxId",name:"checkbox",className:"form__item__checkbox",required:!0}),Object(r.jsx)("div",{className:"form__item__checkmark"}),Object(r.jsx)("span",{className:"form__item__text",children:"Enabled"})]})]}),Object(r.jsx)("button",{type:"submit",className:"form__button",children:"save draft"})]})})]})})};var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"App__container",children:[Object(r.jsx)(o,{}),Object(r.jsx)(O,{}),Object(r.jsx)(b,{})]})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8f854930.chunk.js.map