import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { Article1Component } from './section/article1/article1.component';
import { Article2Component } from './section/article2/article2.component';
import { Article3Component } from './section/article3/article3.component';
import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  declarations: [AsideComponent, SectionComponent, Article1Component, Article2Component, Article3Component, InicioComponent],
  exports: [InicioComponent]
})
export class InicioModule { }
