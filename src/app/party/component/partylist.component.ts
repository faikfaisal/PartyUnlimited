import {Component, OnInit, Input} from '@angular/core';
import {PartyService} from "../service/party.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Party} from "../model/party";


@Component({
  selector: 'app-partylist',
  templateUrl: 'partylist.component.html',
  styleUrls: ['partylist.component.css'],
  inputs: ['parties'],
  providers: [PartyService]
})
export class PartylistComponent{
  public parties: Party[] = [];
}
