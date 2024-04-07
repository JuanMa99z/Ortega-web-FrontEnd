import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (1).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul.webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (2).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (4).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (5).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (6).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (7).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (8).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul (9).webp' },
    { url: '../assets/Certificado Diploma de Aprovechamiento Formal Azul(10).webp' },
    // Agrega más imágenes aquí
  ];

  isFullScreen = false;
  currentImageIndex = 0;
  

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  openFullScreen(imageIndex: number) {
    this.currentImageIndex = imageIndex;
    this.isFullScreen = true;
  }

  changeSlide(direction: number) {
    this.currentImageIndex += direction;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    } else if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  closeFullScreen() {
    this.isFullScreen = false;
  }
}