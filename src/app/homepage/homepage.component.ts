import { Component } from '@angular/core';
import { NavComponent } from '../Components/nav/nav.component';
import { CarrosselComponent } from '../Components/carrossel/carrossel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, CarrosselComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
