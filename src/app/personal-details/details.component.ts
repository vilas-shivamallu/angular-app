import {Component, Input, Output,EventEmitter} from '@angular/core';
import { DetailsListService } from "../services/details-list.service";
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})

export class PersonalDetailsComponent{
@Input()  mediaInput;
@Output() delete = new EventEmitter();

  constructor(private detailsListService: DetailsListService,
    private route: ActivatedRoute) {
    }
onDelete(){
    console.log('onDelete');
    this.delete.emit(this.mediaInput);
}

}
