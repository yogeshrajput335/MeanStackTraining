import { Component } from '@angular/core';
import { student } from '../models/students';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  student : student = {name:'',age:0,email:'',preference:''}
  preferences = ['Bulbasaur','Charmander','Squirtle']
  //age:number = 0;
  onSubmit(){
    console.log('The submitted user is',this.student.name);
  }
}
