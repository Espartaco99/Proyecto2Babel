import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-inicio',
  template: `
  <div class="container">
    <div class="row">
        <bbl-section  class="col-7"></bbl-section>
        <bbl-aside ></bbl-aside>
    </div>
  </div>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
