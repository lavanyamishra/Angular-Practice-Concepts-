import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: '.user',
  // selector: '[user]',
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  // template: `<h1>hiiiiiii</h1>
  //   <p>
  //     lorem dipsum nguyfgbehcbehfvb ewuhjfvc ewhjv cjhwe cjhewmn cwdhjsf nchjewmn cvhjewmn cjwebm
  //     cjewbm cjwmn scjebwm wjbndc
  //   </p>`,
  styleUrl: './user.scss',
  // styles: ['h1{background-color:green}']
  // styleUrls: ['./user.scss','../admin/admin.scss']
  // preserveWhitespaces: true
  encapsulation:ViewEncapsulation.ShadowDom
})
export class User {
  // @HostListener('click')
  // show(){
  //   alert("hi");
  // }
}
