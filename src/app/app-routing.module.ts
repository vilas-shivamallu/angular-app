import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsListComponent } from "./details-list/details-list.component";
import { MediaInputFormComponent } from "./media-input-form/media-input-form.component";
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  { path: 'details-list', component: DetailsListComponent },
  { path: 'app-media-input-form', component: MediaInputFormComponent },
  { path: 'app-view-employee/:id', component: ViewEmployeeComponent },
  { path: 'app-edit-employee/:id', component: EditEmployeeComponent },
  { path: 'app-checkbox', component: CheckboxComponent},
  { path: '', redirectTo: 'details-list', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }