import {Component} from '@angular/core';

@Component({
   selector :'data-binding-app',
 templateUrl:'./databinding1.component.html'
})
export class DataBindingComponent
{
  name : string ="Ajay";
  firstName: string ="Kapil";
  lastName : string ="Kumar";
  image: string="/assets/images/splash.jpg";
  status : boolean = true;
  status1 = "online";
  status2="offline";
  disabled : boolean=false;

 hello()
{
  console.log("Hello .... ")
} 

textboxclicked(event : any)
{
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  console.log("text box clicked")
}
keyPressed(event:any)
{
  // console.log(event);
  // console.log(event.keyCode===13)
  if(event.keyCode===13)
  {
   console.log("Key has been pressed")
   console.log(event.target.value);
}}

keyPressed1(event:any)
{
  
   
   console.log("Key has been pressed")
   console.log(event.target.value);
}
}

