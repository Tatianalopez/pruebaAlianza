import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { HomeComponent } from './cliente/cliente/home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'cliente',
        component: ClienteComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'cliente'
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


