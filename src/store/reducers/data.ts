import { ReducerData, ReduxActionData } from "types/reducers";
import { SEARCH_ACTIONS } from "../actions/data";

const initialState: ReducerData = {
  query: "",
  results: [],
  loading: false,
};

const dataState: (
  state: ReducerData,
  action: ReduxActionData<any>
) => ReducerData = (state = initialState, action: ReduxActionData<any>) => {
  switch (action.type) {
    case SEARCH_ACTIONS.SUBMIT_SEARCH:
      return {
        ...state,
        query: action.payload,
        loading: true,
      };
    case SEARCH_ACTIONS.SUBMIT_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case SEARCH_ACTIONS.SUBMIT_SEARCH_FAILED:
      return {
        ...state,
        results: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default dataState;
