import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';
import { MyRegistrationComponent } from './my-registration/my-registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ConsumeApiComponent } from './consume-api/consume-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { DependencyInjecComponent } from './dependency-injec/dependency-injec.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

const routes: Routes = [
  { path: 'register', component: MyRegistrationComponent },
  { path: 'home', component: MyBodyComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'form', component: TemplateFormComponent},
  { path: 'api', component: ConsumeApiComponent},
  { path: 'obsprom', component: ObservablePromiseComponent},
  { path: 'depenijc', component: DependencyInjecComponent},
  { path: 'reactive', component: MyReactiveFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyFootComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    MyRegistrationComponent,
    AboutUsComponent,
    TemplateFormComponent,
    ConsumeApiComponent,
    ObservablePromiseComponent,
    DependencyInjecComponent,
    MyReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
