import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch('https://api.thedogapi.com/v1/images/search?limit=15', {
      headers: {
        'x-api-token': '1ecd4060-0d42-4147-a766-75a16abfc4c9'
      }
    })
      .then(result => result.json())
      .then(result => this.dogs = result);
  }

}
