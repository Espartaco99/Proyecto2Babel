import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentrosComponent } from './centros.component';

const routes: Routes = [{ path: '', component: CentrosComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentrosRoutingModule { }
