import { Component} from '@angular/core';
import { student } from '../models/student';


@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent {
  student : student = {name:'',age:0,email:'',preference:''}
  preferences = ['Btech','Mtech','Doctor']
  onSubmit(){
    console.log('Submit button clicked',this.student);
  }
}
