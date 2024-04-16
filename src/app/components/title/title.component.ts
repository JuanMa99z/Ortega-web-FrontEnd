import { Component, OnInit,} from '@angular/core';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  collage1: string = "../../../assets/photo 1w.webp";
    imageChange(event: any){
        this.collage1 = event.target.src;
    }
    collage2: string = "../../../assets/photo 1g.webp";
    imageChange2(event: any){
        this.collage2 = event.target.src;
    }
    collage3: string = "../../../assets/photo 1h.webp";
    imageChange3(event: any){
        this.collage3 = event.target.src;
    }
    collage4: string = "../../../assets/photo 1m.webp";
    imageChange4(event: any){
        this.collage4 = event.target.src;
    }

    images = [ ];
  
    isFullScreen = false;
    isFullScreen2 = false;
    isFullScreen3 = false;
    isFullScreen4 = false;

    currentImageIndex = 0;
    
  
    get currentImage() {
      return this.images[this.currentImageIndex];
    }
  
    openFullScreen(imageIndex: number) {
      this.currentImageIndex = imageIndex;
      this.isFullScreen = true;
    }
    openFullScreen2(imageIndex: number) {
      this.currentImageIndex = imageIndex;
      this.isFullScreen2 = true;
    }
    openFullScreen3(imageIndex: number) {
      this.currentImageIndex = imageIndex;
      this.isFullScreen3 = true;
    }
    openFullScreen4(imageIndex: number) {
      this.currentImageIndex = imageIndex;
      this.isFullScreen4 = true;
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
    closeFullScreen2() {
      this.isFullScreen2 = false;
    }
    closeFullScreen3() {
      this.isFullScreen3 = false;
    }
    closeFullScreen4() {
      this.isFullScreen4 = false;
    }
  }
  
 
// import { Component, ElementRef, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-title',
//   templateUrl: './title.component.html',
//   styleUrls: ['./title.component.css']
// })
// export class TitleComponent implements OnInit {
// closeFullScreen() {
// throw new Error('Method not implemented.');
// }

//   constructor(private elementRef: ElementRef) { }

//   ngOnInit(): void {
//     // Get the image elements
//     const images = this.elementRef.nativeElement.querySelectorAll('.image img');

//     // Add click event listener to each image
//     images.forEach((img: any) => {
//       img.addEventListener('click', () => {
//         this.openModal(img);
//       });
//     });

//     // Get the <span> element that closes the modal
//     const closeBtn = this.elementRef.nativeElement.querySelector('.close');
//     if (closeBtn) {
//       closeBtn.addEventListener('click', () => {
//         this.closeModal();
//       });
//     }
//   }

//   openModal(img: HTMLImageElement) {
//     const modal = this.elementRef.nativeElement.querySelector('#myModal');
//     const modalImg = this.elementRef.nativeElement.querySelector('#img01');
//     const captionText = this.elementRef.nativeElement.querySelector('#caption');

//     if (modal && modalImg && captionText) {
//       modal.style.display = "block";
//       modalImg.src = img.src;
//       captionText.innerHTML = img.alt;
//     }
//   }

//   closeModal() {
//     const modal = this.elementRef.nativeElement.querySelector('#myModal');
//     if (modal) {
//       modal.style.display = "none";
//     }
//   }

//   collage1: string = "../../../assets/photo 1w.webp";
//   imageChange(event: any) {
//     this.collage1 = event.target.src;
//   }

//   collage2: string = "../../../assets/photo 1g.png";
//   imageChange2(event: any) {
//     this.collage2 = event.target.src;
//   }

//   collage3: string = "../../../assets/photo 1h.png";
//   imageChange3(event: any) {
//     this.collage3 = event.target.src;
//   }

//   collage4: string = "../../../assets/photo 1m.webp";
//   imageChange4(event: any) {
//     this.collage4 = event.target.src;
//   }
// }
