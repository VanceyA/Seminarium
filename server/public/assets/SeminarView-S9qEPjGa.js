import{o as r,c as i,F as a,b as e,u as d,r as _,t as s,h as o,f as u,d as p}from"./index-D3WJkKRE.js";const h=e("button",{class:"hidden sm:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Add to Schedule + ",-1),m=e("button",{class:"block sm:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded"}," Add + ",-1),f={__name:"AddToScheduleButton",setup(c){return(n,l)=>(r(),i(a,null,[h,m],64))}},x={class:"flex flex-col items-center gap-2 w-100"},b={class:"flex flex-row justify-between w-5/6"},g={class:"text-3xl font-bold"},S={class:"flex flex-col w-5/6"},w={class:"text-md text-zinc-300 text-nowrap"},v={__name:"SeminarDetail",setup(c){const n=d(),l=parseInt(n.params.id);console.log(l);const t=_({_id:1,title:"Exploring the Ethics of Generative AI in Higher Ed.",description:"This is the first seminar",time:"12:00 PM",fields:["All CSET Majors"],presenter:"John Smith",room:"SET 301",type:"Lecture"}).value;return(E,k)=>(r(),i("div",x,[e("div",b,[e("h1",g,s(o(t).title),1),u(f)]),e("div",S,[e("p",w,s(o(t).room),1),e("p",null,s(o(t).description),1),e("p",null,s(o(t).time),1),e("p",null,s(o(t).fields),1),e("p",null,s(o(t).presenter),1),e("p",null,s(o(t).type),1)])]))}},B={__name:"SeminarView",setup(c){return(n,l)=>(r(),p(v))}};export{B as default};
