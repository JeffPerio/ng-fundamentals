import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <div><h1> {{title}}</h1>
    <div> Composant Tuto Angular 11 </div>
    <img src="./assets/images/basic-shield.png">
  </div>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
