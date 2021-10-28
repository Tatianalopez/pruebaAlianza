import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { Cliente } from '../cliente/interfaces/client.interface';
import { ClienteService } from '../cliente/services/cliente.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.content.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() cliente: Cliente = {
    sharedKey: '',
    businessId: '',
    email: '',
    phone: 0

  };
  //busqueda: Busqueda = new Busqueda();
  constructor(public activeModal: NgbActiveModal, private clienteService: ClienteService, private modalService: NgbModal) { }

  ngOnInit(): void {
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated')
        }, false)
      })


  }
  crearCliente() {
    if (this.validate()) {
      this.clienteService.postCliente(this.cliente).subscribe((response: any) => {
        swal.fire('Guardar', `Cliente creado con exito con id: ${response.body.businessId}`, 'success');
        this.modalService.dismissAll();
      }, e => {
        console.log(e);
        swal.fire('Error', 'Error al crear el cliente ')
      });
    }
  

  }

  validate(): boolean {
    var forms = document.querySelectorAll('.needs-validation')
    var resp = true;
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {

        if (!form.checkValidity()) {

          resp = false;


        }
      })
    return resp;
  }
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) { }

  open(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'wolrd';
  }

}

