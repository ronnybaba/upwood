(()=>{var e={};e.id=74,e.ids=[74],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},4557:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=t(260),a=t(8203),o=t(5155),n=t.n(o),i=t(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(s,l);let c=["",{children:["active-projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5365)),"/Users/abhisheksharma/Desktop/test/upwood/src/app/active-projects/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1354)),"/Users/abhisheksharma/Desktop/test/upwood/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/abhisheksharma/Desktop/test/upwood/src/app/active-projects/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/active-projects/page",pathname:"/active-projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8057:(e,s,t)=>{Promise.resolve().then(t.bind(t,71)),Promise.resolve().then(t.bind(t,4204)),Promise.resolve().then(t.bind(t,2813))},4505:(e,s,t)=>{Promise.resolve().then(t.bind(t,1280)),Promise.resolve().then(t.bind(t,7536)),Promise.resolve().then(t.bind(t,622))},7536:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(5512),a=t(8009),o=t(4117),n=t(588),i=t(5103);function l({item:e}){let[s,t]=(0,a.useState)(!1),l={heading:"Buy shares",title:e.title,share_price:e.share_price,share_available:e.share_available,balance:"1500",share:"100",total_payment:"3000"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"project-card",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"container-in",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"image",children:[(0,r.jsx)(i.default,{src:e.image,alt:"Description of the image",layout:"responsive",width:100,height:100}),(0,r.jsx)("div",{className:"caption",children:e.comingsoon?"coming soon":e.image_label})]})})})}),(0,r.jsxs)("div",{className:`container ${e.comingsoon?"disable-overlay":""}`,children:[(0,r.jsx)("div",{className:"container-in",children:(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsx)("div",{className:"project-name",children:e.comingsoon?"To be announced":e.title}),(0,r.jsx)("div",{className:"project-description",children:e.comingsoon?"Description coming soon, please wait":e.short})]})}),(0,r.jsxs)("div",{className:"container-in",children:[e.keyPoints.map((s,t)=>(0,r.jsxs)("div",{className:"col-4 col-m-padding-right-0 fl",children:[(0,r.jsx)("span",{className:"colb",children:s.name}),(0,r.jsx)("span",{className:"colc",children:e.comingsoon?"TBA":s.value})]},t)),(0,r.jsx)("div",{className:"clr"})]}),(0,r.jsxs)("div",{className:"container-in",children:[(0,r.jsx)("div",{className:"col-8 col-m-full col-mr-bottom-20 fl",children:(0,r.jsx)(o.A,{text:"VIEW DETAILS",link:`/active-project-details/#${e.id}`,active:!1})}),(0,r.jsx)("div",{className:"col-4 col-m-full fl",children:(0,r.jsx)(o.A,{text:"INVEST",link:"",active:!0,call:()=>{t(!0)}})}),(0,r.jsx)("div",{className:"clr"})]})]})]}),s?(0,r.jsx)(n.A,{config:l,close:()=>{t(!1)}}):null]})}},5365:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(2740),a=t(4204),o=t(71),n=t(2813);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"clr"}),(0,r.jsxs)("div",{className:"projects",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"container-in",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("h1",{children:["Active projects ",(0,r.jsx)(n.default,{})]})})})}),(0,r.jsx)("div",{className:"space-30"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"container-in",children:[[{id:"1516",comingsoon:!1,image:"/Photo2.jpg",image_label:"GROW",title:"Latgale forest portfolio",short:"Portfolio of 7 forest plantations in Latgale region.",keyPoints:[{name:"AREA",value:"30.4ha"},{name:"ROI",value:"63%"},{name:"CARBON CREDITS",value:"3509"}],share_price:"108",share_available:"900"},{id:"1920",comingsoon:!0,image:"/Photo2.jpg",image_label:"",title:"Latgale forest portfolio",short:"Portfolio of 7 forest plantations in Latgale region.",keyPoints:[{name:"AREA",value:"30.4ha"},{name:"ROI",value:"63%"},{name:"CARBON CREDITS",value:"3509"}],share_price:"98",share_available:"400"}].map((e,s)=>(0,r.jsx)("div",{className:"col-6 col-m-full fl",children:(0,r.jsx)(a.default,{item:e})},s)),(0,r.jsx)("div",{className:"clr"})]})})]})]})}function l(){return(0,r.jsx)(o.default,{children:(0,r.jsx)(i,{})})}},71:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/abhisheksharma/Desktop/test/upwood/src/components/AuthGuard.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/abhisheksharma/Desktop/test/upwood/src/components/AuthGuard.tsx","default")},2813:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/abhisheksharma/Desktop/test/upwood/src/components/Username.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/abhisheksharma/Desktop/test/upwood/src/components/Username.tsx","default")},4204:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/abhisheksharma/Desktop/test/upwood/src/components/projectCard.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/abhisheksharma/Desktop/test/upwood/src/components/projectCard.tsx","default")}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,826,77,673],()=>t(4557));module.exports=r})();