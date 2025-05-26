import{_ as s,o as l,c as n,a as e,f as i,h as r,p as c,i as d}from"./index-e448f0f9.js";const f={},a=t=>(c("data-v-f71e0a4d"),t=t(),d(),t),p=a(()=>e("div",{style:{"padding-left":"2%"}},[e("h1",null,"Understanding the Output"),e("p",null,"The TestDriver code on the left end creates the required Customer and Exec ojbects and performs a reservation. Observe the output on the right end.")],-1)),u={class:"flex"},v=a(()=>e("div",{class:"row"},[e("div",{class:"codebox"},[e("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),e("pre",null,`...

import java.util.Scanner;
import java.util.Date;


public class TestDriver {

    public static void main(String[] args) {
        Customer cobj= new Customer("ABC", "abc@gmail.com");
        cobj.setCity("Coimbatore");
        Clerk clobj = new Clerk("PQR","pqr@gmail.com");
        Vehicle vobj=new Vehicle(1234);
        Reservation robj= new Reservation(cobj,vobj);
        robj.setBookingDate(new Date());
        robj.getVehicleObj().updateKeyStatus();
    }

}
            `)])],-1)),m={class:"outbox"},h=r('<p data-v-f71e0a4d>OUTPUT</p><p style="color:#fff;" data-v-f71e0a4d>Customer list: </p><p style="color:#fff;" data-v-f71e0a4d>[ID: 1, Name: ABC, Email: abc@gmail.com, Phone: 0, City: Coimbatore]</p><p style="color:#fff;" data-v-f71e0a4d>[ID: 2, Name: DEF, Email: null, Phone: 0, City: Coimbatore]</p><p style="color:#fff;" data-v-f71e0a4d>[ID: 3, Name: GHI, Email: ghi@gmail.com, Phone: 0, City: Chennai]</p><br data-v-f71e0a4d><p style="color:#fff;" data-v-f71e0a4d>Exec list: </p><p style="color:#fff;" data-v-f71e0a4d>[ID: 1, Name: EFG, Email: efg@gmail.com, Phone: 0, City: Coimbatore ]</p><br data-v-f71e0a4d><p style="color:#fff;" data-v-f71e0a4d>Vehicle list: </p><p style="color:#fff;" data-v-f71e0a4d>[Reg Number: 1234, Key Status: available ]</p><p style="color:#fff;" data-v-f71e0a4d>Reservation list: </p><p style="color:#fff;" data-v-f71e0a4d>[ID: 1, Customer Object: [ID: 1, Name: ABC, Email:abc@gmail.com, Phone: 0, City: Coimbatore ], Vehicle Object: [Reg Number: 1234, Key Status: available ], Contract Status: Reservation not released, Booking Date: Tue Mar 01 00:00:00 IST 2022, Release Date: null ] </p><p style="color:#fff;" data-v-f71e0a4d>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-f71e0a4d>Reservation released</p><p style="color:#fff;" data-v-f71e0a4d>Vehicle key handedover</p>',16),b=a(()=>e("br",null,null,-1)),_=a(()=>e("p",{style:{color:"#fff"}},"Process finished with exit code 0",-1)),y=a(()=>e("div",{style:{height:"100px","background-color":"#202020"}},null,-1));function C(t,o){return l(),n("main",null,[p,e("div",u,[v,e("div",m,[h,i(),b,_,y,e("button",{class:"button-9",id:"btn1",onClick:o[0]||(o[0]=g=>t.$router.push("/congratulations"))},"Continue")])])])}const D=s(f,[["render",C],["__scopeId","data-v-f71e0a4d"]]);export{D as default};
