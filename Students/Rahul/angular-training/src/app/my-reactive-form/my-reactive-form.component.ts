import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent {

  myForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      age: ['', [Validators.required]]
    });
  }

  OnFormSave(form: FormGroup){
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Method Message', form.value.message);
    console.log('Class Message', this.myForm.value);
    console.log('Age', form.value.age)
  }

}
