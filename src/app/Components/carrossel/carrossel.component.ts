
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, OnDestroy {
  slides = [
    { content: 'Slide 1' },
    { content: 'Slide 2' },
    { content: 'Slide 3' }
  ];
  currentSlide = 0;
  private timeoutId: any;

  ngOnInit(): void {
    this.nextSlide();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  nextSlide() {
    this.timeoutId = setTimeout(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 2000);
  }
}