import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-map-dashboard',
  templateUrl: './inventory-map-dashboard.component.html',
  styleUrls: ['./inventory-map-dashboard.component.css']
})
export class InventoryMapDashboardComponent implements OnInit{

  showLocations : boolean = false;
  selectedItems: any = null;
  isToggle;
  date = new FormControl(new Date());
  showList : boolean = false;

  locations = [
    {
      text1: 'San Joaquin Valley(SJV) ',
      text2: 'Bakersfield, CA'
    },
    {
      text1: 'Canadian Business Unit (CBU)',
      text2: 'Calgary, Canada'
    },
    {
      text1: 'Apalachia Michigan Business University',
      text2: '(AMBU) Corapolis, PA'
    },
    {
      text1: 'Mid-Continent Business Unit(MCBU)',
      text2: 'Midland, TX'
    }
  ]

  headerDropdowns = [
    {
      label: 'Switch to',
      class: "btn-white mr-3",
      width: '268.43',
      options: [
        'Inventory Overview Dashboard',
        'Cycle Count - Planned vs Actuals',
        'Cycle Count - Aging',
        'Inventory Ownerhip',
        'Inventory Aging by Item',
        'Inventory Aging by BIN',
        'Material View Overview Dashboard'
      ]
    },
    {
      label:'+ Add Widget',
      class: 'btn-primary',
      width: '150',
      options: [
        'Inventory Summary',
        'Cycle Count - Planned vs Actuals',
        'Cycle Count - Aging',
        'Inventory Ownerhip',
        'Inventory Aging',
      ]
    }
  ];

  selections = [
    {
      name: 'Plants (4/4)',
      isShow: true,
      options: [
        {
          name: 'UUGE - Genesis',
          isChecked: true,
        },
        {
          name: 'UUTA - Tahiti',
          isChecked: true
        },
        {
          name: 'SB05 - Shore Base',
          isChecked: true
        },
        {
          name: 'UUPT - Petronios',
          isChecked: true
        }
      ]
    },
    {
      name: 'Categories (2)',
      isShow: false,
      options: [
        {
          name: 'Equipments',
          isChecked: false
        },
        {
          name: 'Catalyst',
          isChecked: false
        }
      ]
    },
    {
      name: 'Location Type (2)',
      isShow: false,
      options: [
        {
          name: 'Equipments',
          isChecked: false
        },
        {
          name: 'Catalyst',
          isChecked: false
        }
      ]
    },
    {
      name: 'Location Type (2)',
      isShow: false,
      options: [
        {
          name: 'Equipments',
          isChecked: false
        },
        {
          name: 'Catalyst',
          isChecked: false
        }
      ]
    }
  ];

  entirechartData = [
    {
      chartHeadings : [
        {
          text1: 'USD 2.3M',
          text2: 'Inventory Valuation',
          class: 'border-right pr-4'
        },
        {
          text1: '3200 Units',
          text2: 'Number of Line Items',
          class: 'pl-4'
        }
      ],
      chartData : [
        {
          text1: 'UUGE - GENESIS',
          text2: '0.6m usd',
          text3: '900 lines',
          styles: {
            'border-left': '4px solid #f0769f'
          }
        },
        {
          text1: 'uuta - tahiti',
          text2: '1.6m usd',
          text3: '1300 lines',
          styles: {
            'border-left': '4px solid #2AD2C0'
          }
        },
        {
          text1: 'sb05 - shore base',
          text2: '0.2m usd',
          text3: '195 lines',
          styles: {
            'border-left': '4px solid #8C9EFF'
          }
        },
        {
          text1: 'uupt - petronios',
          text2: '0.4m usd',
          text3: '220 lines',
          styles: {
            'border-left': '4px solid #FFB922'
          }
        }
      ]
    }
  ]

  chartsConfig = [
    {
      view: [300, 300],
      colorScheme: {
        domain: ['#2AD2C0', '#F0769F', '#FFB922', '#8C9EFF']
      },
      data : [
        {
          "name": "UUGE - GENESIS",
          "value": 62
        },
        {
          "name": "UUTA - TAHITI",
          "value": 23
        },
        {
          "name": "SB05 - SHORE BASE",
          "value": 10
        },
          {
          "name": "UUPT - PETRONIOS",
          "value": 5
        }
      ],
      options: {
        gradient: false,
        showLegend: false,
        showLabels: false,
        isDoughnut: true,
        arcWidth: 0.43
      }
    }
  ];

  chartHeadings = [
    {
      text1: 'USD 2.3M',
      text2: 'Inventory Valuation',
      class: 'border-right pr-4'
    },
    {
      text1: '3200 Units',
      text2: 'Number of Line Items',
      class: 'pl-4'
    }
  ];

  chartData = [
    {
      text1: 'UUGE - GENESIS',
      text2: '0.6m usd',
      text3: '900 lines',
      styles: {
        'border-left': '4px solid #f0769f'
      }
    },
    {
      text1: 'uuta - tahiti',
      text2: '1.6m usd',
      text3: '1300 lines',
      styles: {
        'border-left': '4px solid #2AD2C0'
      }
    },
    {
      text1: 'sb05 - shore base',
      text2: '0.2m usd',
      text3: '195 lines',
      styles: {
        'border-left': '4px solid #8C9EFF'
      }
    },
    {
      text1: 'uupt - petronios',
      text2: '0.4m usd',
      text3: '220 lines',
      styles: {
        'border-left': '4px solid #FFB922'
      }
    }
  ];

  collapse(){
    this.isToggle = !this.isToggle;
  }

  constructor() { }

  ngOnInit() {
  }
}
