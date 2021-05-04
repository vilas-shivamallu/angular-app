import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { allEmployees } from '../data';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class DetailsListService {
  firstData = allEmployees;

  // constructor(private http : HttpClient){}
  // get() : Observable<Employee[]>{
  //   console.log("hello",this.http.get<Employee[]>('/api/employees'));
  //   return this.http.get<Employee[]>('/api/employees');
  // }
  get() : Observable<Employee[]>{
    return of(this.firstData);
  }
  // get(){
  //   return this.firstData;
  // }
  getEmployeeById(id: number ): Employee{
    return allEmployees.find(Employee => Employee.id === id);
  }

  add(firstData: Employee) {
    this.firstData.push(firstData);
    this.firstData[this.firstData.length-1].id=this.firstData[this.firstData.length-2].id + 1;
  }

  edit(firstData: Employee, id: number ) {
      allEmployees[id] = firstData;
      this.firstData[id].id = id;
  }

  delete(firstData: Employee) {
    const index = this.firstData.indexOf(firstData);
    let i = 0;
    if (index >= 0) {
      this.firstData.splice(index, 1);
    }
    this.firstData.forEach(element =>{ 
      element.id = i;
      i++;
     });
  }

}