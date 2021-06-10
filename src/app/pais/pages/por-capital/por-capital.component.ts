import { Component, OnInit } from '@angular/core';
import { City } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  capitales: City[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((resp) => {
        this.capitales = resp;
      }, (err) => {
        this.hayError = true;
        this.capitales = [];
      });
  }
}
