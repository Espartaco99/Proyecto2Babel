import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-blog',
  template: `
    <bbl-entradas></bbl-entradas>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
