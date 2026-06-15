import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-child-in-child',
  imports: [],
  templateUrl: './child-in-child.html',
  styleUrl: './child-in-child.scss',
})
export class ChildInChild implements AfterContentInit{
@Input() headings='hi';

@ContentChild('title') titleFromParent! :ElementRef

@ContentChildren('msg') msgFromParent! :QueryList<ElementRef>


ngAfterContentInit(){
  console.log(this.titleFromParent.nativeElement.textContent);
  console.log(this.msgFromParent.length);
}
}
