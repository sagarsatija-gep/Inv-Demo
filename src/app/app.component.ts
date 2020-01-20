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
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              name: 'rahul',
              values: '122343',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            },
            {
              name: 'asa',
              values: '121',
            },{
              name: 'asdasada',
              values: '1213sda',
            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: 'rahul1',
        data: {
          componentName: 'try'
        }
      }
  }
]
}
