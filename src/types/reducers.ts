export interface IRootState {
  data: any;
}

export interface ReducerData {
  query: string;
  results: any[];
  loading: boolean;
}

export type ReduxActionData<T> = {
  type: any;
  payload?: T;
};

export type ReduxAction<T> = (data: T) => ReduxActionData<T>;
