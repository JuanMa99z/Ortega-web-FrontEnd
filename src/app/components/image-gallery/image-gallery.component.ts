import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    { url: '../assets/Certificados.webp' },
    { url: '../assets/Certificados2.webp' },
    { url: '../assets/Certificados3.webp' },
    { url: '../assets/Certificados4.webp' },
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