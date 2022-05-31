import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  numberBoxes$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.numberBoxes$ = store.select('count');
  }

  ngOnInit(): void {
  }


}
