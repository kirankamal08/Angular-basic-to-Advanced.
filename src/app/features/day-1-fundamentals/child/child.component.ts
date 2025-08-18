import { Component,EventEmitter, Output, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() messageToParent = new EventEmitter<string>();
    @Input() childMessage: string = '';

  constructor() {
  console.log('Child constructor');
  }

  ngOnChanges(changes:SimpleChanges) {
    if(changes['childMessage']) {
      console.log("input changes in the parent");
    }
    console.log("ngOncganges fired");
  }
  ngOnInit() {
    console.log("ngOnInit initialization");
    this.sendMessage();
  }
  sendMessage() {
    this.messageToParent.emit("hello parent component");
  }
  ngOnDestroy() {
  console.log('Child destroyed');
}
}
