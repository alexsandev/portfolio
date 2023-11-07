import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  visibility : boolean = false;
  optionsVisibility : boolean = false;
  innerWidth : number = 0;

  constructor() { }

  openMenu(){
    this.optionsVisibility = (this.optionsVisibility == false)? true : false;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window: resize')
  onResize() {
    this.innerWidth = window.innerWidth;
    this.optionsVisibility = false;
  }
}
