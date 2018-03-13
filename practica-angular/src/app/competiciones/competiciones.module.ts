import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompeticionesRoutingModule } from './competiciones-routing.module';
import { CompeticionesComponent } from './competiciones.component';

@NgModule({
  imports: [
    CommonModule,
    CompeticionesRoutingModule
  ],
  declarations: [CompeticionesComponent]
})
export class CompeticionesModule { }
