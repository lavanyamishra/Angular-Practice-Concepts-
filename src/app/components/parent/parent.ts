import { Component, ViewEncapsulation } from '@angular/core';
import { Child } from '../child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child,CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',

})
export class Parent {
  //child component data
//   cData:any;
// getData(event:any){
// this.cData = event;
// }

// age = 60;


// employee = [
//   {id:1,name:'lavanya',salary:5},
//   {id:2,name:'lava',salary:6},
//   {id:3,name:'lavi',salary:7},
//   {id:4,name:'love',salary:8}
// ]
// employee:any;

Country = 'Indiaa'

}
