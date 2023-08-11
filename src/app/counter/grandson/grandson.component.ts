import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css'],
})
export class GrandsonComponent implements OnInit {
  counter!:number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  ngOnInit(): void {}
  reset() {
    this.store.dispatch(reset());
  }
}
