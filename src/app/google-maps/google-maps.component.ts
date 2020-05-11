import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent   {
  // google maps zoom level
  zoom: number = 5;


  // initial center position for the map
  lat: number = 34.5199;
  lng: number = -105.8701;
  locations=[
    {
      name:"Refineries",
      value:"8",
      color:"green"
    },
    {
      name:"Distribution Centers",
      value:"2",
      color:"blue"
    },
    {
      name:"Retail Outlets",
      value:"5",
      color:"purple"
    },
    {
      name:"Customer Locations",
      value:"2",
      color:"red"
    }
  ]

  items=[
    {
      name:"Low Inventory",
      value:"8",
      color:"purple"
    },
    {
      name:"Overstocked",
      value:"987",
      color:"blue"
    },
    {
      name:"Products Line",
      value:"1843",
      color:"green"
    },
    {
      name:"Categories",
      value:"886",
      color:"red"
    }
  ]

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl:""
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
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
      draggable: false,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    },
    {
		  lat: 51.723858,
		  lng: 6.895982,
		  label: 'D',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    },
    {
		  lat: 32.2226,
		  lng: -110.9747,
		  label: '',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    },
    {
		  lat: 33.4484,
		  lng: -112.0740,
		  label: '',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    },
    {
		  lat: 34.0522,
		  lng: -118.2437,
		  label: '',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    },
    {
		  lat: 32.7157,
		  lng: -117.1611,
		  label: '',
      draggable: true,
      iconUrl:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
    
    
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  iconUrl:string
}
