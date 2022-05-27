import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-filtros',
  templateUrl: './section-filtros.component.html',
  styleUrls: ['./section-filtros.component.css']
})
export class SectionFiltrosComponent implements OnInit {

  mostrarCard = true

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCardFiltros(){
    this.mostrarCard = !this.mostrarCard
  }

}
