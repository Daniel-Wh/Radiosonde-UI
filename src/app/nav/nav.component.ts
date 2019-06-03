import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  scroll(name) {
    document.getElementById(name).scrollIntoView();
  }
  constructor() { }

  ngOnInit() {
  }

}
