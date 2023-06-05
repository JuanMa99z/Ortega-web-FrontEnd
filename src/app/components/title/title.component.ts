import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url: string = "../../../assets/FnvC5O-XEAMrGmq.jpeg";
    imageChange(event: any){
        this.url = event.target.src;
    }
  
}
