import{_ as p,o as d,c,a as e,f as o,g as i,v as l,j as u,F as m,h,p as _,i as v}from"./index-e448f0f9.js";const b={data(){return{}},methods:{incorrect(t){var n=document.getElementById("snackbar");n.innerHTML=t,n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="interface"&&this.two.trim()=="implements"&&this.three.trim()=="showRoom"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},s=t=>(_("data-v-a7b2c03d"),t=t(),v(),t),f=s(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Interface")],-1)),y=s(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),g={class:"flex-row"},w=h(`<div style="width:50%;" data-v-a7b2c03d><h2 data-v-a7b2c03d>Theory</h2><div class="outbox" data-v-a7b2c03d><pre data-v-a7b2c03d><span id="comment" data-v-a7b2c03d>//an interface structure</span>
public interface MyInterface {
  public void doSomething();
  public int getValue();
  }

public class MyClass implements MyInterface {
  public void doSomething() {
   
  }
  public int getValue() {
      
  }
}
<span id="comment" data-v-a7b2c03d>//Any class that implements this interface must provide implementations
   for both methods.</span>

                </pre></div><div class="content" data-v-a7b2c03d><p data-v-a7b2c03d> An interface is a blueprint of a class that specifies a set of methods and properties that a class must implement. </p></div></div>`,1),k={style:{width:"50%"}},I=s(()=>e("h2",null,"Try it yourself",-1)),N={class:"outbox"},x=s(()=>e("br",null,null,-1)),C=s(()=>e("br",null,null,-1)),V=s(()=>e("span",{id:"comment"},"//Initialize an 'interface' Bike ",-1)),S=s(()=>e("p",null,"{",-1)),T=s(()=>e("p",null,"void display_name();",-1)),B=s(()=>e("p",null,"}",-1)),M=s(()=>e("span",{id:"comment"},"//Create a class 'showRoom' that implements the interface.",-1)),E=s(()=>e("p",null,"public void display_name() { ",-1)),$=s(()=>e("p",null,"System.out.println(name); }",-1)),H=s(()=>e("p",null,"}",-1)),L=s(()=>e("br",null,null,-1)),R={id:"buttons",class:"relative"},U={key:0,class:"navitem"};function A(t,n,F,j,z,r){return d(),c(m,null,[f,y,e("main",null,[e("div",g,[w,e("div",k,[I,e("div",N,[x,o(),C,V,e("p",null,[o("public "),i(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=a=>t.one=a)},null,512),[[l,t.one]]),o(" Bike")]),S,T,B,M,e("p",null,[o(" class showRoom "),i(e("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=a=>t.two=a)},null,512),[[l,t.two]]),o(),i(e("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=a=>t.three=a)},null,512),[[l,t.three]]),o(" { ")]),E,$,H,L]),e("button",{class:"button-9",onClick:n[3]||(n[3]=a=>r.validate_one())},"Validate")])]),e("footer",null,[e("div",R,[t.currentStep===1?(d(),c("button",U,"Next")):u("",!0)])])])],64)}const P=p(b,[["render",A],["__scopeId","data-v-a7b2c03d"]]);export{P as default};
