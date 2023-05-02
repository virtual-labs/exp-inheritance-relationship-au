"use strict";(self["webpackChunkexp_6"]=self["webpackChunkexp_6"]||[]).push([[221],{3221:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(3396),a=n(9242);const s=e=>((0,o.dD)("data-v-e83e195e"),e=e(),(0,o.Cn)(),e),r=s((()=>(0,o._)("header",{style:{padding:"20px"}},[(0,o._)("h5",null,"HELP"),(0,o._)("h1",null,"Class Cast Exception")],-1))),l=s((()=>(0,o._)("div",{id:"snackbar"},"Some text some message..",-1))),c={class:"flex-row"},i=s((()=>(0,o._)("div",{style:{width:"50%"}},[(0,o._)("h2",null,"Theory"),(0,o._)("div",{class:"outbox"},[(0,o._)("pre",null,'1.  Object obj = "Hello";\n2.  Integer num = (Integer) obj; \n            '),(0,o._)("span",{id:"comment"},"//2nd line will throw a ClassCastException since we are trying to cast an object of type String to an Integer. "),(0,o._)("br")]),(0,o._)("div",{class:"content"},[(0,o._)("p",null,"ClassCastException is a runtime exception that occurs when you try to cast an object to a type that it is not compatible with. To avoid this exception, you should always check the type of the object before casting it to another type. ")])],-1))),u={style:{width:"50%"}},d=s((()=>(0,o._)("h2",null,"Try it yourself",-1))),h={class:"outbox"},p=s((()=>(0,o._)("span",{id:"comment"},"//In which line excption occurs (eg:1 or 2)",-1))),m={id:"buttons",class:"relative"},_={key:0,class:"navitem"};function b(e,t,n,s,b,y){return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,l,(0,o._)("main",null,[(0,o._)("div",c,[i,(0,o._)("div",u,[d,(0,o._)("div",h,[(0,o._)("pre",null,[(0,o.Uk)('1.    Object obj = "Hello";\n2.    if (obj instanceof Integer) {\n3.        Integer num = (Integer) obj; \n4.    } else {\n5.        System.out.println("obj is not an instance of Integer");\n6.    }\n        \n      '),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.one=t)},null,512),[[a.nr,e.one]]),(0,o.Uk)("\n        "),p,(0,o.Uk)("\n      ")])]),(0,o._)("button",{class:"button-9",onClick:t[1]||(t[1]=e=>y.validate_one())},"Validate")])]),(0,o._)("footer",null,[(0,o._)("div",m,[1===e.currentStep?((0,o.wg)(),(0,o.iD)("button",_,"Next")):(0,o.kq)("",!0)])])])],64)}var y={data(){return{}},methods:{incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_one(){"3"==this.one.trim()?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},g=n(89);const v=(0,g.Z)(y,[["render",b],["__scopeId","data-v-e83e195e"]]);var w=v}}]);
//# sourceMappingURL=221.1fc93dca.js.map