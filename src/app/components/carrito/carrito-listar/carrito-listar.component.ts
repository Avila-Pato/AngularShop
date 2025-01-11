import { CommonModule } from '@angular/common';
import { Component, OnInit, TrackByFunction, inject } from '@angular/core';
import { Carrito } from '../../../core/modelo/carrito';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-carrito-listar',
  standalone: true, // Si estás utilizando standalone components
  imports: [CommonModule],
  templateUrl: './carrito-listar.component.html',
  styleUrls: ['./carrito-listar.component.css'], // Corregido el plural de 'styleUrls'
})
export class CarritoListarComponent implements OnInit {
  private carritoService = inject(CarritoService);

  listaCarrito: Carrito[] = []; // Inicializa el carrito como un arreglo vacío

  // Definir la función trackBy para optimización
  trackByFn: TrackByFunction<Carrito> = (index, item) => item.producto.id;

  ngOnInit(): void {
    this.getListCarrito();
  }

  // Método para obtener los elementos del carrito
  getListCarrito(): void {
    this.listaCarrito = this.carritoService.getCarrito();
  }

  // Método para eliminar un elemento del carrito
  eliminarItem(item: Carrito): void {
    this.listaCarrito = this.listaCarrito.filter(
      (carritoItem) => carritoItem.producto.id !== item.producto.id
    );
    this.carritoService.setCarrito(this.listaCarrito); // Si tienes un método para actualizar el carrito en el servicio
  }
}
