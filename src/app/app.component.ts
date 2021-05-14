import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  time = new Date().toLocaleDateString();
  
  errorVariable;

  onFunctionClick() {
    if (this.errorVariable || this.errorVariable.error) {
      console.log("not defined");
    }
  }
}
