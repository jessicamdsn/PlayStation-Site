import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

import Swiper from 'swiper';


@Component({
  selector: 'app-carrossel-loja',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carrossel-loja.component.html',
  styleUrl: './carrossel-loja.component.css',

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  animations: [

    trigger('animacaoPiscar', [

      state('inicio', style({
        opacity: 1
      })),

      state('sumir', style({
        opacity: 0
      })),

      
      transition('inicio => sumir', animate('0s ease-out')),
      transition('sumir => inicio', animate('500ms ease-in'))

    ])
  ]
})
export class CarrosselLojaComponent  {

  slides = [
    {
      headline: 'Console PlayStation 5',
      content: 'Descubra a mais nova geração de jogos incríveis para PlayStation.',
      img: '../../../assets/loja/ps5.png',
    },

    {
      headline: 'Controle sem fio DualSense™',
      content: 'Mergulhe na experiência de jogo com um controle que suporta resposta tátil e efeitos de gatilho dinâmicos.',
      img: '../../../assets/loja/controle-dualsense.png',
    },

    {
      headline: 'Headset sem fio PULSE Elite™',
      content: 'Ouça áudio de jogos mais realista neste modelo de headset confortável e equipado com microfone retrátil e bateria embutida de longa duração',
      img: '../../../assets/loja/headset-pulse.png',
    },

    {
      headline: 'Fones de ouvido sem fio PULSE Explore™',
      content: 'Curta sons realistas aonde quer que os jogos levem você com um design portátil equipado com microfones ocultos e um estojo de carregamento para acompanhar.',
      img: '../../../assets/loja/earbuds-pulse.png',
    },

    {
      headline: 'Controle sem fio DualSense Edge™',
      content: 'Entre com tudo nos jogos com botões remapeáveis, gatilhos e controles ajustáveis, diferentes capas para controle analógico, botões traseiros e mais.',
      img: '../../../assets/loja/controle-semfio.png',
    },

    {
      headline: 'Controle Access™',
      content: 'Um controle personalizável para PlayStation®5 criado para tornar os jogos mais acessíveis.',
      img: '../../../assets/loja/controle-access.png',
    },

    {
      headline: 'Tampas do console PS5',
      content: 'Personalize seu console PlayStation 5 ou PlayStation 5 Edição Digital com uma variedade vibrante de novas opções de cores.',
      img: '../../../assets/loja/ps5-tampa.png',
    },

    {
      headline: 'Controle de mídia',
      content: 'Conveniência e um layout intuitivo para você controlar filmes, serviços de streaming e muito mais no seu console PS5.',
      img: '../../../assets/loja/controle-media.png',
    },

    {
      headline: 'Câmera HD',
      content: 'Adicione sua própria imagem aos vídeos de jogabilidade e transmissões com uma captura suave, nítida e Full HD.',
      img: '../../../assets/loja/camera-hd.png',
    },
    
  ];
  
currentSlide = 0;


  changeSlide(index: number) {

    this.currentSlide = index;
    this.iniciarAnimacao()
  }

  estadoAnimacao = 'inicio';

  iniciarAnimacao() {

    this.estadoAnimacao = 'sumir';

    setTimeout(() => {

      this.estadoAnimacao = 'inicio';
    }, 100);
  }

  
}




