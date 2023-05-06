"use strict";(self["webpackChunkexp_6"]=self["webpackChunkexp_6"]||[]).push([[645],{2645:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(3396),l=n(9242);const s=e=>((0,a.dD)("data-v-80b90bac"),e=e(),(0,a.Cn)(),e),i=s((()=>(0,a._)("header",{style:{padding:"20px"}},[(0,a._)("h5",null,"HELP"),(0,a._)("h1",null,"Interface")],-1))),o=s((()=>(0,a._)("div",{id:"snackbar"},"Some text some message..",-1))),c={class:"flex-row"},r=(0,a.uE)('<div style="width:50%;" data-v-80b90bac><h2 data-v-80b90bac>Theory</h2><div class="outbox" data-v-80b90bac><pre data-v-80b90bac><span id="comment" data-v-80b90bac>//an interface structure</span>\npublic interface MyInterface {\n  public void doSomething();\n  public int getValue();\n  }\n\npublic class MyClass implements MyInterface {\n  public void doSomething() {\n   \n  }\n  public int getValue() {\n      \n  }\n}\n<span id="comment" data-v-80b90bac>//Any class that implements this interface must provide implementations\n   for both methods.</span>\n\n                </pre></div><div class="content" data-v-80b90bac><p data-v-80b90bac> An interface is a blueprint of a class that specifies a set of methods and properties that a class must implement. </p></div></div>',1),u={style:{width:"50%"}},d=s((()=>(0,a._)("h2",null,"Try it yourself",-1))),p={class:"outbox"},m=s((()=>(0,a._)("br",null,null,-1))),b=s((()=>(0,a._)("br",null,null,-1))),h=s((()=>(0,a._)("span",{id:"comment"},"//Initialize an 'interface' Bike ",-1))),_=s((()=>(0,a._)("p",null,"{",-1))),v=s((()=>(0,a._)("p",null,"void display_name();",-1))),y=s((()=>(0,a._)("p",null,"}",-1))),f=s((()=>(0,a._)("span",{id:"comment"},"//Create a class 'showRoom' that implements the interface.",-1))),k=s((()=>(0,a._)("p",null,"public void display_name() { ",-1))),w=s((()=>(0,a._)("p",null,"System.out.println(name); }",-1))),g=s((()=>(0,a._)("p",null,"}",-1))),x=s((()=>(0,a._)("br",null,null,-1))),C={id:"buttons",class:"relative"},U={key:0,class:"navitem"};function I(e,t,n,s,I,N){return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,o,(0,a._)("main",null,[(0,a._)("div",c,[r,(0,a._)("div",u,[d,(0,a._)("div",p,[m,(0,a.Uk)(),b,h,(0,a._)("p",null,[(0,a.Uk)("public "),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.one=t)},null,512),[[l.nr,e.one]]),(0,a.Uk)(" Bike")]),_,v,y,f,(0,a._)("p",null,[(0,a.Uk)(" class showRoom "),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.two=t)},null,512),[[l.nr,e.two]]),(0,a.Uk)(),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.three=t)},null,512),[[l.nr,e.three]]),(0,a.Uk)(" { ")]),k,w,g,x]),(0,a._)("button",{class:"button-9",onClick:t[3]||(t[3]=e=>N.validate_one())},"Validate")])]),(0,a._)("footer",null,[(0,a._)("div",C,[1===e.currentStep?((0,a.wg)(),(0,a.iD)("button",U,"Next")):(0,a.kq)("",!0)])])])],64)}var N={data(){return{}},methods:{incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_one(){"interface"==this.one.trim()&&"implements"==this.two.trim()&&"showRoom"==this.three.trim()?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},T=n(89);const V=(0,T.Z)(N,[["render",I],["__scopeId","data-v-80b90bac"]]);var M=V}}]);
//# sourceMappingURL=645.57d6c495.js.map