import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  visibility : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 0) { 
      this.visibility = true;
    } else {
      this.visibility = false;
    }
  }
}
