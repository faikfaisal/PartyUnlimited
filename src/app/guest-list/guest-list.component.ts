import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PartyService} from "../party/service/party.service";
import {Party} from "../party/model/party";
import {Location}                 from '@angular/common';


@Component({
  selector: 'app-guest-list',
  templateUrl: 'guest-list.component.html',
  styleUrls: ['guest-list.component.css'],
  providers: [PartyService]
})
export class GuestListComponent implements OnInit {
  public myValue: number = 1;
  public party: Party;

  constructor(private route: ActivatedRoute,
              private partyService: PartyService, private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.partyService.getParty(+params['id']))
      .subscribe(party => this.party = party);
  }

  goBack(): void {
    this.location.back();
  }

  onCounterChanges(counterValue: number) {
    this.myValue = counterValue;
  }

  submitGuestList(): void {
    console.log(this.myValue);
  }
}
