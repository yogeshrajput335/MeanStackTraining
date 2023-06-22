import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],

  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent {
  title = 'View Encapsulation in Angular';
}
