import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0,
  }

  emitCharacter(): void {
    //console.log(this.character);
    //Validación para que no mande un dato vacio
    if( this.character.name.length == 0 ) return ;

   //Le mandamos el objeto por propiedad a la función definida. Pasar el objeto por referencia
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }

}
