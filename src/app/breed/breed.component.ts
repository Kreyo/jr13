import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  dogs: any[] = [];
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id === 'unknown') {
          this.errorMessage = 'This breed is unknown!';
      } else {
        fetch(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}`, {
            headers: {
              'x-api-token': '1ecd4060-0d42-4147-a766-75a16abfc4c9'
            }
          })
            .then(result => result.json())
            .then(result => this.dogs = result);
        }
    });
  }

}
