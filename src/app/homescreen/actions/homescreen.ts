import {Action} from "@ngrx/store";
import {type} from "../../utils";
import {Party} from "../../party/model/party";


export const ActionTypes = {
  SEARCH: type('[Homescreen] Search'),
  SEARCH_COMPLETE: type('[Homescreen] Search Complete'),
  SELECT_PARTY: type('[Homescreen] Select party'),
}

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: string) {
  }
}

export class SearchComplete implements Action {
  type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Party[]) {
  }
}

export class SelectParty implements Action {
  type = ActionTypes.SELECT_PARTY;

  constructor(public payload: Party) {
  }
}

export type HomeScreenActions
  = SearchAction
  | SearchComplete
  | SelectParty;


