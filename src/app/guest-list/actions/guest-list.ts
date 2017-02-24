/**
 * Created by T897060 on 21/01/2017.
 */
import {Action} from "@ngrx/store";
import {type} from "../../utils";
import {GuestList} from "../model/guest-list";


export const ActionTypes = {
  INCREMENT_GUEST: type('[GuestList] Increment'),
  DECREMENT_GUEST: type('[GuestList] Decrement'),
  INITIALIZE_GUEST_LIST: type('[GuestList] Initialize'),
  LOAD_GUEST: type('[GuestList] Load'),
  SUBMIT: type('[GuestList] Submit')
};


export class IncrementGuestListAction implements Action {
  type = ActionTypes.INCREMENT_GUEST;
}

export class DecrementGuestListAction implements Action {
  type = ActionTypes.DECREMENT_GUEST;
}

export class InitializeGuestList implements Action {
  type = ActionTypes.INITIALIZE_GUEST_LIST;

  constructor(public payload: Map<string, number>) {
  }
}

export class LoadGuestList implements Action {
  type = ActionTypes.LOAD_GUEST;

  constructor(public payload: GuestList) {
  }
}


export class SubmitGuestListAction implements Action {
  type = ActionTypes.SUBMIT;

  constructor(public payload: Map<string, number>) {
  }
}

export type Actions
  = LoadGuestList
  | InitializeGuestList
  | SubmitGuestListAction
  | IncrementGuestListAction
  | DecrementGuestListAction;
