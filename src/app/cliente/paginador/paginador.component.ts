import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() paginador: any;
  paginas: number[] = [];
  @Output('buscar') buscar: EventEmitter<number> = new EventEmitter();
  desde: number = 0;
  hasta: number = 0;

  callParent(page: number): void {
    this.buscar.emit(page - 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.paginador) {
      this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
      this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);
      if (this.paginador.totalPages > 5) {
        this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde);
      } else {
        this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1);
      }
    }
  }

}
