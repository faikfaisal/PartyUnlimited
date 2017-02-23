import {Party} from "../model/party";
import * as party from "../actions/party";
import {createSelector} from "reselect";


export interface State {
  ids: string[];
  entities: {[id: string]: Party};
  selectedPartyId: string | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedPartyId: null,
};

export function reducer(state = initialState, action: party.Actions): State {
  switch (action.type) {
    case party.ActionTypes.SEARCH_COMPLETE: {
      const parties = action.payload;
      if (parties instanceof Array) {

        const newBooks = parties.filter(book => !state.entities[book.id]);

        const newBookIds = newBooks.map(book => book.id);
        const newBookEntities = newBooks.reduce((entities: {[id: string]: Party}, book: Party) => {
          return Object.assign(entities, {
            [book.id]: book
          });
        }, {});

        return {
          ids: [...state.ids, ...newBookIds],
          entities: Object.assign({}, state.entities, newBookEntities),
          selectedPartyId: state.selectedPartyId
        };
      }
    }

    case party.ActionTypes.LOAD: {
      const party = action.payload;

      if (party instanceof Party) {
        if (state.ids.indexOf(party.id) > -1) {
          return state;
        }

        return {
          ids: [...state.ids, party.id],
          entities: Object.assign({}, state.entities, {
            [party.id]: party
          }),
          selectedPartyId: state.selectedPartyId
        };
      }
    }

    case party.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPartyId: <string>action.payload
      };
    }
    default: {
      return state;
    }
  }
}


export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedPartyId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

