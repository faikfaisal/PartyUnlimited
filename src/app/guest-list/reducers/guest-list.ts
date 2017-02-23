import * as guestList from "../actions/guest-list";
import {ActionTypes, LoadGuestList} from "../actions/guest-list";


export interface State {
  guestListId: number;
  numberOfGuests: number;
  partyId: number;
  isSubmitted: boolean;
}

const initialState: State = {
  guestListId: null,
  numberOfGuests: 0,
  partyId: null,
  isSubmitted: false
};

export function reducer(state = initialState,
                        action: guestList.Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_GUEST : {
      if (action instanceof LoadGuestList) {
        const guestList = action.payload;

        return {
          guestListId: guestList.guestListId,
          numberOfGuests: guestList.numberOfGuests,
          partyId: guestList.partyId,
          isSubmitted: true
        }
      }
    }

    case ActionTypes.DECREMENT_GUEST: {
      let numberOfguests = state.numberOfGuests - 1;
      if (numberOfguests < 0) {
        return Object.assign({}, state, {numberOfGuests: 0});
      } else {
        return Object.assign({}, state, {numberOfGuests: numberOfguests});
      }
    }

    case ActionTypes.INCREMENT_GUEST: {
      let numberOfguests = state.numberOfGuests + 1;
      return Object.assign({}, state, {numberOfGuests: numberOfguests});
    }

    default:
      return state;
  }
}

export const getGuestListId = (state: State) => state.guestListId;
export const getNumberOfGuests = (state: State) => state.numberOfGuests;
export const getPartyId = (state: State) => state.partyId;
export const getIsSubmitted = (state: State) => state.isSubmitted;



