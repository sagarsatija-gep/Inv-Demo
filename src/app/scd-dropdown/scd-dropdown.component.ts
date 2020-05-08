import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scd-dropdown',
  templateUrl: './scd-dropdown.component.html',
  styleUrls: ['./scd-dropdown.component.css']
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
