import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novidades.component.html',
  styleUrl: './novidades.component.css',
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class NovidadesComponent {


  blog = [
    { 
      titulo: 'Compre no seu próprio ritmo com o parcelamento na PlayStation Store',
      content: 'Estamos muito animados por trazer uma grande novidade para nossa comunidade no Brasil. A partir de agora, nossos consumidores podem realizar comprar na PlayStation Store com...',
      image: '../../../assets/img/nov1.png',
      autorimage: '../../../assets/img/nov1.png',
      nome: 'Miguel Cunha',
      status: 'Senior Director, PlayStation LATAM',
      data: 'jun 27, 2024',
    },
    { 
      titulo: 'Jogos mensais de julho para mebros PlayStation Plus: Bordelands 3, NHL 24, Among Us',
      content: 'O mês de julho chega à PlayStation Plus com um bilhão de armas, tacadas em discos e a ameaça de sabotagem na seleção de jogos mensais. A partir de 2 de julho, todos os membros da PlayStation...',
      image: '../../../assets/img/nov9.png',
      autorimage: '../../../assets/img/nov9.png',
      nome: 'Adam Michel',
      status: 'Director, Content Acquisition & Operations, SIE',
      data: 'jun 26, 2024',
    },
    { 
      titulo: 'Anunciamos as datas do beta de Concord, acesso antecipado ao Beta começará em 12 de julho',
      content: 'Dos primeiros protótipos de gameplay até a preparação do jogo antes do lançamento em agosto, testar Concord todos os dias tem sido determinante no desenvolvimento dele e o ponto central da ...',
      image: '../../../assets/img/nov2.png',
      autorimage: '../../../assets/img/nov2.png',
      nome: 'Bethany Hulse',
      status: 'Community Development Lead, Firewalk',
      data: 'jun 27, 2024',
    },
    { 
      titulo: 'Zenless Zone Zero chega para ps5 em 4 de julho, confira detalhes sobre o combate.',
      content: 'Olá, Proxies! Saudações da equipe de desenvolvimento do Zenless Zone Zero, Eu sou Zhenyu Li, o produtor do Zenless Zone Zero. Depois de 4 anos de desenvolvimento, 3 rodadas de testes...',
      image: '../../../assets/img/nov3.png',
      autorimage: '../../../assets/img/nov3.png',
      nome: 'Zhenyu Li',
      status: 'Producer, Hoyoverse',
      data: 'jun 28, 2024',
    },
    { 
      titulo: 'Jogada da Semana: Hogwarts Legacy',
      content: 'A comunidade ´tão talentosa que não foi preciso nem um único feitiço pra conjurar as imagens dessa semana!',
      image: '../../../assets/img/nov6.png',
      autorimage: '../../../assets/img/nov6.png',
      nome: 'Thaíla Correia',
      status: 'Digital Media Manager, PlayStation Brasil',
      data: 'jun 28, 2024',
    },
    { 
      titulo: 'Dragon Ball: Sparking Zero - Revelamos o gameplay do modo Battle Training',
      content: ' Os jogos de Dragon Ball têm marcado os consoles da última década com o lançamento das séries Xenoverse, Kakarot e FighterZ. Agora, em 2024, os fãs de Dragon Ball se reuniram pra comemorar o ...',
      image: '../../../assets/img/nov4.png',
      autorimage: '../../../assets/img/nov4.png',
      nome: 'Zanda Ra',
      status: 'Associate Brand Manager, Entertainment America',
      data: 'jul 01, 2024',
    },
    { 
      titulo: 'A Rodada 1 da Gran Turismo World Series de 2024 em Montreal, o sábado, 6 de julho',
      content: 'Após as emocionantes Classificatórias Online em abril e maio, os melhores pilotos de Gran Turismo do mundo foram selecionados para participar de quatro eventos ao vivo, que ocorrem de agora a...',
      image: '../../../assets/img/nov5.png',
      autorimage: '../../../assets/img/nov5.png',
      nome: 'Ken Chan',
      status: 'Sr Brand Manager, SIE',
      data: 'jul 03, 2024',
    },
    { 
      titulo: 'Jogada da Semana: Dia dos Namorados',
      content: 'O clima de romance ajudou a comunidade a capturar imagens inesquecíveis, lembrança dessa data em que o nosso coração bate mais forte para aquela pessoa especial!',
      image: '../../../assets/img/nov6.png',
      autorimage: '../../../assets/img/nov6.png',
      nome: 'Thaíla Correia',
      status: 'Digital Media Manager, PlayStation Brasil',
      data: 'jun 21, 2024',
    },
    { 
      titulo: 'Tudo que você precisa saber sobre a Temporada 4 Recarregada de Call of Duty: Modern Warfare III.',
      content: 'A bomba DNA explodiu na Usina Popov, liberando mutagênicos poderosos na atualização Temporada 4 Recarregada para Call of Duty: Modern Warfare III. Entre em batalh...',
      image: '../../../assets/img/nov7.png',
      autorimage: '../../../assets/img/nov7.png',
      nome: 'Daniel Noel',
      status: 'Writer, Activision',
      data: 'jun 24, 2024',
    },
    { 
      titulo: 'The First Descendant chega para PS5 e PS4 em 2 de julho, gameplay dos novos personagens revelado',
      content: 'Descendentes, após uma longa espera, the first descendant será finalmente lnaçado mundialmente em 2 de julho para PS5 e PS4! The firts descendant é um jogo de tiro e saque cooperativo online...',
      image: '../../../assets/img/nov8.png',
      autorimage: '../../../assets/img/nov8.png',
      nome: 'Beomjum Lee',
      status: 'The First Descendants Producer, Nexon Games',
      data: 'jun 26, 2024',
    },
    

  ];

}
