import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-rective-form',
  templateUrl: './my-rective-form.component.html',
  styleUrls: ['./my-rective-form.component.css']
})
export class MyRectiveFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
  OnFormSave(form: FormGroup){
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Method Message', form.value.message);
    console.log('Class Message', this.myForm.value);
  }
}
