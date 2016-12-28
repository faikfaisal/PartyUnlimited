import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css']
})
export class CounterComponent {
  @Input() counterValue;
  @Output() counterValueEmitter = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.counterValueEmitter.emit(this.counterValue);

  }

  decrement() {
    this.counterValue--;
    if (this.counterValue < 1) {
      alert("Number of guests cannot be zero");
      this.counterValue = 1;
      return;
    }
    this.counterValueEmitter.emit(this.counterValue);
  }

}
