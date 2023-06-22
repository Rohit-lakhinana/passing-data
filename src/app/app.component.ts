import { Component } from '@angular/core';

interface Hero {
  name: string;
  age: number;
  email: string;
  city: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passing-data';
  data = [
    {
      name: 'Bruce',
      age: 30,
      email: 'bruce@example.com',
      city: 'vizag City'
    },
    {
      name: 'vishal',
      age: 28,
      email: 'vishal@example.com',
      city: 'vsp'
    },
    {
      name: 'rahul',
      age: 32,
      email: 'rahul@example.com',
      city: 'bangalore'
    }
  ];

  selectedHero: Hero | undefined;

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }
}
