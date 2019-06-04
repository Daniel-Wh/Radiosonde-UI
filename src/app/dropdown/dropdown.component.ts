import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  stations = [
    {
      name: 'all stations', id: 0
    },
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
    {name: 'all seasons', id: 100},
    {name: 'Spring', id: 101},
    {name: 'Summer', id: 102},
    {name: 'Fall', id: 103},
    {name: 'Winter', id: 104}
  ];
  oni = [
    {option: 'No ONI specification', id: 200},
    {option: 'El Nino', id: 201},
    {option: 'La Nina', id: 202},
    {option: 'Neutral', id: 203}
  ];

  constructor() { }

  ngOnInit() {
  }

}
