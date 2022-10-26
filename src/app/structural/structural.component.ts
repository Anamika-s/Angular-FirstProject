import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  isFlag: boolean = false;
  day:number=5;
  employees: any[] = [];
//     {  
//         code: 'emp101', name: 'karthik', gender: 'Male',  
//         annualSalary: 5500, dateOfBirth: '25/6/1988'  
//     },  
//     {  
//         code: 'emp102', name: 'sachin', gender: 'Male',  
//         annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
//     },  
//     {  
//         code: 'emp103', name: 'rahul', gender: 'Male',  
//         annualSalary: 5900, dateOfBirth: '12/8/1979'  
//     },  
//     {  
//         code: 'emp104', name: 'mary', gender: 'Female',  
//         annualSalary: 6500.826, dateOfBirth: '14/10/1980'  
//     }
// ];  


  constructor() { }

  ngOnInit(): void {
  }

}
