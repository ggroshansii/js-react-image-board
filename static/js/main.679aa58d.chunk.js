(this["webpackJsonpjs-react-image-board"]=this["webpackJsonpjs-react-image-board"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(6),r=a.n(i),s=(a(12),a(7)),j=a(2),o=(a(13),a(0));var m=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"image-card",children:[Object(o.jsx)("div",{className:"image-partition",children:Object(o.jsx)("img",{src:e.imgURL,alt:""})}),Object(o.jsx)("p",{children:e.imgCaption})]})})};var d=function(e){return e.posts.map((function(e){return Object(o.jsx)(m,{imgURL:e.imgURL,imgCaption:e.imgCaption},e.id)}))};var b=function(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(),s=Object(j.a)(r,2),m=s[0],d=s[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"form-container",children:Object(o.jsx)("div",{className:"form-center",children:Object(o.jsxs)("form",{action:"",children:[Object(o.jsx)("label",{htmlFor:"image-url"}),Object(o.jsx)("input",{id:"image-url",type:"text",name:"imgURL",placeholder:"Image URL",value:c,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"imgCaption"}),Object(o.jsx)("input",{id:"img-caption",type:"text",name:"imgCaption",placeholder:"Image Caption",value:m,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"add-image-btn",onClick:function(t){t.preventDefault(),e.addImageCard(c,m)},children:"Add Image"})]})})})})};a(15);var u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"header-container"})})};var l=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),r=Object(j.a)(i,2),m=r[0],l=r[1];return Object(o.jsxs)("div",{className:"image-board",children:[Object(o.jsx)(u,{}),Object(o.jsx)(b,{addImageCard:function(e,t){var n={id:m,imgURL:e,imgCaption:t};c([].concat(Object(s.a)(a),[n])),l((function(e){return e+1}))}}),Object(o.jsx)(d,{posts:a})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.679aa58d.chunk.js.map