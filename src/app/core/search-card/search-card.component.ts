import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-search-card',
  templateUrl: 'search-card.component.html',
  styleUrls: ['search-card.component.css']
})
export class SearchCardComponent {
  @Input() searchText: string;
  @Output() searchContentEmitter = new EventEmitter<string>();
}
