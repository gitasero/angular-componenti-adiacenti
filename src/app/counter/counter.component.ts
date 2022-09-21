import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() title: string;
  @Input() counter: number;
  @Output() update = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    this.update.emit(1);
  }

}