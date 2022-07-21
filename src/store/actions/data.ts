import { ReduxAction } from "types/reducers";

export enum SEARCH_ACTIONS {
  SUBMIT_SEARCH = "searchActions/submitSearch",
  SUBMIT_SEARCH_SUCCESS = "searchActions/submitSuccess",
  SUBMIT_SEARCH_FAILED = "searchActions/submitFailed",
}

export const submitSearch: ReduxAction<string> = (query) => {
  return {
    type: SEARCH_ACTIONS.SUBMIT_SEARCH,
    payload: query,
  };
};
export const submitSearchSuccess: ReduxAction<any[]> = (results) => {
  return {
    type: SEARCH_ACTIONS.SUBMIT_SEARCH_SUCCESS,
    payload: results,
  };
};
export const submitSearchFailed = () => {
  return {
    type: SEARCH_ACTIONS.SUBMIT_SEARCH_FAILED,
  };
};
