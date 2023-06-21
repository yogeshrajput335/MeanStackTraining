// https://www.tektutorialshub.com/angular/angular-view-encapsulation/
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  //encapsulation: ViewEncapsulation.Emulated //This is default
  //encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent {

  title = 'View Encapsulation in Angular';

}
