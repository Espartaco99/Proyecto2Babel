import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-about',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-10">
          <bbl-autores></bbl-autores>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
   // Router.navigate();
  }

}
