// Keep the Input import for now, we'll remove it later:
import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Params, Router}   from '@angular/router';
import {Location}                 from '@angular/common';
import {PartyService} from "../service/party.service";
import {Party, Address} from "../model/party";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-party-component',
  templateUrl: 'party-component.component.html',
  styleUrls: ['party-component.component.css'],
  providers: [PartyService]
})
export class PartyDetailComponent implements OnInit {
  @Input() party: Party;
  address: Address;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private partyService: PartyService, private location: Location) {
  }

  ngOnInit() {
    this.address = this.party.venue.address;
  }

  goBack(): void {
    this.location.back();
  }

  gotoGuestList(): void {
    this.router.navigate(['/guest-list'])
  }
}
