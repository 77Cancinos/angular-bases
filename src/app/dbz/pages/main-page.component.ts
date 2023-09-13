import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Hacemos la injeccion de dependencias
  constructor(private dbzService: DbzService) {

  }

  //Al hacer privada la instancia del constructor, creamos un metodo get publico para obtener dichos valores
  get characters(): Character[] {
    return [...this.dbzService.characters];
    //Retorna el array de caracteres del servicio
  }

  //Creamos una función por medio del servicio accedemos a la función que lo elimina, le mandamos
  //por parametros el id
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }


}
