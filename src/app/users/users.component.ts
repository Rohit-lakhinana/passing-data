import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Hero {
  name: string;
  age: number;
  email: string;
  city: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() data!: Hero[];
  @Output() heroSelected = new EventEmitter<Hero>();

  selectHero(hero: Hero) {
    this.heroSelected.emit(hero);
  }
}
