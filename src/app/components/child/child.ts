import { AfterViewInit, Component, ElementRef, EventEmitter, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Highlight } from '../highlight';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildInChild } from '../child-in-child/child-in-child';

@Component({
  selector: 'app-child',
  imports: [Highlight,CommonModule,FormsModule,ChildInChild],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  // inputs: ['pData']
  // outputs:['cDataEvent']
})
export class Child {
//  pData:any

//child passing data to parent
// cDataEvent = new EventEmitter()
// sendData(value:any){
//   this.cDataEvent.emit(value);
// }



//interpolation

// age :any =10;
// age : any=  {name:'lava' , age: 100}
// increageAge(){
//   this.age = this.age +1;
// }

// colSpanValue = 3;


// fontSize = 50
// addCssStyles(){
//   let cssStyles = {'background-color':'blue','font-size.px':'70'}
//   return cssStyles;
// }

// classToApply = 'FontWeight FontSize'
// addCssClasses(){
//   return 'FontWeight FontSize'
// }


// name = 'hello'

// currentValue = true;
// onClick(){
//   this.currentValue = !this.currentValue;
// }

// message = 'please enter your message here';

// onClickEvent(){
//   console.log('I am clicked');
// }
// onKeyDown(){
//   console.log('key down')
// }
// onKeyUp(){
//   console.log('key Up')
// }

// setInputValue(val: string){
// this.message = val;
// }


dataExists = true

//  // ViewChild and ViewChildren
// inputData = ''
// @ViewChild('inputBox') inputBox!:ElementRef 

// @ViewChild(ChildInChild) ChildInChildInstance!: ChildInChild

// @ViewChildren('btn') Button! :QueryList<ElementRef>

// readValue(){
//   this.inputData = this.inputBox.nativeElement.value;
// }
// ngAfterViewInit(){
//   console.log(this.ChildInChildInstance.headings);
//   console.log(this.Button.length);
  
// }


}

