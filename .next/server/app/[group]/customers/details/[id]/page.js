(()=>{var e={};e.id=749,e.ids=[749],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},91026:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>m.a,__next_app__:()=>c,pages:()=>l,routeModule:()=>p,tree:()=>d});var a=s(70260),r=s(28203),n=s(25155),m=s.n(n),i=s(67292),o={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let d=["",{children:["[group]",{children:["customers",{children:["details",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,17469)),"/Users/mdreesen/Documents/Programming/business-projects/admin/app/[group]/customers/details/[id]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,43279)),"/Users/mdreesen/Documents/Programming/business-projects/admin/app/[group]/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19611)),"/Users/mdreesen/Documents/Programming/business-projects/admin/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/mdreesen/Documents/Programming/business-projects/admin/app/[group]/customers/details/[id]/page.tsx"],c={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/[group]/customers/details/[id]/page",pathname:"/[group]/customers/details/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},96487:()=>{},78335:()=>{},79358:(e,t,s)=>{"use strict";s.d(t,{BY:()=>n,M0:()=>m,yR:()=>r});var a=s(12328);async function r(){return(await (0,a.Os)()).customers}async function n(){return[{name:"January","Customers per month":1e3},{name:"February","Customers per month":2e3},{name:"March","Customers per month":5e3},{name:"April","Customers per month":15e3},{name:"May","Customers per month":14e3},{name:"June","Customers per month":16e3},{name:"July","Customers per month":12e3},{name:"August","Customers per month":1e4},{name:"September","Customers per month":18e3},{name:"October","Customers per month":16e3},{name:"November","Customers per month":11e3},{name:"December","Customers per month":9e3}]}async function m(e){return(await r()).filter(t=>t.id.toString().includes(e))[0]}},12328:(e,t,s)=>{"use strict";async function a(){return{id:0x75bcd15,group_name:"Awesome Group INC.",customers:[{id:1,name:"Lindsay Walton",first_name:"Lindsay",last_name:"Walton",title:"Owner",business:"Property Owner (Great Bear Property)",email:"lindsay@example.com",phone:"219-241-0061",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901",createdAt:"Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)"},{id:2,name:"Greg Hill",first_name:"Lindsay",last_name:"Walton",title:"Owner",business:"Lawyer INC.",email:"Greg@example.com",phone:"406-607-0061",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901",createdAt:"Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)"},{id:3,name:"Tess Willard",first_name:"Tess",last_name:"Willard",title:"Owner",business:"Window Cleaning Business",email:"tess@example.com",phone:"406-607-2271",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901",createdAt:"Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)"},{id:4,name:"Will Brown",first_name:"Will",last_name:"Brown",title:"Employee",business:"Window Cleaning Business",email:"will@example.com",phone:"406-607-8032",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901",createdAt:"Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)"},{id:5,name:"Thom Walker",first_name:"Thom",last_name:"Walker",title:"Architect",business:"Straight Line INC.",email:"thom@example.com",phone:"406-607-0092",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901",createdAt:"Fri Feb 09 2024 20:18:45 GMT+0000 (Coordinated Universal Time)"}],expenses:[{id:1,name:"Employees",value:15e3,createdBy:"Leslie Alexander",created:"March 17, 2023"},{id:2,name:"Materials",value:8e3,createdBy:"Leslie Alexander",created:"May 5, 2023"},{id:3,name:"Vehicles",value:5e3,createdBy:"Courtney Henry",created:"May 25, 2023"},{id:4,name:"Rent",value:5120,createdBy:"Leonard Krasner",created:"June 7, 2023"},{id:5,name:"Bills",value:1e3,createdBy:"Courtney Henry",created:"June 10, 2023"}],invoices:[{id:11211,name:"Tuple",company:"Tuple",commission:0,expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Paid",lastInvoice:{company:"Tuple",commission:0,expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Paid"}},{id:224554,name:"SavvyCal",lastInvoice:{company:"SavvyCal",commission:"0.00",expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Withdraw"}},{id:345654,name:"Reform",lastInvoice:{company:"Reform",commission:"0.00",expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Active"}},{id:434543,name:"Reform",lastInvoice:{company:"Reform",commission:"0.00",expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Paid"}},{id:576567,name:"Blarg",lastInvoice:{company:"Blarg",commission:"0.00",expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Overdue"}},{id:65456,name:"Tripple",lastInvoice:{company:"Tripple",commission:"0.00",expenseForProject:"0.00",date:"January 22, 2023",dateTime:"2023-01-22",customerPayment:"14,000.00",total:"14,000.00",status:"Paid"}}],revenue:[{id:1,company:"Richard & Sons",commission:"2.00",expenseForProject:"1.000",customerPayment:"4,509.00",total:"3,509.00",date:"January 22, 2023"},{id:2,company:"Planet Express",commission:"0.00",expenseForProject:"4,000.00",customerPayment:"3,999.00",total:"1.00",date:"January 22, 2023"},{id:3,company:"Window Cleaning",commission:"3.00",expenseForProject:"200.00",customerPayment:"3,000.00",total:"2,800.00",date:"January 22, 2023"}],team:[{id:1,first_name:"Michael",last_name:"McFlurry",title:"Developer",department:"Development",email:"m.flurry@example.com",telephone:"219-241-0061",role:"admin",status:"terminated",country:"United States",street:"123 Alpha Rd",city:"Kalispell",state:"Montana",postal_code:"59901"},{id:2,first_name:"Phillip",last_name:"Fry",title:"Owner",department:"",email:"p.fry@example.com",telephone:"406-607-3301",role:"member",status:"training",country:"Canada",street:"123 tella Rd",city:"Cambridge",state:"Onterio",postal_code:"39354"},{id:3,first_name:"Quin",last_name:"Geans",title:"Admin",department:"Security",email:"q.geans@example.com",telephone:"406-607-9087",role:"admin",status:"active",country:"United States",street:"123 Riley Rd",city:"Portage",state:"Ohio",postal_code:"45415"}],settings:{showCustomers:!0,showExpenses:!0,showInvoices:!0,showRevenue:!0,showRevenueChart:!0,showCustomersChart:!0,showExpensesChart:!0,showTeam:!0}}}s.d(t,{Os:()=>a})},17469:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(62740),r=s(79358);async function n({params:e}){let{id:t}=await e,s=await (0,r.M0)(t);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,a.jsx)("h3",{className:"text-base/7 font-semibold text-gray-900",children:"Customer Information"}),(0,a.jsx)("p",{className:"mt-1 max-w-2xl text-sm/6 text-gray-500",children:"Personal details about customer."})]}),(0,a.jsx)("div",{className:"mt-6 border-t border-gray-100",children:(0,a.jsxs)("dl",{className:"divide-y divide-gray-100",children:[(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Full name"}),(0,a.jsxs)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:[s.first_name," ",s.last_name]})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Title"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.title})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Business"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.business})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Email address"}),(0,a.jsx)("a",{href:`mailto:${s.email}`,children:(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.email})})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Phone number"}),(0,a.jsx)("a",{href:`tel:${s.phone}`,children:(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.phone})})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Country"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.country})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Street"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.street})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"City"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.city})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"State"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.state})]}),(0,a.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,a.jsx)("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Postal Code"}),(0,a.jsx)("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.postal_code})]})]})})]})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,154,883,550,737,443],()=>s(91026));module.exports=a})();