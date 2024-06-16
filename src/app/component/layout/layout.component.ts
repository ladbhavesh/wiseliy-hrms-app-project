import { Component, Output, EventEmitter, OnInit, HostListener, Input } from '@angular/core';

// export interface SideNavToggle {
//   screenwidth: number;
//   collapsed: boolean;
// }

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  // isSidebarOpen: boolean = false;

  ngOnInit(): void {
  }

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }
  // closeSidebar() {
  //   this.isSidebarOpen = false;
  // }
}
