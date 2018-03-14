import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'entradas/:id', component: PaginaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
