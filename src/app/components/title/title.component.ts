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
    collage2: string = "../../../assets/photo 1g.png";
    imageChange2(event: any){
        this.collage2 = event.target.src;
    }
    collage3: string = "../../../assets/photo 1h.png";
    imageChange3(event: any){
        this.collage3 = event.target.src;
    }
    collage4: string = "../../../assets/photo 1m.webp";
    imageChange4(event: any){
        this.collage4 = event.target.src;
    }
  
}
