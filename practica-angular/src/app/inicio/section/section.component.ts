import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-section',
  template: `
      <section class="col-7">
        <bbl-article1 class="col-8"></bbl-article1>
        <figure class="col-4">
        <img src="assets/image_home_article1.jpg" alt="Salto BASE en nucleo urbano" title ="Salto BASE en nucleo urbano">
     </figure>
      </section>
      <section class="row">
        <bbl-article2 class="col-6"></bbl-article2>
        <div  class="col-6">
        <figure  >
            <img class="col" src="assets/image_home_article3.jpg" alt="Salto BASE desde montaña"
            title="Salto BASE desde montaña" >
          </figure>
          </div>

      </section>
      <div>
      <section class="row">
        <bbl-article3 class="col-6 left"></bbl-article3>
        <figure>
          <img class="img-fluid" src="assets/image_home_article2.jpg"
           alt="Equipamiento para salto base" title ="Equipamiento para salto base">
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
