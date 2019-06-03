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
    { name: 'El Paso', id: 2 }
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
