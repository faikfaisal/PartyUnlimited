/**
 * Created by T897060 on 19/02/2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {GuestList} from "../model/guest-list";

@Injectable()
export class GuestListService {

  constructor() {
  }

  getMockGuestLists(): Observable<GuestList[]> {
    let guestListOne = {
      guestListId: 1,
      userId: 1,
      partyId: 1,
      numberOfGuests: 10,
    };

    let guestListTwo = {
      guestListId: 2,
      userId: 2,
      partyId: 1,
      numberOfGuests: 4,
    };

    return Observable.of([guestListOne, guestListTwo]);
  }

  getGuestListByPartyId(partyId: number, userId: number) : GuestList[] {
    let guestListItemToReturn = null;

    this.getMockGuestLists().subscribe(
      guestLists => guestListItemToReturn = guestLists.filter(
        guestList => guestList.partyId == partyId
        &&
        guestList.userId == userId
      )
    );

    return guestListItemToReturn;
  }

}
