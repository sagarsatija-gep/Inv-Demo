import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent {
  // google maps zoom level
  zoom: number = 8;


  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  locations = [
    {
      name: "Refineries",
      value: "8",
      color: "green"
    },
    {
      name: "Distribution Centers",
      value: "2",
      color: "blue"
    },
    {
      name: "Retail Outlets",
      value: "5",
      color: "purple"
    },
    {
      name: "Customer Locations",
      value: "2",
      color: "red"
    }
  ]

  items = [
    {
      name: "Low Inventory",
      value: "8",
      color: "purple"
    },
    {
      name: "Overstocked",
      value: "987",
      color: "blue"
    },
    {
      name: "Products Line",
      value: "1843",
      color: "green"
    },
    {
      name: "Categories",
      value: "886",
      color: "red"
    }
  ]

  filters = [
    {
      filterName: 'Department',
      type: 'multi-select',
      styles: { "flex": "0 0 11.5%", "max-width": "11.5%", "padding": "0 3px" },
      options: [
        {
          name: 'Women',
          selected: true
        },
        {
          name: 'Beauty',
          selected: true
        },
        {
          name: 'Men',
          selected: true
        },
        {
          name: 'Kids & Baby',
          selected: true
        },
        {
          name: 'Shoes',
          selected: true
        },
        {
          name: 'Home',
          selected: true
        },
        {
          name: 'Bed & Bath',
          selected: true
        },
        {
          name: 'Furniture',
          selected: true
        },
        {
          name: 'Handbags & Accessories',
          selected: true
        },
        {
          name: 'Jewelry',
          selected: true
        },
        {
          name: 'Watches',
          selected: true,
          values: [
            {
              name: 'Smart Watches',
              selected: true
            }
          ]
        }
      ]
    },
    {
      filterName: 'Category',
      type: 'multi-select',
      styles: { "flex": "0 0 10.5%", "max-width": "10.5%", "padding": "0 3px" },
      options: [
        {
          name: "Women's Clothing",
          selected: true
        },
        {
          name: "Women's Shoes",
          selected: false
        },
        {
          name: 'Handbags & Accessories',
          selected: false
        },
        {
          name: 'Jewelry & Watches',
          selected: false
        },
        {
          name: 'Makeup',
          selected: false
        },
        {
          name: 'Perfume',
          selected: false
        },
        {
          name: 'Others',
          selected: false
        }
      ]
    },
    {
      filterName: 'Brands',
      type: 'multi-select',
      styles: { "flex": "0 0 9.5%", "max-width": "9.5%", "padding": "0 3px" },
      options: [
        {
          name: 'Alfani',
          selected: true
        },
        {
          name: 'Calvin Klein',
          selected: true
        },
        {
          name: 'DKNY',
          selected: true
        },
        {
          name: 'Lauren Ralph Lauren',
          selected: true
        },
        {
          name: "Levi's",
          selected: true
        },
        {
          name: 'Nike',
          selected: true
        },
        {
          name: 'Tommy Hilfinger',
          selected: true
        },
        {
          name: 'Vince Camuto',
          selected: true
        },
        {
          name: 'Style & Co',
          selected: true
        }
      ]
    },
    {
      filterName: 'State',
      type: 'multi-select',
      styles: { "flex": "0 0 8.5%", "max-width": "8.5%", "padding": "0 3px" },
      options: [
        {
          name: 'Alabama',
          selected: true
        },
        {
          name: 'Arizone',
          selected: true
        },
        {
          name: 'California',
          selected: true
        },
        {
          name: 'Colorado',
          selected: true
        },
        {
          name: 'Connecticut',
          selected: true
        },
        {
          name: 'Delaware',
          selected: true
        },
        {
          name: 'Florida',
          selected: true
        },
        {
          name: 'Georgia',
          selected: true
        },
        {
          name: 'Guam',
          selected: true
        },
        {
          name: 'Hawaii',
          selected: true
        },
        {
          name: 'Idaho',
          selected: true
        },
        {
          name: 'Illinois',
          selected: true
        },
        {
          name: 'Indiana',
          selected: true
        },
        {
          name: 'Kansas',
          selected: true
        },
        {
          name: 'Massachusetts',
          selected: true
        },
        {
          name: 'Missouri',
          selected: true
        },
        {
          name: 'Nevada',
          selected: true
        },
        {
          name: 'New Jersey',
          selected: true
        },
        {
          name: 'New Mexico',
          selected: true
        },
        {
          name: 'New York',
          selected: true
        },
        {
          name: 'Washington',
          selected: true
        }
      ]
    },
    {
      filterName: 'City',
      type: 'multi-select',
      styles: { "flex": "0 0 9.5%", "max-width": "8.5%", "padding": "0 3px" },
      options: [
        {
          name: 'Hoover',
          selected: true
        },
        {
          name: 'Arcadia',
          selected: true
        },
        {
          name: 'Burbank',
          selected: true
        },
        {
          name: 'Aventura',
          selected: true
        },
        {
          name: 'Boca Raton',
          selected: true
        },
        {
          name: 'Brandon',
          selected: true
        },
        {
          name: 'Clear Water',
          selected: true
        }
      ]
    },
    {
      filterName: 'Location',
      type: 'multi-select',
      styles: { "flex": "0 0 10.5%", "max-width": "9.5%", "padding": "0 3px" },
      options: [
        {
          name: 'Stores',
          selected: true
        },
        {
          name: 'Warehouse',
          selected: true
        },
        {
          name: 'Distribution Center',
          selected: true
        }
      ]
    },
    {
      filterName: 'Sale and clearance',
      type: 'toggle-button',
      styles: { "flex": "0 0 13.5%", "max-width": "13.5%", "padding": "0 3px" },
      dataWidth: "150",
      selected: true
    },
    {
      filterName: 'Limited Time Specials',
      type: 'toggle-button',
      styles: { "flex": "0 0 16%", "max-width": "16%", "padding": "0 3px" },
      dataWidth: "180",
      selected: false
    },
    {
      filterName: 'Promotions',
      type: 'toggle-button',
      styles: { "flex": "0 0 11.5%", "max-width": "11.5%", "padding": "0 3px" },
      dataWidth: "120",
      selected: true
    }
  ]

  filterValues = ['Refineries', 'Retail outlets', 'Distribution centers', 'MRO', 'Global'];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: ""
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    },
    {
      lat: 51.723858,
      lng: 6.895982,
      label: 'D',
      draggable: true,
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    },
    {
      lat: 50.723858,
      lng: 7.895982,
      label: 'E',
      draggable: true,
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    },


  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl: string
}
