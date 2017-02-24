/**
 * Created by T897060 on 22/01/2017.
 */
import * as partyReducer from "./party/reducers";
import * as guestListReducer from "./guest-list/reducers"
import {ActionReducer, combineReducers} from "@ngrx/store";
import {PartyState} from "./party/reducers/index";
import {GuestListState} from "./guest-list/reducers";


export interface AppState extends PartyState, GuestListState {
}

const combinedReducers = Object.assign(partyReducer.reducers, guestListReducer.reducers);

const productionReducer: ActionReducer<AppState> = combineReducers(combinedReducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}
