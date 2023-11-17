import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  visibility : boolean = false;

  constructor() { }

  @HostListener('window: scroll') 
  onWindowScroll() {
    this.visibility = (window.scrollY > 0)? true : false;
  }
}
