import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloudinaryfront';
  email: String;
  pass: String;
  hide=false;

  submit(): void{
    if(this.email=="camilo@gmail.com" && this.pass=="camilo"){
      this.hide=true;
    }
  }
}
