import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompeticionesComponent } from './competiciones.component';

const routes: Routes = [{ path: '', component: CompeticionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompeticionesRoutingModule { }
