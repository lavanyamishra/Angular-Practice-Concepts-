import { JsonPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe, FormsModule],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
})
export class Signal {

  //input signal
  //normal    @input name:string = '';
  //signal    name = input<string>('')

  //output signal
  //normal   @Output() onClose = new EventEmitter<string>();
  //signal   onClose = output<string>()


  //viewChild
  //signal  viewChild<ElementRef<HTMLInputElement>('citynameText')    citynametext is template reference variable
  courseName = signal('Angular');

  courseDuration = signal<string>('2 days');

  cityList = signal<string[]>(['Mumbai', 'delhi']);

  studentObj = signal<any>({ name: 'Abc', city: 'bgs' });

  cityName = '';

  constructor() {
    effect(()=>{
      console.log('effect called')
    })
    const course_name = this.courseName();
  }

  changeCourseName() {
    this.courseName.set('React');
  }

  changeCity() {
    this.cityList.set(['Bihar']);
  }

  //set pura completely new value set krdeta h existing remove krdeta hai
  //update new value bss add krta hai existing remove ni krta //object and array me use hota hai mostly

  addCity() {
    this.cityList.update((oldCity) => [...oldCity, this.cityName]);
  }

  //computed signal
  fName = signal('');
  mName = signal('');
  lName = signal('');

  fullName = computed(() => this.fName() + ' ' + this.mName() + ' ' + this.lName());

  updateFName(event: any) {
    this.fName.set(event.target.value);
  }
  updateMName(event: any) {
    this.mName.set(event.target.value);
  }
  updateLName(event: any) {
    this.lName.set(event.target.value);
  }



}
