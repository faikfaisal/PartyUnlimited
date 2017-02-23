/**
 * Created by T897060 on 15/01/2017.
 */
import {Action} from "@ngrx/store";
import {type} from "../../utils";
import {Party} from "../../party/model/party";


export const ActionTypes = {
  SEARCH: type('[Party] Search'),
  SEARCH_COMPLETE: type('[Party] Search Complete'),
  LOAD: type('[Party] Load'),
  SELECT: type('[Party] Select'),
}


export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: string) {
  }
}

export class SearchCompleteAction implements Action {
  type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Party[]) {
  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Party) {
  }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) {
  }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
