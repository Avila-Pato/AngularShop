import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   // Inyectar el servicio para acceder al numero del carrito y este aumente
  public carritoService = inject(CarritoService);

}
