import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleThePage = false;
  popup:boolean=true;

  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
  }

  toggle() {
    this.toggleThePage = !this.toggleThePage;
    this.toggleService.toggleThePannel.next(this.toggleThePage);
  }
}
