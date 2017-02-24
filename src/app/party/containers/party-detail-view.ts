// Keep the Input import for now, we'll remove it later:
import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {Party} from "../model/party";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";


@Component({
  selector: 'app-party-component',
  templateUrl: 'party-detail-view.html',
  styleUrls: ['party-detail-view.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyDetailComponent {
  @Input() party: Party;
}
