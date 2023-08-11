import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css'],
})
export class GrandsonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  reset() {
    this.counter = 0;
    this.changeCounter.emit(this.counter);
  }
}
