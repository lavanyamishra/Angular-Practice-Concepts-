import { Component, inject } from '@angular/core';
import { ServicePractice } from '../service-practice';
@Component({
  selector: 'app-use-service',
  imports: [],
  templateUrl: './use-service.html',
  styleUrl: './use-service.scss',
})
export class UseService {
  private servicePractice = inject(ServicePractice);
  userData: number[] = [];
  sendData(val: any) {
    this.servicePractice.getArrList(val);
    this.userData = this.servicePractice.sendNewArrList();
  }
  
}
