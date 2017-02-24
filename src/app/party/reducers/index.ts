import {createSelector} from "reselect";
import * as fromSearch from "./search";
import * as fromParty from "./party";

export interface PartyState {
  search: fromSearch.State;
  party: fromParty.State
}

export const reducers = {
  search: fromSearch.reducer,
  party: fromParty.reducer
}

//Party queries
export const getPartyState = (state: PartyState) => state.party;
export const getPartyEntities = createSelector(getPartyState, fromParty.getEntities);
export const getPartyIds = createSelector(getPartyState, fromParty.getIds);
export const getSelectedPartyId = createSelector(getPartyState, fromParty.getSelectedId);
export const getSelectedParty = createSelector(getPartyState, fromParty.getSelected);

//Searching queries
export const getSearchState = (state: PartyState) => state.search;
export const getSearchPartyIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const getSearchResults = createSelector(getPartyEntities, getSearchPartyIds, (parties, searchIds) => {
  let output = searchIds.map(id => parties[id]);
  return output;
});




