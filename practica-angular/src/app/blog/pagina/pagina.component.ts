import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntradasService } from '../../servicios/entradas.service';
import { Entradas } from '../../modelos/entradas';

@Component({
  selector: 'bbl-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  entrada: Entradas;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private entradasService: EntradasService) { }

  ngOnInit() {
   
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.entrada = this.entradasService.getEntrada(id);
    console.log(this.entrada);
  }

  gotoBlog() {
    this.router.navigateByUrl('/blog');
  }

}
