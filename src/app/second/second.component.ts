
// Components are the main building block of Angular Application
// BY def , a component is composed of 4 files 
// html , css , spec.ts , ts
// out of these .ts is mandatory

// Component is a class but with a decorarator which differentiates it from a normal class4
import { Component } from "@angular/core";

@Component(
  {
    selector :'second-app',
    templateUrl :'./second.component.html',
    styleUrls:['./second.component.css']
  }
)
export class SecondComponent 
{
   title : string ="Seocnd Component";
}



