import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';
import { Day2Component } from './day2/day2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { TemplatesComponent } from './templates/templates.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { InjectionComponent } from './injection/injection.component';
import { HttpCallService2 } from './services/call-http-services2';
import { customPipe1 } from './pipes/custom-pipe';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyFootComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    Day2Component,
    AboutAngularComponent,
    TemplatesComponent,
    ApiComponent,
    ObservableComponent,
    InjectionComponent,
    customPipe1,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
       
    
  ],
  providers: [HttpCallService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
