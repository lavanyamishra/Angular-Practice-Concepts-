import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicePractice {
  arrList = [100];
  getArrList(val: number) {
    return this.arrList.push(val);
  }

  sendNewArrList(){
    return this.arrList;
  }
}
