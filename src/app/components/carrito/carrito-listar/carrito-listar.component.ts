import { Component, OnInit, TrackByFunction, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carrito } from '../../../core/modelo/carrito';
import { CarritoService } from '../../../core/services/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-listar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './carrito-listar.component.html',
  styleUrls: ['./carrito-listar.component.css'],
})
export class CarritoListarComponent implements OnInit {
  public carritoService = inject(CarritoService);

  listaCarrito: Carrito[] = [];

  trackByFn: TrackByFunction<Carrito> = (index, item) => item.producto.id;

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(): void {
    this.listaCarrito = this.carritoService.getCarrito();
  }

  eliminarItem(item: Carrito): void {
    this.carritoService.actualizar(item.producto.id, 0); // Eliminar el producto
    this.getListCarrito(); // Actualizar la lista del componente
  }
}
