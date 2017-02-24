import {Component, Output, EventEmitter, ChangeDetectionStrategy, Input} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() counter;
  @Output() increaseCounterValueEmitter = new EventEmitter<number>();
  @Output() decreaseCounterValueEmitter = new EventEmitter<number>();
}
