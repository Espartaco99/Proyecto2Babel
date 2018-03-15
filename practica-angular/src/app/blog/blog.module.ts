import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EntradasComponent } from './entradas/entradas.component';
import { PaginaComponent } from './pagina/pagina.component';
import { EntradasService } from '../servicios/entradas.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  declarations: [BlogComponent,
     FormularioComponent,
      EntradasComponent,
       PaginaComponent],
  providers: [EntradasService]
})
export class BlogModule { }
