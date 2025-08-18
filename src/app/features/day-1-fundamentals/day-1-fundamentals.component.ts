import { Component,Input } from '@angular/core';
import { Observable,from,of } from 'rxjs';
//import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { RouterModule } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-day-1-fundamentals',
  standalone: true,
  imports: [RouterModule, ChildComponent],
  templateUrl: './day-1-fundamentals.component.html',
  styleUrl: './day-1-fundamentals.component.css'
})
export class Day1FundamentalsComponent {
  childMsg!: string;
  msgForChild = "Default msg";
 // @Input() childMessage:string = "Hello child from parent";
  constructor() {

  }

  ngOnInit() {
    this.creatingObservable();
  }
  helloParent(msg:any) {
    this.childMsg = msg;
  }
  changeInput() {
     this.msgForChild = "New msg from Parent";
  }

  creatingObservable() {
    const myObs$ = new Observable(
    observer => {
      observer.next('data 10'),
      observer.complete();
    })
    myObs$.subscribe({
      next:val => console.log(val),
      error:err => console.log(err),
      complete:() => console.log('completed')
    });
  }
}
