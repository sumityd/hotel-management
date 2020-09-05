import { Component, OnInit } from "@angular/core";
import { AddFormComponent } from "../add-form/add-form.component";
import { MatDialog } from "@angular/material";
import { HotelManagementFilterComponent } from "../hotel-management-filter/hotel-management-filter.component";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/interface";
import {
  FetchUserDetail,
  AddUserDetail,
  ApplyFilter,
} from "../../actions/hotel-management.actions";
import { userListSelctor } from "../../reducers/hotel-management.selector";
import { Subscription } from "rxjs";

@Component({
  selector: "app-hotel-management-container",
  templateUrl: "./hotel-management-container.component.html",
  styleUrls: ["./hotel-management-container.component.css"],
})
export class HotelManagementContainerComponent implements OnInit {
  users: any[] = [];
  chairNumbers: any[] = [...Array(10).keys()];
  subscription$: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _store: Store<AppState>) {}

  ngOnInit() {
    this._store.dispatch(new FetchUserDetail({}));

    this.subscription$.add(
      this._store.select(userListSelctor).subscribe((list) => {
        this.users = list;
      })
    );
  }

  addReservationForm() {
    let dialogRef = this.dialog.open(AddFormComponent, {
      width: "60vw",
      height: "70vh",
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this._store.dispatch(new AddUserDetail(data));
      }
    });
  }

  openFilter() {
    let dialogRef = this.dialog.open(HotelManagementFilterComponent, {
      width: "60vw",
      height: "70vh",
      data: { userList: this.users },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this._store.dispatch(new ApplyFilter(data))
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
