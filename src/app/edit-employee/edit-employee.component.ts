import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetailsListService } from '../services/details-list.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { MediaInputFormComponent } from '../media-input-form/media-input-form.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: '../media-input-form/media-input-form.component.html',
  styleUrls: ['../media-input-form/media-input-form.component.css']
})
export class EditEmployeeComponent extends MediaInputFormComponent {
  
  form : FormGroup;
  constructor(
    private detailsListService : DetailsListService,
    private route: ActivatedRoute){
    super(detailsListService);
  }
     id  = parseInt(this.route.snapshot.params['id']);
    mediaInput = this.detailsListService.getEmployeeById(this.id);
ngOnInit(){
    this.form=new FormGroup({
      name: new FormControl(this.mediaInput.name,Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      dob : new  FormControl(this.mediaInput.dob,this.dobValidator),
      category: new  FormControl(this.mediaInput.category),
      doj : new  FormControl(this.mediaInput.doj)
    });
    console.log('sikdgc', this.form)
}
onSubmit(mediaInput: Employee){
  this.detailsListService.edit(mediaInput,this.id);
}
}