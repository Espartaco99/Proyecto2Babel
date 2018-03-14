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
    this.entrada = {id: '',
      autor: '',
      email: '',
      titulo: '',
      palabrasClave: [],
      texto: '',
    };
    const id = this.activatedRoute.snapshot.params['id'];
    this.entradasService.getEntrada(id).then((value) => { this.entrada = value; })
    .catch(() => alert('Fallo en entradas components, bbdd no inicializada o no existe entradas'));
  }

  gotoBlog() {
    this.router.navigateByUrl('/blog');
  }

}
