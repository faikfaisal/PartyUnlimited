/**
 * Created by T897060 on 22/01/2017.
 */
import * as fromGuestList from "./guest-list";
import {createSelector} from "reselect";

export interface GuestListState {
  guestList: fromGuestList.State
}


export const reducers = {
  guestList: fromGuestList.reducer
};


//Guest List Queries
export const getGuestListState = (state: GuestListState) => state.guestList;
export const getGuestListId = createSelector(getGuestListState, fromGuestList.getGuestListId);
export const getGuestListNumberOfGuests = createSelector(getGuestListState, fromGuestList.getNumberOfGuests);
export const getGuestListPartyId = createSelector(getGuestListState, fromGuestList.getPartyId);

