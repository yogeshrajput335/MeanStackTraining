import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MyBodyComponent } from "./my-body/my-body.component";
import { MyNewsComponent } from "./my-news/my-news.component";
import { MyAboutComponent } from "./my-about/my-about.component";
import { MyTemplateFormComponent } from "./my-template-form/my-template-form.component";
import { MyRectiveFormComponent } from "./my-rective-form/my-rective-form.component";
import { HttpConsumeApiComponent } from "./http-consume-api/http-consume-api.component";
import { ObservablePromiseComponent } from "./observable-promise/observable-promise.component";
import { DependancyInjectionComponent } from "./dependancy-injection/dependancy-injection.component";
import { SubjectExpainComponent } from "./subject-expain/subject-expain.component";
import { ViewEncapsulationComponent } from "./view-encapsulation/view-encapsulation.component";
import { JokeListComponent } from "./lifecycle/joke-list/joke-list.component";

const routes: Routes = [
    { path: 'home', component: MyBodyComponent },
    { path: 'news', component: MyNewsComponent },
    { path: 'about1', component: MyAboutComponent },
    { path: 'template-form', component: MyTemplateFormComponent },
    { path: 'reactive-form', component: MyRectiveFormComponent },
    { path: 'use-public-api', component: HttpConsumeApiComponent },
    { path: 'obser-promise', component: ObservablePromiseComponent },
    { path: 'dep-ins', component: DependancyInjectionComponent },
    { path: 'app-subject-expain', component: SubjectExpainComponent },
    { path: 'app-view-encapsulation', component: ViewEncapsulationComponent },
    { path: 'joke-list', component: JokeListComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}