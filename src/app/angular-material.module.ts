import { NgModule } from "@angular/core";
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
})
export class AngularMaterialModule {}
