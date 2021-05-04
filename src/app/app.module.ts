import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/details.component';
import { DetailsListComponent } from "./details-list/details-list.component";
import { CategoryPipe } from './pipes/category.pipe';
import { MediaInputFormComponent } from './media-input-form/media-input-form.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    DetailsListComponent,
    CategoryPipe,
    MediaInputFormComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
