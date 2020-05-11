import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scd-dropdown',
  templateUrl: './scd-dropdown.component.html',
  styleUrls: ['./scd-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScdDropdownComponent implements OnInit {
  @Input() config;
  public searchTerm; // Using Ng2SearchPipeModule

  constructor() { }

  ngOnInit() {
  }

  stopClosing(event) {
    event.stopPropagation()
  }
}
