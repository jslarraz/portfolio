(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(27),l=a.n(i),r=a(2),o=(a(39),a(26)),d=a(19),j=a(28),b=a(29);o.a.use(j.a).use(b.a).use(d.e).init({fallbackLng:["en"],detection:{checkWhitelist:!0},debug:!1,whitelist:["en","es"],interpolation:{escapeValue:!1},react:{useSuspense:!1}});o.a;var m=a(3),h=a(5),x=a(6),O=a(8),u=a(7),p=[{id:1,tomenu:"#home",namemenu:"Home"},{id:2,tomenu:"#about",namemenu:"About"},{id:3,tomenu:"#resume",namemenu:"Education"},{id:4,tomenu:"#portfolio",namemenu:"Portfolio"}],f=a(55),v=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={},s.ref={es:n.a.createRef(),en:n.a.createRef()},s}return Object(x.a)(a,[{key:"setActive",value:function(e){var t=this;this.props.i18n.changeLanguage(e),Object.keys(this.ref).map((function(e){return t.ref[e].current.className=""})),this.ref[e].current.className="font-weight-bolder"}},{key:"render",value:function(){var e=this;return Object(s.jsx)("header",{id:"header",className:"header header-style1",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"flex-header d-flex justify-content-between align-items-center",children:[Object(s.jsxs)("div",{className:"socials-list-hd s1 hv1",children:[Object(s.jsx)(r.b,{to:"#",onClick:function(){e.setActive("en")},ref:this.ref.en,children:"EN"}),Object(s.jsx)(r.b,{to:"#",onClick:function(){e.setActive("es")},ref:this.ref.es,children:"ES"})]}),Object(s.jsxs)("div",{className:"content-menu d-lg-flex",children:[Object(s.jsx)("div",{className:"nav-wrap",children:Object(s.jsx)("nav",{id:"mainnav",className:"mainnav",children:Object(s.jsx)("ul",{className:"menu ace-responsive-menu","data-menu-style":"horizontal",children:p.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:e.tomenu,className:"click-model",children:e.namemenu})},e.id1)}))})})}),Object(s.jsx)("div",{className:"hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center",children:Object(s.jsx)(r.b,{to:"#",className:"btn-inner border-corner2 lt-sp08 text-white",children:"Contact Me"})})]}),Object(s.jsxs)("div",{dir:"rtl",className:"btn-menu mobile-header__menu-button",children:[Object(s.jsx)("div",{className:"line line-1"}),Object(s.jsx)("div",{className:"line line-2"}),Object(s.jsx)("div",{className:"line line-3"}),Object(s.jsx)("div",{className:"line line-4"})]})]})})})}}]),a}(c.Component),N=Object(f.a)()(v),g=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(s.jsx)("div",{className:"section slide-personal-Intro-first",children:Object(s.jsx)("section",{className:"banner-section s1",id:"home",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"content-text position-relative",children:[Object(s.jsxs)("div",{className:"animate-element wow delay5 fadeInDown","data-wow-delay":"0.3s",children:[Object(s.jsxs)("h1",{className:"cd-headline clip is-full-width title mg-b29 text-white",children:[Object(s.jsx)("span",{children:e("banner.title.0")}),Object(s.jsxs)("span",{className:"cd-words-wrapper color-d4",children:[Object(s.jsx)("b",{className:"is-visible",children:e("banner.title.1")}),Object(s.jsx)("b",{children:e("banner.title.2")})]})]}),Object(s.jsx)("p",{className:"lt-sp03 mg-b60 text-white",children:e("banner.content")})]}),Object(s.jsx)("div",{className:"animate-element wow delay5 fadeInUp","data-wow-delay":"0.5s",children:Object(s.jsx)("div",{className:"fl-btn btn-general btn-hv-border",children:Object(s.jsx)(r.b,{to:"#",className:"border-corner5 f-w500 lt-sp095 text-white ",children:"Download Resume"})})})]})})})})}}]),a}(c.Component),w=Object(f.a)()(g),y=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={profile:[{id:1,classname:"profile-link border-corner2 d-flex align-items-center",images:"./images/section/linkedin.png",alt:"images",link:"https://www.linkedin.com/in/jorge-sancho-larraz",name:"LinkedIn",normal:"Follow Me"},{id:2,classname:"profile-link border-corner2 d-flex align-items-center",images:"./images/section/github.png",alt:"images",link:"https://github.com/jslarraz",name:"GitHub",normal:"See My Work"},{id:3,classname:"profile-link border-corner2 d-flex align-items-center",images:"./images/section/07.png",alt:"images",link:"https://diec2.unizar.es/personal/jorge-sancho-larraz",name:"Unizar",normal:"Current position"},{id:4,classname:"profile-link border-corner2 d-flex align-items-center",images:"./images/section/08.png",alt:"images",link:"#",name:"Skype",normal:"Connect with me"}]},s}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(s.jsx)("div",{className:"tf-modal-content",children:Object(s.jsx)("section",{className:"profile s1 position-relative",id:"about",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"background-white",children:[Object(s.jsxs)("div",{className:"d-lg-flex",children:[Object(s.jsx)("div",{className:"col-left",children:Object(s.jsx)("div",{className:"featured-post animate-element wow delay5 fadeInUp","data-wow-delay":"0.5s",children:Object(s.jsx)("img",{style:{width:"70%"},src:"images/section/03.png",alt:"images"})})}),Object(s.jsxs)("div",{className:"col-right",children:[Object(s.jsx)("div",{className:"flat-spacer","data-desktop":"55","data-mobile":"20","data-smobile":"20"}),Object(s.jsx)("div",{className:"flat-title t1",children:Object(s.jsxs)("div",{className:"animate-element wow delay5 fadeInDown","data-wow-delay":"0.5s",children:[Object(s.jsx)("h4",{className:"sub-title mg-b22",children:e("about.subtitle")}),Object(s.jsxs)("h2",{className:"title-section mg-b26 color-d12",children:[e("about.title.b"),Object(s.jsx)("span",{className:"color-d4",children:e("about.title.y")})]}),Object(s.jsx)("p",{children:e("about.content")})]})})]})]}),Object(s.jsx)("div",{className:"profile-list",children:Object(s.jsx)("div",{className:"flat-carousel-box data-effect clearfix","data-gap":"30","data-column":"4","data-column2":"3","data-column3":"2","data-column4":"1","data-column5":"1","data-dots":"false","data-auto":"false","data-nav":"false","data-loop":"true",children:Object(s.jsx)("div",{className:"owl-carousel",children:this.state.profile.map((function(t,a){return Object(s.jsx)("a",{href:t.link,children:Object(s.jsxs)("div",{className:t.classname,children:[Object(s.jsx)("div",{className:"featured-post",children:Object(s.jsx)("img",{src:t.images,alt:t.alt})}),Object(s.jsxs)("div",{className:"content-inside",children:[Object(s.jsx)("h3",{className:"name",children:e("profile."+(t.id-1)+".name")}),Object(s.jsx)("span",{className:"t-normal",children:e("profile."+(t.id-1)+".normal")})]})]},t.id)})}))})})})]})})})})}}]),a}(c.Component),k=Object(f.a)()(y),C=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(s.jsx)("div",{className:"tf-modal-content",children:Object(s.jsx)("section",{className:"flat-case-study s3",id:"portfolio",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"d-md-flex",children:[Object(s.jsxs)("div",{className:"col-left animate-element wow delay5 fadeInDown","data-wow-delay":"0.5s",children:[Object(s.jsx)("div",{className:"image-link t1",children:Object(s.jsx)("div",{className:"featured-post",children:Object(s.jsx)(r.b,{to:"#",children:Object(s.jsx)("img",{src:"images/section/40.jpg",alt:"images"})})})}),Object(s.jsx)("div",{className:"image-link t1",children:Object(s.jsx)("div",{className:"featured-post",children:Object(s.jsx)(r.b,{to:"#",children:Object(s.jsx)("img",{src:"images/section/41.jpg",alt:"images"})})})}),Object(s.jsx)("div",{className:"fl-btn text-center",children:Object(s.jsx)("a",{href:e("portfolio.link"),className:"f-w500",children:e("portfolio.button")})})]}),Object(s.jsx)("div",{className:"flat-spacer","data-desktop":0,"data-mobile":100,"data-smobile":100}),Object(s.jsxs)("div",{className:"col-right animate-element wow delay5 fadeInUp","data-wow-delay":"0.5s",children:[Object(s.jsxs)("div",{className:"flat-title t1 mg-b60",children:[Object(s.jsx)("h4",{className:"sub-title mg-b13",children:e("portfolio.subtitle")}),Object(s.jsx)("h2",{className:"title-section color-d12 mg-b20",children:e("portfolio.title")}),Object(s.jsx)("p",{children:e("portfolio.content")})]}),Object(s.jsxs)("div",{className:"pd-right",children:[Object(s.jsx)("div",{className:"image-link t1",children:Object(s.jsx)("div",{className:"featured-post",children:Object(s.jsx)(r.b,{to:"#",children:Object(s.jsx)("img",{src:"images/section/42.jpg",alt:"images"})})})}),Object(s.jsx)("div",{className:"image-link t1",children:Object(s.jsx)("div",{className:"featured-post",children:Object(s.jsx)(r.b,{to:"#",children:Object(s.jsx)("img",{src:"images/section/43.jpg",alt:"images"})})})})]})]})]})})})})}}]),a}(c.Component),I=Object(f.a)()(C),U=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={contenttop:[{id:1,classname:"experience-box experience-box-line t3",datawow:"0.3s",year:"University of Zaragoza",title:"Computer science graduate",text:"User experience (UX) design is the process design teams use to create products."},{id:2,classname:"experience-box experience-box-line t3",datawow:"0.5s",year:"University of Zaragoza",title:"Computer science masters",text:"User experience (UX) design is the process design teams use to create products."},{id:3,classname:"experience-box t3",datawow:"0.7s",year:"University of Zaragoza",title:"PhD on cybersecurity",text:"User experience (UX) design is the process design teams use to create products."}],contentbot:[{id:1,classname:"experience-box experience-box-line t3",datawow:"0.8s",year:"2017 - 2021",title:"Researcher at",office:"Unizar",text:"User experience (UX) design is the process design teams use to create products."},{id:2,classname:"experience-box experience-box-line t3",datawow:"1s",year:"2017 - 2020",title:"Professor at",office:"ACING",text:'Responsable del modulo "Dise\xf1o de arquitecturas seguras" en el Curso Avanzado de Ciberdefensa en la Academia de Ingenieros del Ejercito (ACING).'},{id:3,classname:"experience-box t3",datawow:"1.2s",year:"2017 - 2020",title:"Assistant at",office:"COIT",text:"User experience (UX) design is the process design teams use to create products."}]},s}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(s.jsxs)("div",{className:"animate-element delay5 fadeInUp",children:[Object(s.jsx)("div",{className:"padding-bottom",children:Object(s.jsx)("div",{className:"row",children:this.state.contenttop.map((function(t){return Object(s.jsx)("div",{className:"col-lg-4 col-12 last-col animate-element wow delay5 fadeIn","data-wow-delay":t.datawow,children:Object(s.jsx)("div",{className:t.classname,children:Object(s.jsxs)("div",{className:"box-inner",children:[Object(s.jsx)("h3",{className:"f-info bg-s1 color-d6",children:e("education.content.top."+(t.id-1)+".year")}),Object(s.jsxs)("div",{className:"exp-wrap",children:[Object(s.jsx)("div",{className:"s-info mg-b11",children:e("education.content.top."+(t.id-1)+".title")}),Object(s.jsx)("p",{children:e("education.content.top."+(t.id-1)+".text")})]})]})})},t.id)}))})}),Object(s.jsx)("div",{className:"row",children:this.state.contentbot.map((function(t){return Object(s.jsx)("div",{className:"col-lg-4 col-12 last-col animate-element wow delay5 fadeIn","data-wow-delay":t.datawow,children:Object(s.jsx)("div",{className:t.classname,children:Object(s.jsxs)("div",{className:"box-inner",children:[Object(s.jsx)("h3",{className:"f-info bg-s1 color-d6",children:e("education.content.bot."+(t.id-1)+".year")}),Object(s.jsxs)("div",{className:"exp-wrap",children:[Object(s.jsxs)("div",{className:"s-info mg-b11",children:[e("education.content.bot."+(t.id-1)+".title")," ",Object(s.jsx)(r.b,{to:"#",children:e("education.content.bot."+(t.id-1)+".office")})]}),Object(s.jsx)("p",{children:e("education.content.bot."+(t.id-1)+".text")})]})]})})},t.id)}))})]})}}]),a}(c.Component),z=Object(f.a)()(U),A=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(s.jsx)("div",{className:"tf-modal-content",children:Object(s.jsx)("section",{className:"flat-education s1 position-relative",id:"resume",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"d-lg-flex",children:[Object(s.jsxs)("div",{className:"flat-title t1 animate-element wow delay5 fadeInDown",style:{width:"80%"},"data-wow-delay":"0.5s",children:[Object(s.jsx)("h4",{className:"sub-title mg-b13",children:e("education.subtitle")}),Object(s.jsx)("h2",{className:"title-section color-d12",children:e("education.title")})]}),Object(s.jsx)("div",{className:"animate-element wow delay5 fadeInUp",style:{width:"20%"},"data-wow-delay":"0.5s",children:Object(s.jsx)("div",{className:"fl-btn btn-general btn-hv-border",children:Object(s.jsx)(r.b,{to:"#",className:"border-corner5 f-w500 lt-sp095 text-white ",children:e("education.button")})})})]}),Object(s.jsx)(z,{})]})})})}}]),a}(c.Component),D=Object(f.a)()(A),S=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return Object(s.jsx)("section",{className:"get-project s2",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4 col-12",children:Object(s.jsx)("div",{className:"featured-post animate-element wow delay5 fadeZooming","data-wow-delay":"0.5s",children:Object(s.jsx)("img",{src:"images/section/23.png",alt:"images"})})}),Object(s.jsx)("div",{className:"col-lg-8 col-12",children:Object(s.jsxs)("div",{className:"content-inner d-lg-flex",children:[Object(s.jsx)("div",{className:"col-left",children:Object(s.jsxs)("div",{className:"animate-element wow delay5 fadeInDown","data-wow-delay":"0.5s",children:[Object(s.jsx)("h2",{className:"title mg-b14 text-white",children:"Say Hello!"}),Object(s.jsxs)("div",{className:"site-list has-border",children:[Object(s.jsx)(r.b,{to:"#",className:"bg-s1",children:Object(s.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})}),Object(s.jsx)(r.b,{to:"#",className:"bg-s2",children:Object(s.jsx)("i",{className:"fa fa-behance","aria-hidden":"true"})}),Object(s.jsx)(r.b,{to:"#",className:"bg-s3",children:Object(s.jsx)("span",{className:"icon-dribble"})})]})]})}),Object(s.jsxs)("div",{className:"col-right animate-element wow delay5 fadeInUp","data-wow-delay":"0.5s",children:[Object(s.jsx)("div",{className:"flat-spacer","data-desktop":69,"data-mobile":50,"data-smobile":50}),Object(s.jsxs)("form",{action:"#",className:"get-project-f2 position-relative",children:[Object(s.jsx)("input",{type:"email",placeholder:"Enter your email"}),Object(s.jsx)("button",{className:"btn-submit",children:Object(s.jsx)("i",{className:"fa fa-paper-plane-o","aria-hidden":"true"})})]})]})]})})]})})})}}]),a}(c.Component),E=function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"tf-modal-content justify-content-end",children:Object(s.jsx)("footer",{id:"footer",className:"footer footer-s2",children:Object(s.jsx)("div",{id:"bottom",className:"bottom-s3",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-lg-12",children:Object(s.jsx)("div",{className:"copyright lt-sp02",children:"\xa9 Jorge Sancho, 2021 All rights reserved."})})})})})})})}}]),a}(c.Component),F=[{path:"/",component:function(e){Object(O.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"counter-scroll fixed counter-scroll home2 has-one-page",children:[Object(s.jsx)("div",{id:"mobile-menu-overlay"}),Object(s.jsx)(N,{}),Object(s.jsx)("div",{id:"content",className:"content",children:Object(s.jsxs)("div",{className:"homepage-personal",children:[Object(s.jsx)(w,{}),Object(s.jsx)(k,{}),Object(s.jsx)(D,{}),Object(s.jsx)(I,{}),Object(s.jsx)(S,{}),Object(s.jsx)(E,{})]})})]})}}]),a}(c.Component)}];var L=function(){return Object(s.jsx)(r.a,{children:F.map((function(e,t){return Object(s.jsx)(m.a,{exact:!0,path:e.path,component:e.component},t)}))})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};l.a.render(Object(s.jsx)(r.a,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),P()}},[[54,1,2]]]);
//# sourceMappingURL=main.1113a389.chunk.js.map