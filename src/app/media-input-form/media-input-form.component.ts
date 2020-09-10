import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsListService } from '../details-list.service';
@Component({
  selector: 'app-media-input-form',
  templateUrl: './media-input-form.component.html',
  styleUrls: ['./media-input-form.component.css']
})
export class MediaInputFormComponent  {
    form : FormGroup;
    constructor(private detilsListService : DetailsListService,
      private router: Router){}

  ngOnInit(){
      this.form=new FormGroup({
        name: new FormControl('',Validators.compose([
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        doj : new  FormControl(''),
        dob : new  FormControl('-',this.dobValidator),
        category: new  FormControl('')
      });
  }

  dobValidator(control: FormControl){
    const dob= control.value;
    const dd=new Date(dob);
    const maxAge=new Date().getFullYear()-dd.getFullYear();
    // console.log(dd.getFullYear()-new Date().getFullYear());
    if(dd.getFullYear()>=new Date().getFullYear())
    { return { Er: {
      error :'Not a future event!' }
      };

    }
    else if(maxAge<=16){
      return { Er: {
        error :'you should be 16+' }
        };
  }
    return null;
  }
  onSubmit(mediaInput){
    this.detilsListService.add(mediaInput);
    alert("Details Saved");

  }
}
