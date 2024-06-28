import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'assets/img1.jpg', thumbnail: 'assets/thumb1.jpeg', content: 'Slide 1' },
    { image: 'assets/img2.jpg', thumbnail: 'assets/thumb2.jpeg', content: 'Slide 2' },
    { image: 'assets/img3.jpg', thumbnail: 'assets/thumb3.jpeg', content: 'Slide 3' },
  ];
  currentIndex = 0;
  transformStyle = '';
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTransformStyle();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateTransformStyle();
  }

  updateTransformStyle() {
    this.transformStyle = `translateX(-${this.currentIndex * 100}%)`;
  }
}