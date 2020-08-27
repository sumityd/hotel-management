import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelManagementContainerComponent } from './hotel-management-container/hotel-management-container.component';


const routes: Routes = [
 {
  path: "",
  component: HotelManagementContainerComponent,
  children: [

  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
