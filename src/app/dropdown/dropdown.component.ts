import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public selected_station = 0;
  public selected_season = 0;
  public selected_oni = 0;

  stations = [
    {name: 'Select Station', id: 99},
    {name: 'All Stations', id: 0},
    { name: 'Lake Charles', id: 1},
    { name: 'El Paso', id: 2 },
    { name: 'Midland', id: 3 },
    { name: 'Del Rio', id: 4 },
    { name: 'Corpus Christi', id: 5 },
    { name: 'Lake Charles', id: 6 },
    { name: 'Slidell', id: 7 },
    { name: 'Jackson', id: 8 },
    { name: 'Shelby', id: 9 },
    { name: 'Tallahassee', id: 10 },
    { name: 'Miami', id: 11 },
    { name: 'Tampa', id: 12 },
    { name: 'Jacksonville', id: 13 },
    { name: 'Key West', id: 14 },
    { name: 'Brownsville', id: 15 }
  ];
  seasons = [
    {name: 'Select Season', id: 99},
    {name: 'all seasons', id: 100},
    {name: 'Spring', id: 101},
    {name: 'Summer', id: 102},
    {name: 'Fall', id: 103},
    {name: 'Winter', id: 104}
  ];
  oni = [
    {option: 'Oceanic Nino Index', id: 99 },
    {option: 'No ONI specification', id: 200},
    {option: 'El Nino', id: 201},
    {option: 'La Nina', id: 202},
    {option: 'Neutral', id: 203}
  ];

  onSelectStation(station_id: number) {
    this.selected_station = station_id;
    console.log(this.selected_station)
  }

  onSelectSeason(season_id: number) {
    this.selected_season = season_id;
    console.log(this.selected_season)
  }
  onSelectOni(oni_id: number) {
    this.selected_oni = oni_id;
    console.log(this.selected_oni)
  }

  constructor() { }

  ngOnInit() {
  }

}
