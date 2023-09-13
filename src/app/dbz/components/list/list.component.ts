import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Comunicación entre componentes (Recibir del padre)
  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 50
  }]

  @Output()
  onDelete : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje
    //console.log(index);

    if( !id ) return;
    //console.log({ id });
    this.onDelete.emit(id);
  }


}
