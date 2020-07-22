import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast-popup',
  templateUrl: './toast-popup.component.html',
  styleUrls: ['./toast-popup.component.css']
})
export class ToastPopupComponent implements OnInit {
  @Input() toast;
  constructor() { }

  ngOnInit() {
  }

}
