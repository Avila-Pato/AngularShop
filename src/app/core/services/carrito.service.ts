import { Injectable } from '@angular/core';
import { Carrito } from '../modelo/carrito';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoKey = 'carrito'; // Clave para localStorage
  listCarrito: any;

  // Obtener el carrito desde localStorage
  getCarrito(): Carrito[] {
    if (typeof window !== 'undefined') {  // Verifica si estamos en el navegador
      const carritoData = localStorage.getItem(this.carritoKey);
      return carritoData ? JSON.parse(carritoData) : [];
    }
    return [];  // Devuelve un arreglo vacío si no estamos en el navegador
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.listCarrito = this.getCarrito();
    }
  }
    

  // Guardar el carrito en localStorage
  private saveCarrito(carrito: Carrito[]): void {
    localStorage.setItem(this.carritoKey, JSON.stringify(carrito));
  }

  // Agregar producto al carrito
  agregar(producto: Producto, cantidad: number = 1): void {
    const carrito = this.getCarrito(); // Obtener el carrito actual
    const index = carrito.findIndex(item => item.producto.id === producto.id);

    if (index === -1) {
      // Producto no existe en el carrito, agregar nuevo
      carrito.push(new Carrito(producto, cantidad));
    } else {
      // Producto ya existe, actualizar cantidad
      carrito[index].cantidad += cantidad;
    }

    this.saveCarrito(carrito); // Guardar el carrito actualizado en localStorage
  }

  // Actualizar cantidad de un producto
  actualizar(productoId: number, cantidad: number): void {
    const carrito = this.getCarrito();
    const index = carrito.findIndex(item => item.producto.id === productoId);

    if (index !== -1 && cantidad > 0) {
      carrito[index].cantidad = cantidad;
    } else if (index !== -1 && cantidad <= 0) {
      // Si la cantidad es 0 o menos, eliminar el producto del carrito
      carrito.splice(index, 1);
    }

    this.saveCarrito(carrito); // Guardar cambios en localStorage
  }

  // Vaciar todo el carrito
  vaciarCarrito(): void {
    localStorage.removeItem(this.carritoKey);
  }

  // Obtener la cantidad de productos en el carrito actual
  cantidad() {
    const carrito = this.getCarrito();  // Obtener el carrito actual
    return carrito.length;
  }
  
//  Calcular el total del carrito
  total() {
    const carrito = this.getCarrito();
    const total = carrito.reduce((sum: number, item: { producto: { precio: number; }; cantidad: number; }) =>
       sum + item.producto.precio * item.cantidad, 0
    );
    return total;
  }

}
