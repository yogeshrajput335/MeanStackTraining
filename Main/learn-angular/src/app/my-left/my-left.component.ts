import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-left',
    templateUrl: './my-left.component.html',
    styleUrls: ['./my-left.component.css']
})
export class MyLeftComponent {
    @Input() left1:number = 0;
     myDate = new Date()
}