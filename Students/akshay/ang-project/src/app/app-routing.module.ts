import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { MyBodyComponent } from './my-body/my-body.component';
import { Day2Component } from './day2/day2.component';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { TemplatesComponent } from './templates/templates.component';
import { ApiComponent } from './api/api.component';
import { ObservableComponent } from './observable/observable.component';
import { InjectionComponent } from './injection/injection.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectExplainComponent } from './subject-explain/subject-explain.component';
import { ViewEncapsulationComponent } from "./view-encapsulation/view-encapsulation.component";
import { JokeListComponent } from "./lifecycle/joke-list/joke-list.component";

const routes: Routes = [
    { path: 'home', component: MyBodyComponent },
    { path: 'day2', component: Day2Component },
    { path: 'about-angular', component: AboutAngularComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'use-public-api', component: ApiComponent },
    { path: 'observable', component: ObservableComponent  },
    { path: 'dep-ins', component: InjectionComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'app-subject-explain', component: SubjectExplainComponent },
    { path: 'app-view-encapsulation', component: ViewEncapsulationComponent },
    { path: 'joke-list', component: JokeListComponent },
  
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}