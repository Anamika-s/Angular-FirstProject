import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  num1: number = 10;
  num2: number = 20;
  sum: number =0;
  add()
  {
     
    this.sum = this.num1+ this.num2;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
