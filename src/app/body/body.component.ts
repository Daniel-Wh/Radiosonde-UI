import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private   http: HttpClient) { }

  oni: number;
  season: number;
  station: number;

  onSubmit() {
    const body = {'oni': this.oni, 'season': this.season, 'station': this.station};
    const url = '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post(url, body, {headers});
    console.log(body);
  }
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
