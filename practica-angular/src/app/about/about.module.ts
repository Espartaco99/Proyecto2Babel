import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AutoresComponent } from './autores/autores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';
import { FormsModule } from '@angular/forms';
import { MostrarDatosService } from '../servicios/mostrarDatos.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
  ],
  declarations: [
    AboutComponent,
    AutoresComponent,
    FormularioComponent,
    MuestraDatosComponent
  ],
  providers: [
    MostrarDatosService
  ]
})
export class AboutModule { }
