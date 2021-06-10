import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisByCode(param.id))
        )
      .subscribe((resp) => {
        this.pais = resp;
      });

    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //     this.paisService.getPaisByCode(id)
    //     .subscribe(pais => {

    //     })
    //   });
  }
}
