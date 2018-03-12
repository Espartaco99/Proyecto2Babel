import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule'},
  { path: 'historia', loadChildren: './historia/historia.module#HistoriaModule'},
  { path: 'competiciones', loadChildren: './competiciones/competiciones.module#CompeticionesModule'},
  { path: 'centros', loadChildren: './centros/centros.module#CentrosModule'},
  { path: 'about', loadChildren: './about/about.module#AbuotModule'}
  // { path: 'inicio', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
