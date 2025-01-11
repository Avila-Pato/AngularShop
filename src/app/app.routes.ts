import { Routes } from '@angular/router';
import path from 'path';
import { CatalogoInicioComponent } from './components/catalogo/catalogo-inicio/catalogo-inicio.component';
import { CarritoListarComponent } from './components/carrito/carrito-listar/carrito-listar.component';

export const routes: Routes = [
    {path: "", component: CatalogoInicioComponent},
    {path: "carrito", component: CarritoListarComponent},
    {path: "**", pathMatch: "full", redirectTo: "/"}, // Redirige a la ruta principal si es que el usuario coloca una ruta mal escrita
    
];
