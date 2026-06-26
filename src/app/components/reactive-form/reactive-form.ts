import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
regForm:FormGroup;

// constructor(){
//   this.regForm = new FormGroup({
//     id: new FormControl(''),
//     fname: new FormControl(''),
//     lname: new FormControl(''),
//     email: new FormControl(''),
//     mobileno: new FormControl(''),
//   })
// new keyword can be avoided


constructor( private _fb:FormBuilder){
  this.regForm = this._fb.group({
    id: [''],
    fname: ['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8)])],
    lname: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    mobileno: ['',Validators.required],
  })
}


register(){
  console.log(this.regForm.value);
  console.log(this.regForm.valid);
  console.log(this.regForm.get('fname')?.value);
  console.log(this.regForm.get('email')?.value);
  
}

ResetFn(){
  //similar to reset in html complete reset
  // this.regForm.reset();

  //partial reset
  this.regForm.reset({
    fname:this.regForm.get('fname')?.value
  })
}

fillData(){
  // this.regForm.setValue({
  //   id:101,
  //   fname:'lava',
  //   lname:'mishra',
  //   email:'l@g',
  //   mobileno:'1234'
  // })
    this.regForm.patchValue({
    // id:101,
    fname:'lava',
    lname:'mishra',
    email:'l@g',
    mobileno:'1234'
  })
}
}
