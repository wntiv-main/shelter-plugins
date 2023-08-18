(()=>{var B=Object.create;var $=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var L=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports),K=(t,o)=>{for(var e in o)$(t,e,{get:o[e],enumerable:!0})},C=(t,o,e,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of q(o))!E.call(t,l)&&l!==e&&$(t,l,{get:()=>o[l],enumerable:!(s=k(o,l))||s.enumerable});return t};var h=(t,o,e)=>(e=t!=null?B(I(t)):{},C(o||!t||!t.__esModule?$(e,"default",{value:t,enumerable:!0}):e,t)),P=t=>C($({},"__esModule",{value:!0}),t);var u=L((ce,x)=>{x.exports=shelter.solidWeb});var ie={};K(ie,{onLoad:()=>le,onUnload:()=>re});var f=h(u(),1),M=h(u(),1),S=h(u(),1),a=h(u(),1),r=h(u(),1),R=(0,f.template)('<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="loading-indicator" fill="white"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></path></svg>',8),O=(0,f.template)('<div class="pr-2"><div class="mb-2 flex"><div class="label-spacing"></div></div><div class="label-spacing"></div></div>',8),j=(0,f.template)("<div></div>",2),G=(0,f.template)('<div id="generate-button"><button><div><svg viewBox="0 0 315.8 320" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"><path d="m294.9 131c7.3-21.8 4.8-45.7-6.9-65.5-17.5-30.4-52.6-46-86.8-38.7-15.2-17.2-37.1-26.9-60.1-26.8-35 0-66.1 22.5-76.9 55.8-22.5 4.6-41.9 18.7-53.3 38.7-17.6 30.3-13.6 68.5 9.9 94.5-7.3 21.8-4.8 45.7 6.9 65.5 17.5 30.4 52.6 46 86.8 38.7 15.2 17.2 37.2 27 60.1 26.8 35.1 0 66.2-22.5 76.9-55.9 22.5-4.6 41.9-18.7 53.3-38.7 17.6-30.3 13.5-68.5-9.9-94.5zm-120.3 168.1c-14 0-27.6-4.9-38.4-13.9.5-.3 1.3-.7 1.9-1.1l63.7-36.8c3.3-1.9 5.3-5.3 5.2-9.1v-89.8l26.9 15.6c.3.1.5.4.5.7v74.4c0 33.1-26.8 59.9-59.9 60zm-128.8-55c-7-12.1-9.6-26.4-7.2-40.2.5.3 1.3.8 1.9 1.1l63.7 36.8c3.2 1.9 7.2 1.9 10.5 0l77.8-44.9v31.1c0 .3-.1.6-.4.8l-64.4 37.2c-28.7 16.5-65.3 6.7-81.9-21.9zm-16.8-139.1c7-12.2 18-21.5 31.2-26.3v2.2 73.6c0 3.7 2 7.2 5.2 9.1l77.8 44.9-26.9 15.6c-.3.2-.6.2-.9 0l-64.4-37.2c-28.6-16.6-38.5-53.2-22-81.9zm221.3 51.5-77.8-44.9 26.9-15.5c.3-.2.6-.2.9 0l64.4 37.2c28.7 16.6 38.5 53.3 21.9 81.9-7 12.1-18 21.4-31.2 26.3v-75.8c0-3.7-2-7.2-5.2-9.1zm26.8-40.3c-.5-.3-1.3-.8-1.9-1.1l-63.7-36.8c-3.2-1.9-7.2-1.9-10.5 0l-77.8 44.9v-31.1c0-.3.1-.6.4-.8l64.4-37.2c28.7-16.5 65.4-6.7 81.9 22 7 12.1 9.5 26.3 7.1 40.1zm-168.5 55.4-26.9-15.6c-.3-.1-.5-.4-.5-.7v-74.4c0-33.1 26.9-60 60-59.9 14 0 27.6 4.9 38.3 13.9-.5.3-1.3.7-1.9 1.1l-63.7 36.8c-3.3 1.8-5.3 5.3-5.2 9.1v89.8s0 0 0 0zm14.6-31.5 34.7-20 34.7 20v40l-34.6 20-34.7-20v-40z"></path></svg></div></button></div>',10),{observeDom:Z,ui:{injectCss:F,Button:_,openModal:H,ModalRoot:U,ModalHeader:W,ModalBody:D,ModalFooter:J,ModalSizes:V,Text:w,TextBox:Q,ReactiveRoot:X,TextArea:Y,ButtonLooks:ee},plugin:{store:g},util:{getFiber:te}}=shelter,A=null,N=null,oe=()=>[...document.querySelectorAll('div[class^="message-"]')].map(e=>({username:e.querySelector("h3 > span > span")?.textContent,message:e.querySelector("div > div > div").textContent})).reduce((e,s)=>(s.username?e.push(s):e[e.length-1].message+=`
${s.message}`,e),[]),ne=()=>R.cloneNode(!0),se=t=>{let o=document.querySelector('[class*="slateContainer-"]');te(o).child.pendingProps.editor.insertText(t)};function le(){F(`
  .label-spacing {
    margin-bottom: .125rem;
  }
  .mb-2 {
    margin-bottom: .5rem;
  }
  
  .pr-2 {
    padding-right: .5rem;
  }`);let t=null,o=async()=>{let e=g.openaiKey?.startsWith("sk-"),s=g.model||"gpt-3.5-turbo",l=s,c="";t=H(b=>(0,r.createComponent)(U,{get size(){return V.SMALL},get children(){return[(0,r.createComponent)(W,{close:()=>t(),children:"Generate Response"}),(0,r.createComponent)(D,{get children(){let n=O.cloneNode(!0),i=n.firstChild,d=i.firstChild,m=i.nextSibling;return(0,a.insert)(d,(0,r.createComponent)(w,{children:"Model"})),(0,a.insert)(i,(0,r.createComponent)(Q,{placeholder:"gpt-3.5-turbo",value:s,onInput:v=>{l=v}}),null),(0,a.insert)(m,(0,r.createComponent)(w,{children:"Prompt"})),(0,a.insert)(n,(0,r.createComponent)(Y,{width:"100%",value:"",placeholder:"Prompt",onInput:v=>{c=v}}),null),n}}),(0,r.createComponent)(J,{get children(){let n=j.cloneNode(!0);return n.style.setProperty("display","flex"),(0,a.insert)(n,(0,r.createComponent)(_,{grow:!0,onClick:async()=>{t();let i=document.querySelector("[class^=nameTag] > div").textContent;g.model=l;let d=[...oe().slice(-7).map(p=>({role:"user",content:`${p.username}: ${p.message}`})),{role:"system",content:`generate a response as "${i}" according to the prompt: "${c}"`}],m=document.querySelector('[class*="slateContainer-"]'),{x:v,y:T}=m.getBoundingClientRect(),y=document.body.appendChild(ne());y.style.position="absolute",y.style.left=`${v}px`,y.style.top=`${T+12}px`,fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g.openaiKey}`},body:JSON.stringify({model:l,messages:d})}).then(p=>p.json()).then(p=>{let z=p.choices[0].message.content;se(z.replace(/^(?=.{0,49}:)([\w\s\-]+?[^ ]):/,"").trim()),y.remove()})},children:"Generate"}),null),(0,a.insert)(n,(0,r.createComponent)(_,{get look(){return ee.LINK},grow:!0,onClick:()=>{let i=window.prompt("Enter your OpenAI key");g.openaiKey=i,e=!0},get children(){return[e?"Change":"Set"," OpenAI key"]}}),null),n}})]}}))};N=Z('[class^="channelTextArea"] [class^="buttons"]',e=>{if(document.querySelector("#generate-button"))return;let s=e.lastChild.previousSibling;A=e.insertBefore((0,r.createComponent)(X,{get children(){let l=G.cloneNode(!0),c=l.firstChild,b=c.firstChild;return c.$$click=o,(0,S.effect)(n=>{let i=s.className,d=s.firstChild.className,m=s.firstChild.firstChild.className;return i!==n._v$&&(l.className=n._v$=i),d!==n._v$2&&(c.className=n._v$2=d),m!==n._v$3&&(b.className=n._v$3=m),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l}}),e.firstChild)})}function re(){N(),A?.remove()}(0,M.delegateEvents)(["click"]);return P(ie);})();
