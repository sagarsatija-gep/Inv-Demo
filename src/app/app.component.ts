import { RfidPopUpComponent } from './../shared/popUpComponent/RFIDPopUp/rfidPopUp.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpService } from './../shared/form-widget/service/popUp.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showToast = true;
  prevData = [];
  rfidData = [];

  constructor(private popUpSerVice: PopUpService,public modalService: NgbModal){}

  ngOnInit() {
    this.popUpSerVice.apiCallForBarCodeNumber();
    this.popUpSerVice.rfidGlob.subscribe( data => {
      this.rfidData = data;
      if(this.rfidData.length != this.prevData.length) {
        this.showToast = true;
        this.prevData = this.rfidData;
        setTimeout(() => {
          debugger;
          this.showToast = false;          
        }, 3000);
      }
      
    })
  }

  rideFunction() {
  }

  hideToast() {
    this.showToast = false;
    this.rfidPopUp();
  }
  rfidPopUp() {
        const modalRef = this.modalService.open(RfidPopUpComponent, { size: 'lg' });
        modalRef.componentInstance.name = this.rfidData;
  }
  

}
