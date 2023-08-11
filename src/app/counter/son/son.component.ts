import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent {
  @Input() counter: number = 0;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() {}

  multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandSon(event:number){
    this.counter = event;
    this.changeCounter.emit(this.counter);
  }
}
