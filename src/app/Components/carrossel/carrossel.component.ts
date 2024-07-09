
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID, AfterViewInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  
  slides = [
    {
      headline: 'Escape usando Portais',
      content: 'Desafie a IA manipuladora GLaDOS usando a maquina de abrir portais, explore os enigmas desafiadores, onde a física e a lógica se encontram em um jogo de quebra-cabeças revolucionário. ',
      logo: '../../../assets/imgs/logo-portal.png',
      background: '../../../assets/imgs/portal.png'
    },
    {
      headline: 'Descubra o Poder da Magia',
      content: 'Entre no mundo mágico de Hogwarts e explore seu destino como um bruxo ou bruxa lendário nesta emocionante jornada pelo universo de Harry Potter.',
      logo: '../../../assets/imgs/logo-hogwarts.png',
      background: '../../../assets/imgs/hogwarts.png'
    },
    {
      headline: 'Corra pela Liberdade',
      content: 'Entre no mundo das corridas clandestinas e sinta a adrenalina das ruas enquanto você compete por respeito, poder e velocidade em Need for Speed.',
      logo: '../../../assets/imgs/logo-needforspeed.png',
      background: '../../../assets/imgs/needforspeed.png'
    },
    {
      headline: 'Reviva a Aventura Épica dos Dinossauros',
      content: 'Explore o mundo de Jurassic World reimaginado em forma de LEGO com o humor característico da TT Games, explore a Isla Nublar enquanto revive cenas inesquecíveis do filme.',
      logo: '../../../assets/imgs/logo-lego.png',
      background: '../../../assets/imgs/lego.png'
    },
    {
      headline: 'Liberte o Guerreiro Interior',
      content: 'Prepare-se para desafios épicos e combates intensos. Domine habilidades únicas de cada personagem enquanto enfrenta adversários poderosos neste clássico jogo de luta.',
      logo: '../../../assets/imgs/logo-streetfight.png',
      background: '../../../assets/imgs/streetfight.png'
    },
    {
      headline: 'Explore, Construa, Sobreviva',
      content: 'Entre no mundo do Minecraft onde sua criatividade é o único limite. Explore paisagens infinitas, construa estruturas épicas e sobreviva às criaturas da noite.',
      logo: '../../../assets/imgs/logo-minecraft.png',
      background: '../../../assets/imgs/minecraft.png'
    }
    
  ];

  buttons = [
    { 
      class: 'hogwarts', 
      id: 'hogwarts' 
    },
    { 
      class: 'needforspeed', 
      id: 'needforspeed' 
    },
    { 
      class: 'lego', 
      id: 'lego' 
    },
    { 
      class: 'streetfight', 
      id: 'streetfight' 
    },
    { 
      class: 'minecraft', 
      id: 'minecraft' 
    },
    { 
      class: 'portal', 
      id: 'portal' 
    }
  ];

  currentSlide = 0;

  previousSlide = 0;

  private isBrowser: boolean;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startSlideShow();
    }
  }

  startSlideShow() {
    this.nextSlide();
  }

  nextSlide() {

    setTimeout(() => {
        this.previousSlide = this.currentSlide;
  
    }, 4700);

    this.currentSlide = (this.currentSlide + 1) % this.slides.length;

    if (this.isBrowser) {

      setTimeout(() => {
        if (document.readyState === 'complete') {
  
          this.nextSlide();
          
        }
      }, 5000);
    }
  }

  getSlideBackground(): any {

    return {
      'background-image': `url(${this.slides[this.currentSlide].background})`
    };

  }

  changeSlide(index: number) {

    this.currentSlide = index;
  }

}


