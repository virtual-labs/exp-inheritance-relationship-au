import{_ as u,o as c,c as i,a as t,f as o,g as l,v as d,j as p,F as m,h as b,p as h,i as _}from"./index-e448f0f9.js";const v={data(){return{}},methods:{incorrect(e){var a=document.getElementById("snackbar");a.innerHTML=e,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="abstract"&&this.two.trim()=="abstract"&&this.three.trim()=="sunroof"&&this.four.trim()=="Yamaha"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},s=e=>(h("data-v-cb59de46"),e=e(),_(),e),y=s(()=>t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Abstract")],-1)),f=s(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),g={class:"flex-row"},k=b(`<div style="width:50%;" data-v-cb59de46><h2 data-v-cb59de46>Theory</h2><div class="outbox" data-v-cb59de46><pre data-v-cb59de46>    <span id="comment" data-v-cb59de46>//an abstract class </span>
  public abstract class Animal {

  public abstract void makeSound();
  
  }
  <span id="comment" data-v-cb59de46>//concrete class that extends <br data-v-cb59de46> Animal and implements its abstract method </span>
  public class Dog extends Animal {

  public void makeSound() {

      System.out.println(&quot;Wolf&quot;);
    
    }
  }

                </pre></div><div class="content" data-v-cb59de46><p data-v-cb59de46>An abstract class is a class that cannot be instantiated i.e., cannot create an object of the abstract class directly. It provides a blueprint or template for other classes to extend and implement its abstract methods. </p></div></div>`,1),w={style:{width:"50%"}},x=s(()=>t("h2",null,"Try it yourself",-1)),N={class:"outbox"},I=s(()=>t("br",null,null,-1)),S=s(()=>t("br",null,null,-1)),T=s(()=>t("span",{id:"comment"},"//Initialize an 'abstract' class Bike with an 'abstract' method 'sunroof'",-1)),C=s(()=>t("p",null,"{",-1)),V=s(()=>t("p",null,"void horn();",-1)),B=s(()=>t("p",null,"}",-1)),A=s(()=>t("br",null,null,-1)),E={id:"buttons",class:"relative"},$={key:0,class:"navitem"};function H(e,a,L,M,U,r){return c(),i(m,null,[y,f,t("main",null,[t("div",g,[k,t("div",w,[x,t("div",N,[I,o(),S,T,t("p",null,[l(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>e.one=n)},null,512),[[d,e.one]]),o("class Bike")]),C,t("p",null,[l(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>e.two=n)},null,512),[[d,e.two]]),o(" void "),l(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>e.three=n)},null,512),[[d,e.three]]),o(";")]),V,B,A]),t("button",{class:"button-9",onClick:a[3]||(a[3]=n=>r.validate_one())},"Validate")])]),t("footer",null,[t("div",E,[e.currentStep===1?(c(),i("button",$,"Next")):p("",!0)])])])],64)}const q=u(v,[["render",H],["__scopeId","data-v-cb59de46"]]);export{q as default};
