import * as party from "../actions/party";

export interface State {
  ids: string[];
  loading: boolean;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: party.Actions): State {
  switch (action.type) {
    case party.ActionTypes.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case party.ActionTypes.SEARCH_COMPLETE: {
      const parties = action.payload;
      if (parties instanceof Array) {
        const allIdsOfReturnedParties = parties.map(party => party.id);

        return {
          ids: allIdsOfReturnedParties,
          loading: false,
          query: state.query
        };
      }
    }

    default: {
      return state;
    }
  }
}


export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
