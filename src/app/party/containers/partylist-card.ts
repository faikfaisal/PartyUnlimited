import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from "@angular/core";
import {PartyService} from "../service/party.service";
import {Party} from "../model/party";
import {Observable} from "rxjs";


@Component({
  selector: 'app-partylist',
  templateUrl: 'partylist-card.html',
  styleUrls: ['partylist-card.css'],
  providers: [PartyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartylistComponent {
  @Input() parties: Observable<Party[]>;
  @Output() selectedPartyEmitter = new EventEmitter<Party>();
}
