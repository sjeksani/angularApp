import { Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'plain-component-app',
  templateUrl: './plain.component.html',
  styleUrls: [ './plain.component.css' ]
})
export class PlainComponent implements OnInit {
  
@HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    if(this.isMouseMoveEnabled) {
      this.myNumber = e.clientX;
    }
  }

  isMouseMoveEnabled: boolean = false;
  myNumber: number = 0;

  ngOnInit() {

  }

  toggleMouseMove() {
    this.isMouseMoveEnabled = !this.isMouseMoveEnabled;
  }
}