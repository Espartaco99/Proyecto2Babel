import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AutoresComponent } from './autores/autores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';

const routes: Routes = [{ path: '', pathMatch: ' full', redirectTo: 'autores' },
 { path: 'autores', component: AutoresComponent },
 { path: 'formulario', component: FormularioComponent },
  { path: 'muestra-datos', component: MuestraDatosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
