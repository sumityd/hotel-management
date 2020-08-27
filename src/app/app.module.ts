import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import { HotelManagementContainerComponent } from "./hotel-management-container/hotel-management-container.component";
import { HotelManagementListComponent } from "./hotel-management-list/hotel-management-list.component";
import { AddFormComponent } from "./add-form/add-form.component";
import { HotelManagementFilterComponent } from './hotel-management-filter/hotel-management-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelManagementContainerComponent,
    HotelManagementListComponent,
    AddFormComponent,
    HotelManagementFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  entryComponents: [AddFormComponent,HotelManagementFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
