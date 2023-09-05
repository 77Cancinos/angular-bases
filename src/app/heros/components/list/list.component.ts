import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public puttyNames: string[] = ['Lana Rhoades', 'Eva Elfie', 'Adriana Chechik',
                                  'Remy Lacroix', 'Emily Willis', 'Riley Reid', 'Lena Paul',
                                  'Mia Melano', 'Brandi Love', 'Lisa Ann'];

  public pupiDeleted?:string;

  revomeLastPupi(): void {
    this.pupiDeleted = this.puttyNames.pop();
  }

}
