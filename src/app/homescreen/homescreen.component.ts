import {Component, OnInit, Input} from '@angular/core';
import {Party} from "../party/model/party";
import {PartyService} from "../party/service/party.service";

@Component({
  selector: 'app-homescreen',
  templateUrl: 'homescreen.component.html',
  styleUrls: ['homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  parties: Party[];

  constructor(public partyService: PartyService) {

  }

  ngOnInit() {
    this.partyService.retrieveParties().then(parties => this.parties = parties);
  }


  handleUpdatedEvent(parties: Party[]) {
    this.parties = parties;
  }
}
