import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.css',
  animations: [
    trigger('animacaoPiscar', [
      state('inicio', style({
        opacity: 1
      })),
      state('sumir', style({
        opacity: 0.2
      })),
      transition('inicio => sumir', animate('0s ease-out')),
      transition('sumir => inicio', animate('500ms ease-in'))
    ])
  ]
})
export class JogosComponent {


  jogos = [
    { 
      nome: 'Brothers: A tale of two sons',
      image: '../../../assets/jogos/brothers.png',
    },
    { 
      nome: 'Burnout paradise',
      image: '../../../assets/jogos/burnout.png',
    },
    { 
      nome: 'The cave',
      image: '../../../assets/jogos/thecave.png',
    },
    { 
      nome: 'Left 4 dead',
      image: '../../../assets/jogos/left4dead.png',
    },
    { 
      nome: 'Max payne 3',
      image: '../../../assets/jogos/maxpayne.png',
    },
    { 
      nome: 'Gta San Andreas',
      image: '../../../assets/jogos/gta.png',
    },
    { 
      nome: 'Rayman Legends',
      image: '../../../assets/jogos/rayman.png',
    },
    { 
      nome: 'Injustice 2',
      image: '../../../assets/jogos/injustice.png',
    },
    { 
      nome: 'Forza motorsport 4',
      image: '../../../assets/jogos/forza.png',
    },
    { 
      nome: 'Street fight IV',
      image: '../../../assets/jogos/streetfight.png',
    },
    { 
      nome: 'Portal',
      image: '../../../assets/jogos/portal.png',
    },
    { 
      nome: 'Duck Tales',
      image: '../../../assets/jogos/tiopatinhas.png',
    },
  ];

  breve = [
    { 
      nome: 'Call of Duty: Black Ops 6',
      image: '../../../assets/jogos/callofduty.png',
    },
    { 
      nome: 'NBA 2k24',
      image: '../../../assets/jogos/nba2k24.png',
    },
    { 
      nome: 'Assassins Creed Shadows ',
      image: '../../../assets/jogos/assassins.png',
    },
    { 
      nome: 'Marvels spider-man 2',
      image: '../../../assets/jogos/spiderman.png',
    },
    { 
      nome: 'God of War Ragnarök',
      image: '../../../assets/jogos/godofwar.png',
    },
    { 
      nome: 'Horizon forbidden west',
      image: '../../../assets/jogos/horizon.png',
    },
    { 
      nome: 'Fifa 23',
      image: '../../../assets/jogos/fifa23.png',
    },
    { 
      nome: 'Overcooked 2',
      image: '../../../assets/jogos/overcooked.png',
    },
    { 
      nome: 'Astro bot',
      image: '../../../assets/jogos/astrobot.png',
    },
    { 
      nome: 'Lego Fortnite',
      image: '../../../assets/jogos/legofortnite.png',
    },
    { 
      nome: 'the last of us part 2',
      image: '../../../assets/jogos/thelastosus.png',
    },
    { 
      nome: 'Stellar blade',
      image: '../../../assets/jogos/stellar.png',
    },
  ];

  selectedButton: string = 'antigos';

  selectButton(button: string) {

    this.selectedButton = button;
  }


  estadoAnimacao = 'inicio';

  iniciarAnimacao() {

    this.estadoAnimacao = 'sumir';

    setTimeout(() => {

      this.estadoAnimacao = 'inicio';

    }, 100); 
  }
  
}
