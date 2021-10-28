import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Busqueda } from './interfaces/busqueda.interface';
import { Cliente } from './interfaces/client.interface';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  busqueda: Busqueda = { 
      pagina: 0,
      search: ''
  }
  paginador: any;
  clientes: Cliente[] = [];
  constructor( private clienteService : ClienteService, private modalService : NgbModal) { } 


  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(){
    this.busqueda.pagina = 0;
    this.clienteService.getCliente(this.busqueda).subscribe((response: any) => {
     this.clientes = response.body.content as Cliente[];
     console.log(this.clientes);
     console.log(response);
     this.paginador = response.body;
    });
  }
  
  getClienteByShared(){
    if(this.busqueda.search.length >0){
      this.clienteService.getClienteyShared(this.busqueda).subscribe((response: any) => {
        this.clientes = response.body as Cliente[];
       console.log(this.clientes);
       console.log(response);
       this.paginador = response.body;
      });
    } else {
      this.getCliente();
    }
    
  }

  buscarPaginado(page: number): void{
    this.busqueda.pagina = page;
    this.clienteService.getCliente(this.busqueda).subscribe((response: any) => {
      this.clientes = response.body.content as Cliente[];
      console.log(this.clientes);
      console.log(response);
      this.paginador = response.body;
    }
    );
  }
  crearClienteModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
  }

}
