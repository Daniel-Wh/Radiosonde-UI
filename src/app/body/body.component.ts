import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {
  constructor(private   http: HttpClient) { }

  oni: number;
  season: number;
  station: number;

  onSubmit() {
    const body = JSON.stringify({'oni': this.oni, 'season': this.season, 'station': this.station});
    const url = 'http://127.0.0.1:5000/vis';
    const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(url, body, headers).subscribe(
      response => {
        return console.log(response);
      },
      err => {
        return console.log(err);
      }
    );
    console.log()
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
  ngAfterViewInit() {
  }
}
