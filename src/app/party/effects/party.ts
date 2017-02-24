import {Injectable} from "@angular/core";

import {PartyService} from "../service/party.service";
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from "rxjs";
import * as party from '../actions/party';


@Injectable()
export class PartyEffects {
  constructor(private actions$: Actions, private partyService: PartyService) {
  }

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(party.ActionTypes.SEARCH)
    .debounceTime(300)
    .map(
      (action: party.SearchAction) => action.payload).switchMap(
      query => {

        const nextSearch$ = this.actions$.ofType(party.ActionTypes.SEARCH).skip(1);
        return this.partyService.searchParty(
          query).takeUntil(nextSearch$).map(
          parties => new party.SearchCompleteAction(parties));
      }
    );
}
