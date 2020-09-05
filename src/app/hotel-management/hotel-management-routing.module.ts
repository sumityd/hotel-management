import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelManagementContainerComponent } from "./components/hotel-management-container/hotel-management-container.component";
import { HotelManagementListComponent } from "./components/hotel-management-list/hotel-management-list.component";

const routes: Routes = [
  {
    path: "",
    component: HotelManagementContainerComponent,
    children: [
      {
        path: "",
        component: HotelManagementListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelManagementRoutingModule {}
