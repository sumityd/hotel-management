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
} from "../actions/hotel-management.actions";
import { HotelManagementService } from "../services/hotel-management.service";
import { switchMap, map, catchError } from "rxjs/operators";

Injectable();
export class HotelEffects {
  constructor(
    private actions$: Actions,
    private HotelService: HotelManagementService
  ) {}

  @Effect()
  addUserDetail$: Observable<any> = this.actions$.pipe(
    ofType(HotelActionTypes.ADD_USER_DETAIL),
    switchMap((action: any) =>
      this.HotelService.addUserDetail(action.payload).pipe(
        map((action: any) => new AddUserDetailSuccess(action)),
        catchError((_) =>
          of(new AddUserDetailFailed("Unexpected error occurred"))
        )
      )
    )
  );

  @Effect()
  fetchUserDetail$: Observable<any> = this.actions$.pipe(
    ofType(HotelActionTypes.FETCH_USER_DETAIL),
    switchMap((action: any) =>
      this.HotelService.fetchUserDetail().pipe(
        map((action: any) => new FetchUserDetailSuccess(action)),
        catchError((_) =>
          of(new FetchUserDetailFailed("Unexpected error occurred"))
        )
      )
    )
  );

  @Effect()
  applyFilter$: Observable<any> = this.actions$.pipe(
    ofType(HotelActionTypes.APPLY_FILTER),
    switchMap((action: any) =>
      this.HotelService.applyFilter(action.payload).pipe(
        map((action: any) => new ApplyFilterSuccess(action)),
        catchError((_) => of(new ApplyFilterFailed("Unexpected error occured")))
      )
    )
  );
}
