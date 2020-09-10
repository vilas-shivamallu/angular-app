import { Injectable  } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class DetailsListService{
firstData = [{
  id: 1,
    name: 'vilas',
    dob: '08/07/1998',
    doj : '08/03/2020',
    category :'Scholar',
},
  {  id: 2,
    name:'Bunny',
    dob: '12/12/1999',
    age:21,
    doj:'08/03/2020',
    category :'Intern'},
  {
    id: 3,
  name : 'Sonu',
  dob: '05/10/1970',
  doj:'08/03/2020',
  category :'Dev'
  }
,{
  id: 4,
  name: 'Kapil',
  dob: '08/19/1998',
  doj : '08/03/2020',
  category :'-'
},
{ id: 5,
  name:'Amar',
  dob: '11/16/1998',
  age:22,
  doj:'08/03/2020',
  category :'-'}
];

get(){
    return this.firstData;
}
add(firstData){
    this.firstData.push(firstData);
}
delete(firstData){
    const index=this.firstData.indexOf(firstData);
    if(index>=0){
        this.firstData.splice(index,1);
    }
}

}