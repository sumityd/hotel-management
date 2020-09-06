import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import {
  HotelActionTypes,
  AddUserDetailFailed,
  AddUserDetailSuccess,
  FetchUserDetailSuccess,
  FetchUserDetailFailed,
  ApplyFilterSuccess,
  ApplyFilterFailed,
  HotelActions,
} from "../actions/hotel-management.actions";
import { HotelManagementService } from "../services/hotel-management.service";
import { switchMap, map, catchError } from "rxjs/operators";
import { Action } from '@ngrx/store';

Injectable();
export class HotelEffects {
  constructor(
    private actions$: Actions,
    private HotelService: HotelManagementService
  ) {}

  @Effect()
  addUserDetail$: Observable<Action> = this.actions$.pipe(
    ofType(HotelActionTypes.ADD_USER_DETAIL),
    switchMap((action: HotelActions) =>
      this.HotelService.addUserDetail(action.payload).pipe(
        map((action: any) => new AddUserDetailSuccess(action)),
        catchError((_) =>
          of(new AddUserDetailFailed("Unexpected error occurred"))
        )
      )
    )
  );

  @Effect()
  fetchUserDetail$: Observable<Action> = this.actions$.pipe(
    ofType(HotelActionTypes.FETCH_USER_DETAIL),
    switchMap((action: HotelActions) =>
      this.HotelService.fetchUserDetail().pipe(
        map((action: any) => new FetchUserDetailSuccess(action)),
        catchError((_) =>
          of(new FetchUserDetailFailed("Unexpected error occurred"))
        )
      )
    )
  );

  @Effect()
  applyFilter$: Observable<Action> = this.actions$.pipe(
    ofType(HotelActionTypes.APPLY_FILTER),
    switchMap((action: HotelActions) =>
      this.HotelService.applyFilter(action.payload).pipe(
        map((action: any) => new ApplyFilterSuccess(action)),
        catchError((_) => of(new ApplyFilterFailed("Unexpected error occured")))
      )
    )
  );
}
