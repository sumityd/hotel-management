import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// implementing lazy loading here
const routes: Routes = [
  {
    path: "hotel",
    loadChildren: () =>
      import("./hotel-management/hotel-management.module").then(
        (m) => m.HotelManagementModule
      ),
  },
  { path: "**", redirectTo: "hotel", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
