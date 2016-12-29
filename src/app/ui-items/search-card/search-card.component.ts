import {Component, OnInit, EventEmitter} from '@angular/core';
import {PartyService} from "../../party/service/party.service";
import {Party} from "../../party/model/party";

@Component({
  selector: 'app-search-card',
  templateUrl: 'search-card.component.html',
  styleUrls: ['search-card.component.css'],
  outputs: ['updatedParties']
})
export class SearchCardComponent implements OnInit {

  private parties: Party[];
  public searchText: string;
  updatedParties: EventEmitter<any> = new EventEmitter();

  constructor(public partyService: PartyService) {
  }

  ngOnInit() {
    this.partyService.retrieveParties().then(parties => this.parties = parties);
  }

  onChange(newValue) {
    let parties = this.parties.filter(party => party.name.toLowerCase().includes(newValue.toLowerCase()));
    this.updatedParties.emit(parties);
  }

  updateSearchedParties(name: string) {
    let nameInLowerCase = name.toLowerCase();
    let parties = this.parties.filter(party => party.name.toLowerCase().includes(nameInLowerCase));
    this.updatedParties.emit(parties);
  }
}
