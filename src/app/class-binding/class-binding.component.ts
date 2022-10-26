import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  // template: `<div class="class1 class2">  Hello {{name}}  </div> <br/>
  // <span [innerHTML] ="name"> </span>`,
  template: ` <h1 [style.background-color]="color"> Student Details 1111 </h1>
  <div class="textCenter" [class.textRight]=false> 1000000 </div>
  <div [ngClass]="'textLeft textRight'"> 200000 </div> 

  <div [ngClass]="multiClasses"> 200000 </div> 
  <button [style.border]="'5px solid yellow'">Save</button>
  <div [style.background-color]="myProp?'red':'blue'"> 100 </div> 
  <div [style.background-color]="myProp?getYellowColor():getRedColor()"> 200 </div> 
  <table border="1" width="100%">
  <thead>
    <tr>
    <th [attr.colspan]="colspan" [ngClass]="'txtCenter txtRight textLeft'"> Student Details </th>  
    // <th [attr.colspan]="colspan" class="txtCenter" [class.txtRight] ='true'> Student Details </th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> First Name </td>
      <td>{{firstName}}</td>
      </tr>
<tr>
<td> Last Name </td>
<td>{{lastName}}</td>
  
</tr>
<tr>
<td> Gender </td>
<td>{{gender}}</td>
  
</tr>
<tr>
      <td> Qualification </td>
      <td>{{qualification}}</td>
  </tr>
  </tbody>
</table>
<p [style.color]="getYellowColor()" 
   [style.font-size.px]="'20'"      
   [style.background-color]="myProp? 'red': 'blue'">
   paragraph with multiple styles
</p>
<p [ngStyle] ="{
  'color':'pink',
  'border':'1px  solid green'
}"> Para with ngStyle Directive </p>

<h1 [ngStyle]="myStyle"> HELLOOOOOO </h1>
<h1 [ngStyle]="myProp? myStyle: myStyle1"> HELLOOOOOO </h1>

`,
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

 colspan: number=2;
color="red";
myProp : boolean = false;
  name : string ="Sonu";
  firstName : string ="Deepak";
  lastName: string =  "Sood";
  gender : string ="Male";
  qualification : string ="B.Tech";

  myStyle={
  'color':'pink',
  'border':'1px  solid green',
  'background-color':'red'
  }

  myStyle1={
    'color':'pink',
    'border':'1px  solid green',
    'background-color':'green'
    }

    multiClasses =
    {
      textLeft : true,
      textRight: true,
      class1:false,
      class2:true
    }
  constructor() { }
  getYellowColor() {
    return 'yellow';
  }
  getRedColor() {
    return 'red';
  }
  ngOnInit(): void {
  }

}
