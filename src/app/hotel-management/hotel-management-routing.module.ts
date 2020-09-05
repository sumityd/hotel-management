import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelManagementContainerComponent } from './components/hotel-management-container/hotel-management-container.component';


const routes: Routes = [
  {
    path:'',
    component: HotelManagementContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule { }
