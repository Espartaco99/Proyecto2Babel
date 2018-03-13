import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaRoutingModule } from './historia-routing.module';
import { HistoriaComponent } from './historia.component';

@NgModule({
  imports: [
    CommonModule,
    HistoriaRoutingModule
  ],
  declarations: [HistoriaComponent],
  exports: []
})
export class HistoriaModule { }
