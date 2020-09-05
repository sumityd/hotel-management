import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/interface";
import { User } from "../../reducers/hotel-management.state";
import { userListSelctor } from "../../reducers/hotel-management.selector";
import { Subscription } from "rxjs";

@Component({
  selector: "app-hotel-management-list",
  templateUrl: "./hotel-management-list.component.html",
  styleUrls: ["./hotel-management-list.component.css"],
})
export class HotelManagementListComponent implements OnInit {
  usersList: User[] = [];
  subscription$: Subscription = new Subscription();
  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.subscription$.add(
      this._store.select(userListSelctor).subscribe((list) => {
        this.usersList = list;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
