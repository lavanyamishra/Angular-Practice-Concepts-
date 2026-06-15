import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomePipe } from '../welcome-pipe';
import { LimitWordPipe } from '../limit-word-pipe';

@Component({
  selector: 'app-use-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DecimalPipe,PercentPipe,CurrencyPipe,DatePipe,WelcomePipe,LimitWordPipe],
  templateUrl: './use-pipes.html',
  styleUrl: './use-pipes.scss',
})
export class UsePipes {
myName = 'Lavanya mishra'
title = 'I am learning pipes.'
arr=['10','20','30','40','50'];
company = {
  name:'new company',
  city:'gurgaon',
  state:'UP'
}
currentDate = new Date;
str = 'Limit Word Custom Pipes in Angular 20 Custom Pipes in Angular'
}
