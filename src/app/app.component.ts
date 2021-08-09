import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  charge: number = 0;

  onAdd(charge: number){
    debugger;
    this.charge = charge;
  }
}
