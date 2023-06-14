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

const routes: Routes = [
  { path: 'home', component: MyBodyComponent },
  { path: 'news', component: MyNewsComponent },
  { path: 'about1', component: MyAboutComponent },
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
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
