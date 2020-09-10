import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsListComponent } from "./details-list/details-list.component";
import { MediaInputFormComponent } from "./media-input-form/media-input-form.component";

const routes: Routes = [ 
  {path: 'details-list', component: DetailsListComponent},
  {path: 'app-media-input-form', component: MediaInputFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
