import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  widgetData = [
    {
      'HeaderData': {
        name: 'rahul',
        data: 'pr'
      }
    },
    {
      'HeaderData': {
        name: 'rahul1',
        data: 'pr'
      }
  }
]
}
