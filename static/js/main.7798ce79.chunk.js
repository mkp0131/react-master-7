(this["webpackJsonpreact-master-7"]=this["webpackJsonpreact-master-7"]||[]).push([[0],{118:function(n,t,e){"use strict";e.r(t);var i,a,o,r,c,d,s,l,b,j,u,p,g,h,m,x,f,O,v,w,y,k,z,_,C=e(0),S=e.n(C),L=e(45),R=e.n(L),N=e(9),M=e(12),D="https://api.themoviedb.org/3",F=e(11),Q=e(2),I=F.d.div(i||(i=Object(M.a)(["\n  text-align: center;\n  padding: 1em 0;\n"]))),K=function(n){var t=n.style;return Object(Q.jsx)(I,{style:t,children:"Loading..."})},T=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w1280";return n?"https://image.tmdb.org/t/p/".concat(t).concat(n):"img/no_thumnail.png"},B=e(123),E=Object(F.d)(B.a.div)(a||(a=Object(M.a)(["\n  position: relative;\n  .txt-container {\n    position: absolute;\n    left: 2%;\n    bottom: 30%;\n    .txt__title {\n      font-size: 2.5rem;\n      font-weight: 900;\n      margin-bottom: 1em;\n    }\n    .txt__description {\n      line-height: 1.5;\n      max-width: 569px;\n      word-break: keep-all;\n    }\n  }\n"]))),P=F.d.div(o||(o=Object(M.a)([""]))),H=F.d.div(r||(r=Object(M.a)(["\n  padding-bottom: 56.25%;\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  .cover {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));\n  }\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    transform: translate(-50%, -50%);\n  }\n"]))),U=function(n){var t=n.isLoading,e=n.data,i=(null===e||void 0===e?void 0:e.results.length)||0,a=Math.floor(Math.random()*i);return Object(Q.jsx)(P,{children:t?Object(Q.jsx)(K,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}):Object(Q.jsxs)(E,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},children:[Object(Q.jsxs)(H,{children:[Object(Q.jsx)("div",{className:"cover"}),Object(Q.jsx)("img",{src:T(e.results[a].backdrop_path)})]}),e?Object(Q.jsxs)("div",{className:"txt-container",children:[Object(Q.jsx)("div",{className:"txt__title",children:e.results[a].title}),Object(Q.jsx)("div",{className:"txt__description",children:e.results[a].overview})]}):null]})})},A=S.a.memo(U),J=e(23),q=e(22),X=Object(q.b)({key:"isModalShow",default:""}),Y=e(125),G=Object(F.d)(B.a.div)(c||(c=Object(M.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: ",";\n  position: relative;\n  padding-bottom: 56.25%;\n"])),(function(n){return n.theme.boxColor})),V=Object(F.d)(B.a.a)(d||(d=Object(M.a)(["\n  width: ",";\n  flex-shrink: 0;\n  cursor: pointer;\n  position: relative;\n  /* &:first-child {\n    "," {\n      transform-origin: 0%;\n    }\n  }\n  &:last-child {\n    "," {\n      transform-origin: 100%;\n    }\n  } */\n  .movie__title {\n    position: absolute;\n    bottom: 1em;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    padding: 1em;\n  }\n"])),(function(n){return n.movieSize}),G,G),W=F.d.img(s||(s=Object(M.a)(["\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]))),Z=function(n){var t=n.id,e=n.title,i=(n.overview,n.backdrop_path),a=n.movieIndex,o=n.movieOnClick,r=n.movieSize,c=Object(Y.a)(),d=function(n){n?c.start({scale:1.2,zIndex:1,transition:{delay:.2}}):c.start({scale:1,zIndex:0,transition:{delay:.2}})};return Object(Q.jsx)(V,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5+.1*a}},onClick:function(n){return o(n,t)},movieSize:r||"100%",children:Object(Q.jsxs)(G,{animate:c,onHoverStart:function(){return d(!0)},onHoverEnd:function(){return d(!1)},onTapStart:function(){return d(!1)},children:[Object(Q.jsx)(W,{src:T(i,"w780")}),Object(Q.jsx)("div",{className:"movie__title",children:e})]})},t)},$=Object(F.d)(B.a.div)(l||(l=Object(M.a)(["\n  width: 100%;\n  overflow: hidden;\n  padding: 2em 0;\n  margin-bottom: 2.5em;\n"]))),nn=Object(F.d)(B.a.div)(b||(b=Object(M.a)(["\n  width: ",";\n  display: flex;\n  gap: 10px;\n  padding: 0 10px;\n  flex-wrap: nowrap;\n"])),(function(n){return"calc((".concat(n.theme.movieSize," + 10px) * ").concat(n.dataLength," + 10px)")})),tn=Object(F.d)(B.a.h2)(j||(j=Object(M.a)(["\n  z-index: 2;\n  position: relative;\n  font-size: 1.75rem;\n  font-weight: 700;\n  padding-left: 0.5em;\n  margin: 0;\n"]))),en=function(n){var t=n.results,e=n.title,i=Object(C.useRef)(null),a=Object(q.d)(X),o=function(n,t){n.preventDefault(),r||a(t+"")},r=!1;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(tn,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7},children:e}),Object(Q.jsx)($,{ref:i,children:Object(Q.jsx)(nn,{drag:"x",dragConstraints:i,dragMomentum:!1,dragElastic:0,dataLength:t.length,onDragStart:function(){return r=!0},onDragTransitionEnd:function(){return r=!1},children:t.map((function(n,t){return Object(Q.jsx)(Z,Object(N.a)(Object(N.a)({},n),{},{movieIndex:t,movieOnClick:o,movieSize:"280px"}),n.id)}))})})]})},an=S.a.memo(en),on=F.d.div(u||(u=Object(M.a)(["\n  margin-top: -10vw;\n  margin-bottom: 5vh;\n"]))),rn=function(){var n=Object(J.useQuery)(["movie","NowPlaying"],(function(){return fetch("".concat(D,"/movie/now_playing?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&page=1")).then((function(n){return n.json()}))})),t=n.isLoading,e=n.data,i=Object(J.useQuery)(["movie","Popular"],(function(){return fetch("".concat(D,"/movie/popular?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&page=1")).then((function(n){return n.json()}))})),a=i.isLoading,o=i.data,r=Object(J.useQuery)(["movie","Upcoming"],(function(){return fetch("".concat(D,"/movie/upcoming?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&page=1")).then((function(n){return n.json()}))})),c=r.isLoading,d=r.data,s=Object(J.useQuery)(["movie","TopRate"],(function(){return fetch("".concat(D,"/movie/top_rated?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&page=1")).then((function(n){return n.json()}))})),l=s.isLoading,b=s.data;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(A,{isLoading:t,data:e}),Object(Q.jsxs)(on,{children:[t?null:Object(Q.jsx)(an,Object(N.a)(Object(N.a)({},e),{},{title:"\ud604\uc7ac \uc0c1\uc601\uc791"})),c?null:Object(Q.jsx)(an,Object(N.a)(Object(N.a)({},d),{},{title:"\uc0c1\uc601 \uc608\uc815\uc791"})),a?null:Object(Q.jsx)(an,Object(N.a)(Object(N.a)({},o),{},{title:"\uc778\uae30 \uc601\ud654"})),l?null:Object(Q.jsx)(an,Object(N.a)(Object(N.a)({},b),{},{title:"\ucd5c\uace0 \ud3c9\uc810 \uc601\ud654"}))]})]})},cn=e(42),dn=e(10),sn=e(7),ln=e(126),bn=Object(F.d)(B.a.header)(p||(p=Object(M.a)(["\n  display: flex;\n  /* align-items: center; */\n  background: rgba(0, 0, 0, 0.4);\n  padding: 0 1em;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n"]))),jn=F.d.div(g||(g=Object(M.a)(["\n  width: 100px;\n  margin-right: 2em;\n  a {\n    padding: 1em 0;\n  }\n"]))),un=Object(F.d)(B.a.div)(h||(h=Object(M.a)([""]))),pn=F.d.ul(m||(m=Object(M.a)(["\n  display: flex;\n  li {\n    position: relative;\n    a {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      padding: 0 1em;\n    }\n    "," {\n      height: 2px;\n      background: ",";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      margin: 0 auto;\n      width: 100%;\n    }\n  }\n"])),un,(function(n){return n.theme.colors.main})),gn=Object(F.d)(B.a.form)(x||(x=Object(M.a)(["\n  margin: 0.5em 0;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  padding: 0.25em 0.5em;\n  position: relative;\n  width: 20px;\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: ",";\n"])),(function(n){return n.theme.bdRadius})),hn=Object(F.d)(B.a.button)(f||(f=Object(M.a)(["\n  width: 20px;\n  flex-shrink: 0;\n  svg {\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.fontColor})),mn=Object(F.d)(B.a.input)(O||(O=Object(M.a)(["\n  padding: 0;\n  color: ",";\n  overflow: hidden;\n  width: 30px;\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  flex-shrink: 1;\n"])),(function(n){return n.theme.fontColor})),xn={init:{fillOpacity:1},hover:{fillOpacity:0,transition:{duration:.5,repeat:1/0}}},fn={init:{scale:1},toggle:{scale:[1.2,1],transition:{duration:.2}}},On=function(){var n=Object(C.useState)(!1),t=Object(sn.a)(n,2),e=t[0],i=t[1],a=Object(C.useState)(""),o=Object(sn.a)(a,2),r=o[0],c=o[1],d=Object(C.useRef)(null),s=Object(dn.f)("/"),l=Object(Y.a)(),b=Object(ln.a)().scrollY;Object(C.useEffect)((function(){var n;(b.onChange((function(){b.get()>80?l.start({background:"rgba(0, 0, 0, 1)"}):l.start({background:"rgba(0, 0, 0, .4)"})})),e)?(u.start("toggle"),j.start({width:"220px",background:"rgba(55, 55, 55, 0.8)",border:"1px solid rgba(255, 255, 255, 1)"}),null===(n=d.current)||void 0===n||n.focus()):j.start({width:"20px",background:"rgba(0, 0, 0, 0)",border:"1px solid rgba(255, 255, 255, 0)"})}),[b,l,e]);var j=Object(Y.a)(),u=Object(Y.a)(),p=Object(dn.g)();return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(bn,{animate:l,children:[Object(Q.jsx)(jn,{children:Object(Q.jsx)(cn.b,{to:"/",children:Object(Q.jsx)(B.a.svg,{variants:xn,initial:"init",whileHover:"hover",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 276.742",children:Object(Q.jsx)("path",{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z",fill:"#d81f26"})})})}),Object(Q.jsx)(pn,{children:Object(Q.jsxs)("li",{children:[Object(Q.jsx)(cn.b,{to:"/",children:"Home"}),s&&Object(Q.jsx)(un,{layoutId:"gnbUnderLine"})]})}),Object(Q.jsxs)(gn,{onSubmit:function(n){n.preventDefault(),r&&p("/search?k="+r)},animate:j,transition:{type:"liner",delay:.2},children:[Object(Q.jsx)(hn,{type:"button",onClick:function(){return i((function(n){return!n}))},variants:fn,animate:u,children:Object(Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(Q.jsx)("path",{d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"})})}),Object(Q.jsx)(mn,{name:"k",value:r,placeholder:"\uac80\uc0c9",ref:d,onBlur:function(){i((function(n){return!n}))},onChange:function(n){n.preventDefault(),c(n.currentTarget.value)}})]})]})})},vn=S.a.memo(On),wn=F.d.div(v||(v=Object(M.a)(["\n  padding-top: 80px;\n  padding-left: 2em;\n  padding-right: 2em;\n  margin-bottom: 10vh;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n"]))),yn=function(){var n=Object(dn.e)().search,t=new URLSearchParams(n).get("k"),e=Object(dn.g)(),i=Object(q.d)(X);t||e("/",{replace:!0});var a=Object(J.useQuery)([t,"Search"],(function(){return function(n){return fetch("".concat(D,"/search/movie?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()}))}(t+"")})),o=a.isLoading,r=a.data,c=function(n,t){n.preventDefault(),i(t+"")};return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(wn,{children:o?Object(Q.jsx)(K,{style:{gridColumn:"1 / 5",textAlign:"center",fontSize:"1.75rem",paddingTop:"3em"}}):r.results>0?r.results.map((function(n,t){return Object(Q.jsx)(Z,Object(N.a)(Object(N.a)({},n),{},{movieIndex:t,movieOnClick:c}),n.id)})):Object(Q.jsx)("div",{style:{gridColumn:"1 / 5",textAlign:"center",fontSize:"1.75rem",paddingTop:"3em"},children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})})},kn=Object(F.d)(B.a.div)(w||(w=Object(M.a)(["\n  background: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 20;\n  width: 100%;\n  height: 100%;\n"]))),zn=Object(F.d)(B.a.div)(y||(y=Object(M.a)(["\n  background: ",";\n  box-shadow: 0px 0px 1px rgba(186, 186, 186, 0.2);\n  border-radius: 20px;\n  overflow: hidden;\n  position: fixed;\n  left: 50%;\n  top: 1em;\n  transform: translateX(-50%);\n  z-index: 30;\n  max-width: 569px;\n  width: 100%;\n  min-height: 700px;\n  padding-bottom: 2em;\n  .movie-txt-container {\n    padding: 2em 1em;\n    .movie__title {\n      font-size: 2.5rem;\n      font-weight: 900;\n      margin-bottom: 0.75em;\n    }\n    .movie__description {\n      padding-left: 0.25em;\n      line-height: 1.5;\n    }\n  }\n"])),(function(n){return n.theme.bgColor})),_n=Object(F.d)(B.a.a)(k||(k=Object(M.a)(["\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 31;\n  cursor: pointer;\n  background: #000;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  border-radius: 50%;\n  svg {\n    width: 100%;\n    height: 100%;\n    path {\n      fill: #fff;\n    }\n  }\n"]))),Cn=F.d.div(z||(z=Object(M.a)(["\n  padding-bottom: 56.25%;\n  position: relative;\n  background: ",";\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){return n.theme.boxColor}),(function(n){return"url(".concat(T(n.bg,"w1280"),")")})),Sn=function(n){var t=n.id,e=(Object(dn.g)(),Object(q.d)(X)),i=Object(J.useQuery)(["movieDetail",t],(function(){return function(n){return fetch("".concat(D,"/movie/").concat(n,"?api_key=").concat("2704786f9c43917a884746de4a7c561f","&language=ko-KR&page=1")).then((function(n){return n.json()}))}(t)})),a=i.isLoading,o=i.data;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(kn,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0,transition:{delay:.2}}}),Object(Q.jsxs)(zn,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0,transition:{delay:.2}},children:[Object(Q.jsx)(_n,{className:"btn-close",onClick:function(n){n.preventDefault(),e("")},exit:{scale:[.8,1],transition:{duration:.2}},children:Object(Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(Q.jsx)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"})})}),a?Object(Q.jsx)(K,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Cn,{bg:(null===o||void 0===o?void 0:o.backdrop_path)||""}),Object(Q.jsxs)("div",{className:"movie-txt-container",children:[Object(Q.jsx)("div",{className:"movie__title",children:null===o||void 0===o?void 0:o.title}),Object(Q.jsx)("div",{className:"movie__description",children:null===o||void 0===o?void 0:o.overview})]})]})]})]})},Ln=e(124),Rn=function(){var n=Object(q.c)(X);return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(Ln.a,{children:n?Object(Q.jsx)(Sn,{id:n+""}):null})})},Nn=function(){return Object(Q.jsxs)(cn.a,{basename:"/react-master-7",children:[Object(Q.jsx)(vn,{}),Object(Q.jsxs)(dn.c,{children:[Object(Q.jsx)(dn.a,{path:"/",element:Object(Q.jsx)(rn,{})}),Object(Q.jsx)(dn.a,{path:"/search",element:Object(Q.jsx)(yn,{})}),Object(Q.jsx)(dn.a,{path:"/*",element:Object(Q.jsx)(rn,{})})]}),Object(Q.jsx)(Rn,{})]})},Mn=e(84),Dn=Object(F.b)(_||(_=Object(M.a)(["\n  ",";\n  html, body {\n    font-family: 'Source Sans Pro', sans-serif;\n    background: ",";\n    color: ",";\n    font-size: 16px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  img,\n  svg {\n    width: 100%;\n    vertical-align: top;\n  }\n  img {\n    pointer-events: none;\n  }\n  a {\n    display: block;\n    text-decoration: none;\n    color: inherit;\n    cursor: pointer;\n  }\n  button {\n    border: none;\n    background: transparent;\n    padding: 0;\n    outline: none;\n    cursor: pointer;\n  }\n  input {\n    -webkit-appearance: none; // \uc548\ucabd\uc73c\ub85c \uc0dd\uae30\ub294 \uadf8\ub9bc\uc790 \uc81c\uac70\n    -webkit-border-radius: 0; // \ub465\uadfc \ubaa8\uc11c\ub9ac \uc81c\uac70\n    border: 1px solid #000;\n    outline: none;\n    height: 100%;\n    font-size: 1rem;\n  }\n"])),Mn.a,(function(n){return n.theme.bgColor}),(function(n){return n.theme.fontColor}));var Fn=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Dn,{}),Object(Q.jsx)(Nn,{})]})},Qn=e(85);e.n(Qn).a.config();var In=new J.QueryClient;R.a.render(Object(Q.jsx)(S.a.StrictMode,{children:Object(Q.jsx)(F.a,{theme:{bgColor:"#000",boxColor:"#333",bdRadius:"8px",fontColor:"#fff",movieSize:"280px",colors:{main:"#3545ee",secondary:"red",btn:"#7480ff"}},children:Object(Q.jsx)(J.QueryClientProvider,{client:In,children:Object(Q.jsx)(q.a,{children:Object(Q.jsx)(Fn,{})})})})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.7798ce79.chunk.js.map