import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-section',
  template: `
    <section>
      <bbl-article1></bbl-article1>
      <figure class="right">
        <img src="assets/image_home_article1.jpg" alt="Salto BASE en nucleo urbano" title ="Salto BASE en nucleo urbano" class="rigth">
      </figure>
    </section>
    <section>
      <bbl-article2></bbl-article2>
      <figure class="left">
        <img src="assets/image_home_article3.jpg" alt="Salto BASE desde montaña" title="Salto BASE desde montaña" class ="left">
      </figure>
    </section>
    <section>
      <bbl-article3></bbl-article3>
      <figure class="right">
        <img src="assets/image_home_article2.jpg" alt="Equipamiento para salto base" title ="Equipamiento para salto base"class="rigth">
      </figure>
    </section>
  `,
  styles: [`
    .left{
      float: left;
    }
    .right{
      float: right;
    }
    figure{
      width: 100%;
      height: 100%;
     padding: 1%;
    }
    img{
        width: 100%;
        height:100%;
    }
  `]
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
