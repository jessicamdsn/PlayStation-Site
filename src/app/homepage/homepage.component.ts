import { Component } from '@angular/core';
import { NavComponent } from '../Components/nav/nav.component';
import { CarrosselComponent } from '../Components/carrossel/carrossel.component';
import { CarrosselLojaComponent } from '../Components/carrossel-loja/carrossel-loja.component';
import { JogosComponent } from '../Components/jogos/jogos.component';
import { PlayPlusComponent } from '../Components/play-plus/play-plus.component';
import { RealidadeComponent } from '../Components/realidade/realidade.component';
import { LancamentoComponent } from '../Components/lancamento/lancamento.component';
import { PlaystationStoreComponent } from '../Components/playstation-store/playstation-store.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NavComponent, 
    CarrosselComponent, 
    CarrosselLojaComponent, 
    JogosComponent, 
    PlayPlusComponent, 
    RealidadeComponent,
    LancamentoComponent,
    PlaystationStoreComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
