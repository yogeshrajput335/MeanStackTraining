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
import {FormsModule} from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ConsumeApiComponent } from './consume-api/consume-api.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'register', component: MyRegistrationComponent },
  { path: 'home', component: MyBodyComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'form', component: TemplateFormComponent},
  { path: 'api', component: ConsumeApiComponent}
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
    ConsumeApiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
