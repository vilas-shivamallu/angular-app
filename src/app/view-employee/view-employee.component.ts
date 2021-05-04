import { Component, OnInit, Input } from '@angular/core';
import { DetailsListService } from '../services/details-list.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  @Input() mediaInput;
  constructor(private route : ActivatedRoute,
    private detailsListService : DetailsListService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id']);
    this.mediaInput=this.detailsListService.getEmployeeById(id);
  }

}
