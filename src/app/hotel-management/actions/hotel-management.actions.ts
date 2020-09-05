import { Action } from "@ngrx/store";

export enum HotelActionTypes {
  ADD_USER_DETAIL = "[HotelManagement] addUserDetail",
  ADD_USER_DETAIL_SUCCESS = "[HotelManagement] addUserDetailSuccess",
  ADD_USER_DETAIL_FAILED = "[HotelManagement] addUserDetailFailed",

  FETCH_USER_DETAIL = "[HotelManagement] fetchUserDetail",
  FETCH_USER_DETAIL_SUCCESS = "[HotelManagement] fetchUserDetailSuccess",
  FETCH_USER_DETAIL_FAILED = "[HotelManagement] fetchUserDetailFailed",
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

export type HotelActions =
  | AddUserDetail
  | AddUserDetailSuccess
  | AddUserDetailFailed
  | FetchUserDetail
  | FetchUserDetailSuccess
  | FetchUserDetailFailed;
