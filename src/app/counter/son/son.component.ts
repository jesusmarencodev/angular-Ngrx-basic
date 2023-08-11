import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent {
  counter!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  multiply() {
    this.store.dispatch(actions.multiply({ num: 5 }));
  }

  divide() {
    this.store.dispatch(actions.divide({ num: 2 }));
  }

}
