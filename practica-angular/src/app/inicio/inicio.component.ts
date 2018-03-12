import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-inicio',
  template: `
    <bbl-aside></bbl-aside>
    <bbl-section></bbl-section>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
