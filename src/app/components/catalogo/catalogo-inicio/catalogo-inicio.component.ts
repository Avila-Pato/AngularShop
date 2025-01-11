import { Producto } from '../../../core/modelo/producto';
import { ProductoService } from './../../../core/services/producto.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-inicio',
  imports: [],
  templateUrl: './catalogo-inicio.component.html',
  styleUrl: './catalogo-inicio.component.css'
})
export class CatalogoInicioComponent implements OnInit {
  private productoService = inject(ProductoService)
  productos: Producto[] = []

  ngOnInit(): void {
    // de esta forma llamamos al servicio cuando getProductos() es llamado
    this.getProductos()
    
  }
  getProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data
        // console.log(this.productos)
      },
      error: (err) => console.error(err)
    })
  }
}
