import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  numberBoxes: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }

}
