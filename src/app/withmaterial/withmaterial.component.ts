import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'with-material-app',
  templateUrl: './withmaterial.component.html'
})
export class WithMaterialComponent implements OnInit  {
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