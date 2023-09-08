import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  showDescription: boolean = false;


  ngOnInit(): void {
  }
  toggleDescription() {
    this.showDescription = !this.showDescription
  
  }
}

