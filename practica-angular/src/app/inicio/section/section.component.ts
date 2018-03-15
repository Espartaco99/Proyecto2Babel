import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-section',
  template: `
      <section>
        <bbl-article1 ></bbl-article1>
        <bbl-article2  class="row" ></bbl-article2>
        <bbl-article3 class="row" ></bbl-article3>

      </section>

  `,
  styles: [`
  `]
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
