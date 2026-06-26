import { Component, signal } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-signal-forms',
  imports: [],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
formModel = signal({
  name:'',
  email:'',
  age:''
})

userform = this.formModel;
}
