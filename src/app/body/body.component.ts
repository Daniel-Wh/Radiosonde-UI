import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor() { }

  oni: number;
  season: number;
  station: number;

  receiveStation($event) {
    this.station = $event;
    console.log(this.station);
  }

  receiveSeason($event) {
    this.season = $event;
    console.log(this.season);
  }

  receiveOni($event) {
    this.oni = $event;
    console.log(this.oni);
  }

  ngOnInit() {
  }
}
