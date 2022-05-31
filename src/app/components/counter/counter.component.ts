import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {decrement, increment, reset} from "../../state/counter.actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  numberBoxes$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.numberBoxes$ = store.select('count');
  }

  generate() {
    this.store.dispatch(increment());
    console.log('generate');
  }

  remove() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
