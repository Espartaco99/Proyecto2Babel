import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-inicio',
  template: `
    <bbl-section></bbl-section>
    <bbl-aside></bbl-aside>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
