import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';
import {MyBodyComponent} from './my-body/my-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyContactinfoComponent } from './my-contactinfo/my-contactinfo.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { APItemplateComponent } from './apitemplate/apitemplate.component';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { DependencyInjecComponent } from './dependency-injec/dependency-injec.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectComponent } from './subject/subject.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { EncapsulationNoneComponent } from './encapsulation-none/encapsulation-none.component';
import { JokeComponent } from './life-cycle/joke/joke.component';
import { JokeListComponent } from './life-cycle/joke-list/joke-list.component';


  const routes: Routes = [
    { path: 'home', component: MyBodyComponent },
    { path: 'contactus', component: MyContactinfoComponent },
    { path: 'Formtemplate', component: FormtemplateComponent },
    { path: 'apitemplate', component: APItemplateComponent },
    { path: 'obs', component: ObservablesComponent },
    { path: 'depenijc', component: DependencyInjecComponent},
    { path: 'reactiveform', component: ReactiveFormComponent },
    { path: 'subject', component: SubjectComponent },
    { path: 'encapsulation', component: ViewEncapsulationComponent },
    { path: 'jokelist', component: JokeListComponent },





  ];


@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyFootComponent,
    MyLeftComponent,
    MyRightComponent,
    MyBodyComponent,
    MyContactinfoComponent,
    MyHomeComponent,
    APItemplateComponent,
    FormtemplateComponent,
    ObservablesComponent,
    DependencyInjecComponent,
    ReactiveFormComponent,
    SubjectComponent,
    ViewEncapsulationComponent,
    EncapsulationNoneComponent,
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
