import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentrosRoutingModule } from './centros-routing.module';
import { CentrosComponent } from './centros.component';

@NgModule({
  imports: [
    CommonModule,
    CentrosRoutingModule
  ],
  declarations: [CentrosComponent]
})
export class CentrosModule { }
