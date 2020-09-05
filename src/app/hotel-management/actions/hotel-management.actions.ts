import { Action } from "@ngrx/store";

export enum HotelActionTypes {
  ADD_USER_DETAIL = "[HotelManagement] addUserDetail",
  ADD_USER_DETAIL_SUCCESS = "[HotelManagement] addUserDetailSuccess",
  ADD_USER_DETAIL_FAILED = "[HotelManagement] addUserDetailFailed",

  FETCH_USER_DETAIL = "[HotelManagement] fetchUserDetail",
  FETCH_USER_DETAIL_SUCCESS = "[HotelManagement] fetchUserDetailSuccess",
  FETCH_USER_DETAIL_FAILED = "[HotelManagement] fetchUserDetailFailed",

  APPLY_FILTER = "[HotelManagement] applyFilter",
  APPLY_FILTER_SUCCESS = "[HotelManagement] applyFilterSuccess",
  APPLY_FILTER_FAILED = "[HotelManagement] applyFilterFailed",
}

export class AddUserDetail implements Action {
  readonly type = HotelActionTypes.ADD_USER_DETAIL;
  constructor(public payload: any) {}
}
export class AddUserDetailSuccess implements Action {
  readonly type = HotelActionTypes.ADD_USER_DETAIL_SUCCESS;
  constructor(public payload: any) {}
}
export class AddUserDetailFailed implements Action {
  readonly type = HotelActionTypes.ADD_USER_DETAIL_FAILED;
  constructor(public payload: any) {}
}

export class FetchUserDetail implements Action {
  readonly type = HotelActionTypes.FETCH_USER_DETAIL;
  constructor(public payload: any) {}
}
export class FetchUserDetailSuccess implements Action {
  readonly type = HotelActionTypes.FETCH_USER_DETAIL_SUCCESS;
  constructor(public payload: any) {}
}
export class FetchUserDetailFailed implements Action {
  readonly type = HotelActionTypes.FETCH_USER_DETAIL_FAILED;
  constructor(public payload: any) {}
}

export class ApplyFilter implements Action {
  readonly type = HotelActionTypes.APPLY_FILTER;
  constructor(public payload: any) {}
}
export class ApplyFilterSuccess implements Action {
  readonly type = HotelActionTypes.APPLY_FILTER_SUCCESS;
  constructor(public payload: any) {}
}
export class ApplyFilterFailed implements Action {
  readonly type = HotelActionTypes.APPLY_FILTER_FAILED;
  constructor(public payload: any) {}
}

export type HotelActions =
  | AddUserDetail
  | AddUserDetailSuccess
  | AddUserDetailFailed
  | FetchUserDetail
  | FetchUserDetailSuccess
  | FetchUserDetailFailed
  | ApplyFilter
  | ApplyFilterSuccess
  | ApplyFilterFailed;
