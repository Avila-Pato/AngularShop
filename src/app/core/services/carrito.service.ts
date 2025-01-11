import { Injectable } from '@angular/core';
import { Carrito } from '../modelo/carrito';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  setCarrito(listaCarrito: Carrito[]) {
    throw new Error('Method not implemented.');
  }
  private listCarrito: Carrito[] = []


  getCarrito() {
    return this.listCarrito
  }

   agregar(producto: Producto, cantidad: number = 1) {
    const index = this.listCarrito.findIndex(carrito => carrito.producto.id === producto.id)

    if (index == -1) {
      const item = new Carrito(producto, cantidad)
      this.listCarrito.push(item)
    }else{
      this.actualizar(index, cantidad + this.listCarrito[index].cantidad)

    }
}
actualizar(index: number, cantidad: number) {
  if(index > 0 && index < this.listCarrito.length){
    this.listCarrito[index].cantidad = cantidad
  }
}
}
