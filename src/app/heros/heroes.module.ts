import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
// Cuando este la palabra module, es algo que va en el apartado del los imports

//CommonModule permite usar las directivas *ngIf, *ngFor e *ngSwitch cuando
// se emplean modulos
