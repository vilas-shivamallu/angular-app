import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/details.component';
import { DetailsListComponent } from "./details-list/details-list.component";
import { CategoryPipe } from './pipes/category.pipe';
import { MediaInputFormComponent } from './media-input-form/media-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    DetailsListComponent,
    CategoryPipe,
    MediaInputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
