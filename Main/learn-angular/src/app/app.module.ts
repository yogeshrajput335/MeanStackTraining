import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';
import { FormsModule } from '@angular/forms';
import { MyNewsComponent } from './my-news/my-news.component';
import { RouterModule, Routes } from '@angular/router';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyTemplateFormComponent } from './my-template-form/my-template-form.component';
import { HttpConsumeApiComponent } from './http-consume-api/http-consume-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { DependancyInjectionComponent } from './dependancy-injection/dependancy-injection.component';
import { HttpCall1Service } from './services/call-http1.service';
import { CustomPipe1Pipe } from './pipes/custom-pipe1.pipe';
import { CustomPipe2Pipe } from './pipes/custom-pipe2.pipe';

const routes: Routes = [
  { path: 'home', component: MyBodyComponent },
  { path: 'news', component: MyNewsComponent },
  { path: 'about1', component: MyAboutComponent },
  { path: 'template-form', component: MyTemplateFormComponent },
  { path: 'use-public-api', component: HttpConsumeApiComponent },
  { path: 'obser-promise', component: ObservablePromiseComponent },
  { path: 'dep-ins', component: DependancyInjectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyFootComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    MyNewsComponent,
    MyAboutComponent,
    MyTemplateFormComponent,
    HttpConsumeApiComponent,
    ObservablePromiseComponent,
    DependancyInjectionComponent,
    CustomPipe1Pipe,
    CustomPipe2Pipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpCall1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
