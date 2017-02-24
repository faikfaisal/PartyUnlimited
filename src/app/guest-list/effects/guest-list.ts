/**
 * Created by T897060 on 20/02/2017.
 */
import {Injectable} from "@angular/core";
import {GuestListService} from "../service/guest-list.service";
import {Effect, Actions} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs";
import * as guestList from '../actions/guest-list';


@Injectable()
export class GuestListEffects {
  constructor(private actions: Actions,
              private guestListService: GuestListService) {
  }

  @Effect()
  searchForGuestList$: Observable<Action> = this.actions
    .ofType(guestList.ActionTypes.INITIALIZE_GUEST_LIST)
    .map(
      (action: guestList.InitializeGuestList) => action.payload)
    .switchMap(
      payload => {
        const userId = payload["userid"];
        const partyId = payload["partyid"];

        let returnedGuestList = this.guestListService.getGuestListByPartyId(
          partyId,
          userId);
        if (returnedGuestList && returnedGuestList.length == 1) {
          return returnedGuestList;
        } else {
          return [{
            guestListId: null,
            userId: userId,
            partyId: partyId,
            numberOfGuests: 0
          }];
        }
      }
    )
    .map(
      output => new guestList.LoadGuestList(output)
    );


}
