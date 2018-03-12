import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-section',
  template: `
  <div class="container">
      <section class="row">
        <bbl-article1 class="col-6"></bbl-article1>
        <figure class="col-6">
          <img src="assets/image_home_article1.jpg" alt="Salto BASE en nucleo urbano" title ="Salto BASE en nucleo urbano" class="rigth">
        </figure>
      </section>
      <section class="row">
        <bbl-article2 class="col-6"></bbl-article2>
        <figure class="col-6">
          <img src="assets/image_home_article3.jpg" alt="Salto BASE desde montaña" title="Salto BASE desde montaña" class ="left">
        </figure>
      </section>
      <section class="row">
        <bbl-article3 class="col-6"></bbl-article3>
        <figure class="col-6">
          <img src="assets/image_home_article2.jpg" alt="Equipamiento para salto base" title ="Equipamiento para salto base"class="rigth">
        </figure>
      </section>
    </div>
  `,
  styles: [`
  `]
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
