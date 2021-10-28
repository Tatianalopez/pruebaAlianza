import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { PaginadorComponent } from './cliente/paginador/paginador.component';
import { ModalComponent, NgbdModalComponent } from './cliente/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente/cliente/services/cliente.service';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './cliente/cliente/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PaginadorComponent,
    ModalComponent,
    NgbdModalComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [
    ClienteService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
