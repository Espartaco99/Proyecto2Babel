import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AutoresComponent } from './autores/autores.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [{ path: '', component: AutoresComponent },
/* { path: 'autores', component: AutoresComponent },
 { path: 'formulario', component: FormularioComponent },*/
 { path: '../autores', component: AutoresComponent },
 { path: '../formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
