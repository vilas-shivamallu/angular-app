import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  pizzaIng: any;
    selectAll = false;

    constructor() {
        this.pizzaIng = [{
                name: "Pepperoni",
                checked: false
            },
            {
                name: "Sasuage",
                checked: true
            },
            {
                name: "Mushrooms",
                checked: false
            }
        ];
    }
    
  ngOnInit(): void {
  }
  selectChildren() {    
    if (this.pizzaIng.every(a => a.checked)) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }
  isAllChecked() {
    return this.pizzaIng.every(obj => obj.checked);
  }

  checkAll() {
     this.pizzaIng.forEach(obj => obj.checked = this.selectAll);
  }
  updateCheck() {
    console.log(this.selectAll);
    if (this.selectAll === true) {
        this.pizzaIng.map((pizza) => {
            pizza.checked = true;
        });

    } else {
        this.pizzaIng.map((pizza) => {
            pizza.checked = false;
        });
    }
}
}  


