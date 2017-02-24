import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PartyService} from "../../party/service/party.service";
import {Party} from "../../party/model/party";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../app.reducers";
import * as fromPartyReducer from "../../party/reducers";
import * as fromGuestListReducer from "../reducers";
import {getLoggedInUserId} from "../../login/login-information";
import {InitializeGuestList, IncrementGuestListAction, DecrementGuestListAction} from "../actions/guest-list";


@Component({
  selector: 'app-guest-list',
  templateUrl: 'guest-list.html',
  styleUrls: ['guest-list.css'],
  providers: [PartyService]
})
export class GuestListComponent implements OnInit {
  party$: Observable<Party>;
  numberOfGuests$: Observable<number>;

  constructor(private store: Store<fromRoot.AppState>,
              private router: Router) {
  }

  ngOnInit() {
    let party: Party = undefined;

    this.party$ = this.store.select(
      fromPartyReducer.getSelectedParty
    );

    this.party$.subscribe(
      selectedParty => party = selectedParty,
    );

    if (party) {
      let userId = getLoggedInUserId();
      let partyId = party.id;

      let mapOfUserIdAndPartyId = new Map<string, number>();

      mapOfUserIdAndPartyId["partyid"] = Number(party.id);
      mapOfUserIdAndPartyId["userid"] = Number(userId);

      this.store.dispatch(
        new InitializeGuestList(mapOfUserIdAndPartyId)
      );

      this.numberOfGuests$ = this.store.select(fromGuestListReducer.getGuestListNumberOfGuests);

    } else {
      this.router.navigate(['']);
    }
  }

  increaseCounter(counter: number) {
    this.store.dispatch(new IncrementGuestListAction());
  }

  decreaseCounter(counter: number) {
    this.store.dispatch(new DecrementGuestListAction());
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  submitGuestList(): void {

  }
}
