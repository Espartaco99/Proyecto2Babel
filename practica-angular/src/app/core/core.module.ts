import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [CoreComponent, HeaderComponent, FooterComponent, MenuComponent],
  exports: [HeaderComponent, FooterComponent, MenuComponent]
})
export class CoreModule { }
