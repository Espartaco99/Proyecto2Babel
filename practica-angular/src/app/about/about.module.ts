import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AutoresComponent } from './autores/autores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent, AutoresComponent, FormularioComponent, MuestraDatosComponent]
})
export class AboutModule { }
