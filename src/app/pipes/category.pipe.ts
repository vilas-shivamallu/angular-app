import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(firstData) {
    var categories = [];
firstData.forEach(mediaInput => {
  if (categories.indexOf(mediaInput.category) <= -1) {
    categories.push(mediaInput.category);
  }
});
return categories.join(" ");


  }

}
