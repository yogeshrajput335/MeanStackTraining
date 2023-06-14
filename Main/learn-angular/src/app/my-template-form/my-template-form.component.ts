import { Component } from '@angular/core';
import { student } from '../models/student';

@Component({
  selector: 'app-my-template-form',
  templateUrl: './my-template-form.component.html',
  styleUrls: ['./my-template-form.component.css']
})
export class MyTemplateFormComponent {
  // name:string = '';
  // email:string = '';
  // preference:string = '';
  student : student = {name:'',age:0,email:'',preference:''}
  preferences = ['Btech','Mtech','Doctor']
  //age:number = 0;
  onSubmit(){
    console.log('Submit button clicked',this.student);
  }
}
