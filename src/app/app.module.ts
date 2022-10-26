import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthCompoment } from './fourth/fourth-component';
import { FifthComponent } from './fifth/fifth.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SevComponentComponent } from './sev-component.component';
import { DataBindingComponent } from './databinding1/databinding1.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

import { FormsModule } from '@angular/forms';
import { ClassBindingComponent } from './class-binding/class-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondComponent,
    ThirdComponent,
    FourthCompoment,
    FifthComponent,
    MyComponentComponent,
    SevComponentComponent,
    DataBindingComponent,
    AddComponentComponent,
    TwoWayDataBindingComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
