import { RfidPopUpComponent } from './../shared/popUpComponent/RFIDPopUp/rfidPopUp.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpService } from './../shared/form-widget/service/popUp.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  showToast ;
  prevData = [];
  rfidData = [];

  rfidSubscription: Subscription;

  constructor(private popUpSerVice: PopUpService,public modalService: NgbModal){}

  ngOnInit() {
    this.popUpSerVice.apiCallForBarCodeNumber();
    this.rfidSubscription = this.popUpSerVice.rfidGlob.subscribe( data => {
      this.rfidData = data;
      if(this.rfidData.length != this.prevData.length && this.rfidData.length > 0 ) {
        this.showToast = true;
        this.prevData = this.rfidData;
        setTimeout(() => {
          debugger;
          this.showToast = false;          
        }, 3000);
      }
      
    })
  }

  ngOnDestroy() {
    this.rfidSubscription.unsubscribe();
  }

  rideFunction() {
  }

  hideToast() {

    this.showToast = false;
    this.rfidPopUp();
  }

  rfidPopUp() {
        const modalRef = this.modalService.open(RfidPopUpComponent, { size: 'sm' });
        modalRef.componentInstance.name = this.rfidData;
  }
  

}
