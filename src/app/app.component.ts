import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EscuelaF14';
  showFiller = false;
  click() {
    console.log('Menu');
  }
}



