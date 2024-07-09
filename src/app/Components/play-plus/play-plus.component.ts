import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-play-plus',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './play-plus.component.html',
  styleUrl: './play-plus.component.css',
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PlayPlusComponent {

}
