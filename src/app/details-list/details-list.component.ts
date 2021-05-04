import { Component, OnInit } from "@angular/core";
import { CategoryPipe } from '../pipes/category.pipe';
import { Observable } from "rxjs";
import { DetailsListService } from '../services/details-list.service';

@Component({
    selector: 'app-details-list',
    templateUrl: './details-list.component.html',
    styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit{
  firstData;
  
  constructor(private detailsListService : DetailsListService) {}
  ngOnInit(){
    this.detailsListService.get()
    .subscribe(
      data => this.firstData=data,
      err => console.log(err),
      () => console.log("All good")
    );
    //this.firstData=this.detailsListService.get();
   
  }
  onMediaInputDelete(mediaInput) { 
      this.detailsListService.delete(mediaInput);
  }  
}