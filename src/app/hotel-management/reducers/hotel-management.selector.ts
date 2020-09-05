import { AppState } from "../../interface";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { HotelManagement } from "./hotel-management.state";

const selectHotelManagementState = createFeatureSelector<
  AppState,
  HotelManagement
>("state");

export const userListSelctor = createSelector(
  selectHotelManagementState,
  (state: HotelManagement) => state.userData
);
