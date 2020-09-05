import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HotelManagementContainerComponent } from "./components/hotel-management-container/hotel-management-container.component";
import { HotelManagementListComponent } from "./components/hotel-management-list/hotel-management-list.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { HotelManagementFilterComponent } from "./components/hotel-management-filter/hotel-management-filter.component";
import { HotelManagementComponent } from "./hotel-management.component";
import { HotelManagementRoutingModule } from "./hotel-management-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import { NgModel } from "@angular/forms";
import { HotelManagementService } from "./services/hotel-management.service";
import { HotelEffects } from "./effects/hotel-management-effects";
import { EffectsModule } from "@ngrx/effects";
import { HotelManagementPipe } from './pipes/hotel-management.pipe';

@NgModule({
  declarations: [
    HotelManagementContainerComponent,
    HotelManagementListComponent,
    AddFormComponent,
    HotelManagementFilterComponent,
    HotelManagementComponent,
    HotelManagementPipe,
  ],

  imports: [
    CommonModule,
    HotelManagementRoutingModule,
    AngularMaterialModule,
    EffectsModule.forFeature([HotelEffects]),
  ],
  providers: [NgModel, HotelManagementService],
  entryComponents: [AddFormComponent, HotelManagementFilterComponent],
})
export class HotelManagementModule {}
