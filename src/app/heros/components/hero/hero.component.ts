import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //Propiedad
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }


  //Método
  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {

    this.name = 'Kratos'

  }

  changeAge(): void {

    this.age = 25;

  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 25;
  }

}
