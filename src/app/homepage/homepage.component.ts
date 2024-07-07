import { Component } from '@angular/core';
import { NavComponent } from '../Components/nav/nav.component';
import { CarrosselComponent } from '../Components/carrossel/carrossel.component';
import { CarrosselLojaComponent } from '../Components/carrossel-loja/carrossel-loja.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, CarrosselComponent, CarrosselLojaComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
