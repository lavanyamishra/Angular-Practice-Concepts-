import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-easy',
  imports: [],
  templateUrl: './signal-easy.html',
  styleUrl: './signal-easy.scss',
})
export class SignalEasy {
num1 = signal(10);
num2 = signal(20);

total = computed(()=>this.num1()+this.num2())
setvalue(){
console.log(this.total())
this.num1.set(100)
console.log(this.total())
}



price = signal(100);
quantity = signal(2);
totalPrice = computed(()=> this.price()*this.quantity());

addQuantity(){
  // this.quantity.set(this.quantity()+1);
  this.quantity.update(qut => qut+1);
}


name = signal('lava');
showYellow = false;
constructor(){
console.log(this.name())

effect(()=>{
  console.log(this.name())
  if(this.name() === 'hi lava'){
  this.showYellow = true;
  }
})
}

changeName(){
  this.name.set('hi lava')
}

}
