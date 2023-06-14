import { Component } from '@angular/core';
import { student } from '../models/student';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent {
  //name:string = '';
  //email:string = '';
  //preference:string = '';
  student: student = {name: '',age:0,email: '',preference: ''}
  preferences = ['angular','MongoDB','API']
  //age:number = 0;
  onSubmit(){
    console.log('Submit button clicked',this.student);
  }

}
