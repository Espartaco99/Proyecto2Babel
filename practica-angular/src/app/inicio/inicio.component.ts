import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-inicio',
  template: `
  <div class="container-fluid row">
  <bbl-aside class="p-2"></bbl-aside>
  <bbl-section class="col"></bbl-section>

  </div>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
