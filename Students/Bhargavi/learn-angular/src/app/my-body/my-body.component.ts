import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './my-body.component.html',
    styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent {
 a = 25
 b = 40

 NewData: any;
 parentItem(data: any) {
   this.NewData = data;

 
}
}