import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Evitemos usar any (Se uso la interfaz)
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 8000
  }];

  addCharacter( character: Character ): void {
    // console.log('Main Page');
    // console.log(character);
                                //Tomamos todas las propiedades y las exparsimos, agregandole al uuid
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index: number) : void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
