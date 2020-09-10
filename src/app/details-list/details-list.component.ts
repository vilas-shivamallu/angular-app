import { Component, OnInit } from "@angular/core";
import { CategoryPipe } from '../pipes/category.pipe';
import { DetailsListService } from '../details-list.service';

@Component({
    selector: 'app-details-list',
    templateUrl: './details-list.component.html',
    styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit{
  firstData;
  
  constructor(private detailsListService : DetailsListService) {}
  ngOnInit(){
    this.firstData=this.detailsListService.get();
  }
  onMediaInputDelete(mediaInput) { 
      this.detailsListService.delete(mediaInput);
  }  
}